import{P as F}from"./Podium-C8mfUnz8.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./clsx-B-dksMZM.js";import"./Typography-Btiv0Ab8.js";import"./Avatar-DE_ybKox.js";import"./Button-BfZG8wjE.js";const n=[{id:"1",name:"Alice",avatarShape:"cube",avatarColor:"#CCFF00",score:500,rank:1},{id:"2",name:"Bob",avatarShape:"pyramid",avatarColor:"#FF10F0",score:420,rank:2},{id:"3",name:"Charlie",avatarShape:"sphere",avatarColor:"#00FFFF",score:350,rank:3}],D={title:"Organisms/Game/Podium",component:F,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={args:{winners:n}},r={args:{winners:[{...n[0],score:500},{...n[1],score:495},{...n[2],score:490}]}},e={args:{winners:[{id:"1",name:"NeonKing",avatarShape:"diamond",avatarColor:"#9D00FF",score:750,rank:1},{id:"2",name:"PartyQueen",avatarShape:"sphere",avatarColor:"#FF10F0",score:600,rank:2},{id:"3",name:"AcidDancer",avatarShape:"pyramid",avatarColor:"#CCFF00",score:550,rank:3}]}};var o,s,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    winners: mockWinners
  }
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    winners: [{
      ...mockWinners[0],
      score: 500
    }, {
      ...mockWinners[1],
      score: 495
    }, {
      ...mockWinners[2],
      score: 490
    }]
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    winners: [{
      id: '1',
      name: 'NeonKing',
      avatarShape: 'diamond' as const,
      avatarColor: '#9D00FF',
      score: 750,
      rank: 1 as const
    }, {
      id: '2',
      name: 'PartyQueen',
      avatarShape: 'sphere' as const,
      avatarColor: '#FF10F0',
      score: 600,
      rank: 2 as const
    }, {
      id: '3',
      name: 'AcidDancer',
      avatarShape: 'pyramid' as const,
      avatarColor: '#CCFF00',
      score: 550,
      rank: 3 as const
    }]
  }
}`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const w=["Default","CloseScores","DifferentAvatars"];export{r as CloseScores,a as Default,e as DifferentAvatars,w as __namedExportsOrder,D as default};
