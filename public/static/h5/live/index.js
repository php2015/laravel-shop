!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=10)}({10:function(t,e,n){t.exports=n("cIYD")},"9EK/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"LiveIndex",components:{},data:function(){return{images:[],items:[]}},mounted:function(){var t=this;this.$get("/block/item/batchget?block_id=4").then((function(e){t.images=e.result.items})),this.$get("/live/batchget?state=1").then((function(e){t.items=e.result.items}))},methods:{}}},JkXe:function(t,e,n){"use strict";n.r(e);var i=n("9EK/"),r=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e.default=r.a},"KHd+":function(t,e,n){"use strict";function i(t,e,n,i,r,s,o,a){var u,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):r&&(u=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,e){return u.call(e),l(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}n.d(e,"a",(function(){return i}))},cIYD:function(t,e,n){"use strict";var i,r=(i=n("zHer"))&&i.__esModule?i:{default:i};new Vue({el:"#app",render:function(t){return t(r.default)}})},iuzs:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("van-swipe",{staticClass:"swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.images,(function(t,e){return n("van-swipe-item",{key:e},[n("img",{staticClass:"swipe-image",attrs:{src:t.image,alt:""}})])})),1),t._v(" "),t.items.length?n("div",{staticClass:"live-list-view"},[n("ul",{staticClass:"live-list"},t._l(t.items,(function(e,i){return n("li",{key:i},[n("a",{attrs:{href:e.m_url}},[n("div",{staticClass:"pic-box"},[n("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),n("div",{staticClass:"ctx-box"},[n("div",{staticClass:"title"},[t._v(t._s(e.title))])])])])})),0)]):n("div",{staticClass:"live-noaccess"},[t._v("当前没有直播内容")])],1)},r=[]},zHer:function(t,e,n){"use strict";n.r(e);var i=n("iuzs"),r=n("JkXe");for(var s in r)"default"!==s&&function(t){n.d(e,t,(function(){return r[t]}))}(s);var o=n("KHd+"),a=Object(o.a)(r.default,i.a,i.b,!1,null,"c63d1646",null);e.default=a.exports}});