import{j as x}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-tvICUrOf.js";import{u as J,P as K}from"./PixiDecorator-1biCW5xM.js";import"./index-yBjzXJbu.js";import"./iframe-BMS6Ep5f.js";function N({primaryColor:y=13434624,secondaryColor:g=16716016,accentColor:w=10289407,speed:C=1,blobCount:M=5,width:t=800,height:c=600}){const[O,S]=i.useState([]),[h,v]=i.useState(0);i.useEffect(()=>{const e=[y,g,w],r=[];for(let a=0;a<M;a++)r.push({x:Math.random()*t,y:Math.random()*c,radius:100+Math.random()*150,color:e[a%e.length],speedX:(Math.random()-.5)*2,speedY:(Math.random()-.5)*2,phase:Math.random()*Math.PI*2});S(r)},[M,t,c,y,g,w]),J(e=>{const r=e.deltaTime;v(a=>a+r*.01*C),S(a=>a.map(o=>{let n=o.x+o.speedX*r*C,s=o.y+o.speedY*r*C;return n<-o.radius&&(n=t+o.radius),n>t+o.radius&&(n=-o.radius),s<-o.radius&&(s=c+o.radius),s>c+o.radius&&(s=-o.radius),{...o,x:n,y:s}}))});const z=i.useCallback((e,r,a)=>{e.clear();const o=r.radius*(1+.2*Math.sin(h*2+r.phase)*Math.cos(h*1.5+a)),n=.15;e.circle(r.x,r.y,o*1.5),e.fill({color:r.color,alpha:n*.3}),e.circle(r.x,r.y,o*1.2),e.fill({color:r.color,alpha:n*.5}),e.circle(r.x,r.y,o),e.fill({color:r.color,alpha:n})},[h]);return x.jsx(x.Fragment,{children:O.map((e,r)=>x.jsx("pixiGraphics",{draw:a=>z(a,e,r),blendMode:"add"},r))})}const $={title:"Pixi/Effects/LiquidBackground",component:N,decorators:[K({width:800,height:600,backgroundColor:0})],parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{primaryColor:{control:"color"},secondaryColor:{control:"color"},accentColor:{control:"color"},speed:{control:{type:"range",min:.1,max:3,step:.1}},blobCount:{control:{type:"range",min:1,max:10,step:1}}}},d={args:{primaryColor:13434624,secondaryColor:16716016,accentColor:10289407,speed:1,blobCount:5,width:800,height:600}},l={args:{primaryColor:13434624,secondaryColor:10079232,accentColor:6749952,speed:.8,blobCount:4,width:800,height:600}},p={args:{primaryColor:16716016,secondaryColor:16711850,accentColor:16711782,speed:1.2,blobCount:6,width:800,height:600}},f={args:{primaryColor:65535,secondaryColor:16716016,accentColor:13434624,speed:1,blobCount:5,width:800,height:600}},m={args:{primaryColor:13434624,secondaryColor:16716016,accentColor:10289407,speed:.3,blobCount:3,width:800,height:600}},u={args:{primaryColor:13434624,secondaryColor:16716016,accentColor:65535,speed:2.5,blobCount:8,width:800,height:600}};var k,P,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    primaryColor: 0xccff00,
    secondaryColor: 0xff10f0,
    accentColor: 0x9d00ff,
    speed: 1,
    blobCount: 5,
    width: 800,
    height: 600
  }
}`,...(B=(P=d.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var D,E,j;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    primaryColor: 0xccff00,
    secondaryColor: 0x99cc00,
    accentColor: 0x66ff00,
    speed: 0.8,
    blobCount: 4,
    width: 800,
    height: 600
  }
}`,...(j=(E=l.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var T,G,X;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    primaryColor: 0xff10f0,
    secondaryColor: 0xff00aa,
    accentColor: 0xff0066,
    speed: 1.2,
    blobCount: 6,
    width: 800,
    height: 600
  }
}`,...(X=(G=p.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var Y,q,A;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    primaryColor: 0x00ffff,
    secondaryColor: 0xff10f0,
    accentColor: 0xccff00,
    speed: 1,
    blobCount: 5,
    width: 800,
    height: 600
  }
}`,...(A=(q=f.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var H,L,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    primaryColor: 0xccff00,
    secondaryColor: 0xff10f0,
    accentColor: 0x9d00ff,
    speed: 0.3,
    blobCount: 3,
    width: 800,
    height: 600
  }
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var _,F,I;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    primaryColor: 0xccff00,
    secondaryColor: 0xff10f0,
    accentColor: 0x00ffff,
    speed: 2.5,
    blobCount: 8,
    width: 800,
    height: 600
  }
}`,...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};const b=["Default","AcidGreen","HotPink","Cyberpunk","SlowDrift","Chaotic"];export{l as AcidGreen,u as Chaotic,f as Cyberpunk,d as Default,p as HotPink,m as SlowDrift,b as __namedExportsOrder,$ as default};
