(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-43fb356a":"ccc23478"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-43fb356a":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-43fb356a":"8b823318"}[e]+".css",o=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],d.parentNode.removeChild(d),r(s)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/logincontacts/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0f34":function(e,t,r){"use strict";var n=r("29a8"),a=r.n(n);a.a},"206d":function(e,t,r){"use strict";var n=r("4413"),a=r.n(n);a.a},"29a8":function(e,t,r){},"359c":function(e,t,r){e.exports=r.p+"img/github.a78d62dd.png"},4413:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-main",[r("whitelayout",[r("router-view")],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid form-wrapper"},[r("router-view")],1)},i=[],u=(r("0f34"),r("2877")),c={},l=Object(u["a"])(c,s,i,!1,null,"49bf5ce5",null),p=l.exports,d={name:"App",components:{Whitelayout:p},data:function(){return{}}},f=d,m=r("6544"),g=r.n(m),w=r("7496"),h=r("f6c4"),v=Object(u["a"])(f,a,o,!1,null,null,null),b=v.exports;g()(v,{VApp:w["a"],VMain:h["a"]});r("d3b7");var E=r("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-wrapper"},[n("v-form",{staticClass:"login-form justify-center rounded",on:{submit:e.login}},[n("div",{staticClass:"buttons"},[n("v-btn",{staticClass:"login-button blue darken-2 white--text",on:{click:function(t){e.loginForm=!0}}},[e._v("Вход")]),n("v-btn",{staticClass:"register-button blue darken-2 white--text",on:{click:function(t){e.loginForm=!1}}},[e._v("Регистрация")])],1),e.loginForm?n("div",{staticClass:"login"},[n("v-text-field",{attrs:{label:"Ваш email",type:"email",rules:[function(){return!e.loginEmailError||"Такого пользователя не существует"}],autocomplete:""},on:{click:function(t){e.loginEmailError=!1}},model:{value:e.userLoginEmail,callback:function(t){e.userLoginEmail=t},expression:"userLoginEmail"}}),n("v-text-field",{attrs:{rules:[function(){return!e.loginPasswordError||"Пароль не совпадает"}],label:"Ваш пароль","append-icon":e.passwordProps.show1?"mdi-eye":"mdi-eye-off",type:e.password1Type,autocomplete:""},on:{click:function(t){e.loginPasswordError=!1},"click:append":function(t){e.passwordProps.show1=!e.passwordProps.show1}},model:{value:e.userLoginPassword,callback:function(t){e.userLoginPassword=t},expression:"userLoginPassword"}})],1):e._e(),e.loginForm?e._e():n("div",{staticClass:"registration"},[n("v-text-field",{attrs:{label:"Ваш email",type:"email",rules:[function(){return e.$v.userRegisterEmail.email||"Введите корректный адрес почты"}],"validate-on-blur":"",autocomplete:""},model:{value:e.userRegisterEmail,callback:function(t){e.userRegisterEmail=t},expression:"userRegisterEmail"}}),n("v-text-field",{attrs:{label:"Ваш пароль","append-icon":e.passwordProps.show2?"mdi-eye":"mdi-eye-off",type:e.password2Type,rules:[function(){return e.$v.userRegisterPassword.minLength||"Пароль должен быть длиннее 6 символов"}],"validate-on-blur":"",autocomplete:""},on:{"click:append":function(t){e.passwordProps.show2=!e.passwordProps.show2}},model:{value:e.userRegisterPassword,callback:function(t){e.userRegisterPassword=t},expression:"userRegisterPassword"}}),n("v-text-field",{attrs:{label:"Повторите пароль",type:e.password3Type,"append-icon":e.passwordProps.show3?"mdi-eye":"mdi-eye-off",rules:[function(){return!!e.$v.userRepeatedPassword.sameAsPassword||"Пароли должны совпадать"}],"validate-on-blur":"",autocomplete:""},on:{"click:append":function(t){e.passwordProps.show3=!e.passwordProps.show3}},model:{value:e.userRepeatedPassword,callback:function(t){e.userRepeatedPassword=t},expression:"userRepeatedPassword"}})],1),n("v-btn",{staticClass:"submit-button",on:{click:e.login}},[e._v("Войти")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loginForm,expression:"!loginForm"}],staticClass:"register-variants"},[n("p",[e._v("Или войти с помощью")]),n("img",{attrs:{src:r("cebc"),alt:""}}),n("img",{attrs:{src:r("359c"),alt:""}})])],1)],1)},P=[],x=(r("caad"),r("2532"),r("96cf"),r("1da1")),R=r("b5ae"),k={data:function(){return{passwordProps:{show1:!0,show2:!0,show3:!0},loginEmailError:!1,loginPasswordError:!1,loginForm:!0,userLoginEmail:null,userLoginPassword:null,userRegisterEmail:null,userRegisterPassword:null,userRepeatedPassword:null}},computed:{password1Type:function(){return this.passwordProps.show1?"password":"text"},password2Type:function(){return this.passwordProps.show2?"password":"text"},password3Type:function(){return this.passwordProps.show3?"password":"text"}},methods:{login:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.loginForm){t.next=20;break}return r={email:e.userLoginEmail,password:e.userLoginPassword},t.prev=2,t.next=5,e.$store.dispatch("login",r);case 5:return t.next=7,e.$store.dispatch("GET_USER_DATA",{email:e.userLoginEmail});case 7:return t.t0=console,t.next=10,e.$store.state.userData;case 10:t.t1=t.sent,t.t0.log.call(t.t0,t.t1),e.$router.push("/contacts"),t.next=18;break;case 15:t.prev=15,t.t2=t["catch"](2),t.t2.message.includes("email")?(e.loginEmailError=!0,e.userLoginEmail=null):t.t2.message.includes("password")&&(e.loginPasswordError=!0,e.userLoginPassword=null);case 18:t.next=21;break;case 20:e.registration();case 21:case"end":return t.stop()}}),t,null,[[2,15]])})))()},registration:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={email:e.userRegisterEmail,password:e.userRegisterPassword},t.prev=1,t.next=4,e.$store.dispatch("registration",r);case 4:return t.next=6,e.$store.dispatch("login",r);case 6:e.$router.push("/contacts"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},validations:{userRegisterEmail:{email:R["email"],required:R["required"]},userRegisterPassword:{required:R["required"],minLength:Object(R["minLength"])(6)},userRepeatedPassword:{sameAsPassword:Object(R["sameAs"])("userRegisterPassword")}}},_=k,A=(r("206d"),r("8336")),T=r("4bd4"),S=r("8654"),L=Object(u["a"])(_,y,P,!1,null,null,null),j=L.exports;g()(L,{VBtn:A["a"],VForm:T["a"],VTextField:S["a"]}),n["a"].use(E["a"]);var O=[{path:"/",name:"Login",meta:{layout:"white"},component:j},{path:"/contacts",name:"Contacts",meta:{layout:"white"},component:function(){return r.e("chunk-43fb356a").then(r.bind(null,"c93c"))}}],C=new E["a"]({mode:"history",base:"/logincontacts/",routes:O}),D=C,I=r("2f62"),U=r("b85c"),$=r("59ca"),F=r.n($),M={state:{userEmail:"",userData:{}},mutations:{SET_USER_EMAIL:function(e,t){e.userEmail=t},SET_USER_DATA:function(e,t){e.userData=t},SET_NEW_CONTACT:function(e,t){e.userData.contacts.push(t)}},actions:{login:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,n=e.commit,a=t.email,o=t.password,r.prev=2,r.next=5,F.a.auth().signInWithEmailAndPassword(a,o);case 5:n("SET_USER_EMAIL",a),r.next=11;break;case 8:throw r.prev=8,r.t0=r["catch"](2),r.t0;case 11:case"end":return r.stop()}}),r,null,[[2,8]])})))()},registration:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.email,o=t.password,r.prev=2,r.next=5,F.a.auth().createUserWithEmailAndPassword(a,o);case 5:return s=r.sent,n("SET_USER_EMAIL",s.email),r.abrupt("return",s);case 10:throw r.prev=10,r.t0=r["catch"](2),r.t0;case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},GET_USER_DATA:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=t.email,r.prev=2,r.next=5,F.a.database().ref();case 5:return o=r.sent,o.on("value",(function(e){var t,r=e.val(),o=Object(U["a"])(r.profiles);try{for(o.s();!(t=o.n()).done;){var s=t.value;if(s.email===a){var i=s;n("SET_USER_DATA",i);break}}}catch(u){o.e(u)}finally{o.f()}}),(function(e){console.log("Error: "+e.code)})),r.abrupt("return",o);case 10:throw r.prev=10,r.t0=r["catch"](2),r.t0;case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},UPDATE_DATABASE:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,e.commit,n=t.userData,a=t.id,console.log(a),console.log(n),r.prev=4,r.next=7,F.a.database().ref("profiles/".concat(a-1));case 7:o=r.sent,o.update(n),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](4),console.log(r.t0);case 14:case"end":return r.stop()}}),r,null,[[4,11]])})))()}},getters:{USER_EMAIL:function(e){return e.userEmail},USER_DATA:function(e){return e.userData}}};n["a"].use(I["a"]);var N=new I["a"].Store({state:{},mutations:{},actions:{},getters:{},modules:{API:M}}),q=r("f309");n["a"].use(q["a"]);var B=new q["a"]({}),V=r("1dce"),W=r.n(V),G=(r("ea7b"),r("66ce"),r("bc3a"));n["a"].use(W.a);var z,H={apiKey:"AIzaSyCw3CEHFR4IUh5MwYwgXl-6eywvYITIxyw",authDomain:"loginapp-2d025.firebaseapp.com",databaseURL:"https://loginapp-2d025.firebaseio.com",projectId:"loginapp-2d025",storageBucket:"loginapp-2d025.appspot.com",messagingSenderId:"937196677059",appId:"1:937196677059:web:d6d366b649af32c7d47f76",measurementId:"G-WT919XT9N3"};n["a"].config.productionTip=!1,F.a.initializeApp(H),F.a.auth().onAuthStateChanged((function(){z||(z=new n["a"]({axios:G,router:D,store:N,vuetify:B,render:function(e){return e(b)}}).$mount("#app"))}))},cebc:function(e,t,r){e.exports=r.p+"img/google.ba36f437.png"}});
//# sourceMappingURL=app.372fa793.js.map