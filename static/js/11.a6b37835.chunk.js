(this.webpackJsonp=this.webpackJsonp||[]).push([[11],{1192:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(43),c=n(316),i=n(121),s=n(80);t.a=function(e){var t=Object(l.a)().accent;return r.a.createElement(i.a,{style:{alignItems:"flex-end",height:32,marginBottom:e.disabled?0:o.g.small}},r.a.createElement(s.a,{medium:!0,fontWeight:e.fontWeight||"bold",disabled:e.disabled,style:[{flex:1,fontSize:o.d?24:18,paddingBottom:o.g.tiny},e.style]},e.text),e.buttonText&&r.a.createElement(c.a,{type:"clear",size:"small",title:e.buttonText,onPress:e.onPressButton,color:t,buttonStyle:{paddingHorizontal:o.g.tiny}}))}},1193:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(42),l=n(57),c=n(4),i=n(53),s=n(413),u=n(25),m=n(404),d=n(9),b=n.n(d),p=n(11),f=function(e){return r.a.createElement(c.a,b()({},e,{style:[{width:"100%",marginTop:e.noTopMargin?0:"web"===p.a.OS?u.g.large:u.g.normal},e.style]}))},g=n(121),h=n(96),y=n(52),O=n(43),v=function(e){var t=Object(a.useContext)(y.a).darkMode,n=Object(O.a)(),o=n.background,l=n.textLight;return r.a.createElement(h.d,b()({},e,{light:!t,iconColor:t?"white":void 0,style:{backgroundColor:o,borderWidth:1,borderColor:t?"white":l}}))},j=function(){var e=Object(a.useContext)(y.a).darkMode,t=Object(O.a)(),n=t.background,o=t.textLight,l=Object(m.a)("https://twitter.com/standardhashrate","","_blank"),c=Object(m.a)("https://github.com/Standard-Hashrate-Group","","_blank"),i=Object(m.a)("https://discord.gg/standardhashrate","","_blank"),s=Object(m.a)("https://www.1-b.tc","","_blank");return r.a.createElement(g.a,{style:{width:"100%",justifyContent:"center"}},r.a.createElement(v,{type:"github-alt",onPress:c}),r.a.createElement(v,{type:"twitter",onPress:l}),r.a.createElement(v,{type:"wordpress",onPress:s}),r.a.createElement(h.b,{type:"material-community",name:"discord",raised:!0,reverse:!0,color:n,reverseColor:e?"white":"#7289da",style:{backgroundColor:n},containerStyle:{borderWidth:1,borderColor:e?"white":o},onPress:i}))},k=n(80),w={us:n(1195),cn:n(1196),kr:n(1197)},x=function(e){var t=e.name,n=e.locale,a=Object(i.g)(),c=Object(i.h)();return r.a.createElement(l.a,{onPress:function(){a.push(c.pathname+"?locale="+n)},style:{marginHorizontal:4}},r.a.createElement(o.a,{source:w[t],style:{width:30,height:20}}))};t.a=function(){Object(m.a)("https://dashboard.alchemyapi.io/signup?referral=429fb682-0d85-40ab-ad88-daf847cf7c63","","_blank");return r.a.createElement(f,{noTopMargin:!0},r.a.createElement(c.a,{style:{width:"100%",padding:u.g.normal,alignItems:"center"}},r.a.createElement(j,null),r.a.createElement(k.a,{note:!0,style:{marginTop:u.g.tiny}},"Built with \u2764\ufe0f by StandardHashrate (v",s.a.manifest.version,")"),r.a.createElement(g.a,{style:{marginTop:u.g.small}},r.a.createElement(x,{name:"us",locale:"en"}),r.a.createElement(x,{name:"cn",locale:"zh"}),r.a.createElement(x,{name:"kr",locale:"ko"}))))}},1195:function(e,t,n){e.exports=n.p+"static/media/us.d367121f.png"},1196:function(e,t,n){e.exports=n.p+"static/media/cn.baedda5d.png"},1197:function(e,t,n){e.exports=n.p+"static/media/kr.146730ea.png"},1198:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),c=n(43);t.a=function(e){var t=Object(c.a)().border;return r.a.createElement(o.a,{style:{height:1,width:"100%",backgroundColor:t,marginTop:e.small?l.g.tiny:l.g.small,marginBottom:e.small?l.g.tiny:l.g.small+l.g.tiny}})}},1201:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),c=n(80);t.a=function(e){var t=e.error;return r.a.createElement(o.a,{style:{borderColor:"red",borderWidth:1,width:"100%",padding:l.g.tiny,marginTop:l.g.small}},t.code&&r.a.createElement(c.a,{fontWeight:"bold",style:{color:"red",fontSize:14}},"Error Code ",t.code),r.a.createElement(c.a,{note:!0,style:{color:"red",fontSize:14}},t.message))}},1202:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(10),l=n.n(o),c=n(0),i=n.n(c),s=n(4),u=n(25),m=n(52),d=n(43),b=n(405);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=Object(c.useContext)(m.a).darkMode,n=Object(d.a)(),a=n.backgroundLight,o=n.borderDark,l=Object(b.a)().border;return i.a.createElement(s.a,r()({},e,{style:[f(f({},l({color:t?o:a})),{},{backgroundColor:a,marginTop:u.g.normal+u.g.small,padding:u.g.small+u.g.tiny}),e.style]}))}},1204:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(43),c=n(62),i=n(80);t.a=function(e){var t=Object(c.a)(),n=Object(l.a)(),a=n.textDark,s=n.textLight,u=n.placeholder;return r.a.createElement(i.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:e.disabled?u:e.amount?a:s}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1205:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(62),l=n(316);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(l.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1208:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(62),l=n(316);t.a=function(){var e=Object(o.a)();return r.a.createElement(l.a,{title:e("fetching"),disabled:!0})}},1211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),c=n(43),i=n(405),s=n(316),u=n(80);t.a=function(e){var t=Object(c.a)().textLight,n=(0,Object(i.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(o.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(u.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(s.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.g.tiny}}))}},1212:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(0),l=n.n(o),c=n(11),i=n(4),s=n(31),u=n(25),m=n(43),d=n(405),b=n(21),p=n(316),f=n(1192),g=n(1216);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=Object(m.a)().accent,n=Object(o.useCallback)((function(){if(e.token){var t=e.token.balance;if(Object(b.i)(e.token)){var n=Object(b.o)(16);t=t.gt(n)?t.sub(n):s.ethers.constants.Zero}e.updateAmount(Object(b.d)(t,e.token.decimals))}}),[e.token,e.updateAmount]);return l.a.createElement(i.a,{style:{position:"absolute",right:12,bottom:"web"===c.a.OS?12:24}},l.a.createElement(p.a,{type:"clear",size:"small",color:t,title:e.maxButtonText||(u.d?"MAX "+e.token.symbol:"MAX"),fontWeight:"bold",onPress:n,buttonStyle:{paddingHorizontal:u.g.tiny}}))};t.a=function(e){var t,n,a=Object(d.a)().border,r=Object(o.useCallback)((function(t){if(e.token&&e.onAmountChanged)try{Object(b.m)(t,e.token.decimals),e.onAmountChanged(t)}catch(n){t.endsWith(".")&&t.indexOf(".")===t.length-1&&e.onAmountChanged(t)}}),[e.token,e.onAmountChanged]);return l.a.createElement(i.a,null,e.title&&l.a.createElement(f.a,{text:e.title}),l.a.createElement(i.a,null,l.a.createElement(g.a,{label:e.label,value:e.amount,onChangeText:r,placeholder:"0.0",keyboardType:"numeric",autoFocus:e.autoFocus||!1,inputStyle:{marginHorizontal:u.g.tiny},inputContainerStyle:{borderBottomWidth:0},labelStyle:{fontFamily:"light",height:e.label?"auto":0},containerStyle:y(y({},a()),{},{paddingHorizontal:u.g.tiny,paddingTop:15,paddingBottom:2})}),(null==(t=e.token)||null==(n=t.balance)?void 0:n.gt(0))&&!e.hideMaxButton&&l.a.createElement(O,{token:e.token,maxButtonText:e.maxButtonText,updateAmount:e.onAmountChanged})))}},1215:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"i",(function(){return m})),n.d(t,"f",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"j",(function(){return p})),n.d(t,"e",(function(){return f})),n.d(t,"h",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"a",(function(){return y}));var a=n(2),r=n.n(a),o=n(0),l=n(51),c=n(98),i=n(21),s=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(i.h)("IMiningFarm",l.c,e),a.next=3,r.a.awrap(t.viewAllTimeTotalMined());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},u=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(i.h)("IBEP20",l.b,e),a.next=3,r.a.awrap(t.balanceOf(l.c));case 3:return n=a.sent,console.log("fetchCurrentTotalStakedSTokenInpool"),console.log(n),a.abrupt("return",n);case 7:case"end":return a.stop()}}),null,null,null,Promise)},m=function(e,t){var n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(i.h)("IMiningFarm",l.c,t),o.next=3,r.a.awrap(n.viewTotalRewardInPoolFrom(e));case 3:return a=o.sent,o.abrupt("return",a);case 5:case"end":return o.stop()}}),null,null,null,Promise)},d=function(e){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=Object(i.h)("IBEP20",l.b,e),a.next=3,r.a.awrap(t.totalSupply());case 3:return n=a.sent,a.abrupt("return",n);case 5:case"end":return a.stop()}}),null,null,null,Promise)},b=function(e,t){var n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(i.h)("ISTokenERC20",l.b,t),o.next=3,r.a.awrap(n.getFreeToTransferAmount(e));case 3:return a=o.sent,o.abrupt("return",a);case 5:case"end":return o.stop()}}),null,null,null,Promise)},p=function(e,t){var n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(i.h)("IMiningFarm",l.c,t),o.next=3,r.a.awrap(n.viewUserInfo(e));case 3:return a=o.sent,o.abrupt("return",a);case 5:case"end":return o.stop()}}),null,null,null,Promise)},f=function(){return{enter:Object(o.useCallback)((function(e,t){var n,a,o;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=Object(i.h)("IMiningFarm",l.c,t),console.log("before gas limit:"+e),s.next=4,r.a.awrap(n.estimateGas.apiDepositToMining(e));case 4:return a=s.sent,s.t0=console,s.next=8,r.a.awrap(a.toString());case 8:return s.t1=s.sent,s.t2=s.t1+" gas limit",s.t0.log.call(s.t0,s.t2),s.next=13,r.a.awrap(n.apiDepositToMining(e,{gasLimit:a.mul(120).div(100)}));case 13:return o=s.sent,s.abrupt("return",Object(c.a)(o,"stakeActions.enter()",e.toString()));case 15:case"end":return s.stop()}}),null,null,null,Promise)}),[]),leave:Object(o.useCallback)((function(e,t){var n,a,o;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=Object(i.h)("IMiningFarm",l.c,t),console.log("before gas limit:"+e),s.next=4,r.a.awrap(n.estimateGas.apiWithdrawLatestSToken(e));case 4:return a=s.sent,s.t0=console,s.next=8,r.a.awrap(a.toString());case 8:return s.t1=s.sent,s.t2=s.t1+" gas limit",s.t0.log.call(s.t0,s.t2),s.next=13,r.a.awrap(n.apiWithdrawLatestSToken(e,{gasLimit:a.mul(120).div(100)}));case 13:return o=s.sent,s.abrupt("return",Object(c.a)(o,"stakeActions.leave()",e.toString()));case 15:case"end":return s.stop()}}),null,null,null,Promise)}),[])}},g=function(e,t){var n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(i.h)("IMiningFarm",l.c,t),o.next=3,r.a.awrap(n.viewTotalMinedRewardFrom(e));case 3:return a=o.sent,o.abrupt("return",a);case 5:case"end":return o.stop()}}),null,null,null,Promise)},h=function(e,t){var n,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n=Object(i.h)("IMiningFarm",l.c,t),o.next=3,r.a.awrap(n.viewGetTotalRewardBalanceInPool(e));case 3:return a=o.sent,o.abrupt("return",a);case 5:case"end":return o.stop()}}),null,null,null,Promise)},y=function(e,t,n,a){var o,c;return r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return o=Object(i.h)("IMiningFarm",l.c,a),s.next=3,r.a.awrap(o.apiClaimAmountOfReward(e,t,n));case 3:return c=s.sent,s.abrupt("return",c);case 5:case"end":return s.stop()}}),null,null,null,Promise)}},1216:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(0),l=n.n(o),c=n(11),i=n(96),s=n(43);t.a=function(e){var t=Object(s.a)(),n=t.textDark,a=t.textMedium,u=t.textLight,m=e.size||"normal",d=e.color||n,b="small"===m?16:"large"===m?24:20,p=Object(o.useCallback)((function(t){null==e.onChangeText||e.onChangeText(t),null==e.onError||e.onError("");var n=[];""!==t&&e.forbidden&&e.forbidden.forEach((function(e){t.match(e.regexp)&&n.push(e.error)})),""!==t&&e.allowed&&e.allowed.forEach((function(e){t.match(e.regexp)||n.push(e.error)})),n.length>0&&(null==e.onError||e.onError(n.join("\n")))}),[e.onChangeText,e.onError,e.forbidden,e.allowed]);return l.a.createElement(i.c,r()({},e,{inputStyle:[{fontSize:b,fontFamily:"regular",paddingBottom:4,color:d,marginTop:0,minHeight:32},"web"===c.a.OS?{outline:"none"}:{},e.inputStyle],labelStyle:[{color:a},e.labelStyle],placeholderTextColor:e.placeholderTextColor||u,errorStyle:e.onError?{height:0}:e.errorStyle,containerStyle:[{paddingHorizontal:0},e.containerStyle],onChangeText:p}))}},1390:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(18),l=n.n(o),c=n(0),i=n.n(c),s=n(11),u=n(4),m=n(1204),d=n(409),b=n(1198),p=n(316),f=n(406),g=n(407),h=n(1201),y=n(1208),O=n(1192),v=n(1202),j=n(1205),k=n(1211),w=n(80),x=n(408),E=n(1212),T=n(1193),S=n(411),P=n(25),C=n(31),I=n(137),A=n.n(I),B=n(56),R=n(1215),M=n(51),z=n(21),F=function(){var e=Object(c.useContext)(B.b),t=e.provider,n=e.signer,a=e.address,o=(e.getTokenAllowance,e.tokens,e.updateTokens,Object(c.useState)("")),i=l()(o,2),s=i[0],u=i[1],m=Object(R.e)(),d=(m.enter,m.leave,Object(c.useState)()),b=l()(d,2),p=b[0],f=b[1],g=Object(c.useState)(!0),h=l()(g,2),y=h[0],O=h[1],v=Object(c.useState)(!1),j=l()(v,2),k=j[0],w=j[1],x=Object(c.useState)(),E=l()(x,2),T=E[0],S=E[1],P=Object(c.useState)(),I=l()(P,2),F=I[0],D=I[1],W=Object(c.useState)(!1),H=l()(W,2),L=H[0],Z=H[1],_=Object(c.useState)(0),G=l()(_,2),N=G[0],J=G[1];Object(c.useEffect)((function(){u(""),f(void 0),O(!0),S(void 0),J(0)}),[a]),A()((function(){var e,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!t||!n){o.next=22;break}return o.prev=1,e=Object(z.h)("ERC20",M.a,n),o.next=5,r.a.awrap(e.name());case 5:return o.t0=o.sent,o.t1=M.a,o.next=9,r.a.awrap(e.decimals());case 9:return o.t2=o.sent,o.next=12,r.a.awrap(e.symbol());case 12:return o.t3=o.sent,o.t4=C.ethers.BigNumber.from(0),a={name:o.t0,address:o.t1,decimals:o.t2,symbol:o.t3,logoURI:"",balance:o.t4},o.t5=f,o.next=18,r.a.awrap(a);case 18:o.t6=o.sent,(0,o.t5)(o.t6);case 20:return o.prev=20,o.finish(20);case 22:case"end":return o.stop()}}),null,null,[[1,,20,22]],Promise)}),[t,n]),A()((function(){var e,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(t&&n&&p)){o.next=38;break}return w(!1),O(!0),o.prev=3,o.t0=r.a,o.t1=R.g,o.next=8,r.a.awrap(n.getAddress());case 8:return o.t2=o.sent,o.t3=t,o.t4=(0,o.t1)(o.t2,o.t3),o.next=13,o.t0.awrap.call(o.t0,o.t4);case 13:return e=o.sent,o.t5=r.a,o.t6=R.h,o.next=18,r.a.awrap(n.getAddress());case 18:return o.t7=o.sent,o.t8=t,o.t9=(0,o.t6)(o.t7,o.t8),o.next=23,o.t5.awrap.call(o.t5,o.t9);case 23:return a=o.sent,w(C.ethers.BigNumber.from(e).gte(C.BigNumber.from(0))),o.t10=D,o.next=28,r.a.awrap(e);case 28:return o.t11=o.sent,(0,o.t10)(o.t11),o.t12=S,o.next=33,r.a.awrap(a);case 33:o.t13=o.sent,(0,o.t12)(o.t13);case 35:return o.prev=35,O(!1),o.finish(35);case 38:case"end":return o.stop()}}),null,null,[[3,,35,38]],Promise)}),[t,n,p,N]);var U=Object(c.useCallback)((function(){var e,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!(t&&s&&p&&n)){o.next=24;break}return Z(!0),o.prev=2,e=Object(z.m)(s,p.decimals),o.t0=r.a,o.t1=R.a,o.next=8,r.a.awrap(n.getAddress());case 8:return o.t2=o.sent,o.t3=e,o.t4=t,o.t5=(0,o.t1)(o.t2,o.t3,!0,o.t4),o.next=14,o.t0.awrap.call(o.t0,o.t5);case 14:if(!(a=o.sent)){o.next=21;break}return o.next=18,r.a.awrap(a.wait());case 18:u(""),J(N+1);case 21:return o.prev=21,Z(!1),o.finish(21);case 24:case"end":return o.stop()}}),null,null,[[2,,21,24]],Promise)}),[t,s,p,n]);return{loading:y,amount:s,setAmount:u,rtoken:p,yourTotalRToken:T,yourRTokenInpool:F,rtokenAllowed:k,setRTokenAllowed:w,onClaim:U,entering:L,txHappend:N}},D=n(62),W=n(410),H=n(43),L=function(){var e,t=Object(D.a)(),n=F();return i.a.createElement(u.a,{style:{marginTop:P.g.large}},i.a.createElement(Z,{state:n}),i.a.createElement(b.a,null),i.a.createElement(_,{state:n}),n.rtoken&&(null==(e=n.yourRTokenInpool)?void 0:e.isZero())&&i.a.createElement(k.a,{text:t("you-dont-have-reward-token"),color:"orange",style:{marginTop:P.g.small}}),i.a.createElement(G,{state:n}))},Z=function(e){var t=e.state,n=Object(D.a)(),a=t.loading,r=t.yourTotalRToken,o=t.yourRTokenInpool,l=(t.rtokenAllowed,t.rtoken),c=Object(H.a)(),s=c.textDark,m=c.textLight;c.placeholder;return i.a.createElement(u.a,null,i.a.createElement(O.a,{text:n("your-reward")+" "+(null==l?void 0:l.symbol)}),i.a.createElement(w.a,{style:{fontSize:P.d?28:20,marginBottom:P.g.tiny,color:a?m:s}},!a&&t.rtoken&&o?n("you-have")+" "+Object(z.d)(o,t.rtoken.decimals)+" "+t.rtoken.symbol+" "+n("in-pool"):n("fetching")),i.a.createElement(w.a,{style:{fontSize:P.d?14:10,marginBottom:P.g.tiny,color:a?m:s}},!a&&t.rtoken&&r?n("all-time-mined")+" "+Object(z.d)(r,t.rtoken.decimals):""))},_=function(e){var t=e.state,n=Object(D.a)();return t.rtoken&&t.yourRTokenInpool&&!t.yourRTokenInpool.isZero()?i.a.createElement(u.a,null,i.a.createElement(O.a,{text:n("amount-to-claim")}),i.a.createElement(E.a,{token:t.rtoken,amount:t.amount,onAmountChanged:t.setAmount,autoFocus:P.d})):i.a.createElement(O.a,{text:n("amount-to-claim"),disabled:!0})},G=function(e){var t,n,a=e.state,r=(Object(D.a)(),!a.rtoken||!a.yourRTokenInpool||a.yourRTokenInpool.isZero()||Object(z.k)(a.amount)),o=r?void 0:Object(z.m)(a.amount,null==(t=a.rtoken)?void 0:t.decimals);return o&&null!=(n=o)&&n.gt(a.yourRTokenInpool)&&(o=a.yourRTokenInpool),i.a.createElement(v.a,null,i.a.createElement(m.a,{amount:o?Object(z.d)(o,a.rtoken.decimals):"",suffix:a.rtoken?a.rtoken.symbol:"",disabled:r}),i.a.createElement(N,{state:a}))},N=function(e){var t=e.state,n=Object(c.useState)({}),a=l()(n,2),r=a[0],o=a[1];return i.a.createElement(u.a,{style:{marginTop:P.g.normal}},!t.rtoken||!t.yourRTokenInpool||t.yourRTokenInpool.isZero()||Object(z.k)(t.amount)?i.a.createElement(J,{state:t,onError:o,disabled:!0}):Object(z.m)(t.amount,t.rtoken.decimals).gt(t.yourRTokenInpool)?i.a.createElement(j.a,{symbol:t.rtoken.symbol}):t.loading?i.a.createElement(y.a,null):i.a.createElement(i.a.Fragment,null,i.a.createElement(J,{state:t,onError:o,disabled:!t.rtokenAllowed})),r.message&&4001!==r.code&&i.a.createElement(h.a,{error:r}))},J=function(e){var t=e.state,n=e.onError,a=e.disabled,o=Object(D.a)();return i.a.createElement(p.a,{title:o("claim"),loading:t.entering,onPress:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onClaim());case 4:t.setAmount(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)},disabled:a})};t.default=function(){var e=Object(D.a)();return i.a.createElement(W.a,null,i.a.createElement(f.a,null,i.a.createElement(d.a,null),i.a.createElement(g.a,null,i.a.createElement(x.a,{text:e("claim")}),i.a.createElement(w.a,{light:!0},e("claim-desc")),i.a.createElement(L,null)),"web"===s.a.OS&&i.a.createElement(T.a,null)),i.a.createElement(S.d,null))}}}]);
//# sourceMappingURL=11.a6b37835.chunk.js.map