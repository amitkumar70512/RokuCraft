"use strict";(self.webpackChunktypescript_react_project_roku_craft=self.webpackChunktypescript_react_project_roku_craft||[]).push([[199],{88249:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(91625);function o(e){void 0===e&&(e=(0,r.A)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(t){return e.body}}},70922:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(94243);function o(e,t){e.classList?e.classList.add(t):(0,r.A)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}},88394:(e,t,n)=>{n.d(t,{Ay:()=>c});var r=n(87828),o=!1,s=!1;try{var a={get passive(){return o=!0},get once(){return s=o=!0}};r.A&&(window.addEventListener("test",a,a),window.removeEventListener("test",a,!0))}catch(e){}const c=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!s){var a=r.once,c=r.capture,i=n;!s&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=i),e.addEventListener(t,i,o?r:c)}e.addEventListener(t,n,r)}},87828:(e,t,n)=>{n.d(t,{A:()=>r});const r=!("undefined"==typeof window||!window.document||!window.document.createElement)},56406:(e,t,n)=>{function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,{A:()=>r})},62660:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(91625);var o=/([A-Z])/g,s=/^ms-/;function a(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(s,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;const i=function(e,t){var n="",o="";if("string"==typeof t)return e.style.getPropertyValue(a(t))||function(e,t){return function(e){var t=(0,r.A)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}(e).getPropertyValue(a(t));Object.keys(t).forEach((function(r){var s=t[r];s||0===s?function(e){return!(!e||!c.test(e))}(r)?o+=r+"("+s+") ":n+=a(r)+": "+s+";":e.style.removeProperty(a(r))})),o&&(n+="transform: "+o+";"),e.style.cssText+=";"+n}},94243:(e,t,n)=>{function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}n.d(t,{A:()=>r})},1284:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(88394),o=n(95019);const s=function(e,t,n,s){return(0,r.Ay)(e,t,n,s),function(){(0,o.A)(e,t,n,s)}}},91625:(e,t,n)=>{function r(e){return e&&e.ownerDocument||document}n.d(t,{A:()=>r})},55003:(e,t,n)=>{n.d(t,{A:()=>o});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return r(e.querySelectorAll(t))}},78995:(e,t,n)=>{function r(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function o(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=r(e.className,t):e.setAttribute("class",r(e.className&&e.className.baseVal||"",t))}n.d(t,{A:()=>o})},95019:(e,t,n)=>{n.d(t,{A:()=>r});const r=function(e,t,n,r){var o=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}},11264:(e,t,n)=>{n.d(t,{A:()=>s});var r,o=n(87828);function s(e){if((!r&&0!==r||e)&&o.A){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),r=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return r}},15797:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(62660),o=n(1284);function s(e,t,n,s){var a,c,i;null==n&&(a=e,i=-1===(c=(0,r.A)(a,"transitionDuration")||"").indexOf("ms")?1e3:1,n=parseFloat(c)*i||0);var u=function(e,t,n){void 0===n&&(n=5);var r=!1,s=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent("transitionend",n,r),e.dispatchEvent(o)}}(e,0,!0)}),t+n),a=(0,o.A)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(s),a()}}(e,n,s),l=(0,o.A)(e,"transitionend",t);return function(){u(),l()}}},70426:(e,t,n)=>{n.d(t,{UU:()=>a});const r=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,o=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,s={};function a(e,t){return((t||s).jsx?o:r).test(e)}}}]);