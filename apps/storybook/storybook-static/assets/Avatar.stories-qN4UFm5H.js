import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{A as r}from"./Avatar-DE_ybKox.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";const M={title:"Atoms/Avatar",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{shape:{control:"select",options:["cube","pyramid","sphere","diamond"]},size:{control:"select",options:["sm","md","lg","xl"]},color:{control:"color"}}},a={args:{name:"Player 1",shape:"cube",color:"#CCFF00"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(r,{name:"Cube",shape:"cube",color:"#CCFF00"}),e.jsx(r,{name:"Pyramid",shape:"pyramid",color:"#FF10F0"}),e.jsx(r,{name:"Sphere",shape:"sphere",color:"#00FFFF"}),e.jsx(r,{name:"Diamond",shape:"diamond",color:"#9D00FF"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[e.jsx(r,{name:"Small",size:"sm",color:"#CCFF00"}),e.jsx(r,{name:"Medium",size:"md",color:"#CCFF00"}),e.jsx(r,{name:"Large",size:"lg",color:"#CCFF00"}),e.jsx(r,{name:"XL",size:"xl",color:"#CCFF00"})]})},n={args:{name:"Host",shape:"diamond",color:"#FFD700",size:"lg",isVIP:!0}},i={args:{name:"DJ Mike",shape:"sphere",color:"#9D00FF",size:"lg",isDJ:!0}},c={args:{name:"Party Pete",shape:"cube",color:"#FF10F0",size:"lg",isDrinking:!0}},l={args:{name:"Legend",shape:"diamond",color:"#CCFF00",size:"xl",isVIP:!0,isDJ:!0,isDrinking:!0}},m={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsx(r,{name:"Alice",shape:"cube",color:"#CCFF00",isVIP:!0}),e.jsx(r,{name:"Bob",shape:"pyramid",color:"#FF10F0",isDrinking:!0}),e.jsx(r,{name:"Charlie",shape:"sphere",color:"#00FFFF"}),e.jsx(r,{name:"Diana",shape:"diamond",color:"#9D00FF",isDJ:!0}),e.jsx(r,{name:"Eve",shape:"cube",color:"#FF10F0",isDrinking:!0}),e.jsx(r,{name:"Frank",shape:"pyramid",color:"#CCFF00"}),e.jsx(r,{name:"Grace",shape:"sphere",color:"#9D00FF",isDrinking:!0}),e.jsx(r,{name:"Henry",shape:"diamond",color:"#00FFFF"})]})};var t,p,F;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: 'Player 1',
    shape: 'cube',
    color: '#CCFF00'
  }
}`,...(F=(p=a.parameters)==null?void 0:p.docs)==null?void 0:F.source}}};var d,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px'
  }}>
      <Avatar name="Cube" shape="cube" color="#CCFF00" />
      <Avatar name="Pyramid" shape="pyramid" color="#FF10F0" />
      <Avatar name="Sphere" shape="sphere" color="#00FFFF" />
      <Avatar name="Diamond" shape="diamond" color="#9D00FF" />
    </div>
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,C,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'flex-end'
  }}>
      <Avatar name="Small" size="sm" color="#CCFF00" />
      <Avatar name="Medium" size="md" color="#CCFF00" />
      <Avatar name="Large" size="lg" color="#CCFF00" />
      <Avatar name="XL" size="xl" color="#CCFF00" />
    </div>
}`,...(x=(C=o.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var D,y,v;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'Host',
    shape: 'diamond',
    color: '#FFD700',
    size: 'lg',
    isVIP: true
  }
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var A,j,z;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'DJ Mike',
    shape: 'sphere',
    color: '#9D00FF',
    size: 'lg',
    isDJ: true
  }
}`,...(z=(j=i.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var P,k,S;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: 'Party Pete',
    shape: 'cube',
    color: '#FF10F0',
    size: 'lg',
    isDrinking: true
  }
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var b,f,I;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'Legend',
    shape: 'diamond',
    color: '#CCFF00',
    size: 'xl',
    isVIP: true,
    isDJ: true,
    isDrinking: true
  }
}`,...(I=(f=l.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var J,V,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px'
  }}>
      <Avatar name="Alice" shape="cube" color="#CCFF00" isVIP />
      <Avatar name="Bob" shape="pyramid" color="#FF10F0" isDrinking />
      <Avatar name="Charlie" shape="sphere" color="#00FFFF" />
      <Avatar name="Diana" shape="diamond" color="#9D00FF" isDJ />
      <Avatar name="Eve" shape="cube" color="#FF10F0" isDrinking />
      <Avatar name="Frank" shape="pyramid" color="#CCFF00" />
      <Avatar name="Grace" shape="sphere" color="#9D00FF" isDrinking />
      <Avatar name="Henry" shape="diamond" color="#00FFFF" />
    </div>
}`,...(L=(V=m.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};const T=["Default","AllShapes","AllSizes","VIP","DJ","Drinking","AllBadges","PlayerGrid"];export{l as AllBadges,s as AllShapes,o as AllSizes,i as DJ,a as Default,c as Drinking,m as PlayerGrid,n as VIP,T as __namedExportsOrder,M as default};
