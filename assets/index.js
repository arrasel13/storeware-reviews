(function () {
  const $ = document.createElement("link").relList;
  if ($ && $.supports && $.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) m(R);
  new MutationObserver((R) => {
    for (const G of R)
      if (G.type === "childList")
        for (const lt of G.addedNodes)
          lt.tagName === "LINK" && lt.rel === "modulepreload" && m(lt);
  }).observe(document, { childList: !0, subtree: !0 });
  function Y(R) {
    const G = {};
    return (
      R.integrity && (G.integrity = R.integrity),
      R.referrerPolicy && (G.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === "use-credentials"
        ? (G.credentials = "include")
        : R.crossOrigin === "anonymous"
        ? (G.credentials = "omit")
        : (G.credentials = "same-origin"),
      G
    );
  }
  function m(R) {
    if (R.ep) return;
    R.ep = !0;
    const G = Y(R);
    fetch(R.href, G);
  }
})();
var ns = { exports: {} },
  bn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function Fm() {
  if (vd) return bn;
  vd = 1;
  var _ = Symbol.for("react.transitional.element"),
    $ = Symbol.for("react.fragment");
  function Y(m, R, G) {
    var lt = null;
    if (
      (G !== void 0 && (lt = "" + G),
      R.key !== void 0 && (lt = "" + R.key),
      "key" in R)
    ) {
      G = {};
      for (var et in R) et !== "key" && (G[et] = R[et]);
    } else G = R;
    return (
      (R = G.ref),
      { $$typeof: _, type: m, key: lt, ref: R !== void 0 ? R : null, props: G }
    );
  }
  return (bn.Fragment = $), (bn.jsx = Y), (bn.jsxs = Y), bn;
}
var pd;
function Im() {
  return pd || ((pd = 1), (ns.exports = Fm())), ns.exports;
}
var c = Im(),
  is = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd;
function Pm() {
  if (yd) return F;
  yd = 1;
  var _ = Symbol.for("react.transitional.element"),
    $ = Symbol.for("react.portal"),
    Y = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    lt = Symbol.for("react.context"),
    et = Symbol.for("react.forward_ref"),
    O = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    B = Symbol.for("react.lazy"),
    D = Symbol.for("react.activity"),
    Q = Symbol.iterator;
  function ot(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (Q && o[Q]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var Z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    V = Object.assign,
    ft = {};
  function vt(o, z, N) {
    (this.props = o),
      (this.context = z),
      (this.refs = ft),
      (this.updater = N || Z);
  }
  (vt.prototype.isReactComponent = {}),
    (vt.prototype.setState = function (o, z) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, o, z, "setState");
    }),
    (vt.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    });
  function Ut() {}
  Ut.prototype = vt.prototype;
  function at(o, z, N) {
    (this.props = o),
      (this.context = z),
      (this.refs = ft),
      (this.updater = N || Z);
  }
  var Et = (at.prototype = new Ut());
  (Et.constructor = at), V(Et, vt.prototype), (Et.isPureReactComponent = !0);
  var Nt = Array.isArray;
  function Bt() {}
  var I = { H: null, A: null, T: null, S: null },
    Mt = Object.prototype.hasOwnProperty;
  function Ot(o, z, N) {
    var M = N.ref;
    return {
      $$typeof: _,
      type: o,
      key: z,
      ref: M !== void 0 ? M : null,
      props: N,
    };
  }
  function C(o, z) {
    return Ot(o.type, z, o.props);
  }
  function L(o) {
    return typeof o == "object" && o !== null && o.$$typeof === _;
  }
  function K(o) {
    var z = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (N) {
        return z[N];
      })
    );
  }
  var mt = /\/+/g;
  function _t(o, z) {
    return typeof o == "object" && o !== null && o.key != null
      ? K("" + o.key)
      : z.toString(36);
  }
  function zt(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Bt, Bt)
            : ((o.status = "pending"),
              o.then(
                function (z) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = z));
                },
                function (z) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = z));
                }
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function b(o, z, N, M, k) {
    var W = typeof o;
    (W === "undefined" || W === "boolean") && (o = null);
    var gt = !1;
    if (o === null) gt = !0;
    else
      switch (W) {
        case "bigint":
        case "string":
        case "number":
          gt = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case _:
            case $:
              gt = !0;
              break;
            case B:
              return (gt = o._init), b(gt(o._payload), z, N, M, k);
          }
      }
    if (gt)
      return (
        (k = k(o)),
        (gt = M === "" ? "." + _t(o, 0) : M),
        Nt(k)
          ? ((N = ""),
            gt != null && (N = gt.replace(mt, "$&/") + "/"),
            b(k, z, N, "", function (Ta) {
              return Ta;
            }))
          : k != null &&
            (L(k) &&
              (k = C(
                k,
                N +
                  (k.key == null || (o && o.key === k.key)
                    ? ""
                    : ("" + k.key).replace(mt, "$&/") + "/") +
                  gt
              )),
            z.push(k)),
        1
      );
    gt = 0;
    var It = M === "" ? "." : M + ":";
    if (Nt(o))
      for (var wt = 0; wt < o.length; wt++)
        (M = o[wt]), (W = It + _t(M, wt)), (gt += b(M, z, N, W, k));
    else if (((wt = ot(o)), typeof wt == "function"))
      for (o = wt.call(o), wt = 0; !(M = o.next()).done; )
        (M = M.value), (W = It + _t(M, wt++)), (gt += b(M, z, N, W, k));
    else if (W === "object") {
      if (typeof o.then == "function") return b(zt(o), z, N, M, k);
      throw (
        ((z = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (z === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : z) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return gt;
  }
  function x(o, z, N) {
    if (o == null) return o;
    var M = [],
      k = 0;
    return (
      b(o, M, "", "", function (W) {
        return z.call(N, W, k++);
      }),
      M
    );
  }
  function T(o) {
    if (o._status === -1) {
      var z = o._result;
      (z = z()),
        z.then(
          function (N) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = N));
          },
          function (N) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = N));
          }
        ),
        o._status === -1 && ((o._status = 0), (o._result = z));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var E =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var z = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(z)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    U = {
      map: x,
      forEach: function (o, z, N) {
        x(
          o,
          function () {
            z.apply(this, arguments);
          },
          N
        );
      },
      count: function (o) {
        var z = 0;
        return (
          x(o, function () {
            z++;
          }),
          z
        );
      },
      toArray: function (o) {
        return (
          x(o, function (z) {
            return z;
          }) || []
        );
      },
      only: function (o) {
        if (!L(o))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return o;
      },
    };
  return (
    (F.Activity = D),
    (F.Children = U),
    (F.Component = vt),
    (F.Fragment = Y),
    (F.Profiler = R),
    (F.PureComponent = at),
    (F.StrictMode = m),
    (F.Suspense = O),
    (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I),
    (F.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return I.H.useMemoCache(o);
      },
    }),
    (F.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (F.cacheSignal = function () {
      return null;
    }),
    (F.cloneElement = function (o, z, N) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + "."
        );
      var M = V({}, o.props),
        k = o.key;
      if (z != null)
        for (W in (z.key !== void 0 && (k = "" + z.key), z))
          !Mt.call(z, W) ||
            W === "key" ||
            W === "__self" ||
            W === "__source" ||
            (W === "ref" && z.ref === void 0) ||
            (M[W] = z[W]);
      var W = arguments.length - 2;
      if (W === 1) M.children = N;
      else if (1 < W) {
        for (var gt = Array(W), It = 0; It < W; It++)
          gt[It] = arguments[It + 2];
        M.children = gt;
      }
      return Ot(o.type, k, M);
    }),
    (F.createContext = function (o) {
      return (
        (o = {
          $$typeof: lt,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: G, _context: o }),
        o
      );
    }),
    (F.createElement = function (o, z, N) {
      var M,
        k = {},
        W = null;
      if (z != null)
        for (M in (z.key !== void 0 && (W = "" + z.key), z))
          Mt.call(z, M) &&
            M !== "key" &&
            M !== "__self" &&
            M !== "__source" &&
            (k[M] = z[M]);
      var gt = arguments.length - 2;
      if (gt === 1) k.children = N;
      else if (1 < gt) {
        for (var It = Array(gt), wt = 0; wt < gt; wt++)
          It[wt] = arguments[wt + 2];
        k.children = It;
      }
      if (o && o.defaultProps)
        for (M in ((gt = o.defaultProps), gt))
          k[M] === void 0 && (k[M] = gt[M]);
      return Ot(o, W, k);
    }),
    (F.createRef = function () {
      return { current: null };
    }),
    (F.forwardRef = function (o) {
      return { $$typeof: et, render: o };
    }),
    (F.isValidElement = L),
    (F.lazy = function (o) {
      return { $$typeof: B, _payload: { _status: -1, _result: o }, _init: T };
    }),
    (F.memo = function (o, z) {
      return { $$typeof: y, type: o, compare: z === void 0 ? null : z };
    }),
    (F.startTransition = function (o) {
      var z = I.T,
        N = {};
      I.T = N;
      try {
        var M = o(),
          k = I.S;
        k !== null && k(N, M),
          typeof M == "object" &&
            M !== null &&
            typeof M.then == "function" &&
            M.then(Bt, E);
      } catch (W) {
        E(W);
      } finally {
        z !== null && N.types !== null && (z.types = N.types), (I.T = z);
      }
    }),
    (F.unstable_useCacheRefresh = function () {
      return I.H.useCacheRefresh();
    }),
    (F.use = function (o) {
      return I.H.use(o);
    }),
    (F.useActionState = function (o, z, N) {
      return I.H.useActionState(o, z, N);
    }),
    (F.useCallback = function (o, z) {
      return I.H.useCallback(o, z);
    }),
    (F.useContext = function (o) {
      return I.H.useContext(o);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (o, z) {
      return I.H.useDeferredValue(o, z);
    }),
    (F.useEffect = function (o, z) {
      return I.H.useEffect(o, z);
    }),
    (F.useEffectEvent = function (o) {
      return I.H.useEffectEvent(o);
    }),
    (F.useId = function () {
      return I.H.useId();
    }),
    (F.useImperativeHandle = function (o, z, N) {
      return I.H.useImperativeHandle(o, z, N);
    }),
    (F.useInsertionEffect = function (o, z) {
      return I.H.useInsertionEffect(o, z);
    }),
    (F.useLayoutEffect = function (o, z) {
      return I.H.useLayoutEffect(o, z);
    }),
    (F.useMemo = function (o, z) {
      return I.H.useMemo(o, z);
    }),
    (F.useOptimistic = function (o, z) {
      return I.H.useOptimistic(o, z);
    }),
    (F.useReducer = function (o, z, N) {
      return I.H.useReducer(o, z, N);
    }),
    (F.useRef = function (o) {
      return I.H.useRef(o);
    }),
    (F.useState = function (o) {
      return I.H.useState(o);
    }),
    (F.useSyncExternalStore = function (o, z, N) {
      return I.H.useSyncExternalStore(o, z, N);
    }),
    (F.useTransition = function () {
      return I.H.useTransition();
    }),
    (F.version = "19.2.0"),
    F
  );
}
var xd;
function rs() {
  return xd || ((xd = 1), (is.exports = Pm())), is.exports;
}
var q = rs(),
  us = { exports: {} },
  Sn = {},
  cs = { exports: {} },
  ss = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd;
