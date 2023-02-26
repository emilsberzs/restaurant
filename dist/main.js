(()=>{"use strict";var e,n,t,r,o,a,i,c,s,u,d,l,p,m,f={28:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),u=new URL(t(562),t.b),d=new URL(t(562),t.b),l=i()(o()),p=s()(u),m=s()(d);l.push([e.id,"h1 {\n    display: grid;\n    text-align: center;\n    background: url("+p+");\n    height: 200px;\n    font-size: 5em;\n    align-items: center;\n    margin-top: 0px;\n}\n\nheader {\n    background: url("+m+");\n}\n\nnav {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n\n}\n\n\nnav a {\n    display: grid;\n    text-decoration: none;\n    color: black;\n    font-weight: bolder;\n    font-size: 2em;\n    background-color: blanchedalmond;\n    justify-content: center;\n}\n\n#usp {\n    display: grid;\n    grid-template-columns: 2fr 1fr 2fr 1fr 2fr;\n    grid-template-rows: 1fr 1fr 1fr;\n}\n\n\n\n#usp div {\n    border: 2px dotted black;\n    border-radius: 30px;\n    padding: 20px;\n}\n\n#usp1 {\n    grid-column: 1;\n    grid-row: 2;\n}\n\n#usp2 {\n    grid-column: 3;\n    grid-row: 4;\n}\n\n#usp3 {\n    grid-column: 5;\n    grid-row: 2;\n}\n\n#usp-image {\n    grid-column: 3;\n    grid-row: 2;\n    margin-left: auto;\n    margin-right: auto;\n}",""]);const f=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var d=[].concat(e[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var p=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var d=t(a[u]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},562:(e,n,t)=>{e.exports=t.p+"81293ff9030337a98c8a.jpg"}},h={};function g(e){var n=h[e];if(void 0!==n)return n.exports;var t=h[e]={id:e,exports:{}};return f[e](t,t.exports,g),t.exports}g.m=f,g.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return g.d(n,{a:n}),n},g.d=(e,n)=>{for(var t in n)g.o(n,t)&&!g.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),g.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;g.g.importScripts&&(e=g.g.location+"");var n=g.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var t=n.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=e})(),g.b=document.baseURI||self.location.href,g.nc=void 0,e=g(379),n=g.n(e),t=g(795),r=g.n(t),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),u=g.n(s),d=g(589),l=g.n(d),p=g(28),(m={}).styleTagTransform=l(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=u(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.getElementById("content"),n=document.createElement("header"),t=document.createElement("nav"),r=document.createElement("h1");r.innerHTML="Restaurante";const o=document.createElement("a");o.setAttribute("href","#"),o.innerHTML="HOME";const a=document.createElement("a");a.setAttribute("href","#"),a.innerHTML="MENU";const i=document.createElement("a");i.setAttribute("href","#"),i.innerHTML="CONTACT US",t.append(o,a,i),n.appendChild(r),e.appendChild(n),e.appendChild(t)}(),function(){const e=document.getElementById("content"),n=document.createElement("main"),t=document.createElement("div");t.setAttribute("id","usp");const r=document.createElement("div");r.setAttribute("id","usp1"),r.innerHTML="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.";const o=document.createElement("div");o.setAttribute("id","usp2"),o.innerHTML="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.";const a=document.createElement("div");a.setAttribute("id","usp3"),a.innerHTML="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.";const i=document.createElement("img");i.setAttribute("id","usp-image"),i.setAttribute("src","../src/image2.jpg"),i.setAttribute("height","200px"),t.append(r,o,a,i),n.appendChild(t),e.appendChild(n)}()})();