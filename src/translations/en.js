
const enTranslation = {
   punc: {
      point:".",
      colon:":",
      num:"{{num}}",
      lpar:"(",
      rpar:")"
   },
   home:{
      BUDA:"BUDA",
      titleBDRC1:"Buddhist",
      titleBDRC2:"Digital Resource",
      titleBDRC3:"Center",
      archives1:"The Buddhist",
      archives2:"Digital Archives",
      by:"by the Buddhist Digital Resource Center",
      subtitle:"A cooperative platform for expanding access to Buddhist literature. Explore the millions of pages of texts contributed by BDRC and its many partners.",
      message:"WELCOME TO THE BETA VERSION OF BUDA, BDRC's NEW LIBRARY!",
      submessage:"with new features, resources, and tools for faster and more in-depth research.",
      subsubmessage:"We welcome your feedback. Help us improve by sending bug reports, comments and suggestions to ",
      subsubmessage_afteremail:".",
      subsubmessage_account1:"All users, including users with existing accounts on tbrc.org, will need to ", 
      subsubmessage_account2:" for a free BDRC account for full access. Click on the ",
      subsubmessage_account3:" link above to create a new account.",
      subsubmessage_account4:"register",
      subsubmessage_account5:"register",
      subsubmessage_auth:"All users, including users with existing accounts on tbrc.org, will need to register for a free BDRC account for full access.",
      search:"Search",
      choose:"Choose language",
      start:"Start typing then select search language",
      new:"New Scans Released This Week"
   },
   types:{
      any:"Any",
      corporation:"Corporation",
      corporation_plural:"Corporations",
      etext:"Etext",
      etext_plural:"Etexts",
      item:"Item",
      item_plural:"Items",
      lineage:"Lineage",
      lineage_plural:"Lineages",
      person:"Person",
      person_plural:"Persons",
      place:"Place",
      place_plural:"Places",
      role:"Role",
      role_plural:"Roles",
      topic:"Topic",
      topic_plural:"Topics",
      work:"Work",
      work_plural:"Works",
      instance:"Version",
      instance_plural:"Versions",
      images:"Scans",
      volume:"Volume",
      volume_num:"Volume {{num}}",
      searchIn:"in {{type}}",
      product:"Collection",
      product_plural:"Collections",
      scan:"Scan",
      scan_plural:"Scans",
      serial:"Series",
      match:"match"
   },
   topbar:{
      about:"about us",
      search:"new search",
      login:"log in",
      register:"register",
      logout:"log out",
      profile:"profile",
      donate:"donate",
      closeEtext:"Close Etext",
      history:"Search history",
      bookmarks:"Bookmarks",
      results:"Search results for",
      instances:"versions of"
   },
   Lsidebar:{
      sortBy:{
         title:"Sort By {{by}} {{reverse}}"
      },
      title:"Refine your Search",
      collection:{
         title:"Collection"
      },
      datatypes:{
         title:"Data Types"
      },
      widgets:{
         unknown:"unknown",
         root: "In $t(types.instance)",
         tree: "Genre / Topic",
         relationInv: "Inverse Relation Type"
      },
      tags:{
         type: "Type",
         instanceOf: "$t(types.instance) Of",
         reset:"Reset filters",
         include:"Include results with",
         exclude:"Exclude results with"

      },
      activeF:{
         title:"Active Filters",
         remove:"Remove filter",
         reset:"Clear all filters"
      }
   },
   sort:{
      reverse:"Reverse Order",
      popu:"Popularity",
      closestM:"Closest Matches", 
      workT:"Work Title",
      personN:"Person Name", 
      yearB:"Year of Birth",
      placeN:"Place Name",
      yearP:"Year of Publication",
      title:"Title",
      numberMC:"Number of Matching Chunks",
      lastS:"Release Date",
      reverseS:"(reverse order)"
   },
   copyright:{
      open:"Open Access",
      fairUse:"Fair Use - Access to 20 first/last pages",
      tempo:"Temporarily Restricted",
      quality:"Restricted by Quality",
      sealed:"Sealed",
      view:"View Scans",
      scans:"Scans Available",
      provided:"Data provided by {{- provider}}"
   },
   prop:{
      "tmp:bestMatch":"Best Match",
      "tmp:relationType":"Relation Type",
      "tmp:relationType_plural":"Relation Types",
      "tmp:nameMatch":"Name Match",
      "tmp:nameMatch_plural":"Name Matches",
      "tmp:otherTitle":"Other Title",
      "tmp:otherTitle_plural":"Other Titles",
      "tmp:otherName":"Other Name",
      "tmp:otherName_plural":"Other Names",
      "tmp:otherMatch":"Other Match ({{count}})",
      "tmp:otherMatch_plural":"Other Matches ({{count}})",
      "tmp:originalRecord":"Original Record",
      "tmp:imageVolumeId":"Image Volume Id",
      "tmp:workHasTranslationInCanonicalLanguage":"Canonical Translation",
      "tmp:workHasTranslationInCanonicalLanguage_plural":"Canonical Translations",
      "tmp:workHasTranslationInNonCanonicalLanguage":"Translation",
      "tmp:workHasTranslationInNonCanonicalLanguage_plural":"Translations",
      "tmp:entityScore":"Entity Score",
      "tmp:instanceLabel":"$t(types.instance) Label",
      "tmp:dimensions":"Dimensions",
      "tmp:publisherName":"Publisher",
      "tmp:forWork":"For Work",
      "tmp:provider":"Provider",
      "tmp:author":"Author",
      "bdo:note":"Note",
      "bdo:note_plural":"Notes",
      "tmp:assetAvailability":"Asset Availability",
      "tmp:textMatch":"Text Match",
      "bdo:workHasInstance":"Has $t(types.instance)",
      "bdo:instanceOf":"$t(types.instance) Of",
      "tmp:hasOpen":"$t(copyright.open)",
      "bdo:personTeacherOf":"Student",
      "bdo:personTeacherOf_plural":"Students",
      "bdo:personStudentOf":"Teacher",
      "bdo:personStudentOf_plural":"Teachers",
      "bdo:biblioNote":"Note",
      "bdo:biblioNote_plural":"Notes",
      "tmp:propHasScans":"Scans",
      "bdo:CorporationMemberNotSpecified":"Member",
      "tmp:propHasEtext":"Etext",
      "bf:identifiedBy":"Identified By",
      "rdfs:subClassOf":"Subclass Of",
      "tmp:isCreator":"Is Creator",
      "tmp:hasImage":"Has Scans",
      "tmp:hasEtext":"Has Etext",
      "unspecified":"Unspecified",
      "true":"True",
      "bdo:eTextIsVolume": "Vol",
      "bdo:eTextInVolume": "Vol",
      "tmp:TibetanBuddhistTexts":"Tibetan Buddhist Texts",
      "tmp:BonpoTexts":"Bonpo Texts",
      "tmp:SanskritTexts":"Sanskrit Texts",
      "tmp:ChineseTexts":"Chinese Texts",
      "tmp:SoutheastAsianTexts":"Southeast Asian Texts",
      "tmp:multiLingualTexts":"Buddhist Canonical Texts (multi-lingual)",
      "tmp:Bibliographies":"Bibliographies",
      "tmp:Maps":"Maps",
      "tmp:BuddhistArt":"Buddhist Art",
      "tmp:other":"Other",
      "tmp:instanceOfWork":"Version of Work",
      "tmp:lastSync":"Release Date",
      "tmp:versionType":"Version Type",
      "tmp:standalone":"Standalone",
      "tmp:partOfVersion":"Part of another Version",
      "tmp:inRootInstance":"Instance",
      "tmp:associatedCentury":"Century",
      "tmp:associatedAuthorCentury":"Author's Century"
   },
   result:{
      open:"Open",
      resource:"resource",
      in:"in",
      available:"Resource available at",
      inRootInstance:"In",      
      workBy:"By",
      eTextIsForWork:"For Work",
      year:"Year",
      inInstance:"In $t(types.instance)",
      inInstancePart:"In $t(types.instance) Part",
      expandC:"Expand Context",
      hideC:"Hide Context",
      openE:"Open Etext",
      openEin:"Open in Etext",
      hasInstance:"Has {{count}} $t(types.instance)",
      hasInstance_plural:"Has {{count}} $t(types.instance_plural)",
      assoc:"{{type}} associated with: <res href='/show/{{- rid}}'>{{- name}}</res>",
      moreres:"More {{txt}} are cataloged, do you want to see them?"
   },
   index:{
      openViewer:"Open in Viewer",
      mainInfo:"Main Information",
      outline:"Outline",
      related:"Related Works",
      relatedR:"Related Resources",
      extended:"Extended Information",
      userP:"User Profile",
      personalI:"Personal Information",
      relatedM:"Collection Members",
      relatedS:"Serial Members"
   },
   user:{
      photo:{ 
         hover:"Update profile picture",
         label:"Profile Picture Url",                                
         helperText:"Paste a direct link to an existing picture",
         error:"Error: cannot find image, please check your link"
      },      
      edit:{
         add:"Add another value for property",
         del:"Delete property",
         set:"Modify value",
         hide:"Set private",
         show:"Set public",
      },
      email:"Email",
      name:"Name",
      gender:"Gender",
      area:"Area of Interest",
      region:"Cultural Region (if in China)",
      password:"Change Password",
      options:{
         male:"Male",
         female:"Female",
         noanswer:"Prefer not to answer",
         outside:"Not applicable",
         kham:"Kham",
         amdo:"Amdo",
         uTsang:"U-tsang",
         other:"Other",

      },
      get:"Getting user info...",
      redirect:"Not logged in... Redirecting",
      agree:"I agree to receive emails from BDRC",
      update:"Update",
      updating:"Updating...",
      errors:{
         server1:"Server error",
         server2:"Please try again later",
         email:"Wrong email format"
      }
   },
   popover:{
      moreInfo:"More Information",
      source:"Source",
      source_plural:"Sources",
      notes:"Notes",
      discussion:"Discussion",
      lang:"Language/Script",
      otherLang:"In Other Language",
      otherLang_plural:"In Other Languages",
      calendar:"In Calendar",
      gregorian:"Gregorian Calendar",
      imported:"This record was imported from",
      seeO:"See original"
   },
   misc:{
      colon:":",
      datatype:"Back to datatypes",
      has:"Has",
      or:"or",
      seeA:"see all",
      seeAnum:"see all {{count}}",
      browse:"browse all",
      show:"Show all",
      seeMore:"See More",
      readM:"Read more",
      hide:"Hide",
      preview:"preview",
      permalink:"Permalink",
      clipboard:"Url has been copied to clipboard.\nCTRL+V to paste",
      from:"from",
      in:"in",
      of:"of",
      please:"Please",
      seeO:"See on",
      ord:"{{num,ordinal}} c.",
      all:"All",
      allC:"All ({{count}})",
      allT:"{{type}} ({{count}})"
   },
   lang:{
      en:"English",
      fr:"French",
      zh:"Chinese",
      bo:"Tibetan",
      km:"Khmer",
      lg:"Language",
      search:{
         zh:"Chinese",
         zhHant:"Chinese (Traditional)",
         zhHans:"Chinese (Simplified)",
         zhLatnPinyin:"Chinese (Pinyin)",
         zhXPhonEn:"Chinese (Phonetic)",
         saXIast:"Sanskrit (IAST)",
         saXNdia:"Sanskrit (Lenient)",
         saDeva:"Sanskrit (Devanagari)",
         incXNdia:"Indic (Sanskrit or Pāli, Lenient)",
         en:"English",
         pi:"Pāli",
         piXIast:"Pāli (Rom.)",
         bo:"Tibetan (Unicode)",
         boXEwts:"Tibetan (Wylie)",
         boXEwtsLower:"Tibetan (lower case, Wylie)",
         boXDts:"Tibetan (DTS)",
         boAlaLc:"Tibetan (ALA-LC)",
         other:"Other",
         km:"Khmer",
         inc:"Indic",
         sa:"Sanskrit",
         hans:"Simplified",
         hant:"Traditional",
         deva:"Devanagari",
         newa:"Newari",
         sinh:"Sinhalese",
         latn:"Latin",
         xEwts:"Wylie",
         xDts:"DTS",
         alalc97:"ALA-LC",
         latnPinyin:"Pinyin"
      },
      tip:{
         zh:"Chinese",
         zhHant:"Chinese in traditional characters",
         zhHans:"Chinese in simplified characters",
         zhLatnPinyin:"Chinese in Pinyin",
         en:"English",
         km:"Khmer",
         saXIast:"Sanskrit transliterated in IAST",
         saDeva:"Sanskrit in Devanagari",
         bo:"Tibetan in Unicode",
         boXEwts:"Tibetan transliterated in Wylie"
      },
      langscript:{
         zh:"Chinese",
         en:"English",
         pi:"Pali",
         bo:"Tibetan",
         inc:"Indic",
         km:"Khmer",
         sa:"Sanskrit",
         hans:"Simplified",
         hant:"Traditional",
         deva:"Devanagari",
         newa:"Newari",
         sinh:"Sinhalese",
         latn:"Latin",
         xEwts:"Wylie",
         xDts:"DTS",
         xIast:"IAST",
         alalc97:"ALA-LC",
         latnPinyin:"Pinyin"
      }
   },
   search:{
      page:"page",
      result:"{{count}} Result",
      result_plural:"{{count}} Results",
      filters:{
         noresults:"No result for {{keyword}} [{{language}}] {{type}}",
         noresultsAsso:"No result associated with {{keyword}} {{type}}"
      },
      seeO:"See results in other data types",
      backToW:"Back to Works"
   },
   Rsidebar:{
      title:"Display Preferences",
      UI:{
         title:"UI Language"
      },
      results:{
         title:"Results Preferred Language"
      },
      priority:{
         title:"Data Language Priority",
         help:"Please select the languages you want to have the data displayed in, by order of priority (you do not need to list them all)",
         user:"User Defined",
         more:"More"
      }
   },
   Asidebar:{
      title:"Annotations"
   },
   resource:{
      back:"Go back to search page",
      browse:"Browse associated resources",      
      openViewer:"Open in Etext Viewer",
      openVolViewer:"Open Vol.{{VolN}} in Etext Viewer", /*Sec.{{TxtN}}",*/
      download:"Download",
      downloadAs:"Download as",
      version:"{{format}} version",
      exportData:"Export {{data}}",
      exportDataAs:"Export {{data}} as {{format}}",
      settings:"Language Settings",
      toggle:"Toggle annotations panel",
      view:"View",
      metadata:"metadata",
      manifest:"IIIF manifest",
      page:"img. {{num}}",
      volume:"v. {{num}}",
      availableScans:"available scans for this page",
      about:"About {{resLabel.value}}",
      wAbout:"Work about {{resLabel.value}}",
      wAbout_plural:"Works about {{resLabel.value}}",
      createdB:"Created by {{resLabel.value}}",
      printedA:"Version printed at {{resLabel.value}}",
      printedA_plural:"Versions printed at {{resLabel.value}}",
      extended:"Extended Properties",
      showD:"Show Details",
      hideD:"Hide Details",
      searchO:"Search in outline",
      start:"Start search",
      reset:"Reset search",
      otherN:"Load non-matching subparts",
      scanF:"Scans for",
      etextF:"Etext for",
      openR:"Open Record",
      loadP:"Load Previous Pages",
      sameL:"Link to External Resource",
      sameL_plural:"Links to External Resources",
      gener1pdf:"Generate PDF",
      gener2pdf:"Generating PDF...",
      gener3pdf:"Download PDF",
      gener1zip:"Generate ZIP",
      gener2zip:"Generating ZIP...",
      gener3zip:"Download ZIP",
      nbTrans:" ({{count}} translation)",
      nbTrans_plural:" ({{count}} translations)",
      openO:"Open on {{src}}",
      noT:"[no title]",
      browsE:"Browse",
      memberO:"Member of {{resLabel.value}}",
      memberO_plural:"Members of {{resLabel.value}}",
      unpag:"The pages of this etext may correspond to page in the original edition, but we cannot provide the exact mapping.",
      pageN:"p. {{num}}"
   },
   mirador:{
      return:"return to BUDA",
      browse:"browse collection",
      goto:"Go to img.",
      zoomIn:"zoom in",
      zoomOut:"zoom out",
      showI:"Show scans",
      fullscreen:"fullscreen",
      next:"next image",
      prev:"previous image",
      manip:"image manipulation",
      increaseFont:"Increase Etext font size",
      decreaseFont:"Decrease Etext font size",
      downloadE:"Download Etext"
   },
   access:{
      fairuse1:"BDRC <bold>restricts access</bold> to this work (only the first and last 20 images are available online) because the work is under <bold>copyright</bold>.",
      fairuse2:"Please contact",
      fairuse3:"for information about possibly accessing this work under fair use.",
      sealed:"BDRC <bold>restricts access</bold> to this work because it was provided to BDRC on the condition that we respect <bold>traditional restrictions</bold> applied to it. If you have received the proper transmission from a spiritual teacher to access this work or have other questions about how to access this work please contact",
      limited20:"Access limited to first & last 20 pages.",
      credentials:"if you have sufficient credentials to get access to all scans from this work.",
      notyet:"Images not yet available.",
      error:"An error occurred while trying to access the images.",
      generic:"BDRC has restricted access to this work in accordance with our access policies. You can read those policies here: <policies href='https://bdrc.io/access-policies/' target='_blank'>https://bdrc.io/access-policies/</policies>",
      OCR:"These etexts were created through OCR (optical character recognition), not manually input, and have not been edited. OCR for Tibetan script is not 100% perfect but it is accurate enough to create text that will enhance the BDRC database. We hope that etexts like these improve the discoverability and usefulness of the BDRC archive for you."
   },
   location:{
      beginV:"Begin volume: {{num}}",
      beginP:"Begin image: {{num}}",
      beginL:"Begin line: {{num}}",
      endV:"End volume: {{num}}",
      endP:"End image: {{num}}",
      endL:"End line: {{num}}"
   },
   footer:{
      BDRC: "Buddhist Digital Resource Center",
      adr1: "1430 Massachusetts Ave., 5th floor",
      adr2: "Cambridge, MA, USA 02138",
      adr:"Mailing address:<br/>198 Tremont St. #421<br/>Boston, MA, USA 02116",
      contact: "CONTACT US",
      connect: "Connect with us on social media",
      print:"Order printed copies of works referenced on our website",
      order:"Order",
      join:"Join our newsletter and stay up-to-date",
      subscribe:"Subscribe",
      support:"Support our mission of preservation and access"
   }
} ;

export default enTranslation ;
