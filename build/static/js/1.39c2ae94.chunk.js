(this.webpackJsonpfiretable=this.webpackJsonpfiretable||[]).push([[1],{301:function(e,n,t){"use strict";var r=t(0),o=t.n(r),i=t(4),a=t.n(i),u=t(19),c=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function l(e,n){var t=function(e){var n=e.name;if(n&&-1!==n.lastIndexOf(".")&&!e.type){var t=n.split(".").pop().toLowerCase(),r=c.get(t);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof t.path){var r=e.webkitRelativePath;Object.defineProperty(t,"path",{value:"string"===typeof n?n:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}var s=[".DS_Store","Thumbs.db"];function f(e){return u.__awaiter(this,void 0,void 0,(function(){return u.__generator(this,(function(n){return[2,(t=e,t.dataTransfer&&e.dataTransfer?d(e.dataTransfer,e.type):p(e))];var t}))}))}function p(e){return(null!==e.target&&e.target.files?v(e.target.files):[]).map((function(e){return l(e)}))}function d(e,n){return u.__awaiter(this,void 0,void 0,(function(){var t;return u.__generator(this,(function(r){switch(r.label){case 0:return e.items?(t=v(e.items).filter((function(e){return"file"===e.kind})),"drop"!==n?[2,t]:[4,Promise.all(t.map(b))]):[3,2];case 1:return[2,g(y(r.sent()))];case 2:return[2,g(v(e.files).map((function(e){return l(e)})))]}}))}))}function g(e){return e.filter((function(e){return-1===s.indexOf(e.name)}))}function v(e){for(var n=[],t=0;t<e.length;t++){var r=e[t];n.push(r)}return n}function b(e){if("function"!==typeof e.webkitGetAsEntry)return m(e);var n=e.webkitGetAsEntry();return n&&n.isDirectory?h(n):m(e)}function y(e){return e.reduce((function(e,n){return u.__spread(e,Array.isArray(n)?y(n):[n])}),[])}function m(e){var n=e.getAsFile();if(!n)return Promise.reject(e+" is not a File");var t=l(n);return Promise.resolve(t)}function D(e){return u.__awaiter(this,void 0,void 0,(function(){return u.__generator(this,(function(n){return[2,e.isDirectory?h(e):O(e)]}))}))}function h(e){var n=e.createReader();return new Promise((function(e,t){var r=[];!function o(){var i=this;n.readEntries((function(n){return u.__awaiter(i,void 0,void 0,(function(){var i,a,c;return u.__generator(this,(function(u){switch(u.label){case 0:if(n.length)return[3,5];u.label=1;case 1:return u.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return i=u.sent(),e(i),[3,4];case 3:return a=u.sent(),t(a),[3,4];case 4:return[3,6];case 5:c=Promise.all(n.map(D)),r.push(c),o(),u.label=6;case 6:return[2]}}))}))}),(function(e){t(e)}))}()}))}function O(e){return u.__awaiter(this,void 0,void 0,(function(){return u.__generator(this,(function(n){return[2,new Promise((function(n,t){e.file((function(t){var r=l(t,e.fullPath);n(r)}),(function(e){t(e)}))}))]}))}))}var j=t(569),w=t.n(j);function F(e,n){return"application/x-moz-file"===e.type||w()(e,n)}function A(e,n,t){if(k(e.size)){if(k(n)&&k(t))return e.size>=n&&e.size<=t;if(k(n))return e.size>=n;if(k(t))return e.size<=t}return!0}function k(e){return void 0!==e&&null!==e}function P(e,n,t,r){return e.every((function(e){return F(e,n)&&A(e,t,r)}))}function E(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function C(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function _(e){e.preventDefault()}function x(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function S(e){return-1!==e.indexOf("Edge/")}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return x(e)||S(e)}function z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return n.some((function(n){return!E(e)&&n&&n.apply(void 0,[e].concat(r)),E(e)}))}}function L(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(t,!0).forEach((function(n){B(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function B(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function M(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",(function(){return J}));var q=Object(r.forwardRef)((function(e,n){var t=e.children,i=J(M(e,["children"])),a=i.open,u=M(i,["open"]);return Object(r.useImperativeHandle)(n,(function(){return{open:a}}),[a]),o.a.createElement(r.Fragment,null,t(K({},u,{open:a})))}));q.displayName="Dropzone",q.propTypes={children:a.a.func,accept:a.a.oneOfType([a.a.string,a.a.arrayOf(a.a.string)]),multiple:a.a.bool,preventDropOnDocument:a.a.bool,noClick:a.a.bool,noKeyboard:a.a.bool,noDrag:a.a.bool,noDragEventsBubbling:a.a.bool,minSize:a.a.number,maxSize:a.a.number,disabled:a.a.bool,getFilesFromEvent:a.a.func,onFileDialogCancel:a.a.func,onDragEnter:a.a.func,onDragLeave:a.a.func,onDragOver:a.a.func,onDrop:a.a.func,onDropAccepted:a.a.func,onDropRejected:a.a.func};var G={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]};function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.accept,t=e.disabled,o=void 0!==t&&t,i=e.getFilesFromEvent,a=void 0===i?f:i,u=e.maxSize,c=void 0===u?1/0:u,l=e.minSize,s=void 0===l?0:l,p=e.multiple,d=void 0===p||p,g=e.onDragEnter,v=e.onDragLeave,b=e.onDragOver,y=e.onDrop,m=e.onDropAccepted,D=e.onDropRejected,h=e.onFileDialogCancel,O=e.preventDropOnDocument,j=void 0===O||O,w=e.noClick,k=void 0!==w&&w,x=e.noKeyboard,S=void 0!==x&&x,I=e.noDrag,q=void 0!==I&&I,J=e.noDragEventsBubbling,W=void 0!==J&&J,$=Object(r.useRef)(null),H=Object(r.useRef)(null),Q=Object(r.useReducer)(N,G),U=R(Q,2),V=U[0],X=U[1],Y=V.isFocused,Z=V.isFileDialogActive,ee=V.draggedFiles,ne=Object(r.useCallback)((function(){H.current&&(X({type:"openDialog"}),H.current.value=null,H.current.click())}),[X]),te=function(){Z&&setTimeout((function(){H.current&&(H.current.files.length||(X({type:"closeDialog"}),"function"===typeof h&&h()))}),300)};Object(r.useEffect)((function(){return window.addEventListener("focus",te,!1),function(){window.removeEventListener("focus",te,!1)}}),[H,Z,h]);var re=Object(r.useCallback)((function(e){$.current&&$.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),ne()))}),[$,H]),oe=Object(r.useCallback)((function(){X({type:"focus"})}),[]),ie=Object(r.useCallback)((function(){X({type:"blur"})}),[]),ae=Object(r.useCallback)((function(){k||(T()?setTimeout(ne,0):ne())}),[H,k]),ue=Object(r.useRef)([]),ce=function(e){$.current&&$.current.contains(e.target)||(e.preventDefault(),ue.current=[])};Object(r.useEffect)((function(){return j&&(document.addEventListener("dragover",_,!1),document.addEventListener("drop",ce,!1)),function(){j&&(document.removeEventListener("dragover",_),document.removeEventListener("drop",ce))}}),[$,j]);var le=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),be(e),-1===ue.current.indexOf(e.target)&&(ue.current=[].concat(L(ue.current),[e.target])),C(e)&&Promise.resolve(a(e)).then((function(n){E(e)&&!W||(X({draggedFiles:n,isDragActive:!0,type:"setDraggedFiles"}),g&&g(e))}))}),[a,g,W]),se=Object(r.useCallback)((function(e){if(e.preventDefault(),e.persist(),be(e),e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(n){}return C(e)&&b&&b(e),!1}),[b,W]),fe=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),be(e);var n=ue.current.filter((function(n){return n!==e.target&&$.current&&$.current.contains(n)}));ue.current=n,n.length>0||(X({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),C(e)&&v&&v(e))}),[$,v,W]),pe=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),be(e),ue.current=[],X({type:"reset"}),C(e)&&Promise.resolve(a(e)).then((function(t){if(!E(e)||W){var r=[],o=[];t.forEach((function(e){F(e,n)&&A(e,s,c)?r.push(e):o.push(e)})),!d&&r.length>1&&o.push.apply(o,L(r.splice(0))),X({acceptedFiles:r,rejectedFiles:o,type:"setFiles"}),y&&y(r,o,e),o.length>0&&D&&D(o,e),r.length>0&&m&&m(r,e)}}))}),[d,n,s,c,a,y,m,D,W]),de=function(e){return o?null:e},ge=function(e){return S?null:de(e)},ve=function(e){return q?null:de(e)},be=function(e){W&&e.stopPropagation()},ye=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,t=void 0===n?"ref":n,r=e.onKeyDown,i=e.onFocus,a=e.onBlur,u=e.onClick,c=e.onDragEnter,l=e.onDragOver,s=e.onDragLeave,f=e.onDrop,p=M(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return K(B({onKeyDown:ge(z(r,re)),onFocus:ge(z(i,oe)),onBlur:ge(z(a,ie)),onClick:de(z(u,ae)),onDragEnter:ve(z(c,le)),onDragOver:ve(z(l,se)),onDragLeave:ve(z(s,fe)),onDrop:ve(z(f,pe))},t,$),o||S?{}:{tabIndex:0},{},p)}}),[$,re,oe,ie,ae,le,se,fe,pe,S,q,o]),me=Object(r.useCallback)((function(e){e.stopPropagation()}),[]),De=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,r=void 0===t?"ref":t,o=e.onChange,i=e.onClick,a=M(e,["refKey","onChange","onClick"]),u=B({accept:n,multiple:d,type:"file",style:{display:"none"},onChange:de(z(o,pe)),onClick:de(z(i,me)),autoComplete:"off",tabIndex:-1},r,H);return K({},u,{},a)}}),[H,n,d,pe,o]),he=ee.length,Oe=d||he<=1,je=he>0&&P(ee,n,s,c),we=he>0&&(!je||!Oe);return K({},V,{isDragAccept:je,isDragReject:we,isFocused:Y&&!o,getRootProps:ye,getInputProps:De,rootRef:$,inputRef:H,open:de(ne)})}function N(e,n){switch(n.type){case"focus":return K({},e,{isFocused:!0});case"blur":return K({},e,{isFocused:!1});case"openDialog":return K({},e,{isFileDialogActive:!0});case"closeDialog":return K({},e,{isFileDialogActive:!1});case"setDraggedFiles":var t=n.isDragActive;return K({},e,{draggedFiles:n.draggedFiles,isDragActive:t});case"setFiles":return K({},e,{acceptedFiles:n.acceptedFiles,rejectedFiles:n.rejectedFiles});case"reset":return K({},e,{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[]});default:return e}}},569:function(e,n){e.exports=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";n.__esModule=!0,n.default=function(e,n){if(e&&n){var t=Array.isArray(n)?n:n.split(","),r=e.name||"",o=e.type||"",i=o.replace(/\/.*$/,"");return t.some((function(e){var n=e.trim();return"."===n.charAt(0)?r.toLowerCase().endsWith(n.toLowerCase()):n.endsWith("/*")?i===n.replace(/\/.*$/,""):o===n}))}return!0}}])}}]);
//# sourceMappingURL=1.39c2ae94.chunk.js.map