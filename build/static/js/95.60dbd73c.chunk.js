(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[95],{1089:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(688),r=t.n(c),s=t(209),i=t(118),m=t(676),o=t(825),d=t(826),u=t(874);a.default=function(e){var a=e.location.pathname;return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,null,n.a.createElement("title",null,"Flone | Blog"),n.a.createElement("meta",{name:"description",content:"Blog of flone react minimalist eCommerce template."})),n.a.createElement(s.BreadcrumbsItem,{to:"/"},"Home"),n.a.createElement(s.BreadcrumbsItem,{to:""+a},"Blog"),n.a.createElement(i.a,{headerTop:"visible"},n.a.createElement(m.a,null),n.a.createElement("div",{className:"blog-area pt-100 pb-100"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg-9"},n.a.createElement("div",{className:"mr-20"},n.a.createElement("div",{className:"row"},n.a.createElement(u.a,null)),n.a.createElement(d.a,null))),n.a.createElement("div",{className:"col-lg-3"},n.a.createElement(o.a,null)))))))}},676:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(2),r=t(209);a.a=function(){return n.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"breadcrumb-content text-center"},n.a.createElement(r.Breadcrumbs,{separator:n.a.createElement("span",null,"/"),item:c.d,finalItem:"span"}))))}},825:function(e,a,t){"use strict";var l=t(22),n=t(0),c=t.n(n),r=t(26),s=t(808);a.a=function(e){var a=e.props,t=Object(n.useState)([]),i=Object(l.a)(t,2),m=i[0],o=i[1];Object(s.useHistory)();return Object(n.useEffect)((function(){r.a.get("/user/active_blog_category").then((function(e){console.log(e.data.data),!0===e.data.status&&o(e.data.data)})).catch((function(e){console.log(e)}))}),[]),c.a.createElement("div",{className:"sidebar-style"},c.a.createElement("div",{className:"sidebar-widget mt-35"},c.a.createElement("h4",{className:"pro-sidebar-title"},"Categories"),c.a.createElement("div",{className:"sidebar-widget-list sidebar-widget-list--blog mt-20"},c.a.createElement("ul",null,m&&(null===m||void 0===m?void 0:m.map((function(e){var t;return c.a.createElement("li",{style:{cursor:"pointer"},onClick:function(t){return a.handleswitch(t,e)},key:null===e||void 0===e?void 0:e._id},c.a.createElement("div",{className:"sidebar-widget-list-left"},c.a.createElement("span",{className:"checkmark"}),c.a.createElement("input",{type:"checkbox",name:"id"})," ",c.a.createElement("div",{className:"mx-4"},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.slice(0,30))))})))))))}},826:function(e,a,t){"use strict";var l=t(0),n=t.n(l);a.a=function(){return n.a.createElement("div",{className:"pro-pagination-style text-center mt-20"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{className:"prev"},n.a.createElement("i",{className:"fa fa-angle-double-left"}))),n.a.createElement("li",null,n.a.createElement("button",{className:"active"},"1")),n.a.createElement("li",null,n.a.createElement("button",null,"2")),n.a.createElement("li",null,n.a.createElement("button",{className:"next"},n.a.createElement("i",{className:"fa fa-angle-double-right"})))))}},874:function(e,a,t){"use strict";var l=t(22),n=t(0),c=t.n(n),r=t(2),s=(t(26),t(751)),i=t.n(s),m=t(95),o=t.n(m);a.a=function(e){var a,t=e.data,s=Object(n.useState)(t),m=Object(l.a)(s,2),d=(m[0],m[1]);return Object(n.useEffect)((function(){d(t)}),[t]),c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12"},c.a.createElement("div",{className:"blog-wrap-2 mb-30"},c.a.createElement("div",{className:"blog-img-2"},c.a.createElement(r.c,{to:"/blog-details-standard/"+(null===t||void 0===t?void 0:t._id)},c.a.createElement("img",{style:{borderRadius:"8px"},height:"200px",width:"420px",src:null===t||void 0===t?void 0:t.blogImg,alt:""}))),c.a.createElement("div",{className:"blog-content-2"},c.a.createElement("div",{className:"blog-meta-2"},c.a.createElement("ul",null,c.a.createElement("li",null," CreatedAt:- ",null===t||void 0===t||null===(a=t.createdAt)||void 0===a?void 0:a.split("T")[0]))),c.a.createElement("h4",null,c.a.createElement(r.c,{to:"/blog-details-standard"+(null===t||void 0===t?void 0:t._id)},null===t||void 0===t?void 0:t.blog_title)),c.a.createElement(i.a,{lines:2,more:"Show more",less:"Show less",anchorClass:""},o()(null===t||void 0===t?void 0:t.desc))))))}}}]);
//# sourceMappingURL=95.60dbd73c.chunk.js.map