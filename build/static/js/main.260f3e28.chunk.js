(this["webpackJsonpflone-react"] = this["webpackJsonpflone-react"] || []).push([
  [24],
  {
    118: function (e, t, a) {
      "use strict";
      var i = a(0),
        s = a.n(i),
        o = a(22),
        u = a(2),
        r = a(48),
        n = a.n(r),
        c = a(32),
        m = Object(c.multilanguage)(function (e) {
          e.strings;
          var t = e.menuWhiteClass,
            a = e.sidebarMenu,
            r = Object(i.useState)([]),
            c = Object(o.a)(r, 2),
            m = (c[0], c[1]);
          return (
            Object(i.useEffect)(function () {
              n.a
                .get(
                  "https://nodejsbackend.astrologically.in/admin/getallCategory"
                )
                .then(function (e) {
                  m(e.data.data);
                })
                .catch(function (e) {
                  console.log(e);
                });
            }, []),
            s.a.createElement(
              "div",
              {
                className: " ".concat(
                  a ? "sidebar-menu" : "main-menu ".concat(t || ""),
                  " "
                ),
              },
              s.a.createElement(
                "nav",
                null,
                s.a.createElement(
                  "ul",
                  null,
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      u.c,
                      { to: "/kundaliform" },
                      "Match Matching"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      u.c,
                      { to: "/allastrologerlist" },
                      "Talk Astrologer"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      u.c,
                      { to: "/allchatastrologerlist" },
                      "Chat Astrologer"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      u.c,
                      { to: "/liveAstrologer" },
                      "Live Astrologer"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(u.c, null, "Dosh"),
                    s.a.createElement(
                      "ul",
                      { className: "submenu" },
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/manglikdosh" },
                          "Manglik Dosh"
                        )
                      ),
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/pitraDosh" },
                          "Pitra Dosh"
                        )
                      ),
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/kalsharpDosh" },
                          "Kalsharp Dosh"
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(u.c, null, "Horoscopes"),
                    s.a.createElement(
                      "ul",
                      { className: "submenu" },
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/heroscopestwo" },
                          "Daily"
                        )
                      ),
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/heroscopestwo1" },
                          "Weekly"
                        )
                      ),
                      s.a.createElement(
                        "li",
                        { className: "" },
                        s.a.createElement(
                          u.c,
                          { to: "/heroscopestwo2" },
                          "Monthly"
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(
                      u.c,
                      { to: "/astromallList" },
                      "Astromall"
                    )
                  )
                )
              )
            )
          );
        }),
        l = a(217),
        p = function () {
          return s.a.createElement("div", {
            className: "offcanvas-mobile-search-area",
          });
        },
        d = Object(c.multilanguage)(function (e) {
          var t = e.strings;
          return s.a.createElement(
            "nav",
            { className: "offcanvas-navigation", id: "offcanvas-navigation" },
            s.a.createElement(
              "ul",
              null,
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, { to: "/" }, t.home)
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, { to: "/kundaliform" }, "Match Making")
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(
                  u.c,
                  { to: "/allastrochatlist" },
                  "Chat Astrologer"
                )
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(
                  u.c,
                  { to: "/liveAstrologer" },
                  "Live Astrologer"
                )
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, { to: "/manglikdosh" }, "Manglikdosh")
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, { to: "/pitraDosh" }, "PitraDosh")
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, { to: "/kalsharpDosh" }, "KALSHARP DOSH")
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(
                  u.c,
                  { to: "/allastrologerlist" },
                  "Talk Astrologer"
                )
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, null, "Horoscopes"),
                s.a.createElement(
                  "ul",
                  { className: "submenu" },
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(
                      u.c,
                      { to: "/heroscopestwo" },
                      "Today's Horoscope"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(
                      u.c,
                      { to: "/heroscopestwo1" },
                      "Weekly Horoscope"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(
                      u.c,
                      { to: "/heroscopestwo2" },
                      "Monthly Horoscope"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    { className: "" },
                    s.a.createElement(u.c, { to: "/" }, "Chinese Horoscope")
                  )
                )
              ),
              s.a.createElement(
                "li",
                { className: "" },
                s.a.createElement(u.c, { to: "/astromallList" }, "Astromall")
              ),
              s.a.createElement(
                "li",
                null,
                s.a.createElement(u.c, { to: "/contact" }, t.contact_us)
              )
            )
          );
        }),
        g = a(47),
        h = a(92),
        q = Object(g.connect)(
          function (e) {
            return { currency: e.currencyData };
          },
          function (e) {
            return {
              setCurrency: function (t) {
                e(Object(h.b)(t));
              },
            };
          }
        )(
          Object(c.multilanguage)(function (e) {
            e.currency, e.setCurrency, e.currentLanguageCode, e.dispatch;
            return s.a.createElement("div", {
              className: "mobile-menu-middle",
            });
          })
        ),
        v = function () {
          return s.a.createElement("div", {
            className: "offcanvas-widget-area",
          });
        },
        f = function () {
          Object(i.useEffect)(function () {
            for (
              var a = document.querySelector("#offcanvas-navigation"),
                i = a.querySelectorAll(".sub-menu"),
                s = a.querySelectorAll("a"),
                o = 0;
              o < i.length;
              o++
            )
              i[o].insertAdjacentHTML(
                "beforebegin",
                "<span class='menu-expand'><i></i></span>"
              );
            for (
              var u = a.querySelectorAll(".menu-expand"), r = u.length, n = 0;
              n < r;
              n++
            )
              u[n].addEventListener("click", function (t) {
                e(t);
              });
            for (var c = 0; c < s.length; c++)
              s[c].addEventListener("click", function () {
                t();
              });
          });
          var e = function (e) {
              e.currentTarget.parentElement.classList.toggle("active");
            },
            t = function () {
              document
                .querySelector("#offcanvas-mobile-menu")
                .classList.remove("active");
            };
          return s.a.createElement(
            "div",
            { className: "offcanvas-mobile-menu", id: "offcanvas-mobile-menu" },
            s.a.createElement(
              "button",
              {
                className: "offcanvas-menu-close",
                id: "mobile-menu-close-trigger",
                onClick: function () {
                  return t();
                },
              },
              s.a.createElement("i", { className: "pe-7s-close" })
            ),
            s.a.createElement(
              "div",
              { className: "offcanvas-wrapper" },
              s.a.createElement(
                "div",
                { className: "offcanvas-inner-content" },
                s.a.createElement(p, null),
                s.a.createElement(d, null),
                s.a.createElement(q, null),
                s.a.createElement(v, null)
              )
            )
          );
        },
        b = function (e) {
          e.currency, e.setCurrency;
          var t = e.currentLanguageCode,
            a = e.dispatch,
            i = function (e) {
              var t = e.target.value;
              a(Object(c.changeLanguage)(t));
            };
          return s.a.createElement(
            "div",
            { className: "language-currency-wrap" },
            s.a.createElement(
              "div",
              { className: "same-language-currency language-style" },
              s.a.createElement(
                "span",
                null,
                "en" === t
                  ? "English"
                  : "fn" === t
                  ? "French"
                  : "de" === t
                  ? "Germany"
                  : "",
                " ",
                s.a.createElement("i", { className: "fa fa-angle-down" })
              ),
              s.a.createElement(
                "div",
                { className: "lang-car-dropdown" },
                s.a.createElement(
                  "ul",
                  null,
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      "button",
                      {
                        value: "en",
                        onClick: function (e) {
                          return i(e);
                        },
                      },
                      "English"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      "button",
                      {
                        value: "fn",
                        onClick: function (e) {
                          return i(e);
                        },
                      },
                      "French"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      "button",
                      {
                        value: "de",
                        onClick: function (e) {
                          return i(e);
                        },
                      },
                      "Germany"
                    )
                  ),
                  s.a.createElement(
                    "li",
                    null,
                    s.a.createElement(
                      "button",
                      {
                        value: "hn",
                        onClick: function (e) {
                          return i(e);
                        },
                      },
                      "Hindi"
                    )
                  )
                )
              )
            ),
            s.a.createElement(
              "div",
              { className: "same-language-currency" },
              s.a.createElement("p", null, "Call Us 3965410")
            ),
            s.a.createElement(
              "div",
              { className: "same-language-currency" },
              s.a.createElement("p", null, "Info@gmail.com")
            )
          );
        },
        j = Object(g.connect)(
          function (e) {
            return { currency: e.currencyData };
          },
          function (e) {
            return {
              setCurrency: function (t) {
                e(Object(h.b)(t));
              },
            };
          }
        )(
          Object(c.multilanguage)(function (e) {
            var t = e.currency,
              a = e.setCurrency,
              i = e.currentLanguageCode,
              o = e.dispatch,
              u = e.borderStyle;
            return s.a.createElement(
              "div",
              {
                className: "header-top-wap ".concat(
                  "fluid-border" === u ? "border-bottom" : ""
                ),
              },
              s.a.createElement(b, {
                currency: t,
                setCurrency: a,
                currentLanguageCode: i,
                dispatch: o,
              }),
              s.a.createElement("div", { className: "header-offer" })
            );
          })
        ),
        k = function (e) {
          var t = e.layout,
            a = e.top,
            r = e.borderStyle,
            n = e.headerPaddingClass,
            c = e.headerPositionClass,
            p = e.headerBgClass,
            d = Object(i.useState)(0),
            g = Object(o.a)(d, 2),
            h = g[0],
            q = g[1],
            v = Object(i.useState)(0),
            b = Object(o.a)(v, 2),
            k = b[0],
            y = b[1];
          Object(i.useEffect)(function () {
            var e = document.querySelector(".sticky-bar");
            return (
              y(e.offsetTop),
              window.addEventListener("scroll", x),
              function () {
                window.removeEventListener("scroll", x);
              }
            );
          }, []);
          var x = function () {
            q(window.scrollY);
          };
          return s.a.createElement(
            "header",
            {
              className: "header-area clearfix "
                .concat(p || "", " ")
                .concat(c || ""),
            },
            s.a.createElement(
              "div",
              {
                className: ""
                  .concat(n || "", " ")
                  .concat(
                    "visible" === a ? "d-none d-lg-block" : "d-none",
                    " header-top-area "
                  )
                  .concat("fluid-border" === r ? "border-none" : ""),
              },
              s.a.createElement(
                "div",
                { className: "container-fluid" === t ? t : "container" },
                s.a.createElement(j, { borderStyle: r })
              )
            ),
            s.a.createElement(
              "div",
              {
                className: " "
                  .concat(n || "", " sticky-bar header-res-padding clearfix ")
                  .concat(h > k ? "stick" : ""),
              },
              s.a.createElement(
                "div",
                { className: "container-fluid" === t ? t : "container" },
                s.a.createElement(
                  "div",
                  { className: "row", style: { marginBottom: "-10px" } },
                  s.a.createElement(
                    "div",
                    { className: "col-xl-2 col-lg-2 col-md-2 col-4" },
                    s.a.createElement(
                      "div",
                      { className: "logoo" },
                      s.a.createElement(
                        u.c,
                        { className: "", to: "/" },
                        s.a.createElement(
                          "h3",
                          { className: "stltext" },
                          "Astro Vipra "
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    "div",
                    { className: "col-xl-8 col-lg-8 d-none d-lg-block" },
                    s.a.createElement(m, null)
                  ),
                  s.a.createElement(
                    "div",
                    { className: "col-xl-2 col-lg-2 col-md-2 col-8" },
                    s.a.createElement(l.b, null)
                  )
                )
              ),
              s.a.createElement(f, null)
            )
          );
        },
        y = a(220),
        x = function (e) {
          var t = e.footerLogo,
            a = e.spaceBottomClass,
            i = e.colorClass;
          return s.a.createElement(
            "div",
            { className: "copyright ".concat(a || "", " ").concat(i || "") },
            s.a.createElement(
              "div",
              { className: "footer-logo" },
              s.a.createElement(
                u.c,
                { to: "/" },
                s.a.createElement("img", {
                  alt: "",
                  src: "" + t,
                  style: { width: 150 },
                })
              )
            ),
            s.a.createElement(
              "p",
              null,
              "\xa9 ",
              new Date().getFullYear(),
              " ",
              s.a.createElement(
                "a",
                { href: "/", rel: "noopener noreferrer", target: "" },
                "AstroVipra"
              ),
              ".",
              s.a.createElement("br", null),
              " All Rights Reserved"
            )
          );
        },
        w = a(41),
        E = a(26),
        _ = a(336),
        D = a.n(_);
      function N() {
        N = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (e, t, a) {
              e[t] = a.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          o = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator",
          r = s.toStringTag || "@@toStringTag";
        function n(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          n({}, "");
        } catch (O) {
          n = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function c(e, t, a, s) {
          var o = t && t.prototype instanceof p ? t : p,
            u = Object.create(o.prototype),
            r = new E(s || []);
          return i(u, "_invoke", { value: k(e, a, r) }), u;
        }
        function m(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        e.wrap = c;
        var l = {};
        function p() {}
        function d() {}
        function g() {}
        var h = {};
        n(h, o, function () {
          return this;
        });
        var q = Object.getPrototypeOf,
          v = q && q(q(_([])));
        v && v !== t && a.call(v, o) && (h = v);
        var f = (g.prototype = p.prototype = Object.create(h));
        function b(e) {
          ["next", "throw", "return"].forEach(function (t) {
            n(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function j(e, t) {
          var s;
          i(this, "_invoke", {
            value: function (i, o) {
              function u() {
                return new t(function (s, u) {
                  !(function i(s, o, u, r) {
                    var n = m(e[s], e, o);
                    if ("throw" !== n.type) {
                      var c = n.arg,
                        l = c.value;
                      return l && "object" == typeof l && a.call(l, "__await")
                        ? t.resolve(l.__await).then(
                            function (e) {
                              i("next", e, u, r);
                            },
                            function (e) {
                              i("throw", e, u, r);
                            }
                          )
                        : t.resolve(l).then(
                            function (e) {
                              (c.value = e), u(c);
                            },
                            function (e) {
                              return i("throw", e, u, r);
                            }
                          );
                    }
                    r(n.arg);
                  })(i, o, s, u);
                });
              }
              return (s = s ? s.then(u, u) : u());
            },
          });
        }
        function k(e, t, a) {
          var i = "suspendedStart";
          return function (s, o) {
            if ("executing" === i)
              throw new Error("Generator is already running");
            if ("completed" === i) {
              if ("throw" === s) throw o;
              return D();
            }
            for (a.method = s, a.arg = o; ; ) {
              var u = a.delegate;
              if (u) {
                var r = y(u, a);
                if (r) {
                  if (r === l) continue;
                  return r;
                }
              }
              if ("next" === a.method) a.sent = a._sent = a.arg;
              else if ("throw" === a.method) {
                if ("suspendedStart" === i) throw ((i = "completed"), a.arg);
                a.dispatchException(a.arg);
              } else "return" === a.method && a.abrupt("return", a.arg);
              i = "executing";
              var n = m(e, t, a);
              if ("normal" === n.type) {
                if (
                  ((i = a.done ? "completed" : "suspendedYield"), n.arg === l)
                )
                  continue;
                return { value: n.arg, done: a.done };
              }
              "throw" === n.type &&
                ((i = "completed"), (a.method = "throw"), (a.arg = n.arg));
            }
          };
        }
        function y(e, t) {
          var a = t.method,
            i = e.iterator[a];
          if (void 0 === i)
            return (
              (t.delegate = null),
              ("throw" === a &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                y(e, t),
                "throw" === t.method)) ||
                ("return" !== a &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + a + "' method"
                  )))),
              l
            );
          var s = m(i, e.iterator, t.arg);
          if ("throw" === s.type)
            return (
              (t.method = "throw"), (t.arg = s.arg), (t.delegate = null), l
            );
          var o = s.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function w(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(x, this),
            this.reset(!0);
        }
        function _(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                s = function t() {
                  for (; ++i < e.length; )
                    if (a.call(e, i)) return (t.value = e[i]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (s.next = s);
            }
          }
          return { next: D };
        }
        function D() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = g),
          i(f, "constructor", { value: g, configurable: !0 }),
          i(g, "constructor", { value: d, configurable: !0 }),
          (d.displayName = n(g, r, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), n(e, r, "GeneratorFunction")),
              (e.prototype = Object.create(f)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          b(j.prototype),
          n(j.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = j),
          (e.async = function (t, a, i, s, o) {
            void 0 === o && (o = Promise);
            var u = new j(c(t, a, i, s), o);
            return e.isGeneratorFunction(a)
              ? u
              : u.next().then(function (e) {
                  return e.done ? e.value : u.next();
                });
          }),
          b(f),
          n(f, r, "Generator"),
          n(f, o, function () {
            return this;
          }),
          n(f, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              a = [];
            for (var i in t) a.push(i);
            return (
              a.reverse(),
              function e() {
                for (; a.length; ) {
                  var i = a.pop();
                  if (i in t) return (e.value = i), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = _),
          (E.prototype = {
            constructor: E,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(w),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function i(a, i) {
                return (
                  (u.type = "throw"),
                  (u.arg = e),
                  (t.next = a),
                  i && ((t.method = "next"), (t.arg = void 0)),
                  !!i
                );
              }
              for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                var o = this.tryEntries[s],
                  u = o.completion;
                if ("root" === o.tryLoc) return i("end");
                if (o.tryLoc <= this.prev) {
                  var r = a.call(o, "catchLoc"),
                    n = a.call(o, "finallyLoc");
                  if (r && n) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  } else if (r) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                  } else {
                    if (!n)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var s = this.tryEntries[i];
                if (
                  s.tryLoc <= this.prev &&
                  a.call(s, "finallyLoc") &&
                  this.prev < s.finallyLoc
                ) {
                  var o = s;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var u = o ? o.completion : {};
              return (
                (u.type = e),
                (u.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(u)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                l
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return this.complete(a.completion, a.afterLoc), w(a), l;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var i = a.completion;
                  if ("throw" === i.type) {
                    var s = i.arg;
                    w(a);
                  }
                  return s;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: _(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          e
        );
      }
      var O = function (e) {
          var t = e.spaceBottomClass,
            a = e.spaceLeftClass,
            u = e.sideMenu,
            r = e.colorClass,
            n = e.widgetColorClass,
            c = Object(i.useState)([]),
            m = Object(o.a)(c, 2),
            l = m[0],
            p = m[1],
            d = (function () {
              var e = Object(w.a)(
                N().mark(function e() {
                  return N().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            E.a.get("/admin/get_socalList").then(function (e) {
                              var t = e.data.data;
                              p(t);
                            })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(i.useEffect)(function () {
              d();
            }, []),
            s.a.createElement(
              "div",
              {
                className: "footer-widget "
                  .concat(t || "", " ")
                  .concat(u ? "ml-ntv5" : a || "", " ")
                  .concat(n || ""),
              },
              s.a.createElement(
                "div",
                { className: "subscribe-style ".concat(r || "") },
                s.a.createElement(
                  "p",
                  null,
                  "Get E-mail updates about our latest shop and special offers."
                ),
                s.a.createElement(
                  "div",
                  { className: "social-box" },
                  s.a.createElement(
                    "ul",
                    null,
                    l.map(function (e) {
                      if (
                        "Facebook" ==
                        (null === e || void 0 === e
                          ? void 0
                          : e.select_sslmedia)
                      )
                        return s.a.createElement(
                          "span",
                          null,
                          " ",
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement("i", {
                              style: { color: "#018eff" },
                              class: "fa fa-facebook foot-icon",
                              "aria-hidden": "true",
                            }),
                            s.a.createElement(
                              "a",
                              {
                                href:
                                  null === e || void 0 === e ? void 0 : e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              s.a.createElement(
                                "span",
                                null,
                                null === e || void 0 === e
                                  ? void 0
                                  : e.select_sslmedia
                              )
                            )
                          )
                        );
                    }),
                    l.map(function (e) {
                      if (
                        "Twitter" ==
                        (null === e || void 0 === e
                          ? void 0
                          : e.select_sslmedia)
                      )
                        return s.a.createElement(
                          "span",
                          null,
                          " ",
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement("i", {
                              style: { color: "#00acee" },
                              class: "fa fa-twitter foot-icon",
                              "aria-hidden": "true",
                            }),
                            s.a.createElement(
                              "a",
                              {
                                href:
                                  null === e || void 0 === e ? void 0 : e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              s.a.createElement(
                                "span",
                                null,
                                null === e || void 0 === e
                                  ? void 0
                                  : e.select_sslmedia
                              )
                            )
                          )
                        );
                    }),
                    l.map(function (e) {
                      if (
                        "Instagram" ==
                        (null === e || void 0 === e
                          ? void 0
                          : e.select_sslmedia)
                      )
                        return s.a.createElement(
                          "span",
                          null,
                          " ",
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement("img", {
                              width: 18,
                              src: D.a,
                              alt: "instaimg",
                            }),
                            s.a.createElement(
                              "a",
                              {
                                href:
                                  null === e || void 0 === e ? void 0 : e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              s.a.createElement(
                                "span",
                                { className: "mx-1" },
                                null === e || void 0 === e
                                  ? void 0
                                  : e.select_sslmedia
                              )
                            )
                          )
                        );
                    }),
                    l.map(function (e) {
                      if (
                        "Youtube" ==
                        (null === e || void 0 === e
                          ? void 0
                          : e.select_sslmedia)
                      )
                        return s.a.createElement(
                          "span",
                          null,
                          " ",
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement("i", {
                              style: { color: "red " },
                              class: "fa fa-youtube-play foot-icon",
                              "aria-hidden": "true",
                            }),
                            s.a.createElement(
                              "a",
                              {
                                href:
                                  null === e || void 0 === e ? void 0 : e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              s.a.createElement(
                                "span",
                                null,
                                null === e || void 0 === e
                                  ? void 0
                                  : e.select_sslmedia
                              )
                            )
                          )
                        );
                    }),
                    l.map(function (e) {
                      if (
                        "LinkedIn" ==
                        (null === e || void 0 === e
                          ? void 0
                          : e.select_sslmedia)
                      )
                        return s.a.createElement(
                          "span",
                          null,
                          " ",
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement("i", {
                              style: { color: "#0a66c2" },
                              class: "fa fa-linkedin foot-icon",
                              "aria-hidden": "true",
                            }),
                            s.a.createElement(
                              "a",
                              {
                                href:
                                  null === e || void 0 === e ? void 0 : e.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                              },
                              s.a.createElement(
                                "span",
                                null,
                                null === e || void 0 === e
                                  ? void 0
                                  : e.select_sslmedia
                              )
                            )
                          )
                        );
                    })
                  )
                )
              )
            )
          );
        },
        S =
          (a(620),
          function (e) {
            var t,
              a = e.backgroundColorClass,
              r = e.spaceTopClass,
              c = e.spaceBottomClass,
              m = e.spaceLeftClass,
              l = e.spaceRightClass,
              p = e.containerClass,
              d = e.extraFooterClass,
              g = e.sideMenu,
              h = Object(i.useState)(0),
              q = Object(o.a)(h, 2),
              v = q[0],
              f = q[1],
              b = Object(i.useState)(0),
              j = Object(o.a)(b, 2),
              k = j[0],
              w = j[1],
              _ = Object(i.useState)([]),
              D = Object(o.a)(_, 2),
              N = (D[0], D[1]),
              S = Object(i.useState)([]),
              L = Object(o.a)(S, 2),
              C = L[0],
              P = L[1];
            Object(i.useEffect)(function () {
              E.a
                .get("/admin/getPages")
                .then(function (e) {
                  P(e.data.data);
                })
                .catch(function (e) {
                  console.log(e);
                }),
                n.a
                  .get(
                    "https://nodejsbackend.astrologically.in/admin/getallCategory"
                  )
                  .then(function (e) {
                    N(e.data.data);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
            }, []),
              Object(i.useEffect)(function () {
                return (
                  w(100),
                  window.addEventListener("scroll", R),
                  function () {
                    window.removeEventListener("scroll", R);
                  }
                );
              }, []);
            var R = function () {
              f(window.scrollY);
            };
            return s.a.createElement(
              "footer",
              {
                className: "footer-area "
                  .concat(a || "", " ")
                  .concat(r || "", " ")
                  .concat(c || "", " ")
                  .concat(d || "", " ")
                  .concat(m || "", " ")
                  .concat(l || ""),
              },
              s.a.createElement(
                "div",
                { className: "".concat(p || "container") },
                s.a.createElement(
                  "div",
                  { className: "row" },
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
                      ),
                    },
                    s.a.createElement(
                      "h3",
                      { className: "stltext" },
                      "AstroVipra "
                    ),
                    s.a.createElement(x, { spaceBottomClass: "mb-30" })
                  ),
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
                      ),
                    },
                    s.a.createElement(
                      "div",
                      {
                        className: "".concat(
                          g
                            ? "footer-widget mb-30 ml-145"
                            : "footer-widget mb-30 ml-75"
                        ),
                      },
                      s.a.createElement(
                        "div",
                        { className: "footer-title" },
                        s.a.createElement("h3", null, "Horoscope")
                      ),
                      s.a.createElement(
                        "div",
                        { className: "footer-list" },
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "ul",
                              { className: "submenu" },
                              s.a.createElement(
                                "ul",
                                { className: "submenu" },
                                s.a.createElement(
                                  "li",
                                  { className: "" },
                                  s.a.createElement(
                                    u.c,
                                    { to: "/heroscopestwo" },
                                    "Daily"
                                  )
                                ),
                                s.a.createElement(
                                  "li",
                                  { className: "" },
                                  s.a.createElement(
                                    u.c,
                                    { to: "/heroscopestwo1" },
                                    "Weekly"
                                  )
                                ),
                                s.a.createElement(
                                  "li",
                                  { className: "" },
                                  s.a.createElement(
                                    u.c,
                                    { to: "/heroscopestwo2" },
                                    "Monthly"
                                  )
                                )
                              ),
                              s.a.createElement(
                                "div",
                                { className: "footer-title" },
                                s.a.createElement(
                                  "h3",
                                  { className: "mt-4" },
                                  "Panchang"
                                ),
                                s.a.createElement(
                                  "ul",
                                  { className: "submenu" },
                                  s.a.createElement(
                                    "li",
                                    { className: "" },
                                    s.a.createElement(
                                      u.c,
                                      { to: "/basicPanchang" },
                                      "Basic Panchang"
                                    )
                                  ),
                                  s.a.createElement(
                                    "li",
                                    { className: "" },
                                    s.a.createElement(
                                      u.c,
                                      { to: "/todayPanchang" },
                                      "Today Panchang"
                                    )
                                  ),
                                  s.a.createElement(
                                    "li",
                                    { className: "" },
                                    s.a.createElement(
                                      u.c,
                                      { to: "/heroscopestwo" },
                                      "Horoscope"
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
                      ),
                    },
                    s.a.createElement(
                      "div",
                      {
                        className: "".concat(
                          g
                            ? "footer-widget mb-30 ml-145"
                            : "footer-widget mb-30 ml-75"
                        ),
                      },
                      s.a.createElement(
                        "div",
                        { className: "footer-title" },
                        s.a.createElement("h3", null, "Dosh")
                      ),
                      s.a.createElement(
                        "div",
                        { className: "footer-list" },
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "ul",
                              { className: "submenu" },
                              s.a.createElement(
                                "ul",
                                { className: "submenu" },
                                s.a.createElement(
                                  "li",
                                  { className: "" },
                                  s.a.createElement(
                                    u.c,
                                    { to: "/manglikdosh" },
                                    "Manglik Dosh"
                                  )
                                ),
                                s.a.createElement(
                                  "li",
                                  { className: "" },
                                  s.a.createElement(
                                    u.c,
                                    { to: "/pitraDosh" },
                                    "Pitra Dosh"
                                  )
                                ),
                                s.a.createElement(
                                  "li",
                                  { className: "" },
                                  s.a.createElement(
                                    u.c,
                                    { to: "/kalsharpDosh" },
                                    "Kalsharp Dosh"
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      !0 ===
                        (null === (t = C[0]) || void 0 === t ? void 0 : t.other)
                        ? s.a.createElement(
                            s.a.Fragment,
                            null,
                            s.a.createElement(
                              "div",
                              { className: "footer-title mt-3" },
                              s.a.createElement("h3", null, "Others")
                            )
                          )
                        : null,
                      s.a.createElement(
                        "div",
                        { className: "footer-list" },
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "ul",
                              { className: "submenu" },
                              C.length > 0
                                ? s.a.createElement(
                                    s.a.Fragment,
                                    null,
                                    null === C || void 0 === C
                                      ? void 0
                                      : C.map(function (e) {
                                          if (
                                            !0 ===
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.status)
                                          )
                                            return s.a.createElement(
                                              "li",
                                              {
                                                key:
                                                  null === e || void 0 === e
                                                    ? void 0
                                                    : e._id,
                                                className: "",
                                              },
                                              s.a.createElement(
                                                u.c,
                                                {
                                                  to:
                                                    "" +
                                                    "/otherpage/".concat(
                                                      null === e || void 0 === e
                                                        ? void 0
                                                        : e._id
                                                    ),
                                                },
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.pageName
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
                  ),
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-6"
                      ),
                    },
                    s.a.createElement(
                      "div",
                      {
                        className: "".concat(
                          g
                            ? "footer-widget mb-30 ml-145"
                            : "footer-widget mb-30 ml-75"
                        ),
                      },
                      s.a.createElement(
                        "div",
                        { className: "footer-title" },
                        s.a.createElement("h3", null, "Astrologer")
                      ),
                      s.a.createElement(
                        "div",
                        { className: "footer-list" },
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "ul",
                              { className: "submenu" },
                              s.a.createElement(
                                "li",
                                { className: "" },
                                s.a.createElement(
                                  u.c,
                                  { to: "/pages/login" },
                                  "Astrologer Login"
                                )
                              ),
                              s.a.createElement(
                                "li",
                                { className: "" },
                                s.a.createElement(
                                  u.c,
                                  { to: "/astrologersignup" },
                                  "Astrologer Register"
                                )
                              )
                            )
                          )
                        )
                      ),
                      s.a.createElement(
                        "div",
                        { className: "footer-title mt-3" },
                        s.a.createElement("h3", null, "Book Pooja ")
                      ),
                      s.a.createElement(
                        "div",
                        { className: "footer-list" },
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "ul",
                              { className: "submenu" },
                              s.a.createElement(
                                "li",
                                { className: "" },
                                s.a.createElement(
                                  u.c,
                                  { to: "/bookEvent" },
                                  "Book Online Puja"
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g ? "col-xl-2 col-sm-4" : "col-lg-2 col-sm-4"
                      ),
                    },
                    s.a.createElement(
                      "div",
                      {
                        className: "".concat(
                          g
                            ? "footer-widget mb-30 ml-95"
                            : "footer-widget mb-30 ml-50"
                        ),
                      },
                      s.a.createElement(
                        "div",
                        { className: "footer-title" },
                        s.a.createElement("h3", null, "Useful Links")
                      ),
                      s.a.createElement(
                        "div",
                        { className: "footer-list" },
                        s.a.createElement(
                          "ul",
                          null,
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              "li",
                              null,
                              s.a.createElement(
                                u.c,
                                { to: "/ourservice" },
                                "Our Services"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              null,
                              s.a.createElement(
                                u.c,
                                { to: "/kundaliform" },
                                "Match Making"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              null,
                              s.a.createElement(
                                u.c,
                                { to: "/blog-no-sidebar" },
                                "Blog"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              null,
                              s.a.createElement(
                                u.c,
                                { to: "/aboutdetail" },
                                "About us"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              null,
                              s.a.createElement(
                                u.c,
                                { to: "/contact" },
                                "Contact"
                              )
                            ),
                            s.a.createElement(
                              "li",
                              null,
                              s.a.createElement(u.c, { to: "#/" })
                            ),
                            s.a.createElement(
                              u.c,
                              { to: "/TermsOfUse" },
                              "Terms of Use"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(
                              u.c,
                              { to: "/privacyPolicy" },
                              "privacyPolicy"
                            )
                          ),
                          s.a.createElement(
                            "li",
                            null,
                            s.a.createElement(u.c, { to: "/Faq" }, "FAQs")
                          )
                        )
                      )
                    )
                  ),
                  s.a.createElement(
                    "div",
                    {
                      className: "".concat(
                        g ? "col-xl-2 col-sm-8" : "col-lg-2 col-sm-6"
                      ),
                    },
                    s.a.createElement(O, {
                      spaceBottomClass: "mb-30",
                      spaceLeftClass: "ml-70",
                      sideMenu: g,
                    })
                  )
                )
              ),
              s.a.createElement(
                "button",
                {
                  className: "scroll-top ".concat(v > k ? "show" : ""),
                  onClick: function () {
                    y.animateScroll.scrollToTop();
                  },
                },
                s.a.createElement("i", { className: "fa fa-angle-double-up" })
              )
            );
          });
      t.a = function (e) {
        var t = e.children,
          a = e.headerContainerClass,
          o = e.headerTop,
          u = e.headerPaddingClass,
          r = e.headerPositionClass;
        return s.a.createElement(
          i.Fragment,
          null,
          s.a.createElement(k, {
            layout: a,
            top: o,
            headerPaddingClass: u,
            headerPositionClass: r,
          }),
          t,
          s.a.createElement(S, {
            backgroundColorClass: "bg-gray",
            spaceTopClass: "pt-100",
            spaceBottomClass: "pb-70",
          })
        );
      };
    },
    119: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      }),
        a.d(t, "c", function () {
          return s;
        }),
        a.d(t, "b", function () {
          return o;
        }),
        a.d(t, "d", function () {
          return u;
        }),
        a.d(t, "f", function () {
          return r;
        }),
        a.d(t, "e", function () {
          return n;
        });
      var i = "ADD_TO_WISHLIST",
        s = "DELETE_FROM_WISHLIST",
        o = "DELETE_ALL_FROM_WISHLIST",
        u = function (e, t) {
          return function (e) {
            t &&
              t("Added To Wishlist", {
                appearance: "success",
                autoDismiss: !0,
              });
          };
        },
        r = function (e, t) {
          return function (a) {
            t &&
              t("Removed From Wishlist", {
                appearance: "error",
                autoDismiss: !0,
              }),
              a({ type: s, payload: e });
          };
        },
        n = function (e) {
          return function (t) {
            e &&
              e("Removed All From Wishlist", {
                appearance: "error",
                autoDismiss: !0,
              }),
              t({ type: o });
          };
        };
    },
    151: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      }),
        a.d(t, "b", function () {
          return s;
        }),
        a.d(t, "c", function () {
          return o;
        }),
        a.d(t, "d", function () {
          return u;
        });
      var i = "ADD_TO_COMPARE",
        s = "DELETE_FROM_COMPARE",
        o = function (e, t) {
          return function (a) {
            t &&
              t("Added To Compare", { appearance: "success", autoDismiss: !0 }),
              a({ type: i, payload: e });
          };
        },
        u = function (e, t) {
          return function (a) {
            t &&
              t("Removed From Compare", {
                appearance: "error",
                autoDismiss: !0,
              }),
              a({ type: s, payload: e });
          };
        };
    },
    205: function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return s;
      }),
        a.d(t, "a", function () {
          return o;
        }),
        a.d(t, "g", function () {
          return u;
        }),
        a.d(t, "b", function () {
          return n;
        }),
        a.d(t, "d", function () {
          return c;
        }),
        a.d(t, "c", function () {
          return m;
        }),
        a.d(t, "f", function () {
          return l;
        }),
        a.d(t, "h", function () {
          return p;
        }),
        a.d(t, "i", function () {
          return d;
        });
      var i = a(54),
        s = function (e, t, a, i) {
          var s = t
            ? e.filter(function (e) {
                return e.category.filter(function (e) {
                  return e === t;
                })[0];
              })
            : e;
          if (a && "new" === a) {
            var o = s.filter(function (e) {
              return e.new;
            });
            return o.slice(0, i || o.length);
          }
          if (a && "bestSeller" === a)
            return s
              .sort(function (e, t) {
                return t.saleCount - e.saleCount;
              })
              .slice(0, i || s.length);
          if (a && "saleItems" === a) {
            var u = s.filter(function (e) {
              return e.discount && e.discount > 0;
            });
            return u.slice(0, i || u.length);
          }
          return s.slice(0, i || s.length);
        },
        o = function (e, t) {
          return t && t > 0 ? e - e * (t / 100) : null;
        },
        u = function (e, t, a) {
          if (e && t && a) {
            if ("productCategories" === t)
              return e.filter(function (e) {
                return e.productCategories.filter(function (e) {
                  return e === a;
                })[0];
              });
            if ("tag" === t)
              return e.filter(function (e) {
                return e.tag.filter(function (e) {
                  return e === a;
                })[0];
              });
            if ("color" === t)
              return e.filter(function (e) {
                return (
                  e.data &&
                  e.data.filter(function (e) {
                    return e.color === a;
                  })[0]
                );
              });
            if ("size" === t)
              return e.filter(function (e) {
                return (
                  e.data &&
                  e.data.filter(function (e) {
                    return e.size.filter(function (e) {
                      return e.name === a;
                    })[0];
                  })[0]
                );
              });
            if ("filterSort" === t) {
              var s = Object(i.a)(e);
              if ("default" === a) return s;
              if ("priceHighToLow" === a)
                return s.sort(function (e, t) {
                  return t.price - e.price;
                });
              if ("priceLowToHigh" === a)
                return s.sort(function (e, t) {
                  return e.price - t.price;
                });
            }
          }
          return e;
        },
        r = function (e) {
          return e.filter(function (e, t, a) {
            return t === a.indexOf(e);
          });
        },
        n = function (e) {
          var t = [];
          return (
            e &&
              e.map(function (e) {
                return (
                  e.productCategories &&
                  e.productCategories.map(function (e) {
                    return t.push(e);
                  })
                );
              }),
            r(t)
          );
        },
        c = function (e) {
          var t = [];
          return (
            e &&
              e.map(function (e) {
                return (
                  e.tag &&
                  e.tag.map(function (e) {
                    return t.push(e);
                  })
                );
              }),
            r(t)
          );
        },
        m = function (e) {
          var t = [];
          return (
            e &&
              e.map(function (e) {
                return (
                  e.data &&
                  e.data.map(function (e) {
                    return t.push(e.color);
                  })
                );
              }),
            r(t)
          );
        },
        l = function (e) {
          var t = [];
          return (
            e &&
              e.map(function (e) {
                return (
                  e.data &&
                  e.data.map(function (e) {
                    return e.size.map(function (e) {
                      return t.push(e.name);
                    });
                  })
                );
              }),
            r(t)
          );
        },
        p = function (e) {
          document
            .querySelectorAll(
              ".sidebar-widget-list-left button, .sidebar-widget-tag button, .product-filter button"
            )
            .forEach(function (e) {
              e.classList.remove("active");
            }),
            e.currentTarget.classList.add("active");
        },
        d = function (e) {
          var t = document.querySelector("#product-filter-wrapper");
          t.classList.toggle("active"),
            t.style.height
              ? (t.style.height = null)
              : (t.style.height = t.scrollHeight + "px"),
            e.currentTarget.classList.toggle("active");
        };
    },
    209: function (e, t, a) {
      e.exports = a.p + "static/media/astrologin-bg.f858568c.jpg";
    },
    211: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAPCAYAAADakUJeAAAJFUlEQVRoge2bC5CVZRnHf4suqCiXhYo1kbsBuparkZmSE0laZIVjlkZaaVmm2W1yxm5azeQMFmpOY9rFUCpNTLAyqEbUQh0uCSKgglxMzHB18YZJ+zTP8/3P2W/P+c6eC4eSOO/Mmf3e+/X/PP/ned9tev6mSRQFK07Kh1rystJ3Ks2qb6t8/LXAO4A3AUdgjARa9Ouj+tuAF4BNGJuAh4AHMe4DNlfUVzXjqkOe7YI265Q3HHgLxmHARODg+Bn9gQEq2wV06LcBYznwN+DPwFNV73ElZep9VuuZntHWng7gJuB9wHlYAPVJ4DngeSz+PgX8Q4B9EdgfGAKMEMBHAKMxxgJPAH8Efo9xO0T54r53HYAP0NgrAXBm2V0M4P2AaRgnAe8EDgQexVgPbAyA+l/j6Vh/L28B6tdBCNcDsFh/H/uwALVxNXBbvpcGgKtvoOYB/W8B3IRxPvARYKDie4em7QawH6J+0g5DsADz3cBdwJ8wVqXadq3RBrQDkzCOkqa4AVggTVLJuKoFhguTbwMfwIIdrAHWYiyMfnsCeCpwAsYbgPHScrdifBUCNLsCwM5cpmqdndkswbgfWAasDDbTXfZQYArGZOC4AK2xFVgNvBzCsxvAvp47sKjdqXW+SvHS4yo3j0rrVJNWqmwt6Rl19kQAtwlUTn8vDzD6AUnyW4I+w2SMaRD0bhFwJ8Y/lTcFOARjLXAzMBvj4Yy+Rgo0EzAeAOYGBa8fgPsKCK7pz1EfubxTBIILBeBZEj63pNp4I3AtFprRBc+/6ghgFw7Tow8LAC6Qhi0s6+s4AzgVQrA8jMV+OFV+DcbxwNvDTIHbsRCey0Wpva1+2o8vhqBNhMXKkuMqN49K61STVqpsLekZdbIAfDTG54HTquq02gH9dwC8l6R1WjYvDaprfKXXNpK4H6oPA2dgjBHYr49DklBBB8pRGPdA0Lm5JYDgWv6jOrB3Ar8DXuql397GlPs+QcBoBfbRYb85pdVc8FwkAH9XQMixhVNDKMF2jC0SNAt3EsD7Au8GjpdA+3lox+J6fQXu84BjMZaEYHHTw4WrcaZAuQ7jRuAXwSrKjQEuw4KaH5nKbxKr+ndF88iK72xaqfrVp/s6XIFxbzqxj/66TXGWnAOLZXcQmgh+ALHpu1NwreKH9lnZtRNSY2/LH4gk+CZ/HPigvtPBy30TGBeHLdEiV0ubjQLOlR08D0IguGPrEq1nOnQGxUs0xSCBZzZwItBc47rmaHmTxjVI+5ULL4uWHqrvXJisshtS8+0qar2y0Kw5zJbAGKQ5XqU5p8Mwrc0mrdU8rd25Wsu7tbYbtNbjtPZrC9pp0l75nqX3a632NheO0N4/K6a1u51hNxVmSbgiQb1YGD0rd8ZcA/8QOBvCBkyCxQZcIDpymKTjROWVDq8eDdwfY2gqfinGN/TtEv8ejAsVbw7tYdwK/AX4emab3fF9ZXPO0OIuw7gCuAlCS5+OhWPM6e33gBUZ2soF58nA+VjYhr+R9nSqvr3kvIop9Gr97sI4R9pnmyj0Lx280sBur39IFHqAWMi1MhUmSMBVSqH3kZZ1Lf7+sPWT8zIvLwh61jsc+IJo+m0Yc0K7JiD8HBbpCyQE3CZ/qcz8LwXepj3wsq8odxYW6W9W/BJMe5mErQU2d/k1rkdaqTbLp68So3lQgulKnZdc2AFcl6PQ+4VLP6FWZ2IB3KMhFv+twE/yC7V7ALgvxpdEWzvjsFh4OpHGuBGLRXki1YabDZ8OmpvVZna8VfTaJeJgaZBr5EltE1UcKKfSHQVUPteOe7A/GeueeFpdO/9BdvrqkmNIvg+RwOnCQrs9DvwUC7B+DfiOAHwx8K0AtfEx4CAIgebOOwfEI2XmPEH25bsCvO7oszAlfiRPcmG9PirrTrNOmRYr5Qx0jfsZ2bHXiyZv6WWOhXGn5650vp/KP1BmzRla5yQtEcoDRednlhVSWfGdTStVv3y6K5bPAvNjjQnq3KZ1d2HvV5cvZtnArfLQXpzZxe7vxPJwkjTIAlEV9xyf7hIttEL5+lkHrV3U5r1YaKPLRRc9f3ykJ2u7TBT68YJ29pJmO0VCZpS8sEvl0fb75s26b+6Qpm4RiA/HQliNDyZlYV/+ON980sfZYQ5ZSO41OtQrZK92yI5u0f3s8GBeCTtwrT4U4zGB4xYxhUK78iCBu1129fzoJ8k7WNT6ZCzSfyaGUosPwDXRJ4A58mg/Jyb0ayx8C6XrV7uv9Ugr1Wb16TPjTFlK2DXugcMRNEWH/l5pimIaWC7es2wzFgA8Tdczfr3xqPIcJNPFDEYEZbf81dRjBW2N1nVUm5jQcJkFg3Wl8ozqPKT71f0FMKdZG3oMrbvNkaK7J+qu1T27E2WDDtbV2TOim5sxVkhzLtF9bXrOo2RPHyfqulFCYW7KDBiLhSnmguFXMT7LU95q1zVtfkyXs3WHHIsLK9qzSsq8egGcmbenA7g+8dJtDRC43Cm4Xgc451BqkbaeJkB1yja/T1rXNW5HyTFaOKfcTJgRQLbQsIsKy1lxPeSRvk5afrak+6pe5tGiF1NHytQ6Vp71OyQE5uevdvzuPBFgY8KJlDxq2VbTOtd7z+pVp5q0UmVrSc+o0wBwPeKVteWg+ZS03Bxp3S7l9VP+VCzub9vFCraKhnfIAdOsG4IxehzSXx7dK3tY1+UBjDy4F2Bcpueh/uhinV6evSJHYIvo71Bpu2XyFrt9vijv3U5s3snhwEvYwTVZwqTqeAPAZfMaAK5HvDqt4tcbF8k56F5Ztyn/Gg6W7rLNYc9a2LfDUu+xOwRat5XHyfZb19t4egFwLj5WTrNH5EB7Qf11qb8n9cBiTcrji7zgx8RdeOJ1X6yru+V1A2EDwGXzGgCuR7y2QzkivM8WzwyHCsQP6IXYlrBDE63n74BfH/Q1ebwxRB7YmfEQo/c+KgEwYgBflif+admUSzH+rvfge8v+btV1or+wOka28g1YeKM3ZvbRAHADwMVp/xcATsfb9cB/kmzbVl0/IS/ret03/xbit73SPioEcO7b73jfo597k0fLS4+ug7bofvJ+LP5xo1ZPcqXjqb1uVrxedapJK1W2lvTCOsB/AGhRDpjYuAlQAAAAAElFTkSuQmCC";
    },
    215: function (e, t, a) {},
    217: function (e, t, a) {
      "use strict";
      var i = a(41),
        s = a(22),
        o = a(0),
        u = a.n(o),
        r = a(23),
        n = a(2),
        c = a(47),
        m = (a(120), a(205), a(48)),
        l = a.n(m),
        p = a(59),
        d = a(26),
        g = a(219);
      function h() {
        h = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (e, t, a) {
              e[t] = a.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          o = s.iterator || "@@iterator",
          u = s.asyncIterator || "@@asyncIterator",
          r = s.toStringTag || "@@toStringTag";
        function n(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          n({}, "");
        } catch (O) {
          n = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function c(e, t, a, s) {
          var o = t && t.prototype instanceof p ? t : p,
            u = Object.create(o.prototype),
            r = new _(s || []);
          return i(u, "_invoke", { value: y(e, a, r) }), u;
        }
        function m(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        e.wrap = c;
        var l = {};
        function p() {}
        function d() {}
        function g() {}
        var q = {};
        n(q, o, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          f = v && v(v(D([])));
        f && f !== t && a.call(f, o) && (q = f);
        var b = (g.prototype = p.prototype = Object.create(q));
        function j(e) {
          ["next", "throw", "return"].forEach(function (t) {
            n(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          var s;
          i(this, "_invoke", {
            value: function (i, o) {
              function u() {
                return new t(function (s, u) {
                  !(function i(s, o, u, r) {
                    var n = m(e[s], e, o);
                    if ("throw" !== n.type) {
                      var c = n.arg,
                        l = c.value;
                      return l && "object" == typeof l && a.call(l, "__await")
                        ? t.resolve(l.__await).then(
                            function (e) {
                              i("next", e, u, r);
                            },
                            function (e) {
                              i("throw", e, u, r);
                            }
                          )
                        : t.resolve(l).then(
                            function (e) {
                              (c.value = e), u(c);
                            },
                            function (e) {
                              return i("throw", e, u, r);
                            }
                          );
                    }
                    r(n.arg);
                  })(i, o, s, u);
                });
              }
              return (s = s ? s.then(u, u) : u());
            },
          });
        }
        function y(e, t, a) {
          var i = "suspendedStart";
          return function (s, o) {
            if ("executing" === i)
              throw new Error("Generator is already running");
            if ("completed" === i) {
              if ("throw" === s) throw o;
              return N();
            }
            for (a.method = s, a.arg = o; ; ) {
              var u = a.delegate;
              if (u) {
                var r = x(u, a);
                if (r) {
                  if (r === l) continue;
                  return r;
                }
              }
              if ("next" === a.method) a.sent = a._sent = a.arg;
              else if ("throw" === a.method) {
                if ("suspendedStart" === i) throw ((i = "completed"), a.arg);
                a.dispatchException(a.arg);
              } else "return" === a.method && a.abrupt("return", a.arg);
              i = "executing";
              var n = m(e, t, a);
              if ("normal" === n.type) {
                if (
                  ((i = a.done ? "completed" : "suspendedYield"), n.arg === l)
                )
                  continue;
                return { value: n.arg, done: a.done };
              }
              "throw" === n.type &&
                ((i = "completed"), (a.method = "throw"), (a.arg = n.arg));
            }
          };
        }
        function x(e, t) {
          var a = t.method,
            i = e.iterator[a];
          if (void 0 === i)
            return (
              (t.delegate = null),
              ("throw" === a &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== a &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + a + "' method"
                  )))),
              l
            );
          var s = m(i, e.iterator, t.arg);
          if ("throw" === s.type)
            return (
              (t.method = "throw"), (t.arg = s.arg), (t.delegate = null), l
            );
          var o = s.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                l)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              l);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function D(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                s = function t() {
                  for (; ++i < e.length; )
                    if (a.call(e, i)) return (t.value = e[i]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (s.next = s);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (d.prototype = g),
          i(b, "constructor", { value: g, configurable: !0 }),
          i(g, "constructor", { value: d, configurable: !0 }),
          (d.displayName = n(g, r, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === d || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, g)
                : ((e.__proto__ = g), n(e, r, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          j(k.prototype),
          n(k.prototype, u, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, a, i, s, o) {
            void 0 === o && (o = Promise);
            var u = new k(c(t, a, i, s), o);
            return e.isGeneratorFunction(a)
              ? u
              : u.next().then(function (e) {
                  return e.done ? e.value : u.next();
                });
          }),
          j(b),
          n(b, r, "Generator"),
          n(b, o, function () {
            return this;
          }),
          n(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              a = [];
            for (var i in t) a.push(i);
            return (
              a.reverse(),
              function e() {
                for (; a.length; ) {
                  var i = a.pop();
                  if (i in t) return (e.value = i), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = D),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function i(a, i) {
                return (
                  (u.type = "throw"),
                  (u.arg = e),
                  (t.next = a),
                  i && ((t.method = "next"), (t.arg = void 0)),
                  !!i
                );
              }
              for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                var o = this.tryEntries[s],
                  u = o.completion;
                if ("root" === o.tryLoc) return i("end");
                if (o.tryLoc <= this.prev) {
                  var r = a.call(o, "catchLoc"),
                    n = a.call(o, "finallyLoc");
                  if (r && n) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  } else if (r) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                  } else {
                    if (!n)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var s = this.tryEntries[i];
                if (
                  s.tryLoc <= this.prev &&
                  a.call(s, "finallyLoc") &&
                  this.prev < s.finallyLoc
                ) {
                  var o = s;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var u = o ? o.completion : {};
              return (
                (u.type = e),
                (u.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), l)
                  : this.complete(u)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                l
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return this.complete(a.completion, a.afterLoc), E(a), l;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var i = a.completion;
                  if ("throw" === i.type) {
                    var s = i.arg;
                    E(a);
                  }
                  return s;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: D(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          e
        );
      }
      a.d(t, "a", function () {
        return q;
      });
      var q = (function () {
        var e = Object(i.a)(
          h().mark(function e() {
            var t;
            return h().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!(t = JSON.parse(localStorage.getItem("user_id")))) {
                      e.next = 4;
                      break;
                    }
                    return (
                      (e.next = 4),
                      d.a
                        .get("/user/viewoneuser/".concat(t))
                        .then(function (e) {
                          var t, a;
                          sessionStorage.setItem(
                            "userBalance",
                            null === e ||
                              void 0 === e ||
                              null === (t = e.data) ||
                              void 0 === t ||
                              null === (a = t.data) ||
                              void 0 === a
                              ? void 0
                              : a.amount
                          ),
                            console.log(e.data.data.amount);
                        })
                        .catch(function (e) {
                          console.log(e);
                        })
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
      t.b = Object(c.connect)(
        function (e) {
          return {
            currency: e.currencyData,
            cartData: e.cartData,
            wishlistData: e.wishlistData,
            compareData: e.compareData,
          };
        },
        function (e) {
          return {
            deleteFromCart: function (t, a) {
              e(Object(p.j)(t, a));
            },
          };
        },
        q
      )(function (e) {
        e.currency, e.cartData, e.wishlistData, e.compareData, e.deleteFromCart;
        var t = e.iconWhiteClass,
          a = Object(o.useState)([]),
          c = Object(s.a)(a, 2),
          m = (c[0], c[1], Object(o.useState)("")),
          p = Object(s.a)(m, 2),
          d = p[0],
          v = p[1],
          f = localStorage.getItem("userData");
        Object(o.useEffect)(
          function () {
            S();
          },
          [f]
        );
        sessionStorage.getItem("userBalance");
        Object(o.useEffect)(function () {
          q(),
            setInterval(function () {
              var e = sessionStorage.getItem("userBalance"),
                t = localStorage.getItem("userData");
              _(JSON.parse(t)), v(e);
            }, 4e3);
        }, []);
        Object(r.useHistory)();
        var b = Object(o.useState)([]),
          j = Object(s.a)(b, 2),
          k = (j[0], j[1]),
          y = (function () {
            var e = Object(i.a)(
              h().mark(function e() {
                var t, a, i;
                return h().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          l.a.get({
                            headers: {
                              "auth-token": localStorage.getItem("auth-token"),
                            },
                          })
                        );
                      case 2:
                        (t = e.sent),
                          (a = t.data),
                          (i = a.data),
                          k(i),
                          console.log(i);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        Object(o.useEffect)(function () {
          localStorage.getItem("auth-token") && y();
        }, []);
        var x = Object(o.useState)({}),
          w = Object(s.a)(x, 2),
          E = w[0],
          _ = w[1],
          D = Object(o.useState)(""),
          N = Object(s.a)(D, 2),
          O = (N[0], N[1]),
          S = (function () {
            var e = Object(i.a)(
              h().mark(function e() {
                var t;
                return h().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          !(t = JSON.parse(localStorage.getItem("user_id")))
                        ) {
                          e.next = 4;
                          break;
                        }
                        return (
                          (e.next = 4),
                          Object(g.b)(t)
                            .then(function (e) {
                              _(e.data);
                            })
                            .catch(function (e) {
                              console.log(e);
                            })
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (
          Object(o.useEffect)(
            function () {
              var e = localStorage.getItem("token");
              O(e);
            },
            [E]
          ),
          u.a.createElement(
            "div",
            { className: "header-right-wrap ".concat(t || "") },
            u.a.createElement(
              "div",
              { className: "same-style account-setting  d-lg-block" },
              u.a.createElement(
                "button",
                {
                  className: "account-setting-active",
                  onClick: function (e) {
                    return (function (e) {
                      e.currentTarget.nextSibling.classList.toggle("active");
                    })(e);
                  },
                },
                (null === E || void 0 === E ? void 0 : E.userimg)
                  ? u.a.createElement(
                      u.a.Fragment,
                      null,
                      u.a.createElement(
                        "span",
                        { className: "username" },
                        null === E || void 0 === E ? void 0 : E.fullname
                      ),
                      u.a.createElement(
                        "span",
                        { "data-tour": "user" },
                        u.a.createElement("img", {
                          src:
                            null === E || void 0 === E ? void 0 : E.userimg[0],
                          className: "round ftt",
                          height: "40",
                          width: "40",
                          alt: "Login",
                        })
                      )
                    )
                  : u.a.createElement(
                      "span",
                      { className: "username" },
                      "Login"
                    )
              ),
              u.a.createElement(
                "div",
                { className: "account-dropdown" },
                u.a.createElement(
                  "ul",
                  null,
                  localStorage.getItem("token")
                    ? u.a.createElement(
                        u.a.Fragment,
                        null,
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/my-order" },
                            "My Order"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(n.c, { to: "/my-refund" }, "Refund")
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/mybookedpooja" },
                            "My Pooja Booking"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/notificationlist" },
                            "Notification"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/my-account" },
                            "My Account"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/wallettransaclist" },
                            "Wallet Transaction"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/walletmoney" },
                            "Wallet Recharge",
                            " ",
                            u.a.createElement(
                              "span",
                              { className: "ml-2" },
                              "\u20b9",
                              d
                                ? u.a.createElement(u.a.Fragment, null, d)
                                : u.a.createElement(
                                    u.a.Fragment,
                                    null,
                                    null === E || void 0 === E
                                      ? void 0
                                      : E.amount
                                  )
                            )
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/askQuestionList" },
                            "Ask Question"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/userChatHistoryList" },
                            "View Your Chat"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/UserCallHistory" },
                            "Call History List"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/userchathistory" },
                            "Chat/Video History List"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/customersupport" },
                            "Customer Support Chat"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            {
                              to: "/",
                              onClick: function (e) {
                                return (
                                  window.localStorage.clear(),
                                  void window.location.replace("/")
                                );
                              },
                            },
                            "Logout"
                          )
                        )
                      )
                    : u.a.createElement(
                        u.a.Fragment,
                        null,
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/login-register" },
                            "Login"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/login-register" },
                            "Register"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            "a",
                            {
                              href: "http://astro.astrologically.in/#/pages/login",
                            },
                            "Astrologer login"
                          )
                        ),
                        u.a.createElement(
                          "li",
                          null,
                          u.a.createElement(
                            n.c,
                            { to: "/astrologersignup" },
                            "Astrologer Register"
                          )
                        )
                      )
                )
              )
            ),
            u.a.createElement(
              "div",
              { className: "same-style mobile-off-canvas d-block d-lg-none" },
              u.a.createElement(
                "button",
                {
                  className: "mobile-aside-button",
                  onClick: function () {
                    document
                      .querySelector("#offcanvas-mobile-menu")
                      .classList.add("active");
                  },
                },
                u.a.createElement("i", { className: "pe-7s-menu" })
              )
            )
          )
        );
      });
    },
    219: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return u;
      }),
        a.d(t, "c", function () {
          return r;
        }),
        a.d(t, "b", function () {
          return n;
        });
      var i = a(41),
        s = a(26);
      function o() {
        o = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          a = t.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (e, t, a) {
              e[t] = a.value;
            },
          s = "function" == typeof Symbol ? Symbol : {},
          u = s.iterator || "@@iterator",
          r = s.asyncIterator || "@@asyncIterator",
          n = s.toStringTag || "@@toStringTag";
        function c(e, t, a) {
          return (
            Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          c({}, "");
        } catch (O) {
          c = function (e, t, a) {
            return (e[t] = a);
          };
        }
        function m(e, t, a, s) {
          var o = t && t.prototype instanceof d ? t : d,
            u = Object.create(o.prototype),
            r = new _(s || []);
          return i(u, "_invoke", { value: y(e, a, r) }), u;
        }
        function l(e, t, a) {
          try {
            return { type: "normal", arg: e.call(t, a) };
          } catch (O) {
            return { type: "throw", arg: O };
          }
        }
        e.wrap = m;
        var p = {};
        function d() {}
        function g() {}
        function h() {}
        var q = {};
        c(q, u, function () {
          return this;
        });
        var v = Object.getPrototypeOf,
          f = v && v(v(D([])));
        f && f !== t && a.call(f, u) && (q = f);
        var b = (h.prototype = d.prototype = Object.create(q));
        function j(e) {
          ["next", "throw", "return"].forEach(function (t) {
            c(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function k(e, t) {
          var s;
          i(this, "_invoke", {
            value: function (i, o) {
              function u() {
                return new t(function (s, u) {
                  !(function i(s, o, u, r) {
                    var n = l(e[s], e, o);
                    if ("throw" !== n.type) {
                      var c = n.arg,
                        m = c.value;
                      return m && "object" == typeof m && a.call(m, "__await")
                        ? t.resolve(m.__await).then(
                            function (e) {
                              i("next", e, u, r);
                            },
                            function (e) {
                              i("throw", e, u, r);
                            }
                          )
                        : t.resolve(m).then(
                            function (e) {
                              (c.value = e), u(c);
                            },
                            function (e) {
                              return i("throw", e, u, r);
                            }
                          );
                    }
                    r(n.arg);
                  })(i, o, s, u);
                });
              }
              return (s = s ? s.then(u, u) : u());
            },
          });
        }
        function y(e, t, a) {
          var i = "suspendedStart";
          return function (s, o) {
            if ("executing" === i)
              throw new Error("Generator is already running");
            if ("completed" === i) {
              if ("throw" === s) throw o;
              return N();
            }
            for (a.method = s, a.arg = o; ; ) {
              var u = a.delegate;
              if (u) {
                var r = x(u, a);
                if (r) {
                  if (r === p) continue;
                  return r;
                }
              }
              if ("next" === a.method) a.sent = a._sent = a.arg;
              else if ("throw" === a.method) {
                if ("suspendedStart" === i) throw ((i = "completed"), a.arg);
                a.dispatchException(a.arg);
              } else "return" === a.method && a.abrupt("return", a.arg);
              i = "executing";
              var n = l(e, t, a);
              if ("normal" === n.type) {
                if (
                  ((i = a.done ? "completed" : "suspendedYield"), n.arg === p)
                )
                  continue;
                return { value: n.arg, done: a.done };
              }
              "throw" === n.type &&
                ((i = "completed"), (a.method = "throw"), (a.arg = n.arg));
            }
          };
        }
        function x(e, t) {
          var a = t.method,
            i = e.iterator[a];
          if (void 0 === i)
            return (
              (t.delegate = null),
              ("throw" === a &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                x(e, t),
                "throw" === t.method)) ||
                ("return" !== a &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + a + "' method"
                  )))),
              p
            );
          var s = l(i, e.iterator, t.arg);
          if ("throw" === s.type)
            return (
              (t.method = "throw"), (t.arg = s.arg), (t.delegate = null), p
            );
          var o = s.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                p)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              p);
        }
        function w(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function E(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function _(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(w, this),
            this.reset(!0);
        }
        function D(e) {
          if (e) {
            var t = e[u];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var i = -1,
                s = function t() {
                  for (; ++i < e.length; )
                    if (a.call(e, i)) return (t.value = e[i]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (s.next = s);
            }
          }
          return { next: N };
        }
        function N() {
          return { value: void 0, done: !0 };
        }
        return (
          (g.prototype = h),
          i(b, "constructor", { value: h, configurable: !0 }),
          i(h, "constructor", { value: g, configurable: !0 }),
          (g.displayName = c(h, n, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === g || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, h)
                : ((e.__proto__ = h), c(e, n, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          j(k.prototype),
          c(k.prototype, r, function () {
            return this;
          }),
          (e.AsyncIterator = k),
          (e.async = function (t, a, i, s, o) {
            void 0 === o && (o = Promise);
            var u = new k(m(t, a, i, s), o);
            return e.isGeneratorFunction(a)
              ? u
              : u.next().then(function (e) {
                  return e.done ? e.value : u.next();
                });
          }),
          j(b),
          c(b, n, "Generator"),
          c(b, u, function () {
            return this;
          }),
          c(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              a = [];
            for (var i in t) a.push(i);
            return (
              a.reverse(),
              function e() {
                for (; a.length; ) {
                  var i = a.pop();
                  if (i in t) return (e.value = i), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = D),
          (_.prototype = {
            constructor: _,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(E),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    a.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function i(a, i) {
                return (
                  (u.type = "throw"),
                  (u.arg = e),
                  (t.next = a),
                  i && ((t.method = "next"), (t.arg = void 0)),
                  !!i
                );
              }
              for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                var o = this.tryEntries[s],
                  u = o.completion;
                if ("root" === o.tryLoc) return i("end");
                if (o.tryLoc <= this.prev) {
                  var r = a.call(o, "catchLoc"),
                    n = a.call(o, "finallyLoc");
                  if (r && n) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  } else if (r) {
                    if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                  } else {
                    if (!n)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return i(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var s = this.tryEntries[i];
                if (
                  s.tryLoc <= this.prev &&
                  a.call(s, "finallyLoc") &&
                  this.prev < s.finallyLoc
                ) {
                  var o = s;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var u = o ? o.completion : {};
              return (
                (u.type = e),
                (u.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), p)
                  : this.complete(u)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                p
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.finallyLoc === e)
                  return this.complete(a.completion, a.afterLoc), E(a), p;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var a = this.tryEntries[t];
                if (a.tryLoc === e) {
                  var i = a.completion;
                  if ("throw" === i.type) {
                    var s = i.arg;
                    E(a);
                  }
                  return s;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, a) {
              return (
                (this.delegate = { iterator: D(e), resultName: t, nextLoc: a }),
                "next" === this.method && (this.arg = void 0),
                p
              );
            },
          }),
          e
        );
      }
      var u = (function () {
          var e = Object(i.a)(
            o().mark(function e(t) {
              var a;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a.post("/user/userlogin", t).then(function (e) {
                          return e.data;
                        })
                      );
                    case 2:
                      return (a = e.sent), e.abrupt("return", a);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        r = (function () {
          var e = Object(i.a)(
            o().mark(function e(t) {
              var a;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a.post("/user/userVryfyotp", t).then(function (e) {
                          return e.data;
                        })
                      );
                    case 2:
                      return (a = e.sent), e.abrupt("return", a);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        n = (function () {
          var e = Object(i.a)(
            o().mark(function e(t) {
              var a;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.a
                          .get("/user/viewoneuser/".concat(t))
                          .then(function (e) {
                            return e.data;
                          })
                      );
                    case 2:
                      return (a = e.sent), e.abrupt("return", a);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })();
    },
    26: function (e, t, a) {
      "use strict";
      var i = a(48),
        s = a
          .n(i)
          .a.create({ baseURL: "https://nodejsbackend.astrologically.in" });
      t.a = s;
    },
    335: function (e) {
      e.exports = JSON.parse(
        '[{"id":"1","sku":"asdf123","name":"Lorem ipsum jacket","price":12.45,"discount":10,"offerEnd":"October 5, 2020 12:11:00","new":false,"rating":4,"saleCount":54,"category":["fashion","men"],"tag":["fashion","men","jacket","full sleeve"],"variation":[{"color":"white","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/women.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"2","sku":"asdf124","name":"Lorem ipsum coat","price":18.5,"discount":15,"new":false,"rating":3,"saleCount":12,"category":["fashion","women"],"tag":["fashion","women","coat","full sleeve"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/men.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"3","sku":"asdf125","name":"Lorem ipsum jacket","price":17.45,"discount":40,"offerEnd":"October 2, 2020 12:11:00","new":true,"rating":5,"saleCount":36,"category":["fashion","men"],"tag":["fashion","men","jacket","full sleeve"],"variation":[{"color":"white","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/men.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"4","sku":"asdf126","name":"Lorem ipsum fashion coat","price":15.5,"discount":0,"new":true,"rating":4,"saleCount":20,"category":["fashion","women"],"tag":["fashion","women","coat","full sleeve"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/kid.jpg","/assets/img/product/fashion/men.jpg","/assets/img/product/fashion/women.jpg","/assets/img/product/fashion/kid.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"5","sku":"asdf127","name":"Lorem ipsum female coat","price":25.5,"discount":10,"new":true,"rating":5,"saleCount":25,"category":["fashion","women"],"tag":["fashion","women","coat","full sleeve"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/men.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/women.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/kid.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/5.jpg","/assets/img/product/fashion/2.jpg","/assets/img/product/fashion/4.jpg","/assets/img/product/fashion/7.jpg","/assets/img/product/fashion/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"6","sku":"asdf128","name":"Lorem ipsum jacket","price":19.85,"discount":0,"offerEnd":"October 17, 2020 12:11:00","new":true,"rating":5,"saleCount":65,"category":["fashion","men"],"tag":["fashion","men","jacket","full sleeve"],"variation":[{"color":"white","image":"/assets/img/product/fashion/1.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/8.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/3.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/6.jpg","/assets/img/product/fashion/3.jpg","/assets/img/product/fashion/1.jpg","/assets/img/product/fashion/8.jpg","/assets/img/product/fashion/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"7","sku":"asdf129","name":"Lorem ipsum fashion female coat","price":55.5,"discount":40,"new":true,"rating":5,"saleCount":55,"category":["fashion","women"],"tag":["fashion","women","coat","full sleeve"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/2.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/4.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/5.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/7.jpg","/assets/img/product/fashion/5.jpg","/assets/img/product/fashion/2.jpg","/assets/img/product/fashion/4.jpg","/assets/img/product/fashion/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"8","sku":"asdf130","name":"Lorem ipsum fashion jacket","price":29.85,"discount":10,"offerEnd":"October 18, 2020 12:11:00","new":false,"rating":5,"saleCount":83,"category":["fashion","men"],"tag":["fashion","men","jacket","full sleeve"],"stock":0,"image":["/assets/img/product/fashion/8.jpg","/assets/img/product/fashion/6.jpg","/assets/img/product/fashion/3.jpg","/assets/img/product/fashion/1.jpg","/assets/img/product/fashion/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"9","sku":"asdf131","name":"Lorem ipsum fashion female top","price":35.6,"discount":0,"new":false,"rating":4,"saleCount":95,"category":["fashion","women"],"tag":["fashion","women","top","sleeveless"],"stock":5,"affiliateLink":"//www.amazon.com","image":["/assets/img/product/fashion/9.jpg","/assets/img/product/fashion/7.jpg","/assets/img/product/fashion/5.jpg","/assets/img/product/fashion/2.jpg","/assets/img/product/fashion/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"10","sku":"asdf132","name":"Lorem ipsum blender","price":15.6,"discount":0,"new":false,"rating":4,"saleCount":90,"category":["electronics"],"tag":["electronics"],"stock":15,"image":["/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg","/assets/img/product/electronics/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"11","sku":"asdf133","name":"Lorem ipsum speaker","price":10.6,"discount":10,"new":true,"rating":5,"saleCount":190,"category":["electronics"],"tag":["electronics"],"stock":25,"image":["/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg","/assets/img/product/electronics/5.jpg","/assets/img/product/electronics/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"12","sku":"asdf134","name":"Lorem ipsum camera","price":12.5,"discount":20,"new":true,"rating":3,"saleCount":90,"category":["electronics"],"tag":["electronics"],"stock":20,"image":["/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg","/assets/img/product/electronics/5.jpg","/assets/img/product/electronics/6.jpg","/assets/img/product/electronics/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"13","sku":"asdf135","name":"Lorem ipsum monitor","price":14.5,"discount":30,"new":false,"rating":4,"saleCount":100,"category":["electronics"],"tag":["electronics"],"stock":40,"image":["/assets/img/product/electronics/4.jpg","/assets/img/product/electronics/5.jpg","/assets/img/product/electronics/6.jpg","/assets/img/product/electronics/7.jpg","/assets/img/product/electronics/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"14","sku":"asdf136","name":"Lorem ipsum small speaker","price":2.5,"discount":10,"new":true,"rating":5,"saleCount":120,"category":["electronics"],"tag":["electronics"],"stock":45,"image":["/assets/img/product/electronics/5.jpg","/assets/img/product/electronics/6.jpg","/assets/img/product/electronics/7.jpg","/assets/img/product/electronics/8.jpg","/assets/img/product/electronics/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"15","sku":"asdf137","name":"Lorem ipsum microphone","price":12.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["electronics"],"tag":["electronics"],"stock":5,"image":["/assets/img/product/electronics/6.jpg","/assets/img/product/electronics/7.jpg","/assets/img/product/electronics/8.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"16","sku":"asdf138","name":"Lorem ipsum grinder","price":22.5,"discount":20,"new":true,"rating":5,"saleCount":25,"category":["electronics"],"tag":["electronics"],"stock":7,"image":["/assets/img/product/electronics/7.jpg","/assets/img/product/electronics/8.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"17","sku":"asdf139","name":"Lorem ipsum bluetooth","price":32.5,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["electronics"],"tag":["electronics"],"stock":6,"image":["/assets/img/product/electronics/8.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"18","sku":"asdf140","name":"Lorem ipsum chair one","price":15.6,"discount":0,"new":false,"rating":4,"saleCount":90,"category":["furniture"],"tag":["furniture"],"stock":15,"image":["/assets/img/product/furnitures/1.jpg","/assets/img/product/furnitures/2.jpg","/assets/img/product/furnitures/3.jpg","/assets/img/product/furnitures/4.jpg","/assets/img/product/furnitures/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"19","sku":"asdf141","name":"Lorem ipsum chair two","price":10.6,"discount":10,"new":true,"rating":5,"saleCount":190,"category":["furniture"],"tag":["furniture"],"stock":25,"image":["/assets/img/product/furnitures/2.jpg","/assets/img/product/furnitures/3.jpg","/assets/img/product/furnitures/4.jpg","/assets/img/product/furnitures/5.jpg","/assets/img/product/furnitures/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"20","sku":"asdf142","name":"Lorem ipsum chair three","price":12.5,"discount":20,"new":true,"rating":3,"saleCount":90,"category":["furniture"],"tag":["furniture"],"stock":20,"image":["/assets/img/product/furnitures/3.jpg","/assets/img/product/furnitures/4.jpg","/assets/img/product/furnitures/5.jpg","/assets/img/product/furnitures/6.jpg","/assets/img/product/furnitures/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"21","sku":"asdf143","name":"Lorem ipsum sofa one","price":14.5,"discount":30,"new":false,"rating":4,"saleCount":100,"category":["furniture"],"tag":["furniture"],"stock":40,"image":["/assets/img/product/furnitures/4.jpg","/assets/img/product/furnitures/5.jpg","/assets/img/product/furnitures/6.jpg","/assets/img/product/furnitures/7.jpg","/assets/img/product/furnitures/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"22","sku":"asdf144","name":"Lorem ipsum sofa two","price":22.5,"discount":10,"new":true,"rating":5,"saleCount":120,"category":["furniture"],"tag":["furniture"],"stock":45,"image":["/assets/img/product/furnitures/5.jpg","/assets/img/product/furnitures/6.jpg","/assets/img/product/furnitures/7.jpg","/assets/img/product/furnitures/8.jpg","/assets/img/product/furnitures/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"23","sku":"asdf145","name":"Lorem ipsum sofa three","price":12.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["furniture"],"tag":["furniture"],"stock":5,"image":["/assets/img/product/furnitures/6.jpg","/assets/img/product/furnitures/7.jpg","/assets/img/product/furnitures/8.jpg","/assets/img/product/furnitures/1.jpg","/assets/img/product/furnitures/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"24","sku":"asdf146","name":"Lorem ipsum sofa four","price":22.5,"discount":20,"new":true,"rating":5,"saleCount":25,"category":["furniture"],"tag":["furniture"],"stock":7,"image":["/assets/img/product/furnitures/7.jpg","/assets/img/product/furnitures/8.jpg","/assets/img/product/furnitures/1.jpg","/assets/img/product/furnitures/2.jpg","/assets/img/product/furnitures/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"25","sku":"asdf147","name":"Lorem ipsum sofa five","price":32.5,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["furniture"],"tag":["furniture"],"stock":6,"image":["/assets/img/product/furnitures/8.jpg","/assets/img/product/furnitures/1.jpg","/assets/img/product/furnitures/2.jpg","/assets/img/product/furnitures/3.jpg","/assets/img/product/furnitures/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"26","sku":"asdf148","name":"Lorem ipsum plant one","price":15.6,"discount":0,"new":false,"rating":4,"saleCount":90,"category":["plant"],"tag":["plant"],"stock":15,"image":["/assets/img/product/plants/1.jpg","/assets/img/product/plants/2.jpg","/assets/img/product/plants/3.jpg","/assets/img/product/plants/4.jpg","/assets/img/product/plants/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"27","sku":"asdf149","name":"Lorem ipsum plant two","price":10.6,"discount":10,"new":true,"rating":5,"saleCount":190,"category":["plant"],"tag":["plant"],"stock":25,"image":["/assets/img/product/plants/2.jpg","/assets/img/product/plants/3.jpg","/assets/img/product/plants/4.jpg","/assets/img/product/plants/5.jpg","/assets/img/product/plants/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"28","sku":"asdf150","name":"Lorem ipsum plant three","price":12.5,"discount":20,"new":true,"rating":3,"saleCount":90,"category":["plant"],"tag":["plant"],"stock":20,"image":["/assets/img/product/plants/3.jpg","/assets/img/product/plants/4.jpg","/assets/img/product/plants/5.jpg","/assets/img/product/plants/6.jpg","/assets/img/product/plants/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"29","sku":"asdf151","name":"Lorem ipsum plant four","price":14.5,"discount":30,"new":false,"rating":4,"saleCount":100,"category":["plant"],"tag":["plant"],"stock":40,"image":["/assets/img/product/plants/4.jpg","/assets/img/product/plants/5.jpg","/assets/img/product/plants/6.jpg","/assets/img/product/plants/7.jpg","/assets/img/product/plants/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"30","sku":"asdf152","name":"Lorem ipsum plant five","price":22.5,"discount":10,"new":true,"rating":5,"saleCount":120,"category":["plant"],"tag":["plant"],"stock":45,"image":["/assets/img/product/plants/5.jpg","/assets/img/product/plants/6.jpg","/assets/img/product/plants/7.jpg","/assets/img/product/plants/8.jpg","/assets/img/product/plants/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"31","sku":"asdf153","name":"Lorem ipsum plant six","price":12.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["plant"],"tag":["plant"],"stock":5,"image":["/assets/img/product/plants/6.jpg","/assets/img/product/plants/7.jpg","/assets/img/product/plants/8.jpg","/assets/img/product/plants/1.jpg","/assets/img/product/plants/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"32","sku":"asdf154","name":"Lorem ipsum plant seven","price":22.5,"discount":20,"new":true,"rating":5,"saleCount":25,"category":["plant"],"tag":["plant"],"stock":7,"image":["/assets/img/product/plants/7.jpg","/assets/img/product/plants/8.jpg","/assets/img/product/plants/1.jpg","/assets/img/product/plants/2.jpg","/assets/img/product/plants/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"33","sku":"asdf155","name":"Lorem ipsum plant eight","price":32.5,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["plant"],"tag":["plant"],"stock":6,"image":["/assets/img/product/plants/8.jpg","/assets/img/product/plants/1.jpg","/assets/img/product/plants/2.jpg","/assets/img/product/plants/3.jpg","/assets/img/product/plants/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"34","sku":"asdf156","name":"Lorem ipsum fruit one","price":15.6,"discount":0,"new":false,"rating":4,"saleCount":90,"category":["organic food"],"tag":["organic food"],"stock":15,"image":["/assets/img/product/fruits/1.jpg","/assets/img/product/fruits/2.jpg","/assets/img/product/fruits/3.jpg","/assets/img/product/fruits/4.jpg","/assets/img/product/fruits/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"35","sku":"asdf157","name":"Lorem ipsum fruit two","price":10.6,"discount":10,"new":true,"rating":5,"saleCount":190,"category":["organic food"],"tag":["organic food"],"stock":25,"image":["/assets/img/product/fruits/2.jpg","/assets/img/product/fruits/3.jpg","/assets/img/product/fruits/4.jpg","/assets/img/product/fruits/5.jpg","/assets/img/product/fruits/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"36","sku":"asdf158","name":"Lorem ipsum fruit three","price":12.5,"discount":20,"new":true,"rating":3,"saleCount":90,"category":["organic food"],"tag":["organic food"],"stock":20,"image":["/assets/img/product/fruits/3.jpg","/assets/img/product/fruits/4.jpg","/assets/img/product/fruits/5.jpg","/assets/img/product/fruits/6.jpg","/assets/img/product/fruits/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"37","sku":"asdf159","name":"Lorem ipsum fruit four","price":14.5,"discount":30,"new":false,"rating":4,"saleCount":100,"category":["organic food"],"tag":["organic food"],"stock":40,"image":["/assets/img/product/fruits/4.jpg","/assets/img/product/fruits/5.jpg","/assets/img/product/fruits/6.jpg","/assets/img/product/fruits/7.jpg","/assets/img/product/fruits/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"38","sku":"asdf160","name":"Lorem ipsum fruit five","price":22.5,"discount":10,"new":true,"rating":5,"saleCount":120,"category":["organic food"],"tag":["organic food"],"stock":45,"image":["/assets/img/product/fruits/5.jpg","/assets/img/product/fruits/6.jpg","/assets/img/product/fruits/7.jpg","/assets/img/product/fruits/8.jpg","/assets/img/product/fruits/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"39","sku":"asdf161","name":"Lorem ipsum fruit six","price":12.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["organic food"],"tag":["organic food"],"stock":5,"image":["/assets/img/product/fruits/6.jpg","/assets/img/product/fruits/7.jpg","/assets/img/product/fruits/8.jpg","/assets/img/product/fruits/1.jpg","/assets/img/product/fruits/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"40","sku":"asdf162","name":"Lorem ipsum fruit seven","price":22.5,"discount":20,"new":true,"rating":5,"saleCount":25,"category":["organic food"],"tag":["organic food"],"stock":7,"image":["/assets/img/product/fruits/7.jpg","/assets/img/product/fruits/8.jpg","/assets/img/product/fruits/1.jpg","/assets/img/product/fruits/2.jpg","/assets/img/product/fruits/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"41","sku":"asdf163","name":"Lorem ipsum fruit eight","price":32.5,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["organic food"],"tag":["organic food"],"stock":6,"image":["/assets/img/product/fruits/8.jpg","/assets/img/product/fruits/1.jpg","/assets/img/product/fruits/2.jpg","/assets/img/product/fruits/3.jpg","/assets/img/product/fruits/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"42","sku":"asdf164","name":"Lorem ipsum lamp","price":12.5,"discount":20,"new":true,"rating":4,"saleCount":15,"category":["electronics"],"tag":["electronics"],"stock":7,"image":["/assets/img/product/electronics/9.jpg","/assets/img/product/electronics/10.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"43","sku":"asdf165","name":"Lorem ipsum headphone","price":16.5,"discount":10,"new":false,"rating":5,"saleCount":5,"category":["electronics"],"tag":["electronics"],"stock":6,"image":["/assets/img/product/electronics/10.jpg","/assets/img/product/electronics/1.jpg","/assets/img/product/electronics/2.jpg","/assets/img/product/electronics/3.jpg","/assets/img/product/electronics/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"44","sku":"asdf166","name":"Lorem ipsum flower one","price":1.5,"discount":20,"new":true,"rating":4,"saleCount":10,"category":["flower"],"tag":["flower"],"stock":6,"image":["/assets/img/product/flowers/1.jpg","/assets/img/product/flowers/2.jpg","/assets/img/product/flowers/3.jpg","/assets/img/product/flowers/4.jpg","/assets/img/product/flowers/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"45","sku":"asdf167","name":"Lorem ipsum flower two","price":6.5,"discount":30,"new":false,"rating":5,"saleCount":5,"category":["flower"],"tag":["flower"],"stock":7,"image":["/assets/img/product/flowers/2.jpg","/assets/img/product/flowers/3.jpg","/assets/img/product/flowers/4.jpg","/assets/img/product/flowers/5.jpg","/assets/img/product/flowers/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"46","sku":"asdf168","name":"Lorem ipsum flower three","price":3.5,"discount":5,"new":true,"rating":4,"saleCount":7,"category":["flower"],"tag":["flower"],"stock":10,"image":["/assets/img/product/flowers/3.jpg","/assets/img/product/flowers/4.jpg","/assets/img/product/flowers/5.jpg","/assets/img/product/flowers/6.jpg","/assets/img/product/flowers/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"47","sku":"asdf169","name":"Lorem ipsum flower four","price":4.5,"discount":20,"new":true,"rating":5,"saleCount":10,"category":["flower"],"tag":["flower"],"stock":6,"image":["/assets/img/product/flowers/4.jpg","/assets/img/product/flowers/5.jpg","/assets/img/product/flowers/6.jpg","/assets/img/product/flowers/7.jpg","/assets/img/product/flowers/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"48","sku":"asdf170","name":"Lorem ipsum flower five","price":7.5,"discount":30,"new":true,"rating":3,"saleCount":4,"category":["flower"],"tag":["flower"],"stock":7,"image":["/assets/img/product/flowers/5.jpg","/assets/img/product/flowers/6.jpg","/assets/img/product/flowers/7.jpg","/assets/img/product/flowers/8.jpg","/assets/img/product/flowers/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"49","sku":"asdf171","name":"Lorem ipsum flower six","price":4.5,"discount":10,"new":false,"rating":5,"saleCount":2,"category":["flower"],"tag":["flower"],"stock":10,"image":["/assets/img/product/flowers/6.jpg","/assets/img/product/flowers/7.jpg","/assets/img/product/flowers/8.jpg","/assets/img/product/flowers/1.jpg","/assets/img/product/flowers/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"50","sku":"asdf172","name":"Lorem ipsum flower seven","price":3.5,"discount":20,"new":true,"rating":5,"saleCount":5,"category":["flower"],"tag":["flower"],"stock":6,"image":["/assets/img/product/flowers/7.jpg","/assets/img/product/flowers/8.jpg","/assets/img/product/flowers/1.jpg","/assets/img/product/flowers/2.jpg","/assets/img/product/flowers/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"51","sku":"asdf173","name":"Lorem ipsum flower eight","price":2.5,"discount":30,"new":true,"rating":5,"saleCount":9,"category":["flower"],"tag":["flower"],"stock":10,"image":["/assets/img/product/flowers/8.jpg","/assets/img/product/flowers/1.jpg","/assets/img/product/flowers/2.jpg","/assets/img/product/flowers/3.jpg","/assets/img/product/flowers/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"52","sku":"asdf174","name":"Lorem ipsum book one","price":6.5,"discount":30,"new":true,"rating":5,"saleCount":10,"category":["book"],"tag":["book"],"stock":20,"image":["/assets/img/product/books/1.jpg","/assets/img/product/books/2.jpg","/assets/img/product/books/3.jpg","/assets/img/product/books/4.jpg","/assets/img/product/books/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"53","sku":"asdf175","name":"Lorem ipsum book two","price":4.2,"discount":0,"new":true,"rating":5,"saleCount":10,"category":["book"],"tag":["book"],"stock":20,"image":["/assets/img/product/books/2.jpg","/assets/img/product/books/3.jpg","/assets/img/product/books/4.jpg","/assets/img/product/books/5.jpg","/assets/img/product/books/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"54","sku":"asdf176","name":"Lorem ipsum book three","price":6.6,"discount":20,"new":true,"rating":3,"saleCount":11,"category":["book"],"tag":["book"],"stock":20,"image":["/assets/img/product/books/3.jpg","/assets/img/product/books/4.jpg","/assets/img/product/books/5.jpg","/assets/img/product/books/6.jpg","/assets/img/product/books/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"55","sku":"asdf177","name":"Lorem ipsum book four","price":7.1,"discount":40,"new":true,"rating":4,"saleCount":19,"category":["book"],"tag":["book"],"stock":40,"image":["/assets/img/product/books/4.jpg","/assets/img/product/books/5.jpg","/assets/img/product/books/6.jpg","/assets/img/product/books/7.jpg","/assets/img/product/books/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"56","sku":"asdf178","name":"Lorem ipsum book five","price":8.6,"discount":30,"new":false,"rating":4,"saleCount":12,"category":["book"],"tag":["book"],"stock":8,"image":["/assets/img/product/books/5.jpg","/assets/img/product/books/6.jpg","/assets/img/product/books/7.jpg","/assets/img/product/books/8.jpg","/assets/img/product/books/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"57","sku":"asdf179","name":"Lorem ipsum book six","price":5.5,"discount":10,"new":true,"rating":4,"saleCount":19,"category":["book"],"tag":["book"],"stock":20,"image":["/assets/img/product/books/6.jpg","/assets/img/product/books/7.jpg","/assets/img/product/books/8.jpg","/assets/img/product/books/1.jpg","/assets/img/product/books/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"58","sku":"asdf180","name":"Lorem ipsum book seven","price":3.2,"discount":20,"new":false,"rating":2,"saleCount":9,"category":["book"],"tag":["book"],"stock":11,"image":["/assets/img/product/books/7.jpg","/assets/img/product/books/8.jpg","/assets/img/product/books/1.jpg","/assets/img/product/books/2.jpg","/assets/img/product/books/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"59","sku":"asdf181","name":"Lorem ipsum book eight","price":8.5,"discount":5,"new":true,"rating":3,"saleCount":19,"category":["book"],"tag":["book"],"stock":30,"image":["/assets/img/product/books/8.jpg","/assets/img/product/books/1.jpg","/assets/img/product/books/2.jpg","/assets/img/product/books/3.jpg","/assets/img/product/books/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"60","sku":"asdf182","name":"Lorem ipsum cosmetics one","price":3.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/1.jpg","/assets/img/product/cosmetics/2.jpg","/assets/img/product/cosmetics/3.jpg","/assets/img/product/cosmetics/4.jpg","/assets/img/product/cosmetics/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"61","sku":"asdf183","name":"Lorem ipsum cosmetics two","price":18.5,"discount":15,"new":false,"rating":5,"saleCount":9,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/2.jpg","/assets/img/product/cosmetics/3.jpg","/assets/img/product/cosmetics/4.jpg","/assets/img/product/cosmetics/5.jpg","/assets/img/product/cosmetics/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"62","sku":"asdf184","name":"Lorem ipsum cosmetics three","price":4.2,"discount":15,"new":true,"rating":5,"saleCount":29,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/3.jpg","/assets/img/product/cosmetics/4.jpg","/assets/img/product/cosmetics/5.jpg","/assets/img/product/cosmetics/6.jpg","/assets/img/product/cosmetics/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"63","sku":"asdf185","name":"Lorem ipsum cosmetics four","price":1.5,"discount":0,"new":false,"rating":4,"saleCount":20,"category":["cosmetics"],"tag":["cosmetics"],"stock":10,"image":["/assets/img/product/cosmetics/4.jpg","/assets/img/product/cosmetics/5.jpg","/assets/img/product/cosmetics/6.jpg","/assets/img/product/cosmetics/7.jpg","/assets/img/product/cosmetics/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"64","sku":"asdf186","name":"Lorem ipsum cosmetics five","price":6.3,"discount":15,"new":true,"rating":5,"saleCount":20,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/5.jpg","/assets/img/product/cosmetics/6.jpg","/assets/img/product/cosmetics/7.jpg","/assets/img/product/cosmetics/8.jpg","/assets/img/product/cosmetics/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"65","sku":"asdf187","name":"Lorem ipsum cosmetics six","price":4.5,"discount":20,"new":false,"rating":2,"saleCount":29,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/6.jpg","/assets/img/product/cosmetics/7.jpg","/assets/img/product/cosmetics/8.jpg","/assets/img/product/cosmetics/1.jpg","/assets/img/product/cosmetics/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"66","sku":"asdf188","name":"Lorem ipsum cosmetics seven","price":7.1,"discount":45,"new":true,"rating":4,"saleCount":10,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/7.jpg","/assets/img/product/cosmetics/8.jpg","/assets/img/product/cosmetics/1.jpg","/assets/img/product/cosmetics/2.jpg","/assets/img/product/cosmetics/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"67","sku":"asdf189","name":"Lorem ipsum cosmetics eight","price":9,"discount":10,"new":false,"rating":4,"saleCount":29,"category":["cosmetics"],"tag":["cosmetics"],"stock":20,"image":["/assets/img/product/cosmetics/8.jpg","/assets/img/product/cosmetics/1.jpg","/assets/img/product/cosmetics/2.jpg","/assets/img/product/cosmetics/3.jpg","/assets/img/product/cosmetics/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"68","sku":"asdf190","name":"Lorem ipsum accessories one","price":3.1,"discount":10,"new":true,"rating":4,"saleCount":29,"category":["accessories"],"tag":["accessories"],"stock":20,"image":["/assets/img/product/accessories/1.jpg","/assets/img/product/accessories/2.jpg","/assets/img/product/accessories/3.jpg","/assets/img/product/accessories/4.jpg","/assets/img/product/accessories/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"69","sku":"asdf191","name":"Lorem ipsum accessories two","price":12.43,"discount":20,"new":false,"rating":5,"saleCount":19,"category":["accessories"],"tag":["accessories"],"stock":30,"image":["/assets/img/product/accessories/2.jpg","/assets/img/product/accessories/3.jpg","/assets/img/product/accessories/4.jpg","/assets/img/product/accessories/5.jpg","/assets/img/product/accessories/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"70","sku":"asdf192","name":"Lorem ipsum accessories three","price":12.5,"discount":0,"new":true,"rating":5,"saleCount":30,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/3.jpg","/assets/img/product/accessories/4.jpg","/assets/img/product/accessories/5.jpg","/assets/img/product/accessories/6.jpg","/assets/img/product/accessories/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"71","sku":"asdf193","name":"Lorem ipsum accessories four","price":19.33,"discount":20,"new":false,"rating":5,"saleCount":20,"category":["accessories"],"tag":["accessories"],"stock":30,"image":["/assets/img/product/accessories/4.jpg","/assets/img/product/accessories/5.jpg","/assets/img/product/accessories/6.jpg","/assets/img/product/accessories/7.jpg","/assets/img/product/accessories/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"72","sku":"asdf194","name":"Lorem ipsum accessories five","price":12.35,"discount":20,"new":true,"rating":5,"saleCount":20,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/5.jpg","/assets/img/product/accessories/6.jpg","/assets/img/product/accessories/7.jpg","/assets/img/product/accessories/8.jpg","/assets/img/product/accessories/9.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"73","sku":"asdf195","name":"Lorem ipsum accessories six","price":12.45,"discount":20,"new":true,"rating":5,"saleCount":19,"category":["accessories"],"tag":["accessories"],"stock":30,"image":["/assets/img/product/accessories/6.jpg","/assets/img/product/accessories/7.jpg","/assets/img/product/accessories/8.jpg","/assets/img/product/accessories/9.jpg","/assets/img/product/accessories/10.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"74","sku":"asdf196","name":"Lorem ipsum accessories seven","price":2.43,"discount":10,"new":true,"rating":5,"saleCount":15,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/7.jpg","/assets/img/product/accessories/8.jpg","/assets/img/product/accessories/9.jpg","/assets/img/product/accessories/10.jpg","/assets/img/product/accessories/11.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"75","sku":"asdf197","name":"Lorem ipsum accessories eight","price":13.4,"discount":30,"new":true,"rating":5,"saleCount":2,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/8.jpg","/assets/img/product/accessories/9.jpg","/assets/img/product/accessories/10.jpg","/assets/img/product/accessories/11.jpg","/assets/img/product/accessories/12.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"76","sku":"asdf198","name":"Lorem ipsum accessories nine","price":5.24,"discount":30,"new":true,"rating":5,"saleCount":34,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/9.jpg","/assets/img/product/accessories/10.jpg","/assets/img/product/accessories/11.jpg","/assets/img/product/accessories/12.jpg","/assets/img/product/accessories/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"77","sku":"asdf199","name":"Lorem ipsum accessories ten","price":2.2,"discount":0,"new":true,"rating":5,"saleCount":19,"category":["accessories"],"tag":["accessories"],"stock":30,"image":["/assets/img/product/accessories/10.jpg","/assets/img/product/accessories/11.jpg","/assets/img/product/accessories/12.jpg","/assets/img/product/accessories/1.jpg","/assets/img/product/accessories/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"78","sku":"asdf200","name":"Lorem ipsum accessories eleven","price":12.65,"discount":20,"new":true,"rating":4,"saleCount":20,"category":["accessories"],"tag":["accessories"],"stock":23,"image":["/assets/img/product/accessories/11.jpg","/assets/img/product/accessories/12.jpg","/assets/img/product/accessories/1.jpg","/assets/img/product/accessories/2.jpg","/assets/img/product/accessories/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"79","sku":"asdf201","name":"Lorem ipsum accessories twelve","price":9.52,"discount":0,"new":true,"rating":5,"saleCount":19,"category":["accessories"],"tag":["accessories"],"stock":10,"image":["/assets/img/product/accessories/12.jpg","/assets/img/product/accessories/1.jpg","/assets/img/product/accessories/2.jpg","/assets/img/product/accessories/3.jpg","/assets/img/product/accessories/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"80","sku":"asdf202","name":"Lorem ipsum handmade one","price":19,"discount":10,"new":true,"rating":4,"saleCount":19,"category":["handmade"],"tag":["handmade"],"stock":10,"image":["/assets/img/product/handmade/1.jpg","/assets/img/product/handmade/2.jpg","/assets/img/product/handmade/3.jpg","/assets/img/product/handmade/4.jpg","/assets/img/product/handmade/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"81","sku":"asdf203","name":"Lorem ipsum handmade two","price":12,"discount":50,"new":false,"rating":4,"saleCount":15,"category":["handmade"],"tag":["handmade"],"stock":7,"image":["/assets/img/product/handmade/2.jpg","/assets/img/product/handmade/3.jpg","/assets/img/product/handmade/4.jpg","/assets/img/product/handmade/5.jpg","/assets/img/product/handmade/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"82","sku":"asdf204","name":"Lorem ipsum handmade three","price":5.52,"discount":10,"new":true,"rating":5,"saleCount":12,"category":["handmade"],"tag":["handmade"],"stock":6,"image":["/assets/img/product/handmade/3.jpg","/assets/img/product/handmade/4.jpg","/assets/img/product/handmade/5.jpg","/assets/img/product/handmade/6.jpg","/assets/img/product/handmade/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"83","sku":"asdf205","name":"Lorem ipsum handmade four","price":2.13,"discount":0,"new":true,"rating":3,"saleCount":14,"category":["handmade"],"tag":["handmade"],"stock":12,"image":["/assets/img/product/handmade/4.jpg","/assets/img/product/handmade/5.jpg","/assets/img/product/handmade/6.jpg","/assets/img/product/handmade/7.jpg","/assets/img/product/handmade/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"84","sku":"asdf206","name":"Lorem ipsum handmade five","price":12.9,"discount":40,"new":false,"rating":3,"saleCount":13,"category":["handmade"],"tag":["handmade"],"stock":8,"image":["/assets/img/product/handmade/5.jpg","/assets/img/product/handmade/6.jpg","/assets/img/product/handmade/7.jpg","/assets/img/product/handmade/8.jpg","/assets/img/product/handmade/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"85","sku":"asdf207","name":"Lorem ipsum handmade six","price":3.78,"discount":20,"new":true,"rating":5,"saleCount":17,"category":["handmade"],"tag":["handmade"],"stock":5,"image":["/assets/img/product/handmade/6.jpg","/assets/img/product/handmade/7.jpg","/assets/img/product/handmade/8.jpg","/assets/img/product/handmade/1.jpg","/assets/img/product/handmade/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"86","sku":"asdf208","name":"Lorem ipsum handmade seven","price":2.52,"discount":10,"new":true,"rating":4,"saleCount":18,"category":["handmade"],"tag":["handmade"],"stock":5,"image":["/assets/img/product/handmade/7.jpg","/assets/img/product/handmade/8.jpg","/assets/img/product/handmade/1.jpg","/assets/img/product/handmade/2.jpg","/assets/img/product/handmade/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"87","sku":"asdf209","name":"Lorem ipsum handmade eight","price":6.4,"discount":0,"new":true,"rating":5,"saleCount":20,"category":["handmade"],"tag":["handmade"],"stock":10,"image":["/assets/img/product/handmade/8.jpg","/assets/img/product/handmade/1.jpg","/assets/img/product/handmade/2.jpg","/assets/img/product/handmade/3.jpg","/assets/img/product/handmade/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"88","sku":"asdf210","name":"Lorem ipsum kids one","price":12.45,"discount":10,"offerEnd":"October 5, 2020 12:11:00","new":false,"rating":4,"saleCount":54,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"white","image":"/assets/img/product/fashion/23.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/24.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/25.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/23.jpg","/assets/img/product/fashion/24.jpg","/assets/img/product/fashion/25.jpg","/assets/img/product/fashion/26.jpg","/assets/img/product/fashion/27.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"89","sku":"asdf211","name":"Lorem ipsum kids two","price":18.5,"discount":15,"new":false,"rating":3,"saleCount":12,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/24.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/25.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/26.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/24.jpg","/assets/img/product/fashion/25.jpg","/assets/img/product/fashion/26.jpg","/assets/img/product/fashion/27.jpg","/assets/img/product/fashion/28.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"90","sku":"asdf212","name":"Lorem ipsum kids three","price":17.45,"discount":40,"offerEnd":"October 2, 2020 12:11:00","new":true,"rating":5,"saleCount":36,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"white","image":"/assets/img/product/fashion/25.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/26.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/27.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/25.jpg","/assets/img/product/fashion/26.jpg","/assets/img/product/fashion/27.jpg","/assets/img/product/fashion/28.jpg","/assets/img/product/fashion/29.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"91","sku":"asdf213","name":"Lorem ipsum kids four","price":15.5,"discount":0,"new":true,"rating":4,"saleCount":20,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/26.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/27.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/28.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/26.jpg","/assets/img/product/fashion/27.jpg","/assets/img/product/fashion/28.jpg","/assets/img/product/fashion/29.jpg","/assets/img/product/fashion/30.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"92","sku":"asdf214","name":"Lorem ipsum kids five","price":25.5,"discount":10,"new":true,"rating":5,"saleCount":25,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/27.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/28.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/29.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/27.jpg","/assets/img/product/fashion/28.jpg","/assets/img/product/fashion/29.jpg","/assets/img/product/fashion/30.jpg","/assets/img/product/fashion/23.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"93","sku":"asdf215","name":"Lorem ipsum kids six","price":19.85,"discount":0,"offerEnd":"October 17, 2020 12:11:00","new":true,"rating":5,"saleCount":65,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"white","image":"/assets/img/product/fashion/28.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":2},{"name":"xl","stock":5}]},{"color":"black","image":"/assets/img/product/fashion/29.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":7},{"name":"xl","stock":9},{"name":"xxl","stock":1}]},{"color":"brown","image":"/assets/img/product/fashion/30.jpg","size":[{"name":"x","stock":1},{"name":"m","stock":2},{"name":"xl","stock":4},{"name":"xxl","stock":0}]}],"image":["/assets/img/product/fashion/28.jpg","/assets/img/product/fashion/29.jpg","/assets/img/product/fashion/30.jpg","/assets/img/product/fashion/23.jpg","/assets/img/product/fashion/24.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"94","sku":"asdf216","name":"Lorem ipsum kids seven","price":55.5,"discount":40,"new":true,"rating":5,"saleCount":55,"category":["fashion","kids"],"tag":["fashion","kids"],"variation":[{"color":"blue","image":"/assets/img/product/fashion/29.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":6},{"name":"xl","stock":7}]},{"color":"brown","image":"/assets/img/product/fashion/30.jpg","size":[{"name":"x","stock":4},{"name":"m","stock":8},{"name":"xl","stock":3},{"name":"xxl","stock":7}]},{"color":"black","image":"/assets/img/product/fashion/23.jpg","size":[{"name":"x","stock":3},{"name":"m","stock":7},{"name":"xl","stock":0},{"name":"xxl","stock":7}]}],"image":["/assets/img/product/fashion/29.jpg","/assets/img/product/fashion/30.jpg","/assets/img/product/fashion/23.jpg","/assets/img/product/fashion/24.jpg","/assets/img/product/fashion/25.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"95","sku":"asdf217","name":"Lorem ipsum kids eight","price":29.85,"discount":10,"offerEnd":"October 18, 2020 12:11:00","new":false,"rating":5,"saleCount":83,"category":["fashion","kids"],"tag":["fashion","kids"],"stock":0,"image":["/assets/img/product/fashion/30.jpg","/assets/img/product/fashion/23.jpg","/assets/img/product/fashion/24.jpg","/assets/img/product/fashion/25.jpg","/assets/img/product/fashion/26.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"},{"id":"96","sku":"asdf218","name":"Lorem ipsum auto part one","price":16.4,"discount":10,"new":true,"rating":5,"saleCount":20,"category":["auto parts"],"tag":["auto parts"],"stock":15,"image":["/assets/img/product/auto-parts/1.jpg","/assets/img/product/auto-parts/2.jpg","/assets/img/product/auto-parts/3.jpg","/assets/img/product/auto-parts/4.jpg","/assets/img/product/auto-parts/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"97","sku":"asdf219","name":"Lorem ipsum auto part two","price":26.5,"discount":0,"new":false,"rating":4,"saleCount":10,"category":["auto parts"],"tag":["auto parts"],"stock":10,"image":["/assets/img/product/auto-parts/2.jpg","/assets/img/product/auto-parts/3.jpg","/assets/img/product/auto-parts/4.jpg","/assets/img/product/auto-parts/1.jpg","/assets/img/product/auto-parts/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"98","sku":"asdf220","name":"Lorem ipsum auto part three","price":14.2,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["auto parts"],"tag":["auto parts"],"stock":13,"image":["/assets/img/product/auto-parts/3.jpg","/assets/img/product/auto-parts/4.jpg","/assets/img/product/auto-parts/1.jpg","/assets/img/product/auto-parts/2.jpg","/assets/img/product/auto-parts/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"99","sku":"asdf221","name":"Lorem ipsum auto part four","price":6.4,"discount":0,"new":false,"rating":2,"saleCount":10,"category":["auto parts"],"tag":["auto parts"],"stock":5,"image":["/assets/img/product/auto-parts/4.jpg","/assets/img/product/auto-parts/1.jpg","/assets/img/product/auto-parts/2.jpg","/assets/img/product/auto-parts/3.jpg","/assets/img/product/auto-parts/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"100","sku":"asdf222","name":"Lorem ipsum cake one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["cakes"],"tag":["cakes"],"stock":20,"image":["/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"101","sku":"asdf223","name":"Lorem ipsum cake two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["cakes"],"tag":["cakes"],"stock":25,"image":["/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"102","sku":"asdf224","name":"Lorem ipsum cake three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":10,"image":["/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"103","sku":"asdf225","name":"Lorem ipsum cake four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["cakes"],"tag":["cakes"],"stock":10,"image":["/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"104","sku":"asdf226","name":"Lorem ipsum cake five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":40,"image":["/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"105","sku":"asdf227","name":"Lorem ipsum cake six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":25,"image":["/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"106","sku":"asdf228","name":"Lorem ipsum cake seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cakes"],"tag":["cakes"],"stock":40,"image":["/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"107","sku":"asdf229","name":"Lorem ipsum cake eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cakes"],"tag":["cakes"],"stock":60,"image":["/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"108","sku":"asdf222","name":"Lorem ipsum cake one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["cakes"],"tag":["cakes"],"stock":20,"image":["/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"109","sku":"asdf223","name":"Lorem ipsum cake two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["cakes"],"tag":["cakes"],"stock":25,"image":["/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"110","sku":"asdf224","name":"Lorem ipsum cake three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":10,"image":["/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"111","sku":"asdf225","name":"Lorem ipsum cake four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["cakes"],"tag":["cakes"],"stock":10,"image":["/assets/img/product/cake-shop/4.jpg","/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"112","sku":"asdf226","name":"Lorem ipsum cake five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":40,"image":["/assets/img/product/cake-shop/5.jpg","/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"113","sku":"asdf227","name":"Lorem ipsum cake six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["cakes"],"tag":["cakes"],"stock":25,"image":["/assets/img/product/cake-shop/6.jpg","/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"114","sku":"asdf228","name":"Lorem ipsum cake seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cakes"],"tag":["cakes"],"stock":40,"image":["/assets/img/product/cake-shop/7.jpg","/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"115","sku":"asdf229","name":"Lorem ipsum cake eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["cakes"],"tag":["cakes"],"stock":60,"image":["/assets/img/product/cake-shop/8.jpg","/assets/img/product/cake-shop/1.jpg","/assets/img/product/cake-shop/2.jpg","/assets/img/product/cake-shop/3.jpg","/assets/img/product/cake-shop/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"116","sku":"asdf230","name":"Lorem ipsum pet food one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["pet food"],"tag":["pet food"],"stock":20,"image":["/assets/img/product/pet-food/1.jpg","/assets/img/product/pet-food/2.jpg","/assets/img/product/pet-food/3.jpg","/assets/img/product/pet-food/4.jpg","/assets/img/product/pet-food/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"117","sku":"asdf231","name":"Lorem ipsum pet food two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["pet food"],"tag":["pet food"],"stock":25,"image":["/assets/img/product/pet-food/2.jpg","/assets/img/product/pet-food/3.jpg","/assets/img/product/pet-food/4.jpg","/assets/img/product/pet-food/5.jpg","/assets/img/product/pet-food/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"118","sku":"asdf232","name":"Lorem ipsum pet food three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["pet food"],"tag":["pet food"],"stock":10,"image":["/assets/img/product/pet-food/3.jpg","/assets/img/product/pet-food/4.jpg","/assets/img/product/pet-food/5.jpg","/assets/img/product/pet-food/6.jpg","/assets/img/product/pet-food/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"119","sku":"asdf233","name":"Lorem ipsum pet food four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["pet food"],"tag":["pet food"],"stock":10,"image":["/assets/img/product/pet-food/4.jpg","/assets/img/product/pet-food/5.jpg","/assets/img/product/pet-food/6.jpg","/assets/img/product/pet-food/7.jpg","/assets/img/product/pet-food/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"120","sku":"asdf234","name":"Lorem ipsum pet food five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["pet food"],"tag":["pet food"],"stock":40,"image":["/assets/img/product/pet-food/5.jpg","/assets/img/product/pet-food/6.jpg","/assets/img/product/pet-food/7.jpg","/assets/img/product/pet-food/8.jpg","/assets/img/product/pet-food/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"121","sku":"asdf235","name":"Lorem ipsum pet food six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["pet food"],"tag":["pet food"],"stock":25,"image":["/assets/img/product/pet-food/6.jpg","/assets/img/product/pet-food/7.jpg","/assets/img/product/pet-food/8.jpg","/assets/img/product/pet-food/1.jpg","/assets/img/product/pet-food/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"122","sku":"asdf236","name":"Lorem ipsum pet food seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["pet food"],"tag":["pet food"],"stock":40,"image":["/assets/img/product/pet-food/7.jpg","/assets/img/product/pet-food/8.jpg","/assets/img/product/pet-food/1.jpg","/assets/img/product/pet-food/2.jpg","/assets/img/product/pet-food/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"123","sku":"asdf237","name":"Lorem ipsum pet food eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["pet food"],"tag":["pet food"],"stock":60,"image":["/assets/img/product/pet-food/8.jpg","/assets/img/product/pet-food/1.jpg","/assets/img/product/pet-food/2.jpg","/assets/img/product/pet-food/3.jpg","/assets/img/product/pet-food/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"124","sku":"asdf238","name":"Lorem ipsum medical one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["medical"],"tag":["medical"],"stock":20,"image":["/assets/img/product/medical/1.jpg","/assets/img/product/medical/2.jpg","/assets/img/product/medical/3.jpg","/assets/img/product/medical/4.jpg","/assets/img/product/medical/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"125","sku":"asdf239","name":"Lorem ipsum medical two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["medical"],"tag":["medical"],"stock":25,"image":["/assets/img/product/medical/2.jpg","/assets/img/product/medical/3.jpg","/assets/img/product/medical/4.jpg","/assets/img/product/medical/5.jpg","/assets/img/product/medical/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"126","sku":"asdf240","name":"Lorem ipsum medical three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["medical"],"tag":["medical"],"stock":10,"image":["/assets/img/product/medical/3.jpg","/assets/img/product/medical/4.jpg","/assets/img/product/medical/5.jpg","/assets/img/product/medical/6.jpg","/assets/img/product/medical/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"127","sku":"asdf241","name":"Lorem ipsum medical four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["medical"],"tag":["medical"],"stock":10,"image":["/assets/img/product/medical/4.jpg","/assets/img/product/medical/5.jpg","/assets/img/product/medical/6.jpg","/assets/img/product/medical/7.jpg","/assets/img/product/medical/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"128","sku":"asdf242","name":"Lorem ipsum medical five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["medical"],"tag":["medical"],"stock":40,"image":["/assets/img/product/medical/5.jpg","/assets/img/product/medical/6.jpg","/assets/img/product/medical/7.jpg","/assets/img/product/medical/8.jpg","/assets/img/product/medical/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"129","sku":"asdf243","name":"Lorem ipsum medical six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["medical"],"tag":["medical"],"stock":25,"image":["/assets/img/product/medical/6.jpg","/assets/img/product/medical/7.jpg","/assets/img/product/medical/8.jpg","/assets/img/product/medical/1.jpg","/assets/img/product/medical/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"130","sku":"asdf244","name":"Lorem ipsum medical seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["medical"],"tag":["medical"],"stock":40,"image":["/assets/img/product/medical/7.jpg","/assets/img/product/medical/8.jpg","/assets/img/product/medical/1.jpg","/assets/img/product/medical/2.jpg","/assets/img/product/medical/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"131","sku":"asdf245","name":"Lorem ipsum medical eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["medical"],"tag":["medical"],"stock":60,"image":["/assets/img/product/medical/8.jpg","/assets/img/product/medical/1.jpg","/assets/img/product/medical/2.jpg","/assets/img/product/medical/3.jpg","/assets/img/product/medical/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"132","sku":"asdf246","name":"Lorem ipsum black one","price":6.4,"discount":0,"new":false,"rating":5,"saleCount":10,"category":["black friday"],"tag":["black friday"],"stock":20,"image":["/assets/img/product/black-friday/1.jpg","/assets/img/product/black-friday/2.jpg","/assets/img/product/black-friday/3.jpg","/assets/img/product/black-friday/4.jpg","/assets/img/product/black-friday/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"133","sku":"asdf247","name":"Lorem ipsum black two","price":3,"discount":10,"new":true,"rating":4,"saleCount":15,"category":["black friday"],"tag":["black friday"],"stock":25,"image":["/assets/img/product/black-friday/2.jpg","/assets/img/product/black-friday/3.jpg","/assets/img/product/black-friday/4.jpg","/assets/img/product/black-friday/5.jpg","/assets/img/product/black-friday/6.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"134","sku":"asdf248","name":"Lorem ipsum black three","price":2.4,"discount":10,"new":false,"rating":5,"saleCount":30,"category":["black friday"],"tag":["black friday"],"stock":10,"image":["/assets/img/product/black-friday/3.jpg","/assets/img/product/black-friday/4.jpg","/assets/img/product/black-friday/5.jpg","/assets/img/product/black-friday/6.jpg","/assets/img/product/black-friday/7.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"135","sku":"asdf249","name":"Lorem ipsum black four","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["black friday"],"tag":["black friday"],"stock":10,"image":["/assets/img/product/black-friday/4.jpg","/assets/img/product/black-friday/5.jpg","/assets/img/product/black-friday/6.jpg","/assets/img/product/black-friday/7.jpg","/assets/img/product/black-friday/8.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"136","sku":"asdf250","name":"Lorem ipsum black five","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["black friday"],"tag":["black friday"],"stock":40,"image":["/assets/img/product/black-friday/5.jpg","/assets/img/product/black-friday/6.jpg","/assets/img/product/black-friday/7.jpg","/assets/img/product/black-friday/8.jpg","/assets/img/product/black-friday/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"137","sku":"asdf251","name":"Lorem ipsum black six","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["black friday"],"tag":["black friday"],"stock":25,"image":["/assets/img/product/black-friday/6.jpg","/assets/img/product/black-friday/7.jpg","/assets/img/product/black-friday/8.jpg","/assets/img/product/black-friday/1.jpg","/assets/img/product/black-friday/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"138","sku":"asdf252","name":"Lorem ipsum black seven","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["black friday"],"tag":["black friday"],"stock":40,"image":["/assets/img/product/black-friday/7.jpg","/assets/img/product/black-friday/8.jpg","/assets/img/product/black-friday/1.jpg","/assets/img/product/black-friday/2.jpg","/assets/img/product/black-friday/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"139","sku":"asdf253","name":"Lorem ipsum black eight","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["black friday"],"tag":["black friday"],"stock":60,"image":["/assets/img/product/black-friday/8.jpg","/assets/img/product/black-friday/1.jpg","/assets/img/product/black-friday/2.jpg","/assets/img/product/black-friday/3.jpg","/assets/img/product/black-friday/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"140","sku":"asdf249","name":"Lorem ipsum christmas one","price":3.5,"discount":10,"new":true,"rating":4,"saleCount":14,"category":["christmas"],"tag":["christmas"],"stock":10,"image":["/assets/img/product/christmas/1.jpg","/assets/img/product/christmas/2.jpg","/assets/img/product/christmas/3.jpg","/assets/img/product/christmas/4.jpg","/assets/img/product/christmas/5.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"141","sku":"asdf250","name":"Lorem ipsum christmas two","price":4.2,"discount":0,"new":false,"rating":5,"saleCount":30,"category":["christmas"],"tag":["christmas"],"stock":40,"image":["/assets/img/product/christmas/2.jpg","/assets/img/product/christmas/3.jpg","/assets/img/product/christmas/4.jpg","/assets/img/product/christmas/5.jpg","/assets/img/product/christmas/1.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"142","sku":"asdf251","name":"Lorem ipsum christmas three","price":5.7,"discount":30,"new":true,"rating":3,"saleCount":30,"category":["christmas"],"tag":["christmas"],"stock":25,"image":["/assets/img/product/christmas/3.jpg","/assets/img/product/christmas/4.jpg","/assets/img/product/christmas/5.jpg","/assets/img/product/christmas/1.jpg","/assets/img/product/christmas/2.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"143","sku":"asdf252","name":"Lorem ipsum christmas four","price":6.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["christmas"],"tag":["christmas"],"stock":40,"image":["/assets/img/product/christmas/4.jpg","/assets/img/product/christmas/5.jpg","/assets/img/product/christmas/1.jpg","/assets/img/product/christmas/2.jpg","/assets/img/product/christmas/3.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."},{"id":"144","sku":"asdf253","name":"Lorem ipsum christmas five","price":4.5,"discount":10,"new":true,"rating":3,"saleCount":20,"category":["christmas"],"tag":["christmas"],"stock":60,"image":["/assets/img/product/christmas/5.jpg","/assets/img/product/christmas/1.jpg","/assets/img/product/christmas/2.jpg","/assets/img/product/christmas/3.jpg","/assets/img/product/christmas/4.jpg"],"shortDescription":"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.","fullDescription":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."}]'
      );
    },
    336: function (e, t, a) {
      e.exports = a.p + "static/media/instagram.e211fe8a.png";
    },
    348: function (e, t, a) {
      e.exports = a(666);
    },
    59: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      }),
        a.d(t, "b", function () {
          return o;
        }),
        a.d(t, "e", function () {
          return u;
        }),
        a.d(t, "d", function () {
          return r;
        }),
        a.d(t, "f", function () {
          return n;
        }),
        a.d(t, "c", function () {
          return c;
        }),
        a.d(t, "g", function () {
          return m;
        }),
        a.d(t, "h", function () {
          return l;
        }),
        a.d(t, "j", function () {
          return p;
        }),
        a.d(t, "i", function () {
          return d;
        });
      var i = a(13),
        s = "ADD_TO_CART",
        o = "DECREASE_QUANTITY",
        u = "DELETE_FROM_CART",
        r = "DELETE_ALL_FROM_CART",
        n = "INCREMENT",
        c = "DECREMENT",
        m = function (e, t, a, o, u) {
          return function (r) {
            t && t("Added To Cart", { appearance: "success", autoDismiss: !0 }),
              r({
                type: s,
                payload: Object(i.a)(
                  Object(i.a)({}, e),
                  {},
                  {
                    quantity: a,
                    selectedProductColor:
                      o || (e.colorName ? e.colorName : null),
                    selectedProductSize:
                      u || (e.colorName ? e.colorName : null),
                  }
                ),
              });
          };
        },
        l = function (e, t) {
          return function (a) {
            t &&
              t("Item Decremented From Cart", {
                appearance: "warning",
                autoDismiss: !0,
              }),
              a({ type: o, payload: e });
          };
        },
        p = function (e, t) {
          return function (a) {
            t &&
              t("Removed From Cart", { appearance: "error", autoDismiss: !0 }),
              a({ type: u, payload: e });
          };
        },
        d = function (e) {
          return function (t) {
            e &&
              e("Removed All From Cart", {
                appearance: "error",
                autoDismiss: !0,
              }),
              t({ type: r });
          };
        };
    },
    620: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a(22),
        s = a(0),
        o = a.n(s),
        u = a(118),
        r = a(339),
        n = a(340),
        c = a(341),
        m = a(209),
        l = a.n(m),
        p = (a(215), a(95)),
        d = a.n(p),
        g = a(26),
        h = a(23),
        q = function () {
          var e = Object(s.useState)({}),
            t = Object(i.a)(e, 2),
            a = t[0],
            m = t[1],
            p = Object(h.useParams)();
          return (
            Object(s.useEffect)(
              function () {
                g.a
                  .get("/admin/getonePages/".concat(p.id))
                  .then(function (e) {
                    console.log(e.data.data), m(e.data.data);
                  })
                  .catch(function (e) {
                    console.log(e);
                  }),
                  console.log("object");
              },
              [p]
            ),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(
                u.a,
                { headerTop: "visible" },
                o.a.createElement(
                  "section",
                  { className: "pt-0 pb-0" },
                  o.a.createElement(
                    "div",
                    {
                      className: "",
                      style: {
                        float: "left",
                        width: "100%",
                        backgroundColor: "#272727",
                        position: "relative",
                        backgroundAttachment: "fixed",
                        backgroundSize: "cover",
                        color: "#ffffff",
                        padding: " 50px 0px 50px 0px",
                        backgroundImage: "url(".concat(l.a, ")"),
                        backgroundPosition: "center center",
                        backgroundRepeat: " no-repeat",
                        textAlign: "center",
                      },
                    },
                    o.a.createElement(
                      r.a,
                      null,
                      o.a.createElement(
                        n.a,
                        null,
                        o.a.createElement(
                          c.a,
                          { md: "12" },
                          o.a.createElement(
                            "div",
                            { className: "leftcont text-left mt-3" },
                            o.a.createElement(
                              "h1",
                              null,
                              null === a || void 0 === a ? void 0 : a.pageName
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                o.a.createElement(
                  "section",
                  null,
                  o.a.createElement(
                    r.a,
                    null,
                    o.a.createElement(
                      n.a,
                      { className: "mb-40 othermain" },
                      o.a.createElement(
                        c.a,
                        { className: "othersubmain", lg: "12" },
                        o.a.createElement(
                          "p",
                          null,
                          d()(null === a || void 0 === a ? void 0 : a.desc)
                        ),
                        o.a.createElement("br", null)
                      )
                    )
                  )
                )
              )
            )
          );
        };
      (q.defaultProps = {}), (t.default = q);
    },
    645: function (e, t) {},
    663: function (e) {
      e.exports = JSON.parse(
        '{"home":"Home","home_group_one":"Home Group One","home_group_two":"Home Group Two","home_group_three":"Home Group Three","home_fashion":"Home Fashion","home_fashion_two":"Home Fashion Two","home_fashion_three":"Home Fashion Three","home_fashion_four":"Home Fashion Four","home_fashion_five":"Home Fashion Five","home_fashion_six":"Home Fashion Six","home_fashion_seven":"Home Fashion Seven","home_fashion_eight":"Home Fashion Eight","home_kids_fashion":"Home Kids Fashion","home_cosmetics":"Home Cosmetics","home_furniture":"Home Furniture","home_furniture_two":"Home Furniture Two","home_furniture_three":"Home Furniture Three","home_furniture_four":"Home Furniture Four","home_furniture_five":"Home Furniture Five","home_furniture_six":"Home Furniture Six","home_furniture_seven":"Home Furniture Seven","home_electronics":"Home Electronics","home_electronics_two":"Home Electronics Two","home_electronics_three":"Home Electronics Three","home_book_store":"Home Book Store","home_book_store_two":"Home Book Store Two","home_plants":"Home Plants","home_flower_shop":"Home Flower Shop","home_flower_shop_two":"Home Flower Shop Two","home_organic_food":"Home Organic Food","home_organic_food_two":"Home Organic Food Two","home_onepage_scroll":"Home Onepage Scroll","home_grid_banner":"Home Grid Banner","home_auto_parts":"Home Auto Parts","home_cake_shop":"Home Cake Shop","home_handmade":"Home Handmade","home_pet_food":"Home Pet Food","home_medical_equipment":"Home Medical Equipment","home_christmas":"Home Christmas","home_black_friday":"Home Black Friday","home_black_friday_two":"Home Black Friday Two","home_valentines_day":"Home Valentines Day","shop":"Shop","shop_layout":"Shop Layout","shop_grid_standard":"Shop Grid Standard","shop_grid_filter":"Shop Grid Filter","shop_grid_two_column":"Shop Grid Two Column","shop_grid_no_sidebar":"Shop Grid No Sidebar","shop_grid_full_width":"Shop Grid Full Width","shop_grid_right_sidebar":"Shop Grid Right Sidebar","shop_list_standard":"Shop List Standard","shop_list_full_width":"Shop List Full Width","shop_list_two_column":"Shop List Two Column","products":"Products","product_details":"Product Details","product_tab_bottom":"Product Tab Bottom","product_tab_left":"Product Tab Left","product_tab_right":"Product Tab Right","product_sticky":"Product Sticky","product_slider":"Product Slider","product_fixed_image":"Product Fixed Image","product_simple":"Product Simple","product_variation":"Product Variation","product_affiliate":"Product Affiliate","collection":"Collection","pages":"Pages","cart":"Cart","checkout":"Checkout","wishlist":"Wishlist","compare":"Compare","my_account":"My Account","login_register":"Login / Register","about_us":"About Us","contact_us":"Contact Us","404_page":"404 Page","blog":"Blog","blog_standard":"Blog Standard","blog_no_sidebar":"Blog No Sidebar","blog_right_sidebar":"Blog Right Sidebar","blog_details_standard":"Blog Details Standard","blog_details_video":"Blog Details Video","blog_details_slider":"Blog Details Slider"}'
      );
    },
    664: function (e) {
      e.exports = JSON.parse(
        '{"home":"Accueil","home_group_one":"Home Group One","home_group_two":"Groupe de maison deux","home_group_three":"Groupe d\'accueil 3","home_fashion":"Mode maison","home_fashion_two":"Mode maison deux","home_fashion_three":"Accueil Mode Trois","home_fashion_four":"Accueil Fashion Four","home_fashion_five":"Accueil Fashion Five","home_fashion_six":"Accueil Fashion Six","home_fashion_seven":"Accueil Fashion Seven","home_fashion_eight":"Accueil Fashion Eight","home_kids_fashion":"Accueil Mode Enfants","home_cosmetics":"Cosm\xe9tiques \xe0 la maison","home_furniture":"Meubles de maison","home_furniture_two":"Meubles de maison deux","home_furniture_three":"Meubles de maison trois","home_furniture_four":"Meubles de maison four","home_furniture_five":"Meubles de maison five","home_furniture_six":"Meubles de maison six","home_furniture_seven":"Meubles de maison seven","home_electronics":"Electronique domestique","home_electronics_two":"\xc9lectronique grand Two","home_electronics_three":"\xc9lectronique grand Three","home_book_store":"Accueil librairie","home_book_store_two":"Accueil librairie two","home_plants":"Plantes d\'int\xe9rieur","home_flower_shop":"Maison Fleuriste","home_flower_shop_two":"Maison Fleuriste two","home_organic_food":"Accueil biologiques","home_organic_food_two":"Accueil Alimentation Deux","home_onepage_scroll":"Accueil Onepage Scroll","home_grid_banner":"Accueil Grid Banner","home_auto_parts":"Accueil automobiles","home_cake_shop":"Accueil P\xe2tisserie","home_handmade":"Maison \xe0 la main","home_pet_food":"Accueil pour animaux","home_medical_equipment":"\xe9quipement m\xe9dical \xe0 domicile","home_christmas":"Maison Christmas","home_black_friday":"Maison Black Friday","home_black_friday_two":"Maison Black Friday Two","home_valentines_day":"Maison Valentines Day","shop":"Boutique","shop_layout":"Disposition de magasin","shop_grid_standard":"Boutique Grid Standard","shop_grid_filter":"Filtre de grille d\'achat","shop_grid_two_column":"Boutique Grille Colonnes","shop_grid_no_sidebar":"Boutique Grid No Sidebar","shop_grid_full_width":"Grille de magasin largeur","shop_grid_right_sidebar":"Shop Grid Right lat\xe9rale","shop_list_standard":"Liste de magasin standard","shop_list_full_width":"Liste pleine largeur","shop_list_two_column":"Liste deux colonnes","product_details":"d\xe9tails du produit","product_tab_bottom":"Onglet Produit Bas","product_tab_left":"Onglet Produit \xe0 gauche","product_tab_right":"Onglet Produit Droite","product_sticky":"Produit collant","product_slider":"Produit slider","product_fixed_image":"Image fixe du produit","product_simple":"Produit simple","product_variation":"Variation du produit","product_affiliate":"Produit affili\xe9","collection":"Collection","pages":"Des pages","cart":"Chariot","checkout":"Checkout","wishlist":"Liste de souhaits","compare":"Comparer","my_account":"Mon compte","login_register":"Connexion / S\'inscrire","about_us":"\xc0 propos de nous","contact_us":"Contactez nous","404_page":"404 Page","blog":"Blog","blog_standard":"Blog Standard","blog_no_sidebar":"Blog No Sidebar","blog_right_sidebar":"Blog Barre lat\xe9rale droite","blog_details_standard":"D\xe9tails du blog Standard","blog_details_video":"Blog D\xe9tails Vid\xe9o","blog_details_slider":"D\xe9tails du blog"}'
      );
    },
    665: function (e) {
      e.exports = JSON.parse(
        '{"home":"Zuhause","home_group_one":"Heimatgruppe Eins","home_group_two":"Heimatgruppe zwei","home_group_three":"Home Gruppe Drei","home_fashion":"Zuhause Mode","home_fashion_two":"Home Fashion Zwei","home_fashion_three":"Home Fashion Drei","home_fashion_four":"Hauptart und weise vier","home_fashion_five":"Home Fashion Five","home_fashion_six":"Home Fashion Six","home_fashion_seven":"Home Fashion Seven","home_fashion_eight":"Home Fashion Eight","home_kids_fashion":"Startseite Kindermode","home_cosmetics":"Hauptkosmetik","home_furniture":"Haus m\xf6bel","home_furniture_two":"Wohnm\xf6bel Zwei","home_furniture_three":"Wohnm\xf6bel Drei","home_furniture_four":"Wohnm\xf6bel vier","home_furniture_five":"Wohnm\xf6bel Five","home_furniture_six":"Wohnm\xf6bel Six","home_furniture_seven":"Wohnm\xf6bel Seven","home_electronics":"Heimelektronik","home_electronics_two":"Heimelektronik Zwei","home_electronics_three":"Heimelektronik Drei","home_book_store":"Home Buchhandlung","home_book_store_two":"Home Buchhandlung Zwei","home_plants":"Home Pflanzen","home_flower_shop":"Hauptblumenladen","home_flower_shop_two":"Hauptblumenladen Zwei","home_organic_food":"Bio-Lebensmittel","home_organic_food_two":"Bio-Lebensmittel Zwei","home_onepage_scroll":"Home Onepage Scroll","home_grid_banner":"Hauptrasterfeld Fahne","home_auto_parts":"Home Autoteile","home_cake_shop":"Hauptkuchen-Gesch\xe4ft","home_handmade":"Haus handgemacht","home_pet_food":"Heimtierfutter","home_medical_equipment":"medizinische Heimausr\xfcstung","home_christmas":"Home Christmas","home_black_friday":"Home Black Friday","home_black_friday_two":"Home Black Friday Two","home_valentines_day":"Home Valentines Day","shop":"Gesch\xe4ft","shop_layout":"Ladengestaltung","shop_grid_standard":"Shop Grid Standard","shop_grid_filter":"Shop Grid Filter","shop_grid_two_column":"Shop-Raster zwei Spalte","shop_grid_no_sidebar":"Shop Grid No Sidebar","shop_grid_full_width":"Shop-Gitter in voller Breite","shop_grid_right_sidebar":"Shop-Gitter Seitenleiste","shop_list_standard":"Shop List Standard","shop_list_full_width":"Shop List Volle Breite","shop_list_two_column":"Shop-Liste zweispaltig","product_details":"Produktdetails","product_tab_bottom":"Produktregisterkarte Unten","product_tab_left":"Produktregisterkarte Links","product_tab_right":"Registerkarte Rechts","product_sticky":"Produkt klebrig","product_slider":"Produkt-Schieberegler","product_fixed_image":"Produktfixiertes Image","product_simple":"Produkt Einfach","product_variation":"Produktvariation","product_affiliate":"Produkt-Partner","collection":"Sammlung","pages":"Seiten","cart":"Wagen","checkout":"Auschecken","wishlist":"Wunschzettel","compare":"Vergleichen Sie","my_account":"Mein Konto","login_register":"Anmeldung Registrieren","about_us":"\xdcber uns","contact_us":"Kontaktiere uns","404_page":"404 Seite","blog":"Blog","blog_standard":"Blog Standard","blog_no_sidebar":"Blog keine Sidebar","blog_right_sidebar":"Blog rechte Seitenleiste","blog_details_standard":"Blog Details Standard","blog_details_video":"Blog Details Video","blog_details_slider":"Blog Details Schieberegler"}'
      );
    },
    666: function (e, t, a) {
      "use strict";
      a.r(t);
      a(349), a(366);
      var i = a(0),
        s = a.n(i),
        o = a(37),
        u = a.n(o),
        r = a(93),
        n = a(338),
        c = a(199),
        m = a(47),
        l = a(13),
        p = a(92),
        d = { currencySymbol: "\u20b9", currencyName: "INR", currencyRate: 1 },
        g = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : d,
            t = arguments.length > 1 ? arguments[1] : void 0;
          if (t.type === p.a) {
            var a = t.payload.currencyName;
            if ("USD" === a)
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  currencySymbol: "$",
                  currencyRate: t.payload.currencyRate,
                  currencyName: a,
                }
              );
            if ("EUR" === a)
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  currencySymbol: "\u20ac",
                  currencyRate: t.payload.currencyRate,
                  currencyName: a,
                }
              );
            if ("GBP" === a)
              return Object(l.a)(
                Object(l.a)({}, e),
                {},
                {
                  currencySymbol: "\xa3",
                  currencyRate: t.payload.currencyRate,
                  currencyName: a,
                }
              );
          }
          return e;
        },
        h = { products: [] },
        q = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : h,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return "FETCH_PRODUCTS_SUCCESS" === t.type
            ? Object(l.a)(Object(l.a)({}, e), {}, { products: t.payload })
            : e;
        },
        v = a(54),
        f = a(147),
        b = a.n(f),
        j = a(59),
        k = { value: 0 },
        y = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : k,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = e,
            i = t.payload;
          if (t.type === j.f)
            return Object(l.a)(Object(l.a)({}, e), {}, { value: e.value + 1 });
          if (t.type === j.c)
            return Object(l.a)(Object(l.a)({}, e), {}, { value: e.value - 1 });
          if (t.type === j.a) {
            if (void 0 === i.variation) {
              var s = a.filter(function (e) {
                return e.id === i.id;
              })[0];
              return void 0 === s
                ? [].concat(Object(v.a)(a), [
                    Object(l.a)(
                      Object(l.a)({}, i),
                      {},
                      {
                        quantity: i.quantity ? i.quantity : 1,
                        cartItemId: b()(),
                      }
                    ),
                  ])
                : a.map(function (e) {
                    return e.cartItemId === s.cartItemId
                      ? Object(l.a)(
                          Object(l.a)({}, e),
                          {},
                          {
                            quantity: i.quantity
                              ? e.quantity + i.quantity
                              : e.quantity + 1,
                          }
                        )
                      : e;
                  });
            }
            var o = a.filter(function (e) {
              return (
                e.id === i.id &&
                i.selectedProductColor &&
                i.selectedProductColor === e.selectedProductColor &&
                i.selectedProductSize &&
                i.selectedProductSize === e.selectedProductSize &&
                (!i.cartItemId || i.cartItemId === e.cartItemId)
              );
            })[0];
            return void 0 === o
              ? [].concat(Object(v.a)(a), [
                  Object(l.a)(
                    Object(l.a)({}, i),
                    {},
                    { quantity: i.quantity ? i.quantity : 1, cartItemId: b()() }
                  ),
                ])
              : void 0 === o ||
                (o.selectedProductColor === i.selectedProductColor &&
                  o.selectedProductSize === i.selectedProductSize)
              ? a.map(function (e) {
                  return e.cartItemId === o.cartItemId
                    ? Object(l.a)(
                        Object(l.a)({}, e),
                        {},
                        {
                          quantity: i.quantity
                            ? e.quantity + i.quantity
                            : e.quantity + 1,
                          selectedProductColor: i.selectedProductColor,
                          selectedProductSize: i.selectedProductSize,
                        }
                      )
                    : e;
                })
              : [].concat(Object(v.a)(a), [
                  Object(l.a)(
                    Object(l.a)({}, i),
                    {},
                    { quantity: i.quantity ? i.quantity : 1, cartItemId: b()() }
                  ),
                ]);
          }
          if (t.type === j.b) {
            if (1 === i.quantity) {
              var u = function (e, t) {
                return e.filter(function (e) {
                  return e.cartItemId !== t.cartItemId;
                });
              };
              return u(a, i);
            }
            return a.map(function (e) {
              return e.cartItemId === i.cartItemId
                ? Object(l.a)(
                    Object(l.a)({}, e),
                    {},
                    { quantity: e.quantity - 1 }
                  )
                : e;
            });
          }
          if (t.type === j.e) {
            var r = function (e, t) {
              return e.filter(function (e) {
                return e.cartItemId !== t.cartItemId;
              });
            };
            return r(a, i);
          }
          return t.type === j.d
            ? a.filter(function (e) {
                return !1;
              })
            : e;
        },
        x = a(119),
        w = [],
        E = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : w,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = e,
            i = t.payload;
          if (t.type === x.a) {
            var s = a.filter(function (e) {
              return e.id === i.id;
            })[0];
            return void 0 === s ? [].concat(Object(v.a)(a), [i]) : a;
          }
          if (t.type === x.c) {
            var o = function (e, t) {
              return e.filter(function (e) {
                return e.id !== t.id;
              });
            };
            return o(a, i);
          }
          return t.type === x.b
            ? a.filter(function (e) {
                return !1;
              })
            : a;
        },
        _ = a(151),
        D = [],
        N = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : D,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = e,
            i = t.payload;
          if (t.type === _.a) {
            var s = a.filter(function (e) {
              return e.id === i.id;
            })[0];
            return void 0 === s ? [].concat(Object(v.a)(a), [i]) : a;
          }
          if (t.type === _.b) {
            var o = function (e, t) {
              return e.filter(function (e) {
                return e.id !== t.id;
              });
            };
            return o(a, i);
          }
          return a;
        },
        O = a(32),
        S = Object(r.combineReducers)({
          multilanguage: Object(O.createMultilanguageReducer)({
            currentLanguageCode: "en",
          }),
          currencyData: g,
          productData: q,
          cartData: y,
          wishlistData: E,
          compareData: N,
        }),
        L = a(335),
        C = a(23),
        P = Object(C.withRouter)(function (e) {
          return (
            Object(i.useEffect)(function () {
              window.scrollTo(0, 0);
            }),
            e.children
          );
        }),
        R = a(2),
        z = a(120),
        Q = a(208),
        U = a(201),
        A = a(202),
        H = a(203),
        T = a(204),
        B = a(118),
        F = a(339),
        I = a(340),
        M = a(667),
        G = a(211),
        V = a.n(G),
        W = a(26),
        K = a(95),
        Y = a.n(K),
        Z = (function (e) {
          Object(H.a)(a, e);
          var t = Object(T.a)(a);
          function a(e) {
            var i;
            return (
              Object(U.a)(this, a),
              ((i = t.call(this, e)).state = { data: {} }),
              i
            );
          }
          return (
            Object(A.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  W.a
                    .get("/admin/get_term_cond")
                    .then(function (t) {
                      e.setState({ data: t.data.data });
                    })
                    .catch(function (e) {
                      console.log(e.response);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e;
                  return s.a.createElement(
                    B.a,
                    { headerTop: "visible" },
                    s.a.createElement(
                      F.a,
                      { fluid: !0, className: "mb-4" },
                      s.a.createElement(
                        I.a,
                        { className: "mb-5" },
                        s.a.createElement(
                          "div",
                          { className: "headingtitle text-center ptb-40" },
                          s.a.createElement("h2", null, "Terms and Conditions"),
                          s.a.createElement("img", {
                            src: V.a,
                            alt: "",
                            className: "sb-img",
                          })
                        )
                      ),
                      s.a.createElement(
                        F.a,
                        null,
                        s.a.createElement(
                          I.a,
                          null,
                          s.a.createElement(
                            M.a,
                            null,
                            this.state.data.length > 0
                              ? s.a.createElement(
                                  s.a.Fragment,
                                  null,
                                  null === (e = this.state.data) || void 0 === e
                                    ? void 0
                                    : e.map(function (e) {
                                        return s.a.createElement(
                                          s.a.Fragment,
                                          null,
                                          s.a.createElement(
                                            "div",
                                            {
                                              key:
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e._id,
                                            },
                                            Y()(
                                              null === e || void 0 === e
                                                ? void 0
                                                : e.desc
                                            )
                                          )
                                        );
                                      })
                                )
                              : null,
                            s.a.createElement("br", null),
                            s.a.createElement("br", null)
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
        })(i.Component),
        J = a(31),
        X = Object(J.createBrowserHistory)({ basename: "" }),
        $ = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(5), a.e(18), a.e(41)]).then(
            a.bind(null, 1179)
          );
        }),
        ee = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(4), a.e(6), a.e(34)]).then(
            a.bind(null, 1059)
          );
        }),
        te = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(6), a.e(14), a.e(17), a.e(67)]).then(
            a.bind(null, 1071)
          );
        }),
        ae = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(4), a.e(6), a.e(13), a.e(103)]).then(
            a.bind(null, 1072)
          );
        }),
        ie = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(4), a.e(6), a.e(13), a.e(102)]).then(
            a.bind(null, 1073)
          );
        }),
        se = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(4), a.e(6), a.e(13), a.e(104)]).then(
            a.bind(null, 1074)
          );
        }),
        oe = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(4), a.e(6), a.e(13), a.e(101)]).then(
            a.bind(null, 1075)
          );
        }),
        ue = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(6), a.e(14), a.e(17), a.e(68)]).then(
            a.bind(null, 1076)
          );
        }),
        re = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(4), a.e(6), a.e(32)]).then(
            a.bind(null, 1077)
          );
        }),
        ne = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(4), a.e(6), a.e(33)]).then(
            a.bind(null, 1078)
          );
        }),
        ce = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(4), a.e(6), a.e(36)]).then(
            a.bind(null, 1079)
          );
        }),
        me = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(4), a.e(6), a.e(35)]).then(
            a.bind(null, 1080)
          );
        }),
        le = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(6), a.e(14), a.e(17), a.e(69)]).then(
            a.bind(null, 1081)
          );
        }),
        pe = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(27)]).then(
            a.bind(null, 1082)
          );
        }),
        de = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(29)]).then(
            a.bind(null, 1083)
          );
        }),
        ge = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(30)]).then(
            a.bind(null, 1084)
          );
        }),
        he = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(3), a.e(4), a.e(15), a.e(43)]).then(
            a.bind(null, 1187)
          );
        }),
        qe = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(31)]).then(
            a.bind(null, 1180)
          );
        }),
        ve = Object(i.lazy)(function () {
          return Promise.all([a.e(1), a.e(2), a.e(3), a.e(4), a.e(28)]).then(
            a.bind(null, 1085)
          );
        }),
        fe = Object(i.lazy)(function () {
          return Promise.all([a.e(56), a.e(95)]).then(a.bind(null, 1086));
        }),
        be = Object(i.lazy)(function () {
          return a.e(99).then(a.bind(null, 1188));
        }),
        je = Object(i.lazy)(function () {
          return Promise.all([a.e(57), a.e(94)]).then(a.bind(null, 1088));
        }),
        ke = Object(i.lazy)(function () {
          return Promise.all([a.e(51), a.e(121)]).then(a.bind(null, 1185));
        }),
        ye = Object(i.lazy)(function () {
          return Promise.all([a.e(9), a.e(16), a.e(137)]).then(
            a.bind(null, 1089)
          );
        }),
        xe = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(21), a.e(47)]).then(
            a.bind(null, 1181)
          );
        }),
        we = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(44), a.e(144)]).then(
            a.bind(null, 1189)
          );
        }),
        Ee = Object(i.lazy)(function () {
          return Promise.all([a.e(3), a.e(22), a.e(149)]).then(
            a.bind(null, 1090)
          );
        }),
        _e = Object(i.lazy)(function () {
          return Promise.all([a.e(3), a.e(148)]).then(a.bind(null, 1091));
        }),
        De = Object(i.lazy)(function () {
          return a.e(168).then(a.bind(null, 1092));
        }),
        Ne = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(55)]).then(a.bind(null, 1182));
        }),
        Oe = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(3), a.e(15), a.e(49), a.e(166)]).then(
            a.bind(null, 1190)
          );
        }),
        Se = Object(i.lazy)(function () {
          return Promise.all([a.e(3), a.e(20), a.e(96)]).then(
            a.bind(null, 1093)
          );
        }),
        Le = Object(i.lazy)(function () {
          return Promise.all([a.e(3), a.e(48)]).then(a.bind(null, 912));
        }),
        Ce = Object(i.lazy)(function () {
          return Promise.all([a.e(3), a.e(20), a.e(147)]).then(
            a.bind(null, 913)
          );
        }),
        Pe = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(91)]).then(a.bind(null, 1094));
        }),
        Re = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(92)]).then(a.bind(null, 1095));
        }),
        ze = Object(i.lazy)(function () {
          return a.e(90).then(a.bind(null, 1096));
        }),
        Qe = Object(i.lazy)(function () {
          return a.e(153).then(a.t.bind(null, 1097, 7));
        }),
        Ue = Object(i.lazy)(function () {
          return a.e(152).then(a.t.bind(null, 1098, 7));
        }),
        Ae = Object(i.lazy)(function () {
          return a.e(164).then(a.bind(null, 1099));
        }),
        He = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(3), a.e(5), a.e(38)]).then(
            a.bind(null, 1100)
          );
        }),
        Te = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(5), a.e(8), a.e(9), a.e(42)]).then(
            a.bind(null, 1186)
          );
        }),
        Be = Object(i.lazy)(function () {
          return Promise.all([a.e(9), a.e(163)]).then(a.bind(null, 917));
        }),
        Fe = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(3), a.e(5), a.e(39)]).then(
            a.bind(null, 1101)
          );
        }),
        Ie = Object(i.lazy)(function () {
          return a.e(165).then(a.t.bind(null, 1102, 7));
        }),
        Me = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(3), a.e(5), a.e(37)]).then(
            a.bind(null, 1103)
          );
        }),
        Ge = Object(i.lazy)(function () {
          return a.e(150).then(a.bind(null, 856));
        }),
        Ve = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(151)]).then(a.bind(null, 1104));
        }),
        We = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(106)]).then(a.bind(null, 1105));
        }),
        Ke = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(128)]).then(a.bind(null, 776));
        }),
        Ye = Object(i.lazy)(function () {
          return a.e(53).then(a.bind(null, 1106));
        }),
        Ze = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(97)]).then(a.bind(null, 915));
        }),
        Je = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(129)]).then(a.bind(null, 1107));
        }),
        Xe = Object(i.lazy)(function () {
          return Promise.all([a.e(12), a.e(155)]).then(a.bind(null, 1108));
        }),
        $e = Object(i.lazy)(function () {
          return Promise.all([a.e(12), a.e(135)]).then(a.bind(null, 1109));
        }),
        et = Object(i.lazy)(function () {
          return Promise.all([a.e(12), a.e(131)]).then(a.bind(null, 1110));
        }),
        tt = Object(i.lazy)(function () {
          return Promise.all([a.e(12), a.e(136)]).then(a.bind(null, 1111));
        }),
        at = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(7), a.e(156)]).then(
            a.bind(null, 1112)
          );
        }),
        it = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(5), a.e(9), a.e(16), a.e(50)]).then(
            a.bind(null, 1183)
          );
        }),
        st = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(113)]).then(a.bind(null, 1191));
        }),
        ot = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(114)]).then(a.bind(null, 1116));
        }),
        ut = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(9), a.e(16), a.e(127)]).then(
            a.bind(null, 1117)
          );
        }),
        rt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(11), a.e(132)]).then(
            a.bind(null, 1118)
          );
        }),
        nt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(133)]).then(a.bind(null, 1119));
        }),
        ct = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(64)]).then(a.bind(null, 1120));
        }),
        mt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(7), a.e(86)]).then(
            a.bind(null, 1121)
          );
        }),
        lt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(7), a.e(83)]).then(
            a.bind(null, 1122)
          );
        }),
        pt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(7), a.e(84)]).then(
            a.bind(null, 1123)
          );
        }),
        dt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(7), a.e(73)]).then(
            a.bind(null, 1124)
          );
        }),
        gt = Object(i.lazy)(function () {
          return Promise.resolve().then(a.bind(null, 620));
        }),
        ht = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(18), a.e(130)]).then(
            a.bind(null, 1125)
          );
        }),
        qt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(7), a.e(71)]).then(
            a.bind(null, 923)
          );
        }),
        vt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(2), a.e(7), a.e(63)]).then(
            a.bind(null, 1126)
          );
        }),
        ft = Object(i.lazy)(function () {
          return a.e(116).then(a.bind(null, 1192));
        }),
        bt = Object(i.lazy)(function () {
          return a.e(120).then(a.bind(null, 910));
        }),
        jt = Object(i.lazy)(function () {
          return Promise.all([a.e(10), a.e(161)]).then(a.bind(null, 924));
        }),
        kt = Object(i.lazy)(function () {
          return a.e(78).then(a.bind(null, 900));
        }),
        yt = Object(i.lazy)(function () {
          return Promise.all([a.e(3), a.e(15), a.e(10), a.e(140)]).then(
            a.bind(null, 1127)
          );
        }),
        xt = Object(i.lazy)(function () {
          return a.e(138).then(a.bind(null, 901));
        }),
        wt = Object(i.lazy)(function () {
          return Promise.all([a.e(21), a.e(76)]).then(a.bind(null, 1128));
        }),
        Et = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(2), a.e(3), a.e(5), a.e(40)]).then(
            a.bind(null, 808)
          );
        }),
        _t = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(22), a.e(54)]).then(
            a.bind(null, 1129)
          );
        }),
        Dt = Object(i.lazy)(function () {
          return a.e(157).then(a.bind(null, 1130));
        }),
        Nt = Object(i.lazy)(function () {
          return a.e(93).then(a.bind(null, 1131));
        }),
        Ot = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(18), a.e(141)]).then(
            a.bind(null, 928)
          );
        }),
        St = Object(i.lazy)(function () {
          return a.e(118).then(a.bind(null, 1132));
        }),
        Lt = Object(i.lazy)(function () {
          return a.e(79).then(a.bind(null, 1133));
        }),
        Ct = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(117)]).then(a.bind(null, 1134));
        }),
        Pt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(107)]).then(a.bind(null, 1135));
        }),
        Rt = Object(i.lazy)(function () {
          return Promise.all([a.e(10), a.e(158)]).then(a.bind(null, 1136));
        }),
        zt = Object(i.lazy)(function () {
          return Promise.all([a.e(10), a.e(159)]).then(a.bind(null, 1137));
        }),
        Qt = Object(i.lazy)(function () {
          return Promise.all([a.e(10), a.e(160)]).then(a.bind(null, 1138));
        }),
        Ut = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(108)]).then(a.bind(null, 1139));
        }),
        At = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(109)]).then(a.bind(null, 1140));
        }),
        Ht = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(110)]).then(a.bind(null, 1141));
        }),
        Tt = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(115)]).then(a.bind(null, 1142));
        }),
        Bt = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(112)]).then(a.bind(null, 1143));
        }),
        Ft = Object(i.lazy)(function () {
          return a.e(23).then(a.bind(null, 1144));
        }),
        It = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(45)]).then(a.bind(null, 1145));
        }),
        Mt = Object(i.lazy)(function () {
          return a.e(154).then(a.bind(null, 852));
        }),
        Gt = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(111)]).then(a.bind(null, 1193));
        }),
        Vt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(5), a.e(11), a.e(19), a.e(89)]).then(
            a.bind(null, 1146)
          );
        }),
        Wt = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(5), a.e(11), a.e(19), a.e(72)]).then(
            a.bind(null, 1194)
          );
        }),
        Kt = Object(i.lazy)(function () {
          return a.e(124).then(a.bind(null, 1152));
        }),
        Yt = Object(i.lazy)(function () {
          return a.e(122).then(a.bind(null, 1153));
        }),
        Zt = Object(i.lazy)(function () {
          return a.e(123).then(a.bind(null, 1154));
        }),
        Jt = Object(i.lazy)(function () {
          return Promise.all([a.e(11), a.e(98)]).then(a.bind(null, 1155));
        }),
        Xt = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(139)]).then(a.bind(null, 858));
        }),
        $t = Object(i.lazy)(function () {
          return Promise.all([a.e(8), a.e(134)]).then(a.bind(null, 777));
        }),
        ea = Object(i.lazy)(function () {
          return a.e(142).then(a.bind(null, 851));
        }),
        ta = Object(i.lazy)(function () {
          return Promise.all([a.e(2), a.e(119)]).then(a.bind(null, 902));
        }),
        aa = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(5), a.e(58)]).then(
            a.bind(null, 1156)
          );
        }),
        ia = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(5), a.e(59)]).then(
            a.bind(null, 1157)
          );
        }),
        sa = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(5), a.e(60)]).then(a.bind(null, 922));
        }),
        oa = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(7), a.e(75)]).then(
            a.bind(null, 1158)
          );
        }),
        ua = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(7), a.e(70)]).then(
            a.bind(null, 1159)
          );
        }),
        ra = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(100)]).then(a.bind(null, 1195));
        }),
        na = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(80)]).then(a.bind(null, 1196));
        }),
        ca = Object(i.lazy)(function () {
          return a.e(82).then(a.bind(null, 779));
        }),
        ma = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(1), a.e(7), a.e(8), a.e(74)]).then(
            a.bind(null, 1160)
          );
        }),
        la = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(77)]).then(a.bind(null, 1161));
        }),
        pa = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(5), a.e(61)]).then(
            a.bind(null, 1162)
          );
        }),
        da = Object(i.lazy)(function () {
          return a.e(88).then(a.bind(null, 1163));
        }),
        ga = Object(i.lazy)(function () {
          return a.e(23).then(a.bind(null, 1144));
        }),
        ha = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(5), a.e(46)]).then(
            a.bind(null, 1164)
          );
        }),
        qa = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(85)]).then(a.bind(null, 1165));
        }),
        va = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(87)]).then(a.bind(null, 1166));
        }),
        fa = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(105)]).then(a.bind(null, 1167));
        }),
        ba = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(125)]).then(a.bind(null, 1168));
        }),
        ja = Object(i.lazy)(function () {
          return Promise.all([a.e(0), a.e(126)]).then(a.bind(null, 1169));
        }),
        ka = Object(i.lazy)(function () {
          return a.e(162).then(a.t.bind(null, 1170, 7));
        }),
        ya = Object(i.lazy)(function () {
          return Promise.all([a.e(52), a.e(143)]).then(a.bind(null, 1171));
        }),
        xa = Object(i.lazy)(function () {
          return a.e(145).then(a.bind(null, 1172));
        }),
        wa = Object(i.lazy)(function () {
          return Promise.all([a.e(5), a.e(81)]).then(a.bind(null, 1173));
        }),
        Ea = Object(i.lazy)(function () {
          return a.e(146).then(a.bind(null, 1174));
        }),
        _a = Object(i.lazy)(function () {
          return a.e(167).then(a.t.bind(null, 1175, 7));
        }),
        Da = Object(i.lazy)(function () {
          return a.e(62).then(a.bind(null, 1176));
        }),
        Na = Object(i.lazy)(function () {
          return a.e(65).then(a.bind(null, 1177));
        }),
        Oa = Object(i.lazy)(function () {
          return a.e(66).then(a.bind(null, 1178));
        }),
        Sa = Object(m.connect)()(
          Object(O.multilanguage)(function (e) {
            return (
              Object(i.useEffect)(function () {
                e.dispatch(
                  Object(O.loadLanguages)({
                    languages: { en: a(663), fn: a(664), de: a(665) },
                  })
                );
              }),
              s.a.createElement(
                z.ToastProvider,
                { placement: "bottom-left" },
                s.a.createElement(
                  Q.BreadcrumbsProvider,
                  null,
                  s.a.createElement(
                    R.a,
                    { history: X },
                    s.a.createElement(
                      P,
                      null,
                      s.a.createElement(
                        i.Suspense,
                        {
                          fallback: s.a.createElement(
                            "div",
                            { className: "flone-preloader-wrapper" },
                            s.a.createElement(
                              "div",
                              { className: "flone-preloader" },
                              s.a.createElement("span", null),
                              s.a.createElement("span", null)
                            )
                          ),
                        },
                        s.a.createElement(
                          R.b,
                          null,
                          s.a.createElement(
                            C.Switch,
                            null,
                            s.a.createElement(C.Route, {
                              exact: !0,
                              path: "/",
                              component: $,
                            }),
                            s.a.createElement(C.Route, {
                              exact: !0,
                              path: "/",
                              component: $,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/homecategory",
                              component: jt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "YourliveStreamming",
                              component: ye,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-grid-standard",
                              component: ee,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-grid-filter",
                              component: te,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-grid-two-column",
                              component: ae,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-grid-men-column",
                              component: ie,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-grid-women-column",
                              component: se,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-grid-kids-column",
                              component: oe,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-grid-no-sidebar",
                              component: ue,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-grid-full-width",
                              component: re,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-grid-right-sidebar",
                              component: ne,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-list-standard/:_id",
                              render: function (e) {
                                return s.a.createElement(
                                  pe,
                                  Object.assign({}, e, {
                                    key: e.match.params._id,
                                  })
                                );
                              },
                              component: ce,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-list-full-width",
                              component: me,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/shop-list-two-column",
                              component: le,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/product/:id",
                              render: function (e) {
                                return s.a.createElement(
                                  pe,
                                  Object.assign({}, e, {
                                    key: e.match.params.id,
                                  })
                                );
                              },
                            }),
                            s.a.createElement(C.Route, {
                              path: "/product-tab-left/:id",
                              component: de,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/product-tab-right/:id",
                              component: ge,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/product-sticky/:id",
                              component: he,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/product-slider/:id",
                              component: qe,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/room",
                              component: Ae,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/home",
                              component: ka,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/product-fixed-image/:id",
                              component: ve,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/blog-standard/:id",
                              component: fe,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/blog-details-standard/:id",
                              component: ke,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/blog-no-sidebar",
                              component: be,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/blog-right-sidebar",
                              component: je,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/bannerSection",
                              component: ft,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/notificationlist",
                              component: qa,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/wallettransaclist",
                              component: da,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/conversationList",
                              component: ga,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/astrorating",
                              component: Je,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/paymentdetail/:id",
                              component: ha,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/walletaddform",
                              component: va,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/my-account",
                              component: Ne,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/my-order",
                              component: xa,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/my-refund",
                              component: wa,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/mybookedpooja",
                              component: Ea,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/addEvent",
                              component: fa,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/addressform/:id",
                              component: ba,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/askquestion/:id",
                              component: We,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/askquestionList",
                              component: Ye,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/userChatHistoryList",
                              component: Xe,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/UserCallHistory",
                              component: $e,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/uservideohistory",
                              component: tt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/userchathistory",
                              component: et,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/astroProfileVideo",
                              component: Ke,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/walletmoney",
                              component: pa,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/liveAstrologer",
                              component: Ze,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/profiledetail",
                              component: St,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/TeamMemberOne",
                              component: bt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/ourworkflow",
                              component: kt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/predictionallhome",
                              component: yt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/astrologerdetail/:id",
                              component: Et,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/astrologersignup",
                              component: _t,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/astrologerlogin",
                              component: Dt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/astroteam",
                              component: Nt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/freekundli",
                              component: ct,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/manglikdosh",
                              component: pt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/lalkitab",
                              component: dt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/otherpage/:id",
                              component: gt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/bookEvent",
                              component: ht,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/BookPooojaForm",
                              component: qt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/Poojadetailpage/:id",
                              component: vt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/kalsharpdosh",
                              component: lt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/pitradosh",
                              component: mt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/sectionpooja",
                              component: Ot,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/aboutus",
                              component: xt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/aboutdetail",
                              component: wt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/faq",
                              component: _e,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/poojadetail/:id",
                              component: Lt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/consultantlist/:id",
                              component: Ft,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/addressformedit/:id",
                              component: ja,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/cartlist/:id",
                              component: It,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/heroscopesall",
                              component: Ct,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/heroscopesday",
                              component: Pt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/heroscopestwo",
                              component: Rt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/heroscopestwo1",
                              component: zt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/heroscopestwo2",
                              component: Qt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/horoscopedetail/:id",
                              component: Ut,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/horoscopedetail1/:id",
                              component: At,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/horoscopedetail2/:id",
                              component: Ht,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/astromallList",
                              component: Tt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/productlist/:id",
                              component: Bt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/alertpage",
                              component: Ge,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/customersupport",
                              component: Ve,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/customersupportform",
                              component: rt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/customersupportview/:id",
                              component: nt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/userrequestform",
                              component: at,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/userrequestform",
                              component: at,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/directvideo",
                              component: it,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/userrequestformCall",
                              component: st,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/userrequestformVideoCall",
                              component: ot,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/userVideoCall/:id",
                              component: ut,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/ourservice",
                              component: Mt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/servicelist",
                              component: Gt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/allastrologerlist",
                              component: Vt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/allchatastrologerlist",
                              component: Wt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/waitingpage",
                              component: Kt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/waitingpagechat",
                              component: Yt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/waitingpagevideo",
                              component: Zt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/allastrochatlist",
                              component: Jt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/autosearch",
                              component: Xt,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/matchsearch",
                              component: $t,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/sliderdemo",
                              component: ea,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/sliderlist",
                              component: ta,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/allMinRecharge",
                              component: aa,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/allMinRechargeCall",
                              component: ia,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/allMinRechargeVideoCall",
                              component: sa,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/todayPanchang",
                              component: oa,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/basicPanchang",
                              component: ua,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/chatlist",
                              component: ra,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/chatApp",
                              component: na,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/demochat",
                              component: ca,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/kundaliform",
                              component: ma,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/kundalimatchlist",
                              component: la,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/about",
                              component: xe,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/contact",
                              component: we,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/faqPage",
                              component: Ee,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/privacyPolicy",
                              component: De,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/TermsOfUse",
                              component: Z,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/login-register",
                              component: Oe,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/otpverify",
                              component: Pe,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/registerastro",
                              component: Re,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/completeproastro",
                              component: ze,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/demovideocall",
                              component: Qe,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/democall",
                              component: Ue,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/step",
                              component: Se,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/Phone",
                              component: Le,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/livevideo",
                              component: He,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/livestreaming",
                              component: Te,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/livestreamingnew",
                              component: Be,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/videocall",
                              component: Fe,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/videocall2",
                              component: Ie,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/call",
                              component: Me,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/Otp",
                              component: Ce,
                            }),
                            s.a.createElement(C.Route, {
                              render: function () {
                                return localStorage.getItem("auth-token")
                                  ? s.a.createElement(
                                      s.a.Fragment,
                                      null,
                                      s.a.createElement(C.Route, {
                                        path: "/cart",
                                        component: ya,
                                      }),
                                      s.a.createElement(C.Route, {
                                        path: "/wishlist",
                                        component: _a,
                                      }),
                                      s.a.createElement(C.Route, {
                                        path: "/checkout",
                                        component: Na,
                                      })
                                    )
                                  : s.a.createElement(C.Redirect, {
                                      to: "/login-register",
                                    });
                              },
                            }),
                            s.a.createElement(C.Route, {
                              path: "/compare",
                              component: Da,
                            }),
                            s.a.createElement(C.Route, {
                              path: "/not-found",
                              component: Oa,
                            }),
                            s.a.createElement(C.Route, {
                              exact: !0,
                              component: Oa,
                            })
                          )
                        )
                      )
                    )
                  )
                )
              )
            );
          })
        );
      a(215),
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      var La = a(337),
        Ca = Object(r.createStore)(
          S,
          Object(c.load)(),
          Object(La.composeWithDevTools)(
            Object(r.applyMiddleware)(n.a, Object(c.save)())
          )
        );
      Ca.dispatch(
        (function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: "FETCH_PRODUCTS_SUCCESS", payload: e };
              })(e)
            );
          };
        })(L)
      ),
        u.a.render(
          s.a.createElement(
            m.Provider,
            { store: Ca },
            s.a.createElement(Sa, null)
          ),
          document.getElementById("root")
        ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    92: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return o;
      }),
        a.d(t, "b", function () {
          return u;
        });
      var i = a(48),
        s = a.n(i),
        o = "SET_CURRENCY",
        u = function (e) {
          return function (t) {
            s.a
              .get(
                "http://api.exchangeratesapi.io/v1/latest?access_key=523380ab42abd25f9ebdc193dd3b19e7&symbols=USD,GBP,EUR,INR"
              )
              .then(function (a) {
                var i = a.data.rates,
                  s = 0;
                for (var u in i) u === e && (s = i[u]);
                t({ type: o, payload: { currencyName: e, currencyRate: s } });
              })
              .catch(function (e) {
                console.log("Error: ", e), console.log(e.response);
              });
          };
        };
    },
  },
  [[348, 25, 26]],
]);
//# sourceMappingURL=main.260f3e28.chunk.js.map
