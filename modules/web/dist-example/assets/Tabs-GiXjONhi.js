import{n as O,o as P,p as _,R as m,w as R,aj as F,X as H,av as X,at as W,Y,A as q,W as G,$ as J,a0 as Q,au as Z}from"./index-XsIMaQZM.js";import{c as ee,g as k}from"./create-scoped-keydown-handler-C7O3t3U_.js";import{g as te}from"./get-auto-contrast-value-Da6zqqWm.js";const[ae,D]=O("Tabs component was not found in the tree");var f={root:"m_89d60db1","list--default":"m_576c9d4",list:"m_89d33d6d",panel:"m_b0c91715",tab:"m_4ec4dce6",tabSection:"m_fc420b1f","tab--default":"m_539e827b","list--outline":"m_6772fbd5","tab--outline":"m_b59ab47c","tab--pills":"m_c3381914"};const se={},K=P((n,c)=>{const a=_("TabsList",se,n),{children:r,className:b,grow:i,justify:l,classNames:o,styles:d,style:v,mod:u,...s}=a,t=D();return m.createElement(R,{...s,...t.getStyles("list",{className:b,style:v,classNames:o,styles:d,props:a,variant:t.variant}),ref:c,role:"tablist",variant:t.variant,mod:[{grow:i,orientation:t.orientation,placement:t.orientation==="vertical"&&t.placement,inverted:t.inverted},u],"aria-orientation":t.orientation,__vars:{"--tabs-justify":l}},r)});K.classes=f;K.displayName="@mantine/core/TabsList";const oe={},L=P((n,c)=>{const a=_("TabsPanel",oe,n),{children:r,className:b,value:i,classNames:l,styles:o,style:d,mod:v,...u}=a,s=D(),t=s.value===i,y=s.keepMounted||a.keepMounted||t?r:null;return m.createElement(R,{...u,...s.getStyles("panel",{className:b,classNames:l,styles:o,style:[d,t?void 0:{display:"none"}],props:a}),ref:c,mod:[{orientation:s.orientation},v],role:"tabpanel",id:s.getPanelId(i),"aria-labelledby":s.getTabId(i)},y)});L.classes=f;L.displayName="@mantine/core/TabsPanel";const ne={},$=P((n,c)=>{const a=_("TabsTab",ne,n),{className:r,children:b,rightSection:i,leftSection:l,value:o,onClick:d,onKeyDown:v,disabled:u,color:s,style:t,classNames:y,styles:w,vars:N,mod:h,...C}=a,E=F(),{dir:x}=H(),e=D(),T=o===e.value,I=M=>{e.onChange(e.allowTabDeactivation&&o===e.value?null:o),d==null||d(M)},p={classNames:y,styles:w,props:a};return m.createElement(X,{...C,...e.getStyles("tab",{className:r,style:t,variant:e.variant,...p}),disabled:u,unstyled:e.unstyled,variant:e.variant,mod:[{active:T,disabled:u,orientation:e.orientation,inverted:e.inverted,placement:e.orientation==="vertical"&&e.placement},h],ref:c,role:"tab",id:e.getTabId(o),"aria-selected":T,tabIndex:T||e.value===null?0:-1,"aria-controls":e.getPanelId(o),onClick:I,__vars:{"--tabs-color":s?W(s,E):void 0},onKeyDown:ee({siblingSelector:'[role="tab"]',parentSelector:'[role="tablist"]',activateOnFocus:e.activateTabWithKeyboard,loop:e.loop,orientation:e.orientation||"horizontal",dir:x,onKeyDown:v})},l&&m.createElement("span",{...e.getStyles("tabSection",p),"data-position":"left"},l),b&&m.createElement("span",{...e.getStyles("tabLabel",p)},b),i&&m.createElement("span",{...e.getStyles("tabSection",p),"data-position":"right"},i))});$.classes=f;$.displayName="@mantine/core/TabsTab";const A="Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value",le={keepMounted:!0,orientation:"horizontal",loop:!0,activateTabWithKeyboard:!0,allowTabDeactivation:!1,unstyled:!1,inverted:!1,variant:"default",placement:"left"},re=J((n,{radius:c,color:a,autoContrast:r})=>({root:{"--tabs-radius":Q(c),"--tabs-color":W(a,n),"--tabs-text-color":te(r,n)?Z({color:a,theme:n}):void 0}})),g=P((n,c)=>{const a=_("Tabs",le,n),{defaultValue:r,value:b,onChange:i,orientation:l,children:o,loop:d,id:v,activateTabWithKeyboard:u,allowTabDeactivation:s,variant:t,color:y,radius:w,inverted:N,placement:h,keepMounted:C,classNames:E,styles:x,unstyled:e,className:T,style:I,vars:p,autoContrast:M,mod:j,...z}=a,S=Y(v),[U,B]=q({value:b,defaultValue:r,finalValue:null,onChange:i}),V=G({name:"Tabs",props:a,classes:f,className:T,style:I,classNames:E,styles:x,unstyled:e,vars:p,varsResolver:re});return m.createElement(ae,{value:{placement:h,value:U,orientation:l,id:S,loop:d,activateTabWithKeyboard:u,getTabId:k(`${S}-tab`,A),getPanelId:k(`${S}-panel`,A),onChange:B,allowTabDeactivation:s,variant:t,color:y,radius:w,inverted:N,keepMounted:C,unstyled:e,getStyles:V}},m.createElement(R,{ref:c,id:S,variant:t,mod:[{orientation:l,inverted:l==="horizontal"&&N,placement:l==="vertical"&&h},j],...V("root"),...z},o))});g.classes=f;g.displayName="@mantine/core/Tabs";g.Tab=$;g.Panel=L;g.List=K;export{g as T};
