import{Button as l}from"./index.Wm3-DIXS.js";import{defineComponent as p,ref as i,onMounted as f,openBlock as a,createBlock as u,withCtx as t,unref as o,createTextVNode as c,createCommentVNode as d,createVNode as s,toDisplayString as m}from"./sutras-console.ChiQzqOZ.js";import{Space as _}from"./index.BNIjS1Zi.js";import"./isEmpty.CQGcBQbh.js";import"./isArrayLike.wUN9Li_a.js";const N=p({__name:"ssr-csr-default",setup(v){const e=i(!1),r=i(0);return f(()=>{e.value=!0}),(k,n)=>(a(),u(o(_),{direction:"vertical"},{default:t(()=>[e.value?(a(),u(o(l),{key:0,type:"primary"},{default:t(()=>[c("Client Only Button")]),_:1})):d("",!0),s(o(l),{onClick:n[0]||(n[0]=y=>r.value++)},{default:t(()=>[c(m(e.value?"Click Me：":"@click will not trigger in SSR mode：")+" "+m(r.value),1)]),_:1})]),_:1}))}});export{N as default};
