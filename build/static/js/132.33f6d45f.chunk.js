(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[132],{1100:function(e,t,a){"use strict";a.r(t);var l=a(201),n=a(202),r=a(203),o=a(204),s=a(0),c=a.n(s),i=a(337),d=a(338),u=a(339),m=a(776),v=a(209),b=a.n(v),p=a(118),f=(a(690),a(26)),h=(a(854),a(220),function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={userChatList:[]},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=(this.props.match.params.id,JSON.parse(localStorage.getItem("user_id")));f.a.get("/user/userCallHistory/".concat(t)).then((function(t){var a;(console.log("userChatList",t.data.data),!0===t.data.status)&&e.setState({userChatList:null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.userChatList;return c.a.createElement(p.a,{headerTop:"visible"},c.a.createElement("section",{className:"pt-0 pb-0"},c.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(b.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},c.a.createElement(i.a,null,c.a.createElement(d.a,null,c.a.createElement(u.a,{md:"12"},c.a.createElement("div",{className:"leftcont text-left"},c.a.createElement("h1",null,"User Video History"))))))),c.a.createElement("section",null,c.a.createElement(i.a,null,c.a.createElement(d.a,null,c.a.createElement(u.a,{lg:"12"},c.a.createElement("div",{className:""},c.a.createElement(m.a,{striped:!0,className:""},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"#Conversation ID"),c.a.createElement("th",null,"Astrologer Name"),c.a.createElement("th",null,"Conversation Type"),c.a.createElement("th",null,"Rate"),c.a.createElement("th",null,"Duration"),c.a.createElement("th",null,"Deducation"),c.a.createElement("th",null,"Date/Time"))),e.length?e.map((function(e,t){var a,l;return c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,null===e||void 0===e?void 0:e.Sid),c.a.createElement("td",null,null===e||void 0===e||null===(a=e.astroid)||void 0===a?void 0:a.fullname),c.a.createElement("td",null,"Call"),c.a.createElement("td",null,null===e||void 0===e||null===(l=e.astroid)||void 0===l?void 0:l.callCharge,"/Min."),c.a.createElement("td",null,null===e||void 0===e?void 0:e.Duration," Sec"),c.a.createElement("td",null,null===e||void 0===e?void 0:e.userdeductedAmt," Rs"),c.a.createElement("td",null,null===e||void 0===e?void 0:e.DateCreated.split("T")[0])))})):null)))))))}}]),a}(c.a.Component));t.default=h},776:function(e,t,a){"use strict";var l=a(7),n=a(14),r=a(0),o=a.n(r),s=a(3),c=a.n(s),i=a(58),d=a.n(i),u=a(36),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],v={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.o,responsiveTag:u.o,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},b=function(e){var t=e.className,a=e.cssModule,r=e.size,s=e.bordered,c=e.borderless,i=e.striped,v=e.dark,b=e.hover,p=e.responsive,f=e.tag,h=e.responsiveTag,E=e.innerRef,g=Object(n.a)(e,m),k=Object(u.k)(d()(t,"table",!!r&&"table-"+r,!!s&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!v&&"table-dark",!!b&&"table-hover"),a),C=o.a.createElement(f,Object(l.a)({},g,{ref:E,className:k}));if(p){var N=Object(u.k)(!0===p?"table-responsive":"table-responsive-"+p,a);return o.a.createElement(h,{className:N},C)}return C};b.propTypes=v,b.defaultProps={tag:"table",responsiveTag:"div"},t.a=b}}]);
//# sourceMappingURL=132.33f6d45f.chunk.js.map