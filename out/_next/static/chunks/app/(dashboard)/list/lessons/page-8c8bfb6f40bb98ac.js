(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964,409,676,151,659,8,832,56,833],{26248:function(e,t,n){Promise.resolve().then(n.t.bind(n,38173,23)),Promise.resolve().then(n.bind(n,77275))},66648:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var l=n(55601),r=n.n(l)},50551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let l=n(99920);n(57437),n(2265);let r=l._(n(40148));function a(e,t){var n;let l={loading:e=>{let{error:t,isLoading:n,pastDelay:l}=e;return null}};"function"==typeof e&&(l.loader=e);let a={...l,...t};return(0,r.default)({...a,modules:null==(n=a.loadableGenerated)?void 0:n.modules})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},55601:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},getImageProps:function(){return u}});let l=n(99920),r=n(80497),a=n(38173),o=l._(n(21241));function u(e){let{props:t}=(0,r.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next_dashboard/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let i=a.Image},10912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(55592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},40148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return d}});let l=n(57437),r=n(2265),a=n(10912),o=n(61481);function u(e){return{default:e&&"default"in e?e.default:e}}let i={loader:()=>Promise.resolve(u(()=>null)),loading:null,ssr:!0},d=function(e){let t={...i,...e},n=(0,r.lazy)(()=>t.loader().then(u)),d=t.loading;function s(e){let u=d?(0,l.jsx)(d,{isLoading:!0,pastDelay:!0,error:null}):null,i=t.ssr?(0,l.jsxs)(l.Fragment,{children:["undefined"==typeof window?(0,l.jsx)(o.PreloadCss,{moduleIds:t.modules}):null,(0,l.jsx)(n,{...e})]}):(0,l.jsx)(a.BailoutToCSR,{reason:"next/dynamic",children:(0,l.jsx)(n,{...e})});return(0,l.jsx)(r.Suspense,{fallback:u,children:i})}return s.displayName="LoadableComponent",s}},61481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let l=n(57437),r=n(58512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,l.jsx)(l.Fragment,{children:a.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},77275:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var l=n(57437),r=n(50551),a=n.n(r),o=n(66648),u=n(2265);let i=a()(()=>Promise.all([n.e(374),n.e(762)]).then(n.bind(n,74762)),{loadableGenerated:{webpack:()=>[74762]},loading:()=>(0,l.jsx)("h1",{children:"Loading..."})}),d=a()(()=>Promise.all([n.e(374),n.e(47)]).then(n.bind(n,82047)),{loadableGenerated:{webpack:()=>[82047]},loading:()=>(0,l.jsx)("h1",{children:"Loading..."})}),s={teacher:(e,t)=>(0,l.jsx)(i,{type:e,data:t}),student:(e,t)=>(0,l.jsx)(d,{type:e,data:t})};var c=e=>{let{table:t,type:n,data:r,id:a}=e,i="create"===n?"w-8 h-8":"w-7 h-7",[d,c]=(0,u.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{className:"".concat(i," flex items-center justify-center rounded-full ").concat("create"===n?"bg-lamaYellow":"update"===n?"bg-lamaSky":"bg-lamaPurple"),onClick:()=>c(!0),children:(0,l.jsx)(o.default,{src:"/".concat(n,".png"),alt:"",width:16,height:16})}),d&&(0,l.jsx)("div",{className:"w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center",children:(0,l.jsxs)("div",{className:"bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]",children:[(0,l.jsx)(()=>"delete"===n&&a?(0,l.jsxs)("form",{action:"",className:"p-4 flex flex-col gap-4",children:[(0,l.jsxs)("span",{className:"text-center font-medium",children:["All data will be lost. Are you sure you want to delete this ",t,"?"]}),(0,l.jsx)("button",{className:"bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center",children:"Delete"})]}):"create"===n||"update"===n?s[t](n,r):"Form not found!",{}),(0,l.jsx)("div",{className:"absolute top-4 right-4 cursor-pointer",onClick:()=>c(!1),children:(0,l.jsx)(o.default,{src:"/close.png",alt:"",width:14,height:14})})]})})]})}}},function(e){e.O(0,[173,971,23,744],function(){return e(e.s=26248)}),_N_E=e.O()}]);