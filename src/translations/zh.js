
const zhTranslation = {
   punc: {
      colon:"：",
      point:"。",
      num:"{{num}}",
      lpar:"（",
      rpar:"）"
   },
   home:{
      BUDA:"BUDA（佛教通用数字档案馆）",
      titleBDRC1:"佛教",
      titleBDRC2:"数字资源",
      titleBDRC3:"中心",
      archives1:"佛教",
      archives2:"数字档案馆",
      by:"由佛教数字资源中心提供",
      subtitle:"这是一个令佛教文献触手可及的合作平台。请在此探索由BDRC及其合作伙伴们提供的千万页文本吧。",
      message:"欢迎来到佛教数字资源中心（BDRC）新图书馆的测试版！",
      submessage:"新功能，新资源，新工具，促进更高效的研究",
      search:"搜索",
      choose:"选择语言",
      start:"Start typing then select search language",
      new:"New Scans Released This Week"
   },
   types:{
      any:"任意",
      corporation:"机构",
      etext:"在电子档中",
      etext_title:"电子档",
      item:"单件",
      lineage:"传承",
      person:"人物",
      place:"地点",
      role:"身份",
      topic:"主题",
      work:"作品",
      instance:"实例",
      images:"图像",
      searchIn:"{{type}}",
      volume:"卷",
      volume_num:"第{{num}}卷",
      scan:"Scan",
      serial:"Series",
      match:"match"
   },
   topbar:{
      about:"关于我们",
      search:"新搜索",
      login:"登录",
      register:"注册",
      logout:"登出",
      profile:"用户档案",
      donate:"捐赠",
      closeEtext:"关闭电子档",
      history:"搜索历史",
      bookmarks:"收藏夹",
      results:"的搜索结果",
      instances:"实例所属作品"
   },
   Lsidebar:{
      sortBy:{
         title:"排序方式"
      },
      title:"筛选搜索结果",
      collection:{
         title:"集合"
      },
      datatypes:{
         title:"数据类型"
      },
      widgets:{
         root: "实例",
         tree: "文体类型/主题",
         relationInv: "反转关联方式"
      },
      tags:{
         type: "Type",
         instanceOf: "实例所属作品",
         reset:"重置筛选",
         include:"仅显示包含",
         exclude:"不显示包含"

      },
      activeF:{
         title:"激活筛选条件",
         remove:"移除某筛选条件",
         reset:"清除所有筛选条件"
      }
   },
   sort:{
      reverse:"逆序排列",
      popu:"流行度",
      closestM:"最接近的匹配",
      workT:"作品题目",
      personN:"人名", 
      yearB:"出生年代",
      placeN:"地名",
      yearP:"出版年代",
      title:"题目",
      numberMC:"匹配部分的数量",
      lastS:"Release Date",
      reverseS:"(reverse)"
   },
   copyright:{
      open:"开放访问",
      fairUse:"合理使用（首尾各20页开放访问）",
      tempo:"暂时限制访问",
      sealed:"封存",
      view:"查看图像",
      scans:"可查看扫描件",
      provided:"Data provided by {{- provider}}"
   },
   prop:{
      "tmp:bestMatch":"最佳匹配",
      "tmp:relationType":"关联方式",
      "tmp:nameMatch":"名字匹配",
      "tmp:otherTitle":"题目别称",
      "tmp:otherName":"名字别称",
      "tmp:otherMatch":"其他匹配 ({{count}})",
      "tmp:originalRecord":"原始记录",
      "tmp:imageVolumeId":"图像所属卷号",
      "tmp:workHasTranslationInCanonicalLanguage":"藏经译本",
      "tmp:workHasTranslationInNonCanonicalLanguage":"其他译本",
      "tmp:entityScore":"Entity Score",
      "tmp:instanceLabel":"实例标签",
      "tmp:dimensions":"尺寸",
      "tmp:publisherName":"出版地点",
      "tmp:forWork":"所属作品",
      "tmp:provider":"提供者",
      "tmp:author":"作者",
      "tmp:assetAvailability":"原件的开放情况",
      "tmp:textMatch":"Text Match",
      "tmp:hasOpen":"$t(copyright.open)",
      "bdo:personTeacherOf":"Student",
      "bdo:personStudentOf":"Teacher",
      "bdo:biblioNote":"Note",
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
      "tmp:instanceOfWork":"Version of Work",
      "tmp:lastSync":"Release Date",
      "tmp:versionType":"Version Type",
      "tmp:standalone":"Standalone",
      "tmp:partOfVersion":"Part of another Version",
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
      "tmp:inRootInstance":"Instance"
   },
   result:{
      open:"开放",
      resource:"资源",
      in:"在",
      available:"资源收藏于",
      inRootInstance:"在",      
      workBy:"作者",
      eTextIsForWork:"所属作品",
      year:"年份",
      inInstance:"归属实例",
      inInstancePart:"归属实例具体位置",
      expandC:"显示前后文",
      hideC:"收起前后文",
      openE:"开启Etext",
      hasInstance:"有{{count}}实例",
      assoc:"{{type}} associated with: <res href='/show/{{- rid}}'>{{- name}}</res>",
      moreres:"More {{txt}} are available, do you want to see them?",
      openEin:"Open in Etext"
   },
   index:{
      openViewer:"在查看器中打开",
      mainInfo:"主要信息",
      outline:"纲要",
      related:"相关作品",
      extended:"扩展信息",
      personalI:"Personal Information",
      relatedM:"Collection Members",
      relatedS:"Serial Members"
   },
   user:{
      photo:{ 
         hover:"更新个人资料图片",
         label:"个人资料图片",                                
         helperText:"直接粘贴图片链接",
         error:"无法找到图片，请检查链接"
      },      
      edit:{
         add:"为属性增加另一个值",
         del:"删除属性",
         set:"修改值",
         hide:"设为不公开",
         show:"设为公开",
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
      moreInfo:"更多信息",
      source:"资源",
      notes:"馆员注",
      discussion:"讨论",
      lang:"语言/字体",
      otherLang:"在其他语言中",
      calendar:"在日历中",
      gregorian:"格里高利历",
      imported:"这一记录导入自",
      seeO:"查看原文"
   },
   misc:{
      colon:"：",
      datatype:"回到数据类型",
      has:"包含",
      or:"或",
      seeA:"查看全部",
      browse:"浏览全部",
      show:"显示全部",
      seeMore:"查看更多",
      readM:"阅读更多",
      hide:"隐藏",
      preview:"预览",
      permalink:"永久链接",
      clipboard:"地址已被复制到剪贴板",
      from:"自",
      in:"在",
      of:"属",
      please:"请",
      seeO:"See on",
   },
   lang:{
      en:"英语",
      fr:"法文",
      zh:"中文",
      bo:"藏语",
      km:"高棉语",
      lg:"语言",
      search:{
         zh:"中文",
         zhHant:"中文（简体）",
         zhHans:"中文（繁体）",
         zhLatnPinyin:"中文（拼音）",
         zhXPhonEn:"中文（音译）",
         saXIast:"梵语（IAST转写）",
         saXNdia:"梵语（Lenient）",
         saDeva:"梵语（天城体）",
         en:"英语",
         pi:"巴利语",
         piXIast:"巴利语（罗马转写）",
         bo:"藏语",
         boXEwts:"藏语（Wylie转写）",
         boXDts:"藏语（DTS转写）",
         boAlaLc:"藏语（ALA-LC转写）",
         other:"其他",
         km:"高棉语",
         inc:"印度的",
         sa:"梵语",
         hans:"简体",
         hant:"繁体",
         deva:"天城体",
         newa:"尼瓦尔语",
         sinh:"僧伽罗语",
         latn:"拉丁转写",
         xEwts:"Wylie转写",
         xDts:"DTS转写",
         alalc97:"ALA-LC转写",
         latnPinyin:"拼音"
      },
      tip:{
         zh:"中文",
         zhHant:"中文繁体",
         zhHans:"中文简体",
         zhLatnPinyin:"中文拼音",
         en:"英语",
         km:"高棉语",
         saXIast:"梵语（IAST转写）",
         saDeva:"梵语（天城体）",
         bo:"藏语（Unicode）",
         boXEwts:"藏语（Wylie转写）"
      },
      langscript:{
         zh:"中文",
         en:"英语",
         pi:"巴利语",
         bo:"藏语",
         inc:"印度的",
         km:"高棉语",
         sa:"梵语",
         hans:"简体",
         hant:"繁体",
         deva:"天城体",
         newa:"尼瓦尔语",
         sinh:"尼瓦尔语",
         latn:"拉丁转写",
         xEwts:"Wylie转写",
         xDts:"DTS转写",
         xIast:"IAST转写",
         alalc97:"ALA-LC转写",
         latnPinyin:"拼音"
      }
   },
   search:{
      page:"页",
      result:"{{count}}条结果",
      filters:{
         noresults:"没有符合条件的结果"
      }
   },
   Rsidebar:{
      title:"现实设置",
      UI:{
         title:"用户界面语言"
      },
      results:{
         title:"首选语言"
      },
      priority:{
         title:"首选的数据语言",
         help:"请按优先顺序选择数据的语言（无需全部列出）",
         user:"用户自定义"
      }
   },
   Asidebar:{
      title:"注释"
   },
   resource:{
      back:"返回搜索页面",
      browse:"浏览相关资源",      
      openViewer:"在Etext浏览器中打开",
      download:"下载",
      downloadAs:"下载为",
      version:"{{format}}版本",
      exportData:"导出{{data}}",
      exportDataAs:"导出{{data}}为{{format}}版本",
      settings:"语言设置",
      toggle:"切换注释面板",
      view:"查看",
      metadata:"元数据",
      manifest:"IIIF清单",
      page:"第{{num}}页",
      volume:"第{{num}}卷",
      availableScans:"本页的可用扫描",
      about:"关于",
      createdB:"创建者",
      extended:"扩展属性",
      showD:"显示细节",
      hideD:"隐藏细节",
      searchO:"在纲要中搜索",
      start:"开始搜索",
      reset:"重置搜索",
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
      browsE:"Browse"
   },
   mirador:{
      return:"回到BUDA",
      browse:"浏览藏品",
      goto:"前往页码",
      zoomIn:"放大",
      zoomOut:"缩小",
      showI:"显示图像",
      fullscreen:"全屏",
      next:"下一张图片",
      prev:"上一张图片",
      manip:"图像操作",
      increaseFont:"加大Etext字体",
      decreaseFont:"减小Etext字体",
      downloadE:"下载Etext"
   },
   access:{
      limited20:"仅限首尾各20页的访问权",
      credentials:"如果您有权获取这部作品的全部图像"
   },
   location:{
      beginV:"起始卷{{num}}",
      beginP:"起始页{{num}}",
      beginL:"起始行{{num}}",
      endV:"结束卷{{num}}",
      endP:"结束页{{num}}",
      endL:"结束行{{num}}"
   }
} ;

export default zhTranslation ;
