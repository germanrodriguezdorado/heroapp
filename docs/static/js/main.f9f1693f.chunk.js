(this["webpackJsonp07-heroes-app"]=this["webpackJsonp07-heroes-app"]||[]).push([[0],{33:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(15),s=r.n(c),n=r(8),i=Object(t.createContext)(),l=r(3),o="[auth] login",h="[auth] logout",j=function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return Object(l.a)(Object(l.a)({},e.payload),{},{logged:!0});case h:return{logged:!1}}},u=r(6),b=r(2),d=r(0),m=function(e){var a=e.history,r=Object(t.useContext)(i).dispatch;return Object(d.jsxs)("div",{className:"container mt-5",children:[Object(d.jsx)("h1",{children:"Welcome to HeroApp"}),Object(d.jsx)("hr",{}),Object(d.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:o,payload:{name:"german"}}),a.replace(e)},children:"Login"})]})},p=function(){var e=Object(t.useContext)(i),a=e.user.name,r=e.dispatch,c=Object(b.g)();return Object(d.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(d.jsx)(u.b,{className:"navbar-brand",to:"/",children:"HeroApp"}),Object(d.jsx)("div",{className:"navbar-collapse",children:Object(d.jsxs)("div",{className:"navbar-nav",children:[Object(d.jsx)(u.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(d.jsx)(u.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(d.jsx)(u.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(d.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(d.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(d.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){r({type:h}),c.replace("/login")},children:"Logout"})]})})]})},O=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],v=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance,s=e.characters;return Object(d.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(d.jsxs)("div",{className:"row no-gutters",children:[Object(d.jsx)("div",{className:"col-md-4",children:Object(d.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img",alt:r})}),Object(d.jsx)("div",{className:"col-md-8",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:r}),Object(d.jsx)("p",{className:"card-text",children:t}),t!==s&&Object(d.jsx)("p",{className:"card-text",children:s}),Object(d.jsx)("p",{className:"card-text",children:Object(d.jsxs)("small",{className:"text-muted",children:[" ",c," "]})}),Object(d.jsx)(u.b,{to:"./hero/".concat(a),children:"M\xe1s..."})]})})]})})},x=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" is incorrect.'));return O.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(d.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:r.map((function(e){return Object(t.createElement)(v,Object(l.a)(Object(l.a)({},e),{},{key:e.id}))}))})},f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Marvel Screen"}),Object(d.jsx)("hr",{}),Object(d.jsx)(x,{publisher:"Marvel Comics"})]})},g=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"DC Screen"}),Object(d.jsx)("hr",{}),Object(d.jsx)(x,{publisher:"DC Comics"})]})},C=function(e){var a=e.history,r=Object(b.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,O.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(d.jsx)(b.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(d.jsxs)("div",{className:"row mt-5",children:[Object(d.jsx)("div",{className:"col-4",children:Object(d.jsx)("img",{src:"../assets/heroes/".concat(r,".jpg"),className:"img-thumbnail animate__animated animate__fadeInLeft",alt:s})}),Object(d.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(d.jsx)("h3",{children:s}),Object(d.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(d.jsxs)("li",{className:"list-group-item",children:[" ",Object(d.jsx)("b",{children:"Alter ego:"})," ",i," "]}),Object(d.jsxs)("li",{className:"list-group-item",children:[" ",Object(d.jsx)("b",{children:"Publisher:"})," ",n," "]}),Object(d.jsxs)("li",{className:"list-group-item",children:[" ",Object(d.jsx)("b",{children:"First Appearance:"})," ",l," "]})]}),Object(d.jsx)("h5",{children:" Characters "}),Object(d.jsx)("p",{children:o}),Object(d.jsx)("button",{className:"btn btn-outline-primary",onClick:function(){a.goBack()},children:"Return"})]})]})},_=r(18),N=r.n(_),y=r(7),k=function(e){var a=e.history,r=Object(b.h)(),c=N.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1],i=function(e){return"pepe"===e},o=function(e){var a,r,t,n=e.target,o=!1;"email"===n.name&&""!==n.value&&(i(n.value)?s(Object(l.a)(Object(l.a)({},c),{},(a={},Object(y.a)(a,n.name,n.value),Object(y.a)(a,"errors",0),a))):(o=!0,s(Object(l.a)(Object(l.a)({},c),{},(r={},Object(y.a)(r,n.name,n.value),Object(y.a)(r,"errors",1),r))))),o||s(Object(l.a)(Object(l.a)({},c),{},(t={},Object(y.a)(t,n.name,n.value),Object(y.a)(t,"errors",0),t)))};return[c,o,function(){s(e)}]}({searchText:s}),o=Object(n.a)(i,2),h=o[0],j=o[1],u=h.searchText,m=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLowerCase(),O.filter((function(a){return a.superhero.toLowerCase().includes(e)})))}(s)}),[s]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Search"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-5",children:[Object(d.jsx)("h4",{children:"Search form"}),Object(d.jsx)("hr",{}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(u))},children:[Object(d.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",autoComplete:"off",value:u,onChange:j}),Object(d.jsx)("button",{type:"submit",className:"btn btn-block btn-outline-primary mt-1",children:"Search"})]})]}),Object(d.jsxs)("div",{className:"col-7",children:[Object(d.jsx)("h4",{children:"Results"}),Object(d.jsx)("hr",{}),""===s&&Object(d.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==s&&0===m.length&&Object(d.jsxs)("div",{className:"alert alert-warning",children:["There's no hero with ",s]}),m.map((function(e){return Object(d.jsx)(v,Object(l.a)({},e),e.id)}))]})]})]})},M=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p,{}),Object(d.jsx)("div",{className:"container mt-2",children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{exact:!0,path:"/marvel",component:f}),Object(d.jsx)(b.b,{exact:!0,path:"/dc",component:g}),Object(d.jsx)(b.b,{exact:!0,path:"/search",component:k}),Object(d.jsx)(b.b,{exact:!0,path:"/hero/:heroeId",component:C}),Object(d.jsx)(b.a,{to:"/marvel"})]})})]})},S=r(11),D=["isAuthenticated","component"],w=function(e){var a=e.isAuthenticated,r=e.component,t=Object(S.a)(e,D);return localStorage.setItem("lastPath",t.location.pathname),Object(d.jsx)(b.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(d.jsx)(r,Object(l.a)({},e)):Object(d.jsx)(b.a,{to:"/login"})}}))},A=["isAuthenticated","component"],B=function(e){var a=e.isAuthenticated,r=e.component,t=Object(S.a)(e,A);return Object(d.jsx)(b.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(d.jsx)(b.a,{to:"/"}):Object(d.jsx)(r,Object(l.a)({},e))}}))},J=function(){var e=Object(t.useContext)(i).user;return Object(d.jsx)(u.a,{children:Object(d.jsx)("div",{children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(B,{path:"/login",component:m,isAuthenticated:e.logged}),Object(d.jsx)(w,{path:"/",component:M,isAuthenticated:e.logged})]})})})},T=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(t.useReducer)(j,{},T),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(d.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(d.jsx)(J,{})})};s.a.render(Object(d.jsx)(I,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.f9f1693f.chunk.js.map