import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import jsonServer from 'json-server'
import tcpPortUsed from 'tcp-port-used'

import { XMLHttpRequest } from 'xmlhttprequest';
global.XMLHttpRequest = XMLHttpRequest;

global.inTest = true ;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;

configure({ adapter: new Adapter() });

var localStorageMock = (function() {
  var store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// debug mode VS quiet output
console.log = () => {}

/*
// deprecated - use json-server instead
Object.defineProperty(window, 'fetch', { value: function(url,options,param)
   {
      console.log("fetching",url,options,param);
   }
});
*/

tcpPortUsed.check(5555).then((inUse) => {

   //console.log("checked port",inUse)

   if(!inUse)
   {

      const server = jsonServer.create()
      const router = jsonServer.router('src/tests/data.json')
      const middlewares = jsonServer.defaults()

      server.use(middlewares)
      server.use(router)
      server.listen(5555, () => {
         console.log('JSON Server is running')
      })
   }
})
