(window["webpackJsonppurple-react-free"] =
  window["webpackJsonppurple-react-free"] || []).push([
  [2],
  {
    103: function (e, a, t) {
      e.exports = t.p + "static/media/logo-mini.8aef5918.svg";
    },
    121: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        l = t.n(n),
        s = t(22),
        r = t.n(s),
        c = t(8),
        i = t(11),
        m = t(12),
        o = t(14),
        u = t(13),
        d = t(15),
        p = t(29),
        E =
          (t(91),
          (function (e) {
            function a() {
              return (
                Object(i.a)(this, a),
                Object(o.a)(this, Object(u.a)(a).apply(this, arguments))
              );
            }
            return (
              Object(d.a)(a, e),
              Object(m.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return l.a.createElement(
                      "div",
                      null,
                      l.a.createElement(
                        "div",
                        { className: "spinner-wrapper" },
                        l.a.createElement("div", { className: "donut" })
                      )
                    );
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        v = Object(n.lazy)(function () {
          return Promise.all([t.e(0), t.e(1), t.e(5)]).then(t.bind(null, 339));
        }),
        g = Object(n.lazy)(function () {
          return t.e(10).then(t.bind(null, 340));
        }),
        h = Object(n.lazy)(function () {
          return t.e(11).then(t.bind(null, 352));
        }),
        b = Object(n.lazy)(function () {
          return t.e(12).then(t.bind(null, 341));
        }),
        f = Object(n.lazy)(function () {
          return Promise.all([t.e(1), t.e(6)]).then(t.bind(null, 342));
        }),
        N = Object(n.lazy)(function () {
          return t.e(7).then(t.bind(null, 343));
        }),
        y = Object(n.lazy)(function () {
          return t.e(17).then(t.bind(null, 344));
        }),
        k = Object(n.lazy)(function () {
          return Promise.all([t.e(0), t.e(13)]).then(t.bind(null, 345));
        }),
        w = Object(n.lazy)(function () {
          return t.e(14).then(t.bind(null, 346));
        }),
        O = Object(n.lazy)(function () {
          return t.e(15).then(t.bind(null, 347));
        }),
        j = Object(n.lazy)(function () {
          return t.e(9).then(t.bind(null, 348));
        }),
        C = Object(n.lazy)(function () {
          return t.e(18).then(t.bind(null, 349));
        }),
        x = Object(n.lazy)(function () {
          return t.e(8).then(t.bind(null, 350));
        }),
        P = Object(n.lazy)(function () {
          return t.e(16).then(t.bind(null, 351));
        }),
        S = (function (e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(u.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(a, e),
            Object(m.a)(a, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    n.Suspense,
                    { fallback: l.a.createElement(E, null) },
                    l.a.createElement(
                      p.d,
                      null,
                      l.a.createElement(p.b, {
                        exact: !0,
                        path: "/dashboard",
                        component: v,
                      }),
                      l.a.createElement(p.b, {
                        path: "/basic-ui/buttons",
                        component: g,
                      }),
                      l.a.createElement(p.b, {
                        path: "/basic-ui/dropdowns",
                        component: h,
                      }),
                      l.a.createElement(p.b, {
                        path: "/basic-ui/typography",
                        component: b,
                      }),
                      l.a.createElement(p.b, {
                        path: "/form-Elements/basic-elements",
                        component: f,
                      }),
                      l.a.createElement(p.b, {
                        path: "/tables/basic-table",
                        component: N,
                      }),
                      l.a.createElement(p.b, {
                        path: "/icons/mdi",
                        component: y,
                      }),
                      l.a.createElement(p.b, {
                        path: "/charts/chart-js",
                        component: k,
                      }),
                      l.a.createElement(p.b, {
                        path: "/user-pages/login-1",
                        component: j,
                      }),
                      l.a.createElement(p.b, {
                        path: "/user-pages/register-1",
                        component: C,
                      }),
                      l.a.createElement(p.b, {
                        path: "/user-pages/lockscreen",
                        component: x,
                      }),
                      l.a.createElement(p.b, {
                        path: "/error-pages/error-404",
                        component: w,
                      }),
                      l.a.createElement(p.b, {
                        path: "/error-pages/error-500",
                        component: O,
                      }),
                      l.a.createElement(p.b, {
                        path: "/general-pages/blank-page",
                        component: P,
                      }),
                      l.a.createElement(p.a, { to: "/dashboard" })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        M = t(127),
        A = t(2),
        D = (function (e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(u.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(a, e),
            Object(m.a)(a, [
              {
                key: "toggleOffcanvas",
                value: function () {
                  document
                    .querySelector(".sidebar-offcanvas")
                    .classList.toggle("active");
                },
              },
              {
                key: "toggleRightSidebar",
                value: function () {
                  document
                    .querySelector(".right-sidebar")
                    .classList.toggle("open");
                },
              },
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "nav",
                    {
                      className:
                        "navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row",
                    },
                    l.a.createElement(
                      "div",
                      {
                        className:
                          "text-center navbar-brand-wrapper d-flex align-items-center justify-content-center",
                      },
                      l.a.createElement(
                        c.b,
                        { className: "navbar-brand brand-logo", to: "/" },
                        l.a.createElement("img", { src: t(82), alt: "logo" })
                      ),
                      l.a.createElement(
                        c.b,
                        { className: "navbar-brand brand-logo-mini", to: "/" },
                        l.a.createElement("img", { src: t(103), alt: "logo" })
                      )
                    ),
                    l.a.createElement(
                      "div",
                      {
                        className:
                          "navbar-menu-wrapper d-flex align-items-stretch",
                      },
                      l.a.createElement(
                        "button",
                        {
                          className:
                            "navbar-toggler navbar-toggler align-self-center",
                          type: "button",
                          onClick: function () {
                            return document.body.classList.toggle(
                              "sidebar-icon-only"
                            );
                          },
                        },
                        l.a.createElement("span", { className: "mdi mdi-menu" })
                      ),
                      l.a.createElement(
                        "div",
                        { className: "search-field d-none d-md-block" },
                        l.a.createElement(
                          "form",
                          {
                            className: "d-flex align-items-center h-100",
                            action: "#",
                          },
                          l.a.createElement(
                            "div",
                            { className: "input-group" },
                            l.a.createElement(
                              "div",
                              {
                                className: "input-group-prepend bg-transparent",
                              },
                              l.a.createElement("i", {
                                className:
                                  "input-group-text border-0 mdi mdi-magnify",
                              })
                            ),
                            l.a.createElement("input", {
                              type: "text",
                              className: "form-control bg-transparent border-0",
                              placeholder: "Search projects",
                            })
                          )
                        )
                      ),
                      l.a.createElement(
                        "ul",
                        { className: "navbar-nav navbar-nav-right" },
                        l.a.createElement(
                          "li",
                          { className: "nav-item nav-profile" },
                          l.a.createElement(
                            M.a,
                            { alignRight: !0 },
                            l.a.createElement(
                              M.a.Toggle,
                              { className: "nav-link" },
                              l.a.createElement(
                                "div",
                                { className: "nav-profile-img" },
                                l.a.createElement("img", {
                                  src: t(51),
                                  alt: "user",
                                }),
                                l.a.createElement("span", {
                                  className: "availability-status online",
                                })
                              ),
                              l.a.createElement(
                                "div",
                                { className: "nav-profile-text" },
                                l.a.createElement(
                                  "p",
                                  { className: "mb-1 text-black" },
                                  l.a.createElement(A.a, null, "David Greymaax")
                                )
                              )
                            ),
                            l.a.createElement(
                              M.a.Menu,
                              { className: "navbar-dropdown" },
                              l.a.createElement(
                                M.a.Item,
                                {
                                  href: "!#",
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                },
                                l.a.createElement("i", {
                                  className: "mdi mdi-cached mr-2 text-success",
                                }),
                                l.a.createElement(A.a, null, "Activity Log")
                              ),
                              l.a.createElement(
                                M.a.Item,
                                {
                                  href: "!#",
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                },
                                l.a.createElement("i", {
                                  className: "mdi mdi-logout mr-2 text-primary",
                                }),
                                l.a.createElement(A.a, null, "Signout")
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "li",
                          { className: "nav-item" },
                          l.a.createElement(
                            M.a,
                            { alignRight: !0 },
                            l.a.createElement(
                              M.a.Toggle,
                              { className: "nav-link count-indicator" },
                              l.a.createElement("i", {
                                className: "mdi mdi-email-outline",
                              }),
                              l.a.createElement("span", {
                                className: "count-symbol bg-warning",
                              })
                            ),
                            l.a.createElement(
                              M.a.Menu,
                              { className: "preview-list navbar-dropdown" },
                              l.a.createElement(
                                "h6",
                                { className: "p-3 mb-0" },
                                l.a.createElement(A.a, null, "Messages")
                              ),
                              l.a.createElement("div", {
                                className: "dropdown-divider",
                              }),
                              l.a.createElement(
                                M.a.Item,
                                {
                                  className: "dropdown-item preview-item",
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "preview-thumbnail" },
                                  l.a.createElement("img", {
                                    src: t(66),
                                    alt: "user",
                                    className: "profile-pic",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "preview-item-content d-flex align-items-start flex-column justify-content-center",
                                  },
                                  l.a.createElement(
                                    "h6",
                                    {
                                      className:
                                        "preview-subject ellipsis mb-1 font-weight-normal",
                                    },
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "Mark send you a message"
                                    )
                                  ),
                                  l.a.createElement(
                                    "p",
                                    { className: "text-gray mb-0" },
                                    "1 ",
                                    l.a.createElement(A.a, null, "Minutes ago")
                                  )
                                )
                              ),
                              l.a.createElement("div", {
                                className: "dropdown-divider",
                              }),
                              l.a.createElement(
                                M.a.Item,
                                {
                                  className: "dropdown-item preview-item",
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "preview-thumbnail" },
                                  l.a.createElement("img", {
                                    src: t(67),
                                    alt: "user",
                                    className: "profile-pic",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "preview-item-content d-flex align-items-start flex-column justify-content-center",
                                  },
                                  l.a.createElement(
                                    "h6",
                                    {
                                      className:
                                        "preview-subject ellipsis mb-1 font-weight-normal",
                                    },
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "Cregh send you a message"
                                    )
                                  ),
                                  l.a.createElement(
                                    "p",
                                    { className: "text-gray mb-0" },
                                    "15 ",
                                    l.a.createElement(A.a, null, "Minutes ago")
                                  )
                                )
                              ),
                              l.a.createElement("div", {
                                className: "dropdown-divider",
                              }),
                              l.a.createElement(
                                M.a.Item,
                                {
                                  className: "dropdown-item preview-item",
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "preview-thumbnail" },
                                  l.a.createElement("img", {
                                    src: t(64),
                                    alt: "user",
                                    className: "profile-pic",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "preview-item-content d-flex align-items-start flex-column justify-content-center",
                                  },
                                  l.a.createElement(
                                    "h6",
                                    {
                                      className:
                                        "preview-subject ellipsis mb-1 font-weight-normal",
                                    },
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "Profile picture updated"
                                    )
                                  ),
                                  l.a.createElement(
                                    "p",
                                    { className: "text-gray mb-0" },
                                    "18 ",
                                    l.a.createElement(A.a, null, "Minutes ago")
                                  )
                                )
                              ),
                              l.a.createElement("div", {
                                className: "dropdown-divider",
                              }),
                              l.a.createElement(
                                "h6",
                                {
                                  className:
                                    "p-3 mb-0 text-center cursor-pointer",
                                },
                                "4 ",
                                l.a.createElement(A.a, null, "new messages")
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "li",
                          { className: "nav-item" },
                          l.a.createElement(
                            M.a,
                            { alignRight: !0 },
                            l.a.createElement(
                              M.a.Toggle,
                              { className: "nav-link count-indicator" },
                              l.a.createElement("i", {
                                className: "mdi mdi-bell-outline",
                              }),
                              l.a.createElement("span", {
                                className: "count-symbol bg-danger",
                              })
                            ),
                            l.a.createElement(
                              M.a.Menu,
                              {
                                className:
                                  "dropdown-menu navbar-dropdown preview-list",
                              },
                              l.a.createElement(
                                "h6",
                                { className: "p-3 mb-0" },
                                l.a.createElement(A.a, null, "Notifications")
                              ),
                              l.a.createElement("div", {
                                className: "dropdown-divider",
                              }),
                              l.a.createElement(
                                M.a.Item,
                                {
                                  className: "dropdown-item preview-item",
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "preview-thumbnail" },
                                  l.a.createElement(
                                    "div",
                                    { className: "preview-icon bg-success" },
                                    l.a.createElement("i", {
                                      className: "mdi mdi-calendar",
                                    })
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "preview-item-content d-flex align-items-start flex-column justify-content-center",
                                  },
                                  l.a.createElement(
                                    "h6",
                                    {
                                      className:
                                        "preview-subject font-weight-normal mb-1",
                                    },
                                    l.a.createElement(A.a, null, "Event today")
                                  ),
                                  l.a.createElement(
                                    "p",
                                    { className: "text-gray ellipsis mb-0" },
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "Just a reminder that you have an event today"
                                    )
                                  )
                                )
                              ),
                              l.a.createElement("div", {
                                className: "dropdown-divider",
                              }),
                              l.a.createElement(
                                M.a.Item,
                                {
                                  className: "dropdown-item preview-item",
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "preview-thumbnail" },
                                  l.a.createElement(
                                    "div",
                                    { className: "preview-icon bg-warning" },
                                    l.a.createElement("i", {
                                      className: "mdi mdi-settings",
                                    })
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "preview-item-content d-flex align-items-start flex-column justify-content-center",
                                  },
                                  l.a.createElement(
                                    "h6",
                                    {
                                      className:
                                        "preview-subject font-weight-normal mb-1",
                                    },
                                    l.a.createElement(A.a, null, "Settings")
                                  ),
                                  l.a.createElement(
                                    "p",
                                    { className: "text-gray ellipsis mb-0" },
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "Update dashboard"
                                    )
                                  )
                                )
                              ),
                              l.a.createElement("div", {
                                className: "dropdown-divider",
                              }),
                              l.a.createElement(
                                M.a.Item,
                                {
                                  className: "dropdown-item preview-item",
                                  onClick: function (e) {
                                    return e.preventDefault();
                                  },
                                },
                                l.a.createElement(
                                  "div",
                                  { className: "preview-thumbnail" },
                                  l.a.createElement(
                                    "div",
                                    { className: "preview-icon bg-info" },
                                    l.a.createElement("i", {
                                      className: "mdi mdi-link-variant",
                                    })
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "preview-item-content d-flex align-items-start flex-column justify-content-center",
                                  },
                                  l.a.createElement(
                                    "h6",
                                    {
                                      className:
                                        "preview-subject font-weight-normal mb-1",
                                    },
                                    l.a.createElement(A.a, null, "Launch Admin")
                                  ),
                                  l.a.createElement(
                                    "p",
                                    { className: "text-gray ellipsis mb-0" },
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "New admin wow"
                                    ),
                                    "!"
                                  )
                                )
                              ),
                              l.a.createElement("div", {
                                className: "dropdown-divider",
                              }),
                              l.a.createElement(
                                "h6",
                                {
                                  className:
                                    "p-3 mb-0 text-center cursor-pointer",
                                },
                                l.a.createElement(
                                  A.a,
                                  null,
                                  "See all notifications"
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          "li",
                          {
                            className: "nav-item nav-logout d-none d-lg-block",
                          },
                          l.a.createElement(
                            "a",
                            {
                              className: "nav-link",
                              href: "!#",
                              onClick: function (e) {
                                return e.preventDefault();
                              },
                            },
                            l.a.createElement("i", {
                              className: "mdi mdi-power",
                            })
                          )
                        ),
                        l.a.createElement(
                          "li",
                          {
                            className:
                              "nav-item nav-settings d-none d-lg-block",
                          },
                          l.a.createElement(
                            "button",
                            {
                              type: "button",
                              className: "nav-link border-0",
                              onClick: this.toggleRightSidebar,
                            },
                            l.a.createElement("i", {
                              className: "mdi mdi-format-line-spacing",
                            })
                          )
                        )
                      ),
                      l.a.createElement(
                        "button",
                        {
                          className:
                            "navbar-toggler navbar-toggler-right d-lg-none align-self-center",
                          type: "button",
                          onClick: this.toggleOffcanvas,
                        },
                        l.a.createElement("span", { className: "mdi mdi-menu" })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        T = t(26),
        L = t(124),
        R = (function (e) {
          function a() {
            var e, t;
            Object(i.a)(this, a);
            for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++)
              l[s] = arguments[s];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(u.a)(a)).call.apply(e, [this].concat(l))
              )).state = {}),
              t
            );
          }
          return (
            Object(d.a)(a, e),
            Object(m.a)(a, [
              {
                key: "toggleMenuState",
                value: function (e) {
                  var a = this;
                  this.state[e]
                    ? this.setState(Object(T.a)({}, e, !1))
                    : 0 === Object.keys(this.state).length
                    ? this.setState(Object(T.a)({}, e, !0))
                    : (Object.keys(this.state).forEach(function (e) {
                        a.setState(Object(T.a)({}, e, !1));
                      }),
                      this.setState(Object(T.a)({}, e, !0)));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.location !== e.location && this.onRouteChanged();
                },
              },
              {
                key: "onRouteChanged",
                value: function () {
                  var e = this;
                  document.querySelector("#sidebar").classList.remove("active"),
                    Object.keys(this.state).forEach(function (a) {
                      e.setState(Object(T.a)({}, a, !1));
                    });
                  [
                    { path: "/apps", state: "appsMenuOpen" },
                    { path: "/basic-ui", state: "basicUiMenuOpen" },
                    { path: "/advanced-ui", state: "advancedUiMenuOpen" },
                    { path: "/form-elements", state: "formElementsMenuOpen" },
                    { path: "/tables", state: "tablesMenuOpen" },
                    { path: "/maps", state: "mapsMenuOpen" },
                    { path: "/icons", state: "iconsMenuOpen" },
                    { path: "/charts", state: "chartsMenuOpen" },
                    { path: "/user-pages", state: "userPagesMenuOpen" },
                    { path: "/error-pages", state: "errorPagesMenuOpen" },
                    { path: "/general-pages", state: "generalPagesMenuOpen" },
                    { path: "/ecommerce", state: "ecommercePagesMenuOpen" },
                  ].forEach(function (a) {
                    e.isPathActive(a.path) &&
                      e.setState(Object(T.a)({}, a.state, !0));
                  });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return l.a.createElement(
                    "nav",
                    { className: "sidebar sidebar-offcanvas", id: "sidebar" },
                    l.a.createElement(
                      "ul",
                      { className: "nav" },
                      l.a.createElement(
                        "li",
                        { className: "nav-item nav-profile" },
                        l.a.createElement(
                          "a",
                          {
                            href: "!#",
                            className: "nav-link",
                            onClick: function (e) {
                              return e.preventDefault();
                            },
                          },
                          l.a.createElement(
                            "div",
                            { className: "nav-profile-image" },
                            l.a.createElement("img", {
                              src: t(51),
                              alt: "profile",
                            }),
                            l.a.createElement("span", {
                              className: "login-status online",
                            }),
                            " "
                          ),
                          l.a.createElement(
                            "div",
                            { className: "nav-profile-text" },
                            l.a.createElement(
                              "span",
                              { className: "font-weight-bold mb-2" },
                              l.a.createElement(A.a, null, "David Grey. H")
                            ),
                            l.a.createElement(
                              "span",
                              { className: "text-secondary text-small" },
                              l.a.createElement(A.a, null, "Project Manager")
                            )
                          ),
                          l.a.createElement("i", {
                            className:
                              "mdi mdi-bookmark-check text-success nav-profile-badge",
                          })
                        )
                      ),
                      l.a.createElement(
                        "li",
                        {
                          className: this.isPathActive("/dashboard")
                            ? "nav-item active"
                            : "nav-item",
                        },
                        l.a.createElement(
                          c.b,
                          { className: "nav-link", to: "/dashboard" },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "Dashboard")
                          ),
                          l.a.createElement("i", {
                            className: "mdi mdi-home menu-icon",
                          })
                        )
                      ),
                      l.a.createElement(
                        "li",
                        {
                          className: this.isPathActive("/basic-ui")
                            ? "nav-item active"
                            : "nav-item",
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: this.state.basicUiMenuOpen
                              ? "nav-link menu-expanded"
                              : "nav-link",
                            onClick: function () {
                              return e.toggleMenuState("basicUiMenuOpen");
                            },
                            "data-toggle": "collapse",
                          },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "Basic UI Elements")
                          ),
                          l.a.createElement("i", { className: "menu-arrow" }),
                          l.a.createElement("i", {
                            className: "mdi mdi-crosshairs-gps menu-icon",
                          })
                        ),
                        l.a.createElement(
                          L.a,
                          { in: this.state.basicUiMenuOpen },
                          l.a.createElement(
                            "ul",
                            { className: "nav flex-column sub-menu" },
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/basic-ui/buttons"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/basic-ui/buttons",
                                },
                                l.a.createElement(A.a, null, "Buttons")
                              )
                            ),
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/basic-ui/dropdowns"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/basic-ui/dropdowns",
                                },
                                l.a.createElement(A.a, null, "Dropdowns")
                              )
                            ),
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/basic-ui/typography"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/basic-ui/typography",
                                },
                                l.a.createElement(A.a, null, "Typography")
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "li",
                        {
                          className: this.isPathActive("/form-elements")
                            ? "nav-item active"
                            : "nav-item",
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: this.state.formElementsMenuOpen
                              ? "nav-link menu-expanded"
                              : "nav-link",
                            onClick: function () {
                              return e.toggleMenuState("formElementsMenuOpen");
                            },
                            "data-toggle": "collapse",
                          },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "Form Elements")
                          ),
                          l.a.createElement("i", { className: "menu-arrow" }),
                          l.a.createElement("i", {
                            className: "mdi mdi-format-list-bulleted menu-icon",
                          })
                        ),
                        l.a.createElement(
                          L.a,
                          { in: this.state.formElementsMenuOpen },
                          l.a.createElement(
                            "ul",
                            { className: "nav flex-column sub-menu" },
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/form-elements/basic-elements"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/form-elements/basic-elements",
                                },
                                l.a.createElement(A.a, null, "Basic Elements")
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "li",
                        {
                          className: this.isPathActive("/tables")
                            ? "nav-item active"
                            : "nav-item",
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: this.state.tablesMenuOpen
                              ? "nav-link menu-expanded"
                              : "nav-link",
                            onClick: function () {
                              return e.toggleMenuState("tablesMenuOpen");
                            },
                            "data-toggle": "collapse",
                          },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "Tables")
                          ),
                          l.a.createElement("i", { className: "menu-arrow" }),
                          l.a.createElement("i", {
                            className: "mdi mdi-table-large menu-icon",
                          })
                        ),
                        l.a.createElement(
                          L.a,
                          { in: this.state.tablesMenuOpen },
                          l.a.createElement(
                            "ul",
                            { className: "nav flex-column sub-menu" },
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/tables/basic-table"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/tables/basic-table",
                                },
                                l.a.createElement(A.a, null, "Basic Table")
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "li",
                        {
                          className: this.isPathActive("/icons")
                            ? "nav-item active"
                            : "nav-item",
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: this.state.iconsMenuOpen
                              ? "nav-link menu-expanded"
                              : "nav-link",
                            onClick: function () {
                              return e.toggleMenuState("iconsMenuOpen");
                            },
                            "data-toggle": "collapse",
                          },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "Icons")
                          ),
                          l.a.createElement("i", { className: "menu-arrow" }),
                          l.a.createElement("i", {
                            className: "mdi mdi-contacts menu-icon",
                          })
                        ),
                        l.a.createElement(
                          L.a,
                          { in: this.state.iconsMenuOpen },
                          l.a.createElement(
                            "ul",
                            { className: "nav flex-column sub-menu" },
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive("/icons/mdi")
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/icons/mdi",
                                },
                                l.a.createElement(A.a, null, "Material")
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "li",
                        {
                          className: this.isPathActive("/charts")
                            ? "nav-item active"
                            : "nav-item",
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: this.state.chartsMenuOpen
                              ? "nav-link menu-expanded"
                              : "nav-link",
                            onClick: function () {
                              return e.toggleMenuState("chartsMenuOpen");
                            },
                            "data-toggle": "collapse",
                          },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "Charts")
                          ),
                          l.a.createElement("i", { className: "menu-arrow" }),
                          l.a.createElement("i", {
                            className: "mdi mdi-chart-bar menu-icon",
                          })
                        ),
                        l.a.createElement(
                          L.a,
                          { in: this.state.chartsMenuOpen },
                          l.a.createElement(
                            "ul",
                            { className: "nav flex-column sub-menu" },
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/charts/chart-js"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/charts/chart-js",
                                },
                                l.a.createElement(A.a, null, "Chart Js")
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "li",
                        {
                          className: this.isPathActive("/user-pages")
                            ? "nav-item active"
                            : "nav-item",
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: this.state.userPagesMenuOpen
                              ? "nav-link menu-expanded"
                              : "nav-link",
                            onClick: function () {
                              return e.toggleMenuState("userPagesMenuOpen");
                            },
                            "data-toggle": "collapse",
                          },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "User Pages")
                          ),
                          l.a.createElement("i", { className: "menu-arrow" }),
                          l.a.createElement("i", {
                            className: "mdi mdi-lock menu-icon",
                          })
                        ),
                        l.a.createElement(
                          L.a,
                          { in: this.state.userPagesMenuOpen },
                          l.a.createElement(
                            "ul",
                            { className: "nav flex-column sub-menu" },
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/user-pages/login-1"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/user-pages/login-1",
                                },
                                l.a.createElement(A.a, null, "Login")
                              )
                            ),
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/user-pages/register-1"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/user-pages/register-1",
                                },
                                l.a.createElement(A.a, null, "Register")
                              )
                            ),
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/user-pages/lockscreen"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/user-pages/lockscreen",
                                },
                                l.a.createElement(A.a, null, "Lockscreen")
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "li",
                        {
                          className: this.isPathActive("/error-pages")
                            ? "nav-item active"
                            : "nav-item",
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: this.state.errorPagesMenuOpen
                              ? "nav-link menu-expanded"
                              : "nav-link",
                            onClick: function () {
                              return e.toggleMenuState("errorPagesMenuOpen");
                            },
                            "data-toggle": "collapse",
                          },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "Error Pages")
                          ),
                          l.a.createElement("i", { className: "menu-arrow" }),
                          l.a.createElement("i", {
                            className: "mdi mdi-security menu-icon",
                          })
                        ),
                        l.a.createElement(
                          L.a,
                          { in: this.state.errorPagesMenuOpen },
                          l.a.createElement(
                            "ul",
                            { className: "nav flex-column sub-menu" },
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/error-pages/error-404"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/error-pages/error-404",
                                },
                                "404"
                              )
                            ),
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/error-pages/error-500"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/error-pages/error-500",
                                },
                                "500"
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "li",
                        {
                          className: this.isPathActive("/general-pages")
                            ? "nav-item active"
                            : "nav-item",
                        },
                        l.a.createElement(
                          "div",
                          {
                            className: this.state.generalPagesMenuOpen
                              ? "nav-link menu-expanded"
                              : "nav-link",
                            onClick: function () {
                              return e.toggleMenuState("generalPagesMenuOpen");
                            },
                            "data-toggle": "collapse",
                          },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "General Pages")
                          ),
                          l.a.createElement("i", { className: "menu-arrow" }),
                          l.a.createElement("i", {
                            className: "mdi mdi-medical-bag menu-icon",
                          })
                        ),
                        l.a.createElement(
                          L.a,
                          { in: this.state.generalPagesMenuOpen },
                          l.a.createElement(
                            "ul",
                            { className: "nav flex-column sub-menu" },
                            l.a.createElement(
                              "li",
                              { className: "nav-item" },
                              " ",
                              l.a.createElement(
                                c.b,
                                {
                                  className: this.isPathActive(
                                    "/general-pages/blank-page"
                                  )
                                    ? "nav-link active"
                                    : "nav-link",
                                  to: "/general-pages/blank-page",
                                },
                                l.a.createElement(A.a, null, "Blank Page")
                              )
                            )
                          )
                        )
                      ),
                      l.a.createElement(
                        "li",
                        { className: "nav-item" },
                        l.a.createElement(
                          "a",
                          {
                            className: "nav-link",
                            href: "http://bootstrapdash.com/demo/purple-react-free/documentation/documentation.html",
                            rel: "noopener noreferrer",
                            target: "_blank",
                          },
                          l.a.createElement(
                            "span",
                            { className: "menu-title" },
                            l.a.createElement(A.a, null, "Documentation")
                          ),
                          l.a.createElement("i", {
                            className: "mdi mdi-file-document-box menu-icon",
                          })
                        )
                      )
                    )
                  );
                },
              },
              {
                key: "isPathActive",
                value: function (e) {
                  return this.props.location.pathname.startsWith(e);
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  this.onRouteChanged();
                  var e = document.querySelector("body");
                  document
                    .querySelectorAll(".sidebar .nav-item")
                    .forEach(function (a) {
                      a.addEventListener("mouseover", function () {
                        e.classList.contains("sidebar-icon-only") &&
                          a.classList.add("hover-open");
                      }),
                        a.addEventListener("mouseout", function () {
                          e.classList.contains("sidebar-icon-only") &&
                            a.classList.remove("hover-open");
                        });
                    });
                },
              },
            ]),
            a
          );
        })(n.Component),
        I = Object(p.g)(R),
        U = t(34),
        F = t(31),
        H = t(126),
        B = t(125);
      function G(e, a) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          a &&
            (n = n.filter(function (a) {
              return Object.getOwnPropertyDescriptor(e, a).enumerable;
            })),
            t.push.apply(t, n);
        }
        return t;
      }
      function J(e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = null != arguments[a] ? arguments[a] : {};
          a % 2
            ? G(t, !0).forEach(function (a) {
                Object(T.a)(e, a, t[a]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : G(t).forEach(function (a) {
                Object.defineProperty(
                  e,
                  a,
                  Object.getOwnPropertyDescriptor(t, a)
                );
              });
        }
        return e;
      }
      var z = (function (e) {
          function a(e) {
            var t;
            return (
              Object(i.a)(this, a),
              ((t = Object(o.a)(this, Object(u.a)(a).call(this, e))).state = {
                todos: [
                  { id: 1, task: "Pick up kids from school", isCompleted: !1 },
                  { id: 2, task: "Prepare for presentation", isCompleted: !0 },
                  { id: 3, task: "Print Statements", isCompleted: !1 },
                  { id: 4, task: "Create invoice", isCompleted: !1 },
                  { id: 5, task: "Call John", isCompleted: !0 },
                  { id: 6, task: "Meeting with Alisa", isCompleted: !1 },
                ],
                todosRtl: [
                  {
                    id: 1,
                    task: "\u0627\u0644\u062a\u0642\u0627\u0637 \u0627\u0644\u0627\u0637\u0641\u0627\u0644 \u0645\u0646 \u0627\u0644\u0645\u062f\u0631\u0633\u0629",
                    isCompleted: !1,
                  },
                  {
                    id: 2,
                    task: "\u0627\u0644\u0627\u0633\u062a\u0639\u062f\u0627\u062f \u0644\u0644\u0639\u0631\u0636 \u0627\u0644\u062a\u0642\u062f\u064a\u0645\u064a \u0627\u0644\u062e\u0627\u0635 \u0628\u0643",
                    isCompleted: !0,
                  },
                  {
                    id: 3,
                    task: "\u0637\u0628\u0627\u0639\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",
                    isCompleted: !1,
                  },
                  {
                    id: 4,
                    task: "\u0627\u0646\u0634\u0627\u0621 \u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631",
                    isCompleted: !1,
                  },
                  {
                    id: 5,
                    task: "\u0627\u0633\u062a\u062f\u0639\u0627\u0621 \u062c\u0648\u0646",
                    isCompleted: !0,
                  },
                  {
                    id: 6,
                    task: "\u0645\u0642\u0627\u0628\u0644\u0629 \u0645\u0639 \u0627\u0644\u064a\u0633\u0627",
                    isCompleted: !1,
                  },
                ],
                inputValue: "",
              }),
              (t.statusChangedHandler = t.statusChangedHandler.bind(
                Object(F.a)(t)
              )),
              (t.addTodo = t.addTodo.bind(Object(F.a)(t))),
              (t.removeTodo = t.removeTodo.bind(Object(F.a)(t))),
              (t.inputChangeHandler = t.inputChangeHandler.bind(
                Object(F.a)(t)
              )),
              t
            );
          }
          return (
            Object(d.a)(a, e),
            Object(m.a)(a, [
              {
                key: "statusChangedHandler",
                value: function (e, a) {
                  var t = J({}, this.state.todos[a]);
                  t.isCompleted = e.target.checked;
                  var n = Object(U.a)(this.state.todos);
                  (n[a] = t), this.setState({ todos: n });
                },
              },
              {
                key: "statusChangedHandlerRtl",
                value: function (e, a) {
                  var t = J({}, this.state.todosRtl[a]);
                  t.isCompleted = e.target.checked;
                  var n = Object(U.a)(this.state.todosRtl);
                  (n[a] = t), this.setState({ todosRtl: n });
                },
              },
              {
                key: "addTodo",
                value: function (e) {
                  e.preventDefault();
                  var a = Object(U.a)(this.state.todos);
                  a.unshift({
                    id: a.length ? a[a.length - 1].id + 1 : 1,
                    task: this.state.inputValue,
                    isCompleted: !1,
                  }),
                    this.setState({ todos: a, inputValue: "" });
                },
              },
              {
                key: "addTodoRtl",
                value: function (e) {
                  e.preventDefault();
                  var a = Object(U.a)(this.state.todosRtl);
                  a.unshift({
                    id: a.length ? a[a.length - 1].id + 1 : 1,
                    task: this.state.inputValue,
                    isCompleted: !1,
                  }),
                    this.setState({ todosRtl: a, inputValue: "" });
                },
              },
              {
                key: "removeTodo",
                value: function (e) {
                  var a = Object(U.a)(this.state.todos);
                  a.splice(e, 1), this.setState({ todos: a });
                },
              },
              {
                key: "removeTodoRtl",
                value: function (e) {
                  var a = Object(U.a)(this.state.todosRtl);
                  a.splice(e, 1), this.setState({ todosRtl: a });
                },
              },
              {
                key: "inputChangeHandler",
                value: function (e) {
                  this.setState({ inputValue: e.target.value });
                },
              },
              {
                key: "closeRightSidebar",
                value: function () {
                  document
                    .querySelector(".right-sidebar")
                    .classList.remove("open");
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return l.a.createElement(
                    "div",
                    null,
                    l.a.createElement(
                      "div",
                      {
                        id: "right-sidebar",
                        className: "settings-panel right-sidebar",
                      },
                      l.a.createElement("i", {
                        className: "settings-close mdi mdi-close",
                        onClick: this.closeRightSidebar,
                      }),
                      l.a.createElement(
                        H.a,
                        {
                          defaultActiveKey: "TODOLIST",
                          className: "bg-gradient-primary",
                          id: "uncontrolled-tab-example",
                        },
                        l.a.createElement(
                          B.a,
                          {
                            eventKey: "TODOLIST",
                            title: "TO DO LIST",
                            className: "test-tab",
                          },
                          l.a.createElement(
                            "div",
                            null,
                            l.a.createElement(
                              "div",
                              { className: "row" },
                              l.a.createElement(
                                "div",
                                { className: "col-lg-12" },
                                l.a.createElement(
                                  "div",
                                  { className: "px-3" },
                                  l.a.createElement(
                                    "div",
                                    null,
                                    l.a.createElement(
                                      "h4",
                                      { className: "card-title" },
                                      l.a.createElement(A.a, null, "Todo List")
                                    ),
                                    l.a.createElement(
                                      "form",
                                      {
                                        className: "add-items d-flex",
                                        onSubmit: this.addTodo,
                                      },
                                      l.a.createElement("input", {
                                        type: "text",
                                        className: "form-control h-auto",
                                        placeholder:
                                          "What do you need to do today?",
                                        value: this.state.inputValue,
                                        onChange: this.inputChangeHandler,
                                        required: !0,
                                      }),
                                      l.a.createElement(
                                        "button",
                                        {
                                          type: "submit",
                                          className:
                                            "btn btn-gradient-primary font-weight-bold",
                                        },
                                        l.a.createElement(A.a, null, "Add")
                                      )
                                    ),
                                    l.a.createElement(
                                      "div",
                                      { className: "list-wrapper" },
                                      l.a.createElement(
                                        "ul",
                                        { className: "todo-list" },
                                        this.state.todos.map(function (a, t) {
                                          return l.a.createElement(
                                            V,
                                            {
                                              isCompleted: a.isCompleted,
                                              changed: function (a) {
                                                return e.statusChangedHandler(
                                                  a,
                                                  t
                                                );
                                              },
                                              key: a.id,
                                              remove: function () {
                                                return e.removeTodo(t);
                                              },
                                            },
                                            a.task
                                          );
                                        })
                                      ),
                                      l.a.createElement(
                                        "ul",
                                        { className: "todo-list rtl-todo" },
                                        this.state.todosRtl.map(function (
                                          a,
                                          t
                                        ) {
                                          return l.a.createElement(
                                            V,
                                            {
                                              isCompleted: a.isCompleted,
                                              changed: function (a) {
                                                return e.statusChangedHandler(
                                                  a,
                                                  t
                                                );
                                              },
                                              key: a.id,
                                              remove: function () {
                                                return e.removeTodoRtl(t);
                                              },
                                            },
                                            a.task
                                          );
                                        })
                                      )
                                    )
                                  )
                                )
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "events py-4 border-bottom px-3" },
                              l.a.createElement(
                                "div",
                                { className: "wrapper d-flex mb-2" },
                                l.a.createElement("i", {
                                  className:
                                    "mdi mdi-circle-outline text-primary mr-2",
                                }),
                                l.a.createElement(
                                  "span",
                                  null,
                                  l.a.createElement(A.a, null, "Feb"),
                                  " 11 2018"
                                )
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "mb-0 font-weight-thin text-gray",
                                },
                                l.a.createElement(
                                  A.a,
                                  null,
                                  "Creating component page"
                                )
                              ),
                              l.a.createElement(
                                "p",
                                { className: "text-gray mb-0" },
                                l.a.createElement(
                                  A.a,
                                  null,
                                  "build a js based app"
                                )
                              )
                            ),
                            l.a.createElement(
                              "div",
                              { className: "events pt-4 px-3" },
                              l.a.createElement(
                                "div",
                                { className: "wrapper d-flex mb-2" },
                                l.a.createElement("i", {
                                  className:
                                    "mdi mdi-circle-outline text-primary mr-2",
                                }),
                                l.a.createElement(
                                  "span",
                                  null,
                                  l.a.createElement(A.a, null, "Feb"),
                                  " 7 2018"
                                )
                              ),
                              l.a.createElement(
                                "p",
                                {
                                  className: "mb-0 font-weight-thin text-gray",
                                },
                                l.a.createElement(
                                  A.a,
                                  null,
                                  "Meeting with Alisa"
                                )
                              ),
                              l.a.createElement(
                                "p",
                                { className: "text-gray mb-0 " },
                                l.a.createElement(
                                  A.a,
                                  null,
                                  "Call Sarah Graves"
                                )
                              )
                            )
                          )
                        ),
                        l.a.createElement(
                          B.a,
                          { eventKey: "CHATS", title: "CHATS" },
                          l.a.createElement(
                            "div",
                            null,
                            l.a.createElement(
                              "div",
                              {
                                className:
                                  "d-flex align-items-center justify-content-between border-bottom",
                              },
                              l.a.createElement(
                                "p",
                                {
                                  className:
                                    "settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0",
                                },
                                l.a.createElement(A.a, null, "FRIENDS")
                              ),
                              l.a.createElement(
                                "small",
                                {
                                  className:
                                    "settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 font-weight-normal",
                                },
                                l.a.createElement(A.a, null, "See All")
                              )
                            ),
                            l.a.createElement(
                              "ul",
                              { className: "chat-list" },
                              l.a.createElement(
                                "li",
                                { className: "list active" },
                                l.a.createElement(
                                  "div",
                                  { className: "profile" },
                                  l.a.createElement("img", {
                                    src: t(51),
                                    alt: "profile",
                                  }),
                                  l.a.createElement("span", {
                                    className: "online",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "info" },
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "Thomas Douglas"
                                    )
                                  ),
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(A.a, null, "Available")
                                  )
                                ),
                                l.a.createElement(
                                  "small",
                                  { className: "text-muted my-auto" },
                                  "19 ",
                                  l.a.createElement(A.a, null, "min")
                                )
                              ),
                              l.a.createElement(
                                "li",
                                { className: "list" },
                                l.a.createElement(
                                  "div",
                                  { className: "profile" },
                                  l.a.createElement("img", {
                                    src: t(67),
                                    alt: "profile",
                                  }),
                                  l.a.createElement("span", {
                                    className: "offline",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "info" },
                                  l.a.createElement(
                                    "div",
                                    { className: "wrapper d-flex" },
                                    l.a.createElement(
                                      "p",
                                      null,
                                      l.a.createElement(A.a, null, "Catherine")
                                    )
                                  ),
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(A.a, null, "Away")
                                  )
                                ),
                                l.a.createElement(
                                  "div",
                                  {
                                    className:
                                      "badge badge-success badge-pill my-auto mx-2",
                                  },
                                  "4"
                                ),
                                l.a.createElement(
                                  "small",
                                  { className: "text-muted my-auto" },
                                  "23 ",
                                  l.a.createElement(A.a, null, "min")
                                )
                              ),
                              l.a.createElement(
                                "li",
                                { className: "list" },
                                l.a.createElement(
                                  "div",
                                  { className: "profile" },
                                  l.a.createElement("img", {
                                    src: t(64),
                                    alt: "profile",
                                  }),
                                  l.a.createElement("span", {
                                    className: "online",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "info" },
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "Daniel Russell"
                                    )
                                  ),
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(A.a, null, "Available")
                                  )
                                ),
                                l.a.createElement(
                                  "small",
                                  { className: "text-muted my-auto" },
                                  "14 ",
                                  l.a.createElement(A.a, null, "min")
                                )
                              ),
                              l.a.createElement(
                                "li",
                                { className: "list" },
                                l.a.createElement(
                                  "div",
                                  { className: "profile" },
                                  l.a.createElement("img", {
                                    src: t(66),
                                    alt: "profile",
                                  }),
                                  l.a.createElement("span", {
                                    className: "offline",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "info" },
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "James Richardson"
                                    )
                                  ),
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(A.a, null, "Away")
                                  )
                                ),
                                l.a.createElement(
                                  "small",
                                  { className: "text-muted my-auto" },
                                  "2 ",
                                  l.a.createElement(A.a, null, "min")
                                )
                              ),
                              l.a.createElement(
                                "li",
                                { className: "list" },
                                l.a.createElement(
                                  "div",
                                  { className: "profile" },
                                  l.a.createElement("img", {
                                    src: t(84),
                                    alt: "profile",
                                  }),
                                  l.a.createElement("span", {
                                    className: "online",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "info" },
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(
                                      A.a,
                                      null,
                                      "Madeline Kennedy"
                                    )
                                  ),
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(A.a, null, "Available")
                                  )
                                ),
                                l.a.createElement(
                                  "small",
                                  { className: "text-muted my-auto" },
                                  "5 ",
                                  l.a.createElement(A.a, null, "min")
                                )
                              ),
                              l.a.createElement(
                                "li",
                                { className: "list" },
                                l.a.createElement(
                                  "div",
                                  { className: "profile" },
                                  l.a.createElement("img", {
                                    src: t(85),
                                    alt: "profile",
                                  }),
                                  l.a.createElement("span", {
                                    className: "online",
                                  })
                                ),
                                l.a.createElement(
                                  "div",
                                  { className: "info" },
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(A.a, null, "Sarah Graves")
                                  ),
                                  l.a.createElement(
                                    "p",
                                    null,
                                    l.a.createElement(A.a, null, "Available")
                                  )
                                ),
                                l.a.createElement(
                                  "small",
                                  { className: "text-muted my-auto" },
                                  "47 ",
                                  l.a.createElement(A.a, null, "min")
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
        })(n.Component),
        V = function (e) {
          return l.a.createElement(
            "li",
            { className: e.isCompleted ? "completed" : null },
            l.a.createElement(
              "div",
              { className: "form-check" },
              l.a.createElement(
                "label",
                { htmlFor: "", className: "form-check-label" },
                l.a.createElement("input", {
                  className: "checkbox",
                  type: "checkbox",
                  checked: e.isCompleted,
                  onChange: e.changed,
                }),
                " ",
                e.children,
                " ",
                l.a.createElement("i", { className: "input-helper" })
              )
            ),
            l.a.createElement("i", {
              className: "remove mdi mdi-close-circle-outline",
              onClick: e.remove,
            })
          );
        },
        q = z,
        W = (function (e) {
          function a() {
            return (
              Object(i.a)(this, a),
              Object(o.a)(this, Object(u.a)(a).apply(this, arguments))
            );
          }
          return (
            Object(d.a)(a, e),
            Object(m.a)(a, [
              {
                key: "render",
                value: function () {
                  return l.a.createElement(
                    "footer",
                    { className: "footer" },
                    l.a.createElement(
                      "div",
                      {
                        className:
                          "d-sm-flex justify-content-center justify-content-sm-between py-2",
                      },
                      l.a.createElement(
                        "span",
                        {
                          className:
                            "text-muted text-center text-sm-left d-block d-sm-inline-block",
                        },
                        "Copyright \xa9 ",
                        l.a.createElement(
                          "a",
                          {
                            href: "https://www.bootstrapdash.com/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          "bootstrapdash.com "
                        ),
                        "2020"
                      ),
                      l.a.createElement(
                        "span",
                        {
                          className:
                            "float-none float-sm-right d-block mt-1 mt-sm-0 text-center",
                        },
                        l.a.createElement(
                          "a",
                          {
                            href: "https://www.bootstrapdash.com/react-admin-templates/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                          " react admin "
                        ),
                        " templates from BootstrapDash.  "
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        K = (function (e) {
          function a() {
            var e, t;
            Object(i.a)(this, a);
            for (var n = arguments.length, l = new Array(n), s = 0; s < n; s++)
              l[s] = arguments[s];
            return (
              ((t = Object(o.a)(
                this,
                (e = Object(u.a)(a)).call.apply(e, [this].concat(l))
              )).state = {}),
              t
            );
          }
          return (
            Object(d.a)(a, e),
            Object(m.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.onRouteChanged();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.isFullPageLayout
                      ? ""
                      : l.a.createElement(D, null),
                    a = this.state.isFullPageLayout
                      ? ""
                      : l.a.createElement(I, null),
                    t = this.state.isFullPageLayout
                      ? ""
                      : l.a.createElement(q, null),
                    n = this.state.isFullPageLayout
                      ? ""
                      : l.a.createElement(W, null);
                  return l.a.createElement(
                    "div",
                    { className: "container-scroller" },
                    e,
                    l.a.createElement(
                      "div",
                      { className: "container-fluid page-body-wrapper" },
                      a,
                      l.a.createElement(
                        "div",
                        { className: "main-panel" },
                        l.a.createElement(
                          "div",
                          { className: "content-wrapper" },
                          l.a.createElement(S, null),
                          t
                        ),
                        n
                      )
                    )
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.location !== e.location && this.onRouteChanged();
                },
              },
              {
                key: "onRouteChanged",
                value: function () {
                  console.log("ROUTE CHANGED");
                  var e = this.props.i18n,
                    a = document.querySelector("body");
                  "/layout/RtlLayout" === this.props.location.pathname
                    ? (a.classList.add("rtl"), e.changeLanguage("ar"))
                    : (a.classList.remove("rtl"), e.changeLanguage("en")),
                    window.scrollTo(0, 0);
                  for (
                    var t = [
                        "/user-pages/login-1",
                        "/user-pages/register-1",
                        "/user-pages/lockscreen",
                        "/error-pages/error-404",
                        "/error-pages/error-500",
                        "/general-pages/landing-page",
                      ],
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    if (this.props.location.pathname === t[n]) {
                      this.setState({ isFullPageLayout: !0 }),
                        document
                          .querySelector(".page-body-wrapper")
                          .classList.add("full-page-wrapper");
                      break;
                    }
                    this.setState({ isFullPageLayout: !1 }),
                      document
                        .querySelector(".page-body-wrapper")
                        .classList.remove("full-page-wrapper");
                  }
                },
              },
            ]),
            a
          );
        })(n.Component),
        _ = Object(A.c)()(Object(p.g)(K)),
        Q = t(62),
        Y = t(81);
      Q.a
        .use(Y.a)
        .use(A.b)
        .init({
          resources: {
            en: {
              translations: { "Overview dashboard": "Overview dashboard" },
            },
            ar: {
              translations: {
                Overview: "\u0646\u0638\u0631\u0629 \u0639\u0627\u0645\u0629",
                "Weekly Sales":
                  "\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064a\u0629",
                "Increased by":
                  "\u0632\u064a\u0627\u062f\u0629 \u0628\u0645\u0639\u062f\u0644",
                "Decreased by":
                  "\u0627\u0646\u062e\u0641\u0636\u062a \u0645\u0646 \u0642\u0628\u0644",
                "Weekly Orders":
                  "\u0627\u0644\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u064a\u0629",
                "Visitors Online":
                  "\u0627\u0644\u0632\u0648\u0627\u0631 \u0639\u0644\u0649 \u0627\u0644\u0627\u0646\u062a\u0631\u0646\u062a",
                "Visit And Sales Statistics":
                  "\u0625\u062d\u0635\u0627\u0626\u064a\u0627\u062a \u0627\u0644\u0632\u064a\u0627\u0631\u0629 \u0648\u0627\u0644\u0645\u0628\u064a\u0639\u0627\u062a",
                CHN: "\u0643\u0648\u0634\u064a\u0646",
                USA: "\u0627\u0644\u0648\u0644\u0627\u064a\u0627\u062a \u0627\u0644\u0645\u062a\u062d\u062f\u0629 \u0627\u0644\u0627\u0645\u0631\u064a\u0643\u064a\u0647",
                UK: "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629",
                "Search Engines":
                  "\u0645\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0628\u062d\u062b",
                "Direct Click":
                  "\u0627\u0646\u0642\u0631 \u0645\u0628\u0627\u0634\u0631\u0629",
                "Bookmarks Click":
                  "\u0627\u0644\u0625\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0631\u062c\u0639\u064a\u0629 \u0627\u0646\u0642\u0631",
                "Recent Tickets":
                  "\u0627\u0644\u062a\u0630\u0627\u0643\u0631 \u0627\u0644\u062d\u062f\u064a\u062b\u0629",
                Assignee: "\u062a\u0639\u064a\u064a\u0646",
                Subject: "\u0645\u0648\u0636\u0648\u0639",
                Status: "\u0642\u0636\u064a\u0629",
                "Last Update":
                  "\u0622\u062e\u0631 \u062a\u062d\u062f\u064a\u062b",
                "Tracking ID":
                  "\u062a\u062a\u0628\u0639 \u0627\u0644\u0647\u0648\u064a\u0629",
                "Fund is not recieved":
                  "\u0644\u0645 \u064a\u062a\u0645 \u062a\u0644\u0642\u064a \u0645\u0631\u0628\u0639",
                DONE: "\u0647\u0648 \u0641\u0639\u0644",
                Dec: "\u062f\u064a\u0633\u0645\u0628\u0631",
                "Stella Johnson":
                  "\u0633\u062a\u064a\u0644\u0627 \u062c\u0648\u0646\u0633\u0648\u0646",
                "High loading time":
                  "\u0627\u0631\u062a\u0641\u0627\u0639 \u0648\u0642\u062a \u0627\u0644\u062a\u062d\u0645\u064a\u0644",
                PROGRESS: "\u062a\u0642\u062f\u0645",
                "Marina Michel":
                  "\u0645\u0627\u0631\u064a\u0646\u0627 \u0645\u064a\u0634\u064a\u0644",
                "Website down for one week":
                  "\u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0623\u0633\u0641\u0644 \u0644\u0645\u062f\u0629 \u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f",
                "ON HOLD": "\u0623\u0646\u0627 \u0645\u0646\u062a\u0638\u0631",
                "John Doe":
                  "\u0641\u0644\u0627\u0646 \u0627\u0644\u0641\u0644\u0627\u0646\u064a",
                "Loosing control on server":
                  "\u0641\u0642\u062f\u0627\u0646 \u062a\u062d\u0643\u0645 \u0627\u0644\u062e\u0627\u062f\u0645",
                REJECTED: "\u063a\u064a\u0631 \u0645\u0642\u0628\u0648\u0644",
                "Recent Updates":
                  "\u0627\u0644\u062a\u062d\u062f\u064a\u062b\u0627\u062a \u0627\u0644\u0623\u062e\u064a\u0631\u0629",
                October:
                  "\u0634\u0647\u0631 \u0627\u0643\u062a\u0648\u0628\u0631",
                "School Website":
                  "\u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u062f\u0631\u0633\u0629",
                "Authentication Module":
                  "\u0648\u062d\u062f\u0629 \u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629",
                "It is a long established fact that a reader will be distracted by the readable content of a page":
                  "\u0625\u0646\u0647\u0627 \u062d\u0642\u064a\u0642\u0629 \u062b\u0627\u0628\u062a\u0629 \u0645\u0646\u0630 \u0641\u062a\u0631\u0629 \u0637\u0648\u064a\u0644\u0629 \u0648\u0647\u064a \u0623\u0646 \u0627\u0644\u0642\u0631\u0627\u0621 \u0633\u0648\u0641 \u064a\u0635\u0631\u0641\u0647\u0645 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u0645\u0642\u0631\u0648\u0621 \u0644\u0644\u0635\u0641\u062d\u0629",
                "Project Status":
                  "\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
                Name: "\u0646\u0648\u0646",
                "Due Date":
                  "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0633\u062a\u062d\u0642\u0627\u0642",
                Progress: "\u062a\u0642\u062f\u0645",
                "Herman Beck":
                  "\u0647\u064a\u0631\u0645\u0627\u0646 \u0628\u064a\u0643",
                May: "\u0645\u0627\u064a\u0648",
                "Messsy Adam":
                  "\u0622\u062f\u0645 \u0641\u0648\u0636\u0648\u064a",
                Jul: "\u064a\u0648\u0644\u064a\u0648",
                "John Richards":
                  "\u062c\u0648\u0646 \u0631\u064a\u062a\u0634\u0627\u0631\u062f\u0632",
                Apr: "\u0623\u0628\u0631\u064a\u0644",
                "Peter Meggik":
                  "\u0628\u064a\u062a\u0631 \u0645\u064a\u062c\u064a\u0643",
                Edward: "\u0625\u062f\u0648\u0627\u0631\u062f",
                Ronald: "\u0631\u0648\u0646\u0627\u0644\u062f",
                Add: "\u062d\u0641\u0638",
                "jack Menqu":
                  "\u062c\u0627\u0643 \u0645\u064a\u0646\u0643\u0648",
                "Traffic Sources":
                  "\u0645\u0635\u0627\u062f\u0631 \u062d\u0631\u0643\u0629 \u0627\u0644\u0645\u0631\u0648\u0631",
                Main: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a",
                Dashboard:
                  "\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
                Widgets: "\u0627\u0644\u062d\u0627\u062c\u064a\u0627\u062a",
                "UI Elements":
                  "\u0639\u0646\u0627\u0635\u0631 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
                "UI Features":
                  "\u0645\u064a\u0632\u0627\u062a \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
                "Basic UI Elements":
                  "\u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629",
                Accordions: "\u0623\u0643\u0648\u0631\u062f\u064a\u0648\u0646",
                Buttons: "\u0632\u0631",
                Badges: "\u0634\u0627\u0631\u0627\u062a",
                Breadcrumbs:
                  "\u0641\u062a\u0627\u062a \u0627\u0644\u062e\u0628\u0632",
                "Form Elements": "\u0646\u0645\u0627\u0630\u062c",
                "Data Representation":
                  "\u0634\u0631\u062d \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",
                Dropdowns:
                  "\u0642\u0627\u0626\u0650\u0645\u0629 \u0645\u064f\u0646\u0652\u0633\u064e\u062f\u0650\u0644\u0629",
                Modals: "\u0627\u0644\u062d\u0648\u0627\u0631",
                "Progress bar":
                  "\u0634\u0631\u064a\u0637 \u0627\u0644\u062a\u0642\u062f\u0645",
                Pagination:
                  "\u062a\u0631\u0642\u064a\u0645 \u0627\u0644\u0635\u0641\u062d\u0627\u062a",
                Tabs: "\u0639\u0644\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0628\u0648\u064a\u0628",
                Typography:
                  "\u0627\u0644\u0627\u0633\u0644\u0648\u0628 \u0648\u0627\u0644\u0638\u0647\u0648\u0631",
                Tooltips: "\u062a\u0644\u0645\u064a\u062d",
                "Advanced UI":
                  "\u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629",
                Clipboard: "\u0627\u0644\u062d\u0627\u0641\u0638\u0629",
                "Context menu":
                  "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0633\u064a\u0627\u0642",
                Sliders: "\u0627\u0644\u0627\u0646\u0632\u0644\u0627\u0642",
                Carousel: "\u062f\u0627\u0626\u0631\u064a",
                Loaders: "\u0631\u0627\u0641\u0639\u0627\u062as",
                "Form elements": "\u0646\u0645\u0627\u0630\u062c",
                "Basic Elements":
                  "\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0646\u0645\u0648\u0630\u062c",
                "Advanced Elements":
                  "\u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0645\u062a\u0642\u062f\u0645\u0629",
                Validation:
                  "\u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0635\u062d\u0629",
                Wizard: "\u0633\u0627\u062d\u0631",
                Editors: "\u0627\u0644\u0645\u062d\u0631\u0631\u064a\u0646",
                "Text Editor":
                  "\u0645\u062d\u0631\u0631\u064a \u0627\u0644\u0646\u0635\u0648\u0635",
                "Code Editor":
                  "\u0645\u062d\u0631\u0631\u064a \u0627\u0644\u0643\u0648\u062f",
                Charts:
                  "\u0627\u0644\u0631\u0633\u0648\u0645 \u0627\u0644\u0628\u064a\u0627\u0646\u064a\u0629",
                Tables: "\u0627\u0644\u0637\u0627\u0648\u0644\u0629s",
                "Basic Table":
                  "\u0627\u0644\u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629",
                "Data Table":
                  "\u062c\u062f\u0627\u0648\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a",
                "Sortable Table":
                  "\u062c\u062f\u0648\u0644 \u0642\u0627\u0628\u0644 \u0644\u0644\u0641\u0631\u0632",
                Popups: "\u064a\u0638\u0647\u0631 \u0641\u062c\u0623\u0629s",
                Notifications: "\u0625\u062e\u0637\u0627\u0631\u0627\u062as",
                Icons: "\u0627\u0644\u0631\u0645\u0648\u0632",
                Maps: "\u062e\u0631\u0627\u0626\u0637",
                "Sample Pages":
                  "\u0635\u0641\u062d\u0627\u062a \u0639\u064a\u0646\u0629",
                "User Pages":
                  "\u0635\u0641\u062d\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
                "User Listing":
                  "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
                Login:
                  "\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644",
                "Login 2":
                  " \u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 2 ",
                Register: "\u0633\u062c\u0644",
                "Register 2": " \u0633\u062c\u0644 2 ",
                Lockscreen:
                  " \u0642\u0641\u0644 \u0627\u0644\u0634\u0627\u0634\u0629 ",
                "Error Pages":
                  "\u0635\u0641\u062d\u0627\u062a \u062e\u0637\u0623",
                "General Pages":
                  "\u0627\u0644\u0635\u0641\u062d\u0627\u062a \u0627\u0644\u0639\u0627\u0645\u0629",
                "Blank Page":
                  " \u0635\u0641\u062d\u0629 \u0641\u0627\u0631\u063a\u0629 ",
                Profile:
                  "\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062e\u0635\u064a ",
                FAQ: "\u062a\u0639\u0644\u064a\u0645\u0627\u062a",
                "FAQ 2":
                  " \u0623\u0633\u0626\u0644\u0629 \u0645\u0643\u0631\u0631\u0629 2 ",
                "News Grid":
                  " \u0634\u0628\u0643\u0629 \u0627\u0644\u0623\u062e\u0628\u0627\u0631 ",
                Timeline:
                  " \u0627\u0644\u062c\u062f\u0648\u0644 \u0627\u0644\u0632\u0645\u0646\u064a ",
                "Search Results":
                  " \u0646\u062a\u0627\u0626\u062c \u0627\u0644\u0628\u062d\u062b ",
                Chats: " \u062f\u0631\u062f\u0634\u0629",
                Tickets: " \u062a\u0630\u0627\u0643\u0631 ",
                Gallery: " \u0635\u0627\u0644\u0629 \u0639\u0631\u0636",
                "Todo List":
                  "\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0645\u0647\u0627\u0645",
                "E-commerce":
                  "\u0627\u0644\u062a\u062c\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a\u0629",
                Invoice: " \u0641\u0627\u062a\u0648\u0631\u0629 ",
                Pricing:
                  " \u062c\u062f\u0648\u0644 \u0627\u0644\u062a\u0633\u0639\u064a\u0631 ",
                Apps: "\u062a\u0637\u0628\u064a\u0642\u0627\u062a",
                "E-mail":
                  "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a",
                "Kanban Board":
                  "\u0643\u0627\u0646\u0628\u0627\u0646 \u0628\u0648\u0631\u062f",
                Calendar: "\u0627\u0644\u062a\u0642\u0648\u064a\u0645",
                Help: "\u0645\u0633\u0627\u0639\u062f\u0629",
                Documentation: "\u062a\u0648\u062b\u064a\u0642",
                "David Greymaax":
                  "\u062f\u064a\u0641\u064a\u062f \u062c\u0631\u064a\u0645\u0627\u0643\u0633",
                "Project Manager":
                  "\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
                "Take Tour": "\u062e\u0630 \u062c\u0648\u0644\u0629",
                "Log Out":
                  "\u062a\u0633\u062c\u064a\u0644 \u062e\u0631\u0648\u062c",
                "Gold Member": "\u0639\u0636\u0648 \u0630\u0647\u0628\u064a",
                "Tree View":
                  "\u0639\u0631\u0636 \u0627\u0644\u0634\u062c\u0631\u0629",
                "Landing Page":
                  "\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0645\u0642\u0635\u0648\u062f\u0629",
                "Product Catalogue":
                  "\u0628\u064a\u0627\u0646 \u0627\u0644\u0645\u0646\u062a\u062c",
                "Project List":
                  "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",
                Orders: "\u0637\u0644\u0628",
                Navigation:
                  "\u0642\u0627\u0626\u0645\u0629 \u0637\u0639\u0627\u0645",
                "Account settings":
                  "\u0625\u0639\u062f\u0627\u062f\u062a \u0627\u0644\u062d\u0633\u0627\u0628",
                "Change Password":
                  "\u062a\u063a\u064a\u064a\u0631 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631",
                "To-do list":
                  "\u062d\u0636\u0631 \u0642\u0627\u0626\u0645\u0629",
                "Richard V.Welsh":
                  "\u0631\u064a\u062a\u0634\u0627\u0631\u062f \u0641. \u0648\u0644\u0634",
                Manager: "\u0645\u062f\u064a\u0631",
                "New Project":
                  "\u0645\u0634\u0631\u0648\u0639 \u062c\u062f\u064a\u062f",
                Reports: "\u062a\u0642\u0627\u0631\u064a\u0631",
                PDF: "\u0628\u064a \u062f\u064a \u0625\u0641",
                doc: "\u0648\u062b\u064a\u0642\u0629",
                Projects: "\u0648\u062b\u064a\u0642\u0629",
                "View Project":
                  "\u0639\u0631\u0636 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",
                "Edit Project":
                  "\u062a\u062d\u0631\u064a\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",
                English:
                  "\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629",
                Arabic: "\u0639\u0631\u0628\u0649",
                "User Options":
                  "\u062e\u064a\u0627\u0631\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
                Actions: "\u0639\u0645\u0644",
                "Lock Account":
                  "\u0642\u0641\u0644 \u0627\u0644\u062d\u0633\u0627\u0628",
                Messages: "\u0631\u0633\u0627\u0626\u0644",
                "Mark send you a message":
                  "\u0645\u0627\u0631\u0643 \u064a\u0631\u0633\u0644 \u0644\u0643 \u0631\u0633\u0627\u0644\u0629",
                "Minutes ago":
                  "\u0645\u0646\u0630 1 \u062f\u0642\u064a\u0642\u0629",
                "Cregh send you a message":
                  "\u0625\u0646\u0634\u0627\u0621 \u0646\u0631\u0633\u0644 \u0644\u0643 \u0631\u0633\u0627\u0644\u0629",
                "Profile picture updated":
                  "\u062a\u062d\u062f\u064a\u062b \u0635\u0648\u0631\u0629 \u0645\u0644\u0641\u0643 \u0627\u0644\u0634\u062e\u0635\u064a",
                "Update dashboard":
                  "\u062a\u062d\u062f\u064a\u062b \u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
                "new messages":
                  "4 \u0631\u0633\u0627\u0626\u0644 \u062c\u062f\u064a\u062f\u0629",
                "Event today":
                  "\u062d\u062f\u062b \u0627\u0644\u064a\u0648\u0645",
                "Just a reminder that you have an event today":
                  "\u0645\u062c\u0631\u062f \u062a\u0630\u0643\u064a\u0631 \u0628\u0623\u0646 \u0644\u062f\u064a\u0643 \u062d\u062f\u062b \u0627\u0644\u064a\u0648\u0645",
                "Launch Admin":
                  "\u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u0633\u0624\u0648\u0644",
                "New admin wow":
                  "\u0645\u0634\u0631\u0641 \u062c\u062f\u064a\u062f \u0648\u0627\u0648!",
                "See all notifications":
                  "\u0627\u0637\u0644\u0639 \u0639\u0644\u0649 \u062c\u0645\u064a\u0639 \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062a",
                Inbox:
                  "\u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u0648\u0627\u0631\u062f",
                "All rights reserved":
                  "\u0643\u0644 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629",
                "Hand-crafted":
                  "\u0627\u0644\u062d\u0631\u0641 \u0627\u0644\u064a\u062f\u0648\u064a\u0629",
                "made with": "\u0645\u0635\u0646\u0648\u0639 \u0645\u0646",
                Copyright:
                  "\u062d\u0642\u0648\u0642 \u0627\u0644\u062a\u0623\u0644\u064a\u0641 \u0648\u0627\u0644\u0646\u0634\u0631",
                Settings:
                  "\u0627\u0644\u0625\u0639\u062f\u0627\u062f\u0627\u062a",
                "Advanced settings":
                  "\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629",
                "Create New Project":
                  "\u0625\u0646\u0634\u0627\u0621 \u0645\u0634\u0631\u0648\u0639 \u062c\u062f\u064a\u062f",
                "Software Development":
                  "\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a",
                "UI Development":
                  "\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u062c\u0647\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",
                "Software Testing":
                  "\u0627\u062e\u062a\u0628\u0627\u0631 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a",
                "See all projects":
                  "\u0631\u0624\u064a\u0629 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",
                "Manage Accounts":
                  "\u0627\u062f\u0627\u0631\u0629 \u0627\u0644\u062d\u0633\u0627\u0628",
                "Check Inbox":
                  "\u062a\u062d\u0642\u0642 \u0645\u0646 \u0628\u0631\u064a\u062f\u0643 \u0627\u0644\u0648\u0627\u0631\u062f",
                "Sign Out": "\u062e\u0631\u0648\u062c",
                Score: "\u0623\u062d\u0631\u0632 \u0647\u062f\u0641\u0627",
                Schedule: "\u0627\u0644\u0637\u0627\u0648\u0644\u0629",
                New: "\u062c\u062f\u064a\u062f",
                "You have": "\u0639\u0646\u062f\u0643",
                "Application Error":
                  "\u062e\u0637\u0623 \u0641\u064a \u062a\u0637\u0628\u064a\u0642",
                "Just now": "\u0627\u0644\u0627\u0646 \u0641\u0642\u0637",
                "View all": "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644",
                "Private message":
                  "\u0631\u0633\u0627\u0644\u0629 \u062e\u0627\u0635\u0629",
                "New user registration":
                  "\u062a\u0633\u062c\u064a\u0644 \u0645\u0633\u062a\u062e\u062f\u0645 \u062c\u062f\u064a\u062f",
                "days ago": "\u0623\u064a\u0627\u0645 \u0645\u0636\u062a",
                "unread mails":
                  "\u0631\u0633\u0627\u0626\u0644 \u063a\u064a\u0631 \u0645\u0642\u0631\u0648\u0621\u0629",
                "Marian Garner":
                  "\u0645\u0627\u0631\u064a\u0627\u0646 \u063a\u0627\u0631\u0646\u0631",
                "The meeting is cancelled":
                  "\u062a\u0645 \u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639",
                "David Grey":
                  "\u062f\u064a\u0641\u064a\u062f \u062c\u0631\u0627\u064a",
                "Travis Jenkins":
                  "\u062a\u0631\u0627\u0641\u064a\u0633 \u062c\u0646\u0643\u064a\u0646\u0632",
                "new notifications":
                  "\u0625\u062e\u0637\u0627\u0631\u0627\u062a \u062c\u062f\u064a\u062f\u0629",
                "Activity Log":
                  "\u0633\u062c\u0644 \u0627\u0644\u0623\u0646\u0634\u0637\u0629",
                Signout: "\u062e\u0631\u0648\u062c",
                "Creating component page":
                  "\u0625\u0646\u0634\u0627\u0621 \u0635\u0641\u062d\u0629 \u0627\u0644\u0645\u0643\u0648\u0646",
                "build a js based app":
                  "\u0628\u0646\u0627\u0621 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0639\u0644\u0649 \u0623\u0633\u0627\u0633 JS",
                "Meeting with Alisa":
                  "\u0645\u0642\u0627\u0628\u0644\u0629 \u0645\u0639 \u0627\u0644\u064a\u0633\u0627",
                "Call Sarah Graves":
                  "\u0627\u0633\u062a\u062f\u0639\u0627\u0621 \u0633\u0627\u0631\u0629 \u0627\u0644\u0642\u0628\u0648\u0631",
                FRIENDS: "\u0627\u0635\u062d\u0627\u0628",
                "See All": "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644",
                "Thomas Douglas":
                  "\u062a\u0648\u0645\u0627\u0633 \u062f\u0648\u063a\u0644\u0627\u0633",
                Available: "\u0645\u062a\u0627\u062d",
                Catherine: "\u0643\u0627\u062b\u0631\u064a\u0646",
                min: "\u062f\u0642\u064a\u0642",
                "Daniel Russell":
                  "\u062f\u0627\u0646\u064a\u0627\u0644 \u0631\u0627\u0633\u0644",
                "James Richardson":
                  "\u062c\u064a\u0645\u0633 \u0631\u064a\u062a\u0634\u0627\u0631\u062f\u0633\u0648\u0646",
                "Madeline Kennedy":
                  "\u0645\u0627\u062f\u0644\u064a\u0646 \u0643\u064a\u0646\u064a\u062f\u064a",
                "Sarah Graves":
                  "\u0645\u0642\u0627\u0628\u0631 \u0633\u0627\u0631\u0629",
                Feb: "\u0634\u0647\u0631 \u0641\u0628\u0631\u0627\u064a\u0631",
              },
            },
          },
          fallbackLng: "en",
          debug: !0,
          ns: ["translations"],
          defaultNS: "translations",
          keySeparator: !1,
          interpolation: { escapeValue: !1 },
        });
      Q.a,
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      r.a.render(
        l.a.createElement(
          c.a,
          { basename: "/romcham" },
          l.a.createElement(_, null)
        ),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister();
          });
    },
    51: function (e, a, t) {
      e.exports = t.p + "static/media/face1.42d41e61.jpg";
    },
    64: function (e, a, t) {
      e.exports = t.p + "static/media/face3.16c67435.jpg";
    },
    66: function (e, a, t) {
      e.exports = t.p + "static/media/face4.d5afaa66.jpg";
    },
    67: function (e, a, t) {
      e.exports = t.p + "static/media/face2.7e0e382d.jpg";
    },
    82: function (e, a, t) {
      e.exports = t.p + "static/media/logo.a79624ec.svg";
    },
    84: function (e, a, t) {
      e.exports = t.p + "static/media/face5.d2417284.jpg";
    },
    85: function (e, a, t) {
      e.exports = t.p + "static/media/face6.07adc9a9.jpg";
    },
    86: function (e, a, t) {
      e.exports = t(121);
    },
    91: function (e, a, t) {},
  },
  [[86, 3, 4]],
]);
//# sourceMappingURL=main.20b24660.chunk.js.map
