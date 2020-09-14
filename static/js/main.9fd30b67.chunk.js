(this["webpackJsonpplan-master"]=this["webpackJsonpplan-master"]||[]).push([[0],{164:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(30),c=t.n(r),o=(t(79),t(27)),s=t(6);t(28),t(80),t(82);function m(){return l.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("a",{href:"/plan-master/",className:"navbar-brand"},"tradecoder")),l.a.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#main-menu"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{id:"main-menu",className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/plan-master/",className:"nav-link"},"Set Plans")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/plan-master/shortplan/",className:"nav-link"},"Short Term Plan")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"/plan-master/longplan/",className:"nav-link"},"Long Term Plan"))))))}var u=t(8),i=t(23),d=t.n(i);function p(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),o=Object(u.a)(c,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){d.a.get("http://localhost:5000/shortplan").then((function(e){r(e.data.reverse())})).catch((function(e){return console.log(e)}))})),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("select",{selected:s,onChange:function(e){m(!0!==s)},className:"form-control"},l.a.createElement("option",null,"Open plans"),l.a.createElement("option",null,"Closed plans"))),t.filter((function(e){return e.open=s})).map((function(e){return l.a.createElement("div",{className:"shadow p-3"},l.a.createElement("h4",{className:"text-primary"},e.title),l.a.createElement("p",null,e.details," "),l.a.createElement("p",null,"Open date: ",e.plandate?e.plandate.substring(0,10):e.plandate,", Start Date: ",e.startdate?e.startdate.substring(0,10):e.startdate,", Deadline: ",e.deadline?e.deadline.substring(0,10):e.deadline," "))}))))}function E(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!0),o=Object(u.a)(c,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){d.a.get("http://localhost:5000/longplan").then((function(e){r(e.data.reverse())})).catch((function(e){return console.log(e)}))})),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement("select",{selected:s,onChange:function(e){m(!0!==s)},className:"form-control"},l.a.createElement("option",null,"Open plans"),l.a.createElement("option",null,"Closed plans"))),t.filter((function(e){return e.open=s})).map((function(e){return l.a.createElement("div",{className:"shadow p-3"},l.a.createElement("h4",{className:"text-primary"},e.title),l.a.createElement("p",null,e.details," "),l.a.createElement("p",null,"Open date: ",e.plandate?e.plandate.substring(0,10):e.plandate,", Start Date: ",e.startdate?e.startdate.substring(0,10):e.startdate,", Deadline: ",e.deadline?e.deadline.substring(0,10):e.deadline," "))}))))}var b=t(52),f=t.n(b);t(104);function v(){var e=Object(n.useState)("mamun"),a=Object(u.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)("shortplan"),o=Object(u.a)(c,2),s=o[0],m=o[1],i=Object(n.useState)(new Date),p=Object(u.a)(i,2),E=p[0],b=p[1],v=Object(n.useState)(new Date),g=Object(u.a)(v,2),h=g[0],N=g[1],O=Object(n.useState)(!0),j=Object(u.a)(O,2),S=j[0],w=j[1],y=Object(n.useState)(1),C=Object(u.a)(y,2),x=C[0],D=C[1],k=Object(n.useState)(""),q=Object(u.a)(k,2),P=q[0],B=q[1],J=Object(n.useState)(""),T=Object(u.a)(J,2),W=T[0],A=T[1],I=Object(n.useState)(""),L=Object(u.a)(I,2),M=L[0],U=L[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={username:t,type:s,startdate:E,duration:x,deadline:h,open:S,title:P,details:W,progress:M};d.a.post("http://localhost:5000/".concat(s,"/add"),a).then((function(e){window.location="/".concat(s)})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{type:"text",className:"form-control",value:t,onChange:function(e){r(e.target.value)},required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Plan type:"),l.a.createElement("select",{selected:s,onChange:function(e){m(e.target.value)},className:"form-control",required:!0},l.a.createElement("option",null,"shortplan"),l.a.createElement("option",null,"longplan"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Plan duration:"),l.a.createElement("input",{type:"number",min:"0",className:"form-control",value:x,onChange:function(e){D(e.target.value)},required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Start date:"),l.a.createElement("br",null),l.a.createElement(f.a,{selected:E,onChange:function(e){b(e>=new Date?e:new Date),N(e)},className:"form-control",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Deadline:"),l.a.createElement("br",null),l.a.createElement(f.a,{selected:h,onChange:function(e){N(e>=E?e:E)},className:"form-control",required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Open:"),l.a.createElement("select",{selected:S,onChange:function(e){w(e.target.value)},className:"form-control",required:!0},l.a.createElement("option",null,"true"),l.a.createElement("option",null,"false")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Plan title:"),l.a.createElement("input",{type:"text",className:"form-control",value:P,onChange:function(e){B(e.target.value)},required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Plan details:"),l.a.createElement("textarea",{className:"form-control",rows:"5",cols:"50",value:W,onChange:function(e){A(e.target.value)},required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Progress:"),l.a.createElement("input",{type:"text",className:"form-control",value:M,onChange:function(e){U(e.target.value)},required:!0})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add plan"))))}var g=function(){return l.a.createElement(o.a,null,l.a.createElement(m,null),l.a.createElement("div",{className:"p-4"},l.a.createElement("h6",{className:"text-center"},"Plan master- a roadmap for ultimate goals")),l.a.createElement(s.a,{path:"/plan-master/",exact:!0,component:v}),l.a.createElement(s.a,{path:"/plan-master/shortplan/",component:p}),l.a.createElement(s.a,{path:"/plan-master/longplan/",component:E}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,a,t){e.exports=t(164)},79:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.9fd30b67.chunk.js.map