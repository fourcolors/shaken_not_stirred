import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as u}from"./clsx-B-dksMZM.js";import{T as n}from"./Typography-Btiv0Ab8.js";import{B as p}from"./Button-BfZG8wjE.js";import"./index-yBjzXJbu.js";const O="_overlay_zuj95_1",A="_backdrop_zuj95_16",I="_panel_zuj95_23",T="_header_zuj95_49",D="_closeButton_zuj95_57",V="_content_zuj95_78",w="_setting_zuj95_84",P="_settingInfo_zuj95_96",W="_stepper_zuj95_103",E="_stepperButton_zuj95_109",H="_stepperValue_zuj95_134",R="_segmentedControl_zuj95_140",G="_segment_zuj95_140",J="_segmentActive_zuj95_166",q="_segmentLabel_zuj95_171",K="_toggle_zuj95_177",Q="_toggleActive_zuj95_192",U="_toggleThumb_zuj95_197",X="_footer_zuj95_214",t={overlay:O,backdrop:A,panel:I,header:T,closeButton:D,content:V,setting:w,settingInfo:P,stepper:W,stepperButton:E,stepperValue:H,segmentedControl:R,segment:G,segmentActive:J,segmentLabel:q,toggle:K,toggleActive:Q,toggleThumb:U,footer:X};function Y({settings:s,spotifyConnected:j=!1,onSettingsChange:d,onClose:m,onManageSpotify:h,isOpen:B=!0,className:S}){const i=(r,F)=>{d==null||d({...s,[r]:F})};return B?e.jsxs("div",{className:u(t.overlay,S),children:[e.jsx("div",{className:t.backdrop,onClick:m}),e.jsxs("div",{className:t.panel,children:[e.jsxs("header",{className:t.header,children:[e.jsx(n,{variant:"h3",glow:!0,children:"Game Settings"}),e.jsx("button",{className:t.closeButton,onClick:m,"aria-label":"Close",children:"×"})]}),e.jsxs("div",{className:t.content,children:[e.jsxs("div",{className:t.setting,children:[e.jsxs("div",{className:t.settingInfo,children:[e.jsx(n,{variant:"label",children:"Rounds"}),e.jsx(n,{variant:"caption",color:"muted",children:"How many rounds to play"})]}),e.jsxs("div",{className:t.stepper,children:[e.jsx("button",{className:t.stepperButton,onClick:()=>i("rounds",Math.max(3,s.rounds-1)),disabled:s.rounds<=3,children:"−"}),e.jsx(n,{variant:"h4",className:t.stepperValue,children:s.rounds}),e.jsx("button",{className:t.stepperButton,onClick:()=>i("rounds",Math.min(10,s.rounds+1)),disabled:s.rounds>=10,children:"+"})]})]}),e.jsxs("div",{className:t.setting,children:[e.jsxs("div",{className:t.settingInfo,children:[e.jsx(n,{variant:"label",children:"Time Limit"}),e.jsx(n,{variant:"caption",color:"muted",children:"Seconds per answer"})]}),e.jsxs("div",{className:t.stepper,children:[e.jsx("button",{className:t.stepperButton,onClick:()=>i("timeLimit",Math.max(15,s.timeLimit-15)),disabled:s.timeLimit<=15,children:"−"}),e.jsxs(n,{variant:"h4",className:t.stepperValue,children:[s.timeLimit,"s"]}),e.jsx("button",{className:t.stepperButton,onClick:()=>i("timeLimit",Math.min(120,s.timeLimit+15)),disabled:s.timeLimit>=120,children:"+"})]})]}),e.jsxs("div",{className:t.setting,children:[e.jsxs("div",{className:t.settingInfo,children:[e.jsx(n,{variant:"label",children:"Content Filter"}),e.jsx(n,{variant:"caption",color:"muted",children:"Prompt spiciness level"})]}),e.jsx("div",{className:t.segmentedControl,children:["family","adult","spicy"].map(r=>e.jsxs("button",{className:u(t.segment,s.contentFilter===r&&t.segmentActive),onClick:()=>i("contentFilter",r),children:[r==="family"&&"👨‍👩‍👧",r==="adult"&&"🔥",r==="spicy"&&"🌶️",e.jsx("span",{className:t.segmentLabel,children:r})]},r))})]}),e.jsxs("div",{className:t.setting,children:[e.jsxs("div",{className:t.settingInfo,children:[e.jsx(n,{variant:"label",children:"Drinking Mode"}),e.jsx(n,{variant:"caption",color:"muted",children:"Add drinking challenges"})]}),e.jsx("button",{className:u(t.toggle,s.drinkingMode&&t.toggleActive),onClick:()=>i("drinkingMode",!s.drinkingMode),role:"switch","aria-checked":s.drinkingMode,children:e.jsx("span",{className:t.toggleThumb})})]}),e.jsxs("div",{className:t.setting,children:[e.jsxs("div",{className:t.settingInfo,children:[e.jsx(n,{variant:"label",children:"DJ Mode"}),e.jsx(n,{variant:"caption",color:"muted",children:j?"Spotify connected":"Connect Spotify for music"})]}),j?e.jsx(p,{variant:"ghost",size:"sm",onClick:h,children:"Manage"}):e.jsx(p,{variant:"secondary",size:"sm",onClick:h,children:"Connect"})]})]}),e.jsx("footer",{className:t.footer,children:e.jsx(p,{variant:"primary",size:"lg",fullWidth:!0,onClick:m,children:"Done"})})]})]}):null}const g={rounds:5,timeLimit:60,drinkingMode:!1,djMode:!1,contentFilter:"adult"},ne={title:"Organisms/Host/Settings",component:Y,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={args:{settings:g,isOpen:!0}},o={args:{settings:{...g,djMode:!0},spotifyConnected:!0,isOpen:!0}},c={args:{settings:{...g,contentFilter:"family",drinkingMode:!1},isOpen:!0}},l={args:{settings:{rounds:8,timeLimit:45,drinkingMode:!0,djMode:!0,contentFilter:"spicy"},spotifyConnected:!0,isOpen:!0}};var _,x,f;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    settings: defaultSettings,
    isOpen: true
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,y,N;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    settings: {
      ...defaultSettings,
      djMode: true
    },
    spotifyConnected: true,
    isOpen: true
  }
}`,...(N=(y=o.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var b,k,z;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    settings: {
      ...defaultSettings,
      contentFilter: 'family',
      drinkingMode: false
    },
    isOpen: true
  }
}`,...(z=(k=c.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var M,C,L;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    settings: {
      rounds: 8,
      timeLimit: 45,
      drinkingMode: true,
      djMode: true,
      contentFilter: 'spicy'
    },
    spotifyConnected: true,
    isOpen: true
  }
}`,...(L=(C=l.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const re=["Default","WithSpotify","FamilyMode","SpicyParty"];export{a as Default,c as FamilyMode,l as SpicyParty,o as WithSpotify,re as __namedExportsOrder,ne as default};
