import{S as C}from"./ShakingPhase-B6c08vFM.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Typography-Btiv0Ab8.js";import"./Avatar-DE_ybKox.js";const t=[{id:"1",name:"Alice",avatarShape:"cube",avatarColor:"#CCFF00",shakeProgress:100,hasCompleted:!0},{id:"2",name:"Bob",avatarShape:"pyramid",avatarColor:"#FF10F0",shakeProgress:75,hasCompleted:!1},{id:"3",name:"Charlie",avatarShape:"sphere",avatarColor:"#00FFFF",shakeProgress:45,hasCompleted:!1},{id:"4",name:"Diana",avatarShape:"diamond",avatarColor:"#9D00FF",shakeProgress:20,hasCompleted:!1}],A={title:"Organisms/Game/ShakingPhase",component:C,parameters:{layout:"fullscreen"},tags:["autodocs"]},e={args:{players:t,targetShakes:50,timeRemaining:15}},r={args:{players:t.map(a=>({...a,shakeProgress:Math.random()*30,hasCompleted:!1})),targetShakes:50,timeRemaining:25}},s={args:{players:t.map((a,n)=>({...a,shakeProgress:n<3?100:85,hasCompleted:n<3})),targetShakes:50,timeRemaining:5}},o={args:{players:t.map(a=>({...a,shakeProgress:100,hasCompleted:!0})),targetShakes:50}};var m,p,l;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    players: mockPlayers,
    targetShakes: 50,
    timeRemaining: 15
  }
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var i,g,h;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    players: mockPlayers.map(p => ({
      ...p,
      shakeProgress: Math.random() * 30,
      hasCompleted: false
    })),
    targetShakes: 50,
    timeRemaining: 25
  }
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var c,d,k;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    players: mockPlayers.map((p, i) => ({
      ...p,
      shakeProgress: i < 3 ? 100 : 85,
      hasCompleted: i < 3
    })),
    targetShakes: 50,
    timeRemaining: 5
  }
}`,...(k=(d=s.parameters)==null?void 0:d.docs)==null?void 0:k.source}}};var P,u,y;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    players: mockPlayers.map(p => ({
      ...p,
      shakeProgress: 100,
      hasCompleted: true
    })),
    targetShakes: 50
  }
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const E=["InProgress","EarlyPhase","NearlyDone","AllComplete"];export{o as AllComplete,r as EarlyPhase,e as InProgress,s as NearlyDone,E as __namedExportsOrder,A as default};
