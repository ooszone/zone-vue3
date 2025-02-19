var sentry = function(t) {
	"use strict";
	var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
		, n = function(t) {
		return t && t.Math == Math && t
	}
		, r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function() {
		return this
	}() || Function("return this")()
		, o = {}
		, i = function(t) {
		try {
			return !!t()
		} catch (t) {
			return !0
		}
	}
		, a = !i(function() {
		return 7 != Object.defineProperty({}, 1, {
			get: function() {
				return 7
			}
		})[1]
	})
		, s = {}
		, c = {}.propertyIsEnumerable
		, u = Object.getOwnPropertyDescriptor
		, l = u && !c.call({
		1: 2
	}, 1);
	s.f = l ? function(t) {
			t = u(this, t);
			return !!t && t.enumerable
		}
		: c;
	function p(t, e) {
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: e
		}
	}
	function f(t) {
		return Object(j(t))
	}
	var h = {}.toString
		, d = function(t) {
		return h.call(t).slice(8, -1)
	}
		, v = i
		, y = d
		, g = "".split
		, _ = v(function() {
		return !Object("z").propertyIsEnumerable(0)
	}) ? function(t) {
			return "String" == y(t) ? g.call(t, "") : Object(t)
		}
		: Object
		, m = function(t) {
		if (null == t)
			throw TypeError("Can't call method on " + t);
		return t
	}
		, b = _
		, E = m
		, w = function(t) {
		return b(E(t))
	}
		, S = function(t) {
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
		, x = S
		, O = function(t, e) {
		if (!x(t))
			return t;
		var n, r;
		if (e && "function" == typeof (n = t.toString) && !x(r = n.call(t)))
			return r;
		if ("function" == typeof (n = t.valueOf) && !x(r = n.call(t)))
			return r;
		if (!e && "function" == typeof (n = t.toString) && !x(r = n.call(t)))
			return r;
		throw TypeError("Can't convert object to primitive value")
	}
		, j = m
		, k = f
		, T = {}.hasOwnProperty
		, R = Object.hasOwn || function(t, e) {
		return T.call(k(t), e)
	}
		, N = S
		, D = r.document
		, P = N(D) && N(D.createElement)
		, I = function(t) {
		return P ? D.createElement(t) : {}
	}
		, L = I
		, M = !a && !i(function() {
		return 7 != Object.defineProperty(L("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	})
		, C = s
		, A = p
		, U = w
		, F = O
		, H = R
		, B = M
		, q = Object.getOwnPropertyDescriptor;
	o.f = a ? q : function(t, e) {
		if (t = U(t),
			e = F(e, !0),
			B)
			try {
				return q(t, e)
			} catch (t) {}
		if (H(t, e))
			return A(!C.f.call(t, e), t[e])
	}
	;
	var W = {}
		, G = S
		, Y = function(t) {
		if (!G(t))
			throw TypeError(String(t) + " is not an object");
		return t
	}
		, V = M
		, z = Y
		, J = O
		, X = Object.defineProperty;
	W.f = a ? X : function(t, e, n) {
		if (z(t),
			e = J(e, !0),
			z(n),
			V)
			try {
				return X(t, e, n)
			} catch (t) {}
		if ("get"in n || "set"in n)
			throw TypeError("Accessors not supported");
		return "value"in n && (t[e] = n.value),
			t
	}
	;
	var $ = W
		, K = p
		, Q = a ? function(t, e, n) {
			return $.f(t, e, K(1, n))
		}
		: function(t, e, n) {
			return t[e] = n,
				t
		}
		, Z = {
		exports: {}
	}
		, tt = r
		, et = Q
		, nt = function(e, n) {
		try {
			et(tt, e, n)
		} catch (t) {
			tt[e] = n
		}
		return n
	}
		, rt = nt
		, ot = "__core-js_shared__"
		, it = r[ot] || rt(ot, {})
		, at = it
		, st = Function.toString;
	"function" != typeof at.inspectSource && (at.inspectSource = function(t) {
			return st.call(t)
		}
	);
	var ct = at.inspectSource
		, ut = ct
		, lt = r.WeakMap
		, pt = "function" == typeof lt && /native code/.test(ut(lt))
		, ft = {
		exports: {}
	}
		, ht = it;
	(ft.exports = function(t, e) {
			return ht[t] || (ht[t] = void 0 !== e ? e : {})
		}
	)("versions", []).push({
		version: "3.14.0",
		mode: "global",
		copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
	});
	var dt, vt, yt, gt, _t, mt, bt, Et, wt = 0, St = Math.random(), xt = function(t) {
		return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++wt + St).toString(36)
	}, Ot = ft.exports, jt = xt, kt = Ot("keys"), Tt = function(t) {
		return kt[t] || (kt[t] = jt(t))
	}, Rt = {}, Nt = S, Dt = Q, Pt = R, It = it, Lt = Tt, Mt = Rt, Ct = "Object already initialized", At = r.WeakMap;
	bt = pt || It.state ? (dt = It.state || (It.state = new At),
			vt = dt.get,
			yt = dt.has,
			gt = dt.set,
			_t = function(t, e) {
				if (yt.call(dt, t))
					throw new TypeError(Ct);
				return e.facade = t,
					gt.call(dt, t, e),
					e
			}
			,
			mt = function(t) {
				return vt.call(dt, t) || {}
			}
			,
			function(t) {
				return yt.call(dt, t)
			}
	) : (Mt[Et = Lt("state")] = !0,
			_t = function(t, e) {
				if (Pt(t, Et))
					throw new TypeError(Ct);
				return e.facade = t,
					Dt(t, Et, e),
					e
			}
			,
			mt = function(t) {
				return Pt(t, Et) ? t[Et] : {}
			}
			,
			function(t) {
				return Pt(t, Et)
			}
	);
	var Ut = {
		set: _t,
		get: mt,
		has: bt,
		enforce: function(t) {
			return bt(t) ? mt(t) : _t(t, {})
		},
		getterFor: function(n) {
			return function(t) {
				var e;
				if (!Nt(t) || (e = mt(t)).type !== n)
					throw TypeError("Incompatible receiver, " + n + " required");
				return e
			}
		}
	}
		, Ft = r
		, Ht = Q
		, Bt = R
		, qt = nt
		, Wt = ct
		, Gt = Ut.get
		, Yt = Ut.enforce
		, Vt = String(String).split("String");
	(Z.exports = function(t, e, n, r) {
			var o = !!r && !!r.unsafe
				, i = !!r && !!r.enumerable
				, a = !!r && !!r.noTargetGet;
			"function" == typeof n && ("string" != typeof e || Bt(n, "name") || Ht(n, "name", e),
			(r = Yt(n)).source || (r.source = Vt.join("string" == typeof e ? e : ""))),
				t !== Ft ? (o ? !a && t[e] && (i = !0) : delete t[e],
					i ? t[e] = n : Ht(t, e, n)) : i ? t[e] = n : qt(e, n)
		}
	)(Function.prototype, "toString", function() {
		return "function" == typeof this && Gt(this).source || Wt(this)
	});
	function zt(t) {
		return "function" == typeof t ? t : void 0
	}
	var Jt = r
		, Xt = Jt
		, $t = r
		, n = function(t, e) {
		return arguments.length < 2 ? zt(Xt[t]) || zt($t[t]) : Xt[t] && Xt[t][e] || $t[t] && $t[t][e]
	}
		, e = {}
		, Kt = Math.ceil
		, Qt = Math.floor
		, l = function(t) {
		return isNaN(t = +t) ? 0 : (0 < t ? Qt : Kt)(t)
	}
		, Zt = l
		, te = Math.min
		, c = function(t) {
		return 0 < t ? te(Zt(t), 9007199254740991) : 0
	}
		, ee = l
		, ne = Math.max
		, re = Math.min
		, oe = w
		, ie = c
		, ae = function(t, e) {
		t = ee(t);
		return t < 0 ? ne(t + e, 0) : re(t, e)
	}
		, v = function(s) {
		return function(t, e, n) {
			var r, o = oe(t), i = ie(o.length), a = ae(n, i);
			if (s && e != e) {
				for (; a < i; )
					if ((r = o[a++]) != r)
						return !0
			} else
				for (; a < i; a++)
					if ((s || a in o) && o[a] === e)
						return s || a || 0;
			return !s && -1
		}
	}
		, N = {
		includes: v(!0),
		indexOf: v(!1)
	}
		, se = R
		, ce = w
		, ue = N.indexOf
		, le = Rt
		, M = function(t, e) {
		var n, r = ce(t), o = 0, i = [];
		for (n in r)
			!se(le, n) && se(r, n) && i.push(n);
		for (; e.length > o; )
			se(r, n = e[o++]) && (~ue(i, n) || i.push(n));
		return i
	}
		, O = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
		, pe = M
		, fe = O.concat("length", "prototype");
	e.f = Object.getOwnPropertyNames || function(t) {
		return pe(t, fe)
	}
	;
	rt = {};
	rt.f = Object.getOwnPropertySymbols;
	function he() {}
	function de(t) {
		return "<script>" + t + "</" + tn + ">"
	}
	var ve, ye = e, ge = rt, _e = Y, ot = n("Reflect", "ownKeys") || function(t) {
		var e = ye.f(_e(t))
			, n = ge.f;
		return n ? e.concat(n(t)) : e
	}
		, me = R, be = ot, Ee = o, we = W, Se = i, xe = /#|\.prototype\./, at = function(t, e) {
		t = je[Oe(t)];
		return t == Te || t != ke && ("function" == typeof e ? Se(e) : !!e)
	}, Oe = at.normalize = function(t) {
		return String(t).replace(xe, ".").toLowerCase()
	}
		, je = at.data = {}, ke = at.NATIVE = "N", Te = at.POLYFILL = "P", ut = at, Re = r, Ne = o.f, De = Q, Pe = Z.exports, Ie = nt, Le = function(t, e) {
		for (var n = be(e), r = we.f, o = Ee.f, i = 0; i < n.length; i++) {
			var a = n[i];
			me(t, a) || r(t, a, o(e, a))
		}
	}, Me = ut, lt = function(t, e) {
		var n, r, o, i = t.target, a = t.global, s = t.stat, c = a ? Re : s ? Re[i] || Ie(i, {}) : (Re[i] || {}).prototype;
		if (c)
			for (n in e) {
				if (r = e[n],
					o = t.noTargetGet ? (o = Ne(c, n)) && o.value : c[n],
				!Me(a ? n : i + (s ? "." : "#") + n, t.forced) && void 0 !== o) {
					if (typeof r == typeof o)
						continue;
					Le(r, o)
				}
				(t.sham || o && o.sham) && De(r, "sham", !0),
					Pe(c, n, r, t)
			}
	}, Ot = !i(function() {
		function t() {}
		return t.prototype.constructor = null,
		Object.getPrototypeOf(new t) !== t.prototype
	}), Ce = R, Ae = f, it = Ot, Ue = Tt("IE_PROTO"), Fe = Object.prototype, pt = it ? Object.getPrototypeOf : function(t) {
		return t = Ae(t),
			Ce(t, Ue) ? t[Ue] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? Fe : null
	}
		, He = S, Be = Y, qe = function(t) {
		if (!He(t) && null !== t)
			throw TypeError("Can't set " + String(t) + " as a prototype");
		return t
	}, It = Object.setPrototypeOf || ("__proto__"in {} ? function() {
		var n, r = !1, t = {};
		try {
			(n = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []),
				r = t instanceof Array
		} catch (t) {}
		return function(t, e) {
			return Be(t),
				qe(e),
				r ? n.call(t, e) : t.__proto__ = e,
				t
		}
	}() : void 0), We = M, Ge = O, At = Object.keys || function(t) {
		return We(t, Ge)
	}
		, Ye = W, Ve = Y, ze = At, Mt = a ? Object.defineProperties : function(t, e) {
		Ve(t);
		for (var n, r = ze(e), o = r.length, i = 0; i < o; )
			Ye.f(t, n = r[i++], e[n]);
		return t
	}
		, Lt = n("document", "documentElement"), Je = Y, Xe = Mt, $e = O, v = Rt, Ke = Lt, Qe = I, Ze = "prototype", tn = "script", en = Tt("IE_PROTO"), nn = function() {
		try {
			ve = document.domain && new ActiveXObject("htmlfile")
		} catch (t) {}
		var t;
		nn = ve ? function(t) {
			t.write(de("")),
				t.close();
			var e = t.parentWindow.Object;
			return t = null,
				e
		}(ve) : ((t = Qe("iframe")).style.display = "none",
			Ke.appendChild(t),
			t.src = String("javascript:"),
			(t = t.contentWindow.document).open(),
			t.write(de("document.F=Object")),
			t.close(),
			t.F);
		for (var e = $e.length; e--; )
			delete nn[Ze][$e[e]];
		return nn()
	};
	v[en] = !0;
	N = Object.create || function(t, e) {
		var n;
		return null !== t ? (he[Ze] = Je(t),
			n = new he,
			he[Ze] = null,
			n[en] = t) : n = nn(),
			void 0 === e ? n : Xe(n, e)
	}
		,
		e = n("navigator", "userAgent") || "",
		ot = e,
		at = r.process,
		nt = at && at.versions,
		Ot = nt && nt.v8;
	Ot ? vn = (dn = Ot.split("."))[0] < 4 ? 1 : dn[0] + dn[1] : ot && (!(dn = ot.match(/Edge\/(\d+)/)) || 74 <= dn[1]) && (dn = ot.match(/Chrome\/(\d+)/)) && (vn = dn[1]);
	var it = vn && +vn
		, rn = it
		, M = i
		, Mt = !!Object.getOwnPropertySymbols && !M(function() {
		var t = Symbol();
		return !String(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && rn && rn < 41
	})
		, O = Mt && !Symbol.sham && "symbol" == typeof Symbol.iterator
		, Rt = r
		, Tt = ft.exports
		, on = R
		, v = xt
		, an = Mt
		, at = O
		, sn = Tt("wks")
		, cn = Rt.Symbol
		, un = at ? cn : cn && cn.withoutSetter || v
		, nt = function(t) {
		return on(sn, t) && (an || "string" == typeof sn[t]) || (an && on(cn, t) ? sn[t] = cn[t] : sn[t] = un("Symbol." + t)),
			sn[t]
	}
		, Ot = {}
		, ln = Ot
		, pn = nt("iterator")
		, fn = Array.prototype
		, ot = function(t) {
		if ("function" != typeof t)
			throw TypeError(String(t) + " is not a function");
		return t
	}
		, hn = ot
		, dn = function(r, o, t) {
		if (hn(r),
		void 0 === o)
			return r;
		switch (t) {
			case 0:
				return function() {
					return r.call(o)
				}
					;
			case 1:
				return function(t) {
					return r.call(o, t)
				}
					;
			case 2:
				return function(t, e) {
					return r.call(o, t, e)
				}
					;
			case 3:
				return function(t, e, n) {
					return r.call(o, t, e, n)
				}
		}
		return function() {
			return r.apply(o, arguments)
		}
	}
		, vn = {};
	vn[nt("toStringTag")] = "z";
	function yn(t, e) {
		this.stopped = t,
			this.result = e
	}
	var M = "[object z]" === String(vn)
		, ft = M
		, gn = d
		, _n = nt("toStringTag")
		, mn = "Arguments" == gn(function() {
		return arguments
	}())
		, xt = ft ? gn : function(t) {
		var e;
		return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (t = function(t, e) {
			try {
				return t[e]
			} catch (t) {}
		}(e = Object(t), _n)) ? t : mn ? gn(e) : "Object" == (t = gn(e)) && "function" == typeof e.callee ? "Arguments" : t
	}
		, bn = xt
		, En = Ot
		, wn = nt("iterator")
		, Sn = Y
		, xn = Y
		, On = function(t) {
		return void 0 !== t && (ln.Array === t || fn[pn] === t)
	}
		, jn = c
		, kn = dn
		, Tn = function(t) {
		if (null != t)
			return t[wn] || t["@@iterator"] || En[bn(t)]
	}
		, Rn = function(t) {
		var e = t.return;
		if (void 0 !== e)
			return Sn(e.call(t)).value
	}
		, Mt = function(t, e, n) {
		function r(t) {
			return i && Rn(i),
				new yn(!0,t)
		}
		function o(t) {
			return f ? (xn(t),
				d ? v(t[0], t[1], r) : v(t[0], t[1])) : d ? v(t, r) : v(t)
		}
		var i, a, s, c, u, l, p = n && n.that, f = !(!n || !n.AS_ENTRIES), h = !(!n || !n.IS_ITERATOR), d = !(!n || !n.INTERRUPTED), v = kn(e, p, 1 + f + d);
		if (h)
			i = t;
		else {
			if ("function" != typeof (h = Tn(t)))
				throw TypeError("Target is not iterable");
			if (On(h)) {
				for (a = 0,
					     s = jn(t.length); a < s; a++)
					if ((c = o(t[a])) && c instanceof yn)
						return c;
				return new yn(!1)
			}
			i = h.call(t)
		}
		for (u = i.next; !(l = u.call(i)).done; ) {
			try {
				c = o(l.value)
			} catch (t) {
				throw Rn(i),
					t
			}
			if ("object" == typeof c && c && c instanceof yn)
				return c
		}
		return new yn(!1)
	}
		, O = lt
		, Nn = pt
		, Dn = It
		, Tt = N
		, Pn = Q
		, Rt = p
		, In = Mt
		, Ln = function(t, e) {
		var n = this;
		if (!(n instanceof Ln))
			return new Ln(t,e);
		Dn && (n = Dn(new Error(void 0), Nn(n))),
		void 0 !== e && Pn(n, "message", String(e));
		e = [];
		return In(t, e.push, {
			that: e
		}),
			Pn(n, "errors", e),
			n
	};
	Ln.prototype = Tt(Error.prototype, {
		constructor: Rt(5, Ln),
		message: Rt(5, ""),
		name: Rt(5, "AggregateError")
	}),
		O({
			global: !0
		}, {
			AggregateError: Ln
		});
	var Mn = xt
		, at = Z.exports;
	M || at(Object.prototype, "toString", M ? {}.toString : function() {
			return "[object " + Mn(this) + "]"
		}
		, {
			unsafe: !0
		});
	var v = r.Promise
		, Cn = Z.exports
		, An = W.f
		, Un = R
		, Fn = nt("toStringTag")
		, vn = function(t, e, n) {
		t && !Un(t = n ? t : t.prototype, Fn) && An(t, Fn, {
			configurable: !0,
			value: e
		})
	}
		, Hn = n
		, Bn = W
		, qn = a
		, Wn = nt("species")
		, Gn = nt("iterator")
		, Yn = !1;
	try {
		var Vn = 0
			, zn = {
			next: function() {
				return {
					done: !!Vn++
				}
			},
			return: function() {
				Yn = !0
			}
		};
		zn[Gn] = function() {
			return this
		}
			,
			Array.from(zn, function() {
				throw 2
			})
	} catch (t) {}
	function Jn(t) {
		var e;
		sr.hasOwnProperty(t) && (e = sr[t],
			delete sr[t],
			e())
	}
	function Xn(t) {
		return function() {
			Jn(t)
		}
	}
	var $n, Kn = Y, Qn = ot, Zn = nt("species"), ft = function(t, e) {
		var n, t = Kn(t).constructor;
		return void 0 === t || null == (n = Kn(t)[Zn]) ? e : Qn(n)
	}, c = /(?:iphone|ipod|ipad).*applewebkit/i.test(e), Tt = "process" == d(r.process), tr = r, Rt = i, O = dn, er = Lt, nr = I, rr = tr.location, xt = tr.setImmediate, at = tr.clearImmediate, or = tr.process, M = tr.MessageChannel, ir = tr.Dispatch, ar = 0, sr = {}, cr = "onreadystatechange", zn = function(t) {
		Jn(t.data)
	}, Lt = function(t) {
		tr.postMessage(t + "", rr.protocol + "//" + rr.host)
	};
	xt && at || (xt = function(t) {
			for (var e = [], n = 1; n < arguments.length; )
				e.push(arguments[n++]);
			return sr[++ar] = function() {
				("function" == typeof t ? t : Function(t)).apply(void 0, e)
			}
				,
				$n(ar),
				ar
		}
			,
			at = function(t) {
				delete sr[t]
			}
			,
			Tt ? $n = function(t) {
					or.nextTick(Xn(t))
				}
				: ir && ir.now ? $n = function(t) {
					ir.now(Xn(t))
				}
				: M && !c ? (br = (_r = new M).port2,
					_r.port1.onmessage = zn,
					$n = O(br.postMessage, br, 1)) : tr.addEventListener && "function" == typeof postMessage && !tr.importScripts && rr && "file:" !== rr.protocol && !Rt(Lt) ? ($n = Lt,
					tr.addEventListener("message", zn, !1)) : $n = cr in nr("script") ? function(t) {
						er.appendChild(nr("script"))[cr] = function() {
							er.removeChild(this),
								Jn(t)
						}
					}
					: function(t) {
						setTimeout(Xn(t), 0)
					}
	);
	var ur, lr, pr, fr, hr, dr, vr, yr, I = {
		set: xt,
		clear: at
	}, M = /web0s(?!.*chrome)/i.test(e), gr = r, _r = o.f, mr = I.set, O = c, br = M, Er = Tt, Rt = gr.MutationObserver || gr.WebKitMutationObserver, Lt = gr.document, wr = gr.process, zn = gr.Promise, xt = _r(gr, "queueMicrotask"), at = xt && xt.value;
	at || (ur = function() {
		var t, e;
		for (Er && (t = wr.domain) && t.exit(); lr; ) {
			e = lr.fn,
				lr = lr.next;
			try {
				e()
			} catch (t) {
				throw lr ? fr() : pr = void 0,
					t
			}
		}
		pr = void 0,
		t && t.enter()
	}
		,
		fr = O || Er || br || !Rt || !Lt ? zn && zn.resolve ? ((vr = zn.resolve(void 0)).constructor = zn,
					yr = vr.then,
					function() {
						yr.call(vr, ur)
					}
			) : Er ? function() {
				wr.nextTick(ur)
			}
			: function() {
				mr.call(gr, ur)
			}
			: (hr = !0,
					dr = Lt.createTextNode(""),
					new Rt(ur).observe(dr, {
						characterData: !0
					}),
					function() {
						dr.data = hr = !hr
					}
			));
	function Sr(t) {
		var n, r;
		this.promise = new t(function(t, e) {
				if (void 0 !== n || void 0 !== r)
					throw TypeError("Bad Promise constructor");
				n = t,
					r = e
			}
		),
			this.resolve = xr(n),
			this.reject = xr(r)
	}
	var e = at || function(t) {
		t = {
			fn: t,
			next: void 0
		};
		pr && (pr.next = t),
		lr || (lr = t,
			fr()),
			pr = t
	}
		, o = {}
		, xr = ot;
	o.f = function(t) {
		return new Sr(t)
	}
	;
	function Or(t) {
		var e;
		return !(!Fr(t) || "function" != typeof (e = t.then)) && e
	}
	function jr(p, f) {
		var h;
		p.notified || (p.notified = !0,
			h = p.reactions,
			Vr(function() {
				for (var t = p.value, e = 1 == p.state, n = 0; h.length > n; ) {
					var r, o, i, a = h[n++], s = e ? a.ok : a.fail, c = a.resolve, u = a.reject, l = a.domain;
					try {
						s ? (e || (2 === p.rejection && go(p),
							p.rejection = 1),
							!0 === s ? r = t : (l && l.enter(),
								r = s(t),
							l && (l.exit(),
								i = !0)),
							r === a.promise ? u(io("Promise-chain cycle")) : (o = Or(r)) ? o.call(r, c, u) : c(r)) : u(t)
					} catch (t) {
						l && !i && l.exit(),
							u(t)
					}
				}
				p.reactions = [],
					p.notified = !1,
				f && !p.rejection && vo(p)
			}))
	}
	function kr(t, e, n) {
		var r, o;
		lo ? ((r = ao.createEvent("Event")).promise = e,
			r.reason = n,
			r.initEvent(t, !1, !0),
			Ur.dispatchEvent(r)) : r = {
			promise: e,
			reason: n
		},
			!po && (o = Ur["on" + t]) ? o(r) : t === fo && Jr("Unhandled promise rejection", n)
	}
	function Tr(e, n, r) {
		return function(t) {
			e(n, t, r)
		}
	}
	function Rr(t, e, n) {
		t.done || (t.done = !0,
			(t = n ? n : t).value = e,
			t.state = 2,
			jr(t, !0))
	}
	var Nr, Dr, Pr, Ir, Lr = Y, Mr = S, Cr = o, c = function(t, e) {
		if (Lr(t),
		Mr(e) && e.constructor === t)
			return e;
		t = Cr.f(t);
		return (0,
			t.resolve)(e),
			t.promise
	}, Ar = r, M = function(t) {
		try {
			return {
				error: !1,
				value: t()
			}
		} catch (t) {
			return {
				error: !0,
				value: t
			}
		}
	}, _r = "object" == typeof window, xt = lt, Ur = r, O = n, br = v, zn = Z.exports, Lt = function(t, e, n) {
		for (var r in e)
			Cn(t, r, e[r], n);
		return t
	}, Rt = It, at = vn, Y = function(t) {
		var e = Hn(t)
			, t = Bn.f;
		qn && e && !e[Wn] && t(e, Wn, {
			configurable: !0,
			get: function() {
				return this
			}
		})
	}, Fr = S, Hr = ot, Br = function(t, e, n) {
		if (!(t instanceof e))
			throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
		return t
	}, qr = ct, Wr = Mt, ct = function(t, e) {
		if (!e && !Yn)
			return !1;
		var n = !1;
		try {
			var r = {};
			r[Gn] = function() {
				return {
					next: function() {
						return {
							done: n = !0
						}
					}
				}
			}
				,
				t(r)
		} catch (t) {}
		return n
	}, Gr = ft, Yr = I.set, Vr = e, zr = c, Jr = function(t, e) {
		var n = Ar.console;
		n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
	}, I = o, Xr = M, e = Ut, ut = ut, $r = _r, Kr = Tt, Qr = it, Zr = nt("species"), to = "Promise", eo = e.get, no = e.set, ro = e.getterFor(to), it = br && br.prototype, oo = br, e = it, io = Ur.TypeError, ao = Ur.document, so = Ur.process, co = I.f, uo = co, lo = !!(ao && ao.createEvent && Ur.dispatchEvent), po = "function" == typeof PromiseRejectionEvent, fo = "unhandledrejection", ho = !1, ut = ut(to, function() {
		var t = qr(oo) !== String(oo);
		if (!t && 66 === Qr)
			return !0;
		if (51 <= Qr && /native code/.test(oo))
			return !1;
		function e(t) {
			t(function() {}, function() {})
		}
		var n = new oo(function(t) {
				t(1)
			}
		);
		return (n.constructor = {})[Zr] = e,
		!(ho = n.then(function() {})instanceof e) || !t && $r && !po
	}), ct = ut || !ct(function(t) {
		oo.all(t).catch(function() {})
	}), vo = function(o) {
		Yr.call(Ur, function() {
			var t, e = o.facade, n = o.value, r = yo(o);
			if (r && (t = Xr(function() {
				Kr ? so.emit("unhandledRejection", n, e) : kr(fo, e, n)
			}),
				o.rejection = Kr || yo(o) ? 2 : 1,
				t.error))
				throw t.value
		})
	}, yo = function(t) {
		return 1 !== t.rejection && !t.parent
	}, go = function(e) {
		Yr.call(Ur, function() {
			var t = e.facade;
			Kr ? so.emit("rejectionHandled", t) : kr("rejectionhandled", t, e.value)
		})
	}, _o = function(n, t, e) {
		if (!n.done) {
			n.done = !0,
			e && (n = e);
			try {
				if (n.facade === t)
					throw io("Promise can't be resolved itself");
				var r = Or(t);
				r ? Vr(function() {
					var e = {
						done: !1
					};
					try {
						r.call(t, Tr(_o, e, n), Tr(Rr, e, n))
					} catch (t) {
						Rr(e, t, n)
					}
				}) : (n.value = t,
					n.state = 1,
					jr(n, !1))
			} catch (t) {
				Rr({
					done: !1
				}, t, n)
			}
		}
	};
	if (ut && (e = (oo = function(t) {
			Br(this, oo, to),
				Hr(t),
				Nr.call(this);
			var e = eo(this);
			try {
				t(Tr(_o, e), Tr(Rr, e))
			} catch (t) {
				Rr(e, t)
			}
		}
	).prototype,
		(Nr = function(t) {
				no(this, {
					type: to,
					done: !1,
					notified: !1,
					parent: !1,
					reactions: [],
					rejection: !1,
					state: 0,
					value: void 0
				})
			}
		).prototype = Lt(e, {
			then: function(t, e) {
				var n = ro(this)
					, r = co(Gr(this, oo));
				return r.ok = "function" != typeof t || t,
					r.fail = "function" == typeof e && e,
					r.domain = Kr ? so.domain : void 0,
					n.parent = !0,
					n.reactions.push(r),
				0 != n.state && jr(n, !1),
					r.promise
			},
			catch: function(t) {
				return this.then(void 0, t)
			}
		}),
		Dr = function() {
			var t = new Nr
				, e = eo(t);
			this.promise = t,
				this.resolve = Tr(_o, e),
				this.reject = Tr(Rr, e)
		}
		,
		I.f = co = function(t) {
			return t === oo || t === Pr ? new Dr : uo(t)
		}
		,
	"function" == typeof br && it !== Object.prototype)) {
		Ir = it.then,
		ho || (zn(it, "then", function(t, e) {
			var n = this;
			return new oo(function(t, e) {
					Ir.call(n, t, e)
				}
			).then(t, e)
		}, {
			unsafe: !0
		}),
			zn(it, "catch", e.catch, {
				unsafe: !0
			}));
		try {
			delete it.constructor
		} catch (t) {}
		Rt && Rt(it, e)
	}
	xt({
		global: !0,
		wrap: !0,
		forced: ut
	}, {
		Promise: oo
	}),
		at(oo, to, !1),
		Y(to),
		Pr = O(to),
		xt({
			target: to,
			stat: !0,
			forced: ut
		}, {
			reject: function(t) {
				var e = co(this);
				return e.reject.call(void 0, t),
					e.promise
			}
		}),
		xt({
			target: to,
			stat: !0,
			forced: ut
		}, {
			resolve: function(t) {
				return zr(this, t)
			}
		}),
		xt({
			target: to,
			stat: !0,
			forced: ct
		}, {
			all: function(t) {
				var s = this
					, e = co(s)
					, c = e.resolve
					, u = e.reject
					, n = Xr(function() {
					var r = Hr(s.resolve)
						, o = []
						, i = 0
						, a = 1;
					Wr(t, function(t) {
						var e = i++
							, n = !1;
						o.push(void 0),
							a++,
							r.call(s, t).then(function(t) {
								n || (n = !0,
									o[e] = t,
								--a || c(o))
							}, u)
					}),
					--a || c(o)
				});
				return n.error && u(n.value),
					e.promise
			},
			race: function(t) {
				var n = this
					, r = co(n)
					, o = r.reject
					, e = Xr(function() {
					var e = Hr(n.resolve);
					Wr(t, function(t) {
						e.call(n, t).then(r.resolve, o)
					})
				});
				return e.error && o(e.value),
					r.promise
			}
		});
	var mo = ot
		, bo = o
		, Eo = M
		, wo = Mt;
	lt({
		target: "Promise",
		stat: !0
	}, {
		allSettled: function(t) {
			var s = this
				, e = bo.f(s)
				, c = e.resolve
				, n = e.reject
				, r = Eo(function() {
				var r = mo(s.resolve)
					, o = []
					, i = 0
					, a = 1;
				wo(t, function(t) {
					var e = i++
						, n = !1;
					o.push(void 0),
						a++,
						r.call(s, t).then(function(t) {
							n || (n = !0,
								o[e] = {
									status: "fulfilled",
									value: t
								},
							--a || c(o))
						}, function(t) {
							n || (n = !0,
								o[e] = {
									status: "rejected",
									reason: t
								},
							--a || c(o))
						})
				}),
				--a || c(o)
			});
			return r.error && n(r.value),
				e.promise
		}
	});
	var So = ot
		, xo = n
		, Oo = o
		, jo = M
		, ko = Mt
		, To = "No one promise resolved";
	lt({
		target: "Promise",
		stat: !0
	}, {
		any: function(t) {
			var c = this
				, e = Oo.f(c)
				, u = e.resolve
				, l = e.reject
				, n = jo(function() {
				var r = So(c.resolve)
					, o = []
					, i = 0
					, a = 1
					, s = !1;
				ko(t, function(t) {
					var e = i++
						, n = !1;
					o.push(void 0),
						a++,
						r.call(c, t).then(function(t) {
							n || s || (s = !0,
								u(t))
						}, function(t) {
							n || s || (n = !0,
								o[e] = t,
							--a || l(new (xo("AggregateError"))(o,To)))
						})
				}),
				--a || l(new (xo("AggregateError"))(o,To))
			});
			return n.error && l(n.value),
				e.promise
		}
	});
	var Mt = lt
		, Ro = v
		, v = i
		, No = n
		, Do = ft
		, Po = c
		, ft = Z.exports;
	Mt({
		target: "Promise",
		proto: !0,
		real: !0,
		forced: !!Ro && v(function() {
			Ro.prototype.finally.call({
				then: function() {}
			}, function() {})
		})
	}, {
		finally: function(e) {
			var n = Do(this, No("Promise"))
				, t = "function" == typeof e;
			return this.then(t ? function(t) {
					return Po(n, e()).then(function() {
						return t
					})
				}
				: e, t ? function(t) {
					return Po(n, e()).then(function() {
						throw t
					})
				}
				: e)
		}
	}),
	"function" == typeof Ro && (Co = No("Promise").prototype.finally,
	Ro.prototype.finally !== Co && ft(Ro.prototype, "finally", Co, {
		unsafe: !0
	}));
	var Io, Lo = l, Mo = m, c = function(i) {
		return function(t, e) {
			var n, r = String(Mo(t)), o = Lo(e), t = r.length;
			return o < 0 || t <= o ? i ? "" : void 0 : (e = r.charCodeAt(o)) < 55296 || 56319 < e || o + 1 === t || (n = r.charCodeAt(o + 1)) < 56320 || 57343 < n ? i ? r.charAt(o) : e : i ? r.slice(o, o + 2) : n - 56320 + (e - 55296 << 10) + 65536
		}
	}, Mt = {
		codeAt: c(!1),
		charAt: c(!0)
	}, v = i, ft = pt, Co = Q, l = R, Ao = nt("iterator"), c = !1;
	[].keys && ("next"in (R = [].keys()) ? (R = ft(ft(R))) !== Object.prototype && (Io = R) : c = !0),
	l(Io = null == Io || v(function() {
		var t = {};
		return Io[Ao].call(t) !== t
	}) ? {} : Io, Ao) || Co(Io, Ao, function() {
		return this
	});
	function Uo() {
		return this
	}
	function Fo() {
		return this
	}
	var c = {
		IteratorPrototype: Io,
		BUGGY_SAFARI_ITERATORS: c
	}
		, Ho = c.IteratorPrototype
		, Bo = N
		, qo = p
		, Wo = vn
		, Go = Ot
		, Yo = lt
		, Vo = function(t, e, n) {
		e += " Iterator";
		return t.prototype = Bo(Ho, {
			next: qo(1, n)
		}),
			Wo(t, e, !1),
			Go[e] = Uo,
			t
	}
		, zo = pt
		, Jo = It
		, Xo = vn
		, $o = Q
		, Ko = Z.exports
		, Z = nt
		, Qo = Ot
		, Zo = c.IteratorPrototype
		, ti = c.BUGGY_SAFARI_ITERATORS
		, ei = Z("iterator")
		, ni = "values"
		, ri = "entries"
		, c = function(t, e, n, r, o, i, a) {
		Vo(n, e, r);
		function s(t) {
			if (t === o && d)
				return d;
			if (!ti && t in f)
				return f[t];
			switch (t) {
				case "keys":
				case ni:
				case ri:
					return function() {
						return new n(this,t)
					}
			}
			return function() {
				return new n(this)
			}
		}
		var c, u, l = e + " Iterator", p = !1, f = t.prototype, h = f[ei] || f["@@iterator"] || o && f[o], d = !ti && h || s(o), r = "Array" == e && f.entries || h;
		if (r && (t = zo(r.call(new t)),
		Zo !== Object.prototype && t.next && (zo(t) !== Zo && (Jo ? Jo(t, Zo) : "function" != typeof t[ei] && $o(t, ei, Fo)),
			Xo(t, l, !0))),
		o == ni && h && h.name !== ni && (p = !0,
				d = function() {
					return h.call(this)
				}
		),
		f[ei] !== d && $o(f, ei, d),
			Qo[e] = d,
			o)
			if (c = {
				values: s(ni),
				keys: i ? d : s("keys"),
				entries: s(ri)
			},
				a)
				for (u in c)
					!ti && !p && u in f || Ko(f, u, c[u]);
			else
				Yo({
					target: e,
					proto: !0,
					forced: ti || p
				}, c);
		return c
	}
		, oi = Mt.charAt
		, Z = Ut
		, Mt = c
		, ii = "String Iterator"
		, ai = Z.set
		, si = Z.getterFor(ii);
	Mt(String, "String", function(t) {
		ai(this, {
			type: ii,
			string: String(t),
			index: 0
		})
	}, function() {
		var t = si(this)
			, e = t.string
			, n = t.index;
		return n >= e.length ? {
			value: void 0,
			done: !0
		} : (n = oi(e, n),
			t.index += n.length,
			{
				value: n,
				done: !1
			})
	});
	var N = N
		, W = W
		, ci = nt("unscopables")
		, ui = Array.prototype;
	null == ui[ci] && W.f(ui, ci, {
		configurable: !0,
		value: N(null)
	});
	var li = w
		, w = function(t) {
		ui[ci][t] = !0
	}
		, Ot = Ot
		, Ut = Ut
		, c = c
		, pi = "Array Iterator"
		, fi = Ut.set
		, hi = Ut.getterFor(pi)
		, c = c(Array, "Array", function(t, e) {
		fi(this, {
			type: pi,
			target: li(t),
			index: 0,
			kind: e
		})
	}, function() {
		var t = hi(this)
			, e = t.target
			, n = t.kind
			, r = t.index++;
		return !e || r >= e.length ? {
			value: t.target = void 0,
			done: !0
		} : "keys" == n ? {
			value: r,
			done: !1
		} : "values" == n ? {
			value: e[r],
			done: !1
		} : {
			value: [r, e[r]],
			done: !1
		}
	}, "values");
	Ot.Arguments = Ot.Array,
		w("keys"),
		w("values"),
		w("entries");
	var di, vi = r, yi = {
		CSSRuleList: 0,
		CSSStyleDeclaration: 0,
		CSSValueList: 0,
		ClientRectList: 0,
		DOMRectList: 0,
		DOMStringList: 0,
		DOMTokenList: 1,
		DataTransferItemList: 0,
		FileList: 0,
		HTMLAllCollection: 0,
		HTMLCollection: 0,
		HTMLFormElement: 0,
		HTMLSelectElement: 0,
		MediaList: 0,
		MimeTypeArray: 0,
		NamedNodeMap: 0,
		NodeList: 1,
		PaintRequestList: 0,
		Plugin: 0,
		PluginArray: 0,
		SVGLengthList: 0,
		SVGNumberList: 0,
		SVGPathSegList: 0,
		SVGPointList: 0,
		SVGStringList: 0,
		SVGTransformList: 0,
		SourceBufferList: 0,
		StyleSheetList: 0,
		TextTrackCueList: 0,
		TextTrackList: 0,
		TouchList: 0
	}, gi = c, _i = Q, Q = nt, mi = Q("iterator"), bi = Q("toStringTag"), Ei = gi.values;
	for (di in yi) {
		var wi = vi[di]
			, Si = wi && wi.prototype;
		if (Si) {
			if (Si[mi] !== Ei)
				try {
					_i(Si, mi, Ei)
				} catch (t) {
					Si[mi] = Ei
				}
			if (Si[bi] || _i(Si, bi, di),
				yi[di])
				for (var xi in gi)
					if (Si[xi] !== gi[xi])
						try {
							_i(Si, xi, gi[xi])
						} catch (t) {
							Si[xi] = gi[xi]
						}
		}
	}
	Jt.Promise;
	var Oi = a
		, i = i
		, ji = At
		, ki = rt
		, Ti = s
		, Ri = f
		, Ni = _
		, Di = Object.assign
		, Pi = Object.defineProperty
		, _ = !Di || i(function() {
		if (Oi && 1 !== Di({
			b: 1
		}, Di(Pi({}, "a", {
			enumerable: !0,
			get: function() {
				Pi(this, "b", {
					value: 3,
					enumerable: !1
				})
			}
		}), {
			b: 2
		})).b)
			return !0;
		var t = {}
			, e = {}
			, n = Symbol()
			, r = "abcdefghijklmnopqrst";
		return t[n] = 7,
			r.split("").forEach(function(t) {
				e[t] = t
			}),
		7 != Di({}, t)[n] || ji(Di({}, e)).join("") != r
	}) ? function(t, e) {
			for (var n = Ri(t), r = arguments.length, o = 1, i = ki.f, a = Ti.f; o < r; )
				for (var s, c = Ni(arguments[o++]), u = i ? ji(c).concat(i(c)) : ji(c), l = u.length, p = 0; p < l; )
					s = u[p++],
					Oi && !a.call(c, s) || (n[s] = c[s]);
			return n
		}
		: Di;
	lt({
		target: "Object",
		stat: !0,
		forced: Object.assign !== _
	}, {
		assign: _
	}),
		Jt.Object.assign,
		lt({
			target: "Number",
			stat: !0
		}, {
			isNaN: function(t) {
				return t != t
			}
		}),
		Jt.Number.isNaN;
	var Ii = S
		, Li = d
		, Mi = nt("match")
		, Ci = function(t) {
		var e;
		return Ii(t) && (void 0 !== (e = t[Mi]) ? !!e : "RegExp" == Li(t))
	}
		, Ai = nt("match")
		, Ui = function(t) {
		if (Ci(t))
			throw TypeError("The method doesn't accept regular expressions");
		return t
	}
		, Fi = m;
	lt({
		target: "String",
		proto: !0,
		forced: !function(e) {
			var n = /./;
			try {
				"/./"[e](n)
			} catch (t) {
				try {
					return n[Ai] = !1,
						"/./"[e](n)
				} catch (t) {}
			}
			return !1
		}("includes")
	}, {
		includes: function(t) {
			return !!~String(Fi(this)).indexOf(Ui(t), 1 < arguments.length ? arguments[1] : void 0)
		}
	});
	var Hi = r
		, Bi = dn
		, qi = Function.call;
	(function(t, e, n) {
			Bi(qi, Hi[t].prototype[e], n)
		}
	)("String", "includes");
	var Wi, Gi, i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, _ = window.WeakMap;
	void 0 === _ && (Wi = Object.defineProperty,
		Gi = Date.now() % 1e9,
		(_ = function() {
				this.name = "__st" + (1e9 * Math.random() >>> 0) + Gi++ + "__"
			}
		).prototype = {
			set: function(t, e) {
				var n = t[this.name];
				return n && n[0] === t ? n[1] = e : Wi(t, this.name, {
					value: [t, e],
					writable: !0
				}),
					this
			},
			get: function(t) {
				var e;
				return (e = t[this.name]) && e[0] === t ? e[1] : void 0
			},
			delete: function(t) {
				var e = t[this.name];
				if (!e)
					return !1;
				t = e[0] === t;
				return e[0] = e[1] = void 0,
					t
			},
			has: function(t) {
				var e = t[this.name];
				return !!e && e[0] === t
			}
		});
	var Yi, Vi, zi = new _, Ji = window.msSetImmediate;
	Ji || (Yi = [],
			Vi = String(Math.random()),
			window.addEventListener("message", function(t) {
				t.data === Vi && (t = Yi,
					Yi = [],
					t.forEach(function(t) {
						t()
					}))
			}),
			Ji = function(t) {
				Yi.push(t),
					window.postMessage(Vi, "*")
			}
	);
	var Xi = !1
		, $i = [];
	function Ki() {
		Xi = !1;
		var t = $i;
		$i = [],
			t.sort(function(t, e) {
				return t.uid_ - e.uid_
			});
		var r = !1;
		t.forEach(function(t) {
			var e, n = t.takeRecords();
			(e = t).nodes_.forEach(function(t) {
				t = zi.get(t);
				t && t.forEach(function(t) {
					t.observer === e && t.removeTransientObservers()
				})
			}),
			n.length && (t.callback_(n, t),
				r = !0)
		}),
		r && Ki()
	}
	function Qi(t, e) {
		for (var n = t; n; n = n.parentNode) {
			var r = zi.get(n);
			if (r)
				for (var o = 0; o < r.length; o++) {
					var i = r[o]
						, a = i.options;
					n !== t && !a.subtree || (a = e(a)) && i.enqueue(a)
				}
		}
	}
	var Zi, ta, ea = 0;
	function na(t) {
		this.callback_ = t,
			this.nodes_ = [],
			this.records_ = [],
			this.uid_ = ++ea
	}
	function ra(t, e) {
		this.type = t,
			this.target = e,
			this.addedNodes = [],
			this.removedNodes = [],
			this.previousSibling = null,
			this.nextSibling = null,
			this.attributeName = null,
			this.attributeNamespace = null,
			this.oldValue = null
	}
	function oa(t, e) {
		return Zi = new ra(t,e)
	}
	function ia(t) {
		return ta || ((n = new ra((e = Zi).type,e.target)).addedNodes = e.addedNodes.slice(),
			n.removedNodes = e.removedNodes.slice(),
			n.previousSibling = e.previousSibling,
			n.nextSibling = e.nextSibling,
			n.attributeName = e.attributeName,
			n.attributeNamespace = e.attributeNamespace,
			n.oldValue = e.oldValue,
			(ta = n).oldValue = t,
			ta);
		var e, n
	}
	function aa(t, e) {
		return t === e ? t : ta && ((t = t) === ta || t === Zi) ? ta : null
	}
	function sa(t, e, n) {
		this.observer = t,
			this.target = e,
			this.options = n,
			this.transientObservedNodes = []
	}
	na.prototype = {
		observe: function(t, e) {
			var n;
			if (n = t,
				t = window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(n) || n,
			!e.childList && !e.attributes && !e.characterData || e.attributeOldValue && !e.attributes || e.attributeFilter && e.attributeFilter.length && !e.attributes || e.characterDataOldValue && !e.characterData)
				throw new SyntaxError;
			var r, o = zi.get(t);
			o || zi.set(t, o = []);
			for (var i = 0; i < o.length; i++)
				if (o[i].observer === this) {
					(r = o[i]).removeListeners(),
						r.options = e;
					break
				}
			r || (r = new sa(this,t,e),
				o.push(r),
				this.nodes_.push(t)),
				r.addListeners()
		},
		disconnect: function() {
			this.nodes_.forEach(function(t) {
				for (var e = zi.get(t), n = 0; n < e.length; n++) {
					var r = e[n];
					if (r.observer === this) {
						r.removeListeners(),
							e.splice(n, 1);
						break
					}
				}
			}, this),
				this.records_ = []
		},
		takeRecords: function() {
			var t = this.records_;
			return this.records_ = [],
				t
		}
	},
		sa.prototype = {
			enqueue: function(t) {
				var e = this.observer.records_
					, n = e.length;
				if (0 < e.length) {
					var r = aa(e[n - 1], t);
					if (r)
						return void (e[n - 1] = r)
				} else
					r = this.observer,
						$i.push(r),
					Xi || (Xi = !0,
						Ji(Ki));
				e[n] = t
			},
			addListeners: function() {
				this.addListeners_(this.target)
			},
			addListeners_: function(t) {
				var e = this.options;
				e.attributes && t.addEventListener("DOMAttrModified", this, !0),
				e.characterData && t.addEventListener("DOMCharacterDataModified", this, !0),
				e.childList && t.addEventListener("DOMNodeInserted", this, !0),
				(e.childList || e.subtree) && t.addEventListener("DOMNodeRemoved", this, !0)
			},
			removeListeners: function() {
				this.removeListeners_(this.target)
			},
			removeListeners_: function(t) {
				var e = this.options;
				e.attributes && t.removeEventListener("DOMAttrModified", this, !0),
				e.characterData && t.removeEventListener("DOMCharacterDataModified", this, !0),
				e.childList && t.removeEventListener("DOMNodeInserted", this, !0),
				(e.childList || e.subtree) && t.removeEventListener("DOMNodeRemoved", this, !0)
			},
			addTransientObserver: function(t) {
				var e;
				t !== this.target && (this.addListeners_(t),
					this.transientObservedNodes.push(t),
				(e = zi.get(t)) || zi.set(t, e = []),
					e.push(this))
			},
			removeTransientObservers: function() {
				var t = this.transientObservedNodes;
				this.transientObservedNodes = [],
					t.forEach(function(t) {
						this.removeListeners_(t);
						for (var e = zi.get(t), n = 0; n < e.length; n++)
							if (e[n] === this) {
								e.splice(n, 1);
								break
							}
					}, this)
			},
			handleEvent: function(t) {
				switch (t.stopImmediatePropagation(),
					t.type) {
					case "DOMAttrModified":
						var e = t.attrName
							, n = t.relatedNode.namespaceURI
							, r = t.target;
						(i = new oa("attributes",r)).attributeName = e,
							i.attributeNamespace = n;
						var o = null;
						"undefined" != typeof MutationEvent && t.attrChange === MutationEvent.ADDITION || (o = t.prevValue),
							Qi(r, function(t) {
								if (t.attributes && (!t.attributeFilter || !t.attributeFilter.length || -1 !== t.attributeFilter.indexOf(e) || -1 !== t.attributeFilter.indexOf(n)))
									return t.attributeOldValue ? ia(o) : i
							});
						break;
					case "DOMCharacterDataModified":
						var i = oa("characterData", r = t.target)
							, o = t.prevValue;
						Qi(r, function(t) {
							if (t.characterData)
								return t.characterDataOldValue ? ia(o) : i
						});
						break;
					case "DOMNodeRemoved":
						this.addTransientObserver(t.target);
					case "DOMNodeInserted":
						var a, r = t.relatedNode, s = t.target, c = "DOMNodeInserted" === t.type ? (a = [s],
							[]) : (a = [],
							[s]), u = s.previousSibling, s = s.nextSibling;
						(i = oa("childList", r)).addedNodes = a,
							i.removedNodes = c,
							i.previousSibling = u,
							i.nextSibling = s,
							Qi(r, function(t) {
								if (t.childList)
									return i
							})
				}
				Zi = ta = void 0
			}
		};
	Jt = i = i || na,
		S = function() {
			if ("undefined" != typeof globalThis)
				return globalThis;
			if ("undefined" != typeof global)
				return global;
			if ("undefined" != typeof self)
				return self;
			if ("undefined" != typeof window)
				return window;
			throw new Error("unable to locate global object")
		}();
	S.MutationObserver = S.MutationObserver || Jt;
	var ca = function() {
		return (ca = Object.assign || function(t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var o in e = arguments[n])
						Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t
			}
		).apply(this, arguments)
	};
	function ua(t) {
		return "object" == typeof t && null !== t && !pa(t)
	}
	function la(t) {
		return "function" == typeof t
	}
	function pa(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}
	var fa = Object.getPrototypeOf ? Object.getPrototypeOf({}) : null;
	function ha(t) {
		return Object.getPrototypeOf ? Object.getPrototypeOf(t) === fa : t.constructor === Object
	}
	function da(t, e) {
		var n, r = ca({}, t);
		for (n in e)
			Object.prototype.hasOwnProperty.call(e, n) && void 0 !== e[n] && (ua(e[n]) && ha(e[n]) ? r[n] = da(ua(t[n]) ? t[n] : {}, e[n]) : pa(t[n]) || pa(e[n]) ? r[n] = function e(t, n) {
				t = pa(t) ? t : [];
				n = pa(n) ? n : [];
				return Array.prototype.concat.call(t, n).map(function(t) {
					return !(t instanceof RegExp) && (pa(t) || ua(t) && ha(t)) ? pa(t) ? e([], t) : da({}, t) : t
				})
			}(t[n], e[n]) : r[n] = e[n]);
		return r
	}
	function va() {}
	var ya = function(t, e) {
		return (ya = Object.setPrototypeOf || {
					__proto__: []
				}instanceof Array && function(t, e) {
					t.__proto__ = e
				}
				|| function(t, e) {
					for (var n in e)
						e.hasOwnProperty(n) && (t[n] = e[n])
				}
		)(t, e)
	};
	function ga(t, e) {
		function n() {
			this.constructor = t
		}
		ya(t, e),
			t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
				new n)
	}
	var _a, ma, ba, Ea, wa = function() {
		return (wa = Object.assign || function(t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var o in e = arguments[n])
						Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t
			}
		).apply(this, arguments)
	};
	function Sa() {
		for (var t = [], e = 0; e < arguments.length; e++)
			t = t.concat(function(t, e) {
				var n = "function" == typeof Symbol && t[Symbol.iterator];
				if (!n)
					return t;
				var r, o, i = n.call(t), a = [];
				try {
					for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
						a.push(r.value)
				} catch (t) {
					o = {
						error: t
					}
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					} finally {
						if (o)
							throw o.error
					}
				}
				return a
			}(arguments[e]));
		return t
	}
	function xa() {
		for (var t = [], e = 0; e < arguments.length; e++)
			t = t.concat(function(t, e) {
				var n = "function" == typeof Symbol && t[Symbol.iterator];
				if (!n)
					return t;
				var r, o, i = n.call(t), a = [];
				try {
					for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
						a.push(r.value)
				} catch (t) {
					o = {
						error: t
					}
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					} finally {
						if (o)
							throw o.error
					}
				}
				return a
			}(arguments[e]));
		return t
	}
	(d = _a = _a || {}).Fatal = "fatal",
		d.Error = "error",
		d.Warning = "warning",
		d.Log = "log",
		d.Info = "info",
		d.Debug = "debug",
		d.Critical = "critical",
		(ma = _a = _a || {}).fromString = function(t) {
			switch (t) {
				case "debug":
					return ma.Debug;
				case "info":
					return ma.Info;
				case "warn":
				case "warning":
					return ma.Warning;
				case "error":
					return ma.Error;
				case "fatal":
					return ma.Fatal;
				case "critical":
					return ma.Critical;
				case "log":
				default:
					return ma.Log
			}
		}
		,
		(nt = ba = ba || {}).Unknown = "unknown",
		nt.Skipped = "skipped",
		nt.Success = "success",
		nt.RateLimit = "rate_limit",
		nt.Invalid = "invalid",
		nt.Failed = "failed",
		(Ea = ba = ba || {}).fromHttpCode = function(t) {
			return 200 <= t && t < 300 ? Ea.Success : 429 === t ? Ea.RateLimit : 400 <= t && t < 500 ? Ea.Invalid : 500 <= t ? Ea.Failed : Ea.Unknown
		}
	;
	var Oa = function() {
		return (Oa = Object.assign || function(t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var o in e = arguments[n])
						Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t
			}
		).apply(this, arguments)
	};
	function ja() {
		for (var t = [], e = 0; e < arguments.length; e++)
			t = t.concat(function(t, e) {
				var n = "function" == typeof Symbol && t[Symbol.iterator];
				if (!n)
					return t;
				var r, o, i = n.call(t), a = [];
				try {
					for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
						a.push(r.value)
				} catch (t) {
					o = {
						error: t
					}
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					} finally {
						if (o)
							throw o.error
					}
				}
				return a
			}(arguments[e]));
		return t
	}
	var ka = function(t, e) {
		return (ka = Object.setPrototypeOf || {
					__proto__: []
				}instanceof Array && function(t, e) {
					t.__proto__ = e
				}
				|| function(t, e) {
					for (var n in e)
						e.hasOwnProperty(n) && (t[n] = e[n])
				}
		)(t, e)
	};
	var Ta = function() {
		return (Ta = Object.assign || function(t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var o in e = arguments[n])
						Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t
			}
		).apply(this, arguments)
	};
	var Ra = Object.setPrototypeOf || ({
			__proto__: []
		}instanceof Array ? function(t, e) {
				return t.__proto__ = e,
					t
			}
			: function(t, e) {
				for (var n in e)
					t.hasOwnProperty(n) || (t[n] = e[n]);
				return t
			}
	);
	var Na, Da, Pa, Ia = (Na = Error,
		ka(Da = Ma, Pa = Na),
		Da.prototype = null === Pa ? Object.create(Pa) : (La.prototype = Pa.prototype,
			new La),
		Ma);
	function La() {
		this.constructor = Da
	}
	function Ma(t) {
		var e = this.constructor
			, n = Na.call(this, t) || this;
		return n.message = t,
			n.name = e.prototype.constructor.name,
			Ra(n, e.prototype),
			n
	}
	function Ca(t) {
		switch (Object.prototype.toString.call(t)) {
			case "[object Error]":
			case "[object Exception]":
			case "[object DOMException]":
				return 1;
			default:
				return Ya(t, Error)
		}
	}
	function Aa(t) {
		return "[object ErrorEvent]" === Object.prototype.toString.call(t)
	}
	function Ua(t) {
		return "[object DOMError]" === Object.prototype.toString.call(t)
	}
	function Fa(t) {
		return "[object String]" === Object.prototype.toString.call(t)
	}
	function Ha(t) {
		return null === t || "object" != typeof t && "function" != typeof t
	}
	function Ba(t) {
		return "[object Object]" === Object.prototype.toString.call(t)
	}
	function qa(t) {
		return "undefined" != typeof Event && Ya(t, Event)
	}
	function Wa(t) {
		return "undefined" != typeof Element && Ya(t, Element)
	}
	function Ga(t) {
		return Boolean(t && t.then && "function" == typeof t.then)
	}
	function Ya(t, e) {
		try {
			return t instanceof e
		} catch (t) {
			return !1
		}
	}
	function Va(t, e) {
		return void 0 === e && (e = 0),
			"string" != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "..."
	}
	function za(t, e) {
		if (!Array.isArray(t))
			return "";
		for (var n = [], r = 0; r < t.length; r++) {
			var o = t[r];
			try {
				n.push(String(o))
			} catch (t) {
				n.push("[value cannot be serialized]")
			}
		}
		return n.join(e)
	}
	function Ja(t, e) {
		return !!Fa(t) && ("[object RegExp]" === Object.prototype.toString.call(e) ? e.test(t) : "string" == typeof e && -1 !== t.indexOf(e))
	}
	function Xa() {
		return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
	}
	var $a = {};
	function Ka() {
		return Xa() ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : $a
	}
	function Qa() {
		var t = Ka()
			, e = t.crypto || t.msCrypto;
		if (void 0 !== e && e.getRandomValues) {
			t = new Uint16Array(8);
			e.getRandomValues(t),
				t[3] = 4095 & t[3] | 16384,
				t[4] = 16383 & t[4] | 32768;
			e = function(t) {
				for (var e = t.toString(16); e.length < 4; )
					e = "0" + e;
				return e
			}
			;
			return e(t[0]) + e(t[1]) + e(t[2]) + e(t[3]) + e(t[4]) + e(t[5]) + e(t[6]) + e(t[7])
		}
		return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(t) {
			var e = 16 * Math.random() | 0;
			return ("x" === t ? e : 3 & e | 8).toString(16)
		})
	}
	function Za(t) {
		if (!t)
			return {};
		var e = t.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
		if (!e)
			return {};
		var n = e[6] || ""
			, t = e[8] || "";
		return {
			host: e[4],
			path: e[5],
			protocol: e[2],
			relative: e[5] + n + t
		}
	}
	function ts(t) {
		if (t.message)
			return t.message;
		if (t.exception && t.exception.values && t.exception.values[0]) {
			var e = t.exception.values[0];
			return e.type && e.value ? e.type + ": " + e.value : e.type || e.value || t.event_id || "<unknown>"
		}
		return t.event_id || "<unknown>"
	}
	function es(t) {
		var e = Ka();
		if (!("console"in e))
			return t();
		var n = e.console
			, r = {};
		["debug", "info", "warn", "error", "log", "assert"].forEach(function(t) {
			t in e.console && n[t].__sentry_original__ && (r[t] = n[t],
				n[t] = n[t].__sentry_original__)
		});
		t = t();
		return Object.keys(r).forEach(function(t) {
			n[t] = r[t]
		}),
			t
	}
	function ns(t, e, n) {
		t.exception = t.exception || {},
			t.exception.values = t.exception.values || [],
			t.exception.values[0] = t.exception.values[0] || {},
			t.exception.values[0].value = t.exception.values[0].value || e || "",
			t.exception.values[0].type = t.exception.values[0].type || n || "Error"
	}
	function rs(e, n) {
		void 0 === n && (n = {});
		try {
			e.exception.values[0].mechanism = e.exception.values[0].mechanism || {},
				Object.keys(n).forEach(function(t) {
					e.exception.values[0].mechanism[t] = n[t]
				})
		} catch (t) {}
	}
	function os(t) {
		try {
			for (var e, n = t, r = [], o = 0, i = 0, a = " > ".length; n && o++ < 5 && !("html" === (e = function(t) {
				var e, n, r, o, i = t, a = [];
				if (!i || !i.tagName)
					return "";
				a.push(i.tagName.toLowerCase()),
				i.id && a.push("#" + i.id);
				if ((t = i.className) && Fa(t))
					for (e = t.split(/\s+/),
						     o = 0; o < e.length; o++)
						a.push("." + e[o]);
				var s = ["type", "name", "title", "alt"];
				for (o = 0; o < s.length; o++)
					n = s[o],
					(r = i.getAttribute(n)) && a.push("[" + n + '="' + r + '"]');
				return a.join("")
			}(n)) || 1 < o && 80 <= i + r.length * a + e.length); )
				r.push(e),
					i += e.length,
					n = n.parentNode;
			return r.reverse().join(" > ")
		} catch (t) {
			return "<unknown>"
		}
	}
	var is = Date.now()
		, as = 0
		, ss = {
		now: function() {
			var t = Date.now() - is;
			return as = t = t < as ? as : t
		},
		timeOrigin: is
	}
		, cs = function() {
		if (Xa())
			try {
				return (t = module,
					e = "perf_hooks",
					t.require(e)).performance
			} catch (t) {
				return ss
			}
		var t, e;
		return Ka().performance && void 0 === performance.timeOrigin && (performance.timeOrigin = performance.timing && performance.timing.navigationStart || is),
		Ka().performance || ss
	}();
	function us() {
		return (cs.timeOrigin + cs.now()) / 1e3
	}
	function ls(t, e) {
		if (!e)
			return 6e4;
		var n = parseInt("" + e, 10);
		if (!isNaN(n))
			return 1e3 * n;
		e = Date.parse("" + e);
		return isNaN(e) ? 6e4 : e - t
	}
	var ps = "<anonymous>";
	function fs(t) {
		try {
			return t && "function" == typeof t ? t.name || ps : ps
		} catch (t) {
			return ps
		}
	}
	var hs = Ka()
		, ds = "Sentry Logger "
		, m = (vs.prototype.disable = function() {
		this._enabled = !1
	}
		,
		vs.prototype.enable = function() {
			this._enabled = !0
		}
		,
		vs.prototype.log = function() {
			for (var t = [], e = 0; e < arguments.length; e++)
				t[e] = arguments[e];
			this._enabled && es(function() {
				hs.console.log(ds + "[Log]: " + t.join(" "))
			})
		}
		,
		vs.prototype.warn = function() {
			for (var t = [], e = 0; e < arguments.length; e++)
				t[e] = arguments[e];
			this._enabled && es(function() {
				hs.console.warn(ds + "[Warn]: " + t.join(" "))
			})
		}
		,
		vs.prototype.error = function() {
			for (var t = [], e = 0; e < arguments.length; e++)
				t[e] = arguments[e];
			this._enabled && es(function() {
				hs.console.error(ds + "[Error]: " + t.join(" "))
			})
		}
		,
		vs);
	function vs() {
		this._enabled = !1
	}
	hs.__SENTRY__ = hs.__SENTRY__ || {};
	var ys, gs = hs.__SENTRY__.logger || (hs.__SENTRY__.logger = new m), _s = (ms.prototype.memoize = function(t) {
		if (this._hasWeakSet)
			return !!this._inner.has(t) || (this._inner.add(t),
				!1);
		for (var e = 0; e < this._inner.length; e++)
			if (this._inner[e] === t)
				return !0;
		return this._inner.push(t),
			!1
	}
		,
		ms.prototype.unmemoize = function(t) {
			if (this._hasWeakSet)
				this._inner.delete(t);
			else
				for (var e = 0; e < this._inner.length; e++)
					if (this._inner[e] === t) {
						this._inner.splice(e, 1);
						break
					}
		}
		,
		ms);
	function ms() {
		this._hasWeakSet = "function" == typeof WeakSet,
			this._inner = this._hasWeakSet ? new WeakSet : []
	}
	function bs(t, e, n) {
		if (e in t) {
			var r = t[e]
				, n = n(r);
			if ("function" == typeof n)
				try {
					n.prototype = n.prototype || {},
						Object.defineProperties(n, {
							__sentry_original__: {
								enumerable: !1,
								value: r
							}
						})
				} catch (t) {}
			t[e] = n
		}
	}
	function Es(t) {
		if (Ca(t)) {
			var e = t
				, n = {
				message: e.message,
				name: e.name,
				stack: e.stack
			};
			for (r in e)
				Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
			return n
		}
		if (qa(t)) {
			var r, o = t, i = {};
			i.type = o.type;
			try {
				i.target = Wa(o.target) ? os(o.target) : Object.prototype.toString.call(o.target)
			} catch (t) {
				i.target = "<unknown>"
			}
			try {
				i.currentTarget = Wa(o.currentTarget) ? os(o.currentTarget) : Object.prototype.toString.call(o.currentTarget)
			} catch (t) {
				i.currentTarget = "<unknown>"
			}
			for (r in "undefined" != typeof CustomEvent && Ya(t, CustomEvent) && (i.detail = o.detail),
				o)
				Object.prototype.hasOwnProperty.call(o, r) && (i[r] = o);
			return i
		}
		return t
	}
	function ws(t) {
		return t = JSON.stringify(t),
			~-encodeURI(t).split(/%..|./).length
	}
	function Ss(t, e) {
		return "domain" === e && t && "object" == typeof t && t._events ? "[Domain]" : "domainEmitter" === e ? "[DomainEmitter]" : "undefined" != typeof global && t === global ? "[Global]" : "undefined" != typeof window && t === window ? "[Window]" : "undefined" != typeof document && t === document ? "[Document]" : Ba(e = t) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e ? "[SyntheticEvent]" : "number" == typeof t && t != t ? "[NaN]" : void 0 === t ? "[undefined]" : "function" == typeof t ? "[Function: " + fs(t) + "]" : t
	}
	function xs(t, e, n, r) {
		if (void 0 === n && (n = 1 / 0),
		void 0 === r && (r = new _s),
		0 === n)
			return o = e,
				i = Object.prototype.toString.call(o),
				"string" == typeof o ? o : "[object Object]" === i ? "[Object]" : "[object Array]" === i ? "[Array]" : Ha(o = Ss(o)) ? o : i;
		var o, i;
		if (null != e && "function" == typeof e.toJSON)
			return e.toJSON();
		t = Ss(e, t);
		if (Ha(t))
			return t;
		var a, s = Es(e), c = Array.isArray(e) ? [] : {};
		if (r.memoize(e))
			return "[Circular ~]";
		for (a in s)
			Object.prototype.hasOwnProperty.call(s, a) && (c[a] = xs(a, s[a], n - 1, r));
		return r.unmemoize(e),
			c
	}
	function Os(t, n) {
		try {
			return JSON.parse(JSON.stringify(t, function(t, e) {
				return xs(t, e, n)
			}))
		} catch (t) {
			return "**non-serializable**"
		}
	}
	(lt = ys = ys || {}).PENDING = "PENDING",
		lt.RESOLVED = "RESOLVED",
		lt.REJECTED = "REJECTED";
	var js = (ks.prototype.toString = function() {
		return "[object SyncPromise]"
	}
		,
		ks.resolve = function(e) {
			return new ks(function(t) {
					t(e)
				}
			)
		}
		,
		ks.reject = function(n) {
			return new ks(function(t, e) {
					e(n)
				}
			)
		}
		,
		ks.all = function(t) {
			return new ks(function(n, r) {
					var o, i;
					Array.isArray(t) ? 0 !== t.length ? (o = t.length,
						i = [],
						t.forEach(function(t, e) {
							ks.resolve(t).then(function(t) {
								i[e] = t,
								0 === --o && n(i)
							}).then(null, r)
						})) : n([]) : r(new TypeError("Promise.all requires an array as input."))
				}
			)
		}
		,
		ks.prototype.then = function(r, o) {
			var t = this;
			return new ks(function(e, n) {
					t._attachHandler({
						done: !1,
						onfulfilled: function(t) {
							if (r)
								try {
									return void e(r(t))
								} catch (t) {
									return void n(t)
								}
							else
								e(t)
						},
						onrejected: function(t) {
							if (o)
								try {
									return void e(o(t))
								} catch (t) {
									return void n(t)
								}
							else
								n(t)
						}
					})
				}
			)
		}
		,
		ks.prototype.catch = function(t) {
			return this.then(function(t) {
				return t
			}, t)
		}
		,
		ks.prototype.finally = function(o) {
			var i = this;
			return new ks(function(t, e) {
					var n, r;
					return i.then(function(t) {
						r = !1,
							n = t,
						o && o()
					}, function(t) {
						r = !0,
							n = t,
						o && o()
					}).then(function() {
						(r ? e : t)(n)
					})
				}
			)
		}
		,
		ks);
	function ks(t) {
		var n = this;
		this._state = ys.PENDING,
			this._handlers = [],
			this._resolve = function(t) {
				n._setResult(ys.RESOLVED, t)
			}
			,
			this._reject = function(t) {
				n._setResult(ys.REJECTED, t)
			}
			,
			this._setResult = function(t, e) {
				n._state === ys.PENDING && (Ga(e) ? e.then(n._resolve, n._reject) : (n._state = t,
					n._value = e,
					n._executeHandlers()))
			}
			,
			this._attachHandler = function(t) {
				n._handlers = n._handlers.concat(t),
					n._executeHandlers()
			}
			,
			this._executeHandlers = function() {
				var t;
				n._state !== ys.PENDING && (t = n._handlers.slice(),
					n._handlers = [],
					t.forEach(function(t) {
						t.done || (n._state === ys.RESOLVED && t.onfulfilled && t.onfulfilled(n._value),
						n._state === ys.REJECTED && t.onrejected && t.onrejected(n._value),
							t.done = !0)
					}))
			}
		;
		try {
			t(this._resolve, this._reject)
		} catch (t) {
			this._reject(t)
		}
	}
	var Ts = (Rs.prototype.isReady = function() {
		return void 0 === this._limit || this.length() < this._limit
	}
		,
		Rs.prototype.add = function(t) {
			var e = this;
			return this.isReady() ? (-1 === this._buffer.indexOf(t) && this._buffer.push(t),
				t.then(function() {
					return e.remove(t)
				}).then(null, function() {
					return e.remove(t).then(null, function() {})
				}),
				t) : js.reject(new Ia("Not adding Promise due to buffer limit reached."))
		}
		,
		Rs.prototype.remove = function(t) {
			return this._buffer.splice(this._buffer.indexOf(t), 1)[0]
		}
		,
		Rs.prototype.length = function() {
			return this._buffer.length
		}
		,
		Rs.prototype.drain = function(n) {
			var r = this;
			return new js(function(t) {
					var e = setTimeout(function() {
						n && 0 < n && t(!1)
					}, n);
					js.all(r._buffer).then(function() {
						clearTimeout(e),
							t(!0)
					}).then(null, function() {
						t(!0)
					})
				}
			)
		}
		,
		Rs);
	function Rs(t) {
		this._limit = t,
			this._buffer = []
	}
	function Ns() {
		if ("fetch"in Ka())
			try {
				return new Headers,
					new Request(""),
					new Response,
					1
			} catch (t) {
				return
			}
	}
	function Ds(t) {
		return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
	}
	var Ps, Is = Ka(), Ls = {}, Ms = {};
	function Cs(t) {
		var r, e;
		if (!Ms[t])
			switch (Ms[t] = !0,
				t) {
				case "console":
					"console"in Is && ["debug", "info", "warn", "error", "log", "assert"].forEach(function(r) {
						r in Is.console && bs(Is.console, r, function(n) {
							return function() {
								for (var t = [], e = 0; e < arguments.length; e++)
									t[e] = arguments[e];
								Us("console", {
									args: t,
									level: r
								}),
								n && Function.prototype.apply.call(n, Is.console, t)
							}
						})
					});
					break;
				case "dom":
					"document"in Is && (Is.document.addEventListener("click", Ws("click", Us.bind(null, "dom")), !1),
						Is.document.addEventListener("keypress", Gs(Us.bind(null, "dom")), !1),
						["EventTarget", "Node"].forEach(function(t) {
							t = Is[t] && Is[t].prototype;
							t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (bs(t, "addEventListener", function(r) {
								return function(t, e, n) {
									return e && e.handleEvent ? ("click" === t && bs(e, "handleEvent", function(e) {
										return function(t) {
											return Ws("click", Us.bind(null, "dom"))(t),
												e.call(this, t)
										}
									}),
									"keypress" === t && bs(e, "handleEvent", function(e) {
										return function(t) {
											return Gs(Us.bind(null, "dom"))(t),
												e.call(this, t)
										}
									})) : ("click" === t && Ws("click", Us.bind(null, "dom"), !0)(this),
									"keypress" === t && Gs(Us.bind(null, "dom"))(this)),
										r.call(this, t, e, n)
								}
							}),
								bs(t, "removeEventListener", function(r) {
									return function(t, e, n) {
										try {
											e = e && (e.__sentry_wrapped__ || e)
										} catch (t) {}
										return r.call(this, t, e, n)
									}
								}))
						}));
					break;
				case "xhr":
					"XMLHttpRequest"in Is && (bs(e = XMLHttpRequest.prototype, "open", function(r) {
						return function() {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							var n = t[1];
							return this.__sentry_xhr__ = {
								method: Fa(t[0]) ? t[0].toUpperCase() : t[0],
								url: t[1]
							},
							Fa(n) && "POST" === this.__sentry_xhr__.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0),
								r.apply(this, t)
						}
					}),
						bs(e, "send", function(o) {
							return function() {
								for (var t = [], e = 0; e < arguments.length; e++)
									t[e] = arguments[e];
								var n = this
									, r = {
									args: t,
									startTimestamp: Date.now(),
									xhr: n
								};
								return Us("xhr", Ta({}, r)),
									n.addEventListener("readystatechange", function() {
										if (4 === n.readyState) {
											try {
												n.__sentry_xhr__ && (n.__sentry_xhr__.status_code = n.status)
											} catch (t) {}
											Us("xhr", Ta({}, r, {
												endTimestamp: Date.now()
											}))
										}
									}),
									o.apply(this, t)
							}
						}));
					break;
				case "fetch":
					!function() {
						if (Ns()) {
							var t = Ka();
							if (Ds(t.fetch))
								return 1;
							var e = !1
								, t = t.document;
							if (t && "function" == typeof t.createElement)
								try {
									var n = t.createElement("iframe");
									n.hidden = !0,
										t.head.appendChild(n),
									n.contentWindow && n.contentWindow.fetch && (e = Ds(n.contentWindow.fetch)),
										t.head.removeChild(n)
								} catch (t) {
									gs.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", t)
								}
							return e
						}
					}() || bs(Is, "fetch", function(r) {
						return function() {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							var n = {
								args: t,
								fetchData: {
									method: function(t) {
										void 0 === t && (t = []);
										if ("Request"in Is && Ya(t[0], Request) && t[0].method)
											return String(t[0].method).toUpperCase();
										if (t[1] && t[1].method)
											return String(t[1].method).toUpperCase();
										return "GET"
									}(t),
									url: function(t) {
										void 0 === t && (t = []);
										if ("string" == typeof t[0])
											return t[0];
										if ("Request"in Is && Ya(t[0], Request))
											return t[0].url;
										return String(t[0])
									}(t)
								},
								startTimestamp: Date.now()
							};
							return Us("fetch", Ta({}, n)),
								r.apply(Is, t).then(function(t) {
									return Us("fetch", Ta({}, n, {
										endTimestamp: Date.now(),
										response: t
									})),
										t
								}, function(t) {
									throw Us("fetch", Ta({}, n, {
										endTimestamp: Date.now(),
										error: t
									})),
										t
								})
						}
					});
					break;
				case "history":
					!function() {
						var t = Ka()
							, e = (e = t.chrome) && e.app && e.app.runtime
							, t = "history"in t && !!t.history.pushState && !!t.history.replaceState;
						return !e && t
					}() || (r = Is.onpopstate,
						Is.onpopstate = function() {
							for (var t = [], e = 0; e < arguments.length; e++)
								t[e] = arguments[e];
							var n = Is.location.href;
							if (Us("history", {
								from: Ps,
								to: Ps = n
							}),
								r)
								return r.apply(this, t)
						}
						,
						bs(Is.history, "pushState", n),
						bs(Is.history, "replaceState", n));
					break;
				case "error":
					Ys = Is.onerror,
						Is.onerror = function(t, e, n, r, o) {
							return Us("error", {
								column: r,
								error: o,
								line: n,
								msg: t,
								url: e
							}),
							!!Ys && Ys.apply(this, arguments)
						}
					;
					break;
				case "unhandledrejection":
					Vs = Is.onunhandledrejection,
						Is.onunhandledrejection = function(t) {
							return Us("unhandledrejection", t),
							!Vs || Vs.apply(this, arguments)
						}
					;
					break;
				default:
					gs.warn("unknown instrumentation type:", t)
			}
		function n(o) {
			return function() {
				for (var t = [], e = 0; e < arguments.length; e++)
					t[e] = arguments[e];
				var n, r = 2 < t.length ? t[2] : void 0;
				return r && (n = Ps,
					r = String(r),
					Us("history", {
						from: n,
						to: Ps = r
					})),
					o.apply(this, t)
			}
		}
	}
	function As(t) {
		t && "string" == typeof t.type && "function" == typeof t.callback && (Ls[t.type] = Ls[t.type] || [],
			Ls[t.type].push(t.callback),
			Cs(t.type))
	}
	function Us(e, t) {
		var n, r;
		if (e && Ls[e])
			try {
				for (var o = function(t) {
					var e = "function" == typeof Symbol && Symbol.iterator
						, n = e && t[e]
						, r = 0;
					if (n)
						return n.call(t);
					if (t && "number" == typeof t.length)
						return {
							next: function() {
								return {
									value: (t = t && r >= t.length ? void 0 : t) && t[r++],
									done: !t
								}
							}
						};
					throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
				}(Ls[e] || []), i = o.next(); !i.done; i = o.next()) {
					var a = i.value;
					try {
						a(t)
					} catch (t) {
						gs.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + fs(a) + "\nError: " + t)
					}
				}
			} catch (t) {
				n = {
					error: t
				}
			} finally {
				try {
					i && !i.done && (r = o.return) && r.call(o)
				} finally {
					if (n)
						throw n.error
				}
			}
	}
	var Fs, Hs, Bs = 1e3, qs = 0;
	function Ws(e, n, r) {
		return void 0 === r && (r = !1),
			function(t) {
				Fs = void 0,
				t && Hs !== t && (Hs = t,
				qs && clearTimeout(qs),
					r ? qs = setTimeout(function() {
						n({
							event: t,
							name: e
						})
					}) : n({
						event: t,
						name: e
					}))
			}
	}
	function Gs(r) {
		return function(t) {
			var e;
			try {
				e = t.target
			} catch (t) {
				return
			}
			var n = e && e.tagName;
			n && ("INPUT" === n || "TEXTAREA" === n || e.isContentEditable) && (Fs || Ws("input", r)(t),
				clearTimeout(Fs),
				Fs = setTimeout(function() {
					Fs = void 0
				}, Bs))
		}
	}
	var Ys = null;
	var Vs = null;
	var zs = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/
		, Js = "Invalid Dsn"
		, Xs = ($s.prototype.toString = function(t) {
		var e = this
			, n = e.host
			, r = e.path
			, o = e.pass
			, i = e.port
			, a = e.projectId;
		return e.protocol + "://" + e.user + ((t = void 0 === t ? !1 : t) && o ? ":" + o : "") + "@" + n + (i ? ":" + i : "") + "/" + (r && r + "/") + a
	}
		,
		$s.prototype._fromString = function(t) {
			var e = zs.exec(t);
			if (!e)
				throw new Ia(Js);
			var n = function(t, e) {
				var n = "function" == typeof Symbol && t[Symbol.iterator];
				if (!n)
					return t;
				var r, o, i = n.call(t), a = [];
				try {
					for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
						a.push(r.value)
				} catch (t) {
					o = {
						error: t
					}
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					} finally {
						if (o)
							throw o.error
					}
				}
				return a
			}(e.slice(1), 6)
				, r = n[0]
				, o = n[1]
				, i = n[2]
				, a = void 0 === i ? "" : i
				, s = n[3]
				, t = n[4]
				, e = void 0 === t ? "" : t
				, i = ""
				, t = n[5]
				, n = t.split("/");
			1 < n.length && (i = n.slice(0, -1).join("/"),
				t = n.pop()),
				this._fromComponents({
					host: s,
					pass: a,
					path: i,
					projectId: t,
					port: e,
					protocol: r,
					user: o
				})
		}
		,
		$s.prototype._fromComponents = function(t) {
			this.protocol = t.protocol,
				this.user = t.user,
				this.pass = t.pass || "",
				this.host = t.host,
				this.port = t.port || "",
				this.path = t.path || "",
				this.projectId = t.projectId
		}
		,
		$s.prototype._validate = function() {
			var e = this;
			if (["protocol", "user", "host", "projectId"].forEach(function(t) {
				if (!e[t])
					throw new Ia(Js)
			}),
			"http" !== this.protocol && "https" !== this.protocol)
				throw new Ia(Js);
			if (this.port && isNaN(parseInt(this.port, 10)))
				throw new Ia(Js)
		}
		,
		$s);
	function $s(t) {
		"string" == typeof t ? this._fromString(t) : this._fromComponents(t),
			this._validate()
	}
	var Ks = (Qs.prototype.addScopeListener = function(t) {
		this._scopeListeners.push(t)
	}
		,
		Qs.prototype.addEventProcessor = function(t) {
			return this._eventProcessors.push(t),
				this
		}
		,
		Qs.prototype._notifyScopeListeners = function() {
			var e = this;
			this._notifyingListeners || (this._notifyingListeners = !0,
				setTimeout(function() {
					e._scopeListeners.forEach(function(t) {
						t(e)
					}),
						e._notifyingListeners = !1
				}))
		}
		,
		Qs.prototype._notifyEventProcessors = function(r, o, i, a) {
			var s = this;
			return void 0 === a && (a = 0),
				new js(function(e, t) {
						var n = r[a];
						null === o || "function" != typeof n ? e(o) : (Ga(n = n(Oa({}, o), i)) ? n.then(function(t) {
							return s._notifyEventProcessors(r, t, i, a + 1).then(e)
						}) : s._notifyEventProcessors(r, n, i, a + 1).then(e)).then(null, t)
					}
				)
		}
		,
		Qs.prototype.setUser = function(t) {
			return this._user = t || {},
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.setTags = function(t) {
			return this._tags = Oa({}, this._tags, t),
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.setTag = function(t, e) {
			var n;
			return this._tags = Oa({}, this._tags, ((n = {})[t] = e,
				n)),
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.setExtras = function(t) {
			return this._extra = Oa({}, this._extra, t),
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.setExtra = function(t, e) {
			var n;
			return this._extra = Oa({}, this._extra, ((n = {})[t] = e,
				n)),
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.setFingerprint = function(t) {
			return this._fingerprint = t,
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.setLevel = function(t) {
			return this._level = t,
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.setTransaction = function(t) {
			return this._transaction = t,
			this._span && (this._span.transaction = t),
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.setContext = function(t, e) {
			var n;
			return this._context = Oa({}, this._context, ((n = {})[t] = e,
				n)),
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.setSpan = function(t) {
			return this._span = t,
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.getSpan = function() {
			return this._span
		}
		,
		Qs.clone = function(t) {
			var e = new Qs;
			return t && (e._breadcrumbs = ja(t._breadcrumbs),
				e._tags = Oa({}, t._tags),
				e._extra = Oa({}, t._extra),
				e._context = Oa({}, t._context),
				e._user = t._user,
				e._level = t._level,
				e._span = t._span,
				e._transaction = t._transaction,
				e._fingerprint = t._fingerprint,
				e._eventProcessors = ja(t._eventProcessors)),
				e
		}
		,
		Qs.prototype.clear = function() {
			return this._breadcrumbs = [],
				this._tags = {},
				this._extra = {},
				this._user = {},
				this._context = {},
				this._level = void 0,
				this._transaction = void 0,
				this._fingerprint = void 0,
				this._span = void 0,
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.addBreadcrumb = function(t, e) {
			t = Oa({
				timestamp: us()
			}, t);
			return this._breadcrumbs = void 0 !== e && 0 <= e ? ja(this._breadcrumbs, [t]).slice(-e) : ja(this._breadcrumbs, [t]),
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype.clearBreadcrumbs = function() {
			return this._breadcrumbs = [],
				this._notifyScopeListeners(),
				this
		}
		,
		Qs.prototype._applyFingerprint = function(t) {
			t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [],
			this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)),
			t.fingerprint && !t.fingerprint.length && delete t.fingerprint
		}
		,
		Qs.prototype.applyToEvent = function(t, e) {
			return this._extra && Object.keys(this._extra).length && (t.extra = Oa({}, this._extra, t.extra)),
			this._tags && Object.keys(this._tags).length && (t.tags = Oa({}, this._tags, t.tags)),
			this._user && Object.keys(this._user).length && (t.user = Oa({}, this._user, t.user)),
			this._context && Object.keys(this._context).length && (t.contexts = Oa({}, this._context, t.contexts)),
			this._level && (t.level = this._level),
			this._transaction && (t.transaction = this._transaction),
			this._span && (t.contexts = Oa({
				trace: this._span.getTraceContext()
			}, t.contexts)),
				this._applyFingerprint(t),
				t.breadcrumbs = ja(t.breadcrumbs || [], this._breadcrumbs),
				t.breadcrumbs = 0 < t.breadcrumbs.length ? t.breadcrumbs : void 0,
				this._notifyEventProcessors(ja(Zs(), this._eventProcessors), t, e)
		}
		,
		Qs);
	function Qs() {
		this._notifyingListeners = !1,
			this._scopeListeners = [],
			this._eventProcessors = [],
			this._breadcrumbs = [],
			this._user = {},
			this._tags = {},
			this._extra = {},
			this._context = {}
	}
	function Zs() {
		var t = Ka();
		return t.__SENTRY__ = t.__SENTRY__ || {},
			t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [],
			t.__SENTRY__.globalEventProcessors
	}
	function tc(t) {
		Zs().push(t)
	}
	var ec = 3
		, nc = (rc.prototype._invokeClient = function(t) {
		for (var e, n = [], r = 1; r < arguments.length; r++)
			n[r - 1] = arguments[r];
		var o = this.getStackTop();
		o && o.client && o.client[t] && (e = o.client)[t].apply(e, ja(n, [o.scope]))
	}
		,
		rc.prototype.isOlderThan = function(t) {
			return this._version < t
		}
		,
		rc.prototype.bindClient = function(t) {
			(this.getStackTop().client = t) && t.setupIntegrations && t.setupIntegrations()
		}
		,
		rc.prototype.pushScope = function() {
			var t = this.getStack()
				, t = 0 < t.length ? t[t.length - 1].scope : void 0
				, t = Ks.clone(t);
			return this.getStack().push({
				client: this.getClient(),
				scope: t
			}),
				t
		}
		,
		rc.prototype.popScope = function() {
			return void 0 !== this.getStack().pop()
		}
		,
		rc.prototype.withScope = function(t) {
			var e = this.pushScope();
			try {
				t(e)
			} finally {
				this.popScope()
			}
		}
		,
		rc.prototype.getClient = function() {
			return this.getStackTop().client
		}
		,
		rc.prototype.getScope = function() {
			return this.getStackTop().scope
		}
		,
		rc.prototype.getStack = function() {
			return this._stack
		}
		,
		rc.prototype.getStackTop = function() {
			return this._stack[this._stack.length - 1]
		}
		,
		rc.prototype.captureException = function(t, e) {
			var n = this._lastEventId = Qa()
				, r = e;
			if (!e) {
				e = void 0;
				try {
					throw new Error("Sentry syntheticException")
				} catch (t) {
					e = t
				}
				r = {
					originalException: t,
					syntheticException: e
				}
			}
			return this._invokeClient("captureException", t, Oa({}, r, {
				event_id: n
			})),
				n
		}
		,
		rc.prototype.captureMessage = function(t, e, n) {
			var r = this._lastEventId = Qa()
				, o = n;
			if (!n) {
				n = void 0;
				try {
					throw new Error(t)
				} catch (t) {
					n = t
				}
				o = {
					originalException: t,
					syntheticException: n
				}
			}
			return this._invokeClient("captureMessage", t, e, Oa({}, o, {
				event_id: r
			})),
				r
		}
		,
		rc.prototype.captureEvent = function(t, e) {
			var n = this._lastEventId = Qa();
			return this._invokeClient("captureEvent", t, Oa({}, e, {
				event_id: n
			})),
				n
		}
		,
		rc.prototype.lastEventId = function() {
			return this._lastEventId
		}
		,
		rc.prototype.addBreadcrumb = function(t, e) {
			var n, r, o, i, a = this.getStackTop();
			a.scope && a.client && (o = (r = a.client.getOptions && a.client.getOptions() || {}).beforeBreadcrumb,
				n = void 0 === o ? null : o,
			(r = void 0 === (o = r.maxBreadcrumbs) ? 100 : o) <= 0 || (o = us(),
				i = Oa({
					timestamp: o
				}, t),
			null !== (t = n ? es(function() {
				return n(i, e)
			}) : i) && a.scope.addBreadcrumb(t, Math.min(r, 100))))
		}
		,
		rc.prototype.setUser = function(t) {
			var e = this.getStackTop();
			e.scope && e.scope.setUser(t)
		}
		,
		rc.prototype.setTags = function(t) {
			var e = this.getStackTop();
			e.scope && e.scope.setTags(t)
		}
		,
		rc.prototype.setExtras = function(t) {
			var e = this.getStackTop();
			e.scope && e.scope.setExtras(t)
		}
		,
		rc.prototype.setTag = function(t, e) {
			var n = this.getStackTop();
			n.scope && n.scope.setTag(t, e)
		}
		,
		rc.prototype.setExtra = function(t, e) {
			var n = this.getStackTop();
			n.scope && n.scope.setExtra(t, e)
		}
		,
		rc.prototype.setContext = function(t, e) {
			var n = this.getStackTop();
			n.scope && n.scope.setContext(t, e)
		}
		,
		rc.prototype.configureScope = function(t) {
			var e = this.getStackTop();
			e.scope && e.client && t(e.scope)
		}
		,
		rc.prototype.run = function(t) {
			var e = ic(this);
			try {
				t(this)
			} finally {
				ic(e)
			}
		}
		,
		rc.prototype.getIntegration = function(e) {
			var t = this.getClient();
			if (!t)
				return null;
			try {
				return t.getIntegration(e)
			} catch (t) {
				return gs.warn("Cannot retrieve integration " + e.id + " from the current Hub"),
					null
			}
		}
		,
		rc.prototype.startSpan = function(t, e) {
			return this._callExtensionMethod("startSpan", t, e = void 0 === e ? !1 : e)
		}
		,
		rc.prototype.traceHeaders = function() {
			return this._callExtensionMethod("traceHeaders")
		}
		,
		rc.prototype._callExtensionMethod = function(t) {
			for (var e = [], n = 1; n < arguments.length; n++)
				e[n - 1] = arguments[n];
			var r = oc().__SENTRY__;
			if (r && r.extensions && "function" == typeof r.extensions[t])
				return r.extensions[t].apply(this, e);
			gs.warn("Extension method " + t + " couldn't be found, doing nothing.")
		}
		,
		rc);
	function rc(t, e, n) {
		void 0 === e && (e = new Ks),
			this._version = n = void 0 === n ? ec : n,
			this._stack = [],
			this._stack.push({
				client: t,
				scope: e
			})
	}
	function oc() {
		var t = Ka();
		return t.__SENTRY__ = t.__SENTRY__ || {
			extensions: {},
			hub: void 0
		},
			t
	}
	function ic(t) {
		var e = oc()
			, n = cc(e);
		return uc(e, t),
			n
	}
	function ac() {
		var t = oc();
		return sc(t) && !cc(t).isOlderThan(ec) || uc(t, new nc),
			(Xa() ? function(e) {
					try {
						var t = oc().__SENTRY__;
						if (!t || !t.extensions || !t.extensions.domain)
							return cc(e);
						var n, r = t.extensions.domain.active;
						return r ? (sc(r) && !cc(r).isOlderThan(ec) || (n = cc(e).getStackTop(),
							uc(r, new nc(n.client,Ks.clone(n.scope)))),
							cc(r)) : cc(e)
					} catch (t) {
						return cc(e)
					}
				}
				: cc)(t)
	}
	function sc(t) {
		return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
	}
	function cc(t) {
		return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {},
			t.__SENTRY__.hub = new nc),
			t.__SENTRY__.hub
	}
	function uc(t, e) {
		return t && (t.__SENTRY__ = t.__SENTRY__ || {},
			t.__SENTRY__.hub = e,
			1)
	}
	function lc(t) {
		for (var e = [], n = 1; n < arguments.length; n++)
			e[n - 1] = arguments[n];
		var r = ac();
		if (r && r[t])
			return r[t].apply(r, xa(e));
		throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.")
	}
	function pc(t) {
		var e;
		try {
			throw new Error("Sentry syntheticException")
		} catch (t) {
			e = t
		}
		return lc("captureException", t, {
			originalException: t,
			syntheticException: e
		})
	}
	function fc(t) {
		lc("configureScope", t)
	}
	function hc(t) {
		lc("withScope", t)
	}
	var dc = (vc.prototype.getDsn = function() {
		return this._dsnObject
	}
		,
		vc.prototype.getStoreEndpoint = function() {
			return "" + this._getBaseUrl() + this.getStoreEndpointPath()
		}
		,
		vc.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
			var e, t = {
				sentry_key: this._dsnObject.user,
				sentry_version: "7"
			};
			return this.getStoreEndpoint() + "?" + (e = t,
				Object.keys(e).map(function(t) {
					return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
				}).join("&"))
		}
		,
		vc.prototype._getBaseUrl = function() {
			var t = this._dsnObject
				, e = t.protocol ? t.protocol + ":" : ""
				, n = t.port ? ":" + t.port : "";
			return e + "//" + t.host + n
		}
		,
		vc.prototype.getStoreEndpointPath = function() {
			var t = this._dsnObject;
			return (t.path ? "/" + t.path : "") + "/api/" + t.projectId + "/store/"
		}
		,
		vc.prototype.getRequestHeaders = function(t, e) {
			var n = this._dsnObject
				, r = ["Sentry sentry_version=7"];
			return r.push("sentry_client=" + t + "/" + e),
				r.push("sentry_key=" + n.user),
			n.pass && r.push("sentry_secret=" + n.pass),
				{
					"Content-Type": "application/json",
					"X-Sentry-Auth": r.join(", ")
				}
		}
		,
		vc.prototype.getReportDialogEndpoint = function(t) {
			void 0 === t && (t = {});
			var e, n = this._dsnObject, r = this._getBaseUrl() + (n.path ? "/" + n.path : "") + "/api/embed/error-page/", o = [];
			for (e in o.push("dsn=" + n.toString()),
				t)
				"user" === e ? t.user && (t.user.name && o.push("name=" + encodeURIComponent(t.user.name)),
				t.user.email && o.push("email=" + encodeURIComponent(t.user.email))) : o.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
			return o.length ? r + "?" + o.join("&") : r
		}
		,
		vc);
	function vc(t) {
		this.dsn = t,
			this._dsnObject = new Xs(t)
	}
	var yc = function() {
		return (yc = Object.assign || function(t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var o in e = arguments[n])
						Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t
			}
		).apply(this, arguments)
	};
	function gc() {
		for (var t = [], e = 0; e < arguments.length; e++)
			t = t.concat(function(t, e) {
				var n = "function" == typeof Symbol && t[Symbol.iterator];
				if (!n)
					return t;
				var r, o, i = n.call(t), a = [];
				try {
					for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
						a.push(r.value)
				} catch (t) {
					o = {
						error: t
					}
				} finally {
					try {
						r && !r.done && (n = i.return) && n.call(i)
					} finally {
						if (o)
							throw o.error
					}
				}
				return a
			}(arguments[e]));
		return t
	}
	var _c = [];
	function mc(t) {
		var e, n, r, o, i = {};
		return t = (e = t).defaultIntegrations && gc(e.defaultIntegrations) || [],
			e = e.integrations,
			o = [],
			Array.isArray(e) ? (n = e.map(function(t) {
				return t.name
			}),
				r = [],
				t.forEach(function(t) {
					-1 === n.indexOf(t.name) && -1 === r.indexOf(t.name) && (o.push(t),
						r.push(t.name))
				}),
				e.forEach(function(t) {
					-1 === r.indexOf(t.name) && (o.push(t),
						r.push(t.name))
				})) : o = "function" == typeof e ? (o = e(t),
				Array.isArray(o) ? o : [o]) : gc(t),
		-1 !== (t = o.map(function(t) {
			return t.name
		})).indexOf("Debug") && o.push.apply(o, gc(o.splice(t.indexOf("Debug"), 1))),
			o.forEach(function(t) {
				i[t.name] = t,
					t = t,
				-1 === _c.indexOf(t.name) && (t.setupOnce(tc, ac),
					_c.push(t.name),
					gs.log("Integration installed: " + t.name))
			}),
			i
	}
	bc.prototype.captureException = function(t, e, n) {
		var r = this
			, o = e && e.event_id;
		return this._processing = !0,
			this._getBackend().eventFromException(t, e).then(function(t) {
				return r._processEvent(t, e, n)
			}).then(function(t) {
				o = t && t.event_id,
					r._processing = !1
			}).then(null, function(t) {
				gs.error(t),
					r._processing = !1
			}),
			o
	}
		,
		bc.prototype.captureMessage = function(t, e, n, r) {
			var o = this
				, i = n && n.event_id;
			return this._processing = !0,
				(Ha(t) ? this._getBackend().eventFromMessage("" + t, e, n) : this._getBackend().eventFromException(t, n)).then(function(t) {
					return o._processEvent(t, n, r)
				}).then(function(t) {
					i = t && t.event_id,
						o._processing = !1
				}).then(null, function(t) {
					gs.error(t),
						o._processing = !1
				}),
				i
		}
		,
		bc.prototype.captureEvent = function(t, e, n) {
			var r = this
				, o = e && e.event_id;
			return this._processing = !0,
				this._processEvent(t, e, n).then(function(t) {
					o = t && t.event_id,
						r._processing = !1
				}).then(null, function(t) {
					gs.error(t),
						r._processing = !1
				}),
				o
		}
		,
		bc.prototype.getDsn = function() {
			return this._dsn
		}
		,
		bc.prototype.getOptions = function() {
			return this._options
		}
		,
		bc.prototype.flush = function(t) {
			var n = this;
			return this._isClientProcessing(t).then(function(e) {
				return clearInterval(e.interval),
					n._getBackend().getTransport().close(t).then(function(t) {
						return e.ready && t
					})
			})
		}
		,
		bc.prototype.close = function(t) {
			var e = this;
			return this.flush(t).then(function(t) {
				return e.getOptions().enabled = !1,
					t
			})
		}
		,
		bc.prototype.setupIntegrations = function() {
			this._isEnabled() && (this._integrations = mc(this._options))
		}
		,
		bc.prototype.getIntegration = function(e) {
			try {
				return this._integrations[e.id] || null
			} catch (t) {
				return gs.warn("Cannot retrieve integration " + e.id + " from the current Client"),
					null
			}
		}
		,
		bc.prototype._isClientProcessing = function(r) {
			var o = this;
			return new js(function(t) {
					var e = 0
						, n = 0;
					clearInterval(n),
						n = setInterval(function() {
							o._processing ? (e += 1,
							r && r <= e && t({
								interval: n,
								ready: !1
							})) : t({
								interval: n,
								ready: !0
							})
						}, 1)
				}
			)
		}
		,
		bc.prototype._getBackend = function() {
			return this._backend
		}
		,
		bc.prototype._isEnabled = function() {
			return !1 !== this.getOptions().enabled && void 0 !== this._dsn
		}
		,
		bc.prototype._prepareEvent = function(t, e, n) {
			var r = this
				, o = this.getOptions()
				, i = o.environment
				, a = o.release
				, s = o.dist
				, c = o.maxValueLength
				, c = void 0 === c ? 250 : c
				, o = o.normalizeDepth
				, u = void 0 === o ? 3 : o
				, t = yc({}, t);
			void 0 === t.environment && void 0 !== i && (t.environment = i),
			void 0 === t.release && void 0 !== a && (t.release = a),
			void 0 === t.dist && void 0 !== s && (t.dist = s),
			t.message && (t.message = Va(t.message, c));
			s = t.exception && t.exception.values && t.exception.values[0];
			s && s.value && (s.value = Va(s.value, c));
			s = t.request;
			s && s.url && (s.url = Va(s.url, c)),
			void 0 === t.event_id && (t.event_id = n && n.event_id ? n.event_id : Qa()),
				this._addIntegrations(t.sdk);
			c = js.resolve(t);
			return (c = e ? e.applyToEvent(t, n) : c).then(function(t) {
				return "number" == typeof u && 0 < u ? r._normalizeEvent(t, u) : t
			})
		}
		,
		bc.prototype._normalizeEvent = function(t, e) {
			return t ? yc({}, t, t.breadcrumbs && {
				breadcrumbs: t.breadcrumbs.map(function(t) {
					return yc({}, t, t.data && {
						data: Os(t.data, e)
					})
				})
			}, t.user && {
				user: Os(t.user, e)
			}, t.contexts && {
				contexts: Os(t.contexts, e)
			}, t.extra && {
				extra: Os(t.extra, e)
			}) : null
		}
		,
		bc.prototype._addIntegrations = function(t) {
			var e = Object.keys(this._integrations);
			t && 0 < e.length && (t.integrations = e)
		}
		,
		bc.prototype._processEvent = function(t, o, e) {
			var i = this
				, n = this.getOptions()
				, a = n.beforeSend
				, n = n.sampleRate;
			return this._isEnabled() ? "number" == typeof n && Math.random() > n ? js.reject("This event has been sampled, will not send event.") : new js(function(n, r) {
					i._prepareEvent(t, e, o).then(function(t) {
						if (null !== t) {
							var e = t;
							if (o && o.data && !0 === o.data.__sentry__ || !a)
								return i._getBackend().sendEvent(e),
									void n(e);
							t = a(t, o);
							if (void 0 === t)
								gs.error("`beforeSend` method has to return `null` or a valid event.");
							else if (Ga(t))
								i._handleAsyncBeforeSend(t, n, r);
							else {
								if (null === (e = t))
									return gs.log("`beforeSend` returned `null`, will not send event."),
										void n(null);
								i._getBackend().sendEvent(e),
									n(e)
							}
						} else
							r("An event processor returned null, will not send event.")
					}).then(null, function(t) {
						i.captureException(t, {
							data: {
								__sentry__: !0
							},
							originalException: t
						}),
							r("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + t)
					})
				}
			) : js.reject("SDK not enabled, will not send event.")
		}
		,
		bc.prototype._handleAsyncBeforeSend = function(t, e, n) {
			var r = this;
			t.then(function(t) {
				null !== t ? (r._getBackend().sendEvent(t),
					e(t)) : n("`beforeSend` returned `null`, will not send event.")
			}).then(null, function(t) {
				n("beforeSend rejected with " + t)
			})
		}
		,
		r = bc;
	function bc(t, e) {
		this._integrations = {},
			this._processing = !1,
			this._backend = new t(e),
		(this._options = e).dsn && (this._dsn = new Xs(e.dsn))
	}
	var Ec = (wc.prototype.sendEvent = function(t) {
		return js.resolve({
			reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
			status: ba.Skipped
		})
	}
		,
		wc.prototype.close = function(t) {
			return js.resolve(!0)
		}
		,
		wc);
	function wc() {}
	var Sc, dn = (xc.prototype._setupTransport = function() {
		return new Ec
	}
		,
		xc.prototype.eventFromException = function(t, e) {
			throw new Ia("Backend has to implement `eventFromException` method")
		}
		,
		xc.prototype.eventFromMessage = function(t, e, n) {
			throw new Ia("Backend has to implement `eventFromMessage` method")
		}
		,
		xc.prototype.sendEvent = function(t) {
			this._transport.sendEvent(t).then(null, function(t) {
				gs.error("Error while sending event: " + t)
			})
		}
		,
		xc.prototype.getTransport = function() {
			return this._transport
		}
		,
		xc);
	function xc(t) {
		this._options = t,
		this._options.dsn || gs.warn("No DSN provided, backend will not do anything."),
			this._transport = this._setupTransport()
	}
	Oc.prototype.setupOnce = function() {
		Sc = Function.prototype.toString,
			Function.prototype.toString = function() {
				for (var t = [], e = 0; e < arguments.length; e++)
					t[e] = arguments[e];
				var n = this.__sentry_original__ || this;
				return Sc.apply(n, t)
			}
	}
		,
		Oc.id = "FunctionToString",
		_ = Oc;
	function Oc() {
		this.name = Oc.id
	}
	var jc = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
		, i = (kc.prototype.setupOnce = function() {
		tc(function(t) {
			var e = ac();
			if (!e)
				return t;
			var n = e.getIntegration(kc);
			if (n) {
				e = e.getClient(),
					e = e ? e.getOptions() : {},
					e = n._mergeOptions(e);
				if (n._shouldDropEvent(t, e))
					return null
			}
			return t
		})
	}
		,
		kc.prototype._shouldDropEvent = function(t, e) {
			return this._isSentryError(t, e) ? (gs.warn("Event dropped due to being internal Sentry Error.\nEvent: " + ts(t)),
				!0) : this._isIgnoredError(t, e) ? (gs.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + ts(t)),
				!0) : this._isBlacklistedUrl(t, e) ? (gs.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + ts(t) + ".\nUrl: " + this._getEventFilterUrl(t)),
				!0) : !this._isWhitelistedUrl(t, e) && (gs.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + ts(t) + ".\nUrl: " + this._getEventFilterUrl(t)),
				!0)
		}
		,
		kc.prototype._isSentryError = function(t, e) {
			if (!(e = void 0 === e ? {} : e).ignoreInternal)
				return !1;
			try {
				return t && t.exception && t.exception.values && t.exception.values[0] && "SentryError" === t.exception.values[0].type || !1
			} catch (t) {
				return !1
			}
		}
		,
		kc.prototype._isIgnoredError = function(t, n) {
			return !(!(n = void 0 === n ? {} : n).ignoreErrors || !n.ignoreErrors.length) && this._getPossibleEventMessages(t).some(function(e) {
				return n.ignoreErrors.some(function(t) {
					return Ja(e, t)
				})
			})
		}
		,
		kc.prototype._isBlacklistedUrl = function(t, e) {
			if (!(e = void 0 === e ? {} : e).blacklistUrls || !e.blacklistUrls.length)
				return !1;
			var n = this._getEventFilterUrl(t);
			return !!n && e.blacklistUrls.some(function(t) {
				return Ja(n, t)
			})
		}
		,
		kc.prototype._isWhitelistedUrl = function(t, e) {
			if (!(e = void 0 === e ? {} : e).whitelistUrls || !e.whitelistUrls.length)
				return !0;
			var n = this._getEventFilterUrl(t);
			return !n || e.whitelistUrls.some(function(t) {
				return Ja(n, t)
			})
		}
		,
		kc.prototype._mergeOptions = function(t) {
			return {
				blacklistUrls: gc(this._options.blacklistUrls || [], (t = void 0 === t ? {} : t).blacklistUrls || []),
				ignoreErrors: gc(this._options.ignoreErrors || [], t.ignoreErrors || [], jc),
				ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal,
				whitelistUrls: gc(this._options.whitelistUrls || [], t.whitelistUrls || [])
			}
		}
		,
		kc.prototype._getPossibleEventMessages = function(e) {
			if (e.message)
				return [e.message];
			if (e.exception)
				try {
					var t = e.exception.values && e.exception.values[0] || {}
						, n = t.type
						, r = void 0 === n ? "" : n
						, o = t.value
						, i = void 0 === o ? "" : o;
					return ["" + i, r + ": " + i]
				} catch (t) {
					return gs.error("Cannot extract message for event " + ts(e)),
						[]
				}
			return []
		}
		,
		kc.prototype._getEventFilterUrl = function(e) {
			try {
				if (e.stacktrace) {
					var t = e.stacktrace.frames;
					return t && t[t.length - 1].filename || null
				}
				if (e.exception) {
					var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
					return n && n[n.length - 1].filename || null
				}
				return null
			} catch (t) {
				return gs.error("Cannot extract url for event " + ts(e)),
					null
			}
		}
		,
		kc.id = "InboundFilters",
		kc);
	function kc(t) {
		this._options = t = void 0 === t ? {} : t,
			this.name = kc.id
	}
	var S = Object.freeze({
		__proto__: null,
		FunctionToString: _,
		InboundFilters: i
	})
		, Tc = "?"
		, Rc = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
		, Nc = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i
		, Dc = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
		, Pc = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
		, Ic = /\((\S*)(?::(\d+))(?::(\d+))\)/;
	function Lc(t) {
		var e = null
			, n = t && t.framesToPop;
		try {
			if (e = function(t) {
				if (!t || !t.stacktrace)
					return null;
				for (var e, n = t.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, o = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, i = n.split("\n"), a = [], s = 0; s < i.length; s += 2) {
					var c = null;
					(e = r.exec(i[s])) ? c = {
						url: e[2],
						func: e[3],
						args: [],
						line: +e[1],
						column: null
					} : (e = o.exec(i[s])) && (c = {
						url: e[6],
						func: e[3] || e[4],
						args: e[5] ? e[5].split(",") : [],
						line: +e[1],
						column: +e[2]
					}),
					c && (!c.func && c.line && (c.func = Tc),
						a.push(c))
				}
				return a.length ? {
					message: Cc(t),
					name: t.name,
					stack: a
				} : null
			}(t))
				return Mc(e, n)
		} catch (t) {}
		try {
			if (e = function(t) {
				if (!t || !t.stack)
					return null;
				for (var e, n, r = [], o = t.stack.split("\n"), i = 0; i < o.length; ++i) {
					if (n = Rc.exec(o[i])) {
						var a = n[2] && 0 === n[2].indexOf("native");
						n[2] && 0 === n[2].indexOf("eval") && (e = Ic.exec(n[2])) && (n[2] = e[1],
							n[3] = e[2],
							n[4] = e[3]),
							a = {
								url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
								func: n[1] || Tc,
								args: a ? [n[2]] : [],
								line: n[3] ? +n[3] : null,
								column: n[4] ? +n[4] : null
							}
					} else if (n = Dc.exec(o[i]))
						a = {
							url: n[2],
							func: n[1] || Tc,
							args: [],
							line: +n[3],
							column: n[4] ? +n[4] : null
						};
					else {
						if (!(n = Nc.exec(o[i])))
							continue;
						n[3] && -1 < n[3].indexOf(" > eval") && (e = Pc.exec(n[3])) ? (n[1] = n[1] || "eval",
							n[3] = e[1],
							n[4] = e[2],
							n[5] = "") : 0 !== i || n[5] || void 0 === t.columnNumber || (r[0].column = t.columnNumber + 1),
							a = {
								url: n[3],
								func: n[1] || Tc,
								args: n[2] ? n[2].split(",") : [],
								line: n[4] ? +n[4] : null,
								column: n[5] ? +n[5] : null
							}
					}
					!a.func && a.line && (a.func = Tc),
						r.push(a)
				}
				return r.length ? {
					message: Cc(t),
					name: t.name,
					stack: r
				} : null
			}(t))
				return Mc(e, n)
		} catch (t) {}
		return {
			message: Cc(t),
			name: t && t.name,
			stack: [],
			failed: !0
		}
	}
	function Mc(e, t) {
		try {
			return wa({}, e, {
				stack: e.stack.slice(t)
			})
		} catch (t) {
			return e
		}
	}
	function Cc(t) {
		t = t && t.message;
		return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
	}
	var Ac = 50;
	function Uc(t) {
		var e = Bc(t.stack)
			, t = {
			type: t.name,
			value: t.message
		};
		return e && e.length && (t.stacktrace = {
			frames: e
		}),
		void 0 === t.type && "" === t.value && (t.value = "Unrecoverable error caught"),
			t
	}
	function Fc(t, e, n) {
		t = {
			exception: {
				values: [{
					type: qa(t) ? t.constructor.name : n ? "UnhandledRejection" : "Error",
					value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + function(t, e) {
						void 0 === e && (e = 40);
						var n = Object.keys(Es(t));
						if (n.sort(),
							!n.length)
							return "[object has no keys]";
						if (n[0].length >= e)
							return Va(n[0], e);
						for (var r = n.length; 0 < r; r--) {
							var o = n.slice(0, r).join(", ");
							if (!(o.length > e))
								return r === n.length ? o : Va(o, e)
						}
						return ""
					}(t)
				}]
			},
			extra: {
				__serialized__: function t(e, n, r) {
					void 0 === r && (r = 102400);
					var o = Os(e, n = void 0 === n ? 3 : n);
					return ws(o) > r ? t(e, n - 1, r) : o
				}(t)
			}
		};
		return e && (e = Bc(Lc(e).stack),
			t.stacktrace = {
				frames: e
			}),
			t
	}
	function Hc(t) {
		return {
			exception: {
				values: [Uc(t)]
			}
		}
	}
	function Bc(t) {
		if (!t || !t.length)
			return [];
		var e = t
			, n = e[0].func || ""
			, t = e[e.length - 1].func || "";
		return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (e = e.slice(1)),
			(e = -1 !== t.indexOf("sentryWrapped") ? e.slice(0, -1) : e).map(function(t) {
				return {
					colno: null === t.column ? void 0 : t.column,
					filename: t.url || e[0].url,
					function: t.func || "?",
					in_app: !0,
					lineno: null === t.line ? void 0 : t.line
				}
			}).slice(0, Ac).reverse()
	}
	function qc(t, e, n) {
		if (void 0 === n && (n = {}),
		Aa(t) && t.error)
			return r = Hc(Lc(t = t.error));
		if (Ua(t) || (i = t,
		"[object DOMException]" === Object.prototype.toString.call(i))) {
			var r, o = t, i = o.name || (Ua(o) ? "DOMError" : "DOMException"), i = o.message ? i + ": " + o.message : i;
			return ns(r = Wc(i, e, n), i),
				r
		}
		return Ca(t) ? r = Hc(Lc(t)) : (Ba(t) || qa(t) ? rs(r = Fc(t, e, n.rejection), {
			synthetic: !0
		}) : (ns(r = Wc(t, e, n), "" + t, void 0),
			rs(r, {
				synthetic: !0
			})),
			r)
	}
	function Wc(t, e, n) {
		t = {
			message: t
		};
		return (n = void 0 === n ? {} : n).attachStacktrace && e && (e = Bc(Lc(e).stack),
			t.stacktrace = {
				frames: e
			}),
			t
	}
	Gc.prototype.sendEvent = function(t) {
		throw new Ia("Transport Class has to implement `sendEvent` method")
	}
		,
		Gc.prototype.close = function(t) {
			return this._buffer.drain(t)
		}
		,
		Jt = Gc;
	function Gc(t) {
		this.options = t,
			this._buffer = new Ts(30),
			this.url = new dc(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
	}
	var Yc, Vc = Ka(), zc = (ga(Jc, Yc = Jt),
		Jc.prototype.sendEvent = function(t) {
			var i = this;
			if (new Date(Date.now()) < this._disabledUntil)
				return Promise.reject({
					event: t,
					reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
					status: 429
				});
			var e = {
				body: JSON.stringify(t),
				method: "POST",
				referrerPolicy: function() {
					if (Ns())
						try {
							return new Request("_",{
								referrerPolicy: "origin"
							}),
								1
						} catch (t) {
							return
						}
				}() ? "origin" : ""
			};
			return void 0 !== this.options.headers && (e.headers = this.options.headers),
				this._buffer.add(new js(function(r, o) {
						Vc.fetch(i.url, e).then(function(t) {
							var e, n = ba.fromHttpCode(t.status);
							n !== ba.Success ? (n === ba.RateLimit && (e = Date.now(),
								i._disabledUntil = new Date(e + ls(e, t.headers.get("Retry-After"))),
								gs.warn("Too many requests, backing off till: " + i._disabledUntil)),
								o(t)) : r({
								status: n
							})
						}).catch(o)
					}
				))
		}
		,
		Jc);
	function Jc() {
		var t = null !== Yc && Yc.apply(this, arguments) || this;
		return t._disabledUntil = new Date(Date.now()),
			t
	}
	var Xc, $c = (ga(Kc, Xc = Jt),
		Kc.prototype.sendEvent = function(e) {
			var i = this;
			return new Date(Date.now()) < this._disabledUntil ? Promise.reject({
				event: e,
				reason: "Transport locked till " + this._disabledUntil + " due to too many requests.",
				status: 429
			}) : this._buffer.add(new js(function(n, r) {
					var t, o = new XMLHttpRequest;
					for (t in o.onreadystatechange = function() {
						var t, e;
						4 === o.readyState && ((t = ba.fromHttpCode(o.status)) !== ba.Success ? (t === ba.RateLimit && (e = Date.now(),
							i._disabledUntil = new Date(e + ls(e, o.getResponseHeader("Retry-After"))),
							gs.warn("Too many requests, backing off till: " + i._disabledUntil)),
							r(o)) : n({
							status: t
						}))
					}
						,
						o.open("POST", i.url),
						i.options.headers)
						i.options.headers.hasOwnProperty(t) && o.setRequestHeader(t, i.options.headers[t]);
					o.send(JSON.stringify(e))
				}
			))
		}
		,
		Kc);
	function Kc() {
		var t = null !== Xc && Xc.apply(this, arguments) || this;
		return t._disabledUntil = new Date(Date.now()),
			t
	}
	var Qc, d = Object.freeze({
		__proto__: null,
		BaseTransport: Jt,
		FetchTransport: zc,
		XHRTransport: $c
	}), Zc = (ga(tu, Qc = dn),
		tu.prototype._setupTransport = function() {
			if (!this._options.dsn)
				return Qc.prototype._setupTransport.call(this);
			var t = wa({}, this._options.transportOptions, {
				dsn: this._options.dsn
			});
			return new (this._options.transport || (Ns() ? zc : $c))(t)
		}
		,
		tu.prototype.eventFromException = function(t, e) {
			t = qc(t, e && e.syntheticException || void 0, {
				attachStacktrace: this._options.attachStacktrace
			});
			return rs(t, {
				handled: !0,
				type: "generic"
			}),
				t.level = _a.Error,
			e && e.event_id && (t.event_id = e.event_id),
				js.resolve(t)
		}
		,
		tu.prototype.eventFromMessage = function(t, e, n) {
			void 0 === e && (e = _a.Info);
			t = Wc(t, n && n.syntheticException || void 0, {
				attachStacktrace: this._options.attachStacktrace
			});
			return t.level = e,
			n && n.event_id && (t.event_id = n.event_id),
				js.resolve(t)
		}
		,
		tu);
	function tu() {
		return null !== Qc && Qc.apply(this, arguments) || this
	}
	var eu, nu = "sentry.javascript.browser", ru = "5.15.5", ou = (ga(iu, eu = r),
		iu.prototype._prepareEvent = function(t, e, n) {
			return t.platform = t.platform || "javascript",
				t.sdk = wa({}, t.sdk, {
					name: nu,
					packages: Sa(t.sdk && t.sdk.packages || [], [{
						name: "npm:@sentry/browser",
						version: ru
					}]),
					version: ru
				}),
				eu.prototype._prepareEvent.call(this, t, e, n)
		}
		,
		iu.prototype.showReportDialog = function(t) {
			void 0 === t && (t = {});
			var e, n, r = Ka().document;
			r && (this._isEnabled() ? (e = t.dsn || this.getDsn(),
				t.eventId ? e ? ((n = r.createElement("script")).async = !0,
					n.src = new dc(e).getReportDialogEndpoint(t),
				t.onLoad && (n.onload = t.onLoad),
					(r.head || r.body).appendChild(n)) : gs.error("Missing `Dsn` option in showReportDialog call") : gs.error("Missing `eventId` option in showReportDialog call")) : gs.error("Trying to call showReportDialog with Sentry Client is disabled"))
		}
		,
		iu);
	function iu(t) {
		return eu.call(this, Zc, t = void 0 === t ? {} : t) || this
	}
	var au = 0;
	function su(e, r, o) {
		if (void 0 === r && (r = {}),
		"function" != typeof e)
			return e;
		try {
			if (e.__sentry__)
				return e;
			if (e.__sentry_wrapped__)
				return e.__sentry_wrapped__
		} catch (t) {
			return e
		}
		function t() {
			var n = Array.prototype.slice.call(arguments);
			try {
				o && "function" == typeof o && o.apply(this, arguments);
				var t = n.map(function(t) {
					return su(t, r)
				});
				return e.handleEvent ? e.handleEvent.apply(this, t) : e.apply(this, t)
			} catch (e) {
				throw au += 1,
					setTimeout(function() {
						--au
					}),
					hc(function(t) {
						t.addEventProcessor(function(t) {
							t = wa({}, t);
							return r.mechanism && (ns(t, void 0, void 0),
								rs(t, r.mechanism)),
								t.extra = wa({}, t.extra, {
									arguments: n
								}),
								t
						}),
							pc(e)
					}),
					e
			}
		}
		try {
			for (var n in e)
				Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
		} catch (t) {}
		e.prototype = e.prototype || {},
			t.prototype = e.prototype,
			Object.defineProperty(e, "__sentry_wrapped__", {
				enumerable: !1,
				value: t
			}),
			Object.defineProperties(t, {
				__sentry__: {
					enumerable: !1,
					value: !0
				},
				__sentry_original__: {
					enumerable: !1,
					value: e
				}
			});
		try {
			Object.getOwnPropertyDescriptor(t, "name").configurable && Object.defineProperty(t, "name", {
				get: function() {
					return e.name
				}
			})
		} catch (t) {}
		return t
	}
	cu.prototype.setupOnce = function() {
		Error.stackTraceLimit = 50,
		this._options.onerror && (gs.log("Global Handler attached: onerror"),
			this._installGlobalOnErrorHandler()),
		this._options.onunhandledrejection && (gs.log("Global Handler attached: onunhandledrejection"),
			this._installGlobalOnUnhandledRejectionHandler())
	}
		,
		cu.prototype._installGlobalOnErrorHandler = function() {
			var i = this;
			this._onErrorHandlerInstalled || (As({
				callback: function(t) {
					var e = t.error
						, n = ac()
						, r = n.getIntegration(cu)
						, o = e && !0 === e.__sentry_own_request__;
					!r || 0 < au || o || (o = n.getClient(),
						rs(t = Ha(e) ? i._eventFromIncompleteOnError(t.msg, t.url, t.line, t.column) : i._enhanceEventWithInitialFrame(qc(e, void 0, {
							attachStacktrace: o && o.getOptions().attachStacktrace,
							rejection: !1
						}), t.url, t.line, t.column), {
							handled: !1,
							type: "onerror"
						}),
						n.captureEvent(t, {
							originalException: e
						}))
				},
				type: "error"
			}),
				this._onErrorHandlerInstalled = !0)
		}
		,
		cu.prototype._installGlobalOnUnhandledRejectionHandler = function() {
			var o = this;
			this._onUnhandledRejectionHandlerInstalled || (As({
				callback: function(t) {
					var e = t;
					try {
						"reason"in t ? e = t.reason : "detail"in t && "reason"in t.detail && (e = t.detail.reason)
					} catch (t) {}
					var n = ac()
						, r = n.getIntegration(cu)
						, t = e && !0 === e.__sentry_own_request__;
					if (!r || 0 < au || t)
						return !0;
					t = n.getClient(),
						t = Ha(e) ? o._eventFromIncompleteRejection(e) : qc(e, void 0, {
							attachStacktrace: t && t.getOptions().attachStacktrace,
							rejection: !0
						});
					t.level = _a.Error,
						rs(t, {
							handled: !1,
							type: "onunhandledrejection"
						}),
						n.captureEvent(t, {
							originalException: e
						})
				},
				type: "unhandledrejection"
			}),
				this._onUnhandledRejectionHandlerInstalled = !0)
		}
		,
		cu.prototype._eventFromIncompleteOnError = function(t, e, n, r) {
			var o, i = Aa(t) ? t.message : t;
			return !Fa(i) || (t = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)) && (o = t[1],
				i = t[2]),
				this._enhanceEventWithInitialFrame({
					exception: {
						values: [{
							type: o || "Error",
							value: i
						}]
					}
				}, e, n, r)
		}
		,
		cu.prototype._eventFromIncompleteRejection = function(t) {
			return {
				exception: {
					values: [{
						type: "UnhandledRejection",
						value: "Non-Error promise rejection captured with value: " + t
					}]
				}
			}
		}
		,
		cu.prototype._enhanceEventWithInitialFrame = function(t, e, n, r) {
			t.exception = t.exception || {},
				t.exception.values = t.exception.values || [],
				t.exception.values[0] = t.exception.values[0] || {},
				t.exception.values[0].stacktrace = t.exception.values[0].stacktrace || {},
				t.exception.values[0].stacktrace.frames = t.exception.values[0].stacktrace.frames || [];
			r = isNaN(parseInt(r, 10)) ? void 0 : r,
				n = isNaN(parseInt(n, 10)) ? void 0 : n,
				e = Fa(e) && 0 < e.length ? e : function() {
					try {
						return document.location.href
					} catch (t) {
						return ""
					}
				}();
			return 0 === t.exception.values[0].stacktrace.frames.length && t.exception.values[0].stacktrace.frames.push({
				colno: r,
				filename: e,
				function: "?",
				in_app: !0,
				lineno: n
			}),
				t
		}
		,
		cu.id = "GlobalHandlers",
		nt = cu;
	function cu(t) {
		this.name = cu.id,
			this._onErrorHandlerInstalled = !1,
			this._onUnhandledRejectionHandlerInstalled = !1,
			this._options = wa({
				onerror: !0,
				onunhandledrejection: !0
			}, t)
	}
	uu.prototype._wrapTimeFunction = function(r) {
		return function() {
			for (var t = [], e = 0; e < arguments.length; e++)
				t[e] = arguments[e];
			var n = t[0];
			return t[0] = su(n, {
				mechanism: {
					data: {
						function: fs(r)
					},
					handled: !0,
					type: "instrument"
				}
			}),
				r.apply(this, t)
		}
	}
		,
		uu.prototype._wrapRAF = function(e) {
			return function(t) {
				return e(su(t, {
					mechanism: {
						data: {
							function: "requestAnimationFrame",
							handler: fs(e)
						},
						handled: !0,
						type: "instrument"
					}
				}))
			}
		}
		,
		uu.prototype._wrapEventTarget = function(o) {
			var t = Ka()
				, t = t[o] && t[o].prototype;
			t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (bs(t, "addEventListener", function(r) {
				return function(t, e, n) {
					try {
						"function" == typeof e.handleEvent && (e.handleEvent = su(e.handleEvent.bind(e), {
							mechanism: {
								data: {
									function: "handleEvent",
									handler: fs(e),
									target: o
								},
								handled: !0,
								type: "instrument"
							}
						}))
					} catch (t) {}
					return r.call(this, t, su(e, {
						mechanism: {
							data: {
								function: "addEventListener",
								handler: fs(e),
								target: o
							},
							handled: !0,
							type: "instrument"
						}
					}), n)
				}
			}),
				bs(t, "removeEventListener", function(r) {
					return function(t, e, n) {
						try {
							e = e && (e.__sentry_wrapped__ || e)
						} catch (t) {}
						return r.call(this, t, e, n)
					}
				}))
		}
		,
		uu.prototype._wrapXHR = function(n) {
			return function() {
				for (var t = [], e = 0; e < arguments.length; e++)
					t[e] = arguments[e];
				var r = this;
				return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(n) {
					n in r && "function" == typeof r[n] && bs(r, n, function(t) {
						var e = {
							mechanism: {
								data: {
									function: n,
									handler: fs(t)
								},
								handled: !0,
								type: "instrument"
							}
						};
						return t.__sentry_original__ && (e.mechanism.data.handler = fs(t.__sentry_original__)),
							su(t, e)
					})
				}),
					n.apply(this, t)
			}
		}
		,
		uu.prototype.setupOnce = function() {
			this._ignoreOnError = this._ignoreOnError;
			var t = Ka();
			bs(t, "setTimeout", this._wrapTimeFunction.bind(this)),
				bs(t, "setInterval", this._wrapTimeFunction.bind(this)),
				bs(t, "requestAnimationFrame", this._wrapRAF.bind(this)),
			"XMLHttpRequest"in t && bs(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
				["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this._wrapEventTarget.bind(this))
		}
		,
		uu.id = "TryCatch",
		m = uu;
	function uu() {
		this._ignoreOnError = 0,
			this.name = uu.id
	}
	lu.prototype._consoleBreadcrumb = function(t) {
		var e = {
			category: "console",
			data: {
				arguments: t.args,
				logger: "console"
			},
			level: _a.fromString(t.level),
			message: za(t.args, " ")
		};
		if ("assert" === t.level) {
			if (!1 !== t.args[0])
				return;
			e.message = "Assertion failed: " + (za(t.args.slice(1), " ") || "console.assert"),
				e.data.arguments = t.args.slice(1)
		}
		ac().addBreadcrumb(e, {
			input: t.args,
			level: t.level
		})
	}
		,
		lu.prototype._domBreadcrumb = function(t) {
			var e;
			try {
				e = t.event.target ? os(t.event.target) : os(t.event)
			} catch (t) {
				e = "<unknown>"
			}
			0 !== e.length && ac().addBreadcrumb({
				category: "ui." + t.name,
				message: e
			}, {
				event: t.event,
				name: t.name
			})
		}
		,
		lu.prototype._xhrBreadcrumb = function(t) {
			if (t.endTimestamp)
				return t.xhr.__sentry_own_request__ ? void 0 : void ac().addBreadcrumb({
					category: "xhr",
					data: t.xhr.__sentry_xhr__,
					type: "http"
				}, {
					xhr: t.xhr
				});
			this._options.sentry && t.xhr.__sentry_own_request__ && pu(t.args[0])
		}
		,
		lu.prototype._fetchBreadcrumb = function(t) {
			if (t.endTimestamp) {
				var e = ac().getClient()
					, e = e && e.getDsn();
				if (this._options.sentry && e) {
					e = new dc(e).getStoreEndpoint();
					if (e && -1 !== t.fetchData.url.indexOf(e) && "POST" === t.fetchData.method && t.args[1] && t.args[1].body)
						return void pu(t.args[1].body)
				}
				t.error ? ac().addBreadcrumb({
					category: "fetch",
					data: wa({}, t.fetchData, {
						status_code: t.response.status
					}),
					level: _a.Error,
					type: "http"
				}, {
					data: t.error,
					input: t.args
				}) : ac().addBreadcrumb({
					category: "fetch",
					data: wa({}, t.fetchData, {
						status_code: t.response.status
					}),
					type: "http"
				}, {
					input: t.args,
					response: t.response
				})
			}
		}
		,
		lu.prototype._historyBreadcrumb = function(t) {
			var e = Ka()
				, n = t.from
				, r = t.to
				, o = Za(e.location.href)
				, t = Za(n)
				, e = Za(r);
			t.path || (t = o),
			o.protocol === e.protocol && o.host === e.host && (r = e.relative),
			o.protocol === t.protocol && o.host === t.host && (n = t.relative),
				ac().addBreadcrumb({
					category: "navigation",
					data: {
						from: n,
						to: r
					}
				})
		}
		,
		lu.prototype.setupOnce = function() {
			var n = this;
			this._options.console && As({
				callback: function() {
					for (var t = [], e = 0; e < arguments.length; e++)
						t[e] = arguments[e];
					n._consoleBreadcrumb.apply(n, Sa(t))
				},
				type: "console"
			}),
			this._options.dom && As({
				callback: function() {
					for (var t = [], e = 0; e < arguments.length; e++)
						t[e] = arguments[e];
					n._domBreadcrumb.apply(n, Sa(t))
				},
				type: "dom"
			}),
			this._options.xhr && As({
				callback: function() {
					for (var t = [], e = 0; e < arguments.length; e++)
						t[e] = arguments[e];
					n._xhrBreadcrumb.apply(n, Sa(t))
				},
				type: "xhr"
			}),
			this._options.fetch && As({
				callback: function() {
					for (var t = [], e = 0; e < arguments.length; e++)
						t[e] = arguments[e];
					n._fetchBreadcrumb.apply(n, Sa(t))
				},
				type: "fetch"
			}),
			this._options.history && As({
				callback: function() {
					for (var t = [], e = 0; e < arguments.length; e++)
						t[e] = arguments[e];
					n._historyBreadcrumb.apply(n, Sa(t))
				},
				type: "history"
			})
		}
		,
		lu.id = "Breadcrumbs",
		lt = lu;
	function lu(t) {
		this.name = lu.id,
			this._options = wa({
				console: !0,
				dom: !0,
				fetch: !0,
				history: !0,
				sentry: !0,
				xhr: !0
			}, t)
	}
	function pu(t) {
		try {
			var e = JSON.parse(t);
			ac().addBreadcrumb({
				category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
				event_id: e.event_id,
				level: e.level || _a.fromString("error"),
				message: ts(e)
			}, {
				event: e
			})
		} catch (t) {
			gs.error("Error while adding sentry type breadcrumb")
		}
	}
	var fu = "cause"
		, hu = 5
		, Jt = (du.prototype.setupOnce = function() {
		tc(function(t, e) {
			var n = ac().getIntegration(du);
			return n ? n._handler(t, e) : t
		})
	}
		,
		du.prototype._handler = function(t, e) {
			if (!(t.exception && t.exception.values && e && Ya(e.originalException, Error)))
				return t;
			e = this._walkErrorTree(e.originalException, this._key);
			return t.exception.values = Sa(e, t.exception.values),
				t
		}
		,
		du.prototype._walkErrorTree = function(t, e, n) {
			if (void 0 === n && (n = []),
			!Ya(t[e], Error) || n.length + 1 >= this._limit)
				return n;
			var r = Uc(Lc(t[e]));
			return this._walkErrorTree(t[e], e, Sa([r], n))
		}
		,
		du.id = "LinkedErrors",
		du);
	function du(t) {
		void 0 === t && (t = {}),
			this.name = du.id,
			this._key = t.key || fu,
			this._limit = t.limit || hu
	}
	var vu = Ka()
		, dn = (yu.prototype.setupOnce = function() {
		tc(function(t) {
			if (ac().getIntegration(yu)) {
				if (!vu.navigator || !vu.location)
					return t;
				var e = t.request || {};
				return e.url = e.url || vu.location.href,
					e.headers = e.headers || {},
					e.headers["User-Agent"] = vu.navigator.userAgent,
					wa({}, t, {
						request: e
					})
			}
			return t
		})
	}
		,
		yu.id = "UserAgent",
		yu);
	function yu() {
		this.name = yu.id
	}
	var r = Object.freeze({
		__proto__: null,
		GlobalHandlers: nt,
		TryCatch: m,
		Breadcrumbs: lt,
		LinkedErrors: Jt,
		UserAgent: dn
	})
		, gu = [new i, new _, new m, new lt, new nt, new Jt, new dn];
	function _u(t) {
		var e;
		void 0 === (t = void 0 === t ? {} : t).defaultIntegrations && (t.defaultIntegrations = gu),
		void 0 !== t.release || (e = Ka()).SENTRY_RELEASE && e.SENTRY_RELEASE.id && (t.release = e.SENTRY_RELEASE.id),
			function(t, e) {
				!0 === e.debug && gs.enable();
				var n = ac()
					, e = new t(e);
				n.bindClient(e)
			}(ou, t)
	}
	Jt = {},
		dn = Ka();
	dn.Sentry && dn.Sentry.Integrations && (Jt = dn.Sentry.Integrations);
	var mu = wa({}, Jt, S, r)
		, bu = Object.freeze({
		__proto__: null,
		Integrations: mu,
		Transports: d,
		get Severity() {
			return _a
		},
		get Status() {
			return ba
		},
		addGlobalEventProcessor: tc,
		addBreadcrumb: function(t) {
			lc("addBreadcrumb", t)
		},
		captureException: pc,
		captureEvent: function(t) {
			return lc("captureEvent", t)
		},
		captureMessage: function(t, e) {
			var n;
			try {
				throw new Error(t)
			} catch (t) {
				n = t
			}
			return lc("captureMessage", t, e, {
				originalException: t,
				syntheticException: n
			})
		},
		configureScope: fc,
		getHubFromCarrier: cc,
		getCurrentHub: ac,
		Hub: nc,
		Scope: Ks,
		setContext: function(t, e) {
			lc("setContext", t, e)
		},
		setExtra: function(t, e) {
			lc("setExtra", t, e)
		},
		setExtras: function(t) {
			lc("setExtras", t)
		},
		setTag: function(t, e) {
			lc("setTag", t, e)
		},
		setTags: function(t) {
			lc("setTags", t)
		},
		setUser: function(t) {
			lc("setUser", t)
		},
		withScope: hc,
		BrowserClient: ou,
		defaultIntegrations: gu,
		forceLoad: function() {},
		init: _u,
		lastEventId: function() {
			return ac().lastEventId()
		},
		onLoad: function(t) {
			t()
		},
		showReportDialog: function(t) {
			(t = void 0 === t ? {} : t).eventId || (t.eventId = ac().lastEventId());
			var e = ac().getClient();
			e && e.showReportDialog(t)
		},
		flush: function(t) {
			var e = ac().getClient();
			return e ? e.flush(t) : js.reject(!1)
		},
		close: function(t) {
			var e = ac().getClient();
			return e ? e.close(t) : js.reject(!1)
		},
		wrap: function(t) {
			return su(t)()
		},
		SDK_NAME: nu,
		SDK_VERSION: ru
	})
		, Eu = (wu.prototype.setupOnce = function(t, r) {
		t(function(e) {
			var n = r().getIntegration(wu);
			if (n) {
				try {
					if (n._shouldDropEvent(e, n._previousEvent))
						return null
				} catch (t) {
					return n._previousEvent = e
				}
				return n._previousEvent = e
			}
			return e
		})
	}
		,
		wu.prototype._shouldDropEvent = function(t, e) {
			return !!e && (!!this._isSameMessageEvent(t, e) || !!this._isSameExceptionEvent(t, e))
		}
		,
		wu.prototype._isSameMessageEvent = function(t, e) {
			var n = t.message
				, r = e.message;
			return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this._isSameFingerprint(t, e) && !!this._isSameStacktrace(t, e))))
		}
		,
		wu.prototype._getFramesFromEvent = function(t) {
			var e = t.exception;
			if (e)
				try {
					return e.values[0].stacktrace.frames
				} catch (t) {
					return
				}
			else if (t.stacktrace)
				return t.stacktrace.frames
		}
		,
		wu.prototype._isSameStacktrace = function(t, e) {
			var n = this._getFramesFromEvent(t)
				, r = this._getFramesFromEvent(e);
			if (!n && !r)
				return !0;
			if (n && !r || !n && r)
				return !1;
			if (r.length !== n.length)
				return !1;
			for (var o = 0; o < r.length; o++) {
				var i = r[o]
					, a = n[o];
				if (i.filename !== a.filename || i.lineno !== a.lineno || i.colno !== a.colno || i.function !== a.function)
					return !1
			}
			return !0
		}
		,
		wu.prototype._getExceptionFromEvent = function(t) {
			return t.exception && t.exception.values && t.exception.values[0]
		}
		,
		wu.prototype._isSameExceptionEvent = function(t, e) {
			var n = this._getExceptionFromEvent(e)
				, r = this._getExceptionFromEvent(t);
			return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this._isSameFingerprint(t, e) && !!this._isSameStacktrace(t, e)))
		}
		,
		wu.prototype._isSameFingerprint = function(t, e) {
			t = t.fingerprint,
				e = e.fingerprint;
			if (!t && !e)
				return !0;
			if (t && !e || !t && e)
				return !1;
			try {
				return !(t.join("") !== e.join(""))
			} catch (t) {
				return !1
			}
		}
		,
		wu.id = "Dedupe",
		wu);
	function wu() {
		this.name = wu.id
	}
	var Su = {
		hookConsole: !1,
		hookDom: !1,
		enableCatchGlobalJSError: !0,
		catchUnhandledRejection: !0
	}
		, xu = "JSErrorMonitor"
		, Ou = (ju.prototype.setup = function(t) {
		this.callback = t || va,
			this.start()
	}
		,
		ju.prototype.start = function() {
			this.sentryInit()
		}
		,
		ju.prototype.sentryInit = function() {
			var r, o = this, t = this.config, i = void 0;
			if (la(t.beforeSend) && (i = t.beforeSend,
				delete t.beforeSend),
			t.integrations && (r = t.integrations,
				delete t.integrations),
				_u(ca({
					dsn: "https://key@slardar.com/log/sentry/v2/slardar",
					integrations: function(t) {
						var e = t;
						"function" == typeof r ? e = r(t) : pa(r) ? r.forEach(function(t) {
							e.push(t)
						}) : e = function(t, e, n) {
							if (n || 2 === arguments.length)
								for (var r, o = 0, i = e.length; o < i; o++)
									!r && o in e || ((r = r || Array.prototype.slice.call(e, 0, o))[o] = e[o]);
							return t.concat(r || e)
						}([], function(t, e) {
							var n = "function" == typeof Symbol && t[Symbol.iterator];
							if (!n)
								return t;
							var r, o, i = n.call(t), a = [];
							try {
								for (; (void 0 === e || 0 < e--) && !(r = i.next()).done; )
									a.push(r.value)
							} catch (t) {
								o = {
									error: t
								}
							} finally {
								try {
									r && !r.done && (n = i.return) && n.call(i)
								} finally {
									if (o)
										throw o.error
								}
							}
							return a
						}(t));
						var n = [];
						return e.forEach(function(t) {
							"Breadcrumbs" !== t.name && "GlobalHandlers" !== t.name && n.push(t)
						}),
							n.push(new mu.GlobalHandlers({
								onerror: !0,
								onunhandledrejection: o.setting.catchUnhandledRejection
							})),
							n.push(new mu.Breadcrumbs({
								console: null !== (t = o.setting.hookConsole) && void 0 !== t && t,
								dom: null !== (t = o.setting.hookDom) && void 0 !== t && t,
								fetch: !0,
								history: !0,
								sentry: !0,
								xhr: !0
							})),
							n.push(new Eu),
							n
					},
					beforeSend: function(t, e) {
						var n, r = i && la(i) ? i(t, e) : ca({}, t);
						if (!r)
							return null;
						e = {};
						null !== (t = o.instaceParams) && void 0 !== t && t.params && ua(null === (n = o.instaceParams) || void 0 === n ? void 0 : n.params) && (e = null === (n = o.instaceParams) || void 0 === n ? void 0 : n.params);
						e = ca({
							ev_type: "jserr",
							sentry: r
						}, e);
						return o.instaceParams = null,
							o.callback({
								event: e,
								type: "post",
								name: "JSErrorMonitor"
							}),
						o.memoryRecordMonitor && o.memoryRecordMonitor.report(),
							null
					}
				}, t)),
				this.sentry = bu,
				t.tags) {
				var e, n = t.tags;
				for (e in n)
					!function(e) {
						Object.prototype.hasOwnProperty.call(n, e) && fc(function(t) {
							t.setTag(e, n[e])
						})
					}(e)
			}
		}
		,
		ju.monitorName = xu,
		ju);
	function ju(t) {
		var e = this;
		this.name = xu,
			this.callback = va,
			this.setting = Su,
			this.getSentry = function(t) {
				return e.instaceParams = t = void 0 === t ? {} : t,
					e.sentry
			}
		;
		var n = null != t ? t : {}
			, r = n.config
			, n = n.memoryRecordMonitor;
		this.config = null != r ? r : {},
			this.memoryRecordMonitor = n,
			this.setting = function() {
				for (var t = [], e = 0; e < arguments.length; e++)
					t[e] = arguments[e];
				for (var n = {}, r = 0; r < t.length; )
					n = da(n, t[r]),
						r++;
				return n
			}({}, Su, {
				catchUnhandledRejection: null === (n = null == t ? void 0 : t.catchUnhandledRejection) || void 0 === n || n,
				hookConsole: null !== (n = null == t ? void 0 : t.hookConsole) && void 0 !== n && n,
				hookDom: null !== (t = null == t ? void 0 : t.hookDom) && void 0 !== t && t
			}),
			this.sentry = null,
			this.instaceParams = null
	}
	var ku, Tu, Ru, Nu, Du, Pu, d = (Iu.prototype.setup = function() {
		var e = this;
		this.options.sendEvent && this.monitors.forEach(function(t) {
			(e.installedMonitors[t.name] = t).setup(e.options.sendEvent)
		})
	}
		,
		Iu.prototype.handlePreCollect = function() {
			this.sendPreCollect(),
				this.sendPreUserCollect()
		}
		,
		Iu.prototype.sendPreCollect = function() {
			var r = this
				, t = null === (t = this.options.collect) || void 0 === t ? void 0 : t.jsError;
			pa(t) && (t.forEach(function(t) {
				var e, n;
				t && t.event && t.params && (e = t.event,
					n = t.params,
				(n = null === (t = r.installedMonitors.JSErrorMonitor) || void 0 === t ? void 0 : t.getSentry({
					params: n || {}
				})) && ("error" === e.type && (null != e && e.error ? n.captureException(e.error) : e.message && n.captureMessage(e.message)),
				"unhandledrejection" === e.type && r.options.catchUnhandledRejection && n.captureException(e.reason)))
			}),
				this.options.collect.jsError = []),
			null !== (t = window.Slardar) && void 0 !== t && t.globalPreCollectError && (window.removeEventListener("error", window.Slardar.globalPreCollectError, !0),
				window.Slardar.globalPreCollectError = void 0)
		}
		,
		Iu.prototype.sendPreUserCollect = function() {
			var r = this
				, t = null === (t = this.options.collect) || void 0 === t ? void 0 : t.sentry;
			pa(t) && (t.forEach(function(t) {
				var e, n;
				t && t.event && t.params && (e = t.event,
					n = t.params,
				(n = null === (t = r.getInstalledMonitors().JSErrorMonitor) || void 0 === t ? void 0 : t.getSentry({
					params: n || {}
				})) && la(e) && e(n))
			}),
				this.options.collect.sentry = [])
		}
		,
		Iu.version = "3.6.33",
		Iu);
	function Iu(t) {
		var e = this;
		this.init = function() {
			var t;
			e.monitors = [new Ou({
				config: e.options.jsErrorOptions,
				memoryRecordMonitor: e.options.memoryRecordMonitor,
				catchUnhandledRejection: e.options.catchUnhandledRejection,
				hookConsole: null !== (t = e.options.hookConsole) && void 0 !== t && t,
				hookDom: null !== (t = e.options.hookDom) && void 0 !== t && t
			})],
				e.setup(),
				e.handlePreCollect()
		}
			,
			this.getInstalledMonitors = function() {
				return e.installedMonitors
			}
			,
			this.options = t,
			this.monitors = [],
			this.installedMonitors = {}
	}
	return ku = {
		pluginName: "SetSentryMonitors",
		version: d.version,
		plugin: d
	},
	window.__SLARDAR__ || (window.__SLARDAR__ = {}),
	window.__SLARDAR__ && ((Nu = {
		version: Tu = ku.plugin.version
	})[ku.pluginName] = ku.plugin,
		Ru = Nu,
		Nu = null !== (Nu = window.__SLARDAR__.plugins) && void 0 !== Nu ? Nu : [],
		Pu = !(Du = []),
		Nu.forEach(function(t) {
			t.version === Tu && ("SetMonitors" !== ku.pluginName || t.SetMonitors || (t[ku.pluginName] = ku.plugin),
			"SetSentryMonitors" !== ku.pluginName || t.SetSentryMonitors || (t[ku.pluginName] = ku.plugin),
			"SetHeatmap" !== ku.pluginName || t.SetHeatmap || (t[ku.pluginName] = ku.plugin),
			"SetHeatmapDraw" !== ku.pluginName || t.SetHeatmapDraw || (t[ku.pluginName] = ku.plugin),
			"SetHeatmapMouseDraw" !== ku.pluginName || t.SetHeatmapMouseDraw || (t[ku.pluginName] = ku.plugin),
			"SetHeatmapScrollDraw" !== ku.pluginName || t.SetHeatmapScrollDraw || (t[ku.pluginName] = ku.plugin),
				Pu = !0),
				Du.push(t)
		}),
	Pu || Du.push(Ru),
		window.__SLARDAR__.plugins = Du),
		t.SetSentryMonitors = d,
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t
}({});
