(this["webpackJsonpexpense-tracker-reactjs"]=this["webpackJsonpexpense-tracker-reactjs"]||[]).push([[0],{65:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(10),c=n.n(r),s=n(2),o=function(t){var e=t.title;return Object(s.jsx)("h2",{children:e})};o.defaultProps={title:"Expense Tracker"};var i=n(4),u=function(){var t=Object(i.c)((function(t){return t.transactionsState.transactions})).map((function(t){return t.amount})).reduce((function(t,e){return t+e}),0).toFixed(2);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h4",{children:"Your Balance:"}),Object(s.jsxs)("h1",{children:[t,"$"]})]})},j=function(){var t=Object(i.c)((function(t){return t.transactionsState.transactions})).map((function(t){return t.amount})),e=t.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0).toFixed(2),n=(-1*t.filter((function(t){return t<0})).reduce((function(t,e){return t+e}),0)).toFixed(2);return Object(s.jsxs)("div",{className:"inc-exp-container",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Income"}),Object(s.jsxs)("p",{className:"money plus",children:[e,"$"]})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h4",{children:"Expense"}),Object(s.jsxs)("p",{className:"money minus",children:[n,"$"]})]})]})},l=n(9),b=n.n(l),d=n(17),O=n(15),p=n.n(O);p.a.defaults.baseURL="http://localhost:5000";var x=n(29),h=n.n(x),f=function(t){var e=t.transaction,n=e.amount>0?"+":"-",a=Object(i.b)();return Object(s.jsxs)("li",{className:e.amount>0?"plus":"minus",children:[e.text," ",Object(s.jsxs)("span",{children:[" ","".concat(n).concat(Math.abs(e.amount),"$")]}),Object(s.jsx)("button",{className:"delete-btn",onClick:function(){var t;a((t=e._id,function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("/api/v1/transactions/".concat(t));case 3:n({type:"DELETE_TRANSACTION",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n({type:"TRANSACTION_ERROR",payload:e.t0.response.data.error});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()))},children:Object(s.jsx)(h.a,{})})]})},v=function(){var t=Object(i.b)();Object(a.useEffect)((function(){t(function(){var t=Object(d.a)(b.a.mark((function t(e){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("/api/v1/transactions");case 3:n=t.sent,e({type:"GET_TRANSACTIONS",payload:n.data.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),e({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}())}),[t]);var e=Object(i.c)((function(t){return t.transactionsState.transactions}));return console.log(e),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"History"}),e.length?Object(s.jsx)("ul",{className:"list",children:e.map((function(t){return Object(s.jsx)(f,{transaction:t},t._id)}))}):Object(s.jsx)("label",{children:"You have no transactions yet."})]})},m=n(20),N=n(30),y=n.n(N),T=function(){var t=Object(a.useState)(""),e=Object(m.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),o=Object(m.a)(c,2),u=o[0],j=o[1],l=Object(i.b)();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:"Add new transaction"}),Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{htmlFor:"text",children:"Text"}),Object(s.jsx)("input",{type:"text",value:n,onChange:function(t){return r(t.target.value)},placeholder:"Enter text..."})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(s.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(s.jsx)("input",{type:"number",value:u,onChange:function(t){return j(t.target.value)},placeholder:"Enter amount..."})]}),Object(s.jsx)("button",{className:"btn",onClick:function(t){t.preventDefault();var e,a={id:y()(),text:n,amount:+u};l((e=a,function(){var t=Object(d.a)(b.a.mark((function t(n){var a,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,p.a.post("/api/v1/transactions",e,a);case 4:r=t.sent,n({type:"ADD_TRANSACTION",payload:r.data.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:"TRANSACTION_ERROR",payload:t.t0.response.data.error});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}())),r(""),j("")},children:"Add transaction"})]})]})};n(65);var A=function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(o,{}),Object(s.jsx)(u,{}),Object(s.jsx)(j,{}),Object(s.jsx)(v,{}),Object(s.jsx)(T,{})]})})},R=n(14),E=n(32),S=n(7),g={transactions:[],error:null,loading:!0},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GET_TRANSACTIONS":return Object(S.a)(Object(S.a)({},t),{},{loading:!1,transactions:e.payload});case"ADD_TRANSACTION":return Object(S.a)(Object(S.a)({},t),{},{transactions:[].concat(Object(E.a)(t.transactions),[e.payload])});case"DELETE_TRANSACTION":return Object(S.a)(Object(S.a)({},t),{},{transactions:t.transactions.filter((function(t){return t._id!==e.payload}))});case"TRANSACTION_ERROR":return Object(S.a)(Object(S.a)({},t),{},{error:e.payload});default:return t}},k=Object(R.b)({transactionsState:C}),_=n(31),I=Object(R.c)(k,Object(R.a)(_.a));c.a.render(Object(s.jsx)(i.a,{store:I,children:Object(s.jsx)(A,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.1cf17342.chunk.js.map