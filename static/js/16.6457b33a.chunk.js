(this.webpackJsonp=this.webpackJsonp||[]).push([[16],{1192:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(25),s=n(43),o=n(316),i=n(121),l=n(80);t.a=function(e){var t=Object(s.a)().accent;return r.a.createElement(i.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:c.g.small}},r.a.createElement(l.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:c.d?24:18,paddingBottom:c.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(o.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:c.g.tiny}}))}},1193:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(42),s=n(57),o=n(4),i=n(53),l=n(413),u=n(25),d=n(404),b=n(9),m=n.n(b),p=n(11),f=function(e){return r.a.createElement(o.a,m()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===p.a.OS?u.g.large:u.g.normal},e.style]}))},g=n(121),h=n(96),v=n(52),w=n(43),x=function(e){var t=Object(a.useContext)(v.a).darkMode,n=Object(w.a)(),c=n.background,s=n.textLight;return r.a.createElement(h.d,m()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:c,borderWidth:1,borderColor:t?"white":s}}))},O=function(){var e=Object(a.useContext)(v.a).darkMode,t=Object(w.a)(),n=t.background,c=t.textLight,s=Object(d.a)("https://twitter.com/standardhashrate","","_blank"),o=Object(d.a)("https://github.com/Standard-Hashrate-Group","","_blank"),i=Object(d.a)("https://discord.gg/standardhashrate","","_blank"),l=Object(d.a)("https://www.1-b.tc","","_blank");return r.a.createElement(g.a,{style:{width:"100%",justifyContent:"center"}},r.a.createElement(x,{type:"github-alt",onPress:o}),r.a.createElement(x,{type:"twitter",onPress:s}),r.a.createElement(x,{type:"wordpress",onPress:l}),r.a.createElement(h.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:n,reverseColor:e?"white":"#7289da",style:{backgroundColor:n},containerStyle:{borderWidth:1,borderColor:e?"white":c},onPress:i}))},j=n(80),y={us:n(1195),cn:n(1196),kr:n(1197)},E=function(e){var t=e.name,n=e.locale,a=Object(i.g)(),o=Object(i.h)();return r.a.createElement(s.a,{onPress:function(){a.push(o.pathname+"?locale="+n)},style:{marginHorizontal:4}},r.a.createElement(c.a,{source:y[t],style:{width:30,height:20}}))};t.a=function(){Object(d.a)("https://dashboard.alchemyapi.io/signup?referral=429fb682-0d85-40ab-ad88-daf847cf7c63","","_blank");return r.a.createElement(f,{noTopMargin:!0},r.a.createElement(o.a,{style:{width:"100%",padding:u.g.normal,alignItems:"center"}},r.a.createElement(O,null),r.a.createElement(j.a,{note:!0,style:{marginTop:u.g.tiny}},"Built with \u2764\ufe0f by StandardHashrate (v",l.a.manifest.version,")"),r.a.createElement(g.a,{style:{marginTop:u.g.small}},r.a.createElement(E,{name:"us",locale:"en"}),r.a.createElement(E,{name:"cn",locale:"zh"}),r.a.createElement(E,{name:"kr",locale:"ko"}))))}},1195:function(e,t,n){e.exports=n.p+"static/media/us.d367121f.png"},1196:function(e,t,n){e.exports=n.p+"static/media/cn.baedda5d.png"},1197:function(e,t,n){e.exports=n.p+"static/media/kr.146730ea.png"},1203:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(86),s=n(25);t.a=function(){return r.a.createElement(c.a,{size:"large",style:{marginVertical:s.g.large}})}},1215:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"i",(function(){return d})),n.d(t,"f",(function(){return b})),n.d(t,"d",(function(){return m})),n.d(t,"j",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"a",(function(){return v}));var a=n(2),r=n.n(a),c=n(0),s=n(51),o=n(98),i=n(21),l=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(i.h)("IMiningFarm",s.c,e),a.next=3,r.a.awrap(t.viewAllTimeTotalMined());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},u=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(i.h)("IBEP20",s.b,e),a.next=3,r.a.awrap(t.balanceOf(s.c));case 3:return n=a.sent,console.log("fetchCurrentTotalStakedSTokenInpool"),console.log(n),a.abrupt("return",n);case 7:case"end":return a.stop()}}),null,null,null,Promise)},d=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(i.h)("IMiningFarm",s.c,t),c.next=3,r.a.awrap(n.viewTotalRewardInPoolFrom(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},b=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(i.h)("IBEP20",s.b,e),a.next=3,r.a.awrap(t.totalSupply());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},m=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(i.h)("ISTokenERC20",s.b,t),c.next=3,r.a.awrap(n.getFreeToTransferAmount(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},p=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(i.h)("IMiningFarm",s.c,t),c.next=3,r.a.awrap(n.viewUserInfo(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},f=function(){return{enter:Object(c.useCallback)((function(e,t){var n,a,c;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(i.h)("IMiningFarm",s.c,t),console.log("before gas limit:"+e),l.next=4,r.a.awrap(n.estimateGas.apiDepositToMining(e));case 4:return a=l.sent,l.t0=console,l.next=8,r.a.awrap(a.toString());case 8:return l.t1=l.sent,l.t2=l.t1+" gas limit",l.t0.log.call(l.t0,l.t2),l.next=13,r.a.awrap(n.apiDepositToMining(e,{gasLimit:a.mul(120).div(100)}));case 13:return c=l.sent,l.abrupt("return",Object(o.a)(c,"stakeActions.enter()",e.toString()));case 15:case"end":return l.stop()}}),null,null,null,Promise)}),[]),leave:Object(c.useCallback)((function(e,t){var n,a,c;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(i.h)("IMiningFarm",s.c,t),console.log("before gas limit:"+e),l.next=4,r.a.awrap(n.estimateGas.apiWithdrawLatestSToken(e));case 4:return a=l.sent,l.t0=console,l.next=8,r.a.awrap(a.toString());case 8:return l.t1=l.sent,l.t2=l.t1+" gas limit",l.t0.log.call(l.t0,l.t2),l.next=13,r.a.awrap(n.apiWithdrawLatestSToken(e,{gasLimit:a.mul(120).div(100)}));case 13:return c=l.sent,l.abrupt("return",Object(o.a)(c,"stakeActions.leave()",e.toString()));case 15:case"end":return l.stop()}}),null,null,null,Promise)}),[])}},g=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(i.h)("IMiningFarm",s.c,t),c.next=3,r.a.awrap(n.viewTotalMinedRewardFrom(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},h=function(e,t){var n,a;return r.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return n=Object(i.h)("IMiningFarm",s.c,t),c.next=3,r.a.awrap(n.viewGetTotalRewardBalanceInPool(e));case 3:return a=c.sent,c.abrupt("return",a);case 5:case"end":return c.stop()}}),null,null,null,Promise)},v=function(e,t,n,a){var c,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return c=Object(i.h)("IMiningFarm",s.c,a),l.next=3,r.a.awrap(c.apiClaimAmountOfReward(e,t,n));case 3:return o=l.sent,l.abrupt("return",o);case 5:case"end":return l.stop()}}),null,null,null,Promise)}},1371:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(18),s=n.n(c),o=n(0),i=n(137),l=n.n(i),u=n(56),d=n(412),b=n(1215);t.a=function(){var e=Object(o.useContext)(u.b),t=e.provider,n=e.signer,a=e.address,c=e.tokens,i=Object(o.useState)(),m=s()(i,2),p=m[0],f=m[1],g=Object(o.useState)(),h=s()(g,2),v=h[0],w=h[1],x=Object(o.useState)(!0),O=s()(x,2),j=O[0],y=O[1],E=Object(o.useState)(!0),k=s()(E,2),T=k[0],S=k[1],P=(Object(d.a)().getPair,Object(o.useState)(!0)),M=s()(P,2),C=M[0],I=M[1],B=Object(o.useState)(),F=s()(B,2),z=F[0],W=F[1],L=Object(o.useState)(),A=s()(L,2),H=A[0],R=A[1],_=Object(o.useState)(!0),G=s()(_,2),D=(G[0],G[1]),J=Object(o.useState)(),N=s()(J,2),U=N[0],V=N[1],q=Object(o.useState)(!0),K=s()(q,2),Q=(K[0],K[1]),X=Object(o.useState)(),Y=s()(X,2),Z=Y[0],$=Y[1],ee=Object(o.useState)(!0),te=s()(ee,2),ne=(te[0],te[1]);return Object(o.useEffect)((function(){f(void 0),w(void 0),y(!0),S(!0),W(void 0),R(void 0),V(void 0),$(void 0),I(!0),D(!0),Q(!0),ne(!0)}),[a]),l()((function(){var e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=14;break}return I(!0),a.next=4,r.a.awrap(Object(b.c)(t));case 4:return e=a.sent,a.prev=5,a.t0=W,a.next=9,r.a.awrap(e);case 9:a.t1=a.sent,(0,a.t0)(a.t1);case 11:return a.prev=11,I(!1),a.finish(11);case 14:case"end":return a.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,n]),l()((function(){var e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=14;break}return D(!0),a.next=4,r.a.awrap(Object(b.b)(t));case 4:return e=a.sent,a.prev=5,a.t0=R,a.next=9,r.a.awrap(e);case 9:a.t1=a.sent,(0,a.t0)(a.t1);case 11:return a.prev=11,D(!1),a.finish(11);case 14:case"end":return a.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,n]),l()((function(){var e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=21;break}return Q(!0),a.t0=r.a,a.t1=b.i,a.next=6,r.a.awrap(n.getAddress());case 6:return a.t2=a.sent,a.t3=t,a.t4=(0,a.t1)(a.t2,a.t3),a.next=11,a.t0.awrap.call(a.t0,a.t4);case 11:return e=a.sent,a.prev=12,a.t5=V,a.next=16,r.a.awrap(e);case 16:a.t6=a.sent,(0,a.t5)(a.t6);case 18:return a.prev=18,Q(!1),a.finish(18);case 21:case"end":return a.stop()}}),null,null,[[12,,18,21]],Promise)}),[t,n]),l()((function(){var e;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=14;break}return ne(!0),a.next=4,r.a.awrap(Object(b.f)(t));case 4:return e=a.sent,a.prev=5,a.t0=$,a.next=9,r.a.awrap(e);case 9:a.t1=a.sent,(0,a.t0)(a.t1);case 11:return a.prev=11,ne(!1),a.finish(11);case 14:case"end":return a.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,n]),{totalMinedBTC:z,totalStakedBTCST:H,yourBTCInpool:U,totalMiningPower:Z,loadingTotalMined:C,loadingLPTokens:j,loadingPools:T,tokens:c,lpTokens:p,pools:v}}},1379:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=(n(57),n(4)),o=(n(96),n(31)),i=n(409),l=n(406),u=n(407),d=n(1192),b=n(1203),m=n(408),p=n(1193),f=n(25),g=n(56),h=(n(43),n(1371)),v=n(404),w=n(62),x=n(21),O=n(410),j=function(e){var t=e.state;return r.a.createElement(s.a,{style:{marginTop:f.d?f.g.large:f.g.normal}},r.a.createElement(y,{state:t}),r.a.createElement(s.a,{style:{height:f.g.large}}),r.a.createElement(k,{state:t}),r.a.createElement(s.a,{style:{height:f.g.large}}),r.a.createElement(E,{state:t}))},y=function(e){var t=e.state,n=Object(w.a)(),c=Object(a.useContext)(g.b),o=(c.loadingTokens,c.tokens,Object(v.a)("/staking","Stake")),i=t.totalStakedBTCST,l=t.loadingTotalStaked;return r.a.createElement(s.a,null,r.a.createElement(d.a,{text:n("total-staked-btcst"),buttonText:n("stake"),onPressButton:o}),r.a.createElement(m.a,{text:l||void 0==i?n("fetching"):Object(x.d)(i),fontWeight:"light",disabled:l,style:{fontSize:f.d?32:24}}))},E=function(e){var t=e.state,n=Object(w.a)(),a=void 0!=t.totalMiningPower?t.totalMiningPower.div(o.ethers.BigNumber.from(10)):void 0;return r.a.createElement(s.a,null,r.a.createElement(d.a,{text:n("total-mining-power")}),r.a.createElement(T,{loading:t.loadingTotalMiningPower,number:a,suffix:" TH/s"}))},k=function(e){var t=e.state,n=Object(w.a)(),a=Object(v.a)("/claim","Mining");return r.a.createElement(s.a,null,r.a.createElement(d.a,{text:n("your-btc-balance-inpool"),buttonText:n("claim"),onPressButton:a}),r.a.createElement(T,{loading:t.loadingBTCInpool,number:t.yourBTCInpool}))},T=function(e){var t=e.suffix?e.suffix:"";return e.loading||void 0==e.number?r.a.createElement(b.a,null):r.a.createElement(m.a,{text:Object(x.d)(e.number)+""+t,fontWeight:"light",disabled:e.loading,style:{fontSize:f.d?32:24}})};t.default=function(){var e=Object(w.a)(),t=Object(h.a)(),n=(Object(a.useContext)(g.b).loadingTokens,t.loadingTotalMined),s=t.totalMinedBTC;return r.a.createElement(O.a,null,r.a.createElement(l.a,null,r.a.createElement(i.a,null),r.a.createElement(u.a,{style:{paddingBottom:f.g.huge}},r.a.createElement(m.a,{text:e("total-mined"),style:{flex:1}}),r.a.createElement(m.a,{text:n||void 0==s?e("fetching"):Object(x.d)(s),fontWeight:"light",disabled:n,style:{fontSize:f.d?32:24}}),r.a.createElement(j,{state:t})),"web"===c.a.OS&&r.a.createElement(p.a,null)))}}}]);
//# sourceMappingURL=16.6457b33a.chunk.js.map