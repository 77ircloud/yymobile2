webpackJsonp([158,313],{723:function(t,e){t.exports={content:["section",["p","Use to show important information for the system, and ask for user feedback. eg: When deleting an important content, pop up a Modal for secondary confirmation."],["h3","Rules"],["ul",["li",["p","Use as few as possible. Modal will interrupt user operation, only use it at important situation."]],["li",["p","Title should be concise, do not exceed 1 line; description should be concise and complete, generally no more than 2 lines."]],["li",["p","Operation buttons are up to 3(vertical), generally 1-2(horizontal); ",["a",{title:null,href:"/components/action-sheet"},"ActionSheet"]," is preferred when there are more than 3 actions."]],["li",["p","Generally put the most likely clicked button on the right side. In addition, the cancel button should always be on the left."]]]],meta:{category:"Components",type:"Feedback",title:"Modal",filename:"yymobile/modal/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["p","Support WEB, React-Native."],["h3","Modal"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","visible"],["td","Determine whether a modal dialog is visible or not"],["td","Boolean"],["td","false"]],["tr",["td","closable"],["td","Determine whether a close (x) button is visible or not"],["td","Boolean"],["td",["code","false"]]],["tr",["td","maskClosable"],["td","Determine whether to close the modal dialog when clicked mask of it (only transparent)"],["td","Boolean"],["td","true"]],["tr",["td","onClose"],["td","Callback for clicking close icon x or mask"],["td","(): void"],["td","-"]],["tr",["td","transparent"],["td","transparent mode or full screen mode"],["td","Boolean"],["td","false"]],["tr",["td","popup"],["td","popup mode, transparent will not work when in popup mode"],["td","Boolean"],["td","false"]],["tr",["td","animationType"],["td","Options: 'slide-down/up'(only transparent / ",["code","web version"],") / 'fade' / 'slide'(only not tranparent)"],["td","String"],["td","fade"]],["tr",["td","title"],["td","title (only transparent)"],["td","React.Element"],["td","-"]],["tr",["td","footer"],["td","footer content (only not transparent)"],["td","Array ",["span","{text, onPress}"]],["td","[]"]],["tr",["td","prefixCls (",["code","web only"],")"],["td","Class name prefix of elements"],["td","String"],["td",["code","am-modal"]]],["tr",["td","style (",["code","web only"],")"],["td","style"],["td","Object"],["td","{}"]],["tr",["td","platform (",["code","web only"],")"],["td","set the special style depends on platform, Options  ",["code","android"],", ",["code","ios"]],["td","String"],["td",["code","'ios'"]]]]],["h3","Modal.alert(title, message, actions?) ( Support Platform\uff1aWEB\u3001React-Native )"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","title"],["td","title"],["td","String or React.Element"],["td","-"]],["tr",["td","message"],["td","message"],["td","String or React.Element"],["td","-"]],["tr",["td","actions"],["td","button group, ",["span","{text, onPress, style}"]],["td","Array"],["td","-"]]]],["p","call ",["code","Modal.alert(title, message, actions?).close()"],"  can close Alert Modal outside anywhere as you wish."],["h3","Modal.prompt(title, message, callbackOrActions, type?, defaultValue?) ( Support Platform\uff1aWEB )"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","title"],["td","title"],["td","String or React.Element"],["td","-"]],["tr",["td","message"],["td","message"],["td","String or React.Element"],["td","-"]],["tr",["td","callbackOrActions"],["td","button group ",["span","{text, onPress}"]," or callback"],["td","Array or Function"],["td","-"]],["tr",["td","type"],["td","prompt style"],["td","String (",["code","default"],", ",["code","secure-text"],", ",["code","login-password"],")"],["td",["code","default"]]],["tr",["td","defaultValue"],["td","Default(input whick type is password is not supported)"],["td","String"],["td","-"]],["tr",["td","placeholders"],["td",["span","'', ''"]],["td","String[]"],["td","-"]]]],["p","call Modal.prompt(title, message, callbackOrActions, type?, defaultValue?, placeholders?).close()` can close prompt Modal outside anywhere as you wish."],["h3","Modal.operation(actions?) ( Support Platform\uff1aWEB\u3001React-Native )"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","actions"],["td","button group, ",["span","{text, onPress, style}"]],["td","Array"],["td","-"]]]],["p","call Modal.operation(actions?).close()` can close Operation Modal outside anywhere as you wish."]]}}});