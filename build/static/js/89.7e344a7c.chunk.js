(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[89],{1146:function(e,a,t){"use strict";t.r(a);var l=t(201),n=t(202),i=t(212),o=t(203),c=t(204),r=t(0),s=t.n(r),u=t(2),d=t(58),m=t.n(d),g=t(339),v=t(340),h=t(341),E=t(743),f=t(741),p=t(742),b=t(1151),k=t(1147),N=t(1148),y=t(1149),S=t(1150),C=t(209),_=t.n(C),w=t(697),x=t(736),A=t(911),F=(t(691),t(118)),T=t(26),I=t(844),L=t(680),M=t.n(L),D=t(217),O=t(891),j=(t(925),function(e){Object(o.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).togglefilter=function(e){n.state.activeTab!==e&&n.setState({activeTab:e})},n.FilterAstro=function(e){e.preventDefault(),n.toggle();var a=n.state.Skilldata,t=n.state.AstroStatus,l=n.state.Astrolanguage,i=n.state.astroSpecialzation;T.a.get("/user/getAstroFilter?language=".concat(l,"&all_skills=").concat(a,"&status=").concat(t,"&specification=").concat(i)).then((function(e){var a;console.log(null===e||void 0===e?void 0:e.data),n.setState({astrologerList:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.astrologers})})).catch((function(e){console.log(e)}))},n.submitHandler=function(e){e.preventDefault(),console.log(n.state.data);var a=new FormData;a.append("fullname",n.state.fullname),a.append("email",n.state.email),a.append("mobile",n.state.mobile),a.append("gender",n.state.gender),a.append("city",n.state.city),a.append("dob",n.state.dob),null!==n.state.selectedFile&&a.append("userimg",n.state.selectedFile,n.state.selectedName),T.a.post("/user/usersignup",a).then((function(e){console.log(e.data.msg),localStorage.setItem("auth-token",e.data.token),n.setState({otpMsg:e.data.otp}),M()("Success!"," Register Successful Done!","success"),n.props.history.push("/")})).catch((function(e){console.log(e.response),M()("Error!","Something went wrong","error")}))},n.handlestartInterval=function(){setInterval((function(){Object(D.a)(),T.a.get("/admin/allAstro").then((function(e){!0===e.data.status&&n.setState({astrologerList:e.data.data})})).catch((function(e){console.log(e)}))}),3e4)},n.componentDidMount=function(){T.a.get("/admin/allAstro").then((function(e){!0===e.data.status&&(n.setState({astrologerList:e.data.data}),n.handlestartInterval())})).catch((function(e){console.log(e),console.log(e.response)})),T.a.get("/user/price_high_to_low").then((function(e){!0===e.data.status&&n.setState({price_high_to_low:e.data.data})})).catch((function(e){console.log(e),console.log(e.response)}))},n.submitHandlerCall=function(e,a,t,l,i){e.preventDefault(),console.log(l);var o=JSON.parse(localStorage.getItem("user_id"));if(localStorage.setItem("astroId",a),localStorage.setItem("astroname",null===l||void 0===l?void 0:l.fullname),""!==o&&null!==o){var c,r={userid:o,astroid:a};if(0===(null===l||void 0===l?void 0:l.waiting_tym)&&"Busy"!==(null===l||void 0===l?void 0:l.callingStatus))T.a.post("/user/addCallWallet",r).then((function(e){var a;console.log("@@@callingmode",e.data),"success"===(null===(a=e.data)||void 0===a?void 0:a.msg)?n.props.history.push("/UserRequestFormCall"):M()("Recharge Now","You Donot have Enough balance to Make This Call",{buttons:{cancel:"Recharge Now",catch:{text:"Cancel ",value:"catch"}}}).then((function(e){switch(e){case"catch":break;default:n.props.history.push("/walletmoney")}}))})).catch((function(e){console.log(e)}));else M()("Astrologer is Busy for ".concat(null===(c=n.state.astroData)||void 0===c?void 0:c.waiting_tym," Min"),"Do You Want to Be in queue ",{buttons:{cancel:"Be in queue",catch:{text:"Cancel ",value:"catch"}}}).then((function(e){switch(e){case"catch":break;default:var a=localStorage.getItem("astroId"),t=(JSON.parse(localStorage.getItem("user_id")),{userId:n.state.UserId,callType:"VoiceCall"});T.a.post("/user/make_another_call/".concat(a),t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}))}else M()("Need to Login first")},n.filterMethod=function(e){T.a.get("/user/"+e).then((function(e){console.log(e.data),!0===e.data.status&&n.setState({astrologerList:e.data.data})})).catch((function(e){console.log(e),console.log(e.response)}))},n.Detailpage=function(e,a){e.preventDefault(),n.props.history.push("/astrologerdetail/".concat(a))},n.state={AstroStatus:"",Astrolanguage:"",astroSpecialzation:"",Skilldata:"",fullname:"",email:"",mobile:"",dob:"",gender:"",city:"",userimg:"",selectedName:"",selectedFile:null,otp:"",otpMsg:"",callingmode:!1,indexnow:null,astrologerList:[],From:"",To:"",astroid:"",userid:"",modal:!1,modalone:!1,price_high_to_low:[],activeTab:1},n.toggle=n.toggle.bind(Object(i.a)(n)),n.toggleone=n.toggleone.bind(Object(i.a)(n)),n}return Object(n.a)(t,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"toggleone",value:function(){this.setState({modalone:!this.state.modalone})}},{key:"render",value:function(){var e,a,t,l,n,i,o,c,r=this,d=this.state.astrologerList;return s.a.createElement(F.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(_.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(g.a,null,s.a.createElement(v.a,null,s.a.createElement(h.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"Talk To Astrologer"),s.a.createElement("p",null))))))),s.a.createElement("section",{id:"team",class:"pb-5 "},s.a.createElement(g.a,null,s.a.createElement(v.a,null,s.a.createElement(h.a,{md:"3"},s.a.createElement("div",{className:"bx-list fbg"},s.a.createElement("h3",{className:"mb-3"},s.a.createElement("b",null,"Sort By:")),s.a.createElement("hr",null),s.a.createElement("form",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(I.a.Check,{type:"radio","aria-label":"radio 1",name:"id",onChange:function(){return r.filterMethod("exp_high_to_low")}})),"Experience : High to Low"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(I.a.Check,{type:"radio","aria-label":"radio 2",name:"id",onChange:function(){return r.filterMethod("exp_low_to_high")}})),"Experience : Low to High"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(I.a.Check,{type:"radio","aria-label":"radio 3",name:"id",onChange:function(){return r.filterMethod("price_high_to_low")}})),"Price : High to Low"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(I.a.Check,{type:"radio","aria-label":"radio 4",name:"id",onChange:function(){return r.filterMethod("price_low_to_high")}})),"Price : Low to High"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(I.a.Check,{type:"radio","aria-label":"radio 5",name:"id",onChange:function(){return r.filterMethod("rating_high_to_low")}})),"Rating : High to Low"),s.a.createElement("li",null,s.a.createElement("span",null,s.a.createElement(I.a.Check,{type:"radio","aria-label":"radio 6",name:"id",onChange:function(){return r.filterMethod("rating_low_to_high")}})),"Rating : Low to High"),s.a.createElement("hr",null),s.a.createElement("div",null,s.a.createElement(v.a,null,s.a.createElement(h.a,{lg:"5",md:"5",sm:"5"},s.a.createElement("h3",{className:"mb-3 mt-1"},s.a.createElement(w.a,{className:"filtericon",onClick:function(){return r.toggle()}},"Filter"," ",s.a.createElement("i",{class:"fa fa-filter","aria-hidden":"true"})))),(null===(e=this.state.Skilldata)||void 0===e?void 0:e.length)||(null===(a=this.state.AstroStatus)||void 0===a?void 0:a.length)||(null===(t=this.state.Astrolanguage)||void 0===t?void 0:t.length)||(null===(l=this.state.astroSpecialzation)||void 0===l?void 0:l.length)?s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,null,s.a.createElement("h3",{className:"mb-3 mt-1"},s.a.createElement(w.a,{className:"filtericon",onClick:this.componentDidMount},"ClearFilter",s.a.createElement("i",{class:"fa fa-filter","aria-hidden":"true"}))))):null)))))),s.a.createElement(h.a,{md:"9"},s.a.createElement(v.a,{className:"mt-2"},(null===d||void 0===d?void 0:d.length)?null===d||void 0===d?void 0:d.map((function(e,a){return s.a.createElement(h.a,{md:"4",key:a},s.a.createElement("div",{className:"image-flip"},s.a.createElement("div",{className:"mainflip flip-0"},s.a.createElement("div",{className:"frontside"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("p",{onClick:function(a){return r.Detailpage(a,e._id)}},s.a.createElement(u.c,null,s.a.createElement("img",{src:null===e||void 0===e?void 0:e.img,alt:""}))),s.a.createElement("h4",{className:"card-title"},null===e||void 0===e?void 0:e.fullname),s.a.createElement("ul",{className:"mb-3"},s.a.createElement("li",null,"Specility:"," ",s.a.createElement("span",null,null===e||void 0===e?void 0:e.all_skills)),s.a.createElement("li",null,"Language:"," ",s.a.createElement("span",null,null===e||void 0===e?void 0:e.language)),s.a.createElement("li",null,"Experience:"," ",s.a.createElement("span",null,null===e||void 0===e?void 0:e.exp_in_years)),s.a.createElement("li",null,"Call Rate:"," ",s.a.createElement("span",null,null===e||void 0===e?void 0:e.callCharge,"/Min"))),0===(null===e||void 0===e?void 0:e.waiting_tym)?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"sr-btn",onClick:function(t){return r.submitHandlerCall(t,null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.mobile,e,a)}},!0===r.state.callingmode&&r.state.indexnow===a?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,s.a.createElement("div",{className:"btn btn-primary btn-sm sc"},s.a.createElement("i",{class:"fa fa-phone"},"-Calling...")))):s.a.createElement(s.a.Fragment,null,s.a.createElement("span",null,s.a.createElement("div",{className:"btn btn-success btn-sm sc"},s.a.createElement("i",{class:"fa fa-phone"},"-Call")))))):s.a.createElement(s.a.Fragment,null,s.a.createElement("button",{className:"btn btn-denger wr"},s.a.createElement("i",{class:"fa fa-phone"},"Wait"))),s.a.createElement("br",null),s.a.createElement("span",{value:r.state.waiting_tym}," ","Wait ~ ",e.waiting_tym,"Min")))))))})):null)))),s.a.createElement("div",null,s.a.createElement(E.a,{style:{maxWidth:"900px"},size:"lg",isOpen:this.state.modal,toggle:this.toggle},s.a.createElement(f.a,{toggle:this.toggle},"Filters"),s.a.createElement(p.a,null,s.a.createElement("div",{className:""},s.a.createElement("div",{className:"container"},s.a.createElement("div",null,s.a.createElement(k.a,{tabs:!0,vertical:!0},s.a.createElement(v.a,null,s.a.createElement(v.a,null,s.a.createElement(h.a,{className:"tabcontentheadings",lg:"3",md:"3",sm:"3"},s.a.createElement(v.a,null,s.a.createElement(N.a,{className:"mb-1 mt-1"},s.a.createElement("a",{className:m()({active:"1"===this.state.activeTab}),onClick:function(){r.togglefilter("1")}},s.a.createElement(w.a,{style:{background:"".concat("1"===this.state.activeTab?"#e3ac2e":"none")},className:"filtericon"},s.a.createElement("span",{className:"filtertext",style:{color:"black"}}," ","Skills"))))),s.a.createElement(v.a,null,s.a.createElement(N.a,{className:"mb-1 mt-1"},s.a.createElement("a",{className:m()({active:"2"===this.state.activeTab}),onClick:function(){r.togglefilter("2")}},s.a.createElement(w.a,{className:"filtericon"},s.a.createElement("span",{className:"filtertext",style:{color:"black"}}," ","Specialisation"))))),s.a.createElement(v.a,null,s.a.createElement(N.a,{className:"mb-1 mt-1"},s.a.createElement("a",{className:m()({active:"3"===this.state.activeTab}),onClick:function(){r.togglefilter("3")}},s.a.createElement(w.a,{className:"filtericon"},s.a.createElement("span",{className:"filtertext",style:{color:"black"}}," ","Language"))))),s.a.createElement(v.a,null,s.a.createElement(N.a,{className:"mb-1 mt-1"},s.a.createElement("a",{className:m()({active:"4"===this.state.activeTab}),onClick:function(){r.togglefilter("4")}},s.a.createElement(w.a,{className:"filtericon"},s.a.createElement("span",{className:"filtertext",style:{color:"black"}}," ","Active/Non Active")))))),s.a.createElement(h.a,{className:"tabcontentheadings"},s.a.createElement("div",{className:"tabcontentheading"},s.a.createElement(y.a,{activeTab:this.state.activeTab},s.a.createElement(S.a,{className:"tabidone",tabId:"1"},null===O.a||void 0===O.a?void 0:O.a.map((function(e){return s.a.createElement(b.a,{key:e.id,check:!0},s.a.createElement(x.a,{onClick:function(e){return r.setState({Skilldata:e.target.value})},name:"radio1",type:"radio",value:null===e||void 0===e?void 0:e.value})," ",s.a.createElement(A.a,{check:!0},null===e||void 0===e?void 0:e.value))}))),s.a.createElement(S.a,{className:"tabidone",tabId:"2"},null===O.d||void 0===O.d?void 0:O.d.map((function(e){return s.a.createElement(b.a,{key:e.id,check:!0},s.a.createElement(x.a,{onClick:function(e){return r.setState({astroSpecialzation:e.target.value})},name:"radio2",type:"radio",value:null===e||void 0===e?void 0:e.value})," ",s.a.createElement(A.a,{check:!0},null===e||void 0===e?void 0:e.value))}))),s.a.createElement(S.a,{className:"tabidone",tabId:"3"},null===O.c||void 0===O.c?void 0:O.c.map((function(e){return s.a.createElement(b.a,{key:e.id,check:!0},s.a.createElement(x.a,{onClick:function(e){return r.setState({Astrolanguage:e.target.value})},name:"radio3",type:"radio",value:null===e||void 0===e?void 0:e.value})," ",s.a.createElement(A.a,{check:!0},null===e||void 0===e?void 0:e.value))}))),s.a.createElement(S.a,{className:"tabidone",tabId:"4"},null===O.b||void 0===O.b?void 0:O.b.map((function(e){return s.a.createElement(b.a,{key:e.id,check:!0},s.a.createElement(x.a,{onClick:function(e){return r.setState({AstroStatus:e.target.value})},name:"radio4",type:"radio",value:null===e||void 0===e?void 0:e.value})," ",s.a.createElement(A.a,{check:!0},null===e||void 0===e?void 0:e.value))})))))))))))),s.a.createElement(v.a,null,s.a.createElement(h.a,{lg:"12"},s.a.createElement("div",{className:"d-flex justify-content-center"},s.a.createElement(w.a,{disabled:!((null===(n=this.state.Skilldata)||void 0===n?void 0:n.length)||(null===(i=this.state.AstroStatus)||void 0===i?void 0:i.length)||(null===(o=this.state.Astrolanguage)||void 0===o?void 0:o.length)||(null===(c=this.state.astroSpecialzation)||void 0===c?void 0:c.length)),className:"mt-2",onClick:function(e){return r.FilterAstro(e)},color:"primary"},"Filter Now")))))))))}}]),t}(s.a.Component));a.default=j},691:function(e,a,t){},891:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"d",(function(){return n})),t.d(a,"c",(function(){return i})),t.d(a,"b",(function(){return o}));var l=[{id:"1",value:"Face Reading"},{id:"2",value:"Kp"},{id:"3",value:"Life Coach"},{id:"4",value:"Nadi"},{id:"5",value:"Numerology"},{id:"6",value:"Palmistry"},{id:"7",value:"Prashana"},{id:"8",value:"Psychic"},{id:"9",value:"Tarot"},{id:"10",value:"Vedic"}],n=[{id:"1",value:"Face Reading"},{id:"2",value:"Kp"},{id:"3",value:"Life Coach"},{id:"4",value:"Nadi"},{id:"5",value:"Numerology"},{id:"6",value:"Palmistry"},{id:"7",value:"Prashana"},{id:"8",value:"Psychic"},{id:"9",value:"Tarot"},{id:"10",value:"Vedic"}],i=[{id:"1",value:"English"},{id:"1",value:"Bengali"},{id:"1",value:"Gujarati"},{id:"1",value:"Hindi"},{id:"1",value:"Kannada"},{id:"1",value:"Marathi"},{id:"1",value:"Punjabi"},{id:"1",value:"Tamil"},{id:"1",value:"Telugu"}],o=[{id:"1",value:"Online"},{id:"2",value:"Offline"}]}}]);
//# sourceMappingURL=89.7e344a7c.chunk.js.map