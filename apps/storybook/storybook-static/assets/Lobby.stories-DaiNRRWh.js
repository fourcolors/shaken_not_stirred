import{L as I}from"./Lobby-CdZ8Upcl.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Typography-Btiv0Ab8.js";import"./Button-BfZG8wjE.js";import"./PlayerCard-DGJlZh2u.js";import"./Avatar-DE_ybKox.js";const t=[{id:"1",name:"Alice",avatarShape:"cube",avatarColor:"#CCFF00",isVIP:!0},{id:"2",name:"Bob",avatarShape:"pyramid",avatarColor:"#FF10F0",isDrinking:!0},{id:"3",name:"Charlie",avatarShape:"sphere",avatarColor:"#00FFFF"},{id:"4",name:"Diana",avatarShape:"diamond",avatarColor:"#9D00FF",isDJ:!0}],f={title:"Organisms/Host/Lobby",component:I,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={args:{state:"empty",roomCode:"VIVA",players:[],maxPlayers:8}},r={args:{state:"populating",roomCode:"VIVA",players:t.slice(0,2),maxPlayers:8}},e={args:{state:"ready",roomCode:"VIVA",players:t,maxPlayers:8,isVIP:!0}},o={args:{state:"ready",roomCode:"VIVA",players:t,maxPlayers:8,isVIP:!1}},s={args:{state:"ready",roomCode:"FULL",players:[...t,{id:"5",name:"Eve",avatarShape:"cube",avatarColor:"#FF10F0"},{id:"6",name:"Frank",avatarShape:"pyramid",avatarColor:"#CCFF00"},{id:"7",name:"Grace",avatarShape:"sphere",avatarColor:"#9D00FF",isDrinking:!0},{id:"8",name:"Henry",avatarShape:"diamond",avatarColor:"#00FFFF"}],maxPlayers:8,isVIP:!0}};var n,m,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    state: 'empty',
    roomCode: 'VIVA',
    players: [],
    maxPlayers: 8
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var i,l,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    state: 'populating',
    roomCode: 'VIVA',
    players: mockPlayers.slice(0, 2),
    maxPlayers: 8
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,y,F;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    state: 'ready',
    roomCode: 'VIVA',
    players: mockPlayers,
    maxPlayers: 8,
    isVIP: true
  }
}`,...(F=(y=e.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var u,C,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    state: 'ready',
    roomCode: 'VIVA',
    players: mockPlayers,
    maxPlayers: 8,
    isVIP: false
  }
}`,...(v=(C=o.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var P,V,g;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    state: 'ready',
    roomCode: 'FULL',
    players: [...mockPlayers, {
      id: '5',
      name: 'Eve',
      avatarShape: 'cube' as const,
      avatarColor: '#FF10F0'
    }, {
      id: '6',
      name: 'Frank',
      avatarShape: 'pyramid' as const,
      avatarColor: '#CCFF00'
    }, {
      id: '7',
      name: 'Grace',
      avatarShape: 'sphere' as const,
      avatarColor: '#9D00FF',
      isDrinking: true
    }, {
      id: '8',
      name: 'Henry',
      avatarShape: 'diamond' as const,
      avatarColor: '#00FFFF'
    }],
    maxPlayers: 8,
    isVIP: true
  }
}`,...(g=(V=s.parameters)==null?void 0:V.docs)==null?void 0:g.source}}};const E=["Empty","Populating","Ready","ReadyNotVIP","FullLobby"];export{a as Empty,s as FullLobby,r as Populating,e as Ready,o as ReadyNotVIP,E as __namedExportsOrder,f as default};
