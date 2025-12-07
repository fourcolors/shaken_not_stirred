import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as c}from"./Input-ByT4xUG8.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./clsx-B-dksMZM.js";const V={title:"Atoms/Input",component:c,parameters:{layout:"centered"},tags:["autodocs"],decorators:[M=>e.jsx("div",{style:{width:"320px"},children:e.jsx(M,{})})]},r={args:{placeholder:"Enter your answer..."}},a={args:{label:"Your Name",placeholder:"Enter your name"}},s={args:{label:"Room Code",placeholder:"ABCD",maxLength:4,style:{textTransform:"uppercase",textAlign:"center",letterSpacing:"0.5em"}}},o={args:{label:"Answer",placeholder:"Type your answer...",hasError:!0,errorMessage:"This answer is too short",defaultValue:"Hi"}},t={args:{label:"Quick! Time is running out!",placeholder:"TYPE FASTER!",panicMode:!0},parameters:{docs:{description:{story:"Panic mode activates when timer drops below 10 seconds"}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(c,{size:"sm",placeholder:"Small input"}),e.jsx(c,{size:"md",placeholder:"Medium input"}),e.jsx(c,{size:"lg",placeholder:"Large input"})]})},l={args:{label:"Locked",placeholder:"Cannot edit",disabled:!0,defaultValue:"Submitted answer"}};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter your answer...'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Your Name',
    placeholder: 'Enter your name'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,x,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Room Code',
    placeholder: 'ABCD',
    maxLength: 4,
    style: {
      textTransform: 'uppercase',
      textAlign: 'center',
      letterSpacing: '0.5em'
    }
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,S,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Answer',
    placeholder: 'Type your answer...',
    hasError: true,
    errorMessage: 'This answer is too short',
    defaultValue: 'Hi'
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var w,E,T;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Quick! Time is running out!',
    placeholder: 'TYPE FASTER!',
    panicMode: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Panic mode activates when timer drops below 10 seconds'
      }
    }
  }
}`,...(T=(E=t.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var A,j,z;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
}`,...(z=(j=n.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var C,D,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Locked',
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'Submitted answer'
  }
}`,...(L=(D=l.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const Y=["Default","WithLabel","RoomCode","Error","PanicMode","AllSizes","Disabled"];export{n as AllSizes,r as Default,l as Disabled,o as Error,t as PanicMode,s as RoomCode,a as WithLabel,Y as __namedExportsOrder,V as default};
