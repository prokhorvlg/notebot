(this.webpackJsonpnotebot=this.webpackJsonpnotebot||[]).push([[0],{47:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(39),r=n.n(a),i=(n(47),n(10)),s=n.n(i),l=n(13),d=n(5),u=n(7),f=n(8),j=n(25),b=function(e){return e.length>0?parseInt(e[e.length-1].id)+1:0},g=function(e,t){return t.find((function(t){return t.id===e}))},h=function(e,t){return t.map((function(e){return e.id})).indexOf(e)},m=n(2),O=function(e){var t=e.selectCategory,n=e.selectedCategory,o=e.setActiveScreen;return Object(m.jsxs)("li",{children:[Object(m.jsx)("button",{id:"category-all",className:"category-button category-all "+(-1===n?"selected":""),onClick:function(e){var n=window.matchMedia("screen and (max-width: 1024px)").matches;e.preventDefault(),t(-1),n||o(1)},children:"All Notes"}),Object(m.jsx)("button",{className:"mobile-category-open",onClick:function(e){return function(e){e.preventDefault(),t(-1),o(1)}(e)},children:Object(m.jsx)(u.a,{icon:f.b})})]})},p=function(e){var t=e.category,n=e.changeCategory,c=e.deleteCategory,a=e.selectCategory,r=e.selectedCategory,i=e.categorySetMode,s=e.setCategorySetMode,l=e.changeNote,d=e.selectedNote,j=e.setActiveScreen,b=Object(o.useRef)(null);Object(o.useEffect)((function(){t.editMode&&b.current.focus()}),[t.editMode]);return t.editMode?Object(m.jsx)("li",{className:"category-item edit-mode"+(r===t.id?"selected":""),children:Object(m.jsx)("input",{id:"category-"+t.id,ref:b,placeholder:"Enter a category title.",className:"feature-input",onInput:function(e){return function(e){n(t.id,{name:e.target.value})}(e)},onKeyDown:function(e){return function(e){"Enter"===e.key&&e.target.blur()}(e)},onBlur:function(e){return function(e){""===e.target.value?c(t.id):(n(t.id,{name:e.target.value,editMode:!1}),a(t.id))}(e)},value:t.name,style:{borderColor:t.color}})}):Object(m.jsxs)("li",{className:"category-item link-mode "+(!0===i?"category-set-mode":""),children:[Object(m.jsx)("button",{id:"category-"+t.id,ref:b,className:"category-button "+(r===t.id?"selected":""),style:{color:t.color,borderColor:t.color,backgroundColor:t.color},onClick:function(e){return function(e){var n=window.matchMedia("screen and (max-width: 1024px)").matches;i?(l(d,{category:t.id}),s(!1),a(t.id),n||j(1)):(a(t.id),n||j(1))}()},children:t.name}),Object(m.jsx)("button",{className:"mobile-category-open",onClick:function(e){i?(l(d,{category:t.id}),s(!1),a(t.id),j(1)):(a(t.id),j(1))},style:{color:t.color,borderColor:t.color},children:Object(m.jsx)(u.a,{icon:f.b})})]})},y=function(e){var t=e.categories,n=e.changeCategory,o=e.deleteCategory,c=e.selectCategory,a=e.selectedCategory,r=e.changeNote,i=e.selectedNote,s=e.categorySetMode,l=e.setCategorySetMode,d=e.setActiveScreen;return t?t.map((function(e,t){return Object(m.jsx)(p,{category:e,changeCategory:n,deleteCategory:o,selectCategory:c,selectedCategory:a,categorySetMode:s,setCategorySetMode:l,changeNote:r,selectedNote:i,setActiveScreen:d})})):null},x=(n(54),n(41)),v=n(76),C=n(40),N=n.n(C),w=function(e){var t=e.editColorMode,n=e.setEditColorMode,c=e.selectedCategory,a=e.selectedCategoryColor,r=(e.setSelectedCategoryColor,e.changeCategory),i=Object(o.useState)(a),s=Object(d.a)(i,2),l=s[0],u=s[1],f=Object(v.a)((function(e){-1!==c&&(u(e),r(c,{color:e}))}),200);Object(o.useEffect)((function(){-1!==c&&u(a)}),[a]);return Object(m.jsx)(N.a,{onOutsideClick:function(e){n(!1)},children:Object(m.jsx)("div",{className:"category-colorPicker "+(!0===t?"showing":"not-showing"),children:Object(m.jsx)(x.a,{color:l,onChange:function(e){return f(e)}})})})},k=function(e){var t=e.selectedCategory,n=e.selectedCategoryColor,o=e.changeCategory,c=e.deleteCategory,a=e.editColorMode,r=e.setEditColorMode;return Object(m.jsxs)("div",{style:{borderColor:n},className:"main-categories-controls "+(-1!==t?"showing":"not-showing"),children:[Object(m.jsxs)("button",{onClick:function(e){-1!==t&&o(t,{editMode:!0})},children:[Object(m.jsx)(u.a,{icon:f.c,color:n,className:"fa-link-icon",fixedWidth:!0}),Object(m.jsx)("span",{children:"Edit title"})]}),Object(m.jsxs)("button",{onClick:function(e){-1!==t&&(o(t,{editMode:!1}),r(!0!==a))},children:[Object(m.jsx)(u.a,{icon:f.e,color:n,className:"fa-link-icon",fixedWidth:!0}),Object(m.jsx)("span",{children:"Edit color"})]}),Object(m.jsxs)("button",{onClick:function(e){-1!==t&&c(t)},children:[Object(m.jsx)(u.a,{icon:f.h,color:n,className:"fa-link-icon",fixedWidth:!0}),Object(m.jsx)("span",{children:"Delete category"})]})]})},S=function(e){var t=e.note,n=e.changeNote,c=e.deleteNote,a=e.selectNote,r=e.selectedNote,i=e.categories,s=e.setActiveScreen,l=Object(o.useRef)(null);Object(o.useEffect)((function(){t.editMode&&l.current.focus()}),[t.editMode]),Object(o.useEffect)((function(){r&&r===t.id&&n(t.id,{modified:(new Date).toLocaleString()})}),[t.contents,t.title]);return t.editMode?Object(m.jsx)("li",{className:"category-item edit-mode "+(r===t.id?"selected":""),children:Object(m.jsx)("input",{id:"note-"+t.id,ref:l,placeholder:"Enter a note title.",className:"feature-input",onInput:function(e){return function(e){n(t.id,{title:e.target.value})}(e)},onKeyDown:function(e){return function(e){"Enter"===e.key&&e.target.blur()}(e)},onBlur:function(e){return function(e){""===e.target.value?c(t.id):(n(t.id,{title:e.target.value,editMode:!1}),a(t.id))}(e)},value:t.title,style:{borderColor:t.color}})}):t.visible?Object(m.jsx)("li",{className:"note-title link-mode "+(r===t.id?"selected":""),children:Object(m.jsxs)("button",{onClick:function(e){return a(t.id),void s(2)},children:[Object(m.jsx)("div",{className:"note-title-color",style:{backgroundColor:g(t.category,i).color}}),Object(m.jsxs)("div",{className:"note-title-box",children:[Object(m.jsx)("h2",{children:t.title}),Object(m.jsx)("p",{children:Object(m.jsx)(j.a,{date:t.modified,formatter:function(e,t,n){if("second"===t)return"just now";var o=1!==e?"s":"";return"".concat(e," ").concat(t).concat(o," ").concat(n)}})})]})]})}):null},M=function(e){var t=e.notes,n=e.changeNote,o=e.deleteNote,c=e.selectNote,a=e.selectedNote,r=e.categories,i=e.setActiveScreen;return[].concat(t).sort((function(e,t){return new Date(t.modified)-new Date(e.modified)})).map((function(e,t){return Object(m.jsx)(S,{note:e,changeNote:n,deleteNote:o,selectNote:c,selectedNote:a,categories:r,setActiveScreen:i})}))},E=n(42),I=function(e){var t=e.selectedNote,n=e.notes,o=e.changeNote;return null!==t?Object(m.jsx)(E.a,{value:g(t,n).contents,apiKey:"nacx0iqah4xpy7tb8prkc3hy42bdva4exnbaurkyumhwg0f2",init:{menubar:!1,plugins:["advlist autolink lists link image","charmap print preview anchor help","searchreplace visualblocks code","insertdatetime media table paste wordcount"],toolbar:"undo redo | formatselect | bold italic |             alignleft aligncenter alignright |             bullist numlist outdent indent | help",forced_root_block_attrs:{class:"editor-font",style:"font-family: Inter;"}},onEditorChange:function(e,n){o(t,{contents:e}),console.log(e)}}):null},L=[{id:0,name:"Personal",color:"#00ff84",editMode:!1},{id:1,name:"Work",color:"#ffb322",editMode:!1},{id:2,name:"Miscellaneous",color:"#16ecff",editMode:!1}],D=[{id:0,title:"Welcome!",category:0,modified:new Date("January 30, 2021 06:15:30").toLocaleString(),contents:'<h2 class="editor-font" style="font-family: Inter;">Hey there, visitor!</h2>\n<p class="editor-font" style="font-family: Inter;">This is a demo for a simple React note-taking application.</p>\n<p class="editor-font" style="font-family: Inter;">The demo is not intended for serious use. <strong>Your changes will not persist.</strong></p>\n<p class="editor-font" style="font-family: Inter;">Created with love by <span style="text-decoration: underline;">@prokhorvlg (Valentin Sigalov)</span>!</p>',editMode:!1,visible:!0},{id:1,title:"Area 51 vacation plans",category:0,modified:new Date("June 26, 2021 12:15:30").toLocaleString(),contents:'<p class="editor-font" style="font-family: Inter;">Contents of a note.</p>',editMode:!1,visible:!0},{id:2,title:"Funniest joke ever",category:0,modified:new Date("June 29, 2021 23:15:30").toLocaleString(),contents:'<p class="editor-font" style="font-family: Inter;">Contents of a note.</p>',editMode:!1,visible:!0},{id:3,title:"Lol tech specs",category:1,modified:new Date("July 3, 2021 09:15:30").toLocaleString(),contents:'<p class="editor-font" style="font-family: Inter;">Contents of a note.</p>',editMode:!1,visible:!0},{id:4,title:"Cats on the moon",category:2,modified:new Date("July 4, 2021 05:15:30").toLocaleString(),contents:'<p class="editor-font" style="font-family: Inter;">Contents of a note.</p>',editMode:!1,visible:!0}],A=n(11),B=function(e,t,n){var a=Object(o.useState)(-1),r=Object(d.a)(a,2),i=r[0],s=r[1],l=Object(o.useState)([]),u=Object(d.a)(l,2),f=u[0],j=u[1],m=Object(o.useState)("#ffffff"),O=Object(d.a)(m,2),p=O[0],y=O[1];c.a.useEffect((function(){-1!==i&&y(g(i,f).color)}),[i].concat(Object(A.a)(f.map((function(e){return e.color})))));var x=function(){var e={id:b(f),name:"",color:function(){var e=["#91aaff","#ff9e9e","#ff80c5","#7afbff","#8aff9c"];return e[Math.floor(Math.random()*e.length)]}(),editMode:!0};j((function(t){return[].concat(Object(A.a)(t),[e])}))},v=function(e,t){var n=g(e,f),o=Object.assign(n,t),c=Object(A.a)(f);c[h(e,f)]=o,j(c)};return c.a.useEffect((function(){f&&f.length&&t(f,"categories",v)}),[f]),[i,s,f,j,p,y,function(){x()},v,function(e){s(e)},function(t){if(1!==f.length){var o=Object(A.a)(f),c=h(t,f);o.splice(c,1),j(o),s(-1),n(t,"categories"),e(t)}}]},J=function(e,t,n,a){var r=Object(o.useState)(null),i=Object(d.a)(r,2),s=i[0],l=i[1],u=Object(o.useState)([]),f=Object(d.a)(u,2),j=f[0],m=f[1],O=function(){var n=b(j),o={id:n,title:"",category:-1!==t?t:e[0].id,modified:(new Date).toLocaleString(),contents:"",selected:!1,editMode:!0,visible:!0};return m((function(e){return[].concat(Object(A.a)(e),[o])})),n},p=function(e,t){var n=g(e,j),o=Object.assign(n,t),c=Object(A.a)(j);c[h(e,j)]=o,m(c)};return c.a.useEffect((function(){n(j,"notes",p)}),[j]),[s,l,j,m,function(){O()},p,function(e){l(e)},function(e){var t=Object(A.a)(j),n=h(e,j);t.splice(n,1),m(t),l(null),a(e,"notes")}]},R=n(23),W=n(30);n(73);W.a.initializeApp({apiKey:"AIzaSyDdCjbP7lQVb7--7uraYnkEdLGjWTmWckE",authDomain:"notebot-42.firebaseapp.com",databaseURL:"https://notebot-42.firebaseio.com",projectId:"notebot-42",storageBucket:"notebot-42.appspot.com",messagingSenderId:"884273569921",appId:"1:884273569921:web:e56bf1258d353e4ae02d80",measurementId:"G-7B4K7B82XL"});var F=W.a,P=function(){var e=Object(o.useState)(""),t=Object(d.a)(e,2),n=t[0],c=t[1],a=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=i())||""===t||!u){e.next=6;break}return c(t),e.abrupt("return",[t,!0]);case 6:return e.abrupt("return",f().then((function(e){return c(e),r(e),[e,!1]})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(e){!function(e,t){e=encodeURIComponent(e),t=encodeURIComponent(t);var n=window.location.search.substr(1).split("&");if(""===n[0]){var o=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+e+"="+t;window.history.pushState({path:o},"",o)}else{for(var c,a=n.length;a--;)if((c=n[a].split("="))[0]===e){c[1]=t,n[a]=c.join("=");break}a<0&&(n[n.length]=[e,t].join("="));var r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+n.join("&");window.history.pushState({path:r},"",r)}}("user",e)},i=function(){return new URLSearchParams(window.location.search).get("user")},u=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F.firestore().collection("users").doc(t.toString()).get().then((function(e){return e.exists})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",F.firestore().collection("users").add({categories:[],notes:[]}).then((function(e){return e.id})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return[n,a,function(e,t,o){if(n&&e){var c=F.firestore().collection("users").doc(n);e.forEach((function(e){c.collection(t).doc(e.id.toString()).set(e,{merge:!0})}))}},function(e,t){n&&F.firestore().collection("users").doc(n).collection(t).doc(e.toString()).delete()},function(){var e=Object(l.a)(s.a.mark((function e(t,n){var o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return o=F.firestore().collection("users").doc(t),e.abrupt("return",o.collection(n).get().then((function(e){var t=[];return e.docs.forEach((function(e){t=[].concat(Object(A.a)(t),[e.data()])})),t})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),function(e){if(n){var t=F.firestore().collection("users").doc(n);e.forEach((function(e){t.update(Object(R.a)({},e.key,e.value))}))}},function(){var e=Object(l.a)(s.a.mark((function e(t,n){var o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return o=F.firestore().collection("users").doc(t),e.next=4,o.get().then((function(e){var t=[];return n.forEach((function(n){t=[].concat(Object(A.a)(t),[e.data()[n]])})),t}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()]},K=n.p+"static/media/notebot-logo-nobg.491baec0.png",T=function(){var e=Object(o.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=P(),i=Object(d.a)(r,7),b=i[0],h=i[1],p=i[2],x=i[3],v=i[4],C=i[5],N=i[6],S=B((function(e){ae.forEach((function(t){t.category===e&&de(t.id)}))}),p,x),E=Object(d.a)(S,10),A=E[0],R=E[1],W=E[2],F=E[3],T=E[4],U=E[5],_=E[6],z=E[7],G=E[8],V=E[9],Y=Object(o.useState)(!1),q=Object(d.a)(Y,2),H=q[0],Q=q[1],X=Object(o.useState)(!1),Z=Object(d.a)(X,2),$=Z[0],ee=Z[1],te=J(W,A,p,x),ne=Object(d.a)(te,8),oe=ne[0],ce=ne[1],ae=ne[2],re=ne[3],ie=ne[4],se=ne[5],le=ne[6],de=ne[7],ue=Object(o.useState)(""),fe=Object(d.a)(ue,2),je=fe[0],be=fe[1];c.a.useEffect((function(){n&&ae.forEach((function(e){var t=e.category===A||-1===A,n=e.title.toLowerCase().includes(je.toLowerCase())||e.contents.toLowerCase().includes(je.toLowerCase())||""===je;se(e.id,t&&n?{visible:!0}:{visible:!1})}))}),[b,je,A]);var ge=Object(o.useState)(0),he=Object(d.a)(ge,2),me=he[0],Oe=he[1];c.a.useEffect((function(){function e(){return(e=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h().then(function(){var e=Object(l.a)(s.a.mark((function e(t){var n,o,c,a,r,i,l,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(d.a)(t,2),o=n[0],!n[1]){e.next=27;break}return e.t0=F,e.next=5,v(o,"categories");case 5:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=re,e.next=10,v(o,"notes");case 10:return e.t3=e.sent,(0,e.t2)(e.t3),e.next=14,N(o,["searchString","selectedCategory","selectedNote","activeScreen"]);case 14:c=e.sent,a=Object(d.a)(c,4),r=a[0],i=a[1],l=a[2],u=a[3],be(r||""),R(i||0===i?i:-1),ce(l||0===i?l:null),Oe(u||0),console.log(r,i,l,u),e.next=29;break;case 27:F(L),re(D);case 29:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(){a(!0)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.useEffect((function(){n&&C([{key:"searchString",value:je},{key:"selectedCategory",value:A},{key:"selectedNote",value:oe},{key:"activeScreen",value:me}])}),[je,A,oe,me]);var pe=null!==oe?g(g(oe,ae).category,W).color:"white",ye=null!==A&&-1!==A?g(A,W).color:"white";return Object(m.jsxs)("div",{className:"app-container",children:[Object(m.jsx)("div",{className:"loading-screen "+(n?"hideLoadingScreen":"showLoadingScreen"),children:Object(m.jsxs)("div",{className:"main-logo",children:[Object(m.jsx)("div",{className:"box-logo",children:Object(m.jsx)("img",{src:K,alt:"notebotLogo"})}),Object(m.jsx)("h1",{children:"loading..."})]})}),n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"categories-list-column "+(0===me?"selected showing-mobile":"not-showing-mobile"),children:[Object(m.jsxs)("div",{className:"main-logo",children:[Object(m.jsx)("div",{className:"box-logo",children:Object(m.jsx)("img",{src:K,alt:"notebotLogo"})}),Object(m.jsx)("h1",{children:"Notebot"})]}),Object(m.jsxs)("div",{className:"main-categories",children:[Object(m.jsxs)("ul",{className:"main-categories-list",children:[Object(m.jsx)(O,{selectCategory:G,selectedCategory:A,setActiveScreen:Oe}),Object(m.jsx)(y,{categories:W,changeCategory:z,deleteCategory:V,selectCategory:G,selectedCategory:A,changeNote:se,selectedNote:oe,categorySetMode:H,setCategorySetMode:Q,setActiveScreen:Oe})]}),Object(m.jsx)(w,{editColorMode:$,setEditColorMode:ee,selectedCategory:A,selectedCategoryColor:T,setSelectedCategoryColor:U,changeCategory:z}),Object(m.jsx)(k,{selectedCategory:A,selectedCategoryColor:T,changeCategory:z,deleteCategory:V,editColorMode:$,setEditColorMode:ee}),Object(m.jsx)("div",{className:"main-categories-add",children:Object(m.jsxs)("button",{onClick:_,className:"feature-link",children:[Object(m.jsx)(u.a,{icon:f.f,className:"fa-link-icon"}),Object(m.jsx)("span",{children:"Add category"})]})})]})]}),Object(m.jsxs)("div",{className:"notes-list-column "+(1===me?"selected showing-mobile":"not-showing-mobile"),children:[Object(m.jsxs)("div",{className:"list-search-box",children:[Object(m.jsx)("button",{className:"feature-return",onClick:function(){Oe(0)},style:{borderColor:ye,color:ye},children:Object(m.jsx)(u.a,{icon:f.a})}),Object(m.jsxs)("div",{className:"list-search-container",children:[Object(m.jsx)("h2",{children:"Search your notes"}),Object(m.jsxs)("div",{className:"list-search-input-container",children:[Object(m.jsx)("input",{className:"feature-input",onInput:function(e){return function(e){be(e.target.value)}(e)},style:{borderColor:ye}}),Object(m.jsx)("div",{className:"list-search-icon",children:Object(m.jsx)(u.a,{icon:f.g})})]})]})]}),Object(m.jsx)("ul",{children:Object(m.jsx)(M,{notes:ae,changeNote:se,deleteNote:de,selectNote:le,selectedNote:oe,categories:W,setActiveScreen:Oe})}),Object(m.jsx)("div",{className:"list-notes-add",children:Object(m.jsxs)("button",{onClick:ie,className:"feature-link",children:[Object(m.jsx)(u.a,{icon:f.f,className:"fa-link-icon"}),Object(m.jsx)("span",{children:"Add note"})]})})]}),Object(m.jsxs)("div",{className:"note-input-column "+(2===me?"selected showing-mobile":"not-showing-mobile"),children:[Object(m.jsxs)("div",{className:"note-title-bar",children:[Object(m.jsx)("button",{className:"feature-return",onClick:function(){Oe(1)},style:{borderColor:pe,color:pe},children:Object(m.jsx)(u.a,{icon:f.a})}),Object(m.jsxs)("div",{className:"note-title-bar-container",children:[Object(m.jsx)("div",{className:"note-title-icon",style:{backgroundColor:pe}}),Object(m.jsxs)("div",{className:"note-title-text",children:[Object(m.jsx)("h3",{children:null!==oe?g(oe,ae).title:"Select a note"}),null!==oe?Object(m.jsxs)("p",{children:[" edited ",Object(m.jsx)(j.a,{date:g(oe,ae).modified,formatter:function(e,t,n){if("second"===t)return"just now";var o=1!==e?"s":"";return"".concat(e," ").concat(t).concat(o," ").concat(n)}}),Object(m.jsxs)("span",{className:"mobile-hidden",children:[", on ",g(oe,ae).modified.toString()]})]}):Object(m.jsx)("p",{children:"No note selected."})]})]})]}),Object(m.jsx)("div",{className:"note-contents",children:Object(m.jsx)(I,{selectedNote:oe,notes:ae,changeNote:se})}),Object(m.jsxs)("div",{className:"note-controls",children:[Object(m.jsxs)("button",{className:"feature-link",onClick:function(e){se(oe,{editMode:!0}),Oe(1)},children:[Object(m.jsx)(u.a,{icon:f.c,className:"fa-link-icon"}),Object(m.jsx)("span",{children:"Change title"})]}),Object(m.jsxs)("button",{className:"feature-link",onClick:function(e){de(oe),Oe(1)},children:[Object(m.jsx)(u.a,{icon:f.h,className:"fa-link-icon"}),Object(m.jsx)("span",{children:"Delete note"})]}),Object(m.jsxs)("button",{className:"feature-link",onClick:function(e){null!==oe&&(Q(!0),Oe(0))},children:[Object(m.jsx)(u.a,{icon:f.d,className:"fa-link-icon"}),Object(m.jsx)("span",{children:"Change category"})]})]})]})]})]})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),o(e),c(e),a(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root")),U()}},[[72,1,2]]]);
//# sourceMappingURL=main.b6490762.chunk.js.map