(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{114:function(n,e,o){"use strict";o(5),o(0),o(54);var t=o(168),i=o(169),r=(o(46),o(83)),a=o(2);var d=function(){return Object(a.jsx)(r.a,{sourceType:"profile",screenName:"remisiki",options:{height:"70vh",width:"300px"},transparent:"true",noScrollbar:"true",lang:"ja"})},l=o(22);var p=function(){var n=Object(l.k)();return Object(a.jsx)("aside",{className:"sidebar",id:"sidebar",children:Object(a.jsxs)("div",{id:"sidecontent",children:[Object(a.jsx)("h3",{children:Object(a.jsx)("span",{lang:"en",children:"Contents"})}),Object(a.jsxs)("ul",{id:"side1",children:[Object(a.jsx)("a",{href:"#",onClick:function(){n.navigate("Home",{})},children:Object(a.jsx)("span",{lang:"en",children:"Home"})}),Object(a.jsx)("a",{href:"#",onClick:function(){n.navigate("Info",{})},children:Object(a.jsx)("span",{lang:"en",children:"Info"})}),Object(a.jsx)("a",{href:"#",onClick:function(){n.navigate("Repos",{})},children:Object(a.jsx)("span",{lang:"en",children:"Repo"})})]})]})})},s=o(85),c=o.n(s);var b=function(n){return n.route,n.navigation,Object(a.jsxs)("body",{children:[Object(a.jsx)("div",{className:"twitter-tl",children:Object(a.jsx)(d,{})}),Object(a.jsxs)("div",{id:"content",className:"wrapper doc",children:[Object(a.jsxs)("article",{children:[Object(a.jsx)("img",{src:c.a,alt:"Furan",id:"avatar"}),Object(a.jsx)("h1",{children:"Welcome to Remisiki's Homepage!"}),Object(a.jsxs)("p",{children:["This is my first homepage website made with ",Object(a.jsx)("a",{href:"https://ja.reactjs.org/",children:"React.js"}),", and please forgive me for not being familiar with web design..."]}),Object(a.jsxs)("p",{children:["My profile icon comes from ",Object(a.jsx)("a",{href:"https://www.pixiv.net/artworks/28137362",children:"here"}),"."]})]}),Object(a.jsx)(p,{})]})]})};var x=function(n){var e=n.route,o=(n.navigation,e.params);return o.itemId,o.otherParam,Object(a.jsx)("body",{children:Object(a.jsxs)("div",{id:"content",className:"wrapper doc",children:[Object(a.jsxs)("article",{children:[Object(a.jsx)("h1",{children:"About Remisiki"}),Object(a.jsx)("p",{children:"Remisiki is a junior student major in ECE (Electrical & Computing Engineering), knowing programming for around 10 years."}),Object(a.jsx)("h2",{children:"Language Skills"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"English"}),Object(a.jsx)("li",{children:"Chinese"}),Object(a.jsx)("li",{children:"Japanese"})]}),Object(a.jsx)("h2",{children:"Programming Skills"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"C"}),Object(a.jsx)("li",{children:"C++"}),Object(a.jsx)("li",{children:"Java"}),Object(a.jsx)("li",{children:"Scala"}),Object(a.jsx)("li",{children:"Python"}),Object(a.jsx)("li",{children:"RISC-V Assembly"}),Object(a.jsx)("li",{children:"Verilog"}),Object(a.jsx)("li",{children:"Elm"}),Object(a.jsx)("li",{children:"JavaScript"}),Object(a.jsx)("li",{children:"React.js"})]})]}),Object(a.jsx)(p,{})]})})};var g=function(n){var e=n.route,o=(n.navigation,e.params);return o.itemId,o.otherParam,Object(a.jsxs)("div",{id:"content",className:"wrapper doc",children:[Object(a.jsxs)("article",{children:[Object(a.jsx)("h1",{children:"Remisiki's Repositories"}),Object(a.jsx)("p",{children:"HogeHoge"})]}),Object(a.jsx)(p,{})]})};var h={dark:!1,colors:{primary:"#6782e6",background:"rgba(255, 255, 255, 0)",card:"#6782e6",text:"#ffffff",border:"#dcdee3",notification:"#ffffff"}},f=Object(i.a)();e.a=function(){return Object(a.jsx)(t.a,{theme:h,children:Object(a.jsxs)(f.Navigator,{initialRouteName:"Home",children:[Object(a.jsx)(f.Screen,{name:"Home",component:b,options:{title:"Remisiki's Home"}}),Object(a.jsx)(f.Screen,{name:"Info",component:x,options:{title:"Info"}}),Object(a.jsx)(f.Screen,{name:"Repos",component:g,options:{title:"Repos"}})]})})}},118:function(n,e,o){n.exports=o(159)},121:function(n,e,o){var t=o(122),i=o(123),r=o(124),a=o(125),d=o(126);e=t(!1);var l=i(r),p=i(a),s=i(d);e.push([n.i,'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    font-weight: inherit;\n    font-style: inherit;\n    font-size: 100%;\n    font-family: inherit;\n    max-width:  100vw;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\ncaption,th,td {\n    text-align: left;\n    font-weight: normal;\n}\n\nform legend {\n    display: none;\n}\n\nblockquote:before,blockquote:after,q:before,q:after {\n    content: "";\n}\n\nblockquote {\n    font-size: 18px;\n    border-radius: 10px;\n    line-height: 2;\n}\n\nol,ul {\n    margin-left: 1em;\n    line-height: 1.5;\n}\n\nhr {\n    display: none;\n    visibility: hidden;\n}\n\n:focus {\n    outline: 0;\n}\n\narticle {\n    max-width: 100vw;\n    overflow-wrap: break-word;\n    margin-left: 1em;\n}\n\narticle h1,article h2,article h3,article h4,article h5,article h6 {\n    color: #333;\n    font-weight: bold;\n    line-height: 1.25;\n    margin-top: 1.3em;\n}\n\narticle h1 a,article h2 a,article h3 a,article h4 a,article h5 a,article h6 a {\n    font-weight: inherit;\n    color: #333;\n}\n\narticle h1 a:hover,article h2 a:hover,article h3 a:hover,article h4 a:hover,article h5 a:hover,article h6 a:hover {\n    color: #333;\n}\n\narticle h1 {\n    font-size: 36px;\n    margin: 0 0 18px;\n    border-bottom: 4px solid #eee;\n}\n\narticle h2 {\n    font-size: 25px;\n    margin-bottom: 9px;\n    border-bottom: 2px solid #eee;\n}\n\narticle h3 {\n    font-size: 20px;\n    margin-bottom: 9px;\n}\n\narticle h4 {\n    font-size: 18px;\n    margin-bottom: 3px;\n}\n\narticle h5 {\n    font-size: 15px;\n    font-weight: normal;\n    margin-bottom: 3px;\n}\n\narticle .subheader {\n    color: #777;\n    font-weight: 300;\n    margin-bottom: 24px;\n}\n\narticle p {\n    line-height: 1.7;\n}\n\narticle p img {\n    margin: 0;\n}\n\narticle p.lead {\n    font-size: 18px;\n    font-size: 1.8rem;\n    line-height: 1.5;\n}\n\narticle em,article i {\n    font-style: italic;\n    line-height: inherit;\n}\n\narticle strong,article b {\n    font-weight: bold;\n    line-height: inherit;\n}\n\narticle small {\n    font-size: 60%;\n    line-height: inherit;\n}\n\narticle h1 small,article h2 small,article h3 small,article h4 small,article h5 small {\n    color: #777;\n}\n\narticle hr {\n    border: solid #ddd;\n    border-width: 1px 0 0;\n    clear: both;\n    margin: 12px 0 18px;\n    height: 0;\n}\n\narticle abbr,article acronym {\n    text-transform: uppercase;\n    font-size: 90%;\n    color: #222;\n    border-bottom: 1px solid #ddd;\n    cursor: help;\n}\n\narticle abbr {\n    text-transform: none;\n}\n\narticle img {\n    max-width: 100%;\n}\n\narticle pre {\n    margin: 10px 0;\n    border: 1px solid #ddd;\n    padding: 10px;\n    background: #fafafa;\n    color: #666;\n    overflow: auto;\n    border-radius: 5px;\n}\n\narticle code {\n    background: #fafafa;\n    color: #666;\n    font-family: inconsolata, monospace;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    height: 4px;\n    padding: 0;\n}\n\narticle a code {\n    color: #2083e0;\n}\n\narticle a code:hover {\n    color: #0060bb;\n}\n\narticle pre code {\n    border: 0;\n    background: inherit;\n    border-radius: 0;\n    line-height: inherit;\n    font-size: 14px;\n}\n\narticle pre.prettyprint {\n    border: 1px solid #ddd;\n    padding: 10px;\n}\n\narticle blockquote,article blockquote p {\n    line-height: 1.25;\n},article p.note {\n    line-height: 20px;\n    color: #4c4742;\n}\n\narticle blockquote,article .note {\n    margin: 0 0 18px;\n    padding: 1px 20px;\n    background: #fff7d6;\n}\n\narticle blockquote li:before,article .note li:before {\n    color: #e0bc6f;\n}\n\narticle blockquote code,article .note code {\n    background: #f5d899;\n    border: none;\n    color: inherit;\n}\n\narticle blockquote a,article .note a {\n    color: #0060bb;\n}\n\narticle blockquote pre,article .note pre {\n    background: #F5D899 !important;\n    color: #48484C !important;\n    border: none !important;\n}\n\narticle p.note {\n    padding: 15px 20px;\n}\n\narticle table {\n    width: 100%;\n}\n\narticle table td {\n    padding: 8px;\n}\n\narticle table tr {\n    background: #F4F4F7;\n    border-bottom: 1px solid #eee;\n}\n\narticle table tr:nth-of-type(odd) {\n    background: #fafafa;\n}\n\narticle dl dt {\n    font-weight: bold;\n}\n\narticle dl.tabbed {\n    position: relative;\n}\n\narticle dl.tabbed dt {\n    float: left;\n    margin: 0 5px 0 0;\n    border: 1px solid #ddd;\n    padding: 0 20px;\n    line-height: 2;\n    border-radius:  5px 5px 0 0;\n}\n\narticle dl.tabbed dt a {\n    display: block;\n    height: 30px;\n    color: #333;\n    text-decoration: none;\n}\n\narticle dl.tabbed dt.current {\n    background: #f7f7f7;\n}\n\narticle dl.tabbed dd {\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 30px;\n}\n\narticle dl.tabbed dd pre {\n    margin-top: 0;\n    border-top-left-radius: 0;\n}\n\na {\n    color: #2083e0;\n}\n\na:hover {\n    color: #0060bb;\n}\n\np {\n    margin: 1em 0;\n}\n\nh1 {\n    -webkit-font-smoothing: antialiased;\n}\n\nh2 {\n    font-weight: bold;\n    font-size: 28px;\n}\n\nhr {\n    clear: both;\n    margin: 20px 0 25px 0;\n    border: none;\n    visibility: visible;\n    display: block;\n}\n\nsection {\n    padding: 50px 0;\n}\n\nbody {\n    background: #f5f5f5;\n    background: #fff;\n    color: #555;\n    font: 20px "Helvetica Nueue",sans-serif;\n    padding: 0px 0 0px;\n}\n\n.wrapper {\n    width: 960px;\n    margin: 0 auto;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    padding: 60px 0;\n}\n\n.wrapper:after {\n    content: " ";\n    display: block;\n    clear: both;\n}\n\n.wrapper article {\n    min-height: 310px;\n    width: 650px;\n    max-width: 85vw;\n}\n\n.wrapper aside {\n    width: 190px;\n    position: fixed;\n    top: 120px;\n    left: 50px;\n    padding: 10px;\n    border-radius: 30px 15px;\n    border: solid;\n    border-color: #2083e0;\n    border-width: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n    box-shadow: 0 0 10px rgba(0,0,0,0.6);\n    -moz-box-shadow: 0 0 10px rgba(0,0,0,0.6);\n    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);\n    transition: box-shadow 0.1s ease-in-out, -moz-box-shadobox-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out;\n}\n\n.wrapper aside ul {\n    margin: 2px 0 30px;\n}\n\n.wrapper aside:hover {\n    box-shadow: 0 0 20px rgba(0,0,0,0.6);\n    -moz-box-shadow: 0 0 20px rgba(0,0,0,0.6);\n    -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.6);\n}\n\n.wrapper aside ul a {\n    display: block;\n    padding: 3px 0 3px 10px;\n    margin: 2px 0;\n    border-left: 4px solid #eee;\n    transition: font-size 0.1s ease-in-out;\n    font-size: 18px;\n}\n\n.wrapper aside ul a:hover {\n    /*border-color: #2083e0;*/\n    font-size: 20px;\n}\n\n.wrapper aside h3 {\n    font-size: 20px;\n    color: #333;\n    font-weight: bold;\n    line-height: 2em;\n    margin: 9px 0;\n    border-bottom: 1px solid #eee;\n}\n\n.wrapper aside.stick {\n    position: fixed;\n    right: 50%;\n    margin-right: -480px;\n    top: 120px;\n    bottom: 0;\n    overflow: hidden;\n}\n\n.half {\n    width: 50%;\n    float: left;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}\n\nheader {\n    position: fixed;\n    top: 0;\n    z-index: 1000;\n    width: 100%;\n    height: 50px;\n    line-height: 50px;\n    padding: 30px 0;\n    background: #fff;\n    background: rgba(255, 255, 255, 0.95);\n    border-bottom: 1px solid #ccc;\n    box-shadow: 0 4px 0 rgba(0, 0, 0, 0.1);\n}\n\nheader #logo {\n    position: absolute;\n    left: 50%;\n    margin-left: -480px;\n}\n\nheader nav {\n    position: absolute;\n    right: 50%;\n    margin-right: -480px;\n}\n\nheader nav a {\n    padding: 0 10px 4px;\n    font-size: 21px;\n    font-weight: 500;\n    text-decoration: none;\n}\n\nheader nav a.selected {\n    border-bottom:3 px solid #E9E9E9;\n}\n\nheader nav a.download {\n    position: relative;\n    background: #2083e0;\n    color: white;\n    margin-left: 10px;\n    padding: 5px 10px 2px;\n    font-weight: 700;\n    border-radius: 5px;\n    box-shadow: 0 3px 0 #0060bb;\n    text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.2);\n    -webkit-transition: all 70ms ease-out;\n    border: 0;\n}\n\nheader nav a.download:hover {\n    box-shadow: 0 3px 0 #0060bb,0 3px 4px rgba(0, 0, 0, 0.3);\n}\n\nheader nav a.download:active {\n    box-shadow: 0 1px 0 #0060bb;\n    top: 2px;\n    -webkit-transition: none;\n}\n\n#download,#getLogo {\n    display: none;\n    position: absolute;\n    padding: 5px 20px;\n    width: 200px;\n    background: #000;\n    background: rgba(0, 0, 0, 0.8);\n    border-radius: 5px;\n    color: #999;\n    line-height: 15px;\n}\n\n#download a,#getLogo a {\n    color: #ccc;\n    text-decoration: none;\n}\n\n#download a:hover,#getLogo a:hover {\n    color: #fff;\n}\n\n#getLogo {\n    text-align: center;\n}\n\n#getLogo h3 {\n    font-size: 16px;\n    color: #2083e0;\n    margin: 0 0 15px;\n}\n\n#getLogo figure {\n    border-radius: 3px;\n    margin: 5px 0;\n    padding: 5px;\n    background: #fff;\n    line-height: 25px;\n    width: 80px;\n    display: inline-block;\n}\n\n#getLogo figure a {\n    color: #999;\n    text-decoration: none;\n}\n\n#getLogo figure a:hover {\n    color: #666;\n}\n\n#download {\n    top: 85px;\n    right: 50%;\n    margin-right: -480px;\n}\n\n#download .button {\n    font-size: 16px;\n    color: #2083e0;\n}\n\n#getLogo {\n    top: 85px;\n    left: 50%;\n    padding: 20px;\n    margin-left: -480px;\n}\n\n#getLogo ul {\n    margin: 5px 0;\n}\n\n#getLogo li {\n    margin: 1px 0;\n}\n\n#news {\n    background: #f5f5f5;\n    color: #999;\n    font-size: 17px;\n    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);\n    position: relative;\n    z-index: 2;\n    padding: 3px 0;\n}\n\n#news ul {\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    /*background: url(./assets/images/news.png) 10px center no-repeat;*/\n    padding: 19px 0 19px 60px;\n}\n\n#content {\n    padding: 30px 0;\n    position: relative;\n    top: 10px;\n}\n\n#top {\n    background: url('+l+') fixed;\n    box-shadow: 0 -3px 0 rgba(0, 0, 0, 0.2) inset;\n    padding: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 90px;\n    z-index: 1;\n}\n\n#top .wrapper {\n    padding: 30px 0;\n}\n\n#top h1 {\n    float: left;\n    color: #fff;\n    font-size: 35px;\n    line-height: 48px;\n    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n    user-select: none;\n}\n\n#top h1 a {\n    text-decoration: none;\n    color: #fff;\n}\n\n#top h2 {\n    float: left;\n    color: #fff;\n    font-size: 25px;\n    line-height: 36px;\n    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n    user-select: none;\n}\n\n#top h2 a {\n    text-decoration: none;\n    color: #fff;\n}\n\n#top nav {\n    float: right;\n    margin-top: 10px;\n    line-height: 25px;\n}\n\n#top nav .versions,#top nav form {\n    float: left;\n    margin: 0 5px;\n}\n\n#top nav .versions {\n    height: 25px;\n    display: inline-block;\n    border: 1px solid #0060bb;\n    border-radius: 3px;\n    background: #2083e0;\n    background: -moz-linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2083e0), color-stop( 100%, #0060bb));\n    background: -webkit-linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    background: -o-linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    background: -ms-linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    background: linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#2083e0\', endColorstr= \'#0060bb\',GradientType=0 );\n    box-shadow: inset 0 -1px 1px #2083e0;\n    text-align: center;\n    color: #fff;\n    text-shadow: -1px -1px 0 #0060bb;\n}\n\n#top nav .versions span {\n    padding: 0 4px;\n    position: absolute;\n}\n\n#top nav .versions span:before {\n    content: "\u2b0d";\n    color: rgba(0, 0, 0, 0.4);\n    text-shadow: 1px 1px 0 #2083e0;\n    margin-right: 4px;\n}\n\n#top nav .versions select {\n    opacity: 0;\n    position: relative;\n    z-index: 9;\n}\n\n#top .follow {\n    display: inline-block;\n    border: 1px solid #0060bb;\n    border-radius: 3px;\n    background: #2083e0;\n    background: -moz-linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2083e0), color-stop( 100%, #0060bb));\n    background: -webkit-linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    background: -o-linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    background: -ms-linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    background: linear-gradient(top, #2083e0 0%, #0060bb 100%);\n    filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#2083e0\', endColorstr= \'#0060bb\',GradientType=0 );\n    box-shadow: inset 0 -1px 1px #2083e0;\n    text-align: center;\n    vertical-align: middle;\n    color: #fff;\n    text-shadow: -1px -1px 0 #0060bb;\n    padding: 4px 8px;\n    text-decoration: none;\n    position: absolute;\n    top: 41px;\n    left: 50%;\n    margin-left: 210px;\n    width: 250px;\n}\n\n#top .follow:before {\n    vertical-align: middle;\n    /*content: url(./assets/images/twitter.png);*/\n    margin-right: 10px;\n}\n\n#top input {\n    width: 80px;\n    -webkit-transition: width 200ms ease-in-out;\n    -moz-transition: width 200ms ease-in-out;\n}\n\n#top input:focus {\n    width: 200px;\n}\n\n#title {\n    width: 500px;\n    float: left;\n    font-size: 17px;\n    color: #2d6201;\n}\n\n#quicklinks {\n    width: 350px;\n    margin: -15px 0 0 0;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    float: right;\n    padding: 30px;\n    background: #fff;\n    color: #888;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n}\n\n#quicklinks h2 {\n    color: #2083e0;\n    font-size: 20px;\n    margin-top: 15px;\n    padding: 10px 0 5px 0;\n    border-top: 1px solid #eee;\n}\n\n#quicklinks h2:first-child{margin:0;\n    padding: 0 0 5px 0;\n    border: 0;\n}\n\n#quicklinks p {\n    margin: 0;\n}\n\n#quicklinks a {\n    color: #444;\n}\n\n#quicklinks a:hover {\n    color: #222;\n}\n\n.tweet {\n    border-bottom: 1px solid #eee;\n    padding: 6px 0 20px 60px;\n    position: relative;\n    min-height: 50px;\n    margin-bottom: 20px;\n}\n\n.tweet img {\n    position: absolute;\n    left: 0;\n    top: 8px;\n}\n\n.tweet strong {\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.tweet span {\n    font-size: 12px;\n    color: #888;\n}\n\n.tweet p {\n    padding: 0;\n    margin: 5px 0 0 0;\n}\n\nfooter {\n    padding: 40px 0;\n    background: #363736;\n    background: #eee;\n    border-top: 1px solid #e5e5e5;\n    color: #aaa;\n    position: relative;\n}\n\nfooter .logo {\n    position: absolute;\n    top: 55px;\n    left: 50%;\n    margin-left: -480px;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n}\n\nfooter:after {\n    content: " ";\n    display: block;\n    clear: both;\n}\n\nfooter .links {\n    width: 960px;\n    margin: 0 auto;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    margin: 0 auto;\n    padding-left: 200px;\n}\n\nfooter .links:after {\n    content: " ";\n    display: block;\n    clear: both;\n}\n\nfooter .links dl {\n    width: 33%;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    padding: 0 10px;\n    float: left;\n}\n\nfooter .links dt {\n    color: #2083e0;\n    font-weight: bold;\n}\n\nfooter .links a {\n    color: #aaa;\n    text-decoration: none;\n}\n\nfooter .links a:hover {\n    color: #888;\n}\n\nfooter .licence {\n    width: 960px;\n    margin: 0 auto;\n    box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    margin: 20px auto 0;\n    padding-top: 20px;\n    border-top: 2px solid #ddd;font-size:12px;\n}\n\nfooter .licence:after {\n    content: " ";\n    display: block;\n    clear: both;\n}\n\nfooter .licence .typesafe,footer .licence .zenexity {\n    float: right;\n}\n\nfooter .licence .typesafe {\n    position: relative;\n    top: -3px;\n    margin-left: 10px;\n}\n\nfooter .licence a {\n    color: #999;\n}\n\ndiv.coreteam {\n    position: relative;\n    min-height: 80px;\n    border-bottom: 1px solid #eee;\n}\n\ndiv.coreteam img {\n    width: 50px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    padding: 2px;\n    border: 1px solid #ddd;\n}\n\ndiv.coreteam a {\n    color: inherit;\n    text-decoration: none;\n}\n\ndiv.coreteam h2 {\n    padding-left: 70px;\n    border: none;\n    font-size: 20px;\n}\n\ndiv.coreteam p {\n    margin-top: 5px;\n    padding-left: 70px;\n}\n\nul.contributors {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n\nul.contributors li {\n    padding: 6px 0 !important;\n    margin: 0;\n}\n\nul.contributors li:before {\n    content: \' \';\n}\n\nul.contributors img {\n    width: 25px;\n    padding: 1px;\n    border: 1px solid #ddd;\n    margin-right: 5px;\n    vertical-align: middle;\n}\n\nul.contributors a {\n    color: inherit;\n    text-decoration: none;\n}\n\nul.contributors span {\n    font-weight: bold;\n    color: #666;\n}\n\nul.contributors.others li {\n    display: inline-block;\n    width: 32.3333%;\n}\n\ndiv.list {\n    float: left;\n    width: 33.3333%;\n    margin-bottom: 30px;\n}\n\nh2 {\n    clear: both;\n}\n\nspan.by {\n    font-size: 14px;\n    font-weight: normal;\n}\n\nform dl {\n    padding: 10px 0;\n}\n\ndd.info {\n    color: #888;\n    font-size: 12px;\n}\n\ndd.error {\n    color: #c00;\n}\n\naside a[href^="http"]:after,.doc a[href^="http"]:after {\n    content: url('+p+");\n    vertical-align: middle;\n    margin-left: 5px;\n}\n\n\n#RuGu {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    height: 80vh;\n    user-select: none;\n    display: none;\n}\n\n#totop {\n    z-index: 1;\n    position: fixed;\n    right: 5%;\n    bottom: -90px;\n    height: 90px;\n    user-select: none;\n    /*-webkit-filter: drop-shadow(2px 2px 2px #333);*/\n    filter: drop-shadow(2px 2px 2px #333);\n    transition: filter 0.3s ease-in-out, height 0.1s ease-in-out, opacity 0.1s ease-in-out, bottom 0.1s;\n    opacity: 0.8;\n    /*display: none;*/\n}\n\n#totop:hover {\n    filter: drop-shadow(5px 5px 5px #333);\n    opacity: 1;\n}\n\n#totop:active {\n    height: 88px;\n}\n\n#totop.slide-in {\n    bottom: 1%;\n    /*display: block;*/\n}\n\nbody {\n    background-image: url("+s+");\n    /*background-repeat: repeat-x;*/\n    background-attachment: fixed;\n    background-size: contain;\n}\n\n.wrapper article, .twitter-tl {\n    border-radius: 15px;\n    border: solid;\n    border-color: #2083e0;\n    border-width: 3px;\n    background-color: rgba(255, 255, 255, 0.7);\n    padding: 10px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.6);\n    -moz-box-shadow: 0 0 10px rgba(0,0,0,0.6);\n    -webkit-box-shadow: 0 0 10px rgba(0,0,0,0.6);\n    transition: box-shadow 0.1s ease-in-out, -moz-box-shadobox-shadow 0.1s ease-in-out, -webkit-box-shadow 0.1s ease-in-out;\n}\n\n.wrapper article:hover, .twitter-tl:hover {\n    box-shadow: 0 0 20px rgba(0,0,0,0.6);\n    -moz-box-shadow: 0 0 20px rgba(0,0,0,0.6);\n    -webkit-box-shadow: 0 0 20px rgba(0,0,0,0.6);\n}\n\n.gap {\n    width: 100vw;\n    height: 10vh;\n}\n\n#foldpng {\n    position: absolute;\n    top: 5%;\n    right: 5%;\n    width: 30px;\n    user-select: none;\n    transition: transform 0.2s ease-in-out;\n}\n\nimg {\n    -webkit-user-select: none;\n    -webkit-user-drag: none;\n}\n\n:link {\n    -webkit-user-drag: none;\n}\n\nhtml {\n    scroll-behavior: smooth;\n}\n\n.yellow-marker-thin{\n    background: linear-gradient(transparent 60%, #ff9 60%);\n}\n\n.red-marker-thin{\n    background: linear-gradient(transparent 60%, #f58c8c 60%);\n}\n\n.green-marker-thin{\n    background: linear-gradient(transparent 60%, #0de1bd 60%);\n}\n\n.twitter-tl{\n    /*display: block;*/\n    /*vertical-align: middle;*/\n    position: fixed;\n    right: 50px;\n    top: 120px;\n    padding: 0;\n    /*border: ;*/\n}\n\n#avatar {\n    width: 70%;\n}\n\n@media only screen and (max-width: 425px) {\n    #title {\n        display: none;\n    }\n    #RuGu {\n        display: none;\n    }\n    #sidecontent {\n        display: none;\n    }\n    .wrapper aside {\n        background-color: rgba(255, 255, 255, 0.9);\n        width: 20px;\n        height: 20px;\n        border-radius: 10px;\n    }\n    .wrapper article {\n\n    }\n    #foldpng {\n        transform: rotateX(180deg);\n        top: 15%;\n        right: 15%;\n    }\n\n}",""]),n.exports=e},124:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAHhJREFUGJWFyjsSgyAUQNGbRxwK+Y2a/WVnWVh2oIKM6cHKknDq83h/vtX5QI8Y60hx70cRwXrfzQIwPAemeSFuK6WUdryFeSan2I9KFNPyIm4rtZZ2vBnn+Z1nP2qtGY0lH+l/BFBK4XzgiDu11nYEEBFG6zjzwQXd5CcDhAIOUgAAAABJRU5ErkJggg=="},125:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALhJREFUeNpi/P//PwMucPbs2fNAygBZjAUoyA+kNwCxA5r6AKjYBSBWgAky4VCcYGxsvBGqSQHFBiTFO4B4OxAfBCq+CLQ5HshegKT2AUgzC5JABUgh1O3oihOgLjkA14BPMVBuIZRtyIQlcCagKwYaMhGI/8M8jQ5AfvqAZnIeTJLxzJkzsIgwgDkLLS70oUELcjYjsg0FUEl0xQVIfHmQDfuxxAM2cABogyMTNHIOEFIMVccAEGAA/1NI0KX17iQAAAAASUVORK5CYII="},126:function(n,e,o){n.exports=o.p+"static/media/background.cdd61a77.webp"},46:function(n,e,o){var t=o(120),i=o(121);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var r={insert:"head",singleton:!1};t(i,r);n.exports=i.locals||{}},85:function(n,e,o){n.exports=o.p+"static/media/avatar.f786c941.jpg"}},[[118,1,2]]]);
//# sourceMappingURL=app.27bd2d5b.chunk.js.map