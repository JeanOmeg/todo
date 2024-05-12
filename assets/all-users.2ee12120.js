import{T as _,u as w,Q as b,a as p}from"./ToolBar.0797b8c4.js";import{z as v,s as y,o as U,G as $,_ as k,A,B as E,H as I,E as s,D as d,I as B,J as g,L as Q}from"./index.bf12d20e.js";import{Q as T,a as x,b as P}from"./QPullToRefresh.83efdbcb.js";import{api as m}from"./axios.cef7f351.js";import"./QResizeObserver.2a831276.js";import"./QSelect.a066692f.js";function S(t){return{listAllUsers:async o=>{try{const{data:e}=await m.get(t,o);return e}catch(e){throw new Error(e)}},post:async o=>{try{const{data:e}=await m.post(t,o);return e}catch(e){throw new Error(e)}},update:async(o,e)=>{try{const{data:a}=await m.put(`${t}/${e}`,o);return a}catch(a){throw new Error(a)}},remove:async o=>{try{const{data:e}=await m.delete(`${t}/${o}`);return e}catch(e){throw new Error(e)}},getById:async o=>{try{const{data:e}=await m.get(`${t}/${o}`);return e}catch(e){throw new Error(e)}}}}function C(){const{listAllUsers:t,post:i,update:c,remove:u,getById:r}=S("users");return{listAllUsers:t,post:i,update:c,remove:u,getById:r}}var D=v({name:"AllUsers",components:{ToolBar:_},setup(){const t=y([]),{listAllUsers:i,remove:c}=C();U(()=>{localStorage.getItem("logout")===null||localStorage.getItem("logout")==="true"?f.push({name:"notFound"}):localStorage.getItem("admin")==="false"||localStorage.getItem("admin")===null?f.push({name:"notFound"}):a()});const u=[{name:"index",label:"#",field:"index",align:"left",sortable:!0},{name:"online",field:"online",label:"Online",align:"left",sortable:!0},{name:"real_name",field:"real_name",label:"Name",align:"left",sortable:!0},{name:"username",field:"username",label:"Username",align:"left",sortable:!0},{name:"email",field:"email",label:"Email",align:"left",sortable:!0},{name:"phone",field:"phone",label:"Phone",align:"left",sortable:!0},{name:"id",field:"id",label:"User ID",align:"left",sortable:!0},{name:"admin",field:"admin",label:"Admin",align:"left",sortable:!0},{name:"actions",field:"actions",label:"Actions",align:"right"}],r=w(),f=$();let o=[],e=[];const a=async()=>{try{const l=await i();t.value=l,e=t.value,o=[];for(let n=0;n<e.length;n++)o=o.concat(e[n]);o.forEach((n,h)=>{n.index=++h})}catch(l){r.notify({message:"Not logged!",icon:"error",color:"negative"}),console.log(l)}};return{users:t,columns:u,deleteTask:async l=>{try{r.dialog({title:"Delete",message:"Do you want to delete this user?",cancel:!0,persistent:!0}).onOk(async()=>{await c(l)?(r.notify({message:"Deleted",icon:"check",color:"positive"}),a()):r.notify({message:"Error! Impossible to delete your own account",icon:"error",color:"negative"})})}catch{r.notify({message:"Error! Please try again later...",icon:"error",color:"negative"})}},pagination:y({rowsPerPage:0}),refresh(l){setTimeout(()=>{a(),l()},1e3)}}}});const q=D,N={class:"row justify-center items-center content-center col-12"},R={class:"col-8 q-gutter-sm q-col-gutter-sm"},z=g("div",{class:"row justify-center text-bold text-primary",style:{"font-size":"1.5em"}}," All platform users ",-1),F=g("span",{class:"text-h5"},"Users",-1);function j(t,i,c,u,r,f){const o=A("tool-bar");return E(),I(B,null,[s(o),s(b,null,{default:d(()=>[g("div",N,[g("div",R,[s(p),z,s(p),s(T,{onRefresh:t.refresh},{default:d(()=>[s(x,{title:"Users",rows:t.users,columns:t.columns,"row-key":"index",class:"my-sticky-virtscroll-table"},{top:d(()=>[F,s(p)]),"body-cell-actions":d(e=>[s(P,{props:e,class:"q-gutter-sm"},{default:d(()=>[s(Q,{icon:"delete",color:"negative",dense:"",size:"sm",onClick:a=>t.deleteTask(e.row.id)},null,8,["onClick"])]),_:2},1032,["props"])]),_:1},8,["rows","columns"])]),_:1},8,["onRefresh"])])])]),_:1})],64)}var K=k(q,[["render",j]]);export{K as default};
