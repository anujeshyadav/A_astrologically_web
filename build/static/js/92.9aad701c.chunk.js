(this["webpackJsonpflone-react"] = this["webpackJsonpflone-react"] || []).push([
  [92],
  {
    1095: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(206),
        l = a(201),
        r = a(202),
        o = a(203),
        c = a(204),
        s = a(0),
        i = a.n(s),
        u = a(339),
        m = a(340),
        b = a(341),
        d = a(697),
        p = a(118),
        h = (a(691), a(680)),
        f = a.n(h),
        g = a(48),
        E = a.n(g),
        v = (function (e) {
          Object(o.a)(a, e);
          var t = Object(c.a)(a);
          function a() {
            var e;
            return (
              Object(l.a)(this, a),
              ((e = t.call(this)).handlechange = function (t) {
                e.setState(Object(n.a)({}, t.target.name, t.target.value));
              }),
              (e.changeHandler = function (t) {
                t.preventDefault(),
                  e.setState(Object(n.a)({}, t.target.name, t.target.value));
              }),
              (e.submitHandler = function (t) {
                t.preventDefault(),
                  E.a
                    .post(
                      "https://nodejsbackend.astrologically.in/user/signup",
                      e.state
                    )
                    .then(function (t) {
                      console.log(t),
                        localStorage.setItem("auth-token", t.data.token),
                        e.setState({ token: t.data.token }),
                        f()(
                          "Success!",
                          " OTP Send Your Register Mobile Number Successful Done!",
                          "success"
                        ),
                        e.props.history.push("/otpverify");
                    })
                    .catch(function (e) {
                      console.log(e.response),
                        f()("Error!", "Something went wrong", "error");
                    });
              }),
              (e.state = { fullname: "", email: "", mobile: "", otp: "" }),
              e
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return i.a.createElement(
                    p.a,
                    { headerTop: "visible" },
                    i.a.createElement(
                      "section",
                      null,
                      i.a.createElement(
                        u.a,
                        null,
                        i.a.createElement(
                          m.a,
                          null,
                          i.a.createElement(b.a, { lg: "2" }),
                          i.a.createElement(
                            b.a,
                            { lg: "8" },
                            i.a.createElement(
                              "div",
                              { className: "wal-amt" },
                              i.a.createElement(
                                "h1",
                                null,
                                "Register Astrologer"
                              ),
                              i.a.createElement("hr", null),
                              i.a.createElement(
                                "form",
                                { onSubmit: this.submitHandler },
                                i.a.createElement(
                                  m.a,
                                  null,
                                  i.a.createElement(
                                    b.a,
                                    { md: "6" },
                                    i.a.createElement(
                                      "div",
                                      { class: "form-group mtb-10" },
                                      i.a.createElement("label", null, "Name*"),
                                      i.a.createElement("input", {
                                        type: "text",
                                        name: "fullname",
                                        required: !0,
                                        placeholder: "Enter Your Fullname",
                                        value: this.state.fullname,
                                        onChange: this.changeHandler,
                                      })
                                    )
                                  ),
                                  i.a.createElement(
                                    b.a,
                                    { md: "6" },
                                    i.a.createElement(
                                      "div",
                                      { class: "form-group mtb-10" },
                                      i.a.createElement(
                                        "label",
                                        null,
                                        "Email address*"
                                      ),
                                      i.a.createElement("input", {
                                        type: "email",
                                        name: "email",
                                        required: !0,
                                        placeholder: "Enter Your email",
                                        value: this.state.email,
                                        onChange: this.changeHandler,
                                      })
                                    )
                                  ),
                                  i.a.createElement(
                                    b.a,
                                    { md: "6" },
                                    i.a.createElement(
                                      "div",
                                      { class: "form-group mtb-10" },
                                      i.a.createElement(
                                        "label",
                                        null,
                                        "Mobile Number*"
                                      ),
                                      i.a.createElement("input", {
                                        type: "text",
                                        name: "mobile",
                                        required: !0,
                                        placeholder: "Enter Your Number",
                                        value: this.state.mobile,
                                        onChange: this.changeHandler,
                                      })
                                    )
                                  ),
                                  i.a.createElement(
                                    b.a,
                                    { md: "12", className: "mt-3" },
                                    i.a.createElement(
                                      d.a,
                                      { className: "btn btn-success" },
                                      "Get OTP"
                                    )
                                  )
                                )
                              )
                            )
                          ),
                          i.a.createElement(b.a, { lg: "2" })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(i.a.Component);
      t.default = v;
    },
    691: function (e, t, a) {},
    697: function (e, t, a) {
      "use strict";
      var n = a(7),
        l = a(14),
        r = a(207),
        o = a(20),
        c = a(0),
        s = a.n(c),
        i = a(3),
        u = a.n(i),
        m = a(58),
        b = a.n(m),
        d = a(36),
        p = [
          "active",
          "aria-label",
          "block",
          "className",
          "close",
          "cssModule",
          "color",
          "outline",
          "size",
          "tag",
          "innerRef",
        ],
        h = {
          active: u.a.bool,
          "aria-label": u.a.string,
          block: u.a.bool,
          color: u.a.string,
          disabled: u.a.bool,
          outline: u.a.bool,
          tag: d.o,
          innerRef: u.a.oneOfType([u.a.object, u.a.func, u.a.string]),
          onClick: u.a.func,
          size: u.a.string,
          children: u.a.node,
          className: u.a.string,
          cssModule: u.a.object,
          close: u.a.bool,
        },
        f = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).onClick = a.onClick.bind(
                Object(r.a)(a)
              )),
              a
            );
          }
          Object(o.a)(t, e);
          var a = t.prototype;
          return (
            (a.onClick = function (e) {
              if (!this.props.disabled)
                return this.props.onClick ? this.props.onClick(e) : void 0;
              e.preventDefault();
            }),
            (a.render = function () {
              var e = this.props,
                t = e.active,
                a = e["aria-label"],
                r = e.block,
                o = e.className,
                c = e.close,
                i = e.cssModule,
                u = e.color,
                m = e.outline,
                h = e.size,
                f = e.tag,
                g = e.innerRef,
                E = Object(l.a)(e, p);
              c &&
                "undefined" === typeof E.children &&
                (E.children = s.a.createElement(
                  "span",
                  { "aria-hidden": !0 },
                  "\xd7"
                ));
              var v = "btn" + (m ? "-outline" : "") + "-" + u,
                k = Object(d.k)(
                  b()(
                    o,
                    { close: c },
                    c || "btn",
                    c || v,
                    !!h && "btn-" + h,
                    !!r && "btn-block",
                    { active: t, disabled: this.props.disabled }
                  ),
                  i
                );
              E.href && "button" === f && (f = "a");
              var C = c ? "Close" : null;
              return s.a.createElement(
                f,
                Object(n.a)(
                  { type: "button" === f && E.onClick ? "button" : void 0 },
                  E,
                  {
                    className: k,
                    ref: g,
                    onClick: this.onClick,
                    "aria-label": a || C,
                  }
                )
              );
            }),
            t
          );
        })(s.a.Component);
      (f.propTypes = h),
        (f.defaultProps = { color: "secondary", tag: "button" }),
        (t.a = f);
    },
  },
]);
//# sourceMappingURL=92.9aad701c.chunk.js.map
