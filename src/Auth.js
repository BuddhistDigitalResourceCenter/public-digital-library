import auth0 from 'auth0-js';
import history from "./history"
import store from "./index"
import * as ui from "./state/ui/actions"
import {auth} from "./routes"
import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import { Link } from 'react-router-dom';
import {top_right_menu} from './components/App';

import bdrcApi from './lib/api';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage,faUserCircle,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'


var tokenRenewalTimeout;

function scheduleRenewal() {
  var token = localStorage.getItem('expires_at')
  if(!token) return
  var expiresAt = JSON.parse(token) - 5*60*1000 ;
  var delay = expiresAt - Date.now();
  console.log("delay",delay)
  if (delay > 0) {
    tokenRenewalTimeout = setTimeout(function() {
      renewToken();
    }, delay);
  }
}

function renewToken() {
  if(auth && auth.auth1) auth.auth1.checkSession({},
    function(err, result) {
      if (err) {
        console.log("renew token error",err);
      } else {
      console.log("renew token ok!",result)
        setSession(result);
      }
    }
  );
}

function setSession(authResult) {
  // Set the time that the Access Token will expire at
  var expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );
  localStorage.setItem('access_token', authResult.accessToken);
  localStorage.setItem('id_token', authResult.idToken);
  localStorage.setItem('expires_at', expiresAt);
  scheduleRenewal();
}

window.addEventListener('load', function() {
  // ...
  scheduleRenewal();
});


export default class Auth {

   auth1 : WebAuth ;
   iiif:{};
   api:{};


  getProfile(cb) {
    let tO = setInterval( () => {
      console.log("getP",this.auth1)
      if(this.auth1)  {
        clearInterval(tO);
        var token = localStorage.getItem('access_token')
        if(token) this.auth1.client.userInfo(token, (err, profile) => {
          if (profile) {
            this.userProfile = profile;
          }
          cb(err, profile);
        });
      }
    }, 100);
  }


  async setConfig(config,iiif,api)
  {
     this.auth1 = new auth0.WebAuth(config)
     console.log("auth1",this.isAuthenticated())
     this.iiif = iiif
     this.api = api         
     

     if(this.isAuthenticated() && iiif && api) {
          
         try{
            let cookie = await api.getURLContents(iiif.endpoints[iiif.index]+"/setcookie",false)
            console.log("cookie",cookie)
         }
         catch(e)
         {
          console.error("ERROR with cookie",e)
         }
     }
  }

  login(redirect) {
     // console.log("auth1",this.auth1,auth0)
    console.log("redirect",redirect)
    if(redirect) localStorage.setItem('auth0_redirect', JSON.stringify(redirect));
    else localStorage.setItem('auth0_redirect', '/');
    this.auth1.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.setConfig.bind(this)
    this.getProfile = this.getProfile.bind(this);
  }

  handleAuthentication() {
    this.auth1.parseHash(async (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        let redirect = JSON.parse(localStorage.getItem('auth0_redirect'))
        if(!redirect) redirect = '/'
        history.replace(redirect);
        //store.dispatch(ui.loggedIn())
      } else if (err) {
        history.replace('/');
        console.log(err);
      }
    });
  }

  async setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);


    console.log("session")
    if(this.isAuthenticated() && this.iiif && this.api) {
      try {
         let cookie = await this.api.getURLContents(this.iiif.endpoints[this.iiif.index]+"/setcookie",false)
         console.log("cookie",cookie)
      }
      catch(e)
      {
         console.error("ERROR with cookie",e)
      }
    }

  }

  logout(redirect:{}|string='/', delay:number=1000) {
     setTimeout(((iiif,api) => async () => {
         try {
            if(this.isAuthenticated()) {
              let token = localStorage.getItem('id_token');
              let cookie = await api.getURLContents(iiif.endpoints[iiif.index]+"/setcookie",false,null,null,false,"bdrc-auth-token="+token)
              console.log("unset cookie",cookie)
            }
         }
         catch(e)
         {
            console.error("ERROR with cookie",e,localStorage.getItem('id_token'))
         }

         // Clear Access Token and ID Token from local storage
         localStorage.removeItem('access_token');
         localStorage.removeItem('id_token');
         localStorage.removeItem('expires_at');
         // navigate to previous route if any
         history.replace(redirect);
         store.dispatch(ui.logEvent(false))


        clearTimeout(tokenRenewalTimeout);
     })(this.iiif,this.api),delay)
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let item = localStorage.getItem('expires_at')
    if(!item) return false;
    let expiresAt = JSON.parse(item);
    return new Date().getTime() < expiresAt;
  }



}


/*
export default class Auth {
  auth0 = new auth0.WebAuth( ... );

  login() {
    this.auth0.authorize();
  }

  constructor() {
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);
      this.handleAuthentication = this.handleAuthentication.bind(this);
      this.isAuthenticated = this.isAuthenticated.bind(this);
   }

   handleAuthentication() {
     this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
           console.log("authRes",authResult)
         this.setSession(authResult);
         history.replace('/');
        } else if (err) {
         history.replace('/');
         console.log(err);
        }
     });
   }

   setSession(authResult) {
     // Set the time that the Access Token will expire at
     let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
     localStorage.setItem('access_token', authResult.accessToken);
     localStorage.setItem('id_token', authResult.idToken);
     localStorage.setItem('expires_at', expiresAt);
     // navigate to the home route
     history.replace('/');
   }

   logout() {
     // Clear Access Token and ID Token from local storage
     localStorage.removeItem('access_token');
     localStorage.removeItem('id_token');
     localStorage.removeItem('expires_at');
     // navigate to the home route
     history.replace('/');
     store.dispatch(ui.logEvent(false))
   }

   isAuthenticated() {
     // Check whether the current time is past the
     // Access Token's expiry time
     let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
     return new Date().getTime() < expiresAt;
   }

}
*/








