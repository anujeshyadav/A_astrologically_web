(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[143],{676:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(2),c=a(208);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.d,finalItem:"span"}))))}},905:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a(206),r=a(201),l=a(202),c=a(212),i=a(203),s=a(204),o=a(0),m=a.n(o),u=a(686),p=a.n(u),d=a(906),b=a.n(d),E=(a(48),a(699)),v=a(118),h=a(676),f=a(26),g=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={otp:""},e.resenddd=function(){e.setState({otp:""}),e.interval(),e.sendOtp()},e.state={customer_email:"",mobile:"",otp:"123456",msg:"",input:{},errors:{}},e.handleChange=function(t){return e.setState({otp:t})},e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e}return Object(l.a)(a,[{key:"interval",value:function(){this.setState({seconds:26})}},{key:"handleChange",value:function(e){this.setState(Object(n.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),f.a.post("/user/verifyotp",this.state).then((function(e){console.log(e),alert("anjali")})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){return m.a.createElement(o.Fragment,null,m.a.createElement(p.a,null,m.a.createElement("title",null,"Buynaa | Login"),m.a.createElement("meta",{name:"description",content:"Compare page of flone react minimalist eCommerce template."})),m.a.createElement(v.a,{headerTop:"visible"},m.a.createElement(h.a,null),m.a.createElement("div",{className:"login-register-area pt-100 pb-100"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"row"},m.a.createElement("div",{className:"col-lg-7 col-md-12 ml-auto mr-auto"},m.a.createElement("div",{className:"login-register-wrapper"},m.a.createElement(E.a.Container,{defaultActiveKey:"login"},m.a.createElement(E.a.Content,null,m.a.createElement(E.a.Pane,{eventKey:"login"},m.a.createElement("div",{className:"login-form-container"},m.a.createElement("div",{className:"login-register-form"},m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("div",null,m.a.createElement(b.a,{value:this.state.otp,onChange:this.handleChange,numInputs:4,type:"number",name:"otp",separator:m.a.createElement("span",null)}),this.state.OTPError?this.state.OTPError:null),m.a.createElement("div",{className:"button-box"},m.a.createElement("button",{type:"back"},"Back"),m.a.createElement("button",{type:"submit"},"SendOTP")))))))))))))))}}]),a}(m.a.Component)}}]);
//# sourceMappingURL=143.ac64322b.chunk.js.map