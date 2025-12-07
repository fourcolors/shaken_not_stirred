import{S as w}from"./SplashScreen-BDg5ckI6.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Typography-Btiv0Ab8.js";const V={title:"Organisms/Host/SplashScreen",component:w,parameters:{layout:"fullscreen",backgrounds:{default:"acid-lounge"}},tags:["autodocs"]},e={args:{roomCode:"VIVA",showQR:!0,subtitle:"A Party Game Experience"}},o={args:{roomCode:"SHAKE",showQR:!1,subtitle:"Join the Party"}},r={args:{showQR:!0,subtitle:"Scan to Create a Room"}},t={args:{roomCode:"ACID",showQR:!0,subtitle:"Welcome to the Viva Lounge"}},s={args:{showQR:!0,subtitle:"Join at play.vivaLounge.gg"},parameters:{docs:{description:{story:"Streamer mode hides the room code to prevent unwanted joiners"}}}};var a,n,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    roomCode: 'VIVA',
    showQR: true,
    subtitle: 'A Party Game Experience'
  }
}`,...(m=(n=e.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var c,u,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    roomCode: 'SHAKE',
    showQR: false,
    subtitle: 'Join the Party'
  }
}`,...(i=(u=o.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    showQR: true,
    subtitle: 'Scan to Create a Room'
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,h,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    roomCode: 'ACID',
    showQR: true,
    subtitle: 'Welcome to the Viva Lounge'
  }
}`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var R,C,b;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showQR: true,
    subtitle: 'Join at play.vivaLounge.gg'
  },
  parameters: {
    docs: {
      description: {
        story: 'Streamer mode hides the room code to prevent unwanted joiners'
      }
    }
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const E=["Default","WithoutQR","NoRoomCode","CustomSubtitle","StreamerMode"];export{t as CustomSubtitle,e as Default,r as NoRoomCode,s as StreamerMode,o as WithoutQR,E as __namedExportsOrder,V as default};