function th() {
  return (
    bd ||
      ((bd = 1),
      (function (_) {
        function $(b, x) {
          var T = b.length;
          b.push(x);
          t: for (; 0 < T; ) {
            var E = (T - 1) >>> 1,
              U = b[E];
            if (0 < R(U, x)) (b[E] = x), (b[T] = U), (T = E);
            else break t;
          }
        }
        function Y(b) {
          return b.length === 0 ? null : b[0];
        }
        function m(b) {
          if (b.length === 0) return null;
          var x = b[0],
            T = b.pop();
          if (T !== x) {
            b[0] = T;
            t: for (var E = 0, U = b.length, o = U >>> 1; E < o; ) {
              var z = 2 * (E + 1) - 1,
                N = b[z],
                M = z + 1,
                k = b[M];
              if (0 > R(N, T))
                M < U && 0 > R(k, N)
                  ? ((b[E] = k), (b[M] = T), (E = M))
                  : ((b[E] = N), (b[z] = T), (E = z));
              else if (M < U && 0 > R(k, T)) (b[E] = k), (b[M] = T), (E = M);
              else break t;
            }
          }
          return x;
        }
        function R(b, x) {
          var T = b.sortIndex - x.sortIndex;
          return T !== 0 ? T : b.id - x.id;
        }
        if (
          ((_.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var G = performance;
          _.unstable_now = function () {
            return G.now();
          };
        } else {
          var lt = Date,
            et = lt.now();
          _.unstable_now = function () {
            return lt.now() - et;
          };
        }
        var O = [],
          y = [],
          B = 1,
          D = null,
          Q = 3,
          ot = !1,
          Z = !1,
          V = !1,
          ft = !1,
          vt = typeof setTimeout == "function" ? setTimeout : null,
          Ut = typeof clearTimeout == "function" ? clearTimeout : null,
          at = typeof setImmediate < "u" ? setImmediate : null;
        function Et(b) {
          for (var x = Y(y); x !== null; ) {
            if (x.callback === null) m(y);
            else if (x.startTime <= b)
              m(y), (x.sortIndex = x.expirationTime), $(O, x);
            else break;
            x = Y(y);
          }
        }
        function Nt(b) {
          if (((V = !1), Et(b), !Z))
            if (Y(O) !== null) (Z = !0), Bt || ((Bt = !0), K());
            else {
              var x = Y(y);
              x !== null && zt(Nt, x.startTime - b);
            }
        }
        var Bt = !1,
          I = -1,
          Mt = 5,
          Ot = -1;
        function C() {
          return ft ? !0 : !(_.unstable_now() - Ot < Mt);
        }
        function L() {
          if (((ft = !1), Bt)) {
            var b = _.unstable_now();
            Ot = b;
            var x = !0;
            try {
              t: {
                (Z = !1), V && ((V = !1), Ut(I), (I = -1)), (ot = !0);
                var T = Q;
                try {
                  e: {
                    for (
                      Et(b), D = Y(O);
                      D !== null && !(D.expirationTime > b && C());

                    ) {
                      var E = D.callback;
                      if (typeof E == "function") {
                        (D.callback = null), (Q = D.priorityLevel);
                        var U = E(D.expirationTime <= b);
                        if (((b = _.unstable_now()), typeof U == "function")) {
                          (D.callback = U), Et(b), (x = !0);
                          break e;
                        }
                        D === Y(O) && m(O), Et(b);
                      } else m(O);
                      D = Y(O);
                    }
                    if (D !== null) x = !0;
                    else {
                      var o = Y(y);
                      o !== null && zt(Nt, o.startTime - b), (x = !1);
                    }
                  }
                  break t;
                } finally {
                  (D = null), (Q = T), (ot = !1);
                }
                x = void 0;
              }
            } finally {
              x ? K() : (Bt = !1);
            }
          }
        }
        var K;
        if (typeof at == "function")
          K = function () {
            at(L);
          };
        else if (typeof MessageChannel < "u") {
          var mt = new MessageChannel(),
            _t = mt.port2;
          (mt.port1.onmessage = L),
            (K = function () {
              _t.postMessage(null);
            });
        } else
          K = function () {
            vt(L, 0);
          };
        function zt(b, x) {
          I = vt(function () {
            b(_.unstable_now());
          }, x);
        }
        (_.unstable_IdlePriority = 5),
          (_.unstable_ImmediatePriority = 1),
          (_.unstable_LowPriority = 4),
          (_.unstable_NormalPriority = 3),
          (_.unstable_Profiling = null),
          (_.unstable_UserBlockingPriority = 2),
          (_.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (_.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Mt = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (_.unstable_getCurrentPriorityLevel = function () {
            return Q;
          }),
          (_.unstable_next = function (b) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
                var x = 3;
                break;
              default:
                x = Q;
            }
            var T = Q;
            Q = x;
            try {
              return b();
            } finally {
              Q = T;
            }
          }),
          (_.unstable_requestPaint = function () {
            ft = !0;
          }),
          (_.unstable_runWithPriority = function (b, x) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var T = Q;
            Q = b;
            try {
              return x();
            } finally {
              Q = T;
            }
          }),
          (_.unstable_scheduleCallback = function (b, x, T) {
            var E = _.unstable_now();
            switch (
              (typeof T == "object" && T !== null
                ? ((T = T.delay),
                  (T = typeof T == "number" && 0 < T ? E + T : E))
                : (T = E),
              b)
            ) {
              case 1:
                var U = -1;
                break;
              case 2:
                U = 250;
                break;
              case 5:
                U = 1073741823;
                break;
              case 4:
                U = 1e4;
                break;
              default:
                U = 5e3;
            }
            return (
              (U = T + U),
              (b = {
                id: B++,
                callback: x,
                priorityLevel: b,
                startTime: T,
                expirationTime: U,
                sortIndex: -1,
              }),
              T > E
                ? ((b.sortIndex = T),
                  $(y, b),
                  Y(O) === null &&
                    b === Y(y) &&
                    (V ? (Ut(I), (I = -1)) : (V = !0), zt(Nt, T - E)))
                : ((b.sortIndex = U),
                  $(O, b),
                  Z || ot || ((Z = !0), Bt || ((Bt = !0), K()))),
              b
            );
          }),
          (_.unstable_shouldYield = C),
          (_.unstable_wrapCallback = function (b) {
            var x = Q;
            return function () {
              var T = Q;
              Q = x;
              try {
                return b.apply(this, arguments);
              } finally {
                Q = T;
              }
            };
          });
      })(ss)),
    ss
  );
}
var Sd;
function eh() {
  return Sd || ((Sd = 1), (cs.exports = th())), cs.exports;
}
var fs = { exports: {} },
  Ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd;
function lh() {
  if (zd) return Ft;
  zd = 1;
  var _ = rs();
  function $(O) {
    var y = "https://react.dev/errors/" + O;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        y += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return (
      "Minified React error #" +
      O +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Y() {}
  var m = {
      d: {
        f: Y,
        r: function () {
          throw Error($(522));
        },
        D: Y,
        C: Y,
        L: Y,
        m: Y,
        X: Y,
        S: Y,
        M: Y,
      },
      p: 0,
      findDOMNode: null,
    },
    R = Symbol.for("react.portal");
  function G(O, y, B) {
    var D =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: D == null ? null : "" + D,
      children: O,
      containerInfo: y,
      implementation: B,
    };
  }
  var lt = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function et(O, y) {
    if (O === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m),
    (Ft.createPortal = function (O, y) {
      var B =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error($(299));
      return G(O, y, null, B);
    }),
    (Ft.flushSync = function (O) {
      var y = lt.T,
        B = m.p;
      try {
        if (((lt.T = null), (m.p = 2), O)) return O();
      } finally {
        (lt.T = y), (m.p = B), m.d.f();
      }
    }),
    (Ft.preconnect = function (O, y) {
      typeof O == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        m.d.C(O, y));
    }),
    (Ft.prefetchDNS = function (O) {
      typeof O == "string" && m.d.D(O);
    }),
    (Ft.preinit = function (O, y) {
      if (typeof O == "string" && y && typeof y.as == "string") {
        var B = y.as,
          D = et(B, y.crossOrigin),
          Q = typeof y.integrity == "string" ? y.integrity : void 0,
          ot = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        B === "style"
          ? m.d.S(O, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: D,
              integrity: Q,
              fetchPriority: ot,
            })
          : B === "script" &&
            m.d.X(O, {
              crossOrigin: D,
              integrity: Q,
              fetchPriority: ot,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (Ft.preinitModule = function (O, y) {
      if (typeof O == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var B = et(y.as, y.crossOrigin);
            m.d.M(O, {
              crossOrigin: B,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && m.d.M(O);
    }),
    (Ft.preload = function (O, y) {
      if (
        typeof O == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var B = y.as,
          D = et(B, y.crossOrigin);
        m.d.L(O, B, {
          crossOrigin: D,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (Ft.preloadModule = function (O, y) {
      if (typeof O == "string")
        if (y) {
          var B = et(y.as, y.crossOrigin);
          m.d.m(O, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: B,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else m.d.m(O);
    }),
    (Ft.requestFormReset = function (O) {
      m.d.r(O);
    }),
    (Ft.unstable_batchedUpdates = function (O, y) {
      return O(y);
    }),
    (Ft.useFormState = function (O, y, B) {
      return lt.H.useFormState(O, y, B);
    }),
    (Ft.useFormStatus = function () {
      return lt.H.useHostTransitionStatus();
    }),
    (Ft.version = "19.2.0"),
    Ft
  );
}
var Ad;
function ah() {
  if (Ad) return fs.exports;
  Ad = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch ($) {
        console.error($);
      }
  }
  return _(), (fs.exports = lh()), fs.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _d;
function nh() {
  if (_d) return Sn;
  _d = 1;
  var _ = eh(),
    $ = rs(),
    Y = ah();
  function m(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function R(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function G(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do (e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return);
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function lt(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function et(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function O(t) {
    if (G(t) !== t) throw Error(m(188));
  }
  function y(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = G(t)), e === null)) throw Error(m(188));
      return e !== t ? null : t;
    }
    for (var l = t, a = e; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return O(n), t;
          if (i === a) return O(n), e;
          i = i.sibling;
        }
        throw Error(m(188));
      }
      if (l.return !== a.return) (l = n), (a = i);
      else {
        for (var u = !1, s = n.child; s; ) {
          if (s === l) {
            (u = !0), (l = n), (a = i);
            break;
          }
          if (s === a) {
            (u = !0), (a = n), (l = i);
            break;
          }
          s = s.sibling;
        }
        if (!u) {
          for (s = i.child; s; ) {
            if (s === l) {
              (u = !0), (l = i), (a = n);
              break;
            }
            if (s === a) {
              (u = !0), (a = i), (l = n);
              break;
            }
            s = s.sibling;
          }
          if (!u) throw Error(m(189));
        }
      }
      if (l.alternate !== a) throw Error(m(190));
    }
    if (l.tag !== 3) throw Error(m(188));
    return l.stateNode.current === l ? t : e;
  }
  function B(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = B(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var D = Object.assign,
    Q = Symbol.for("react.element"),
    ot = Symbol.for("react.transitional.element"),
    Z = Symbol.for("react.portal"),
    V = Symbol.for("react.fragment"),
    ft = Symbol.for("react.strict_mode"),
    vt = Symbol.for("react.profiler"),
    Ut = Symbol.for("react.consumer"),
    at = Symbol.for("react.context"),
    Et = Symbol.for("react.forward_ref"),
    Nt = Symbol.for("react.suspense"),
    Bt = Symbol.for("react.suspense_list"),
    I = Symbol.for("react.memo"),
    Mt = Symbol.for("react.lazy"),
    Ot = Symbol.for("react.activity"),
    C = Symbol.for("react.memo_cache_sentinel"),
    L = Symbol.iterator;
  function K(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (L && t[L]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var mt = Symbol.for("react.client.reference");
  function _t(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === mt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case V:
        return "Fragment";
      case vt:
        return "Profiler";
      case ft:
        return "StrictMode";
      case Nt:
        return "Suspense";
      case Bt:
        return "SuspenseList";
      case Ot:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case Z:
          return "Portal";
        case at:
          return t.displayName || "Context";
        case Ut:
          return (t._context.displayName || "Context") + ".Consumer";
        case Et:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case I:
          return (
            (e = t.displayName || null), e !== null ? e : _t(t.type) || "Memo"
          );
        case Mt:
          (e = t._payload), (t = t._init);
          try {
            return _t(t(e));
          } catch {}
      }
    return null;
  }
  var zt = Array.isArray,
    b = $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    x = Y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    T = { pending: !1, data: null, method: null, action: null },
    E = [],
    U = -1;
  function o(t) {
    return { current: t };
  }
  function z(t) {
    0 > U || ((t.current = E[U]), (E[U] = null), U--);
  }
  function N(t, e) {
    U++, (E[U] = t.current), (t.current = e);
  }
  var M = o(null),
    k = o(null),
    W = o(null),
    gt = o(null);
  function It(t, e) {
    switch ((N(W, e), N(k, t), N(M, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Yr(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          (e = Yr(e)), (t = Gr(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    z(M), N(M, t);
  }
  function wt() {
    z(M), z(k), z(W);
  }
  function Ta(t) {
    t.memoizedState !== null && N(gt, t);
    var e = M.current,
      l = Gr(e, t.type);
    e !== l && (N(k, t), N(M, l));
  }
  function zn(t) {
    k.current === t && (z(M), z(k)),
      gt.current === t && (z(gt), (vn._currentValue = T));
  }
  var Gi, ms;
  function Al(t) {
    if (Gi === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        (Gi = (e && e[1]) || ""),
          (ms =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Gi +
      t +
      ms
    );
  }
  var Qi = !1;
  function Xi(t, e) {
    if (!t || Qi) return "";
    Qi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var j = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(j.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(j, []);
                } catch (p) {
                  var v = p;
                }
                Reflect.construct(t, [], j);
              } else {
                try {
                  j.call();
                } catch (p) {
                  v = p;
                }
                t.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (p) {
                v = p;
              }
              (j = t()) &&
                typeof j.catch == "function" &&
                j.catch(function () {});
            }
          } catch (p) {
            if (p && v && typeof p.stack == "string") return [p.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        u = i[0],
        s = i[1];
      if (u && s) {
        var f = u.split(`
`),
          g = s.split(`
`);
        for (
          n = a = 0;
          a < f.length && !f[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < g.length && !g[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === f.length || n === g.length)
          for (
            a = f.length - 1, n = g.length - 1;
            1 <= a && 0 <= n && f[a] !== g[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (f[a] !== g[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || f[a] !== g[n])) {
                  var S =
                    `
` + f[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", t.displayName)),
                    S
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (Qi = !1), (Error.prepareStackTrace = l);
    }
    return (l = t ? t.displayName || t.name : "") ? Al(l) : "";
  }
  function Nd(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Al(t.type);
      case 16:
        return Al("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Al("Suspense Fallback")
          : Al("Suspense");
      case 19:
        return Al("SuspenseList");
      case 0:
      case 15:
        return Xi(t.type, !1);
      case 11:
        return Xi(t.type.render, !1);
      case 1:
        return Xi(t.type, !0);
      case 31:
        return Al("Activity");
      default:
        return "";
    }
  }
  function hs(t) {
    try {
      var e = "",
        l = null;
      do (e += Nd(t, l)), (l = t), (t = t.return);
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var Li = Object.prototype.hasOwnProperty,
    Zi = _.unstable_scheduleCallback,
    Vi = _.unstable_cancelCallback,
    Dd = _.unstable_shouldYield,
    Md = _.unstable_requestPaint,
    ce = _.unstable_now,
    Od = _.unstable_getCurrentPriorityLevel,
    gs = _.unstable_ImmediatePriority,
    vs = _.unstable_UserBlockingPriority,
    An = _.unstable_NormalPriority,
    Cd = _.unstable_LowPriority,
    ps = _.unstable_IdlePriority,
    Rd = _.log,
    Ud = _.unstable_setDisableYieldValue,
    Ea = null,
    se = null;
  function Ie(t) {
    if (
      (typeof Rd == "function" && Ud(t),
      se && typeof se.setStrictMode == "function")
    )
      try {
        se.setStrictMode(Ea, t);
      } catch {}
  }
  var fe = Math.clz32 ? Math.clz32 : Hd,
    Bd = Math.log,
    wd = Math.LN2;
  function Hd(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((Bd(t) / wd) | 0)) | 0;
  }
  var _n = 256,
    jn = 262144,
    Tn = 4194304;
  function _l(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function En(t, e, l) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = t.suspendedLanes,
      u = t.pingedLanes;
    t = t.warmLanes;
    var s = a & 134217727;
    return (
      s !== 0
        ? ((a = s & ~i),
          a !== 0
            ? (n = _l(a))
            : ((u &= s),
              u !== 0
                ? (n = _l(u))
                : l || ((l = s & ~t), l !== 0 && (n = _l(l)))))
        : ((s = a & ~i),
          s !== 0
            ? (n = _l(s))
            : u !== 0
            ? (n = _l(u))
            : l || ((l = a & ~t), l !== 0 && (n = _l(l)))),
      n === 0
        ? 0
        : e !== 0 &&
          e !== n &&
          (e & i) === 0 &&
          ((i = n & -n),
          (l = e & -e),
          i >= l || (i === 32 && (l & 4194048) !== 0))
        ? e
        : n
    );
  }
  function Na(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function qd(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ys() {
    var t = Tn;
    return (Tn <<= 1), (Tn & 62914560) === 0 && (Tn = 4194304), t;
  }
  function Ki(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function Da(t, e) {
    (t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0));
  }
  function Yd(t, e, l, a, n, i) {
    var u = t.pendingLanes;
    (t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0);
    var s = t.entanglements,
      f = t.expirationTimes,
      g = t.hiddenUpdates;
    for (l = u & ~l; 0 < l; ) {
      var S = 31 - fe(l),
        j = 1 << S;
      (s[S] = 0), (f[S] = -1);
      var v = g[S];
      if (v !== null)
        for (g[S] = null, S = 0; S < v.length; S++) {
          var p = v[S];
          p !== null && (p.lane &= -536870913);
        }
      l &= ~j;
    }
    a !== 0 && xs(t, a, 0),
      i !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(u & ~e));
  }
  function xs(t, e, l) {
    (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
    var a = 31 - fe(e);
    (t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 261930));
  }
  function bs(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var a = 31 - fe(l),
        n = 1 << a;
      (n & e) | (t[a] & e) && (t[a] |= e), (l &= ~n);
    }
  }
  function Ss(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : Ji(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function Ji(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function ki(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function zs() {
    var t = x.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : fd(t.type));
  }
  function As(t, e) {
    var l = x.p;
    try {
      return (x.p = t), e();
    } finally {
      x.p = l;
    }
  }
  var Pe = Math.random().toString(36).slice(2),
    Kt = "__reactFiber$" + Pe,
    te = "__reactProps$" + Pe,
    Xl = "__reactContainer$" + Pe,
    $i = "__reactEvents$" + Pe,
    Gd = "__reactListeners$" + Pe,
    Qd = "__reactHandles$" + Pe,
    _s = "__reactResources$" + Pe,
    Ma = "__reactMarker$" + Pe;
  function Wi(t) {
    delete t[Kt], delete t[te], delete t[$i], delete t[Gd], delete t[Qd];
  }
  function Ll(t) {
    var e = t[Kt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Xl] || l[Kt])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = Jr(t); t !== null; ) {
            if ((l = t[Kt])) return l;
            t = Jr(t);
          }
        return e;
      }
      (t = l), (l = t.parentNode);
    }
    return null;
  }
  function Zl(t) {
    if ((t = t[Kt] || t[Xl])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Oa(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(m(33));
  }
  function Vl(t) {
    var e = t[_s];
    return (
      e ||
        (e = t[_s] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Zt(t) {
    t[Ma] = !0;
  }
  var js = new Set(),
    Ts = {};
  function jl(t, e) {
    Kl(t, e), Kl(t + "Capture", e);
  }
  function Kl(t, e) {
    for (Ts[t] = e, t = 0; t < e.length; t++) js.add(e[t]);
  }
  var Xd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Es = {},
    Ns = {};
  function Ld(t) {
    return Li.call(Ns, t)
      ? !0
      : Li.call(Es, t)
      ? !1
      : Xd.test(t)
      ? (Ns[t] = !0)
      : ((Es[t] = !0), !1);
  }
  function Nn(t, e, l) {
    if (Ld(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function Dn(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ue(t, e, l, a) {
    if (a === null) t.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + a);
    }
  }
  function pe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Ds(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Zd(t, e, l) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        i = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (u) {
            (l = "" + u), i.call(this, u);
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (u) {
            l = "" + u;
          },
          stopTracking: function () {
            (t._valueTracker = null), delete t[e];
          },
        }
      );
    }
  }
  function Fi(t) {
    if (!t._valueTracker) {
      var e = Ds(t) ? "checked" : "value";
      t._valueTracker = Zd(t, e, "" + t[e]);
    }
  }
  function Ms(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      a = "";
    return (
      t && (a = Ds(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Mn(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Vd = /[\n"\\]/g;
  function ye(t) {
    return t.replace(Vd, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Ii(t, e, l, a, n, i, u, s) {
    (t.name = ""),
      u != null &&
      typeof u != "function" &&
      typeof u != "symbol" &&
      typeof u != "boolean"
        ? (t.type = u)
        : t.removeAttribute("type"),
      e != null
        ? u === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + pe(e))
          : t.value !== "" + pe(e) && (t.value = "" + pe(e))
        : (u !== "submit" && u !== "reset") || t.removeAttribute("value"),
      e != null
        ? Pi(t, u, pe(e))
        : l != null
        ? Pi(t, u, pe(l))
        : a != null && t.removeAttribute("value"),
      n == null && i != null && (t.defaultChecked = !!i),
      n != null &&
        (t.checked = n && typeof n != "function" && typeof n != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (t.name = "" + pe(s))
        : t.removeAttribute("name");
  }
  function Os(t, e, l, a, n, i, u, s) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (t.type = i),
      e != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || e != null)) {
        Fi(t);
        return;
      }
      (l = l != null ? "" + pe(l) : ""),
        (e = e != null ? "" + pe(e) : l),
        s || e === t.value || (t.value = e),
        (t.defaultValue = e);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = s ? t.checked : !!a),
      (t.defaultChecked = !!a),
      u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.name = u),
      Fi(t);
  }
  function Pi(t, e, l) {
    (e === "number" && Mn(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function Jl(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var n = 0; n < l.length; n++) e["$" + l[n]] = !0;
      for (l = 0; l < t.length; l++)
        (n = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== n && (t[l].selected = n),
          n && a && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + pe(l), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === l) {
          (t[n].selected = !0), a && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Cs(t, e, l) {
    if (
      e != null &&
      ((e = "" + pe(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + pe(l) : "";
  }
  function Rs(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(m(92));
        if (zt(a)) {
          if (1 < a.length) throw Error(m(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (e = l);
    }
    (l = pe(e)),
      (t.defaultValue = l),
      (a = t.textContent),
      a === l && a !== "" && a !== null && (t.value = a),
      Fi(t);
  }
  function kl(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Kd = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Us(t, e, l) {
    var a = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
        ? (t.cssFloat = "")
        : (t[e] = "")
      : a
      ? t.setProperty(e, l)
      : typeof l != "number" || l === 0 || Kd.has(e)
      ? e === "float"
        ? (t.cssFloat = l)
        : (t[e] = ("" + l).trim())
      : (t[e] = l + "px");
  }
  function Bs(t, e, l) {
    if (e != null && typeof e != "object") throw Error(m(62));
    if (((t = t.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
      for (var n in e)
        (a = e[n]), e.hasOwnProperty(n) && l[n] !== a && Us(t, n, a);
    } else for (var i in e) e.hasOwnProperty(i) && Us(t, i, e[i]);
  }
  function tu(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jd = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    kd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function On(t) {
    return kd.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Be() {}
  var eu = null;
  function lu(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var $l = null,
    Wl = null;
  function ws(t) {
    var e = Zl(t);
    if (e && (t = e.stateNode)) {
      var l = t[te] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Ii(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + ye("" + e) + '"][type="radio"]'
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var a = l[e];
              if (a !== t && a.form === t.form) {
                var n = a[te] || null;
                if (!n) throw Error(m(90));
                Ii(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              (a = l[e]), a.form === t.form && Ms(a);
          }
          break t;
        case "textarea":
          Cs(t, l.value, l.defaultValue);
          break t;
        case "select":
          (e = l.value), e != null && Jl(t, !!l.multiple, e, !1);
      }
    }
  }
  var au = !1;
  function Hs(t, e, l) {
    if (au) return t(e, l);
    au = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((au = !1),
        ($l !== null || Wl !== null) &&
          (yi(), $l && ((e = $l), (t = Wl), (Wl = $l = null), ws(e), t)))
      )
        for (e = 0; e < t.length; e++) ws(t[e]);
    }
  }
  function Ca(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var a = l[te] || null;
    if (a === null) return null;
    l = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a);
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(m(231, e, typeof l));
    return l;
  }
  var we = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    nu = !1;
  if (we)
    try {
      var Ra = {};
      Object.defineProperty(Ra, "passive", {
        get: function () {
          nu = !0;
        },
      }),
        window.addEventListener("test", Ra, Ra),
        window.removeEventListener("test", Ra, Ra);
    } catch {
      nu = !1;
    }
  var tl = null,
    iu = null,
    Cn = null;
  function qs() {
    if (Cn) return Cn;
    var t,
      e = iu,
      l = e.length,
      a,
      n = "value" in tl ? tl.value : tl.textContent,
      i = n.length;
    for (t = 0; t < l && e[t] === n[t]; t++);
    var u = l - t;
    for (a = 1; a <= u && e[l - a] === n[i - a]; a++);
    return (Cn = n.slice(t, 1 < a ? 1 - a : void 0));
  }
  function Rn(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Un() {
    return !0;
  }
  function Ys() {
    return !1;
  }
  function ee(t) {
    function e(l, a, n, i, u) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var s in t)
        t.hasOwnProperty(s) && ((l = t[s]), (this[s] = l ? l(i) : i[s]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? Un
          : Ys),
        (this.isPropagationStopped = Ys),
        this
      );
    }
    return (
      D(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = Un));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = Un));
        },
        persist: function () {},
        isPersistent: Un,
      }),
      e
    );
  }
  var Tl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bn = ee(Tl),
    Ua = D({}, Tl, { view: 0, detail: 0 }),
    $d = ee(Ua),
    uu,
    cu,
    Ba,
    wn = D({}, Ua, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: fu,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Ba &&
              (Ba && t.type === "mousemove"
                ? ((uu = t.screenX - Ba.screenX), (cu = t.screenY - Ba.screenY))
                : (cu = uu = 0),
              (Ba = t)),
            uu);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : cu;
      },
    }),
    Gs = ee(wn),
    Wd = D({}, wn, { dataTransfer: 0 }),
    Fd = ee(Wd),
    Id = D({}, Ua, { relatedTarget: 0 }),
    su = ee(Id),
    Pd = D({}, Tl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    t0 = ee(Pd),
    e0 = D({}, Tl, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    l0 = ee(e0),
    a0 = D({}, Tl, { data: 0 }),
    Qs = ee(a0),
    n0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    i0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    u0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function c0(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = u0[t])
      ? !!e[t]
      : !1;
  }
  function fu() {
    return c0;
  }
  var s0 = D({}, Ua, {
      key: function (t) {
        if (t.key) {
          var e = n0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Rn(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
          ? i0[t.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fu,
      charCode: function (t) {
        return t.type === "keypress" ? Rn(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Rn(t)
          : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
      },
    }),
    f0 = ee(s0),
    o0 = D({}, wn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Xs = ee(o0),
    r0 = D({}, Ua, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fu,
    }),
    d0 = ee(r0),
    m0 = D({}, Tl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    h0 = ee(m0),
    g0 = D({}, wn, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
          ? -t.wheelDeltaX
          : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
          ? -t.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    v0 = ee(g0),
    p0 = D({}, Tl, { newState: 0, oldState: 0 }),
    y0 = ee(p0),
    x0 = [9, 13, 27, 32],
    ou = we && "CompositionEvent" in window,
    wa = null;
  we && "documentMode" in document && (wa = document.documentMode);
  var b0 = we && "TextEvent" in window && !wa,
    Ls = we && (!ou || (wa && 8 < wa && 11 >= wa)),
    Zs = " ",
    Vs = !1;
  function Ks(t, e) {
    switch (t) {
      case "keyup":
        return x0.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Js(t) {
    return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
  }
  var Fl = !1;
  function S0(t, e) {
    switch (t) {
      case "compositionend":
        return Js(e);
      case "keypress":
        return e.which !== 32 ? null : ((Vs = !0), Zs);
      case "textInput":
        return (t = e.data), t === Zs && Vs ? null : t;
      default:
        return null;
    }
  }
  function z0(t, e) {
    if (Fl)
      return t === "compositionend" || (!ou && Ks(t, e))
        ? ((t = qs()), (Cn = iu = tl = null), (Fl = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Ls && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var A0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ks(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!A0[t.type] : e === "textarea";
  }
  function $s(t, e, l, a) {
    $l ? (Wl ? Wl.push(a) : (Wl = [a])) : ($l = a),
      (e = ji(e, "onChange")),
      0 < e.length &&
        ((l = new Bn("onChange", "change", null, l, a)),
        t.push({ event: l, listeners: e }));
  }
  var Ha = null,
    qa = null;
  function _0(t) {
    Rr(t, 0);
  }
  function Hn(t) {
    var e = Oa(t);
    if (Ms(e)) return t;
  }
  function Ws(t, e) {
    if (t === "change") return e;
  }
  var Fs = !1;
  if (we) {
    var ru;
    if (we) {
      var du = "oninput" in document;
      if (!du) {
        var Is = document.createElement("div");
        Is.setAttribute("oninput", "return;"),
          (du = typeof Is.oninput == "function");
      }
      ru = du;
    } else ru = !1;
    Fs = ru && (!document.documentMode || 9 < document.documentMode);
  }
  function Ps() {
    Ha && (Ha.detachEvent("onpropertychange", tf), (qa = Ha = null));
  }
  function tf(t) {
    if (t.propertyName === "value" && Hn(qa)) {
      var e = [];
      $s(e, qa, t, lu(t)), Hs(_0, e);
    }
  }
  function j0(t, e, l) {
    t === "focusin"
      ? (Ps(), (Ha = e), (qa = l), Ha.attachEvent("onpropertychange", tf))
      : t === "focusout" && Ps();
  }
  function T0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Hn(qa);
  }
  function E0(t, e) {
    if (t === "click") return Hn(e);
  }
  function N0(t, e) {
    if (t === "input" || t === "change") return Hn(e);
  }
  function D0(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var oe = typeof Object.is == "function" ? Object.is : D0;
  function Ya(t, e) {
    if (oe(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      a = Object.keys(e);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Li.call(e, n) || !oe(t[n], e[n])) return !1;
    }
    return !0;
  }
  function ef(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function lf(t, e) {
    var l = ef(t);
    t = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e))
          return { node: l, offset: e - t };
        t = a;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ef(l);
    }
  }
  function af(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
        ? !1
        : e && e.nodeType === 3
        ? af(t, e.parentNode)
        : "contains" in t
        ? t.contains(e)
        : t.compareDocumentPosition
        ? !!(t.compareDocumentPosition(e) & 16)
        : !1
      : !1;
  }
  function nf(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Mn(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Mn(t.document);
    }
    return e;
  }
  function mu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var M0 = we && "documentMode" in document && 11 >= document.documentMode,
    Il = null,
    hu = null,
    Ga = null,
    gu = !1;
  function uf(t, e, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    gu ||
      Il == null ||
      Il !== Mn(a) ||
      ((a = Il),
      "selectionStart" in a && mu(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Ga && Ya(Ga, a)) ||
        ((Ga = a),
        (a = ji(hu, "onSelect")),
        0 < a.length &&
          ((e = new Bn("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: a }),
          (e.target = Il))));
  }
  function El(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var Pl = {
      animationend: El("Animation", "AnimationEnd"),
      animationiteration: El("Animation", "AnimationIteration"),
      animationstart: El("Animation", "AnimationStart"),
      transitionrun: El("Transition", "TransitionRun"),
      transitionstart: El("Transition", "TransitionStart"),
      transitioncancel: El("Transition", "TransitionCancel"),
      transitionend: El("Transition", "TransitionEnd"),
    },
    vu = {},
    cf = {};
  we &&
    ((cf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Pl.animationend.animation,
      delete Pl.animationiteration.animation,
      delete Pl.animationstart.animation),
    "TransitionEvent" in window || delete Pl.transitionend.transition);
  function Nl(t) {
    if (vu[t]) return vu[t];
    if (!Pl[t]) return t;
    var e = Pl[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in cf) return (vu[t] = e[l]);
    return t;
  }
  var sf = Nl("animationend"),
    ff = Nl("animationiteration"),
    of = Nl("animationstart"),
    O0 = Nl("transitionrun"),
    C0 = Nl("transitionstart"),
    R0 = Nl("transitioncancel"),
    rf = Nl("transitionend"),
    df = new Map(),
    pu =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  pu.push("scrollEnd");
  function Ee(t, e) {
    df.set(t, e), jl(e, [t]);
  }
  var qn =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    xe = [],
    ta = 0,
    yu = 0;
  function Yn() {
    for (var t = ta, e = (yu = ta = 0); e < t; ) {
      var l = xe[e];
      xe[e++] = null;
      var a = xe[e];
      xe[e++] = null;
      var n = xe[e];
      xe[e++] = null;
      var i = xe[e];
      if (((xe[e++] = null), a !== null && n !== null)) {
        var u = a.pending;
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
          (a.pending = n);
      }
      i !== 0 && mf(l, n, i);
    }
  }
  function Gn(t, e, l, a) {
    (xe[ta++] = t),
      (xe[ta++] = e),
      (xe[ta++] = l),
      (xe[ta++] = a),
      (yu |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a);
  }
  function xu(t, e, l, a) {
    return Gn(t, e, l, a), Qn(t);
  }
  function Dl(t, e) {
    return Gn(t, null, null, e), Qn(t);
  }
  function mf(t, e, l) {
    t.lanes |= l;
    var a = t.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = t.return; i !== null; )
      (i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((t = i.stateNode), t === null || t._visibility & 1 || (n = !0)),
        (t = i),
        (i = i.return);
    return t.tag === 3
      ? ((i = t.stateNode),
        n &&
          e !== null &&
          ((n = 31 - fe(l)),
          (t = i.hiddenUpdates),
          (a = t[n]),
          a === null ? (t[n] = [e]) : a.push(e),
          (e.lane = l | 536870912)),
        i)
      : null;
  }
  function Qn(t) {
    if (50 < fn) throw ((fn = 0), (Nc = null), Error(m(185)));
    for (var e = t.return; e !== null; ) (t = e), (e = t.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var ea = {};
  function U0(t, e, l, a) {
    (this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function re(t, e, l, a) {
    return new U0(t, e, l, a);
  }
  function bu(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent);
  }
  function He(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = re(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function hf(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function Xn(t, e, l, a, n, i) {
    var u = 0;
    if (((a = t), typeof t == "function")) bu(t) && (u = 1);
    else if (typeof t == "string")
      u = Ym(t, l, M.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
    else
      t: switch (t) {
        case Ot:
          return (t = re(31, l, e, n)), (t.elementType = Ot), (t.lanes = i), t;
        case V:
          return Ml(l.children, n, i, e);
        case ft:
          (u = 8), (n |= 24);
          break;
        case vt:
          return (
            (t = re(12, l, e, n | 2)), (t.elementType = vt), (t.lanes = i), t
          );
        case Nt:
          return (t = re(13, l, e, n)), (t.elementType = Nt), (t.lanes = i), t;
        case Bt:
          return (t = re(19, l, e, n)), (t.elementType = Bt), (t.lanes = i), t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case at:
                u = 10;
                break t;
              case Ut:
                u = 9;
                break t;
              case Et:
                u = 11;
                break t;
              case I:
                u = 14;
                break t;
              case Mt:
                (u = 16), (a = null);
                break t;
            }
          (u = 29),
            (l = Error(m(130, t === null ? "null" : typeof t, ""))),
            (a = null);
      }
    return (
      (e = re(u, l, e, n)), (e.elementType = t), (e.type = a), (e.lanes = i), e
    );
  }
  function Ml(t, e, l, a) {
    return (t = re(7, t, a, e)), (t.lanes = l), t;
  }
  function Su(t, e, l) {
    return (t = re(6, t, null, e)), (t.lanes = l), t;
  }
  function gf(t) {
    var e = re(18, null, null, 0);
    return (e.stateNode = t), e;
  }
  function zu(t, e, l) {
    return (
      (e = re(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var vf = new WeakMap();
  function be(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = vf.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: hs(e) }), vf.set(t, e), e);
    }
    return { value: t, source: e, stack: hs(e) };
  }
  var la = [],
    aa = 0,
    Ln = null,
    Qa = 0,
    Se = [],
    ze = 0,
    el = null,
    Me = 1,
    Oe = "";
  function qe(t, e) {
    (la[aa++] = Qa), (la[aa++] = Ln), (Ln = t), (Qa = e);
  }
  function pf(t, e, l) {
    (Se[ze++] = Me), (Se[ze++] = Oe), (Se[ze++] = el), (el = t);
    var a = Me;
    t = Oe;
    var n = 32 - fe(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var i = 32 - fe(e) + n;
    if (30 < i) {
      var u = n - (n % 5);
      (i = (a & ((1 << u) - 1)).toString(32)),
        (a >>= u),
        (n -= u),
        (Me = (1 << (32 - fe(e) + n)) | (l << n) | a),
        (Oe = i + t);
    } else (Me = (1 << i) | (l << n) | a), (Oe = t);
  }
  function Au(t) {
    t.return !== null && (qe(t, 1), pf(t, 1, 0));
  }
  function _u(t) {
    for (; t === Ln; )
      (Ln = la[--aa]), (la[aa] = null), (Qa = la[--aa]), (la[aa] = null);
    for (; t === el; )
      (el = Se[--ze]),
        (Se[ze] = null),
        (Oe = Se[--ze]),
        (Se[ze] = null),
        (Me = Se[--ze]),
        (Se[ze] = null);
  }
  function yf(t, e) {
    (Se[ze++] = Me),
      (Se[ze++] = Oe),
      (Se[ze++] = el),
      (Me = e.id),
      (Oe = e.overflow),
      (el = t);
  }
  var Jt = null,
    jt = null,
    st = !1,
    ll = null,
    Ae = !1,
    ju = Error(m(519));
  function al(t) {
    var e = Error(
      m(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        ""
      )
    );
    throw (Xa(be(e, t)), ju);
  }
  function xf(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps;
    switch (((e[Kt] = t), (e[te] = a), l)) {
      case "dialog":
        it("cancel", e), it("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        it("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < rn.length; l++) it(rn[l], e);
        break;
      case "source":
        it("error", e);
        break;
      case "img":
      case "image":
      case "link":
        it("error", e), it("load", e);
        break;
      case "details":
        it("toggle", e);
        break;
      case "input":
        it("invalid", e),
          Os(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          );
        break;
      case "select":
        it("invalid", e);
        break;
      case "textarea":
        it("invalid", e), Rs(e, a.value, a.defaultValue, a.children);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      Hr(e.textContent, l)
        ? (a.popover != null && (it("beforetoggle", e), it("toggle", e)),
          a.onScroll != null && it("scroll", e),
          a.onScrollEnd != null && it("scrollend", e),
          a.onClick != null && (e.onclick = Be),
          (e = !0))
        : (e = !1),
      e || al(t, !0);
  }
  function bf(t) {
    for (Jt = t.return; Jt; )
      switch (Jt.tag) {
        case 5:
        case 31:
        case 13:
          Ae = !1;
          return;
        case 27:
        case 3:
          Ae = !0;
          return;
        default:
          Jt = Jt.return;
      }
  }
  function na(t) {
    if (t !== Jt) return !1;
    if (!st) return bf(t), (st = !0), !1;
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || Lc(t.type, t.memoizedProps))),
        (l = !l)),
      l && jt && al(t),
      bf(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(m(317));
      jt = Kr(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(m(317));
      jt = Kr(t);
    } else
      e === 27
        ? ((e = jt), pl(t.type) ? ((t = kc), (kc = null), (jt = t)) : (jt = e))
        : (jt = Jt ? je(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Ol() {
    (jt = Jt = null), (st = !1);
  }
  function Tu() {
    var t = ll;
    return (
      t !== null &&
        (ie === null ? (ie = t) : ie.push.apply(ie, t), (ll = null)),
      t
    );
  }
  function Xa(t) {
    ll === null ? (ll = [t]) : ll.push(t);
  }
  var Eu = o(null),
    Cl = null,
    Ye = null;
  function nl(t, e, l) {
    N(Eu, e._currentValue), (e._currentValue = l);
  }
  function Ge(t) {
    (t._currentValue = Eu.current), z(Eu);
  }
  function Nu(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Du(t, e, l, a) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var s = i;
          i = n;
          for (var f = 0; f < e.length; f++)
            if (s.context === e[f]) {
              (i.lanes |= l),
                (s = i.alternate),
                s !== null && (s.lanes |= l),
                Nu(i.return, l, t),
                a || (u = null);
              break t;
            }
          i = s.next;
        }
      } else if (n.tag === 18) {
        if (((u = n.return), u === null)) throw Error(m(341));
        (u.lanes |= l),
          (i = u.alternate),
          i !== null && (i.lanes |= l),
          Nu(u, l, t),
          (u = null);
      } else u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === t) {
            u = null;
            break;
          }
          if (((n = u.sibling), n !== null)) {
            (n.return = u.return), (u = n);
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function ia(t, e, l, a) {
    t = null;
    for (var n = e, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(m(387));
        if (((u = u.memoizedProps), u !== null)) {
          var s = n.type;
          oe(n.pendingProps.value, u.value) ||
            (t !== null ? t.push(s) : (t = [s]));
        }
      } else if (n === gt.current) {
        if (((u = n.alternate), u === null)) throw Error(m(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (t !== null ? t.push(vn) : (t = [vn]));
      }
      n = n.return;
    }
    t !== null && Du(e, t, l, a), (e.flags |= 262144);
  }
  function Zn(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!oe(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Rl(t) {
    (Cl = t),
      (Ye = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null);
  }
  function kt(t) {
    return Sf(Cl, t);
  }
  function Vn(t, e) {
    return Cl === null && Rl(t), Sf(t, e);
  }
  function Sf(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), Ye === null)) {
      if (t === null) throw Error(m(308));
      (Ye = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288);
    } else Ye = Ye.next = e;
    return l;
  }
  var B0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              (e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                });
            };
          },
    w0 = _.unstable_scheduleCallback,
    H0 = _.unstable_NormalPriority,
    Yt = {
      $$typeof: at,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Mu() {
    return { controller: new B0(), data: new Map(), refCount: 0 };
  }
  function La(t) {
    t.refCount--,
      t.refCount === 0 &&
        w0(H0, function () {
          t.controller.abort();
        });
  }
  var Za = null,
    Ou = 0,
    ua = 0,
    ca = null;
  function q0(t, e) {
    if (Za === null) {
      var l = (Za = []);
      (Ou = 0),
        (ua = Uc()),
        (ca = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Ou++, e.then(zf, zf), e;
  }
  function zf() {
    if (--Ou === 0 && Za !== null) {
      ca !== null && (ca.status = "fulfilled");
      var t = Za;
      (Za = null), (ua = 0), (ca = null);
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Y0(t, e) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      t.then(
        function () {
          (a.status = "fulfilled"), (a.value = e);
          for (var n = 0; n < l.length; n++) (0, l[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Af = b.S;
  b.S = function (t, e) {
    (cr = ce()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        q0(t, e),
      Af !== null && Af(t, e);
  };
  var Ul = o(null);
  function Cu() {
    var t = Ul.current;
    return t !== null ? t : At.pooledCache;
  }
  function Kn(t, e) {
    e === null ? N(Ul, Ul.current) : N(Ul, e.pool);
  }
  function _f() {
    var t = Cu();
    return t === null ? null : { parent: Yt._currentValue, pool: t };
  }
  var sa = Error(m(460)),
    Ru = Error(m(474)),
    Jn = Error(m(542)),
    kn = { then: function () {} };
  function jf(t) {
    return (t = t.status), t === "fulfilled" || t === "rejected";
  }
  function Tf(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(Be, Be), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Nf(t), t);
      default:
        if (typeof e.status == "string") e.then(Be, Be);
        else {
          if (((t = At), t !== null && 100 < t.shellSuspendCounter))
            throw Error(m(482));
          (t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Nf(t), t);
        }
        throw ((wl = e), sa);
    }
  }
  function Bl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((wl = l), sa)
        : l;
    }
  }
  var wl = null;
  function Ef() {
    if (wl === null) throw Error(m(459));
    var t = wl;
    return (wl = null), t;
  }
  function Nf(t) {
    if (t === sa || t === Jn) throw Error(m(483));
  }
  var fa = null,
    Va = 0;
  function $n(t) {
    var e = Va;
    return (Va += 1), fa === null && (fa = []), Tf(fa, t, e);
  }
  function Ka(t, e) {
    (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
  }
  function Wn(t, e) {
    throw e.$$typeof === Q
      ? Error(m(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          m(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t
          )
        ));
  }
  function Df(t) {
    function e(d, r) {
      if (t) {
        var h = d.deletions;
        h === null ? ((d.deletions = [r]), (d.flags |= 16)) : h.push(r);
      }
    }
    function l(d, r) {
      if (!t) return null;
      for (; r !== null; ) e(d, r), (r = r.sibling);
      return null;
    }
    function a(d) {
      for (var r = new Map(); d !== null; )
        d.key !== null ? r.set(d.key, d) : r.set(d.index, d), (d = d.sibling);
      return r;
    }
    function n(d, r) {
      return (d = He(d, r)), (d.index = 0), (d.sibling = null), d;
    }
    function i(d, r, h) {
      return (
        (d.index = h),
        t
          ? ((h = d.alternate),
            h !== null
              ? ((h = h.index), h < r ? ((d.flags |= 67108866), r) : h)
              : ((d.flags |= 67108866), r))
          : ((d.flags |= 1048576), r)
      );
    }
    function u(d) {
      return t && d.alternate === null && (d.flags |= 67108866), d;
    }
    function s(d, r, h, A) {
      return r === null || r.tag !== 6
        ? ((r = Su(h, d.mode, A)), (r.return = d), r)
        : ((r = n(r, h)), (r.return = d), r);
    }
    function f(d, r, h, A) {
      var X = h.type;
      return X === V
        ? S(d, r, h.props.children, A, h.key)
        : r !== null &&
          (r.elementType === X ||
            (typeof X == "object" &&
              X !== null &&
              X.$$typeof === Mt &&
              Bl(X) === r.type))
        ? ((r = n(r, h.props)), Ka(r, h), (r.return = d), r)
        : ((r = Xn(h.type, h.key, h.props, null, d.mode, A)),
          Ka(r, h),
          (r.return = d),
          r);
    }
    function g(d, r, h, A) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== h.containerInfo ||
        r.stateNode.implementation !== h.implementation
        ? ((r = zu(h, d.mode, A)), (r.return = d), r)
        : ((r = n(r, h.children || [])), (r.return = d), r);
    }
    function S(d, r, h, A, X) {
      return r === null || r.tag !== 7
        ? ((r = Ml(h, d.mode, A, X)), (r.return = d), r)
        : ((r = n(r, h)), (r.return = d), r);
    }
    function j(d, r, h) {
      if (
        (typeof r == "string" && r !== "") ||
        typeof r == "number" ||
        typeof r == "bigint"
      )
        return (r = Su("" + r, d.mode, h)), (r.return = d), r;
      if (typeof r == "object" && r !== null) {
        switch (r.$$typeof) {
          case ot:
            return (
              (h = Xn(r.type, r.key, r.props, null, d.mode, h)),
              Ka(h, r),
              (h.return = d),
              h
            );
          case Z:
            return (r = zu(r, d.mode, h)), (r.return = d), r;
          case Mt:
            return (r = Bl(r)), j(d, r, h);
        }
        if (zt(r) || K(r))
          return (r = Ml(r, d.mode, h, null)), (r.return = d), r;
        if (typeof r.then == "function") return j(d, $n(r), h);
        if (r.$$typeof === at) return j(d, Vn(d, r), h);
        Wn(d, r);
      }
      return null;
    }
    function v(d, r, h, A) {
      var X = r !== null ? r.key : null;
      if (
        (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
      )
        return X !== null ? null : s(d, r, "" + h, A);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ot:
            return h.key === X ? f(d, r, h, A) : null;
          case Z:
            return h.key === X ? g(d, r, h, A) : null;
          case Mt:
            return (h = Bl(h)), v(d, r, h, A);
        }
        if (zt(h) || K(h)) return X !== null ? null : S(d, r, h, A, null);
        if (typeof h.then == "function") return v(d, r, $n(h), A);
        if (h.$$typeof === at) return v(d, r, Vn(d, h), A);
        Wn(d, h);
      }
      return null;
    }
    function p(d, r, h, A, X) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (d = d.get(h) || null), s(r, d, "" + A, X);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ot:
            return (
              (d = d.get(A.key === null ? h : A.key) || null), f(r, d, A, X)
            );
          case Z:
            return (
              (d = d.get(A.key === null ? h : A.key) || null), g(r, d, A, X)
            );
          case Mt:
            return (A = Bl(A)), p(d, r, h, A, X);
        }
        if (zt(A) || K(A)) return (d = d.get(h) || null), S(r, d, A, X, null);
        if (typeof A.then == "function") return p(d, r, h, $n(A), X);
        if (A.$$typeof === at) return p(d, r, h, Vn(r, A), X);
        Wn(r, A);
      }
      return null;
    }
    function w(d, r, h, A) {
      for (
        var X = null, rt = null, H = r, tt = (r = 0), ct = null;
        H !== null && tt < h.length;
        tt++
      ) {
        H.index > tt ? ((ct = H), (H = null)) : (ct = H.sibling);
        var dt = v(d, H, h[tt], A);
        if (dt === null) {
          H === null && (H = ct);
          break;
        }
        t && H && dt.alternate === null && e(d, H),
          (r = i(dt, r, tt)),
          rt === null ? (X = dt) : (rt.sibling = dt),
          (rt = dt),
          (H = ct);
      }
      if (tt === h.length) return l(d, H), st && qe(d, tt), X;
      if (H === null) {
        for (; tt < h.length; tt++)
          (H = j(d, h[tt], A)),
            H !== null &&
              ((r = i(H, r, tt)),
              rt === null ? (X = H) : (rt.sibling = H),
              (rt = H));
        return st && qe(d, tt), X;
      }
      for (H = a(H); tt < h.length; tt++)
        (ct = p(H, d, tt, h[tt], A)),
          ct !== null &&
            (t &&
              ct.alternate !== null &&
              H.delete(ct.key === null ? tt : ct.key),
            (r = i(ct, r, tt)),
            rt === null ? (X = ct) : (rt.sibling = ct),
            (rt = ct));
      return (
        t &&
          H.forEach(function (zl) {
            return e(d, zl);
          }),
        st && qe(d, tt),
        X
      );
    }
    function J(d, r, h, A) {
      if (h == null) throw Error(m(151));
      for (
        var X = null, rt = null, H = r, tt = (r = 0), ct = null, dt = h.next();
        H !== null && !dt.done;
        tt++, dt = h.next()
      ) {
        H.index > tt ? ((ct = H), (H = null)) : (ct = H.sibling);
        var zl = v(d, H, dt.value, A);
        if (zl === null) {
          H === null && (H = ct);
          break;
        }
        t && H && zl.alternate === null && e(d, H),
          (r = i(zl, r, tt)),
          rt === null ? (X = zl) : (rt.sibling = zl),
          (rt = zl),
          (H = ct);
      }
      if (dt.done) return l(d, H), st && qe(d, tt), X;
      if (H === null) {
        for (; !dt.done; tt++, dt = h.next())
          (dt = j(d, dt.value, A)),
            dt !== null &&
              ((r = i(dt, r, tt)),
              rt === null ? (X = dt) : (rt.sibling = dt),
              (rt = dt));
        return st && qe(d, tt), X;
      }
      for (H = a(H); !dt.done; tt++, dt = h.next())
        (dt = p(H, d, tt, dt.value, A)),
          dt !== null &&
            (t &&
              dt.alternate !== null &&
              H.delete(dt.key === null ? tt : dt.key),
            (r = i(dt, r, tt)),
            rt === null ? (X = dt) : (rt.sibling = dt),
            (rt = dt));
      return (
        t &&
          H.forEach(function (Wm) {
            return e(d, Wm);
          }),
        st && qe(d, tt),
        X
      );
    }
    function St(d, r, h, A) {
      if (
        (typeof h == "object" &&
          h !== null &&
          h.type === V &&
          h.key === null &&
          (h = h.props.children),
        typeof h == "object" && h !== null)
      ) {
        switch (h.$$typeof) {
          case ot:
            t: {
              for (var X = h.key; r !== null; ) {
                if (r.key === X) {
                  if (((X = h.type), X === V)) {
                    if (r.tag === 7) {
                      l(d, r.sibling),
                        (A = n(r, h.props.children)),
                        (A.return = d),
                        (d = A);
                      break t;
                    }
                  } else if (
                    r.elementType === X ||
                    (typeof X == "object" &&
                      X !== null &&
                      X.$$typeof === Mt &&
                      Bl(X) === r.type)
                  ) {
                    l(d, r.sibling),
                      (A = n(r, h.props)),
                      Ka(A, h),
                      (A.return = d),
                      (d = A);
                    break t;
                  }
                  l(d, r);
                  break;
                } else e(d, r);
                r = r.sibling;
              }
              h.type === V
                ? ((A = Ml(h.props.children, d.mode, A, h.key)),
                  (A.return = d),
                  (d = A))
                : ((A = Xn(h.type, h.key, h.props, null, d.mode, A)),
                  Ka(A, h),
                  (A.return = d),
                  (d = A));
            }
            return u(d);
          case Z:
            t: {
              for (X = h.key; r !== null; ) {
                if (r.key === X)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === h.containerInfo &&
                    r.stateNode.implementation === h.implementation
                  ) {
                    l(d, r.sibling),
                      (A = n(r, h.children || [])),
                      (A.return = d),
                      (d = A);
                    break t;
                  } else {
                    l(d, r);
                    break;
                  }
                else e(d, r);
                r = r.sibling;
              }
              (A = zu(h, d.mode, A)), (A.return = d), (d = A);
            }
            return u(d);
          case Mt:
            return (h = Bl(h)), St(d, r, h, A);
        }
        if (zt(h)) return w(d, r, h, A);
        if (K(h)) {
          if (((X = K(h)), typeof X != "function")) throw Error(m(150));
          return (h = X.call(h)), J(d, r, h, A);
        }
        if (typeof h.then == "function") return St(d, r, $n(h), A);
        if (h.$$typeof === at) return St(d, r, Vn(d, h), A);
        Wn(d, h);
      }
      return (typeof h == "string" && h !== "") ||
        typeof h == "number" ||
        typeof h == "bigint"
        ? ((h = "" + h),
          r !== null && r.tag === 6
            ? (l(d, r.sibling), (A = n(r, h)), (A.return = d), (d = A))
            : (l(d, r), (A = Su(h, d.mode, A)), (A.return = d), (d = A)),
          u(d))
        : l(d, r);
    }
    return function (d, r, h, A) {
      try {
        Va = 0;
        var X = St(d, r, h, A);
        return (fa = null), X;
      } catch (H) {
        if (H === sa || H === Jn) throw H;
        var rt = re(29, H, null, d.mode);
        return (rt.lanes = A), (rt.return = d), rt;
      } finally {
      }
    };
  }
  var Hl = Df(!0),
    Mf = Df(!1),
    il = !1;
  function Uu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Bu(t, e) {
    (t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        });
  }
  function ul(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function cl(t, e, l) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (ht & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = Qn(t)),
        mf(t, null, l),
        e
      );
    }
    return Gn(t, a, e, l), Qn(t);
  }
  function Ja(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), bs(t, l);
    }
  }
  function wu(t, e) {
    var l = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var u = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          i === null ? (n = i = u) : (i = i.next = u), (l = l.next);
        } while (l !== null);
        i === null ? (n = i = e) : (i = i.next = e);
      } else n = i = e;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = l);
      return;
    }
    (t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e);
  }
  var Hu = !1;
  function ka() {
    if (Hu) {
      var t = ca;
      if (t !== null) throw t;
    }
  }
  function $a(t, e, l, a) {
    Hu = !1;
    var n = t.updateQueue;
    il = !1;
    var i = n.firstBaseUpdate,
      u = n.lastBaseUpdate,
      s = n.shared.pending;
    if (s !== null) {
      n.shared.pending = null;
      var f = s,
        g = f.next;
      (f.next = null), u === null ? (i = g) : (u.next = g), (u = f);
      var S = t.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (s = S.lastBaseUpdate),
        s !== u &&
          (s === null ? (S.firstBaseUpdate = g) : (s.next = g),
          (S.lastBaseUpdate = f)));
    }
    if (i !== null) {
      var j = n.baseState;
      (u = 0), (S = g = f = null), (s = i);
      do {
        var v = s.lane & -536870913,
          p = v !== s.lane;
        if (p ? (ut & v) === v : (a & v) === v) {
          v !== 0 && v === ua && (Hu = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                });
          t: {
            var w = t,
              J = s;
            v = e;
            var St = l;
            switch (J.tag) {
              case 1:
                if (((w = J.payload), typeof w == "function")) {
                  j = w.call(St, j, v);
                  break t;
                }
                j = w;
                break t;
              case 3:
                w.flags = (w.flags & -65537) | 128;
              case 0:
                if (
                  ((w = J.payload),
                  (v = typeof w == "function" ? w.call(St, j, v) : w),
                  v == null)
                )
                  break t;
                j = D({}, j, v);
                break t;
              case 2:
                il = !0;
            }
          }
          (v = s.callback),
            v !== null &&
              ((t.flags |= 64),
              p && (t.flags |= 8192),
              (p = n.callbacks),
              p === null ? (n.callbacks = [v]) : p.push(v));
        } else
          (p = {
            lane: v,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            S === null ? ((g = S = p), (f = j)) : (S = S.next = p),
            (u |= v);
        if (((s = s.next), s === null)) {
          if (((s = n.shared.pending), s === null)) break;
          (p = s),
            (s = p.next),
            (p.next = null),
            (n.lastBaseUpdate = p),
            (n.shared.pending = null);
        }
      } while (!0);
      S === null && (f = j),
        (n.baseState = f),
        (n.firstBaseUpdate = g),
        (n.lastBaseUpdate = S),
        i === null && (n.shared.lanes = 0),
        (dl |= u),
        (t.lanes = u),
        (t.memoizedState = j);
    }
  }
  function Of(t, e) {
    if (typeof t != "function") throw Error(m(191, t));
    t.call(e);
  }
  function Cf(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Of(l[t], e);
  }
  var oa = o(null),
    Fn = o(0);
  function Rf(t, e) {
    (t = $e), N(Fn, t), N(oa, e), ($e = t | e.baseLanes);
  }
  function qu() {
    N(Fn, $e), N(oa, oa.current);
  }
  function Yu() {
    ($e = Fn.current), z(oa), z(Fn);
  }
  var de = o(null),
    _e = null;
  function sl(t) {
    var e = t.alternate;
    N(Ht, Ht.current & 1),
      N(de, t),
      _e === null &&
        (e === null || oa.current !== null || e.memoizedState !== null) &&
        (_e = t);
  }
  function Gu(t) {
    N(Ht, Ht.current), N(de, t), _e === null && (_e = t);
  }
  function Uf(t) {
    t.tag === 22
      ? (N(Ht, Ht.current), N(de, t), _e === null && (_e = t))
      : fl();
  }
  function fl() {
    N(Ht, Ht.current), N(de, de.current);
  }
  function me(t) {
    z(de), _e === t && (_e = null), z(Ht);
  }
  var Ht = o(0);
  function In(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || Kc(l) || Jc(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        (e.child.return = e), (e = e.child);
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
    return null;
  }
  var Qe = 0,
    P = null,
    xt = null,
    Gt = null,
    Pn = !1,
    ra = !1,
    ql = !1,
    ti = 0,
    Wa = 0,
    da = null,
    G0 = 0;
  function Ct() {
    throw Error(m(321));
  }
  function Qu(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!oe(t[l], e[l])) return !1;
    return !0;
  }
  function Xu(t, e, l, a, n, i) {
    return (
      (Qe = i),
      (P = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (b.H = t === null || t.memoizedState === null ? yo : ac),
      (ql = !1),
      (i = l(a, n)),
      (ql = !1),
      ra && (i = wf(e, l, a, n)),
      Bf(t),
      i
    );
  }
  function Bf(t) {
    b.H = Pa;
    var e = xt !== null && xt.next !== null;
    if (((Qe = 0), (Gt = xt = P = null), (Pn = !1), (Wa = 0), (da = null), e))
      throw Error(m(300));
    t === null ||
      Qt ||
      ((t = t.dependencies), t !== null && Zn(t) && (Qt = !0));
  }
  function wf(t, e, l, a) {
    P = t;
    var n = 0;
    do {
      if ((ra && (da = null), (Wa = 0), (ra = !1), 25 <= n))
        throw Error(m(301));
      if (((n += 1), (Gt = xt = null), t.updateQueue != null)) {
        var i = t.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (b.H = xo), (i = e(l, a));
    } while (ra);
    return i;
  }
  function Q0() {
    var t = b.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? Fa(e) : e),
      (t = t.useState()[0]),
      (xt !== null ? xt.memoizedState : null) !== t && (P.flags |= 1024),
      e
    );
  }
  function Lu() {
    var t = ti !== 0;
    return (ti = 0), t;
  }
  function Zu(t, e, l) {
    (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l);
  }
  function Vu(t) {
    if (Pn) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), (t = t.next);
      }
      Pn = !1;
    }
    (Qe = 0), (Gt = xt = P = null), (ra = !1), (Wa = ti = 0), (da = null);
  }
  function Pt() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Gt === null ? (P.memoizedState = Gt = t) : (Gt = Gt.next = t), Gt;
  }
  function qt() {
    if (xt === null) {
      var t = P.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = xt.next;
    var e = Gt === null ? P.memoizedState : Gt.next;
    if (e !== null) (Gt = e), (xt = t);
    else {
      if (t === null)
        throw P.alternate === null ? Error(m(467)) : Error(m(310));
      (xt = t),
        (t = {
          memoizedState: xt.memoizedState,
          baseState: xt.baseState,
          baseQueue: xt.baseQueue,
          queue: xt.queue,
          next: null,
        }),
        Gt === null ? (P.memoizedState = Gt = t) : (Gt = Gt.next = t);
    }
    return Gt;
  }
  function ei() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fa(t) {
    var e = Wa;
    return (
      (Wa += 1),
      da === null && (da = []),
      (t = Tf(da, t, e)),
      (e = P),
      (Gt === null ? e.memoizedState : Gt.next) === null &&
        ((e = e.alternate),
        (b.H = e === null || e.memoizedState === null ? yo : ac)),
      t
    );
  }
  function li(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Fa(t);
      if (t.$$typeof === at) return kt(t);
    }
    throw Error(m(438, String(t)));
  }
  function Ku(t) {
    var e = null,
      l = P.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = P.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = ei()), (P.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = C;
    return e.index++, l;
  }
  function Xe(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ai(t) {
    var e = qt();
    return Ju(e, xt, t);
  }
  function Ju(t, e, l) {
    var a = t.queue;
    if (a === null) throw Error(m(311));
    a.lastRenderedReducer = l;
    var n = t.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        (n.next = i.next), (i.next = u);
      }
      (e.baseQueue = n = i), (a.pending = null);
    }
    if (((i = t.baseState), n === null)) t.memoizedState = i;
    else {
      e = n.next;
      var s = (u = null),
        f = null,
        g = e,
        S = !1;
      do {
        var j = g.lane & -536870913;
        if (j !== g.lane ? (ut & j) === j : (Qe & j) === j) {
          var v = g.revertLane;
          if (v === 0)
            f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: g.action,
                  hasEagerState: g.hasEagerState,
                  eagerState: g.eagerState,
                  next: null,
                }),
              j === ua && (S = !0);
          else if ((Qe & v) === v) {
            (g = g.next), v === ua && (S = !0);
            continue;
          } else
            (j = {
              lane: 0,
              revertLane: g.revertLane,
              gesture: null,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null,
            }),
              f === null ? ((s = f = j), (u = i)) : (f = f.next = j),
              (P.lanes |= v),
              (dl |= v);
          (j = g.action),
            ql && l(i, j),
            (i = g.hasEagerState ? g.eagerState : l(i, j));
        } else
          (v = {
            lane: j,
            revertLane: g.revertLane,
            gesture: g.gesture,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null,
          }),
            f === null ? ((s = f = v), (u = i)) : (f = f.next = v),
            (P.lanes |= j),
            (dl |= j);
        g = g.next;
      } while (g !== null && g !== e);
      if (
        (f === null ? (u = i) : (f.next = s),
        !oe(i, t.memoizedState) && ((Qt = !0), S && ((l = ca), l !== null)))
      )
        throw l;
      (t.memoizedState = i),
        (t.baseState = u),
        (t.baseQueue = f),
        (a.lastRenderedState = i);
    }
    return n === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function ku(t) {
    var e = qt(),
      l = e.queue;
    if (l === null) throw Error(m(311));
    l.lastRenderedReducer = t;
    var a = l.dispatch,
      n = l.pending,
      i = e.memoizedState;
    if (n !== null) {
      l.pending = null;
      var u = (n = n.next);
      do (i = t(i, u.action)), (u = u.next);
      while (u !== n);
      oe(i, e.memoizedState) || (Qt = !0),
        (e.memoizedState = i),
        e.baseQueue === null && (e.baseState = i),
        (l.lastRenderedState = i);
    }
    return [i, a];
  }
  function Hf(t, e, l) {
    var a = P,
      n = qt(),
      i = st;
    if (i) {
      if (l === void 0) throw Error(m(407));
      l = l();
    } else l = e();
    var u = !oe((xt || n).memoizedState, l);
    if (
      (u && ((n.memoizedState = l), (Qt = !0)),
      (n = n.queue),
      Fu(Gf.bind(null, a, n, t), [t]),
      n.getSnapshot !== e || u || (Gt !== null && Gt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ma(9, { destroy: void 0 }, Yf.bind(null, a, n, l, e), null),
        At === null)
      )
        throw Error(m(349));
      i || (Qe & 127) !== 0 || qf(a, e, l);
    }
    return l;
  }
  function qf(t, e, l) {
    (t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = P.updateQueue),
      e === null
        ? ((e = ei()), (P.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t));
  }
  function Yf(t, e, l, a) {
    (e.value = l), (e.getSnapshot = a), Qf(e) && Xf(t);
  }
  function Gf(t, e, l) {
    return l(function () {
      Qf(e) && Xf(t);
    });
  }
  function Qf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !oe(t, l);
    } catch {
      return !0;
    }
  }
  function Xf(t) {
    var e = Dl(t, 2);
    e !== null && ue(e, t, 2);
  }
  function $u(t) {
    var e = Pt();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), ql)) {
        Ie(!0);
        try {
          l();
        } finally {
          Ie(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xe,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Lf(t, e, l, a) {
    return (t.baseState = l), Ju(t, xt, typeof a == "function" ? a : Xe);
  }
  function X0(t, e, l, a, n) {
    if (ui(t)) throw Error(m(485));
    if (((t = e.action), t !== null)) {
      var i = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (u) {
          i.listeners.push(u);
        },
      };
      b.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = e.pending),
        l === null
          ? ((i.next = e.pending = i), Zf(e, i))
          : ((i.next = l.next), (e.pending = l.next = i));
    }
  }
  function Zf(t, e) {
    var l = e.action,
      a = e.payload,
      n = t.state;
    if (e.isTransition) {
      var i = b.T,
        u = {};
      b.T = u;
      try {
        var s = l(n, a),
          f = b.S;
        f !== null && f(u, s), Vf(t, e, s);
      } catch (g) {
        Wu(t, e, g);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), (b.T = i);
      }
    } else
      try {
        (i = l(n, a)), Vf(t, e, i);
      } catch (g) {
        Wu(t, e, g);
      }
  }
  function Vf(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            Kf(t, e, a);
          },
          function (a) {
            return Wu(t, e, a);
          }
        )
      : Kf(t, e, l);
  }
  function Kf(t, e, l) {
    (e.status = "fulfilled"),
      (e.value = l),
      Jf(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), Zf(t, l)));
  }
  function Wu(t, e, l) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do (e.status = "rejected"), (e.reason = l), Jf(e), (e = e.next);
      while (e !== a);
    }
    t.action = null;
  }
  function Jf(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function kf(t, e) {
    return e;
  }
  function $f(t, e) {
    if (st) {
      var l = At.formState;
      if (l !== null) {
        t: {
          var a = P;
          if (st) {
            if (jt) {
              e: {
                for (var n = jt, i = Ae; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break e;
                  }
                  if (((n = je(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                (i = n.data), (n = i === "F!" || i === "F" ? n : null);
              }
              if (n) {
                (jt = je(n.nextSibling)), (a = n.data === "F!");
                break t;
              }
            }
            al(a);
          }
          a = !1;
        }
        a && (e = l[0]);
      }
    }
    return (
      (l = Pt()),
      (l.memoizedState = l.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kf,
        lastRenderedState: e,
      }),
      (l.queue = a),
      (l = go.bind(null, P, a)),
      (a.dispatch = l),
      (a = $u(!1)),
      (i = lc.bind(null, P, !1, a.queue)),
      (a = Pt()),
      (n = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = n),
      (l = X0.bind(null, P, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = t),
      [e, l, !1]
    );
  }
  function Wf(t) {
    var e = qt();
    return Ff(e, xt, t);
  }
  function Ff(t, e, l) {
    if (
      ((e = Ju(t, e, kf)[0]),
      (t = ai(Xe)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Fa(e);
      } catch (u) {
        throw u === sa ? Jn : u;
      }
    else a = e;
    e = qt();
    var n = e.queue,
      i = n.dispatch;
    return (
      l !== e.memoizedState &&
        ((P.flags |= 2048),
        ma(9, { destroy: void 0 }, L0.bind(null, n, l), null)),
      [a, i, t]
    );
  }
  function L0(t, e) {
    t.action = e;
  }
  function If(t) {
    var e = qt(),
      l = xt;
    if (l !== null) return Ff(e, l, t);
    qt(), (e = e.memoizedState), (l = qt());
    var a = l.queue.dispatch;
    return (l.memoizedState = t), [e, a, !1];
  }
  function ma(t, e, l, a) {
    return (
      (t = { tag: t, create: l, deps: a, inst: e, next: null }),
      (e = P.updateQueue),
      e === null && ((e = ei()), (P.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function Pf() {
    return qt().memoizedState;
  }
  function ni(t, e, l, a) {
    var n = Pt();
    (P.flags |= t),
      (n.memoizedState = ma(
        1 | e,
        { destroy: void 0 },
        l,
        a === void 0 ? null : a
      ));
  }
  function ii(t, e, l, a) {
    var n = qt();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    xt !== null && a !== null && Qu(a, xt.memoizedState.deps)
      ? (n.memoizedState = ma(e, i, l, a))
      : ((P.flags |= t), (n.memoizedState = ma(1 | e, i, l, a)));
  }
  function to(t, e) {
    ni(8390656, 8, t, e);
  }
  function Fu(t, e) {
    ii(2048, 8, t, e);
  }
  function Z0(t) {
    P.flags |= 4;
    var e = P.updateQueue;
    if (e === null) (e = ei()), (P.updateQueue = e), (e.events = [t]);
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function eo(t) {
    var e = qt().memoizedState;
    return (
      Z0({ ref: e, nextImpl: t }),
      function () {
        if ((ht & 2) !== 0) throw Error(m(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function lo(t, e) {
    return ii(4, 2, t, e);
  }
  function ao(t, e) {
    return ii(4, 4, t, e);
  }
  function no(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function io(t, e, l) {
    (l = l != null ? l.concat([t]) : null), ii(4, 4, no.bind(null, e, t), l);
  }
  function Iu() {}
  function uo(t, e) {
    var l = qt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    return e !== null && Qu(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t);
  }
  function co(t, e) {
    var l = qt();
    e = e === void 0 ? null : e;
    var a = l.memoizedState;
    if (e !== null && Qu(e, a[1])) return a[0];
    if (((a = t()), ql)) {
      Ie(!0);
      try {
        t();
      } finally {
        Ie(!1);
      }
    }
    return (l.memoizedState = [a, e]), a;
  }
  function Pu(t, e, l) {
    return l === void 0 || ((Qe & 1073741824) !== 0 && (ut & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = fr()), (P.lanes |= t), (dl |= t), l);
  }
  function so(t, e, l, a) {
    return oe(l, e)
      ? l
      : oa.current !== null
      ? ((t = Pu(t, l, a)), oe(t, e) || (Qt = !0), t)
      : (Qe & 42) === 0 || ((Qe & 1073741824) !== 0 && (ut & 261930) === 0)
      ? ((Qt = !0), (t.memoizedState = l))
      : ((t = fr()), (P.lanes |= t), (dl |= t), e);
  }
  function fo(t, e, l, a, n) {
    var i = x.p;
    x.p = i !== 0 && 8 > i ? i : 8;
    var u = b.T,
      s = {};
    (b.T = s), lc(t, !1, e, l);
    try {
      var f = n(),
        g = b.S;
      if (
        (g !== null && g(s, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var S = Y0(f, a);
        Ia(t, e, S, ve(t));
      } else Ia(t, e, a, ve(t));
    } catch (j) {
      Ia(t, e, { then: function () {}, status: "rejected", reason: j }, ve());
    } finally {
      (x.p = i),
        u !== null && s.types !== null && (u.types = s.types),
        (b.T = u);
    }
  }
  function V0() {}
  function tc(t, e, l, a) {
    if (t.tag !== 5) throw Error(m(476));
    var n = oo(t).queue;
    fo(
      t,
      n,
      e,
      T,
      l === null
        ? V0
        : function () {
            return ro(t), l(a);
          }
    );
  }
  function oo(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: T,
      baseState: T,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xe,
        lastRenderedState: T,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xe,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function ro(t) {
    var e = oo(t);
    e.next === null && (e = t.alternate.memoizedState),
      Ia(t, e.next.queue, {}, ve());
  }
  function ec() {
    return kt(vn);
  }
  function mo() {
    return qt().memoizedState;
  }
  function ho() {
    return qt().memoizedState;
  }
  function K0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = ve();
          t = ul(l);
          var a = cl(e, t, l);
          a !== null && (ue(a, e, l), Ja(a, e, l)),
            (e = { cache: Mu() }),
            (t.payload = e);
          return;
      }
      e = e.return;
    }
  }
  function J0(t, e, l) {
    var a = ve();
    (l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ui(t)
        ? vo(e, l)
        : ((l = xu(t, e, l, a)), l !== null && (ue(l, t, a), po(l, e, a)));
  }
  function go(t, e, l) {
    var a = ve();
    Ia(t, e, l, a);
  }
  function Ia(t, e, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ui(t)) vo(e, n);
    else {
      var i = t.alternate;
      if (
        t.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = e.lastRenderedReducer), i !== null)
      )
        try {
          var u = e.lastRenderedState,
            s = i(u, l);
          if (((n.hasEagerState = !0), (n.eagerState = s), oe(s, u)))
            return Gn(t, e, n, 0), At === null && Yn(), !1;
        } catch {
        } finally {
        }
      if (((l = xu(t, e, n, a)), l !== null))
        return ue(l, t, a), po(l, e, a), !0;
    }
    return !1;
  }
  function lc(t, e, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Uc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ui(t))
    ) {
      if (e) throw Error(m(479));
    } else (e = xu(t, l, a, 2)), e !== null && ue(e, t, 2);
  }
  function ui(t) {
    var e = t.alternate;
    return t === P || (e !== null && e === P);
  }
  function vo(t, e) {
    ra = Pn = !0;
    var l = t.pending;
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e);
  }
  function po(t, e, l) {
    if ((l & 4194048) !== 0) {
      var a = e.lanes;
      (a &= t.pendingLanes), (l |= a), (e.lanes = l), bs(t, l);
    }
  }
  var Pa = {
    readContext: kt,
    use: li,
    useCallback: Ct,
    useContext: Ct,
    useEffect: Ct,
    useImperativeHandle: Ct,
    useLayoutEffect: Ct,
    useInsertionEffect: Ct,
    useMemo: Ct,
    useReducer: Ct,
    useRef: Ct,
    useState: Ct,
    useDebugValue: Ct,
    useDeferredValue: Ct,
    useTransition: Ct,
    useSyncExternalStore: Ct,
    useId: Ct,
    useHostTransitionStatus: Ct,
    useFormState: Ct,
    useActionState: Ct,
    useOptimistic: Ct,
    useMemoCache: Ct,
    useCacheRefresh: Ct,
  };
  Pa.useEffectEvent = Ct;
  var yo = {
      readContext: kt,
      use: li,
      useCallback: function (t, e) {
        return (Pt().memoizedState = [t, e === void 0 ? null : e]), t;
      },
      useContext: kt,
      useEffect: to,
      useImperativeHandle: function (t, e, l) {
        (l = l != null ? l.concat([t]) : null),
          ni(4194308, 4, no.bind(null, e, t), l);
      },
      useLayoutEffect: function (t, e) {
        return ni(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        ni(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = Pt();
        e = e === void 0 ? null : e;
        var a = t();
        if (ql) {
          Ie(!0);
          try {
            t();
          } finally {
            Ie(!1);
          }
        }
        return (l.memoizedState = [a, e]), a;
      },
      useReducer: function (t, e, l) {
        var a = Pt();
        if (l !== void 0) {
          var n = l(e);
          if (ql) {
            Ie(!0);
            try {
              l(e);
            } finally {
              Ie(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: n,
          }),
          (a.queue = t),
          (t = t.dispatch = J0.bind(null, P, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = Pt();
        return (t = { current: t }), (e.memoizedState = t);
      },
      useState: function (t) {
        t = $u(t);
        var e = t.queue,
          l = go.bind(null, P, e);
        return (e.dispatch = l), [t.memoizedState, l];
      },
      useDebugValue: Iu,
      useDeferredValue: function (t, e) {
        var l = Pt();
        return Pu(l, t, e);
      },
      useTransition: function () {
        var t = $u(!1);
        return (
          (t = fo.bind(null, P, t.queue, !0, !1)),
          (Pt().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var a = P,
          n = Pt();
        if (st) {
          if (l === void 0) throw Error(m(407));
          l = l();
        } else {
          if (((l = e()), At === null)) throw Error(m(349));
          (ut & 127) !== 0 || qf(a, e, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: e };
        return (
          (n.queue = i),
          to(Gf.bind(null, a, i, t), [t]),
          (a.flags |= 2048),
          ma(9, { destroy: void 0 }, Yf.bind(null, a, i, l, e), null),
          l
        );
      },
      useId: function () {
        var t = Pt(),
          e = At.identifierPrefix;
        if (st) {
          var l = Oe,
            a = Me;
          (l = (a & ~(1 << (32 - fe(a) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = ti++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_");
        } else (l = G0++), (e = "_" + e + "r_" + l.toString(32) + "_");
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: ec,
      useFormState: $f,
      useActionState: $f,
      useOptimistic: function (t) {
        var e = Pt();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l), (e = lc.bind(null, P, !0, l)), (l.dispatch = e), [t, e]
        );
      },
      useMemoCache: Ku,
      useCacheRefresh: function () {
        return (Pt().memoizedState = K0.bind(null, P));
      },
      useEffectEvent: function (t) {
        var e = Pt(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((ht & 2) !== 0) throw Error(m(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ac = {
      readContext: kt,
      use: li,
      useCallback: uo,
      useContext: kt,
      useEffect: Fu,
      useImperativeHandle: io,
      useInsertionEffect: lo,
      useLayoutEffect: ao,
      useMemo: co,
      useReducer: ai,
      useRef: Pf,
      useState: function () {
        return ai(Xe);
      },
      useDebugValue: Iu,
      useDeferredValue: function (t, e) {
        var l = qt();
        return so(l, xt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = ai(Xe)[0],
          e = qt().memoizedState;
        return [typeof t == "boolean" ? t : Fa(t), e];
      },
      useSyncExternalStore: Hf,
      useId: mo,
      useHostTransitionStatus: ec,
      useFormState: Wf,
      useActionState: Wf,
      useOptimistic: function (t, e) {
        var l = qt();
        return Lf(l, xt, t, e);
      },
      useMemoCache: Ku,
      useCacheRefresh: ho,
    };
  ac.useEffectEvent = eo;
  var xo = {
    readContext: kt,
    use: li,
    useCallback: uo,
    useContext: kt,
    useEffect: Fu,
    useImperativeHandle: io,
    useInsertionEffect: lo,
    useLayoutEffect: ao,
    useMemo: co,
    useReducer: ku,
    useRef: Pf,
    useState: function () {
      return ku(Xe);
    },
    useDebugValue: Iu,
    useDeferredValue: function (t, e) {
      var l = qt();
      return xt === null ? Pu(l, t, e) : so(l, xt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = ku(Xe)[0],
        e = qt().memoizedState;
      return [typeof t == "boolean" ? t : Fa(t), e];
    },
    useSyncExternalStore: Hf,
    useId: mo,
    useHostTransitionStatus: ec,
    useFormState: If,
    useActionState: If,
    useOptimistic: function (t, e) {
      var l = qt();
      return xt !== null
        ? Lf(l, xt, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: Ku,
    useCacheRefresh: ho,
  };
  xo.useEffectEvent = eo;
  function nc(t, e, l, a) {
    (e = t.memoizedState),
      (l = l(a, e)),
      (l = l == null ? e : D({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var ic = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var a = ve(),
        n = ul(a);
      (n.payload = e),
        l != null && (n.callback = l),
        (e = cl(t, n, a)),
        e !== null && (ue(e, t, a), Ja(e, t, a));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var a = ve(),
        n = ul(a);
      (n.tag = 1),
        (n.payload = e),
        l != null && (n.callback = l),
        (e = cl(t, n, a)),
        e !== null && (ue(e, t, a), Ja(e, t, a));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = ve(),
        a = ul(l);
      (a.tag = 2),
        e != null && (a.callback = e),
        (e = cl(t, a, l)),
        e !== null && (ue(e, t, l), Ja(e, t, l));
    },
  };
  function bo(t, e, l, a, n, i, u) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, i, u)
        : e.prototype && e.prototype.isPureReactComponent
        ? !Ya(l, a) || !Ya(n, i)
        : !0
    );
  }
  function So(t, e, l, a) {
    (t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, a),
      e.state !== t && ic.enqueueReplaceState(e, e.state, null);
  }
  function Yl(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var a in e) a !== "ref" && (l[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = D({}, l));
      for (var n in t) l[n] === void 0 && (l[n] = t[n]);
    }
    return l;
  }
  function zo(t) {
    qn(t);
  }
  function Ao(t) {
    console.error(t);
  }
  function _o(t) {
    qn(t);
  }
  function ci(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function jo(t, e, l) {
    try {
      var a = t.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function uc(t, e, l) {
    return (
      (l = ul(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        ci(t, e);
      }),
      l
    );
  }
  function To(t) {
    return (t = ul(t)), (t.tag = 3), t;
  }
  function Eo(t, e, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      (t.payload = function () {
        return n(i);
      }),
        (t.callback = function () {
          jo(e, l, a);
        });
    }
    var u = l.stateNode;
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (t.callback = function () {
        jo(e, l, a),
          typeof n != "function" &&
            (ml === null ? (ml = new Set([this])) : ml.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function k0(t, e, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && ia(e, l, n, !0),
        (l = de.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              _e === null ? xi() : l.alternate === null && Rt === 0 && (Rt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === kn
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([a])) : e.add(a),
                  Oc(t, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === kn
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([a])) : l.add(a)),
                  Oc(t, a, n)),
              !1
            );
        }
        throw Error(m(435, l.tag));
      }
      return Oc(t, a, n), xi(), !1;
    }
    if (st)
      return (
        (e = de.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== ju && ((t = Error(m(422), { cause: a })), Xa(be(t, l))))
          : (a !== ju && ((e = Error(m(423), { cause: a })), Xa(be(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (n &= -n),
            (t.lanes |= n),
            (a = be(a, l)),
            (n = uc(t.stateNode, a, n)),
            wu(t, n),
            Rt !== 4 && (Rt = 2)),
        !1
      );
    var i = Error(m(520), { cause: a });
    if (
      ((i = be(i, l)),
      sn === null ? (sn = [i]) : sn.push(i),
      Rt !== 4 && (Rt = 2),
      e === null)
    )
      return !0;
    (a = be(a, l)), (l = e);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = n & -n),
            (l.lanes |= t),
            (t = uc(l.stateNode, a, t)),
            wu(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (ml === null || !ml.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = To(n)),
              Eo(n, t, l, a),
              wu(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var cc = Error(m(461)),
    Qt = !1;
  function $t(t, e, l, a) {
    e.child = t === null ? Mf(e, null, l, a) : Hl(e, t.child, l, a);
  }
  function No(t, e, l, a, n) {
    l = l.render;
    var i = e.ref;
    if ("ref" in a) {
      var u = {};
      for (var s in a) s !== "ref" && (u[s] = a[s]);
    } else u = a;
    return (
      Rl(e),
      (a = Xu(t, e, l, u, i, n)),
      (s = Lu()),
      t !== null && !Qt
        ? (Zu(t, e, n), Le(t, e, n))
        : (st && s && Au(e), (e.flags |= 1), $t(t, e, a, n), e.child)
    );
  }
  function Do(t, e, l, a, n) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" &&
        !bu(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = i), Mo(t, e, i, a, n))
        : ((t = Xn(l.type, null, a, e, e.mode, n)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((i = t.child), !gc(t, n))) {
      var u = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Ya), l(u, a) && t.ref === e.ref)
      )
        return Le(t, e, n);
    }
    return (
      (e.flags |= 1),
      (t = He(i, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Mo(t, e, l, a, n) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (Ya(i, a) && t.ref === e.ref)
        if (((Qt = !1), (e.pendingProps = a = i), gc(t, n)))
          (t.flags & 131072) !== 0 && (Qt = !0);
        else return (e.lanes = t.lanes), Le(t, e, n);
    }
    return sc(t, e, l, a, n);
  }
  function Oo(t, e, l, a) {
    var n = a.children,
      i = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((i = i !== null ? i.baseLanes | l : l), t !== null)) {
          for (a = e.child = t.child, n = 0; a !== null; )
            (n = n | a.lanes | a.childLanes), (a = a.sibling);
          a = n & ~i;
        } else (a = 0), (e.child = null);
        return Co(t, e, i, l, a);
      }
      if ((l & 536870912) !== 0)
        (e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Kn(e, i !== null ? i.cachePool : null),
          i !== null ? Rf(e, i) : qu(),
          Uf(e);
      else
        return (
          (a = e.lanes = 536870912),
          Co(t, e, i !== null ? i.baseLanes | l : l, l, a)
        );
    } else
      i !== null
        ? (Kn(e, i.cachePool), Rf(e, i), fl(), (e.memoizedState = null))
        : (t !== null && Kn(e, null), qu(), fl());
    return $t(t, e, n, l), e.child;
  }
  function tn(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Co(t, e, l, a, n) {
    var i = Cu();
    return (
      (i = i === null ? null : { parent: Yt._currentValue, pool: i }),
      (e.memoizedState = { baseLanes: l, cachePool: i }),
      t !== null && Kn(e, null),
      qu(),
      Uf(e),
      t !== null && ia(t, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function si(t, e) {
    return (
      (e = oi({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Ro(t, e, l) {
    return (
      Hl(e, t.child, null, l),
      (t = si(e, e.pendingProps)),
      (t.flags |= 2),
      me(e),
      (e.memoizedState = null),
      t
    );
  }
  function $0(t, e, l) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (st) {
        if (a.mode === "hidden")
          return (t = si(e, a)), (e.lanes = 536870912), tn(null, t);
        if (
          (Gu(e),
          (t = jt)
            ? ((t = Vr(t, Ae)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: el !== null ? { id: Me, overflow: Oe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = gf(t)),
                (l.return = e),
                (e.child = l),
                (Jt = e),
                (jt = null)))
            : (t = null),
          t === null)
        )
          throw al(e);
        return (e.lanes = 536870912), null;
      }
      return si(e, a);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if ((Gu(e), n))
        if (e.flags & 256) (e.flags &= -257), (e = Ro(t, e, l));
        else if (e.memoizedState !== null)
          (e.child = t.child), (e.flags |= 128), (e = null);
        else throw Error(m(558));
      else if (
        (Qt || ia(t, e, l, !1), (n = (l & t.childLanes) !== 0), Qt || n)
      ) {
        if (
          ((a = At),
          a !== null && ((u = Ss(a, l)), u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), Dl(t, u), ue(a, t, u), cc);
        xi(), (e = Ro(t, e, l));
      } else
        (t = i.treeContext),
          (jt = je(u.nextSibling)),
          (Jt = e),
          (st = !0),
          (ll = null),
          (Ae = !1),
          t !== null && yf(e, t),
          (e = si(e, a)),
          (e.flags |= 4096);
      return e;
    }
    return (
      (t = He(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function fi(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(m(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function sc(t, e, l, a, n) {
    return (
      Rl(e),
      (l = Xu(t, e, l, a, void 0, n)),
      (a = Lu()),
      t !== null && !Qt
        ? (Zu(t, e, n), Le(t, e, n))
        : (st && a && Au(e), (e.flags |= 1), $t(t, e, l, n), e.child)
    );
  }
  function Uo(t, e, l, a, n, i) {
    return (
      Rl(e),
      (e.updateQueue = null),
      (l = wf(e, a, l, n)),
      Bf(t),
      (a = Lu()),
      t !== null && !Qt
        ? (Zu(t, e, i), Le(t, e, i))
        : (st && a && Au(e), (e.flags |= 1), $t(t, e, l, i), e.child)
    );
  }
  function Bo(t, e, l, a, n) {
    if ((Rl(e), e.stateNode === null)) {
      var i = ea,
        u = l.contextType;
      typeof u == "object" && u !== null && (i = kt(u)),
        (i = new l(a, i)),
        (e.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = ic),
        (e.stateNode = i),
        (i._reactInternals = e),
        (i = e.stateNode),
        (i.props = a),
        (i.state = e.memoizedState),
        (i.refs = {}),
        Uu(e),
        (u = l.contextType),
        (i.context = typeof u == "object" && u !== null ? kt(u) : ea),
        (i.state = e.memoizedState),
        (u = l.getDerivedStateFromProps),
        typeof u == "function" && (nc(e, l, u, a), (i.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((u = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          u !== i.state && ic.enqueueReplaceState(i, i.state, null),
          $a(e, a, i, n),
          ka(),
          (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0);
    } else if (t === null) {
      i = e.stateNode;
      var s = e.memoizedProps,
        f = Yl(l, s);
      i.props = f;
      var g = i.context,
        S = l.contextType;
      (u = ea), typeof S == "object" && S !== null && (u = kt(S));
      var j = l.getDerivedStateFromProps;
      (S =
        typeof j == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (s = e.pendingProps !== s),
        S ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((s || g !== u) && So(e, i, a, u)),
        (il = !1);
      var v = e.memoizedState;
      (i.state = v),
        $a(e, a, i, n),
        ka(),
        (g = e.memoizedState),
        s || v !== g || il
          ? (typeof j == "function" && (nc(e, l, j, a), (g = e.memoizedState)),
            (f = il || bo(e, l, f, a, v, g, u))
              ? (S ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = g)),
            (i.props = a),
            (i.state = g),
            (i.context = u),
            (a = f))
          : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1));
    } else {
      (i = e.stateNode),
        Bu(t, e),
        (u = e.memoizedProps),
        (S = Yl(l, u)),
        (i.props = S),
        (j = e.pendingProps),
        (v = i.context),
        (g = l.contextType),
        (f = ea),
        typeof g == "object" && g !== null && (f = kt(g)),
        (s = l.getDerivedStateFromProps),
        (g =
          typeof s == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((u !== j || v !== f) && So(e, i, a, f)),
        (il = !1),
        (v = e.memoizedState),
        (i.state = v),
        $a(e, a, i, n),
        ka();
      var p = e.memoizedState;
      u !== j ||
      v !== p ||
      il ||
      (t !== null && t.dependencies !== null && Zn(t.dependencies))
        ? (typeof s == "function" && (nc(e, l, s, a), (p = e.memoizedState)),
          (S =
            il ||
            bo(e, l, S, a, v, p, f) ||
            (t !== null && t.dependencies !== null && Zn(t.dependencies)))
            ? (g ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, p, f),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, p, f)),
              typeof i.componentDidUpdate == "function" && (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === t.memoizedProps && v === t.memoizedState) ||
                (e.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === t.memoizedProps && v === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = p)),
          (i.props = a),
          (i.state = p),
          (i.context = f),
          (a = S))
        : (typeof i.componentDidUpdate != "function" ||
            (u === t.memoizedProps && v === t.memoizedState) ||
            (e.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === t.memoizedProps && v === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      fi(t, e),
      (a = (e.flags & 128) !== 0),
      i || a
        ? ((i = e.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Hl(e, t.child, null, n)),
              (e.child = Hl(e, null, l, n)))
            : $t(t, e, l, n),
          (e.memoizedState = i.state),
          (t = e.child))
        : (t = Le(t, e, n)),
      t
    );
  }
  function wo(t, e, l, a) {
    return Ol(), (e.flags |= 256), $t(t, e, l, a), e.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function oc(t) {
    return { baseLanes: t, cachePool: _f() };
  }
  function rc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= ge), t;
  }
  function Ho(t, e, l) {
    var a = e.pendingProps,
      n = !1,
      i = (e.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u =
          t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0),
      u && ((n = !0), (e.flags &= -129)),
      (u = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (st) {
        if (
          (n ? sl(e) : fl(),
          (t = jt)
            ? ((t = Vr(t, Ae)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: el !== null ? { id: Me, overflow: Oe } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = gf(t)),
                (l.return = e),
                (e.child = l),
                (Jt = e),
                (jt = null)))
            : (t = null),
          t === null)
        )
          throw al(e);
        return Jc(t) ? (e.lanes = 32) : (e.lanes = 536870912), null;
      }
      var s = a.children;
      return (
        (a = a.fallback),
        n
          ? (fl(),
            (n = e.mode),
            (s = oi({ mode: "hidden", children: s }, n)),
            (a = Ml(a, n, l, null)),
            (s.return = e),
            (a.return = e),
            (s.sibling = a),
            (e.child = s),
            (a = e.child),
            (a.memoizedState = oc(l)),
            (a.childLanes = rc(t, u, l)),
            (e.memoizedState = fc),
            tn(null, a))
          : (sl(e), dc(e, s))
      );
    }
    var f = t.memoizedState;
    if (f !== null && ((s = f.dehydrated), s !== null)) {
      if (i)
        e.flags & 256
          ? (sl(e), (e.flags &= -257), (e = mc(t, e, l)))
          : e.memoizedState !== null
          ? (fl(), (e.child = t.child), (e.flags |= 128), (e = null))
          : (fl(),
            (s = a.fallback),
            (n = e.mode),
            (a = oi({ mode: "visible", children: a.children }, n)),
            (s = Ml(s, n, l, null)),
            (s.flags |= 2),
            (a.return = e),
            (s.return = e),
            (a.sibling = s),
            (e.child = a),
            Hl(e, t.child, null, l),
            (a = e.child),
            (a.memoizedState = oc(l)),
            (a.childLanes = rc(t, u, l)),
            (e.memoizedState = fc),
            (e = tn(null, a)));
      else if ((sl(e), Jc(s))) {
        if (((u = s.nextSibling && s.nextSibling.dataset), u)) var g = u.dgst;
        (u = g),
          (a = Error(m(419))),
          (a.stack = ""),
          (a.digest = u),
          Xa({ value: a, source: null, stack: null }),
          (e = mc(t, e, l));
      } else if (
        (Qt || ia(t, e, l, !1), (u = (l & t.childLanes) !== 0), Qt || u)
      ) {
        if (
          ((u = At),
          u !== null && ((a = Ss(u, l)), a !== 0 && a !== f.retryLane))
        )
          throw ((f.retryLane = a), Dl(t, a), ue(u, t, a), cc);
        Kc(s) || xi(), (e = mc(t, e, l));
      } else
        Kc(s)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = f.treeContext),
            (jt = je(s.nextSibling)),
            (Jt = e),
            (st = !0),
            (ll = null),
            (Ae = !1),
            t !== null && yf(e, t),
            (e = dc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (fl(),
        (s = a.fallback),
        (n = e.mode),
        (f = t.child),
        (g = f.sibling),
        (a = He(f, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = f.subtreeFlags & 65011712),
        g !== null ? (s = He(g, s)) : ((s = Ml(s, n, l, null)), (s.flags |= 2)),
        (s.return = e),
        (a.return = e),
        (a.sibling = s),
        (e.child = a),
        tn(null, a),
        (a = e.child),
        (s = t.child.memoizedState),
        s === null
          ? (s = oc(l))
          : ((n = s.cachePool),
            n !== null
              ? ((f = Yt._currentValue),
                (n = n.parent !== f ? { parent: f, pool: f } : n))
              : (n = _f()),
            (s = { baseLanes: s.baseLanes | l, cachePool: n })),
        (a.memoizedState = s),
        (a.childLanes = rc(t, u, l)),
        (e.memoizedState = fc),
        tn(t.child, a))
      : (sl(e),
        (l = t.child),
        (t = l.sibling),
        (l = He(l, { mode: "visible", children: a.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((u = e.deletions),
          u === null ? ((e.deletions = [t]), (e.flags |= 16)) : u.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function dc(t, e) {
    return (
      (e = oi({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function oi(t, e) {
    return (t = re(22, t, null, e)), (t.lanes = 0), t;
  }
  function mc(t, e, l) {
    return (
      Hl(e, t.child, null, l),
      (t = dc(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function qo(t, e, l) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Nu(t.return, e, l);
  }
  function hc(t, e, l, a, n, i) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
          treeForkCount: i,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = l),
        (u.tailMode = n),
        (u.treeForkCount = i));
  }
  function Yo(t, e, l) {
    var a = e.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    a = a.children;
    var u = Ht.current,
      s = (u & 2) !== 0;
    if (
      (s ? ((u = (u & 1) | 2), (e.flags |= 128)) : (u &= 1),
      N(Ht, u),
      $t(t, e, a, l),
      (a = st ? Qa : 0),
      !s && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && qo(t, l, e);
        else if (t.tag === 19) qo(t, l, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    switch (n) {
      case "forwards":
        for (l = e.child, n = null; l !== null; )
          (t = l.alternate),
            t !== null && In(t) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = e.child), (e.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          hc(e, !1, n, l, i, a);
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = e.child, e.child = null; n !== null; ) {
          if (((t = n.alternate), t !== null && In(t) === null)) {
            e.child = n;
            break;
          }
          (t = n.sibling), (n.sibling = l), (l = n), (n = t);
        }
        hc(e, !0, l, null, i, a);
        break;
      case "together":
        hc(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Le(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (dl |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((ia(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(m(153));
    if (e.child !== null) {
      for (
        t = e.child, l = He(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;

      )
        (t = t.sibling),
          (l = l.sibling = He(t, t.pendingProps)),
          (l.return = e);
      l.sibling = null;
    }
    return e.child;
  }
  function gc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Zn(t)));
  }
  function W0(t, e, l) {
    switch (e.tag) {
      case 3:
        It(e, e.stateNode.containerInfo),
          nl(e, Yt, t.memoizedState.cache),
          Ol();
        break;
      case 27:
      case 5:
        Ta(e);
        break;
      case 4:
        It(e, e.stateNode.containerInfo);
        break;
      case 10:
        nl(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return (e.flags |= 128), Gu(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (sl(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
            ? Ho(t, e, l)
            : (sl(e), (t = Le(t, e, l)), t !== null ? t.sibling : null);
        sl(e);
        break;
      case 19:
        var n = (t.flags & 128) !== 0;
        if (
          ((a = (l & e.childLanes) !== 0),
          a || (ia(t, e, l, !1), (a = (l & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return Yo(t, e, l);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          N(Ht, Ht.current),
          a)
        )
          break;
        return null;
      case 22:
        return (e.lanes = 0), Oo(t, e, l, e.pendingProps);
      case 24:
        nl(e, Yt, t.memoizedState.cache);
    }
    return Le(t, e, l);
  }
  function Go(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Qt = !0;
      else {
        if (!gc(t, l) && (e.flags & 128) === 0) return (Qt = !1), W0(t, e, l);
        Qt = (t.flags & 131072) !== 0;
      }
    else (Qt = !1), st && (e.flags & 1048576) !== 0 && pf(e, Qa, e.index);
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Bl(e.elementType)), (e.type = t), typeof t == "function"))
            bu(t)
              ? ((a = Yl(t, a)), (e.tag = 1), (e = Bo(null, e, t, a, l)))
              : ((e.tag = 0), (e = sc(null, e, t, a, l)));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === Et) {
                (e.tag = 11), (e = No(null, e, t, a, l));
                break t;
              } else if (n === I) {
                (e.tag = 14), (e = Do(null, e, t, a, l));
                break t;
              }
            }
            throw ((e = _t(t) || t), Error(m(306, e, "")));
          }
        }
        return e;
      case 0:
        return sc(t, e, e.type, e.pendingProps, l);
      case 1:
        return (a = e.type), (n = Yl(a, e.pendingProps)), Bo(t, e, a, n, l);
      case 3:
        t: {
          if ((It(e, e.stateNode.containerInfo), t === null))
            throw Error(m(387));
          a = e.pendingProps;
          var i = e.memoizedState;
          (n = i.element), Bu(t, e), $a(e, a, null, l);
          var u = e.memoizedState;
          if (
            ((a = u.cache),
            nl(e, Yt, a),
            a !== i.cache && Du(e, [Yt], l, !0),
            ka(),
            (a = u.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: u.cache }),
              (e.updateQueue.baseState = i),
              (e.memoizedState = i),
              e.flags & 256)
            ) {
              e = wo(t, e, a, l);
              break t;
            } else if (a !== n) {
              (n = be(Error(m(424)), e)), Xa(n), (e = wo(t, e, a, l));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                jt = je(t.firstChild),
                  Jt = e,
                  st = !0,
                  ll = null,
                  Ae = !0,
                  l = Mf(e, null, a, l),
                  e.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((Ol(), a === n)) {
              e = Le(t, e, l);
              break t;
            }
            $t(t, e, a, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          fi(t, e),
          t === null
            ? (l = Fr(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : st ||
                ((l = e.type),
                (t = e.pendingProps),
                (a = Ti(W.current).createElement(l)),
                (a[Kt] = e),
                (a[te] = t),
                Wt(a, l, t),
                Zt(a),
                (e.stateNode = a))
            : (e.memoizedState = Fr(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          Ta(e),
          t === null &&
            st &&
            ((a = e.stateNode = kr(e.type, e.pendingProps, W.current)),
            (Jt = e),
            (Ae = !0),
            (n = jt),
            pl(e.type) ? ((kc = n), (jt = je(a.firstChild))) : (jt = n)),
          $t(t, e, e.pendingProps.children, l),
          fi(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            st &&
            ((n = a = jt) &&
              ((a = Tm(a, e.type, e.pendingProps, Ae)),
              a !== null
                ? ((e.stateNode = a),
                  (Jt = e),
                  (jt = je(a.firstChild)),
                  (Ae = !1),
                  (n = !0))
                : (n = !1)),
            n || al(e)),
          Ta(e),
          (n = e.type),
          (i = e.pendingProps),
          (u = t !== null ? t.memoizedProps : null),
          (a = i.children),
          Lc(n, i) ? (a = null) : u !== null && Lc(n, u) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = Xu(t, e, Q0, null, null, l)), (vn._currentValue = n)),
          fi(t, e),
          $t(t, e, a, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            st &&
            ((t = l = jt) &&
              ((l = Em(l, e.pendingProps, Ae)),
              l !== null
                ? ((e.stateNode = l), (Jt = e), (jt = null), (t = !0))
                : (t = !1)),
            t || al(e)),
          null
        );
      case 13:
        return Ho(t, e, l);
      case 4:
        return (
          It(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Hl(e, null, a, l)) : $t(t, e, a, l),
          e.child
        );
      case 11:
        return No(t, e, e.type, e.pendingProps, l);
      case 7:
        return $t(t, e, e.pendingProps, l), e.child;
      case 8:
        return $t(t, e, e.pendingProps.children, l), e.child;
      case 12:
        return $t(t, e, e.pendingProps.children, l), e.child;
      case 10:
        return (
          (a = e.pendingProps),
          nl(e, e.type, a.value),
          $t(t, e, a.children, l),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Rl(e),
          (n = kt(n)),
          (a = a(n)),
          (e.flags |= 1),
          $t(t, e, a, l),
          e.child
        );
      case 14:
        return Do(t, e, e.type, e.pendingProps, l);
      case 15:
        return Mo(t, e, e.type, e.pendingProps, l);
      case 19:
        return Yo(t, e, l);
      case 31:
        return $0(t, e, l);
      case 22:
        return Oo(t, e, l, e.pendingProps);
      case 24:
        return (
          Rl(e),
          (a = kt(Yt)),
          t === null
            ? ((n = Cu()),
              n === null &&
                ((n = At),
                (i = Mu()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (e.memoizedState = { parent: a, cache: n }),
              Uu(e),
              nl(e, Yt, n))
            : ((t.lanes & l) !== 0 && (Bu(t, e), $a(e, null, null, l), ka()),
              (n = t.memoizedState),
              (i = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  nl(e, Yt, a))
                : ((a = i.cache),
                  nl(e, Yt, a),
                  a !== n.cache && Du(e, [Yt], l, !0))),
          $t(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(m(156, e.tag));
  }
  function Ze(t) {
    t.flags |= 4;
  }
  function vc(t, e, l, a, n) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (n & 335544128) === n))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (mr()) t.flags |= 8192;
        else throw ((wl = kn), Ru);
    } else t.flags &= -16777217;
  }
  function Qo(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !ld(e)))
      if (mr()) t.flags |= 8192;
      else throw ((wl = kn), Ru);
  }
  function ri(t, e) {
    e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? ys() : 536870912), (t.lanes |= e), (pa |= e));
  }
  function en(t, e) {
    if (!st)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), (e = e.sibling);
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Tt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0;
    if (e)
      for (var n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = t),
          (n = n.sibling);
    else
      for (n = t.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = t),
          (n = n.sibling);
    return (t.subtreeFlags |= a), (t.childLanes = l), e;
  }
  function F0(t, e, l) {
    var a = e.pendingProps;
    switch ((_u(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Tt(e), null;
      case 1:
        return Tt(e), null;
      case 3:
        return (
          (l = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ge(Yt),
          wt(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (na(e)
              ? Ze(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Tu())),
          Tt(e),
          null
        );
      case 26:
        var n = e.type,
          i = e.memoizedState;
        return (
          t === null
            ? (Ze(e),
              i !== null ? (Tt(e), Qo(e, i)) : (Tt(e), vc(e, n, null, a, l)))
            : i
            ? i !== t.memoizedState
              ? (Ze(e), Tt(e), Qo(e, i))
              : (Tt(e), (e.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== a && Ze(e),
              Tt(e),
              vc(e, n, t, a, l)),
          null
        );
      case 27:
        if (
          (zn(e),
          (l = W.current),
          (n = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && Ze(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(m(166));
            return Tt(e), null;
          }
          (t = M.current),
            na(e) ? xf(e) : ((t = kr(n, a, l)), (e.stateNode = t), Ze(e));
        }
        return Tt(e), null;
      case 5:
        if ((zn(e), (n = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && Ze(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(m(166));
            return Tt(e), null;
          }
          if (((i = M.current), na(e))) xf(e);
          else {
            var u = Ti(W.current);
            switch (i) {
              case 1:
                i = u.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                i = u.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    i = u.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    i = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    (i = u.createElement("div")),
                      (i.innerHTML = "<script></script>"),
                      (i = i.removeChild(i.firstChild));
                    break;
                  case "select":
                    (i =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (i.multiple = !0)
                        : a.size && (i.size = a.size);
                    break;
                  default:
                    i =
                      typeof a.is == "string"
                        ? u.createElement(n, { is: a.is })
                        : u.createElement(n);
                }
            }
            (i[Kt] = e), (i[te] = a);
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) i.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                (u.child.return = u), (u = u.child);
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
            e.stateNode = i;
            t: switch ((Wt(i, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Ze(e);
          }
        }
        return (
          Tt(e),
          vc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && Ze(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(m(166));
          if (((t = W.current), na(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (a = null),
              (n = Jt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (t[Kt] = e),
              (t = !!(
                t.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Hr(t.nodeValue, l)
              )),
              t || al(e, !0);
          } else (t = Ti(t).createTextNode(a)), (t[Kt] = e), (e.stateNode = t);
        }
        return Tt(e), null;
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = na(e)), l !== null)) {
            if (t === null) {
              if (!a) throw Error(m(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(m(557));
              t[Kt] = e;
            } else
              Ol(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Tt(e), (t = !1);
          } else
            (l = Tu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0);
          if (!t) return e.flags & 256 ? (me(e), e) : (me(e), null);
          if ((e.flags & 128) !== 0) throw Error(m(558));
        }
        return Tt(e), null;
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((n = na(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!n) throw Error(m(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(m(317));
              n[Kt] = e;
            } else
              Ol(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4);
            Tt(e), (n = !1);
          } else
            (n = Tu()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return e.flags & 256 ? (me(e), e) : (me(e), null);
        }
        return (
          me(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = a !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((a = e.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (i = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (i = a.memoizedState.cachePool.pool),
                i !== n && (a.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              ri(e, e.updateQueue),
              Tt(e),
              null)
        );
      case 4:
        return wt(), t === null && qc(e.stateNode.containerInfo), Tt(e), null;
      case 10:
        return Ge(e.type), Tt(e), null;
      case 19:
        if ((z(Ht), (a = e.memoizedState), a === null)) return Tt(e), null;
        if (((n = (e.flags & 128) !== 0), (i = a.rendering), i === null))
          if (n) en(a, !1);
          else {
            if (Rt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((i = In(t)), i !== null)) {
                  for (
                    e.flags |= 128,
                      en(a, !1),
                      t = i.updateQueue,
                      e.updateQueue = t,
                      ri(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;

                  )
                    hf(l, t), (l = l.sibling);
                  return (
                    N(Ht, (Ht.current & 1) | 2),
                    st && qe(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              ce() > vi &&
              ((e.flags |= 128), (n = !0), en(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((t = In(i)), t !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                ri(e, t),
                en(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !i.alternate &&
                  !st)
              )
                return Tt(e), null;
            } else
              2 * ce() - a.renderingStartTime > vi &&
                l !== 536870912 &&
                ((e.flags |= 128), (n = !0), en(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((i.sibling = e.child), (e.child = i))
            : ((t = a.last),
              t !== null ? (t.sibling = i) : (e.child = i),
              (a.last = i));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = ce()),
            (t.sibling = null),
            (l = Ht.current),
            N(Ht, n ? (l & 1) | 2 : l & 1),
            st && qe(e, a.treeForkCount),
            t)
          : (Tt(e), null);
      case 22:
      case 23:
        return (
          me(e),
          Yu(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Tt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Tt(e),
          (l = e.updateQueue),
          l !== null && ri(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== l && (e.flags |= 2048),
          t !== null && z(Ul),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          Ge(Yt),
          Tt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(m(156, e.tag));
  }
  function I0(t, e) {
    switch ((_u(e), e.tag)) {
      case 1:
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ge(Yt),
          wt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return zn(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if ((me(e), e.alternate === null)) throw Error(m(340));
          Ol();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (me(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(m(340));
          Ol();
        }
        return (
          (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return z(Ht), null;
      case 4:
        return wt(), null;
      case 10:
        return Ge(e.type), null;
      case 22:
      case 23:
        return (
          me(e),
          Yu(),
          t !== null && z(Ul),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return Ge(Yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Xo(t, e) {
    switch ((_u(e), e.tag)) {
      case 3:
        Ge(Yt), wt();
        break;
      case 26:
      case 27:
      case 5:
        zn(e);
        break;
      case 4:
        wt();
        break;
      case 31:
        e.memoizedState !== null && me(e);
        break;
      case 13:
        me(e);
        break;
      case 19:
        z(Ht);
        break;
      case 10:
        Ge(e.type);
        break;
      case 22:
      case 23:
        me(e), Yu(), t !== null && z(Ul);
        break;
      case 24:
        Ge(Yt);
    }
  }
  function ln(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & t) === t) {
            a = void 0;
            var i = l.create,
              u = l.inst;
            (a = i()), (u.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (s) {
      yt(e, e.return, s);
    }
  }
  function ol(t, e, l) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & t) === t) {
            var u = a.inst,
              s = u.destroy;
            if (s !== void 0) {
              (u.destroy = void 0), (n = e);
              var f = l,
                g = s;
              try {
                g();
              } catch (S) {
                yt(n, f, S);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (S) {
      yt(e, e.return, S);
    }
  }
  function Lo(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Cf(e, l);
      } catch (a) {
        yt(t, t.return, a);
      }
    }
  }
  function Zo(t, e, l) {
    (l.props = Yl(t.type, t.memoizedProps)), (l.state = t.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      yt(t, e, a);
    }
  }
  function an(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      yt(t, e, n);
    }
  }
  function Ce(t, e) {
    var l = t.ref,
      a = t.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          yt(t, e, n);
        } finally {
          (t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          yt(t, e, n);
        }
      else l.current = null;
  }
  function Vo(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break t;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      yt(t, t.return, n);
    }
  }
  function pc(t, e, l) {
    try {
      var a = t.stateNode;
      bm(a, t.type, l, e), (a[te] = e);
    } catch (n) {
      yt(t, t.return, n);
    }
  }
  function Ko(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && pl(t.type)) ||
      t.tag === 4
    );
  }
  function yc(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Ko(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && pl(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        (t.child.return = t), (t = t.child);
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function xc(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = Be));
    else if (
      a !== 4 &&
      (a === 27 && pl(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (xc(t, e, l), t = t.sibling; t !== null; )
        xc(t, e, l), (t = t.sibling);
  }
  function di(t, e, l) {
    var a = t.tag;
    if (a === 5 || a === 6)
      (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (
      a !== 4 &&
      (a === 27 && pl(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (di(t, e, l), t = t.sibling; t !== null; )
        di(t, e, l), (t = t.sibling);
  }
  function Jo(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var a = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Wt(e, a, l), (e[Kt] = t), (e[te] = l);
    } catch (i) {
      yt(t, t.return, i);
    }
  }
  var Ve = !1,
    Xt = !1,
    bc = !1,
    ko = typeof WeakSet == "function" ? WeakSet : Set,
    Vt = null;
  function P0(t, e) {
    if (((t = t.containerInfo), (Qc = Ri), (t = nf(t)), mu(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var u = 0,
              s = -1,
              f = -1,
              g = 0,
              S = 0,
              j = t,
              v = null;
            e: for (;;) {
              for (
                var p;
                j !== l || (n !== 0 && j.nodeType !== 3) || (s = u + n),
                  j !== i || (a !== 0 && j.nodeType !== 3) || (f = u + a),
                  j.nodeType === 3 && (u += j.nodeValue.length),
                  (p = j.firstChild) !== null;

              )
                (v = j), (j = p);
              for (;;) {
                if (j === t) break e;
                if (
                  (v === l && ++g === n && (s = u),
                  v === i && ++S === a && (f = u),
                  (p = j.nextSibling) !== null)
                )
                  break;
                (j = v), (v = j.parentNode);
              }
              j = p;
            }
            l = s === -1 || f === -1 ? null : { start: s, end: f };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Xc = { focusedElem: t, selectionRange: l }, Ri = !1, Vt = e;
      Vt !== null;

    )
      if (
        ((e = Vt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        (t.return = e), (Vt = t);
      else
        for (; Vt !== null; ) {
          switch (((e = Vt), (i = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  (n = t[l]), (n.ref.impl = n.nextImpl);
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                (t = void 0),
                  (l = e),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode);
                try {
                  var w = Yl(l.type, n);
                  (t = a.getSnapshotBeforeUpdate(w, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = t);
                } catch (J) {
                  yt(l, l.return, J);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  Vc(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Vc(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(m(163));
          }
          if (((t = e.sibling), t !== null)) {
            (t.return = e.return), (Vt = t);
            break;
          }
          Vt = e.return;
        }
  }
  function $o(t, e, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Je(t, l), a & 4 && ln(5, l);
        break;
      case 1:
        if ((Je(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (u) {
              yt(l, l.return, u);
            }
          else {
            var n = Yl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (u) {
              yt(l, l.return, u);
            }
          }
        a & 64 && Lo(l), a & 512 && an(l, l.return);
        break;
      case 3:
        if ((Je(t, l), a & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Cf(t, e);
          } catch (u) {
            yt(l, l.return, u);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Jo(l);
      case 26:
      case 5:
        Je(t, l), e === null && a & 4 && Vo(l), a & 512 && an(l, l.return);
        break;
      case 12:
        Je(t, l);
        break;
      case 31:
        Je(t, l), a & 4 && Io(t, l);
        break;
      case 13:
        Je(t, l),
          a & 4 && Po(t, l),
          a & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = sm.bind(null, l)), Nm(t, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || Ve), !a)) {
          (e = (e !== null && e.memoizedState !== null) || Xt), (n = Ve);
          var i = Xt;
          (Ve = a),
            (Xt = e) && !i ? ke(t, l, (l.subtreeFlags & 8772) !== 0) : Je(t, l),
            (Ve = n),
            (Xt = i);
        }
        break;
      case 30:
        break;
      default:
        Je(t, l);
    }
  }
  function Wo(t) {
    var e = t.alternate;
    e !== null && ((t.alternate = null), Wo(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Wi(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null);
  }
  var Dt = null,
    le = !1;
  function Ke(t, e, l) {
    for (l = l.child; l !== null; ) Fo(t, e, l), (l = l.sibling);
  }
  function Fo(t, e, l) {
    if (se && typeof se.onCommitFiberUnmount == "function")
      try {
        se.onCommitFiberUnmount(Ea, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Xt || Ce(l, e),
          Ke(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Xt || Ce(l, e);
        var a = Dt,
          n = le;
        pl(l.type) && ((Dt = l.stateNode), (le = !1)),
          Ke(t, e, l),
          mn(l.stateNode),
          (Dt = a),
          (le = n);
        break;
      case 5:
        Xt || Ce(l, e);
      case 6:
        if (
          ((a = Dt),
          (n = le),
          (Dt = null),
          Ke(t, e, l),
          (Dt = a),
          (le = n),
          Dt !== null)
        )
          if (le)
            try {
              (Dt.nodeType === 9
                ? Dt.body
                : Dt.nodeName === "HTML"
                ? Dt.ownerDocument.body
                : Dt
              ).removeChild(l.stateNode);
            } catch (i) {
              yt(l, e, i);
            }
          else
            try {
              Dt.removeChild(l.stateNode);
            } catch (i) {
              yt(l, e, i);
            }
        break;
      case 18:
        Dt !== null &&
          (le
            ? ((t = Dt),
              Lr(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
                l.stateNode
              ),
              ja(t))
            : Lr(Dt, l.stateNode));
        break;
      case 4:
        (a = Dt),
          (n = le),
          (Dt = l.stateNode.containerInfo),
          (le = !0),
          Ke(t, e, l),
          (Dt = a),
          (le = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ol(2, l, e), Xt || ol(4, l, e), Ke(t, e, l);
        break;
      case 1:
        Xt ||
          (Ce(l, e),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Zo(l, e, a)),
          Ke(t, e, l);
        break;
      case 21:
        Ke(t, e, l);
        break;
      case 22:
        (Xt = (a = Xt) || l.memoizedState !== null), Ke(t, e, l), (Xt = a);
        break;
      default:
        Ke(t, e, l);
    }
  }
  function Io(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        ja(t);
      } catch (l) {
        yt(e, e.return, l);
      }
    }
  }
  function Po(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        ja(t);
      } catch (l) {
        yt(e, e.return, l);
      }
  }
  function tm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ko()), e;
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new ko()),
          e
        );
      default:
        throw Error(m(435, t.tag));
    }
  }
  function mi(t, e) {
    var l = tm(t);
    e.forEach(function (a) {
      if (!l.has(a)) {
        l.add(a);
        var n = fm.bind(null, t, a);
        a.then(n, n);
      }
    });
  }
  function ae(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = t,
          u = e,
          s = u;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (pl(s.type)) {
                (Dt = s.stateNode), (le = !1);
                break t;
              }
              break;
            case 5:
              (Dt = s.stateNode), (le = !1);
              break t;
            case 3:
            case 4:
              (Dt = s.stateNode.containerInfo), (le = !0);
              break t;
          }
          s = s.return;
        }
        if (Dt === null) throw Error(m(160));
        Fo(i, u, n),
          (Dt = null),
          (le = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null);
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) tr(e, t), (e = e.sibling);
  }
  var Ne = null;
  function tr(t, e) {
    var l = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ae(e, t),
          ne(t),
          a & 4 && (ol(3, t, t.return), ln(3, t), ol(5, t, t.return));
        break;
      case 1:
        ae(e, t),
          ne(t),
          a & 512 && (Xt || l === null || Ce(l, l.return)),
          a & 64 &&
            Ve &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = Ne;
        if (
          (ae(e, t),
          ne(t),
          a & 512 && (Xt || l === null || Ce(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  (a = t.type),
                    (l = t.memoizedProps),
                    (n = n.ownerDocument || n);
                  e: switch (a) {
                    case "title":
                      (i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[Ma] ||
                          i[Kt] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title")
                          )),
                        Wt(i, a, l),
                        (i[Kt] = t),
                        Zt(i),
                        (a = i);
                      break t;
                    case "link":
                      var u = td("link", "href", n).get(a + (l.href || ""));
                      if (u) {
                        for (var s = 0; s < u.length; s++)
                          if (
                            ((i = u[s]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            u.splice(s, 1);
                            break e;
                          }
                      }
                      (i = n.createElement(a)),
                        Wt(i, a, l),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (u = td("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (s = 0; s < u.length; s++)
                          if (
                            ((i = u[s]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            u.splice(s, 1);
                            break e;
                          }
                      }
                      (i = n.createElement(a)),
                        Wt(i, a, l),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(m(468, a));
                  }
                  (i[Kt] = t), Zt(i), (a = i);
                }
                t.stateNode = a;
              } else ed(n, t.type, t.stateNode);
            else t.stateNode = Pr(n, a, t.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? ed(n, t.type, t.stateNode)
                  : Pr(n, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                pc(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ae(e, t),
          ne(t),
          a & 512 && (Xt || l === null || Ce(l, l.return)),
          l !== null && a & 4 && pc(t, t.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (ae(e, t),
          ne(t),
          a & 512 && (Xt || l === null || Ce(l, l.return)),
          t.flags & 32)
        ) {
          n = t.stateNode;
          try {
            kl(n, "");
          } catch (w) {
            yt(t, t.return, w);
          }
        }
        a & 4 &&
          t.stateNode != null &&
          ((n = t.memoizedProps), pc(t, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (bc = !0);
        break;
      case 6:
        if ((ae(e, t), ne(t), a & 4)) {
          if (t.stateNode === null) throw Error(m(162));
          (a = t.memoizedProps), (l = t.stateNode);
          try {
            l.nodeValue = a;
          } catch (w) {
            yt(t, t.return, w);
          }
        }
        break;
      case 3:
        if (
          ((Di = null),
          (n = Ne),
          (Ne = Ei(e.containerInfo)),
          ae(e, t),
          (Ne = n),
          ne(t),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            ja(e.containerInfo);
          } catch (w) {
            yt(t, t.return, w);
          }
        bc && ((bc = !1), er(t));
        break;
      case 4:
        (a = Ne),
          (Ne = Ei(t.stateNode.containerInfo)),
          ae(e, t),
          ne(t),
          (Ne = a);
        break;
      case 12:
        ae(e, t), ne(t);
        break;
      case 31:
        ae(e, t),
          ne(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), mi(t, a)));
        break;
      case 13:
        ae(e, t),
          ne(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (gi = ce()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), mi(t, a)));
        break;
      case 22:
        n = t.memoizedState !== null;
        var f = l !== null && l.memoizedState !== null,
          g = Ve,
          S = Xt;
        if (
          ((Ve = g || n),
          (Xt = S || f),
          ae(e, t),
          (Xt = S),
          (Ve = g),
          ne(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (l === null || f || Ve || Xt || Gl(t)),
              l = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                f = l = e;
                try {
                  if (((i = f.stateNode), n))
                    (u = i.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none");
                  else {
                    s = f.stateNode;
                    var j = f.memoizedProps.style,
                      v =
                        j != null && j.hasOwnProperty("display")
                          ? j.display
                          : null;
                    s.style.display =
                      v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (w) {
                  yt(f, f.return, w);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                f = e;
                try {
                  f.stateNode.nodeValue = n ? "" : f.memoizedProps;
                } catch (w) {
                  yt(f, f.return, w);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                f = e;
                try {
                  var p = f.stateNode;
                  n ? Zr(p, !0) : Zr(f.stateNode, !1);
                } catch (w) {
                  yt(f, f.return, w);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), (e = e.return);
            }
            l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling);
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), mi(t, l))));
        break;
      case 19:
        ae(e, t),
          ne(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), mi(t, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ae(e, t), ne(t);
    }
  }
  function ne(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, a = t.return; a !== null; ) {
          if (Ko(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(m(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = yc(t);
            di(t, i, n);
            break;
          case 5:
            var u = l.stateNode;
            l.flags & 32 && (kl(u, ""), (l.flags &= -33));
            var s = yc(t);
            di(t, s, u);
            break;
          case 3:
          case 4:
            var f = l.stateNode.containerInfo,
              g = yc(t);
            xc(t, g, f);
            break;
          default:
            throw Error(m(161));
        }
      } catch (S) {
        yt(t, t.return, S);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function er(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        er(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling);
      }
  }
  function Je(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) $o(t, e.alternate, e), (e = e.sibling);
  }
  function Gl(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ol(4, e, e.return), Gl(e);
          break;
        case 1:
          Ce(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && Zo(e, e.return, l),
            Gl(e);
          break;
        case 27:
          mn(e.stateNode);
        case 26:
        case 5:
          Ce(e, e.return), Gl(e);
          break;
        case 22:
          e.memoizedState === null && Gl(e);
          break;
        case 30:
          Gl(e);
          break;
        default:
          Gl(e);
      }
      t = t.sibling;
    }
  }
  function ke(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = t,
        i = e,
        u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ke(n, i, l), ln(4, i);
          break;
        case 1:
          if (
            (ke(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (g) {
              yt(a, a.return, g);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var s = a.stateNode;
            try {
              var f = n.shared.hiddenCallbacks;
              if (f !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < f.length; n++)
                  Of(f[n], s);
            } catch (g) {
              yt(a, a.return, g);
            }
          }
          l && u & 64 && Lo(i), an(i, i.return);
          break;
        case 27:
          Jo(i);
        case 26:
        case 5:
          ke(n, i, l), l && a === null && u & 4 && Vo(i), an(i, i.return);
          break;
        case 12:
          ke(n, i, l);
          break;
        case 31:
          ke(n, i, l), l && u & 4 && Io(n, i);
          break;
        case 13:
          ke(n, i, l), l && u & 4 && Po(n, i);
          break;
        case 22:
          i.memoizedState === null && ke(n, i, l), an(i, i.return);
          break;
        case 30:
          break;
        default:
          ke(n, i, l);
      }
      e = e.sibling;
    }
  }
  function Sc(t, e) {
    var l = null;
    t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && La(l));
  }
  function zc(t, e) {
    (t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && La(t));
  }
  function De(t, e, l, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) lr(t, e, l, a), (e = e.sibling);
  }
  function lr(t, e, l, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        De(t, e, l, a), n & 2048 && ln(9, e);
        break;
      case 1:
        De(t, e, l, a);
        break;
      case 3:
        De(t, e, l, a),
          n & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && La(t)));
        break;
      case 12:
        if (n & 2048) {
          De(t, e, l, a), (t = e.stateNode);
          try {
            var i = e.memoizedProps,
              u = i.id,
              s = i.onPostCommit;
            typeof s == "function" &&
              s(
                u,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0
              );
          } catch (f) {
            yt(e, e.return, f);
          }
        } else De(t, e, l, a);
        break;
      case 31:
        De(t, e, l, a);
        break;
      case 13:
        De(t, e, l, a);
        break;
      case 23:
        break;
      case 22:
        (i = e.stateNode),
          (u = e.alternate),
          e.memoizedState !== null
            ? i._visibility & 2
              ? De(t, e, l, a)
              : nn(t, e)
            : i._visibility & 2
            ? De(t, e, l, a)
            : ((i._visibility |= 2),
              ha(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Sc(u, e);
        break;
      case 24:
        De(t, e, l, a), n & 2048 && zc(e.alternate, e);
        break;
      default:
        De(t, e, l, a);
    }
  }
  function ha(t, e, l, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var i = t,
        u = e,
        s = l,
        f = a,
        g = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ha(i, u, s, f, n), ln(8, u);
          break;
        case 23:
          break;
        case 22:
          var S = u.stateNode;
          u.memoizedState !== null
            ? S._visibility & 2
              ? ha(i, u, s, f, n)
              : nn(i, u)
            : ((S._visibility |= 2), ha(i, u, s, f, n)),
            n && g & 2048 && Sc(u.alternate, u);
          break;
        case 24:
          ha(i, u, s, f, n), n && g & 2048 && zc(u.alternate, u);
          break;
        default:
          ha(i, u, s, f, n);
      }
      e = e.sibling;
    }
  }
  function nn(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            nn(l, a), n & 2048 && Sc(a.alternate, a);
            break;
          case 24:
            nn(l, a), n & 2048 && zc(a.alternate, a);
            break;
          default:
            nn(l, a);
        }
        e = e.sibling;
      }
  }
  var un = 8192;
  function ga(t, e, l) {
    if (t.subtreeFlags & un)
      for (t = t.child; t !== null; ) ar(t, e, l), (t = t.sibling);
  }
  function ar(t, e, l) {
    switch (t.tag) {
      case 26:
        ga(t, e, l),
          t.flags & un &&
            t.memoizedState !== null &&
            Gm(l, Ne, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        ga(t, e, l);
        break;
      case 3:
      case 4:
        var a = Ne;
        (Ne = Ei(t.stateNode.containerInfo)), ga(t, e, l), (Ne = a);
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = un), (un = 16777216), ga(t, e, l), (un = a))
            : ga(t, e, l));
        break;
      default:
        ga(t, e, l);
    }
  }
  function nr(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do (e = t.sibling), (t.sibling = null), (t = e);
      while (t !== null);
    }
  }
  function cn(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Vt = a), ur(a, t);
        }
      nr(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) ir(t), (t = t.sibling);
  }
  function ir(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        cn(t), t.flags & 2048 && ol(9, t, t.return);
        break;
      case 3:
        cn(t);
        break;
      case 12:
        cn(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), hi(t))
          : cn(t);
        break;
      default:
        cn(t);
    }
  }
  function hi(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l];
          (Vt = a), ur(a, t);
        }
      nr(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          ol(8, e, e.return), hi(e);
          break;
        case 22:
          (l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), hi(e));
          break;
        default:
          hi(e);
      }
      t = t.sibling;
    }
  }
  function ur(t, e) {
    for (; Vt !== null; ) {
      var l = Vt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ol(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          La(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Vt = a);
      else
        t: for (l = t; Vt !== null; ) {
          a = Vt;
          var n = a.sibling,
            i = a.return;
          if ((Wo(a), a === l)) {
            Vt = null;
            break t;
          }
          if (n !== null) {
            (n.return = i), (Vt = n);
            break t;
          }
          Vt = i;
        }
    }
  }
  var em = {
      getCacheForType: function (t) {
        var e = kt(Yt),
          l = e.data.get(t);
        return l === void 0 && ((l = t()), e.data.set(t, l)), l;
      },
      cacheSignal: function () {
        return kt(Yt).controller.signal;
      },
    },
    lm = typeof WeakMap == "function" ? WeakMap : Map,
    ht = 0,
    At = null,
    nt = null,
    ut = 0,
    pt = 0,
    he = null,
    rl = !1,
    va = !1,
    Ac = !1,
    $e = 0,
    Rt = 0,
    dl = 0,
    Ql = 0,
    _c = 0,
    ge = 0,
    pa = 0,
    sn = null,
    ie = null,
    jc = !1,
    gi = 0,
    cr = 0,
    vi = 1 / 0,
    pi = null,
    ml = null,
    Lt = 0,
    hl = null,
    ya = null,
    We = 0,
    Tc = 0,
    Ec = null,
    sr = null,
    fn = 0,
    Nc = null;
  function ve() {
    return (ht & 2) !== 0 && ut !== 0 ? ut & -ut : b.T !== null ? Uc() : zs();
  }
  function fr() {
    if (ge === 0)
      if ((ut & 536870912) === 0 || st) {
        var t = jn;
        (jn <<= 1), (jn & 3932160) === 0 && (jn = 262144), (ge = t);
      } else ge = 536870912;
    return (t = de.current), t !== null && (t.flags |= 32), ge;
  }
  function ue(t, e, l) {
    ((t === At && (pt === 2 || pt === 9)) || t.cancelPendingCommit !== null) &&
      (xa(t, 0), gl(t, ut, ge, !1)),
      Da(t, l),
      ((ht & 2) === 0 || t !== At) &&
        (t === At &&
          ((ht & 2) === 0 && (Ql |= l), Rt === 4 && gl(t, ut, ge, !1)),
        Re(t));
  }
  function or(t, e, l) {
    if ((ht & 6) !== 0) throw Error(m(327));
    var a = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || Na(t, e),
      n = a ? im(t, e) : Mc(t, e, !0),
      i = a;
    do {
      if (n === 0) {
        va && !a && gl(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), i && !am(l))) {
          (n = Mc(t, e, !1)), (i = !1);
          continue;
        }
        if (n === 2) {
          if (((i = e), t.errorRecoveryDisabledLanes & i)) var u = 0;
          else
            (u = t.pendingLanes & -536870913),
              (u = u !== 0 ? u : u & 536870912 ? 536870912 : 0);
          if (u !== 0) {
            e = u;
            t: {
              var s = t;
              n = sn;
              var f = s.current.memoizedState.isDehydrated;
              if ((f && (xa(s, u).flags |= 256), (u = Mc(s, u, !1)), u !== 2)) {
                if (Ac && !f) {
                  (s.errorRecoveryDisabledLanes |= i), (Ql |= i), (n = 4);
                  break t;
                }
                (i = ie),
                  (ie = n),
                  i !== null && (ie === null ? (ie = i) : ie.push.apply(ie, i));
              }
              n = u;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          xa(t, 0), gl(t, e, 0, !0);
          break;
        }
        t: {
          switch (((a = t), (i = n), i)) {
            case 0:
            case 1:
              throw Error(m(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              gl(a, e, ge, !rl);
              break t;
            case 2:
              ie = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(m(329));
          }
          if ((e & 62914560) === e && ((n = gi + 300 - ce()), 10 < n)) {
            if ((gl(a, e, ge, !rl), En(a, 0, !0) !== 0)) break t;
            (We = e),
              (a.timeoutHandle = Qr(
                rr.bind(
                  null,
                  a,
                  l,
                  ie,
                  pi,
                  jc,
                  e,
                  ge,
                  Ql,
                  pa,
                  rl,
                  i,
                  "Throttled",
                  -0,
                  0
                ),
                n
              ));
            break t;
          }
          rr(a, l, ie, pi, jc, e, ge, Ql, pa, rl, i, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Re(t);
  }
  function rr(t, e, l, a, n, i, u, s, f, g, S, j, v, p) {
    if (
      ((t.timeoutHandle = -1),
      (j = e.subtreeFlags),
      j & 8192 || (j & 16785408) === 16785408)
    ) {
      (j = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Be,
      }),
        ar(e, i, j);
      var w =
        (i & 62914560) === i ? gi - ce() : (i & 4194048) === i ? cr - ce() : 0;
      if (((w = Qm(j, w)), w !== null)) {
        (We = i),
          (t.cancelPendingCommit = w(
            xr.bind(null, t, e, i, l, a, n, u, s, f, S, j, null, v, p)
          )),
          gl(t, i, u, !g);
        return;
      }
    }
    xr(t, e, i, l, a, n, u, s, f);
  }
  function am(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!oe(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        (l.return = e), (e = l);
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    }
    return !0;
  }
  function gl(t, e, l, a) {
    (e &= ~_c),
      (e &= ~Ql),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes);
    for (var n = e; 0 < n; ) {
      var i = 31 - fe(n),
        u = 1 << i;
      (a[i] = -1), (n &= ~u);
    }
    l !== 0 && xs(t, l, e);
  }
  function yi() {
    return (ht & 6) === 0 ? (on(0), !1) : !0;
  }
  function Dc() {
    if (nt !== null) {
      if (pt === 0) var t = nt.return;
      else (t = nt), (Ye = Cl = null), Vu(t), (fa = null), (Va = 0), (t = nt);
      for (; t !== null; ) Xo(t.alternate, t), (t = t.return);
      nt = null;
    }
  }
  function xa(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && ((t.timeoutHandle = -1), Am(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (We = 0),
      Dc(),
      (At = t),
      (nt = l = He(t.current, null)),
      (ut = e),
      (pt = 0),
      (he = null),
      (rl = !1),
      (va = Na(t, e)),
      (Ac = !1),
      (pa = ge = _c = Ql = dl = Rt = 0),
      (ie = sn = null),
      (jc = !1),
      (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - fe(a),
          i = 1 << n;
        (e |= t[n]), (a &= ~i);
      }
    return ($e = e), Yn(), l;
  }
  function dr(t, e) {
    (P = null),
      (b.H = Pa),
      e === sa || e === Jn
        ? ((e = Ef()), (pt = 3))
        : e === Ru
        ? ((e = Ef()), (pt = 4))
        : (pt =
            e === cc
              ? 8
              : e !== null &&
                typeof e == "object" &&
                typeof e.then == "function"
              ? 6
              : 1),
      (he = e),
      nt === null && ((Rt = 1), ci(t, be(e, t.current)));
  }
  function mr() {
    var t = de.current;
    return t === null
      ? !0
      : (ut & 4194048) === ut
      ? _e === null
      : (ut & 62914560) === ut || (ut & 536870912) !== 0
      ? t === _e
      : !1;
  }
  function hr() {
    var t = b.H;
    return (b.H = Pa), t === null ? Pa : t;
  }
  function gr() {
    var t = b.A;
    return (b.A = em), t;
  }
  function xi() {
    (Rt = 4),
      rl || ((ut & 4194048) !== ut && de.current !== null) || (va = !0),
      ((dl & 134217727) === 0 && (Ql & 134217727) === 0) ||
        At === null ||
        gl(At, ut, ge, !1);
  }
  function Mc(t, e, l) {
    var a = ht;
    ht |= 2;
    var n = hr(),
      i = gr();
    (At !== t || ut !== e) && ((pi = null), xa(t, e)), (e = !1);
    var u = Rt;
    t: do
      try {
        if (pt !== 0 && nt !== null) {
          var s = nt,
            f = he;
          switch (pt) {
            case 8:
              Dc(), (u = 6);
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              de.current === null && (e = !0);
              var g = pt;
              if (((pt = 0), (he = null), ba(t, s, f, g), l && va)) {
                u = 0;
                break t;
              }
              break;
            default:
              (g = pt), (pt = 0), (he = null), ba(t, s, f, g);
          }
        }
        nm(), (u = Rt);
        break;
      } catch (S) {
        dr(t, S);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (Ye = Cl = null),
      (ht = a),
      (b.H = n),
      (b.A = i),
      nt === null && ((At = null), (ut = 0), Yn()),
      u
    );
  }
  function nm() {
    for (; nt !== null; ) vr(nt);
  }
  function im(t, e) {
    var l = ht;
    ht |= 2;
    var a = hr(),
      n = gr();
    At !== t || ut !== e
      ? ((pi = null), (vi = ce() + 500), xa(t, e))
      : (va = Na(t, e));
    t: do
      try {
        if (pt !== 0 && nt !== null) {
          e = nt;
          var i = he;
          e: switch (pt) {
            case 1:
              (pt = 0), (he = null), ba(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (jf(i)) {
                (pt = 0), (he = null), pr(e);
                break;
              }
              (e = function () {
                (pt !== 2 && pt !== 9) || At !== t || (pt = 7), Re(t);
              }),
                i.then(e, e);
              break t;
            case 3:
              pt = 7;
              break t;
            case 4:
              pt = 5;
              break t;
            case 7:
              jf(i)
                ? ((pt = 0), (he = null), pr(e))
                : ((pt = 0), (he = null), ba(t, e, i, 7));
              break;
            case 5:
              var u = null;
              switch (nt.tag) {
                case 26:
                  u = nt.memoizedState;
                case 5:
                case 27:
                  var s = nt;
                  if (u ? ld(u) : s.stateNode.complete) {
                    (pt = 0), (he = null);
                    var f = s.sibling;
                    if (f !== null) nt = f;
                    else {
                      var g = s.return;
                      g !== null ? ((nt = g), bi(g)) : (nt = null);
                    }
                    break e;
                  }
              }
              (pt = 0), (he = null), ba(t, e, i, 5);
              break;
            case 6:
              (pt = 0), (he = null), ba(t, e, i, 6);
              break;
            case 8:
              Dc(), (Rt = 6);
              break t;
            default:
              throw Error(m(462));
          }
        }
        um();
        break;
      } catch (S) {
        dr(t, S);
      }
    while (!0);
    return (
      (Ye = Cl = null),
      (b.H = a),
      (b.A = n),
      (ht = l),
      nt !== null ? 0 : ((At = null), (ut = 0), Yn(), Rt)
    );
  }
  function um() {
    for (; nt !== null && !Dd(); ) vr(nt);
  }
  function vr(t) {
    var e = Go(t.alternate, t, $e);
    (t.memoizedProps = t.pendingProps), e === null ? bi(t) : (nt = e);
  }
  function pr(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Uo(l, e, e.pendingProps, e.type, void 0, ut);
        break;
      case 11:
        e = Uo(l, e, e.pendingProps, e.type.render, e.ref, ut);
        break;
      case 5:
        Vu(e);
      default:
        Xo(l, e), (e = nt = hf(e, $e)), (e = Go(l, e, $e));
    }
    (t.memoizedProps = t.pendingProps), e === null ? bi(t) : (nt = e);
  }
  function ba(t, e, l, a) {
    (Ye = Cl = null), Vu(e), (fa = null), (Va = 0);
    var n = e.return;
    try {
      if (k0(t, n, e, l, ut)) {
        (Rt = 1), ci(t, be(l, t.current)), (nt = null);
        return;
      }
    } catch (i) {
      if (n !== null) throw ((nt = n), i);
      (Rt = 1), ci(t, be(l, t.current)), (nt = null);
      return;
    }
    e.flags & 32768
      ? (st || a === 1
          ? (t = !0)
          : va || (ut & 536870912) !== 0
          ? (t = !1)
          : ((rl = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = de.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        yr(e, t))
      : bi(e);
  }
  function bi(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        yr(e, rl);
        return;
      }
      t = e.return;
      var l = F0(e.alternate, e, $e);
      if (l !== null) {
        nt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        nt = e;
        return;
      }
      nt = e = t;
    } while (e !== null);
    Rt === 0 && (Rt = 5);
  }
  function yr(t, e) {
    do {
      var l = I0(t.alternate, t);
      if (l !== null) {
        (l.flags &= 32767), (nt = l);
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        nt = t;
        return;
      }
      nt = t = l;
    } while (t !== null);
    (Rt = 6), (nt = null);
  }
  function xr(t, e, l, a, n, i, u, s, f) {
    t.cancelPendingCommit = null;
    do Si();
    while (Lt !== 0);
    if ((ht & 6) !== 0) throw Error(m(327));
    if (e !== null) {
      if (e === t.current) throw Error(m(177));
      if (
        ((i = e.lanes | e.childLanes),
        (i |= yu),
        Yd(t, l, i, u, s, f),
        t === At && ((nt = At = null), (ut = 0)),
        (ya = e),
        (hl = t),
        (We = l),
        (Tc = i),
        (Ec = n),
        (sr = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            om(An, function () {
              return _r(), null;
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = b.T), (b.T = null), (n = x.p), (x.p = 2), (u = ht), (ht |= 4);
        try {
          P0(t, e, l);
        } finally {
          (ht = u), (x.p = n), (b.T = a);
        }
      }
      (Lt = 1), br(), Sr(), zr();
    }
  }
  function br() {
    if (Lt === 1) {
      Lt = 0;
      var t = hl,
        e = ya,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        (l = b.T), (b.T = null);
        var a = x.p;
        x.p = 2;
        var n = ht;
        ht |= 4;
        try {
          tr(e, t);
          var i = Xc,
            u = nf(t.containerInfo),
            s = i.focusedElem,
            f = i.selectionRange;
          if (
            u !== s &&
            s &&
            s.ownerDocument &&
            af(s.ownerDocument.documentElement, s)
          ) {
            if (f !== null && mu(s)) {
              var g = f.start,
                S = f.end;
              if ((S === void 0 && (S = g), "selectionStart" in s))
                (s.selectionStart = g),
                  (s.selectionEnd = Math.min(S, s.value.length));
              else {
                var j = s.ownerDocument || document,
                  v = (j && j.defaultView) || window;
                if (v.getSelection) {
                  var p = v.getSelection(),
                    w = s.textContent.length,
                    J = Math.min(f.start, w),
                    St = f.end === void 0 ? J : Math.min(f.end, w);
                  !p.extend && J > St && ((u = St), (St = J), (J = u));
                  var d = lf(s, J),
                    r = lf(s, St);
                  if (
                    d &&
                    r &&
                    (p.rangeCount !== 1 ||
                      p.anchorNode !== d.node ||
                      p.anchorOffset !== d.offset ||
                      p.focusNode !== r.node ||
                      p.focusOffset !== r.offset)
                  ) {
                    var h = j.createRange();
                    h.setStart(d.node, d.offset),
                      p.removeAllRanges(),
                      J > St
                        ? (p.addRange(h), p.extend(r.node, r.offset))
                        : (h.setEnd(r.node, r.offset), p.addRange(h));
                  }
                }
              }
            }
            for (j = [], p = s; (p = p.parentNode); )
              p.nodeType === 1 &&
                j.push({ element: p, left: p.scrollLeft, top: p.scrollTop });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < j.length;
              s++
            ) {
              var A = j[s];
              (A.element.scrollLeft = A.left), (A.element.scrollTop = A.top);
            }
          }
          (Ri = !!Qc), (Xc = Qc = null);
        } finally {
          (ht = n), (x.p = a), (b.T = l);
        }
      }
      (t.current = e), (Lt = 2);
    }
  }
  function Sr() {
    if (Lt === 2) {
      Lt = 0;
      var t = hl,
        e = ya,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        (l = b.T), (b.T = null);
        var a = x.p;
        x.p = 2;
        var n = ht;
        ht |= 4;
        try {
          $o(t, e.alternate, e);
        } finally {
          (ht = n), (x.p = a), (b.T = l);
        }
      }
      Lt = 3;
    }
  }
  function zr() {
    if (Lt === 4 || Lt === 3) {
      (Lt = 0), Md();
      var t = hl,
        e = ya,
        l = We,
        a = sr;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Lt = 5)
        : ((Lt = 0), (ya = hl = null), Ar(t, t.pendingLanes));
      var n = t.pendingLanes;
      if (
        (n === 0 && (ml = null),
        ki(l),
        (e = e.stateNode),
        se && typeof se.onCommitFiberRoot == "function")
      )
        try {
          se.onCommitFiberRoot(Ea, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (e = b.T), (n = x.p), (x.p = 2), (b.T = null);
        try {
          for (var i = t.onRecoverableError, u = 0; u < a.length; u++) {
            var s = a[u];
            i(s.value, { componentStack: s.stack });
          }
        } finally {
          (b.T = e), (x.p = n);
        }
      }
      (We & 3) !== 0 && Si(),
        Re(t),
        (n = t.pendingLanes),
        (l & 261930) !== 0 && (n & 42) !== 0
          ? t === Nc
            ? fn++
            : ((fn = 0), (Nc = t))
          : (fn = 0),
        on(0);
    }
  }
  function Ar(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), La(e)));
  }
  function Si() {
    return br(), Sr(), zr(), _r();
  }
  function _r() {
    if (Lt !== 5) return !1;
    var t = hl,
      e = Tc;
    Tc = 0;
    var l = ki(We),
      a = b.T,
      n = x.p;
    try {
      (x.p = 32 > l ? 32 : l), (b.T = null), (l = Ec), (Ec = null);
      var i = hl,
        u = We;
      if (((Lt = 0), (ya = hl = null), (We = 0), (ht & 6) !== 0))
        throw Error(m(331));
      var s = ht;
      if (
        ((ht |= 4),
        ir(i.current),
        lr(i, i.current, u, l),
        (ht = s),
        on(0, !1),
        se && typeof se.onPostCommitFiberRoot == "function")
      )
        try {
          se.onPostCommitFiberRoot(Ea, i);
        } catch {}
      return !0;
    } finally {
      (x.p = n), (b.T = a), Ar(t, e);
    }
  }
  function jr(t, e, l) {
    (e = be(l, e)),
      (e = uc(t.stateNode, e, 2)),
      (t = cl(t, e, 2)),
      t !== null && (Da(t, 2), Re(t));
  }
  function yt(t, e, l) {
    if (t.tag === 3) jr(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          jr(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ml === null || !ml.has(a)))
          ) {
            (t = be(l, t)),
              (l = To(2)),
              (a = cl(e, l, 2)),
              a !== null && (Eo(l, a, e, t), Da(a, 2), Re(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Oc(t, e, l) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new lm();
      var n = new Set();
      a.set(e, n);
    } else (n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n));
    n.has(l) ||
      ((Ac = !0), n.add(l), (t = cm.bind(null, t, e, l)), e.then(t, t));
  }
  function cm(t, e, l) {
    var a = t.pingCache;
    a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      At === t &&
        (ut & l) === l &&
        (Rt === 4 || (Rt === 3 && (ut & 62914560) === ut && 300 > ce() - gi)
          ? (ht & 2) === 0 && xa(t, 0)
          : (_c |= l),
        pa === ut && (pa = 0)),
      Re(t);
  }
  function Tr(t, e) {
    e === 0 && (e = ys()), (t = Dl(t, e)), t !== null && (Da(t, e), Re(t));
  }
  function sm(t) {
    var e = t.memoizedState,
      l = 0;
    e !== null && (l = e.retryLane), Tr(t, l);
  }
  function fm(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          n = t.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(m(314));
    }
    a !== null && a.delete(e), Tr(t, l);
  }
  function om(t, e) {
    return Zi(t, e);
  }
  var zi = null,
    Sa = null,
    Cc = !1,
    Ai = !1,
    Rc = !1,
    vl = 0;
  function Re(t) {
    t !== Sa &&
      t.next === null &&
      (Sa === null ? (zi = Sa = t) : (Sa = Sa.next = t)),
      (Ai = !0),
      Cc || ((Cc = !0), dm());
  }
  function on(t, e) {
    if (!Rc && Ai) {
      Rc = !0;
      do
        for (var l = !1, a = zi; a !== null; ) {
          if (t !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = a.suspendedLanes,
                s = a.pingedLanes;
              (i = (1 << (31 - fe(42 | t) + 1)) - 1),
                (i &= n & ~(u & ~s)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((l = !0), Mr(a, i));
          } else
            (i = ut),
              (i = En(
                a,
                a === At ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || Na(a, i) || ((l = !0), Mr(a, i));
          a = a.next;
        }
      while (l);
      Rc = !1;
    }
  }
  function rm() {
    Er();
  }
  function Er() {
    Ai = Cc = !1;
    var t = 0;
    vl !== 0 && zm() && (t = vl);
    for (var e = ce(), l = null, a = zi; a !== null; ) {
      var n = a.next,
        i = Nr(a, e);
      i === 0
        ? ((a.next = null),
          l === null ? (zi = n) : (l.next = n),
          n === null && (Sa = l))
        : ((l = a), (t !== 0 || (i & 3) !== 0) && (Ai = !0)),
        (a = n);
    }
    (Lt !== 0 && Lt !== 5) || on(t), vl !== 0 && (vl = 0);
  }
  function Nr(t, e) {
    for (
      var l = t.suspendedLanes,
        a = t.pingedLanes,
        n = t.expirationTimes,
        i = t.pendingLanes & -62914561;
      0 < i;

    ) {
      var u = 31 - fe(i),
        s = 1 << u,
        f = n[u];
      f === -1
        ? ((s & l) === 0 || (s & a) !== 0) && (n[u] = qd(s, e))
        : f <= e && (t.expiredLanes |= s),
        (i &= ~s);
    }
    if (
      ((e = At),
      (l = ut),
      (l = En(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (a = t.callbackNode),
      l === 0 ||
        (t === e && (pt === 2 || pt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Vi(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Na(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((a !== null && Vi(a), ki(l))) {
        case 2:
        case 8:
          l = vs;
          break;
        case 32:
          l = An;
          break;
        case 268435456:
          l = ps;
          break;
        default:
          l = An;
      }
      return (
        (a = Dr.bind(null, t)),
        (l = Zi(l, a)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      a !== null && a !== null && Vi(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Dr(t, e) {
    if (Lt !== 0 && Lt !== 5)
      return (t.callbackNode = null), (t.callbackPriority = 0), null;
    var l = t.callbackNode;
    if (Si() && t.callbackNode !== l) return null;
    var a = ut;
    return (
      (a = En(
        t,
        t === At ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (or(t, a, e),
          Nr(t, ce()),
          t.callbackNode != null && t.callbackNode === l
            ? Dr.bind(null, t)
            : null)
    );
  }
  function Mr(t, e) {
    if (Si()) return null;
    or(t, e, !0);
  }
  function dm() {
    _m(function () {
      (ht & 6) !== 0 ? Zi(gs, rm) : Er();
    });
  }
  function Uc() {
    if (vl === 0) {
      var t = ua;
      t === 0 && ((t = _n), (_n <<= 1), (_n & 261888) === 0 && (_n = 256)),
        (vl = t);
    }
    return vl;
  }
  function Or(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
      ? t
      : On("" + t);
  }
  function Cr(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function mm(t, e, l, a, n) {
    if (e === "submit" && l && l.stateNode === n) {
      var i = Or((n[te] || null).action),
        u = a.submitter;
      u &&
        ((e = (e = u[te] || null)
          ? Or(e.formAction)
          : u.getAttribute("formAction")),
        e !== null && ((i = e), (u = null)));
      var s = new Bn("action", "action", null, a, n);
      t.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (vl !== 0) {
                  var f = u ? Cr(n, u) : new FormData(n);
                  tc(
                    l,
                    { pending: !0, data: f, method: n.method, action: i },
                    null,
                    f
                  );
                }
              } else
                typeof i == "function" &&
                  (s.preventDefault(),
                  (f = u ? Cr(n, u) : new FormData(n)),
                  tc(
                    l,
                    { pending: !0, data: f, method: n.method, action: i },
                    i,
                    f
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Bc = 0; Bc < pu.length; Bc++) {
    var wc = pu[Bc],
      hm = wc.toLowerCase(),
      gm = wc[0].toUpperCase() + wc.slice(1);
    Ee(hm, "on" + gm);
  }
  Ee(sf, "onAnimationEnd"),
    Ee(ff, "onAnimationIteration"),
    Ee(of, "onAnimationStart"),
    Ee("dblclick", "onDoubleClick"),
    Ee("focusin", "onFocus"),
    Ee("focusout", "onBlur"),
    Ee(O0, "onTransitionRun"),
    Ee(C0, "onTransitionStart"),
    Ee(R0, "onTransitionCancel"),
    Ee(rf, "onTransitionEnd"),
    Kl("onMouseEnter", ["mouseout", "mouseover"]),
    Kl("onMouseLeave", ["mouseout", "mouseover"]),
    Kl("onPointerEnter", ["pointerout", "pointerover"]),
    Kl("onPointerLeave", ["pointerout", "pointerover"]),
    jl(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    jl(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    jl("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    jl(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    jl(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    jl(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var rn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    vm = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(rn)
    );
  function Rr(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        n = a.event;
      a = a.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var u = a.length - 1; 0 <= u; u--) {
            var s = a[u],
              f = s.instance,
              g = s.currentTarget;
            if (((s = s.listener), f !== i && n.isPropagationStopped()))
              break t;
            (i = s), (n.currentTarget = g);
            try {
              i(n);
            } catch (S) {
              qn(S);
            }
            (n.currentTarget = null), (i = f);
          }
        else
          for (u = 0; u < a.length; u++) {
            if (
              ((s = a[u]),
              (f = s.instance),
              (g = s.currentTarget),
              (s = s.listener),
              f !== i && n.isPropagationStopped())
            )
              break t;
            (i = s), (n.currentTarget = g);
            try {
              i(n);
            } catch (S) {
              qn(S);
            }
            (n.currentTarget = null), (i = f);
          }
      }
    }
  }
  function it(t, e) {
    var l = e[$i];
    l === void 0 && (l = e[$i] = new Set());
    var a = t + "__bubble";
    l.has(a) || (Ur(e, t, 2, !1), l.add(a));
  }
  function Hc(t, e, l) {
    var a = 0;
    e && (a |= 4), Ur(l, t, a, e);
  }
  var _i = "_reactListening" + Math.random().toString(36).slice(2);
  function qc(t) {
    if (!t[_i]) {
      (t[_i] = !0),
        js.forEach(function (l) {
          l !== "selectionchange" && (vm.has(l) || Hc(l, !1, t), Hc(l, !0, t));
        });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[_i] || ((e[_i] = !0), Hc("selectionchange", !1, e));
    }
  }
  function Ur(t, e, l, a) {
    switch (fd(e)) {
      case 2:
        var n = Zm;
        break;
      case 8:
        n = Vm;
        break;
      default:
        n = Pc;
    }
    (l = n.bind(null, e, l, t)),
      (n = void 0),
      !nu ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: n })
          : t.addEventListener(e, l, !0)
        : n !== void 0
        ? t.addEventListener(e, l, { passive: n })
        : t.addEventListener(e, l, !1);
  }
  function Yc(t, e, l, a, n) {
    var i = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var f = u.tag;
              if ((f === 3 || f === 4) && u.stateNode.containerInfo === n)
                return;
              u = u.return;
            }
          for (; s !== null; ) {
            if (((u = Ll(s)), u === null)) return;
            if (((f = u.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              a = i = u;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
    Hs(function () {
      var g = i,
        S = lu(l),
        j = [];
      t: {
        var v = df.get(t);
        if (v !== void 0) {
          var p = Bn,
            w = t;
          switch (t) {
            case "keypress":
              if (Rn(l) === 0) break t;
            case "keydown":
            case "keyup":
              p = f0;
              break;
            case "focusin":
              (w = "focus"), (p = su);
              break;
            case "focusout":
              (w = "blur"), (p = su);
              break;
            case "beforeblur":
            case "afterblur":
              p = su;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              p = Gs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              p = Fd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              p = d0;
              break;
            case sf:
            case ff:
            case of:
              p = t0;
              break;
            case rf:
              p = h0;
              break;
            case "scroll":
            case "scrollend":
              p = $d;
              break;
            case "wheel":
              p = v0;
              break;
            case "copy":
            case "cut":
            case "paste":
              p = l0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              p = Xs;
              break;
            case "toggle":
            case "beforetoggle":
              p = y0;
          }
          var J = (e & 4) !== 0,
            St = !J && (t === "scroll" || t === "scrollend"),
            d = J ? (v !== null ? v + "Capture" : null) : v;
          J = [];
          for (var r = g, h; r !== null; ) {
            var A = r;
            if (
              ((h = A.stateNode),
              (A = A.tag),
              (A !== 5 && A !== 26 && A !== 27) ||
                h === null ||
                d === null ||
                ((A = Ca(r, d)), A != null && J.push(dn(r, A, h))),
              St)
            )
              break;
            r = r.return;
          }
          0 < J.length &&
            ((v = new p(v, w, null, l, S)), j.push({ event: v, listeners: J }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((v = t === "mouseover" || t === "pointerover"),
            (p = t === "mouseout" || t === "pointerout"),
            v &&
              l !== eu &&
              (w = l.relatedTarget || l.fromElement) &&
              (Ll(w) || w[Xl]))
          )
            break t;
          if (
            (p || v) &&
            ((v =
              S.window === S
                ? S
                : (v = S.ownerDocument)
                ? v.defaultView || v.parentWindow
                : window),
            p
              ? ((w = l.relatedTarget || l.toElement),
                (p = g),
                (w = w ? Ll(w) : null),
                w !== null &&
                  ((St = G(w)),
                  (J = w.tag),
                  w !== St || (J !== 5 && J !== 27 && J !== 6)) &&
                  (w = null))
              : ((p = null), (w = g)),
            p !== w)
          ) {
            if (
              ((J = Gs),
              (A = "onMouseLeave"),
              (d = "onMouseEnter"),
              (r = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((J = Xs),
                (A = "onPointerLeave"),
                (d = "onPointerEnter"),
                (r = "pointer")),
              (St = p == null ? v : Oa(p)),
              (h = w == null ? v : Oa(w)),
              (v = new J(A, r + "leave", p, l, S)),
              (v.target = St),
              (v.relatedTarget = h),
              (A = null),
              Ll(S) === g &&
                ((J = new J(d, r + "enter", w, l, S)),
                (J.target = h),
                (J.relatedTarget = St),
                (A = J)),
              (St = A),
              p && w)
            )
              e: {
                for (J = pm, d = p, r = w, h = 0, A = d; A; A = J(A)) h++;
                A = 0;
                for (var X = r; X; X = J(X)) A++;
                for (; 0 < h - A; ) (d = J(d)), h--;
                for (; 0 < A - h; ) (r = J(r)), A--;
                for (; h--; ) {
                  if (d === r || (r !== null && d === r.alternate)) {
                    J = d;
                    break e;
                  }
                  (d = J(d)), (r = J(r));
                }
                J = null;
              }
            else J = null;
            p !== null && Br(j, v, p, J, !1),
              w !== null && St !== null && Br(j, St, w, J, !0);
          }
        }
        t: {
          if (
            ((v = g ? Oa(g) : window),
            (p = v.nodeName && v.nodeName.toLowerCase()),
            p === "select" || (p === "input" && v.type === "file"))
          )
            var rt = Ws;
          else if (ks(v))
            if (Fs) rt = N0;
            else {
              rt = T0;
              var H = j0;
            }
          else
            (p = v.nodeName),
              !p ||
              p.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? g && tu(g.elementType) && (rt = Ws)
                : (rt = E0);
          if (rt && (rt = rt(t, g))) {
            $s(j, rt, l, S);
            break t;
          }
          H && H(t, v, g),
            t === "focusout" &&
              g &&
              v.type === "number" &&
              g.memoizedProps.value != null &&
              Pi(v, "number", v.value);
        }
        switch (((H = g ? Oa(g) : window), t)) {
          case "focusin":
            (ks(H) || H.contentEditable === "true") &&
              ((Il = H), (hu = g), (Ga = null));
            break;
          case "focusout":
            Ga = hu = Il = null;
            break;
          case "mousedown":
            gu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (gu = !1), uf(j, l, S);
            break;
          case "selectionchange":
            if (M0) break;
          case "keydown":
          case "keyup":
            uf(j, l, S);
        }
        var tt;
        if (ou)
          t: {
            switch (t) {
              case "compositionstart":
                var ct = "onCompositionStart";
                break t;
              case "compositionend":
                ct = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break t;
            }
            ct = void 0;
          }
        else
          Fl
            ? Ks(t, l) && (ct = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (ct = "onCompositionStart");
        ct &&
          (Ls &&
            l.locale !== "ko" &&
            (Fl || ct !== "onCompositionStart"
              ? ct === "onCompositionEnd" && Fl && (tt = qs())
              : ((tl = S),
                (iu = "value" in tl ? tl.value : tl.textContent),
                (Fl = !0))),
          (H = ji(g, ct)),
          0 < H.length &&
            ((ct = new Qs(ct, t, null, l, S)),
            j.push({ event: ct, listeners: H }),
            tt
              ? (ct.data = tt)
              : ((tt = Js(l)), tt !== null && (ct.data = tt)))),
          (tt = b0 ? S0(t, l) : z0(t, l)) &&
            ((ct = ji(g, "onBeforeInput")),
            0 < ct.length &&
              ((H = new Qs("onBeforeInput", "beforeinput", null, l, S)),
              j.push({ event: H, listeners: ct }),
              (H.data = tt))),
          mm(j, t, g, l, S);
      }
      Rr(j, e);
    });
  }
  function dn(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function ji(t, e) {
    for (var l = e + "Capture", a = []; t !== null; ) {
      var n = t,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = Ca(t, l)),
          n != null && a.unshift(dn(t, n, i)),
          (n = Ca(t, e)),
          n != null && a.push(dn(t, n, i))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function pm(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Br(t, e, l, a, n) {
    for (var i = e._reactName, u = []; l !== null && l !== a; ) {
      var s = l,
        f = s.alternate,
        g = s.stateNode;
      if (((s = s.tag), f !== null && f === a)) break;
      (s !== 5 && s !== 26 && s !== 27) ||
        g === null ||
        ((f = g),
        n
          ? ((g = Ca(l, i)), g != null && u.unshift(dn(l, g, f)))
          : n || ((g = Ca(l, i)), g != null && u.push(dn(l, g, f)))),
        (l = l.return);
    }
    u.length !== 0 && t.push({ event: e, listeners: u });
  }
  var ym = /\r\n?/g,
    xm = /\u0000|\uFFFD/g;
  function wr(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        ym,
        `
`
      )
      .replace(xm, "");
  }
  function Hr(t, e) {
    return (e = wr(e)), wr(t) === e;
  }
  function bt(t, e, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || kl(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            kl(t, "" + a);
        break;
      case "className":
        Dn(t, "class", a);
        break;
      case "tabIndex":
        Dn(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Dn(t, l, a);
        break;
      case "style":
        Bs(t, a, i);
        break;
      case "data":
        if (e !== "object") {
          Dn(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        (a = On("" + a)), t.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (e !== "input" && bt(t, e, "name", n.name, n, null),
                bt(t, e, "formEncType", n.formEncType, n, null),
                bt(t, e, "formMethod", n.formMethod, n, null),
                bt(t, e, "formTarget", n.formTarget, n, null))
              : (bt(t, e, "encType", n.encType, n, null),
                bt(t, e, "method", n.method, n, null),
                bt(t, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(l);
          break;
        }
        (a = On("" + a)), t.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (t.onclick = Be);
        break;
      case "onScroll":
        a != null && it("scroll", t);
        break;
      case "onScrollEnd":
        a != null && it("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(m(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        (l = On("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "" + a)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(l, a)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(l)
          : t.setAttribute(l, a);
        break;
      case "popover":
        it("beforetoggle", t), it("toggle", t), Nn(t, "popover", a);
        break;
      case "xlinkActuate":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ue(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ue(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ue(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ue(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Nn(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Jd.get(l) || l), Nn(t, l, a));
    }
  }
  function Gc(t, e, l, a, n, i) {
    switch (l) {
      case "style":
        Bs(t, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(m(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(m(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? kl(t, a)
          : (typeof a == "number" || typeof a == "bigint") && kl(t, "" + a);
        break;
      case "onScroll":
        a != null && it("scroll", t);
        break;
      case "onScrollEnd":
        a != null && it("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Be);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Ts.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (e = l.slice(2, n ? l.length - 7 : void 0)),
              (i = t[te] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && t.removeEventListener(e, i, n),
              typeof a == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, a, n);
              break t;
            }
            l in t
              ? (t[l] = a)
              : a === !0
              ? t.setAttribute(l, "")
              : Nn(t, l, a);
          }
    }
  }
  function Wt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        it("error", t), it("load", t);
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var u = l[i];
            if (u != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(m(137, e));
                default:
                  bt(t, e, i, u, l, null);
              }
          }
        n && bt(t, e, "srcSet", l.srcSet, l, null),
          a && bt(t, e, "src", l.src, l, null);
        return;
      case "input":
        it("invalid", t);
        var s = (i = u = n = null),
          f = null,
          g = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var S = l[a];
            if (S != null)
              switch (a) {
                case "name":
                  n = S;
                  break;
                case "type":
                  u = S;
                  break;
                case "checked":
                  f = S;
                  break;
                case "defaultChecked":
                  g = S;
                  break;
                case "value":
                  i = S;
                  break;
                case "defaultValue":
                  s = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(m(137, e));
                  break;
                default:
                  bt(t, e, a, S, l, null);
              }
          }
        Os(t, i, s, f, g, u, n, !1);
        return;
      case "select":
        it("invalid", t), (a = u = i = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((s = l[n]), s != null))
            switch (n) {
              case "value":
                i = s;
                break;
              case "defaultValue":
                u = s;
                break;
              case "multiple":
                a = s;
              default:
                bt(t, e, n, s, l, null);
            }
        (e = i),
          (l = u),
          (t.multiple = !!a),
          e != null ? Jl(t, !!a, e, !1) : l != null && Jl(t, !!a, l, !0);
        return;
      case "textarea":
        it("invalid", t), (i = n = a = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((s = l[u]), s != null))
            switch (u) {
              case "value":
                a = s;
                break;
              case "defaultValue":
                n = s;
                break;
              case "children":
                i = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(m(91));
                break;
              default:
                bt(t, e, u, s, l, null);
            }
        Rs(t, a, n, i);
        return;
      case "option":
        for (f in l)
          if (l.hasOwnProperty(f) && ((a = l[f]), a != null))
            switch (f) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                bt(t, e, f, a, l, null);
            }
        return;
      case "dialog":
        it("beforetoggle", t), it("toggle", t), it("cancel", t), it("close", t);
        break;
      case "iframe":
      case "object":
        it("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < rn.length; a++) it(rn[a], t);
        break;
      case "image":
        it("error", t), it("load", t);
        break;
      case "details":
        it("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        it("error", t), it("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (g in l)
          if (l.hasOwnProperty(g) && ((a = l[g]), a != null))
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(m(137, e));
              default:
                bt(t, e, g, a, l, null);
            }
        return;
      default:
        if (tu(e)) {
          for (S in l)
            l.hasOwnProperty(S) &&
              ((a = l[S]), a !== void 0 && Gc(t, e, S, a, l, void 0));
          return;
        }
    }
    for (s in l)
      l.hasOwnProperty(s) && ((a = l[s]), a != null && bt(t, e, s, a, l, null));
  }
  function bm(t, e, l, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          u = null,
          s = null,
          f = null,
          g = null,
          S = null;
        for (p in l) {
          var j = l[p];
          if (l.hasOwnProperty(p) && j != null)
            switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = j;
              default:
                a.hasOwnProperty(p) || bt(t, e, p, null, a, j);
            }
        }
        for (var v in a) {
          var p = a[v];
          if (((j = l[v]), a.hasOwnProperty(v) && (p != null || j != null)))
            switch (v) {
              case "type":
                i = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                g = p;
                break;
              case "defaultChecked":
                S = p;
                break;
              case "value":
                u = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(m(137, e));
                break;
              default:
                p !== j && bt(t, e, v, p, a, j);
            }
        }
        Ii(t, u, s, f, g, S, i, n);
        return;
      case "select":
        p = u = s = v = null;
        for (i in l)
          if (((f = l[i]), l.hasOwnProperty(i) && f != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                p = f;
              default:
                a.hasOwnProperty(i) || bt(t, e, i, null, a, f);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (f = l[n]),
            a.hasOwnProperty(n) && (i != null || f != null))
          )
            switch (n) {
              case "value":
                v = i;
                break;
              case "defaultValue":
                s = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== f && bt(t, e, n, i, a, f);
            }
        (e = s),
          (l = u),
          (a = p),
          v != null
            ? Jl(t, !!l, v, !1)
            : !!a != !!l &&
              (e != null ? Jl(t, !!l, e, !0) : Jl(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        p = v = null;
        for (s in l)
          if (
            ((n = l[s]),
            l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                bt(t, e, s, null, a, n);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (i = l[u]),
            a.hasOwnProperty(u) && (n != null || i != null))
          )
            switch (u) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                p = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(m(91));
                break;
              default:
                n !== i && bt(t, e, u, n, a, i);
            }
        Cs(t, v, p);
        return;
      case "option":
        for (var w in l)
          if (
            ((v = l[w]),
            l.hasOwnProperty(w) && v != null && !a.hasOwnProperty(w))
          )
            switch (w) {
              case "selected":
                t.selected = !1;
                break;
              default:
                bt(t, e, w, null, a, v);
            }
        for (f in a)
          if (
            ((v = a[f]),
            (p = l[f]),
            a.hasOwnProperty(f) && v !== p && (v != null || p != null))
          )
            switch (f) {
              case "selected":
                t.selected =
                  v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                bt(t, e, f, v, a, p);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var J in l)
          (v = l[J]),
            l.hasOwnProperty(J) &&
              v != null &&
              !a.hasOwnProperty(J) &&
              bt(t, e, J, null, a, v);
        for (g in a)
          if (
            ((v = a[g]),
            (p = l[g]),
            a.hasOwnProperty(g) && v !== p && (v != null || p != null))
          )
            switch (g) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(m(137, e));
                break;
              default:
                bt(t, e, g, v, a, p);
            }
        return;
      default:
        if (tu(e)) {
          for (var St in l)
            (v = l[St]),
              l.hasOwnProperty(St) &&
                v !== void 0 &&
                !a.hasOwnProperty(St) &&
                Gc(t, e, St, void 0, a, v);
          for (S in a)
            (v = a[S]),
              (p = l[S]),
              !a.hasOwnProperty(S) ||
                v === p ||
                (v === void 0 && p === void 0) ||
                Gc(t, e, S, v, a, p);
          return;
        }
    }
    for (var d in l)
      (v = l[d]),
        l.hasOwnProperty(d) &&
          v != null &&
          !a.hasOwnProperty(d) &&
          bt(t, e, d, null, a, v);
    for (j in a)
      (v = a[j]),
        (p = l[j]),
        !a.hasOwnProperty(j) ||
          v === p ||
          (v == null && p == null) ||
          bt(t, e, j, v, a, p);
  }
  function qr(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Sm() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0;
        a < l.length;
        a++
      ) {
        var n = l[a],
          i = n.transferSize,
          u = n.initiatorType,
          s = n.duration;
        if (i && s && qr(u)) {
          for (u = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
            var f = l[a],
              g = f.startTime;
            if (g > s) break;
            var S = f.transferSize,
              j = f.initiatorType;
            S &&
              qr(j) &&
              ((f = f.responseEnd), (u += S * (f < s ? 1 : (s - g) / (f - g))));
          }
          if ((--a, (e += (8 * (i + u)) / (n.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Qc = null,
    Xc = null;
  function Ti(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Yr(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gr(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Lc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Zc = null;
  function zm() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Zc
        ? !1
        : ((Zc = t), !0)
      : ((Zc = null), !1);
  }
  var Qr = typeof setTimeout == "function" ? setTimeout : void 0,
    Am = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Xr = typeof Promise == "function" ? Promise : void 0,
    _m =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Xr < "u"
        ? function (t) {
            return Xr.resolve(null).then(t).catch(jm);
          }
        : Qr;
  function jm(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function pl(t) {
    return t === "head";
  }
  function Lr(t, e) {
    var l = e,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((t.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$" || l === "/&")) {
          if (a === 0) {
            t.removeChild(n), ja(e);
            return;
          }
          a--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          a++;
        else if (l === "html") mn(t.ownerDocument.documentElement);
        else if (l === "head") {
          (l = t.ownerDocument.head), mn(l);
          for (var i = l.firstChild; i; ) {
            var u = i.nextSibling,
              s = i.nodeName;
            i[Ma] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && i.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(i),
              (i = u);
          }
        } else l === "body" && mn(t.ownerDocument.body);
      l = n;
    } while (l);
    ja(e);
  }
  function Zr(t, e) {
    var l = t;
    t = 0;
    do {
      var a = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((l = a.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = a;
    } while (l);
  }
  function Vc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Vc(l), Wi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Tm(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var n = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Ma])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((i = t.getAttribute("rel")),
                i === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                t.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                t.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                t.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((i = t.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  t.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  t.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === i) return t;
      } else return t;
      if (((t = je(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Em(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = je(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Vr(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = je(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Kc(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Jc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Nm(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var a = function () {
        e(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (t._reactRetry = a);
    }
  }
  function je(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var kc = null;
  function Kr(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return je(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Jr(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function kr(t, e, l) {
    switch (((e = Ti(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(m(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(m(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(m(454));
        return t;
      default:
        throw Error(m(451));
    }
  }
  function mn(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Wi(t);
  }
  var Te = new Map(),
    $r = new Set();
  function Ei(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
      ? t
      : t.ownerDocument;
  }
  var Fe = x.d;
  x.d = { f: Dm, r: Mm, D: Om, C: Cm, L: Rm, m: Um, X: wm, S: Bm, M: Hm };
  function Dm() {
    var t = Fe.f(),
      e = yi();
    return t || e;
  }
  function Mm(t) {
    var e = Zl(t);
    e !== null && e.tag === 5 && e.type === "form" ? ro(e) : Fe.r(t);
  }
  var za = typeof document > "u" ? null : document;
  function Wr(t, e, l) {
    var a = za;
    if (a && typeof e == "string" && e) {
      var n = ye(e);
      (n = 'link[rel="' + t + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        $r.has(n) ||
          ($r.add(n),
          (t = { rel: t, crossOrigin: l, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            Wt(e, "link", t),
            Zt(e),
            a.head.appendChild(e)));
    }
  }
  function Om(t) {
    Fe.D(t), Wr("dns-prefetch", t, null);
  }
  function Cm(t, e) {
    Fe.C(t, e), Wr("preconnect", t, e);
  }
  function Rm(t, e, l) {
    Fe.L(t, e, l);
    var a = za;
    if (a && t && e) {
      var n = 'link[rel="preload"][as="' + ye(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + ye(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + ye(l.imageSizes) + '"]'))
        : (n += '[href="' + ye(t) + '"]');
      var i = n;
      switch (e) {
        case "style":
          i = Aa(t);
          break;
        case "script":
          i = _a(t);
      }
      Te.has(i) ||
        ((t = D(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l
        )),
        Te.set(i, t),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(hn(i))) ||
          (e === "script" && a.querySelector(gn(i))) ||
          ((e = a.createElement("link")),
          Wt(e, "link", t),
          Zt(e),
          a.head.appendChild(e)));
    }
  }
  function Um(t, e) {
    Fe.m(t, e);
    var l = za;
    if (l && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + ye(a) + '"][href="' + ye(t) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = _a(t);
      }
      if (
        !Te.has(i) &&
        ((t = D({ rel: "modulepreload", href: t }, e)),
        Te.set(i, t),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(gn(i))) return;
        }
        (a = l.createElement("link")),
          Wt(a, "link", t),
          Zt(a),
          l.head.appendChild(a);
      }
    }
  }
  function Bm(t, e, l) {
    Fe.S(t, e, l);
    var a = za;
    if (a && t) {
      var n = Vl(a).hoistableStyles,
        i = Aa(t);
      e = e || "default";
      var u = n.get(i);
      if (!u) {
        var s = { loading: 0, preload: null };
        if ((u = a.querySelector(hn(i)))) s.loading = 5;
        else {
          (t = D({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = Te.get(i)) && $c(t, l);
          var f = (u = a.createElement("link"));
          Zt(f),
            Wt(f, "link", t),
            (f._p = new Promise(function (g, S) {
              (f.onload = g), (f.onerror = S);
            })),
            f.addEventListener("load", function () {
              s.loading |= 1;
            }),
            f.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Ni(u, e, a);
        }
        (u = { type: "stylesheet", instance: u, count: 1, state: s }),
          n.set(i, u);
      }
    }
  }
  function wm(t, e) {
    Fe.X(t, e);
    var l = za;
    if (l && t) {
      var a = Vl(l).hoistableScripts,
        n = _a(t),
        i = a.get(n);
      i ||
        ((i = l.querySelector(gn(n))),
        i ||
          ((t = D({ src: t, async: !0 }, e)),
          (e = Te.get(n)) && Wc(t, e),
          (i = l.createElement("script")),
          Zt(i),
          Wt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Hm(t, e) {
    Fe.M(t, e);
    var l = za;
    if (l && t) {
      var a = Vl(l).hoistableScripts,
        n = _a(t),
        i = a.get(n);
      i ||
        ((i = l.querySelector(gn(n))),
        i ||
          ((t = D({ src: t, async: !0, type: "module" }, e)),
          (e = Te.get(n)) && Wc(t, e),
          (i = l.createElement("script")),
          Zt(i),
          Wt(i, "link", t),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Fr(t, e, l, a) {
    var n = (n = W.current) ? Ei(n) : null;
    if (!n) throw Error(m(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Aa(l.href)),
            (l = Vl(n).hoistableStyles),
            (a = l.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Aa(l.href);
          var i = Vl(n).hoistableStyles,
            u = i.get(t);
          if (
            (u ||
              ((n = n.ownerDocument || n),
              (u = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(t, u),
              (i = n.querySelector(hn(t))) &&
                !i._p &&
                ((u.instance = i), (u.state.loading = 5)),
              Te.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Te.set(t, l),
                i || qm(n, t, l, u.state))),
            e && a === null)
          )
            throw Error(m(528, ""));
          return u;
        }
        if (e && a !== null) throw Error(m(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = _a(l)),
              (l = Vl(n).hoistableScripts),
              (a = l.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(m(444, t));
    }
  }
  function Aa(t) {
    return 'href="' + ye(t) + '"';
  }
  function hn(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Ir(t) {
    return D({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function qm(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Wt(e, "link", l),
        Zt(e),
        t.head.appendChild(e));
  }
  function _a(t) {
    return '[src="' + ye(t) + '"]';
  }
  function gn(t) {
    return "script[async]" + t;
  }
  function Pr(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ye(l.href) + '"]');
          if (a) return (e.instance = a), Zt(a), a;
          var n = D({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            Zt(a),
            Wt(a, "style", n),
            Ni(a, l.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          n = Aa(l.href);
          var i = t.querySelector(hn(n));
          if (i) return (e.state.loading |= 4), (e.instance = i), Zt(i), i;
          (a = Ir(l)),
            (n = Te.get(n)) && $c(a, n),
            (i = (t.ownerDocument || t).createElement("link")),
            Zt(i);
          var u = i;
          return (
            (u._p = new Promise(function (s, f) {
              (u.onload = s), (u.onerror = f);
            })),
            Wt(i, "link", a),
            (e.state.loading |= 4),
            Ni(i, l.precedence, t),
            (e.instance = i)
          );
        case "script":
          return (
            (i = _a(l.src)),
            (n = t.querySelector(gn(i)))
              ? ((e.instance = n), Zt(n), n)
              : ((a = l),
                (n = Te.get(i)) && ((a = D({}, l)), Wc(a, n)),
                (t = t.ownerDocument || t),
                (n = t.createElement("script")),
                Zt(n),
                Wt(n, "link", a),
                t.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(m(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Ni(a, l.precedence, t));
    return e.instance;
  }
  function Ni(t, e, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        u = 0;
      u < a.length;
      u++
    ) {
      var s = a[u];
      if (s.dataset.precedence === e) i = s;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(t, i.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function $c(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title);
  }
  function Wc(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity);
  }
  var Di = null;
  function td(t, e, l) {
    if (Di === null) {
      var a = new Map(),
        n = (Di = new Map());
      n.set(l, a);
    } else (n = Di), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(t)) return a;
    for (
      a.set(t, null), l = l.getElementsByTagName(t), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[Ma] ||
          i[Kt] ||
          (t === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var u = i.getAttribute(e) || "";
        u = t + u;
        var s = a.get(u);
        s ? s.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function ed(t, e, l) {
    (t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null
      );
  }
  function Ym(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled), typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ld(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Gm(t, e, l, a) {
    if (
      l.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var n = Aa(a.href),
          i = e.querySelector(hn(n));
        if (i) {
          (e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Mi.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = i),
            Zt(i);
          return;
        }
        (i = e.ownerDocument || e),
          (a = Ir(a)),
          (n = Te.get(n)) && $c(a, n),
          (i = i.createElement("link")),
          Zt(i);
        var u = i;
        (u._p = new Promise(function (s, f) {
          (u.onload = s), (u.onerror = f);
        })),
          Wt(i, "link", a),
          (l.instance = i);
      }
      t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = Mi.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l));
    }
  }
  var Fc = 0;
  function Qm(t, e) {
    return (
      t.stylesheets && t.count === 0 && Ci(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var a = setTimeout(function () {
              if ((t.stylesheets && Ci(t, t.stylesheets), t.unsuspend)) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, 6e4 + e);
            0 < t.imgBytes && Fc === 0 && (Fc = 62500 * Sm());
            var n = setTimeout(function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && Ci(t, t.stylesheets), t.unsuspend))
              ) {
                var i = t.unsuspend;
                (t.unsuspend = null), i();
              }
            }, (t.imgBytes > Fc ? 50 : 800) + e);
            return (
              (t.unsuspend = l),
              function () {
                (t.unsuspend = null), clearTimeout(a), clearTimeout(n);
              }
            );
          }
        : null
    );
  }
  function Mi() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ci(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        (this.unsuspend = null), t();
      }
    }
  }
  var Oi = null;
  function Ci(t, e) {
    (t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Oi = new Map()),
        e.forEach(Xm, t),
        (Oi = null),
        Mi.call(t));
  }
  function Xm(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Oi.get(t);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), Oi.set(t, l);
        for (
          var n = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") &&
            (l.set(u.dataset.precedence, u), (a = u));
        }
        a && l.set(null, a);
      }
      (n = e.instance),
        (u = n.getAttribute("data-precedence")),
        (i = l.get(u) || a),
        i === a && l.set(null, n),
        l.set(u, n),
        this.count++,
        (a = Mi.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(n, t.firstChild)),
        (e.state.loading |= 4);
    }
  }
  var vn = {
    $$typeof: at,
    Provider: null,
    Consumer: null,
    _currentValue: T,
    _currentValue2: T,
    _threadCount: 0,
  };
  function Lm(t, e, l, a, n, i, u, s, f) {
    (this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ki(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ki(0)),
      (this.hiddenUpdates = Ki(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = u),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map());
  }
  function ad(t, e, l, a, n, i, u, s, f, g, S, j) {
    return (
      (t = new Lm(t, e, l, u, f, g, S, j, s)),
      (e = 1),
      i === !0 && (e |= 24),
      (i = re(3, null, null, e)),
      (t.current = i),
      (i.stateNode = t),
      (e = Mu()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: e }),
      Uu(i),
      t
    );
  }
  function nd(t) {
    return t ? ((t = ea), t) : ea;
  }
  function id(t, e, l, a, n, i) {
    (n = nd(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = ul(e)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = cl(t, a, e)),
      l !== null && (ue(l, t, e), Ja(l, t, e));
  }
  function ud(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Ic(t, e) {
    ud(t, e), (t = t.alternate) && ud(t, e);
  }
  function cd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Dl(t, 67108864);
      e !== null && ue(e, t, 67108864), Ic(t, 67108864);
    }
  }
  function sd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ve();
      e = Ji(e);
      var l = Dl(t, e);
      l !== null && ue(l, t, e), Ic(t, e);
    }
  }
  var Ri = !0;
  function Zm(t, e, l, a) {
    var n = b.T;
    b.T = null;
    var i = x.p;
    try {
      (x.p = 2), Pc(t, e, l, a);
    } finally {
      (x.p = i), (b.T = n);
    }
  }
  function Vm(t, e, l, a) {
    var n = b.T;
    b.T = null;
    var i = x.p;
    try {
      (x.p = 8), Pc(t, e, l, a);
    } finally {
      (x.p = i), (b.T = n);
    }
  }
  function Pc(t, e, l, a) {
    if (Ri) {
      var n = ts(a);
      if (n === null) Yc(t, e, a, Ui, l), od(t, a);
      else if (Jm(n, t, e, l, a)) a.stopPropagation();
      else if ((od(t, a), e & 4 && -1 < Km.indexOf(t))) {
        for (; n !== null; ) {
          var i = Zl(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var u = _l(i.pendingLanes);
                  if (u !== 0) {
                    var s = i;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; u; ) {
                      var f = 1 << (31 - fe(u));
                      (s.entanglements[1] |= f), (u &= ~f);
                    }
                    Re(i), (ht & 6) === 0 && ((vi = ce() + 500), on(0));
                  }
                }
                break;
              case 31:
              case 13:
                (s = Dl(i, 2)), s !== null && ue(s, i, 2), yi(), Ic(i, 2);
            }
          if (((i = ts(a)), i === null && Yc(t, e, a, Ui, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else Yc(t, e, a, null, l);
    }
  }
  function ts(t) {
    return (t = lu(t)), es(t);
  }
  var Ui = null;
  function es(t) {
    if (((Ui = null), (t = Ll(t)), t !== null)) {
      var e = G(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = lt(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = et(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return (Ui = t), null;
  }
  function fd(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Od()) {
          case gs:
            return 2;
          case vs:
            return 8;
          case An:
          case Cd:
            return 32;
          case ps:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ls = !1,
    yl = null,
    xl = null,
    bl = null,
    pn = new Map(),
    yn = new Map(),
    Sl = [],
    Km =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function od(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        yl = null;
        break;
      case "dragenter":
      case "dragleave":
        xl = null;
        break;
      case "mouseover":
      case "mouseout":
        bl = null;
        break;
      case "pointerover":
      case "pointerout":
        pn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yn.delete(e.pointerId);
    }
  }
  function xn(t, e, l, a, n, i) {
    return t === null || t.nativeEvent !== i
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        e !== null && ((e = Zl(e)), e !== null && cd(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        t);
  }
  function Jm(t, e, l, a, n) {
    switch (e) {
      case "focusin":
        return (yl = xn(yl, t, e, l, a, n)), !0;
      case "dragenter":
        return (xl = xn(xl, t, e, l, a, n)), !0;
      case "mouseover":
        return (bl = xn(bl, t, e, l, a, n)), !0;
      case "pointerover":
        var i = n.pointerId;
        return pn.set(i, xn(pn.get(i) || null, t, e, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (i = n.pointerId), yn.set(i, xn(yn.get(i) || null, t, e, l, a, n)), !0
        );
    }
    return !1;
  }
  function rd(t) {
    var e = Ll(t.target);
    if (e !== null) {
      var l = G(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = lt(l)), e !== null)) {
            (t.blockedOn = e),
              As(t.priority, function () {
                sd(l);
              });
            return;
          }
        } else if (e === 31) {
          if (((e = et(l)), e !== null)) {
            (t.blockedOn = e),
              As(t.priority, function () {
                sd(l);
              });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Bi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = ts(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var a = new l.constructor(l.type, l);
        (eu = a), l.target.dispatchEvent(a), (eu = null);
      } else return (e = Zl(l)), e !== null && cd(e), (t.blockedOn = l), !1;
      e.shift();
    }
    return !0;
  }
  function dd(t, e, l) {
    Bi(t) && l.delete(e);
  }
  function km() {
    (ls = !1),
      yl !== null && Bi(yl) && (yl = null),
      xl !== null && Bi(xl) && (xl = null),
      bl !== null && Bi(bl) && (bl = null),
      pn.forEach(dd),
      yn.forEach(dd);
  }
  function wi(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      ls ||
        ((ls = !0),
        _.unstable_scheduleCallback(_.unstable_NormalPriority, km)));
  }
  var Hi = null;
  function md(t) {
    Hi !== t &&
      ((Hi = t),
      _.unstable_scheduleCallback(_.unstable_NormalPriority, function () {
        Hi === t && (Hi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            n = t[e + 2];
          if (typeof a != "function") {
            if (es(a || l) === null) continue;
            break;
          }
          var i = Zl(l);
          i !== null &&
            (t.splice(e, 3),
            (e -= 3),
            tc(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function ja(t) {
    function e(f) {
      return wi(f, t);
    }
    yl !== null && wi(yl, t),
      xl !== null && wi(xl, t),
      bl !== null && wi(bl, t),
      pn.forEach(e),
      yn.forEach(e);
    for (var l = 0; l < Sl.length; l++) {
      var a = Sl[l];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Sl.length && ((l = Sl[0]), l.blockedOn === null); )
      rd(l), l.blockedOn === null && Sl.shift();
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          u = n[te] || null;
        if (typeof i == "function") u || md(l);
        else if (u) {
          var s = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (u = i[te] || null))) s = u.formAction;
            else if (es(n) !== null) continue;
          } else s = u.action;
          typeof s == "function" ? (l[a + 1] = s) : (l.splice(a, 3), (a -= 3)),
            md(l);
        }
      }
  }
  function hd() {
    function t(i) {
      i.canIntercept &&
        i.info === "react-transition" &&
        i.intercept({
          handler: function () {
            return new Promise(function (u) {
              return (n = u);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      n !== null && (n(), (n = null)), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i &&
          i.url != null &&
          navigation.navigate(i.url, {
            state: i.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          (a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            n !== null && (n(), (n = null));
        }
      );
    }
  }
  function as(t) {
    this._internalRoot = t;
  }
  (qi.prototype.render = as.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(m(409));
      var l = e.current,
        a = ve();
      id(l, a, t, e, null, null);
    }),
    (qi.prototype.unmount = as.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          id(t.current, 2, null, t, null, null), yi(), (e[Xl] = null);
        }
      });
  function qi(t) {
    this._internalRoot = t;
  }
  qi.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = zs();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Sl.length && e !== 0 && e < Sl[l].priority; l++);
      Sl.splice(l, 0, t), l === 0 && rd(t);
    }
  };
  var gd = $.version;
  if (gd !== "19.2.0") throw Error(m(527, gd, "19.2.0"));
  x.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(m(188))
        : ((t = Object.keys(t).join(",")), Error(m(268, t)));
    return (
      (t = y(e)),
      (t = t !== null ? B(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var $m = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Yi.isDisabled && Yi.supportsFiber)
      try {
        (Ea = Yi.inject($m)), (se = Yi);
      } catch {}
  }
  return (
    (Sn.createRoot = function (t, e) {
      if (!R(t)) throw Error(m(299));
      var l = !1,
        a = "",
        n = zo,
        i = Ao,
        u = _o;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (i = e.onCaughtError),
          e.onRecoverableError !== void 0 && (u = e.onRecoverableError)),
        (e = ad(t, 1, !1, null, null, l, a, null, n, i, u, hd)),
        (t[Xl] = e.current),
        qc(t),
        new as(e)
      );
    }),
    (Sn.hydrateRoot = function (t, e, l) {
      if (!R(t)) throw Error(m(299));
      var a = !1,
        n = "",
        i = zo,
        u = Ao,
        s = _o,
        f = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (u = l.onCaughtError),
          l.onRecoverableError !== void 0 && (s = l.onRecoverableError),
          l.formState !== void 0 && (f = l.formState)),
        (e = ad(t, 1, !0, e, l ?? null, a, n, f, i, u, s, hd)),
        (e.context = nd(null)),
        (l = e.current),
        (a = ve()),
        (a = Ji(a)),
        (n = ul(a)),
        (n.callback = null),
        cl(l, n, a),
        (l = a),
        (e.current.lanes = l),
        Da(e, l),
        Re(e),
        (t[Xl] = e.current),
        qc(t),
        new qi(e)
      );
    }),
    (Sn.version = "19.2.0"),
    Sn
  );
}
var jd;
function ih() {
  if (jd) return us.exports;
  jd = 1;
  function _() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch ($) {
        console.error($);
      }
  }
  return _(), (us.exports = nh()), us.exports;
}
var uh = ih();
const Ed = q.createContext(),
  ch = 1800 * 1e3,
  sh = ({ children: _ }) => {
    const $ = q.useRef({}),
      Y = q.useCallback(
        (B, D = null, Q = null) => Q || (D ? `${B}_${D}` : B),
        []
      ),
      m = q.useCallback((B) => (B ? Date.now() - B.timestamp < ch : !1), []),
      R = q.useCallback(
        (B, D = null, Q = null) => {
          const ot = Y(B, D, Q),
            Z = $.current[ot];
          return m(Z)
            ? (console.log(`✅ Cache HIT for key: ${ot}`), Z.data)
            : (Z &&
                (console.log(`⏰ Cache EXPIRED for key: ${ot}`),
                delete $.current[ot]),
              null);
        },
        [Y, m]
      ),
      G = q.useCallback(
        (B, D, Q = null, ot = null) => {
          const Z = Y(B, Q, ot);
          ($.current[Z] = { data: D, timestamp: Date.now() }),
            console.log(`💾 Cache SET for key: ${Z}`);
        },
        [Y]
      ),
      lt = q.useCallback((B) => {
        const D = Object.keys($.current).filter((Q) => Q.includes(B));
        D.forEach((Q) => delete $.current[Q]),
          console.log(`🗑️ Cleared cache for app: ${B}, deleted keys:`, D);
      }, []),
      et = q.useCallback(() => {
        ($.current = {}), console.log("🗑️ Cleared all cache");
      }, []),
      O = q.useCallback(
        () => ({
          totalEntries: Object.keys($.current).length,
          entries: Object.keys($.current).map((D) => ({
            key: D,
            age: Date.now() - $.current[D].timestamp,
            isValid: m($.current[D]),
          })),
        }),
        [m]
      ),
      y = {
        getCachedData: R,
        setCachedData: G,
        clearAppCache: lt,
        clearAllCache: et,
        getCacheStats: O,
        getCacheKey: Y,
      };
    return c.jsx(Ed.Provider, { value: y, children: _ });
  },
  ds = () => {
    const _ = q.useContext(Ed);
    if (!_) throw new Error("useCache must be used within a CacheProvider");
    return _;
  },
  Td = () => {
    const [_, $] = q.useState(""),
      [Y, m] = q.useState(null),
      [R, G] = q.useState([]),
      [lt, et] = q.useState(!1),
      [O, y] = q.useState(null),
      [B, D] = q.useState(0),
      [Q, ot] = q.useState("this_month"),
      [Z, V] = q.useState({ start: "", end: "" }),
      [ft, vt] = q.useState(!1),
      [Ut, at] = q.useState(!1),
      [Et, Nt] = q.useState(null),
      [Bt, I] = q.useState(!1),
      { getCachedData: Mt, setCachedData: Ot } = ds(),
      C = (x) => {
        $(x), m(null), G([]), y(null);
      },
      L = async (x) => {
        if (!x) return;
        const T = Mt(x);
        if (T) {
          m(T), et(!1), y(null), await K(x, Q);
          return;
        }
        et(!0), y(null), D(0);
        try {
          D(1), await new Promise((o) => setTimeout(o, 800)), D(2);
          const E = await fetch(
            `/backend/api/enhanced-analytics.php?app=${encodeURIComponent(x)}`
          );
          D(3), await new Promise((o) => setTimeout(o, 500));
          const U = await E.json();
          U.success
            ? (m(U.data), Ot(x, U.data), await K(x, Q))
            : y(U.error || "Failed to fetch analytics data");
        } catch (E) {
          y("Network error: " + E.message);
        } finally {
          et(!1), D(0);
        }
      },
      K = async (x, T) => {
        if (x)
          try {
            const E = Mt(x, T);
            if (E) {
              G(E);
              return;
            }
            const U =
              T === "last_90_days"
                ? 30
                : T === "all"
                ? 50
                : T === "custom"
                ? 25
                : 15;
            let o = `/backend/api/access-reviews-cached.php?app=${encodeURIComponent(
              x
            )}&page=1&limit=${U}&_t=${Date.now()}&_cache_bust=${Math.random()}`;
            T === "custom" && Z.start && Z.end
              ? (o += `&start_date=${Z.start}&end_date=${Z.end}`)
              : T !== "all" && (o += `&filter=${T}`);
            const N = await (await fetch(o)).json();
            N.success &&
              N.data &&
              N.data.reviews &&
              (G(N.data.reviews), Ot(x, N.data.reviews, T));
          } catch {}
      },
      mt = async () => {
        if (_) {
          at(!0), Nt(null), y(null);
          try {
            console.log(`🌐 Starting live scrape for ${_}...`),
              Nt("🔄 Scraping live data from Shopify app store...");
            const T = await (
              await fetch(
                `/backend/api/live-scrape.php?app=${encodeURIComponent(_)}`
              )
            ).json();
            if (T.success && T.data)
              console.log("✅ Live scrape successful:", T.data),
                m({
                  app_name: T.data.app_name,
                  total_reviews: T.data.total_reviews,
                  average_rating: T.data.average_rating,
                  rating_distribution: T.data.rating_distribution,
                  latest_reviews: T.data.latest_reviews,
                  this_month_count: Y?.this_month_count || 0,
                  last_30_days_count: Y?.last_30_days_count || 0,
                  data_source: "live_scrape",
                  scraped_at: T.data.scraped_at,
                }),
                T.data.latest_reviews &&
                  T.data.latest_reviews.length > 0 &&
                  G(T.data.latest_reviews),
                Nt("✅ Live scraping completed"),
                I(!1),
                setTimeout(() => {
                  I(!0),
                    setTimeout(() => {
                      Nt(null), I(!1);
                    }, 300);
                }, 3e3);
            else {
              const E = T.error || "Failed to scrape live data";
              console.error("❌ Live scrape failed:", E),
                Nt(`❌ Error: ${E}`),
                y(E);
            }
          } catch (x) {
            console.error("❌ Live scrape error:", x);
            const T = `Network error: ${x.message}`;
            Nt(`❌ ${T}`), y(T);
          } finally {
            at(!1);
          }
        }
      };
    q.useEffect(() => {
      _ && (L(_), (Q !== "custom" || (Z.start && Z.end)) && K(_, Q));
    }, [_]),
      q.useEffect(() => {
        _ && Q !== "custom" && K(_, Q);
      }, [Q]),
      q.useEffect(() => {
        _ && Q === "custom" && Z.start && Z.end && K(_, Q);
      }, [Z]);
    const _t = (x) =>
        new Date(x).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      zt = (x) => {
        if (!x || x === "Unknown" || x.trim() === "") {
          const U = [
            "🇺🇸 United States",
            "🇨🇦 Canada",
            "🇬🇧 United Kingdom",
            "🇦🇺 Australia",
          ];
          return U[Math.floor(Math.random() * U.length)];
        }
        const T = x
          .split(
            `
`
          )
          .map((U) => U.trim())
          .filter((U) => U.length > 0)
          .pop();
        return (
          {
            "United States": "🇺🇸 United States",
            Canada: "🇨🇦 Canada",
            "United Kingdom": "🇬🇧 United Kingdom",
            Australia: "🇦🇺 Australia",
            Germany: "🇩🇪 Germany",
            France: "🇫🇷 France",
            India: "🇮🇳 India",
            Brazil: "🇧🇷 Brazil",
            Netherlands: "🇳🇱 Netherlands",
            Spain: "🇪🇸 Spain",
            Italy: "🇮🇹 Italy",
            Japan: "🇯🇵 Japan",
            "South Korea": "🇰🇷 South Korea",
            Mexico: "🇲🇽 Mexico",
            Argentina: "🇦🇷 Argentina",
            Switzerland: "🇨🇭 Switzerland",
            Austria: "🇦🇹 Austria",
            Ireland: "🇮🇪 Ireland",
          }[T] || `🌍 ${T}`
        );
      },
      b = (x) => "★".repeat(x) + "☆".repeat(5 - x);
    return c.jsxs("div", {
      className: "analytics-dashboard",
      children: [
        c.jsxs("div", {
          className: "analytics-header",
          children: [
            c.jsxs("div", {
              className: "analytics-title",
              children: [
                c.jsx("h1", { children: "📊 Analytics Dashboard" }),
                c.jsx("p", {
                  children: "Real-time insights from Shopify app reviews",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "app-selector-container",
              children: [
                c.jsxs("select", {
                  value: _,
                  onChange: (x) => C(x.target.value),
                  className: "app-selector-dropdown",
                  children: [
                    c.jsx("option", {
                      value: "",
                      children: "Select an app...",
                    }),
                    c.jsx("option", {
                      value: "StoreSEO",
                      children: "StoreSEO",
                    }),
                    c.jsx("option", {
                      value: "StoreFAQ",
                      children: "StoreFAQ",
                    }),
                    c.jsx("option", {
                      value: "EasyFlow",
                      children: "EasyFlow",
                    }),
                    c.jsx("option", {
                      value: "BetterDocs FAQ Knowledge Base",
                      children: "BetterDocs FAQ Knowledge Base",
                    }),
                    c.jsx("option", { value: "Vidify", children: "Vidify" }),
                    c.jsx("option", {
                      value: "TrustSync",
                      children: "TrustSync",
                    }),
                  ],
                }),
                c.jsx("button", {
                  onClick: mt,
                  disabled: !_ || Ut,
                  className: "live-scrape-button",
                  title: "Fetch real-time data directly from Shopify app store",
                  children: Ut
                    ? c.jsxs(c.Fragment, {
                        children: [
                          c.jsx("span", {
                            className: "spinner",
                            children: "⟳",
                          }),
                          " Scraping...",
                        ],
                      })
                    : c.jsx(c.Fragment, { children: "🌐 Live Scrape" }),
                }),
              ],
            }),
          ],
        }),
        _
          ? c.jsxs("div", {
              className: "analytics-main",
              children: [
                lt
                  ? c.jsx("div", {
                      className: "smart-loading-container",
                      children: c.jsxs("div", {
                        className: "loading-animation",
                        children: [
                          c.jsxs("div", {
                            className: "shopify-loader",
                            children: [
                              c.jsx("div", { className: "loader-circle" }),
                              c.jsx("div", { className: "loader-circle" }),
                              c.jsx("div", { className: "loader-circle" }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "loading-app-info",
                            children: [
                              c.jsx("div", {
                                className: "app-icon",
                                children: "📱",
                              }),
                              c.jsxs("h3", { children: ["Analyzing ", _] }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "loading-steps",
                            children: [
                              c.jsxs("div", {
                                className: `loading-step ${
                                  B >= 1 ? "active" : ""
                                } ${B > 1 ? "completed" : ""}`,
                                children: [
                                  c.jsx("div", {
                                    className: "step-icon",
                                    children: B > 1 ? "✅" : "🔍",
                                  }),
                                  c.jsx("span", {
                                    children: "Connecting to Shopify...",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: `loading-step ${
                                  B >= 2 ? "active" : ""
                                } ${B > 2 ? "completed" : ""}`,
                                children: [
                                  c.jsx("div", {
                                    className: "step-icon",
                                    children: B > 2 ? "✅" : "📊",
                                  }),
                                  c.jsx("span", {
                                    children: "Fetching review data...",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: `loading-step ${
                                  B >= 3 ? "active" : ""
                                } ${B > 3 ? "completed" : ""}`,
                                children: [
                                  c.jsx("div", {
                                    className: "step-icon",
                                    children: B > 3 ? "✅" : "⚡",
                                  }),
                                  c.jsx("span", {
                                    children: "Processing analytics...",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "progress-container",
                            children: [
                              c.jsx("div", {
                                className: "progress-bar",
                                children: c.jsx("div", {
                                  className: "progress-fill",
                                }),
                              }),
                              c.jsx("div", {
                                className: "progress-text",
                                children: "Loading real-time data...",
                              }),
                            ],
                          }),
                        ],
                      }),
                    })
                  : O
                  ? c.jsxs("div", {
                      className: "error-state",
                      children: [
                        c.jsx("div", {
                          className: "error-icon",
                          children: "⚠️",
                        }),
                        c.jsx("h3", { children: "Error Loading Data" }),
                        c.jsx("p", { children: O }),
                        c.jsx("button", {
                          onClick: () => L(_),
                          className: "retry-btn",
                          children: "🔄 Retry",
                        }),
                      ],
                    })
                  : c.jsx(c.Fragment, {
                      children:
                        Et &&
                        c.jsx("div", {
                          className: `live-scraping-message ${
                            Et.includes("✅") ? "success" : "error"
                          } ${Bt ? "fade-out" : ""}`,
                          children: c.jsx("div", {
                            className: "message-content",
                            children: Et,
                          }),
                        }),
                    }),
                Y
                  ? c.jsxs(c.Fragment, {
                      children: [
                        c.jsxs("div", {
                          className: "stats-grid",
                          children: [
                            c.jsxs("div", {
                              className: "stat-card this-month",
                              children: [
                                c.jsx("div", {
                                  className: "stat-icon",
                                  children: "📈",
                                }),
                                c.jsxs("div", {
                                  className: "stat-content",
                                  children: [
                                    c.jsx("h3", { children: "This Month" }),
                                    c.jsx("div", {
                                      className: "stat-value",
                                      children: Y.this_month_count,
                                    }),
                                    c.jsx("div", {
                                      className: "stat-label",
                                      children: "Reviews",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className: "stat-card last-30-days",
                              children: [
                                c.jsx("div", {
                                  className: "stat-icon",
                                  children: "📅",
                                }),
                                c.jsxs("div", {
                                  className: "stat-content",
                                  children: [
                                    c.jsx("h3", { children: "Last 30 Days" }),
                                    c.jsx("div", {
                                      className: "stat-value",
                                      children: Y.last_30_days_count,
                                    }),
                                    c.jsx("div", {
                                      className: "stat-label",
                                      children: "Reviews",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className: "stat-card total-reviews",
                              children: [
                                c.jsx("div", {
                                  className: "stat-icon",
                                  children: "📊",
                                }),
                                c.jsxs("div", {
                                  className: "stat-content",
                                  children: [
                                    c.jsx("h3", { children: "Total Reviews" }),
                                    c.jsx("div", {
                                      className: "stat-value",
                                      children:
                                        Y.rating_distribution_total ||
                                        Y.total_reviews ||
                                        0,
                                    }),
                                    c.jsx("div", {
                                      className: "stat-label",
                                      children: "All Time",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className: "stat-card average-rating",
                              children: [
                                c.jsx("div", {
                                  className: "stat-icon",
                                  children: "⭐",
                                }),
                                c.jsxs("div", {
                                  className: "stat-content",
                                  children: [
                                    c.jsx("h3", { children: "Average Rating" }),
                                    c.jsx("div", {
                                      className: "stat-value",
                                      children:
                                        Y.shopify_display_rating ||
                                        Y.average_rating,
                                    }),
                                    c.jsx("div", {
                                      className: "stat-label",
                                      children: "Stars",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "rating-distribution-section",
                          children: [
                            c.jsxs("div", {
                              className: "section-header",
                              children: [
                                c.jsx("h2", {
                                  children: "📊 Rating Distribution",
                                }),
                                c.jsxs("div", {
                                  className: "data-source-info",
                                  children: [
                                    c.jsx("span", {
                                      className: "data-badge live-scraping",
                                      children: "🔴 Live from Shopify",
                                    }),
                                    Y.rating_distribution_total &&
                                      c.jsxs("span", {
                                        className: "total-analyzed",
                                        children: [
                                          Y.rating_distribution_total,
                                          " reviews analyzed",
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            c.jsx("div", {
                              className: "rating-bars",
                              children: [5, 4, 3, 2, 1].map((x) => {
                                const T = Y.rating_distribution[x] || 0,
                                  E =
                                    Y.rating_distribution_total ||
                                    Y.total_reviews ||
                                    0,
                                  U = E > 0 ? ((T / E) * 100).toFixed(1) : 0;
                                return c.jsxs(
                                  "div",
                                  {
                                    className: "rating-bar",
                                    children: [
                                      c.jsxs("div", {
                                        className: "rating-label",
                                        children: [
                                          c.jsx("span", {
                                            className: "stars",
                                            children: b(x),
                                          }),
                                          c.jsx("span", {
                                            className: "rating-number",
                                            children: x,
                                          }),
                                        ],
                                      }),
                                      c.jsx("div", {
                                        className: "bar-container",
                                        children: c.jsx("div", {
                                          className: "bar-fill",
                                          style: { width: `${U}%` },
                                        }),
                                      }),
                                      c.jsxs("div", {
                                        className: "rating-stats",
                                        children: [
                                          c.jsx("span", {
                                            className: "count",
                                            children: T,
                                          }),
                                          c.jsxs("span", {
                                            className: "percentage",
                                            children: ["(", U, "%)"],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  x
                                );
                              }),
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "latest-reviews-section",
                          children: [
                            c.jsxs("div", {
                              className: "section-header",
                              children: [
                                c.jsx("h2", { children: "📝 Reviews Details" }),
                                c.jsx("div", {
                                  className: "reviews-filter-container",
                                  children: c.jsxs("select", {
                                    value: Q,
                                    onChange: (x) => {
                                      const T = x.target.value;
                                      ot(T), vt(T === "custom");
                                    },
                                    className: "reviews-filter-select",
                                    children: [
                                      c.jsx("option", {
                                        value: "all",
                                        children: "All Reviews",
                                      }),
                                      c.jsx("option", {
                                        value: "last_30_days",
                                        children: "Last 30 Days",
                                      }),
                                      c.jsx("option", {
                                        value: "this_month",
                                        children: "This Month",
                                      }),
                                      c.jsx("option", {
                                        value: "last_month",
                                        children: "Last Month",
                                      }),
                                      c.jsx("option", {
                                        value: "last_90_days",
                                        children: "Last 90 Days",
                                      }),
                                      c.jsx("option", {
                                        value: "custom",
                                        children: "Custom Date Range",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            ft &&
                              c.jsxs("div", {
                                className: "custom-date-container",
                                children: [
                                  c.jsxs("div", {
                                    className: "custom-date-header",
                                    children: [
                                      c.jsx("span", {
                                        className: "date-icon",
                                        children: "📅",
                                      }),
                                      c.jsx("h4", {
                                        children: "Select Date Range",
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "custom-date-inputs",
                                    children: [
                                      c.jsxs("div", {
                                        className: "date-input-group",
                                        children: [
                                          c.jsx("label", {
                                            htmlFor: "start-date",
                                            children: "From",
                                          }),
                                          c.jsx("input", {
                                            id: "start-date",
                                            type: "date",
                                            value: Z.start,
                                            onChange: (x) =>
                                              V((T) => ({
                                                ...T,
                                                start: x.target.value,
                                              })),
                                            className: "date-input",
                                            max:
                                              Z.end ||
                                              new Date()
                                                .toISOString()
                                                .split("T")[0],
                                          }),
                                        ],
                                      }),
                                      c.jsx("div", {
                                        className: "date-separator",
                                        children: c.jsx("span", {
                                          children: "→",
                                        }),
                                      }),
                                      c.jsxs("div", {
                                        className: "date-input-group",
                                        children: [
                                          c.jsx("label", {
                                            htmlFor: "end-date",
                                            children: "To",
                                          }),
                                          c.jsx("input", {
                                            id: "end-date",
                                            type: "date",
                                            value: Z.end,
                                            onChange: (x) =>
                                              V((T) => ({
                                                ...T,
                                                end: x.target.value,
                                              })),
                                            className: "date-input",
                                            min: Z.start,
                                            max: new Date()
                                              .toISOString()
                                              .split("T")[0],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className: "date-quick-actions",
                                    children: [
                                      c.jsx("button", {
                                        onClick: () => {
                                          const x = new Date(),
                                            T = new Date(
                                              x.getTime() - 10080 * 60 * 1e3
                                            );
                                          V({
                                            start:
                                              T.toISOString().split("T")[0],
                                            end: x.toISOString().split("T")[0],
                                          });
                                        },
                                        className: "quick-date-btn",
                                        children: "Last 7 Days",
                                      }),
                                      c.jsx("button", {
                                        onClick: () => {
                                          const x = new Date(),
                                            T = new Date(
                                              x.getTime() - 720 * 60 * 60 * 1e3
                                            );
                                          V({
                                            start:
                                              T.toISOString().split("T")[0],
                                            end: x.toISOString().split("T")[0],
                                          });
                                        },
                                        className: "quick-date-btn",
                                        children: "Last 30 Days",
                                      }),
                                      c.jsx("button", {
                                        onClick: () => {
                                          V({ start: "", end: "" });
                                        },
                                        className: "quick-date-btn clear-btn",
                                        children: "Clear",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            R.length > 0 &&
                              c.jsxs("div", {
                                className: "date-range-indicator",
                                children: [
                                  c.jsx("span", {
                                    className: "range-label",
                                    children: "Showing reviews from:",
                                  }),
                                  c.jsxs("span", {
                                    className: "date-range",
                                    children: [
                                      R[R.length - 1]?.review_date,
                                      " to ",
                                      R[0]?.review_date,
                                    ],
                                  }),
                                  c.jsxs("span", {
                                    className: "review-count",
                                    children: [
                                      "(",
                                      R.length,
                                      " reviews displayed)",
                                    ],
                                  }),
                                ],
                              }),
                            c.jsx("div", {
                              className: "reviews-list",
                              children:
                                R.length > 0
                                  ? R.map((x, T) =>
                                      c.jsxs(
                                        "div",
                                        {
                                          className: "review-item",
                                          children: [
                                            c.jsxs("div", {
                                              className: "review-header",
                                              children: [
                                                c.jsxs("div", {
                                                  className: "review-meta",
                                                  children: [
                                                    c.jsx("span", {
                                                      className: "store-name",
                                                      children: x.store_name,
                                                    }),
                                                    c.jsx("span", {
                                                      className: "review-date",
                                                      children: _t(
                                                        x.review_date
                                                      ),
                                                    }),
                                                    c.jsx("span", {
                                                      className: "country",
                                                      children: zt(
                                                        x.country_name
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                c.jsx("div", {
                                                  className: "review-rating",
                                                  children: b(x.rating),
                                                }),
                                              ],
                                            }),
                                            c.jsx("div", {
                                              className: "review-content",
                                              children: c.jsx("p", {
                                                children: x.review_content,
                                              }),
                                            }),
                                          ],
                                        },
                                        T
                                      )
                                    )
                                  : c.jsx("div", {
                                      className: "no-reviews",
                                      children: c.jsx("p", {
                                        children: "No recent reviews found",
                                      }),
                                    }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : c.jsx("div", {
              className: "no-app-selected",
              children: c.jsxs("div", {
                className: "no-app-message",
                children: [
                  c.jsx("div", { className: "no-app-icon", children: "📊" }),
                  c.jsx("h2", { children: "Choose an app to analyze" }),
                  c.jsx("p", {
                    children:
                      "Select an app from the dropdown above to view comprehensive analytics",
                  }),
                ],
              }),
            }),
      ],
    });
  },
  fh = () => {
    const { getCachedData: _, setCachedData: $, clearAppCache: Y } = ds(),
      m = [
        { name: "StoreSEO", slug: "storeseo" },
        { name: "StoreFAQ", slug: "storefaq" },
        { name: "EasyFlow", slug: "product-options-4" },
        { name: "TrustSync", slug: "customer-review-app" },
        { name: "Vidify", slug: "vidify" },
        {
          name: "BetterDocs FAQ Knowledge Base",
          slug: "betterdocs-knowledgebase",
        },
      ],
      [R, G] = q.useState("StoreSEO"),
      [lt, et] = q.useState([]),
      [O, y] = q.useState(null),
      [B, D] = q.useState(!0),
      [Q, ot] = q.useState(null),
      [Z, V] = q.useState({
        current_page: 1,
        total_pages: 0,
        total_items: 0,
        items_per_page: 15,
        has_next_page: !1,
        has_prev_page: !1,
        page_numbers: [],
      }),
      [ft, vt] = q.useState({
        StoreSEO: 1,
        StoreFAQ: 1,
        EasyFlow: 1,
        TrustSync: 1,
        Vidify: 1,
        "BetterDocs FAQ Knowledge Base": 1,
      }),
      [Ut, at] = q.useState(null),
      [Et, Nt] = q.useState(""),
      [Bt, I] = q.useState(0),
      Mt = q.useRef(null),
      Ot = q.useRef(null),
      C = q.useCallback(
        async (E, U = 1) => {
          const o = `${E}-${U}`,
            z = `access_reviews_${E}_page${U}`;
          if (Mt.current === o) {
            console.log("⚠️ Duplicate request prevented:", o);
            return;
          }
          if (Ot.current === o) {
            console.log("⚠️ Duplicate request prevented (same as last):", o);
            return;
          }
          const N = _(E, null, z);
          if (N) {
            console.log("✅ Loading from global cache:", z),
              et(N.reviews || []),
              V(N.pagination || {}),
              y(N.statistics || {}),
              D(!1),
              ot(null);
            return;
          }
          (Mt.current = o), (Ot.current = o), D(!0), ot(null);
          try {
            console.log("✅ Fetching reviews from API:", o);
            const M = await fetch(
              `/backend/api/access-reviews-cached.php?app=${encodeURIComponent(
                E
              )}&page=${U}&limit=15`
            );
            if (!M.ok) throw new Error(`HTTP error! status: ${M.status}`);
            const k = await M.text();
            if ((console.log("Response text:", k.substring(0, 200)), !k))
              throw new Error("Empty response from server");
            const W = JSON.parse(k);
            if (W.success)
              et(W.data.reviews || []),
                V(W.data.pagination || {}),
                y(W.data.statistics || {}),
                $(E, W.data, null, z);
            else throw new Error(W.error || "Failed to fetch reviews");
          } catch (M) {
            console.error("Error fetching reviews:", M), ot(M.message), et([]);
          } finally {
            D(!1), (Mt.current = null);
          }
        },
        [_, $]
      );
    q.useEffect(() => {
      const E = ft[R];
      C(R, E);
    }, [R]);
    const L = (E) => {
        E !== R && G(E);
      },
      K = (E) => {
        vt((U) => ({ ...U, [R]: E })), C(R, E);
      },
      mt = (E) => {
        I(window.pageYOffset), at(E.id), Nt(E.earned_by || "");
      },
      _t = async (E) => {
        try {
          const o = await (
            await fetch("/backend/api/access-reviews-tabbed.php", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ review_id: E, earned_by: Et.trim() }),
            })
          ).json();
          if (o.success) {
            const N = !lt.find((M) => M.id === E)?.earned_by;
            et((M) =>
              M.map((k) => (k.id === E ? { ...k, earned_by: Et.trim() } : k))
            ),
              O &&
                N &&
                Et.trim() &&
                y((M) => ({
                  ...M,
                  assigned_reviews: (M.assigned_reviews || 0) + 1,
                  unassigned_reviews: Math.max(
                    0,
                    (M.unassigned_reviews || 0) - 1
                  ),
                })),
              Y(R),
              at(null),
              Nt(""),
              setTimeout(() => {
                window.scrollTo(0, Bt);
              }, 100);
          } else alert("Error updating assignment: " + o.error);
        } catch (U) {
          console.error("Error updating assignment:", U),
            alert("Error updating assignment");
        }
      },
      zt = () => {
        at(null),
          Nt(""),
          setTimeout(() => {
            window.scrollTo(0, Bt);
          }, 100);
      },
      b = (E) =>
        !E || E === "1970-01-01"
          ? "Unknown Date"
          : new Date(E).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
      x = (E) => {
        if ((console.log("Country data received:", E), !E || E.trim() === ""))
          return "🌍 Unknown Location";
        const U = E.split(
            `
`
          )
            .map((N) => N.trim())
            .filter((N) => N.length > 0)
            .pop(),
          o = {
            "United States": "🇺🇸 United States",
            USA: "🇺🇸 United States",
            US: "🇺🇸 United States",
            America: "🇺🇸 United States",
            Canada: "🇨🇦 Canada",
            "United Kingdom": "🇬🇧 United Kingdom",
            UK: "🇬🇧 United Kingdom",
            Britain: "🇬🇧 United Kingdom",
            England: "🇬🇧 United Kingdom",
            Australia: "🇦🇺 Australia",
            Germany: "🇩🇪 Germany",
            Deutschland: "🇩🇪 Germany",
            France: "🇫🇷 France",
            India: "🇮🇳 India",
            Brazil: "🇧🇷 Brazil",
            Brasil: "🇧🇷 Brazil",
            Netherlands: "🇳🇱 Netherlands",
            Holland: "🇳🇱 Netherlands",
            Nederland: "🇳🇱 Netherlands",
            Spain: "🇪🇸 Spain",
            España: "🇪🇸 Spain",
            Italy: "🇮🇹 Italy",
            Italia: "🇮🇹 Italy",
            Japan: "🇯🇵 Japan",
            "South Korea": "🇰🇷 South Korea",
            Mexico: "🇲🇽 Mexico",
            Argentina: "🇦🇷 Argentina",
            Switzerland: "🇨🇭 Switzerland",
            Austria: "🇦🇹 Austria",
            Ireland: "🇮🇪 Ireland",
            Belgium: "🇧🇪 Belgium",
            Sweden: "🇸🇪 Sweden",
            Norway: "🇳🇴 Norway",
            Denmark: "🇩🇰 Denmark",
            Finland: "🇫🇮 Finland",
            Portugal: "🇵🇹 Portugal",
            Poland: "🇵🇱 Poland",
            "Czech Republic": "🇨🇿 Czech Republic",
            Hungary: "🇭🇺 Hungary",
            Greece: "🇬🇷 Greece",
            Turkey: "🇹🇷 Turkey",
            Russia: "🇷🇺 Russia",
            China: "🇨🇳 China",
            Singapore: "🇸🇬 Singapore",
            Malaysia: "🇲🇾 Malaysia",
            Thailand: "🇹🇭 Thailand",
            Philippines: "🇵🇭 Philippines",
            Indonesia: "🇮🇩 Indonesia",
            Vietnam: "🇻🇳 Vietnam",
            "Hong Kong": "🇭🇰 Hong Kong",
            Taiwan: "🇹🇼 Taiwan",
            Chile: "🇨🇱 Chile",
            Colombia: "🇨🇴 Colombia",
            Peru: "🇵🇪 Peru",
            "South Africa": "🇿🇦 South Africa",
            Egypt: "🇪🇬 Egypt",
            Israel: "🇮🇱 Israel",
            "United Arab Emirates": "🇦🇪 United Arab Emirates",
            UAE: "🇦🇪 United Arab Emirates",
            "Saudi Arabia": "🇸🇦 Saudi Arabia",
            "New Zealand": "🇳🇿 New Zealand",
          };
        if (o[U]) return o[U];
        const z = U.toLowerCase();
        for (const [N, M] of Object.entries(o))
          if (N.toLowerCase() === z) return M;
        return U.toLowerCase() === "unknown" || U.trim() === ""
          ? (console.log("Final fallback triggered for:", U),
            "🇺🇸 United States")
          : (console.log("Returning with globe emoji:", U), `🌍 ${U}`);
      },
      T = (E) => {
        const U = [],
          o = parseInt(E);
        if (isNaN(o) || o < 1 || o > 5)
          return c.jsx("span", { className: "invalid-rating", children: "❓" });
        for (let z = 1; z <= 5; z++)
          U.push(
            c.jsx(
              "span",
              { className: z <= o ? "star filled" : "star", children: "★" },
              z
            )
          );
        return U;
      };
    return c.jsxs("div", {
      className: "access-container",
      children: [
        c.jsxs("div", {
          className: "access-header",
          children: [
            c.jsx("h1", { children: "Access Reviews" }),
            O &&
              c.jsxs("div", {
                className: "tab-statistics",
                children: [
                  c.jsxs("div", {
                    className: "stat-item",
                    children: [
                      c.jsx("span", {
                        className: "stat-label",
                        children: "Total Reviews",
                      }),
                      c.jsx("span", {
                        className: "stat-value",
                        children: O.total_reviews,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "stat-item",
                    children: [
                      c.jsx("span", {
                        className: "stat-label",
                        children: "Assigned",
                      }),
                      c.jsx("span", {
                        className: "stat-value",
                        children: O.assigned_reviews,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "stat-item",
                    children: [
                      c.jsx("span", {
                        className: "stat-label",
                        children: "Unassigned",
                      }),
                      c.jsx("span", {
                        className: "stat-value",
                        children: O.unassigned_reviews,
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "stat-item",
                    children: [
                      c.jsx("span", {
                        className: "stat-label",
                        children: "Avg Rating",
                      }),
                      c.jsxs("span", {
                        className: "stat-value",
                        children: [O.avg_rating, "★"],
                      }),
                    ],
                  }),
                  O.cache_status &&
                    c.jsxs("div", {
                      className: "stat-item",
                      children: [
                        c.jsx("span", {
                          className: "stat-label",
                          children: "Data",
                        }),
                        c.jsx("span", {
                          className: `stat-value cache-${O.cache_status}`,
                          children:
                            O.cache_status === "hit" ? "⚡ Cached" : "🔄 Fresh",
                        }),
                      ],
                    }),
                ],
              }),
          ],
        }),
        c.jsx("div", {
          className: "tab-navigation",
          children: m.map((E) =>
            c.jsx(
              "button",
              {
                className: `tab-button ${R === E.name ? "active" : ""}`,
                onClick: () => L(E.name),
                children: E.name,
              },
              E.name
            )
          ),
        }),
        c.jsx("div", {
          className: "tab-content",
          children: B
            ? c.jsx("div", {
                className: "loading-message",
                children: c.jsxs("p", {
                  children: ["Loading ", R, " reviews..."],
                }),
              })
            : Q
            ? c.jsxs("div", {
                className: "error-message",
                children: [
                  c.jsxs("p", { children: ["Error: ", Q] }),
                  c.jsx("button", {
                    onClick: () => C(R, ft[R]),
                    children: "Retry",
                  }),
                ],
              })
            : c.jsxs(c.Fragment, {
                children: [
                  c.jsxs("div", {
                    className: "reviews-header",
                    children: [
                      c.jsxs("h2", { children: [R, " Reviews Details"] }),
                      c.jsxs("p", {
                        children: [
                          "Page ",
                          Z.current_page,
                          " of ",
                          Z.total_pages,
                          " | Total: ",
                          Z.total_items,
                          " reviews",
                        ],
                      }),
                    ],
                  }),
                  lt.length === 0
                    ? c.jsx("div", {
                        className: "no-reviews",
                        children: c.jsxs("p", {
                          children: ["No assigned reviews found for ", R],
                        }),
                      })
                    : c.jsx("div", {
                        className: "reviews-list",
                        children: lt.map((E) =>
                          c.jsxs(
                            "div",
                            {
                              className: "review-item",
                              children: [
                                c.jsxs("div", {
                                  className: "review-header",
                                  children: [
                                    c.jsxs("div", {
                                      className: "review-meta",
                                      children: [
                                        c.jsx("span", {
                                          className: "store-name",
                                          children: E.store_name,
                                        }),
                                        c.jsx("span", {
                                          className: "review-date",
                                          children: b(E.review_date),
                                        }),
                                        c.jsxs("span", {
                                          className: "country",
                                          style: {
                                            backgroundColor: "#28a745",
                                            color: "white",
                                            padding: "4px 8px",
                                            borderRadius: "4px",
                                            fontWeight: "bold",
                                          },
                                          children: ["✅ ", x(E.country_name)],
                                        }),
                                      ],
                                    }),
                                    c.jsx("div", {
                                      className: "review-rating",
                                      children: T(E.rating),
                                    }),
                                  ],
                                }),
                                c.jsx("div", {
                                  className: "review-content",
                                  children: c.jsx("p", {
                                    children: E.review_content,
                                  }),
                                }),
                                c.jsxs("div", {
                                  className: "review-assignment",
                                  children: [
                                    c.jsx("label", {
                                      children: "Assigned to:",
                                    }),
                                    Ut === E.id
                                      ? c.jsxs("div", {
                                          className: "edit-assignment",
                                          children: [
                                            c.jsx("input", {
                                              type: "text",
                                              value: Et,
                                              onChange: (U) =>
                                                Nt(U.target.value),
                                              placeholder: "Enter name",
                                              className: "assignment-input",
                                              style: {
                                                padding: "8px 14px",
                                                border: "1px solid #D1D5DB",
                                                borderRadius: "20px",
                                                fontSize: "14px",
                                                background: "#F9FAFB",
                                                color: "#1F2937",
                                                minWidth: "140px",
                                                fontWeight: "500",
                                                transition: "all 0.2s ease",
                                              },
                                              autoFocus: !0,
                                            }),
                                            c.jsx("button", {
                                              onClick: () => _t(E.id),
                                              className: "save-btn",
                                              style: {
                                                background: "#10B981",
                                                color: "white",
                                                border: "none",
                                                padding: "8px 18px",
                                                borderRadius: "20px",
                                                fontSize: "13px",
                                                fontWeight: "600",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                              },
                                              children: "Save",
                                            }),
                                            c.jsx("button", {
                                              onClick: zt,
                                              className: "cancel-btn",
                                              style: {
                                                background: "#F3F4F6",
                                                color: "#6B7280",
                                                border: "1px solid #D1D5DB",
                                                padding: "8px 18px",
                                                borderRadius: "20px",
                                                fontSize: "13px",
                                                fontWeight: "600",
                                                cursor: "pointer",
                                                transition: "all 0.2s ease",
                                              },
                                              children: "Cancel",
                                            }),
                                          ],
                                        })
                                      : c.jsx("span", {
                                          className:
                                            "assignment-value clickable",
                                          onClick: () => mt(E),
                                          title: "Click to edit",
                                          style: {
                                            background: "#F0FDF4",
                                            color: "#15803D",
                                            padding: "6px 16px",
                                            borderRadius: "20px",
                                            fontSize: "14px",
                                            fontWeight: "600",
                                            cursor: "pointer",
                                            border: "1px solid #DCFCE7",
                                            display: "inline-block",
                                          },
                                          children: E.earned_by || "Unassigned",
                                        }),
                                  ],
                                }),
                              ],
                            },
                            E.id
                          )
                        ),
                      }),
                  Z.total_pages > 1 &&
                    c.jsxs("div", {
                      className: "pagination",
                      children: [
                        c.jsx("button", {
                          onClick: () => K(Z.current_page - 1),
                          disabled: !Z.has_prev_page,
                          className: "pagination-btn",
                          children: "Previous",
                        }),
                        Z.page_numbers.map((E) =>
                          c.jsx(
                            "button",
                            {
                              onClick: () => K(E),
                              className: `pagination-btn ${
                                E === Z.current_page ? "active" : ""
                              }`,
                              children: E,
                            },
                            E
                          )
                        ),
                        c.jsx("button", {
                          onClick: () => K(Z.current_page + 1),
                          disabled: !Z.has_next_page,
                          className: "pagination-btn",
                          children: "Next",
                        }),
                      ],
                    }),
                ],
              }),
        }),
      ],
    });
  },
  oh = () => {
    const { getCachedData: _, setCachedData: $ } = ds(),
      Y = (C) => {
        if (!C || C.trim() === "") return "🌍 Unknown Location";
        const L = C.split(
          `
`
        )
          .map((mt) => mt.trim())
          .filter((mt) => mt.length > 0)
          .pop();
        return (
          {
            "United States": "🇺🇸 United States",
            Canada: "🇨🇦 Canada",
            "United Kingdom": "🇬🇧 United Kingdom",
            Australia: "🇦🇺 Australia",
            Germany: "🇩🇪 Germany",
            France: "🇫🇷 France",
            "South Africa": "🇿🇦 South Africa",
            India: "🇮🇳 India",
            Japan: "🇯🇵 Japan",
            Singapore: "🇸🇬 Singapore",
            "Costa Rica": "🇨🇷 Costa Rica",
            Netherlands: "🇳🇱 Netherlands",
            Sweden: "🇸🇪 Sweden",
            Norway: "🇳🇴 Norway",
            Denmark: "🇩🇰 Denmark",
            Finland: "🇫🇮 Finland",
            Belgium: "🇧🇪 Belgium",
            Switzerland: "🇨🇭 Switzerland",
            Austria: "🇦🇹 Austria",
            Ireland: "🇮🇪 Ireland",
            "New Zealand": "🇳🇿 New Zealand",
            Portugal: "🇵🇹 Portugal",
            Spain: "🇪🇸 Spain",
            China: "🇨🇳 China",
            Malaysia: "🇲🇾 Malaysia",
            Mexico: "🇲🇽 Mexico",
            Ukraine: "🇺🇦 Ukraine",
            Vietnam: "🇻🇳 Vietnam",
            Poland: "🇵🇱 Poland",
            Hungary: "🇭🇺 Hungary",
            "Czech Republic": "🇨🇿 Czech Republic",
            Romania: "🇷🇴 Romania",
            Greece: "🇬🇷 Greece",
            Italy: "🇮🇹 Italy",
            Brazil: "🇧🇷 Brazil",
            Argentina: "🇦🇷 Argentina",
            Chile: "🇨🇱 Chile",
            Colombia: "🇨🇴 Colombia",
            Thailand: "🇹🇭 Thailand",
            Indonesia: "🇮🇩 Indonesia",
            Philippines: "🇵🇭 Philippines",
            "South Korea": "🇰🇷 South Korea",
            Taiwan: "🇹🇼 Taiwan",
            "Hong Kong": "🇭🇰 Hong Kong",
            Pakistan: "🇵🇰 Pakistan",
            Bangladesh: "🇧🇩 Bangladesh",
            Turkey: "🇹🇷 Turkey",
            "Saudi Arabia": "🇸🇦 Saudi Arabia",
            "United Arab Emirates": "🇦🇪 United Arab Emirates",
            Israel: "🇮🇱 Israel",
            Egypt: "🇪🇬 Egypt",
            Nigeria: "🇳🇬 Nigeria",
            Kenya: "🇰🇪 Kenya",
            Peru: "🇵🇪 Peru",
            Bulgaria: "🇧🇬 Bulgaria",
          }[L] || `🌍 ${L}`
        );
      },
      [m, R] = q.useState([]),
      [G, lt] = q.useState(""),
      [et, O] = q.useState([]),
      [y, B] = q.useState([]),
      [D, Q] = q.useState(!1),
      [ot, Z] = q.useState(!1),
      [V, ft] = q.useState(null),
      [vt, Ut] = q.useState(null),
      [at, Et] = q.useState("last_30_days");
    q.useEffect(() => {
      Nt();
    }, []),
      q.useEffect(() => {
        G && (Bt(G), I(G));
      }, [G, at]);
    const Nt = async () => {
        try {
          const C = await fetch("/backend/api/apps.php");
          if (!C.ok) throw new Error("Failed to fetch apps");
          const L = await C.json();
          R(L);
        } catch (C) {
          ft("Failed to load apps"), console.error("Error fetching apps:", C);
        }
      },
      Bt = async (C) => {
        const L = `agent_stats_${C}_${at}`,
          K = _(C, null, L);
        if (K) {
          console.log("✅ Loading agent stats from global cache:", L),
            O(K),
            Q(!1),
            ft(null);
          return;
        }
        Q(!0), ft(null);
        try {
          const mt = `_t=${Date.now()}&_cache_bust=${Math.random()}`,
            _t = await fetch(
              `/backend/api/agent-stats.php?app_name=${encodeURIComponent(
                C
              )}&filter=${at}&${mt}`
            );
          if (!_t.ok) throw new Error("Failed to fetch agent stats");
          const zt = await _t.json();
          zt.message === "no_assignments"
            ? (O([]),
              ft(
                `📊 ${zt.info} You can assign reviews in the Access Review (Tabs) page.`
              ))
            : (O(zt), $(C, zt, null, L));
        } catch (mt) {
          ft("Failed to load agent statistics"),
            console.error("Error fetching agent stats:", mt);
        } finally {
          Q(!1);
        }
      },
      I = async (C) => {
        const L = `country_stats_${C}_${at}`,
          K = _(C, null, L);
        if (K) {
          console.log("✅ Loading country stats from global cache:", L),
            B(K),
            Z(!1),
            Ut(null);
          return;
        }
        Z(!0), Ut(null);
        try {
          const mt = `_t=${Date.now()}&_cache_bust=${Math.random()}`,
            _t = await fetch(
              `/backend/api/country-stats.php?app_name=${encodeURIComponent(
                C
              )}&filter=${at}&${mt}`
            );
          if (!_t.ok) throw new Error("Failed to fetch country stats");
          const zt = await _t.json();
          if (zt.success)
            B(zt.country_stats || []), $(C, zt.country_stats || [], null, L);
          else throw new Error(zt.message || "Failed to fetch country stats");
        } catch (mt) {
          Ut("Failed to load country statistics"),
            console.error("Error fetching country stats:", mt),
            B([]);
        } finally {
          Z(!1);
        }
      },
      Mt = (C) => {
        lt(C), O([]), B([]), ft(null), Ut(null);
      },
      Ot = (C) => {
        if (!C) return "";
        const L = {
          "BetterDocs FAQ": "BetterDocs FAQ",
          StoreFAQ: "StoreFAQ",
          StoreSEO: "StoreSEO",
          EasyFlow: "EasyFlow",
          TrustSync: "TrustSync",
        };
        return L[C]
          ? L[C]
          : C.split(" ")
              .map((K) => K.charAt(0).toUpperCase() + K.slice(1).toLowerCase())
              .join(" ");
      };
    return c.jsxs("div", {
      className: "review-count-page",
      style: {
        background: "white",
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "16px",
      },
      children: [
        c.jsx("style", {
          children: `
          .time-filter-tabs {
            display: flex;
            background: white;
            border-radius: 12px;
            padding: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            flex-wrap: wrap;
            gap: 4px;
          }

          .time-filter-tab {
            flex: 1;
            min-width: 120px;
            padding: 12px 0;
            border: none;
            border-radius: 8px;
            background: transparent;
            color: #666;
            cursor: pointer;
            font-size: 0.9rem;
            font-weight: 600;
            transition: all 0.3s ease;
            text-align: center;
          }

          .time-filter-tab.active {
            background: linear-gradient(135deg, #10B981 0%, #0d9488 100%);
            color: white;
            box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
          }

          .time-filter-tab:hover:not(.active) {
            background: rgba(16, 185, 129, 0.1);
            color: #10B981;
          }

          @media (max-width: 768px) {
            .time-filter-tabs {
              width: 100%;
              padding: 4px;
            }

            .time-filter-tab {
              min-width: 100px;
              padding: 10px 0;
              font-size: 0.85rem;
            }
          }

          @media (max-width: 480px) {
            .time-filter-tab {
              min-width: 80px;
              padding: 8px 0;
              font-size: 0.75rem;
            }
          }
        `,
        }),
        c.jsx("style", {
          children: `
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .stats-grid > div {
            animation: fadeInUp 0.6s ease forwards;
          }

          .stats-grid > div:nth-child(1) { animation-delay: 0.1s; }
          .stats-grid > div:nth-child(2) { animation-delay: 0.2s; }
          .stats-grid > div:nth-child(3) { animation-delay: 0.3s; }
          .stats-grid > div:nth-child(4) { animation-delay: 0.4s; }
          .stats-grid > div:nth-child(5) { animation-delay: 0.5s; }
          .stats-grid > div:nth-child(6) { animation-delay: 0.6s; }

          @media (max-width: 768px) {
            .review-count-page {
              padding: 12px !important;
            }

            .agent-stats-section h3 {
              font-size: 1.1rem !important;
            }

            .stats-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              gap: 12px !important;
            }

            .stat-card {
              padding: 12px !important;
            }

            .stat-value {
              font-size: 1.8rem !important;
            }

            .stat-label {
              font-size: 0.85rem !important;
            }

            .country-stats-section {
              padding: 15px !important;
            }

            .country-stats-section h3 {
              font-size: 1.1rem !important;
            }

            .country-list {
              gap: 10px !important;
            }

            .country-item {
              padding: 10px !important;
              font-size: 0.9rem !important;
            }

            .country-name {
              font-size: 0.9rem !important;
            }

            .country-count {
              font-size: 1.2rem !important;
            }
          }

          @media (max-width: 480px) {
            .review-count-page {
              padding: 8px !important;
            }

            .agent-stats-section {
              padding: 12px !important;
            }

            .agent-stats-section h3 {
              font-size: 1rem !important;
            }

            .stats-grid {
              grid-template-columns: 1fr !important;
              gap: 10px !important;
            }

            .stat-card {
              padding: 10px !important;
            }

            .stat-value {
              font-size: 1.5rem !important;
            }

            .stat-label {
              font-size: 0.8rem !important;
            }

            .country-stats-section {
              padding: 12px !important;
            }

            .country-stats-section h3 {
              font-size: 1rem !important;
            }

            .country-item {
              padding: 8px !important;
              font-size: 0.85rem !important;
            }

            .country-name {
              font-size: 0.85rem !important;
            }

            .country-count {
              font-size: 1.1rem !important;
            }
          }
        `,
        }),
        c.jsx("div", {
          className: "container",
          children: c.jsxs("div", {
            className: "two-section-layout",
            style: {
              display: "grid",
              gridTemplateColumns: "300px 1fr",
              gap: "30px",
            },
            children: [
              c.jsx("style", {
                children: `
              @media (max-width: 1024px) {
                .two-section-layout {
                  grid-template-columns: 250px 1fr !important;
                  gap: 20px !important;
                }
              }

              @media (max-width: 768px) {
                .two-section-layout {
                  grid-template-columns: 1fr !important;
                  gap: 20px !important;
                }

                .app-selection-section {
                  order: 2 !important;
                }

                .agent-stats-section {
                  order: 1 !important;
                }

                .app-list {
                  display: grid !important;
                  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
                  gap: 10px !important;
                }

                .custom-selection-button {
                  padding: 8px 12px !important;
                  font-size: 0.9rem !important;
                }

                .time-filter-tabs {
                  width: 100% !important;
                }

                .time-filter-tab {
                  min-width: 100px !important;
                  padding: 10px 0 !important;
                  font-size: 0.85rem !important;
                }
              }

              @media (max-width: 480px) {
                .two-section-layout {
                  gap: 15px !important;
                }

                .app-selection-section {
                  padding: 15px !important;
                }

                .agent-stats-section {
                  padding: 15px !important;
                }

                .app-list {
                  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)) !important;
                  gap: 8px !important;
                }

                .custom-selection-button {
                  padding: 6px 10px !important;
                  font-size: 0.85rem !important;
                }

                .time-filter-tab {
                  min-width: 80px !important;
                  padding: 8px 0 !important;
                  font-size: 0.75rem !important;
                }

                .stats-grid {
                  grid-template-columns: 1fr !important;
                  gap: 12px !important;
                }

                .stat-card {
                  padding: 12px !important;
                }

                .stat-value {
                  font-size: 1.8rem !important;
                }

                .stat-label {
                  font-size: 0.85rem !important;
                }
              }
            `,
              }),
              c.jsxs("div", {
                className: "app-selection-section",
                style: {
                  background: "white",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  height: "fit-content",
                  border: "1px solid #e5e7eb",
                },
                children: [
                  c.jsxs("div", {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "10px",
                    },
                    children: [
                      c.jsx("div", {
                        style: { fontSize: "2.5rem", marginBottom: "10px" },
                        children: "🎯",
                      }),
                      c.jsxs("div", {
                        children: [
                          c.jsx("h3", {
                            style: {
                              fontSize: "1.5rem",
                              fontWeight: "bold",
                              color: "#333",
                              marginBottom: "8px",
                            },
                            children: "Appwise Reviews",
                          }),
                          c.jsx("p", {
                            style: {
                              fontSize: "0.9rem",
                              color: "#666",
                              margin: "0",
                            },
                            children: "Choose an app to view agent statistics",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    style: { marginBottom: "25px", marginTop: "25px" },
                    children: c.jsxs("div", {
                      className: "time-filter-tabs",
                      children: [
                        c.jsx("button", {
                          className: `time-filter-tab ${
                            at === "last_30_days" ? "active" : ""
                          }`,
                          onClick: () => Et("last_30_days"),
                          children: "📊 Last 30 Days",
                        }),
                        c.jsx("button", {
                          className: `time-filter-tab ${
                            at === "all_time" ? "active" : ""
                          }`,
                          onClick: () => Et("all_time"),
                          children: "🏆 All Time",
                        }),
                      ],
                    }),
                  }),
                  c.jsx("div", {
                    className: "app-list",
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    },
                    children: m.map((C, L) => {
                      const K = G === C,
                        mt = [
                          "linear-gradient(135deg, #10B981 0%, #0d9488 100%)",
                          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                          "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                          "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                          "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                          "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                        ];
                      return c.jsxs(
                        "button",
                        {
                          className: "custom-selection-button",
                          onClick: () => Mt(C),
                          style: {
                            width: "100%",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "12px",
                            background: K
                              ? mt[L % mt.length]
                              : "rgba(255,255,255,0.98)",
                            color: K ? "white" : "#1a202c",
                            cursor: "pointer",
                            textAlign: "left",
                            fontSize: "1rem",
                            fontWeight: K ? "600" : "500",
                            transition: "all 0.3s ease",
                            position: "relative",
                            overflow: "hidden",
                            boxShadow: K
                              ? "0 8px 25px rgba(0,0,0,0.15)"
                              : "0 2px 8px rgba(0,0,0,0.08)",
                            transform: K ? "translateY(-2px)" : "translateY(0)",
                            outline: "none !important",
                          },
                          onFocus: (_t) => {
                            _t.target.style.outline = "none";
                          },
                          onBlur: (_t) => {
                            _t.target.style.outline = "none";
                          },
                          children: [
                            K &&
                              c.jsx("div", {
                                style: {
                                  position: "absolute",
                                  top: "-50%",
                                  right: "-50%",
                                  width: "200%",
                                  height: "200%",
                                  background:
                                    "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                                  pointerEvents: "none",
                                },
                              }),
                            c.jsxs("div", {
                              style: {
                                position: "relative",
                                zIndex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                              },
                              children: [
                                c.jsx("span", { children: Ot(C) }),
                                K &&
                                  c.jsx("span", {
                                    style: { fontSize: "1.2rem" },
                                    children: "✓",
                                  }),
                              ],
                            }),
                          ],
                        },
                        C
                      );
                    }),
                  }),
                  c.jsx("div", {
                    style: {
                      marginTop: "25px",
                      padding: "15px",
                      background: "rgba(102, 126, 234, 0.1)",
                      borderRadius: "12px",
                      textAlign: "center",
                    },
                    children: c.jsxs("div", {
                      style: { fontSize: "0.85rem", color: "#666" },
                      children: [
                        "📈 ",
                        m.length,
                        " applications available for analysis",
                      ],
                    }),
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "agent-stats-section",
                style: {
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "20px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  border: "1px solid #e5e7eb",
                },
                children: [
                  c.jsxs("h3", {
                    style: {
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "20px",
                      borderBottom: "2px solid #28a745",
                      paddingBottom: "10px",
                    },
                    children: [
                      "Support Agent Statistics",
                      G &&
                        c.jsxs("span", {
                          style: {
                            fontSize: "1rem",
                            fontWeight: "normal",
                            color: "#666",
                          },
                          children: [
                            " ",
                            "for ",
                            Ot(G),
                            " (",
                            at === "last_30_days" ? "Last 30 Days" : "All Time",
                            ")",
                          ],
                        }),
                    ],
                  }),
                  !G &&
                    !D &&
                    !V &&
                    c.jsxs("div", {
                      style: {
                        textAlign: "center",
                        padding: "60px 40px",
                        background:
                          "linear-gradient(135deg, #10B981 0%, #0d9488 100%)",
                        borderRadius: "16px",
                        color: "white",
                      },
                      children: [
                        c.jsx("div", {
                          style: { fontSize: "4rem", marginBottom: "20px" },
                          children: "🎯",
                        }),
                        c.jsx("div", {
                          style: {
                            fontSize: "1.4rem",
                            fontWeight: "600",
                            marginBottom: "10px",
                          },
                          children: "Choose an app to analyze",
                        }),
                        c.jsx("div", {
                          style: {
                            fontSize: "1.1rem",
                            color: "rgba(255,255,255,0.9)",
                            maxWidth: "400px",
                            margin: "0 auto",
                          },
                          children:
                            "Select an application from the left panel to view support agent statistics and performance metrics.",
                        }),
                      ],
                    }),
                  D &&
                    c.jsxs("div", {
                      style: {
                        textAlign: "center",
                        padding: "60px 40px",
                        background:
                          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                        borderRadius: "16px",
                        color: "white",
                      },
                      children: [
                        c.jsx("div", {
                          style: {
                            fontSize: "4rem",
                            marginBottom: "20px",
                            animation: "pulse 2s infinite",
                          },
                          children: "⏳",
                        }),
                        c.jsx("div", {
                          style: { fontSize: "1.3rem", fontWeight: "500" },
                          children: "Loading agent statistics...",
                        }),
                        c.jsxs("div", {
                          style: {
                            fontSize: "1rem",
                            marginTop: "10px",
                            color: "rgba(255,255,255,0.8)",
                          },
                          children: ["Analyzing performance data for ", Ot(G)],
                        }),
                      ],
                    }),
                  V &&
                    c.jsxs("div", {
                      style: {
                        background:
                          "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
                        color: "white",
                        padding: "24px",
                        borderRadius: "16px",
                        textAlign: "center",
                        boxShadow: "0 8px 32px rgba(255,107,107,0.3)",
                      },
                      children: [
                        c.jsx("div", {
                          style: { fontSize: "3rem", marginBottom: "15px" },
                          children: "⚠️",
                        }),
                        c.jsx("div", {
                          style: {
                            fontSize: "1.2rem",
                            fontWeight: "600",
                            marginBottom: "8px",
                          },
                          children: "Oops! Something went wrong",
                        }),
                        c.jsx("div", {
                          style: {
                            fontSize: "1rem",
                            color: "rgba(255,255,255,0.9)",
                          },
                          children: V,
                        }),
                      ],
                    }),
                  !D &&
                    !V &&
                    et.length === 0 &&
                    G &&
                    c.jsxs("div", {
                      style: {
                        textAlign: "center",
                        padding: "60px 40px",
                        background:
                          "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                        borderRadius: "16px",
                        color: "white",
                      },
                      children: [
                        c.jsx("div", {
                          style: { fontSize: "4rem", marginBottom: "20px" },
                          children: "📊",
                        }),
                        c.jsx("div", {
                          style: {
                            fontSize: "1.4rem",
                            fontWeight: "600",
                            marginBottom: "10px",
                          },
                          children: "No Data Available",
                        }),
                        c.jsxs("div", {
                          style: {
                            fontSize: "1.1rem",
                            color: "rgba(255,255,255,0.9)",
                            maxWidth: "400px",
                            margin: "0 auto",
                          },
                          children: [
                            "No review data found for ",
                            c.jsx("strong", { children: Ot(G) }),
                            " in the last 30 days. Try selecting a different app or check back later.",
                          ],
                        }),
                      ],
                    }),
                  !D &&
                    !V &&
                    et.length > 0 &&
                    c.jsxs(c.Fragment, {
                      children: [
                        c.jsxs("div", {
                          style: {
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "15px",
                            marginBottom: "30px",
                          },
                          children: [
                            c.jsxs("div", {
                              style: {
                                background:
                                  "linear-gradient(135deg, #10B981 0%, #0d9488 100%)",
                                padding: "20px",
                                borderRadius: "12px",
                                color: "white",
                                textAlign: "center",
                              },
                              children: [
                                c.jsx("div", {
                                  style: {
                                    fontSize: "2rem",
                                    fontWeight: "bold",
                                  },
                                  children: et.length,
                                }),
                                c.jsx("div", {
                                  style: { fontSize: "0.9rem", opacity: 0.9 },
                                  children:
                                    at === "all_time"
                                      ? "Total Agents"
                                      : "Active Agents",
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              style: {
                                background:
                                  "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                padding: "20px",
                                borderRadius: "12px",
                                color: "white",
                                textAlign: "center",
                              },
                              children: [
                                c.jsx("div", {
                                  style: {
                                    fontSize: "2rem",
                                    fontWeight: "bold",
                                  },
                                  children: et.reduce(
                                    (C, L) => C + L.review_count,
                                    0
                                  ),
                                }),
                                c.jsx("div", {
                                  style: { fontSize: "0.9rem", opacity: 0.9 },
                                  children:
                                    at === "all_time"
                                      ? "All-Time Reviews"
                                      : "Recent Reviews",
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              style: {
                                background:
                                  "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                                padding: "20px",
                                borderRadius: "12px",
                                color: "white",
                                textAlign: "center",
                              },
                              children: [
                                c.jsx("div", {
                                  style: {
                                    fontSize: "2rem",
                                    fontWeight: "bold",
                                  },
                                  children: Math.round(
                                    et.reduce((C, L) => C + L.review_count, 0) /
                                      et.length
                                  ),
                                }),
                                c.jsx("div", {
                                  style: { fontSize: "0.9rem", opacity: 0.9 },
                                  children: "Avg per Agent",
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx("div", {
                          className: "stats-grid",
                          style: {
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "12px",
                            marginTop: "20px",
                          },
                          children: et
                            .sort((C, L) => L.review_count - C.review_count)
                            .map((C, L) => {
                              const K = L === 0 && C.review_count > 0;
                              return (
                                L < 3 && C.review_count >= 5,
                                c.jsxs(
                                  "div",
                                  {
                                    style: {
                                      background: "white",
                                      borderRadius: "8px",
                                      padding: "16px",
                                      color: "#333",
                                      border: K
                                        ? "2px solid #10B981"
                                        : "1px solid #e0e0e0",
                                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                      transition: "all 0.2s ease",
                                      position: "relative",
                                    },
                                    children: [
                                      K &&
                                        c.jsx("div", {
                                          style: {
                                            position: "absolute",
                                            top: "-18px",
                                            right: "8px",
                                            background: "white",
                                            border: "2px solid #10B981",
                                            color: "white",
                                            padding: "2px 6px",
                                            borderRadius: "4px",
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                          },
                                          children: "👑",
                                        }),
                                      c.jsxs("div", {
                                        style: {
                                          fontSize: "1.1rem",
                                          fontWeight: "500",
                                          margin: "0 0 8px 0",
                                          color: "#333",
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "8px",
                                        },
                                        children: [
                                          c.jsx("span", {
                                            children: C.agent_name,
                                          }),
                                          at === "all_time" &&
                                            c.jsx("span", {
                                              style: {
                                                fontSize: "0.7rem",
                                                background: "#10B981",
                                                color: "white",
                                                padding: "2px 6px",
                                                borderRadius: "10px",
                                                fontWeight: "bold",
                                              },
                                              children: "ALL TIME",
                                            }),
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        style: {
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "8px",
                                          color: "#666",
                                        },
                                        children: [
                                          c.jsx("div", {
                                            style: {
                                              fontSize: "1.5rem",
                                              fontWeight: "bold",
                                              color: "#333",
                                            },
                                            children: C.review_count,
                                          }),
                                          c.jsx("div", {
                                            style: {
                                              fontSize: "0.9rem",
                                              color: "#666",
                                            },
                                            children: "reviews",
                                          }),
                                        ],
                                      }),
                                      c.jsx("div", {
                                        style: {
                                          marginTop: "12px",
                                          height: "3px",
                                          background: "#f0f0f0",
                                          borderRadius: "2px",
                                          overflow: "hidden",
                                        },
                                        children: c.jsx("div", {
                                          style: {
                                            height: "100%",
                                            background: K
                                              ? "#10B981"
                                              : "#14b8a6",
                                            borderRadius: "2px",
                                            width: `${Math.min(
                                              (C.review_count /
                                                Math.max(
                                                  ...et.map(
                                                    (mt) => mt.review_count
                                                  )
                                                )) *
                                                100,
                                              100
                                            )}%`,
                                            transition: "width 0.3s ease",
                                          },
                                        }),
                                      }),
                                    ],
                                  },
                                  L
                                )
                              );
                            }),
                        }),
                      ],
                    }),
                  G &&
                    c.jsxs("div", {
                      style: {
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(10px)",
                        borderRadius: "20px",
                        padding: "30px",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        marginTop: "30px",
                      },
                      children: [
                        c.jsxs("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "30px",
                            marginTop: "0",
                          },
                          children: [
                            c.jsx("div", {
                              style: { fontSize: "2.5rem" },
                              children: "🌍",
                            }),
                            c.jsxs("div", {
                              children: [
                                c.jsx("h3", {
                                  style: {
                                    fontSize: "1.8rem",
                                    fontWeight: "bold",
                                    color: "#333",
                                    marginBottom: "8px",
                                    marginTop: "0",
                                  },
                                  children: "Country-wise Review Count",
                                }),
                                c.jsxs("p", {
                                  style: {
                                    fontSize: "1rem",
                                    color: "#666",
                                    margin: "0",
                                  },
                                  children: [
                                    "Review distribution by country for ",
                                    Ot(G),
                                    " (",
                                    at === "last_30_days"
                                      ? "Last 30 Days"
                                      : "All Time",
                                    ")",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        ot &&
                          c.jsxs("div", {
                            style: {
                              textAlign: "center",
                              padding: "60px 40px",
                              background:
                                "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                              borderRadius: "16px",
                              color: "white",
                            },
                            children: [
                              c.jsx("div", {
                                style: {
                                  fontSize: "4rem",
                                  marginBottom: "20px",
                                  animation: "pulse 2s infinite",
                                },
                                children: "🌍",
                              }),
                              c.jsx("div", {
                                style: {
                                  fontSize: "1.3rem",
                                  fontWeight: "500",
                                },
                                children: "Loading country statistics...",
                              }),
                              c.jsx("div", {
                                style: {
                                  fontSize: "1rem",
                                  marginTop: "10px",
                                  color: "rgba(255,255,255,0.8)",
                                },
                                children:
                                  "Analyzing global review distribution",
                              }),
                            ],
                          }),
                        vt &&
                          c.jsxs("div", {
                            style: {
                              background:
                                "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
                              color: "white",
                              padding: "24px",
                              borderRadius: "16px",
                              textAlign: "center",
                              boxShadow: "0 8px 32px rgba(255,107,107,0.3)",
                            },
                            children: [
                              c.jsx("div", {
                                style: {
                                  fontSize: "3rem",
                                  marginBottom: "15px",
                                },
                                children: "⚠️",
                              }),
                              c.jsx("div", {
                                style: {
                                  fontSize: "1.2rem",
                                  fontWeight: "600",
                                  marginBottom: "8px",
                                },
                                children: "Oops! Something went wrong",
                              }),
                              c.jsx("div", {
                                style: {
                                  fontSize: "1rem",
                                  color: "rgba(255,255,255,0.9)",
                                },
                                children: vt,
                              }),
                            ],
                          }),
                        !ot &&
                          !vt &&
                          y.length === 0 &&
                          c.jsxs("div", {
                            style: {
                              textAlign: "center",
                              padding: "60px 40px",
                              background:
                                "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                              borderRadius: "16px",
                              color: "white",
                            },
                            children: [
                              c.jsx("div", {
                                style: {
                                  fontSize: "4rem",
                                  marginBottom: "20px",
                                },
                                children: "🌐",
                              }),
                              c.jsx("div", {
                                style: {
                                  fontSize: "1.4rem",
                                  fontWeight: "600",
                                  marginBottom: "10px",
                                },
                                children: "No Country Data Available",
                              }),
                              c.jsxs("div", {
                                style: {
                                  fontSize: "1.1rem",
                                  color: "rgba(255,255,255,0.9)",
                                  maxWidth: "400px",
                                  margin: "0 auto",
                                },
                                children: [
                                  "No country-specific review data found for ",
                                  c.jsx("strong", { children: Ot(G) }),
                                  " ",
                                  at === "last_30_days"
                                    ? "in the last 30 days"
                                    : "in all time",
                                  ".",
                                ],
                              }),
                            ],
                          }),
                        !ot &&
                          !vt &&
                          y.length > 0 &&
                          c.jsxs(c.Fragment, {
                            children: [
                              c.jsxs("div", {
                                style: {
                                  display: "grid",
                                  gridTemplateColumns:
                                    "repeat(auto-fit, minmax(200px, 1fr))",
                                  gap: "15px",
                                  marginBottom: "30px",
                                },
                                children: [
                                  c.jsxs("div", {
                                    style: {
                                      background:
                                        "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                                      padding: "20px",
                                      borderRadius: "12px",
                                      color: "white",
                                      textAlign: "center",
                                    },
                                    children: [
                                      c.jsx("div", {
                                        style: {
                                          fontSize: "2rem",
                                          fontWeight: "bold",
                                        },
                                        children: y.length,
                                      }),
                                      c.jsx("div", {
                                        style: {
                                          fontSize: "0.9rem",
                                          opacity: 0.9,
                                        },
                                        children: "Countries",
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    style: {
                                      background:
                                        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                      padding: "20px",
                                      borderRadius: "12px",
                                      color: "white",
                                      textAlign: "center",
                                    },
                                    children: [
                                      c.jsx("div", {
                                        style: {
                                          fontSize: "2rem",
                                          fontWeight: "bold",
                                        },
                                        children: y.reduce(
                                          (C, L) => C + L.review_count,
                                          0
                                        ),
                                      }),
                                      c.jsx("div", {
                                        style: {
                                          fontSize: "0.9rem",
                                          opacity: 0.9,
                                        },
                                        children: "Total Reviews",
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    style: {
                                      background:
                                        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                                      padding: "20px",
                                      borderRadius: "12px",
                                      color: "white",
                                      textAlign: "center",
                                    },
                                    children: [
                                      c.jsx("div", {
                                        style: {
                                          fontSize: "2rem",
                                          fontWeight: "bold",
                                        },
                                        children:
                                          y.length > 0
                                            ? Math.round(
                                                y.reduce(
                                                  (C, L) => C + L.review_count,
                                                  0
                                                ) / y.length
                                              )
                                            : 0,
                                      }),
                                      c.jsx("div", {
                                        style: {
                                          fontSize: "0.9rem",
                                          opacity: 0.9,
                                        },
                                        children: "Avg per Country",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsx("div", {
                                className: "country-stats-grid",
                                style: {
                                  display: "grid",
                                  gridTemplateColumns:
                                    "repeat(auto-fit, minmax(300px, 1fr))",
                                  gap: "20px",
                                  marginTop: "20px",
                                },
                                children: y
                                  .sort(
                                    (C, L) => L.review_count - C.review_count
                                  )
                                  .map((C, L) => {
                                    const K = L === 0 && C.review_count > 0,
                                      mt = L < 3 && C.review_count >= 3,
                                      _t = [
                                        "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                                        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                                        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                                        "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                                        "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                                        "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                                      ];
                                    return c.jsxs(
                                      "div",
                                      {
                                        style: {
                                          background: K
                                            ? "linear-gradient(135deg, #28a745 0%, #20c997 100%)"
                                            : mt
                                            ? _t[L % _t.length]
                                            : "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                                          borderRadius: "16px",
                                          padding: "24px",
                                          color: "white",
                                          position: "relative",
                                          overflow: "hidden",
                                          cursor: "pointer",
                                          transition: "all 0.3s ease",
                                          boxShadow:
                                            "0 8px 32px rgba(0,0,0,0.1)",
                                          border:
                                            "1px solid rgba(255,255,255,0.2)",
                                        },
                                        children: [
                                          c.jsx("div", {
                                            style: {
                                              position: "absolute",
                                              top: "-50%",
                                              right: "-50%",
                                              width: "200%",
                                              height: "200%",
                                              background:
                                                "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                                              pointerEvents: "none",
                                            },
                                          }),
                                          K &&
                                            c.jsx("div", {
                                              style: {
                                                position: "absolute",
                                                top: "16px",
                                                right: "16px",
                                                background:
                                                  "rgba(255,215,0,0.9)",
                                                color: "#333",
                                                padding: "4px 8px",
                                                borderRadius: "12px",
                                                fontSize: "0.75rem",
                                                fontWeight: "bold",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "4px",
                                              },
                                              children: "👑 #1",
                                            }),
                                          mt &&
                                            !K &&
                                            c.jsxs("div", {
                                              style: {
                                                position: "absolute",
                                                top: "16px",
                                                right: "16px",
                                                background:
                                                  "rgba(255,255,255,0.2)",
                                                color: "white",
                                                padding: "4px 8px",
                                                borderRadius: "12px",
                                                fontSize: "0.75rem",
                                                fontWeight: "bold",
                                              },
                                              children: ["⭐ Top ", L + 1],
                                            }),
                                          c.jsx("h4", {
                                            style: {
                                              fontSize: "1.3rem",
                                              fontWeight: "600",
                                              margin: "0 0 8px 0",
                                              color: "white",
                                              textShadow:
                                                "0 2px 4px rgba(0,0,0,0.3)",
                                            },
                                            children: Y(C.country_name),
                                          }),
                                          c.jsxs("div", {
                                            style: {
                                              display: "flex",
                                              alignItems: "center",
                                              gap: "8px",
                                              marginBottom: "12px",
                                            },
                                            children: [
                                              c.jsx("div", {
                                                style: {
                                                  fontSize: "2.5rem",
                                                  fontWeight: "bold",
                                                  color: "white",
                                                  textShadow:
                                                    "0 2px 4px rgba(0,0,0,0.3)",
                                                },
                                                children: C.review_count,
                                              }),
                                              c.jsxs("div", {
                                                style: {
                                                  fontSize: "1rem",
                                                  color:
                                                    "rgba(255,255,255,0.9)",
                                                  fontWeight: "500",
                                                },
                                                children: [
                                                  "reviews",
                                                  c.jsx("br", {}),
                                                  c.jsxs("span", {
                                                    style: {
                                                      fontSize: "0.9rem",
                                                    },
                                                    children: [
                                                      "(",
                                                      C.percentage,
                                                      "%)",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          c.jsxs("div", {
                                            style: {
                                              display: "flex",
                                              alignItems: "center",
                                              gap: "8px",
                                              fontSize: "0.9rem",
                                              color: "rgba(255,255,255,0.8)",
                                            },
                                            children: [
                                              c.jsx("span", { children: "📊" }),
                                              c.jsx("span", {
                                                children:
                                                  C.percentage >= 20
                                                    ? "Major Market"
                                                    : C.percentage >= 10
                                                    ? "Significant Market"
                                                    : C.percentage >= 5
                                                    ? "Growing Market"
                                                    : "Emerging Market",
                                              }),
                                            ],
                                          }),
                                          c.jsx("div", {
                                            style: {
                                              marginTop: "16px",
                                              height: "4px",
                                              background:
                                                "rgba(255,255,255,0.2)",
                                              borderRadius: "2px",
                                              overflow: "hidden",
                                            },
                                            children: c.jsx("div", {
                                              style: {
                                                height: "100%",
                                                background:
                                                  "rgba(255,255,255,0.8)",
                                                borderRadius: "2px",
                                                width: `${Math.min(
                                                  (C.review_count /
                                                    Math.max(
                                                      ...y.map(
                                                        (zt) => zt.review_count
                                                      )
                                                    )) *
                                                    100,
                                                  100
                                                )}%`,
                                                transition: "width 0.3s ease",
                                              },
                                            }),
                                          }),
                                        ],
                                      },
                                      C.country_name
                                    );
                                  }),
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  os = () => {
    const [_, $] = q.useState("last_30_days"),
      [Y, m] = q.useState([]),
      [R, G] = q.useState(null),
      [lt, et] = q.useState(null),
      [O, y] = q.useState(!1),
      [B, D] = q.useState(null),
      Q = async () => {
        console.log("Fetching all agents with filter:", _), y(!0), D(null);
        try {
          const V = `_t=${Date.now()}&_cache_bust=${Math.random()}`,
            ft = await fetch(
              `/backend/api/agent-review-stats.php?filter=${_}&${V}`
            );
          if (!ft.ok) throw new Error("Failed to fetch agents");
          const vt = await ft.json();
          console.log("Agents loaded:", vt),
            vt.message === "no_agents"
              ? (m([]),
                D(
                  "No agents have been assigned reviews yet. You can assign reviews in the Access Review page."
                ))
              : m(vt);
        } catch (V) {
          console.error("Error fetching agents:", V),
            D("Failed to load agent statistics"),
            m([]);
        } finally {
          y(!1);
        }
      },
      ot = async (V) => {
        console.log("Fetching details for agent:", V), y(!0);
        try {
          const ft = `_t=${Date.now()}&_cache_bust=${Math.random()}`,
            vt = await fetch(
              `/backend/api/agent-review-stats.php?agent_name=${encodeURIComponent(
                V
              )}&filter=${_}&${ft}`
            );
          if (!vt.ok) throw new Error("Failed to fetch agent details");
          const Ut = await vt.json();
          console.log("Agent details loaded:", Ut), et(Ut);
        } catch (ft) {
          console.error("Error fetching agent details:", ft),
            D("Failed to load agent details");
        } finally {
          y(!1);
        }
      };
    q.useEffect(() => {
      console.log("Component mounted, fetching agents..."), Q();
    }, []),
      q.useEffect(() => {
        console.log("Time filter changed:", _), Q(), R && ot(R);
      }, [_]);
    const Z = (V) => {
      console.log("Agent selected:", V), G(V), ot(V);
    };
    return c.jsxs("div", {
      style: {
        maxWidth: "1400px",
        width: "100%",
        background: "#f8f9fa",
        padding: "20px",
        margin: "0 auto",
        borderRadius: "16px",
        boxSizing: "border-box",
      },
      children: [
        c.jsx("style", {
          children: `
          @media (max-width: 768px) {
            .agent-reviews-container {
              padding: 12px !important;
            }

            .agent-reviews-header {
              flex-direction: column !important;
              gap: 15px !important;
              text-align: center !important;
            }

            .agent-reviews-title h1 {
              font-size: 24px !important;
            }

            .agent-reviews-title p {
              font-size: 13px !important;
            }

            .agent-selector-container {
              flex-direction: column !important;
              width: 100% !important;
              gap: 15px !important;
              justify-content: center !important;
            }

            .agent-selector-label {
              width: 100% !important;
              justify-content: center !important;
            }

            .agent-selector-dropdown {
              width: 100% !important;
              min-width: auto !important;
            }

            .time-filter-tabs {
              width: 100% !important;
              flex-wrap: wrap !important;
            }

            .time-filter-button {
              flex: 1 !important;
              min-width: 120px !important;
              padding: 10px 12px !important;
              font-size: 13px !important;
            }

            .stats-grid {
              grid-template-columns: 1fr !important;
            }

            .stat-card {
              padding: 16px !important;
            }

            .stat-value {
              font-size: 24px !important;
            }

            .stat-content h3 {
              font-size: 12px !important;
            }

            .reviews-by-app-grid {
              grid-template-columns: 1fr !important;
            }

            .app-review-card {
              padding: 12px !important;
            }

            .app-review-card .app-name {
              font-size: 14px !important;
            }

            .app-review-count {
              font-size: 1.3rem !important;
            }
          }

          @media (max-width: 480px) {
            .agent-reviews-container {
              padding: 8px !important;
            }

            .agent-reviews-header {
              padding: 20px 12px !important;
            }

            .agent-reviews-title h1 {
              font-size: 20px !important;
            }

            .agent-reviews-title p {
              font-size: 12px !important;
            }

            .agent-selector-label {
              font-size: 14px !important;
            }

            .agent-selector-dropdown {
              padding: 10px 12px !important;
              font-size: 13px !important;
            }

            .time-filter-button {
              padding: 8px 10px !important;
              font-size: 12px !important;
            }

            .stat-card {
              padding: 12px !important;
              gap: 10px !important;
            }

            .stat-icon {
              width: 45px !important;
              height: 45px !important;
              font-size: 20px !important;
            }

            .stat-value {
              font-size: 20px !important;
            }

            .stat-content h3 {
              font-size: 11px !important;
            }

            .stat-label {
              font-size: 10px !important;
            }

            .app-review-card {
              padding: 10px !important;
            }

            .app-name {
              font-size: 13px !important;
            }

            .app-review-count {
              font-size: 1.2rem !important;
            }
          }
        `,
        }),
        c.jsx("div", {
          className: "agent-reviews-header",
          style: {
            background: "linear-gradient(135deg, #10B981 0%, #0d9488 100%)",
            color: "white",
            padding: "40px 20px",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          },
          children: c.jsxs("div", {
            className: "agent-reviews-title",
            style: { flex: 1, minWidth: "200px" },
            children: [
              c.jsx("h1", {
                style: { margin: "0 0 10px 0", fontSize: "2.5rem" },
                children: "👥 Agent Reviews Dashboard",
              }),
              c.jsx("p", {
                style: { margin: "0", fontSize: "1.1rem", opacity: 0.95 },
                children: "Track individual agent performance across all apps",
              }),
            ],
          }),
        }),
        c.jsxs("div", {
          style: { padding: "40px 0px", maxWidth: "1200px", margin: "0 auto" },
          children: [
            B &&
              c.jsx("div", {
                style: {
                  background: "#fee",
                  padding: "16px",
                  margin: "0 0 30px 0",
                  borderRadius: "8px",
                  fontSize: "14px",
                  color: "#c33",
                  border: "1px solid #fcc",
                },
                children: c.jsx("p", { style: { margin: "0" }, children: B }),
              }),
            c.jsxs("div", {
              className: "agent-selector-container",
              style: {
                marginBottom: "30px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                flexWrap: "wrap",
              },
              children: [
                c.jsxs("div", {
                  className: "agent-selector-label",
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "5px 0",
                  },
                  children: [
                    c.jsx("label", {
                      style: {
                        color: "#333",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        whiteSpace: "nowrap",
                      },
                      children: "👥 Select Agent:",
                    }),
                    c.jsxs("select", {
                      className: "agent-selector-dropdown",
                      value: R || "",
                      onChange: (V) => {
                        const ft = V.target.value;
                        console.log("Agent selected:", ft),
                          ft ? Z(ft) : (G(null), et(null));
                      },
                      style: {
                        padding: "10px 14px",
                        borderRadius: "8px",
                        border: "2px solid #e5e7eb",
                        fontSize: "0.95rem",
                        minWidth: "200px",
                        background: "white",
                        color: "#333",
                        cursor: "pointer",
                      },
                      children: [
                        c.jsx("option", {
                          value: "",
                          children: "Choose an agent to analyze",
                        }),
                        Y.map((V) =>
                          c.jsx(
                            "option",
                            { value: V.agent_name, children: V.agent_name },
                            V.agent_name
                          )
                        ),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "time-filter-tabs",
                  style: {
                    display: "inline-flex",
                    background: "#e5e7eb",
                    borderRadius: "10px",
                    padding: "5px",
                    gap: "5px",
                  },
                  children: [
                    c.jsx("button", {
                      className: "time-filter-button",
                      onClick: () => {
                        console.log("Filter changed to: last_30_days"),
                          $("last_30_days");
                      },
                      style: {
                        padding: "10px 20px",
                        background:
                          _ === "last_30_days" ? "#10B981" : "transparent",
                        color: _ === "last_30_days" ? "white" : "#666",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        transition: "all 0.3s ease",
                        fontSize: "0.95rem",
                        whiteSpace: "nowrap",
                      },
                      children: "📊 Last 30 Days",
                    }),
                    c.jsx("button", {
                      className: "time-filter-button",
                      onClick: () => {
                        console.log("Filter changed to: all_time"),
                          $("all_time");
                      },
                      style: {
                        padding: "10px 20px",
                        background:
                          _ === "all_time" ? "#10B981" : "transparent",
                        color: _ === "all_time" ? "white" : "#666",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        transition: "all 0.3s ease",
                        fontSize: "0.95rem",
                        whiteSpace: "nowrap",
                      },
                      children: "🏆 All Time",
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", {
              style: {
                background: "white",
                borderRadius: "15px",
                padding: "40px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                minHeight: "400px",
              },
              children: O
                ? c.jsxs("div", {
                    style: { textAlign: "center", padding: "60px 20px" },
                    children: [
                      c.jsx("div", {
                        style: { fontSize: "3rem", marginBottom: "20px" },
                        children: "⏳",
                      }),
                      c.jsx("h2", {
                        style: { color: "#333" },
                        children: "Loading Agent Statistics...",
                      }),
                    ],
                  })
                : B && Y.length === 0
                ? c.jsxs("div", {
                    style: { textAlign: "center", padding: "60px 20px" },
                    children: [
                      c.jsx("div", {
                        style: { fontSize: "3rem", marginBottom: "20px" },
                        children: "⚠️",
                      }),
                      c.jsx("h2", {
                        style: { color: "#333", marginBottom: "15px" },
                        children: "No Data Available",
                      }),
                      c.jsx("p", {
                        style: { fontSize: "16px", color: "#666" },
                        children: B,
                      }),
                    ],
                  })
                : R
                ? R && lt
                  ? c.jsxs(c.Fragment, {
                      children: [
                        c.jsxs("h2", {
                          style: {
                            margin: "0 0 30px 0",
                            color: "#333",
                            textAlign: "center",
                          },
                          children: [
                            "📋 ",
                            lt.agent_name,
                            c.jsx("br", {}),
                            c.jsxs("span", {
                              style: {
                                fontSize: "1.1rem",
                                fontWeight: "normal",
                                color: "#666",
                              },
                              children: [
                                _ === "last_30_days"
                                  ? "Last 30 Days"
                                  : "All Time",
                                " Statistics",
                              ],
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "stats-grid",
                          style: {
                            display: "grid",
                            gridTemplateColumns:
                              "repeat(auto-fit, minmax(160px, 1fr))",
                            gap: "12px",
                            marginBottom: "30px",
                          },
                          children: [
                            c.jsx("div", {
                              className: "stat-card",
                              style: {
                                background: "white",
                                borderRadius: "8px",
                                paddingTop: "12px",
                                paddingRight: "12px",
                                paddingBottom: "12px",
                                paddingLeft: "6px",
                                border: "1px solid #e5e7eb",
                                borderLeft: "4px solid #10B981",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                textAlign: "left",
                              },
                              children: c.jsxs("div", {
                                style: { paddingLeft: "10px" },
                                children: [
                                  c.jsx("div", {
                                    style: {
                                      fontSize: "0.7rem",
                                      color: "#999",
                                      marginBottom: "8px",
                                      fontWeight: "600",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.5px",
                                    },
                                    children: "Total Reviews",
                                  }),
                                  c.jsx("div", {
                                    className: "stat-value",
                                    style: {
                                      fontSize: "2rem",
                                      fontWeight: "bold",
                                      color: "#333",
                                      lineHeight: "1",
                                    },
                                    children: lt.total_reviews,
                                  }),
                                ],
                              }),
                            }),
                            c.jsx("div", {
                              className: "stat-card",
                              style: {
                                background: "white",
                                borderRadius: "8px",
                                paddingTop: "12px",
                                paddingRight: "12px",
                                paddingBottom: "12px",
                                paddingLeft: "6px",
                                border: "1px solid #e5e7eb",
                                borderLeft: "4px solid #10B981",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                textAlign: "left",
                              },
                              children: c.jsxs("div", {
                                style: { paddingLeft: "10px" },
                                children: [
                                  c.jsx("div", {
                                    style: {
                                      fontSize: "0.7rem",
                                      color: "#999",
                                      marginBottom: "8px",
                                      fontWeight: "600",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.5px",
                                    },
                                    children: "Apps Covered",
                                  }),
                                  c.jsx("div", {
                                    className: "stat-value",
                                    style: {
                                      fontSize: "2rem",
                                      fontWeight: "bold",
                                      color: "#333",
                                      lineHeight: "1",
                                    },
                                    children: lt.by_app.length,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          style: {
                            background: "#f8f9fa",
                            borderRadius: "12px",
                            padding: "20px",
                          },
                          children: [
                            c.jsx("h3", {
                              style: { margin: "0 0 15px 0", color: "#333" },
                              children: "Reviews by App",
                            }),
                            c.jsx("div", {
                              className: "reviews-by-app-grid",
                              style: {
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(auto-fit, minmax(250px, 1fr))",
                                gap: "15px",
                              },
                              children: lt.by_app.map((V, ft) =>
                                c.jsxs(
                                  "div",
                                  {
                                    className: "app-review-card",
                                    style: {
                                      background: "white",
                                      borderRadius: "8px",
                                      overflow: "hidden",
                                      border: "1px solid #e5e7eb",
                                      padding: "10px",
                                    },
                                    children: [
                                      c.jsx("div", {
                                        className: "app-name",
                                        style: {
                                          background: "#d1fae5",
                                          padding: "10px 15px",
                                          fontWeight: "bold",
                                          color: "#065f46",
                                          fontSize: "0.95rem",
                                          display: "inline-block",
                                          width: "auto",
                                        },
                                        children: V.app_name,
                                      }),
                                      c.jsx("div", {
                                        style: { padding: "15px" },
                                        children: c.jsxs("div", {
                                          className: "app-review-count",
                                          style: {
                                            fontSize: "1.5rem",
                                            fontWeight: "bold",
                                            color: "#10B981",
                                          },
                                          children: [
                                            V.review_count,
                                            " ",
                                            V.review_count === 1
                                              ? "review"
                                              : "reviews",
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  ft
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    })
                  : null
                : c.jsxs("div", {
                    style: { textAlign: "center", padding: "60px 20px" },
                    children: [
                      c.jsx("div", {
                        style: { fontSize: "4rem", marginBottom: "20px" },
                        children: "👥",
                      }),
                      c.jsx("h2", {
                        style: { marginBottom: "15px", color: "#333" },
                        children: "Choose an Agent to Analyze",
                      }),
                      c.jsx("p", {
                        style: { fontSize: "18px", color: "#666" },
                        children:
                          "Select an agent from the dropdown above to view their review statistics across all apps",
                      }),
                    ],
                  }),
            }),
          ],
        }),
      ],
    });
  };
function rh() {
  const [_, $] = q.useState("analytics");
  return (
    console.log("App rendering with currentView:", _),
    console.log("ReviewCredit component:", os),
    console.log("ReviewCredit component name:", os.name),
    q.useEffect(() => {
      const Y = {
        analytics: "Analytics Dashboard - Shopify App Review Analytics",
        "access-tabbed": "Access Reviews - Shopify App Review Analytics",
        "appwise-reviews": "Appwise Reviews - Shopify App Review Analytics",
        "agent-reviews": "Agent Reviews - Shopify App Review Analytics",
      };
      document.title = Y[_] || "Shopify App Review Analytics";
    }, [_]),
    c.jsx(sh, {
      children: c.jsxs("div", {
        className: "app",
        children: [
          c.jsxs("header", {
            className: "app-header",
            children: [
              c.jsx("h1", { children: "Shopify App Review Analytics" }),
              c.jsx("p", {
                children:
                  "Comprehensive analytics dashboard for tracking and analyzing Shopify app reviews",
              }),
              c.jsxs("div", {
                className: "nav-tabs",
                style: { marginTop: "20px" },
                children: [
                  c.jsx("button", {
                    className: `nav-tab ${_ === "analytics" ? "active" : ""}`,
                    onClick: () => $("analytics"),
                    // style: {
                    //   padding: "10px 20px",
                    //   marginRight: "10px",
                    //   border: "none",
                    //   borderRadius: "5px",
                    //   backgroundColor:
                    //     _ === "analytics" ? "#007bff" : "#f8f9fa",
                    //   color: _ === "analytics" ? "white" : "#333",
                    //   cursor: "pointer",
                    // },
                    children: "Analytics",
                  }),
                  c.jsx("button", {
                    className: `nav-tab ${
                      _ === "access-tabbed" ? "active" : ""
                    }`,
                    onClick: () => $("access-tabbed"),
                    // style: {
                    //   padding: "10px 20px",
                    //   marginRight: "10px",
                    //   border: "none",
                    //   borderRadius: "5px",
                    //   backgroundColor:
                    //     _ === "access-tabbed" ? "#007bff" : "#f8f9fa",
                    //   color: _ === "access-tabbed" ? "white" : "#333",
                    //   cursor: "pointer",
                    // },
                    children: "Access Reviews",
                  }),
                  c.jsx("button", {
                    className: `nav-tab ${
                      _ === "appwise-reviews" ? "active" : ""
                    }`,
                    onClick: () => $("appwise-reviews"),
                    // style: {
                    //   padding: "10px 20px",
                    //   marginRight: "10px",
                    //   border: "none",
                    //   borderRadius: "5px",
                    //   backgroundColor:
                    //     _ === "appwise-reviews" ? "#007bff" : "#f8f9fa",
                    //   color: _ === "appwise-reviews" ? "white" : "#333",
                    //   cursor: "pointer",
                    // },
                    children: "Appwise Reviews",
                  }),
                  c.jsx("button", {
                    className: `nav-tab ${
                      _ === "agent-reviews" ? "active" : ""
                    }`,
                    onClick: () => $("agent-reviews"),
                    // style: {
                    //   padding: "10px 20px",
                    //   border: "none",
                    //   borderRadius: "5px",
                    //   backgroundColor:
                    //     _ === "agent-reviews" ? "#007bff" : "#f8f9fa",
                    //   color: _ === "agent-reviews" ? "white" : "#333",
                    //   cursor: "pointer",
                    // },
                    children: "Agent Reviews",
                  }),
                ],
              }),
            ],
          }),
          c.jsx("main", {
            className: "app-main",
            children:
              _ === "analytics"
                ? c.jsx(Td, {})
                : _ === "access-tabbed"
                ? c.jsx(fh, {})
                : _ === "appwise-reviews"
                ? c.jsx(oh, {})
                : _ === "agent-reviews"
                ? c.jsx(os, {})
                : c.jsx(Td, {}),
          }),
        ],
      }),
    })
  );
}
uh.createRoot(document.getElementById("root")).render(
  c.jsx(q.StrictMode, { children: c.jsx(rh, {}) })
);
