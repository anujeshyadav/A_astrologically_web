(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[87],{1148:function(e,t,a){"use strict";a.r(t);var n=a(201),l=a(202),r=a(203),o=a(204),c=a(0),s=a.n(c),i=a(776),u=(a(690),a(26)),d=a(337),m=a(338),b=a(339),p=a(118),f=a(209),E=a.n(f),g=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("user_id"));u.a.get("/user/walletHistory/".concat(e)).then((function(e){console.log(e.data),!0===e.data.status&&l.setState({WalletTransacList:e.data.data})})).catch((function(e){console.log(e),console.log(e.response)})),u.a.get("/user/viewoneuser/".concat(e)).then((function(e){console.log("sjdfjdfg",e.data.data),l.setState({amount:e.data.data.amount})})).catch((function(e){console.log(e)}))},l.state={WalletTransacList:[],data:{}},l}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.WalletTransacList;return s.a.createElement(p.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(E.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(d.a,null,s.a.createElement(m.a,null,s.a.createElement(b.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Wallet Transactions"),s.a.createElement("h3",null,"Available balance : ",s.a.createElement("span",null,this.state.amount)))))))),s.a.createElement("section",null,s.a.createElement(d.a,null,s.a.createElement(m.a,null,s.a.createElement(b.a,{lg:"12"},s.a.createElement("div",{className:""},s.a.createElement(i.a,{striped:!0,className:""},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"# T/C ID."),s.a.createElement("th",null,"Amount Before"),s.a.createElement("th",null,"Transaction Amount"),s.a.createElement("th",null,"Amount After"),s.a.createElement("th",null,"Date/Time"),s.a.createElement("th",null,"Transaction Type"))),s.a.createElement("tbody",null,e.length?e.map((function(e,t){return s.a.createElement("tr",null,s.a.createElement("th",null,e.transaction_id,e.conversationId),s.a.createElement("td",null,e.beforeAmt),s.a.createElement("td",null,e.deductedAmt," ",e.creditedAmt),s.a.createElement("td",null,e.finalAmt),s.a.createElement("td",null,e.createdAt),s.a.createElement("td",null,e.tran_Type))})):null))))))))}}]),a}(s.a.Component);t.default=g},690:function(e,t,a){},776:function(e,t,a){"use strict";var n=a(7),l=a(14),r=a(0),o=a.n(r),c=a(3),s=a.n(c),i=a(58),u=a.n(i),d=a(36),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],b={className:s.a.string,cssModule:s.a.object,size:s.a.string,bordered:s.a.bool,borderless:s.a.bool,striped:s.a.bool,dark:s.a.bool,hover:s.a.bool,responsive:s.a.oneOfType([s.a.bool,s.a.string]),tag:d.o,responsiveTag:d.o,innerRef:s.a.oneOfType([s.a.func,s.a.string,s.a.object])},p=function(e){var t=e.className,a=e.cssModule,r=e.size,c=e.bordered,s=e.borderless,i=e.striped,b=e.dark,p=e.hover,f=e.responsive,E=e.tag,g=e.responsiveTag,v=e.innerRef,h=Object(l.a)(e,m),T=Object(d.k)(u()(t,"table",!!r&&"table-"+r,!!c&&"table-bordered",!!s&&"table-borderless",!!i&&"table-striped",!!b&&"table-dark",!!p&&"table-hover"),a),k=o.a.createElement(E,Object(n.a)({},h,{ref:v,className:T}));if(f){var j=Object(d.k)(!0===f?"table-responsive":"table-responsive-"+f,a);return o.a.createElement(g,{className:j},k)}return k};p.propTypes=b,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p}}]);
//# sourceMappingURL=87.7e2419fe.chunk.js.map