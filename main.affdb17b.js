parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".container"),t=document.querySelector("table"),n=document.querySelector(".append-row"),r=document.querySelector(".remove-row"),o=document.querySelector(".append-column"),d=document.querySelector(".remove-column");e.addEventListener("click",function(e){if(!e.target.closest("button"))return!1;var l=t.tBodies[0].rows,c=l[0].cloneNode(!0),a=l[l.length-1],u=document.createElement("td");function i(e,t,n){if(e.disabled=!1,l[0].childElementCount===n)return t.disabled=!t.disabled,!1}function m(e,t,n){e.disabled=!1,t.disabled=!1,l.length===n&&(e.disabled=!e.disabled)}if(e.target===n&&l.length<10&&(t.tBodies[0].append(c),a=l[l.length-1],m(n,r,10)),e.target===r&&l.length>2&&(a.remove(),m(r,n,2)),e.target===o){for(var s=0;s<l.length;s++)l[s].append(u.cloneNode());i(d,o,10)}if(e.target===d){for(var g=0;g<l.length;g++)l[g].lastElementChild.remove(u);i(o,d,2)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.affdb17b.js.map