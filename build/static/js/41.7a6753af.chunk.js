(this["webpackJsonpflone-react"] = this["webpackJsonpflone-react"] || []).push([
  [41, 21, 78, 119, 138, 142, 154],
  {
    1179: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(22),
        i = a(690),
        l = a.n(i),
        s = a(48),
        c = a.n(s),
        u = a(894),
        m = a.n(u),
        d = a(895),
        p = a.n(d),
        f = a(23),
        v = a(207),
        h = a(20),
        E = a(3),
        g = a.n(E),
        b = a(58),
        y = a.n(b),
        A = a(210),
        O = a(7),
        N = a(14),
        w = a(731),
        k = a(36),
        j = ["in", "children", "cssModule", "slide", "tag", "className"];
      function C(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(a), !0).forEach(function (t) {
                Object(A.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : C(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var x = (function (e) {
        function t(t) {
          var a;
          return (
            ((a = e.call(this, t) || this).state = { startAnimation: !1 }),
            (a.onEnter = a.onEnter.bind(Object(v.a)(a))),
            (a.onEntering = a.onEntering.bind(Object(v.a)(a))),
            (a.onExit = a.onExit.bind(Object(v.a)(a))),
            (a.onExiting = a.onExiting.bind(Object(v.a)(a))),
            (a.onExited = a.onExited.bind(Object(v.a)(a))),
            a
          );
        }
        Object(h.a)(t, e);
        var a = t.prototype;
        return (
          (a.onEnter = function (e, t) {
            this.setState({ startAnimation: !1 }), this.props.onEnter(e, t);
          }),
          (a.onEntering = function (e, t) {
            var a = e.offsetHeight;
            return (
              this.setState({ startAnimation: !0 }),
              this.props.onEntering(e, t),
              a
            );
          }),
          (a.onExit = function (e) {
            this.setState({ startAnimation: !1 }), this.props.onExit(e);
          }),
          (a.onExiting = function (e) {
            this.setState({ startAnimation: !0 }),
              e.dispatchEvent(new CustomEvent("slide.bs.carousel")),
              this.props.onExiting(e);
          }),
          (a.onExited = function (e) {
            e.dispatchEvent(new CustomEvent("slid.bs.carousel")),
              this.props.onExited(e);
          }),
          (a.render = function () {
            var e = this,
              t = this.props,
              a = t.in,
              n = t.children,
              o = t.cssModule,
              i = t.slide,
              l = t.tag,
              s = t.className,
              c = Object(N.a)(t, j);
            return r.a.createElement(
              w.Transition,
              Object(O.a)({}, c, {
                enter: i,
                exit: i,
                in: a,
                onEnter: this.onEnter,
                onEntering: this.onEntering,
                onExit: this.onExit,
                onExiting: this.onExiting,
                onExited: this.onExited,
              }),
              function (t) {
                var a = e.context.direction,
                  i = t === k.b.ENTERED || t === k.b.EXITING,
                  c =
                    (t === k.b.ENTERING || t === k.b.EXITING) &&
                    e.state.startAnimation &&
                    ("right" === a
                      ? "carousel-item-left"
                      : "carousel-item-right"),
                  u =
                    t === k.b.ENTERING &&
                    ("right" === a
                      ? "carousel-item-next"
                      : "carousel-item-prev"),
                  m = Object(k.k)(
                    y()(s, "carousel-item", i && "active", c, u),
                    o
                  );
                return r.a.createElement(l, { className: m }, n);
              }
            );
          }),
          t
        );
      })(r.a.Component);
      (x.propTypes = S(
        S({}, w.Transition.propTypes),
        {},
        {
          tag: k.o,
          in: g.a.bool,
          cssModule: g.a.object,
          children: g.a.node,
          slide: g.a.bool,
          className: g.a.string,
        }
      )),
        (x.defaultProps = S(
          S({}, w.Transition.defaultProps),
          {},
          { tag: "div", timeout: k.c.Carousel, slide: !0 }
        )),
        (x.contextTypes = { direction: g.a.string });
      var I = x,
        T = (function (e) {
          function t(t) {
            var a;
            return (
              ((a = e.call(this, t) || this).handleKeyPress =
                a.handleKeyPress.bind(Object(v.a)(a))),
              (a.renderItems = a.renderItems.bind(Object(v.a)(a))),
              (a.hoverStart = a.hoverStart.bind(Object(v.a)(a))),
              (a.hoverEnd = a.hoverEnd.bind(Object(v.a)(a))),
              (a.handleTouchStart = a.handleTouchStart.bind(Object(v.a)(a))),
              (a.handleTouchEnd = a.handleTouchEnd.bind(Object(v.a)(a))),
              (a.touchStartX = 0),
              (a.touchStartY = 0),
              (a.state = {
                activeIndex: a.props.activeIndex,
                direction: "right",
                indicatorClicked: !1,
              }),
              a
            );
          }
          Object(h.a)(t, e);
          var a = t.prototype;
          return (
            (a.getChildContext = function () {
              return { direction: this.state.direction };
            }),
            (a.componentDidMount = function () {
              "carousel" === this.props.ride && this.setInterval(),
                document.addEventListener("keyup", this.handleKeyPress);
            }),
            (t.getDerivedStateFromProps = function (e, t) {
              var a = null,
                n = t.activeIndex,
                r = t.direction,
                o = t.indicatorClicked;
              return (
                e.activeIndex !== n &&
                  (e.activeIndex === n + 1
                    ? (r = "right")
                    : e.activeIndex === n - 1
                    ? (r = "left")
                    : e.activeIndex < n
                    ? (r = o ? "left" : "right")
                    : e.activeIndex !== n && (r = o ? "right" : "left"),
                  (a = {
                    activeIndex: e.activeIndex,
                    direction: r,
                    indicatorClicked: !1,
                  })),
                a
              );
            }),
            (a.componentDidUpdate = function (e, t) {
              t.activeIndex !== this.state.activeIndex &&
                this.setInterval(this.props);
            }),
            (a.componentWillUnmount = function () {
              this.clearInterval(),
                document.removeEventListener("keyup", this.handleKeyPress);
            }),
            (a.setInterval = (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function (e) {
              void 0 === e && (e = this.props),
                this.clearInterval(),
                e.interval &&
                  (this.cycleInterval = setInterval(function () {
                    e.next();
                  }, parseInt(e.interval, 10)));
            })),
            (a.clearInterval = (function (e) {
              function t() {
                return e.apply(this, arguments);
              }
              return (
                (t.toString = function () {
                  return e.toString();
                }),
                t
              );
            })(function () {
              clearInterval(this.cycleInterval);
            })),
            (a.hoverStart = function () {
              var e;
              ("hover" === this.props.pause && this.clearInterval(),
              this.props.mouseEnter) &&
                (e = this.props).mouseEnter.apply(e, arguments);
            }),
            (a.hoverEnd = function () {
              var e;
              ("hover" === this.props.pause && this.setInterval(),
              this.props.mouseLeave) &&
                (e = this.props).mouseLeave.apply(e, arguments);
            }),
            (a.handleKeyPress = function (e) {
              this.props.keyboard &&
                (37 === e.keyCode
                  ? this.props.previous()
                  : 39 === e.keyCode && this.props.next());
            }),
            (a.handleTouchStart = function (e) {
              this.props.enableTouch &&
                ((this.touchStartX = e.changedTouches[0].screenX),
                (this.touchStartY = e.changedTouches[0].screenY));
            }),
            (a.handleTouchEnd = function (e) {
              if (this.props.enableTouch) {
                var t = e.changedTouches[0].screenX,
                  a = e.changedTouches[0].screenY,
                  n = Math.abs(this.touchStartX - t);
                n < Math.abs(this.touchStartY - a) ||
                  n < 40 ||
                  (t < this.touchStartX
                    ? this.props.next()
                    : this.props.previous());
              }
            }),
            (a.renderItems = function (e, t) {
              var a = this,
                n = this.props.slide;
              return r.a.createElement(
                "div",
                { className: t },
                e.map(function (e, t) {
                  var o = t === a.state.activeIndex;
                  return r.a.cloneElement(e, { in: o, slide: n });
                })
              );
            }),
            (a.render = function () {
              var e = this,
                t = this.props,
                a = t.cssModule,
                n = t.slide,
                o = t.className,
                i = Object(k.k)(y()(o, "carousel", n && "slide"), a),
                l = Object(k.k)(y()("carousel-inner"), a),
                s = this.props.children.filter(function (e) {
                  return null !== e && void 0 !== e && "boolean" !== typeof e;
                });
              if (
                s.every(function (e) {
                  return e.type === I;
                })
              )
                return r.a.createElement(
                  "div",
                  {
                    className: i,
                    onMouseEnter: this.hoverStart,
                    onMouseLeave: this.hoverEnd,
                  },
                  this.renderItems(s, l)
                );
              if (s[0] instanceof Array) {
                var c = s[0],
                  u = s[1],
                  m = s[2];
                return r.a.createElement(
                  "div",
                  {
                    className: i,
                    onMouseEnter: this.hoverStart,
                    onMouseLeave: this.hoverEnd,
                  },
                  this.renderItems(c, l),
                  u,
                  m
                );
              }
              var d = s[0],
                p = r.a.cloneElement(d, {
                  onClickHandler: function (t) {
                    "function" === typeof d.props.onClickHandler &&
                      e.setState({ indicatorClicked: !0 }, function () {
                        return d.props.onClickHandler(t);
                      });
                  },
                }),
                f = s[1],
                v = s[2],
                h = s[3];
              return r.a.createElement(
                "div",
                {
                  className: i,
                  onMouseEnter: this.hoverStart,
                  onMouseLeave: this.hoverEnd,
                  onTouchStart: this.handleTouchStart,
                  onTouchEnd: this.handleTouchEnd,
                },
                p,
                this.renderItems(f, l),
                v,
                h
              );
            }),
            t
          );
        })(r.a.Component);
      (T.propTypes = {
        activeIndex: g.a.number,
        next: g.a.func.isRequired,
        previous: g.a.func.isRequired,
        keyboard: g.a.bool,
        pause: g.a.oneOf(["hover", !1]),
        ride: g.a.oneOf(["carousel"]),
        interval: g.a.oneOfType([g.a.number, g.a.string, g.a.bool]),
        children: g.a.array,
        mouseEnter: g.a.func,
        mouseLeave: g.a.func,
        slide: g.a.bool,
        cssModule: g.a.object,
        className: g.a.string,
        enableTouch: g.a.bool,
      }),
        (T.defaultProps = {
          interval: 5e3,
          pause: "hover",
          keyboard: !0,
          slide: !0,
          enableTouch: !0,
        }),
        (T.childContextTypes = { direction: g.a.string });
      var R = T,
        P = function (e) {
          var t = e.items,
            a = e.activeIndex,
            n = e.cssModule,
            o = e.onClickHandler,
            i = e.className,
            l = Object(k.k)(y()(i, "carousel-indicators"), n),
            s = t.map(function (e, t) {
              var i = Object(k.k)(y()({ active: a === t }), n);
              return r.a.createElement("li", {
                key: "" + (e.key || Object.values(e).join("")),
                onClick: function (e) {
                  e.preventDefault(), o(t);
                },
                className: i,
              });
            });
          return r.a.createElement("ol", { className: l }, s);
        };
      P.propTypes = {
        items: g.a.array.isRequired,
        activeIndex: g.a.number.isRequired,
        cssModule: g.a.object,
        onClickHandler: g.a.func.isRequired,
        className: g.a.string,
      };
      var V = P,
        M = function (e) {
          var t = e.captionHeader,
            a = e.captionText,
            n = e.cssModule,
            o = e.className,
            i = Object(k.k)(
              y()(o, "carousel-caption", "d-none", "d-md-block"),
              n
            );
          return r.a.createElement(
            "div",
            { className: i },
            r.a.createElement("h3", null, t),
            r.a.createElement("p", null, a)
          );
        };
      M.propTypes = {
        captionHeader: g.a.node,
        captionText: g.a.node.isRequired,
        cssModule: g.a.object,
        className: g.a.string,
      };
      var D = M,
        F = a(697),
        B = function (e) {
          var t = e.direction,
            a = e.onClickHandler,
            n = e.cssModule,
            o = e.directionText,
            i = e.className,
            l = Object(k.k)(y()(i, "carousel-control-" + t), n),
            s = Object(k.k)(y()("carousel-control-" + t + "-icon"), n),
            c = Object(k.k)(y()("sr-only"), n);
          return r.a.createElement(
            "a",
            {
              className: l,
              style: { cursor: "pointer" },
              role: "button",
              tabIndex: "0",
              onClick: function (e) {
                e.preventDefault(), a();
              },
            },
            r.a.createElement("span", { className: s, "aria-hidden": "true" }),
            r.a.createElement("span", { className: c }, o || t)
          );
        };
      B.propTypes = {
        direction: g.a.oneOf(["prev", "next"]).isRequired,
        onClickHandler: g.a.func.isRequired,
        cssModule: g.a.object,
        directionText: g.a.string,
        className: g.a.string,
      };
      var U = B,
        H = a(26),
        L = function (e) {
          e.props;
          var t = Object(n.useState)(0),
            a = Object(o.a)(t, 2),
            i = a[0],
            l = a[1],
            s = Object(n.useState)(!1),
            u = Object(o.a)(s, 2),
            d = u[0],
            v = u[1],
            h = Object(f.useHistory)(),
            E = Object(n.useState)([]),
            g = Object(o.a)(E, 2),
            b = g[0],
            y = g[1];
          Object(n.useEffect)(function () {
            c.a
              .get("https://nodejsbackend.astrologically.in/admin/getbanner")
              .then(function (e) {
                console.log(e.data.data), y(e.data.data);
              })
              .catch(function (e) {
                console.log(e);
              });
          }, []);
          var A = function (e) {
              console.log("anujesh", e),
                h.push(
                  "/".concat(null === e || void 0 === e ? void 0 : e.root)
                );
            },
            O = function () {
              if (!d) {
                var e =
                  i === (null === b || void 0 === b ? void 0 : b.length) - 1
                    ? 0
                    : i + 1;
                l(e);
              }
            },
            N = function () {
              if (!d) {
                var e =
                  0 === i
                    ? (null === b || void 0 === b ? void 0 : b.length) - 1
                    : i - 1;
                l(e);
              }
            };
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(
              "div",
              null,
              r.a.createElement(
                "style",
                null,
                ".custom-tag {\n              max-width: 100%;\n              height: 500px;\n              background: black;\n            }"
              ),
              r.a.createElement(
                R,
                {
                  style: { cursor: "pointer" },
                  activeIndex: i,
                  next: O,
                  previous: N,
                },
                r.a.createElement(V, {
                  items: b,
                  activeIndex: i,
                  onClickHandler: function (e) {
                    d || l(e);
                  },
                }),
                null === b || void 0 === b
                  ? void 0
                  : b.map(function (e) {
                      return r.a.createElement(
                        I,
                        {
                          onClick: function () {
                            return A(e);
                          },
                          className: "custom-tag",
                          tag: "div",
                          key: null === e || void 0 === e ? void 0 : e._id,
                          onExiting: function () {
                            return v(!0);
                          },
                          onExited: function () {
                            return v(!1);
                          },
                        },
                        " ",
                        r.a.createElement(D, {
                          className: "text-danger newclass",
                          captionText:
                            null === e || void 0 === e
                              ? void 0
                              : e.banner_title,
                          captionHeader:
                            null === e || void 0 === e
                              ? void 0
                              : e.banner_title,
                        }),
                        r.a.createElement("img", {
                          onClick: function () {
                            return A(e);
                          },
                          width: "100%",
                          src: e.banner_img,
                        }),
                        r.a.createElement(
                          "div",
                          {
                            onClick: function () {
                              return A(e);
                            },
                            className: "container",
                          },
                          r.a.createElement(
                            "div",
                            { className: "row" },
                            r.a.createElement(
                              "div",
                              {
                                className: "col-xl-6 col-lg-7 col-md-8 col-12",
                              },
                              r.a.createElement("img", {
                                src: p.a,
                                className: "st-1",
                                alt: "",
                              }),
                              r.a.createElement("img", {
                                src: m.a,
                                className: "st-2",
                                alt: "",
                              }),
                              r.a.createElement(
                                F.a,
                                {
                                  size: "sm",
                                  onClick: function () {
                                    return A(e);
                                  },
                                  color: "primary",
                                },
                                "Click Me"
                              )
                            )
                          )
                        )
                      );
                    }),
                r.a.createElement(U, {
                  direction: "prev",
                  directionText: "Previous",
                  onClickHandler: N,
                }),
                r.a.createElement(U, {
                  direction: "next",
                  directionText: "Next",
                  onClickHandler: O,
                })
              )
            ),
            r.a.createElement("div", {
              style: { cursor: "pointer" },
              className: "slider-area",
            })
          );
        },
        z = a(118),
        W = a(900),
        Q = (a(939), a(867)),
        G = a(211),
        J = a.n(G),
        q = function (e) {
          var t,
            a = e.spaceTopClass,
            i = e.spaceBottomClass,
            l = Object(n.useState)([]),
            s = Object(o.a)(l, 2),
            c = s[0],
            u = s[1];
          return (
            Object(n.useEffect)(function () {
              H.a
                .get("/user/active_blog_category")
                .then(function (e) {
                  console.log(e.data.data),
                    !0 === e.data.status && u(e.data.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
            }, []),
            r.a.createElement(
              "div",
              { className: "blog-area ".concat(a || "", " ").concat(i || "") },
              r.a.createElement(
                "div",
                { className: "container" },
                r.a.createElement(
                  "div",
                  { className: "heading mt-70" },
                  r.a.createElement("h2", null, "Blogs "),
                  r.a.createElement("img", { src: J.a, alt: "" })
                ),
                r.a.createElement(
                  "div",
                  { className: "row" },
                  c &&
                    (null === (t = c.slice(0, 3)) || void 0 === t
                      ? void 0
                      : t.map(function (e, t) {
                          return r.a.createElement(Q.a, {
                            data: e,
                            key: t,
                            sliderClass: "swiper-slide rtt",
                          });
                        }))
                )
              )
            )
          );
        },
        Y = a(940),
        K = function (e) {
          var t = e.data,
            a = e.sliderClass,
            n = e.testimonialClass;
          return r.a.createElement(
            "div",
            {
              className: ""
                .concat(n || "single-testimonial", " text-center ")
                .concat(a || ""),
            },
            r.a.createElement("img", { src: "" + t.image, alt: "" }),
            r.a.createElement("p", { className: "ptext" }, t.content),
            r.a.createElement(
              "div",
              { className: "client-info" },
              r.a.createElement("i", { className: "fa fa-map-signs" }),
              r.a.createElement("h5", null, t.customerName),
              r.a.createElement("span", null, t.title)
            )
          );
        },
        Z = function (e) {
          var t = e.spaceTopClass,
            a = e.spaceBottomClass,
            n = e.spaceLeftClass,
            o = e.spaceRightClass,
            i = e.bgColorClass,
            s = e.testimonialClass,
            c =
              (e.backgroundImage,
              {
                slidesPerView: 1,
                loop: !0,
                autoplay: { delay: 5e3, disableOnInteraction: !1 },
              });
          return r.a.createElement(
            "div",
            {
              className: "testimonial-area "
                .concat(t || "", "  ")
                .concat(a || "", " ")
                .concat(n || "", "  ")
                .concat(o || "", " ")
                .concat(i || ""),
            },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "div",
                  { className: "col-lg-12  ml-auto mr-auto" },
                  r.a.createElement(
                    "div",
                    { className: "heading" },
                    r.a.createElement("h2", null, "Testimonials"),
                    r.a.createElement("img", { src: J.a, alt: "" })
                  ),
                  r.a.createElement(
                    "div",
                    {
                      className:
                        "testimonial-active nav-style-1 nav-testi-style",
                    },
                    r.a.createElement(
                      l.a,
                      c,
                      Y &&
                        Y.map(function (e, t) {
                          return r.a.createElement(K, {
                            data: e,
                            key: t,
                            sliderClass: "swiper-slide",
                            testimonialClass: s,
                          });
                        })
                    )
                  )
                )
              )
            )
          );
        },
        X = a(848),
        _ = a(901),
        $ = a(941),
        ee = function (e) {
          var t = e.data,
            a = e.spaceBottomClass,
            n = e.textAlignClass;
          return r.a.createElement(
            "div",
            { className: "col-md-3" },
            r.a.createElement(
              "div",
              {
                className: "support-wrap-5 support-shape "
                  .concat(a || "", " ")
                  .concat(n || ""),
              },
              r.a.createElement(
                "div",
                { className: "support-icon" },
                r.a.createElement("img", {
                  className: "animated img-secure",
                  src: "" + t.image,
                  alt: "",
                })
              ),
              r.a.createElement(
                "div",
                { className: "support-content-5" },
                r.a.createElement("h5", null, t.title),
                r.a.createElement("p", null, t.subtitle)
              )
            )
          );
        },
        te = function (e) {
          var t = e.spaceTopClass,
            a = e.spaceBottomClass;
          return r.a.createElement(
            "div",
            { className: "support-area ".concat(t || "", " ").concat(a || "") },
            r.a.createElement(
              "div",
              { className: "container" },
              r.a.createElement(
                "div",
                { className: "heading" },
                r.a.createElement("h2", null, "Why Choose Astro Vipra ?"),
                r.a.createElement("img", {
                  src: J.a,
                  alt: "",
                  className: "sb-img",
                })
              ),
              r.a.createElement(
                "div",
                { className: "border-bottom" },
                r.a.createElement(
                  "div",
                  { className: "row feature-icon-two-wrap" },
                  $ &&
                    $.map(function (e, t) {
                      return r.a.createElement(ee, {
                        data: e,
                        spaceBottomClass: "mb-30",
                        textAlignClass: "text-center",
                        key: t,
                      });
                    })
                )
              )
            )
          );
        },
        ae = a(928),
        ne = a(902),
        re = a(339),
        oe = a(340),
        ie = function (e) {
          var t = e.data,
            a = e.sliderClass,
            i = e.sliderdemoClass,
            l = Object(n.useState)(""),
            s = Object(o.a)(l, 2),
            c = (s[0], s[1], Object(n.useState)(t)),
            u = Object(o.a)(c, 2),
            m = u[0],
            d = u[1];
          return (
            Object(n.useEffect)(
              function () {
                d(t);
              },
              [t]
            ),
            r.a.createElement(
              "div",
              {
                className: ""
                  .concat(i || " slider-demo", " text-center ")
                  .concat(a || "", " st-hit"),
              },
              r.a.createElement("iframe", {
                className: "vdl-l swiper-slide",
                src: "https://www.youtube.com/embed/".concat(
                  null === m || void 0 === m ? void 0 : m.youtube_link
                ),
              })
            )
          );
        },
        le = function (e) {
          var t = e.data,
            a = e.sliderdemoClass,
            i = Object(n.useState)(""),
            s = Object(o.a)(i, 2),
            c = (s[0], s[1], Object(n.useState)(t)),
            u = Object(o.a)(c, 2),
            m = (u[0], u[1]),
            d = Object(n.useState)([]),
            p = Object(o.a)(d, 2),
            f = p[0],
            v = p[1],
            h = {
              loop: !0,
              slidesPerView: 4,
              grabCursor: !0,
              spaceBetween: 10,
              watchSlidesVisibility: !0,
              breakpoints: {
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                640: { slidesPerView: 2 },
                320: { slidesPerView: 1 },
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              renderPrevButton: function () {
                return r.a.createElement(
                  "button",
                  { className: "swiper-button-prev ht-swiper-button-nav gt-1" },
                  r.a.createElement("i", { className: "pe-7s-angle-left" })
                );
              },
              renderNextButton: function () {
                return r.a.createElement(
                  "button",
                  { className: "swiper-button-next ht-swiper-button-nav gt-2" },
                  r.a.createElement("i", { className: "pe-7s-angle-right" })
                );
              },
            };
          return (
            Object(n.useEffect)(
              function () {
                H.a
                  .get("/admin/video_list")
                  .then(function (e) {
                    var t;
                    v(
                      null === e ||
                        void 0 === e ||
                        null === (t = e.data) ||
                        void 0 === t
                        ? void 0
                        : t.data
                    ),
                      console.log(e.data.data);
                  })
                  .catch(function (e) {
                    console.log(e);
                  }),
                  m(t);
              },
              [t]
            ),
            r.a.createElement(
              "div",
              { className: "mt-20 mb-50" },
              r.a.createElement(
                re.a,
                null,
                r.a.createElement(
                  "div",
                  { className: "heading" },
                  r.a.createElement("h2", null, "Watch Astrologers Video"),
                  r.a.createElement("img", { src: J.a, alt: "" })
                ),
                r.a.createElement(
                  oe.a,
                  null,
                  r.a.createElement(
                    l.a,
                    h,
                    null === f || void 0 === f
                      ? void 0
                      : f.map(function (e, t) {
                          return r.a.createElement(
                            "div",
                            {
                              key: null === e || void 0 === e ? void 0 : e._id,
                              className: "v-bx",
                            },
                            r.a.createElement(ie, {
                              data: e,
                              key: t,
                              sliderClass: "swiper-slide rtt",
                              sliderdemoClass: a,
                            })
                          );
                        })
                  )
                )
              ),
              r.a.createElement("hr", null)
            )
          );
        },
        se = a(852);
      t.default = function () {
        return r.a.createElement(
          z.a,
          { headerTop: "visible" },
          r.a.createElement(L, null),
          r.a.createElement(W.default, null),
          r.a.createElement(te, {
            spaceBottomClass: "pb-30",
            spaceTopClass: "pt-30",
          }),
          r.a.createElement(se.default, null),
          r.a.createElement(_.default, null),
          r.a.createElement(ne.default, null),
          r.a.createElement(ae.default, null),
          r.a.createElement(le, null),
          r.a.createElement(X.a, {
            spaceTopClass: "pt-30",
            spaceBottomClass: "pb-30",
          }),
          r.a.createElement(Z, {
            spaceTopClass: "pt-95",
            spaceBottomClass: "pb-95",
            bgColorClass: "bg-gray-3",
          }),
          r.a.createElement(q, { spaceBottomClass: "pb-55" })
        );
      };
    },
    729: function (e, t, a) {
      e.exports = a.p + "static/media/astro3.4e14373e.jpg";
    },
    733: function (e, t, a) {
      "use strict";
      function n() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function r(e) {
        this.setState(
          function (t) {
            var a = this.constructor.getDerivedStateFromProps(e, t);
            return null !== a && void 0 !== a ? a : null;
          }.bind(this)
        );
      }
      function o(e, t) {
        try {
          var a = this.props,
            n = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(a, n));
        } finally {
          (this.props = a), (this.state = n);
        }
      }
      function i(e) {
        var t = e.prototype;
        if (!t || !t.isReactComponent)
          throw new Error("Can only polyfill class components");
        if (
          "function" !== typeof e.getDerivedStateFromProps &&
          "function" !== typeof t.getSnapshotBeforeUpdate
        )
          return e;
        var a = null,
          i = null,
          l = null;
        if (
          ("function" === typeof t.componentWillMount
            ? (a = "componentWillMount")
            : "function" === typeof t.UNSAFE_componentWillMount &&
              (a = "UNSAFE_componentWillMount"),
          "function" === typeof t.componentWillReceiveProps
            ? (i = "componentWillReceiveProps")
            : "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              (i = "UNSAFE_componentWillReceiveProps"),
          "function" === typeof t.componentWillUpdate
            ? (l = "componentWillUpdate")
            : "function" === typeof t.UNSAFE_componentWillUpdate &&
              (l = "UNSAFE_componentWillUpdate"),
          null !== a || null !== i || null !== l)
        ) {
          var s = e.displayName || e.name,
            c =
              "function" === typeof e.getDerivedStateFromProps
                ? "getDerivedStateFromProps()"
                : "getSnapshotBeforeUpdate()";
          throw Error(
            "Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" +
              s +
              " uses " +
              c +
              " but also contains the following legacy lifecycles:" +
              (null !== a ? "\n  " + a : "") +
              (null !== i ? "\n  " + i : "") +
              (null !== l ? "\n  " + l : "") +
              "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks"
          );
        }
        if (
          ("function" === typeof e.getDerivedStateFromProps &&
            ((t.componentWillMount = n), (t.componentWillReceiveProps = r)),
          "function" === typeof t.getSnapshotBeforeUpdate)
        ) {
          if ("function" !== typeof t.componentDidUpdate)
            throw new Error(
              "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
            );
          t.componentWillUpdate = o;
          var u = t.componentDidUpdate;
          t.componentDidUpdate = function (e, t, a) {
            var n = this.__reactInternalSnapshotFlag
              ? this.__reactInternalSnapshot
              : a;
            u.call(this, e, t, n);
          };
        }
        return e;
      }
      a.r(t),
        a.d(t, "polyfill", function () {
          return i;
        }),
        (n.__suppressDeprecationWarning = !0),
        (r.__suppressDeprecationWarning = !0),
        (o.__suppressDeprecationWarning = !0);
    },
    805: function (e, t, a) {
      "use strict";
      var n = function () {};
      e.exports = n;
    },
    819: function (e) {
      e.exports = JSON.parse(
        '[{"id":"1","image":"/assets/img/icon-img/stclient.png","countNum":1300,"title":"Satisfied Clients"},{"id":"2","image":"/assets/img/icon-img/stastro.png","countNum":20,"title":"Astrologers"},{"id":"3","image":"/assets/img/icon-img/stusers.png","countNum":4000,"title":"Registered Users"}]'
      );
    },
    848: function (e, t, a) {
      "use strict";
      var n = a(0),
        r = a.n(n),
        o = a(819),
        i = a(22),
        l = a(849),
        s = a.n(l),
        c = a(850),
        u = a.n(c),
        m = function (e) {
          var t = e.data,
            a = e.spaceBottomClass,
            o = e.textAlignClass,
            l = Object(n.useState)(!1),
            c = Object(i.a)(l, 2),
            m = c[0],
            d = c[1];
          return r.a.createElement(
            "div",
            { className: "col-lg-4 col-md-6 col-sm-6" },
            r.a.createElement(
              "div",
              {
                className: "single-count ".concat(o || "", " ").concat(a || ""),
              },
              r.a.createElement(
                "div",
                { className: "count-icon" },
                r.a.createElement("img", {
                  className: "animated img-secure",
                  src: "" + t.image,
                  alt: "",
                })
              ),
              r.a.createElement(
                "h2",
                { className: "count" },
                r.a.createElement(
                  u.a,
                  {
                    onChange: function (e) {
                      e && d(!0);
                    },
                    offset: { top: 10 },
                    delayedCall: !0,
                  },
                  r.a.createElement(s.a, { end: m ? t.countNum : 0 })
                )
              ),
              r.a.createElement("span", null, t.title)
            )
          );
        };
      t.a = function (e) {
        var t = e.spaceTopClass,
          a = e.spaceBottomClass,
          n = e.bgClass;
        return r.a.createElement(
          "div",
          {
            className: "funfact-area "
              .concat(t || "", " ")
              .concat(a || "", " ")
              .concat(n || ""),
          },
          r.a.createElement(
            "div",
            { className: "container" },
            r.a.createElement(
              "div",
              { className: "row" },
              o &&
                o.map(function (e, t) {
                  return r.a.createElement(m, {
                    data: e,
                    spaceBottomClass: "mb-30",
                    key: t,
                    textAlignClass: "text-center",
                  });
                })
            )
          )
        );
      };
    },
    849: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = a(3),
        r = a(0),
        o = a(805),
        i = a(868);
      function l(e) {
        return e && "object" === typeof e && "default" in e
          ? e
          : { default: e };
      }
      var s = l(n),
        c = l(r),
        u = l(o),
        m = l(i);
      function d(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(a), !0).forEach(function (t) {
                h(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : d(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function v(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function h(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function E(e) {
        return (E = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function g(e, t) {
        return (g =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function b(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function y(e, t) {
        return !t || ("object" !== typeof t && "function" !== typeof t)
          ? b(e)
          : t;
      }
      function A(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var a,
            n = E(e);
          if (t) {
            var r = E(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return y(this, a);
        };
      }
      function O(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var a =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == a) return;
            var n,
              r,
              o = [],
              i = !0,
              l = !1;
            try {
              for (
                a = a.call(e);
                !(i = (n = a.next()).done) &&
                (o.push(n.value), !t || o.length !== t);
                i = !0
              );
            } catch (s) {
              (l = !0), (r = s);
            } finally {
              try {
                i || null == a.return || a.return();
              } finally {
                if (l) throw r;
              }
            }
            return o;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return N(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === a && e.constructor && (a = e.constructor.name);
            if ("Map" === a || "Set" === a) return Array.from(e);
            if (
              "Arguments" === a ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)
            )
              return N(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function N(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = new Array(t); a < t; a++) n[a] = e[a];
        return n;
      }
      var w = function (e, t) {
          var a = t.decimal,
            n = t.decimals,
            r = t.duration,
            o = t.easingFn,
            i = t.end,
            l = t.formattingFn,
            s = t.prefix,
            c = t.separator,
            u = t.start,
            d = t.suffix,
            p = t.useEasing;
          return new m.default(e, u, i, n, r, {
            decimal: a,
            easingFn: o,
            formattingFn: l,
            separator: c,
            prefix: s,
            suffix: d,
            useEasing: p,
            useGrouping: !!c,
          });
        },
        k = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && g(e, t);
          })(o, e);
          var t,
            a,
            n,
            r = A(o);
          function o() {
            var e;
            f(this, o);
            for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++)
              a[n] = arguments[n];
            return (
              h(
                b((e = r.call.apply(r, [this].concat(a)))),
                "checkProps",
                function (t) {
                  var a = e.props,
                    n = a.start,
                    r = a.suffix,
                    o = a.prefix,
                    i = a.redraw,
                    l = a.duration,
                    s = a.separator,
                    c = a.decimals,
                    u = a.decimal,
                    m = a.className;
                  return (
                    l !== t.duration ||
                    n !== t.start ||
                    r !== t.suffix ||
                    o !== t.prefix ||
                    s !== t.separator ||
                    c !== t.decimals ||
                    u !== t.decimal ||
                    m !== t.className ||
                    i
                  );
                }
              ),
              h(b(e), "createInstance", function () {
                return (
                  "function" === typeof e.props.children &&
                    u.default(
                      e.containerRef.current &&
                        (e.containerRef.current instanceof HTMLElement ||
                          e.containerRef.current instanceof SVGTextElement ||
                          e.containerRef.current instanceof SVGTSpanElement),
                      'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'
                    ),
                  w(e.containerRef.current, e.props)
                );
              }),
              h(b(e), "pauseResume", function () {
                var t = b(e),
                  a = t.reset,
                  n = t.restart,
                  r = t.update,
                  o = e.props.onPauseResume;
                e.instance.pauseResume(), o({ reset: a, start: n, update: r });
              }),
              h(b(e), "reset", function () {
                var t = b(e),
                  a = t.pauseResume,
                  n = t.restart,
                  r = t.update,
                  o = e.props.onReset;
                e.instance.reset(), o({ pauseResume: a, start: n, update: r });
              }),
              h(b(e), "restart", function () {
                e.reset(), e.start();
              }),
              h(b(e), "start", function () {
                var t = b(e),
                  a = t.pauseResume,
                  n = t.reset,
                  r = t.restart,
                  o = t.update,
                  i = e.props,
                  l = i.delay,
                  s = i.onEnd,
                  c = i.onStart,
                  u = function () {
                    return e.instance.start(function () {
                      return s({
                        pauseResume: a,
                        reset: n,
                        start: r,
                        update: o,
                      });
                    });
                  };
                l > 0 ? (e.timeoutId = setTimeout(u, 1e3 * l)) : u(),
                  c({ pauseResume: a, reset: n, update: o });
              }),
              h(b(e), "update", function (t) {
                var a = b(e),
                  n = a.pauseResume,
                  r = a.reset,
                  o = a.restart,
                  i = e.props.onUpdate;
                e.instance.update(t), i({ pauseResume: n, reset: r, start: o });
              }),
              h(b(e), "containerRef", c.default.createRef()),
              e
            );
          }
          return (
            (t = o),
            (a = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.delay;
                  (this.instance = this.createInstance()),
                    ("function" === typeof t && 0 !== a) || this.start();
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  var t = this.props.end;
                  return this.checkProps(e) || t !== e.end;
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props,
                    a = t.end,
                    n = t.preserveValue;
                  this.checkProps(e) &&
                    (this.instance.reset(),
                    (this.instance = this.createInstance()),
                    this.start()),
                    a !== e.end &&
                      (n || this.instance.reset(), this.instance.update(a));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.timeoutId && clearTimeout(this.timeoutId),
                    this.instance.reset();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    a = e.className,
                    n = e.style,
                    r = this.containerRef,
                    o = this.pauseResume,
                    i = this.reset,
                    l = this.restart,
                    s = this.update;
                  return "function" === typeof t
                    ? t({
                        countUpRef: r,
                        pauseResume: o,
                        reset: i,
                        start: l,
                        update: s,
                      })
                    : c.default.createElement("span", {
                        className: a,
                        ref: r,
                        style: n,
                      });
                },
              },
            ]) && v(t.prototype, a),
            n && v(t, n),
            o
          );
        })(r.Component);
      h(k, "propTypes", {
        decimal: s.default.string,
        decimals: s.default.number,
        delay: s.default.number,
        easingFn: s.default.func,
        end: s.default.number.isRequired,
        formattingFn: s.default.func,
        onEnd: s.default.func,
        onStart: s.default.func,
        prefix: s.default.string,
        redraw: s.default.bool,
        separator: s.default.string,
        start: s.default.number,
        startOnMount: s.default.bool,
        suffix: s.default.string,
        style: s.default.object,
        useEasing: s.default.bool,
        preserveValue: s.default.bool,
      }),
        h(k, "defaultProps", {
          decimal: ".",
          decimals: 0,
          delay: null,
          duration: null,
          easingFn: null,
          formattingFn: null,
          onEnd: function () {},
          onPauseResume: function () {},
          onReset: function () {},
          onStart: function () {},
          onUpdate: function () {},
          prefix: "",
          redraw: !1,
          separator: "",
          start: 0,
          startOnMount: !0,
          suffix: "",
          style: void 0,
          useEasing: !0,
          preserveValue: !1,
        });
      var j = { innerHTML: null };
      (t.default = k),
        (t.useCountUp = function (e) {
          var t = p(p({}, k.defaultProps), e),
            a = t.start,
            n = t.formattingFn,
            o = O(r.useState("function" === typeof n ? n(a) : a), 2),
            i = o[0],
            l = o[1],
            s = r.useRef(null),
            c = r.useRef(null),
            u = function () {
              var e = s.current;
              if (null !== e) return e;
              var a = (function () {
                var e = w(j, t),
                  a = e.options.formattingFn;
                return (
                  (e.options.formattingFn = function () {
                    var e = a.apply(void 0, arguments);
                    l(e);
                  }),
                  e
                );
              })();
              return (s.current = a), a;
            },
            m = function () {
              var e = t.onReset;
              u().reset(), e({ pauseResume: f, start: d, update: v });
            },
            d = function e() {
              var a = t.onStart,
                n = t.onEnd;
              u().reset(),
                u().start(function () {
                  n({ pauseResume: f, reset: m, start: e, update: v });
                }),
                a({ pauseResume: f, reset: m, update: v });
            },
            f = function () {
              var e = t.onPauseResume;
              u().pauseResume(), e({ reset: m, start: d, update: v });
            },
            v = function (e) {
              var a = t.onUpdate;
              u().update(e), a({ pauseResume: f, reset: m, start: d });
            };
          return (
            r.useEffect(function () {
              var e = t.delay,
                a = t.onStart,
                n = t.onEnd;
              return (
                t.startOnMount &&
                  (c.current = setTimeout(function () {
                    a({ pauseResume: f, reset: m, update: v }),
                      u().start(function () {
                        clearTimeout(c.current),
                          n({ pauseResume: f, reset: m, start: d, update: v });
                      });
                  }, 1e3 * e)),
                function () {
                  clearTimeout(c.current), m();
                }
              );
            }, []),
            { countUp: i, start: d, pauseResume: f, reset: m, update: v }
          );
        });
    },
    850: function (e, t, a) {
      var n;
      (n = function (e, t) {
        return (function (e) {
          var t = {};
          function a(n) {
            if (t[n]) return t[n].exports;
            var r = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
          }
          return (
            (a.m = e),
            (a.c = t),
            (a.d = function (e, t, n) {
              a.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (a.r = function (e) {
              "undefined" !== typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (a.t = function (e, t) {
              if ((1 & t && (e = a(e)), 8 & t)) return e;
              if (4 & t && "object" === typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (a.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var r in e)
                  a.d(
                    n,
                    r,
                    function (t) {
                      return e[t];
                    }.bind(null, r)
                  );
              return n;
            }),
            (a.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return a.d(t, "a", t), t;
            }),
            (a.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (a.p = ""),
            a((a.s = 4))
          );
        })([
          function (e, t, a) {
            e.exports = a(5)();
          },
          function (t, a) {
            t.exports = e;
          },
          function (e, a) {
            e.exports = t;
          },
          function (e, t) {
            e.exports = function (e, t, a) {
              var n = e.direction,
                r = e.value;
              switch (n) {
                case "top":
                  return (
                    a.top + r < t.top &&
                    a.bottom > t.bottom &&
                    a.left < t.left &&
                    a.right > t.right
                  );
                case "left":
                  return (
                    a.left + r < t.left &&
                    a.bottom > t.bottom &&
                    a.top < t.top &&
                    a.right > t.right
                  );
                case "bottom":
                  return (
                    a.bottom - r > t.bottom &&
                    a.left < t.left &&
                    a.right > t.right &&
                    a.top < t.top
                  );
                case "right":
                  return (
                    a.right - r > t.right &&
                    a.left < t.left &&
                    a.top < t.top &&
                    a.bottom > t.bottom
                  );
              }
            };
          },
          function (e, t, a) {
            "use strict";
            a.r(t),
              a.d(t, "default", function () {
                return E;
              });
            var n = a(1),
              r = a.n(n),
              o = a(2),
              i = a.n(o),
              l = a(0),
              s = a.n(l),
              c = a(3),
              u = a.n(c);
            function m(e) {
              return (m =
                "function" === typeof Symbol &&
                "symbol" === typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" === typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            function d(e, t) {
              for (var a = 0; a < t.length; a++) {
                var n = t[a];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            function p(e) {
              return (p = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            function f(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            }
            function v(e, t) {
              return (v =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function h(e, t, a) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (e[t] = a),
                e
              );
            }
            var E = (function (e) {
              function t(e) {
                var a, n, r;
                return (
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                  (n = this),
                  (r = p(t).call(this, e)),
                  (a =
                    !r || ("object" !== m(r) && "function" !== typeof r)
                      ? f(n)
                      : r),
                  h(f(a), "getContainer", function () {
                    return a.props.containment || window;
                  }),
                  h(f(a), "addEventListener", function (e, t, n, r) {
                    var o;
                    a.debounceCheck || (a.debounceCheck = {});
                    var i = function () {
                        (o = null), a.check();
                      },
                      l = {
                        target: e,
                        fn:
                          r > -1
                            ? function () {
                                o || (o = setTimeout(i, r || 0));
                              }
                            : function () {
                                clearTimeout(o), (o = setTimeout(i, n || 0));
                              },
                        getLastTimeout: function () {
                          return o;
                        },
                      };
                    e.addEventListener(t, l.fn), (a.debounceCheck[t] = l);
                  }),
                  h(f(a), "startWatching", function () {
                    a.debounceCheck ||
                      a.interval ||
                      (a.props.intervalCheck &&
                        (a.interval = setInterval(
                          a.check,
                          a.props.intervalDelay
                        )),
                      a.props.scrollCheck &&
                        a.addEventListener(
                          a.getContainer(),
                          "scroll",
                          a.props.scrollDelay,
                          a.props.scrollThrottle
                        ),
                      a.props.resizeCheck &&
                        a.addEventListener(
                          window,
                          "resize",
                          a.props.resizeDelay,
                          a.props.resizeThrottle
                        ),
                      !a.props.delayedCall && a.check());
                  }),
                  h(f(a), "stopWatching", function () {
                    if (a.debounceCheck)
                      for (var e in a.debounceCheck)
                        if (a.debounceCheck.hasOwnProperty(e)) {
                          var t = a.debounceCheck[e];
                          clearTimeout(t.getLastTimeout()),
                            t.target.removeEventListener(e, t.fn),
                            (a.debounceCheck[e] = null);
                        }
                    (a.debounceCheck = null),
                      a.interval && (a.interval = clearInterval(a.interval));
                  }),
                  h(f(a), "check", function () {
                    var e,
                      t,
                      n = a.node;
                    if (!n) return a.state;
                    if (
                      ((e = (function (e) {
                        return (
                          void 0 === e.width && (e.width = e.right - e.left),
                          void 0 === e.height && (e.height = e.bottom - e.top),
                          e
                        );
                      })(a.roundRectDown(n.getBoundingClientRect()))),
                      a.props.containment)
                    ) {
                      var r = a.props.containment.getBoundingClientRect();
                      t = {
                        top: r.top,
                        left: r.left,
                        bottom: r.bottom,
                        right: r.right,
                      };
                    } else t = { top: 0, left: 0, bottom: window.innerHeight || document.documentElement.clientHeight, right: window.innerWidth || document.documentElement.clientWidth };
                    var o = a.props.offset || {};
                    "object" === m(o) &&
                      ((t.top += o.top || 0),
                      (t.left += o.left || 0),
                      (t.bottom -= o.bottom || 0),
                      (t.right -= o.right || 0));
                    var i = {
                        top: e.top >= t.top,
                        left: e.left >= t.left,
                        bottom: e.bottom <= t.bottom,
                        right: e.right <= t.right,
                      },
                      l = e.height > 0 && e.width > 0,
                      s = l && i.top && i.left && i.bottom && i.right;
                    if (l && a.props.partialVisibility) {
                      var c =
                        e.top <= t.bottom &&
                        e.bottom >= t.top &&
                        e.left <= t.right &&
                        e.right >= t.left;
                      "string" === typeof a.props.partialVisibility &&
                        (c = i[a.props.partialVisibility]),
                        (s = a.props.minTopValue
                          ? c && e.top <= t.bottom - a.props.minTopValue
                          : c);
                    }
                    "string" === typeof o.direction &&
                      "number" === typeof o.value &&
                      (console.warn(
                        "[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }",
                        o.direction,
                        o.value
                      ),
                      (s = u()(o, e, t)));
                    var d = a.state;
                    return (
                      a.state.isVisible !== s &&
                        ((d = { isVisible: s, visibilityRect: i }),
                        a.setState(d),
                        a.props.onChange && a.props.onChange(s)),
                      d
                    );
                  }),
                  (a.state = { isVisible: null, visibilityRect: {} }),
                  a
                );
              }
              var a, n, o;
              return (
                (function (e, t) {
                  if ("function" !== typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 },
                  })),
                    t && v(e, t);
                })(t, e),
                (a = t),
                (n = [
                  {
                    key: "componentDidMount",
                    value: function () {
                      (this.node = i.a.findDOMNode(this)),
                        this.props.active && this.startWatching();
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.stopWatching();
                    },
                  },
                  {
                    key: "componentDidUpdate",
                    value: function (e) {
                      (this.node = i.a.findDOMNode(this)),
                        this.props.active && !e.active
                          ? (this.setState({
                              isVisible: null,
                              visibilityRect: {},
                            }),
                            this.startWatching())
                          : this.props.active || this.stopWatching();
                    },
                  },
                  {
                    key: "roundRectDown",
                    value: function (e) {
                      return {
                        top: Math.floor(e.top),
                        left: Math.floor(e.left),
                        bottom: Math.floor(e.bottom),
                        right: Math.floor(e.right),
                      };
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      return this.props.children instanceof Function
                        ? this.props.children({
                            isVisible: this.state.isVisible,
                            visibilityRect: this.state.visibilityRect,
                          })
                        : r.a.Children.only(this.props.children);
                    },
                  },
                ]) && d(a.prototype, n),
                o && d(a, o),
                t
              );
            })(r.a.Component);
            h(E, "defaultProps", {
              active: !0,
              partialVisibility: !1,
              minTopValue: 0,
              scrollCheck: !1,
              scrollDelay: 250,
              scrollThrottle: -1,
              resizeCheck: !1,
              resizeDelay: 250,
              resizeThrottle: -1,
              intervalCheck: !0,
              intervalDelay: 100,
              delayedCall: !1,
              offset: {},
              containment: null,
              children: r.a.createElement("span", null),
            }),
              h(E, "propTypes", {
                onChange: s.a.func,
                active: s.a.bool,
                partialVisibility: s.a.oneOfType([
                  s.a.bool,
                  s.a.oneOf(["top", "right", "bottom", "left"]),
                ]),
                delayedCall: s.a.bool,
                offset: s.a.oneOfType([
                  s.a.shape({
                    top: s.a.number,
                    left: s.a.number,
                    bottom: s.a.number,
                    right: s.a.number,
                  }),
                  s.a.shape({
                    direction: s.a.oneOf(["top", "right", "bottom", "left"]),
                    value: s.a.number,
                  }),
                ]),
                scrollCheck: s.a.bool,
                scrollDelay: s.a.number,
                scrollThrottle: s.a.number,
                resizeCheck: s.a.bool,
                resizeDelay: s.a.number,
                resizeThrottle: s.a.number,
                intervalCheck: s.a.bool,
                intervalDelay: s.a.number,
                containment:
                  "undefined" !== typeof window
                    ? s.a.instanceOf(window.Element)
                    : s.a.any,
                children: s.a.oneOfType([s.a.element, s.a.func]),
                minTopValue: s.a.number,
              });
          },
          function (e, t, a) {
            "use strict";
            var n = a(6);
            function r() {}
            function o() {}
            (o.resetWarningCache = r),
              (e.exports = function () {
                function e(e, t, a, r, o, i) {
                  if (i !== n) {
                    var l = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                    throw ((l.name = "Invariant Violation"), l);
                  }
                }
                function t() {
                  return e;
                }
                e.isRequired = e;
                var a = {
                  array: e,
                  bool: e,
                  func: e,
                  number: e,
                  object: e,
                  string: e,
                  symbol: e,
                  any: e,
                  arrayOf: t,
                  element: e,
                  elementType: e,
                  instanceOf: t,
                  node: e,
                  objectOf: t,
                  oneOf: t,
                  oneOfType: t,
                  shape: t,
                  exact: t,
                  checkPropTypes: o,
                  resetWarningCache: r,
                };
                return (a.PropTypes = a), a;
              });
          },
          function (e, t, a) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
        ]);
      }),
        (e.exports = n(a(0), a(37)));
    },
    851: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(22),
        r = a(0),
        o = a.n(r),
        i = a(2);
      a(729);
      t.default = function (e) {
        var t = e.data,
          a = e.sliderClass,
          l = e.sliderdemoClass,
          s = Object(r.useState)(""),
          c = Object(n.a)(s, 2),
          u = (c[0], c[1], Object(r.useState)(t)),
          m = Object(n.a)(u, 2),
          d = (m[0], m[1]);
        return (
          Object(r.useEffect)(
            function () {
              d(t);
            },
            [t]
          ),
          o.a.createElement(
            "div",
            {
              className: ""
                .concat(l || " slider-demo", " text-center ")
                .concat(a || "", " st-hit"),
            },
            o.a.createElement(
              "div",
              { className: "image-flip" },
              o.a.createElement(
                "div",
                { className: "mainflip flip-0" },
                o.a.createElement(
                  "div",
                  { className: "frontside" },
                  o.a.createElement(
                    i.c,
                    { to: "/astrologerdetail/" + t._id },
                    o.a.createElement(
                      "div",
                      { className: "card" },
                      o.a.createElement(
                        "div",
                        { className: "card-body text-center" },
                        o.a.createElement(
                          "p",
                          null,
                          o.a.createElement("img", {
                            src: null === t || void 0 === t ? void 0 : t.img,
                            alt: "",
                          })
                        ),
                        o.a.createElement(
                          "h4",
                          { className: "card-title" },
                          null === t || void 0 === t ? void 0 : t.fullname
                        ),
                        o.a.createElement(
                          "ul",
                          { className: "mb-3" },
                          o.a.createElement(
                            "li",
                            null,
                            "Specility: ",
                            o.a.createElement(
                              "span",
                              null,
                              null === t || void 0 === t ? void 0 : t.all_skills
                            )
                          ),
                          o.a.createElement(
                            "li",
                            null,
                            "Language: ",
                            o.a.createElement(
                              "span",
                              null,
                              null === t || void 0 === t ? void 0 : t.language
                            )
                          ),
                          o.a.createElement(
                            "li",
                            null,
                            "Experience: ",
                            o.a.createElement(
                              "span",
                              null,
                              null === t || void 0 === t
                                ? void 0
                                : t.exp_in_years
                            )
                          ),
                          o.a.createElement(
                            "li",
                            null,
                            "Call Rate:",
                            " ",
                            o.a.createElement(
                              "span",
                              null,
                              null === t || void 0 === t
                                ? void 0
                                : t.callCharge,
                              "/",
                              null === t || void 0 === t
                                ? void 0
                                : t.conrubute_hrs
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    852: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(201),
        r = a(202),
        o = a(203),
        i = a(204),
        l = a(0),
        s = a.n(l),
        c = a(2),
        u = a(339),
        m = a(340),
        d = a(341),
        p = a(211),
        f = a.n(p),
        v = (function (e) {
          Object(o.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    null,
                    s.a.createElement(
                      "section",
                      { className: "ptb-30" },
                      s.a.createElement(
                        u.a,
                        null,
                        s.a.createElement(
                          "div",
                          { className: "heading" },
                          s.a.createElement(
                            "h2",
                            null,
                            "Free Astrologer Services"
                          ),
                          s.a.createElement("img", {
                            src: f.a,
                            alt: "",
                            className: "sb-img",
                          })
                        ),
                        s.a.createElement(
                          m.a,
                          null,
                          s.a.createElement(
                            d.a,
                            { lg: "12" },
                            s.a.createElement(
                              m.a,
                              null,
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/heroscopestwo" },
                                    s.a.createElement("h3", null, "Horoscopes"),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              ),
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/kundaliform" },
                                    s.a.createElement(
                                      "h3",
                                      null,
                                      " Match Matching"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              ),
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/manglikdosh" },
                                    s.a.createElement(
                                      "h3",
                                      null,
                                      "Manglik Dosh"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              ),
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/pitraDosh" },
                                    s.a.createElement("h3", null, "Pitra Dosh"),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              ),
                              " ",
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/kalsharpDosh" },
                                    s.a.createElement(
                                      "h3",
                                      null,
                                      "Kalsharp Dosh"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              ),
                              " "
                            )
                          )
                        )
                      )
                    ),
                    s.a.createElement(
                      "section",
                      { className: "ptb-30" },
                      s.a.createElement(
                        u.a,
                        null,
                        s.a.createElement(
                          "div",
                          { className: "heading" },
                          s.a.createElement(
                            "h2",
                            null,
                            "Paid Astrologer Services"
                          ),
                          s.a.createElement("img", {
                            src: f.a,
                            alt: "",
                            className: "sb-img",
                          })
                        ),
                        s.a.createElement(
                          m.a,
                          null,
                          s.a.createElement(
                            d.a,
                            { lg: "12" },
                            s.a.createElement(
                              m.a,
                              null,
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/allastrologerlist" },
                                    s.a.createElement(
                                      "h3",
                                      null,
                                      "Chat with Astrologer"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              ),
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/allastrologerlist" },
                                    s.a.createElement(
                                      "h3",
                                      null,
                                      "Call Astrologer"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              ),
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/allastrologerlist" },
                                    s.a.createElement(
                                      "h3",
                                      null,
                                      "Video Call Astrologer"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              ),
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/askQuestionList" },
                                    s.a.createElement(
                                      "h3",
                                      null,
                                      "Ask Question "
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              ),
                              s.a.createElement(
                                d.a,
                                { md: "2" },
                                s.a.createElement(
                                  "div",
                                  { className: "serve-1" },
                                  s.a.createElement(
                                    c.c,
                                    { to: "/allastrologerlist" },
                                    s.a.createElement(
                                      "h3",
                                      null,
                                      "Talk Astrologer"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      "Lorem ipsum dolor sit amet, consectetur"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component);
      t.default = v;
    },
    863: function (e, t, a) {},
    864: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAJZQTFRFAAAA////////////////////////////////////////////////////////////+vv7xOLiuODgweTk////////////////+v39+vz8/f7+/v7+/////////////////////////////f///////////////f7+/v///f///v//////////////////////////////dvWpHwAAADJ0Uk5TACvG/+Nj6viOB7jxqtU5gK3p//AcnA5V6Gbz+dwVQLlcTrEVcoeVKzkOHSNqR81xv3h/mG4QAAAEXklEQVR4nO3d63bSQBSG4RygSKGMhxY8tWq1tVqxev83J4YcZnZmpzDZWZnN+t6fQjFPJ8mQENIk6Vma5eM3mfZlJOnZ2IiiWW/Ji7EJZZOejvn52IKqnpB07OWvAwSQgZKCLJbjNJGGXPR8odCWgLgBIhUgJECkAoQEiFSAkACRChASIFIBQgJEKkBIgEgFCAkQqQAhASIVICRApAKEBIhUgJAAkQoQEiBSAUICRCpASIBIBQgJEKkAIQEilQ1ZmfBrI1++er3vTa9LLKeX/SHzq0U+fsFfN2ggZszlt1r1hYy58HbLU4Fk6xOB5CkgRYCIJwXJNuM0kYYE7v56dwFIESDiAbIPEPEA2QeIeIDsA0Q8QPYBIh4g+wARD5B9gIh3cpC376xzRM+cB06bZ2bRQd5/yJs+Ztf8T9x88t14KRoIbcP9wMb/wVS0kMVn5geYD9iiheQL/5hsmKfHC8nzL77ncx8VxgyZ+SQaIXnu+ayXgdzGDfHcWs4POfsaD+S8unrAuRtcS1JDLqwLDr7tHogGUr9Fmdu/9NaY1A8a8kB8EHKrQbIXVgVJ7vi1SxfEGRN37VIGSe7tMbHnE22Q5MoeE0uiDuJu8Y0kHJIa871zUYwxHUcPu+MHY274R1nI3NlOakkwpHi5jL/C7aF4W80ePSTr4mB0+eNoCLMXDoWUO8KMW47yNrkL7zvV/5Xr+lUAxBmTxbQX5Gd1GMP9yqv/65x5fFW+wOLheIh3TAIhK+7HqqqzGNxVpht3MY6EeGZGpZD2zBgIeZyVD/9ilqPa3XMb0bZ8gdk2DNIak9CN/b77F15fwczutpadL3/ACToyJoPtfleH7X7ZU27Pn2l0DqWmwZD5bkLcdk14j1Mz7TrduV4Zs+JPHT4PcWfG36GQoTvk3K/3VugaIXOfRCPEfS+sGuIen2iGtMdEK8SdGTVD6L5LL4ScZFQMcc7caYa4a5dqiL3F64ZYY6Ic0syM9A23Nkg1M97Oyb+rgyR3uyOgWXtx9UGSyzR9bP+rQog/QIQChAaIUIDQABEKEBogQgFCA0QoQGiACAUIDRChAKFVr5Md/DWUZBvRfVHaELuu23bdDHVfsSEg+eyJe/rTQIyBIOxN9ga8P9pAEP/VQGbGPD1eiPf6rOHWq912GXxjwOMh3ktCpOq9+2f+5L0HQj/oli30/oZ1a/83UdqQQceDvwr18K6npukPC3HG494It6WfP/WNvT6t6ysdMcZBnP0Vd6FmTDEQ97LCkZbtqPwQex7k371ElRfirFc6HF7I31zdeHghGsfDB7HHQ8d2XtSCOPOghv1uGYVomwfrXEj3l02jzoXomwfrHAj/9cz4syEdX5iNPwuich6sayA658G6GjKxHdrWq4Q5b6VoHqzzQRSOhw+ibzsvakN0OloQbfNgHYVodRCI2vGgEL0OF6Lp+INmQzTOg3XmJNarxIIonQfrtsrnwaY/JzEeu9b/j2+D/zzWiP0DM0mnEOvzSbcAAAAASUVORK5CYII=";
    },
    865: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAOFQTFRFAAAA/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////f///////v///v///////f///v///v///f///v//////////////5PLy/////v///v///////f///v//+////v///v///////v//5PLy/////v///////v///////v///f7+/v///v///P///f7+/////////v///v//////4be5AQAAAEt0Uk5TABUrqv/GlWq46kBVnONjDvg5cTKA1b9H8c0ceNwHI45ODlwcVbErlTkdOMPeggKjWE/YJEkWHSv1IQOdnIckZZ8XcgwOD8jAY1bHvBhUAQAADO9JREFUeJzVXXeD6jgOH5JQAwnwkoGXR7t7O3tlr/e2V/fq9/9AxwyDJdmy45aE/f1JILGwumTl6ckOoyRNszvGk2Rk+bsHw3Q2zyjms8XQi3JGvsxYrIqhV+aCMh/zZFyxTjdDL88aGz0Zb5uyHXqBdviQGsl4RfptkPpq3UpHltXl0MtsQ/JsQca3gJLdnpOJdKV++NGFkvyGprN1Syg/ycs9VPn9Wl5Tnmvdk2OSTNKZupdpuujYso5kZZXmR3z9VJCrY+NqzvXBwJnzOq06s62y0j0nylcSYiVrPatsGGZUkRZdmKQLFY8l/4wCr3B80t2sXYPfsB9XyVF3Ez/khI691hFpCCWaPWmsNuQds+13ItJxwbdezwzfHGHer3k5yR3oeEW6iaXNL0Qjmf3CEf67ed214bS4EavvxqED39Mgwzc0NV4BS4nZWeNJmYYLC9mPWivBAidMCctdG7rI6oY6M+IwDaSjwXc7W/2CUJIz3/ic7q+mb5nnsvJr8vyc6jas/iKEDmIHl3b7e8Kx457dw5PBfJdJUcnR5+1WqWq8rIG9iKXtj6y0sBlJnjI6YVX5KjDstlvux9sysBY2eyt6nArGH32+eN0rQbdInX5I9sTbDnyuFIHZW8mphBFiVWu+uoHsySePZ9+hJgjSds0p4wVxpyunE8sYpDq//J5Eyfz7jndAlnDuLrFYC+8/OP8c4wfyrrglODBj+XjU2DLWHr9HOO5okG309xSc4YecVWsH3pPK6w4IBdVgDgoEaawXz4ejPZkHx68JDWOerWNI+N3eOy+ALGOEZOqWRkWW7I48u53/swswqBGCCilvYEcJbIiTYMkAFydGKpVmcvY23AUSEsjdgh1mUcLvKXEnLfYEMiI+LgEC6L4A1xUhwYLSvicgpfvAB++ElLRr4GOeppOkRbU0yN/Intskb5vZP74FQgW3ep3Jx9tfN65+aPraEVMybrmnkFFnH0tBdb9Vq3X/Ctb3ox+b2B9bFLMqKoXvGighTyj7c2hhg59gMb7uS679fvlT+N7aqA0h9RRgQ94B+q/F0flZJmGs/UGJ98S0d8AO4ZnxkRCSFkIWMiGvqQudzkZyMjfEJ4LgcM5CN2tzPblU6kEjo1jiDVrElhusYE1Iwdb1ZryoNMieaP042OQYRsyakKef/4KjZHVhv5yAjd//UnNDISJZwPoF7Am5apktlwU6s5vyBdo1ze0EIZOA9d9hLezvOP1KjtGvARHLGeD96HSweHSwWX9C6tc2gLjyfyEH6SuOkmZsvv50FOYwRvFL2CSXuF1pEzlwmZNfAxuymgtMWAxZt3dRKAopPc+pJnAJ979hLieej+bhz6c5Lf1yyTGw8NxavZhBB3Dj3aP2Ee2mYm7wWzCiDJ2CzGePhWtv5sWni99hShg5AeY6qN6Mi+JvRWCo+3ssKQf1vyhNrBeTkODkQ4nZa/UH5foOLuofHk4IuE9z73QQrtH8UdnWI+hpJeTIohESJ0EHcsCpPkjAKbZEXPF/9g2omBiUVNqiPVHzJiBFsv2ORUiDclBhxWW0J2oTAvjq8nZFIiRiWeHpT3ArtfwFUiIRGYeQiIWeq+5CN1NiRog6JKGOQggpvX0dcqc3/BnE5EXRXMJWSeIegxBSDA1Kg7/jL3A7RZkKwyd1J8QgBOdr/MvTGH/VCxz0G1ElH4GQCaYjTrPl30AHKlsixJ3yVjghuLHWr4WDwd/FLb/6h3RJiDvN8Iof+LIE1jGR9uMVesunyWau2E8dAPowalM2NOTKbRjHGXsl1PtF5UenluxWCFE4fCNdEaafKMhQQlBxP06V6g7IrcvOCFzBnwYSgjYkRmSG8M9/CcmTL7GPDAx1QUJUGxwIfQpUcAHeq7DkA8QgfNYsBJ+1vCVIxEISlg7SM3IE/Pt+bzmI2nBrhiSnjy0TMXZ4+VHFf3T/Mb9mYXl8eMO+iusBfRKUXbP40KOCGJKQawekpbWEfIk+FNzhweVCRPiG31AI7fRf6YKQ9pT70EP/sjeMB/E/yTuSc8/l7aQdhBHq6GDlOwv9T/Z9WELATrpLe9R8K4PLm5laKVkhkXEk+izA/+2akKfmnKYVo9lZLhKrcWf0zgnRgSVEeP7u4fZjEQLGwFlIHosQMC/OuufBCBEm0Tkl9WCE+JZiESGOxxuCwRNi3WSlQETP3Vh2PXhCNGkJC3Tsa+nBEwJ9HmplzgwIEHueyKEhBGqMrgeyNenLzqEhBD535S2hJ9bh/ZAu0BEi1sMU4o0APRGjmmCNb4RsShcgO+VY/gM94cyVIeDd+CtKIbRtzc4yoHIZpzBiBy0hqMTheEvUVRGjA88SekLgtLFr5I7GWPSngg3dVCLOdy32o+NypubiuDCksOCPddWjaEtaD/JHArQBq4TAH+ucTEEVqzgHeVphTPNCZdZ1Sz6gGmKMrvR2GAlp/BczBUL68ecT49OEaXP3ZNGx0l7sosilsg+DRJ27A4hGE+z7cLreW1943jl+FItxTkLgw4/7S+gyLXCq6nqmOwUEW+IusnjwAz8fpU/oa/TtwIOTBp+BBjLroXsgOItdcHcHnDaZe1SvcFdl69HHjgFb4hEmkaOPmiNGfeEEjO6TcXM6jtotoEbvGmC9wuk4ardAPZY+WxJp0ssNuzwPmIUItmTvs44Nbm70567R7lyjEYqrcbVzbQSD4N2vlYHMAPSU+CsVmYJ666hIkTnwOnOV4KEAHntS5toZYo7Td+Av9UsekqEAznuSmIYIzp2Y5AS86ZdMwE3yjsFveVZXTxnMpckbjUjxSybQGWgX+x+OtFwFt3No80a765kGJTPQ9tZ63G6k49l+j8Eq+mamicRbDTR5UgaPauHQkgvxnm9bHJVZK186l+nYpzcos8Psm6QXcE/fRkViGbNz+12k/ajPu7uAlok8nk4/AVZG8IwqeTrurO1PpPOea1lfNmc6Esma5dF2+jaJJy9kaWa9SSZAzNly/5LM9LRdFU6D+npMxBfO1iajNMWLHGvksmifAMsAHWz0Tx4SSrKJTlBG5Ht6zWAxAVZFGaNT/Iij3yw78Ho4JyObTHqhfQIsAzSn138GmqxTZ6qQbqk1N28/nQBruayv4Scv/iHShSrOdV1t4PkjxWFv09NkT2y1MFpCQI69UezZKj2/xX3LVHGt2i2nzwRY5AaHFNVGmreXMLApQtrM4ZaBdHBQw7jyUgAelt6lxRxuBYgrguYjTW3cQc2IGhXk0KMdJSX6SVB2p2l/cYZDLEk8Urvs7CJaUa1gx0ULHJziBRqDWlGCTrQFHsEdFfLi0Vq0g7U0IDGoXXyC/GD7ITo8Snbw9TXs8IjeiGW04hUcRs+DZ/KcirQmwWN9LjzzApgSK3WHaV/FmC6U5MUt8mMmyTuAlMisjAOZ7T90KQoBW0a7DBx+28LAZQ8CZBktkyT4lPfQpSiMxjVv9UBlDwqk0S1/EX+CQBSgSZSW1VuaYu92dS6A1lDbZniS3Om7fdwA9zFYG7Qn6/RhuMujO5a8a+dhKIECmz2boBg+KIqPC2EaHAoHpAjTa9+1AV6HKMmePPfTvdiGxocQuicPooW9CCF9Mw9iGf0IoS/ftH9zQ4fwJITEvsExYwz4EkK5K8oc1yAETKygb24IHwoWBv2xhXYQLdxT67UWkwBCSLYryyaDKi+RUfBSPKTdZNDuWCEia79kzIbkDa2ztvEhVI/vREXpNa/boTYlfJ53SQudL729uZgAXEZ/21zSFxdHyd05r0HwRVBKhL4ldQg9HGsCE3lP6gApL8jmtr3spA0lrWb2rb2CWvkppJa3da/5FWSXIwgo8YZ7lXnU2BtDPI87Sgnf2dMFUEY6jnAm0gvk634OtndwsrY8Uz28X/ZgHT/AMyOOHd1KXcerzjcF19FiimUiN5w8d7spuKobWSgrqWDbaeiI6+zRx1zKMh/l3eSaRyFODugl06GcSpRkz9Fnab6B9KJ0kpFq5E3JZh3YR9KJ0pHVOm7VburYW086o7tziTapREm24ibI+YN0tEQbwM0hV9uAXA8V6VFOCB3xLCGH0UShJJbYU83Y/YnghdKPeeXmTfhjac9XhHcetmPB9DOt9O+gtILUhddXNq3iOubShffTjxLD9nfSnO+YW6V+xzimB4mOPvjqjlJ2it/XkLryWLKVO517i97e0fCkZIdlldj+pcdkKXOp23HEOGgq3QHJOi0szFmyVdyeYXKBV3wynPWcVJtE5yOXyY7TGP1mauiKOLuC+KyeKM2NST6tNfRfBqHhjs3E6ozha8um6azu0FWlVzT6Q9H2eO538qAOnOC6oB6sCqPguGMcSlsUfdpAC+SVUfQ10I4JGhLllcdcBGY1rrQ6enjkFdvxr27F0msGR8+oqrrWkzOv0wF8EW80SaIe9b5+srD2xt7xf7yO4jaFsV9nAAAAAElFTkSuQmCC";
    },
    866: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAANtQTFRFAAAA/////////////////////f7+/////////////////////////v///////////v///////////////////////////////v///////////////////////v///v///////////////v7+/v///v///f//////////+f///////////v///v///P///////f7+/////////v///v7+/f///v7+/////v///////f7+/f7+/P///v///////v//+////v///f///v///v//////Vaqq/f7+/v//IlhYRAAAAEl0Uk5TACtVgNW/HZVqDhz/OZZjI4Dx4/i4FUCqVdzGcZwHYzmO6k5AnWsrR8cWsYdyKwe5VnhyjhUHKzKrzSsOKxzORw5WDjJOeQEkZKqk6bEAAAk9SURBVHic7V1pm9smEJaQtrYk1658LOtDjbxp4nTdpE3TNE3b9L7+/y+q1weXQDBIznoSvZ/2WYsRL8wMMAwoCDp06NDhA0JISBTf44oQ0obATwjp7QXGfUKSNiRakYbRVaYgIqG/wGQQfaoK7A1H7dVYi/CzXH3pAXHfT+CgN9bKm8Rn7Jikr3/pEdMUKnBG4jqB8fU5WARBPY0dcgrTsJu5RWC2OAOVpY3GHit3fRguXAQC28aK0XTi8tosm5PCTeDKTV42/7xNHo8MJq7DykXgwKk7jgJbs/qidH/rDmu767wFCWzN6DU8ppSG93hMabWz1p9YBNKqnsa0txdIKK16skkrTGZfKGLHTwbSAymha+WRZZ3AQh1Q59FT+QlypbbOpgUiz2SRdKBR2dlQacI6JgqPns49pMoIk9825iHr1dXA9NxSbsQvTc8VdxJjs3tVhq2mfbIVha3rpKVfSeoyMzx2Iz4V1zV00m+xTySVKS1+8JGohWP9M0QSaJnUpFPh4WfgGZCA54IV50Pr4yPxxaVuZBwJqp8vrWPnC3HYXPgwOCD5WtACo3WIEC1Kp4cC09xJ66kgsNYX1qIn8DDpvIKt8OKqJkYCD8ex4RteZO0770q5jLHzNOElL/Rt5Ufu2dz6Y4dC0C5P5Sq4HkwALkMYJlRtfFWvdwaszALdIDgYiOtLuD1fyb98x12H1hMY8HpuEugI3iEUVG7DFUhuQW64MUigoOI+w+L3rP3mQCPjPkKa0ieMYP4GJpDbnU+XcE9qH0AUsMnFWBzEuMuqeoF6JHy2YptYa8D1wNHzcvAqR/yfBVP1NbgufZ1AcFlwhwQJq7PgMMMGAnkfL8DLRW6Z8NcGS9b43LxYN008gm+8j8EemDnRHvy1QuvfsP/9cPoXzAcewPsYqlu8Kl7zAlqtNRPotbJgo+IUWJCZyBwwdHGw6T8bMTZNVDUIrisCHaFpUggGlWrfNBPIOjQHGgkb1j13DRiR0ySXTcF8bK5BhVhFzA0QkhptZz16Mk7mPMw2l9RtjTCBwFWJVaOT/UTEOJuMwERme3semkySCQSqpo1I8nb/q3F+rxIZnWJy8xeGEscmLw0/kzMRObklQ4yBD4nHijF3bvI6p4rODdp1LiKR5Xe14lYibKAwGHNTIqYWZ0QMzgBMhBnzmYj49siPynutRJjA90wkPa6STPEA1ditRE7LQNMU5FxEgv6eycLkTFUis9N60zj3He792sL0c2MixkDlYEWpeXCCjyPBpqQ0Mr6OLVhLh9oLYO9tOkU57b8zgY/9BNqcgbUcfG25R0U1G85CeWwPSIRFQqDT5gNIhQj7j8mh12PGigOD8szL+CxMdeughis1ZnPQhv2JLfc9QgVBykqX7H+MiJeyxt6l2Ua4T0yM6dGEz/SZsvqsOTdsHxjsfBrELYRVkKAIfK3rsWhnzhdqIoGgClNwC/7Moq2CIrAh0aOPmam75VXI4DFscAvyomJvUn+BfGfBY1jj269Qz88iHnK09Tnv49e+AuHRVjEmNoE5LmGDRC7IQ9HAdffCINARbJGXjUFhbB7GV9pP2DkCKdcTVsxvUJvxln0GKMa9k6rQPB4PivDf8hScJ4B6COBdAnAWA75fVYmcP+UCF85u9B0v5De72Sm7sK/puul3LaQYVAcgYdd84dgnI24gQFsVILSu4zJALKFxdu+ERBm3nY5USLWDxq8FbLmUrHRowoHwvNYMxFSU2IHJrZjyAa6+ADFram1V662Y6qSd2Yjb/9kvz20CBTvP8l99CJxwDCge8bK2DUdiwqUxBCkl20W1ljeTUrtKXw4HhKKs2oTiUkpUNM4GRhKTtzVTjq30JCTFQIuNnBk31Q9laSQ/VjOrSeXMuFjvin5byrmAfgtVCUpq6yT+vfLIU6qkad/V6WCopHIuqmul65WSbR63cXqBVBJiFyu2NZKSqJowS+v9UVjJTp+W7BjKH2SoNkuWvWqSPcfxpyZtenI4thJrMuYntpRBfR72UaAu8b+xfZwg5RZa4TL+UrsYhrxsicY9ts7J8Y5Tj7/cBbZ79OJN7ZEV3nrOQQ7XXv679YM9QzVvvIoJ/QcgcGM9B5NNeu1YuYyZjQoFpmEV9SeTsqz37xlo7PFIczbhiPHSJ4K4MZ/oiMuWD/PIGP1H48qhiXwREV8dCJeacxbruNyAs8Tg2CyFQx6UlsQv+ZODEMoHwQWlTY41dujQoUOHC8EmukSAx93E9Szte8YYOviCllLvE9BjPQ9dXzOAm28PXV0zfJNqLg4dkUvDx04kfugR8ATfNCnPYudD01TAjkjb6Ih0RM6Ej5ZIQqLl/eIFO5Hwfi9pvMROJDkdU+7jJsKzA3LMRAoh0SrDTETaqcBLZCTvM6MlMlQ2b5ASCSvBH5REik11kxMjkVS3H4mQiD4TAB+RSH//IjYiqXIfXI6USF/e/l8PKUoiqpUvwgAlkWsl+2ubBCiJKNcRxvtUPHxEBkoK2+qQ/IiOyEaeIrJkO2REkp5EI7tiyXa4iIRvZR49nsOJiUgRyTRi7cG0yycS3sk8qJTijIeIckW3eq0nFiKJfKJAsPIjkBBRM7mjSkotCiLFUqYx1xzdwEBkoaQLr3RZnBiIyDAkzqMjEhuyhbARqVr5EbiIrM0pT6iI1H0/AhGRfFh3HgMPEcsV3WiIbC1PYyHy0vY0FiLiGkoLNESyu/ocTTxE9lvPZiAikk3q0k0xEdm5YPNdHriI1HxmAhkR89fM0BE5hnorwEBkrGyxac+cYyBCEzUyp7F5FER2f8vb0Hn1UmckRIJUOd1SsXksRIJC2d4ZI400BtUgnXw/AyIixzu0OdZIo/E7DBX1EqaRuIgEoZImwO9dQkYkKPoyk/XpxiJsRHY2r4zzd4dpJD4iwUxJezh8UAghkd0vym059zeaoCQSpPJ24mQ6QkokSJStn3yDlMjOUkyXxWAjUhnn0RIJgmvt3TMIiVTSAdESUb5wiplIMKhkMCMlIn0FEjeRgnwgpxXka1xREwmC5foDIRKE+QdChH8BvoedyPHi0t0yCzuRICVkfxMbeiIndETOhY5IR+RMaEpkGl4Ilg2JXB46IpeGjsil4WMl0rNLfBhMgN+OKu7sMh8E8K/CkKv48nCWW8s7dOjQ4XLwP23F25vj6IiHAAAAAElFTkSuQmCC";
    },
    867: function (e, t, a) {
      "use strict";
      var n = a(22),
        r = a(0),
        o = a.n(r),
        i = a(2);
      a(26);
      t.a = function (e) {
        var t = e.data,
          a = (e.singlePost, Object(r.useState)("")),
          l = Object(n.a)(a, 2),
          s = (l[0], l[1], Object(r.useState)(t)),
          c = Object(n.a)(s, 2),
          u = (c[0], c[1]);
        return (
          Object(r.useEffect)(
            function () {
              u(t);
            },
            [t]
          ),
          o.a.createElement(
            "div",
            { className: "col-lg-4 col-sm-6" },
            o.a.createElement(
              "div",
              { className: "blog-wrap mb-30 scroll-zoom" },
              o.a.createElement(
                "div",
                { className: "blog-img" },
                o.a.createElement(
                  i.c,
                  {
                    to:
                      "/blog-standard/" +
                      (null === t || void 0 === t ? void 0 : t._id),
                  },
                  o.a.createElement("img", {
                    src: null === t || void 0 === t ? void 0 : t.img,
                    alt: "",
                  })
                )
              ),
              o.a.createElement(
                "div",
                { className: "blog-content-wrap" },
                o.a.createElement(
                  "div",
                  { className: "blog-content text-center" },
                  o.a.createElement(
                    "h3",
                    null,
                    null === t || void 0 === t ? void 0 : t.name
                  ),
                  o.a.createElement("span", null, "By Admin "),
                  o.a.createElement("p", null)
                )
              )
            )
          )
        );
      };
    },
    868: function (e, t, a) {
      var n, r;
      void 0 ===
        (r =
          "function" ===
          typeof (n = function (e, t, a) {
            return function (e, t, a, n, r, o) {
              function i(e) {
                return "number" == typeof e && !isNaN(e);
              }
              var l = this;
              if (
                ((l.version = function () {
                  return "1.9.3";
                }),
                (l.options = {
                  useEasing: !0,
                  useGrouping: !0,
                  separator: ",",
                  decimal: ".",
                  easingFn: function (e, t, a, n) {
                    return (
                      (a * (1 - Math.pow(2, (-10 * e) / n)) * 1024) / 1023 + t
                    );
                  },
                  formattingFn: function (e) {
                    var t,
                      a,
                      n,
                      r,
                      o,
                      i,
                      s = e < 0;
                    if (
                      ((e = Math.abs(e).toFixed(l.decimals)),
                      (a = (t = (e += "").split("."))[0]),
                      (n = t.length > 1 ? l.options.decimal + t[1] : ""),
                      l.options.useGrouping)
                    ) {
                      for (r = "", o = 0, i = a.length; o < i; ++o)
                        0 !== o && o % 3 === 0 && (r = l.options.separator + r),
                          (r = a[i - o - 1] + r);
                      a = r;
                    }
                    return (
                      l.options.numerals.length &&
                        ((a = a.replace(/[0-9]/g, function (e) {
                          return l.options.numerals[+e];
                        })),
                        (n = n.replace(/[0-9]/g, function (e) {
                          return l.options.numerals[+e];
                        }))),
                      (s ? "-" : "") +
                        l.options.prefix +
                        a +
                        n +
                        l.options.suffix
                    );
                  },
                  prefix: "",
                  suffix: "",
                  numerals: [],
                }),
                o && "object" == typeof o)
              )
                for (var s in l.options)
                  o.hasOwnProperty(s) && null !== o[s] && (l.options[s] = o[s]);
              "" === l.options.separator
                ? (l.options.useGrouping = !1)
                : (l.options.separator = "" + l.options.separator);
              for (
                var c = 0, u = ["webkit", "moz", "ms", "o"], m = 0;
                m < u.length && !window.requestAnimationFrame;
                ++m
              )
                (window.requestAnimationFrame =
                  window[u[m] + "RequestAnimationFrame"]),
                  (window.cancelAnimationFrame =
                    window[u[m] + "CancelAnimationFrame"] ||
                    window[u[m] + "CancelRequestAnimationFrame"]);
              window.requestAnimationFrame ||
                (window.requestAnimationFrame = function (e, t) {
                  var a = new Date().getTime(),
                    n = Math.max(0, 16 - (a - c)),
                    r = window.setTimeout(function () {
                      e(a + n);
                    }, n);
                  return (c = a + n), r;
                }),
                window.cancelAnimationFrame ||
                  (window.cancelAnimationFrame = function (e) {
                    clearTimeout(e);
                  }),
                (l.initialize = function () {
                  return (
                    !!l.initialized ||
                    ((l.error = ""),
                    (l.d =
                      "string" == typeof e ? document.getElementById(e) : e),
                    l.d
                      ? ((l.startVal = Number(t)),
                        (l.endVal = Number(a)),
                        i(l.startVal) && i(l.endVal)
                          ? ((l.decimals = Math.max(0, n || 0)),
                            (l.dec = Math.pow(10, l.decimals)),
                            (l.duration = 1e3 * Number(r) || 2e3),
                            (l.countDown = l.startVal > l.endVal),
                            (l.frameVal = l.startVal),
                            (l.initialized = !0),
                            !0)
                          : ((l.error =
                              "[CountUp] startVal (" +
                              t +
                              ") or endVal (" +
                              a +
                              ") is not a number"),
                            !1))
                      : ((l.error = "[CountUp] target is null or undefined"),
                        !1))
                  );
                }),
                (l.printValue = function (e) {
                  var t = l.options.formattingFn(e);
                  "INPUT" === l.d.tagName
                    ? (this.d.value = t)
                    : "text" === l.d.tagName || "tspan" === l.d.tagName
                    ? (this.d.textContent = t)
                    : (this.d.innerHTML = t);
                }),
                (l.count = function (e) {
                  l.startTime || (l.startTime = e), (l.timestamp = e);
                  var t = e - l.startTime;
                  (l.remaining = l.duration - t),
                    l.options.useEasing
                      ? l.countDown
                        ? (l.frameVal =
                            l.startVal -
                            l.options.easingFn(
                              t,
                              0,
                              l.startVal - l.endVal,
                              l.duration
                            ))
                        : (l.frameVal = l.options.easingFn(
                            t,
                            l.startVal,
                            l.endVal - l.startVal,
                            l.duration
                          ))
                      : l.countDown
                      ? (l.frameVal =
                          l.startVal -
                          (l.startVal - l.endVal) * (t / l.duration))
                      : (l.frameVal =
                          l.startVal +
                          (l.endVal - l.startVal) * (t / l.duration)),
                    l.countDown
                      ? (l.frameVal =
                          l.frameVal < l.endVal ? l.endVal : l.frameVal)
                      : (l.frameVal =
                          l.frameVal > l.endVal ? l.endVal : l.frameVal),
                    (l.frameVal = Math.round(l.frameVal * l.dec) / l.dec),
                    l.printValue(l.frameVal),
                    t < l.duration
                      ? (l.rAF = requestAnimationFrame(l.count))
                      : l.callback && l.callback();
                }),
                (l.start = function (e) {
                  l.initialize() &&
                    ((l.callback = e),
                    (l.rAF = requestAnimationFrame(l.count)));
                }),
                (l.pauseResume = function () {
                  l.paused
                    ? ((l.paused = !1),
                      delete l.startTime,
                      (l.duration = l.remaining),
                      (l.startVal = l.frameVal),
                      requestAnimationFrame(l.count))
                    : ((l.paused = !0), cancelAnimationFrame(l.rAF));
                }),
                (l.reset = function () {
                  (l.paused = !1),
                    delete l.startTime,
                    (l.initialized = !1),
                    l.initialize() &&
                      (cancelAnimationFrame(l.rAF), l.printValue(l.startVal));
                }),
                (l.update = function (e) {
                  if (l.initialize()) {
                    if (!i((e = Number(e))))
                      return void (l.error =
                        "[CountUp] update() - new endVal is not a number: " +
                        e);
                    (l.error = ""),
                      e !== l.frameVal &&
                        (cancelAnimationFrame(l.rAF),
                        (l.paused = !1),
                        delete l.startTime,
                        (l.startVal = l.frameVal),
                        (l.endVal = e),
                        (l.countDown = l.startVal > l.endVal),
                        (l.rAF = requestAnimationFrame(l.count)));
                  }
                }),
                l.initialize() && l.printValue(l.startVal);
            };
          })
            ? n.call(t, a, t, e)
            : n) || (e.exports = r);
    },
    869: function (e, t, a) {
      e.exports = a.p + "static/media/abot.cd6f2f3d.png";
    },
    894: function (e, t, a) {
      e.exports = a.p + "static/media/handbgone .73a08160.png";
    },
    895: function (e, t, a) {
      e.exports = a.p + "static/media/handbgtwo .5986bc85.png";
    },
    900: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(201),
        r = a(202),
        o = a(203),
        i = a(204),
        l = a(0),
        s = a.n(l),
        c = a(339),
        u = a(340),
        m = a(341),
        d = a(211),
        p = a.n(d),
        f = (a(863), a(864)),
        v = a.n(f),
        h = a(865),
        E = a.n(h),
        g = a(866),
        b = a.n(g),
        y = (function (e) {
          Object(o.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    { className: "col-lg-12 col-md-12 mb-30" },
                    s.a.createElement(
                      "div",
                      { className: "category-home" },
                      s.a.createElement(
                        "section",
                        { className: "stt-2" },
                        s.a.createElement(
                          c.a,
                          null,
                          s.a.createElement(
                            "div",
                            { className: "heading" },
                            s.a.createElement(
                              "h2",
                              null,
                              "Connect to Astrologers"
                            ),
                            s.a.createElement("img", { src: p.a, alt: "" })
                          ),
                          s.a.createElement(
                            u.a,
                            null,
                            s.a.createElement(
                              m.a,
                              { md: "4" },
                              s.a.createElement(
                                "div",
                                {
                                  className: "process-box process-left",
                                  "data-aos": "fade-right",
                                  "data-aos-duration": "1000",
                                },
                                s.a.createElement(
                                  u.a,
                                  null,
                                  s.a.createElement(
                                    m.a,
                                    { md: "5" },
                                    s.a.createElement(
                                      "div",
                                      { className: "process-step" },
                                      s.a.createElement("img", {
                                        src: v.a,
                                        alt: "",
                                        className: "hm-img",
                                      })
                                    )
                                  ),
                                  s.a.createElement(
                                    m.a,
                                    { md: "7" },
                                    s.a.createElement(
                                      "h5",
                                      { className: "bt-txt" },
                                      "Chat with Astrologer"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      s.a.createElement(
                                        "small",
                                        null,
                                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                            s.a.createElement(
                              m.a,
                              { md: "4" },
                              s.a.createElement(
                                "div",
                                {
                                  className: "process-box process-left",
                                  "data-aos": "fade-right",
                                  "data-aos-duration": "1000",
                                },
                                s.a.createElement(
                                  u.a,
                                  null,
                                  s.a.createElement(
                                    m.a,
                                    { md: "5" },
                                    s.a.createElement(
                                      "div",
                                      { className: "process-step" },
                                      s.a.createElement("img", {
                                        src: E.a,
                                        alt: "",
                                        className: "hm-img",
                                      })
                                    )
                                  ),
                                  s.a.createElement(
                                    m.a,
                                    { md: "7" },
                                    s.a.createElement(
                                      "h5",
                                      { className: "bt-txt" },
                                      "Talk to Astrologer"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      s.a.createElement(
                                        "small",
                                        null,
                                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                            s.a.createElement(
                              m.a,
                              { md: "4" },
                              s.a.createElement(
                                "div",
                                {
                                  className: "process-box process-left",
                                  "data-aos": "fade-right",
                                  "data-aos-duration": "1000",
                                },
                                s.a.createElement(
                                  u.a,
                                  null,
                                  s.a.createElement(
                                    m.a,
                                    { md: "5" },
                                    s.a.createElement(
                                      "div",
                                      { className: "process-step" },
                                      s.a.createElement("img", {
                                        src: b.a,
                                        alt: "",
                                        className: "hm-img",
                                      })
                                    )
                                  ),
                                  s.a.createElement(
                                    m.a,
                                    { md: "7" },
                                    s.a.createElement(
                                      "h5",
                                      { className: "bt-txt" },
                                      "Live Astrologers"
                                    ),
                                    s.a.createElement(
                                      "p",
                                      null,
                                      s.a.createElement(
                                        "small",
                                        null,
                                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component);
      t.default = y;
    },
    901: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(201),
        r = a(202),
        o = a(203),
        i = a(204),
        l = a(0),
        s = a.n(l),
        c = a(339),
        u = a(340),
        m = a(341),
        d = a(211),
        p = a.n(d),
        f = a(869),
        v = a.n(f),
        h = (function (e) {
          Object(o.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    { className: "col-lg-12 col-md-12 mb-30" },
                    s.a.createElement(
                      "div",
                      { className: "category-home" },
                      s.a.createElement(
                        "section",
                        null,
                        s.a.createElement(
                          c.a,
                          null,
                          s.a.createElement(
                            "div",
                            { className: "heading" },
                            s.a.createElement("h2", null, "About Us"),
                            s.a.createElement("img", {
                              src: p.a,
                              alt: "",
                              className: "sb-img",
                            })
                          ),
                          s.a.createElement(
                            u.a,
                            null,
                            s.a.createElement(
                              m.a,
                              { lg: "6" },
                              s.a.createElement(
                                "div",
                                null,
                                s.a.createElement("img", {
                                  src: v.a,
                                  alt: "",
                                  gclassName: "ab-img",
                                  className: "abt-img",
                                })
                              )
                            ),
                            s.a.createElement(
                              m.a,
                              { lg: "6" },
                              s.a.createElement(
                                "div",
                                { className: "" },
                                s.a.createElement(
                                  "h3",
                                  null,
                                  "AstroVipra Connects You With Best Astrologers"
                                ),
                                s.a.createElement(
                                  "p",
                                  null,
                                  "We all believe that Vedic Astrology helps you to predict your future and help you to be ready for your future problems. We at AstroVipra too help you with Future predictions, Life Predictions, Marriage life predictions and much more with our Best Astrologers panel."
                                ),
                                s.a.createElement(
                                  "p",
                                  null,
                                  "We have Expert & Verified Astrologers who can guide you and suggest you best astrology remedies which can help you to make your life better."
                                ),
                                s.a.createElement(
                                  "p",
                                  null,
                                  "We all have this curiosity to know about our future however, most of us fail to do so. Not having a reliable astrologer in contact remains the major issue. A few want to know about their marriage or match making and others about their career or job."
                                ),
                                s.a.createElement(
                                  "p",
                                  null,
                                  "We are a reliable platform that connects you with the most trustworthy astrologers that can guide you through your life. We are serving our clients from last seven years with the sole purpose of helping them out at their worst times."
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component);
      t.default = h;
    },
    902: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(22),
        r = a(0),
        o = a.n(r),
        i = a(690),
        l = a.n(i),
        s = a(211),
        c = a.n(s),
        u = a(851),
        m = a(26);
      t.default = function (e) {
        var t = e.spaceTopClass,
          a = e.spaceBottomClass,
          i = e.spaceLeftClass,
          s = e.spaceRightClass,
          d = e.bgColorClass,
          p = e.sliderdemoClass,
          f =
            (e.backgroundImage,
            {
              loop: !0,
              slidesPerView: 4,
              grabCursor: !0,
              spaceBetween: 10,
              breakpoints: {
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                640: { slidesPerView: 2 },
                320: { slidesPerView: 1 },
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              renderPrevButton: function () {
                return o.a.createElement(
                  "button",
                  { className: "swiper-button-prev ht-swiper-button-nav gt-1" },
                  o.a.createElement("i", { className: "pe-7s-angle-left" })
                );
              },
              renderNextButton: function () {
                return o.a.createElement(
                  "button",
                  { className: "swiper-button-next ht-swiper-button-nav gt-2" },
                  o.a.createElement("i", { className: "pe-7s-angle-right" })
                );
              },
            }),
          v = Object(r.useState)([]),
          h = Object(n.a)(v, 2),
          E = h[0],
          g = h[1];
        return (
          Object(r.useEffect)(function () {
            m.a
              .get("/admin/allAstro")
              .then(function (e) {
                console.log(e.data.data),
                  !0 === e.data.status && g(e.data.data);
              })
              .catch(function (e) {
                console.log(e);
              });
          }, []),
          o.a.createElement(
            "div",
            {
              className: " "
                .concat(t || "", "  ")
                .concat(a || "", " ")
                .concat(i || "", "  ")
                .concat(s || "", " ")
                .concat(d || ""),
            },
            o.a.createElement(
              "div",
              { className: "container" },
              o.a.createElement(
                "div",
                { className: "row" },
                o.a.createElement(
                  "div",
                  { className: "col-lg-12  ml-auto mr-auto" },
                  o.a.createElement(
                    "div",
                    { className: "heading" },
                    o.a.createElement("h2", null, "Best Astrologers"),
                    o.a.createElement("img", { src: c.a, alt: "" })
                  ),
                  o.a.createElement(
                    "div",
                    { className: " nav-style-1 nav-testi-style" },
                    o.a.createElement(
                      l.a,
                      f,
                      E &&
                        E.map(function (e, t) {
                          return o.a.createElement(u.default, {
                            data: e,
                            key: t,
                            sliderClass: "swiper-slide rtt",
                            sliderdemoClass: p,
                          });
                        })
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
    928: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(201),
        r = a(202),
        o = a(203),
        i = a(204),
        l = a(0),
        s = a.n(l),
        c = a(2),
        u = a(339),
        m = a(340),
        d = a(341),
        p = a(211),
        f = a.n(p),
        v = a(26),
        h = (a(219), a(95)),
        E = a.n(h),
        g = a(697),
        b = (a(118), a(215), a(871)),
        y = a(820),
        A = a(680),
        O = a.n(A),
        N = (function (e) {
          Object(o.a)(a, e);
          var t = Object(i.a)(a);
          function a(e) {
            var r,
              o = e.props;
            return (
              Object(n.a)(this, a),
              ((r = t.call(this, o)).handlecheckpooja = function (e) {
                localStorage.setItem("poojaviewone", JSON.stringify(e)),
                  null !== localStorage.getItem("user_id")
                    ? r.props.history.push(
                        "/Poojadetailpage/".concat(
                          null === e || void 0 === e ? void 0 : e._id
                        )
                      )
                    : O()("No User Found", "User Need to login First");
              }),
              (r.state = { listofpooja: [] }),
              r
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  v.a
                    .get("/admin/get_adminevent")
                    .then(function (t) {
                      console.log(t.data.data),
                        e.setState({ listofpooja: t.data.data.slice(0, 4) });
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this;
                  return s.a.createElement(
                    "section",
                    { className: "pt-0 pb-0" },
                    s.a.createElement(
                      "div",
                      { className: "container mt-2" },
                      s.a.createElement(
                        m.a,
                        null,
                        s.a.createElement(
                          "div",
                          { className: "col-lg-12 col-md-12 mb-30" },
                          s.a.createElement(
                            "div",
                            { className: "category-home" },
                            s.a.createElement(
                              "section",
                              { className: "pt-0" },
                              s.a.createElement(
                                "div",
                                { className: "container" },
                                s.a.createElement(
                                  m.a,
                                  null,
                                  "" !== this.state.listofpooja
                                    ? s.a.createElement(
                                        s.a.Fragment,
                                        null,
                                        null === (e = this.state.listofpooja) ||
                                          void 0 === e
                                          ? void 0
                                          : e.map(function (e, a) {
                                              var n, r;
                                              return s.a.createElement(
                                                d.a,
                                                {
                                                  key: a,
                                                  className: "mt-3",
                                                  md: "3",
                                                },
                                                s.a.createElement(
                                                  "div",
                                                  {
                                                    className: "product-grid8",
                                                  },
                                                  s.a.createElement(
                                                    "div",
                                                    {
                                                      class:
                                                        "product-image8 imageofpooja",
                                                    },
                                                    s.a.createElement("img", {
                                                      className: "imagepooja",
                                                      style: {
                                                        borderRadius: "10px",
                                                        width: "100%",
                                                      },
                                                      src:
                                                        null === e ||
                                                        void 0 === e
                                                          ? void 0
                                                          : e.poojaimg,
                                                      alt: "pooja image",
                                                    })
                                                  ),
                                                  s.a.createElement(
                                                    "div",
                                                    {
                                                      className:
                                                        "product-content",
                                                    },
                                                    s.a.createElement(
                                                      m.a,
                                                      {
                                                        className:
                                                          "priceandname",
                                                      },
                                                      s.a.createElement(
                                                        d.a,
                                                        {
                                                          lg: "8",
                                                          md: "8",
                                                          sm: "8",
                                                        },
                                                        s.a.createElement(
                                                          "div",
                                                          {
                                                            style: {
                                                              fontSize: "12px",
                                                              fontWeight: "300",
                                                            },
                                                          },
                                                          s.a.createElement(
                                                            "b",
                                                            null,
                                                            null === e ||
                                                              void 0 === e ||
                                                              null ===
                                                                (n =
                                                                  e.pooja_type) ||
                                                              void 0 === n ||
                                                              null ===
                                                                (r =
                                                                  n.pooja_name) ||
                                                              void 0 === r
                                                              ? void 0
                                                              : r.slice(0, 13)
                                                          )
                                                        )
                                                      ),
                                                      s.a.createElement(
                                                        d.a,
                                                        {
                                                          lg: "4",
                                                          md: "4",
                                                          sm: "4",
                                                        },
                                                        s.a.createElement(
                                                          "div",
                                                          {
                                                            style: {
                                                              fontSize: "15px",
                                                            },
                                                            className:
                                                              " poojanames  justify-content-end",
                                                          },
                                                          s.a.createElement(
                                                            "i",
                                                            {
                                                              class:
                                                                "fa fa-inr",
                                                              "aria-hidden":
                                                                "true",
                                                            }
                                                          ),
                                                          " ",
                                                          null === e ||
                                                            void 0 === e
                                                            ? void 0
                                                            : e.pooja_price
                                                        )
                                                      )
                                                    ),
                                                    s.a.createElement(
                                                      m.a,
                                                      {
                                                        className:
                                                          "priceandname",
                                                      },
                                                      s.a.createElement(
                                                        d.a,
                                                        {
                                                          lg: "6",
                                                          md: "6",
                                                          sm: "6",
                                                        },
                                                        s.a.createElement(
                                                          "div",
                                                          {
                                                            style: {
                                                              fontSize: "12px",
                                                              fontWeight: "200",
                                                            },
                                                          },
                                                          "Mode of Pooja"
                                                        )
                                                      ),
                                                      s.a.createElement(
                                                        d.a,
                                                        {
                                                          lg: "6",
                                                          md: "6",
                                                          sm: "6",
                                                        },
                                                        s.a.createElement(
                                                          "div",
                                                          {
                                                            style: {
                                                              fontSize: "10px",
                                                            },
                                                            className:
                                                              " poojanames  justify-content-end",
                                                          },
                                                          s.a.createElement(
                                                            "span",
                                                            {
                                                              style: {
                                                                color: "green",
                                                              },
                                                            },
                                                            (
                                                              null === e ||
                                                              void 0 === e
                                                                ? void 0
                                                                : e.mode
                                                            )
                                                              ? s.a.createElement(
                                                                  s.a.Fragment,
                                                                  null,
                                                                  s.a.createElement(
                                                                    "b",
                                                                    null,
                                                                    null ===
                                                                      e ||
                                                                      void 0 ===
                                                                        e
                                                                      ? void 0
                                                                      : e.mode
                                                                  )
                                                                )
                                                              : "offline"
                                                          )
                                                        )
                                                      )
                                                    ),
                                                    s.a.createElement(
                                                      m.a,
                                                      { className: "mt-1" },
                                                      "online" ===
                                                        (null === e ||
                                                        void 0 === e
                                                          ? void 0
                                                          : e.mode)
                                                        ? null
                                                        : s.a.createElement(
                                                            s.a.Fragment,
                                                            null,
                                                            s.a.createElement(
                                                              d.a,
                                                              {
                                                                lg: "6",
                                                                md: "6",
                                                                sm: "6",
                                                              },
                                                              s.a.createElement(
                                                                "div",
                                                                {
                                                                  style: {
                                                                    fontSize:
                                                                      "15px",
                                                                  },
                                                                },
                                                                "online" !==
                                                                  (null === e ||
                                                                  void 0 === e
                                                                    ? void 0
                                                                    : e.mode)
                                                                  ? s.a.createElement(
                                                                      s.a
                                                                        .Fragment,
                                                                      null,
                                                                      s.a.createElement(
                                                                        y.a,
                                                                        {
                                                                          color:
                                                                            "red",
                                                                          size: 20,
                                                                        }
                                                                      ),
                                                                      " ",
                                                                      null ===
                                                                        e ||
                                                                        void 0 ===
                                                                          e
                                                                        ? void 0
                                                                        : e.fullfill_location
                                                                    )
                                                                  : null
                                                              )
                                                            )
                                                          ),
                                                      s.a.createElement(
                                                        d.a,
                                                        {
                                                          lg: "6",
                                                          md: "6",
                                                          sm: "6",
                                                        },
                                                        s.a.createElement(
                                                          "span",
                                                          {
                                                            style: {
                                                              fontSize: "12px",
                                                            },
                                                          },
                                                          !0 ===
                                                            (null === e ||
                                                            void 0 === e
                                                              ? void 0
                                                              : e.liveStreaming)
                                                            ? s.a.createElement(
                                                                s.a.Fragment,
                                                                null,
                                                                s.a.createElement(
                                                                  "div",
                                                                  {
                                                                    style: {
                                                                      fontSize:
                                                                        "12px",
                                                                    },
                                                                    className:
                                                                      " poojanames  justify-content-end",
                                                                  },
                                                                  "LiveStreaming"
                                                                ),
                                                                s.a.createElement(
                                                                  "div",
                                                                  {
                                                                    style: {
                                                                      color:
                                                                        "green",
                                                                    },
                                                                  },
                                                                  "Available"
                                                                )
                                                              )
                                                            : s.a.createElement(
                                                                s.a.Fragment,
                                                                null,
                                                                s.a.createElement(
                                                                  "div",
                                                                  {
                                                                    style: {
                                                                      fontSize:
                                                                        "12px",
                                                                    },
                                                                    className:
                                                                      " poojanames  justify-content-end",
                                                                  },
                                                                  "LiveStreaming"
                                                                ),
                                                                s.a.createElement(
                                                                  "div",
                                                                  {
                                                                    style: {
                                                                      color:
                                                                        "red",
                                                                    },
                                                                  },
                                                                  "Not Available"
                                                                )
                                                              )
                                                        )
                                                      )
                                                    ),
                                                    s.a.createElement(
                                                      m.a,
                                                      null,
                                                      s.a.createElement(
                                                        d.a,
                                                        {
                                                          lg: "6",
                                                          md: "6",
                                                          sm: "6",
                                                        },
                                                        s.a.createElement(
                                                          "div",
                                                          {
                                                            style: {
                                                              fontSize: "17px",
                                                              fontWeight: "500",
                                                            },
                                                          },
                                                          s.a.createElement(
                                                            b.a,
                                                            {
                                                              color: "green",
                                                              size: 16,
                                                            }
                                                          ),
                                                          " ",
                                                          "Duration"
                                                        )
                                                      ),
                                                      s.a.createElement(
                                                        d.a,
                                                        {
                                                          lg: "6",
                                                          md: "6",
                                                          sm: "6",
                                                        },
                                                        s.a.createElement(
                                                          "div",
                                                          {
                                                            style: {
                                                              fontSize: "15px",
                                                            },
                                                            className:
                                                              " poojanames  justify-content-end",
                                                          },
                                                          null === e ||
                                                            void 0 === e
                                                            ? void 0
                                                            : e.duration
                                                        )
                                                      )
                                                    ),
                                                    s.a.createElement(
                                                      m.a,
                                                      { className: "mt-1" },
                                                      s.a.createElement(
                                                        c.c,
                                                        { to: "/bookEvent" },
                                                        s.a.createElement(
                                                          g.a,
                                                          {
                                                            style: {
                                                              width: "100%",
                                                            },
                                                            onClick:
                                                              function () {
                                                                return t.handlecheckpooja(
                                                                  e
                                                                );
                                                              },
                                                            color: "success",
                                                          },
                                                          "View"
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              );
                                            })
                                      )
                                    : null
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        w = (function (e) {
          Object(o.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(o))).state = {
                productList: [],
              }),
              e
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  v.a.get("/admin/getproductcalegory").then(function (t) {
                    e.setState({ productList: t.data.data.slice(0, 4) });
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.productList;
                  return s.a.createElement(
                    s.a.Fragment,
                    null,
                    s.a.createElement(
                      u.a,
                      null,
                      s.a.createElement(
                        "div",
                        { className: "heading mt-40" },
                        s.a.createElement("h2", null, "Newly Launched"),
                        s.a.createElement("img", { src: f.a, alt: "" })
                      ),
                      s.a.createElement(N, null)
                    ),
                    s.a.createElement(
                      u.a,
                      null,
                      s.a.createElement(
                        "div",
                        { className: "heading mt-40" },
                        s.a.createElement("h2", null, "Our Trending Products"),
                        s.a.createElement("img", { src: f.a, alt: "" })
                      ),
                      s.a.createElement(
                        m.a,
                        null,
                        s.a.createElement(
                          "div",
                          { className: "col-lg-12 col-md-12 mb-30" },
                          s.a.createElement(
                            "div",
                            { className: "category-home" },
                            s.a.createElement(
                              "section",
                              { className: "pt-0" },
                              s.a.createElement(
                                "div",
                                { className: "container" },
                                s.a.createElement(
                                  m.a,
                                  null,
                                  this.state.productList.length
                                    ? e.map(function (e, t) {
                                        var a;
                                        return s.a.createElement(
                                          d.a,
                                          { md: "3", className: "mt-1 mb-1" },
                                          s.a.createElement(
                                            "div",
                                            { className: "product-grid8" },
                                            s.a.createElement(
                                              "div",
                                              { class: "product-image8" },
                                              s.a.createElement(
                                                c.c,
                                                {
                                                  to: "/productlist/".concat(
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e._id
                                                  ),
                                                },
                                                s.a.createElement("img", {
                                                  style: {
                                                    borderRadius: "8px",
                                                  },
                                                  width: "100%",
                                                  height: "200px",
                                                  src:
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e.img,
                                                  alt: "",
                                                  className: "Ptd-img",
                                                })
                                              )
                                            ),
                                            s.a.createElement(
                                              "div",
                                              { className: "product-content" },
                                              s.a.createElement(
                                                "h4",
                                                { className: "" },
                                                s.a.createElement(
                                                  c.c,
                                                  null,
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e.name.slice(0, 30),
                                                  " "
                                                )
                                              ),
                                              s.a.createElement(
                                                "div",
                                                { className: "" },
                                                E()(
                                                  null === e ||
                                                    void 0 === e ||
                                                    null === (a = e.desc) ||
                                                    void 0 === a
                                                    ? void 0
                                                    : a.split(0, 10)
                                                )
                                              ),
                                              s.a.createElement(
                                                c.c,
                                                {
                                                  to: "/productlist/".concat(
                                                    null === e || void 0 === e
                                                      ? void 0
                                                      : e._id
                                                  ),
                                                  className: "all-deals",
                                                },
                                                "View More",
                                                s.a.createElement("i", {
                                                  class:
                                                    "fa fa-angle-right icon",
                                                })
                                              )
                                            )
                                          )
                                        );
                                      })
                                    : null
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component);
      t.default = w;
    },
    939: function (e) {
      e.exports = JSON.parse("{}");
    },
    940: function (e) {
      e.exports = JSON.parse(
        '[{"id":"1","image":"/assets/img/testimonial/testi-1.jpg","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"Grace Alvarado","title":"customer"},{"id":"2","image":"/assets/img/testimonial/testi-2.jpg","content":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.","customerName":"John Doe","title":"customer"}]'
      );
    },
    941: function (e) {
      e.exports = JSON.parse(
        '[{"id":1,"image":"/assets/img/icon-img/secure-3.png","title":"100% Data Security","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"},{"id":2,"image":"/assets/img/icon-img/secure-2.png","title":"100% Certified Astrologers ","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"},{"id":3,"image":"/assets/img/icon-img/secure-1.png","title":"100% Secure Payment ","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"},{"id":4,"image":"/assets/img/icon-img/secure-4.png","title":"100% Money Back Guarantee","subtitle":"Lorem ipsum dolor sit amet consectetu adipisicing elit sed"}]'
      );
    },
  },
]);
//# sourceMappingURL=41.7a6753af.chunk.js.map
