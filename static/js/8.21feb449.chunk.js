(this.webpackJsonp=this.webpackJsonp||[]).push([[8],{1204:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(43),i=n(62),c=n(80);t.a=function(e){var t=Object(i.a)(),n=Object(l.a)(),a=n.textDark,s=n.textLight,u=n.placeholder;return r.a.createElement(c.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:e.disabled?u:e.amount?a:s}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1205:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(62),l=n(316);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(l.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),i=n(43),c=n(405),s=n(316),u=n(80);t.a=function(e){var t=Object(i.a)().textLight,n=(0,Object(c.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(o.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(u.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(s.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.g.tiny}}))}},1213:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(18),l=n.n(o),i=n(0),c=n.n(i),s=n(4),u=n(25),m=n(56),d=n(62),f=n(316);t.a=function(e){var t,n=Object(d.a)(),a=Object(i.useContext)(m.b).approveToken,o=Object(i.useState)(!1),b=l()(o,2),p=b[0],y=b[1],k=Object(i.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),y(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,y(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?c.a.createElement(s.a,null):c.a.createElement(f.a,{title:n("approve")+" "+((null==(t=e.token)?void 0:t.symbol)||""),onPress:k,loading:p,containerStyle:{marginBottom:u.g.tiny}})}},1214:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(80);t.a=function(e){return r.a.createElement(l.a,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:o.g.tiny}},e.token.symbol)}},1217:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(21),i=n(80);t.a=function(e){return r.a.createElement(i.a,{caption:o.d,disabled:e.disabled,style:e.style},Object(l.d)(e.amount||e.token.balance,e.token.decimals,8))}},1222:function(e,t,n){"use strict";var a=n(137),r=n.n(a),o={};t.a=function(e,t,n){var a=e.toString();r()((function(){var n=setTimeout(e,t);return o[a]=n,n}),(function(e){clearTimeout(e)}),n)}},1223:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(80);t.a=function(e){return r.a.createElement(l.a,{caption:!0,numberOfLines:1,ellipsizeMode:"tail",style:{marginLeft:o.g.small,width:180},disabled:e.disabled},o.d?e.token.name:e.token.symbol)}},1226:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),i=n(1207),c=n(1206),s=n(121),u=n(1194),m=n(1199),d=n(1209),f=n(80),b=function(e){return r.a.createElement(m.a,{containerStyle:{marginBottom:u.a},style:{paddingLeft:l.g.small+l.g.tiny,paddingRight:l.g.small},selected:e.selected,disabled:e.selectable,onPress:function(){return null==e.setOption?void 0:e.setOption(e.selected?void 0:e.option)}},r.a.createElement(s.a,{style:{alignItems:"center"}},r.a.createElement(o.a,{style:{flex:1}},r.a.createElement(f.a,{fontWeight:"regular"},e.option.title),r.a.createElement(f.a,{note:!0,style:{marginTop:4}},e.option.description)),e.selected?r.a.createElement(i.a,null):r.a.createElement(d.a,null)))};t.a=function(e){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:e.title,expanded:!e.option,onExpand:function(){return e.setOption()}},e.options.map((function(t){var n;return r.a.createElement(b,{key:t.key,option:t,setOption:e.setOption,selected:t.key===(null==(n=e.option)?void 0:n.key)})}))),e.option&&r.a.createElement(b,{option:e.option,setOption:e.setOption,selected:!0,selectable:!1}))}},1227:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),l=n(80);t.a=function(e){return r.a.createElement(l.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(o.g)(e.token.priceUSD||0,4))}},1228:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),l=n(80);t.a=function(e){return r.a.createElement(l.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(o.g)(e.token.valueUSD||0,4))}},1229:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function l(e){try{c(a.next(e))}catch(t){o(t)}}function i(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.signERC2612Permit=t.signDaiPermit=void 0;const r=n(1230),o=n(1231),l="0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",i=[{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"}],c=e=>"".padEnd(e,"0"),s=(e,t)=>a(void 0,void 0,void 0,(function*(){return o.hexToUtf8((yield r.call(e,t,"0x06fdde03")).substr(130))})),u=(e,t)=>a(void 0,void 0,void 0,(function*(){if("string"!==typeof t)return t;const n=t,[a,o]=yield Promise.all([s(e,n),r.getChainId(e)]);return{name:a,version:"1",chainId:o,verifyingContract:n}}));t.signDaiPermit=(e,t,n,o,s,m)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,d={holder:n,spender:o,nonce:m||(yield r.call(e,a,`0x7ecebe00${c(24)}${n.substr(2)}`)),expiry:s||l,allowed:!0},f=((e,t)=>({types:{EIP712Domain:i,Permit:[{name:"holder",type:"address"},{name:"spender",type:"address"},{name:"nonce",type:"uint256"},{name:"expiry",type:"uint256"},{name:"allowed",type:"bool"}]},primaryType:"Permit",domain:t,message:e}))(d,yield u(e,t)),b=yield r.signData(e,n,f);return Object.assign(Object.assign({},b),d)})),t.signERC2612Permit=(e,t,n,o,s=l,m,d)=>a(void 0,void 0,void 0,(function*(){const a=t.verifyingContract||t,f={owner:n,spender:o,value:s,nonce:d||(yield r.call(e,a,`0x7ecebe00${c(24)}${n.substr(2)}`)),deadline:m||l},b=((e,t)=>({types:{EIP712Domain:i,Permit:[{name:"owner",type:"address"},{name:"spender",type:"address"},{name:"value",type:"uint256"},{name:"nonce",type:"uint256"},{name:"deadline",type:"uint256"}]},primaryType:"Permit",domain:t,message:e}))(f,yield u(e,t)),p=yield r.signData(e,n,b);return Object.assign(Object.assign({},p),f)}))},1230:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function l(e){try{c(a.next(e))}catch(t){o(t)}}function i(e){try{c(a.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=t.getChainId=t.setChainIdOverride=t.signData=t.send=void 0;t.send=(e,t,n)=>new Promise((a,r)=>{const o={id:Math.floor(1e10*Math.random()),method:t,params:n},l=(e,t)=>{e?r(e):t.error?(console.error(t.error),r(t.error)):a(t.result)};let i=e.provider||e;i.sendAsync?i.sendAsync(o,l):i.send(o,l)}),t.signData=(e,n,r)=>a(void 0,void 0,void 0,(function*(){const a="string"===typeof r?r:JSON.stringify(r),o=yield t.send(e,"eth_signTypedData_v4",[n,a]).catch(a=>{if("Method eth_signTypedData_v4 not supported."===a.message)return t.send(e,"eth_signTypedData",[n,r]);throw a});return{r:o.slice(0,66),s:"0x"+o.slice(66,130),v:parseInt(o.slice(130,132),16)}}));let r=null;t.setChainIdOverride=e=>{r=e},t.getChainId=e=>a(void 0,void 0,void 0,(function*(){return r||t.send(e,"eth_chainId")})),t.call=(e,n,a)=>t.send(e,"eth_call",[{to:n,data:a},"latest"])},1231:function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.hexToUtf8=void 0;const r=a(n(1232));t.hexToUtf8=function(e){let t="",n=0,a=(e=(e=(e=(e=(e=e.replace(/^0x/i,"")).replace(/^(?:00)*/,"")).split("").reverse().join("")).replace(/^(?:00)*/,"")).split("").reverse().join("")).length;for(let r=0;r<a;r+=2)n=parseInt(e.substr(r,2),16),t+=String.fromCharCode(n);return r.default.decode(t)}},1232:function(e,t,n){!function(e){var t,n,a,r=String.fromCharCode;function o(e){for(var t,n,a=[],r=0,o=e.length;r<o;)(t=e.charCodeAt(r++))>=55296&&t<=56319&&r<o?56320==(64512&(n=e.charCodeAt(r++)))?a.push(((1023&t)<<10)+(1023&n)+65536):(a.push(t),r--):a.push(t);return a}function l(e){if(e>=55296&&e<=57343)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function i(e,t){return r(e>>t&63|128)}function c(e){if(0==(4294967168&e))return r(e);var t="";return 0==(4294965248&e)?t=r(e>>6&31|192):0==(4294901760&e)?(l(e),t=r(e>>12&15|224),t+=i(e,6)):0==(4292870144&e)&&(t=r(e>>18&7|240),t+=i(e,12),t+=i(e,6)),t+=r(63&e|128)}function s(){if(a>=n)throw Error("Invalid byte index");var e=255&t[a];if(a++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function u(){var e,r;if(a>n)throw Error("Invalid byte index");if(a==n)return!1;if(e=255&t[a],a++,0==(128&e))return e;if(192==(224&e)){if((r=(31&e)<<6|s())>=128)return r;throw Error("Invalid continuation byte")}if(224==(240&e)){if((r=(15&e)<<12|s()<<6|s())>=2048)return l(r),r;throw Error("Invalid continuation byte")}if(240==(248&e)&&(r=(7&e)<<18|s()<<12|s()<<6|s())>=65536&&r<=1114111)return r;throw Error("Invalid UTF-8 detected")}e.version="3.0.0",e.encode=function(e){for(var t=o(e),n=t.length,a=-1,r="";++a<n;)r+=c(t[a]);return r},e.decode=function(e){t=o(e),n=t.length,a=0;for(var l,i=[];!1!==(l=u());)i.push(l);return function(e){for(var t,n=e.length,a=-1,o="";++a<n;)(t=e[a])>65535&&(o+=r((t-=65536)>>>10&1023|55296),t=56320|1023&t),o+=r(t);return o}(i)}}(t)},1369:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(62),l=n(316);t.a=function(e){var t=e.state,n=Object(o.a)();return r.a.createElement(l.a,{title:t.fromSymbol+"-"+t.toSymbol+" "+n("not-supported"),disabled:!0})}},1370:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(32),l=n.n(o),i=n(0),c=n(35),s=n(1229),u=n(31),m=n(51),d=n(56),f=n(21),b=n(98),p=n(412),y=n(414);t.a=function(){var e=Object(i.useContext)(d.b).ethereum,t=Object(p.a)(),n=t.getPair,a=t.getTrade,o=t.calculateAmountOfLPTokenMinted,k=Object(y.b)(),v=k.allowedSlippage,O=k.ttl,g=new c.g("3","100"),E=function(e,t,n,o,i){var s,u,d,b,p;return r.a.async((function(y){for(;;)switch(y.prev=y.next){case 0:return y.next=2,r.a.awrap(a(e,t,n,o));case 2:if(u=y.sent){y.next=5;break}throw new Error("Cannot find trade");case 5:return d=c.h.swapCallParameters(u,{feeOnTransfer:!1,allowedSlippage:v,recipient:m.k,ttl:O}),b=Object(f.h)("IUniswapV2Router02",m.h,i),y.next=9,r.a.awrap((s=b.populateTransaction)[d.methodName].apply(s,l()(d.args).concat([{value:d.value}])));case 9:return p=y.sent,y.abrupt("return",p.data||"");case 11:case"end":return y.stop()}}),null,null,null,Promise)},h=Object(i.useCallback)((function(e,t,a,i,s){var d,p,y,k,v,O,h,j,x;return r.a.async((function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,r.a.awrap(n(e,t,i));case 2:return p=T.sent,y=new c.j(Object(f.b)(e),a.div(2).toString()),T.next=6,r.a.awrap(o(p,y,p.getOutputAmount(y)[0]));case 6:if(k=T.sent){T.next=9;break}throw new Error("Cannot calculate LP token amount");case 9:return v=Object(f.h)("ZapIn",m.k,s),T.t0=e.address,T.t1=p.liquidityToken.address,T.t2=a,T.t3=Object(f.c)(k,g),T.t4=m.h,T.t5=m.h,T.next=18,r.a.awrap(E(e,t,a.div(2),i,s));case 18:return T.t6=T.sent,O=[T.t0,T.t1,T.t2,T.t3,T.t4,T.t5,T.t6],h=Object(f.i)(e)?a:u.ethers.constants.Zero,T.next=23,r.a.awrap((d=v.estimateGas).ZapIn.apply(d,O.concat([{value:h}])));case 23:return j=T.sent,T.next=26,r.a.awrap(v.ZapIn.apply(v,O.concat([{value:h,gasLimit:j.mul(120).div(100)}])));case 26:return x=T.sent,T.abrupt("return",b.a.apply(void 0,[x,"ZapIn_General_V2.ZapIn()"].concat(l()(O.map((function(e){return e.toString()}))))));case 28:case"end":return T.stop()}}),null,null,null,Promise)}),[E]),j=function(e,t,o,l){var i,c,s,u,m,d;return r.a.async((function(b){for(;;)switch(b.prev=b.next){case 0:if(e!==t.tokenA){b.next=5;break}i=t.tokenB,c=t.tokenA,b.next=11;break;case 5:if(e!==t.tokenB){b.next=10;break}i=t.tokenA,c=t.tokenB,b.next=11;break;case 10:throw new Error("Wrong outputToken");case 11:return b.next=13,r.a.awrap(n(i,c,l));case 13:return s=b.sent,u=Object(f.n)(s.reserveOf(Object(f.b)(i)),i.decimals),m=o.mul(u).div(t.totalSupply),b.next=18,r.a.awrap(a(i,c,m,l));case 18:if(d=b.sent){b.next=21;break}throw new Error("Cannot find trade");case 21:return b.abrupt("return",Object(f.n)(d.outputAmount));case 22:case"end":return b.stop()}}),null,null,null,Promise)};return{zapIn:h,zapOut:Object(i.useCallback)((function(t,n,a,o,i){var c,u,d,p,y,k,v;return r.a.async((function(E){for(;;)switch(E.prev=E.next){case 0:return u=Object(f.h)("ZapOut",m.l,i),d=Math.floor((new Date).getTime()/1e3)+O,E.t0=r.a,E.t1=s.signERC2612Permit,E.t2=e,E.t3=t.address,E.next=8,r.a.awrap(i.getAddress());case 8:return E.t4=E.sent,E.t5=m.l,E.t6=a.toString(),E.t7=d,E.t8=(0,E.t1)(E.t2,E.t3,E.t4,E.t5,E.t6,E.t7),E.next=15,E.t0.awrap.call(E.t0,E.t8);case 15:return p=E.sent,E.t9=n.address,E.t10=t.address,E.t11=a,E.t12=f.c,E.next=22,r.a.awrap(j(n,t,a,o));case 22:return E.t13=E.sent,E.t14=g,E.t15=(0,E.t12)(E.t13,E.t14),E.t16=a,E.t17=d,E.t18=p.v,E.t19=p.r,E.t20=p.s,y=[E.t9,E.t10,E.t11,E.t15,E.t16,E.t17,E.t18,E.t19,E.t20],E.next=33,r.a.awrap((c=u.estimateGas).ZapOutWithPermit.apply(c,y));case 33:return k=E.sent,E.next=36,r.a.awrap(u.ZapOutWithPermit.apply(u,y.concat([{gasLimit:k.mul(120).div(100)}])));case 36:return v=E.sent,E.abrupt("return",b.a.apply(void 0,[v,"ZapOut_General_V1.ZapOutWithPermit()"].concat(l()(y.map((function(e){return e.toString()}))))));case 38:case"end":return E.stop()}}),null,null,null,Promise)}),[j]),getZapOutSwappedAmount:j}}},1375:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(18),l=n.n(o),i=n(0),c=n.n(i),s=n(236),u=n(4),m=n(25),d=n(56),f=n(1222),b=n(1207),p=n(1206),y=n(121),k=n(1194),v=n(1203),O=n(1199),g=n(1209),E=n(80),h=n(1217),j=n(1200),x=n(1223),T=n(1227),S=n(10),w=n.n(S),A=n(86),P=n(31),C=n(43),D=n(405),I=n(62),z=n(317),_=n(316),L=n(1216);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(){return c.a.createElement(A.a,{size:"small",style:{position:"absolute",right:16,bottom:16}})},F=function(e){var t=Object(I.a)(),n=Object(C.a)().accent,a=Object(i.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return c.a.createElement(O.a,{selected:!1,disabled:!0,onPress:a,containerStyle:{marginBottom:k.a}},c.a.createElement(y.a,{style:{alignItems:"center"}},c.a.createElement(j.a,{token:e.token}),c.a.createElement(x.a,{token:e.token}),c.a.createElement(u.a,{style:{flex:1}}),c.a.createElement(_.a,{type:"clear",size:"small",color:n,title:e.duplicate?t("already-added"):t("-add-")+" "+e.token.symbol,fontWeight:"bold",onPress:a,disabled:e.duplicate,buttonStyle:{paddingHorizontal:4,height:27}})))},U=function(e){var t=Object(I.a)(),n=Object(D.a)().border,a=Object(i.useContext)(d.b),o=a.provider,s=a.tokens,b=Object(i.useState)(),p=l()(b,2),k=p[0],v=p[1],O=Object(i.useState)(!1),g=l()(O,2),E=g[0],h=g[1],j=!!k&&-1!==s.findIndex((function(e){return e.address===k.address}));return e.tokens?(Object(i.useEffect)((function(){""===e.text&&(h(!1),v(void 0))}),[e.text]),Object(f.a)((function(){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.text.trim(),!o||!P.ethers.utils.isAddress(t)){a.next=11;break}return h(!0),a.prev=3,a.next=6,r.a.awrap(Object(z.i)(t,o));case 6:(n=a.sent).name&&n.symbol&&n.decimals&&v(n);case 8:return a.prev=8,h(!1),a.finish(8);case 11:case"end":return a.stop()}}),null,null,[[3,,8,11]],Promise)}),300,[o,e.text]),c.a.createElement(u.a,null,c.a.createElement(y.a,{style:{marginBottom:m.g.small}},c.a.createElement(L.a,{value:e.text,onChangeText:e.onChangeText,placeholder:t("token-name-symbol-or-address"),autoFocus:m.d,inputStyle:{marginHorizontal:m.g.tiny,fontSize:e.text?20:16},inputContainerStyle:{borderBottomWidth:0,marginRight:E?32:0},labelStyle:{height:0},containerStyle:B(B({},n()),{},{paddingHorizontal:m.g.tiny,paddingTop:12,paddingBottom:0})}),e.onAddToken&&E&&c.a.createElement(M,null)),e.onAddToken&&k&&c.a.createElement(F,{token:k,selected:!0,onSelectToken:e.onAddToken,duplicate:j}))):c.a.createElement(u.a,null)},W=n(1214),q=n(1228),R=function(e){var t=Object(i.useContext)(d.b),n=t.loadingTokens,a=t.tokens,r=Object(i.useCallback)((function(t){var n=t.item;return c.a.createElement(G,{key:n.address,token:n,selected:!1,onSelectToken:e.onSelectToken,disabled:null==e.disabled?void 0:e.disabled(n)})}),[e.onSelectToken,e.disabled]),o=Object(i.useMemo)((function(){return a.filter((function(t){return!e.hidden||!e.hidden(t)})).sort(N)}),[a,e.hidden]);return n?c.a.createElement(v.a,null):0===o.length?c.a.createElement(H,null):c.a.createElement(s.a,{keyExtractor:function(e){return e.address},data:o,renderItem:r})},H=function(){return c.a.createElement(u.a,{style:{margin:m.g.normal}},c.a.createElement(E.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},"You don't have any matching tokens."))},G=function(e){var t=Object(i.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return c.a.createElement(O.a,{selected:e.selected,onPress:t,disabled:e.disabled||e.selectable,containerStyle:{marginBottom:k.a}},c.a.createElement(y.a,{style:{alignItems:"center"}},c.a.createElement(j.a,{token:e.token,disabled:e.disabled}),c.a.createElement(u.a,null,null!==e.token.priceUSD&&c.a.createElement(T.a,{token:e.token,disabled:e.disabled,style:{marginLeft:m.g.small}}),c.a.createElement(x.a,{token:e.token,disabled:e.disabled})),c.a.createElement(u.a,{style:{flex:1,alignItems:"flex-end"}},null!==e.token.valueUSD&&c.a.createElement(q.a,{token:e.token,disabled:e.disabled}),c.a.createElement(y.a,null,c.a.createElement(h.a,{token:e.token,disabled:e.disabled,style:{flex:1,textAlign:"right"}}),m.d&&c.a.createElement(W.a,{token:e.token,disabled:e.disabled}))),e.selected?c.a.createElement(b.a,null):c.a.createElement(g.a,null)))},N=function(e,t){if(t.balance.isZero()&&e.balance.isZero())return((null==t?void 0:t.priceUSD)||0)-((null==e?void 0:e.priceUSD)||0);var n=(null==t?void 0:t.valueUSD)||0,a=(null==e?void 0:e.valueUSD)||1;return n===a?(t.balance.isZero()?0:1e10)-(e.balance.isZero()?0:1e10)+e.symbol.localeCompare(t.symbol):n-a};t.a=function(e){var t=Object(i.useContext)(d.b),n=t.tokens,a=t.addCustomToken,o=Object(i.useState)(""),s=l()(o,2),m=s[0],b=s[1],y=Object(i.useState)(""),k=l()(y,2),v=k[0],O=k[1],g=Object(i.useMemo)((function(){return n.find((function(t){return t.symbol===e.symbol}))}),[n,e.symbol]);return Object(i.useEffect)((function(){return b("")}),[e.symbol]),Object(f.a)((function(){return O(m.trim().toLowerCase())}),300,[m]),c.a.createElement(u.a,{style:e.style},c.a.createElement(p.a,{title:e.title,expanded:!e.symbol,onExpand:function(){return e.onChangeSymbol("")}},c.a.createElement(U,{text:m,onChangeText:b,tokens:n,onAddToken:function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(a(t));case 2:b(""),O(""),e.onChangeSymbol(t.symbol);case 5:case"end":return n.stop()}}),null,null,null,Promise)}}),c.a.createElement(R,{disabled:e.disabled,hidden:function(t){return v.length>0?!t.symbol.toLowerCase().includes(v)&&!t.name.toLowerCase().includes(v):(null==e.hidden?void 0:e.hidden(t))||!1},onSelectToken:function(t){return e.onChangeSymbol(t.symbol)}})),g&&c.a.createElement(G,{token:g,selected:!0,onSelectToken:function(){return e.onChangeSymbol("")},selectable:!0}))}},1388:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(18),l=n.n(o),i=n(0),c=n.n(i),s=n(11),u=n(4),m=n(35),d=n(31),f=n(137),b=n.n(f),p=n(1204),y=n(1213),k=n(409),v=n(1198),O=n(316),g=n(406),E=n(407),h=n(1201),j=n(1208),x=n(1192),T=n(1202),S=n(1205),w=n(1194),A=n(1210),P=n(1211),C=n(1226),D=n(80),I=n(408),z=n(1212),_=n(1375),L=n(1369),Z=n(1193),B=n(411),M=n(51),F=n(25),U=n(156),W=n(56),q=n(10),R=n.n(q),H=n(21),G=n(1224),N=n(412),V=n(414),$=n(1225),J=n(1370);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){R()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(){var e=Object($.a)(),t=Object(i.useContext)(W.b),n=t.provider,a=t.signer,o=t.updateTokens,c=Object(i.useState)(!1),s=l()(c,2),u=s[0],m=s[1],d=Object(i.useState)(),f=l()(d,2),b=f[0],p=f[1],y=Object(i.useState)(),k=l()(y,2),v=k[0],O=k[1],g=Object(i.useState)(!1),E=l()(g,2),h=E[0],j=E[1],x=Object(N.a)().getPair,T=Object(V.b)(),S=T.addLiquidity,w=T.addLiquidityETH,A=Object(J.a)().zapIn,P=!!v&&!!e.toToken&&!v.priceOf(Object(H.b)(e.toToken)).denominator.toString().startsWith("0");Object(i.useEffect)((function(){O(void 0),e.setFromSymbol("")}),[b]),Object(G.a)((function(t){return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t||(m(!0),O(void 0)),!(e.fromToken&&e.toToken&&n)){a.next=17;break}return a.prev=2,a.t0=O,a.next=6,r.a.awrap(x(e.fromToken,e.toToken,n));case 6:a.t1=a.sent,(0,a.t0)(a.t1),a.next=12;break;case 10:a.prev=10,a.t2=a.catch(2);case 12:return a.prev=12,m(!1),a.finish(12);case 15:a.next=18;break;case 17:m(!1);case 18:case"end":return a.stop()}}),null,null,[[2,10,12,15]],Promise)}),(function(){return"getPair("+e.fromSymbol+","+e.toSymbol+")"}),[e.fromSymbol,e.toSymbol,n],0);var C=Object(i.useCallback)((function(){var t,i,c,s,u,m,d,f,p,y;return r.a.async((function(k){for(;;)switch(k.prev=k.next){case 0:if(!(e.fromToken&&e.toToken&&e.fromAmount&&e.toAmount&&n&&a)){k.next=33;break}if(j(!0),k.prev=2,t=Object(H.m)(e.fromAmount,e.fromToken.decimals),i=Object(H.m)(e.toAmount,e.toToken.decimals),"zapper"!==b){k.next=13;break}return k.next=8,r.a.awrap(A(e.fromToken,e.toToken,t,n,a));case 8:return c=k.sent,k.next=11,r.a.awrap(c.wait());case 11:k.next=27;break;case 13:if(!Object(H.i)(e.fromToken)&&!Object(H.i)(e.toToken)){k.next=22;break}return s=Object(H.i)(e.fromToken)?[e.toToken,i,t]:[e.fromToken,t,i],u=l()(s,3),m=u[0],d=u[1],f=u[2],k.next=17,r.a.awrap(w(m,d,f,a));case 17:return p=k.sent,k.next=20,r.a.awrap(p.wait());case 20:k.next=27;break;case 22:return k.next=24,r.a.awrap(S(e.fromToken,e.toToken,t,i,a));case 24:return y=k.sent,k.next=27,r.a.awrap(y.wait());case 27:return k.next=29,r.a.awrap(o());case 29:e.setFromSymbol("");case 30:return k.prev=30,j(!1),k.finish(30);case 33:case"end":return k.stop()}}),null,null,[[2,,30,33]],Promise)}),[e.fromToken,e.toToken,e.fromAmount,e.toAmount,n,a]);return K(K({},e),{},{loading:u||e.loading,mode:b,setMode:p,pair:v,priceDetermined:P,onAdd:C,adding:h})},X=n(43),ee=n(404),te=n(62),ne=n(410),ae=function(){var e=Q();return c.a.createElement(u.a,{style:{marginTop:F.g.large}},c.a.createElement(re,{state:e}),c.a.createElement(v.a,null),c.a.createElement(oe,{state:e}),c.a.createElement(v.a,null),c.a.createElement(le,{state:e}),c.a.createElement(v.a,null),c.a.createElement(ie,{state:e}),"zapper"===e.mode?c.a.createElement(se,{state:e}):c.a.createElement(c.a.Fragment,null,c.a.createElement(w.b,null),c.a.createElement(ce,{state:e})),c.a.createElement(ue,{state:e}))},re=function(e){var t=e.state,n=Object(te.a)(),a=[{key:"zapper",title:n("1-click-zap"),description:n("1-click-zap-desc")},{key:"normal",title:n("normal"),description:n("normal-desc")}];return c.a.createElement(C.a,{title:n("mode"),options:a,option:a.find((function(e){return e.key===t.mode})),setOption:function(e){return t.setMode(null==e?void 0:e.key)}})},oe=function(e){var t=e.state,n=Object(te.a)(),a=Object(i.useContext)(W.b).customTokens;return t.mode?c.a.createElement(_.a,{title:n("1st-token"),symbol:t.fromSymbol,onChangeSymbol:t.setFromSymbol,hidden:function(e){return!a.find((function(t){return t.address===e.address}))&&e.balance.isZero()}}):c.a.createElement(x.a,{text:n("1st-token"),disabled:!0})},le=function(e){var t=e.state,n=Object(te.a)(),a=Object(i.useContext)(W.b).customTokens;return t.fromSymbol?c.a.createElement(u.a,null,c.a.createElement(_.a,{title:n("2nd-token"),symbol:t.toSymbol,onChangeSymbol:t.setToSymbol,hidden:function(e){return e.symbol===t.fromSymbol||!a.find((function(t){return t.address===e.address}))&&e.balance.isZero()}})):c.a.createElement(x.a,{text:n("2nd-token"),disabled:!0})},ie=function(e){var t=e.state,n=Object(te.a)();if(!t.fromSymbol||!t.toSymbol)return c.a.createElement(x.a,{text:n("amount-of-tokens"),disabled:!0});return c.a.createElement(z.a,{title:"zapper"===t.mode?n("amount-of-",{symbol:t.fromSymbol}):n("amount-of-tokens"),token:t.fromToken,amount:t.fromAmount,onAmountChanged:function(e){if(t.setFromAmount(e),t.pair&&t.fromToken&&t.priceDetermined){var n=t.pair.priceOf(Object(H.b)(t.fromToken)).quote(Object(H.a)(t.fromToken,e)).toExact();t.setToAmount(Object(H.k)(n)?"":n)}},hideMaxButton:t.loading&&!t.pair})},ce=function(e){var t=e.state;if(!t.fromSymbol||!t.toSymbol)return c.a.createElement(u.a,null);return c.a.createElement(z.a,{token:t.toToken,amount:t.toAmount,onAmountChanged:function(e){if(t.setToAmount(e),t.pair&&t.toToken&&t.priceDetermined){var n=t.pair.priceOf(Object(H.b)(t.toToken)).quote(Object(H.a)(t.toToken,e)).toExact();t.setFromAmount(Object(H.k)(n)?"":n)}},hideMaxButton:t.loading&&!t.pair})},se=function(e){var t=e.state,n=Object(te.a)();return t.fromSymbol&&t.toSymbol&&t.pair?c.a.createElement(P.a,{clear:!0,text:n("zap-notice",{fromSymbol:t.fromSymbol,toSymbol:t.toSymbol}),style:{marginTop:F.g.small}}):c.a.createElement(u.a,null)},ue=function(e){var t=e.state;return!t.fromToken||!t.toToken||t.loading||t.pair&&t.priceDetermined?c.a.createElement(fe,{state:t}):c.a.createElement(me,{state:t})},me=function(e){var t=e.state,n=Object(te.a)(),a=Object(X.a)(),r=a.red,o=a.green,l=Object(H.k)(t.fromAmount)||Object(H.k)(t.toAmount),i=U.a.from(Object(H.m)(t.toAmount,t.toToken.decimals),Object(H.m)(t.fromAmount,t.fromToken.decimals)).toString(8),s="zapper"===t.mode;return c.a.createElement(u.a,null,!s&&c.a.createElement(T.a,{style:{marginTop:F.g.normal}},c.a.createElement(pe,{state:t,price:i,disabled:l}),c.a.createElement(de,{state:t})),!Object(H.j)(t.fromToken,t.toToken)&&c.a.createElement(P.a,{text:n("first-provider-desc-1")+n(s?"first-provider-desc-zap":"first-provider-desc-2"),color:s?r:o,style:{marginTop:F.g.small}}))},de=function(e){var t=e.state,n=Object(i.useState)({}),a=l()(n,2),r=a[0],o=a[1];b()((function(){return o({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var s=!Object(H.i)(t.fromToken)&&!t.fromTokenAllowed,m=!Object(H.i)(t.toToken)&&!t.toTokenAllowed,d=s||Object(H.k)(t.fromAmount)||m||Object(H.k)(t.toAmount);return c.a.createElement(u.a,{style:{marginTop:F.g.normal}},Object(H.j)(t.fromToken,t.toToken)?c.a.createElement(L.a,{state:t}):!t.fromToken||!t.toToken||Object(H.k)(t.fromAmount)||Object(H.k)(t.toAmount)?c.a.createElement(ve,{state:t,onError:o,disabled:!0}):t.loading?c.a.createElement(j.a,null):Object(H.m)(t.fromAmount,t.fromToken.decimals).gt(t.fromToken.balance)?c.a.createElement(S.a,{symbol:t.fromSymbol}):Object(H.m)(t.toAmount,t.toToken.decimals).gt(t.toToken.balance)?c.a.createElement(S.a,{symbol:t.toSymbol}):c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{token:t.fromToken,spender:M.h,onSuccess:function(){return t.setFromTokenAllowed(!0)},onError:o,hidden:!s}),c.a.createElement(y.a,{token:t.toToken,spender:M.h,onSuccess:function(){return t.setToTokenAllowed(!0)},onError:o,hidden:!m}),c.a.createElement(ve,{state:t,onError:o,disabled:d})),r.message&&4001!==r.code&&c.a.createElement(h.a,{error:r}))},fe=function(e){var t=e.state,n=Object(te.a)(),a=be(t),r=a.fromAmount,o=a.toAmount,l=a.lpTokenAmount,i=Object(H.k)(t.fromAmount)||Object(H.k)(t.toAmount),s=t.pair&&t.fromToken&&t.priceDetermined?t.pair.priceOf(Object(H.b)(t.fromToken)).toFixed(8):void 0,u=t.fromSymbol+"-"+t.toSymbol;return c.a.createElement(T.a,null,c.a.createElement(p.a,{amount:l,suffix:u,disabled:i}),c.a.createElement(A.a,{text:null==r?void 0:r.toFixed(),label:t.fromSymbol||n("1st-token"),disabled:i}),c.a.createElement(A.a,{text:null==o?void 0:o.toFixed(),label:t.toSymbol||n("2nd-token"),disabled:i}),c.a.createElement(pe,{state:t,price:s,disabled:!t.fromSymbol||!t.toSymbol}),c.a.createElement(ye,{state:t}))},be=function(e){var t=Object(i.useState)(),n=l()(t,2),a=n[0],o=n[1],c=Object(i.useState)(),s=l()(c,2),u=s[0],d=s[1],f=Object(i.useState)(),p=l()(f,2),y=p[0],k=p[1],v=Object(N.a)().calculateAmountOfLPTokenMinted;return b()((function(){var t,n,a;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(!(e.fromToken&&e.toToken&&e.pair)||Object(H.k)(e.fromAmount)||Object(H.k)(e.toAmount)){l.next=9;break}return t=new m.j(Object(H.b)(e.fromToken),Object(H.m)(e.fromAmount,e.fromToken.decimals).div("zapper"===e.mode?2:1).toString()),d(t),n="zapper"===e.mode?e.pair.getOutputAmount(t)[0]:Object(H.a)(e.toToken,e.toAmount),k(n),l.next=7,r.a.awrap(v(e.pair,t,n));case 7:a=l.sent,o(a?Object(H.d)(a,e.pair.liquidityToken.decimals):void 0);case 9:case"end":return l.stop()}}),null,null,null,Promise)}),[e.pair,e.fromAmount,e.toAmount]),{fromAmount:u,toAmount:y,lpTokenAmount:a}},pe=function(e){var t=e.state,n=e.price,a=e.disabled,r=Object(te.a)();return c.a.createElement(A.a,{label:r("ratio"),text:n,suffix:t.toSymbol+" = 1 "+t.fromSymbol,disabled:a})},ye=function(e){var t=e.state,n=Object(i.useState)({}),a=l()(n,2),r=a[0],o=a[1],s=ke(t.fromToken),m=s.allowed,d=s.setAllowed,f=s.loading;b()((function(){return o({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var p="zapper"===t.mode,k=!Object(H.i)(t.fromToken)&&(p&&!m||!p&&!t.fromTokenAllowed),v=!Object(H.i)(t.toToken)&&!p&&!t.toTokenAllowed,O=k||Object(H.k)(t.fromAmount)||!p&&(v||Object(H.k)(t.toAmount));return c.a.createElement(u.a,{style:{marginTop:F.g.normal}},Object(H.j)(t.fromToken,t.toToken)?c.a.createElement(L.a,{state:t}):!t.fromToken||!t.toToken||Object(H.k)(t.fromAmount)||Object(H.k)(t.toAmount)?c.a.createElement(ve,{state:t,onError:o,disabled:!0}):t.loading||f||!t.pair?c.a.createElement(j.a,null):Object(H.m)(t.fromAmount,t.fromToken.decimals).gt(t.fromToken.balance)?c.a.createElement(S.a,{symbol:t.fromSymbol}):"normal"===t.mode&&Object(H.m)(t.toAmount,t.toToken.decimals).gt(t.toToken.balance)?c.a.createElement(S.a,{symbol:t.toSymbol}):c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{token:t.fromToken,spender:p?M.k:M.h,onSuccess:function(){return p?d(!0):t.setFromTokenAllowed(!0)},onError:o,hidden:!k}),c.a.createElement(y.a,{token:t.toToken,spender:M.h,onSuccess:function(){return t.setToTokenAllowed(!0)},onError:o,hidden:!v}),c.a.createElement(ve,{state:t,onError:o,disabled:O})),r.message&&4001!==r.code&&c.a.createElement(h.a,{error:r}))},ke=function(e){var t=Object(i.useContext)(W.b),n=t.signer,a=t.getTokenAllowance,o=Object(i.useState)(!1),c=l()(o,2),s=c[0],u=c[1],m=Object(i.useState)(!1),f=l()(m,2),p=f[0],y=f[1];return b()((function(){var t,o;return r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(u(!1),!e||!n){l.next=13;break}if(y(!0),l.prev=3,t=d.ethers.BigNumber.from(2).pow(96).sub(1),!Object(H.i)(e)){l.next=10;break}return l.next=8,r.a.awrap(a(e.address,M.k));case 8:o=l.sent,u(d.ethers.BigNumber.from(o).gte(t));case 10:return l.prev=10,y(!1),l.finish(10);case 13:case"end":return l.stop()}}),null,null,[[3,,10,13]],Promise)}),[e,n]),{allowed:s,setAllowed:u,loading:p}},ve=function(e){var t=e.state,n=e.onError,a=e.disabled,o=Object(te.a)(),l=Object(ee.a)("/liquidity/remove","RemoveLiquidity"),s=Object(i.useCallback)((function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onAdd());case 4:l(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)}),[t.onAdd,n]);return c.a.createElement(O.a,{title:o("supply")+(t.fromSymbol&&t.toSymbol?" "+t.fromSymbol+"-"+t.toSymbol:""),disabled:a,loading:t.adding,onPress:s})};t.default=function(){var e=Object(te.a)();return c.a.createElement(ne.a,null,c.a.createElement(g.a,null,c.a.createElement(k.a,null),c.a.createElement(E.a,null,c.a.createElement(I.a,{text:e("add-liquidity")}),c.a.createElement(D.a,{light:!0},e("add-liquidity-desc")),c.a.createElement(ae,null)),"web"===s.a.OS&&c.a.createElement(Z.a,null)),c.a.createElement(B.b,null))}}}]);
//# sourceMappingURL=8.21feb449.chunk.js.map