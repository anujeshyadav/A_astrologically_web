(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[123],{1154:function(e,t,a){"use strict";a.r(t);a(41);var n=a(22),c=a(0),r=a.n(c),l=a(208),i=a(47),s=a(119),o=a(59),u=a(118),d=a(676),m=a(26),f=a(339),b=a(23),p=a(680),g=a.n(p);t.default=Object(i.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,a,n){e(Object(o.g)(t,a,n))},addToWishlist:function(t,a,n){e(Object(s.d)(t,a,n))},deleteFromWishlist:function(t,a,n){e(Object(s.f)(t,a,n))},deleteAllFromWishlist:function(t){e(Object(s.e)(t))}}}))((function(e){var t=e.location,a=(e.args,t.pathname),i=Object(c.useState)([]),s=Object(n.a)(i,2),o=(s[0],s[1],Object(c.useState)(!1)),p=Object(n.a)(o,2),v=(p[0],p[1],Object(c.useState)({})),E=Object(n.a)(v,2),O=(E[0],E[1],Object(b.useHistory)());return Object(c.useEffect)((function(){localStorage.getItem("user_id")&&function(){var e=setInterval((function(){var t=JSON.parse(localStorage.getItem("user_id"));m.a.get("/user/getOnenotificationByastro/".concat(t)).then((function(t){var a,n;console.log("request accepted ",t.data.data),console.log("notificationid",t.data.data),"Accept"===(null===t||void 0===t||null===(a=t.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.status)&&(g()("Request Accepted","Wait Till Astro Joins Videocall"),clearInterval(e),O.push("/userVideoCall/${userId}"))})).catch((function(e){}))}),5e3)}()}),[]),r.a.createElement(c.Fragment,null,r.a.createElement(l.BreadcrumbsItem,{to:"/"},"Home"),r.a.createElement(l.BreadcrumbsItem,{to:""+a},"Waiting page"),r.a.createElement(u.a,{headerTop:"visible"},r.a.createElement(d.a,null),r.a.createElement("section",{style:{padding:"180px 0px"}},r.a.createElement(f.a,null,r.a.createElement("div",{className:"d-flex justify-content-center align-item-center"},r.a.createElement("h3",null,"Wait Till Astrologer Accept Your Request..."))))))}))},676:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(2),l=a(208);t.a=function(){return c.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"breadcrumb-content text-center"},c.a.createElement(l.Breadcrumbs,{separator:c.a.createElement("span",null,"/"),item:r.d,finalItem:"span"}))))}}}]);
//# sourceMappingURL=123.83b862e3.chunk.js.map