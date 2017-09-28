webpackJsonp([102,285],{994:function(t,e){t.exports={content:["section",["h3","version 1.0.4"],["h3","Description"],["ol",["li",["p","Only depend on react/react-dom, without any other package."]],["li",["p","Use less."]],["li",["p","Support body or root Dom as container."]],["li",["p","Bind touch event on component root Dom."]],["li",["p","It.s develop as Pure react component."]],["li",["p","Support config UI component (HeadNode and FooterNode)."]],["li",["p","Can apply refreshing or loading through modify STATE."]],["li",["p",["strong","Only support mobile device"]]]]],meta:{category:"Components",type:"YYMobile",title:"YyPullLoad",filename:"yymobile/yy-pull-load/index.en-US.md"},api:["section",["h2","API\uff1a"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","default"],["th","Remarks"]]],["tbody",["tr",["td","action"],["td","sync component status"],["td","string"],["td"],["td","isRequired"]],["tr",["td","handleAction"],["td","handle status"],["td","func"],["td"],["td","isRequired"]],["tr",["td","hasMore"],["td","flag for are there any more content to load"],["td","bool"],["td","false"],["td"]],["tr",["td","downEnough"],["td","how long distance is enough to refreshing"],["td","num"],["td","100"],["td","use px as unit"]],["tr",["td","distanceBottom"],["td","current position is apart from bottom"],["td","num"],["td","100"],["td","use px as unit"]],["tr",["td","isBlockContainer"],["td","set root dom as container"],["td","bool"],["td","false"],["td"]],["tr",["td","HeadNode"],["td","custom header UI compoent"],["td","any"],["td",["a",{title:null,href:"./src/HeadNode.jsx"},"ReactPullLoad HeadNode"]],["td","must be a react component"]],["tr",["td","FooterNode"],["td","custom footer UI compoent"],["td","any"],["td",["a",{title:null,href:"./src/FooterNode.jsx"},"ReactPullLoad FooterNode"]],["td","must be a react component"]]]],["p","Remarks: ReactPullLoad support set root dom className and style."],["h3","STATS list"],["table",["thead",["tr",["th","Property"],["th","Value"],["th","root className"],["th","explain"]]],["tbody",["tr",["td","init"],["td","''"],["td"],["td","component initial status"]],["tr",["td","pulling"],["td","'pulling'"],["td","state-pulling"],["td","pull status"]],["tr",["td","enough"],["td","'pulling enough'"],["td","state-pulling.enough"],["td","pull down enough status"]],["tr",["td","refreshing"],["td","'refreshing'"],["td","state-refreshing"],["td","refreshing status fetch data"]],["tr",["td","refreshed"],["td","'refreshed'"],["td","state-refreshed"],["td","refreshed"]],["tr",["td","reset"],["td","'reset'"],["td","state-reset"],["td","reset status"]],["tr",["td","loading"],["td","'loading'"],["td","state-loading"],["td","fetching data"]]]],["p","init/reset -> pulling -> enough -> refreshing -> refreshed -> reset"],["p","init/reset -> pulling -> reset"],["p","init/reset -> loading -> reset"]]}}});