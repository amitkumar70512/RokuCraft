"use strict";(self.webpackChunktypescript_react_project_roku_craft=self.webpackChunktypescript_react_project_roku_craft||[]).push([[634],{80165:(e,t,n)=>{n.d(t,{I:()=>h,j:()=>R});var a=n(96540),i=n(71510),l=n(66557),s=n(27402),r=n(21282),o=n(63938);var d=n(84684),c=n.n(d),p=n(80519),g=n(11490),u=n(48552);const m={pathComponent:a.createElement(p.w,null),role:"presentation",shapeRendering:"auto"},h=e=>{const t=(e=>{const t=l.evaluateProp(e.ariaLabel,e),n=l.evaluateProp(e.id,e),a=l.evaluateStyle(Object.assign({fill:"none",stroke:"black",pointerEvents:"stroke"},e.style),e),i=l.evaluateProp(e.tabIndex,e);return Object.assign({},e,{ariaLabel:t,id:n,style:a,tabIndex:i})})(c()({},e,m)),n=g.getSafeUserProps(t),{polar:i,origin:s}=t,r=u.getLineFunction(t),o=i&&s?`translate(${s.x}, ${s.y})`:void 0,d=r(t.data);return a.cloneElement(t.pathComponent,{...t.events,...n,"aria-label":t.ariaLabel,d,style:t.style,transform:t.transform||o,className:t.className,role:t.role,shapeRendering:t.shapeRendering,clipPath:t.clipPath,tabIndex:t.tabIndex})};var b=n(22828),y=n(47111),f=n(53839),A=n(78339),x=n(25882),v=n(58633);const C={width:450,height:300,padding:50,interpolation:"linear"};class P extends a.Component{constructor(e){super(e)}static animationWhitelist=["data","domain","height","padding","samples","style","width"];static displayName="VictoryLine";static role="line";static defaultTransitions=b.continuousTransitions();static defaultPolarTransitions=b.continuousPolarTransitions();static continuous=!0;static defaultProps={containerComponent:a.createElement(y._,null),dataComponent:a.createElement(h,null),labelComponent:a.createElement(f.R,{renderInPortal:!0}),groupComponent:a.createElement(A.s,null),samples:50,sortKey:"x",sortOrder:"ascending",standalone:!0,theme:x.g.grayscale};static getDomain=s.getDomain;static getData=i.getData;static getBaseProps(e){return((e,t)=>{const n=l.modifyProps(e,t,"line"),a=Object.assign({},n,(e=>{let t=i.getData(e);t.length<2&&(t=[]);const n={x:l.getRange(e,"x"),y:l.getRange(e,"y")},a={x:s.getDomain(e,"x"),y:s.getDomain(e,"y")},o={x:r.getBaseScale(e,"x").domain(a.x).range(e.horizontal?n.y:n.x),y:r.getBaseScale(e,"y").domain(a.y).range(e.horizontal?n.x:n.y)},d=e.polar?e.origin||l.getPolarOrigin(e):void 0,c=l.getDefaultStyles(e,"line");return{domain:a,data:t,scale:o,style:l.getStyles(e.style,c),origin:d}})(n)),{data:d,domain:c,events:p,groupComponent:g,height:u,horizontal:m,interpolation:h,origin:b,padding:y,polar:f,scale:A,sharedEvents:x,standalone:v,style:C,theme:P,width:R,labels:E,name:I,disableInlineStyles:O}=a,S={parent:{style:C.parent,scale:A,data:d,height:u,width:R,name:I,domain:c,standalone:v,polar:f,origin:b,padding:y,horizontal:m},all:{data:{horizontal:m,polar:f,origin:b,scale:A,data:d,interpolation:h,groupComponent:g,style:O?{}:C.data,theme:P,disableInlineStyles:O}}};return d.reduce(((e,t,n)=>((null!=o.getText(a,t,n)||E&&(p||x))&&(e[l.isNil(t.eventKey)?n:t.eventKey]={labels:o.getProps(a,n)}),e)),S)})(e,C)}static expectedComponents=["dataComponent","labelComponent","groupComponent","containerComponent"];shouldAnimate(){return!!this.props.animate}render(){const{animationWhitelist:e,role:t}=P,n=l.modifyProps(this.props,C,t);if(this.shouldAnimate())return this.animateComponent(n,e);const a=this.renderContinuousData(n),i=n.standalone?this.renderContainer(n.containerComponent,a):a;return g.withSafeUserProps(i,n)}}const R=(0,v.v)(P,{components:[{name:"parent",index:"parent"},{name:"data",index:"all"},{name:"labels"}]})},72990:(e,t,n)=>{n.d(t,{J:()=>O,l:()=>j});var a=n(96540),i=n(66557),l=n(53839),s=n(47111),r=n(25882),o=n(71510),d=n(54866),c=n(11490),p=n(58633),g=n(11331),u=n.n(g),m=n(84684),h=n.n(m),b=n(81094),y=n(42716),f=n(99409);const A=(e,t)=>{const{style:n,colors:a}=t,i=((e,t,n)=>e&&e.data&&e.data.fill?e.data.fill:t&&t[n%t.length])(n,a,e);return Object.assign({fill:i},n.data)},x=(e,t)=>e*(e=>Math.cos(e-i.degreesToRadians(90)))(t),v=(e,t)=>e*(e=>Math.sin(e-i.degreesToRadians(90)))(t),C=e=>e.reduce(((e,t)=>e+t),0)/e.length,P=(e,t)=>{const n=i.modifyProps(e,t,"pie"),a=(e=>{const{colorScale:t}=e,n=i.getDefaultStyles(e,"pie"),a=i.getStyles(e.style,n),l=Array.isArray(t)?t:f.getColorScale(t),s=i.getPadding(e),r=((e,t)=>"number"==typeof e.radius?e.radius:Math.min(e.width-t.left-t.right,e.height-t.top-t.bottom)/2)(e,s),d=((e,t)=>{const{width:n,height:a}=e,i=u()(e.origin)?e.origin:{};return{x:void 0!==i.x?i.x:(t.left-t.right+n)/2,y:void 0!==i.y?i.y:(t.top-t.bottom+a)/2}})(e,s),c=o.getData(e),p=((e,t)=>{const n=i.isFunction(e.padAngle)?0:e.padAngle;return b.A().sort(null).startAngle(i.degreesToRadians(e.startAngle)).endAngle(i.degreesToRadians(e.endAngle)).padAngle(i.degreesToRadians(n)).value((e=>e._y))(t)})(e,c);return Object.assign({},e,{style:a,colors:l,padding:s,defaultRadius:r,data:c,slices:p,origin:d})})(n),{slices:l,style:s,data:r,origin:d,defaultRadius:c,labels:p,events:g,sharedEvents:m,height:P,width:R,standalone:E,name:I,innerRadius:O,cornerRadius:S,padAngle:w,disableInlineStyles:T,labelIndicator:j}=a,D=n.radius||c,_={parent:{standalone:E,height:P,width:R,slices:l,name:I,style:s.parent}};return l.reduce(((e,t,l)=>{const s=h()({},r[l],{startAngle:i.radiansToDegrees(t.startAngle),endAngle:i.radiansToDegrees(t.endAngle),padAngle:i.radiansToDegrees(t.padAngle)}),o=i.isNil(s.eventKey)?l:s.eventKey,c={index:l,slice:t,datum:s,data:r,origin:d,innerRadius:O,radius:D,cornerRadius:S,padAngle:w,style:T?{}:A(l,a),disableInlineStyles:T};e[o]={data:c};const u=((e,t,n)=>{let a;return a=t.label?t.label:Array.isArray(e.labels)?e.labels[n]:i.isFunction(e.labels)?e.labels:t.xName||t._x,(e=>null==e||i.isFunction(e)?e:`${e}`)(a)})(n,s,l);if(null!=u||p&&(g||m)){const t=i.evaluateProp(u,c);if(e[o].labels=((e,t,n)=>{const{index:a,datum:l,data:s,slice:r,labelComponent:o,theme:d}=t,{style:c,defaultRadius:p,origin:g,width:u,height:m}=n,b=i.evaluateProp(n.labelRadius,Object.assign({text:e},t)),f=i.evaluateProp(n.labelPosition,Object.assign({text:e},t))||"centroid",A=i.evaluateProp(n.labelPlacement,Object.assign({text:e},t))||"vertical",x=Object.assign({padding:0},c.labels),v=((e,t,n)=>{const a=n&&n.padding||0;return t||e+a})(p,b,i.evaluateStyle(x,Object.assign({labelRadius:b,text:e},t))),C=((e,t,n)=>{const a={startAngle:"startAngle"===n?t.startAngle:t.endAngle,endAngle:"endAngle"===n?t.endAngle:t.startAngle},i=Object.assign({},t,a);return e.centroid(i)})((e=>y.A().outerRadius(e).innerRadius(e))(v),r,f),P=((e,t,n)=>{let a=0;return a=void 0!==t.angle?n.angle:"centroid"===t?i.radiansToDegrees((e.startAngle+e.endAngle)/2):"startAngle"===t?i.radiansToDegrees(e.startAngle):i.radiansToDegrees(e.endAngle),(a<0?360-a:a)%360})(r,f,x),R=((e,t)=>"vertical"===t?0:"parallel"===t?e>180&&e<360?e+90:e-90:e>90&&e<270?e-180:e)(P,A),E=((e,t)=>"perpendicular"===t?e>90&&e<270?"bottom":"top":"parallel"===t?e>=0&&e<=180?"right":"left":e<45||e>315?"top":e>=45&&e<135?"right":e>=135&&e<225?"bottom":"left")(P,A),I=x.textAnchor||(e=>"top"===e||"bottom"===e?"middle":"right"===e?"start":"end")(E),O=x.verticalAnchor||(e=>"left"===e||"right"===e?"middle":"bottom"===e?"start":"end")(E),S={width:u,height:m,index:a,datum:l,data:s,slice:r,orientation:E,text:e,style:x,x:Math.round(C[0])+g.x,y:Math.round(C[1])+g.y,textAnchor:I,verticalAnchor:O,angle:R,calculatedLabelRadius:v};if(!i.isTooltip(o))return S;const w=d&&d.tooltip||{};return h()({},S,i.omit(w,["style"]))})(t,Object.assign({},n,c),a),j){const t=e[o].labels;t.calculatedLabelRadius>D&&(e[o].labelIndicators=((e,t,n)=>{const{innerRadius:a,radius:i,slice:{startAngle:l,endAngle:s},labelIndicatorInnerOffset:r,labelIndicatorOuterOffset:o,index:d}=e,{height:c,width:p}=t,{calculatedLabelRadius:g}=n,u=C([a,i]),m=C([s,l]),b=p/2,y=c/2,f=u+r,A=g-o,P={x1:b+x(f,m),y1:y+v(f,m),x2:b+x(A,m),y2:y+v(A,m),index:d};return h()({},P)})(Object.assign({},n,c),a,t))}}return e}),_)};var R=n(80519);const E=e=>{const{slice:t,radius:n,innerRadius:a,cornerRadius:l}=e;if(i.isFunction(e.pathFunction))return e.pathFunction(t);const s=i.degreesToRadians(e.padAngle),r=i.degreesToRadians(e.sliceStartAngle),o=i.degreesToRadians(e.sliceEndAngle);return y.A().cornerRadius(l).outerRadius(n).innerRadius(a||0)(h()({startAngle:r,endAngle:o,padAngle:s},t))},I={pathComponent:a.createElement(R.w,null),role:"presentation",shapeRendering:"auto"},O=e=>{const t=(e=>{const t=i.evaluateStyle(e.style,e),n=i.evaluateProp(e.radius,Object.assign({},e,{style:t})),a=i.evaluateProp(e.innerRadius,Object.assign({},e,{style:t,radius:n})),l=i.evaluateProp(e.ariaLabel,e),s=i.evaluateProp(e.id,e),r=i.evaluateProp(e.cornerRadius,e),o=i.evaluateProp(e.padAngle,e),d=i.evaluateProp(e.sliceStartAngle,e),c=i.evaluateProp(e.sliceEndAngle,e),p=i.evaluateProp(e.tabIndex,e);return Object.assign({},e,{ariaLabel:l,style:t,radius:n,innerRadius:a,id:s,cornerRadius:r,padAngle:o,sliceStartAngle:d,sliceEndAngle:c,tabIndex:p})})(h()({},e,I)),n=t.origin?`translate(${t.origin.x}, ${t.origin.y})`:void 0;return a.cloneElement(t.pathComponent,{...t.events,"aria-label":t.ariaLabel,d:E(t),style:t.style,transform:t.transform||n,className:t.className,role:t.role,shapeRendering:t.shapeRendering,clipPath:t.clipPath,tabIndex:t.tabIndex})},S={endAngle:360,height:400,innerRadius:0,cornerRadius:0,padAngle:0,padding:30,width:400,startAngle:0,colorScale:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],labelPosition:"centroid",labelIndicatorInnerOffset:15,labelIndicatorOuterOffset:5},w=e=>!i.isNil(e._x)&&!i.isNil(e._y);class T extends a.Component{static animationWhitelist=["data","endAngle","height","innerRadius","cornerRadius","padAngle","padding","colorScale","startAngle","style","width"];static displayName="VictoryPie";static role="pie";static defaultTransitions={onExit:{duration:500,before:()=>({_y:0,label:" "})},onEnter:{duration:500,before:()=>({_y:0,label:" "}),after:e=>({y_:e._y,label:e.label})}};static defaultProps={data:[{x:"A",y:1},{x:"B",y:2},{x:"C",y:3},{x:"D",y:1},{x:"E",y:2}],standalone:!0,dataComponent:a.createElement(O,null),labelComponent:a.createElement(l.R,null),containerComponent:a.createElement(s._,null),groupComponent:a.createElement("g",null),sortOrder:"ascending",theme:r.g.grayscale};static getBaseProps(e){return P(e,S)}static getData=o.getData;static expectedComponents=["dataComponent","labelComponent","groupComponent","containerComponent","labelIndicatorComponent"];shouldAnimate(){return Boolean(this.props.animate)}renderComponents(e,t){void 0===t&&(t=w);const{dataComponent:n,labelComponent:i,groupComponent:l,labelIndicator:s,labelPosition:r}=e;if(!l)throw new Error("VictoryPie expects a groupComponent prop");const o=s&&"centroid"===r,c=[];if(n){const e=this.dataKeys.reduce(((e,i,l)=>{const s=this.getComponentProps(n,"data",l);return t(s.datum)&&e.push(a.cloneElement(n,s)),e}),[]);c.push(...e)}if(i){const e=this.dataKeys.map(((e,t)=>{const n=this.getComponentProps(i,"labels",t);if(void 0!==n.text&&null!==n.text)return a.cloneElement(i,n)})).filter((e=>void 0!==e));c.push(...e)}if(o&&s){let e=a.createElement(d.e,null);"object"==typeof s&&(e=s);const t=this.dataKeys.map(((t,n)=>{const i=this.getComponentProps(e,"labelIndicators",n);return a.cloneElement(e,i)}));c.push(...t)}return this.renderContainer(l,c)}render(){const{animationWhitelist:e,role:t}=j,n=i.modifyProps(this.props,S,t);if(this.shouldAnimate())return this.animateComponent(n,e);const a=this.renderComponents(n),l=n.standalone?this.renderContainer(n.containerComponent,a):a;return c.withSafeUserProps(l,n)}}const j=(0,p.v)(T)}}]);