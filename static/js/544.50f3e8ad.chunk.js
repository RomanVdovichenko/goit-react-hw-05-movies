"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{854:function(t,n,r){r.d(n,{a:function(){return c}});var e=r(4691),a=r(184),c=function(){return(0,a.jsx)(e.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})}},9544:function(t,n,r){r.r(n);var e=r(5861),a=r(9439),c=r(7757),u=r.n(c),i=r(854),s=r(2791),o=r(9073),p=r(7689),f=r(1087),v=r(8565),d=r(184);n.default=function(){var t=(0,p.TH)(),n=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),r=n[0],c=n[1],i=(0,s.useState)(!1),p=(0,a.Z)(i,2),f=p[0],d=p[1];return(0,s.useEffect)((function(){function t(){return(t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d(!0),t.prev=1,t.next=4,(0,v.XD)();case 4:n=t.sent,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),o.Am.error("Sorry... no movies found.");case 11:return t.prev=11,d(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),{items:r,loading:f}}(),r=n.items,c=n.loading;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("main",{children:[(0,d.jsx)("h1",{children:"Trending today"}),c&&(0,d.jsx)(i.a,{}),(0,d.jsx)("ul",{children:r.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsx)(f.rU,{to:"movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})]})})}},8565:function(t,n,r){r.d(n,{BF:function(){return p},LP:function(){return f},XD:function(){return s},XI:function(){return v},rw:function(){return o}});var e=r(5861),a=r(7757),c=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org";var i="13896f610c2b15042c451786ce84a901",s=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/movie/".concat(n,"?api_key=").concat(i,"&append_to_response=videos,images"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/3/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.50f3e8ad.chunk.js.map