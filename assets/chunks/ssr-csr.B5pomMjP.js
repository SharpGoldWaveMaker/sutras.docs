import{Button as l,Space as s}from"./theme.BrU0nTMZ.js";import{defineComponent as d,ref as a,onMounted as f,openBlock as c,createBlock as i,withCtx as t,unref as n,createTextVNode as u,createCommentVNode as m,createVNode as _,toDisplayString as p}from"./framework.BssAmy7X.js";const B=d({__name:"ssr-csr",setup(v){const e=a(!1),o=a(0);return f(()=>{e.value=!0}),(k,r)=>(c(),i(n(s),{direction:"vertical"},{default:t(()=>[e.value?(c(),i(n(l),{key:0,type:"primary"},{default:t(()=>[u("Client Only Button")]),_:1})):m("",!0),_(n(l),{onClick:r[0]||(r[0]=y=>o.value++)},{default:t(()=>[u(p(e.value?"Click Me：":"@click will not trigger in SSR mode：")+" "+p(o.value),1)]),_:1})]),_:1}))}});export{B as default};
