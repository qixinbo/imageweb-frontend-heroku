(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7fc5"],{"78c1":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"test"},[a("b-navbar",{scopedSlots:t._u([{key:"brand",fn:function(){return[a("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[a("img",{attrs:{src:"/static/img/kaibu-banner.png",alt:"Lightweight UI components for Vue.js based on Bulma"}})])]},proxy:!0},{key:"start",fn:function(){return[a("b-navbar-item",{attrs:{href:"#"}},[t._v(" Home ")]),a("b-navbar-item",{attrs:{href:"#"}},[t._v(" Documentation ")]),t._l(t.value,(function(n){return a("b-navbar-dropdown",{key:n.name,attrs:{label:n.name}},[t._l(n.children,(function(n){return a("b-navbar-item",{key:n.name,attrs:{href:"#"}},[t._v(" "+t._s(n.name)+" ")])})),a("b-navbar-item",{attrs:{href:"#"}},[t._v(" Contact ")])],2)}))]},proxy:!0},{key:"end",fn:function(){return[a("b-navbar-item",{attrs:{tag:"div"}},[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button is-primary"},[a("strong",[t._v("Sign up")])]),a("a",{staticClass:"button is-light"},[t._v(" Log in ")])])])]},proxy:!0}])}),a("h1",[t._v(t._s(t.value))]),a("section",[a("b-button",{on:{click:t.clickMe}},[t._v("Click Me")])],1),a("h1",[t._v(t._s(t.value2))])],1)},r=[],o=a("bc3a"),c=a.n(o),i={name:"Test",data:function(){return{value:123,value2:"change after clicked"}},mounted:function(){var t=this;c.a.get("http://localhost:5000/").then((function(n){return t.value=n.data})).catch((function(t){console.log(t)}))},methods:{clickMe:function(){var t=this;c.a.get("http://localhost:5000/").then((function(n){return t.value2=n.data})).catch((function(t){console.log(t)}))}}},s=i,u=a("2877"),l=Object(u["a"])(s,e,r,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d0d7fc5.2d19da7b.js.map