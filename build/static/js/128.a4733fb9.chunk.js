(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[128,151],{1117:function(e,t,a){"use strict";a.r(t);var l=a(207),n=a(202),o=a(203),c=a(204),r=a(205),s=a(341),i=a(342),u=a(118),m=a(0),d=a.n(m),h=a(827),g=a(26),f=a(680),v=a.n(f),p=a(857),S=a(218),E=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(e){var o,c;return Object(n.a)(this,a),(c=t.call(this,e)).formatTime=function(e){var t="0".concat(e%60).slice(-2),a="".concat(Math.floor(e/60)),l="0".concat(a%60).slice(-2),n="0".concat(Math.floor(e/3600)).slice(-2);return"".concat(n," : ").concat(l," : ").concat(t)},c.handlestartinterval=function(){c.apicall.current=setInterval((function(){Object(S.a)();JSON.parse(localStorage.getItem("user_id")),localStorage.getItem("videoCallAstro_id");sessionStorage.setItem("typeofcall","videocall")}),6e4)},c.handleStart=function(){c.setState({setIsPaused:!0}),setInterval((function(){c.setState({setTimer:c.state.setTimer+1})}),1e3)},c.handlePause=function(){clearInterval(c.countRef.current),clearInterval(c.apicall.current),c.setState({setIsPaused:!1})},c.rtcProps={appId:"7d1f07c76f9d46be86bc46a791884023",channel:localStorage.getItem("userchannel_name"),token:localStorage.getItem("usertoken_for_videocall")||c.state.userVideocalltoken,uid:1},c.callbacks=(o={},Object(l.a)(o,"user-joined",(function(e){e&&(c.handleStart(),c.handlestartinterval(),c.setState({Loader:!1}),v()("Astrologer Joined"))})),Object(l.a)(o,"user-left",(function(e){if(e){sessionStorage.setItem("typeofcall","Videocall"),c.handlePause(),clearInterval(c.apicall.current),v()("Astro leave the Videocall");var t={userId:localStorage.getItem("user_id"),astroId:localStorage.getItem("astroId")};g.a.post("/user/changeStatus",t).then((function(e){console.log(e.data),c.props.history.push("/astrorating")})).catch((function(e){console.log(e.response)}))}})),Object(l.a)(o,"EndCall",(function(){c.setState({setVideoCall:!1}),c.handlePause(),clearInterval(c.apicall.current),sessionStorage.setItem("typeofcall","Videocall");var e={userId:localStorage.getItem("user_id"),astroId:localStorage.getItem("astroId")};g.a.post("/user/changeStatus",e).then((function(e){console.log(e.data),c.props.history.push("/astrorating")})).catch((function(e){console.log(e.response)}))})),o),c.countRef=d.a.createRef(),c.apicall=d.a.createRef(),c.state={setTimer:0,Loader:!0,setIsPaused:!1,hours:0,minutes:0,seconds:0,stream:null,changeView:!1,userid:"",astroid:"",mobile:"",userData:{},data:[],setVideoCall:!1,toggle:!0,userVideocalltoken:""},c}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("userchannel_name");this.setState({userchannelname:t});localStorage.getItem("usertoken_for_videocall");this.setState({usertoken:t});var a=JSON.parse(localStorage.getItem("user_id")),l={userAccount:a,astroAccount:localStorage.getItem("videoCallAstro_id")};g.a.post("/user/userVideoCall",l).then((function(t){var a,l,n;e.setState({userVideocalltoken:null===t||void 0===t||null===(a=t.data)||void 0===a?void 0:a.userAccount}),localStorage.setItem("usertoken_for_videocall",null===t||void 0===t||null===(l=t.data)||void 0===l?void 0:l.userAccount),localStorage.setItem("userchannel_name",null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.channelName),e.setState({changeView:!0}),e.setState({setVideoCall:!0})})).catch((function(e){console.log(e)})),g.a.get("/user/viewoneuser/".concat(a)).then((function(t){console.log("videocal",t),e.setState({mobile:t.data.data.mobile}),e.setState({userData:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return d.a.createElement(u.a,{headerTop:"visible"},d.a.createElement(d.a.Fragment,null,this.state.Loader?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"d-flex justify-content-center"},d.a.createElement("h2",{className:"mt-5"},"Wait Till Astrologer Joins Room..."))):null,d.a.createElement(d.a.Fragment,null,!0===this.state.changeView?d.a.createElement(d.a.Fragment,null,d.a.createElement("section",null,!0===this.state.setVideoCall?d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,null,d.a.createElement(i.a,{className:"d-flex justify-content-center"},d.a.createElement("p",null,this.state.Loader?null:d.a.createElement(d.a.Fragment,null,this.formatTime(this.state.setTimer))))),d.a.createElement("div",{style:{display:"flex",width:"90vw",height:"80vh"}},d.a.createElement(h.a,{rtcProps:this.rtcProps,callbacks:this.callbacks}))):d.a.createElement(d.a.Fragment,null," ",d.a.createElement(p.default,null)))):null)))}}]),a}(d.a.Component);t.default=E},857:function(e,t,a){"use strict";a.r(t);var l=a(202),n=a(203),o=a(204),c=a(205),r=a(0),s=a.n(r),i=a(2),u=a(340),m=a(341),d=a(342),h=(a(212),function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).videocallreview=function(){console.log("object"),sessionStorage.setItem("typeofcall","videocall")},n}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"col-lg-12 col-md-12 mb-30 container"},s.a.createElement("div",{className:"category-home"},s.a.createElement("section",null,s.a.createElement(u.a,null,s.a.createElement(m.a,null,s.a.createElement(d.a,{md:"12"},s.a.createElement("div",{className:"content"},s.a.createElement("div",{ClassName:"wrap-1"},s.a.createElement("div",{className:"wrap-2"},s.a.createElement("h1",{className:"animate-charcter"},"Thank you !"),s.a.createElement("p",null,"Thank you for being our valued customer.",s.a.createElement("br",null)," We are so grateful and hope we met your expectations."," "),s.a.createElement(i.c,{to:"/"},s.a.createElement("button",{className:"go-home"},"Go to Home")),s.a.createElement(i.c,{to:"/astrorating"},s.a.createElement("button",{className:"go-home"},"Add Review")))))))))))}}]),a}(s.a.Component));t.default=h}}]);
//# sourceMappingURL=128.a4733fb9.chunk.js.map