import{W as P}from"./WritingPhase-D80eM0Rv.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Typography-Btiv0Ab8.js";import"./Timer-adIv4miV.js";import"./index-tvICUrOf.js";import"./PlayerCard-DGJlZh2u.js";import"./Avatar-DE_ybKox.js";const o=[{id:"1",name:"Alice",avatarShape:"cube",avatarColor:"#CCFF00",hasSubmitted:!0},{id:"2",name:"Bob",avatarShape:"pyramid",avatarColor:"#FF10F0",hasSubmitted:!0},{id:"3",name:"Charlie",avatarShape:"sphere",avatarColor:"#00FFFF",hasSubmitted:!1},{id:"4",name:"Diana",avatarShape:"diamond",avatarColor:"#9D00FF",hasSubmitted:!1}],D={title:"Organisms/Game/WritingPhase",component:P,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={args:{prompt:"What would you name your autobiography?",timeRemaining:45,totalTime:60,players:o}},e={args:{prompt:"Describe your perfect vacation in 3 words",timeRemaining:20,totalTime:60,players:o.map((s,S)=>({...s,hasSubmitted:S<3}))}},r={args:{prompt:"What secret talent do you have?",timeRemaining:8,totalTime:60,players:o,isPanic:!0}},t={args:{prompt:"If you were a cocktail, what would you be?",timeRemaining:30,totalTime:60,players:o.map(s=>({...s,hasSubmitted:!0}))}};var i,m,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    prompt: 'What would you name your autobiography?',
    timeRemaining: 45,
    totalTime: 60,
    players: mockPlayers
  }
}`,...(n=(m=a.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var p,c,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    prompt: 'Describe your perfect vacation in 3 words',
    timeRemaining: 20,
    totalTime: 60,
    players: mockPlayers.map((p, i) => ({
      ...p,
      hasSubmitted: i < 3
    }))
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,y;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    prompt: 'What secret talent do you have?',
    timeRemaining: 8,
    totalTime: 60,
    players: mockPlayers,
    isPanic: true
  }
}`,...(y=(d=r.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,h,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    prompt: 'If you were a cocktail, what would you be?',
    timeRemaining: 30,
    totalTime: 60,
    players: mockPlayers.map(p => ({
      ...p,
      hasSubmitted: true
    }))
  }
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const I=["InProgress","MostSubmitted","PanicMode","AllSubmitted"];export{t as AllSubmitted,a as InProgress,e as MostSubmitted,r as PanicMode,I as __namedExportsOrder,D as default};
