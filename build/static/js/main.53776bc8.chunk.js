(this.webpackJsonpmambapad=this.webpackJsonpmambapad||[]).push([[4],{100:function(e,t,n){"use strict";var r=n(51),c=n(98),a=Object(r.b)({name:"appUserRole",initialState:{role:"Guest"},reducers:{setUserRole:function(e,t){e.role=t.payload}}}),o=(a.actions.setUserRole,a.reducer),i=Object(r.a)({reducer:{loadingReducer:c.a,userRoleReducer:o}});t.a=i},121:function(e,t,n){},161:function(e,t){},171:function(e,t,n){},173:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var r,c=n(2),a=n.n(c),o=n(50),i=n.n(o),s=(n(121),n(122),n(71)),u=n(20),l=n(101),d=n.n(l),b=n(63),j={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},f=n(37),p=n(102),m=n.n(p),O=n(11),h=function(e){var t=Object(c.useState)(e),n=Object(f.a)(t,2),r=n[0];n[1];return Object(O.jsx)(O.Fragment,{children:r&&Object(O.jsx)(m.a,{color:"#ffa600",css:"\n    position: fixed;\n    transform: translate(50%, -50%);\n    display: block;\n    margin: 0 auto;\n    border-color: red;\n    top:50%;\n    right:50%;\n",size:150})})},v=n(5),x=n.n(v),g=n(31),w=n(61),E=n(85),y=function(){var e=Object(E.a)().login;Object(c.useEffect)((function(){"injected"===window.localStorage.getItem(w.b)&&e()}),[e])},k=n(84),C=n(111),L=b.b.div(r||(r=Object(k.a)(["\n  position: fixed;\n  width: 100%;\n  left: 94%;\n  bottom: 70px;\n  height: 20px;\n  font-size: 3rem;\n  z-index: 1;\n  cursor: pointer;\n  color: #ffa600;\n  opacity: 0.5;\n  &:hover {\n    opacity: 1;\n  }\n  @media (max-width: 768px) {\n\t  display: none;\n  }\n"]))),S=function(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),n=t[0],r=t[1];return window.addEventListener("scroll",(function(){var e=document.documentElement.scrollTop;e>300?r(!0):e<=300&&r(!1)})),Object(O.jsx)(L,{children:Object(O.jsx)(C.a,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:n?"inline":"none"}})})},N=n(25),T=Object(N.a)(),I=(n(171),Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(7),n.e(0),n.e(10)]).then(n.bind(null,230))}))),P=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(13)]).then(n.bind(null,232))})),_=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(3),n.e(0),n.e(8)]).then(n.bind(null,229))})),M=Object(c.lazy)((function(){return n.e(12).then(n.bind(null,226))})),A=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,227))})),B=function(){return y(),Object(O.jsxs)(b.a,{theme:j,children:[Object(O.jsxs)(s.BrowserRouter,{history:T,children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(h,{}),children:Object(O.jsxs)(u.g,{children:[Object(O.jsx)(u.d,{exact:!0,path:"/",component:I}),Object(O.jsx)(u.d,{exact:!0,path:"/projects/",component:_}),Object(O.jsx)(u.d,{exact:!0,path:"/staking/",component:P}),Object(O.jsx)(u.d,{exact:!0,path:"/vesting/",component:M}),Object(O.jsx)(u.d,{exact:!0,path:"/applyido/",component:A})]})})]}),Object(O.jsx)(S,{})]})},F=n(52),z=n(99),R=n(67),U=a.a.createContext({slow:0,fast:0}),D=function(e){var t=e.children,n=Object(c.useState)(0),r=Object(f.a)(n,2),a=r[0],o=r[1],i=Object(c.useState)(0),s=Object(f.a)(i,2),u=s[0],l=s[1],d=function(){var e=Object(c.useRef)(!0);return Object(c.useEffect)((function(){var t=function(){e.current=!document.hidden};return window.addEventListener("visibilitychange",t),function(){window.removeEventListener("visibilitychange",t)}}),[]),e}();return Object(c.useEffect)((function(){var e=setInterval(Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.current&&l((function(e){return e+1}));case 1:case"end":return e.stop()}}),e)}))),1e4);return function(){return clearInterval(e)}}),[d]),Object(c.useEffect)((function(){var e=setInterval(Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.current&&o((function(e){return e+1}));case 1:case"end":return e.stop()}}),e)}))),6e4);return function(){return clearInterval(e)}}),[d]),Object(O.jsx)(U.Provider,{value:{slow:a,fast:u},children:t})},J=n(83),X=n(72),q=(n(173),n(100)),G=function(e){var t=e.children;return Object(O.jsx)(F.b,{getLibrary:R.a,children:Object(O.jsxs)(z.a,{store:q.a,children:[Object(O.jsx)(X.b,{position:"bottom-right",theme:"custom",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,transition:X.a}),Object(O.jsx)(J.a,{children:Object(O.jsx)(D,{children:t})})]})})},H=function(e){e&&e instanceof Function&&n.e(15).then(n.bind(null,228)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),a(e),o(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(G,{children:Object(O.jsx)(B,{})})}),document.getElementById("root")),H()},61:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(42),c=n(103),a=n(45),o=n.n(a);o.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});new o.a(0),new o.a(1),new o.a(9);var i,s=new o.a(10);c.a.config({EXPONENTIAL_AT:1e3,DECIMAL_PLACES:80});var u={MAINNET:56,TESTNET:97},l=(i={},Object(r.a)(i,u.MAINNET,"https://bscscan.com"),Object(r.a)(i,u.TESTNET,"https://testnet.bscscan.com"),s.pow(8),"injected")},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(106),c=n.n(r),a=["https://speedy-nodes-nyc.moralis.io/f2da390bb20555ed7e5b0fe4/bsc/mainnet"];t.a=function(){return c()(a)}},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));n(5),n(31);var r=n(114),c=n(53),a=n(62),o=(Object(a.a)(),parseInt("56",10)),i=new r.a({supportedChainIds:[o]}),s=function(e){var t=new c.a.providers.Web3Provider(e);return t.pollingInterval=12e3,t}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(70),c=n(37),a=n(2),o=n.n(a),i=n(11),s=o.a.createContext(),u=function(e){var t=e.modalTitle,n=e.modalBody,r=e.unSetModal;return Object(a.useEffect)((function(){var e=function(e){27!==!e.keyCode&&(document.activeElement&&["INPUT","SELECT"].includes(document.activeElement.tagName)||r())};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[t,n,r]),Object(i.jsxs)("div",{className:"modal",children:[Object(i.jsx)("button",{className:"modal__close",onClick:r}),Object(i.jsxs)("div",{className:"modal__inner",children:[Object(i.jsxs)("div",{className:"modal__header",children:[t,Object(i.jsx)("button",{className:"modal__close-btn",onClick:r,children:Object(i.jsx)("svg",{children:Object(i.jsx)("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"})})})]}),Object(i.jsx)("div",{className:"modal__body",children:n})]})]})},l=function(e){var t=Object(a.useState)(),n=Object(c.a)(t,2),o=n[0],l=n[1],d=Object(a.useState)(),b=Object(c.a)(d,2),j=b[0],f=b[1],p=Object(a.useCallback)((function(){l(),f()}),[l,f]);return Object(i.jsxs)(s.Provider,Object(r.a)(Object(r.a)({value:{unSetModal:p,setModalTitle:l,setModalBody:f}},e),{},{children:[e.children,o&&Object(i.jsx)(u,{modalTitle:o,modalBody:j,unSetModal:p})]}))},d=function(){var e=o.a.useContext(s);if(void 0===e)throw new Error("useModal must be used within a UserProvider");return e}},85:function(e,t,n){"use strict";var r,c=n(5),a=n.n(c),o=n(31),i=n(2),s=n(52),u=n(61),l=n(67),d=n(42),b=n(62),j=(r={},Object(d.a)(r,56,"https://bscscan.com"),Object(d.a)(r,97,"https://testnet.bscscan.com"),r)[56],f=function(){var e=Object(o.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=window.ethereum)){e.next=15;break}return n=parseInt("56",10),e.prev=3,e.next=6,t.request({method:"wallet_addEthereumChain",params:[{chainId:"0x".concat(n.toString(16)),chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"BNB",symbol:"bnb",decimals:18},rpcUrls:b.b,blockExplorerUrls:["".concat(j,"/")]}]});case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e.catch(3),console.error("Failed to setup the network in Metamask:",e.t0),e.abrupt("return",!1);case 13:e.next=17;break;case 15:return console.error("Can't setup the BSC network on metamask because window.ethereum is undefined"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}();t.a=function(){var e=Object(s.c)(),t=e.activate,n=e.deactivate;return{login:Object(i.useCallback)((function(){var e=l.b;e&&t(e,function(){var n=Object(o.a)(a.a.mark((function n(r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(r instanceof s.a)){n.next=7;break}return n.next=3,f();case 3:n.sent&&t(e),n.next=8;break;case 7:window.localStorage.removeItem(u.b);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[t]),logout:Object(i.useCallback)((function(){n(),window.localStorage.getItem("walletconnect")}),[n])}}},98:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s}));var r=n(51),c=Object(r.b)({name:"appLoading",initialState:{isLoading:!1},reducers:{setLoading:function(e){e.isLoading=!0},setNotLoading:function(e){e.isLoading=!1}}}),a=c.actions,o=a.setLoading,i=a.setNotLoading,s=function(e){return e.loadingReducer.isLoading};t.a=c.reducer}},[[175,5,6]]]);
//# sourceMappingURL=main.53776bc8.chunk.js.map