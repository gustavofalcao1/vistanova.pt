"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[743],{6367:(e,t,r)=>{r.d(t,{Ay:()=>j});class i{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}let n={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:(()=>{if("undefined"!=typeof localStorage)return{get:e=>Promise.resolve(localStorage.getItem(e)),set:(e,t)=>Promise.resolve(localStorage.setItem(e,t)),remove:e=>Promise.resolve(localStorage.removeItem(e))}})()},o=e=>e?"string"==typeof e?{publicKey:e}:"[object Object]"===e.toString()?e:{}:{},a=async(e,t,r={})=>{let o=await fetch(n.origin+e,{method:"POST",headers:r,body:t}),a=await o.text(),l=new i(o.status,a);if(o.ok)return l;throw l},l=(e,t,r)=>{if(!e||"string"!=typeof e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||"string"!=typeof t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r||"string"!=typeof r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},s=e=>{if(e&&"[object Object]"!==e.toString())throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},u=e=>e.webdriver||!e.languages||0===e.languages.length,d=()=>new i(451,"Unavailable For Headless Browser"),c=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if("string"!=typeof t)throw"The BlockList watchVariable has to be a string"},f=e=>!e.list?.length||!e.watchVariable,p=(e,t)=>e instanceof FormData?e.get(t):e[t],m=(e,t)=>{if(f(e))return!1;c(e.list,e.watchVariable);let r=p(t,e.watchVariable);return"string"==typeof r&&e.list.includes(r)},g=()=>new i(403,"Forbidden"),h=(e,t)=>{if("number"!=typeof e||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&"string"!=typeof t)throw"The LimitRate ID has to be a non-empty string"},b=async(e,t,r)=>{let i=Number(await r.get(e)||0);return t-Date.now()+i},y=async(e,t,r)=>{if(!t.throttle||!r)return!1;h(t.throttle,t.id);let i=t.id||e;return await b(i,t.throttle,r)>0||(await r.set(i,Date.now().toString()),!1)},v=()=>new i(429,"Too Many Requests"),w=e=>{if(!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},_=e=>"string"==typeof e?document.querySelector(e):e,j={init:(e,t="https://api.emailjs.com")=>{if(!e)return;let r=o(e);n.publicKey=r.publicKey,n.blockHeadless=r.blockHeadless,n.storageProvider=r.storageProvider,n.blockList=r.blockList,n.limitRate=r.limitRate,n.origin=r.origin||t},send:async(e,t,r,i)=>{let c=o(i),f=c.publicKey||n.publicKey,p=c.blockHeadless||n.blockHeadless,h=c.storageProvider||n.storageProvider,b={...n.blockList,...c.blockList},w={...n.limitRate,...c.limitRate};return p&&u(navigator)?Promise.reject(d()):(l(f,e,t),s(r),r&&m(b,r))?Promise.reject(g()):await y(location.pathname,w,h)?Promise.reject(v()):a("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:f,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},sendForm:async(e,t,r,i)=>{let s=o(i),c=s.publicKey||n.publicKey,f=s.blockHeadless||n.blockHeadless,p=n.storageProvider||s.storageProvider,h={...n.blockList,...s.blockList},b={...n.limitRate,...s.limitRate};if(f&&u(navigator))return Promise.reject(d());let j=_(r);l(c,e,t),w(j);let P=new FormData(j);return m(h,P)?Promise.reject(g()):await y(location.pathname,b,p)?Promise.reject(v()):(P.append("lib_version","4.4.1"),P.append("service_id",e),P.append("template_id",t),P.append("user_id",c),a("/api/v1.0/email/send-form",P))},EmailJSResponseStatus:i}},5565:(e,t,r)=>{r.d(t,{default:()=>n.a});var i=r(4146),n=r.n(i)},7970:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let i=r(306),n=r(9955),o=r(5155),a=n._(r(2115)),l=i._(r(7650)),s=i._(r(6107)),u=r(666),d=r(1159),c=r(3621);r(2363);let f=r(3576),p=i._(r(5514)),m=r(5353),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/vistanova.pt/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,i,n,o,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function b(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:s,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:g,unoptimized:y,fill:v,onLoadRef:w,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:P,sizesInput:S,onLoad:x,onError:O,...C}=e,k=(0,a.useCallback)(e=>{e&&(O&&(e.src=e.src),e.complete&&h(e,p,w,_,j,y,S))},[r,p,w,_,j,O,y,S]),M=(0,m.useMergedRef)(t,k);return(0,o.jsx)("img",{...C,...b(f),loading:g,width:s,height:l,decoding:u,"data-nimg":v?"fill":"1",className:d,style:c,sizes:n,srcSet:i,src:r,ref:M,onLoad:e=>{h(e.currentTarget,p,w,_,j,y,S)},onError:e=>{P(!0),"empty"!==p&&j(!0),O&&O(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...b(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),i=(0,a.useContext)(c.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=g||i||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:s}=e,m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[b,w]=(0,a.useState)(!1),[_,j]=(0,a.useState)(!1),{props:P,meta:S}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:b,showAltText:_});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...P,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,o.jsx)(v,{isAppRouter:!r,imgAttributes:P}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5353:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=r(2115);function n(e,t){let r=(0,i.useRef)(()=>{}),n=(0,i.useRef)(()=>{});return(0,i.useMemo)(()=>e&&t?i=>{null===i?(r.current(),n.current()):(r.current=o(e,i),n.current=o(t,i))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3003:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let i=r(306)._(r(2115)).default.createContext({})},675:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===e?{}:e;return t||r&&i}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},666:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(2363);let i=r(5859),n=r(1159);function o(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,u,{src:d,sizes:c,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:b,height:y,fill:v=!1,style:w,overrideSrc:_,onLoad:j,onLoadingComplete:P,placeholder:S="empty",blurDataURL:x,fetchPriority:O,decoding:C="async",layout:k,objectFit:M,objectPosition:E,lazyBoundary:I,lazyRoot:R,...z}=e,{imgConf:T,showAltText:A,blurComplete:D,defaultLoader:L}=t,N=T||n.imageConfigDefault;if("allSizes"in N)l=N;else{let e=[...N.deviceSizes,...N.imageSizes].sort((e,t)=>e-t),t=N.deviceSizes.sort((e,t)=>e-t);l={...N,allSizes:e,deviceSizes:t}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=z.loader||L;delete z.loader,delete z.srcSet;let H="__next_img_default"in F;if(H){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...i}=t;return e(i)}}if(k){"fill"===k&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[k];t&&!c&&(c=t)}let V="",U=a(b),B=a(y);if((r=d)&&"object"==typeof r&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,x=x||e.blurDataURL,V=e.src,!v){if(U||B){if(U&&!B){let t=U/e.width;B=Math.round(e.height*t)}else if(!U&&B){let t=B/e.height;U=Math.round(e.width*t)}}else U=e.width,B=e.height}}let G=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:V)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,G=!1),l.unoptimized&&(f=!0),H&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0);let q=a(h),K=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:E}:{},A?{}:{color:"transparent"},w),W=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:U,heightInt:B,blurWidth:s,blurHeight:u,blurDataURL:x||"",objectFit:K.objectFit})+'")':'url("'+S+'")',J=W?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:a,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,a),d=s.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:s.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:l,src:d,unoptimized:f,width:U,quality:q,sizes:c,loader:F});return{props:{...z,loading:G?"lazy":m,fetchPriority:O,width:U,height:B,decoding:C,className:g,style:{...K,...J},sizes:$.sizes,srcSet:$.srcSet,src:_||$.src},meta:{unoptimized:f,priority:p,placeholder:S,fill:v}}}},6107:(e,t,r)=>{var i=r(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return f}});let n=r(306),o=r(9955),a=r(5155),l=o._(r(2115)),s=n._(r(1172)),u=r(3003),d=r(1147),c=r(675);function f(e){void 0===e&&(e=!1);let t=[(0,a.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,a.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(2363);let m=["name","httpEquiv","charSet","itemProp"];function g(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,i={};return n=>{let o=!0,a=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){a=!0;let t=n.key.slice(n.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(n.type){case"title":case"base":t.has(n.type)?o=!1:t.add(n.type);break;case"meta":for(let e=0,t=m.length;e<t;e++){let t=m[e];if(n.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=n.props[t],r=i[t]||new Set;("name"!==t||!a)&&r.has(e)?o=!1:(r.add(e),i[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(i.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let h=function(e){let{children:t}=e,r=(0,l.useContext)(u.AmpStateContext),i=(0,l.useContext)(d.HeadManagerContext);return(0,a.jsx)(s.default,{reduceComponentsToState:g,headManager:i,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5859:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:a}=e,l=i?40*i:t,s=n?40*n:r,u=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3621:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let i=r(306)._(r(2115)),n=r(1159),o=i.default.createContext(n.imageConfigDefault)},1159:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},4146:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let i=r(306),n=r(666),o=r(7970),a=i._(r(5514));function l(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/vistanova.pt/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=o.Image},5514:(e,t)=>{function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},3576:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return i}});let i=r(306)._(r(2115)).default.createContext(null)},1172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let i=r(2115),n="undefined"==typeof window,o=n?()=>{}:i.useLayoutEffect,a=n?()=>{}:i.useEffect;function l(e){let{headManager:t,reduceComponentsToState:r}=e;function l(){if(t&&t.mountedInstances){let n=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(n,e))}}if(n){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),l()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}}]);