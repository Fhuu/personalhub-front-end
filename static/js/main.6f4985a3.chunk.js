(this.webpackJsonppersonalhub=this.webpackJsonppersonalhub||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/Logo.f1b4d0fd.PNG"},function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),i=n.n(r),l=(n(13),n(14),n(15),n(1)),c=n(2),u=n(3),s=n(4),m=(n(16),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"explanation"},o.a.createElement("div",{className:"explanations",id:"explanation1"},o.a.createElement("div",{className:"content-container"},o.a.createElement("p",null,"Lets Meet adalah Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))),o.a.createElement("div",{className:"explanations",id:"explanation2"},o.a.createElement("div",{className:"content-container"},o.a.createElement("p",null,"The platform is to lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))),o.a.createElement("div",{className:"explanations",id:"explanation3"},o.a.createElement("div",{className:"content-container"},o.a.createElement("p",null,"Me, the creator is to lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))))}}]),n}(o.a.Component)),d=(n(17),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"login",value:function(){fetch("/user/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:document.getElementById("username-field").value,password:document.getElementById("password-field").value})}).then((function(e){e.json().then((function(e){"1"===e.loginStatus&&window.location.reload()}))}))}},{key:"render",value:function(){return i.a.createPortal(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"login-form-container"},o.a.createElement("div",{id:"overlay"},o.a.createElement("form",{id:"login-form"},o.a.createElement("label",{htmlFor:"username"},"Username"),o.a.createElement("input",{type:"text",id:"username-field",placeholder:"username",autoFocus:"on"}),o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",id:"password-field",placeholder:"password"}),o.a.createElement("br",null),o.a.createElement("input",{type:"button",value:"Log in",id:"login-btn",onClick:this.login}))))),document.getElementById("form"))}}]),n}(o.a.Component)),p=(n(18),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"signup",value:function(){fetch("/user/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:document.getElementById("username-field").value,password:document.getElementById("password-field").value})}).then((function(e){e.json().then((function(e){"1"===e.loginStatus&&window.location.reload()}))}))}},{key:"render",value:function(){return i.a.createPortal(o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"signup-form-container"},o.a.createElement("div",{id:"overlay"},o.a.createElement("form",{id:"signup-form"},o.a.createElement("label",{htmlFor:"username"},"Username"),o.a.createElement("input",{type:"text",id:"username-field",placeholder:"username",autoFocus:"on"}),o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",id:"email-field",placeholder:"email"}),o.a.createElement("label",{htmlFor:"password"},"Password"),o.a.createElement("input",{type:"password",id:"password-field",placeholder:"password"}),o.a.createElement("br",null),o.a.createElement("input",{type:"button",value:"Sign Up",id:"signup-btn",onClick:this.login}))))),document.getElementById("form"))}}]),n}(o.a.Component)),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){fetch("/user/checkSession",{method:"GET"}).then((function(e){e&&e.json().then((function(e){a.setState((function(){return{loginStatus:e.loginStatus,username:e.username}}))}))}))},a.changeStateToShowLoginForm=function(){a.setState({showLoginForm:!0})},a.changeStateToShowSignupForm=function(){a.setState({showSignupForm:!0})},a.showForm=function(){return a.state.showLoginForm?(document.getElementsByTagName("body")[0].style.overflow="hidden",o.a.createElement(d,null)):a.state.showSignupForm?(document.getElementsByTagName("body")[0].style.overflow="hidden",o.a.createElement(p,null)):a.state.loginStatus?(console.log("logged in"),o.a.createElement("li",{id:"username"},"Hi, ",a.state.username)):o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{id:"show-login-form",onClick:a.changeStateToShowLoginForm},"Log In"),o.a.createElement("li",{id:"show-signup-form",onClick:a.changeStateToShowSignupForm},"Sign up"))},a.state={showLoginForm:!1,showSignupForm:!1,loginStatus:!1,username:""},a}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"user-form"},o.a.createElement(this.showForm,null))}}]),n}(o.a.Component),g=n(7),h=n.n(g),E=(n(19),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"side-menu"},o.a.createElement("img",{id:"logo",src:h.a}),o.a.createElement("ul",{id:"navigation"},o.a.createElement(f,null),o.a.createElement("li",null,"Create room")))}}]),n}(o.a.Component)),b=(n(20),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"footer"},o.a.createElement("span",null,"Created by React ",o.a.createElement("b",null,"-")," Self Project"),o.a.createElement("span",null,"Contact me."),o.a.createElement("span",null,"Logo created by ",o.a.createElement("b",null,o.a.createElement("a",{href:"https://studio.tailorbrands.com/"},"https://studio.tailorbrands.com/"))))}}]),n}(o.a.Component)),v=(n(21),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"content"},o.a.createElement("div",{id:"explanation-container"},o.a.createElement(m,null)),o.a.createElement("div",{id:"side-menu-container"},o.a.createElement(E,null)))}}]),n}(o.a.Component));var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null),o.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6f4985a3.chunk.js.map