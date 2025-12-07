import{P as I}from"./PhoneLobby-DT2c_-Pi.js";import"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Typography-Btiv0Ab8.js";import"./Button-BfZG8wjE.js";import"./Avatar-DE_ybKox.js";const r=[{id:"1",name:"Alice",avatarShape:"cube",avatarColor:"#CCFF00",isVIP:!0},{id:"2",name:"Bob",avatarShape:"pyramid",avatarColor:"#FF10F0"},{id:"3",name:"Charlie",avatarShape:"sphere",avatarColor:"#00FFFF",isDJ:!0},{id:"4",name:"Diana",avatarShape:"diamond",avatarColor:"#9D00FF"}],E={title:"Organisms/Phone/Lobby",component:I,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},tags:["autodocs"]},e={args:{currentPlayer:r[1],players:r,roomCode:"VIVA",role:"player"}},a={args:{currentPlayer:r[0],players:r,roomCode:"VIVA",role:"vip"}},o={args:{currentPlayer:r[0],players:r.slice(0,2),roomCode:"VIVA",role:"vip"}},s={args:{currentPlayer:r[2],players:r,roomCode:"VIVA",role:"dj"}},t={args:{currentPlayer:r[0],players:r,roomCode:"VIVA",role:"vip",isStarting:!0}};var n,l,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    currentPlayer: mockPlayers[1],
    players: mockPlayers,
    roomCode: 'VIVA',
    role: 'player'
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,p,i;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    currentPlayer: mockPlayers[0],
    players: mockPlayers,
    roomCode: 'VIVA',
    role: 'vip'
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var y,d,u;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    currentPlayer: mockPlayers[0],
    players: mockPlayers.slice(0, 2),
    roomCode: 'VIVA',
    role: 'vip'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var P,V,g;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    currentPlayer: mockPlayers[2],
    players: mockPlayers,
    roomCode: 'VIVA',
    role: 'dj'
  }
}`,...(g=(V=s.parameters)==null?void 0:V.docs)==null?void 0:g.source}}};var A,C,v;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    currentPlayer: mockPlayers[0],
    players: mockPlayers,
    roomCode: 'VIVA',
    role: 'vip',
    isStarting: true
  }
}`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};const J=["AsPlayer","AsVIP","AsVIPNotEnoughPlayers","AsDJ","Starting"];export{s as AsDJ,e as AsPlayer,a as AsVIP,o as AsVIPNotEnoughPlayers,t as Starting,J as __namedExportsOrder,E as default};
