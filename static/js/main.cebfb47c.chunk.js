(this["webpackJsonpreddit-minimal"]=this["webpackJsonpreddit-minimal"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l}));var r,c=n(6),a=n(10),s=n.n(a),i=n(14),o=n(15),u=n(25),d=Object(o.b)("posts/getAllPosts",Object(i.a)(s.a.mark((function e(){var t,n,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",r.length>1?r[1]:void 0,e.next=4,Object(u.b)(t);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))),l=Object(o.c)({name:"posts",initialState:{status:"idle",isLoading:!0,postsData:[],isError:"null",error:""},reducers:{},extraReducers:(r={},Object(c.a)(r,d.pending,(function(e){e.isLoading=!0,e.isError=!1})),Object(c.a)(r,d.fulfilled,(function(e,t){e.isError=!1,e.isLoading=!1,e.status="succeeded",e.postsData=t.payload})),Object(c.a)(r,d.rejected,(function(e,t){e.isLoading=!1,e.isError=!0,e.error=t.error})),r)}).reducer},101:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return l}));var r,c=n(6),a=n(10),s=n.n(a),i=n(14),o=n(15),u=n(25),d=Object(o.b)('"comment/getAllComments',function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(o.c)({name:"comments",initialState:{status:"idle",isLoading:!0,commentData:[],isError:"null",error:""},reducers:{},extraReducers:(r={},Object(c.a)(r,d.pending,(function(e){e.isLoading=!0,e.isError=!1})),Object(c.a)(r,d.fulfilled,(function(e,t){e.isLoading=!1,e.isError=!1,e.status="succeeded",e.commentData=t.payload})),Object(c.a)(r,d.rejected,(function(e,t){e.isLoading=!1,e.isError=!0,e.status="failed",e.error=t.error})),r)}).reducer},126:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},156:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var r,c,a=n(1),s=n.n(a),i=n(29),o=n.n(i),u=(n(135),n(136),n(19)),d=n(7),l=n(21),j=n(61),b=n(6),f=n(10),p=n.n(f),x=n(14),O=n(15),h=n(25),m=Object(O.b)("subreddit/allPosts",function(){var e=Object(x.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.f)(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(O.c)({name:"subredditPosts",initialState:{status:"idle",isLoading:!0,subredditpostsData:[],isError:"null",error:""},reducers:{},extraReducers:(r={},Object(b.a)(r,m.pending,(function(e,t){e.isLoading=!0,e.isError=!1})),Object(b.a)(r,m.fulfilled,(function(e,t){e.isLoading=!1,e.isError=!1,e.status="succeeded",e.subredditpostsData=t.payload})),Object(b.a)(r,m.rejected,(function(e,t){e.isLoading=!1,e.isError=!0,e.status="failed",e.error=t.error})),r)}).reducer,g=n(77),y=n(72),w=n(73),k=n(2),N=function(){var e=Object(d.g)(),t=Object(l.b)(),n=Object(l.c)((function(e){return e.subRedditPosts})),r=n.isLoading,c=n.isError,s=n.error,i=n.subredditpostsData;return Object(a.useEffect)((function(){return t(m(e.subreddittype)),function(){}}),[e.subreddittype]),c?Object(k.jsx)(w.a,{error:s.message}):r?Object(k.jsx)(j.a,{children:[1,2,3,4,5,6].map((function(e){return Object(k.jsx)(y.a,{},e)}))}):Object(k.jsx)("div",{children:Object(k.jsx)(j.a,{sideBarProps:{about:!0,subreddittype:e.subreddittype},children:Object(k.jsx)(g.a,{postData:i.data.children})})})},E=n(207),L=n(120),D=n.n(L),_=(n(170),function(){return Object(k.jsx)("div",{id:"notfound",children:Object(k.jsxs)("div",{class:"notfound",children:[Object(k.jsxs)("div",{class:"notfound-404",children:[Object(k.jsx)("h3",{children:"Oops! Page not found"}),Object(k.jsxs)("h1",{children:[Object(k.jsx)("span",{children:"4"}),Object(k.jsx)("span",{children:"0"}),Object(k.jsx)("span",{children:"4"})]})]}),Object(k.jsx)("h2",{children:"we are sorry, but the page you requested was not found"}),Object(k.jsx)(E.a,{component:u.b,to:"/",variant:"outlined",startIcon:Object(k.jsx)(D.a,{}),children:"HomePage"})]})})}),I=Object(O.b)("user/allPosts",function(){var e=Object(x.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.h)(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),C=Object(O.c)({name:"userPosts",initialState:{status:"idle",isLoading:!0,userpostsData:[],isError:"null",error:""},reducers:{},extraReducers:(c={},Object(b.a)(c,I.pending,(function(e,t){e.isLoading=!0,e.isError=!1})),Object(b.a)(c,I.fulfilled,(function(e,t){e.isLoading=!1,e.isError=!1,e.status="succeeded",e.userpostsData=t.payload})),Object(b.a)(c,I.rejected,(function(e,t){e.isLoading=!1,e.isError=!0,e.status="failed",e.error=t.error})),c)}).reducer,S=function(){var e=Object(l.b)(),t=Object(d.g)(),n=Object(l.c)((function(e){return e.userPosts})),r=n.isLoading,c=n.isError,s=n.userpostsData,i=n.error;return Object(a.useEffect)((function(){return e(I(t.username)),function(){}}),[t.username]),c?Object(k.jsx)(w.a,{error:i.message}):r?Object(k.jsx)(j.a,{children:[1,2,3,4,5,6].map((function(e){return Object(k.jsx)(y.a,{},e)}))}):Object(k.jsx)(j.a,{sideBarProps:{user:!0,username:t.username},children:Object(k.jsx)(g.a,{postData:s.data.children})})},R=function(e){var t=Object(d.e)().pathname,n=Object(a.useRef)();return Object(a.useEffect)((function(){t!=n&&(n.current=t,window.scroll(0,0))}),[t]),e.children},T=n(20),M=Object(a.lazy)((function(){return n.e(4).then(n.bind(null,218))})),P=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,220))})),F=function(){return Object(k.jsx)(s.a.Suspense,{fallback:Object(k.jsx)(T.a,{}),children:Object(k.jsx)(u.a,{children:Object(k.jsx)(R,{children:Object(k.jsxs)(d.c,{children:[Object(k.jsx)(d.a,{path:"/",exact:!0,element:Object(k.jsx)(M,{})}),Object(k.jsx)(d.a,{path:"/:subreddit/comments/:id",exact:!0,element:Object(k.jsx)(P,{})}),Object(k.jsx)(d.a,{path:"/filter/:filtertype",exact:!0,element:Object(k.jsx)(M,{})}),Object(k.jsx)(d.a,{path:"/subreddit/:subreddittype",exact:!0,element:Object(k.jsx)(N,{})}),Object(k.jsx)(d.a,{path:"/user/:username",exact:!0,element:Object(k.jsx)(S,{})}),Object(k.jsx)(d.a,{element:Object(k.jsx)(_,{})})]})})})})},A=n(100),z=n(101),W=n(80),B=n(82),H=n(83),q={posts:A.b,comments:z.a,subReddit:W.b,subRedditPosts:v,subredditAbout:B.b,userAbout:H.b,userPosts:C},G=Object(O.a)({reducer:q});var J=function(){return Object(k.jsx)(l.a,{store:G,children:Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(F,{})})})},Y=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,219)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};o.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(J,{})}),document.getElementById("root")),Y()},20:function(e,t,n){"use strict";n(1),n(160);var r=n(2);t.a=function(e){var t=e.type,n="skeleton ".concat(t);return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:n})})}},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return j})),n.d(t,"h",(function(){return b})),n.d(t,"c",(function(){return f}));var r=n(10),c=n.n(r),a=n(14),s="https://www.reddit.com",i=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/r/popular/").concat(t,".json"));case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200!==n.status){e.next=10;break}return a=r.data.children,e.abrupt("return",a);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message||"failed to fetch");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/subreddits.json"));case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,200!==t.status){e.next=10;break}return r=n.data.children.map((function(e){return e})),e.abrupt("return",r);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0.message||"failed to fetch");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.subreddit,r=t.id,e.prev=1,e.next=4,fetch("".concat(s,"/r/").concat(n,"/comments/").concat(r,"/.json"));case 4:return a=e.sent,e.next=7,a.json();case 7:if(i=e.sent,200!==a.status){e.next=10;break}return e.abrupt("return",i);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(1),new Error(e.t0.message||"failed to fetch");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/r/").concat(t,"/.json"));case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200!==n.status){e.next=9;break}return e.abrupt("return",r);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0.message||"failed to fetch");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/r/").concat(t,"/about.json"));case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200!==n.status){e.next=9;break}return e.abrupt("return",r);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0.message||"failed to fetch");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/user/").concat(t,"/about.json"));case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200!==n.status){e.next=9;break}return e.abrupt("return",r);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0.message||"failed to fetch");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(s,"/user/").concat(t,"/.json"));case 3:return n=e.sent,e.next=6,n.json();case 6:if(r=e.sent,200!==n.status){e.next=9;break}return e.abrupt("return",r);case 9:e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0.message||"failed to fetch");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(a.a)(c.a.mark((function e(t){var n,r,a,i=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"sr",e.prev=1,e.next=4,fetch("".concat(s,"/search.json?q=").concat(t,"&type=").concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:if(a=e.sent,200!==r.status){e.next=10;break}return e.abrupt("return",a);case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(1),new Error(e.t0.message||"failed to fetch");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){var t=parseInt(e);return t<1e3?t:t>=1e3&&t<1e4||t>=1e4&&t<1e5?(t/1e3).toFixed(2)+" k":t>=1e5&&t<1e6||t>=1e5&&t<1e7?(t/1e5).toFixed(2)+" L":t>=1e7&&t<1e8?(t/1e7).toFixed(2)+" Cr":void 0}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));new Date;var r=function(e){var t=new Date(e),n=t.toDateString(),r=t.toTimeString().substr(0,8);return[n.substring(3),r,e]},c=function(e){var t=new Date,n=(t.toDateString(),t.toTimeString().substr(0,8),new Date(e[2])),r=(t.getTime()-n.getTime())/864e5;if(r<.5){var c=a(e[1].split(":"));return s(c)}if(r>.5&&r<1){var i=(t.getTime()-n.getTime())/1e3;return s(i)}return r>=1&&r<=7?"".concat(Math.floor(r),r<2?" day ago":" days ago"):e[0]},a=function(e){var t=3600*parseInt(e[0]),n=60*parseInt(e[1]);return parseInt(e[2])+t+n},s=function(e){switch(!0){case e<60:return"".concat(e," seconds ago");case e>60&&e<3600:var t=Math.floor(e/60);return"".concat(t,t<5?" minute ago":" minutes ago");case e>=3600:var n=Math.floor(e/3600);return"".concat(n,n<=1?" hour ago":" hours ago")}}},61:function(e,t,n){"use strict";var r=n(36),c=n(1),a=n(10),s=n.n(a),i=n(14),o=n(122),u=n(12),d=n(25),l=n(107),j=n(7),b=(n(97),n(50)),f=(n(156),n(19)),p=n(38),x=n(2);function O(e){return Object(x.jsx)("div",{className:"display-anchor",children:Object(x.jsx)(f.b,{style:{textDecoration:"none",color:"black"},to:"/subreddit/".concat(e.displayName),children:Object(x.jsxs)("div",{className:"sub-row-display",children:[null===e.displayImg||""===e.displayImg?Object(x.jsx)(b.c,{className:"display-icon"}):Object(x.jsx)("img",{className:"display-icon",src:e.displayImg,alt:e.displayName}),Object(x.jsxs)("div",{className:"display-text",children:[Object(x.jsx)("span",{children:e.displayName})," ",Object(x.jsxs)("p",{style:{color:"grey",fontSize:"15px",textTransform:"none"},children:[Object(p.a)(e.subscribersCount)," subscribers"]})]})]})})})}var h=function(e){return Object(x.jsx)(u.f.DropdownIndicator,Object(r.a)(Object(r.a)({s:!0},e),{},{children:Object(x.jsx)(l.a,{label:""})}))},m=function(e){return 0===e.options.length?Object(x.jsx)(u.f.Menu,Object(r.a)(Object(r.a)({},e),{},{children:e.children})):Object(x.jsx)(u.f.Menu,Object(r.a)(Object(r.a)({},e),{},{children:Object(x.jsx)("div",{style:{height:"300px",overflowY:"scroll",overflowX:"hidden"},children:e.options.map((function(e,t){return Object(x.jsx)(O,Object(r.a)({},e),t)}))})}))},v=function(){var e=Object(j.f)(),t=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t.length<3||!t)&&n([]),e.next=3,Object(d.c)(t);case 3:r=e.sent,c=r.data.children.map((function(e){return{displayName:e.data.display_name,value:e.data.display_name,subscribersCount:e.data.subscribers,displayImg:e.data.icon_img}})),n(c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(x.jsx)("div",{style:{width:"100%"},children:Object(x.jsx)(o.a,{loadOptions:t,onInputChange:function(e,t){return"set-value"===t.action?"":e},defaultOptions:!0,value:"",components:{DropdownIndicator:h,Menu:m},onChange:function(t,n){n.action;e("/subreddit/".concat(t.value))},placeholder:"Search"})})};function g(){return Object(x.jsxs)("header",{className:"navheader",children:[Object(x.jsx)(f.b,{style:{textDecoration:"none",display:"flex",alignItems:"center"},to:{pathname:"/"},children:Object(x.jsxs)("div",{className:"logo",children:[Object(x.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 512 512",className:"logo-icon",height:"2em",width:"2em",xmlns:"http://www.w3.org/2000/svg",children:Object(x.jsx)("path",{d:"M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"})}),Object(x.jsxs)("div",{className:"nav-title",style:{paddingLeft:10},children:["Reddit",Object(x.jsx)("span",{style:{color:"black"},children:" Minimal"})]})]})}),Object(x.jsx)("div",{className:"search",children:Object(x.jsx)(v,{})})]})}n(158),n(159);var y=n(80),w=n(21),k=n(20),N=function(){return Object(x.jsxs)("div",{style:{display:"flex",paddingLeft:"10px"},children:[Object(x.jsx)(k.a,{type:"avatar"}),Object(x.jsxs)("div",{style:{width:"100%",paddingLeft:"10px",paddingRight:"10px"},children:[Object(x.jsx)(k.a,{type:"skeleton-title"}),Object(x.jsx)(k.a,{type:"text"})]})]})},E=function(){return Object(x.jsx)(N,{})},L=(n(161),function(e){return Object(x.jsx)("div",{className:"scroll-bar-view",children:Object(x.jsxs)(f.b,{className:"scroll-bar-view",to:"/subreddit/".concat(e.displayName),children:[null===e.displayImg||""===e.displayImg?Object(x.jsx)(b.c,{className:"display-icon"}):Object(x.jsx)("img",{className:"display-icon",src:e.displayImg,alt:e.displayName}),Object(x.jsx)("p",{children:e.displayName})]})})});function D(e){var t=Object(w.c)((function(e){return e.subReddit})),n=t.isLoading,a=t.subredditData,s=Object(w.b)();if(Object(c.useEffect)((function(){return s(Object(y.a)()),function(){}}),[]),n)return Object(x.jsxs)("div",{className:"sub-reddit",id:"sub-reddit-display",children:[Object(x.jsxs)("div",{className:"sub-reddit-title",children:[Object(x.jsx)("p",{children:"Sub Reddit"}),Object(x.jsx)("hr",{})]}),Object(x.jsx)("div",{children:[1,2,3,4,5,6,7,8,9,10].map((function(e){return Object(x.jsx)(E,{},e)}))})]});var i=a.map((function(e){return{displayName:e.data.display_name,url:e.data.url,displayImg:e.data.icon_img,key:e.data.id,subscribersCount:e.data.subscribers}}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"sub-reddit",id:"sub-reddit-display",children:[Object(x.jsxs)("div",{className:"sub-reddit-title",children:[Object(x.jsx)("p",{children:"Sub Reddit"}),Object(x.jsx)("hr",{})]}),Object(x.jsx)("div",{children:i.map((function(e){return Object(x.jsx)(O,Object(r.a)({},e))}))})]}),Object(x.jsx)("div",{className:"floating-bar",children:i.map((function(e){return Object(x.jsx)(L,Object(r.a)({},e))}))})]})}var _=n(209),I=n(203),C=n(211),S=n(121),R=n(202),T=n(109),M=n.n(T),P=n(110),F=n.n(P),A=n(111),z=n.n(A),W=n(112),B=n.n(W),H=n(108),q=n.n(H),G=(n(162),[{name:"all",path:"/",icon:Object(x.jsx)(q.a,{})},{name:"hot",path:"/filter/hot",icon:Object(x.jsx)(M.a,{})},{name:"new",path:"/filter/new",icon:Object(x.jsx)(F.a,{})},{name:"rising",path:"/filter/rising",icon:Object(x.jsx)(z.a,{})},{name:"top",path:"/filter/top",icon:Object(x.jsx)(B.a,{})}]),J=(Object(S.a)(),Object(R.a)((function(e){return{listItem:{fontWeight:500,"&:hover":{background:"none","& .MuiTypography-root":{color:e.palette.warning.main},"& .MuiListItemIcon-root > svg":{color:e.palette.warning.main}}},activeLink:{textDecoration:"none","& .MuiListItem-root":{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",color:"white","& .MuiTypography-root":{color:"white"},"& .MuiListItemIcon-root > svg":{color:"white"}}},link:{color:e.palette.text.primary,textDecoration:"none"}}}))),Y=function(){var e=J();return Object(x.jsx)("div",{style:{textTransform:"uppercase",maxWidth:"100%"},children:G.map((function(t,n){return Object(x.jsx)(f.c,{className:function(t){return t.isActive?e.activeLink:e.link},to:t.path,children:Object(x.jsxs)(_.a,{style:{maxWidth:"100%",padding:"5px 0"},children:[Object(x.jsx)(I.a,{children:t.icon}),Object(x.jsx)(C.a,{style:{maxWidth:"100%"},children:t.name})]},n)},t.name)}))})},K=n(82),V=n(59),X=n(113),Q=(n(163),function(e){var t=Object(w.b)(),n=Object(w.c)((function(e){return e.subredditAbout})),r=n.isLoading,a=n.subredditaboutData;if(Object(c.useEffect)((function(){t(Object(K.a)(e.about))}),[]),r)return Object(x.jsx)("div",{children:"Loading"});var s=a.data;return Object(x.jsxs)("div",{className:"subreddit-about",children:[Object(x.jsx)("div",{className:"about-title",children:Object(x.jsxs)("p",{children:["About ",s.display_name," Community"]})}),Object(x.jsx)("section",{className:"about-section",children:Object(x.jsxs)("div",{children:[""===s.public_description?Object(x.jsxs)("p",{children:["Welcome to ",s.title]}):Object(x.jsx)("p",{children:s.public_description}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginLeft:"5px"},children:[Object(x.jsxs)("div",{className:"about-subscribers",children:[Object(x.jsx)("div",{children:Object(p.a)(s.subscribers)}),Object(x.jsx)("p",{children:"Members"})]}),Object(x.jsxs)("div",{className:"about-subscribers",children:[Object(x.jsx)("div",{children:Object(p.a)(s.accounts_active)}),Object(x.jsx)("p",{children:"Online"})]})]})]})}),Object(x.jsxs)("div",{className:"about-footer",children:[Object(x.jsx)(X.a,{}),Object(x.jsx)("p",{children:"\xa0Created"}),Object(x.jsxs)("p",{children:["\xa0",Object(V.a)(1e3*s.created)[0]]})]})]})}),U=n(83),Z=(n(164),n(114)),$=function(e){var t=Object(w.b)(),n=Object(w.c)((function(e){return e.userAbout})),r=n.isLoading,a=n.useraboutData;if(Object(c.useEffect)((function(){t(Object(U.a)(e.username))}),[]),r)return Object(x.jsx)("div",{children:"Loading..."});var s=a.data;return Object(x.jsxs)("div",{className:"user-about",children:[Object(x.jsx)("div",{className:"banner-image",children:s.subreddit.banner_img&&Object(x.jsx)("img",{className:"banner-image",src:function(e){var t=e.split(/(jpg|jpeg|png|gif|bmp)/);return t[0]+t[1]}(s.subreddit.banner_img),alt:"banner_img"})}),Object(x.jsxs)("section",{style:{zIndex:100},children:[Object(x.jsx)("div",{className:"user-icon",children:Object(x.jsx)("img",{style:{height:"200px",paddingBottom:"10px"},src:s.snoovatar_img?s.snoovatar_img:"https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png",alt:"snoovatar_img"})}),Object(x.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bold",fontSize:"1.2rem"},children:s.name}),Object(x.jsx)("p",{className:"user-description",children:s.subreddit.public_description}),Object(x.jsxs)("div",{className:"user-midsection",children:[Object(x.jsxs)("div",{className:"karma",children:[Object(x.jsx)("p",{children:"Karma"}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(x.jsx)(b.a,{}),"\xa0",Object(p.a)(s.comment_karma)]})]}),Object(x.jsxs)("div",{className:"karma",children:[Object(x.jsx)("p",{children:"Cake Day"}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(x.jsx)(Z.a,{}),"\xa0",Object(V.a)(1e3*s.created)[0]]})]})]})]})]})},ee=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"side-bar",children:[e.filter&&Object(x.jsx)(Y,{}),e.about&&Object(x.jsx)(Q,{about:e.subreddittype}),e.user&&Object(x.jsx)($,{username:e.username}),Object(x.jsx)(D,{})]}),Object(x.jsx)("div",{className:"sidebar-subreddit",children:Object(x.jsx)(D,{})})]})};n(165),t.a=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(g,{}),Object(x.jsxs)("main",{className:"main-content",children:[Object(x.jsx)("section",{className:"section-content",children:e.children}),Object(x.jsx)(ee,Object(r.a)({},e.sideBarProps))]})]})}},72:function(e,t,n){"use strict";n(1);var r=n(20),c=(n(169),n(2));t.a=function(e){return Object(c.jsxs)("div",{className:"card-layout",children:[Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[Object(c.jsx)(r.a,{type:"avatar"}),Object(c.jsx)(r.a,{type:"spantext"}),Object(c.jsx)(r.a,{type:"spantext"}),Object(c.jsx)(r.a,{type:"spantext"})]}),Object(c.jsx)(r.a,{type:"skeleton-title"}),Object(c.jsxs)("div",{style:{paddingRight:"10px"},children:[Object(c.jsx)(r.a,{type:"text"}),Object(c.jsx)(r.a,{type:"text"}),Object(c.jsx)(r.a,{type:"text"})]}),Object(c.jsx)(r.a,{type:"skeleton-content"}),Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly"},children:[Object(c.jsx)(r.a,{type:"button"}),Object(c.jsx)(r.a,{type:"button"})]})]})}},73:function(e,t,n){"use strict";n(1);var r=n(2);t.a=function(e){return Object(r.jsx)("div",{style:{textAlign:"center",fontSize:"3rem",backgroundColor:" #FFCCCC",margin:"20px"},children:e.error&&Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Your connection is currently offline!"}),Object(r.jsx)("p",{children:e.error})]})})}},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(17),c=n(1),a=n(98),s=(n(126),n(2));function i(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){var t=e.postData.filter((function(e){return"t3"===e.kind})).map((function(e){return{author:e.data.author,title:e.data.title,url:e.data.url,thumbnail:e.data.thumbnail,ups:e.data.score,upvoteRatio:e.data.upvote_ratio,comments:e.data.permalink,post_hint:e.data.post_hint,isGallery:e.data.is_gallery,galleryData:e.data.gallery_data,subreddit:e.data.subreddit,selfText:e.data.selftext,hsl_video:e.data.secure_media,id:e.data.id,created:e.data.created_utc,numComments:e.data.num_comments}}));return o(t),function(){}}),[e]),Object(s.jsxs)("div",{className:"post-container",id:"post",children:[i.map((function(e,t){return Object(s.jsx)(a.a,{data:e},t)})),0===i.length&&Object(s.jsx)("div",{children:"No Posts"})]})}i.defaultProps={postsData:[]}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l}));var r,c=n(6),a=n(10),s=n.n(a),i=n(14),o=n(15),u=n(25),d=Object(o.b)("subreddit/getAllSubReddit",Object(i.a)(s.a.mark((function e(){var t,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:"",n.length>1?n[1]:void 0,e.next=4,Object(u.d)();case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))),l=Object(o.c)({name:"subreddits",initialState:{status:"idle",isLoading:!0,subredditData:[],isError:"null",error:""},reducers:{},extraReducers:(r={},Object(c.a)(r,d.pending,(function(e){e.isError=!1,e.isLoading=!0})),Object(c.a)(r,d.fulfilled,(function(e,t){e.isError=!1,e.isLoading=!1,e.subredditData=t.payload,e.status="succeeded"})),Object(c.a)(r,d.rejected,(function(e,t){e.isError=!0,e.error=t.error,e.isLoading=!1,e.status="failed"})),r)}).reducer},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l}));var r,c=n(6),a=n(10),s=n.n(a),i=n(14),o=n(25),u=n(15),d=Object(u.b)("subreddit/subredditAbout",function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.e)(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(u.c)({name:"subreddits",initialState:{status:"idle",isLoading:!0,subredditaboutData:[],isError:"null",error:""},reducers:{},extraReducers:(r={},Object(c.a)(r,d.pending,(function(e){e.isError=!1,e.isLoading=!0})),Object(c.a)(r,d.fulfilled,(function(e,t){e.isError=!1,e.isLoading=!1,e.subredditaboutData=t.payload,e.status="succeeded"})),Object(c.a)(r,d.rejected,(function(e,t){e.isError=!0,e.error=t.error,e.isLoading=!1,e.status="failed"})),r)}).reducer},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l}));var r,c=n(6),a=n(10),s=n.n(a),i=n(14),o=n(25),u=n(15),d=Object(u.b)("user/userAbout",function(){var e=Object(i.a)(s.a.mark((function e(t,n){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.g)(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),l=Object(u.c)({name:"users",initialState:{status:"idle",isLoading:!0,useraboutData:[],isError:"null",error:""},reducers:{},extraReducers:(r={},Object(c.a)(r,d.pending,(function(e){e.isError=!1,e.isLoading=!0})),Object(c.a)(r,d.fulfilled,(function(e,t){e.isError=!1,e.isLoading=!1,e.useraboutData=t.payload,e.status="succeeded"})),Object(c.a)(r,d.rejected,(function(e,t){e.isError=!0,e.error=t.error,e.isLoading=!1,e.status="failed"})),r)}).reducer},97:function(e,t,n){},98:function(e,t,n){"use strict";var r=n(17),c=n(1),a=(n(166),n(115)),s=n.n(a),i=n(125),o=n(50),u=n(116),d=n(19),l=n(59),j=n(118),b=n.n(j),f=n(119),p=n.n(f),x=n(94),O=n.n(x),h=n(38),m=n(7),v=n(2);t.a=function(e){var t=Object(c.useState)(!0),n=Object(r.a)(t,2),a=n[0],j=(n[1],Object(c.useState)(null)),f=Object(r.a)(j,2),x=f[0],g=f[1],y=Object(c.useRef)(),w=new s.a;Object(c.useEffect)((function(){g(e.data)}),[]);var k=Object(m.e)().pathname;Object(c.useEffect)((function(){if(void 0!==y.current){var e=x.hsl_video.reddit_video.hls_url;w.loadSource(e),w.attachMedia(y.current)}}));return Object(v.jsx)("div",{children:x&&Object(v.jsxs)("div",{className:"card",children:[Object(v.jsxs)("div",{className:"header",children:[function(){var e=new Image;return e.src=x.url,x.url.match(/(jpg|jpeg|png|gif|bmp)/)&&0!==e.height?Object(v.jsx)(i.a,{alt:x.title,src:x.url}):Object(v.jsx)(i.a,{children:x.author[0]})}(),Object(v.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",lineHeight:"0rem"},children:[Object(v.jsx)(d.b,{className:"card-subreddit",style:{textDecoration:"none",color:"black"},to:"/subreddit/".concat(x.subreddit),children:Object(v.jsx)("p",{children:x.subreddit})}),Object(v.jsx)("p",{style:{color:"grey"},children:" posted by "})," ",Object(v.jsx)(d.b,{className:"card-author",style:{textDecoration:"none",color:"grey"},to:"/user/".concat(x.author),children:Object(v.jsx)("p",{children:x.author})}),Object(v.jsxs)("p",{style:{color:"grey"},children:["\xa0",function(e){var t=Object(l.a)(e);return Object(l.b)(t)}(1e3*x.created)]})]})]}),Object(v.jsxs)("div",{className:"section",children:[e.nolink?Object(v.jsx)("h4",{className:"title",children:x.title}):Object(v.jsx)(d.b,{style:{textDecoration:"none",color:"black"},to:{pathname:"/".concat(x.subreddit,"/comments/").concat(x.id)},children:Object(v.jsx)("h4",{className:"title",children:x.title})}),function(){var e=new Image,t=/comments/;return"image"===x.post_hint&&(e.src=x.url),"image"===x.post_hint&&void 0===x.isGallery?Object(v.jsx)("img",{className:"section-image",src:x.url,alt:"none"}):void 0===x.post_hint&&0!==x.selfText.length?k.match(t)?Object(v.jsx)("p",{style:{WebkitLineClamp:"none"},className:"selfText",children:x.selfText}):Object(v.jsx)("p",{style:{WebkitLineClamp:2},className:"selfText",children:x.selfText}):void 0!==x.post_hint||0!==x.selfText.length||x.url.match(t)?"link"===x.post_hint?Object(v.jsx)("div",{className:"section-link",children:Object(v.jsx)("a",{rel:"noopener",href:x.url,children:Object(v.jsxs)("div",{className:"external-link",children:[Object(v.jsx)(o.b,{style:{paddingRight:5}}),"External Link"]})})}):"hosted:video"===x.post_hint?Object(v.jsx)(u.a,{onEnter:function(){if(void 0!==y.current)try{void 0!==y.current.play()&&y.current.play()}catch(e){}},onLeave:function(){if(void 0!==y.current)try{void 0!==y.current.pause()&&y.current.pause()}catch(e){}},topOffset:"30%",bottomOffset:"50%",children:Object(v.jsx)("div",{className:"section-video",onClick:function(){void 0!==y.current&&(y.current.muted=!y.current.muted)},children:Object(v.jsx)("video",{style:{margin:"auto",maxHeight:" 500px",maxWidth:"560px"},preload:"auto",ref:function(e){y.current=e},width:"100%",height:"100%",muted:a,volume:1})})}):void 0:Object(v.jsx)("div",{className:"section-link",children:Object(v.jsx)("a",{rel:"noopener",href:x.url,children:Object(v.jsxs)("div",{className:"external-link",children:[Object(v.jsx)(o.b,{style:{paddingRight:5}}),"External Link"]})})})}()]}),Object(v.jsxs)("footer",{className:"card-footer",children:[Object(v.jsxs)("div",{className:"upVote",children:[Object(v.jsx)(b.a,{}),Object(h.a)(x.ups),Object(v.jsx)(p.a,{})]}),e.nolink?Object(v.jsxs)("div",{className:"comment-num",children:[Object(v.jsx)(O.a,{}),Object(h.a)(x.numComments)]}):Object(v.jsx)(d.b,{style:{textDecoration:"none",color:"black"},to:{pathname:"/".concat(x.subreddit,"/comments/").concat(x.id)},children:Object(v.jsxs)("div",{className:"comment-num",children:[Object(v.jsx)(O.a,{}),Object(h.a)(x.numComments)]})})]})]})})}}},[[171,1,2]]]);
//# sourceMappingURL=main.cebfb47c.chunk.js.map