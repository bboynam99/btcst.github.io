(this.webpackJsonp=this.webpackJsonp||[]).push([[15],{1192:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(25),c=n(43),i=n(316),o=n(121),s=n(80);t.a=function(e){var t=Object(c.a)().accent;return r.a.createElement(o.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:l.g.small}},r.a.createElement(s.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:l.d?24:18,paddingBottom:l.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(i.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:l.g.tiny}}))}},1193:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(42),c=n(57),i=n(4),o=n(53),s=n(413),u=n(25),m=n(404),d=n(9),g=n.n(d),f=n(11),b=function(e){return r.a.createElement(i.a,g()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===f.a.OS?u.g.large:u.g.normal},e.style]}))},p=n(121),h=n(96),y=n(52),w=n(43),v=function(e){var t=Object(a.useContext)(y.a).darkMode,n=Object(w.a)(),l=n.background,c=n.textLight;return r.a.createElement(h.d,g()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:l,borderWidth:1,borderColor:t?"white":c}}))},E=function(){var e=Object(a.useContext)(y.a).darkMode,t=Object(w.a)(),n=t.background,l=t.textLight,c=Object(m.a)("https://twitter.com/standardhashrate","","_blank"),i=Object(m.a)("https://github.com/Standard-Hashrate-Group","","_blank"),o=Object(m.a)("https://discord.gg/standardhashrate","","_blank"),s=Object(m.a)("https://www.1-b.tc","","_blank");return r.a.createElement(p.a,{style:{width:"100%",justifyContent:"center"}},r.a.createElement(v,{type:"github-alt",onPress:i}),r.a.createElement(v,{type:"twitter",onPress:c}),r.a.createElement(v,{type:"wordpress",onPress:s}),r.a.createElement(h.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:n,reverseColor:e?"white":"#7289da",style:{backgroundColor:n},containerStyle:{borderWidth:1,borderColor:e?"white":l},onPress:o}))},x=n(80),O={us:n(1195),cn:n(1196),kr:n(1197)},j=function(e){var t=e.name,n=e.locale,a=Object(o.g)(),i=Object(o.h)();return r.a.createElement(c.a,{onPress:function(){a.push(i.pathname+"?locale="+n)},style:{marginHorizontal:4}},r.a.createElement(l.a,{source:O[t],style:{width:30,height:20}}))};t.a=function(){Object(m.a)("https://dashboard.alchemyapi.io/signup?referral=429fb682-0d85-40ab-ad88-daf847cf7c63","","_blank");return r.a.createElement(b,{noTopMargin:!0},r.a.createElement(i.a,{style:{width:"100%",padding:u.g.normal,alignItems:"center"}},r.a.createElement(E,null),r.a.createElement(x.a,{note:!0,style:{marginTop:u.g.tiny}},"Built with \u2764\ufe0f by StandardHashrate (v",s.a.manifest.version,")"),r.a.createElement(p.a,{style:{marginTop:u.g.small}},r.a.createElement(j,{name:"us",locale:"en"}),r.a.createElement(j,{name:"cn",locale:"zh"}),r.a.createElement(j,{name:"kr",locale:"ko"}))))}},1195:function(e,t,n){e.exports=n.p+"static/media/us.d367121f.png"},1196:function(e,t,n){e.exports=n.p+"static/media/cn.baedda5d.png"},1197:function(e,t,n){e.exports=n.p+"static/media/kr.146730ea.png"},1198:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(4),c=n(25),i=n(43);t.a=function(e){var t=Object(i.a)().border;return r.a.createElement(l.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?c.g.tiny:c.g.small,marginBottom:e.small?c.g.tiny:c.g.small+c.g.tiny}})}},1203:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(86),c=n(25);t.a=function(){return r.a.createElement(l.a,{size:"large",style:{marginVertical:c.g.large}})}},1215:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"i",(function(){return g})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return b})),n.d(t,"g",(function(){return p})),n.d(t,"a",(function(){return h}));var a=n(2),r=n.n(a),l=n(0),c=n(51),i=n(98),o=n(21),s=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(o.h)("IMiningFarm",c.c,e),a.next=3,r.a.awrap(t.viewAllTimeTotalMined());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},u=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(o.h)("IBEP20",c.b,e),a.next=3,r.a.awrap(t.balanceOf(c.c));case 3:return n=a.sent,console.log("fetchCurrentTotalStakedSTokenInpool"),console.log(n),a.abrupt("return",n);case 7:case"end":return a.stop()}}),null,null,null,Promise)},m=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(o.h)("IBEP20",c.b,e),a.next=3,r.a.awrap(t.totalSupply());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},d=function(e,t){var n,a;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(o.h)("ISTokenERC20",c.b,t),l.next=3,r.a.awrap(n.getFreeToTransferAmount(e));case 3:return a=l.sent,l.abrupt("return",a);case 5:case"end":return l.stop()}}),null,null,null,Promise)},g=function(e,t){var n,a;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(o.h)("IMiningFarm",c.c,t),l.next=3,r.a.awrap(n.viewUserInfo(e));case 3:return a=l.sent,l.abrupt("return",a);case 5:case"end":return l.stop()}}),null,null,null,Promise)},f=function(){return{enter:Object(l.useCallback)((function(e,t){var n,a,l;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=Object(o.h)("IMiningFarm",c.c,t),console.log("before gas limit:"+e),s.next=4,r.a.awrap(n.estimateGas.apiDepositToMining(e));case 4:return a=s.sent,s.t0=console,s.next=8,r.a.awrap(a.toString());case 8:return s.t1=s.sent,s.t2=s.t1+" gas limit",s.t0.log.call(s.t0,s.t2),s.next=13,r.a.awrap(n.apiDepositToMining(e,{gasLimit:a.mul(120).div(100)}));case 13:return l=s.sent,s.abrupt("return",Object(i.a)(l,"stakeActions.enter()",e.toString()));case 15:case"end":return s.stop()}}),null,null,null,Promise)}),[]),leave:Object(l.useCallback)((function(e,t){var n,a,l;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=Object(o.h)("IMiningFarm",c.c,t),console.log("before gas limit:"+e),s.next=4,r.a.awrap(n.estimateGas.apiWithdrawLatestSToken(e));case 4:return a=s.sent,s.t0=console,s.next=8,r.a.awrap(a.toString());case 8:return s.t1=s.sent,s.t2=s.t1+" gas limit",s.t0.log.call(s.t0,s.t2),s.next=13,r.a.awrap(n.apiWithdrawLatestSToken(e,{gasLimit:a.mul(120).div(100)}));case 13:return l=s.sent,s.abrupt("return",Object(i.a)(l,"stakeActions.leave()",e.toString()));case 15:case"end":return s.stop()}}),null,null,null,Promise)}),[])}},b=function(e,t){var n,a;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(o.h)("IMiningFarm",c.c,t),l.next=3,r.a.awrap(n.viewTotalMinedRewardFrom(e));case 3:return a=l.sent,l.abrupt("return",a);case 5:case"end":return l.stop()}}),null,null,null,Promise)},p=function(e,t){var n,a;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=Object(o.h)("IMiningFarm",c.c,t),l.next=3,r.a.awrap(n.viewGetTotalRewardBalanceInPool(e));case 3:return a=l.sent,l.abrupt("return",a);case 5:case"end":return l.stop()}}),null,null,null,Promise)},h=function(e,t,n,a){var l,s,u;return r.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return l=Object(o.h)("IMiningFarm",c.c,a),m.next=3,r.a.awrap(l.estimateGas.apiClaimAmountOfReward(e,t,n));case 3:return s=m.sent,m.next=6,r.a.awrap(l.apiClaimAmountOfReward(e,t,n,{gasLimit:s.mul(120).div(100)}));case 6:return u=m.sent,m.abrupt("return",Object(i.a)(u,"farmActions.apiClaimAmountOfReward()",t.toString()));case 8:case"end":return m.stop()}}),null,null,null,Promise)}},1389:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(236),c=n(11),i=n(57),o=n(4),s=n(96),u=n(31),m=n(409),d=n(1198),g=n(406),f=n(407),b=n(121),p=n(1192),h=n(1203),y=n(80),w=n(408),v=n(1193),E=n(25),x=n(56),O=n(43),j=n(2),k=n.n(j),I=n(18),T=n.n(I),S=n(137),C=n.n(S),P=n(1215),M=n(21),B=n(51),W=function(){var e=Object(a.useContext)(x.b),t=e.provider,n=e.signer,r=e.address,l=(e.tokens,Object(a.useState)()),c=T()(l,2),i=c[0],o=c[1],s=Object(a.useState)(!0),u=T()(s,2),m=u[0],d=u[1],g=Object(a.useState)(),f=T()(g,2),b=f[0],p=f[1],h=Object(a.useState)(!0),y=T()(h,2),w=y[0],v=y[1],E=Object(a.useState)(),O=T()(E,2),j=O[0],I=O[1],S=Object(a.useState)(!0),W=T()(S,2),A=W[0],L=W[1],z=Object(a.useState)(),F=T()(z,2),N=F[0],H=F[1],R=Object(a.useState)(!0),K=T()(R,2),_=K[0],G=K[1];return Object(a.useEffect)((function(){o(void 0),d(!0),p(void 0),v(!0),I(void 0),L(!0),G(!0)}),[r]),C()((function(){var e;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=14;break}return d(!0),a.next=4,k.a.awrap(Object(P.c)(t));case 4:return e=a.sent,a.prev=5,a.t0=o,a.next=9,k.a.awrap(e);case 9:a.t1=a.sent,(0,a.t0)(a.t1);case 11:return a.prev=11,d(!1),a.finish(11);case 14:case"end":return a.stop()}}),null,null,[[5,,11,14]],Promise)}),[t,n]),C()((function(){var e;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=12;break}return v(!0),a.prev=2,e=Object(M.h)("ERC20",B.a,n),a.t0=p,a.next=7,k.a.awrap(e.balanceOf(B.c));case 7:a.t1=a.sent,(0,a.t0)(a.t1);case 9:return a.prev=9,v(!1),a.finish(9);case 12:case"end":return a.stop()}}),null,null,[[2,,9,12]],Promise)}),[t,n]),C()((function(){var e;return k.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t||!n){a.next=28;break}return L(!0),G(!0),a.t0=k.a,a.t1=P.i,a.next=7,k.a.awrap(n.getAddress());case 7:return a.t2=a.sent,a.t3=t,a.t4=(0,a.t1)(a.t2,a.t3),a.next=12,a.t0.awrap.call(a.t0,a.t4);case 12:return e=a.sent,a.prev=13,a.t5=I,a.next=17,k.a.awrap(e);case 17:return a.t6=a.sent.amount,(0,a.t5)(a.t6),a.t7=H,a.next=22,k.a.awrap(e);case 22:a.t8=a.sent,(0,a.t7)(a.t8);case 24:return a.prev=24,L(!1),G(!1),a.finish(24);case 28:case"end":return a.stop()}}),null,null,[[13,,24,28]],Promise)}),[t,n]),{totalMinedBTC:i,loadingTotalMined:m,btcInpool:b,loadingBTCInpool:w,yourMiningPower:j,loadingYourMiningPower:A,userInfo:N,loadingUserInfo:_}},A=n(404),L=n(62),z=n(410),F=n(411),N=function(e){var t=e.state;return r.a.createElement(o.a,{style:{marginTop:E.d?E.g.large:E.g.normal}},r.a.createElement(H,{state:t}),r.a.createElement(o.a,{style:{height:E.g.large}}),r.a.createElement(R,{state:t}),r.a.createElement(o.a,{style:{height:E.g.large}}),r.a.createElement(K,{state:t}))},H=function(e){var t=e.state,n=Object(L.a)(),l=Object(a.useContext)(x.b),c=(l.loadingTokens,l.tokens,t.btcInpool),i=t.loadingBTCInpool;return r.a.createElement(o.a,null,r.a.createElement(p.a,{text:n("total-btc-still-in-pool")}),r.a.createElement(w.a,{text:i||void 0==c?n("fetching"):Object(M.d)(c),fontWeight:"light",disabled:i,style:{fontSize:E.d?32:24}}))},R=function(e){var t,n=e.state,a=Object(L.a)(),l=Object(A.a)("/staking","Stake");return r.a.createElement(o.a,null,r.a.createElement(p.a,{text:a("your-mining-power"),buttonText:a("stake"),onPressButton:l}),r.a.createElement(_,{loading:n.loadingYourMiningPower,number:null==(t=n.yourMiningPower)?void 0:t.div(u.ethers.BigNumber.from(10)),suffix:"TH/s"}))},K=function(e){var t,n=e.state,a=Object(L.a)();return r.a.createElement(o.a,null,r.a.createElement(p.a,{text:a("your-staking-records")}),r.a.createElement(G,{loading:n.loadingUserInfo,records:null==(t=n.userInfo)?void 0:t.stakeInfo,recordItem:U}))},_=function(e){var t=e.suffix?e.suffix:"";return e.loading||void 0==e.number?r.a.createElement(h.a,null):r.a.createElement(w.a,{text:Object(M.d)(e.number)+""+t,fontWeight:"light",disabled:e.loading,style:{fontSize:E.d?32:24}})},G=function(e){var t=Object(L.a)(),n=Object(a.useCallback)((function(t){var n=t.item;return r.a.createElement(e.recordItem,{key:n.timeKey,record:n})}),[]),c=Object(a.useMemo)((function(){return(e.records||[]).filter((function(e){return e.amount.sub(e.withdrawed).gt(u.ethers.BigNumber.from(0))||e.lockedAmount.sub(e.lockedWithdrawed).gt(u.ethers.BigNumber.from(0))})).sort((function(e,t){return(t.timeKey.toNumber()||0)-(e.timeKey.toNumber()||0)}))}),[e.records]);return e.loading?r.a.createElement(h.a,null):0===c.length?r.a.createElement(D,null):r.a.createElement(o.a,null,r.a.createElement(b.a,{style:{alignItems:"center",paddingHorizontal:E.g.tiny,paddingVertical:4}},r.a.createElement(o.a,{style:{flex:1,alignItems:"flex-start"}},r.a.createElement(y.a,{caption:!0,numberOfLines:1,fontWeight:"light"},"BTCST")),r.a.createElement(o.a,null,r.a.createElement(y.a,{caption:!0,numberOfLines:1,style:{marginLeft:E.g.small}},t("locked"))),r.a.createElement(o.a,{style:{flex:1,alignItems:"flex-end"}},r.a.createElement(y.a,{caption:!0,fontWeight:"light"},t("date"))),r.a.createElement(V,{path:"/tokens/"})),r.a.createElement(l.a,{keyExtractor:function(e){return e.timeKey.toString()},data:c,renderItem:n,ItemSeparatorComponent:function(){return r.a.createElement(d.a,{small:!0})}}))},D=function(){var e=Object(L.a)();return r.a.createElement(o.a,{style:{margin:E.g.normal}},r.a.createElement(y.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},e("you-dont-have-assets")))},U=function(e){var t=e.record,n=t.amount.sub(t.withdrawed),a=t.lockedAmount.sub(t.lockedWithdrawed);return r.a.createElement(b.a,{style:{alignItems:"center",paddingHorizontal:E.g.tiny,paddingVertical:4}},r.a.createElement(o.a,{style:{flex:1,alignItems:"flex-start"}},r.a.createElement(y.a,{caption:!0,numberOfLines:1,fontWeight:"light",disabled:e.disabled},n.gt(u.BigNumber.from(0))?Object(M.d)(n||0):"N/A")),r.a.createElement(o.a,null,r.a.createElement(y.a,{caption:!0,numberOfLines:1,style:{marginLeft:E.g.small},disabled:e.disabled},a.gt(u.BigNumber.from(0))?Object(M.d)(a||0):"N/A")),r.a.createElement(o.a,{style:{flex:1,alignItems:"flex-end"}},r.a.createElement(y.a,{caption:!0,fontWeight:"light",disabled:e.disabled},Object(M.f)(t.timeKey))),r.a.createElement(V,{path:"/tokens/"+t.timeKey}))},V=function(e){var t=e.path,n=Object(O.a)(),a=n.textDark,l=n.disabled,c=t.endsWith(u.ethers.constants.AddressZero);return r.a.createElement(i.a,{onPress:function(){return window.open("https://sushiswapanalytics.com/"+t.toLowerCase(),"_blank")},disabled:c},r.a.createElement(s.b,{type:"evilicon",name:"external-link",color:c?l:a,style:{marginLeft:E.g.tiny}}))};t.default=function(){var e=Object(L.a)(),t=W(),n=(Object(a.useContext)(x.b).loadingTokens,t.loadingTotalMined),l=t.totalMinedBTC;return r.a.createElement(z.a,null,r.a.createElement(g.a,null,r.a.createElement(m.a,null),r.a.createElement(f.a,{style:{paddingBottom:E.g.huge}},r.a.createElement(w.a,{text:e("total-mined"),style:{flex:1}}),r.a.createElement(w.a,{text:n||void 0==l?e("fetching"):Object(M.d)(l),fontWeight:"light",disabled:n,style:{fontSize:E.d?32:24}}),r.a.createElement(N,{state:t})),"web"===c.a.OS&&r.a.createElement(v.a,null)),r.a.createElement(F.d,null))}}}]);
//# sourceMappingURL=15.bc2d2a17.chunk.js.map