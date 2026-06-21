import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{a as t,c as n,d as r,i,l as a,n as o,o as s,p as c,r as l,s as u,t as d,u as f}from"./calendar-B52zOdvY.js";import{t as p}from"./react-YdZgb9TH.js";import{n as m,r as h,t as g}from"./dnd-8_QdgDrm.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var _=e(c(),1),v=e(p(),1),y=h(),b=({className:e,variant:t=`secondary`,...n})=>(0,y.jsx)(`button`,{type:`button`,className:r(`h-8 rounded border px-4 text-[12px] transition disabled:cursor-not-allowed disabled:opacity-60`,{"border-primary bg-primary text-white":t===`primary`,"border-slate-200 bg-white text-slate-600 hover:bg-slate-50":t===`secondary`,"border-transparent bg-transparent text-[#6A6996] hover:text-[#43425D]":t===`ghost`,"border-transparent bg-transparent text-[#FF5F5F] hover:text-[#E44F4F]":t===`danger`},e),...n}),x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},S=_.createContext&&_.createContext(x),C=[`attr`,`size`,`title`];function ee(e,t){if(e==null)return{};var n,r,i=te(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function te(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(null,arguments)}function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ne(Object(n),!0).forEach(function(t){E(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function E(e,t,n){return(t=re(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function re(e){var t=D(e,`string`);return typeof t==`symbol`?t:t+``}function D(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function ie(e){return e&&e.map((e,t)=>_.createElement(e.tag,T({key:t},e.attr),ie(e.child)))}function O(e){return t=>_.createElement(ae,w({attr:T({},e.attr)},t),ie(e.child))}function ae(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=ee(e,C),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),_.createElement(`svg`,w({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:T(T({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&_.createElement(`title`,null,i),e.children)};return S===void 0?t(x):_.createElement(S.Consumer,null,e=>t(e))}function k(e){return O({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fill:`none`,strokeMiterlimit:`10`,strokeWidth:`32`,d:`M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z`},child:[]},{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`,d:`M256 128v144h96`},child:[]}]})(e)}function oe(e){return O({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`path`,attr:{fill:`none`,strokeMiterlimit:`10`,strokeWidth:`32`,d:`M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z`},child:[]},{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`,d:`M320 320 192 192m0 128 128-128`},child:[]}]})(e)}function se(e){return O({tag:`svg`,attr:{viewBox:`0 0 512 512`},child:[{tag:`rect`,attr:{width:`416`,height:`384`,x:`48`,y:`80`,fill:`none`,strokeLinejoin:`round`,strokeWidth:`32`,rx:`48`},child:[]},{tag:`circle`,attr:{cx:`296`,cy:`232`,r:`24`},child:[]},{tag:`circle`,attr:{cx:`376`,cy:`232`,r:`24`},child:[]},{tag:`circle`,attr:{cx:`296`,cy:`312`,r:`24`},child:[]},{tag:`circle`,attr:{cx:`376`,cy:`312`,r:`24`},child:[]},{tag:`circle`,attr:{cx:`136`,cy:`312`,r:`24`},child:[]},{tag:`circle`,attr:{cx:`216`,cy:`312`,r:`24`},child:[]},{tag:`circle`,attr:{cx:`136`,cy:`392`,r:`24`},child:[]},{tag:`circle`,attr:{cx:`216`,cy:`392`,r:`24`},child:[]},{tag:`circle`,attr:{cx:`296`,cy:`392`,r:`24`},child:[]},{tag:`path`,attr:{fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`32`,d:`M128 48v32m256-32v32`},child:[]},{tag:`path`,attr:{fill:`none`,strokeLinejoin:`round`,strokeWidth:`32`,d:`M464 160H48`},child:[]}]})(e)}var ce=e=>e===`date`||e===`time`,le=e=>e===`date`?(0,y.jsx)(se,{size:20}):e===`time`?(0,y.jsx)(k,{size:20}):null,ue=e=>{if(e.focus(),e.showPicker)try{e.showPicker();return}catch{e.click();return}e.click()},A=({label:e,error:t,className:n,...i})=>{let a=(0,_.useRef)(null),o=ce(i.type),s=e=>{e.preventDefault(),e.stopPropagation();let t=a.current;!t||i.disabled||i.readOnly||ue(t)};return(0,y.jsxs)(`label`,{className:`block`,children:[(0,y.jsx)(`span`,{className:`mb-4 block text-[9px] leading-none text-[#D6D6D6]`,children:e}),(0,y.jsxs)(`span`,{className:`relative block`,children:[(0,y.jsx)(`input`,{ref:a,className:r(`event-modal-input block h-5 w-full border-b border-[#D6D6D6] bg-transparent text-[12px] leading-none text-[#43425D] outline-none placeholder:text-[#D6D6D6] focus:border-[#43425D] disabled:text-[#43425D] disabled:opacity-100`,o&&`pr-7`,t&&`border-red-400`,n),...i}),o&&(0,y.jsx)(`button`,{type:`button`,disabled:i.disabled||i.readOnly,onClick:s,className:`absolute right-0 bottom-1 flex h-5 w-5 cursor-pointer items-center justify-center p-0 text-[#D6D6D6] disabled:cursor-not-allowed`,"aria-label":`Open ${e} picker`,children:le(i.type)})]}),t&&(0,y.jsx)(`span`,{className:`mt-1 block text-[10px] text-red-500`,children:t})]})},de=({children:e,position:t,onClose:n})=>{let r=t?{top:t.top,left:t.left,"--modal-placement-transform":t.placement===`top`?`translateY(-100%)`:`translateY(0)`}:{top:`50%`,left:`50%`,"--modal-placement-transform":`translate(-50%, -50%)`};return(0,y.jsx)(`div`,{className:`fixed inset-0 z-50 bg-transparent border`,onClick:e=>{e.stopPropagation(),n()},children:(0,y.jsxs)(`div`,{style:r,className:`event-modal-panel fixed w-65 rounded-[10px] border border-[#43425D] bg-white p-6 shadow-xl`,onClick:e=>{e.stopPropagation()},children:[t&&(0,y.jsx)(`div`,{className:t.placement===`top`?`absolute -bottom-[9px] h-0 w-0 -translate-x-1/2 border-x-[9px] border-t-[9px] border-x-transparent border-t-[#43425D]`:`absolute -top-[9px] h-0 w-0 -translate-x-1/2 border-x-[9px] border-b-[9px] border-x-transparent border-b-[#43425D]`,style:{left:t.arrowLeft??32}}),(0,y.jsx)(`button`,{type:`button`,onClick:n,className:`absolute right-2 top-2 flex h-5 w-5 items-center justify-center text-[#D6D6D6] transition hover:text-[#43425D]`,"aria-label":`Close modal`,children:(0,y.jsx)(oe,{size:20})}),e]})})},fe=[`#3b82f6`,`#22c55e`,`#f97316`,`#ef4444`,`#8b5cf6`],j=e=>typeof e==`number`&&!isNaN(e),M=e=>typeof e==`string`,N=e=>typeof e==`function`,pe=e=>M(e)||j(e),P=e=>M(e)||N(e)?e:null,me=(e,t)=>e===!1||j(e)&&e>0?e:t,he=e=>(0,_.isValidElement)(e)||M(e)||N(e)||j(e);function ge(e,t,n=300){let{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight=`initial`,i.height=r+`px`,i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height=`0`,i.padding=`0`,i.margin=`0`,setTimeout(t,n)})})}function F({enter:e,exit:t,appendPosition:n=!1,collapse:r=!0,collapseDuration:i=300}){return function({children:a,position:o,preventExitTransition:s,done:c,nodeRef:l,isIn:u,playToast:d}){let f=n?`${e}--${o}`:e,p=n?`${t}--${o}`:t,m=(0,_.useRef)(0);return(0,_.useLayoutEffect)(()=>{let e=l.current,t=f.split(` `),n=r=>{r.target===l.current&&(d(),e.removeEventListener(`animationend`,n),e.removeEventListener(`animationcancel`,n),m.current===0&&r.type!==`animationcancel`&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener(`animationend`,n),e.addEventListener(`animationcancel`,n)},[]),(0,_.useEffect)(()=>{let e=l.current,t=()=>{e.removeEventListener(`animationend`,t),r?ge(e,c,i):c()};u||(s?t():(m.current=1,e.className+=` ${p}`,e.addEventListener(`animationend`,t)))},[u]),_.createElement(_.Fragment,null,a)}}function _e(e,t){return{content:ve(e.content,e.props),containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,reason:e.removalReason,status:t}}function ve(e,t,n=!1){return(0,_.isValidElement)(e)&&!M(e.type)?(0,_.cloneElement)(e,{closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):N(e)?e({closeToast:t.closeToast,toastProps:t,data:t.data,isPaused:n}):e}function ye({closeToast:e,theme:t,ariaLabel:n=`close`}){return _.createElement(`button`,{className:`Toastify__close-button Toastify__close-button--${t}`,type:`button`,onClick:t=>{t.stopPropagation(),e(!0)},"aria-label":n},_.createElement(`svg`,{"aria-hidden":`true`,viewBox:`0 0 14 16`},_.createElement(`path`,{fillRule:`evenodd`,d:`M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z`})))}function be({delay:e,isRunning:t,closeToast:n,type:i=`default`,hide:a,className:o,controlledProgress:s,progress:c,rtl:l,isIn:u,theme:d}){let f=a||s&&c===0,p={animationDuration:`${e}ms`,animationPlayState:t?`running`:`paused`};s&&(p.transform=`scaleX(${c})`);let m=r(`Toastify__progress-bar`,s?`Toastify__progress-bar--controlled`:`Toastify__progress-bar--animated`,`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":l}),h=N(o)?o({rtl:l,type:i,defaultClassName:m}):r(m,o),g={[s&&c>=1?`onTransitionEnd`:`onAnimationEnd`]:s&&c<1?null:()=>{u&&n()}};return _.createElement(`div`,{className:`Toastify__progress-bar--wrp`,"data-hidden":f},_.createElement(`div`,{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${d} Toastify__progress-bar--${i}`}),_.createElement(`div`,{role:`progressbar`,"aria-hidden":f?`true`:`false`,"aria-label":`notification timer`,"aria-valuenow":s?Math.round(c*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:h,style:p,...g}))}var xe=1,Se=()=>`${xe++}`;function Ce(e,t,n){let r=1,i=0,a=[],o=[],s=t,c=new Map,l=new Set,u=e=>(l.add(e),()=>l.delete(e)),d=()=>{o=Array.from(c.values()),l.forEach(e=>e())},f=({containerId:t,toastId:n,updateId:r})=>{let i=t?t!==e:e!==1,a=c.has(n)&&r==null;return i||a},p=(e,t)=>{c.forEach(n=>{var r;(t==null||t===n.props.toastId)&&((r=n.toggle)==null||r.call(n,e))})},m=e=>{var t,r;e.isActive&&((r=(t=e.props)?.onClose)==null||r.call(t,e.removalReason),e.isActive=!1,n(_e(e,`removed`)))},h=e=>{if(e==null)c.forEach(m);else{let t=c.get(e);t&&m(t)}d()},g=()=>{i-=a.length,a=[]},_=e=>{var t,r;let{toastId:i,updateId:a}=e.props,o=a==null;e.staleId&&c.delete(e.staleId),e.isActive=!0,c.set(i,e),d(),n(_e(e,o?`added`:`updated`)),o&&((r=(t=e.props).onOpen)==null||r.call(t))};return{id:e,props:s,observe:u,toggle:p,removeToast:h,toasts:c,clearQueue:g,buildToast:(e,t)=>{if(f(t))return;let{toastId:n,updateId:o,data:l,staleId:u,delay:p}=t,m=o==null;m&&i++;let g={...s,style:s.toastStyle,key:r++,...Object.fromEntries(Object.entries(t).filter(([e,t])=>t!=null)),toastId:n,updateId:o,data:l,isIn:!1,className:P(t.className||s.toastClassName),progressClassName:P(t.progressClassName||s.progressClassName),autoClose:t.isLoading?!1:me(t.autoClose,s.autoClose),closeToast(e){let t=c.get(n);t&&(t.removalReason=e,h(n))},deleteToast(){if(c.get(n)!=null){if(c.delete(n),i--,i<0&&(i=0),a.length>0){_(a.shift());return}d()}}};g.closeButton=s.closeButton,t.closeButton===!1||he(t.closeButton)?g.closeButton=t.closeButton:t.closeButton===!0&&(g.closeButton=he(s.closeButton)?s.closeButton:!0);let v={content:e,props:g,staleId:u};s.limit&&s.limit>0&&i>s.limit&&m?a.push(v):j(p)?setTimeout(()=>{_(v)},p):_(v)},setProps(e){s=e},setToggle:(e,t)=>{let n=c.get(e);n&&(n.toggle=t)},isToastActive:e=>c.get(e)?.isActive,getSnapshot:()=>o}}var I=new Map,L=[],we=new Set,Te=e=>we.forEach(t=>t(e)),Ee=()=>I.size>0;function De(){L.forEach(e=>Me(e.content,e.options)),L=[]}var Oe=(e,{containerId:t})=>I.get(t||1)?.toasts.get(e);function ke(e,t){var n;if(t)return!!((n=I.get(t))!=null&&n.isToastActive(e));let r=!1;return I.forEach(t=>{t.isToastActive(e)&&(r=!0)}),r}function Ae(e){if(!Ee()){L=L.filter(t=>e!=null&&t.options.toastId!==e);return}if(e==null||pe(e))I.forEach(t=>{t.removeToast(e)});else if(e&&(`containerId`in e||`id`in e)){let t=I.get(e.containerId);t?t.removeToast(e.id):I.forEach(t=>{t.removeToast(e.id)})}}var je=(e={})=>{I.forEach(t=>{t.props.limit&&(!e.containerId||t.id===e.containerId)&&t.clearQueue()})};function Me(e,t){he(e)&&(Ee()||L.push({content:e,options:t}),I.forEach(n=>{n.buildToast(e,t)}))}function Ne(e){var t;(t=I.get(e.containerId||1))==null||t.setToggle(e.id,e.fn)}function Pe(e,t){I.forEach(n=>{(t==null||!(t!=null&&t.containerId)||t?.containerId===n.id)&&n.toggle(e,t?.id)})}function Fe(e){let t=e.containerId||1;return{subscribe(n){let r=Ce(t,e,Te);I.set(t,r);let i=r.observe(n);return De(),()=>{i(),I.delete(t)}},setProps(e){var n;(n=I.get(t))==null||n.setProps(e)},getSnapshot(){return I.get(t)?.getSnapshot()}}}function Ie(e){return we.add(e),()=>{we.delete(e)}}function Le(e){return e&&(M(e.toastId)||j(e.toastId))?e.toastId:Se()}function R(e,t){return Me(e,t),t.toastId}function z(e,t){return{...t,type:t&&t.type||e,toastId:Le(t)}}function B(e){return(t,n)=>R(t,z(e,n))}function V(e,t){return R(e,z(`default`,t))}V.loading=(e,t)=>R(e,z(`default`,{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t}));function Re(e,{pending:t,error:n,success:r},i){let a;t&&(a=M(t)?V.loading(t,i):V.loading(t.render,{...i,...t}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},s=(e,t,n)=>{if(t==null){V.dismiss(a);return}let r={type:e,...o,...i,data:n},s=M(t)?{render:t}:t;return a?V.update(a,{...r,...s}):V(s.render,{...r,...s}),n},c=N(e)?e():e;return c.then(e=>s(`success`,r,e)).catch(e=>s(`error`,n,e)),c}V.promise=Re,V.success=B(`success`),V.info=B(`info`),V.error=B(`error`),V.warning=B(`warning`),V.warn=V.warning,V.dark=(e,t)=>R(e,z(`default`,{theme:`dark`,...t}));function ze(e){Ae(e)}V.dismiss=ze,V.clearWaitingQueue=je,V.isActive=ke,V.update=(e,t={})=>{let n=Oe(e,t);if(n){let{props:r,content:i}=n,a={delay:100,...r,...t,toastId:t.toastId||e,updateId:Se()};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,R(o,a)}},V.done=e=>{V.update(e,{progress:1})},V.onChange=Ie,V.play=e=>Pe(!0,e),V.pause=e=>Pe(!1,e);function Be(e){let{subscribe:t,getSnapshot:n,setProps:r}=(0,_.useRef)(Fe(e)).current;r(e);let i=(0,_.useSyncExternalStore)(t,n,n)?.slice();function a(t){if(!i)return[];let n=new Map;return e.newestOnTop&&i.reverse(),i.forEach(e=>{let{position:t}=e.props;n.has(t)||n.set(t,[]),n.get(t).push(e)}),Array.from(n,e=>t(e[0],e[1]))}return{getToastToRender:a,isToastActive:ke,count:i?.length}}function Ve(e){let[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)(!1),a=(0,_.useRef)(null),o=(0,_.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:s,pauseOnHover:c,closeToast:l,onClick:u,closeOnClick:d}=e;Ne({id:e.toastId,containerId:e.containerId,fn:n}),(0,_.useEffect)(()=>{if(e.pauseOnFocusLoss)return f(),()=>{p()}},[e.pauseOnFocusLoss]);function f(){document.hasFocus()||v(),window.addEventListener(`focus`,g),window.addEventListener(`blur`,v)}function p(){window.removeEventListener(`focus`,g),window.removeEventListener(`blur`,v)}function m(t){if(e.draggable===!0||e.draggable===t.pointerType){y();let n=a.current;o.canCloseOnClick=!0,o.canDrag=!0,n.style.transition=`none`,e.draggableDirection===`x`?(o.start=t.clientX,o.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(o.start=t.clientY,o.removalDistance=n.offsetHeight*(e.draggablePercent===80?e.draggablePercent*1.5:e.draggablePercent)/100)}}function h(t){let{top:n,bottom:r,left:i,right:o}=a.current.getBoundingClientRect();t.pointerType===`mouse`&&e.pauseOnHover&&t.clientX>=i&&t.clientX<=o&&t.clientY>=n&&t.clientY<=r?v():g()}function g(){n(!0)}function v(){n(!1)}function y(){o.didMove=!1,document.addEventListener(`pointermove`,x),document.addEventListener(`pointerup`,S)}function b(){document.removeEventListener(`pointermove`,x),document.removeEventListener(`pointerup`,S)}function x(n){let r=a.current;if(o.canDrag&&r){o.didMove=!0,t&&v(),e.draggableDirection===`x`?o.delta=n.clientX-o.start:o.delta=n.clientY-o.start,o.start!==n.clientX&&(o.canCloseOnClick=!1);let i=e.draggableDirection===`x`?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`;r.style.transform=`translate3d(${i},0)`,r.style.opacity=`${1-Math.abs(o.delta/o.removalDistance)}`}}function S(){b();let t=a.current;if(o.canDrag&&o.didMove&&t){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance){i(!0),e.closeToast(!0),e.collapseAll();return}t.style.transition=`transform 0.2s, opacity 0.2s`,t.style.removeProperty(`transform`),t.style.removeProperty(`opacity`)}}let C={onPointerDown:m,onPointerUp:h};return s&&c&&(C.onMouseEnter=v,e.stacked||(C.onMouseLeave=g)),d&&(C.onClick=e=>{u&&u(e),o.canCloseOnClick&&l(!0)}),{playToast:g,pauseToast:v,isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:C}}var He=typeof window<`u`?_.useLayoutEffect:_.useEffect,H=({theme:e,type:t,isLoading:n,...r})=>_.createElement(`svg`,{viewBox:`0 0 24 24`,width:`100%`,height:`100%`,fill:e===`colored`?`currentColor`:`var(--toastify-icon-color-${t})`,...r});function Ue(e){return _.createElement(H,{...e},_.createElement(`path`,{d:`M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z`}))}function We(e){return _.createElement(H,{...e},_.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z`}))}function Ge(e){return _.createElement(H,{...e},_.createElement(`path`,{d:`M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z`}))}function Ke(e){return _.createElement(H,{...e},_.createElement(`path`,{d:`M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z`}))}function qe(){return _.createElement(`div`,{className:`Toastify__spinner`})}var Je={info:We,warning:Ue,success:Ge,error:Ke,spinner:qe},Ye=e=>e in Je;function Xe({theme:e,type:t,isLoading:n,icon:r}){let i=null,a={theme:e,type:t};return r===!1||(N(r)?i=r({...a,isLoading:n}):(0,_.isValidElement)(r)?i=(0,_.cloneElement)(r,a):n?i=Je.spinner():Ye(t)&&(i=Je[t](a))),i}var Ze=e=>{let{isRunning:t,preventExitTransition:n,toastRef:i,eventHandlers:a,playToast:o}=Ve(e),{closeButton:s,children:c,autoClose:l,onClick:u,type:d,hideProgressBar:f,closeToast:p,transition:m,position:h,className:g,style:v,progressClassName:y,updateId:b,role:x,progress:S,rtl:C,toastId:ee,deleteToast:te,isIn:w,isLoading:ne,closeOnClick:T,theme:E,ariaLabel:re}=e,D=r(`Toastify__toast`,`Toastify__toast-theme--${E}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":T}),ie=N(g)?g({rtl:C,position:h,type:d,defaultClassName:D}):r(D,g),O=Xe(e),ae=!!S||!l,k={closeToast:p,type:d,theme:E},oe=null;return s===!1||(oe=N(s)?s(k):(0,_.isValidElement)(s)?(0,_.cloneElement)(s,k):ye(k)),_.createElement(m,{isIn:w,done:te,position:h,preventExitTransition:n,nodeRef:i,playToast:o},_.createElement(`div`,{id:ee,tabIndex:0,onClick:u,"data-in":w,className:ie,...a,style:v,ref:i,...w&&{role:x,"aria-label":re}},O!=null&&_.createElement(`div`,{className:r(`Toastify__toast-icon`,{"Toastify--animate-icon Toastify__zoom-enter":!ne})},O),ve(c,e,!t),oe,!e.customProgressBar&&_.createElement(be,{...b&&!ae?{key:`p-${b}`}:{},rtl:C,theme:E,delay:l,isRunning:t,isIn:w,closeToast:p,hide:f,type:d,className:y,controlledProgress:ae,progress:S||0})))},U=(e,t=!1)=>({enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}),Qe=F(U(`bounce`,!0));F(U(`slide`,!0)),F(U(`zoom`)),F(U(`flip`));var $e={position:`top-right`,transition:Qe,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:`touch`,draggablePercent:80,draggableDirection:`x`,role:`alert`,theme:`light`,"aria-label":`Notifications Alt+T`,hotKeys:e=>e.altKey&&e.code===`KeyT`};function et(e){let t={...$e,...e},n=e.stacked,[i,a]=(0,_.useState)(!0),o=(0,_.useRef)(null),{getToastToRender:s,isToastActive:c,count:l}=Be(t),{className:u,style:d,rtl:f,containerId:p,hotKeys:m}=t;function h(e){let t=r(`Toastify__toast-container`,`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":f});return N(u)?u({position:e,rtl:f,defaultClassName:t}):r(t,P(u))}function g(){n&&(a(!0),V.play())}return He(()=>{if(n){let e=o.current.querySelectorAll(`[data-in="true"]`),n=t.position?.includes(`top`),r=0,a=0;Array.from(e).reverse().forEach((e,t)=>{let o=e;o.classList.add(`Toastify__toast--stacked`),t>0&&(o.dataset.collapsed=`${i}`),o.dataset.pos||(o.dataset.pos=n?`top`:`bot`);let s=r*(i?.2:1)+(i?0:12*t),c=Math.max(.5,1-(i?a:0));o.style.setProperty(`--y`,`${n?s:s*-1}px`),o.style.setProperty(`--g`,`12`),o.style.setProperty(`--s`,`${c}`),r+=o.offsetHeight,a+=.025})}},[i,l,n]),(0,_.useEffect)(()=>{function e(e){var t;let n=o.current;m(e)&&((t=n?.querySelector(`[tabIndex="0"]`))==null||t.focus(),a(!1),V.pause()),e.key===`Escape`&&(document.activeElement===n||n!=null&&n.contains(document.activeElement))&&(a(!0),V.play())}return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[m]),_.createElement(`section`,{ref:o,className:`Toastify`,id:p,onMouseEnter:()=>{n&&(a(!1),V.pause())},onMouseLeave:g,"aria-live":`polite`,"aria-atomic":`false`,"aria-relevant":`additions text`,"aria-label":t[`aria-label`]},s((e,t)=>{let r=t.length?{...d}:{...d,pointerEvents:`none`};return _.createElement(`div`,{tabIndex:-1,className:h(e),"data-stacked":n,style:r,key:`c-${e}`},t.map(({content:e,props:t})=>_.createElement(Ze,{...t,stacked:n,collapseAll:g,isIn:c(t.toastId,t.containerId),key:`t-${t.key}`},e)))}))}var tt=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,nt=new Map,rt=(e,t)=>{He(()=>{if(!e||typeof document>`u`)return;let n=document,r=nt.get(n);if(r){t&&r.setAttribute(`nonce`,t);return}let i=n.createElement(`style`);i.textContent=e,t&&i.setAttribute(`nonce`,t),n.head.appendChild(i),nt.set(n,i)},[t])};function it(e){return rt(tt,e.nonce),_.createElement(et,{...e})}var W=({type:e,text:t,duration:n})=>{let r={autoClose:n??3e3};try{V[e](t,r)}catch{}},at=e=>Number.isNaN(e.getTime())?``:`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`,ot=e=>Number.isNaN(e.getTime())?``:`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`,st=e=>{let t={};if(e.title.trim()?e.title.trim().length>30&&(t.title=`Max 30 characters allowed`):t.title=`Event name is required`,e.date||(t.date=`Event date is required`),e.time||(t.time=`Event time is required`),e.color||(t.color=`Color is required`),e.date&&e.time){let n=new Date(`${e.date}T${e.time}`);Number.isNaN(n.getTime())?t.date=`Invalid event date`:n<new Date&&(t.date=`Past date is not allowed`)}return t},ct=e=>Object.keys(e).length>0,lt=({mode:e,selectedDate:t,event:n,onCreate:r,onUpdate:i,onDelete:a,onClose:o})=>{let[s,c]=(0,_.useState)(e),[l,u]=(0,_.useState)({}),d=n?n.end<new Date:!1,f=s===`view`,[p,m]=(0,_.useState)((0,_.useMemo)(()=>{let e=n?.start??t??new Date;return{title:n?.title??``,date:at(e),time:ot(e),color:n?.color??fe[0],notes:n?.notes??``}},[n,t]));return{values:p,errors:l,currentMode:s,isReadonly:f,isPastEvent:d,updateField:(e,t)=>{m(n=>({...n,[e]:t})),u(t=>({...t,[e]:void 0}))},handleSave:()=>{try{let e=st(p);if(ct(e)){u(e);return}(n?i(n.id,p):r(p))&&o()}catch{W({type:`error`,text:`Failed to save event`})}},handleDelete:()=>{if(n)try{a(n.id)&&o()}catch{W({type:`error`,text:`Failed to delete event`})}},enableEditMode:()=>{d||c(`edit`)}}},ut=({mode:e,selectedDate:t,position:n,event:r,onClose:i,onCreate:a,onUpdate:o,onDelete:s})=>{let{values:c,errors:l,currentMode:u,isReadonly:d,isPastEvent:f,updateField:p,handleSave:m,handleDelete:h,enableEditMode:g}=lt({mode:e,selectedDate:t,event:r,onCreate:a,onUpdate:o,onDelete:s,onClose:i});return(0,y.jsx)(de,{position:n,onClose:i,children:(0,y.jsxs)(`div`,{className:`flex flex-col gap-5 pt-2`,children:[(0,y.jsx)(A,{label:`event name`,value:c.title,maxLength:30,disabled:d,error:l.title,onChange:e=>p(`title`,e.target.value)}),(0,y.jsx)(A,{label:`event date`,type:`date`,value:c.date,disabled:d,error:l.date,onChange:e=>p(`date`,e.target.value)}),(0,y.jsx)(A,{label:`event time`,type:`time`,value:c.time,disabled:d,error:l.time,onChange:e=>p(`time`,e.target.value)}),(0,y.jsx)(A,{label:`notes`,value:c.notes,disabled:d,error:l.notes,onChange:e=>p(`notes`,e.target.value)}),!d&&(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`span`,{className:`mb-4 block text-[9px] leading-none text-[#D6D6D6]`,children:`color`}),(0,y.jsx)(`div`,{className:`flex gap-2`,children:fe.map(e=>(0,y.jsx)(`button`,{type:`button`,onClick:()=>p(`color`,e),className:`h-5 w-5 rounded-full border`,style:{backgroundColor:e,outline:c.color===e?`2px solid #3f3d56`:`none`},"aria-label":`Select ${e}`},e))}),l.color&&(0,y.jsx)(`span`,{className:`mt-1 block text-[10px] text-red-500`,children:l.color})]}),(0,y.jsx)(`div`,{className:`flex items-center justify-between pt-3`,children:u===`view`?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b,{variant:`danger`,onClick:h,children:`DISCARD`}),(0,y.jsx)(b,{disabled:f,variant:`ghost`,onClick:g,children:`EDIT`})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(b,{variant:`danger`,onClick:i,children:`Cancel`}),(0,y.jsx)(b,{variant:`ghost`,onClick:m,children:`Save`})]})})]})})},dt=l({format:u,parse:t,startOfWeek:f,getDay:s,locales:{"en-US":n}}),ft=[i.MONTH,i.WEEK,i.DAY,i.AGENDA],pt={dayFormat:e=>u(e,`EEE dd/MM`),weekdayFormat:e=>u(e,`EEE`),dayHeaderFormat:e=>u(e,`EEEE MMM d`)},mt=new Date(1970,0,1,0,0),G=`calendar-current-hour-label`,ht=`calendar-create-target-cell`,gt=`calendar-create-target-slot`,_t=`calendar-create-target-date`,vt=`calendar-create-target-leaving`,yt=`calendar-event-selected`,bt=e=>t=>({className:e?.id===t.id?yt:``,style:{"--calendar-event-color":t.color,backgroundColor:t.color,borderColor:t.color}}),xt=e(d(),1),St=e=>typeof e==`function`,Ct=e=>e&&typeof e==`object`&&`default`in e?e.default:void 0,K=(e=>{let t=Ct(e);return[e,t,Ct(t)].find(St)})(xt),wt=!!K,Tt=K?K(o):o,q=[];for(let e=0;e<256;++e)q.push((e+256).toString(16).slice(1));function Et(e,t=0){return(q[e[t+0]]+q[e[t+1]]+q[e[t+2]]+q[e[t+3]]+`-`+q[e[t+4]]+q[e[t+5]]+`-`+q[e[t+6]]+q[e[t+7]]+`-`+q[e[t+8]]+q[e[t+9]]+`-`+q[e[t+10]]+q[e[t+11]]+q[e[t+12]]+q[e[t+13]]+q[e[t+14]]+q[e[t+15]]).toLowerCase()}var Dt=new Uint8Array(16);function Ot(){return crypto.getRandomValues(Dt)}function kt(e,t,n){return!t&&!e&&crypto.randomUUID?crypto.randomUUID():At(e,t,n)}function At(e,t,n){e||={};let r=e.random??e.rng?.()??Ot();if(r.length<16)throw Error(`Random bytes length must be >= 16`);if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){if(n||=0,n<0||n+16>t.length)throw RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let e=0;e<16;++e)t[n+e]=r[e];return t}return Et(r)}var jt=`calendar-events`,Mt=3600*1e3,Nt=e=>JSON.stringify(e),J=e=>!Number.isNaN(e.getTime()),Pt=e=>{if(!e||typeof e!=`object`)return null;let t=e;if(typeof t.id!=`string`||typeof t.title!=`string`||typeof t.color!=`string`||!t.start||!t.end)return null;let n=new Date(t.start),r=new Date(t.end);return!J(n)||!J(r)?null:{id:t.id,title:t.title,start:n,end:r,color:t.color,notes:typeof t.notes==`string`?t.notes:``}},Ft=()=>{try{let e=localStorage.getItem(jt);if(!e)return[];let t=JSON.parse(e);if(!Array.isArray(t))return W({type:`error`,text:`Failed to load calendar events`}),[];let n=t.map(e=>Pt(e)).filter(e=>!!e);return n.length!==t.length&&W({type:`error`,text:`Some saved events could not be loaded`}),n}catch{return W({type:`error`,text:`Failed to load calendar events`}),[]}},It=e=>{let t=new Date(`${e.date}T${e.time}`);if(!J(t))throw Error(`Invalid event date`);return t},Lt=(e,t=kt())=>{let n=It(e),r=new Date(n.getTime()+Mt);return{id:t,title:e.title.trim(),start:n,end:r,color:e.color,notes:e.notes.trim()}},Y=()=>{W({type:`error`,text:`Event was not found`})},Rt=()=>{let[e,t]=(0,_.useState)(Ft),n=(0,_.useMemo)(()=>[...e].sort((e,t)=>e.start.getTime()-t.start.getTime()),[e]),r=e=>{try{return localStorage.setItem(jt,Nt(e)),t(e),!0}catch{return W({type:`error`,text:`Failed to save calendar events`}),!1}};return{events:n,createEvent:t=>{try{let n=r([...e,Lt(t)]);return n&&W({type:`success`,text:`Event created successfully`}),n}catch{return W({type:`error`,text:`Failed to create event`}),!1}},updateEvent:(t,n)=>{try{if(!e.some(e=>e.id===t))return Y(),!1;let i=r(e.map(e=>e.id===t?Lt(n,t):e));return i&&W({type:`success`,text:`Event updated successfully`}),i}catch{return W({type:`error`,text:`Failed to update event`}),!1}},deleteEvent:t=>{try{if(!e.some(e=>e.id===t))return Y(),!1;let n=r(e.filter(e=>e.id!==t));return n&&W({type:`error`,text:`Event deleted`}),n}catch{return W({type:`error`,text:`Failed to delete event`}),!1}},moveEvent:(t,n,i)=>{try{if(!J(n)||!J(i))throw Error(`Invalid event date`);return e.some(e=>e.id===t)?r(e.map(e=>e.id===t?{...e,start:n,end:i}:e)):(Y(),!1)}catch{return W({type:`error`,text:`Failed to move event`}),!1}}}},zt=260,X=430,Z=12,Bt=32,Vt=(e,t,n)=>Math.min(Math.max(e,t),n),Ht=(e,t)=>{let n=Vt(e-Bt,Z,window.innerWidth-zt-Z),r=t+Z+X<=window.innerHeight,i=t-Z-X>=Z,a=!r&&i?`top`:`bottom`,o=a===`bottom`?t+Z:t-Z;return{top:Math.max(Z,o),left:n,arrowLeft:e-n,placement:a}},Ut=e=>{let t=e.left+e.width/2,n=Vt(t-zt/2,Z,window.innerWidth-zt-Z),r=e.bottom+Z+X<=window.innerHeight,i=e.top-Z-X>=Z,a=!r&&i?`top`:`bottom`,o=a===`bottom`?e.bottom+Z:e.top-Z;return{top:Math.max(Z,o),left:n,arrowLeft:t-n,placement:a}},Wt=e=>e.box,Q=(e,t)=>{try{e()}catch{W({type:`error`,text:t})}},Gt=()=>{let e=Rt(),[t,n]=(0,_.useState)(()=>new Date),[r,a]=(0,_.useState)(i.MONTH),[o,s]=(0,_.useState)(),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(),m=()=>{Q(()=>{d(null),s(void 0),l(null),p(void 0)},`Failed to close event form`)},h=e=>{Q(()=>{if(u){m();return}let t=Wt(e);s(e.start),l(null),d(`create`),t&&p(Ht(t.clientX,t.clientY))},`Failed to open event form`)},g=(e,t)=>{Q(()=>{if(u){m();return}let n=t.currentTarget.getBoundingClientRect();l(e),s(void 0),d(`view`),p(Ut(n))},`Failed to open event`)},v=({event:t,start:n,end:r})=>{Q(()=>{e.moveEvent(t.id,new Date(n),new Date(r))},`Failed to move event`)};return{...e,date:t,view:r,selectedDate:o,selectedEvent:c,modalMode:u,modalPosition:f,setDate:n,setView:a,openCreateModal:h,openEventModal:g,closeModal:m,handleDrop:v}},Kt=(e,t)=>{let[n,r]=(0,_.useState)(e),i=(0,_.useRef)(null),a=(0,_.useCallback)(()=>{i.current&&=(window.clearTimeout(i.current),null)},[]),o=(0,_.useCallback)(n=>{a(),r(n),i.current=window.setTimeout(()=>{r(e),i.current=null},t)},[a,t,e]);return(0,_.useEffect)(()=>a,[a]),[n,o,a]},qt=e=>e===i.MONTH,$=e=>e===i.WEEK||e===i.DAY,Jt=(e,t)=>a(e.start,t)||a(e.end,t),Yt=(e,t)=>e.start<=t&&t<e.end,Xt=180,Zt=({events:e,view:t,selectedDate:n,modalMode:i,closeModal:o})=>{let[s,c]=Kt(null,Xt),l=i===`create`&&!!n,u=(0,_.useCallback)(t=>e.some(e=>Jt(e,t)),[e]),d=(0,_.useCallback)(t=>e.some(e=>Yt(e,t)),[e]),f=(0,_.useCallback)(e=>!!(l&&n&&a(e,n)&&!u(e)),[u,l,n]),p=(0,_.useCallback)(e=>!!(l&&n&&e.getTime()===n.getTime()&&!d(e)),[d,l,n]),m=(0,_.useCallback)(e=>!!(s&&a(e,s)),[s]),h=(0,_.useCallback)(e=>e.getTime()===s?.getTime(),[s]);return{closeModalWithCreateAnimation:(0,_.useCallback)(()=>{l&&n&&c(n),o()},[o,l,n,c]),dayPropGetter:(0,_.useCallback)(e=>({className:r({[ht]:qt(t)&&f(e),[vt]:qt(t)&&m(e)})}),[m,f,t]),isSelectedEmptyDay:f,slotPropGetter:(0,_.useCallback)(e=>({className:r({[gt]:$(t)&&p(e),[vt]:$(t)&&h(e)})}),[h,p,t])}},Qt=`.rbc-time-gutter .rbc-label`,$t=`.rbc-current-time-indicator`,en=()=>{document.querySelectorAll(`.${G}`).forEach(e=>e.classList.remove(G))},tn=e=>{if(en(),!$(e))return;let t=document.querySelector(`.calendar-view-${e}`);if(!t?.querySelector($t))return;let n=u(new Date,`h:00 aa`).toLowerCase();t.querySelectorAll(Qt).forEach(e=>{e.textContent?.trim().toLowerCase()===n&&e.classList.add(G)})},nn=(e,t)=>{(0,_.useEffect)(()=>{if(!$(t)){en();return}let e,n=()=>{e=requestAnimationFrame(()=>tn(t))};n();let r=window.setInterval(n,60*1e3);return()=>{cancelAnimationFrame(e),window.clearInterval(r),en()}},[e,t])},rn=()=>{(0,_.useEffect)(()=>{wt||W({type:`error`,text:`Drag and drop is unavailable`})},[])},an=()=>{(0,_.useEffect)(()=>{let e=e=>{(e.target instanceof Element?e.target:e.target instanceof Text?e.target.parentElement:null)?.closest(`.rbc-overlay .rbc-event`)&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())};return document.addEventListener(`dragstart`,e,!0),()=>{document.removeEventListener(`dragstart`,e,!0)}},[])},on=({drilldownView:e,isHighlighted:t=!1,label:n,onDrillDown:i})=>{let a=r({[_t]:t});return e?(0,y.jsx)(`button`,{type:`button`,className:r(`rbc-button-link`,a),onClick:i,children:n}):(0,y.jsx)(`span`,{className:a,children:n})},sn=()=>{let{events:e,date:t,view:n,selectedDate:r,selectedEvent:i,modalMode:a,modalPosition:o,createEvent:s,updateEvent:c,deleteEvent:l,setDate:u,setView:d,openCreateModal:f,openEventModal:p,closeModal:m,handleDrop:h}=Gt(),{closeModalWithCreateAnimation:g,dayPropGetter:v,isSelectedEmptyDay:b,slotPropGetter:x}=Zt({events:e,view:n,selectedDate:r,modalMode:a,closeModal:m});an(),nn(t,n),rn();let S=(0,_.useMemo)(()=>bt(i),[i]),C=(0,_.useMemo)(()=>({month:{dateHeader:e=>(0,y.jsx)(on,{...e,isHighlighted:b(e.date)})}}),[b]);return(0,y.jsxs)(`section`,{className:`calendar-page min-w-0`,children:[(0,y.jsx)(`h1`,{className:`shrink-0 text-xl font-medium text-[#3f3d56] sm:text-2xl`,children:`Calendar`}),(0,y.jsx)(`div`,{className:`bg-white p-3 pb-5 shadow-sm sm:p-5 sm:pb-9 calendar-view calendar-view-${n}`,children:(0,y.jsx)(Tt,{localizer:dt,events:e,date:t,view:n,views:ft,formats:pt,getNow:()=>new Date,selectable:!0,resizable:!1,popup:!0,showMultiDayTimes:!0,dayLayoutAlgorithm:`no-overlap`,scrollToTime:mt,enableAutoScroll:!1,startAccessor:`start`,endAccessor:`end`,onNavigate:u,onView:d,onSelectSlot:f,onSelectEvent:p,onEventDrop:h,dayPropGetter:v,slotPropGetter:x,eventPropGetter:S,style:{height:`100%`},components:C})}),a&&(0,y.jsx)(ut,{mode:a,selectedDate:r,event:i,position:o,onClose:g,onCreate:s,onUpdate:c,onDelete:l})]})},cn=()=>(0,y.jsx)(it,{position:`bottom-right`,newestOnTop:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0});function ln(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`6`,x2:`6`,y2:`18`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`6`,x2:`18`,y2:`18`},child:[]}]})(e)}function un(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`},child:[]},{tag:`circle`,attr:{cx:`9`,cy:`7`,r:`4`},child:[]},{tag:`path`,attr:{d:`M23 21v-2a4 4 0 0 0-3-3.87`},child:[]},{tag:`path`,attr:{d:`M16 3.13a4 4 0 0 1 0 7.75`},child:[]}]})(e)}function dn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`3`},child:[]},{tag:`path`,attr:{d:`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z`},child:[]}]})(e)}function fn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`11`,cy:`11`,r:`8`},child:[]},{tag:`line`,attr:{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`},child:[]}]})(e)}function pn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z`},child:[]}]})(e)}function mn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z`},child:[]}]})(e)}function hn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`3`,y1:`12`,x2:`21`,y2:`12`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`6`,x2:`21`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`18`,x2:`21`,y2:`18`},child:[]}]})(e)}function gn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`polyline`,attr:{points:`22 12 16 12 14 15 10 15 8 12 2 12`},child:[]},{tag:`path`,attr:{d:`M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z`},child:[]}]})(e)}function _n(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`},child:[]},{tag:`polyline`,attr:{points:`9 22 9 12 15 12 15 22`},child:[]}]})(e)}function vn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`path`,attr:{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`},child:[]}]})(e)}function yn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`circle`,attr:{cx:`12`,cy:`12`,r:`10`},child:[]},{tag:`line`,attr:{x1:`2`,y1:`12`,x2:`22`,y2:`12`},child:[]},{tag:`path`,attr:{d:`M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`},child:[]}]})(e)}function bn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`},child:[]},{tag:`polyline`,attr:{points:`14 2 14 8 20 8`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`13`,x2:`8`,y2:`13`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`17`,x2:`8`,y2:`17`},child:[]},{tag:`polyline`,attr:{points:`10 9 9 9 8 9`},child:[]}]})(e)}function xn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`rect`,attr:{x:`3`,y:`4`,width:`18`,height:`18`,rx:`2`,ry:`2`},child:[]},{tag:`line`,attr:{x1:`16`,y1:`2`,x2:`16`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`8`,y1:`2`,x2:`8`,y2:`6`},child:[]},{tag:`line`,attr:{x1:`3`,y1:`10`,x2:`21`,y2:`10`},child:[]}]})(e)}function Sn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z`},child:[]},{tag:`polyline`,attr:{points:`3.27 6.96 12 12.01 20.73 6.96`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`22.08`,x2:`12`,y2:`12`},child:[]}]})(e)}function Cn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`path`,attr:{d:`M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9`},child:[]},{tag:`path`,attr:{d:`M13.73 21a2 2 0 0 1-3.46 0`},child:[]}]})(e)}function wn(e){return O({tag:`svg`,attr:{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`},child:[{tag:`line`,attr:{x1:`18`,y1:`20`,x2:`18`,y2:`10`},child:[]},{tag:`line`,attr:{x1:`12`,y1:`20`,x2:`12`,y2:`4`},child:[]},{tag:`line`,attr:{x1:`6`,y1:`20`,x2:`6`,y2:`14`},child:[]}]})(e)}var Tn=({onMenuClick:e})=>(0,y.jsxs)(`header`,{className:`flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:flex-nowrap sm:px-6 sm:py-0`,children:[(0,y.jsxs)(`div`,{className:`flex min-w-0 flex-1 items-center gap-3 text-slate-400`,children:[(0,y.jsx)(`button`,{type:`button`,onClick:e,className:`grid h-9 w-9 place-items-center rounded border border-slate-200 bg-white text-slate-500 lg:hidden`,"aria-label":`Open navigation`,children:(0,y.jsx)(hn,{size:18})}),(0,y.jsx)(fn,{size:18}),(0,y.jsx)(`span`,{className:`hidden truncate text-xs sm:inline`,children:`Search transactions, invoices or help`})]}),(0,y.jsxs)(`div`,{className:`flex shrink-0 items-center gap-3 text-slate-400 sm:gap-6`,children:[(0,y.jsx)(yn,{className:`hidden sm:block`}),(0,y.jsx)(mn,{className:`hidden sm:block`}),(0,y.jsx)(Cn,{}),(0,y.jsx)(`div`,{className:`hidden h-7 w-px bg-slate-200 sm:block`}),(0,y.jsxs)(`div`,{className:`flex items-center gap-3 text-xs text-slate-600`,children:[(0,y.jsx)(`span`,{className:`hidden sm:inline`,children:`John Doe`}),(0,y.jsx)(`img`,{src:`https://i.pravatar.cc/40`,alt:`John Doe`,className:`h-8 w-8 rounded-full`})]})]})]}),En=[{label:`Home`,icon:_n},{label:`Dashboard`,icon:wn},{label:`Inbox`,icon:gn},{label:`Products`,icon:Sn},{label:`Invoices`,icon:bn},{label:`Customers`,icon:un},{label:`Chat Room`,icon:pn},{label:`Calendar`,icon:xn,active:!0},{label:`Help Center`,icon:vn},{label:`Settings`,icon:dn}],Dn=({isOpen:e,onClose:t})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(`div`,{className:r(`fixed inset-0 z-40 bg-slate-950/40 transition-opacity lg:hidden`,e?`opacity-100`:`pointer-events-none opacity-0`),onClick:t,"aria-hidden":`true`}),(0,y.jsxs)(`aside`,{className:r(`fixed inset-y-0 left-0 z-50 flex w-72 max-w-[85vw] shrink-0 flex-col bg-[#43425D] text-white shadow-2xl transition-transform duration-200 lg:static lg:z-auto lg:w-65 lg:max-w-none lg:translate-x-0 lg:shadow-none`,e?`translate-x-0`:`-translate-x-full`),children:[(0,y.jsxs)(`div`,{className:`flex h-16 items-center justify-between px-6 text-[13px] font-bold tracking-[8px] lg:px-8`,children:[(0,y.jsx)(`span`,{children:`IMPEKABLE`}),(0,y.jsx)(`button`,{type:`button`,onClick:t,className:`grid h-8 w-8 place-items-center rounded text-white/75 hover:bg-white/10 hover:text-white lg:hidden`,"aria-label":`Close navigation`,children:(0,y.jsx)(ln,{size:20})})]}),(0,y.jsx)(`nav`,{className:`mt-4 min-h-0 flex-1 overflow-y-auto`,children:En.map(({label:e,icon:n,active:i})=>(0,y.jsxs)(`button`,{type:`button`,onClick:t,className:r(`flex h-14 w-full items-center gap-4 px-8 text-left text-sm text-white/75`,i&&`bg-sidebarActive text-white`),children:[(0,y.jsx)(n,{size:16}),e]},e))})]})]}),On=({children:e})=>{let[t,n]=(0,_.useState)(!1);return(0,y.jsxs)(`div`,{className:`flex h-screen min-w-0 flex-col overflow-hidden bg-[#F0F0F7] lg:flex-row`,children:[(0,y.jsx)(Dn,{isOpen:t,onClose:()=>n(!1)}),(0,y.jsxs)(`div`,{className:`flex min-h-0 min-w-0 flex-1 flex-col`,children:[(0,y.jsx)(Tn,{onMenuClick:()=>n(!0)}),(0,y.jsx)(`main`,{className:`min-h-0 min-w-0 flex-1 overflow-hidden px-4 py-4 sm:px-6 sm:py-6 xl:px-16 xl:py-10`,children:e})]})]})},kn=({children:e})=>(0,y.jsx)(m,{backend:g,children:e});v.createRoot(document.getElementById(`root`)).render((0,y.jsx)(_.StrictMode,{children:(0,y.jsx)(()=>((0,_.useEffect)(()=>{let e=()=>{W({type:`error`,text:`Something went wrong`})},t=()=>{W({type:`error`,text:`Something went wrong`})};return window.addEventListener(`error`,e),window.addEventListener(`unhandledrejection`,t),()=>{window.removeEventListener(`error`,e),window.removeEventListener(`unhandledrejection`,t)}},[]),(0,y.jsxs)(kn,{children:[(0,y.jsx)(On,{children:(0,y.jsx)(sn,{})}),(0,y.jsx)(cn,{})]})),{})}));