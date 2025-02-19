var Slardar = function() {
	"use strict";
	var r = function(t, e) {
		return (r = Object.setPrototypeOf || {
					__proto__: []
				}instanceof Array && function(t, e) {
					t.__proto__ = e
				}
				|| function(t, e) {
					for (var n in e)
						Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
				}
		)(t, e)
	};
	function t(t, e) {
		if ("function" != typeof e && null !== e)
			throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
		function n() {
			this.constructor = t
		}
		r(t, e),
			t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype,
				new n)
	}
	var y = function() {
		return (y = Object.assign || function(t) {
				for (var e, n = 1, r = arguments.length; n < r; n++)
					for (var o in e = arguments[n])
						Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
				return t
			}
		).apply(this, arguments)
	};
	function d(t, e) {
		var n = {};
		for (o in t)
			Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
		if (null != t && "function" == typeof Object.getOwnPropertySymbols)
			for (var r = 0, o = Object.getOwnPropertySymbols(t); r < o.length; r++)
				e.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[r]) && (n[o[r]] = t[o[r]]);
		return n
	}
	function l(t) {
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
	}
	function b(t, e) {
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
	}
	function h(t, e, n) {
		if (n || 2 === arguments.length)
			for (var r, o = 0, i = e.length; o < i; o++)
				!r && o in e || ((r = r || Array.prototype.slice.call(e, 0, o))[o] = e[o]);
		return t.concat(r || e)
	}
	var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
		, n = function(t) {
		return t && t.Math == Math && t
	}
		, o = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function() {
		return this
	}() || Function("return this")()
		, i = {}
		, a = function(t) {
		try {
			return !!t()
		} catch (t) {
			return !0
		}
	}
		, s = !a(function() {
		return 7 != Object.defineProperty({}, 1, {
			get: function() {
				return 7
			}
		})[1]
	})
		, c = {}
		, u = {}.propertyIsEnumerable
		, p = Object.getOwnPropertyDescriptor
		, f = p && !u.call({
		1: 2
	}, 1);
	c.f = f ? function(t) {
			t = p(this, t);
			return !!t && t.enumerable
		}
		: u;
	function m(t) {
		return "object" == typeof t ? null !== t : "function" == typeof t
	}
	function v(t) {
		return Object(L(t))
	}
	var g = function(t, e) {
		return {
			enumerable: !(1 & t),
			configurable: !(2 & t),
			writable: !(4 & t),
			value: e
		}
	}
		, w = {}.toString
		, _ = function(t) {
		return w.call(t).slice(8, -1)
	}
		, S = a
		, E = _
		, M = "".split
		, P = S(function() {
		return !Object("z").propertyIsEnumerable(0)
	}) ? function(t) {
			return "String" == E(t) ? M.call(t, "") : Object(t)
		}
		: Object
		, x = function(t) {
		if (null == t)
			throw TypeError("Can't call method on " + t);
		return t
	}
		, R = P
		, C = x
		, j = function(t) {
		return R(C(t))
	}
		, O = m
		, H = function(t, e) {
		if (!O(t))
			return t;
		var n, r;
		if (e && "function" == typeof (n = t.toString) && !O(r = n.call(t)))
			return r;
		if ("function" == typeof (n = t.valueOf) && !O(r = n.call(t)))
			return r;
		if (!e && "function" == typeof (n = t.toString) && !O(r = n.call(t)))
			return r;
		throw TypeError("Can't convert object to primitive value")
	}
		, L = x
		, T = v
		, k = {}.hasOwnProperty
		, A = Object.hasOwn || function(t, e) {
		return k.call(T(t), e)
	}
		, U = m
		, D = o.document
		, I = U(D) && U(D.createElement)
		, B = function(t) {
		return I ? D.createElement(t) : {}
	}
		, q = !s && !a(function() {
		return 7 != Object.defineProperty(B("div"), "a", {
			get: function() {
				return 7
			}
		}).a
	})
		, J = c
		, F = g
		, N = j
		, z = H
		, W = A
		, Q = q
		, V = Object.getOwnPropertyDescriptor;
	i.f = s ? V : function(t, e) {
		if (t = N(t),
			e = z(e, !0),
			Q)
			try {
				return V(t, e)
			} catch (t) {}
		if (W(t, e))
			return F(!J.f.call(t, e), t[e])
	}
	;
	var X = {}
		, G = m
		, $ = function(t) {
		if (!G(t))
			throw TypeError(String(t) + " is not an object");
		return t
	}
		, Y = q
		, K = $
		, Z = H
		, tt = Object.defineProperty;
	X.f = s ? tt : function(t, e, n) {
		if (K(t),
			e = Z(e, !0),
			K(n),
			Y)
			try {
				return tt(t, e, n)
			} catch (t) {}
		if ("get"in n || "set"in n)
			throw TypeError("Accessors not supported");
		return "value"in n && (t[e] = n.value),
			t
	}
	;
	var et = X
		, nt = g
		, rt = s ? function(t, e, n) {
			return et.f(t, e, nt(1, n))
		}
		: function(t, e, n) {
			return t[e] = n,
				t
		}
		, n = {
		exports: {}
	}
		, ot = o
		, it = rt
		, f = function(e, n) {
		try {
			it(ot, e, n)
		} catch (t) {
			ot[e] = n
		}
		return n
	}
		, u = f
		, S = "__core-js_shared__"
		, x = o[S] || u(S, {})
		, U = x
		, at = Function.toString;
	"function" != typeof U.inspectSource && (U.inspectSource = function(t) {
			return at.call(t)
		}
	);
	var c = U.inspectSource
		, q = c
		, H = o.WeakMap
		, g = "function" == typeof H && /native code/.test(q(H))
		, s = {
		exports: {}
	}
		, st = x;
	(s.exports = function(t, e) {
			return st[t] || (st[t] = void 0 !== e ? e : {})
		}
	)("versions", []).push({
		version: "3.14.0",
		mode: "global",
		copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
	});
	var ct, lt, ut, pt, ft, dt, ht, mt, vt = 0, gt = Math.random(), u = function(t) {
		return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++vt + gt).toString(36)
	}, S = s.exports, yt = u, bt = S("keys"), U = {}, wt = m, _t = rt, St = A, q = x, H = function(t) {
		return bt[t] || (bt[t] = yt(t))
	}, S = U, Et = "Object already initialized", x = o.WeakMap;
	ht = g || q.state ? (ct = q.state || (q.state = new x),
			lt = ct.get,
			ut = ct.has,
			pt = ct.set,
			ft = function(t, e) {
				if (ut.call(ct, t))
					throw new TypeError(Et);
				return e.facade = t,
					pt.call(ct, t, e),
					e
			}
			,
			dt = function(t) {
				return lt.call(ct, t) || {}
			}
			,
			function(t) {
				return ut.call(ct, t)
			}
	) : (S[mt = H("state")] = !0,
			ft = function(t, e) {
				if (St(t, mt))
					throw new TypeError(Et);
				return e.facade = t,
					_t(t, mt, e),
					e
			}
			,
			dt = function(t) {
				return St(t, mt) ? t[mt] : {}
			}
			,
			function(t) {
				return St(t, mt)
			}
	);
	var q = {
		set: ft,
		get: dt,
		has: ht,
		enforce: function(t) {
			return ht(t) ? dt(t) : ft(t, {})
		},
		getterFor: function(n) {
			return function(t) {
				var e;
				if (!wt(t) || (e = dt(t)).type !== n)
					throw TypeError("Incompatible receiver, " + n + " required");
				return e
			}
		}
	}
		, Mt = o
		, Pt = rt
		, xt = A
		, Rt = f
		, Ct = c
		, jt = q.get
		, Ot = q.enforce
		, Ht = String(String).split("String");
	(n.exports = function(t, e, n, r) {
			var o = !!r && !!r.unsafe
				, i = !!r && !!r.enumerable
				, a = !!r && !!r.noTargetGet;
			"function" == typeof n && ("string" != typeof e || xt(n, "name") || Pt(n, "name", e),
			(r = Ot(n)).source || (r.source = Ht.join("string" == typeof e ? e : ""))),
				t !== Mt ? (o ? !a && t[e] && (i = !0) : delete t[e],
					i ? t[e] = n : Pt(t, e, n)) : i ? t[e] = n : Rt(e, n)
		}
	)(Function.prototype, "toString", function() {
		return "function" == typeof this && jt(this).source || Ct(this)
	});
	function Lt(t) {
		return "function" == typeof t ? t : void 0
	}
	var x = o
		, Tt = x
		, kt = o
		, S = function(t, e) {
		return arguments.length < 2 ? Lt(Tt[t]) || Lt(kt[t]) : Tt[t] && Tt[t][e] || kt[t] && kt[t][e]
	}
		, H = {}
		, At = Math.ceil
		, Ut = Math.floor
		, c = function(t) {
		return isNaN(t = +t) ? 0 : (0 < t ? Ut : At)(t)
	}
		, Dt = c
		, It = Math.min
		, q = function(t) {
		return 0 < t ? It(Dt(t), 9007199254740991) : 0
	}
		, Bt = c
		, qt = Math.max
		, Jt = Math.min
		, Ft = j
		, Nt = q
		, zt = function(t, e) {
		t = Bt(t);
		return t < 0 ? qt(t + e, 0) : Jt(t, e)
	}
		, c = function(s) {
		return function(t, e, n) {
			var r, o = Ft(t), i = Nt(o.length), a = zt(n, i);
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
		, c = {
		includes: c(!0),
		indexOf: c(!1)
	}
		, Wt = A
		, Qt = j
		, Vt = c.indexOf
		, Xt = U
		, j = function(t, e) {
		var n, r = Qt(t), o = 0, i = [];
		for (n in r)
			!Wt(Xt, n) && Wt(r, n) && i.push(n);
		for (; e.length > o; )
			Wt(r, n = e[o++]) && (~Vt(i, n) || i.push(n));
		return i
	}
		, c = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
		, Gt = j
		, $t = c.concat("length", "prototype");
	H.f = Object.getOwnPropertyNames || function(t) {
		return Gt(t, $t)
	}
	;
	U = {};
	U.f = Object.getOwnPropertySymbols;
	var Yt = H
		, Kt = U
		, Zt = $
		, $ = S("Reflect", "ownKeys") || function(t) {
		var e = Yt.f(Zt(t))
			, n = Kt.f;
		return n ? e.concat(n(t)) : e
	}
		, te = A
		, ee = $
		, ne = i
		, re = X
		, oe = a
		, ie = /#|\.prototype\./
		, X = function(t, e) {
		t = se[ae(t)];
		return t == le || t != ce && ("function" == typeof e ? oe(e) : !!e)
	}
		, ae = X.normalize = function(t) {
		return String(t).replace(ie, ".").toLowerCase()
	}
		, se = X.data = {}
		, ce = X.NATIVE = "N"
		, le = X.POLYFILL = "P"
		, ue = o
		, pe = i.f
		, fe = rt
		, de = n.exports
		, he = f
		, me = function(t, e) {
		for (var n = ee(e), r = re.f, o = ne.f, i = 0; i < n.length; i++) {
			var a = n[i];
			te(t, a) || r(t, a, o(e, a))
		}
	}
		, ve = X
		, n = function(t, e) {
		var n, r, o, i = t.target, a = t.global, s = t.stat, c = a ? ue : s ? ue[i] || he(i, {}) : (ue[i] || {}).prototype;
		if (c)
			for (n in e) {
				if (r = e[n],
					o = t.noTargetGet ? (o = pe(c, n)) && o.value : c[n],
				!ve(a ? n : i + (s ? "." : "#") + n, t.forced) && void 0 !== o) {
					if (typeof r == typeof o)
						continue;
					me(r, o)
				}
				(t.sham || o && o.sham) && fe(r, "sham", !0),
					de(c, n, r, t)
			}
	}
		, ge = function(t) {
		if ("function" != typeof t)
			throw TypeError(String(t) + " is not a function");
		return t
	}
		, f = function(r, o, t) {
		if (ge(r),
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
		, ye = _
		, X = Array.isArray || function(t) {
		return "Array" == ye(t)
	}
		, _ = S("navigator", "userAgent") || ""
		, S = o.process
		, S = S && S.versions
		, S = S && S.v8;
	S ? Se = (_e = S.split("."))[0] < 4 ? 1 : _e[0] + _e[1] : _ && (!(_e = _.match(/Edge\/(\d+)/)) || 74 <= _e[1]) && (_e = _.match(/Chrome\/(\d+)/)) && (Se = _e[1]);
	function be(t, e) {
		var n;
		return new (void 0 === (n = je(t) && ("function" == typeof (n = t.constructor) && (n === Array || je(n.prototype)) || Ce(n) && null === (n = n[Oe])) ? void 0 : n) ? Array : n)(0 === e ? 0 : e)
	}
	var we = Se && +Se
		, _ = a
		, _e = !!Object.getOwnPropertySymbols && !_(function() {
			var t = Symbol();
			return !String(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && we && we < 41
		})
		, Se = _e && !Symbol.sham && "symbol" == typeof Symbol.iterator
		, _ = o
		, s = s.exports
		, Ee = A
		, u = u
		, Me = _e
		, Se = Se
		, Pe = s("wks")
		, xe = _.Symbol
		, Re = Se ? xe : xe && xe.withoutSetter || u
		, Ce = m
		, je = X
		, Oe = function(t) {
			return Ee(Pe, t) && (Me || "string" == typeof Pe[t]) || (Me && Ee(xe, t) ? Pe[t] = xe[t] : Pe[t] = Re("Symbol." + t)),
				Pe[t]
		}("species")
		, He = f
		, Le = P
		, Te = v
		, ke = q
		, Ae = [].push
		, q = function(f) {
			var d = 1 == f
				, h = 2 == f
				, m = 3 == f
				, v = 4 == f
				, g = 6 == f
				, y = 7 == f
				, b = 5 == f || g;
			return function(t, e, n, r) {
				for (var o, i, a = Te(t), s = Le(a), c = He(e, n, 3), l = ke(s.length), u = 0, r = r || be, p = d ? r(t, l) : h || y ? r(t, 0) : void 0; u < l; u++)
					if ((b || u in s) && (i = c(o = s[u], u, a),
						f))
						if (d)
							p[u] = i;
						else if (i)
							switch (f) {
								case 3:
									return !0;
								case 5:
									return o;
								case 6:
									return u;
								case 2:
									Ae.call(p, o)
							}
						else
							switch (f) {
								case 4:
									return !1;
								case 7:
									Ae.call(p, o)
							}
				return g ? -1 : m || v ? v : p
			}
		}
		, q = {
			forEach: q(0),
			map: q(1),
			filter: q(2),
			some: q(3),
			every: q(4),
			find: q(5),
			findIndex: q(6),
			filterOut: q(7)
		}
		, Ue = a
		, De = q.forEach
		, q = function(t, e) {
			var n = [][t];
			return !!n && Ue(function() {
				n.call(null, e || function() {
					throw 1
				}
					, 1)
			})
		}("forEach") ? [].forEach : function(t) {
			return De(this, t, 1 < arguments.length ? arguments[1] : void 0)
		}
	;
	n({
		target: "Array",
		proto: !0,
		forced: [].forEach != q
	}, {
		forEach: q
	});
	var Ie, Be, qe, Je = o, Fe = f, Ne = Function.call;
	function ze(t, e) {
		if (!t)
			throw new TypeError("Invalid argument");
		var n = document.implementation.createHTMLDocument("");
		e && ((r = n.createElement("base")).href = e,
			n.head.appendChild(r));
		var r = n.createElement("a");
		if (r.href = t,
			n.body.appendChild(r),
		":" === r.protocol || !/:/.test(r.href))
			throw new TypeError("Invalid URL");
		Object.defineProperty(this, "_anchorElement", {
			value: r
		})
	}
	(function(t, e, n) {
			Fe(Ne, Je[t].prototype[e], n)
		}
	)("Array", "forEach"),
	(e = void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e) && ("href"in (null !== (qe = null === (qe = e.URL) || void 0 === qe ? void 0 : qe.prototype) && void 0 !== qe ? qe : {}) || (ze.prototype = {
		toString: function() {
			return this.href
		},
		get href() {
			return this._anchorElement.href
		},
		set href(t) {
			this._anchorElement.href = t
		},
		get protocol() {
			return this._anchorElement.protocol
		},
		set protocol(t) {
			this._anchorElement.protocol = t
		},
		get host() {
			return this._anchorElement.host
		},
		set host(t) {
			this._anchorElement.host = t
		},
		get hostname() {
			return this._anchorElement.hostname
		},
		set hostname(t) {
			this._anchorElement.hostname = t
		},
		get port() {
			return this._anchorElement.port
		},
		set port(t) {
			this._anchorElement.port = t
		},
		get pathname() {
			return this._anchorElement.pathname
		},
		set pathname(t) {
			this._anchorElement.pathname = t
		},
		get search() {
			return this._anchorElement.search
		},
		set search(t) {
			this._anchorElement.search = t
		},
		get hash() {
			return this._anchorElement.hash
		},
		set hash(t) {
			this._anchorElement.hash = t
		}
	},
		Ie = e.URL || e.webkitURL || e.mozURL,
		ze.createObjectURL = function(t) {
			return Ie.createObjectURL(t)
		}
		,
		ze.revokeObjectURL = function(t) {
			return Ie.revokeObjectURL(t)
		}
		,
		Object.defineProperty(ze.prototype, "toString", {
			enumerable: !1
		}),
		e.URL = ze)),
	Element.prototype.addEventListener || (Be = [],
		qe = function(t, e) {
			function n(t) {
				t.target = t.srcElement,
					t.currentTarget = i,
					void 0 !== e.handleEvent ? e.handleEvent(t) : e.call(i, t)
			}
			var r, o, i = this;
			"DOMContentLoaded" === t ? (r = function(t) {
				"complete" === document.readyState && n(t)
			}
				,
				document.attachEvent("onreadystatechange", r),
				Be.push({
					object: this,
					type: t,
					listener: e,
					wrapper: r
				}),
			"complete" === document.readyState && ((o = new Event).srcElement = window,
				r(o))) : (this.attachEvent("on" + t, n),
				Be.push({
					object: this,
					type: t,
					listener: e,
					wrapper: n
				}))
		}
		,
		e = function(t, e) {
			for (var n = 0; n < Be.length; ) {
				var r = Be[n];
				if (r.object === this && r.type === t && r.listener === e) {
					"DOMContentLoaded" === t ? this.detachEvent("onreadystatechange", r.wrapper) : this.detachEvent("on" + t, r.wrapper),
						Be.splice(n, 1);
					break
				}
				++n
			}
		}
		,
		Element.prototype.addEventListener = qe,
		Element.prototype.removeEventListener = e,
	HTMLDocument && !HTMLDocument.prototype.addEventListener && (HTMLDocument.prototype.addEventListener = qe,
		HTMLDocument.prototype.removeEventListener = e),
	Window && !Window.prototype.addEventListener && (Window.prototype.addEventListener = qe,
		Window.prototype.removeEventListener = e));
	var We = j
		, Qe = c
		, c = Object.keys || function(t) {
		return We(t, Qe)
	}
		, Ve = v
		, Xe = c;
	function Ge(t) {
		return "object" == typeof t && null !== t && !Ke(t)
	}
	function $e(t) {
		return "function" == typeof t
	}
	function Ye(t) {
		return "[object String]" === Object.prototype.toString.call(t)
	}
	function Ke(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}
	function Ze(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}
	function tn(t, e) {
		if (Ge(t))
			for (var n in t)
				Ze(t, n) && e.call(null, n, t[n])
	}
	function en() {
		for (var t = [], e = 0; e < arguments.length; e++)
			t[e] = arguments[e];
		for (var n = {}, r = 0; r < t.length; )
			n = function(t, e) {
				var n, r = y({}, t);
				for (n in e)
					Object.prototype.hasOwnProperty.call(e, n) && void 0 !== e[n] && (Ge(e[n]) && on(e[n]) ? r[n] = an(Ge(t[n]) ? t[n] : {}, e[n]) : Ke(e[n]) ? r[n] = e[n].slice() : r[n] = e[n]);
				return r
			}(n, t[r]),
				r++;
		return n
	}
	function nn() {
		for (var t = [], e = 0; e < arguments.length; e++)
			t[e] = arguments[e];
		for (var n = {}, r = 0; r < t.length; )
			n = an(n, t[r]),
				r++;
		return n
	}
	n({
		target: "Object",
		stat: !0,
		forced: a(function() {
			Xe(1)
		})
	}, {
		keys: function(t) {
			return Xe(Ve(t))
		}
	}),
		x.Object.keys;
	var rn = Object.getPrototypeOf ? Object.getPrototypeOf({}) : null;
	function on(t) {
		return Object.getPrototypeOf ? Object.getPrototypeOf(t) === rn : t.constructor === Object
	}
	function an(t, e) {
		var n, r = y({}, t);
		for (n in e)
			Object.prototype.hasOwnProperty.call(e, n) && void 0 !== e[n] && (Ge(e[n]) && on(e[n]) ? r[n] = an(Ge(t[n]) ? t[n] : {}, e[n]) : Ke(t[n]) || Ke(e[n]) ? r[n] = function e(t, n) {
				t = Ke(t) ? t : [];
				n = Ke(n) ? n : [];
				return Array.prototype.concat.call(t, n).map(function(t) {
					return !(t instanceof RegExp) && (Ke(t) || Ge(t) && on(t)) ? Ke(t) ? e([], t) : an({}, t) : t
				})
			}(t[n], e[n]) : r[n] = e[n]);
		return r
	}
	function sn(t, e) {
		if (Ke(t) && 0 !== t.length)
			for (var n = 0; n < t.length; ) {
				if (t[n] === e)
					return 1;
				n++
			}
	}
	function cn() {
		return !!Ge(window)
	}
	function ln() {
		return cn() && Ge(window.performance) && !!Ge(window.performance.timing)
	}
	function un(t) {
		var n, t = function(t) {
			if (!Ge(t))
				return {};
			var n = {};
			return tn(t, function(t, e) {
				Ge(e) || Ke(e) ? n[t] = JSON.stringify(e) : n[t] = e
			}),
				n
		}(t), t = (n = {},
			tn(t, function(t, e) {
				n[encodeURIComponent(t)] = encodeURIComponent(e)
			}),
			n), r = [];
		return tn(t, function(t, e) {
			r.push(t + "=" + e)
		}),
			r.join("&")
	}
	function pn(t) {
		var e = document.createElement("a");
		e.href = t;
		t = e.pathname || "/";
		return "/" !== t[0] && (t = "/" + t),
			{
				href: e.href,
				protocol: e.protocol.slice(0, -1),
				hostname: e.hostname,
				host: e.host,
				search: e.search,
				pathname: t,
				hash: e.hash
			}
	}
	var fn = new RegExp("(" + ["cookie", "auth", "jwt", "token", "key", "ticket", "secret", "credential", "session", "password"].join("|") + ")","i")
		, dn = new RegExp("(" + ["bearer", "session"].join("|") + ")","i")
		, hn = function(t, e) {
		return !(!t || !e) && (fn.test(t) || dn.test(e))
	};
	function mn() {}
	function vn(t) {
		var e = "[object String]" === Object.prototype.toString.call(t);
		return t ? e ? t.length : ArrayBuffer && t instanceof ArrayBuffer ? t.byteLength : window.Blob && t instanceof Blob ? t.size : t.length || 0 : 0
	}
	function gn(t) {
		if (!t)
			return "";
		if (!$e(t.forEach))
			return "";
		var n = [];
		return t.forEach(function(t) {
			var e;
			Ke(t) && t[0] && !hn(t[0], t[1]) && (e = t[0],
				t = t[1] || "",
				n.push(e + ": " + t))
		}),
			n.join("\r\n")
	}
	function yn(t) {
		var e = {}
			, n = pn(t);
		return e.ax_protocol = n.protocol,
			e.ax_domain = n.hostname,
			e.ax_path = n.pathname,
			e.ax_url = (n.href || t).split("?")[0],
			e.ax_search = n.search,
			e.ax_href = n.href,
			e
	}
	function bn(t) {
		return Ke(t) && t.length ? function(t) {
			for (var e = [], n = t.length, r = 0; r < n; r++) {
				var o = t[r];
				Ye(o) ? e.push(o.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1")) : o && o.source && e.push(o.source)
			}
			return new RegExp(e.join("|"),"i")
		}(t) : null
	}
	var wn = function(t) {
		var e, n;
		return void 0 === t && (t = window),
			cn() && null !== (e = t.screen) && void 0 !== e && e.width && null !== (n = t.screen) && void 0 !== n && n.height ? t.screen.width + "x" + t.screen.height : "0x0"
	}
		, _n = function() {
		var t = "unknown"
			, e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
		return e && Ye(e.effectiveType) ? e.effectiveType : t
	};
	function Sn(t) {
		return !!t && Math.random() < Number(t)
	}
	var En = (Mn.post = function(t, e, n) {
		var r = n && n.success || mn
			, o = n && n.fail || mn
			, n = new XMLHttpRequest;
		n.open("POST", t, !0),
			n.setRequestHeader("Content-Type", "application/json"),
			n.send(JSON.stringify(e)),
			n.onload = function() {
				try {
					var t;
					this.responseText ? (t = JSON.parse(this.responseText),
						r(t)) : r({})
				} catch (t) {
					o()
				}
			}
			,
			n.onerror = function() {
				o()
			}
			,
			n.onabort = function() {
				o()
			}
	}
		,
		Mn.get = function(t, e) {
			var n = e && e.success || mn
				, r = e && e.fail || mn
				, o = e && e.getResponse || mn
				, i = e && e.getResponseText || mn
				, a = new XMLHttpRequest;
			e && e.withCredentials && (a.withCredentials = e.withCredentials),
				a.open("GET", t),
				a.send(),
				a.onload = function() {
					o(null == this ? void 0 : this.response),
						i(this.responseText);
					try {
						var t;
						this.responseText ? (t = JSON.parse(this.responseText),
							n(t)) : n({})
					} catch (t) {
						r()
					}
				}
				,
				a.onerror = function() {
					r()
				}
				,
				a.onabort = function() {
					r()
				}
		}
		,
		Mn.prototype.getCommonParams = function() {
			return {
				timestamp: Date.now()
			}
		}
		,
		Mn);
	function Mn(t) {
		var e = this;
		this.postEvent = function(t) {
			t = y(y({}, t), e.getCommonParams());
			Mn.post(e.url, t)
		}
			,
			this.getEvent = function(t) {
				t = un(y(y({}, t), e.getCommonParams())),
					t = e.url + "?" + t;
				Mn.get(t)
			}
			,
			this.getURL = function() {
				return e.url
			}
			,
			this.options = t,
			this.url = this.options.reportURL
	}
	function Pn(t, e, n) {
		if (1 < (n = void 0 === n ? "0" : n).length)
			throw new TypeError("expect the length of pad to be 1, but got " + t.length);
		return t.length >= e ? t : "" + Array.from({
			length: e - t.length
		}).fill(n).join("") + t
	}
	function xn(t) {
		return t ? Math.floor(Math.random() * Math.pow(10, 12)).toString(16).substr(0, t) : ""
	}
	var Rn = "x-tt-trace-id"
		, Cn = "x-tt-trace-host"
		, jn = "x-tt-logid";
	function On(t, e, n) {
		void 0 === n && (n = "01");
		e = "" + Pn((Date.now() % 4294967295).toString(16), 8) + function(t) {
			if ("number" == typeof t)
				n = t;
			else {
				var e = t.replace(/-/g, "");
				if (!/^[0-9]+$/.test(e)) {
					if (18 < e.length)
						return "18" + xn(18);
					t = 22 - e.length - 4;
					return "" + Pn("" + e.length, 2) + e + xn(t)
				}
				n = parseInt(e, 10)
			}
			var n = 22 - (e = n.toString(16)).length - 4;
			return "" + Pn("" + e.length, 2) + e + xn(n)
		}(t) + ("string" == typeof e ? xn(4) : Pn(e.toString(16), 4));
		return "00-" + e + "-" + e.substr(0, 16) + "-" + n
	}
	function Hn() {
		var t = function() {
			for (var t = new Array(16), e = 0, n = 0; n < 16; n++)
				0 == (3 & n) && (e = 4294967296 * Math.random()),
					t[n] = e >>> ((3 & n) << 3) & 255;
			return t
		}();
		return t[6] = 15 & t[6] | 64,
			t[8] = 63 & t[8] | 128,
			function(t) {
				for (var e = [], n = 0; n < 256; ++n)
					e[n] = (n + 256).toString(16).substr(1);
				var r = 0
					, o = e;
				return [o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], "-", o[t[r++]], o[t[r++]], o[t[r++]], o[t[r++]], o[t[+r]], o[t[15]]].join("")
			}(t)
	}
	function Ln() {}
	var Tn = 1
		, kn = .1
		, An = .1
		, Un = ["/log/sentry/", "/monitor_browser/collect"]
		, Dn = 8e3
		, In = 4e3
		, Bn = "MONITOR_WEB_ID"
		, qn = Hn()
		, Jn = Hn();
	function Fn(t, e) {
		var n, r;
		void 0 === e && (e = Ln),
		t && Ye(t) && cn() && Ge(document) && $e(document.createElement) && (n = document.createElement("script"),
			r = document.head,
		Ge(n) && Ge(r) && (n.src = t,
			n.async = !0,
			n.crossOrigin = "anonymous",
			n.onload = function() {
				e()
			}
			,
		$e(r.appendChild) && r.appendChild(n)))
	}
	function Nn() {
		if (Ge(window))
			return window
	}
	function zn() {
		if (Nn() && Ge(window.performance))
			return window.performance
	}
	function Wn(t, e, n) {
		var r = t.commonParams
			, o = t.ajaxMonitorOptions
			, r = (t = r || {}).bid
			, t = t.web_id
			, o = (o || {}).sampleHitTrace
			, e = (e = e,
			n = pn(n = n),
			e = pn(e),
		n.protocol === e.protocol && n.host === e.host);
		return r && t && o && e
	}
	function Qn(i, a, s) {
		return function() {
			for (var t = [], e = 0; e < arguments.length; e++)
				t[e] = arguments[e];
			if (!i)
				return mn;
			var n = i[a]
				, r = s.apply(void 0, h([n], b(t)))
				, o = r;
			return $e(o) && (o = function() {
					for (var e = [], t = 0; t < arguments.length; t++)
						e[t] = arguments[t];
					try {
						return r.apply(this, e)
					} catch (t) {
						return $e(n) && n.apply(this, e)
					}
				}
			),
				i[a] = o,
				function(t) {
					t && o !== i[a] || (i[a] = n)
				}
		}
	}
	function Vn(t, e) {
		return t instanceof e
	}
	function Xn(t, e) {
		return t instanceof e
	}
	function Gn(t) {
		return null !== (t = null === (t = t.ajaxMonitorOptions) || void 0 === t ? void 0 : t.errorRequestCollect) && void 0 !== t && t
	}
	function $n(t) {
		function e() {
			return Object.keys(n).forEach(function(t) {
				return !(t in r) && Object.defineProperty(r, t, {
					get: function() {
						return n[t]
					}
				})
			})
		}
		var n = t
			, r = {};
		return e(),
			[r, function(t) {
				n = nn({}, n, t),
					e()
			}
			]
	}
	function Yn(t, e) {
		var n, r;
		return void 0 === e && (e = zn()),
			(0,
				b([r = (n = e) && n.timing || void 0, function() {
					return n && n.now ? n.now() : (Date.now ? Date.now() : +new Date) - (r && r.navigationStart || 0)
				}
					, function(t) {
						var e = (n || {}).getEntriesByType;
						return $e(e) && e.call(n, t) || []
					}
					, function() {
						var t = (n || {}).clearResourceTimings;
						$e(t) && t.call(n)
					}
					, function(t) {
						var e = (n || {}).getEntriesByName;
						return $e(e) && e.call(n, t) || []
					}
				], 5)[4])(t).pop()
	}
	function Kn(t, e, n, r) {
		var o = t._method
			, i = t._requestHeaders
			, a = t._url
			, s = t._start
			, c = t._data
			, o = {
			ev_type: "ajax",
			ax_status: (t.status || 0).toString(),
			ax_type: o,
			ax_request_header: gn(i || []),
			ax_domain: "",
			ax_duration: 0,
			ax_path: "",
			ax_protocol: "",
			ax_response_header: "",
			ax_size: 0,
			ax_url: "",
			ax_href: ""
		};
		return "function" == typeof t.getAllResponseHeaders && (o.ax_response_header = function(e) {
			if (Ye(e)) {
				var t = e.split("\r\n")
					, n = [];
				return t.forEach(function(t, e) {
					t && $e(t.split) && (t = t.split(": "),
					hn(t[0], t[1]) || n.push([t[0], t[1]]))
				}),
					gn(n)
			}
			return Ge(e) ? gn(Object.keys(e).filter(function(t) {
				return !hn(t, e[t])
			}).map(function(t) {
				return [t, e[t]]
			})) : e
		}(t.getAllResponseHeaders())),
		!Wn(e, a, r) || (n = n || t.getResponseHeader(Rn)) && (o.trace_id = n,
			o.trace_host = t.getResponseHeader(Cn) || void 0,
			o.log_id = t.getResponseHeader(jn) || void 0),
			o.ax_duration = Date.now() - s,
		200 === t.status && (o.ax_size = function(t) {
			if ("" === t.responseType || "text" === t.responseType)
				return vn(t.responseText);
			if (t.response)
				return vn(t.response);
			try {
				return vn(t.responseText)
			} catch (t) {
				return 0
			}
		}(t)),
			(o = y(y({}, o), yn(a))).resource_timing = Yn(o.ax_href),
			t = o.ax_status,
		Gn(e) && "2" !== t[0] && "3" !== t[0] && (o.ax_request = {
			body: c ? "" + c : void 0,
			search: pn(a).search,
			content_type: i && (null === (i = i.find(function(t) {
				return "content-type" === t[0].toLowerCase()
			})) || void 0 === i ? void 0 : i[1])
		}),
			o
	}
	function Zn(o) {
		return function() {
			for (var t = [], e = 0; e < arguments.length; e++)
				t[e] = arguments[e];
			var n = b(t, 2)
				, r = n[0]
				, n = n[1];
			return this._url = n || "",
				this._method = r && r.toLowerCase() || "",
				o.apply(this, t)
		}
	}
	function tr(n) {
		return function() {
			for (var t = [], e = 0; e < arguments.length; e++)
				t[e] = arguments[e];
			return this._requestHeaders = this._requestHeaders || [],
				this._requestHeaders.push(t),
			n && n.apply(this, t)
		}
	}
	function er(o, i, a, s) {
		var c = null;
		return function() {
			for (var t, e, n = [], r = 0; r < arguments.length; r++)
				n[r] = arguments[r];
			return Wn(i, this._url, s) && (t = (e = i.commonParams || {}).bid,
				e = e.web_id,
			t && e && (c = On(e, t),
				this.setRequestHeader(Rn, c))),
				or(this)(i, c, a, s),
				this._start = Date.now(),
				this._data = null == n ? void 0 : n[0],
				o.apply(this, n)
		}
	}
	function nr(t, e, n) {
		var r = ""
			, r = Vn(t, n) ? t.url : t;
		return r = !(e = void 0 === e ? !1 : e) ? Ye(r) ? r.split("?")[0] : r : r
	}
	var rr = "AjaxMonitor"
		, or = function(s) {
		return Qn(s, "onreadystatechange", function(n, r, o, i, a) {
			return function() {
				for (var t = [], e = 0; e < arguments.length; e++)
					t[e] = arguments[e];
				return 4 === this.readyState && i && i({
					name: rr,
					type: "get",
					event: Kn(s, r, o, a)
				}),
				n && n.apply(this, t)
			}
		})
	};
	function ir(t, e) {
		if (!t)
			return "";
		var n = [];
		return Xn(t, e) ? t.forEach(function(t, e) {
			n.push([e, t])
		}) : Ke(t) ? n.push.apply(n, h([], b(t))) : n.push.apply(n, h([], b(Object.entries(t)))),
			gn(n)
	}
	function ar(t, e, n, r, o, i) {
		var a = e.ax_status;
		Gn(t) && "2" !== a[0] && "3" !== a[0] && (a = nr(n, !0, o),
			e.ax_request = {
				body: null === (e = r,
					e = Vn(n = n, o) ? n.body : null == e ? void 0 : e.body) || void 0 === e ? void 0 : e.toString(),
				search: pn(a).search,
				content_type: function(t, e, n) {
					if (t) {
						if (Xn(t, n))
							return t.get(e) || void 0;
						if (Ke(t)) {
							n = t.find(function(t) {
								return e === t[0]
							});
							return null == n ? void 0 : n[1]
						}
						return t[e]
					}
				}(r.headers, "Content-Type", i)
			})
	}
	function sr(i, h, a, m, v, g) {
		return function(c, l) {
			void 0 === l && (l = {});
			var u = nr(c, void 0, v);
			if (!function(t) {
				if (Ye(t)) {
					var e = b(t.split(":"), 2)
						, t = e[0];
					return !e[1] || ("http" === t || "https" === t)
				}
			}(u))
				return i(c, l);
			var t, e, n, r = h.commonParams || {}, o = r.bid, r = r.web_id, p = Date.now(), f = {
				ev_type: "ajax",
				ax_size: 0
			};
			try {
				Wn(h, u, g) && (l.headers || (l.headers = []),
				o && r && (f.trace_id = On(o, r),
					t = l.headers,
					e = Rn,
					n = f.trace_id,
					Xn(t, m) ? t.append(e, n) : Ke(t) ? t.push([e, n]) : t[e] = n))
			} catch (t) {}
			f.ax_type = function(t, e, n) {
				e = e && e.method || "get";
				return (e = Vn(t, n) ? t.method || e : e).toLowerCase()
			}(c, l, v);
			function d() {
				ar(h, f, c, l, v, m),
				null != a && a({
					name: lr,
					type: "get",
					event: f
				})
			}
			f = y(y({}, f), yn(nr(c, !0, v)));
			return i(c, l).then(function(n) {
				var t, e, r, o, i, a;
				try {
					f.ax_status = (n.status || 0).toString(),
						f.ax_duration = Date.now() - p,
						f.ax_response_header = ir(n.headers, m),
						f.ax_request_header = ir((e = c,
							r = l,
							i = v,
							a = new (o = m),
						Vn(e, i) && e.headers && $e(e.headers.forEach) && e.headers.forEach(function(t, e) {
							a.append(e, t)
						}),
						r.headers && new o(r.headers).forEach(function(t, e) {
							a.append(e, t)
						}),
							a), m),
						f.resource_timing = Yn(f.ax_href);
					var s = function(t, e) {
						n.headers.has(t) && (f[e] = n.headers.get(t) || void 0)
					};
					$e(null === (t = n.headers) || void 0 === t ? void 0 : t.has) && (n.headers.has("content-length") && (f.ax_size = Number(n.headers.get("content-length")) || 0),
					Wn(h, u, g) && (s(Cn, "trace_host"),
						s(Rn, "trace_id"),
						s(jn, "log_id"))),
						d()
				} catch (t) {}
				return n
			}, function(t) {
				try {
					f.ax_status = "0",
						f.ax_duration = Date.now() - p,
						f.resource_timing = Yn(f.ax_href),
						d()
				} catch (t) {}
				return Promise.reject(t)
			})
		}
	}
	function cr(h, m, v) {
		var t;
		return void 0 === h && (h = function() {
			if (Ge(document))
				return document
		}()),
		void 0 === m && (m = function() {
			if (Nn() && $e(window.MutationObserver))
				return window.MutationObserver
		}()),
		void 0 === v && (v = null === (t = function() {
			var t = zn();
			if (t && Ge(t.timing))
				return t.timing
		}()) || void 0 === t ? void 0 : t.navigationStart),
			function(t, r) {
				function e() {
					return l.push({
						time: Date.now() - c,
						score: pr(h && h.body, 1, !1, u)
					})
				}
				var n, o, i, a, s, c = Date.now(), l = [], u = ur.concat(t.ignoreTags || []), p = b((d = !0,
					a = window.requestAnimationFrame,
					t = window.cancelAnimationFrame,
					o = !$e(a) || d && document && document.hidden ? function(t) {
							return t(0),
								0
						}
						: a,
					i = $e(t) ? t : mn,
					[function(t) {
						n && i(n),
							n = o(t)
					}
						, o, i]), 1)[0], t = b((d = function() {
					return p(e)
				}
					,
					s = (a = m) && new a(d),
					[function(t, e) {
						s && t && s.observe(t, e)
					}
						, function() {
						return s && s.disconnect()
					}
					]), 2), a = t[0], f = t[1], d = function(t) {
					void 0 === t && (t = 0),
						f();
					var e, n, e = (e = (n = b(void 0 === (e = l) ? [] : e))[0],
					(n = n.slice(1)) && n.reduce(function(t, e) {
						var n = b(t, 2)
							, r = n[0]
							, t = n[1]
							, n = e.score - r.score;
						return [e, e.time >= r.time && t.rate < n ? {
							time: e.time,
							rate: n
						} : t]
					}, [e, {
						time: null == e ? void 0 : e.time,
						rate: 0
					}])[1].time || 0), t = {
						name: "FMPMonitor",
						type: "post",
						event: {
							ev_type: "fmp",
							fmp: e ? e + t : 0
						}
					};
					return r && r(t),
						t
				}, t = c - (v || 0);
				return a(h, {
					subtree: !0,
					childList: !0
				}),
					[f, d, d.bind(null, t)]
			}
	}
	var lr = "FetchMonitor"
		, ur = ["SCRIPT", "STYLE", "META", "HEAD"]
		, pr = function(t, n, e, r) {
		if (!t || -1 < r.indexOf(t.tagName))
			return 0;
		var o = t.children
			, o = [].slice.call(void 0 === o ? [] : o).reduceRight(function(t, e) {
			return t + pr(e, n + 1, 0 < t, r)
		}, 0);
		if (o <= 0 && !e) {
			if (!$e(t.getBoundingClientRect))
				return 0;
			e = t.getBoundingClientRect() || {},
				t = e.top,
				e = e.height;
			if (t > window.innerHeight || e <= 0)
				return 0
		}
		return o + 1 + .5 * n
	}
		, fr = "PathMonitor"
		, dr = (hr.prototype.setup = function(t) {
		cn() && (this.currentURL = location.href,
			this.callback = t,
			this.start())
	}
		,
		hr.prototype.onChange = function(t) {
			this.onPathChange = t
		}
		,
		hr.prototype.start = function() {
			this.monitorHashChange(),
			cn() && Ge(window.history) && ($e(window.history.pushState) && $e(window.history.replaceState)) && (this.monitorPopState(),
				this.monitorPushState(),
				this.monitorReplaceState())
		}
		,
		hr.prototype.monitorPopState = function() {
			var t = this;
			window.addEventListener("popstate", function() {
				t.handleStateChange(t.currentURL, location.href),
					t.replaceCurrentURL(location.href)
			})
		}
		,
		hr.prototype.monitorHashChange = function() {
			var e = this;
			window.addEventListener("hashchange", function() {
				var t = e.parseHash(location.hash);
				t && e.pathChangeHandler(e.getPath(t), "hash"),
					e.replaceCurrentURL(location.href)
			})
		}
		,
		hr.prototype.monitorPushState = function() {
			var n = this
				, r = window.history.pushState;
			r && (window.history.pushState = function() {
					for (var t = [], e = 0; e < arguments.length; e++)
						t[e] = arguments[e];
					try {
						return r.apply(this, t)
					} finally {
						n.handleHistoryStateChange.apply(n, h([], b(t)))
					}
				}
			)
		}
		,
		hr.prototype.monitorReplaceState = function() {
			var n = this
				, r = window.history.replaceState;
			r && (window.history.replaceState = function() {
					for (var t = [], e = 0; e < arguments.length; e++)
						t[e] = arguments[e];
					try {
						return r.apply(this, t)
					} finally {
						n.handleHistoryStateChange.apply(n, h([], b(t)))
					}
				}
			)
		}
		,
		hr.prototype.pathChangeHandler = function(t, e, n) {
			Ye(t) && $e(this.callback) && (this.onPathChange && this.onPathChange({
				path: t,
				type: e,
				url: n
			}),
				this.callback({
					name: this.name,
					type: "get",
					event: {
						ev_type: "pageview",
						path: t,
						type: e
					}
				}))
		}
		,
		hr.prototype.handleHistoryStateChange = function(t, e, n) {
			n && (this.handleStateChange(this.currentURL, n),
				this.replaceCurrentURL(n))
		}
		,
		hr.prototype.handleStateChange = function(t, e) {
			t = this.parseURL(t),
				e = this.parseURL(e);
			e && t && (e.pathname === t.pathname ? e.hash !== t.hash && this.pathChangeHandler(this.getPath(e.hash), "hash", e) : this.pathChangeHandler(this.getPath(e.pathname), "pathname", e))
		}
		,
		hr.prototype.parseURL = function(t) {
			var e = null;
			if (!t)
				return e;
			if ("string" != typeof t)
				return e;
			if (t.match(/^\/[^\/]/))
				return new URL(location.protocol + "//" + location.host + t);
			try {
				return new URL(t)
			} catch (t) {
				return e
			}
		}
		,
		hr.prototype.parseHash = function(t) {
			return !t || "string" != typeof t ? "/" : t.replace(/^#/, "")
		}
		,
		hr.prototype.getPath = function(t) {
			t = t && "string" == typeof t ? t.replace(/^(https?:)?\/\//, "").replace(/\?.*$/, "") : "";
			return t = this.parseHash(t)
		}
		,
		hr.prototype.replaceCurrentURL = function(t) {
			this.currentURL !== t && (this.currentURL = t)
		}
		,
		hr.monitorName = fr,
		hr);
	function hr() {
		this.name = fr,
			this.callback = mn,
			this.onPathChange = mn,
			this.currentURL = ""
	}
	var a = function(e, n, t, r) {
		var i = (o.prototype.setup = function(t) {
			this.monitor = function(t, e, n, r) {
				void 0 === e && (e = {}),
				void 0 === r && (r = []);
				try {
					var o = t.apply(void 0, h([], b(r)));
					return o && o(e, n) || []
				} catch (t) {
					return []
				}
			}(n, this.props, t, r)
		}
			,
			o.monitorName = e,
			o);
		function o(t) {
			this.props = t,
				this.name = e
		}
		return t.forEach(function(t, o) {
			return i.prototype[t] = function() {
				for (var t, e, n = [], r = 0; r < arguments.length; r++)
					n[r] = arguments[r];
				return null === (e = null === (t = this.monitor) || void 0 === t ? void 0 : t[o]) || void 0 === e ? void 0 : e.call.apply(e, h([t], b(n)))
			}
		}),
			i
	}
		, mr = a(rr, function(t, r) {
		void 0 === t && (t = function() {
			if ($e(XMLHttpRequest))
				return XMLHttpRequest
		}()),
		void 0 === r && (r = null === location || void 0 === location ? void 0 : location.href);
		var o = t && t.prototype;
		if (o)
			return function(t, e) {
				var n = b($n(t), 2)
					, t = n[0]
					, n = n[1];
				return Qn(o, "open", Zn)(),
					Qn(o, "send", er)(t, e, r || ""),
					Qn(o, "setRequestHeader", tr)(),
					[n]
			}
	}, ["updateConfig"])
		, vr = a(lr, function(r, o, i, a) {
		if (void 0 === r && (r = function() {
			try {
				return new Headers,
					new Request(""),
					new Response,
					window.fetch
			} catch (t) {}
		}() && Nn()),
		void 0 === o && (o = window.Headers),
		void 0 === i && (i = window.Request),
		void 0 === a && (a = null === location || void 0 === location ? void 0 : location.href),
		r && o && i)
			return function(t, e) {
				var n = b($n(t), 2)
					, t = n[0]
					, n = n[1];
				return Qn(r, "fetch", sr)(t, e, o, i, a || ""),
					[n]
			}
	}, ["updateConfig"])
		, x = (gr.prototype.sendEvent = function(t) {
		t = this.getEventToBeSent(t);
		t && this.idleSendEvent(t)
	}
		,
		gr.prototype.getEventToBeSent = function(t) {
			t = this._modifyEvent(t);
			if (this._shouldSend(t))
				return t
		}
		,
		gr.prototype._modifyEvent = function(t) {
			return t
		}
		,
		gr.prototype._shouldSend = function(t) {
			return !0
		}
		,
		gr.prototype._send = function(t) {}
		,
		gr.prototype.idleSendEvent = function(t) {
			this._send(t)
		}
		,
		gr);
	function gr() {}
	var yr, a = (t(br, yr = x),
		Object.defineProperty(br.prototype, "ready", {
			get: function() {
				return this.isReady
			},
			set: function(t) {
				this.isReady = t,
				this.isReady && this._uploadQueue()
			},
			enumerable: !1,
			configurable: !0
		}),
		br.prototype._send = function(t) {
			var e = this
				, t = this.buildParams(t);
			null != t && (this.reportQueue.push(t),
			this.isReady && (this.reportQueue.length >= this.batchReportLength && this._uploadQueue(),
			this.batchReportTimeout && clearTimeout(this.batchReportTimeout),
				this.batchReportTimeout = setTimeout(function() {
					e._uploadQueue()
				}, this.batchReportWait)))
		}
		,
		br.prototype._uploadQueue = function() {
			var t;
			this.reportQueue.length && this.ready && (t = {
				ev_type: "batch",
				list: this.reportQueue
			},
				this.reportQueue = [],
				this._request({
					event: t,
					type: "post"
				}))
		}
		,
		br.prototype._request = function(t) {}
		,
		br);
	function br(t) {
		var e, n = yr.call(this) || this;
		return n.reportQueue = [],
			n.isReady = !0,
			n.batchReportLength = null !== (e = t.maxBatchReportLength) && void 0 !== e ? e : 10,
			n.batchReportWait = null !== (t = t.batchReportWait) && void 0 !== t ? t : 1e3,
			n.batchReportTimeout = null,
			n
	}
	var x = "https://lf3-cdn-tos.bytegoofy.com/goofy/slardar/fe/sdk/plugins"
		, wr = x + "/sentry.3.6.33.cn.js"
		, _r = x + "/behavior.3.6.33.cn.js"
		, Sr = "i.snssdk.com";
	function Er(t) {
		return !!t && Math.random() < Number(t)
	}
	function Mr(e) {
		var t;
		if (null !== (t = window.__SLARDAR__) && void 0 !== t && t.plugins && Ke(null === (n = window.__SLARDAR__) || void 0 === n ? void 0 : n.plugins)) {
			var n = null === (n = window.__SLARDAR__) || void 0 === n ? void 0 : n.plugins
				, r = void 0;
			return n.forEach(function(t) {
				t.version === e.version && t[e.name] && (r = t[e.name])
			}),
				r
		}
	}
	var Pr, xr = (t(Rr, Pr = a),
		Rr.prototype.setEnable = function(t) {
			this.enable || (this.enable = t,
			this.enable && this.updateStatus())
		}
		,
		Rr.prototype.getReportURL = function() {
			return this.reportURL || this.getBatchReportURL()
		}
		,
		Object.defineProperty(Rr.prototype, "contextAgent", {
			get: function() {
				var n = this
					, r = {
					set: function(t, e) {
						return n.options && (n.options.commonParams.context || (n.options.commonParams.context = {}),
							n.options.commonParams.context[t] = e),
							r
					},
					delete: function(t) {
						var e;
						return null !== (e = n.options) && void 0 !== e && e.commonParams.context && "string" != typeof n.options.commonParams.context && Ze(n.options.commonParams.context, t) && delete n.options.commonParams.context[t],
							r
					},
					clear: function() {
						return n.options && (n.options.commonParams.context = {}),
							r
					},
					get: function(t) {
						var e;
						return null === (e = null === (e = null === (e = n.options) || void 0 === e ? void 0 : e.commonParams) || void 0 === e ? void 0 : e.context) || void 0 === e ? void 0 : e[t]
					},
					toObject: function() {
						var t;
						return "string" == typeof (null === (t = n.options) || void 0 === t ? void 0 : t.commonParams.context) ? {} : y({}, null === (t = null === (t = n.options) || void 0 === t ? void 0 : t.commonParams) || void 0 === t ? void 0 : t.context)
					}
				};
				return r
			},
			enumerable: !1,
			configurable: !0
		}),
		Rr.prototype._shouldSend = function(t) {
			if (!(null !== (e = this.options) && void 0 !== e && e.monitors && t && Ge(t) && null !== (n = t.event) && void 0 !== n && n.ev_type))
				return !1;
			var e = this.options.monitors;
			if ("AjaxMonitor" === t.name || "FetchMonitor" === t.name) {
				var n = bn(Un || []);
				if (n && n.test(t.event.ax_url))
					return !1
			}
			return !!e.BaseMonitor.webIDHit || !!e.BaseMonitor.sampleHit && ("PathMonitor" === t.name ? function(t) {
				var e = t.sendParams
					, n = t.pageViewMonitor
					, t = t.baseMonitor;
				if (1 !== t.appTypeSetting.type || e.event.type !== t.appTypeSetting.SPA)
					return !1;
				if (!n)
					return !0;
				if (n.webIDHit)
					return !0;
				return !!n.sampleHit
			}({
				sendParams: t,
				pageViewMonitor: e.PageViewMonitor,
				baseMonitor: e.BaseMonitor
			}) : "PageViewMonitor" === t.name ? function(t) {
				t = t.pageViewMonitor;
				if (!t)
					return !0;
				if (t.webIDHit)
					return !0;
				return !!t.sampleHit
			}({
				pageViewMonitor: e.PageViewMonitor
			}) : "AjaxMonitor" === t.name || "FetchMonitor" === t.name ? function(t) {
				var n = t.sendParams
					, e = t.ajaxMonitor;
				if (!e)
					return !0;
				if (e.webIDHit)
					return !0;
				if (!e.sampleHit)
					return !1;
				t = e.whitelistUrls;
				if (Ke(t) && 0 < t.length) {
					var r = bn(e.whitelistUrls || []);
					return r && r.test(n.event.ax_url) ? !0 : !1
				}
				r = bn(e.ignore || []);
				if (r && r.test(n.event.ax_url))
					return !1;
				r = e.statusCodeSample;
				if (r && Ze(r, n.event.ax_status))
					return Er(r[n.event.ax_status]);
				e = e.requestUrlSample;
				if (e) {
					var o = !1
						, i = !1;
					if (e.forEach(function(t) {
						var e;
						o || null != (e = bn([t.url])) && e.test(n.event.ax_url) && (o = !0,
							i = Er(t.sampleRate))
					}),
						o)
						return i
				}
				return !0
			}({
				sendParams: t,
				ajaxMonitor: e.AjaxMonitor
			}) : "PerformanceMonitor" === t.name ? function(t) {
				t = t.performanceMonitor;
				if (!t)
					return !0;
				if (t.webIDHit)
					return !0;
				return !!t.sampleHit
			}({
				performanceMonitor: e.PerformanceMonitor
			}) : "EmitMonitor" === t.name ? function(t) {
				var e = t.sendParams
					, t = t.flexibleMonitor;
				if (!t)
					return !0;
				if (t.webIDHit)
					return !0;
				if (!t.sampleHit)
					return !1;
				t = t.eventNameHit;
				if (t) {
					e = e.event.flexible_data_list[0].event_name;
					if (t && Ze(t, e))
						return Er(t[e])
				}
				return !0
			}({
				sendParams: t,
				flexibleMonitor: e.FlexibleMonitor
			}) : "StaticErrorMonitor" === t.name ? function(t) {
				var e = t.sendParams
					, t = t.staticErrorMonitor;
				if (!t)
					return !0;
				if (t.webIDHit)
					return !0;
				if (!t.sampleHit)
					return !1;
				t = bn(t.ignore || []);
				return !t || !t.test(e.event.st_src)
			}({
				sendParams: t,
				staticErrorMonitor: e.StaticErrorMonitor
			}) : "HijackMonitor" === t.name ? function(t) {
				t = t.hijackMonitor;
				if (!t)
					return !0;
				if (t.webIDHit)
					return !0;
				return !!t.sampleHit
			}({
				hijackMonitor: e.HijackMonitor
			}) : "JSErrorMonitor" !== t.name || function(t) {
				t = t.jsErrorMonitor;
				if (!t)
					return !0;
				if (t.webIDHit)
					return !0;
				return !!t.sampleHit
			}({
				jsErrorMonitor: e.JSErrorMonitor
			}))
		}
		,
		Rr.prototype._modifyEvent = function(t) {
			if (null === (e = this.options) || void 0 === e || !e.monitors || !t || !Ge(t))
				return {};
			var e = this.options.monitors;
			return "PerformanceMonitor" === t.name ? function(t) {
				var o = t.sendParams
					, t = t.performanceMonitor;
				if (!t)
					return o;
				if (!ln())
					return {};
				{
					var e;
					e = o.event.isAsync ? o.event.load > t.spaSlowSessionTime : (e = window.performance.timing,
					e.loadEventEnd - e.navigationStart > t.slowSessionTime)
				}
				{
					var i;
					o.event.resources && Ke(o.event.resources) && (i = bn(t.geckoUrls || []),
						o.event.resources.forEach(function(t, e) {
							var n, r;
							null !== (n = o.event.resources) && void 0 !== n && n[e] && Ge(null === (n = o.event.resources) || void 0 === n ? void 0 : n[e]) && $e(null === (r = o.event.resources) || void 0 === r ? void 0 : r[e].toJSON) && (o.event.resources[e] = null === (r = o.event.resources) || void 0 === r ? void 0 : r[e].toJSON(),
								o.event.resources[e].is_gecko = i && i.test(t.name || "") ? "1" : "0")
						}))
				}
				t.webIDHitStaticResource || t.sampleHitStaticResource ? o.event.upload_reason = "sample" : e ? o.event.upload_reason = "slow_session" : (delete o.event.resources,
					o.event.has_resource = 0);
				return o
			}({
				sendParams: t,
				performanceMonitor: e.PerformanceMonitor
			}) : "PathMonitor" === t.name ? function(t) {
				var e = t.sendParams
					, n = t.baseMonitor
					, t = t.effect;
				1 === n.appTypeSetting.type && n.appTypeSetting.SPA === e.event.type && (t({
					commonParams: {
						pid: e.event.path
					}
				}),
					delete e.event.type,
					delete e.event.path);
				return {}
			}({
				sendParams: t,
				baseMonitor: e.BaseMonitor,
				effect: this.updateConfig
			}) : t
		}
		,
		Rr.prototype.buildParams = function(t) {
			var e = t.event || {}
				, n = t.overrides || {}
				, r = n.context
				, o = d(n, ["context"])
				, t = y({}, null !== (n = null === (t = this.options) || void 0 === t ? void 0 : t.commonParams) && void 0 !== n ? n : {});
			Ge(r) && (r = y(y({}, null !== (n = Ge(t.context) && t.context) && void 0 !== n ? n : {}), r || {}),
				t.context = r);
			t = y(y(y({}, e), t || {}), o),
				t = this.normalizeEvent(t);
			return t = null !== (o = this.options) && void 0 !== o && o.custom && $e(this.options.custom.beforeSend) ? this.options.custom.beforeSend(t || {}) : t
		}
		,
		Rr.prototype._request = function(t) {
			var e, n;
			t && t.event && (e = t.type,
				n = t.event,
			(t = window.automation_test_info) && (n.automation_test_info = t),
				"beacon" === (null === (t = this.options) || void 0 === t ? void 0 : t.commonParams.report_type) && navigator && navigator.sendBeacon ? (t = JSON.stringify(n),
					navigator.sendBeacon(this.getReportURL(), t)) : this.transport && ("get" !== e ? "post" === e && this.transport.postEvent(n) : this.transport.getEvent(n)))
		}
		,
		Rr.prototype.chechIsReady = function() {
			return 2 === this.clientStatus
		}
		,
		Rr.prototype.updateStatus = function() {
			var e = this;
			switch (this.clientStatus) {
				case 0:
					this.clientStatus = 1;
					break;
				case 1:
					if (this.clientStatus = 2,
						!this.preQueue.length)
						return;
					this.preQueue.forEach(function(t) {
						Pr.prototype.sendEvent.call(e, t)
					}),
						this.preQueue = []
			}
		}
		,
		Rr.prototype.getBatchReportURL = function() {
			var t;
			return "https://" + (null === (t = this.options) || void 0 === t ? void 0 : t.commonParams.report_domain) + "/log/sentry/v2/api/slardar/batch/"
		}
		,
		Rr.prototype.normalizeOptions = function(t) {
			var e;
			return nn({}, null !== (e = this.options) && void 0 !== e ? e : {}, t)
		}
		,
		Rr.prototype.normalizeEvent = function(t) {
			var e = y(y({}, t), {
				url: window.location.href,
				client_time: Date.now()
			});
			return Ge(t.context) && (e.context = JSON.stringify(t.context)),
			e || {}
		}
		,
		Rr);
	function Rr(t) {
		var r = Pr.call(this, null != t ? t : {
			reportURL: ""
		}) || this;
		return r.setTransport = function() {
			r.transport || (r.transport = new En({
				reportURL: r.getReportURL()
			}),
				r.updateStatus())
		}
			,
			r.setOnOptionsUpdate = function(t) {
				r.onOptionsUpdate = t
			}
			,
			r.uploadQueue = function() {
				r._uploadQueue()
			}
			,
			r.updateConfig = function(t) {
				var e, n = null === (n = null === (n = r.options) || void 0 === n ? void 0 : n.commonParams) || void 0 === n ? void 0 : n.pid;
				r.options = r.normalizeOptions(t),
				n && null !== (e = null == t ? void 0 : t.commonParams) && void 0 !== e && e.pid && t.commonParams.pid !== n && r.sendPageview(),
				r.onOptionsUpdate && r.onOptionsUpdate(r.options)
			}
			,
			r.sendPageview = function() {
				$e(r.sendEvent) && r.sendEvent({
					name: "PageViewMonitor",
					type: "get",
					event: {
						ev_type: "pageview"
					}
				})
			}
			,
			r.sendEvent = function(t) {
				r.chechIsReady() ? Pr.prototype.sendEvent.call(r, t) : r.preQueue.push(t)
			}
			,
			r.buildSendParams = function(t) {
				return r.buildParams(t)
			}
			,
			r.reportURL = null !== (t = null == t ? void 0 : t.reportURL) && void 0 !== t ? t : "",
			r.preQueue = [],
			r.clientStatus = 0,
			r.enable = !1,
			r
	}
	var Cr = function() {
		var t = "";
		return t = null !== document && void 0 !== document && document.cookie ? function(t, e) {
			var n, r;
			if (!t || !e)
				return "";
			var t = t.split(";")
				, o = {};
			try {
				for (var i = l(t), a = i.next(); !a.done; a = i.next()) {
					var s = a.value.split("=")
						, c = Ye(s[0]) && s[0].trim();
					c && Ye(s[1]) && (o[c] = s[1].trim())
				}
			} catch (t) {
				n = {
					error: t
				}
			} finally {
				try {
					a && !a.done && (r = i.return) && r.call(i)
				} finally {
					if (n)
						throw n.error
				}
			}
			return o[e] || ""
		}(document.cookie, Bn) : t
	};
	function jr(t) {
		return nn({}, {
			commonParams: {
				version: "",
				hostname: window.location.hostname,
				protocol: window.location.protocol.slice(0, -1),
				url: window.location.href,
				slardar_session_id: qn,
				sample_rate: Tn,
				pid: location.pathname,
				report_domain: Sr,
				screen_resolution: wn(),
				network_type: _n(),
				bid: "",
				context: {},
				slardar_web_id: Cr() || Jn,
				report_type: "xhr",
				performanceAuto: !0,
				reportURLSingle: "",
				region: "cn",
				env: "production",
				refreshPrecollectedContext: !1,
				maxBatchReportLength: 10,
				batchReportWait: 1e3
			},
			flags: {
				hookPath: !0,
				hookXHR: !0,
				hookFetch: !0,
				enableSizeStats: !0,
				enableFMP: !0,
				enablePerformance: !0,
				enableResourcePerformance: !0,
				enableStaticError: !0,
				enableCatchJSError: !0,
				enableCatchGlobalJSError: !0,
				enableCatchJSErrorV2: !1,
				enableCrash: !1,
				enableMemoryRecord: !1,
				enableFPSJankTimesMonitor: !1,
				enableBreadcrumb: !0,
				catchUnhandledRejection: !0,
				catchUnhandledRejectionV2: !0,
				hookConsole: !1,
				hookDom: !0
			},
			monitors: {
				BaseMonitor: {
					appTypeSetting: {
						type: 0,
						SPA: "",
						renderType: 0
					},
					webIDHit: !1,
					sampleHit: Sn(1)
				},
				PageViewMonitor: {
					webIDHit: !1,
					sampleHit: Sn(1)
				},
				JSErrorMonitor: {
					webIDHit: !1,
					sampleHit: Sn(1),
					webIDHitBehavior: !1,
					sampleHitBehavior: !1,
					ignoreErrors: [],
					whitelistUrls: [],
					blacklistUrls: [],
					download_link: ""
				},
				AjaxMonitor: {
					webIDHit: !1,
					sampleHit: Sn(1),
					sampleHitTrace: !1,
					ignore: Un,
					abort: !1,
					whitelistUrls: [],
					statusCodeSample: {},
					requestUrlSample: [],
					errorRequestCollect: !1
				},
				PerformanceMonitor: {
					webIDHit: !1,
					sampleHit: Sn(1),
					webIDHitStaticResource: !1,
					sampleHitStaticResource: Sn(kn),
					slowSessionTime: Dn,
					spaSlowSessionTime: In,
					geckoUrls: [],
					interval: 0,
					checkPoint: []
				},
				FlexibleMonitor: {
					webIDHit: !1,
					sampleHit: Sn(1),
					eventNameHit: {},
					eventNameSampleHit: Sn(1)
				},
				StaticErrorMonitor: {
					webIDHit: !1,
					sampleHit: Sn(1),
					ignore: Un
				},
				HijackMonitor: {
					webIDHit: !1,
					sampleHit: Sn(An)
				},
				FMPMonitor: {}
			},
			plugins: {
				render: {
					enable: 0
				},
				spa: {
					enable: 0,
					type: ""
				},
				behavior: {
					enable: 0,
					slardar_web_ids: [],
					sample_rate: 0,
					download_link: _r
				},
				sentry: {
					enable: 0,
					behavior_enable: 0,
					behavior_sample_rate: 0,
					behavior_slardar_web_ids: [],
					download_link: wr
				}
			},
			custom: {
				beforeSend: function(t) {
					return t
				}
			},
			heatmap: {
				openList: []
			}
		}, t)
	}
	function Or(t, e) {
		var n = !1;
		return t && t.forEach(function(t) {
			n || !t.condition.is_default && "slardar_web_id" === t.condition.field && sn(t.condition.values, e.web_id) && (n = !0)
		}),
			n
	}
	function Hr(t) {
		var e = !1;
		return !t || (t.forEach(function(t) {
			t.condition.field && e || (e = Er(Number(t.value)))
		}),
			e)
	}
	function Lr(t) {
		var e = [];
		if (t)
			try {
				e = JSON.parse(t)
			} catch (t) {
				e = []
			}
		return e
	}
	function Tr(t) {
		var e = [];
		return t.forEach(function(t) {
			t.value && (t = Lr(t.value),
				e.push.apply(e, h([], b(t))))
		}),
			e
	}
	function kr(t, n) {
		var r = {}
			, o = [];
		return t.forEach(function(e) {
			e.condition.field === n && e.condition.values && e.condition.values.forEach(function(t) {
				Ze(r, t) || (r[t] = Number(e.value) || 0,
					o.push({
						url: t,
						sampleRate: r[t]
					}))
			})
		}),
			{
				flatten: r,
				list: o
			}
	}
	function Ar(n) {
		var t, r = nn({}, null !== (t = (n = void 0 === n ? {} : n).commonParams) && void 0 !== t ? t : {});
		if (!Ge(n))
			return r;
		var o = ["bid", "context", "pid", "slardar_web_id", "slardar_session_id", "performanceAuto", "report_type", "region", "env", "refreshPrecollectedContext", "maxBatchReportLength", "batchReportWait"];
		return tn(n, function(t, e) {
			sn(o, t) && ("report_domain" === t && "mon-va.byteoversea.com" === e ? r.region = "maliva" : r[t] = e)
		}),
			tn({
				cookieid: "slardar_web_id",
				sampleRate: "sample_rate",
				reportDomain: "report_domain",
				domain: "report_domain",
				sample_rate: "sample_rate",
				slardar_web_id: "slardar_web_id"
			}, function(t, e) {
				Ze(n, t) && (r[e] = n[t])
			}),
		r.slardar_web_id && (r.slardar_web_id = r.slardar_web_id.toString()),
			r
	}
	function Ur(t, e) {
		var n, r, o, i = {
			PageViewMonitor: {},
			JSErrorMonitor: {},
			AjaxMonitor: {},
			PerformanceMonitor: {},
			FlexibleMonitor: {},
			StaticErrorMonitor: {},
			HijackMonitor: {},
			BaseMonitor: {}
		}, a = null !== (n = t.setting) && void 0 !== n ? n : {};
		null !== (n = null === (n = a.page_view) || void 0 === n ? void 0 : n.enable_rate) && void 0 !== n && n.length && (i.PageViewMonitor.webIDHit = Or(a.page_view.enable_rate, e),
			i.PageViewMonitor.sampleHit = Hr(a.page_view.enable_rate)),
		a.jserr && (null !== (r = a.jserr.enable_rate) && void 0 !== r && r.length && (i.JSErrorMonitor.webIDHit = Or(a.jserr.enable_rate, e),
			i.JSErrorMonitor.sampleHit = Hr(a.jserr.enable_rate)),
		a.jserr.ignore_errors && (i.JSErrorMonitor.ignoreErrors = Tr(a.jserr.ignore_errors)),
		a.jserr.blacklist_urls && (i.JSErrorMonitor.blacklistUrls = Tr(a.jserr.blacklist_urls)),
		a.jserr.whitelist_urls && (i.JSErrorMonitor.whitelistUrls = Tr(a.jserr.whitelist_urls))),
		a.ajax && (a.ajax.enable_rate && (i.AjaxMonitor.webIDHit = Or(a.ajax.enable_rate, e),
			i.AjaxMonitor.sampleHit = Hr(a.ajax.enable_rate)),
		a.ajax.request_sample_rate && (i.AjaxMonitor.statusCodeSample = kr(a.ajax.request_sample_rate, "status_code").flatten,
			i.AjaxMonitor.requestUrlSample = kr(a.ajax.request_sample_rate, "request_url").list),
		a.ajax.trace_rate && (i.AjaxMonitor.sampleHitTrace = Hr(a.ajax.trace_rate)),
		a.ajax.enable_request_param_collect_on_error && (i.AjaxMonitor.errorRequestCollect = function(t, e) {
			var n, r;
			void 0 === e && (e = !1);
			try {
				for (var o = l(t), i = o.next(); !i.done; i = o.next()) {
					var a = i.value;
					if (a.value)
						return "true" === a.value
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
			return e
		}(a.ajax.enable_request_param_collect_on_error))),
		null !== (r = a.static_resource) && void 0 !== r && r.enable_rate && (i.PerformanceMonitor.webIDHitStaticResource = Or(a.static_resource.enable_rate, e),
			i.PerformanceMonitor.sampleHitStaticResource = Hr(a.static_resource.enable_rate)),
		null !== (r = a.performance) && void 0 !== r && r.enable_rate && (i.PerformanceMonitor.webIDHit = Or(a.performance.enable_rate, e),
			i.PerformanceMonitor.sampleHit = Hr(a.performance.enable_rate)),
		a.flexible && (a.flexible.enable_rate && (i.FlexibleMonitor.webIDHit = Or(a.flexible.enable_rate, e),
			i.FlexibleMonitor.sampleHit = Hr(a.flexible.enable_rate)),
		a.flexible.event_name_sample_rate && (i.FlexibleMonitor.eventNameHit = kr(a.flexible.event_name_sample_rate, "event_name").flatten,
			i.FlexibleMonitor.eventNameSampleHit = Hr(a.flexible.event_name_sample_rate))),
		null !== (r = a.static_err) && void 0 !== r && r.enable_rate && (i.StaticErrorMonitor.webIDHit = Or(a.static_err.enable_rate, e),
			i.StaticErrorMonitor.sampleHit = Hr(a.static_err.enable_rate)),
		!a.general || (a = a.general.app_type_setting) && (a = {
			type: Number(a.app_type[0].value),
			SPA: a.app_type_spa[0].value,
			renderType: Dr({
				renderRules: (a = a.app_render_type,
					o = [],
					a.forEach(function(t) {
						"pid" === t.condition.field.toLowerCase() && "like" === t.condition.op.toLowerCase() && t.value ? o.push({
							pids: Lr(t.value),
							value: parseInt(t.value, 10),
							isDefault: !1
						}) : t.condition.is_default && o.push({
							pids: [],
							value: parseInt(t.value, 10),
							isDefault: !0
						})
					}),
					o),
				pid: e.pid
			})
		},
			i.BaseMonitor.appTypeSetting = a);
		t = t.whitelist;
		return Ke(t) && t.forEach(function(t) {
			e.web_id === t && (i.BaseMonitor.webIDHit = !0,
				i.AjaxMonitor.sampleHitTrace = !0)
		}),
			i
	}
	function Dr(t) {
		var e = t.renderRules
			, n = t.pid;
		if (!e || !n)
			return 0;
		for (var r = 0; r < e.length; r++) {
			var o = e[r];
			if (Ke(o.pids) && 0 < o.pids.length) {
				var i = bn(o.pids);
				if (i && i.test(n))
					return o.value
			}
			if (o.isDefault && r === e.length - 1)
				return o.value
		}
		return 0
	}
	var Ir = (Br.prototype.handleUserConfig = function(t) {
		this.userConfig = en(this.userConfig, t),
		null !== (t = this.userConfig) && void 0 !== t && t.onlyUseLocalSetting && (this.serverSetting = {}),
			this.mergeSettings()
	}
		,
		Br.prototype.setBaseParams = function() {
			this.baseParams.bid = this.shared.config.commonParams.bid || "",
				this.baseParams.pid = this.shared.config.commonParams.pid || ""
		}
		,
		Br.prototype.init = function(t) {
			var e = this;
			this.handleUserConfig(t);
			var n = this.finalConfig;
			this.inited || (this.inited = !0,
				this.client = new xr({
					reportURL: "https://" + (null != (t = n.commonParams.report_domain) ? t : Sr) + "/log/sentry/v2/api/slardar/batch/",
					maxBatchReportLength: n.commonParams.maxBatchReportLength,
					batchReportWait: n.commonParams.batchReportWait
				}),
				this.client.setOnOptionsUpdate(function(t) {
					t && t.commonParams.pid !== e.finalConfig.commonParams.pid && e.handleUserConfig({
						pid: t.commonParams.pid
					})
				}),
			n.commonParams.refreshPrecollectedContext && this.refreshPrecollectedContext(),
				t = this.setMonitors(),
				this.setupMonitors(t),
			this.shared.instance && Ke(this.shared.instance) && this.shared.instance.push(n.commonParams.bid),
				this.getServerSetting(n.commonParams.bid),
				this.onClose())
		}
		,
		Br.prototype.config = function(t) {
			var e, n;
			this.configed = !0,
				this.inited ? (this.handleUserConfig(t),
					n = this.finalConfig,
				null !== (e = this.client) && void 0 !== e && e.updateConfig(n)) : this.init(t),
				this.tryUnlockClient()
		}
		,
		Br.prototype.getServerSetting = function(t) {
			var e, n = this;
			this.serverSetting ? this.handleServerSetting() : (t = "https://" + (null != (e = this.finalConfig.commonParams.report_domain) ? e : Sr) + "/slardar/sdk_setting?bid=" + t,
				En.get(t, {
					success: function(t) {
						try {
							n.serverSetting = t.data || {},
								n.handleServerSetting()
						} catch (t) {
							n.userConfig.sampleRate = .001,
								n.handleServerSetting()
						}
					},
					fail: function() {
						n.userConfig.sampleRate = .001,
							n.handleServerSetting()
					},
					withCredentials: !0
				}))
		}
		,
		Br.prototype.setMonitors = function() {
			var t, e = this, n = [], r = this.finalConfig.flags, o = this.finalConfig.commonParams;
			return r.hookPath && n.push(new dr),
			r.hookXHR && n.push(new mr({
				commonParams: {
					web_id: o.slardar_web_id,
					bid: o.bid
				},
				ajaxMonitorOptions: this.finalConfig.monitors.AjaxMonitor
			})),
			r.hookFetch && n.push(new vr({
				commonParams: {
					web_id: o.slardar_web_id,
					bid: o.bid
				},
				ajaxMonitorOptions: this.finalConfig.monitors.AjaxMonitor
			})),
			r.enableFMP && (t = null === (t = cr()) || void 0 === t ? void 0 : t(this.finalConfig.monitors.FMPMonitor),
				this.shared.FMPMonitor = t),
			null !== (t = this.shared) && void 0 !== t && t.monitors && n.forEach(function(t) {
				e.shared.monitors[t.name] = t
			}),
				n
		}
		,
		Br.prototype.setupMonitors = function(t) {
			var e = this;
			this.client && this.client.sendEvent && t.forEach(function(t) {
				t.setup(null === (t = e.client) || void 0 === t ? void 0 : t.sendEvent)
			})
		}
		,
		Br.prototype.shouldSetClientEnable = function() {
			return "production" === this.finalConfig.commonParams.env
		}
		,
		Br.prototype.tryUnlockClient = function() {
			var t;
			null !== (t = this.client) && void 0 !== t && t.setEnable(this.shouldSetClientEnable() && this.configed && !!this.serverSetting)
		}
		,
		Br.prototype.handleServerSetting = function() {
			var t;
			this.mergeSettings();
			var e = this.finalConfig;
			this.client.updateConfig(e),
				this.client.setTransport(),
				this.tryUnlockClient(),
				this.client.sendPageview(),
				this.shared.transport = this.client.transport,
				this.shared.sendEvent = this.client.sendEvent.bind(this.client),
				this.setCookie(e.commonParams.slardar_web_id),
			null !== (t = this.shared.monitors.FetchMonitor) && void 0 !== t && t.updateConfig({
				commonParams: {
					web_id: e.commonParams.slardar_web_id,
					bid: e.commonParams.bid
				},
				ajaxMonitorOptions: e.monitors.AjaxMonitor
			}),
			null !== (t = this.shared.monitors.AjaxMonitor) && void 0 !== t && t.updateConfig({
				commonParams: {
					web_id: e.commonParams.slardar_web_id,
					bid: e.commonParams.bid
				},
				ajaxMonitorOptions: e.monitors.AjaxMonitor
			}),
				this.loadMonitors(),
			e.flags.enableCatchJSError && this.loadSentry(),
			e.heatmap.openList.length && this.loadHeatmap(),
			-1 < location.search.indexOf("slardar_heatmap_draw") && this.loadHeatmapDraw()
		}
		,
		Br.prototype.loadSentry = function() {
			var e = this;
			Fn(wr, function() {
				var t = Mr({
					name: "SetSentryMonitors",
					version: e.version
				});
				t && ((t = new t({
					catchUnhandledRejection: e.finalConfig.flags.catchUnhandledRejection,
					hookConsole: e.finalConfig.flags.hookConsole,
					hookDom: e.finalConfig.flags.hookDom,
					memoryRecordMonitor: e.shared.monitors.MemoryRecordMonitor,
					collect: e.shared.collect,
					sendEvent: e.client.sendEvent,
					jsErrorOptions: e.shared.config.monitors.JSErrorMonitor
				})).init(),
					e.shared.monitors = y(y({}, e.shared.monitors), t.getInstalledMonitors()))
			})
		}
		,
		Br.prototype.loadMonitors = function() {
			var r = this;
			Fn("https://lf3-cdn-tos.bytegoofy.com/goofy/slardar/fe/sdk/plugins/monitors.3.6.33.cn.js", function() {
				var t, e = Mr({
					name: "SetMonitors",
					version: r.version
				});
				if (e)
					try {
						var n = new e({
							config: r.finalConfig,
							fmpMonitor: r.shared.FMPMonitor,
							report: function() {
								return r.instance("report")
							},
							sendEvent: null === (t = r.client) || void 0 === t ? void 0 : t.sendEvent,
							captureException: function(e) {
								return r.instance("Sentry", function(t) {
									t.captureException(e)
								})
							},
							collect: r.shared.collect
						});
						n.init(),
							r.shared.monitors = y(y({}, r.shared.monitors), n.getInstalledMonitors())
					} catch (t) {
						r.instance("Sentry", function(n) {
							n.captureException(t);
							try {
								n.withScope(function(t) {
									t.setTag("from", "slardar-sdk"),
										n.captureMessage("SLARDAR_ERROR: " + typeof e),
										n.captureMessage("SLARDAR_ERROR: " + e.toString())
								})
							} catch (e) {
								n.withScope(function(t) {
									t.setTag("from", "slardar-sdk"),
										n.captureException(e)
								})
							}
						})
					}
			})
		}
		,
		Br.prototype.loadHeatmap = function() {
			var e = this;
			Fn("https://lf3-cdn-tos.bytegoofy.com/goofy/slardar/fe/sdk/plugins/heatmap.3.6.33.cn.js", function() {
				var t = Mr({
					name: "SetHeatmap",
					version: e.version
				});
				t && ((t = new t({
					config: e.finalConfig,
					report: function() {
						return e.instance("report")
					},
					sendEvent: e.client.sendEvent,
					collect: e.shared.collect,
					pathMonitor: e.shared.monitors.PathMonitor,
					buildSendParams: e.client.buildSendParams,
					reportURL: e.client.getReportURL()
				})).init(),
					e.shared.monitors = y(y({}, e.shared.monitors), t.getInstalledMonitors()))
			})
		}
		,
		Br.prototype.loadHeatmapDraw = function() {
			var e = this;
			Fn("https://lf3-cdn-tos.bytegoofy.com/goofy/slardar/fe/sdk/plugins/heatmap-draw.3.6.33.cn.js", function() {
				var t = Mr({
					name: "SetHeatmapDraw",
					version: e.version
				});
				t && new t({
					config: e.finalConfig,
					pathMonitor: e.shared.monitors.PathMonitor
				}).init()
			})
		}
		,
		Br.prototype.setCookie = function(t) {
			t && (document.cookie = Bn + "=" + t + ";max-age=7776000;domain=" + location.hostname + ";path=/")
		}
		,
		Br.prototype.normalizeSetting = function(t) {
			return {
				commonParams: this.getClientCommonParams(t),
				flags: this.getClientFlags(t),
				plugins: this.getClientPluginsSetting(t),
				monitors: this.getClientMonitorsSetting(t),
				custom: this.getClientCustom(t),
				heatmap: this.getClientHeatmap(t)
			}
		}
		,
		Br.prototype.normalizeServerSetting = function(t) {
			return Ze(t, "setting") ? {
				commonParams: Ar(t),
				monitors: Ur(t, this.getNormoalizeInfo()),
				heatmap: t.heatmap
			} : this.normalizeSetting({
				cookieid: t.cookieid,
				reportDomain: t.reportDomain,
				bid: t.bid,
				plugins: t.plugins,
				heatmap: null !== (t = t.heatmap) && void 0 !== t ? t : {
					openList: []
				}
			})
		}
		,
		Br.prototype.getClientHeatmap = function(t) {
			return null !== (t = t.heatmap) && void 0 !== t ? t : {}
		}
		,
		Br.prototype.mergeSettings = function() {
			var t = this.serverSetting ? this.normalizeServerSetting(this.serverSetting) : {}
				, e = this.normalizeSetting(this.userConfig)
				, t = nn(this.defaultClientConfig, t, e);
			t.commonParams.reportURLSingle = "https://" + (null != (e = t.commonParams.report_domain) ? e : Sr) + "/log/sentry/v2/api/slardar/main/",
				t.commonParams.pid = this.getPid(t),
				this.shared.config = t,
				this.setBaseParams(),
				this.finalConfig = t
		}
		,
		Br.prototype.getPid = function(t) {
			if (t.commonParams.pid)
				return t.commonParams.pid;
			t = t.monitors.BaseMonitor;
			return 1 === t.appTypeSetting.type && "hash" === t.appTypeSetting.SPA ? location.hash.slice(1) || "/" : location.pathname
		}
		,
		Br.prototype.getClientCommonParams = Ar,
		Br.prototype.getClientFlags = function(t) {
			var e, n = nn({}, null !== (e = (t = void 0 === t ? {} : t).flags) && void 0 !== e ? e : {});
			if (!Ge(t))
				return n;
			var r = ["hookPath", "hookXHR", "hookFetch", "enableSizeStats", "enableFMP", "enablePerformance", "enableStaticError", "enableCatchJSError", "enableCatchJSErrorV2", "enableCatchGlobalJSError", "enableResourcePerformance", "enableCrash", "enableMemoryRecord", "enableFPSJankTimesMonitor", "enableBreadcrumb", "catchUnhandledRejection", "catchUnhandledRejectionV2", "hookConsole", "hookDom"];
			return tn(t, function(t, e) {
				sn(r, t) && (n[t] = e)
			}),
				n
		}
		,
		Br.prototype.getClientCustom = function(t) {
			var e = {};
			return t.beforeSend && $e(t.beforeSend) && (e.beforeSend = t.beforeSend),
				e
		}
		,
		Br.prototype.getClientMonitorsSetting = function(t) {
			return function(t) {
				var e = t.setting
					, n = t.info
					, r = nn({
					PageViewMonitor: {},
					JSErrorMonitor: {},
					AjaxMonitor: {},
					PerformanceMonitor: {},
					FlexibleMonitor: {},
					StaticErrorMonitor: {},
					HijackMonitor: {},
					BaseMonitor: {
						appTypeSetting: {}
					},
					FMPMonitor: {}
				}, e.monitors);
				e.ajaxWhitelistUrls && Ke(e.ajaxWhitelistUrls) && (r.AjaxMonitor.whitelistUrls = (r.AjaxMonitor.whitelistUrls || []).concat(e.ajaxWhitelistUrls)),
				e.ignoreAjax && Ke(e.ignoreAjax) && (r.AjaxMonitor.ignore = (r.AjaxMonitor.ignore || []).concat(e.ignoreAjax)),
				Ze(e, "geckoUrls") && (r.PerformanceMonitor.geckoUrls = e.geckoUrls),
				e.ignoreStatic && Ke(e.ignoreStatic) && (r.StaticErrorMonitor.ignore = (r.StaticErrorMonitor.ignore || []).concat(e.ignoreStatic)),
				null !== (o = e.plugins) && void 0 !== o && o.sentry && (r.JSErrorMonitor = y(y({}, r.JSErrorMonitor || {}), e.plugins.sentry)),
				e.errorRelease && (r.JSErrorMonitor.release = e.errorRelease),
				e.ignoreErrors && Ke(e.ignoreErrors) && (r.JSErrorMonitor.ignoreErrors = e.ignoreErrors),
				e.errorBlacklistUrls && Ke(e.errorBlacklistUrls) && (r.JSErrorMonitor.blacklistUrls = e.errorBlacklistUrls),
				e.errorWhitelistUrls && Ke(e.errorWhitelistUrls) && (r.JSErrorMonitor.whitelistUrls = e.errorWhitelistUrls),
				e.fmpIgnoreTags && Ke(e.fmpIgnoreTags) && (r.FMPMonitor.ignoreTags = e.fmpIgnoreTags),
				Ze(e, "sampleRate") && (r.BaseMonitor.sampleHit = Er(e.sampleRate));
				var o, t = e.plugins;
				return t && Ge(t) && (Ze(t, "spa") && ((o = t.spa) && Ze(o, "enable") && (r.BaseMonitor.appTypeSetting.type = Number(o.enable)),
				o && Ze(o, "type") && (r.BaseMonitor.appTypeSetting.SPA = o.type)),
				!t.render || (e = null === (e = e.plugins) || void 0 === e ? void 0 : e.render) && Ge(e) && Ze(e, "enable") && (e = [{
					pids: [],
					value: e.enable,
					isDefault: !0
				}],
					r.BaseMonitor.appTypeSetting.renderType = Dr({
						renderRules: e,
						pid: n.pid
					}))),
					r
			}({
				setting: t,
				info: this.getNormoalizeInfo()
			})
		}
		,
		Br.prototype.getClientPluginsSetting = function(t) {
			return nn({
				sentry: {},
				behavior: {},
				spa: {},
				render: {}
			}, null !== (t = (t = void 0 === (t = t) ? {} : t).plugins) && void 0 !== t ? t : {})
		}
		,
		Br.prototype.getNormoalizeInfo = function() {
			return {
				web_id: this.finalConfig.commonParams.slardar_web_id,
				pid: this.finalConfig.commonParams.pid
			}
		}
		,
		Br.prototype.saveInstance = function() {
			window.__SLARDAR__ || (window.__SLARDAR__ = {}),
			window.__SLARDAR__ && !Ke(window.__SLARDAR__.instances) && (window.__SLARDAR__.instances = []),
			window.__SLARDAR__ && Ke(window.__SLARDAR__.instances) && window.__SLARDAR__.instances.push({
				version: this.version
			})
		}
		,
		Br.prototype.refreshPrecollectedContext = function() {
			var t, n = this;
			tn(null !== (t = this.shared.collect) && void 0 !== t ? t : {}, function(t) {
				var e;
				null !== (e = n.shared.collect) && void 0 !== e && e[t].forEach(function(t) {
					return t.params = {}
				})
			})
		}
		,
		Br);
	function Br() {
		var f = this;
		this.version = "3.6.33",
			this.instance = function() {
				for (var t, e, n, r, o = [], i = 0; i < arguments.length; i++)
					o[i] = arguments[i];
				switch (o[0]) {
					case "init":
						return void f.init(o[1]);
					case "config":
						return void f.config(o[1]);
					case "sendCustomCountLog":
					case "sendCustomTimeLog":
					case "emit":
					case "send":
						return void (f.shared.monitors.EmitMonitor ? (s = f.shared.monitors.EmitMonitor).handOut.apply(s, h([], b(o))) : f.instance("precollect", "emit", o));
					case "precollect":
						var a = f.shared.collect
							, s = f.finalConfig.commonParams.refreshPrecollectedContext ? {} : {
							pid: f.finalConfig.commonParams.pid,
							url: f.finalConfig.commonParams.url,
							context: f.finalConfig.commonParams.context
						};
						if ("sentry" === o[1])
							return void a.sentry.push({
								event: o[2],
								params: s
							});
						if ("exception" === o[1]) {
							var c = o[3] || {}
								, l = c.context
								, c = d(c, ["context"])
								, l = y(y({}, Ge(s.context) && s.context), l);
							return s.context = l,
								void a.exception.push({
									exception: o[2],
									params: y(y({}, s), c)
								})
						}
						if ("error" !== o[1])
							return void ("emit" === o[1] && a.emit.push({
								event: o[2],
								params: s
							}));
						if (!o[2] || !o[2][0])
							return;
						l = o[2][0] || {};
						return "error" === l.type && ((l.error || l.message) && a.jsError.push({
							event: l,
							params: s
						}),
						null !== (c = l.target) && void 0 !== c && c.tagName && a.staticError.push({
							event: l,
							params: s
						})),
							void ("unhandledrejection" === l.type && a.jsError.push({
								event: l,
								params: s
							}));
					case "Sentry":
						var u, p = o[1];
						return void ($e(p) && ((u = null === (u = null === (u = f.shared.monitors) || void 0 === u ? void 0 : u.JSErrorMonitor) || void 0 === u ? void 0 : u.getSentry()) ? p(u) : f.instance("precollect", "sentry", o[1])));
					case "report":
						return void (f.client && f.client.uploadQueue());
					case "performanceSend":
						return void (null !== (p = null === (u = null === (p = f.shared.monitors) || void 0 === p ? void 0 : p.PerformanceMonitor) || void 0 === u ? void 0 : u.send) && void 0 !== p && p.call(u));
					case "performanceInit":
						return void (null !== (n = null === (e = null === (r = f.shared.monitors) || void 0 === r ? void 0 : r.PerformanceMonitor) || void 0 === e ? void 0 : e.initAsync) && void 0 !== n && n.call(e, f.finalConfig.commonParams.pid));
					case "captureException":
						return void (f.shared.monitors.JSExceptionMonitor ? (r = f.shared.monitors.JSExceptionMonitor.buildEvent(o[1]),
							n = r,
							r = null !== (e = o[2]) && void 0 !== e ? e : {},
							e = Ge(n) ? Ge(r) ? y(y({}, n), {
								overrides: r
							}) : n : {},
						null !== (n = null === (r = f.client) || void 0 === r ? void 0 : r.sendEvent) && void 0 !== n && n.call(r, e)) : f.instance("precollect", "exception", o[1], o[2]));
					case "context":
						return void (f.client && null !== (t = o[1]) && void 0 !== t && t.call(o, f.client.contextAgent));
					default:
						return
				}
			}
			,
			this.changeReortType = function(t) {
				f.finalConfig.commonParams.report_type = t,
				null !== (t = f.client) && void 0 !== t && t.updateConfig(f.finalConfig)
			}
			,
			this.onClose = function() {
				var e, n;
				e = f.onCloseReport,
					n = f.visibilityChange,
				$e(e) && ($e(window.addEventListener) && (window.addEventListener("unload", e),
					window.addEventListener("beforeunload", e),
					window.addEventListener("pagehide", e)),
				$e(document.addEventListener) && document.addEventListener("visibilitychange", function(t) {
					$e(n) ? n(t) : "hidden" === document.visibilityState && e(t)
				}))
			}
			,
			this.visibilityChange = function() {
				"hidden" === document.visibilityState && f.onCloseReport(),
				"visible" === document.visibilityState && f.changeReortType("xhr")
			}
			,
			this.onCloseReport = function() {
				var t;
				f.changeReortType("beacon"),
				null !== (t = f.client) && void 0 !== t && t.uploadQueue()
			}
			,
			this.defaultClientConfig = jr({
				commonParams: {
					version: this.version
				}
			}),
			this.finalConfig = jr({
				commonParams: {
					version: this.version
				}
			}),
			this.client = void 0,
			this.userConfig = {},
			this.inited = !1,
			this.configed = !1,
			this.shared = {
				config: this.finalConfig,
				instance: [],
				collect: {
					sentry: [],
					jsError: [],
					staticError: [],
					emit: [],
					exception: []
				},
				monitors: {}
			},
			this.baseParams = {
				bid: this.shared.config.commonParams.bid || "",
				pid: this.shared.config.commonParams.pid || ""
			},
			this.serverSetting = {
				"cookieid": "385c1599-37e8-4541-8a8a-1656952d500a",
				"reportDomain": "i.snssdk.com",
				"bid": "livesaas",
				"plugins": {
					"spa": {
						"enable": 0,
						"type": ""
					},
					"behavior": {
						"enable": 0,
						"slardar_web_ids": [],
						"sample_rate": 0,
						"download_link": "https://lf3-cdn-tos.bytegoofy.com/goofy/slardar/fe/sdk/plugins/behavior.3.6.33.cn.js"
					},
					"sentry": {
						"enable": 1,
						"download_link": "https://lf3-cdn-tos.bytegoofy.com/goofy/slardar/fe/sdk/plugins/sentry.3.6.33.cn.js",
						"behavior_enable": 0,
						"behavior_sample_rate": 0,
						"behavior_slardar_web_ids": []
					},
					"render": {
						"enable": 0
					}
				},
				"last_modify_time": 1616555275,
				"heatmap": {
					"openList": []
				},
				"setting": {
					"general": {
						"app_type_setting": {
							"app_type": [{
								"name": "default",
								"create_by": "system",
								"create_time": 1598969669,
								"update_by": "",
								"update_time": 0,
								"condition": {
									"field": "",
									"op": "",
									"values": [],
									"is_default": true
								},
								"priority": 1,
								"value": "0",
								"setting_type": "int",
								"setting_op": "="
							}],
							"app_type_spa": [{
								"name": "default",
								"create_by": "system",
								"create_time": 1598969669,
								"update_by": "",
								"update_time": 0,
								"condition": {
									"field": "",
									"op": "",
									"values": [],
									"is_default": true
								},
								"priority": 1,
								"value": "",
								"setting_type": "string",
								"setting_op": "="
							}],
							"app_render_type": [{
								"name": "default",
								"create_by": "system",
								"create_time": 1598969669,
								"update_by": "liuhuayang.sh",
								"update_time": 1616555274,
								"condition": {
									"field": "",
									"op": "",
									"values": [],
									"is_default": true
								},
								"priority": 1,
								"value": "2",
								"setting_type": "int",
								"setting_op": "="
							}]
						}
					},
					"page_view": {
						"enable_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1604913393,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}]
					},
					"jserr": {
						"enable_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971621,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}],
						"ignore_errors": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971621,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "[]",
							"setting_type": "string_array",
							"setting_op": "like"
						}],
						"whitelist_urls": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971621,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "[]",
							"setting_type": "string_array",
							"setting_op": "like"
						}],
						"blacklist_urls": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971621,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "[]",
							"setting_type": "string_array",
							"setting_op": "like"
						}],
						"behavior_sample_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971621,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "0",
							"setting_type": "sample",
							"setting_op": "="
						}],
						"download_link": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971621,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "",
							"setting_type": "string",
							"setting_op": "="
						}]
					},
					"ajax": {
						"enable_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971624,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}],
						"request_sample_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971624,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}],
						"trace_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971624,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "0",
							"setting_type": "sample",
							"setting_op": "="
						}],
						"enable_request_param_collect_on_error": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971624,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "false",
							"setting_type": "bool",
							"setting_op": "="
						}]
					},
					"static_resource": {
						"enable_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1598971625,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "0.1",
							"setting_type": "sample",
							"setting_op": "="
						}]
					},
					"performance": {
						"enable_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1599447483,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}]
					},
					"flexible": {
						"enable_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1604913380,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}],
						"event_name_sample_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1604913380,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}]
					},
					"static_err": {
						"enable_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1599447484,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}],
						"error_sample_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1599447484,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}]
					},
					"behavior": {
						"enable_rate": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1625475953,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "1",
							"setting_type": "sample",
							"setting_op": "="
						}],
						"download_link": [{
							"name": "default",
							"create_by": "system",
							"create_time": 1625475953,
							"update_by": "",
							"update_time": 0,
							"condition": {
								"field": "",
								"op": "",
								"values": [],
								"is_default": true
							},
							"priority": 1,
							"value": "",
							"setting_type": "string",
							"setting_op": "="
						}]
					}
				},
				"whitelist": []
			},
			this.saveInstance()
	}
	a = mn;
	cn() && ((a = (qr = new Ir).instance).version = qr.version,
		a.shared = qr.shared,
		a.SlardarBrowser = Ir,
		a._baseParams = qr.baseParams);
	var qr = a;
	null !== (a = null === (a = null === (a = window.Slardar) || void 0 === a ? void 0 : a.shared) || void 0 === a ? void 0 : a.instance) && void 0 !== a && a.length ? qr = window.Slardar : (null !== (a = window.Slardar) && void 0 !== a && a.q && (qr.q = window.Slardar.q),
	null !== (a = window.Slardar) && void 0 !== a && a.globalPreCollectError && (qr.globalPreCollectError = window.Slardar.globalPreCollectError),
	null !== (a = window.Slardar) && void 0 !== a && a.i && (qr.i = window.Slardar.i),
	null !== (a = window.Slardar) && void 0 !== a && a.lt && (qr.lt = window.Slardar.lt),
		window.Slardar = qr);
	var Jr, Fr = qr;
	function Nr() {
		var t = new Ir
			, e = t.instance;
		return e.version = t.version,
			e.shared = t.shared,
			e
	}
	return null !== (qr = window.Slardar) && void 0 !== qr && qr.q && (Ke(Jr = window.Slardar.q) && Jr.forEach(function(t) {
		Fr.apply(void 0, h([], b(t)))
	}),
		delete window.Slardar.q),
	null !== (Jr = window.Slardar) && void 0 !== Jr && Jr.i && (Ke(Jr = window.Slardar.i) && Jr.forEach(function(t) {
		var e, n = Nr();
		t.q && (Ke(e = t.q) && e.forEach(function(t) {
			n.apply(void 0, h([], b(t)))
		}),
			delete t.q),
			t.i = n
	}),
		delete window.Slardar.i),
		window.Slardar = Fr,
		window.Slardar.SlardarBrowser = Ir,
		window.Slardar.createInstance = Nr,
		Fr
}();
