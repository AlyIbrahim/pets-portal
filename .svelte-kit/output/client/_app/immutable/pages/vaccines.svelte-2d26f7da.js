import{S as h,i as d,s as b,W as k,e as i,b as l,X as $,f as u,t as f,h as s,r as m,u as p,E as r,w as g,x as v,y as w,B as x}from"../chunks/index-1d289f89.js";import{T as y}from"../chunks/Table-c6f2a576.js";function C(a){let e;return{c(){e=m("Couldn't fetch data ..")},l(n){e=p(n,"Couldn't fetch data ..")},m(n,t){l(n,e,t)},p:r,i:r,o:r,d(n){n&&s(e)}}}function F(a){let e,n;return e=new y({props:{animals:a[2].Items}}),{c(){g(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,o){w(e,t,o),n=!0},p:r,i(t){n||(u(e.$$.fragment,t),n=!0)},o(t){f(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function S(a){let e;return{c(){e=m("Fetching ...")},l(n){e=p(n,"Fetching ...")},m(n,t){l(n,e,t)},p:r,i:r,o:r,d(n){n&&s(e)}}}function T(a){let e,n,t={ctx:a,current:null,token:null,hasCatch:!0,pending:S,then:F,catch:C,value:2,error:3,blocks:[,,,]};return k(a[0],t),{c(){e=i(),t.block.c()},l(o){e=i(),t.block.l(o)},m(o,c){l(o,e,c),t.block.m(o,t.anchor=c),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(o,[c]){a=o,$(t,a,c)},i(o){n||(u(t.block),n=!0)},o(o){for(let c=0;c<3;c+=1){const _=t.blocks[c];f(_)}n=!1},d(o){o&&s(e),t.block.d(o),t.token=null,t=null}}}function j(a){return[fetch("http://localhost:8080/").then(t=>t.json())]}class E extends h{constructor(e){super(),d(this,e,j,T,b,{})}}export{E as default};