import{canUseDom as R,useConfigInject as H,useStyle as W,classNames as q,_extends as f,filterEmpty as J,_objectSpread2 as F,Compact as w,PropTypes as I,tuple as j,booleanType as K}from"./index.Wm3-DIXS.js";import{shallowRef as N,onMounted as Q,defineComponent as X,computed as s,ref as B,watch as Y,createVNode as g,Fragment as Z}from"./sutras-console.ChiQzqOZ.js";const ee=()=>R()&&window.document.documentElement,L=e=>{if(R()&&window.document.documentElement){const l=Array.isArray(e)?e:[e],{documentElement:n}=window.document;return l.some(o=>o in n.style)}return!1},te=(e,l)=>{if(!L(e))return!1;const n=document.createElement("div"),o=n.style[e];return n.style[e]=l,n.style[e]!==o};function se(e,l){return!Array.isArray(e)&&l!==void 0?te(e,l):L(e)}let y;const ne=()=>{if(!ee())return!1;if(y!==void 0)return y;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),y=e.scrollHeight===1,document.body.removeChild(e),y},le=()=>{const e=N(!1);return Q(()=>{e.value=ne()}),e},oe={small:8,middle:16,large:24},ae=()=>({prefixCls:String,size:{type:[String,Number,Array]},direction:I.oneOf(j("horizontal","vertical")).def("horizontal"),align:I.oneOf(j("start","end","center","baseline")),wrap:K()});function re(e){return typeof e=="string"?oe[e]:e||0}const u=X({compatConfig:{MODE:3},name:"ASpace",inheritAttrs:!1,props:ae(),slots:Object,setup(e,l){let{slots:n,attrs:o}=l;const{prefixCls:r,space:S,direction:z}=H("space",e),[M,P]=W(r),C=le(),i=s(()=>{var t,a,c;return(c=(t=e.size)!==null&&t!==void 0?t:(a=S==null?void 0:S.value)===null||a===void 0?void 0:a.size)!==null&&c!==void 0?c:"small"}),x=B(),d=B();Y(i,()=>{[x.value,d.value]=(Array.isArray(i.value)?i.value:[i.value,i.value]).map(t=>re(t))},{immediate:!0});const b=s(()=>e.align===void 0&&e.direction==="horizontal"?"center":e.align),T=s(()=>q(r.value,P.value,`${r.value}-${e.direction}`,{[`${r.value}-rtl`]:z.value==="rtl",[`${r.value}-align-${b.value}`]:b.value})),U=s(()=>z.value==="rtl"?"marginLeft":"marginRight"),V=s(()=>{const t={};return C.value&&(t.columnGap=`${x.value}px`,t.rowGap=`${d.value}px`),f(f({},t),e.wrap&&{flexWrap:"wrap",marginBottom:`${-d.value}px`})});return()=>{var t,a;const{wrap:c,direction:k="horizontal"}=e,A=(t=n.default)===null||t===void 0?void 0:t.call(n),E=J(A),G=E.length;if(G===0)return null;const p=(a=n.split)===null||a===void 0?void 0:a.call(n),_=`${r.value}-item`,D=x.value,h=G-1;return g("div",F(F({},o),{},{class:[T.value,o.class],style:[V.value,o.style]}),[E.map((O,m)=>{let $=A.indexOf(O);$===-1&&($=`$$space-${m}`);let v={};return C.value||(k==="vertical"?m<h&&(v={marginBottom:`${D/(p?2:1)}px`}):v=f(f({},m<h&&{[U.value]:`${D/(p?2:1)}px`}),c&&{paddingBottom:`${d.value}px`})),M(g(Z,{key:$},[g("div",{class:_,style:v},[O]),m<h&&p&&g("span",{class:`${_}-split`,style:v},[p])]))})])}}});u.Compact=w;u.install=function(e){return e.component(u.name,u),e.component(w.name,w),e};const ue=u;export{ue as Space,ee as canUseDocElement,se as isStyleSupport,le as useFlexGapSupport};
