"use strict";(self.webpackChunkcrypto_monster=self.webpackChunkcrypto_monster||[]).push([[915],{8915:function(e,t,n){n.r(t);var a=n(4165),r=n(5861),o=n(885),c=n(4554),s=n(3239),u=n(6151),i=n(5229),l=n(4569),f=n.n(l),d=n(2791),p=n(1257),v=n(2639),x=n(2119),b=n(9434),g=n(184);v.kL.register(v.uw,v.f$,v.od,v.jn,v.Dx,v.u,v.De);var h=(0,i.Z)({container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:25,padding:40}});t.default=function(e){var t=e.coin,n=(0,d.useState)(),i=(0,o.Z)(n,2),l=i[0],v=i[1],m=(0,d.useState)(1),y=(0,o.Z)(m,2),k=y[0],Z=y[1],j=(0,b.v9)((function(e){return e.crypto.value})),w=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f().get((0,x.XW)(t.id,k,j));case 2:n=e.sent,r=n.data,v(r.prices);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((function(){w()}),[j,k]);var C=h();return(0,g.jsx)(c.Z,{width:{xs:"100%",md:"60%"},className:C.container,children:l?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.x1,{data:{labels:l.map((function(e){var t=new Date(e[0]),n=t.getHours()>12?"".concat(t.getHours()-12,":").concat(t.getMinutes()," PM"):"".concat(t.getHours(),":").concat(t.getMinutes()," AM");return 1===k?n:t.toLocaleDateString()})),datasets:[{data:l.map((function(e){return e[1]})),label:"Price ( Past ".concat(k," Days ) in ").concat(j),borderColor:"#00ffa1"}]},options:{elements:{point:{radius:1}}}}),(0,g.jsx)(c.Z,{sx:{display:"flex",justifyContent:"space-around"},width:"100%",mt:10,children:[{label:"24 Hours",value:1},{label:"30 Days",value:30},{label:"3 Months",value:90},{label:"1 Year",value:365}].map((function(e){return(0,g.jsx)(u.Z,{size:"small",sx:{backgroundColor:"#00ffa1",fontWeight:"bold",color:"#020b12","&:hover":{backgroundColor:"#00cd81"}},variant:"contained",onClick:function(){return Z(e.value)},children:e.label},e.label)}))})]}):(0,g.jsx)(s.Z,{style:{color:"#00ffa1"},size:250,thickness:1})})}}}]);
//# sourceMappingURL=915.d485a1f3.chunk.js.map