type TTState = {
  endpoint:string,
  profile:{},
  response:string
}

export class TestToken extends Component<TTState> {  

  constructor(props) {
    super(props);
    this.state = { endpoint:"" }
  }
  
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    //console.log("profile",profile)

    let isAuth = auth.isAuthenticated()


    return  <div id="TestToken">
        {!isAuth && <IconButton onClick={(e) => { auth.login(history.location) }} title="Log in">
            <FontAwesomeIcon style={{fontSize:"28px"}} icon={faUserCircle} />
        </IconButton> }
        {isAuth && <IconButton onClick={(e) => { auth.logout(history.location) }} title="Log out">
            <FontAwesomeIcon style={{fontSize:"28px"}} icon={faSignOutAlt} />
        </IconButton>  }
        
        <FormControl className="FCTT">
            <TextField        
              helperText={!isAuth?"You are not logged in.":"Logged in" + (profile.name?" as "+profile.name+"":"")+ "."}
              id="standard-name"
              label="Endpoint"
              fullWidth
              value={this.state.endpoint}
              onChange={ (e) => {
                this.setState({...this.state,endpoint:e.target.value})
              }} 
              onKeyPress={ (e) => { if (e.key === 'Enter') {                  
                const api = new bdrcApi();
                let getContent = async () => {
                  let test = await api.getURLContents(this.state.endpoint)                  
                  this.setState({ ...this.state, response:test})
                }
                getContent();
                this.setState({...this.state, response:"" })
              }}}
            />                                    
        </FormControl>

        { this.state.response && <h2><pre>{this.state.endpoint}</pre></h2>}
        { this.state.response && this.state.response !== "" && <pre>{this.state.response}</pre> }
    </div> ;
  }
}













type State = {
   gender:string,
   region:string,
   affiliation:string,
   interest:string,
   profile:{}
}
export class Profile extends Component<State> {  

  constructor(props : Props) {
    super(props);
    this.state = { gender:"", region:"",affiliation:"",interest:"" }
  }
  
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    console.log("profile",profile)
    let message = "Getting user info..."
    if(!profile || !Object.keys(profile).length) {
      if(!auth.isAuthenticated()) { 
        //message = <span>Please <a onclick={this.props.auth.login(this.props.history.location)}>log in</a></span>
        message = "Not logged in... Redirecting"
        this.tO = setTimeout(() => { 
          window.location.href = "/" 
        }, 1500)
        
      }
      return <div className="profile-container">{message}</div>
    }
    else {
        if(this.tO) clearTimeout(this.tO)

        let handleChange = (e,val1,val2) => {
          //console.log("e",e,val1,val2)
          this.setState({...this.state,[e.target.name]:e.target.value})
        }

        return (
          <div className="profile-container">
            <div className="profile-area">
              <h1><img src={profile.picture} alt="profile" />{profile.name}</h1>
              { /*}
              <Panel header="Profile picture: ">
                <img src={profile.picture} alt="profile" /> 
                <div>
                  <ControlLabel><Glyphicon glyph="user" />Nickname: </ControlLabel>
                  <h3 style={{display:"inline-block"}}>{profile.nickname}</h3>
                </div>
                <pre>{JSON.stringify(profile, null, 2)}</pre>
              </Panel> 
              */}
              <form autoComplete="off">
                <FormControl className="FC">
                  <InputLabel htmlFor="gender">Gender</InputLabel>
                  <Select
                    value={this.state.gender}
                    onChange={handleChange}
                    inputProps={{ name: 'gender', id: 'gender'}}
                  >
                    <MenuItem value={"male"}>Male</MenuItem>
                    <MenuItem value={"female"}>Female</MenuItem>
                    <MenuItem value={"no-answer"}>Prefer not to answer</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="FC">
                  <InputLabel htmlFor="region">Cultural Region</InputLabel>
                  <Select
                    value={this.state.region}
                    onChange={handleChange}
                    inputProps={{ name: 'region', id: 'region'}}
                  >
                    <MenuItem value={"kham"}>Kham</MenuItem>
                    <MenuItem value={"amdo"}>Amdo</MenuItem>
                    <MenuItem value={"u-tsang"}>U-tsang</MenuItem>
                    <MenuItem value={"other"}>Other</MenuItem>
                  </Select>
                </FormControl>
                {/* <br/> */}
                <FormControl className="FC">
                  <InputLabel htmlFor="region">Affiliation</InputLabel>
                  <Select
                    value={this.state.affiliation}
                    onChange={handleChange}
                    inputProps={{ name:"affiliation", id: 'affiliation'}}
                  >
                    <MenuItem value={".."}>...</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="FC">
                  <InputLabel htmlFor="region">Area of Interest</InputLabel>
                  <Select
                    value={this.state.interest}
                    onChange={handleChange}
                    inputProps={{ name:"interest", id: 'interest'}}
                  >
                    <MenuItem value={"..."}>...</MenuItem>
                  </Select>
                </FormControl>
              </form>
              <h5 onClick={ (e) => { 
                let url = store.getState().ui.profileFromUrl
                if(!url) url = "/"
                history.push(url)
              }}>Back</h5>
            </div>
          </div>
      );
    }
  }
}


