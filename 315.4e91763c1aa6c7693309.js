"use strict";(self.webpackChunktypescript_react_project_roku_craft=self.webpackChunktypescript_react_project_roku_craft||[]).push([[315],{4603:(e,t,r)=>{e.exports=r(3853)},6540:(e,t,r)=>{e.exports=r(5287)},4848:(e,t,r)=>{e.exports=r(1020)},3853:(e,t,r)=>{var n,i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,c=Object.prototype.hasOwnProperty,u=(e,t,r,n)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of a(t))!c.call(e,u)&&u!==r&&i(e,u,{get:()=>t[u],enumerable:!(n=o(t,u))||n.enumerable});return e},s={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(s,{ReducerType:()=>ge,SHOULD_AUTOBATCH:()=>z,TaskAbortError:()=>Ue,Tuple:()=>T,addListener:()=>ut,asyncThunkCreator:()=>we,autoBatchEnhancer:()=>U,buildCreateSlice:()=>be,clearAllListeners:()=>st,combineSlices:()=>jt,configureStore:()=>K,createAction:()=>j,createActionCreatorInvariantMiddleware:()=>_,createAsyncThunk:()=>de,createDraftSafeSelector:()=>h,createDraftSafeSelectorCreator:()=>y,createDynamicMiddleware:()=>yt,createEntityAdapter:()=>Ne,createImmutableStateInvariantMiddleware:()=>I,createListenerMiddleware:()=>dt,createNextState:()=>l.produce,createReducer:()=>J,createSelector:()=>f.createSelector,createSelectorCreator:()=>f.createSelectorCreator,createSerializableStateInvariantMiddleware:()=>$,createSlice:()=>Ee,current:()=>l.current,findNonSerializableValue:()=>D,formatProdErrorMessage:()=>vt,freeze:()=>l.freeze,isActionCreator:()=>v,isAllOf:()=>ee,isAnyOf:()=>Z,isAsyncThunkAction:()=>ce,isDraft:()=>l.isDraft,isFluxStandardAction:()=>S,isFulfilled:()=>ae,isImmutableDefault:()=>x,isPending:()=>ne,isPlain:()=>N,isRejected:()=>ie,isRejectedWithValue:()=>oe,lruMemoize:()=>f.lruMemoize,miniSerializeError:()=>fe,nanoid:()=>Q,original:()=>l.original,prepareAutoBatched:()=>q,removeListener:()=>lt,unwrapResult:()=>pe,weakMapMemoize:()=>f.weakMapMemoize}),e.exports=(n=s,u(i({},"__esModule",{value:!0}),n)),((e,t,r)=>{u(e,t,"default"),r&&u(r,t,"default")})(s,r(8895),e.exports);var l=r(9407),f=r(2885),d=r(9407),p=r(2885),y=(...e)=>{let t=(0,p.createSelectorCreator)(...e),r=Object.assign(((...e)=>{let r=t(...e),n=(e,...t)=>r((0,d.isDraft)(e)?(0,d.current)(e):e,...t);return Object.assign(n,r),n}),{withTypes:()=>r});return r},h=y(p.weakMapMemoize),w=r(8895),g=r(8895),m=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?g.compose:g.compose.apply(null,arguments)},b=(typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__,r(9069)),O=r(8895),E=e=>e&&"function"==typeof e.match;function j(e,t){function r(...r){if(t){let n=t(...r);if(!n)throw new Error(vt(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:r[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>(0,O.isAction)(t)&&t.type===e,r}function v(e){return"function"==typeof e&&"type"in e&&E(e)}function S(e){return(0,O.isAction)(e)&&Object.keys(e).every(A)}function A(e){return["type","payload","error","meta"].indexOf(e)>-1}function _(e={}){return()=>e=>t=>e(t)}var M=r(9407);function P(e,t){for(let r of e)if(t(r))return r}var T=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function C(e){return(0,M.isDraftable)(e)?(0,M.produce)(e,(()=>{})):e}function k(e,t,r){if(e.has(t)){let n=e.get(t);return r.update&&(n=r.update(n,t,e),e.set(t,n)),n}if(!r.insert)throw new Error(vt(10));let n=r.insert(t,e);return e.set(t,n),n}function x(e){return"object"!=typeof e||null==e||Object.isFrozen(e)}function I(e={}){return()=>e=>t=>e(t)}var R=r(8895);function N(e){let t=typeof e;return null==e||"string"===t||"boolean"===t||"number"===t||Array.isArray(e)||(0,R.isPlainObject)(e)}function D(e,t="",r=N,n,i=[],o){let a;if(!r(e))return{keyPath:t||"<root>",value:e};if("object"!=typeof e||null===e||o?.has(e))return!1;let c=null!=n?n(e):Object.entries(e),u=i.length>0;for(let[e,s]of c){let c=t?t+"."+e:e;if(!u||!i.some((e=>e instanceof RegExp?e.test(c):c===e))){if(!r(s))return{keyPath:c,value:s};if("object"==typeof s&&(a=D(s,c,r,n,i,o),a))return a}}return o&&L(e)&&o.add(e),!1}function L(e){if(!Object.isFrozen(e))return!1;for(let t of Object.values(e))if("object"==typeof t&&null!==t&&!L(t))return!1;return!0}function $(e={}){return()=>e=>t=>e(t)}var B=()=>function(e){let{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:i=!0}=e??{},o=new T;return t&&(function(e){return"boolean"==typeof e}(t)?o.push(b.thunk):o.push((0,b.withExtraArgument)(t.extraArgument))),o},z="RTK_autoBatch",q=()=>e=>({payload:e,meta:{[z]:!0}}),W=e=>t=>{setTimeout(t,e)},V=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:W(10),U=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),i=!0,o=!1,a=!1,c=new Set,u="tick"===e.type?queueMicrotask:"raf"===e.type?V:"callback"===e.type?e.queueNotification:W(e.timeout),s=()=>{a=!1,o&&(o=!1,c.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){let t=n.subscribe((()=>i&&e()));return c.add(e),()=>{t(),c.delete(e)}},dispatch(e){try{return i=!e?.meta?.[z],o=!i,o&&(a||(a=!0,u(s))),n.dispatch(e)}finally{i=!0}}})},X=e=>function(t){let{autoBatch:r=!0}=t??{},n=new T(e);return r&&n.push(U("object"==typeof r?r:void 0)),n},F=!0;function K(e){let t,r,n=B(),{reducer:i,middleware:o,devTools:a=!0,preloadedState:c,enhancers:u}=e||{};if("function"==typeof i)t=i;else{if(!(0,w.isPlainObject)(i))throw new Error(vt(1));t=(0,w.combineReducers)(i)}if(!F&&o&&"function"!=typeof o)throw new Error(vt(2));if("function"==typeof o){if(r=o(n),!F&&!Array.isArray(r))throw new Error(vt(3))}else r=n();if(!F&&r.some((e=>"function"!=typeof e)))throw new Error(vt(4));let s=w.compose;a&&(s=m({trace:!F,..."object"==typeof a&&a}));let l=(0,w.applyMiddleware)(...r),f=X(l);if(!F&&u&&"function"!=typeof u)throw new Error(vt(5));let d="function"==typeof u?u(f):f();if(!F&&!Array.isArray(d))throw new Error(vt(6));if(!F&&d.some((e=>"function"!=typeof e)))throw new Error(vt(7));!F&&r.length&&!d.includes(l)&&console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");let p=s(...d);return(0,w.createStore)(t,c,p)}var G=r(9407);function H(e){let t,r={},n=[],i={addCase(e,t){let n="string"==typeof e?e:e.type;if(!n)throw new Error(vt(28));if(n in r)throw new Error(vt(29));return r[n]=t,i},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),i),addDefaultCase:e=>(t=e,i)};return e(i),[r,n,t]}function J(e,t){let r,[n,i,o]=H(t);if(function(e){return"function"==typeof e}(e))r=()=>C(e());else{let t=C(e);r=()=>t}function a(e=r(),t){let a=[n[t.type],...i.filter((({matcher:e})=>e(t))).map((({reducer:e})=>e))];return 0===a.filter((e=>!!e)).length&&(a=[o]),a.reduce(((e,r)=>{if(r){if((0,G.isDraft)(e)){let n=r(e,t);return void 0===n?e:n}if((0,G.isDraftable)(e))return(0,G.produce)(e,(e=>r(e,t)));{let n=r(e,t);if(void 0===n){if(null===e)return e;throw new Error(vt(9))}return n}}return e}),e)}return a.getInitialState=r,a}var Q=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},Y=(e,t)=>E(e)?e.match(t):e(t);function Z(...e){return t=>e.some((e=>Y(e,t)))}function ee(...e){return t=>e.every((e=>Y(e,t)))}function te(e,t){if(!e||!e.meta)return!1;let r="string"==typeof e.meta.requestId,n=t.indexOf(e.meta.requestStatus)>-1;return r&&n}function re(e){return"function"==typeof e[0]&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function ne(...e){return 0===e.length?e=>te(e,["pending"]):re(e)?Z(...e.map((e=>e.pending))):ne()(e[0])}function ie(...e){return 0===e.length?e=>te(e,["rejected"]):re(e)?Z(...e.map((e=>e.rejected))):ie()(e[0])}function oe(...e){return 0===e.length||re(e)?ee(ie(...e),(e=>e&&e.meta&&e.meta.rejectedWithValue)):oe()(e[0])}function ae(...e){return 0===e.length?e=>te(e,["fulfilled"]):re(e)?Z(...e.map((e=>e.fulfilled))):ae()(e[0])}function ce(...e){return 0===e.length?e=>te(e,["pending","fulfilled","rejected"]):re(e)?Z(...e.flatMap((e=>[e.pending,e.rejected,e.fulfilled]))):ce()(e[0])}var ue=["name","message","stack","code"],se=class{constructor(e,t){this.payload=e,this.meta=t}_type},le=class{constructor(e,t){this.payload=e,this.meta=t}_type},fe=e=>{if("object"==typeof e&&null!==e){let t={};for(let r of ue)"string"==typeof e[r]&&(t[r]=e[r]);return t}return{message:String(e)}},de=(()=>{function e(e,t,r){let n=j(e+"/fulfilled",((e,t,r,n)=>({payload:e,meta:{...n||{},arg:r,requestId:t,requestStatus:"fulfilled"}}))),i=j(e+"/pending",((e,t,r)=>({payload:void 0,meta:{...r||{},arg:t,requestId:e,requestStatus:"pending"}}))),o=j(e+"/rejected",((e,t,n,i,o)=>({payload:i,error:(r&&r.serializeError||fe)(e||"Rejected"),meta:{...o||{},arg:n,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:"AbortError"===e?.name,condition:"ConditionError"===e?.name}})));return Object.assign((function(e){return(a,c,u)=>{let s,l,f=r?.idGenerator?r.idGenerator(e):Q(),d=new AbortController;function p(e){l=e,d.abort()}let y=async function(){let y;try{let o=r?.condition?.(e,{getState:c,extra:u});if(function(e){return null!==e&&"object"==typeof e&&"function"==typeof e.then}(o)&&(o=await o),!1===o||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};let h=new Promise(((e,t)=>{s=()=>{t({name:"AbortError",message:l||"Aborted"})},d.signal.addEventListener("abort",s)}));a(i(f,e,r?.getPendingMeta?.({requestId:f,arg:e},{getState:c,extra:u}))),y=await Promise.race([h,Promise.resolve(t(e,{dispatch:a,getState:c,extra:u,requestId:f,signal:d.signal,abort:p,rejectWithValue:(e,t)=>new se(e,t),fulfillWithValue:(e,t)=>new le(e,t)})).then((t=>{if(t instanceof se)throw t;return t instanceof le?n(t.payload,f,e,t.meta):n(t,f,e)}))])}catch(t){y=t instanceof se?o(null,f,e,t.payload,t.meta):o(t,f,e)}finally{s&&d.signal.removeEventListener("abort",s)}return r&&!r.dispatchConditionRejection&&o.match(y)&&y.meta.condition||a(y),y}();return Object.assign(y,{abort:p,requestId:f,arg:e,unwrap:()=>y.then(pe)})}}),{pending:i,rejected:o,fulfilled:n,settled:Z(o,n),typePrefix:e})}return e.withTypes=()=>e,e})();function pe(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var ye,he=Symbol.for("rtk-slice-createasyncthunk"),we={[he]:de},ge=((ye=ge||{}).reducer="reducer",ye.reducerWithPrepare="reducerWithPrepare",ye.asyncThunk="asyncThunk",ye);function me(e,t){return`${e}/${t}`}function be({creators:e}={}){let t=e?.asyncThunk?.[he];return function(e){let{name:r,reducerPath:n=r}=e;if(!r)throw new Error(vt(11));let i=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},o=Object.keys(i),a={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(e,t){let r="string"==typeof e?e:e.type;if(!r)throw new Error(vt(12));if(r in a.sliceCaseReducersByType)throw new Error(vt(13));return a.sliceCaseReducersByType[r]=t,c},addMatcher:(e,t)=>(a.sliceMatchers.push({matcher:e,reducer:t}),c),exposeAction:(e,t)=>(a.actionCreators[e]=t,c),exposeCaseReducer:(e,t)=>(a.sliceCaseReducersByName[e]=t,c)};function u(){let[t={},r=[],n]="function"==typeof e.extraReducers?H(e.extraReducers):[e.extraReducers],i={...t,...a.sliceCaseReducersByType};return J(e.initialState,(e=>{for(let t in i)e.addCase(t,i[t]);for(let t of a.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)}))}o.forEach((n=>{let o=i[n],a={reducerName:n,type:me(r,n),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(o)?function({type:e,reducerName:t,createNotation:r},n,i){let o,a;if("reducer"in n){if(r&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(n))throw new Error(vt(17));o=n.reducer,a=n.prepare}else o=n;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?j(e,a):j(e))}(a,o,c):function({type:e,reducerName:t},r,n,i){if(!i)throw new Error(vt(18));let{payloadCreator:o,fulfilled:a,pending:c,rejected:u,settled:s,options:l}=r,f=i(e,o,l);n.exposeAction(t,f),a&&n.addCase(f.fulfilled,a),c&&n.addCase(f.pending,c),u&&n.addCase(f.rejected,u),s&&n.addMatcher(f.settled,s),n.exposeCaseReducer(t,{fulfilled:a||je,pending:c||je,rejected:u||je,settled:s||je})}(a,o,c,t)}));let s,l=e=>e,f=new Map;function d(e,t){return s||(s=u()),s(e,t)}function p(){return s||(s=u()),s.getInitialState()}function y(t,r=!1){function n(e){let n=e[t];return typeof n>"u"&&r&&(n=p()),n}function i(t=l){let n=k(f,r,{insert:()=>new WeakMap});return k(n,t,{insert:()=>{let n={};for(let[i,o]of Object.entries(e.selectors??{}))n[i]=Oe(o,t,p,r);return n}})}return{reducerPath:t,getSelectors:i,get selectors(){return i(n)},selectSlice:n}}let h={name:r,reducer:d,actions:a.actionCreators,caseReducers:a.sliceCaseReducersByName,getInitialState:p,...y(n),injectInto(e,{reducerPath:t,...r}={}){let i=t??n;return e.inject({reducerPath:i,reducer:d},r),{...h,...y(i,!0)}}};return h}}function Oe(e,t,r,n){function i(i,...o){let a=t(i);return typeof a>"u"&&n&&(a=r()),e(a,...o)}return i.unwrapped=e,i}var Ee=be();function je(){}var ve=r(9407),Se=r(9407),Ae=Se.isDraft;function _e(e){let t=Me(((t,r)=>e(r)));return function(e){return t(e,void 0)}}function Me(e){return function(t,r){let n=t=>{!function(e){return S(e)}(r)?e(r,t):e(r.payload,t)};return Ae(t)?(n(t),t):(0,Se.produce)(t,n)}}var Pe=r(9407);function Te(e,t){return t(e)}function Ce(e){return Array.isArray(e)||(e=Object.values(e)),e}function ke(e){return(0,Pe.isDraft)(e)?(0,Pe.current)(e):e}function xe(e,t,r){e=Ce(e);let n=ke(r.ids),i=new Set(n),o=[],a=[];for(let r of e){let e=Te(r,t);i.has(e)?a.push({id:e,changes:r}):o.push(r)}return[o,a,n]}function Ie(e){function t(t,r){let n=Te(t,e);n in r.entities||(r.ids.push(n),r.entities[n]=t)}function r(e,r){e=Ce(e);for(let n of e)t(n,r)}function n(t,r){let n=Te(t,e);n in r.entities||r.ids.push(n),r.entities[n]=t}function i(e,t){let r=!1;e.forEach((e=>{e in t.entities&&(delete t.entities[e],r=!0)})),r&&(t.ids=t.ids.filter((e=>e in t.entities)))}function o(t,r){let n={},i={};t.forEach((e=>{e.id in r.entities&&(i[e.id]={id:e.id,changes:{...i[e.id]?i[e.id].changes:null,...e.changes}})})),(t=Object.values(i)).length>0&&t.filter((t=>function(t,r,n){let i=n.entities[r.id];if(void 0===i)return!1;let o=Object.assign({},i,r.changes),a=Te(o,e),c=a!==r.id;return c&&(t[r.id]=a,delete n.entities[r.id]),n.entities[a]=o,c}(n,t,r))).length>0&&(r.ids=Object.values(r.entities).map((t=>Te(t,e))))}function a(t,n){let[i,a]=xe(t,e,n);o(a,n),r(i,n)}return{removeAll:_e((function(e){Object.assign(e,{ids:[],entities:{}})})),addOne:Me(t),addMany:Me(r),setOne:Me(n),setMany:Me((function(e,t){e=Ce(e);for(let r of e)n(r,t)})),setAll:Me((function(e,t){e=Ce(e),t.ids=[],t.entities={},r(e,t)})),updateOne:Me((function(e,t){return o([e],t)})),updateMany:Me(o),upsertOne:Me((function(e,t){return a([e],t)})),upsertMany:Me(a),removeOne:Me((function(e,t){return i([e],t)})),removeMany:Me(i)}}function Re(e,t,r){let n=function(e,t,r){let n=0,i=e.length;for(;n<i;){let o=n+i>>>1;r(t,e[o])>=0?n=o+1:i=o}return n}(e,t,r);return e.splice(n,0,t),e}function Ne(e={}){let{selectId:t,sortComparer:r}={sortComparer:!1,selectId:e=>e.id,...e},n=r?function(e,t){let{removeOne:r,removeMany:n,removeAll:i}=Ie(e);function o(t,r,n){t=Ce(t);let i=new Set(n??(0,ve.current)(r.ids)),o=t.filter((t=>!i.has(Te(t,e))));0!==o.length&&s(r,o)}function a(t,r){if(0!==(t=Ce(t)).length){for(let n of t)delete r.entities[e(n)];s(r,t)}}function c(t,r){let n=!1,i=!1;for(let o of t){let t=r.entities[o.id];if(!t)continue;n=!0,Object.assign(t,o.changes);let a=e(t);if(o.id!==a){i=!0,delete r.entities[o.id];let e=r.ids.indexOf(o.id);r.ids[e]=a,r.entities[a]=t}}n&&s(r,[],n,i)}function u(t,r){let[n,i,a]=xe(t,e,r);i.length&&c(i,r),n.length&&o(n,r,a)}let s=(r,n,i,o)=>{let a=ke(r.entities),c=ke(r.ids),u=r.entities,s=c;o&&(s=Array.from(new Set(c)));let l=[];for(let e of s){let t=a[e];t&&l.push(t)}let f=0===l.length;for(let r of n)u[e(r)]=r,f||Re(l,r,t);f?l=n.slice().sort(t):i&&l.sort(t);let d=l.map(e);(function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length&&r<t.length;r++)if(e[r]!==t[r])return!1;return!0})(c,d)||(r.ids=d)};return{removeOne:r,removeMany:n,removeAll:i,addOne:Me((function(e,t){return o([e],t)})),updateOne:Me((function(e,t){return c([e],t)})),upsertOne:Me((function(e,t){return u([e],t)})),setOne:Me((function(e,t){return a([e],t)})),setMany:Me(a),setAll:Me((function(e,t){e=Ce(e),t.entities={},t.ids=[],o(e,t,[])})),addMany:Me(o),updateMany:Me(c),upsertMany:Me(u)}}(t,r):Ie(t),i=function(e){return{getInitialState:function(t={},r){let n=Object.assign({ids:[],entities:{}},t);return r?e.setAll(n,r):n}}}(n),o={getSelectors:function(e,t={}){let{createSelector:r=h}=t,n=e=>e.ids,i=e=>e.entities,o=r(n,i,((e,t)=>e.map((e=>t[e])))),a=(e,t)=>t,c=(e,t)=>e[t],u=r(n,(e=>e.length));if(!e)return{selectIds:n,selectEntities:i,selectAll:o,selectTotal:u,selectById:r(i,a,c)};let s=r(e,i);return{selectIds:r(e,n),selectEntities:s,selectAll:r(e,o),selectTotal:r(e,u),selectById:r(s,a,c)}}};return{selectId:t,sortComparer:r,...i,...o,...n}}var De=r(8895),Le="listener",$e="completed",Be="cancelled",ze=`task-${Be}`,qe=`task-${$e}`,We=`${Le}-${Be}`,Ve=`${Le}-${$e}`,Ue=class{constructor(e){this.code=e,this.message=`task ${Be} (reason: ${e})`}name="TaskAbortError";message},Xe=(e,t)=>{if("function"!=typeof e)throw new Error(vt(32))},Fe=()=>{},Ke=(e,t=Fe)=>(e.catch(t),e),Ge=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),He=(e,t)=>{let r=e.signal;r.aborted||("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},Je=e=>{if(e.aborted){let{reason:t}=e;throw new Ue(t)}};function Qe(e,t){let r=Fe;return new Promise(((n,i)=>{let o=()=>i(new Ue(e.reason));e.aborted?o():(r=Ge(e,o),t.finally((()=>r())).then(n,i))})).finally((()=>{r=Fe}))}var Ye=e=>t=>Ke(Qe(e,t).then((t=>(Je(e),t)))),Ze=e=>{let t=Ye(e);return e=>t(new Promise((t=>setTimeout(t,e))))},{assign:et}=Object,tt={},rt="listenerMiddleware",nt=(e,t)=>(r,n)=>{Xe(r);let i=new AbortController;(t=>{Ge(e,(()=>He(t,e.reason)))})(i);let o=(async(e,t)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(e){return{status:e instanceof Ue?"cancelled":"rejected",error:e}}finally{He(i,qe)}})((async()=>{Je(e),Je(i.signal);let t=await r({pause:Ye(i.signal),delay:Ze(i.signal),signal:i.signal});return Je(i.signal),t}));return n?.autoJoin&&t.push(o.catch(Fe)),{result:Ye(e)(o),cancel(){He(i,ze)}}},it=e=>{let{type:t,actionCreator:r,matcher:n,predicate:i,effect:o}=e;if(t)i=j(t).match;else if(r)t=r.type,i=r.match;else if(n)i=n;else if(!i)throw new Error(vt(21));return Xe(o),{predicate:i,type:t,effect:o}},ot=Object.assign((e=>{let{type:t,predicate:r,effect:n}=it(e);return{id:Q(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw new Error(vt(22))}}}),{withTypes:()=>ot}),at=e=>{e.pending.forEach((e=>{He(e,We)}))},ct=(e,t,r)=>{try{e(t,r)}catch(e){setTimeout((()=>{throw e}),0)}},ut=Object.assign(j(`${rt}/add`),{withTypes:()=>ut}),st=j(`${rt}/removeAll`),lt=Object.assign(j(`${rt}/remove`),{withTypes:()=>lt}),ft=(...e)=>{console.error(`${rt}/error`,...e)},dt=(e={})=>{let t=new Map,{extra:r,onError:n=ft}=e;Xe(n);let i=e=>{let r=P(Array.from(t.values()),(t=>t.effect===e.effect));return r||(r=ot(e)),(e=>(e.unsubscribe=()=>t.delete(e.id),t.set(e.id,e),t=>{e.unsubscribe(),t?.cancelActive&&at(e)}))(r)};Object.assign(i,{withTypes:()=>i});let o=e=>{let{type:r,effect:n,predicate:i}=it(e),o=P(Array.from(t.values()),(e=>("string"==typeof r?e.type===r:e.predicate===i)&&e.effect===n));return o&&(o.unsubscribe(),e.cancelActive&&at(o)),!!o};Object.assign(o,{withTypes:()=>o});let a=async(e,o,a,c)=>{let u=new AbortController,s=((e,t)=>(r,n)=>Ke((async(r,n)=>{Je(t);let i=()=>{},o=[new Promise(((t,n)=>{let o=e({predicate:r,effect:(e,r)=>{r.unsubscribe(),t([e,r.getState(),r.getOriginalState()])}});i=()=>{o(),n()}}))];null!=n&&o.push(new Promise((e=>setTimeout(e,n,null))));try{let e=await Qe(t,Promise.race(o));return Je(t),e}finally{i()}})(r,n)))(i,u.signal),l=[];try{e.pending.add(u),await Promise.resolve(e.effect(o,et({},a,{getOriginalState:c,condition:(e,t)=>s(e,t).then(Boolean),take:s,delay:Ze(u.signal),pause:Ye(u.signal),extra:r,signal:u.signal,fork:nt(u.signal,l),unsubscribe:e.unsubscribe,subscribe:()=>{t.set(e.id,e)},cancelActiveListeners:()=>{e.pending.forEach(((e,t,r)=>{e!==u&&(He(e,We),r.delete(e))}))},cancel:()=>{He(u,We),e.pending.delete(u)},throwIfCancelled:()=>{Je(u.signal)}})))}catch(e){e instanceof Ue||ct(n,e,{raisedBy:"effect"})}finally{await Promise.all(l),He(u,Ve),e.pending.delete(u)}},c=(e=>()=>{e.forEach(at),e.clear()})(t);return{middleware:e=>r=>u=>{if(!(0,De.isAction)(u))return r(u);if(ut.match(u))return i(u.payload);if(st.match(u))return void c();if(lt.match(u))return o(u.payload);let s,l=e.getState(),f=()=>{if(l===tt)throw new Error(vt(23));return l};try{if(s=r(u),t.size>0){let r=e.getState(),i=Array.from(t.values());for(let t of i){let i=!1;try{i=t.predicate(u,r,l)}catch(e){i=!1,ct(n,e,{raisedBy:"predicate"})}i&&a(t,u,e,f)}}}finally{l=tt}return s},startListening:i,stopListening:o,clearListeners:c}},pt=r(8895),yt=()=>{let e=Q(),t=new Map,r=Object.assign(j("dynamicMiddleware/add",((...t)=>({payload:t,meta:{instanceId:e}}))),{withTypes:()=>r}),n=Object.assign((function(...e){e.forEach((e=>{let r=P(Array.from(t.values()),(t=>t.middleware===e));r||(r=(e=>({id:Q(),middleware:e,applied:new Map}))(e)),t.set(r.id,r)}))}),{withTypes:()=>n}),i=ee(r,(e=>t=>t?.meta?.instanceId===e)(e));return{middleware:e=>r=>o=>i(o)?(n(...o.payload),e.dispatch):(e=>{let r=Array.from(t.values()).map((t=>k(t.applied,e,{insert:()=>t.middleware(e)})));return(0,pt.compose)(...r)})(e)(r)(o),addMiddleware:n,withMiddleware:r,instanceId:e}},ht=r(8895),wt=e=>e.flatMap((e=>(e=>"reducerPath"in e&&"string"==typeof e.reducerPath)(e)?[[e.reducerPath,e.reducer]]:Object.entries(e))),gt=Symbol.for("rtk-state-proxy-original"),mt=new WeakMap,bt=(e,t)=>k(mt,e,{insert:()=>new Proxy(e,{get:(e,r,n)=>{if(r===gt)return e;let i=Reflect.get(e,r,n);if(typeof i>"u"){let e=t[r.toString()];if(e){let t=e(void 0,{type:Q()});if(typeof t>"u")throw new Error(vt(24));return t}}return i}})}),Ot=e=>{if(!(e=>!!e&&!!e[gt])(e))throw new Error(vt(25));return e[gt]},Et=(e={})=>e;function jt(...e){let t=Object.fromEntries(wt(e)),r=()=>Object.keys(t).length?(0,ht.combineReducers)(t):Et,n=r();function i(e,t){return n(e,t)}i.withLazyLoadedSlices=()=>i;let o=Object.assign((function(e,r){return function(n,...i){return e(bt(r?r(n,...i):n,t),...i)}}),{original:Ot});return Object.assign(i,{inject:(e,o={})=>{let{reducerPath:a,reducer:c}=e,u=t[a];return!o.overrideExisting&&u&&u!==c||(t[a]=c,n=r()),i},selector:o})}function vt(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}},9069:e=>{var t,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,a={};function c(e){return({dispatch:t,getState:r})=>n=>i=>"function"==typeof i?i(t,r,e):n(i)}((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(a,{thunk:()=>u,withExtraArgument:()=>s}),e.exports=(t=a,((e,t,a,c)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))o.call(e,a)||undefined===a||r(e,a,{get:()=>t[a],enumerable:!(c=n(t,a))||c.enumerable});return e})(r({},"__esModule",{value:!0}),t));var u=c(),s=c},8895:e=>{var t,r=Object.defineProperty,n=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,o=Object.prototype.hasOwnProperty,a={};function c(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}((e,t)=>{for(var n in t)r(e,n,{get:t[n],enumerable:!0})})(a,{__DO_NOT_USE__ActionTypes:()=>l,applyMiddleware:()=>m,bindActionCreators:()=>w,combineReducers:()=>y,compose:()=>g,createStore:()=>d,isAction:()=>b,isPlainObject:()=>f,legacy_createStore:()=>p}),e.exports=(t=a,((e,t,a,c)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of i(t))o.call(e,a)||undefined===a||r(e,a,{get:()=>t[a],enumerable:!(c=n(t,a))||c.enumerable});return e})(r({},"__esModule",{value:!0}),t));var u=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),s=()=>Math.random().toString(36).substring(7).split("").join("."),l={INIT:`@@redux/INIT${s()}`,REPLACE:`@@redux/REPLACE${s()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${s()}`};function f(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function d(e,t,r){if("function"!=typeof e)throw new Error(c(2));if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(c(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(c(1));return r(d)(e,t)}let n=e,i=t,o=new Map,a=o,s=0,p=!1;function y(){a===o&&(a=new Map,o.forEach(((e,t)=>{a.set(t,e)})))}function h(){if(p)throw new Error(c(3));return i}function w(e){if("function"!=typeof e)throw new Error(c(4));if(p)throw new Error(c(5));let t=!0;y();const r=s++;return a.set(r,e),function(){if(t){if(p)throw new Error(c(6));t=!1,y(),a.delete(r),o=null}}}function g(e){if(!f(e))throw new Error(c(7));if(void 0===e.type)throw new Error(c(8));if("string"!=typeof e.type)throw new Error(c(17));if(p)throw new Error(c(9));try{p=!0,i=n(i,e)}finally{p=!1}return(o=a).forEach((e=>{e()})),e}return g({type:l.INIT}),{dispatch:g,subscribe:w,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error(c(10));n=e,g({type:l.REPLACE})},[u]:function(){const e=w;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(c(11));function r(){const e=t;e.next&&e.next(h())}return r(),{unsubscribe:e(r)}},[u](){return this}}}}}function p(e,t,r){return d(e,t,r)}function y(e){const t=Object.keys(e),r={};for(let n=0;n<t.length;n++){const i=t[n];"function"==typeof e[i]&&(r[i]=e[i])}const n=Object.keys(r);let i;try{!function(e){Object.keys(e).forEach((t=>{const r=e[t];if(void 0===r(void 0,{type:l.INIT}))throw new Error(c(12));if(void 0===r(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(r)}catch(e){i=e}return function(e={},t){if(i)throw i;let o=!1;const a={};for(let i=0;i<n.length;i++){const u=n[i],s=r[u],l=e[u],f=s(l,t);if(void 0===f)throw t&&t.type,new Error(c(14));a[u]=f,o=o||f!==l}return o=o||n.length!==Object.keys(e).length,o?a:e}}function h(e,t){return function(...r){return t(e.apply(this,r))}}function w(e,t){if("function"==typeof e)return h(e,t);if("object"!=typeof e||null===e)throw new Error(c(16));const r={};for(const n in e){const i=e[n];"function"==typeof i&&(r[n]=h(i,t))}return r}function g(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...r)=>e(t(...r))))}function m(...e){return t=>(r,n)=>{const i=t(r,n);let o=()=>{throw new Error(c(15))};const a={getState:i.getState,dispatch:(e,...t)=>o(e,...t)},u=e.map((e=>e(a)));return o=g(...u)(i.dispatch),{...i,dispatch:o}}}function b(e){return f(e)&&"type"in e&&"string"==typeof e.type}}}]);