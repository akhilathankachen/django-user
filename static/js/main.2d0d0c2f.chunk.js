(this["webpackJsonpuser-management-api"]=this["webpackJsonpuser-management-api"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),s=n.n(c),i=(n(34),n(6)),l=(n(35),n(22)),o=n.n(l),u=n(74),h=n(75),j=n(2),m=function(){return o.a.get("http://3.6.93.159:7883/machstatz/get_all_users").then((function(e){return e.data})).catch((function(e){console.log(e)}))};function d(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(i.a)(c,2),l=s[0],o=s[1],d=Object(a.useState)(""),b=Object(i.a)(d,2),f=b[0],O=b[1],p=Object(a.useState)(""),g=Object(i.a)(p,2),x=g[0],S=g[1],v=Object(a.useState)(""),y=Object(i.a)(v,2),E=y[0],N=y[1],F=Object(a.useState)(""),C=Object(i.a)(F,2),_=C[0],D=C[1],w=Object(a.useState)(""),T=Object(i.a)(w,2),L=T[0],k=T[1];return Object(a.useEffect)((function(){m().then((function(e){r(e)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"headerTop",children:"Fetched Random user Data"}),Object(j.jsx)(h.a,{className:"container-grid",children:n.map((function(e,t){return Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{className:"inside-card",children:Object(j.jsxs)("h4",{children:[e.fist_name,e.firstname," ",e.lastname,e.last_name]})})},t)}))}),Object(j.jsxs)("div",{className:"form-container-block",children:[Object(j.jsxs)("form",{className:"form-container",onSubmit:function(e){e.preventDefault(),fetch("http://3.6.93.159:7883/machstatz/add_new_user",{method:"POST",body:JSON.stringify({email:l,fist_name:f,last_name:x,pwd:E,username:_})}).then((function(e){return e.json()})).then((function(e){return alert(JSON.stringify(e,null,2)),m().then((function(e){r(e)}))})).catch((function(){return alert("There was an error")}))},children:[Object(j.jsx)("h3",{children:"ADD USER"}),Object(j.jsx)("h4",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",value:l,placeholder:"*Enter Email Id",onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("h4",{htmlFor:"fist_name",children:"First Name"}),Object(j.jsx)("input",{name:"fist_name",value:f,placeholder:"*Enter your First Name",onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("h4",{htmlFor:"last_name",children:"Last Name"}),Object(j.jsx)("input",{name:"last_name",value:x,placeholder:"Enter your Last Name",onChange:function(e){return S(e.target.value)}}),Object(j.jsx)("h4",{htmlFor:"pwd",children:"Password"}),Object(j.jsx)("input",{type:"password",name:"pwd",value:E,placeholder:"*Enter Password",onChange:function(e){return N(e.target.value)}}),Object(j.jsx)("h4",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{name:"username",value:_,placeholder:"*Enter your Username",onChange:function(e){return D(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{style:{backgroundColor:"lightseagreen",borderRadius:"5px",marginTop:"15px",marginLeft:"10px",fontSize:"20px",alignSelf:"bottom"},type:"submit",children:"Add User"})]}),Object(j.jsxs)("div",{className:"form-container2",children:[Object(j.jsxs)("form",{className:"delete-form",onSubmit:function(e){e.preventDefault(),fetch("http://3.6.93.159:7883/machstatz/delete_existing_user",{method:"DELETE",body:JSON.stringify({email2:L})}).then((function(e){return e.json()})).then((function(e){var t,a=!1,c=n;for(var s in c)if(c[s].email===L){a=!0,t=s;break}if(a)return m().then((function(e){e.splice(t,1),r(e);alert(JSON.stringify({status:"Deleted",message:"User deleted successfully."},null,2))}));alert(JSON.stringify(e,null,2)),m().then((function(e){r(e)}))})).catch((function(){return alert("There was an error")}))},children:[Object(j.jsx)("h3",{children:"DELETE USER"}),Object(j.jsx)("h4",{htmlFor:"email2",children:"Email"}),Object(j.jsx)("input",{name:"email2",value:L,placeholder:"*Enter Email",onChange:function(e){return k(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{style:{backgroundColor:"lightseagreen",borderRadius:"5px",marginTop:"15px",marginLeft:"10px",fontSize:"20px",alignSelf:"bottom"},type:"submit",children:"Delete User"})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){m().then((function(e){r(e),alert("Data Fetched Successfully")}))},style:{backgroundColor:"lightseagreen",borderRadius:"5px",marginLeft:"170px",fontSize:"20px",alignSelf:"bottom",padding:"10px",justifyContent:"center"},children:"Reload Fetched Data"})]})]})]})}var b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),b()}},[[60,1,2]]]);
//# sourceMappingURL=main.2d0d0c2f.chunk.js.map