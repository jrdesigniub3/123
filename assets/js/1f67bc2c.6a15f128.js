"use strict";(self.webpackChunkdocs_v_3=self.webpackChunkdocs_v_3||[]).push([[1087],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>m});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var p=a.createContext({}),c=function(e){var t=a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=c(l),m=n,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||r;return l?a.createElement(f,i(i({ref:t},d),{},{components:l})):a.createElement(f,i({ref:t},d))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<r;c++)i[c]=l[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}s.displayName="MDXCreateElement"},488:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=l(7462),n=(l(7294),l(3905));const r={id:"api_model_call.Call",title:"Interface: Call",sidebar_label:"Call",custom_edit_url:null},i=void 0,o={unversionedId:"api/interfaces/api_model_call.Call",id:"api/interfaces/api_model_call.Call",title:"Interface: Call",description:"api/model/call.Call",source:"@site/docs/api/interfaces/api_model_call.Call.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/api_model_call.Call",permalink:"/docs/api/interfaces/api_model_call.Call",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"api_model_call.Call",title:"Interface: Call",sidebar_label:"Call",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Section",permalink:"/docs/api/interfaces/api_model_button.Section"},next:{title:"BaseChat",permalink:"/docs/api/interfaces/api_model_chat.BaseChat"}},p={},c=[{value:"Properties",id:"properties",level:2},{value:"canHandleLocally",id:"canhandlelocally",level:3},{value:"id",id:"id",level:3},{value:"isGroup",id:"isgroup",level:3},{value:"isVideo",id:"isvideo",level:3},{value:"offerTime",id:"offertime",level:3},{value:"outgoing",id:"outgoing",level:3},{value:"participants",id:"participants",level:3},{value:"peerJid",id:"peerjid",level:3},{value:"webClientShouldHandle",id:"webclientshouldhandle",level:3}],d={toc:c};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/api/modules/api_model_call"},"api/model/call"),".Call"),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"canhandlelocally"},"canHandleLocally"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"canHandleLocally"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"id"},"id"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"id"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"The id of the call"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"isgroup"},"isGroup"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"isGroup"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Whether or not the call is a group call"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"isvideo"},"isVideo"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"isVideo"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Whether or not the call is a video call"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"offertime"},"offerTime"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"offerTime"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The epoch timestamp of the call. You will have to multiply this by 1000 to get the actual epoch timestamp"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"outgoing"},"outgoing"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"outgoing"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"The direction of the call."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"participants"},"participants"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"participants"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/types/api_model_aliases.ContactId"},(0,n.kt)("inlineCode",{parentName:"a"},"ContactId")),"[]"),(0,n.kt)("p",null,"The other participants on a group call"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"peerjid"},"peerJid"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"peerJid"),": ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/types/api_model_aliases.ContactId"},(0,n.kt)("inlineCode",{parentName:"a"},"ContactId"))),(0,n.kt)("p",null,"The id of the account calling"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"webclientshouldhandle"},"webClientShouldHandle"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"webClientShouldHandle"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")))}u.isMDXComponent=!0}}]);