import{R}from"./RoundSummary-wykVznXK.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Typography-Btiv0Ab8.js";import"./PlayerCard-DGJlZh2u.js";import"./Avatar-DE_ybKox.js";const e=[{id:"1",name:"Alice",avatarShape:"cube",avatarColor:"#CCFF00",score:350,roundPoints:150,rank:1,previousRank:2},{id:"2",name:"Bob",avatarShape:"pyramid",avatarColor:"#FF10F0",score:300,roundPoints:100,rank:2,previousRank:1},{id:"3",name:"Charlie",avatarShape:"sphere",avatarColor:"#00FFFF",score:250,roundPoints:50,rank:3,previousRank:4},{id:"4",name:"Diana",avatarShape:"diamond",avatarColor:"#9D00FF",score:200,roundPoints:0,rank:4,previousRank:3}],N={title:"Organisms/Game/RoundSummary",component:R,parameters:{layout:"fullscreen"},tags:["autodocs"]},a={args:{roundNumber:2,totalRounds:5,players:e}},r={args:{roundNumber:3,totalRounds:5,players:e}},n={args:{roundNumber:5,totalRounds:5,players:e,isFinalRound:!0}},o={args:{roundNumber:3,totalRounds:5,players:[...e,{id:"5",name:"Eve",avatarShape:"cube",avatarColor:"#FF10F0",score:180,roundPoints:25,rank:5,previousRank:5},{id:"6",name:"Frank",avatarShape:"pyramid",avatarColor:"#CCFF00",score:150,roundPoints:50,rank:6,previousRank:7},{id:"7",name:"Grace",avatarShape:"sphere",avatarColor:"#9D00FF",score:100,roundPoints:0,rank:7,previousRank:6},{id:"8",name:"Henry",avatarShape:"diamond",avatarColor:"#00FFFF",score:50,roundPoints:25,rank:8,previousRank:8}]}};var s,t,u;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    roundNumber: 2,
    totalRounds: 5,
    players: mockPlayers
  }
}`,...(u=(t=a.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};var d,i,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    roundNumber: 3,
    totalRounds: 5,
    players: mockPlayers
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,c,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    roundNumber: 5,
    totalRounds: 5,
    players: mockPlayers,
    isFinalRound: true
  }
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var F,v,k;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    roundNumber: 3,
    totalRounds: 5,
    players: [...mockPlayers, {
      id: '5',
      name: 'Eve',
      avatarShape: 'cube' as const,
      avatarColor: '#FF10F0',
      score: 180,
      roundPoints: 25,
      rank: 5,
      previousRank: 5
    }, {
      id: '6',
      name: 'Frank',
      avatarShape: 'pyramid' as const,
      avatarColor: '#CCFF00',
      score: 150,
      roundPoints: 50,
      rank: 6,
      previousRank: 7
    }, {
      id: '7',
      name: 'Grace',
      avatarShape: 'sphere' as const,
      avatarColor: '#9D00FF',
      score: 100,
      roundPoints: 0,
      rank: 7,
      previousRank: 6
    }, {
      id: '8',
      name: 'Henry',
      avatarShape: 'diamond' as const,
      avatarColor: '#00FFFF',
      score: 50,
      roundPoints: 25,
      rank: 8,
      previousRank: 8
    }]
  }
}`,...(k=(v=o.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const G=["Round2","MidGame","FinalRound","LargeGroup"];export{n as FinalRound,o as LargeGroup,r as MidGame,a as Round2,G as __namedExportsOrder,N as default};
