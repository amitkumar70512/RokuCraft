"use strict";(self.webpackChunktypescript_react_project_roku_craft=self.webpackChunktypescript_react_project_roku_craft||[]).push([[467],{84223:(e,t,n)=>{n.d(t,{q:()=>a.q});var a=n(85524)},85524:(e,t,n)=>{n.d(t,{q:()=>O});var a=n(62193),i=n.n(a),s=n(96540),r=n(54866),o=n(53839),l=n(1194),c=n(47111),d=n(25882),g=n(72347),m=n(58633),p=n(84684),x=n.n(p),u=n(50014),y=n.n(u),h=n(66557),b=n(21282),k=n(63938);const A=(e,t,n)=>"x"===n?e*Math.cos(t):-e*Math.sin(t),C=e=>{const t=e.dependentAxis?"radial":"angular",n="angular"===t?"radial":"angular";return e.horizontal?n:t},P=(e,t)=>({tickStyle:h.evaluateStyle(e.ticks,t),labelStyle:h.evaluateStyle(e.tickLabels,t),gridStyle:h.evaluateStyle(e.grid,t)}),T=e=>{const{left:t,right:n,top:a,bottom:i}=h.getPadding(e),{width:s,height:r}=e;if(void 0===s||void 0===r)throw new Error("VictoryPolarAxis: width and height properties are required for standalone axes.");return Math.min(s-t-n,r-a-i)/2},f=(e,t)=>{if(e.range&&e.range[t])return e.range[t];if(e.range&&Array.isArray(e.range))return e.range;if("angular"===C(e))return[h.degreesToRadians(e.startAngle),h.degreesToRadians(e.endAngle)];const n=T(e);return[e.innerRadius||0,n]},v=e=>{const t=g.getAxis(e),n=b.getBaseScale(e,t),a=g.getDomain(e,t)||n.domain(),i=f(e,t);return n.range(i),n.domain(a),n},M=function(e,t){if(void 0===t&&(t={}),e.disableInlineStyles)return{};const n=e.style||{};return{parent:x()({height:"auto",width:"100%"},n.parent,t.parent),axis:x()({},n.axis,t.axis),axisLabel:x()({},n.axisLabel,t.axisLabel),grid:x()({},n.grid,t.grid),ticks:x()({},n.ticks,t.ticks),tickLabels:x()({},n.tickLabels,t.tickLabels)}},L=e=>{const{axisAngle:t,startAngle:n,dependentAxis:a}=e,i=g.getAxis(e),s=g.getAxisValue(e,i);return void 0!==s&&a?h.radiansToDegrees(s):void 0===t?n:t},S=(e,t,n,a)=>{const{axisType:i,radius:s,scale:r,style:o,stringTicks:l,ticks:c,tickFormat:d,origin:g}=t,m=d(n,a,c),p=l?l[a]:n,{tickStyle:x}=P(o,{tick:p,tickValue:n,index:a,ticks:c,stringTicks:l,radius:s,scale:r,axisType:i,text:m}),u="radial"===i?L(e):void 0,y=x.padding||x.size||0,b=h.degreesToRadians(90-u),k="angular"===i?r(n):h.degreesToRadians(-1*u),C="angular"===i?s:r(n);return"angular"===i?{index:a,datum:p,style:x,x1:A(C,k,"x")+g.x,y1:A(C,k,"y")+g.y,x2:A(C+y,k,"x")+g.x,y2:A(C+y,k,"y")+g.y}:{index:a,datum:p,style:x,x1:C*Math.cos(k)+Math.cos(b)*y+g.x,x2:C*Math.cos(k)-Math.cos(b)*y+g.x,y1:C*Math.sin(k)+Math.sin(b)*y+g.y,y2:C*Math.sin(k)-Math.sin(b)*y+g.y}},z=(e,t,n,a)=>{const{axisType:i,radius:s,tickFormat:r,style:o,scale:l,ticks:c,stringTicks:d,origin:g}=t,m=r(n,a,c),p=d?d[a]:n,{labelStyle:x}=P(o,{text:m,tick:p,tickValue:n,index:a,ticks:c,stringTicks:d,radius:s,scale:l,axisType:i}),{tickLabelComponent:u}=e,y=u?.props.labelPlacement?u.props.labelPlacement:e.labelPlacement,b=x.padding||0,A="radial"===i?L(e):void 0,C="angular"===i?h.radiansToDegrees(l(n)):A+0,T=void 0===x.angle?k.getPolarAngle(Object.assign({},e,{labelPlacement:y}),C):x.angle,f="angular"===i?s+b:l(n);return{index:a,datum:p,style:x,angle:T,textAnchor:x.textAnchor||k.getPolarTextAnchor(Object.assign({},e,{labelPlacement:y}),C),text:m,x:f*Math.cos(h.degreesToRadians(C))+g.x,y:-f*Math.sin(h.degreesToRadians(C))+g.y}},E=(e,t,n,a)=>{const{axisType:i,radius:s,style:r,scale:o,stringTicks:l,ticks:c,tickFormat:d,origin:g}=t,m=d(n,a,c),{startAngle:p,endAngle:x,innerRadius:u=0}=e,y=l?l[a]:n,{gridStyle:h}=P(r,{tick:y,tickValue:n,index:a,ticks:c,stringTicks:l,radius:s,scale:o,axisType:i,text:m}),b=o(n);return"angular"===i?{index:a,datum:y,style:h,x1:A(s,b,"x")+g.x,y1:A(s,b,"y")+g.y,x2:A(u,b,"x")+g.x,y2:A(u,b,"y")+g.y}:{style:h,index:a,datum:y,cx:g.x,cy:g.y,r:o(n),startAngle:p,endAngle:x}},w=(e,t)=>{const n=g.modifyProps(e,t),a=(e=>{const t=Object.assign({polar:!0},e),n=(e=>{const{theme:t={},dependentAxis:n}=e,a=t.polarAxis&&t.polarAxis.style||t.axis&&t.axis.style,i=n?"polarDependentAxis":"polarIndependentAxis",s=n?"dependentAxis":"independentAxis",r=t?.[i]?.style||t?.[s]?.style;return a&&r?["axis","axisLabel","grid","parent","tickLabels","ticks"].reduce(((e,t)=>(e[t]=x()({},r?.[t],a?.[t]),e)),{}):r||a})(t),a=M(t,n),i=h.getPadding(t),s=g.getAxis(t),r=C(t),o=g.stringTicks(t)?t.tickValues:void 0,l=g.getDomain(t,s),c=f(t,s),d=v(t),m=g.getTicks(t,d),p="angular"===r?((e,t)=>y()(e,(e=>t(e)%(2*Math.PI))))(m,d):m;return{axis:s,style:a,padding:i,stringTicks:o,axisType:r,scale:d,ticks:p,tickFormat:g.getTickFormat(t,d),domain:l,range:c,radius:T(t),origin:h.getPolarOrigin(t)}})(n),{style:i,scale:s,ticks:r,domain:o}=a,{width:l,height:c,standalone:d,theme:m,name:p}=n,u=((e,t)=>{const{style:n,axisType:a,radius:i,origin:s}=t,{startAngle:r,endAngle:o,innerRadius:l=0}=e,c="radial"===a?h.degreesToRadians(L(e)):void 0;return"radial"===a?{style:n.axis,x1:A(l,c,"x")+s.x,x2:A(i,c,"x")+s.x,y1:A(l,c,"y")+s.y,y2:A(i,c,"y")+s.y}:{style:n.axis,cx:s.x,cy:s.y,r:i,startAngle:r,endAngle:o}})(n,a),b=((e,t)=>{const{axisType:n,radius:a,style:i,origin:s}=t,{axisLabelComponent:r}=e;if("radial"!==n)return{};const o=r?.props.labelPlacement?r.props.labelPlacement:e.labelPlacement,l=i&&i.axisLabel||{},c="radial"===n?L(e):void 0,d=void 0===l.angle?k.getPolarAngle(Object.assign({},e,{labelPlacement:o}),c):l.angle,g=a+(l.padding||0);return{style:l,angle:d,textAnchor:l.textAnchor||k.getPolarTextAnchor(Object.assign({},e,{labelPlacement:o}),c),verticalAnchor:l.verticalAnchor||k.getPolarVerticalAnchor(Object.assign({},e,{labelPlacement:o}),c),text:e.label,x:A(g,h.degreesToRadians(c),"x")+s.x,y:A(g,h.degreesToRadians(c),"y")+s.y}})(n,a),P={parent:{style:i.parent,ticks:r,scale:s,width:l,height:c,domain:o,standalone:d,theme:m,name:p}};return r.reduce(((e,t,i)=>(e[i]={axis:u,axisLabel:b,ticks:S(n,a,t,i),tickLabels:z(n,a,t,i),grid:E(n,a,t,i)},e)),P)},D={width:450,height:300,padding:50};class R extends s.Component{static animationWhitelist=["style","domain","range","tickCount","tickValues","padding","width","height"];static displayName="VictoryAxis";static role="axis";static defaultTransitions={onExit:{duration:500},onEnter:{duration:500}};static defaultProps={axisComponent:s.createElement(r.e,null),axisLabelComponent:s.createElement(o.R,null),circularAxisComponent:s.createElement(l.l,null),circularGridComponent:s.createElement(l.l,null),containerComponent:s.createElement(c._,null),endAngle:360,gridComponent:s.createElement(r.e,null),groupComponent:s.createElement("g",{role:"presentation"}),labelPlacement:"parallel",startAngle:0,standalone:!0,theme:d.g.grayscale,tickComponent:s.createElement(r.e,null),tickLabelComponent:s.createElement(o.R,null)};static getDomain=g.getDomain;static getAxis=g.getAxis;static getScale(e){return v(e)}static getStyles(e){return M(e,D.style)}static getBaseProps(e){return w(e,D)}static expectedComponents=["axisComponent","circularAxisComponent","groupComponent","containerComponent","tickComponent","tickLabelComponent","gridComponent","circularGridComponent"];renderAxisLine(e){const{dependentAxis:t}=e,n=t?e.axisComponent:e.circularAxisComponent,a=this.getComponentProps(n,"axis",0);return s.cloneElement(n,a)}renderLabel(e){const{axisLabelComponent:t,dependentAxis:n,label:a}=e;if(!a||!n)return null;const i=this.getComponentProps(t,"axisLabel",0);return s.cloneElement(t,i)}renderAxis(e){const{tickComponent:t,tickLabelComponent:n,name:a}=e,r=e=>{const{style:t={},events:n={}}=e;return"transparent"!==t.stroke&&"none"!==t.stroke&&0!==t.strokeWidth||!i()(n)},o="radial"==(e.dependentAxis?"radial":"angular")?e.circularGridComponent:e.gridComponent,l=this.dataKeys.map(((e,n)=>{const i=Object.assign({key:`${a}-tick-${e}`},this.getComponentProps(t,"ticks",n)),o=s.cloneElement(t,i);return r(o.props)?o:void 0})).filter(Boolean),c=this.dataKeys.map(((e,t)=>{const n=Object.assign({key:`${a}-grid-${e}`},this.getComponentProps(o,"grid",t)),i=s.cloneElement(o,n);return r(i.props)?i:void 0})).filter(Boolean),d=this.dataKeys.map(((e,t)=>{const i=Object.assign({key:`${a}-tick-${e}`},this.getComponentProps(n,"tickLabels",t));return s.cloneElement(n,i)})),g=[this.renderAxisLine(e),this.renderLabel(e),...l,...c,...d];return this.renderGroup(e,g)}renderGroup(e,t){const{groupComponent:n}=e;return s.cloneElement(n,{},t)}shouldAnimate(){return!!this.props.animate}render(){const{animationWhitelist:e}=O,t=g.modifyProps(this.props,D);if(this.shouldAnimate())return this.animateComponent(t,e);const n=this.renderAxis(t);return t.standalone?this.renderContainer(t.containerComponent,n):n}}const O=(0,m.v)(R,{components:[{name:"axis",index:0},{name:"axisLabel",index:0},{name:"grid"},{name:"parent",index:"parent"},{name:"ticks"},{name:"tickLabels"}]})},71429:(e,t,n)=>{n.d(t,{J:()=>A});var a=n(96540),i=n(22828),s=n(47111),r=n(23388),o=n(53839),l=n(25882),c=n(27402),d=n(71510),g=n(66557),m=n(11490),p=n(58633),x=n(21282),u=n(63938);const y=(e,t)=>t.bubbleProperty?"circle":e.symbol||t.symbol,h=(e,t)=>{const{size:n,z:a}=t;return e.size?"function"==typeof e.size?e.size:Math.max(e.size,1):"function"==typeof t.size?n:e[a]?((e,t)=>{const{data:n,z:a,maxBubbleSize:i,minBubbleSize:s}=t,r=n.map((e=>e[a])),o=Math.min(...r),l=Math.max(...r),c=i||(()=>{const e=Math.min(...Object.values(g.getPadding(t)));return Math.max(e,5)})(),d=s||.1*c;if(l===o)return Math.max(d,1);const m=Math.PI*Math.pow(c,2),p=Math.PI*Math.pow(d,2),x=(e[a]-o)/(l-o)*m,u=Math.max(x,p),y=Math.sqrt(u/Math.PI);return Math.max(y,1)})(e,t):Math.max(n||0,1)},b={width:450,height:300,padding:50,size:3,symbol:"circle"};class k extends a.Component{static animationWhitelist=["data","domain","height","maxBubbleSize","padding","samples","size","style","width"];static displayName="VictoryScatter";static role="scatter";static defaultTransitions=i.discreteTransitions();static defaultProps={containerComponent:a.createElement(s._,null),dataComponent:a.createElement(r.b,null),labelComponent:a.createElement(o.R,null),groupComponent:a.createElement("g",null),samples:50,sortOrder:"ascending",standalone:!0,theme:l.g.grayscale};static getDomain=c.getDomain;static getData=d.getData;static getBaseProps(e){return((e,t)=>{const n=g.modifyProps(e,t,"scatter"),a=Object.assign({},n,(e=>{const t=g.getDefaultStyles(e,"scatter"),n=g.getStyles(e.style,t),a={x:g.getRange(e,"x"),y:g.getRange(e,"y")},i={x:c.getDomain(e,"x"),y:c.getDomain(e,"y")},s={x:x.getBaseScale(e,"x").domain(i.x).range(e.horizontal?a.y:a.x),y:x.getBaseScale(e,"y").domain(i.y).range(e.horizontal?a.x:a.y)},r=e.polar?e.origin||g.getPolarOrigin(e):void 0,o=e.bubbleProperty||"z";let l=d.getData(e);return l=d.formatDataFromDomain(l,i),{domain:i,data:l,scale:s,style:n,origin:r,z:o}})(n)),{data:i,domain:s,events:r,height:o,origin:l,padding:m,polar:p,scale:b,name:k,sharedEvents:A,standalone:C,style:P,theme:T,width:f,labels:v,horizontal:M,disableInlineStyles:L}=a,S={parent:{style:P.parent,scale:b,domain:s,data:i,height:o,width:f,standalone:C,theme:T,origin:l,polar:p,padding:m,name:k,horizontal:M}};return i.reduce(((e,t,n)=>{const s=g.isNil(t.eventKey)?n:t.eventKey,{x:o,y:c}=g.scalePoint(a,t),d={x:o,y:c,datum:t,data:i,index:n,scale:b,polar:p,origin:l,horizontal:M,size:h(t,a),symbol:y(t,a),style:L?{}:P.data,disableInlineStyles:L};return e[s]={data:d},(null!=u.getText(a,t,n)||v&&(r||A))&&(e[s].labels=u.getProps(a,n)),e}),S)})(e,b)}static expectedComponents=["dataComponent","labelComponent","groupComponent","containerComponent"];shouldAnimate(){return!!this.props.animate}render(){const{animationWhitelist:e,role:t}=A,n=g.modifyProps(this.props,b,t);if(this.shouldAnimate())return this.animateComponent(n,e);const a=this.renderData(n),i=n.standalone?this.renderContainer(n.containerComponent,a):a;return m.withSafeUserProps(i,n)}}const A=(0,p.v)(k)}}]);