(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){e.exports=a(199)},122:function(e,t,a){},123:function(e,t,a){},146:function(e,t){},199:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(6),i=a.n(r),o=(a(122),a(101)),c=a(102),l=a(114),u=a(103),m=a(115),g=(a(123),a(104)),d=a.n(g),f=a(203),h=a(202),v=a(50),E=a(201),p=d()("http://localhost:2000/"),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).login=function(){var e=a.refs.input.input.value.trim(),t=a.state.users.userList;if(e.length){for(var s in t)if(t[s]===e)return void f.a.info("\u804a\u5929\u5ba4\u5df2\u7ecf\u6709\u8fd9\u4e2a\u7528\u6237\u4e86\uff0c\u8bf7\u91cd\u65b0\u8d77\u4e00\u4e2a\u540d\u5b57");a.uid=a.get_uid(),p.emit("login",{username:e,uid:a.uid}),a.setState({showLogin:!1})}else f.a.info("\u8bf7\u8f93\u5165\u4e00\u4e2a\u7528\u6237\u540d\uff01\uff01")},a.get_uid=function(e){return"".concat((new Date).getTime()).concat(Math.floor(89999*Math.random()))},a.send=function(e){if(a.message=a.refs.message.input.value,0!==a.message.trim().length){var t="".concat((new Date).getTime()).concat(Math.floor(9999*Math.random())),s={message:a.message.trim(),uid:a.uid,id:t};p.emit("message",s),a.refs.message.state.value="",setTimeout(function(e){return a.refs.messages.scrollBy(0,999999)},100)}else f.a.info("\u4f60\u8fd8\u5565\u5b50\u90fd\u8fd8\u6ca1\u6709\u8f93\u5165\u5c31\u884c\u53d1\u9001\u4e86\u561b")},a.state={showLogin:!0,users:{userCount:0,userList:{}},messageList:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.on("users",function(t){e.setState({users:t})}),p.on("receive_message",function(t){e.setState({messageList:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.showLogin,s=t.users,r=t.messageList,i=s.userCount,o=s.userList;return a?n.a.createElement("div",{className:"App"},n.a.createElement(h.a,{placeholder:"\u8f93\u5165\u4e00\u4e2a\u540d\u5b57\u6492",allowClear:!0,ref:"input",onPressEnter:this.login}),n.a.createElement(v.a,{onClick:this.login,className:"login"},"\u767b\u5f55")):n.a.createElement("div",{className:"room"},n.a.createElement("div",{className:"inner"},n.a.createElement("header",null,"\u6b22\u8fce\u6765\u5230\u8e0f\u6d6a\u804a\u5929\u5ba4\uff0c\u5f53\u524d\u804a\u5929\u5ba4\u5171",i,"\u4eba"),n.a.createElement("div",{className:"content"},n.a.createElement("ul",{className:"user-list"},Object.entries(o).map(function(e){return n.a.createElement("li",{className:"user-list-item",key:e[0]},n.a.createElement(E.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf"}},e[1].substring(0,2)),e[1])})),n.a.createElement("ul",{className:"message-list",ref:"messages"},r.map(function(t){return n.a.createElement("li",{key:t.message.id,className:t.message.uid===e.uid?"message-list-item me":"message-list-item"},t.message.uid===e.uid&&n.a.createElement("span",{className:"message-content"},t.message.message),n.a.createElement(E.a,{style:{color:"#f56a00",backgroundColor:"#fde3cf"}},t.username&&t.username.substring(0,2)),t.message.uid!==e.uid&&n.a.createElement("span",{className:"message-content"},t.message.message))}))),n.a.createElement("footer",null,n.a.createElement(h.a,{placeholder:"\u8bf7\u8f93\u5165\u6d88\u606f",ref:"message",onPressEnter:this.send}),n.a.createElement(v.a,{className:"send",onClick:this.send},"\u53d1\u9001"))))}}]),t}(s.Component),b=(a(196),a(32)),k=a(112),N="USERS";var y=Object(b.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{userCount:0,userList:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.data;default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=Object(b.c)(y);i.a.render(n.a.createElement(k.a,{store:L},n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[117,1,2]]]);
//# sourceMappingURL=main.672fe50a.chunk.js.map