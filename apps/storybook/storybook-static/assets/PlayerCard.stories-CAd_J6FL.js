import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{P as r}from"./PlayerCard-DGJlZh2u.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./Avatar-DE_ybKox.js";import"./Typography-Btiv0Ab8.js";const q={title:"Molecules/PlayerCard",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{name:"Player 1",shape:"cube",color:"#CCFF00"}},s={args:{name:"Alice",shape:"pyramid",color:"#FF10F0",score:1500,rank:1}},o={args:{name:"Bob",shape:"sphere",color:"#00FFFF",score:2350,scoreDelta:500,rank:2}},n={args:{name:"Charlie",shape:"diamond",color:"#9D00FF",score:800,scoreDelta:-200,rank:5}},c={args:{name:"Host",shape:"diamond",color:"#FFD700",score:0,isVIP:!0}},t={args:{name:"Current Turn",shape:"cube",color:"#CCFF00",score:1200,isActive:!0}},i={args:{name:"Done!",shape:"pyramid",color:"#FF10F0",hasSubmitted:!0}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{name:"Alice",shape:"diamond",color:"#FFD700",score:3500,scoreDelta:800,rank:1,isVIP:!0}),e.jsx(r,{name:"Bob",shape:"pyramid",color:"#C0C0C0",score:2800,scoreDelta:400,rank:2}),e.jsx(r,{name:"Charlie",shape:"cube",color:"#CD7F32",score:2200,scoreDelta:200,rank:3})]})},l={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"16px"},children:[e.jsx(r,{name:"Alice",shape:"cube",color:"#CCFF00",isVIP:!0}),e.jsx(r,{name:"Bob",shape:"pyramid",color:"#FF10F0",isDrinking:!0}),e.jsx(r,{name:"Charlie",shape:"sphere",color:"#00FFFF",hasSubmitted:!0}),e.jsx(r,{name:"Diana",shape:"diamond",color:"#9D00FF",isDJ:!0}),e.jsx(r,{name:"Eve",shape:"cube",color:"#FF10F0",hasSubmitted:!0}),e.jsx(r,{name:"Frank",shape:"pyramid",color:"#CCFF00"}),e.jsx(r,{name:"Grace",shape:"sphere",color:"#9D00FF",isDrinking:!0,hasSubmitted:!0}),e.jsx(r,{name:"Henry",shape:"diamond",color:"#00FFFF",isActive:!0})]})};var p,d,F;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'Player 1',
    shape: 'cube',
    color: '#CCFF00'
  }
}`,...(F=(d=a.parameters)==null?void 0:d.docs)==null?void 0:F.source}}};var u,h,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'Alice',
    shape: 'pyramid',
    color: '#FF10F0',
    score: 1500,
    rank: 1
  }
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var y,D,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'Bob',
    shape: 'sphere',
    color: '#00FFFF',
    score: 2350,
    scoreDelta: 500,
    rank: 2
  }
}`,...(g=(D=o.parameters)==null?void 0:D.docs)==null?void 0:g.source}}};var b,P,x;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'Charlie',
    shape: 'diamond',
    color: '#9D00FF',
    score: 800,
    scoreDelta: -200,
    rank: 5
  }
}`,...(x=(P=n.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var S,k,v;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'Host',
    shape: 'diamond',
    color: '#FFD700',
    score: 0,
    isVIP: true
  }
}`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var j,A,f;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'Current Turn',
    shape: 'cube',
    color: '#CCFF00',
    score: 1200,
    isActive: true
  }
}`,...(f=(A=t.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var I,V,B;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'Done!',
    shape: 'pyramid',
    color: '#FF10F0',
    hasSubmitted: true
  }
}`,...(B=(V=i.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var E,G,H;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <PlayerCard name="Alice" shape="diamond" color="#FFD700" score={3500} scoreDelta={800} rank={1} isVIP />
      <PlayerCard name="Bob" shape="pyramid" color="#C0C0C0" score={2800} scoreDelta={400} rank={2} />
      <PlayerCard name="Charlie" shape="cube" color="#CD7F32" score={2200} scoreDelta={200} rank={3} />
    </div>
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,T,W;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px'
  }}>
      <PlayerCard name="Alice" shape="cube" color="#CCFF00" isVIP />
      <PlayerCard name="Bob" shape="pyramid" color="#FF10F0" isDrinking />
      <PlayerCard name="Charlie" shape="sphere" color="#00FFFF" hasSubmitted />
      <PlayerCard name="Diana" shape="diamond" color="#9D00FF" isDJ />
      <PlayerCard name="Eve" shape="cube" color="#FF10F0" hasSubmitted />
      <PlayerCard name="Frank" shape="pyramid" color="#CCFF00" />
      <PlayerCard name="Grace" shape="sphere" color="#9D00FF" isDrinking hasSubmitted />
      <PlayerCard name="Henry" shape="diamond" color="#00FFFF" isActive />
    </div>
}`,...(W=(T=l.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};const w=["Default","WithScore","WithScoreDelta","NegativeDelta","VIPPlayer","ActivePlayer","SubmittedPlayer","Leaderboard","LobbyGrid"];export{t as ActivePlayer,a as Default,m as Leaderboard,l as LobbyGrid,n as NegativeDelta,i as SubmittedPlayer,c as VIPPlayer,s as WithScore,o as WithScoreDelta,w as __namedExportsOrder,q as default};
