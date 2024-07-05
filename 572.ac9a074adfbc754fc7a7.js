"use strict";(self.webpackChunktypescript_react_project_roku_craft=self.webpackChunktypescript_react_project_roku_craft||[]).push([[572],{47572:(t,e,n)=>{n.d(e,{_:()=>R});var o=n(96540),r=n(23181),i=n.n(r),a=n(94394),l=n.n(a),s=n(84684),d=n.n(s),c=n(99409),p=n(66557),m=n(73308);const h=t=>{const{colorScale:e}=t;return"string"==typeof e?c.getColorScale(e):e||[]},u=t=>{const{data:e,style:n}=t;return e.map(((t,o)=>{const r=d()({},t.labels,n.labels);return p.evaluateStyle(r,{datum:t,index:o,data:e})}))},y=t=>{const{orientation:e,theme:n}=t,o=function(t,e){void 0===e&&(e={});const n=t.style||{};return{parent:d()(n.parent,e.parent,{height:"100%",width:"100%"}),data:d()({},n.data,e.data),labels:d()({},n.labels,e.labels),border:d()({},n.border,e.border),title:d()({},n.title,e.title)}}(t,n&&n.legend&&n.legend.style?n.legend.style:{}),r=h(t),i="horizontal"===e,a=p.getPadding({padding:t.borderPadding});return Object.assign({},t,{style:o,isHorizontal:i,colorScale:r,borderPadding:a})},g=(t,e)=>{const{itemsPerRow:n,isHorizontal:o}=t;return n?o?e%n:Math.floor(e/n):o?e:0},b=(t,e)=>{const{itemsPerRow:n,isHorizontal:o}=t;return n?o?Math.floor(e/n):e%n:o?0:e},f=t=>{const{data:e}=t,n=t.style&&t.style.data||{},o=u(t);return e.map(((e,r)=>{const i=e.symbol||{},{fontSize:a}=o[r],l=i.size||n.size||a/2.5,s=t.symbolSpacer||Math.max(l,a);return{...e,size:l,symbolSpacer:s,fontSize:a,textSize:m.approximateTextSize(e.name,o[r]),column:g(t,r),row:b(t,r)}}))},x=(t,e)=>{const n=t.gutter||{},o="object"==typeof n?(n.left||0)+(n.right||0):n||0,r=l()(e,"column");return Object.keys(r).reduce(((t,e,n)=>{const i=r[e].map((t=>t.textSize.width+t.size+t.symbolSpacer+o));return t[n]=Math.max(...i),t}),[])},C=(t,e)=>{const n=t.rowGutter||{},o="object"==typeof n?(n.top||0)+(n.bottom||0):n||0,r=l()(e,"row");return Object.keys(r).reduce(((t,e,n)=>{const i=r[e].map((t=>t.textSize.height+t.symbolSpacer+o));return t[n]=Math.max(...i),t}),[])},w=t=>{const e=t.style&&t.style.title||{},n=m.approximateTextSize(t.title,e),o=e.padding||0;return{height:n.height+2*o||0,width:n.width+2*o||0}},S=(t,e)=>{const n=p.modifyProps(t,e,"legend"),o=Object.assign({},n,y(n)),{title:r,titleOrientation:i}=o,a=f(o),l=x(o,a),s=C(o,a),d=r?w(o):{height:0,width:0};return{height:"left"===i||"right"===i?Math.max(P(s),d.height):P(s)+d.height,width:"left"===i||"right"===i?P(l)+d.width:Math.max(P(l),d.width)}},z=(t,e)=>{const n=p.modifyProps(t,e,"legend"),o=Object.assign({},n,y(n)),{data:r,standalone:a,theme:l,padding:s,style:c,colorScale:m,gutter:h,rowGutter:g,borderPadding:b,title:z,titleOrientation:P,name:v,x:j=0,y:E=0}=o,O=f(o),A=x(o,O),_=C(o,O),k=u(o),M=z?w(o):{height:0,width:0},K="left"===P?M.width:0,R="top"===P?M.height:0,T=h&&"object"==typeof h&&h.left||0,H=g&&"object"==typeof g&&g.top||0,{height:G,width:N}=S(o,e),V=((t,e,n)=>{const{x:o,y:r,borderPadding:i,style:a}=t;return{x:o,y:r,height:(e||0)+i.top+i.bottom,width:(n||0)+i.left+i.right,style:Object.assign({fill:"none"},a.border)}})(o,G,N),B=((t,e)=>{const{title:n,titleOrientation:o,centerTitle:r,borderPadding:i}=t,{height:a,width:l}=e,s=(t=>{const{titleOrientation:e,centerTitle:n,titleComponent:o}=t,r=t.style&&t.style.title||{},i=o.props&&o.props.style||{},a=((t,e)=>{const n={textAnchor:"right"===t?"end":"start",verticalAnchor:"bottom"===t?"end":"start"};if(e){const e="top"===t||"bottom"===t;return{textAnchor:e?"middle":n.textAnchor,verticalAnchor:e?n.verticalAnchor:"middle"}}return n})(e,n);return Array.isArray(i)?i.map((t=>d()({},t,r,a))):d()({},i,r,a)})(t),c=Array.isArray(s)?s[0].padding:s.padding,p="top"===o||"bottom"===o,m="right"===o?"right":"left",h={x:r?l/2:i["bottom"===o?"bottom":"top"]+(c||0),y:r?a/2:i[m]+(c||0)},u=()=>i[o]+(c||0),y=p?h.x:u(),g=p?u():h.y;return{x:"right"===o?t.x+l-y:t.x+y,y:"bottom"===o?t.y+a-g:t.y+g,style:s,text:n}})(o,V),D={parent:{data:r,standalone:a,theme:l,padding:s,name:v,height:o.height,width:o.width,style:c.parent},all:{border:V,title:B}};return O.reduce(((t,e,n)=>{const o=m[n%m.length],a=d()({},e.symbol,c.data,{fill:o}),l=p.isNil(e.eventKey)?n:e.eventKey,s=((t,e,n)=>{const{column:o,row:r}=t;return{x:i()(o).reduce(((t,e)=>t+n[e]),0),y:i()(r).reduce(((t,n)=>t+e[n]),0)}})(e,_,A),h=E+b.top+e.symbolSpacer,u=j+b.left+e.symbolSpacer,y={index:n,data:r,datum:e,symbol:a.type||a.symbol||"circle",size:e.size,style:a,y:h+s.y+R+H,x:u+s.x+K+T},g={datum:e,data:r,text:e.name,style:k[n],y:y.y,x:y.x+e.symbolSpacer+e.size/2};return t[l]={data:y,labels:g},t}),D)};function P(t){if(t&&t.length){let e=0;for(let n=0;n<t.length;n++)e+=t[n];return e}return 0}var v=n(46002),j=n(47111),E=n(23388),O=n(53839),A=n(25882),_=n(58633);const k={orientation:"vertical",titleOrientation:"top",width:450,height:300,x:0,y:0},M=[{name:"Series 1"},{name:"Series 2"}];class K extends o.Component{static displayName="VictoryLegend";static role="legend";static defaultProps={borderComponent:o.createElement(v.V,null),data:M,containerComponent:o.createElement(j._,null),dataComponent:o.createElement(E.b,null),groupComponent:o.createElement("g",null),labelComponent:o.createElement(O.R,null),standalone:!0,theme:A.g.grayscale,titleComponent:o.createElement(O.R,null)};static getBaseProps(t){return z(t,k)}static getDimensions(t){return S(t,k)}static expectedComponents=["borderComponent","containerComponent","dataComponent","groupComponent","labelComponent","titleComponent"];renderChildren(t){const{dataComponent:e,labelComponent:n,title:r}=t,i=[];if(t.borderComponent){const e=this.getComponentProps(t.borderComponent,"border","all"),n=o.cloneElement(t.borderComponent,e);i.push(n)}if(e){const t=this.dataKeys.map(((t,n)=>{if("all"===t)return;const r=this.getComponentProps(e,"data",n);return o.cloneElement(e,r)})).filter((t=>void 0!==t));i.push(...t)}if(r&&t.titleComponent){const e=this.getComponentProps(r,"title","all"),n=o.cloneElement(t.titleComponent,e);i.push(n)}if(n){const t=this.dataKeys.map(((t,e)=>{if("all"===t)return;const r=this.getComponentProps(n,"labels",e);return void 0!==r.text&&null!==r.text?o.cloneElement(n,r):void 0})).filter((t=>void 0!==t));i.push(...t)}return i}render(){const{role:t}=this.constructor,e=p.modifyProps(this.props,k,t),n=this.renderChildren(e);return e.standalone?this.renderContainer(e.containerComponent,n):o.cloneElement(e.groupComponent,{},n)}}const R=(0,_.v)(K)}}]);