(this.webpackJsonpnotebot=this.webpackJsonpnotebot||[]).push([[0],{49:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var o=n(2),c=n.n(o),a=n(41),i=n.n(a),r=(n(49),n(5)),s=n(10),l=n(11),d=n(24),u=function(e){return e.length>0?parseInt(e[e.length-1].id)+1:0},f=function(e,t){return t.find((function(t){return t.id===e}))},j=function(e,t){return t.map((function(e){return e.id})).indexOf(e)},g=n(18),b=n.n(g),h=n(30),m=n(42),O=n(43),y=n(31);n(74);y.a.initializeApp({apiKey:"AIzaSyDdCjbP7lQVb7--7uraYnkEdLGjWTmWckE",authDomain:"notebot-42.firebaseapp.com",databaseURL:"https://notebot-42.firebaseio.com",projectId:"notebot-42",storageBucket:"notebot-42.appspot.com",messagingSenderId:"884273569921",appId:"1:884273569921:web:e56bf1258d353e4ae02d80",measurementId:"G-7B4K7B82XL"});var v=y.a,x=new(function(){function e(){Object(m.a)(this,e)}return Object(O.a)(e,[{key:"loadUser",value:function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v.firestore().collection("users").doc(t).get().then((function(e){e.exists?console.log("Document data:",e.data()):console.log("No such document!")})).catch((function(e){console.log("Error getting document:",e)}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"createUser",value:function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",v.firestore().collection("users").add({title:"user",categories:[],notes:[]}).then((function(e){return e.id})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"createCategory",value:function(e){v.firestore().collection("users").doc(e).collection("categories").add({title:"category",color:"#0f0"}).then((function(e){return e.id})),v.firestore().collection("users").add({title:"New Category",body:"This is to check the Integration is working"})}}]),e}()),C=n(3),p=function(e){var t,n=e.selectCategory;t=-1===e.selectedCategory?" selected":"";return Object(C.jsx)("li",{children:Object(C.jsx)("a",{id:"category-all",href:"#",className:"category-all "+t,onClick:function(e){e.preventDefault(),n(-1)},children:"All Notes"})})},N=(n(34),n(29)),k=n.n(N),S=function(e){var t=e.category,n=e.changeCategory,c=e.deleteCategory,a=e.selectCategory,i=e.categorySetMode,r=e.setCategorySetMode,s=e.changeNote,l=e.selectedNote,d=Object(o.useRef)(null);Object(o.useEffect)((function(){t.editMode&&d.current.focus()}),[t.editMode]);var u;return u=t.selected?" selected":"",t.editMode?Object(C.jsx)("li",{className:"category-item edit-mode",children:Object(C.jsx)("input",{id:"category-"+t.id,ref:d,placeholder:"Enter a category title.",className:"feature-input",onInput:function(e){return function(e){n(t.id,{name:e.target.value})}(e)},onKeyDown:function(e){return function(e){"Enter"===e.key&&e.target.blur()}(e)},onBlur:function(e){return function(e){""===e.target.value?c(t.id):(n(t.id,{name:e.target.value,editMode:!1}),a(t.id))}(e)},value:t.name})}):Object(C.jsx)("li",{className:"category-item link-mode "+(!0===i?"category-set-mode":""),children:Object(C.jsx)("a",{id:"category-"+t.id,ref:d,className:u,style:{color:t.color,borderColor:t.color,backgroundColor:t.color},href:"#",onClick:function(e){i?(s(l,{category:t.id}),r(!1),a(t.id)):a(t.id)},children:t.name})})},M=function(e){var t=e.categories,n=e.changeCategory,o=e.deleteCategory,c=e.selectCategory,a=e.changeNote,i=e.selectedNote,r=e.categorySetMode,s=e.setCategorySetMode;return t.map((function(e,t){return Object(C.jsx)(S,{category:e,changeCategory:n,deleteCategory:o,selectCategory:c,categorySetMode:r,setCategorySetMode:s,changeNote:a,selectedNote:i})}))},w=n(23),E=function(e){var t=e.editColorMode,n=e.setEditColorMode,c=e.selectedCategory,a=e.selectedCategoryColor,i=(e.setSelectedCategoryColor,e.changeCategory),s=Object(w.b)("hex",a),l=Object(r.a)(s,2),d=l[0],u=l[1];Object(o.useEffect)((function(){-1!==c&&i(c,{color:d.hex})}),[d]);return Object(C.jsx)(k.a,{onOutsideClick:function(e){n(!1)},children:Object(C.jsx)("div",{className:"category-colorPicker "+(!0===t?"showing":"not-showing"),children:Object(C.jsx)(w.a,{width:250,height:100,color:d,onChange:u,hideHSV:!0,hideRGB:!0,hideHEX:!0,dark:!0})})})},D=function(e){var t=e.selectedCategory,n=e.selectedCategoryColor,o=e.changeCategory,c=e.deleteCategory,a=e.editColorMode,i=e.setEditColorMode;return Object(C.jsxs)("div",{style:{borderColor:n},className:"main-categories-controls "+(-1!==t?"showing":"not-showing"),children:[Object(C.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),-1!==t&&o(t,{editMode:!0})},children:[Object(C.jsx)(s.a,{icon:l.a,color:n,className:"fa-link-icon",fixedWidth:!0}),"Edit title"]}),Object(C.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),-1!==t&&(o(t,{editMode:!1}),!0===a?(console.log("Set"),i(!1)):i(!0))},children:[Object(C.jsx)(s.a,{icon:l.b,color:n,className:"fa-link-icon",fixedWidth:!0}),"Edit color"]}),Object(C.jsxs)("a",{href:"#",onClick:function(e){e.preventDefault(),-1!==t&&c(t)},children:[Object(C.jsx)(s.a,{icon:l.d,color:n,className:"fa-link-icon",fixedWidth:!0}),"Delete category"]})]})},I=function(e){var t=e.note,n=e.changeNote,c=e.deleteNote,a=e.selectNote,i=e.selectedNote,r=e.categories,s=Object(o.useRef)(null);Object(o.useEffect)((function(){t.editMode&&s.current.focus()}),[t.editMode]),Object(o.useEffect)((function(){i&&n(i,{modified:(new Date).toLocaleString()})}),[t.contents,t.title]);return t.editMode?Object(C.jsx)("li",{className:"category-item edit-mode "+(i===t.id?"selected":""),children:Object(C.jsx)("input",{id:"note-"+t.id,ref:s,placeholder:"Enter a note title.",className:"feature-input",onInput:function(e){return function(e){n(t.id,{title:e.target.value})}(e)},onKeyDown:function(e){return function(e){"Enter"===e.key&&e.target.blur()}(e)},onBlur:function(e){return function(e){""===e.target.value?c(t.id):(n(t.id,{title:e.target.value,editMode:!1}),a(t.id))}(e)},value:t.title})}):t.visible?Object(C.jsx)("li",{className:"note-title link-mode "+(i===t.id?"selected":""),children:Object(C.jsxs)("a",{href:"#",onClick:function(e){a(t.id)},children:[Object(C.jsx)("div",{className:"note-title-color",style:{backgroundColor:f(t.category,r).color}}),Object(C.jsxs)("div",{className:"note-title-box",children:[Object(C.jsx)("h2",{children:t.title}),Object(C.jsx)("p",{children:Object(C.jsx)(d.a,{date:t.modified,formatter:function(e,t,n){if("second"===t)return"just now";var o=1!==e?"s":"";return"".concat(e," ").concat(t).concat(o," ").concat(n)}})})]})]})}):null},L=function(e){var t=e.notes,n=e.changeNote,o=e.deleteNote,c=e.selectNote,a=e.selectedNote,i=e.categories;return[].concat(t).sort((function(e,t){return new Date(t.modified)-new Date(e.modified)})).map((function(e,t){return Object(C.jsx)(I,{note:e,changeNote:n,deleteNote:o,selectNote:c,selectedNote:a,categories:i})}))},J=n(44),B=function(e){var t=e.selectedNote,n=e.notes,o=e.changeNote;return null!==t?Object(C.jsx)(J.a,{value:f(t,n).contents,apiKey:"nacx0iqah4xpy7tb8prkc3hy42bdva4exnbaurkyumhwg0f2",init:{menubar:!1,plugins:["advlist autolink lists link image","charmap print preview anchor help","searchreplace visualblocks code","insertdatetime media table paste wordcount"],toolbar:"undo redo | formatselect | bold italic |             alignleft aligncenter alignright |             bullist numlist outdent indent | help",forced_root_block_attrs:{class:"editor-font",style:"font-family: Inter;"}},onEditorChange:function(e,n){o(t,{contents:e})}}):null},U=[{id:0,name:"Personal",color:"#00ff84",editMode:!1,selected:!1},{id:1,name:"Work",color:"#ffb322",editMode:!1,selected:!1},{id:2,name:"Miscellaneous",color:"#16ecff",editMode:!1,selected:!1}],W=[{id:0,title:"Welcome!",category:0,modified:new Date("January 30, 2021 06:15:30").toLocaleString(),contents:'<h2 class="editor-font" style="font-family: Inter;">Hey there, visitor!</h2>\n<p class="editor-font" style="font-family: Inter;">This is a demo for a simple React note-taking application.</p>\n<p class="editor-font" style="font-family: Inter;">The demo is not intended for serious use. <strong>Your changes will not persist.</strong></p>\n<p class="editor-font" style="font-family: Inter;">Created with love by <span style="text-decoration: underline;">@prokhorvlg (Valentin Sigalov)</span>!</p>',editMode:!1,visible:!1},{id:1,title:"Area 51 vacation plans",category:0,modified:new Date("June 26, 2021 12:15:30").toLocaleString(),contents:"Contents of a note.",editMode:!1,visible:!1},{id:2,title:"Funniest joke ever",category:0,modified:new Date("June 29, 2021 23:15:30").toLocaleString(),contents:"Contents of a note.",editMode:!1,visible:!1},{id:3,title:"Lol tech specs",category:1,modified:new Date("July 3, 2021 09:15:30").toLocaleString(),contents:"Contents of a note.",editMode:!1,visible:!1},{id:4,title:"Cats on the moon",category:2,modified:new Date("July 4, 2021 05:15:30").toLocaleString(),contents:"Contents of a note.",editMode:!1,visible:!1}],A=function(){var e=Object(o.useState)(null),t=Object(r.a)(e,2),n=t[0],c=t[1],a=function(){var e=n;localStorage.setItem("notebotUserStore",JSON.stringify(e))},i=function(){return JSON.parse(localStorage.getItem("notebotUserStore"))};return[function(){var e=i();e&&0!==Object.keys(e).length?(x.loadUser(e.userId),c(e.userId)):x.createUser().then((function(e){c(e),a()}))}]},T=n(9),F=function(e){var t=Object(o.useState)(-1),n=Object(r.a)(t,2),a=n[0],i=n[1],s=Object(o.useState)(e),l=Object(r.a)(s,2),d=l[0],g=l[1],b=Object(o.useState)("#ffffff"),h=Object(r.a)(b,2),m=h[0],O=h[1];c.a.useEffect((function(){-1!==a&&O(f(a,d).color)}),[a,d]);var y=function(){var e=u(d),t={id:e,name:"",color:function(){var e=["#91aaff","#ff9e9e","#ff80c5","#7afbff","#8aff9c"];return e[Math.floor(Math.random()*e.length)]}(),editMode:!0,selected:!1};return g((function(e){return[].concat(Object(T.a)(e),[t])})),e},v=function(e,t){var n=f(e,d),o=Object.assign(n,t),c=Object(T.a)(d);c[j(e,d)]=o,g(c)};return[a,i,d,m,O,function(){y()},v,function(e){-1!==a&&v(a,{selected:!1}),i(e),-1===e||v(e,{selected:!0})},function(e){if(1!==d.length){var t=Object(T.a)(d),n=j(e,d);t.splice(n,1),g(t),i(-1)}}]},K=function(e,t,n){var c=Object(o.useState)(null),a=Object(r.a)(c,2),i=a[0],s=a[1],l=Object(o.useState)(e),d=Object(r.a)(l,2),g=d[0],b=d[1],h=function(){var e=u(g),o={id:e,title:"",category:-1!==n?n:t[0].id,modified:(new Date).toLocaleString(),contents:"",selected:!1,editMode:!0,visible:!0};return b((function(e){return[].concat(Object(T.a)(e),[o])})),e};return[i,s,g,function(){h()},function(e,t){var n=f(e,g),o=Object.assign(n,t),c=Object(T.a)(g);c[j(e,g)]=o,b(c)},function(e){s(e)},function(e){var t=Object(T.a)(g),n=j(e,g);t.splice(n,1),b(t),s(null)}]},P=function(){var e=A(),t=Object(r.a)(e,1)[0];c.a.useEffect((function(){t()}),[]);var n=F(U),a=Object(r.a)(n,9),i=a[0],u=(a[1],a[2]),j=a[3],g=a[4],b=a[5],h=a[6],m=a[7],O=a[8],y=Object(o.useState)(!1),v=Object(r.a)(y,2),x=v[0],N=v[1],k=Object(o.useState)(!1),S=Object(r.a)(k,2),w=S[0],I=S[1],J=K(W,u,i),T=Object(r.a)(J,7),P=T[0],R=(T[1],T[2]),G=T[3],H=T[4],V=T[5],_=T[6],z=Object(o.useState)(""),X=Object(r.a)(z,2),Y=X[0],q=X[1];return c.a.useEffect((function(){R.map((function(e){var t=e.category===i||-1===i,n=e.title.toLowerCase().includes(Y)||e.contents.toLowerCase().includes(Y)||""===Y;H(e.id,t&&n?{visible:!0}:{visible:!1})}))}),[Y,i]),Object(C.jsxs)("div",{className:"app-container",children:[Object(C.jsxs)("div",{className:"main-column",children:[Object(C.jsxs)("div",{className:"main-logo",children:[Object(C.jsx)("div",{className:"box-logo"}),Object(C.jsx)("h1",{children:"Notebot"})]}),Object(C.jsxs)("div",{className:"main-categories",children:[Object(C.jsxs)("ul",{className:"main-categories-list",children:[Object(C.jsx)(p,{selectCategory:m,selectedCategory:i}),Object(C.jsx)(M,{categories:u,changeCategory:h,deleteCategory:O,selectCategory:m,changeNote:H,selectedNote:P,categorySetMode:x,setCategorySetMode:N})]}),Object(C.jsx)(E,{editColorMode:w,setEditColorMode:I,selectedCategory:i,selectedCategoryColor:j,setSelectedCategoryColor:g,changeCategory:h}),Object(C.jsx)(D,{selectedCategory:i,selectedCategoryColor:j,changeCategory:h,deleteCategory:O,editColorMode:w,setEditColorMode:I}),Object(C.jsx)("div",{className:"main-categories-add",children:Object(C.jsxs)("a",{href:"#",onClick:b,className:"feature-link",children:[Object(C.jsx)(s.a,{icon:l.c,className:"fa-link-icon"}),"Add category"]})})]})]}),Object(C.jsxs)("div",{className:"list-column",children:[Object(C.jsxs)("div",{className:"list-search-box",children:[Object(C.jsx)("h2",{children:"Search your notes"}),Object(C.jsx)("input",{className:"feature-input",onInput:function(e){return function(e){q(e.target.value)}(e)}})]}),Object(C.jsx)("ul",{children:Object(C.jsx)(L,{notes:R,changeNote:H,deleteNote:_,selectNote:V,selectedNote:P,categories:u})}),Object(C.jsx)("div",{className:"list-notes-add",children:Object(C.jsxs)("a",{href:"#",onClick:G,className:"feature-link",children:[Object(C.jsx)(s.a,{icon:l.c,className:"fa-link-icon"}),"Add note"]})})]}),Object(C.jsxs)("div",{className:"note-column",children:[Object(C.jsxs)("div",{className:"note-title-bar",children:[Object(C.jsx)("div",{className:"note-title-icon",style:{backgroundColor:null!==P?f(f(P,R).category,u).color:"white"}}),Object(C.jsxs)("div",{className:"note-title-container",children:[Object(C.jsx)("h3",{children:null!==P?f(P,R).title:"Select a note"}),null!==P?Object(C.jsxs)("p",{children:[" edited ",Object(C.jsx)(d.a,{date:f(P,R).modified,formatter:function(e,t,n){if("second"===t)return"just now";var o=1!==e?"s":"";return"".concat(e," ").concat(t).concat(o," ").concat(n)}}),", on ",f(P,R).modified.toString()]}):Object(C.jsx)("p",{children:"No note selected."})]})]}),Object(C.jsx)("div",{className:"note-contents",children:Object(C.jsx)(B,{selectedNote:P,notes:R,changeNote:H})}),Object(C.jsxs)("div",{className:"note-controls",children:[Object(C.jsxs)("a",{href:"#",className:"feature-link",onClick:function(e){return H(P,{editMode:!0})},children:[Object(C.jsx)(s.a,{icon:l.c,className:"fa-link-icon"}),"Change title"]}),Object(C.jsxs)("a",{href:"#",className:"feature-link",onClick:function(e){return _(P)},children:[Object(C.jsx)(s.a,{icon:l.c,className:"fa-link-icon"}),"Delete note"]}),Object(C.jsxs)("a",{href:"#",className:"feature-link",onClick:function(e){null!==P&&N(!0)},children:[Object(C.jsx)(s.a,{icon:l.c,className:"fa-link-icon"}),"Change category"]})]})]})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))};i.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(P,{})}),document.getElementById("root")),R()}},[[73,1,2]]]);
//# sourceMappingURL=main.13e132c0.chunk.js.map