(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[123],{1155:function(e,t,a){"use strict";a.r(t);a(41);var n=a(22),c=a(0),o=a.n(c),i=a(209),l=a(47),r=a(119),s=a(59),d=a(118),u=a(676),m=a(26),f=a(340),v=a(23),b=a(680),g=a.n(b);t.default=Object(l.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(s.g)(t,a,n))},addToWishlist:function(t,a,n){e(Object(r.d)(t,a,n))},deleteFromWishlist:function(t,a,n){e(Object(r.f)(t,a,n))},deleteAllFromWishlist:function(t){e(Object(r.e)(t))}}}))((function(e){var t=e.location,a=(e.args,t.pathname),l=Object(c.useState)([]),r=Object(n.a)(l,2),s=(r[0],r[1],Object(c.useState)(!1)),b=Object(n.a)(s,2),p=(b[0],b[1],Object(c.useState)({})),h=Object(n.a)(p,2),O=(h[0],h[1],Object(v.useHistory)()),j=Object(v.useLocation)();return Object(c.useEffect)((function(){localStorage.getItem("user_id")&&function(){var e=setInterval((function(){var t,a;JSON.parse(localStorage.getItem("user_id"));console.log(null===(t=j.state)||void 0===t?void 0:t._id);var n=(null===j||void 0===j||null===(a=j.state)||void 0===a?void 0:a._id)||sessionStorage.getItem("notificationdata");console.log(n),m.a.get("/user/getOnenotificationByastro/".concat(n)).then((function(t){var a,n,c,o,i,l;(console.log("request status ",t.data.data),console.log("notificationid",t.data.data),"Accept"===(null===t||void 0===t||null===(a=t.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.status)&&"Video"===(null===t||void 0===t||null===(c=t.data)||void 0===c||null===(o=c.data)||void 0===o?void 0:o.type))&&(g()("Request Accepted","Wait Till Astro Joins Videocall"),clearInterval(e),O.push("/userVideoCall/".concat(null===(i=t.data.data)||void 0===i?void 0:i._id)),m.a.get("/admin/dltNotificattion/".concat(null===(l=t.data.data)||void 0===l?void 0:l._id)).then((function(e){console.log("notification deleted",e)})).catch((function(e){console.log(e)})))})).catch((function(e){}))}),5e3)}()}),[]),o.a.createElement(c.Fragment,null,o.a.createElement(i.BreadcrumbsItem,{to:"/"},"Home"),o.a.createElement(i.BreadcrumbsItem,{to:""+a},"Waiting page"),o.a.createElement(d.a,{headerTop:"visible"},o.a.createElement(u.a,null),o.a.createElement("section",{style:{padding:"180px 0px"}},o.a.createElement(f.a,null,o.a.createElement("div",{className:"d-flex justify-content-center align-item-center"},o.a.createElement("h3",null,"Wait Till Astrologer Accept Your Request..."))))))}))},676:function(e,t,a){"use strict";var n=a(0),c=a.n(n),o=a(2),i=a(209);t.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(i.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:o.d,finalItem:"span"}))))}}}]);
//# sourceMappingURL=123.0a12758d.chunk.js.map