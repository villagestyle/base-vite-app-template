import{B as t}from"./vant-e63f2ea5.js";import{defineComponent as o,openBlock as a,createElementBlock as e,Fragment as n,createVNode as r,withCtx as s,createTextVNode as i,pushScopeId as c,popScopeId as f,createElementVNode as p}from"vue";import{V as d}from"./@foxit-cf0983ac.js";import"./@vant-e545a638.js";import"axios";const m=new d({vConfig:{showLoading:!0}});const u=(t,o)=>{const a=t.__vccOpts||t;for(const[e,n]of o)a[e]=n;return a},l=(t=>(c("data-v-bca68100"),t=t(),f(),t))((()=>p("h1",null,"demo",-1))),v=i("主要按钮"),_=u(o({__name:"index",setup(o){var i;return(i={showLoading:!0},m.vRequest({url:"https://webapi.foxitcloud.cn/v1/friendly/link/list",method:"GET",...i})).then((t=>{})),(o,i)=>{const c=t;return a(),e(n,null,[l,r(c,{type:"primary"},{default:s((()=>[v])),_:1})],64)}}}),[["__scopeId","data-v-bca68100"]]);export{_ as default};