import{o as A,p as I,W as h,Y as N,R as t,w as S,a3 as $,$ as k,a0 as x}from"./index-XsIMaQZM.js";var f={root:"m_66836ed3",wrapper:"m_a5d60502",body:"m_667c2793",title:"m_6a03f287",label:"m_698f4f23",icon:"m_667f2a6a",message:"m_7fa78076",closeButton:"m_87f54839"};const z={},P=k((o,{radius:l,color:a,variant:s,autoContrast:n})=>{const r=o.variantColorResolver({color:a||o.primaryColor,theme:o,variant:s||"light",autoContrast:n});return{root:{"--alert-radius":l===void 0?void 0:x(l),"--alert-bg":a||s?r.background:void 0,"--alert-color":r.color,"--alert-bd":a||s?r.border:void 0}}}),E=A((o,l)=>{const a=I("Alert",z,o),{classNames:s,className:n,style:r,styles:_,unstyled:m,vars:g,radius:L,color:V,title:i,children:v,id:C,icon:b,withCloseButton:u,onClose:B,closeButtonLabel:R,variant:c,autoContrast:W,...w}=a,e=h({name:"Alert",classes:f,props:a,className:n,style:r,classNames:s,styles:_,unstyled:m,vars:g,varsResolver:P}),d=N(C),p=i&&`${d}-title`||void 0,y=`${d}-body`;return t.createElement(S,{id:d,...e("root",{variant:c}),variant:c,ref:l,...w,role:"alert","aria-describedby":y,"aria-labelledby":p},t.createElement("div",{...e("wrapper")},b&&t.createElement("div",{...e("icon")},b),t.createElement("div",{...e("body")},i&&t.createElement("div",{...e("title"),"data-with-close-button":u||void 0},t.createElement("span",{id:p,...e("label")},i)),v&&t.createElement("div",{id:y,...e("message"),"data-variant":c},v)),u&&t.createElement($,{...e("closeButton"),onClick:B,variant:"transparent",size:16,iconSize:16,"aria-label":R,unstyled:m})))});E.classes=f;E.displayName="@mantine/core/Alert";export{E as A};