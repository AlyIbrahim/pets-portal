import{S,i as q,s as K,l as m,r as E,a as z,e as A,m as p,n as v,u as T,h as _,c as w,b as g,K as b,E as j,p as y,Z as O,v as P,R as N,_ as Z}from"./index-1d289f89.js";function C(h,e,n){const s=h.slice();return s[3]=e[n],s}function H(h,e,n){const s=h.slice();return s[6]=e[n],s}function R(h,e,n){const s=h.slice();return s[9]=e[n],s}function F(h){let e,n,s,f,r,i=Object.keys(h[0][0]),l=[];for(let o=0;o<i.length;o+=1)l[o]=Y(R(h,i,o));let a=Object.values(h[0]),t=[];for(let o=0;o<a.length;o+=1)t[o]=L(C(h,a,o));return{c(){e=m("table"),n=m("thead"),s=m("tr");for(let o=0;o<l.length;o+=1)l[o].c();f=z(),r=m("tbody");for(let o=0;o<t.length;o+=1)t[o].c();this.h()},l(o){e=p(o,"TABLE",{class:!0});var u=v(e);n=p(u,"THEAD",{});var c=v(n);s=p(c,"TR",{class:!0});var d=v(s);for(let k=0;k<l.length;k+=1)l[k].l(d);d.forEach(_),c.forEach(_),f=w(u),r=p(u,"TBODY",{});var D=v(r);for(let k=0;k<t.length;k+=1)t[k].l(D);D.forEach(_),u.forEach(_),this.h()},h(){y(s,"class","svelte-16z256w"),y(e,"class","svelte-16z256w")},m(o,u){g(o,e,u),b(e,n),b(n,s);for(let c=0;c<l.length;c+=1)l[c].m(s,null);b(e,f),b(e,r);for(let c=0;c<t.length;c+=1)t[c].m(r,null)},p(o,u){if(u&1){i=Object.keys(o[0][0]);let c;for(c=0;c<i.length;c+=1){const d=R(o,i,c);l[c]?l[c].p(d,u):(l[c]=Y(d),l[c].c(),l[c].m(s,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=i.length}if(u&3){a=Object.values(o[0]);let c;for(c=0;c<a.length;c+=1){const d=C(o,a,c);t[c]?t[c].p(d,u):(t[c]=L(d),t[c].c(),t[c].m(r,null))}for(;c<t.length;c+=1)t[c].d(1);t.length=a.length}},d(o){o&&_(e),O(l,o),O(t,o)}}}function G(h){let e;return{c(){e=E("You have no animals")},l(n){e=T(n,"You have no animals")},m(n,s){g(n,e,s)},p:j,d(n){n&&_(e)}}}function Y(h){let e,n=h[9]+"",s;return{c(){e=m("th"),s=E(n),this.h()},l(f){e=p(f,"TH",{class:!0});var r=v(e);s=T(r,n),r.forEach(_),this.h()},h(){y(e,"class","svelte-16z256w")},m(f,r){g(f,e,r),b(e,s)},p(f,r){r&1&&n!==(n=f[9]+"")&&P(s,n)},d(f){f&&_(e)}}}function B(h){let e,n=h[6]+"",s;return{c(){e=m("td"),s=E(n),this.h()},l(f){e=p(f,"TD",{class:!0});var r=v(e);s=T(r,n),r.forEach(_),this.h()},h(){y(e,"class","svelte-16z256w")},m(f,r){g(f,e,r),b(e,s)},p(f,r){r&1&&n!==(n=f[6]+"")&&P(s,n)},d(f){f&&_(e)}}}function L(h){let e,n,s,f,r=Object.values(h[3]),i=[];for(let l=0;l<r.length;l+=1)i[l]=B(H(h,r,l));return{c(){e=m("tr");for(let l=0;l<i.length;l+=1)i[l].c();n=z(),this.h()},l(l){e=p(l,"TR",{class:!0});var a=v(e);for(let t=0;t<i.length;t+=1)i[t].l(a);n=w(a),a.forEach(_),this.h()},h(){y(e,"class","svelte-16z256w")},m(l,a){g(l,e,a);for(let t=0;t<i.length;t+=1)i[t].m(e,null);b(e,n),s||(f=N(e,"click",function(){Z(h[1](h[3]))&&h[1](h[3]).apply(this,arguments)}),s=!0)},p(l,a){if(h=l,a&1){r=Object.values(h[3]);let t;for(t=0;t<r.length;t+=1){const o=H(h,r,t);i[t]?i[t].p(o,a):(i[t]=B(o),i[t].c(),i[t].m(e,n))}for(;t<i.length;t+=1)i[t].d(1);i.length=r.length}},d(l){l&&_(e),O(i,l),s=!1,f()}}}function I(h){let e,n,s,f;function r(a,t){return a[0].length==0?G:F}let i=r(h),l=i(h);return{c(){e=m("h1"),n=E("Pets"),s=z(),l.c(),f=A()},l(a){e=p(a,"H1",{});var t=v(e);n=T(t,"Pets"),t.forEach(_),s=w(a),l.l(a),f=A()},m(a,t){g(a,e,t),b(e,n),g(a,s,t),l.m(a,t),g(a,f,t)},p(a,[t]){i===(i=r(a))&&l?l.p(a,t):(l.d(1),l=i(a),l&&(l.c(),l.m(f.parentNode,f)))},i:j,o:j,d(a){a&&_(e),a&&_(s),l.d(a),a&&_(f)}}}function J(h,e,n){let{animals:s}=e;const f="http://localhost:8080/";async function r(i){!confirm("Are you sure you want to delete the animal: "+i.name+"?")||fetch(f+"animals/"+i.id,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(l=>{n(0,s=s.filter(a=>a.id!=i.id))})}return h.$$set=i=>{"animals"in i&&n(0,s=i.animals)},[s,r]}class Q extends S{constructor(e){super(),q(this,e,J,I,K,{animals:0})}}export{Q as T};