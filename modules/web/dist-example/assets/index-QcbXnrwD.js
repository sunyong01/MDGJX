import{aq as Ye,o as se,p as re,Y as Oe,A as Xe,R as y,a4 as Le,k as he,W as ge,ar as Ke,w as ee,$ as Ce,as as Ze,a2 as pe,a0 as ke,at as ae,au as Fe,ap as fe,n as Je,aj as qe,av as et,v as tt,ak as Re,r as H,a5 as st,m as X,u as ie,ab as Be,a9 as k,j as o,ao as De,aa as ue,b as rt,T as Ie,B as O,_ as me,C as Ue,aw as nt,ax as ot}from"./index-XsIMaQZM.js";import{g as Qe}from"./get-auto-contrast-value-Da6zqqWm.js";import{I as at,a as it,G as lt}from"./index-BCrMWrNS.js";import{C as ct}from"./CheckIcon-Cefj2HfO.js";import{A as Ae}from"./Alert-W4oDJyvt.js";import{I as Te}from"./IconInfoCircle-rquPA6tK.js";import{T as w}from"./Table-Uv2kxH-W.js";import{B as dt}from"./Badge-Dw0g8wcf.js";import{T as Y}from"./Tabs-GiXjONhi.js";import"./dayjs.min-Cba74Mx1.js";import"./OldUserRemark-N5Hj4d0j.js";import"./Progress-zDC8RuV_.js";import"./create-scoped-keydown-handler-C7O3t3U_.js";const[ut,ht]=Ye(),pt={},Ee=se((i,n)=>{const{value:l,defaultValue:c,onChange:f,size:p,wrapperProps:h,children:m,name:t,readOnly:e,...s}=re("RadioGroup",pt,i),r=Oe(t),[a,u]=Xe({value:l,defaultValue:c,finalValue:"",onChange:f}),d=C=>!e&&u(C.currentTarget.value);return y.createElement(ut,{value:{value:a,onChange:d,size:p,name:r}},y.createElement(Le.Wrapper,{size:p,ref:n,...h,...s,labelElement:"div",__staticSelector:"RadioGroup"},y.createElement(at,{role:"radiogroup"},m)))});Ee.classes=Le.Wrapper.classes;Ee.displayName="@mantine/core/RadioGroup";function ft({size:i,style:n,...l}){return y.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:he(i),height:he(i),...n},"aria-hidden":!0,...l},y.createElement("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"}))}var $e={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};const mt={labelPosition:"right"},gt=Ce((i,{size:n,radius:l,color:c,iconColor:f,variant:p,autoContrast:h})=>{const m=Ze({color:c||i.primaryColor,theme:i}),t=m.isThemeColor&&m.shade===void 0?`var(--mantine-color-${m.color}-outline)`:m.color;return{root:{"--radio-size":pe(n,"radio-size"),"--radio-radius":l===void 0?void 0:ke(l),"--radio-color":p==="outline"?t:ae(c,i),"--radio-icon-color":f?ae(f,i):Qe(h,i)?Fe({color:c,theme:i}):void 0,"--radio-icon-size":pe(n,"radio-icon-size")}}}),te=se((i,n)=>{const l=re("Radio",mt,i),{classNames:c,className:f,style:p,styles:h,unstyled:m,vars:t,id:e,size:s,label:r,labelPosition:a,description:u,error:d,radius:C,color:g,variant:P,disabled:S,wrapperProps:E,icon:x=ft,rootRef:b,iconColor:F,onChange:A,mod:N,...M}=l,j=ge({name:"Radio",classes:$e,props:l,className:f,style:p,classNames:c,styles:h,unstyled:m,vars:t,varsResolver:gt}),_=ht(),T=(_==null?void 0:_.size)??s,D=l.size?s:T,{styleProps:V,rest:U}=Ke(M),Q=Oe(e),$=_?{checked:_.value===U.value,name:U.name??_.name,onChange:G=>{_.onChange(G),A==null||A(G)}}:{};return y.createElement(it,{...j("root"),__staticSelector:"Radio",__stylesApiProps:l,id:Q,size:D,labelPosition:a,label:r,description:u,error:d,disabled:S,classNames:c,styles:h,unstyled:m,"data-checked":$.checked||void 0,variant:P,ref:b,mod:N,...V,...E},y.createElement(ee,{...j("inner"),mod:{"label-position":a}},y.createElement(ee,{...j("radio",{focusable:!0,variant:P}),onChange:A,...U,...$,component:"input",mod:{error:!!d},ref:n,id:Q,disabled:S,type:"radio"}),y.createElement(x,{...j("icon"),"aria-hidden":!0})))});te.classes=$e;te.displayName="@mantine/core/Radio";te.Group=Ee;var Ge={root:"m_6d731127"};const Ct={gap:"md",align:"stretch",justify:"flex-start"},Et=Ce((i,{gap:n,align:l,justify:c})=>({root:{"--stack-gap":fe(n),"--stack-align":l,"--stack-justify":c}})),ye=se((i,n)=>{const l=re("Stack",Ct,i),{classNames:c,className:f,style:p,styles:h,unstyled:m,vars:t,align:e,justify:s,gap:r,variant:a,...u}=l,d=ge({name:"Stack",props:l,classes:Ge,className:f,style:p,classNames:c,styles:h,unstyled:m,vars:t,varsResolver:Et});return y.createElement(ee,{ref:n,...d("root"),variant:a,...u})});ye.classes=Ge;ye.displayName="@mantine/core/Stack";const[yt,vt]=Je("Stepper component was not found in tree"),le=()=>null;le.displayName="@mantine/core/StepperCompleted";var ve={root:"m_cbb4ea7e",steps:"m_aaf89d0b",separator:"m_2a371ac9",content:"m_78da155d",step:"m_cbb57068","step--horizontal":"m_f56b1e2c","step--vertical":"m_833edb7e",verticalSeparator:"m_6496b3f3",stepWrapper:"m_818e70b",stepIcon:"m_1959ad01",stepCompletedIcon:"m_a79331dc",stepBody:"m_1956aa2a",stepLabel:"m_12051f6c",stepDescription:"m_164eea74"};const oe=(i,n)=>typeof i=="function"?y.createElement(i,{step:n||0}):i,St={withIcon:!0,allowStepClick:!0,iconPosition:"left"},Se=se((i,n)=>{const{classNames:l,className:c,style:f,styles:p,vars:h,step:m,state:t,color:e,icon:s,completedIcon:r,progressIcon:a,label:u,description:d,withIcon:C,iconSize:g,loading:P,allowStepClick:S,allowStepSelect:E,iconPosition:x,orientation:b,mod:F,...A}=re("StepperStep",St,i),N=vt(),M=qe(),j={classNames:l,styles:p},_=t==="stepCompleted"?null:t==="stepProgress"?a:s,T={"data-progress":t==="stepProgress"||void 0,"data-completed":t==="stepCompleted"||void 0};return y.createElement(et,{...N.getStyles("step",{className:c,style:f,variant:N.orientation,...j}),mod:[{"icon-position":x||N.iconPosition,"allow-click":S},F],ref:n,...T,...A,__vars:{"--step-color":e?ae(e,M):void 0},tabIndex:S?0:-1},C&&y.createElement("span",{...N.getStyles("stepWrapper",j)},y.createElement("span",{...N.getStyles("stepIcon",j),...T},y.createElement(tt,{mounted:t==="stepCompleted",transition:"pop",duration:200},D=>y.createElement("span",{...N.getStyles("stepCompletedIcon",{style:D,...j})},P?y.createElement(Re,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...N.getStyles("stepLoader",j)}):oe(r,m)||y.createElement(ct,{size:"60%"}))),t!=="stepCompleted"?P?y.createElement(Re,{...N.getStyles("stepLoader",j),size:"calc(var(--stepper-icon-size) / 2)",color:e}):oe(_||s,m):null),b==="vertical"&&y.createElement("span",{...N.getStyles("verticalSeparator",j),"data-active":t==="stepCompleted"||void 0})),(u||d)&&y.createElement("span",{...N.getStyles("stepBody",j),"data-orientation":N.orientation,"data-icon-position":x||N.iconPosition},u&&y.createElement("span",{...N.getStyles("stepLabel",j)},oe(u,m)),d&&y.createElement("span",{...N.getStyles("stepDescription",j)},oe(d,m))))});Se.classes=ve;Se.displayName="@mantine/core/StepperStep";const xt={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},wt=Ce((i,{color:n,iconSize:l,size:c,contentPadding:f,radius:p,autoContrast:h})=>({root:{"--stepper-color":n?ae(n,i):void 0,"--stepper-icon-color":Qe(h,i)?Fe({color:n,theme:i}):void 0,"--stepper-icon-size":l===void 0?pe(c,"stepper-icon-size"):he(l),"--stepper-content-padding":fe(f),"--stepper-radius":p===void 0?void 0:ke(p),"--stepper-fz":st(c),"--stepper-spacing":fe(c)}})),B=se((i,n)=>{var $,G,K;const l=re("Stepper",xt,i),{classNames:c,className:f,style:p,styles:h,unstyled:m,vars:t,children:e,onStepClick:s,active:r,icon:a,completedIcon:u,progressIcon:d,color:C,iconSize:g,contentPadding:P,orientation:S,iconPosition:E,size:x,radius:b,allowNextStepsSelect:F,wrap:A,...N}=l,M=ge({name:"Stepper",classes:ve,props:l,className:f,style:p,classNames:c,styles:h,unstyled:m,vars:t,varsResolver:wt}),j=H.Children.toArray(e),_=j.filter(L=>L.type!==le),T=j.find(L=>L.type===le),D=_.reduce((L,z,R)=>{const Z=r===R?"stepProgress":r>R?"stepCompleted":"stepInactive",J=typeof s!="function"?!1:typeof z.props.allowStepSelect=="boolean"?z.props.allowStepSelect:Z==="stepCompleted"||F;return L.push(H.cloneElement(z,{icon:z.props.icon||a||R+1,key:R,step:R,state:Z,onClick:()=>J&&(s==null?void 0:s(R)),allowStepClick:J,completedIcon:z.props.completedIcon||u,progressIcon:z.props.progressIcon||d,color:z.props.color||C,iconSize:g,radius:b,iconPosition:z.props.iconPosition||E,orientation:S,unstyled:m})),S==="horizontal"&&R!==_.length-1&&L.push(y.createElement("div",{...M("separator"),"data-active":R<r||void 0,"data-orientation":S,key:`separator-${R}`})),L},[]),V=(G=($=_[r])==null?void 0:$.props)==null?void 0:G.children,U=(K=T==null?void 0:T.props)==null?void 0:K.children,Q=r>_.length-1?U:V;return y.createElement(yt,{value:{getStyles:M,orientation:S,iconPosition:E}},y.createElement(ee,{...M("root"),ref:n,size:x,...N},y.createElement(ee,{...M("steps"),mod:{orientation:S,"icon-position":E,wrap:A&&S!=="vertical"}},D),Q&&y.createElement("div",{...M("content")},Q)))});B.classes=ve;B.displayName="@mantine/core/Stepper";B.Completed=le;B.Step=Se;var Nt=Object.defineProperty,ce=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,ze=(i,n,l)=>n in i?Nt(i,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[n]=l,jt=(i,n)=>{for(var l in n||(n={}))He.call(n,l)&&ze(i,l,n[l]);if(ce)for(var l of ce(n))We.call(n,l)&&ze(i,l,n[l]);return i},_t=(i,n)=>{var l={};for(var c in i)He.call(i,c)&&n.indexOf(c)<0&&(l[c]=i[c]);if(i!=null&&ce)for(var c of ce(i))n.indexOf(c)<0&&We.call(i,c)&&(l[c]=i[c]);return l};/**
 * @license QR Code generator library (TypeScript)
 * Copyright (c) Project Nayuki.
 * SPDX-License-Identifier: MIT
 */var W;(i=>{const n=class{constructor(t,e,s,r){if(this.version=t,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],t<n.MIN_VERSION||t>n.MAX_VERSION)throw new RangeError("Version value out of range");if(r<-1||r>7)throw new RangeError("Mask value out of range");this.size=t*4+17;let a=[];for(let d=0;d<this.size;d++)a.push(!1);for(let d=0;d<this.size;d++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();const u=this.addEccAndInterleave(s);if(this.drawCodewords(u),r==-1){let d=1e9;for(let C=0;C<8;C++){this.applyMask(C),this.drawFormatBits(C);const g=this.getPenaltyScore();g<d&&(r=C,d=g),this.applyMask(C)}}p(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(t,e){const s=i.QrSegment.makeSegments(t);return n.encodeSegments(s,e)}static encodeBinary(t,e){const s=i.QrSegment.makeBytes(t);return n.encodeSegments([s],e)}static encodeSegments(t,e,s=1,r=40,a=-1,u=!0){if(!(n.MIN_VERSION<=s&&s<=r&&r<=n.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");let d,C;for(d=s;;d++){const E=n.getNumDataCodewords(d,e)*8,x=m.getTotalBits(t,d);if(x<=E){C=x;break}if(d>=r)throw new RangeError("Data too long")}for(const E of[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH])u&&C<=n.getNumDataCodewords(d,E)*8&&(e=E);let g=[];for(const E of t){c(E.mode.modeBits,4,g),c(E.numChars,E.mode.numCharCountBits(d),g);for(const x of E.getData())g.push(x)}p(g.length==C);const P=n.getNumDataCodewords(d,e)*8;p(g.length<=P),c(0,Math.min(4,P-g.length),g),c(0,(8-g.length%8)%8,g),p(g.length%8==0);for(let E=236;g.length<P;E^=253)c(E,8,g);let S=[];for(;S.length*8<g.length;)S.push(0);return g.forEach((E,x)=>S[x>>>3]|=E<<7-(x&7)),new n(d,e,S,a)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let s=0;s<this.size;s++)this.setFunctionModule(6,s,s%2==0),this.setFunctionModule(s,6,s%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let s=0;s<e;s++)for(let r=0;r<e;r++)s==0&&r==0||s==0&&r==e-1||s==e-1&&r==0||this.drawAlignmentPattern(t[s],t[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let s=e;for(let a=0;a<10;a++)s=s<<1^(s>>>9)*1335;const r=(e<<10|s)^21522;p(r>>>15==0);for(let a=0;a<=5;a++)this.setFunctionModule(8,a,f(r,a));this.setFunctionModule(8,7,f(r,6)),this.setFunctionModule(8,8,f(r,7)),this.setFunctionModule(7,8,f(r,8));for(let a=9;a<15;a++)this.setFunctionModule(14-a,8,f(r,a));for(let a=0;a<8;a++)this.setFunctionModule(this.size-1-a,8,f(r,a));for(let a=8;a<15;a++)this.setFunctionModule(8,this.size-15+a,f(r,a));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let s=0;s<12;s++)t=t<<1^(t>>>11)*7973;const e=this.version<<12|t;p(e>>>18==0);for(let s=0;s<18;s++){const r=f(e,s),a=this.size-11+s%3,u=Math.floor(s/3);this.setFunctionModule(a,u,r),this.setFunctionModule(u,a,r)}}drawFinderPattern(t,e){for(let s=-4;s<=4;s++)for(let r=-4;r<=4;r++){const a=Math.max(Math.abs(r),Math.abs(s)),u=t+r,d=e+s;0<=u&&u<this.size&&0<=d&&d<this.size&&this.setFunctionModule(u,d,a!=2&&a!=4)}}drawAlignmentPattern(t,e){for(let s=-2;s<=2;s++)for(let r=-2;r<=2;r++)this.setFunctionModule(t+r,e+s,Math.max(Math.abs(r),Math.abs(s))!=1)}setFunctionModule(t,e,s){this.modules[e][t]=s,this.isFunction[e][t]=!0}addEccAndInterleave(t){const e=this.version,s=this.errorCorrectionLevel;if(t.length!=n.getNumDataCodewords(e,s))throw new RangeError("Invalid argument");const r=n.NUM_ERROR_CORRECTION_BLOCKS[s.ordinal][e],a=n.ECC_CODEWORDS_PER_BLOCK[s.ordinal][e],u=Math.floor(n.getNumRawDataModules(e)/8),d=r-u%r,C=Math.floor(u/r);let g=[];const P=n.reedSolomonComputeDivisor(a);for(let E=0,x=0;E<r;E++){let b=t.slice(x,x+C-a+(E<d?0:1));x+=b.length;const F=n.reedSolomonComputeRemainder(b,P);E<d&&b.push(0),g.push(b.concat(F))}let S=[];for(let E=0;E<g[0].length;E++)g.forEach((x,b)=>{(E!=C-a||b>=d)&&S.push(x[E])});return p(S.length==u),S}drawCodewords(t){if(t.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let s=this.size-1;s>=1;s-=2){s==6&&(s=5);for(let r=0;r<this.size;r++)for(let a=0;a<2;a++){const u=s-a,C=(s+1&2)==0?this.size-1-r:r;!this.isFunction[C][u]&&e<t.length*8&&(this.modules[C][u]=f(t[e>>>3],7-(e&7)),e++)}}p(e==t.length*8)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let s=0;s<this.size;s++){let r;switch(t){case 0:r=(s+e)%2==0;break;case 1:r=e%2==0;break;case 2:r=s%3==0;break;case 3:r=(s+e)%3==0;break;case 4:r=(Math.floor(s/3)+Math.floor(e/2))%2==0;break;case 5:r=s*e%2+s*e%3==0;break;case 6:r=(s*e%2+s*e%3)%2==0;break;case 7:r=((s+e)%2+s*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][s]&&r&&(this.modules[e][s]=!this.modules[e][s])}}getPenaltyScore(){let t=0;for(let a=0;a<this.size;a++){let u=!1,d=0,C=[0,0,0,0,0,0,0];for(let g=0;g<this.size;g++)this.modules[a][g]==u?(d++,d==5?t+=n.PENALTY_N1:d>5&&t++):(this.finderPenaltyAddHistory(d,C),u||(t+=this.finderPenaltyCountPatterns(C)*n.PENALTY_N3),u=this.modules[a][g],d=1);t+=this.finderPenaltyTerminateAndCount(u,d,C)*n.PENALTY_N3}for(let a=0;a<this.size;a++){let u=!1,d=0,C=[0,0,0,0,0,0,0];for(let g=0;g<this.size;g++)this.modules[g][a]==u?(d++,d==5?t+=n.PENALTY_N1:d>5&&t++):(this.finderPenaltyAddHistory(d,C),u||(t+=this.finderPenaltyCountPatterns(C)*n.PENALTY_N3),u=this.modules[g][a],d=1);t+=this.finderPenaltyTerminateAndCount(u,d,C)*n.PENALTY_N3}for(let a=0;a<this.size-1;a++)for(let u=0;u<this.size-1;u++){const d=this.modules[a][u];d==this.modules[a][u+1]&&d==this.modules[a+1][u]&&d==this.modules[a+1][u+1]&&(t+=n.PENALTY_N2)}let e=0;for(const a of this.modules)e=a.reduce((u,d)=>u+(d?1:0),e);const s=this.size*this.size,r=Math.ceil(Math.abs(e*20-s*10)/s)-1;return p(0<=r&&r<=9),t+=r*n.PENALTY_N4,p(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,e=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let s=[6];for(let r=this.size-7;s.length<t;r-=e)s.splice(1,0,r);return s}}static getNumRawDataModules(t){if(t<n.MIN_VERSION||t>n.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const s=Math.floor(t/7)+2;e-=(25*s-10)*s-55,t>=7&&(e-=36)}return p(208<=e&&e<=29648),e}static getNumDataCodewords(t,e){return Math.floor(n.getNumRawDataModules(t)/8)-n.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t]*n.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let r=0;r<t-1;r++)e.push(0);e.push(1);let s=1;for(let r=0;r<t;r++){for(let a=0;a<e.length;a++)e[a]=n.reedSolomonMultiply(e[a],s),a+1<e.length&&(e[a]^=e[a+1]);s=n.reedSolomonMultiply(s,2)}return e}static reedSolomonComputeRemainder(t,e){let s=e.map(r=>0);for(const r of t){const a=r^s.shift();s.push(0),e.forEach((u,d)=>s[d]^=n.reedSolomonMultiply(u,a))}return s}static reedSolomonMultiply(t,e){if(t>>>8||e>>>8)throw new RangeError("Byte out of range");let s=0;for(let r=7;r>=0;r--)s=s<<1^(s>>>7)*285,s^=(e>>>r&1)*t;return p(s>>>8==0),s}finderPenaltyCountPatterns(t){const e=t[1];p(e<=this.size*3);const s=e>0&&t[2]==e&&t[3]==e*3&&t[4]==e&&t[5]==e;return(s&&t[0]>=e*4&&t[6]>=e?1:0)+(s&&t[6]>=e*4&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,s){return t&&(this.finderPenaltyAddHistory(e,s),e=0),e+=this.size,this.finderPenaltyAddHistory(e,s),this.finderPenaltyCountPatterns(s)}finderPenaltyAddHistory(t,e){e[0]==0&&(t+=this.size),e.pop(),e.unshift(t)}};let l=n;l.MIN_VERSION=1,l.MAX_VERSION=40,l.PENALTY_N1=3,l.PENALTY_N2=3,l.PENALTY_N3=40,l.PENALTY_N4=10,l.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],l.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],i.QrCode=l;function c(t,e,s){if(e<0||e>31||t>>>e)throw new RangeError("Value out of range");for(let r=e-1;r>=0;r--)s.push(t>>>r&1)}function f(t,e){return(t>>>e&1)!=0}function p(t){if(!t)throw new Error("Assertion error")}const h=class{constructor(t,e,s){if(this.mode=t,this.numChars=e,this.bitData=s,e<0)throw new RangeError("Invalid argument");this.bitData=s.slice()}static makeBytes(t){let e=[];for(const s of t)c(s,8,e);return new h(h.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!h.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let s=0;s<t.length;){const r=Math.min(t.length-s,3);c(parseInt(t.substr(s,r),10),r*3+1,e),s+=r}return new h(h.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!h.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e=[],s;for(s=0;s+2<=t.length;s+=2){let r=h.ALPHANUMERIC_CHARSET.indexOf(t.charAt(s))*45;r+=h.ALPHANUMERIC_CHARSET.indexOf(t.charAt(s+1)),c(r,11,e)}return s<t.length&&c(h.ALPHANUMERIC_CHARSET.indexOf(t.charAt(s)),6,e),new h(h.Mode.ALPHANUMERIC,t.length,e)}static makeSegments(t){return t==""?[]:h.isNumeric(t)?[h.makeNumeric(t)]:h.isAlphanumeric(t)?[h.makeAlphanumeric(t)]:[h.makeBytes(h.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<128)c(t,8,e);else if(t<16384)c(2,2,e),c(t,14,e);else if(t<1e6)c(6,3,e),c(t,21,e);else throw new RangeError("ECI assignment value out of range");return new h(h.Mode.ECI,0,e)}static isNumeric(t){return h.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return h.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let s=0;for(const r of t){const a=r.mode.numCharCountBits(e);if(r.numChars>=1<<a)return 1/0;s+=4+a+r.bitData.length}return s}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let s=0;s<t.length;s++)t.charAt(s)!="%"?e.push(t.charCodeAt(s)):(e.push(parseInt(t.substr(s+1,2),16)),s+=2);return e}};let m=h;m.NUMERIC_REGEX=/^[0-9]*$/,m.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,m.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",i.QrSegment=m})(W||(W={}));(i=>{(n=>{const l=class{constructor(f,p){this.ordinal=f,this.formatBits=p}};let c=l;c.LOW=new l(0,1),c.MEDIUM=new l(1,0),c.QUARTILE=new l(2,3),c.HIGH=new l(3,2),n.Ecc=c})(i.QrCode||(i.QrCode={}))})(W||(W={}));(i=>{(n=>{const l=class{constructor(f,p){this.modeBits=f,this.numBitsCharCount=p}numCharCountBits(f){return this.numBitsCharCount[Math.floor((f+7)/17)]}};let c=l;c.NUMERIC=new l(1,[10,12,14]),c.ALPHANUMERIC=new l(2,[9,11,13]),c.BYTE=new l(4,[8,16,16]),c.KANJI=new l(8,[8,10,12]),c.ECI=new l(7,[0,0,0]),n.Mode=c})(i.QrSegment||(i.QrSegment={}))})(W||(W={}));var q=W;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var Pt={L:q.QrCode.Ecc.LOW,M:q.QrCode.Ecc.MEDIUM,Q:q.QrCode.Ecc.QUARTILE,H:q.QrCode.Ecc.HIGH},bt=128,Mt="L",Rt="#FFFFFF",It="#000000",At=!1,Ve=4,Tt=.1;function zt(i,n=0){const l=[];return i.forEach(function(c,f){let p=null;c.forEach(function(h,m){if(!h&&p!==null){l.push(`M${p+n} ${f+n}h${m-p}v1H${p+n}z`),p=null;return}if(m===c.length-1){if(!h)return;p===null?l.push(`M${m+n},${f+n} h1v1H${m+n}z`):l.push(`M${p+n},${f+n} h${m+1-p}v1H${p+n}z`);return}h&&p===null&&(p=m)})}),l.join("")}function Ot(i,n){return i.slice().map((l,c)=>c<n.y||c>=n.y+n.h?l:l.map((f,p)=>p<n.x||p>=n.x+n.w?f:!1))}function Lt(i,n,l,c){if(c==null)return null;const f=l?Ve:0,p=i.length+f*2,h=Math.floor(n*Tt),m=p/n,t=(c.width||h)*m,e=(c.height||h)*m,s=c.x==null?i.length/2-t/2:c.x*m,r=c.y==null?i.length/2-e/2:c.y*m;let a=null;if(c.excavate){let u=Math.floor(s),d=Math.floor(r),C=Math.ceil(t+s-u),g=Math.ceil(e+r-d);a={x:u,y:d,w:C,h:g}}return{x:s,y:r,h:e,w:t,excavation:a}}(function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0})();function kt(i){const n=i,{value:l,size:c=bt,level:f=Mt,bgColor:p=Rt,fgColor:h=It,includeMargin:m=At,imageSettings:t}=n,e=_t(n,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let s=q.QrCode.encodeText(l,Pt[f]).getModules();const r=m?Ve:0,a=s.length+r*2,u=Lt(s,c,m,t);let d=null;t!=null&&u!=null&&(u.excavation!=null&&(s=Ot(s,u.excavation)),d=y.createElement("image",{xlinkHref:t.src,height:u.h,width:u.w,x:u.x+r,y:u.y+r,preserveAspectRatio:"none"}));const C=zt(s,r);return y.createElement("svg",jt({height:c,width:c,viewBox:`0 0 ${a} ${a}`},e),y.createElement("path",{fill:p,d:`M0,0 h${a}v${a}H0z`,shapeRendering:"crispEdges"}),y.createElement("path",{fill:h,d:C,shapeRendering:"crispEdges"}),d)}function Ft(){var g,P,S,E,x,b,F,A,N,M,j,_,T,D,V,U,Q,$,G,K,L,z,R,Z,de,J,xe,we,Ne,je,_e,Pe;const[i,n]=H.useState(0),[l,c]=H.useState(i),f=X.useGetSysConfWithStaticDataQuery({type:"wxpay-plan.json"},{pollingInterval:5e3*10,refetchOnFocus:!0});H.useEffect(()=>{f.isSuccess&&f.refetch()},[ie().location.pathname]);const p=v=>{v>3||v<0||(n(v),c(ne=>Math.max(ne,v)))},h=ie(),m=v=>l>=v&&i!==v,t=o.jsxs(o.Fragment,{children:[o.jsxs(Ae,{mt:80,mb:10,variant:"light",color:"lime",title:"目标权益下的各个选项有什么区分？还有权益数量怎么理解？",icon:o.jsx(Te,{}),children:["关于权益类型，它们之间只有天数区别，没有功能区分，您可以根据自己的需求选择不同的权益。",o.jsx("br",{}),"关于权益数量，假设您选择了3份权益，那么您将获得3份权益的权益礼品卡，您可以自己使用，也可以赠送给他人使用。",o.jsx("br",{}),"关于永久会员，这是秒达工具箱初期的限时优惠，我们仅短暂开放，并承诺永久会员将永久享有秒达工具箱的所有权益，不再另行收费或者收益变更。"]}),o.jsx(Ae,{mt:10,mb:10,variant:"light",color:"teal",title:"为什么开源项目会收费？不是全部免费吗？",icon:o.jsx(Te,{}),children:"开源不等于完全免费服务，为了本开源项目的可持续发展以及覆盖相关服务器费用，我们设计了若干基于云端的付费项。如果您认可秒达工具箱，并希望该项目能有更好的发展，可以考虑通过订阅增值服务的方式来支持我们。您只需付出一份午餐的钱，就能获得物超所值的高级权益，还能让开发团队有更多的资金和信心做更多的事情。 请放心，离线不依赖服务器API的功能，依旧会永久免费开放给所有用户，我们只对云端API进行适当的收费。如果付费项对您造成了困扰，请随时让我们知道，我们会积极再改进可持续化的开源发展方案。"})]}),e=Be.register("r_newprivil",{getNotPersistedStateFn(){return{selectedPlan:"6-months-premium",planCount:1}},getPersistedStateFn(){return{p:1}}}),[s,r]=X.useLazyWxpayNewOrderQuery({}),a=()=>{var v,I;return s({planCount:((v=e==null?void 0:e.npState)==null?void 0:v.planCount)||1,selectedPlan:((I=e==null?void 0:e.npState)==null?void 0:I.selectedPlan)+""})},u=X.useWxpayVerfiyPayQuery({outTradeNo:((P=(g=r==null?void 0:r.data)==null?void 0:g.data)==null?void 0:P.outTradeNo)||""},{pollingInterval:3e3,refetchOnMountOrArgChange:!0,skip:!((E=(S=r==null?void 0:r.data)==null?void 0:S.data)!=null&&E.outTradeNo)});if(H.useEffect(()=>{var v,I;u.isSuccess&&i!==3&&((I=(v=u.data)==null?void 0:v.data)==null?void 0:I.trade_state)=="SUCCESS"&&(k.alertSuccess("支付成功，感谢您的支持，将跳转到下一页"),n(3))},[u.status]),!e)return"";const d=(b=(x=f==null?void 0:f.data)==null?void 0:x.data)==null?void 0:b.data,C=o.jsxs(De,{withBorder:!0,shadow:"md",className:"space-y-2 w-full sm:w-[1/5] mx-auto",p:20,mt:10,radius:"md",children:[o.jsx(te.Group,{label:"目标权益",withAsterisk:!0,...e==null?void 0:e.bindOnChange({npStateKey:"selectedPlan"}),mb:20,children:o.jsx(ue,{mt:"xs",children:o.jsx(ye,{children:((A=(F=d==null?void 0:d.configs)==null?void 0:F.filter(v=>v.status!=="offline"))==null?void 0:A.map(v=>o.jsx(te,{value:v.id,label:v.label+`(${v.price}元)`},v.id)))||[]})})}),o.jsx(rt,{...e==null?void 0:e.bindOnChange({npStateKey:"planCount"}),type:"number",mb:10,label:"权益数量",placeholder:"购买权益礼品卡数量"})]});return o.jsxs("div",{className:"p-4 py-5 mx-auto sm:mx-20 my-12",children:[o.jsxs(B,{active:i,onStepClick:n,children:[o.jsx(B.Step,{label:"新权益列表",description:"选定所需权益",allowStepSelect:m(0),children:C}),o.jsx(B.Step,{label:"扫码支付",description:"使用微信以扫码",allowStepSelect:m(1),children:o.jsx("div",{className:"w-full items-center",children:o.jsxs("div",{className:"mx-auto flex justify-center items-center flex-col ",children:[o.jsx("div",{className:"mt-10",children:r.isLoading?"loading...":(N=r.data)!=null&&N.error?"error: "+((M=r.data)==null?void 0:M.error):(_=(j=r.data)==null?void 0:j.data)!=null&&_.qrcode?o.jsx(kt,{width:"200px",height:"200px",value:((D=(T=r.data)==null?void 0:T.data)==null?void 0:D.qrcode)+""}):"no available data"}),o.jsx("div",{children:o.jsxs("div",{className:"mt-5 ",style:{fontWeight:"bold",textAlign:"center"},children:[o.jsxs("div",{className:"font-xs",style:{fontSize:"15px"},children:[(U=(V=r.data)==null?void 0:V.data)!=null&&U.description?""+(($=(Q=r.data)==null?void 0:Q.data)==null?void 0:$.description):""," - ",(K=(G=u==null?void 0:u.data)==null?void 0:G.data)==null?void 0:K.trade_state_desc]}),o.jsx("div",{className:"font-xs",style:{fontSize:"15px"},children:(z=(L=r.data)==null?void 0:L.data)!=null&&z.outTradeNo?"订单号: "+((Z=(R=r.data)==null?void 0:R.data)==null?void 0:Z.outTradeNo):""}),o.jsx("div",{style:{color:"darkorange",fontSize:"24px"},className:"mt-5",children:(J=(de=r.data)==null?void 0:de.data)!=null&&J.total?"总金额: "+((we=(xe=r.data)==null?void 0:xe.data)==null?void 0:we.total)+"元":""})]})})]})})}),o.jsx(B.Step,{label:"付款成功",description:"查看礼品卡列表",allowStepSelect:m(2),children:o.jsx("div",{className:"w-full items-center",children:o.jsx("div",{className:"mx-auto flex justify-center items-center flex-col ",children:o.jsx(Ie,{children:"感谢您的支持！"})})})}),o.jsx(B.Completed,{children:o.jsx("div",{className:"w-full items-center p-2",children:o.jsxs("div",{className:"mx-auto flex justify-center items-center flex-col ",children:[o.jsx(Ie,{children:"感谢您的支持！"}),o.jsxs("p",{className:"text-center",children:["默认情况下，我们不会直接应用您的权益，您的权益礼品卡已发放到您的账户中，您可以在个人中心查看您的权益礼品卡列表。",o.jsx("br",{}),"点击下方按钮即可查看并应用您的权益礼品卡，如果您有任何问题，请随时联系我们。",o.jsx("br",{}),(je=(Ne=r.data)==null?void 0:Ne.data)!=null&&je.outTradeNo?"订单号: "+((Pe=(_e=r.data)==null?void 0:_e.data)==null?void 0:Pe.outTradeNo):""]})]})})})]}),o.jsxs(ue,{justify:"center",mt:"xl",children:[i===3?"":o.jsx(O,{variant:"default",disabled:i===0,onClick:()=>p(i-1),children:"上一步"}),i===1?o.jsxs(o.Fragment,{children:[o.jsx(O,{color:"lime",loading:r.isLoading,onClick:()=>{a().then(v=>{k.alertSuccess("付款码已刷新")})},children:"刷新界面"}),o.jsx(O,{onClick:async()=>{k.alertInfo("正在查询付款状态中..."),u.refetch().then(v=>{var I,ne,be,Me;if(((ne=(I=v.data)==null?void 0:I.data)==null?void 0:ne.trade_state)!="SUCCESS"){k.alertWarn(`支付未完成，当前状态: ${(Me=(be=v.data)==null?void 0:be.data)==null?void 0:Me.trade_state_desc}，如果需要订单支持，请点击下方按钮联系我们，感谢您的理解`);return}n(3)})},children:"付款已完成"})]}):"",i===3?o.jsxs(o.Fragment,{children:[o.jsx(O,{variant:"default",disabled:!1,onClick:()=>{location.reload()},children:"再来一单"}),o.jsx(O,{color:"cyan",onClick:async()=>{k.alertSuccess("为您跳转至礼品卡列表"),h.push("/settings/my-privilege?type=redemption")},children:"查看礼品卡"})]}):"",i===0?o.jsx(o.Fragment,{children:o.jsx(O,{onClick:async()=>{var v,I;switch(i+""){case"0":if(!((v=e==null?void 0:e.npState)!=null&&v.selectedPlan)){k.alertErr("请先选择目标权益");return}if(!((I=e==null?void 0:e.npState)!=null&&I.planCount)){k.alertErr("请先选择权益数量");return}a();break}p(i+1)},children:"下一步"})}):""]}),t,o.jsxs(ue,{gap:5,justify:"flex-end",className:"",children:[o.jsx(O,{color:"lime",onClick:()=>{h.push("/settings/feedback"),k.alertInfo("很抱歉让您遇到支付问题，如果需要即时处理，我们建议您添加我们的QQ群以获得最快的处理速度")},children:"支付遇到问题"}),o.jsx(O,{color:"cyan",onClick:()=>{h.push("/settings/feedback")},children:"联系我们"})]})]})}const Bt=()=>{const i=X.useGetSysConfWithStaticDataQuery({type:"wxpay-plan.json"},{pollingInterval:5e3,refetchOnFocus:!0});return H.useEffect(()=>{i.isSuccess&&i.refetch()},[ie().location.pathname]),o.jsx("div",{children:JSON.stringify(i.data)})},Dt=()=>o.jsx("div",{children:o.jsx(lt,{noSidebar:!0})});function Ut(i){var p;const[n]=X.useLazyWxpayVerfiyPayQuery({}),l=X.useWxpayGetOrdersQuery({},{pollingInterval:5e3,refetchOnFocus:!0}),c=((p=l.data)==null?void 0:p.data)||[];H.useEffect(()=>{l.isSuccess&&l.refetch()},[ie().location.pathname]);const f=c.map(h=>o.jsxs(w.Tr,{children:[o.jsx(w.Td,{children:h.id}),o.jsx(w.Td,{children:h.outTradeNo}),o.jsx(w.Td,{children:h.description}),o.jsx(w.Td,{children:h.total}),o.jsx(w.Td,{children:h.planCount}),o.jsx(w.Td,{children:o.jsx(dt,{color:h.hasPaid?"green":"yellow",children:h.hasPaid?"已付款":"未付款"})}),o.jsx(w.Td,{children:me.toString(h.createdAt)}),o.jsx(w.Td,{children:o.jsx("div",{className:"space-x-2",children:h.hasPaid!=1?o.jsx(O,{variant:"light",size:"compact-xs",onClick:async()=>{n({outTradeNo:h.outTradeNo}).then(m=>{l.refetch().then(t=>{var e,s;k.alertInfo(`订单${h.outTradeNo}付款状态已刷新：${(s=(e=m.data)==null?void 0:e.data)==null?void 0:s.trade_state_desc}`)})})},children:"刷新付款状态"}):""})})]},h.id));return o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between p-2",children:[o.jsxs("div",{children:[me.size(c),"条数据"]}),o.jsx(O,{loading:l.isLoading,size:"compact-sm",onClick:()=>{l.refetch().then(h=>{k.alertSuccess("已刷新")})},children:"刷新订单列表"})]}),o.jsx(w.ScrollContainer,{minWidth:800,children:o.jsxs(w,{verticalSpacing:"xs",children:[o.jsx(w.Thead,{children:o.jsxs(w.Tr,{children:[o.jsx(w.Th,{children:"ID"}),o.jsx(w.Th,{children:"订单号"}),o.jsx(w.Th,{children:"权益计划名"}),o.jsx(w.Th,{children:"订单金额"}),o.jsx(w.Th,{children:"订单数量"}),o.jsx(w.Th,{children:"是否已付款"}),o.jsx(w.Th,{children:"创建时间"}),o.jsx(w.Th,{children:"操作"})]})}),o.jsx(w.Tbody,{children:f})]})})]})}const Qt=()=>{const i=Be.register("plssignin",{getPersistedStateFn:()=>({}),getNotPersistedStateFn:()=>({})});return i?o.jsx("div",{children:o.jsx(Ue,{my:10,size:"xl",className:"block sm:flex flex-row justify-start items-start sm:space-x-4 ",children:o.jsx(O,{onClick:()=>{i.checkLoginStatus()},children:"请先登录"})})}):"loading please-sign-in..."},ss=()=>{const i=nt(),n=ot(),l=i.result.type||"new";return n?o.jsx("div",{children:o.jsx(Ue,{my:10,size:"xl",className:"block sm:flex flex-row justify-start items-start sm:space-x-4 ",children:o.jsx("div",{className:"flex-1 mb-5 sm:w-[calc(100%-350px)]",style:{},children:o.jsx(De,{withBorder:!0,shadow:"md",p:10,radius:"md",children:o.jsxs(Y,{value:l,onChange:c=>{i.pushNewQuery({...i.result,type:c+""})},children:[o.jsxs(Y.List,{children:[o.jsx(Y.Tab,{value:"new",children:"购买新权益"}),o.jsx(Y.Tab,{value:"orders",children:"订单列表"}),o.jsx(Y.Tab,{value:"redemption",children:"礼品卡列表"})]}),me.map({new:()=>o.jsx(Ft,{}),my:()=>o.jsx(Bt,{}),orders:()=>o.jsx(Ut,{}),redemption:()=>o.jsx(Dt,{})},(c,f,p)=>o.jsx(Y.Panel,{value:f,children:l==f?c():""}))]})})})})}):o.jsx(Qt,{})};export{ss as default};
