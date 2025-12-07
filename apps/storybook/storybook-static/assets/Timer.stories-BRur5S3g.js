import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as e}from"./Timer-adIv4miV.js";import"./index-yBjzXJbu.js";import"./index-tvICUrOf.js";import"./clsx-B-dksMZM.js";import"./Typography-Btiv0Ab8.js";const G={title:"Molecules/Timer",component:e,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{duration:60,timeRemaining:45,variant:"circular",size:"md"}},i={args:{duration:60,timeRemaining:8,variant:"circular",size:"md",panicThreshold:10}},n={args:{duration:90,timeRemaining:75,variant:"circular",size:"lg"}},s={args:{duration:60,timeRemaining:40,variant:"bar",size:"md"},decorators:[c=>r.jsx("div",{style:{width:"400px"},children:r.jsx(c,{})})]},t={args:{duration:60,timeRemaining:5,variant:"bar",size:"md",panicThreshold:10},decorators:[c=>r.jsx("div",{style:{width:"400px"},children:r.jsx(c,{})})]},o={render:()=>r.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"center"},children:[r.jsx(e,{duration:60,timeRemaining:45,size:"sm"}),r.jsx(e,{duration:60,timeRemaining:45,size:"md"}),r.jsx(e,{duration:60,timeRemaining:45,size:"lg"})]})},m={render:()=>r.jsxs("div",{style:{display:"flex",gap:"24px"},children:[r.jsx(e,{duration:60,timeRemaining:60,size:"md"}),r.jsx(e,{duration:60,timeRemaining:30,size:"md"}),r.jsx(e,{duration:60,timeRemaining:10,size:"md",panicThreshold:10}),r.jsx(e,{duration:60,timeRemaining:3,size:"md",panicThreshold:10})]})},d={args:{duration:15,autoStart:!0,variant:"circular",size:"lg",panicThreshold:5},parameters:{docs:{description:{story:"This timer will auto-count down from 15 seconds"}}}};var u,l,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    duration: 60,
    timeRemaining: 45,
    variant: 'circular',
    size: 'md'
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,h,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    duration: 60,
    timeRemaining: 8,
    variant: 'circular',
    size: 'md',
    panicThreshold: 10
  }
}`,...(x=(h=i.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var z,R,v;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    duration: 90,
    timeRemaining: 75,
    variant: 'circular',
    size: 'lg'
  }
}`,...(v=(R=n.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var T,y,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    duration: 60,
    timeRemaining: 40,
    variant: 'bar',
    size: 'md'
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...(S=(y=s.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var j,f,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    duration: 60,
    timeRemaining: 5,
    variant: 'bar',
    size: 'md',
    panicThreshold: 10
  },
  decorators: [Story => <div style={{
    width: '400px'
  }}>
        <Story />
      </div>]
}`,...(w=(f=t.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,P,b;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '32px',
    alignItems: 'center'
  }}>
      <Timer duration={60} timeRemaining={45} size="sm" />
      <Timer duration={60} timeRemaining={45} size="md" />
      <Timer duration={60} timeRemaining={45} size="lg" />
    </div>
}`,...(b=(P=o.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};var A,B,D;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px'
  }}>
      <Timer duration={60} timeRemaining={60} size="md" />
      <Timer duration={60} timeRemaining={30} size="md" />
      <Timer duration={60} timeRemaining={10} size="md" panicThreshold={10} />
      <Timer duration={60} timeRemaining={3} size="md" panicThreshold={10} />
    </div>
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,I,L;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    duration: 15,
    autoStart: true,
    variant: 'circular',
    size: 'lg',
    panicThreshold: 5
  },
  parameters: {
    docs: {
      description: {
        story: 'This timer will auto-count down from 15 seconds'
      }
    }
  }
}`,...(L=(I=d.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const H=["CircularDefault","CircularPanic","CircularLarge","BarDefault","BarPanic","AllSizes","ProgressStates","AutoCountdown"];export{o as AllSizes,d as AutoCountdown,s as BarDefault,t as BarPanic,a as CircularDefault,n as CircularLarge,i as CircularPanic,m as ProgressStates,H as __namedExportsOrder,G as default};
