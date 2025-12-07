import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{B as e}from"./Button-BfZG8wjE.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";const k={title:"Atoms/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","ghost","danger"]},size:{control:"select",options:["sm","md","lg","xl"]}}},a={args:{children:"Start Game",variant:"primary",size:"md"}},s={args:{children:"Settings",variant:"secondary",size:"md"}},n={args:{children:"Cancel",variant:"ghost",size:"md"}},t={args:{children:"Leave Game",variant:"danger",size:"md"}},i={args:{children:"Join Room",variant:"primary",size:"lg",glow:!0}},o={args:{children:"Connecting...",variant:"primary",size:"md",isLoading:!0}},c={args:{children:"Submit Answer",variant:"primary",size:"lg",fullWidth:!0},decorators:[M=>r.jsx("div",{style:{width:"300px"},children:r.jsx(M,{})})]},d={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"flex-start"},children:[r.jsx(e,{size:"sm",children:"Small"}),r.jsx(e,{size:"md",children:"Medium"}),r.jsx(e,{size:"lg",children:"Large"}),r.jsx(e,{size:"xl",children:"Extra Large"})]})},l={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"danger",children:"Danger"})]})};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Start Game',
    variant: 'primary',
    size: 'md'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Settings',
    variant: 'secondary',
    size: 'md'
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,v,z;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    variant: 'ghost',
    size: 'md'
  }
}`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var S,B,f;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Leave Game',
    variant: 'danger',
    size: 'md'
  }
}`,...(f=(B=t.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var j,w,G;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Join Room',
    variant: 'primary',
    size: 'lg',
    glow: true
  }
}`,...(G=(w=i.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var L,W,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'Connecting...',
    variant: 'primary',
    size: 'md',
    isLoading: true
  }
}`,...(A=(W=o.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var D,C,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Submit Answer',
    variant: 'primary',
    size: 'lg',
    fullWidth: true
  },
  decorators: [Story => <div style={{
    width: '300px'
  }}>
        <Story />
      </div>]
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var P,R,b;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start'
  }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
}`,...(b=(R=d.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var F,I,J;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
}`,...(J=(I=l.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};const q=["Primary","Secondary","Ghost","Danger","WithGlow","Loading","FullWidth","AllSizes","AllVariants"];export{d as AllSizes,l as AllVariants,t as Danger,c as FullWidth,n as Ghost,o as Loading,a as Primary,s as Secondary,i as WithGlow,q as __namedExportsOrder,k as default};
