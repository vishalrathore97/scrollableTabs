(this["webpackJsonpscrollable-tabs"]=this["webpackJsonpscrollable-tabs"]||[]).push([[0],{16:function(t,a,e){},17:function(t,a,e){},19:function(t,a,e){},20:function(t,a,e){},25:function(t,a,e){},26:function(t,a,e){},27:function(t,a,e){"use strict";e.r(a);var n=e(0),c=e.n(n),s=e(4),b=e.n(s),i=(e(16),e(8)),r=e(3),d=e(2),l=(e(17),e(1));var o=function(t){var a=t.content;return Object(l.jsx)("div",{className:"tabContent",children:a})},T=e(6);e(19);var u=function(t){var a=t.onClose,e=t.onDelete,n=t.id;return b.a.createPortal(Object(l.jsx)("div",{className:"modal",onClick:a,children:Object(l.jsxs)("div",{className:"modal__content",children:[Object(l.jsx)("h1",{className:"modal__title",children:"WARNING!"}),Object(l.jsx)("p",{className:"modal__body",children:"Are you sure you want to close?"}),Object(l.jsxs)("div",{className:"modal__btn",children:[Object(l.jsx)("button",{onClick:function(){return e(n)},className:"modal__btn--danger",children:"Close"}),Object(l.jsx)("button",{onClick:a,className:"modal__btn--primary",children:"Cancel"})]})]})}),document.getElementById("modal"))};e(20);var j=function(t){var a=t.data,e=t.len,c=t.onDelete,s=t.currentTab,b=t.index,r=Object(n.useState)(!1),o=Object(i.a)(r,2),j=o[0],f=o[1],O=s===a.id?"tab tab--active":"tab",x=1===e?"tab__close--none":"tab__close";return Object(l.jsx)(T.b,{draggableId:a.id,index:b,children:function(t){return Object(l.jsxs)("div",Object(d.a)(Object(d.a)(Object(d.a)({className:O},t.draggableProps),t.dragHandleProps),{},{ref:t.innerRef,children:[Object(l.jsx)("span",{className:"tab__title",children:a.id}),Object(l.jsx)("span",{className:x,onClick:function(){return f(!0)},children:"x"}),j&&Object(l.jsx)(u,{onDelete:c,id:a.id,onClose:function(){return f(!1)}})]}))}})},f=(e(25),{tabs:[{id:"Tab 1",content:"Tab 1 content"},{id:"Tab 2",content:"Tab 2 content"},{id:"Tab 3",content:"Tab 3 content"},{id:"Tab 4",content:"Tab 4 content"},{id:"Tab 5",content:"Tab 5 content"},{id:"Tab 6",content:"Tab 6 content"},{id:"Tab 7",content:"Tab 7 content"},{id:"Tab 8",content:"Tab 8 content"},{id:"Tab 9",content:"Tab 9 content"}],createdTabs:9,currentTab:"Tab 1",firstTab:"Tab 1",lastTab:"Tab 4",content:"Tab 1 content"}),O=function(t,a){var e,n,c,s,b;switch(a.type){case"TAB_CLICK":return e=t.tabs.findIndex((function(t){return t.id===a.id})),Object(d.a)(Object(d.a)({},t),{},{content:t.tabs[e].content,currentTab:a.id});case"LEFT_CHEVRON":return(e=t.tabs.findIndex((function(a){return a.id===t.lastTab})))>=4?Object(d.a)(Object(d.a)({},t),{},{firstTab:t.tabs[e-4].id,lastTab:t.tabs[e-1].id}):t;case"RIGHT_CHEVRON":return(e=t.tabs.findIndex((function(a){return a.id===t.lastTab})))<t.tabs.length-1&&e>=0?Object(d.a)(Object(d.a)({},t),{},{firstTab:t.tabs[e-2].id,lastTab:t.tabs[e+1].id}):t;case"ADD_TAB":var i=t.createdTabs+1,l={id:"Tab ".concat(i),content:"Tab ".concat(i," content")},o=t.tabs.length-1;return n=t.tabs.length>=4?t.tabs[o-2].id:t.firstTab,t.tabs.length>9?t:Object(d.a)(Object(d.a)({},t),{},{tabs:[].concat(Object(r.a)(t.tabs),[l]),firstTab:n,lastTab:l.id,currentTab:l.id,content:l.content,createdTabs:i});case"DELETE_TAB":var T=t.tabs.findIndex((function(a){return a.id===t.firstTab})),u=t.tabs.findIndex((function(a){return a.id===t.lastTab})),j=t.tabs.findIndex((function(a){return a.id===t.currentTab})),f=t.tabs.length;return f<=4?(n=a.id===t.firstTab?t.tabs[T+1].id:t.firstTab,c=a.id===t.lastTab?t.tabs[u-1].id:t.lastTab):(a.id===t.firstTab&&u<f-1?(n=t.tabs[T+1].id,c=t.tabs[u+1].id):a.id===t.firstTab&&(n=t.tabs[T-1].id),a.id===t.lastTab&&u===f-1?(c=t.tabs[u-1].id,n=t.tabs[T-1].id):a.id===t.lastTab&&(c=t.tabs[u+1].id),a.id!==t.lastTab&&u===f-1?c=t.lastTab:a.id!==t.lastTab&&(c=t.tabs[u+1].id),a.id!==t.firstTab&&u===f-1?n=t.tabs[T-1].id:a.id!==t.firstTab&&(n=t.firstTab)),a.id===t.currentTab&&j===f-1?(s=t.tabs[j-1].id,b=t.tabs[j-1].content):a.id===t.currentTab?(s=t.tabs[j+1].id,b=t.tabs[j+1].content):(s=t.currentTab,b=t.content),e=t.tabs.findIndex((function(t){return t.id===a.id})),Object(d.a)(Object(d.a)({},t),{},{tabs:[].concat(Object(r.a)(t.tabs.slice(0,e)),Object(r.a)(t.tabs.slice(e+1))),content:b,lastTab:c,firstTab:n,currentTab:s});case"REORDER_LIST":var O=t.tabs.find((function(t){return t.id===a.id})),x=t.tabs.findIndex((function(t){return t.id===a.id})),_=x+(a.dIdx-a.sIdx);return a.sIdx<a.dIdx?(n=t.firstTab===O.id?t.tabs[x+1].id:t.firstTab,c=t.lastTab===t.tabs[_].id?O.id:t.lastTab,Object(d.a)(Object(d.a)({},t),{},{tabs:[].concat(Object(r.a)(t.tabs.slice(0,x)),Object(r.a)(t.tabs.slice(x+1,_+1)),[O],Object(r.a)(t.tabs.slice(_+1))),firstTab:n,lastTab:c})):(c=t.lastTab===O.id?t.tabs[x-1].id:t.lastTab,n=t.firstTab===t.tabs[_].id?O.id:t.firstTab,Object(d.a)(Object(d.a)({},t),{},{tabs:[].concat(Object(r.a)(t.tabs.slice(0,_)),[O],Object(r.a)(t.tabs.slice(_,x)),Object(r.a)(t.tabs.slice(x+1))),firstTab:n,lastTab:c}));default:return t}};var x=function(){var t=Object(n.useReducer)(O,f),a=Object(i.a)(t,2),e=a[0],c=a[1],s=function(){var t=e.tabs.findIndex((function(t){return t.id===e.firstTab})),a=t+4>e.tabs.length?e.tabs.length-t:4;return new Array(a).fill().map((function(a,e){return t+e}))},b=function(t){var a=t.target;if("tab__title"===a.className){var e=a.innerText;c({type:"TAB_CLICK",id:e})}},r=function(t){e.tabs.length>1&&c({type:"DELETE_TAB",id:t})};console.log(e);var u=e.tabs.length;return Object(l.jsxs)("div",{className:"scrollableTabs",children:[Object(l.jsxs)("div",{className:"scrollableTabs__row1",children:[e.firstTab!==e.tabs[0].id&&Object(l.jsxs)("div",{className:"scrollableTabs__chevron scrollableTabs--left",onClick:function(){return c({type:"LEFT_CHEVRON"})},children:[" ","<"," "]}),Object(l.jsx)(T.a,{onDragEnd:function(t){console.log(t);var a=t.draggableId,e=t.source,n=t.destination;n&&n.index!==e.index&&c({type:"REORDER_LIST",dIdx:n.index,sIdx:e.index,id:a})},children:Object(l.jsx)(T.c,{droppableId:"scrollableTabs__container",direction:"horizontal",children:function(t){return Object(l.jsxs)("div",Object(d.a)(Object(d.a)({className:"scrollableTabs__container"},t.droppableProps),{},{ref:t.innerRef,onClick:b,children:[s().map((function(t,a){return Object(l.jsx)(j,{len:u,currentTab:e.currentTab,onDelete:r,data:e.tabs[t],index:a},e.tabs[t].id)})),t.placeholder]}))}})}),u<10&&Object(l.jsxs)("div",{className:"scrollableTabs__addBtn",onClick:function(){return c({type:"ADD_TAB"})},children:[" ","+"," "]}),e.lastTab!==e.tabs[u-1].id&&Object(l.jsxs)("div",{className:"scrollableTabs__chevron scrollableTabs--right",onClick:function(){return c({type:"RIGHT_CHEVRON"})},children:[" ",">"," "]})]}),Object(l.jsx)(o,{content:e.content})]})};e(26);var _=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(x,{})})},h=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,28)).then((function(a){var e=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,b=a.getTTFB;e(t),n(t),c(t),s(t),b(t)}))};b.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),h()}},[[27,1,2]]]);
//# sourceMappingURL=main.022cae71.chunk.js.map