(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{"0Owb":function(e,t,a){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},n.apply(this,arguments)}a.d(t,"a",(function(){return n}))},"7ZSp":function(e,t,a){},JBu9:function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),r=a("q1tI"),l=a.n(r),o=a("dEAq"),c=a("MZF8"),u=(a("OxFa"),e=>{var t=e.location,a=Object(r["useContext"])(o["context"]),n=a.base,u=a.locale,i=a.config.locales,s=i.find((e=>{var t=e.name;return t!==u}));function m(e){var a=n.replace("/".concat(u),""),r=t.pathname.replace(n,a)||"/";if(e!==i[0].name){var l="".concat(a,"/").concat(e).replace(/\/\//,"/"),o=t.pathname.replace(n.replace(/^\/$/,"//"),"");return"".concat(l).concat(o).replace(/\/$/,"")}return r}return s?l.a.createElement("div",{className:"__dumi-default-locale-select","data-locale-count":i.length},i.length>2?l.a.createElement("select",{value:u,onChange:e=>c["a"].push(m(e.target.value))},i.map((e=>l.a.createElement("option",{value:e.name,key:e.name},e.label)))):l.a.createElement(o["Link"],{to:m(s.name)},s.label)):null}),i=u,s=(a("jp8u"),e=>{var t=e.onMobileMenuClick,a=e.navPrefix,n=e.location,c=Object(r["useContext"])(o["context"]),u=c.base,s=c.config,m=s.mode,d=s.title,f=s.logo,p=c.nav;return l.a.createElement("div",{className:"__dumi-default-navbar","data-mode":m},l.a.createElement("button",{className:"__dumi-default-navbar-toggle",onClick:t}),l.a.createElement(o["Link"],{className:"__dumi-default-navbar-logo",style:{backgroundImage:f&&"url('".concat(f,"')")},to:u,"data-plaintext":!1===f||void 0},d),l.a.createElement("nav",null,a,p.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&l.a.createElement("ul",null,e.children.map((e=>l.a.createElement("li",{key:e.path},l.a.createElement(o["NavLink"],{to:e.path},e.title)))));return l.a.createElement("span",{key:e.title||e.path},e.path?l.a.createElement(o["NavLink"],{to:e.path,key:e.path},e.title):e.title,a)})),l.a.createElement(i,{location:n})))}),m=s,d=a("0Owb");function f(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}function p(e,t){if(null==e)return{};var a,n,r=f(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a("mAF5");var h=e=>{var t=e.slugs,a=p(e,["slugs"]);return l.a.createElement("ul",Object(d["a"])({role:"slug-list"},a),t.filter((e=>{var t=e.depth;return t>1&&t<4})).map((e=>l.a.createElement("li",{key:e.heading,title:e.value,"data-depth":e.depth},l.a.createElement(o["AnchorLink"],{to:"#".concat(e.heading)},l.a.createElement("span",null,e.value))))))},v=h,y=(a("hQjr"),e=>{var t=e.mobileMenuCollapsed,a=e.location,n=Object(r["useContext"])(o["context"]),c=n.config,u=c.logo,s=c.title,m=c.description,d=c.mode,f=c.repository.url,p=n.menu,h=n.nav,y=n.base,b=n.meta,g=Boolean((b.hero||b.features||b.gapless)&&"site"===d)||!1===b.sidemenu||void 0;return l.a.createElement("div",{className:"__dumi-default-menu","data-mode":d,"data-hidden":g,"data-mobile-show":!t||void 0},l.a.createElement("div",{className:"__dumi-default-menu-inner"},l.a.createElement("div",{className:"__dumi-default-menu-header"},l.a.createElement(o["Link"],{to:y,className:"__dumi-default-menu-logo",style:{backgroundImage:u&&"url('".concat(u,"')")}}),l.a.createElement("h1",null,s),l.a.createElement("p",null,m),/github\.com/.test(f)&&"doc"===d&&l.a.createElement("p",null,l.a.createElement("object",{type:"image/svg+xml",data:"https://img.shields.io/github/stars".concat(f.match(/((\/[^\/]+){2})$/)[1],"?style=social")}))),h.length?l.a.createElement("div",{className:"__dumi-default-menu-mobile-area"},l.a.createElement("ul",{className:"__dumi-default-menu-nav-list"},h.map((e=>{var t,a=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&l.a.createElement("ul",null,e.children.map((e=>l.a.createElement("li",{key:e.path||e.title},l.a.createElement(o["NavLink"],{to:e.path},e.title)))));return l.a.createElement("li",{key:e.path||e.title},e.path?l.a.createElement(o["NavLink"],{to:e.path},e.title):e.title,a)}))),l.a.createElement(i,{location:a})):l.a.createElement("div",{className:"__dumi-default-menu-doc-locale"},l.a.createElement(i,{location:a})),l.a.createElement("ul",{className:"__dumi-default-menu-list"},!g&&p.map((e=>{var t,n=Boolean(null===(t=b.slugs)||void 0===t?void 0:t.length),r=e.children&&Boolean(e.children.length),c="menu"===b.toc&&!r&&n&&e.path===a.pathname.replace(/([^^])\/$/,"$1");return l.a.createElement("li",{key:e.path||e.title},l.a.createElement(o["NavLink"],{to:e.path,exact:!(e.children&&e.children.length)},e.title),Boolean(e.children&&e.children.length)&&l.a.createElement("ul",null,e.children.map((e=>l.a.createElement("li",{key:e.path},l.a.createElement(o["NavLink"],{to:e.path,exact:!0},l.a.createElement("span",null,e.title)),Boolean("menu"===b.toc&&"undefined"!==typeof window&&e.path===a.pathname&&n)&&l.a.createElement(v,{slugs:b.slugs}))))),c&&l.a.createElement(v,{slugs:b.slugs}))})))))}),b=y,g=(a("KAdo"),()=>{var e=Object(r["useState"])(""),t=Object(n["a"])(e,2),a=t[0],c=t[1],u=Object(r["useState"])([]),i=Object(n["a"])(u,2),s=i[0],m=i[1],f=Object(r["useRef"])(),p=Object(o["useSearch"])(a);return Object(r["useEffect"])((()=>{Array.isArray(p)?m(p):"function"===typeof p&&p(".".concat(f.current.className))}),[p]),l.a.createElement("div",{className:"__dumi-default-search"},l.a.createElement("input",Object(d["a"])({className:"__dumi-default-search-input",type:"search",ref:f},Array.isArray(p)?{value:a,onChange:e=>c(e.target.value)}:{})),l.a.createElement("ul",null,s.map((e=>{var t;return l.a.createElement("li",{key:e.path,onClick:()=>c("")},l.a.createElement(o["AnchorLink"],{to:e.path},(null===(t=e.parent)||void 0===t?void 0:t.title)&&l.a.createElement("span",null,e.parent.title),e.title))}))))}),E=(a("7ZSp"),e=>l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"__dumi-default-layout-hero"},e.image&&l.a.createElement("img",{src:e.image}),l.a.createElement("h1",null,e.title),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.desc}}),e.actions&&e.actions.map((e=>l.a.createElement(o["Link"],{to:e.link,key:e.text},l.a.createElement("button",{type:"button"},e.text))))))),O=e=>l.a.createElement("div",{className:"__dumi-default-layout-features"},e.map((e=>l.a.createElement("dl",{key:e.title,style:{backgroundImage:e.icon?"url(".concat(e.icon,")"):void 0}},e.link?l.a.createElement(o["Link"],{to:e.link},l.a.createElement("dt",null,e.title)):l.a.createElement("dt",null,e.title),l.a.createElement("dd",{dangerouslySetInnerHTML:{__html:e.desc}}))))),_=e=>{var t,a,c=e.children,u=e.location,i=Object(r["useContext"])(o["context"]),s=i.config,d=s.mode,f=s.repository,p=i.meta,h=i.locale,y=f.url,_=f.branch,j=f.platform,k=Object(r["useState"])(!0),w=Object(n["a"])(k,2),S=w[0],N=w[1],A="site"===d,L=A&&p.hero,x=A&&p.features,P=!1!==p.sidemenu&&!L&&!x&&!p.gapless,M=!L&&!x&&Boolean(null===(t=p.slugs)||void 0===t?void 0:t.length)&&("content"===p.toc||void 0===p.toc)&&!p.gapless,C=/^zh|cn$/i.test(h),I=new Date(p.updatedTime),$="".concat(I.toLocaleDateString([],{hour12:!1})," ").concat(I.toLocaleTimeString([],{hour12:!1})),B={github:"GitHub",gitlab:"GitLab"}[(null===(a=(y||"").match(/(github|gitlab)/))||void 0===a?void 0:a[1])||"nothing"]||j;return l.a.createElement("div",{className:"__dumi-default-layout","data-route":u.pathname,"data-show-sidemenu":String(P),"data-show-slugs":String(M),"data-site-mode":A,"data-gapless":String(!!p.gapless),onClick:()=>{S||N(!0)}},l.a.createElement(m,{location:u,navPrefix:l.a.createElement(g,null),onMobileMenuClick:e=>{N((e=>!e)),e.stopPropagation()}}),l.a.createElement(b,{mobileMenuCollapsed:S,location:u}),M&&l.a.createElement(v,{slugs:p.slugs,className:"__dumi-default-layout-toc"}),L&&E(p.hero),x&&O(p.features),l.a.createElement("div",{className:"__dumi-default-layout-content"},c,!L&&!x&&p.filePath&&!p.gapless&&l.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},B&&l.a.createElement(o["Link"],{to:"".concat(y,"/edit/").concat(_,"/").concat(p.filePath)},C?"\u5728 ".concat(B," \u4e0a\u7f16\u8f91\u6b64\u9875"):"Edit this doc on ".concat(B)),l.a.createElement("span",{"data-updated-text":C?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last update: "},$)),(L||x)&&p.footer&&l.a.createElement("div",{className:"__dumi-default-layout-footer",dangerouslySetInnerHTML:{__html:p.footer}})))};t["default"]=_},KAdo:function(e,t,a){},KcUY:function(e,t,a){"use strict";function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(a("q1tI")),l=c(a("RGYn")),o=c(a("nLCz"));function c(e){return e&&e.__esModule?e:{default:e}}function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a["default"]=e,t&&t.set(e,a),a}function s(e,t){return h(e)||p(e,t)||d(e,t)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function p(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)if(a.push(o.value),t&&a.length===t)break}catch(u){r=!0,l=u}finally{try{n||null==c["return"]||c["return"]()}finally{if(r)throw l}}return a}}function h(e){if(Array.isArray(e))return e}function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var g=function(e,t){var a=function(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var l=n[1].replace(/([^^])\/$/,"$1");return y(y({},(null===(e=n[0].find((function(e){var t=e.path;return t===l})))||void 0===e?void 0:e.meta)||{}),{},{__pathname:t})},n=(0,r.useState)(a(e,t)),l=s(n,2),o=l[0],c=l[1];return(0,r.useLayoutEffect)((function(){c(a(e,t))}),[t]),o},E=function(e,t){var a=function(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(null===(t=n[0].find((function(e){return n[1].startsWith("/".concat(e.name))})))||void 0===t?void 0:t.name)||e[0].name},n=(0,r.useState)(a(e,t)),l=s(n,2),o=l[0],c=l[1];return(0,r.useLayoutEffect)((function(){c(a(e,t))}),[t]),o},O=function(e,t,a){var n=function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];for(var r=a[0].navs[a[1]]||[],l="*",o=r.length-1;o>=0;o-=1){var c=r[o],u=[c].concat(c.children).filter(Boolean),i=u.find((function(e){return e.path&&new RegExp("^".concat(e.path.replace(/\.html$/,""),"(/|.|$)")).test(a[2])}));if(i){l=i.path;break}}return(null===(e=a[0].menus[a[1]])||void 0===e?void 0:e[l])||[]},l=(0,r.useState)(n(e,t,a)),o=s(l,2),c=o[0],u=o[1];return(0,r.useLayoutEffect)((function(){u(n(e,t,a))}),[e.navs,e.menus,t,a]),c},_=function(e,t,a){var n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n[0]===n[1][0].name?n[2].path:"".concat(a.path,"/").concat(e).replace(/\/\//,"/")},l=(0,r.useState)(n(e,t,a)),o=s(l,2),c=o[0],u=o[1];return(0,r.useLayoutEffect)((function(){u(n(e,t,a))}),[e]),c},j=function e(t){var a;return null===(a=t.find((function(t){return!!t.__dumiRoot||!!t.routes&&e(t.routes)})))||void 0===a?void 0:a.routes},k=function(e){var t=e.location,a=e.route,n=e.children,c=t.pathname.replace(a.path.replace(/^\/$/,"//"),""),u=j(e.routes)||[],i=g(u,t.pathname),s=E(l["default"].locales,c),m=O(l["default"],s,t.pathname),d=_(s,l["default"].locales,a);return r["default"].createElement(o["default"].Provider,{value:{config:l["default"],meta:i.__pathname===t.pathname?i:{},locale:s,nav:l["default"].navs[s]||[],menu:m,base:d,routes:u}},n)},w=k;t["default"]=w},OxFa:function(e,t,a){},hQjr:function(e,t,a){},jp8u:function(e,t,a){},mAF5:function(e,t,a){},tJVT:function(e,t,a){"use strict";function n(e){if(Array.isArray(e))return e}function r(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0)if(a.push(o.value),t&&a.length===t)break}catch(u){r=!0,l=u}finally{try{n||null==c["return"]||c["return"]()}finally{if(r)throw l}}return a}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function o(e,t){if(e){if("string"===typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){return n(e)||r(e,t)||o(e,t)||c()}a.d(t,"a",(function(){return u}))}}]);