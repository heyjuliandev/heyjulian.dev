import{r as x}from"./index.BVOCwoKb.js";var u={exports:{}},e={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function v(){if(c)return e;c=1;var i=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(s,t,r){var a=null;if(r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),"key"in t){r={};for(var l in t)l!=="key"&&(r[l]=t[l])}else r=t;return t=r.ref,{$$typeof:i,type:s,key:a,ref:t!==void 0?t:null,props:r}}return e.Fragment=n,e.jsx=o,e.jsxs=o,e}var d;function f(){return d||(d=1,u.exports=v()),u.exports}var p=f();function m(){const[i,n]=x.useState(!1);x.useEffect(()=>{const s=()=>{n(window.scrollY>200)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const o=()=>{window.scrollTo({top:0,behavior:"smooth"})};return p.jsx("button",{onClick:o,className:`fixed bottom-6 right-6 z-50 text-blue-400 hover:text-blue-300 text-3xl transition-opacity duration-500 ease-in-out ${i?"opacity-100":"opacity-0 pointer-events-none"}`,"aria-label":"Volver arriba",children:p.jsx("i",{className:"fas fa-arrow-up animate-bounce drop-shadow-sm"})})}export{m as default};
