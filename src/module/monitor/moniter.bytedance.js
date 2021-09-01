var monitors = function(t) {
	"use strict";
	var D = function() {
		return (D = Object.assign || function(t) {
				for (var n, e = 1, r = arguments.length; e < r; e++)
					for (var o in n = arguments[e])
						Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
				return t
			}
		).apply(this, arguments)
	};
	function _(t) {
		var n = "function" == typeof Symbol && Symbol.iterator
			, e = n && t[n]
			, r = 0;
		if (e)
			return e.call(t);
		if (t && "number" == typeof t.length)
			return {
				next: function() {
					return {
						value: (t = t && r >= t.length ? void 0 : t) && t[r++],
						done: !t
					}
				}
			};
		throw new TypeError(n ? "Object is not iterable." : "Symbol.iterator is not defined.")
	}
	function H(t, n) {
		var e = "function" == typeof Symbol && t[Symbol.iterator];
		if (!e)
			return t;
		var r, o, i = e.call(t), a = [];
		try {
			for (; (void 0 === n || 0 < n--) && !(r = i.next()).done; )
				a.push(r.value)
		} catch (t) {
			o = {
				error: t
			}
		} finally {
			try {
				r && !r.done && (e = i.return) && e.call(i)
			} finally {
				if (o)
					throw o.error
			}
		}
		return a
	}
	function c(t, n, e) {
		if (e || 2 === arguments.length)
			for (var r, o = 0, i = n.length; o < i; o++)
				!r && o in n || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
		return t.concat(r || n)
	}
	function a(t) {
		return "object" == typeof t && null !== t && !i(t)
	}
	function o(t) {
		return "[object Object]" === Object.prototype.toString.call(t)
	}
	function h(t) {
		return "function" == typeof t
	}
	function s(t) {
		return "[object String]" === Object.prototype.toString.call(t)
	}
	function i(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}
	function u(t) {
		return "number" == typeof t
	}
	function n(t, n) {
		if (a(t))
			for (var e in t)
				r = e,
				Object.prototype.hasOwnProperty.call(t, r) && n.call(null, e, t[e]);
		var r
	}
	function l(t, n) {
		if (i(t) && 0 !== t.length)
			for (var e = 0; e < t.length; ) {
				if (t[e] === n)
					return 1;
				e++
			}
	}
	function r() {
		return a(window) && !!a(window.performance)
	}
	function e() {
		return !(!h(window.requestAnimationFrame) || !h(window.cancelAnimationFrame))
	}
	function f() {
		return !!("setTimeout"in window && h(setTimeout))
	}
	function m(t) {
		var e, t = function(t) {
			if (!a(t))
				return {};
			var e = {};
			return n(t, function(t, n) {
				a(n) || i(n) ? e[t] = JSON.stringify(n) : e[t] = n
			}),
				e
		}(t), t = (e = {},
			n(t, function(t, n) {
				e[encodeURIComponent(t)] = encodeURIComponent(n)
			}),
			e), r = [];
		return n(t, function(t, n) {
			r.push(t + "=" + n)
		}),
			r.join("&")
	}
	function d(t) {
		var n = document.createElement("a");
		n.href = t;
		t = n.pathname || "/";
		return "/" !== t[0] && (t = "/" + t),
			{
				href: n.href,
				protocol: n.protocol.slice(0, -1),
				hostname: n.hostname,
				host: n.host,
				search: n.search,
				pathname: t,
				hash: n.hash
			}
	}
	function g() {}
	function U(t) {
		"complete" !== document.readyState ? window.addEventListener("load", function() {
			setTimeout(function() {
				t()
			}, 0)
		}, !1) : t()
	}
	function B(n, e) {
		h(n) && (h(window.addEventListener) && (window.addEventListener("unload", n),
			window.addEventListener("beforeunload", n),
			window.addEventListener("pagehide", n)),
		h(document.addEventListener) && document.addEventListener("visibilitychange", function(t) {
			h(e) ? e(t) : "hidden" === document.visibilityState && n(t)
		}))
	}
	function v() {
		return (new Date).getTime()
	}
	var p = (y.post = function(t, n, e) {
		var r = e && e.success || g
			, o = e && e.fail || g
			, e = new XMLHttpRequest;
		e.open("POST", t, !0),
			e.setRequestHeader("Content-Type", "application/json"),
			e.send(JSON.stringify(n)),
			e.onload = function() {
				try {
					var t;
					this.responseText ? (t = JSON.parse(this.responseText),
						r(t)) : r({})
				} catch (t) {
					o()
				}
			}
			,
			e.onerror = function() {
				o()
			}
			,
			e.onabort = function() {
				o()
			}
	}
		,
		y.get = function(t, n) {
			var e = n && n.success || g
				, r = n && n.fail || g
				, o = n && n.getResponse || g
				, i = n && n.getResponseText || g
				, a = new XMLHttpRequest;
			n && n.withCredentials && (a.withCredentials = n.withCredentials),
				a.open("GET", t),
				a.send(),
				a.onload = function() {
					o(null == this ? void 0 : this.response),
						i(this.responseText);
					try {
						var t;
						this.responseText ? (t = JSON.parse(this.responseText),
							e(t)) : e({})
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
		y.prototype.getCommonParams = function() {
			return {
				timestamp: Date.now()
			}
		}
		,
		y);
	function y(t) {
		var n = this;
		this.postEvent = function(t) {
			t = D(D({}, t), n.getCommonParams());
			y.post(n.url, t)
		}
			,
			this.getEvent = function(t) {
				t = m(D(D({}, t), n.getCommonParams())),
					t = n.url + "?" + t;
				y.get(t)
			}
			,
			this.getURL = function() {
				return n.url
			}
			,
			this.options = t,
			this.url = this.options.reportURL
	}
	function q(n) {
		return function(t) {
			return n === t
		}
	}
	function Q(t) {
		return t
	}
	function b() {
		return h(Date) ? Math.round(Date.now() / 1e3) : 0
	}
	function w(t, e) {
		if (!a(t))
			return {};
		if (!h(e))
			return {};
		var r = {};
		return n(t, function(t, n) {
			e(n) && (r[t] = n)
		}),
			r
	}
	function S(t) {
		var n, e, r, o, i = null;
		return a(t) ? ("timer" === t.type && (i = a(n = t.event) && s(n.name) && u(n.value) ? {
			metrics_type: "timer",
			event_name: "default",
			metrics: ((e = {})[n.name] = n.value,
				e),
			category: w(n.tags, s),
			timestamp: b()
		} : {}),
		"counter" === t.type && (i = a(o = t.event) && s(o.name) && u(o.value) ? {
			metrics_type: "counter",
			event_name: "default",
			metrics: ((r = {})[o.name] = o.value,
				r),
			category: w(o.tags, s),
			timestamp: b()
		} : {}),
		"log" === t.type && (i = a(r = t.event) && s(r.value) ? {
			metrics_type: "log",
			event_name: "default",
			log_content: r.value,
			log_level: null !== (o = r.level) && void 0 !== o ? o : "info",
			category: w(r.tags, s),
			timestamp: b()
		} : {}),
			"custom" === t.type ? a(t = t.event) && s(t.event_name) ? {
				metrics_type: "custom",
				event_name: t.event_name,
				metrics: w(t.metrics, u),
				category: w(t.tags, s),
				timestamp: b()
			} : {} : i) : i
	}
	function z(r) {
		var o = function() {
			for (var t = [], n = 0; n < arguments.length; n++)
				t[n] = arguments[n];
			var e = r.apply(void 0, c([], H(t)));
			return o.returns = e,
				o.resolved = !0,
			o.subs && o.subs.forEach(function(t) {
				return t()
			}),
				e
		};
		return o.then = G(o).then,
			o
	}
	var G = function() {
		for (var n = [], t = 0; t < arguments.length; t++)
			n[t] = arguments[t];
		function a() {
			return n.every(function(t) {
				return t.resolved
			})
		}
		return Object.defineProperty({
			then: function(e) {
				function r() {
					return t.apply(void 0, c([], H(n.map(function(t) {
						return t.returns
					}))))
				}
				var o, i, t = z(function() {
					for (var t = [], n = 0; n < arguments.length; n++)
						t[n] = arguments[n];
					return i ? o : (i = !0,
						o = e.apply(void 0, c([], H(t))))
				});
				return a() ? setTimeout(r) : n.forEach(function(t) {
					function n() {
						return a() && r()
					}
					t.subs ? t.subs.push(n) : t.subs = [n]
				}),
					G(t)
			}
		}, "resolved", {
			get: a
		})
	};
	function E(t) {
		try {
			for (var n, e = t, r = [], o = 0, i = 0, a = " > ".length; e && o++ < 5 && !("html" === (n = function(t) {
				var n, e, r, o, i = t, a = [];
				if (!i || !i.tagName)
					return "";
				a.push(i.tagName.toLowerCase()),
				i.id && a.push("#" + i.id);
				t = i.className;
				if (t && s(t))
					for (n = t.split(/\s+/),
						     o = 0; o < n.length; o++)
						a.push("." + n[o]);
				var u = ["type", "name", "title", "alt"];
				for (o = 0; o < u.length; o++)
					e = u[o],
					(r = i.getAttribute(e)) && a.push("[" + e + '="' + r + '"]');
				return a.join("")
			}(e)) || 1 < o && 80 <= i + r.length * a + n.length); )
				r.push(n),
					i += n.length,
					e = e.parentNode;
			return r.reverse().join(" > ")
		} catch (t) {
			return "<unknown>"
		}
	}
	function M() {
		try {
			return new Headers,
				new Request(""),
				new Response,
				window.fetch
		} catch (t) {}
	}
	function T() {
		if (a(window))
			return window
	}
	function L() {
		if (a(document))
			return document
	}
	function k() {
		if (T() && a(window.performance))
			return window.performance
	}
	function C() {
		if (T() && h(window.MutationObserver))
			return window.MutationObserver
	}
	function R() {
		if (T() && h(window.PerformanceObserver))
			return window.PerformanceObserver
	}
	function P(i, a, u) {
		return function() {
			for (var t = [], n = 0; n < arguments.length; n++)
				t[n] = arguments[n];
			if (!i)
				return g;
			var e = i[a]
				, r = u.apply(void 0, c([e], H(t)))
				, o = r;
			return h(o) && (o = function() {
					for (var n = [], t = 0; t < arguments.length; t++)
						n[t] = arguments[t];
					try {
						return r.apply(this, n)
					} catch (t) {
						return h(e) && e.apply(this, n)
					}
				}
			),
				i[a] = o,
				function(t) {
					t && o !== i[a] || (i[a] = e)
				}
		}
	}
	function V(t, n, e, r) {
		void 0 === n && (n = {}),
		void 0 === r && (r = []);
		try {
			var o = t.apply(void 0, c([], H(r)));
			return o && o(n, e) || []
		} catch (t) {
			return []
		}
	}
	function x(t, n) {
		var e = t && new t(n);
		return [function(t, n) {
			e && t && e.observe(t, n)
		}
			, function() {
				return e && e.disconnect()
			}
		]
	}
	function A(e, o, n, i) {
		var r = e && new e(function(t, r) {
				t.getEntries ? t.getEntries().forEach(function(t, n, e) {
					return o(t, n, e, r)
				}) : i && i(),
				n && r.disconnect()
			}
		);
		return [function() {
			for (var n = [], t = 0; t < arguments.length; t++)
				n[t] = arguments[t];
			if (!e || !r)
				return i && i();
			try {
				n.forEach(function(t) {
					-1 < e.supportedEntryTypes.indexOf(t) && r.observe({
						type: t,
						buffered: !0
					})
				})
			} catch (t) {
				try {
					r.observe({
						entryTypes: n
					})
				} catch (t) {}
			}
		}
			, function() {
				return r && r.disconnect()
			}
		]
	}
	function W(e) {
		var t = e && e.timing || void 0;
		return [t, function() {
			return e && e.now ? e.now() : (Date.now ? Date.now() : +new Date) - (t && t.navigationStart || 0)
		}
			, function(t) {
				var n = (e || {}).getEntriesByType;
				return h(n) && n.call(e, t) || []
			}
			, function() {
				var t = (e || {}).clearResourceTimings;
				h(t) && t.call(e)
			}
			, function(t) {
				var n = (e || {}).getEntriesByName;
				return h(n) && n.call(e, t) || []
			}
		]
	}
	function X(d, v, p) {
		var t;
		return void 0 === d && (d = L()),
		void 0 === v && (v = C()),
		void 0 === p && (p = null === (t = function() {
			var t = k();
			if (t && a(t.timing))
				return t.timing
		}()) || void 0 === t ? void 0 : t.navigationStart),
			function(t, r) {
				function n() {
					return u.push({
						time: Date.now() - a,
						score: $(d && d.body, 1, !1, s)
					})
				}
				var e, o, i, a = Date.now(), u = [], s = Z.concat(t.ignoreTags || []), c = H((l = !0,
					f = window.requestAnimationFrame,
					t = window.cancelAnimationFrame,
					o = !h(f) || l && document && document.hidden ? function(t) {
							return t(0),
								0
						}
						: f,
					i = h(t) ? t : g,
					[function(t) {
						e && i(e),
							e = o(t)
					}
						, o, i]), 1)[0], l = H(x(v, function() {
					return c(n)
				}), 2), f = l[0], m = l[1], t = function(t) {
					void 0 === t && (t = 0),
						m();
					var n, e, n = (n = (e = H(void 0 === (n = u) ? [] : n))[0],
					(e = e.slice(1)) && e.reduce(function(t, n) {
						var e = H(t, 2)
							, r = e[0]
							, t = e[1]
							, e = n.score - r.score;
						return [n, n.time >= r.time && t.rate < e ? {
							time: n.time,
							rate: e
						} : t]
					}, [n, {
						time: null == n ? void 0 : n.time,
						rate: 0
					}])[1].time || 0), t = {
						name: "FMPMonitor",
						type: "post",
						event: {
							ev_type: "fmp",
							fmp: n ? n + t : 0
						}
					};
					return r && r(t),
						t
				}, l = a - (p || 0);
				return f(d, {
					subtree: !0,
					childList: !0
				}),
					[m, t, t.bind(null, l)]
			}
	}
	function N(n) {
		function e() {
			return window.clearTimeout(a)
		}
		function r(t) {
			t < i || !o || (e(),
				a = window.setTimeout(o, t - n()),
				i = t)
		}
		var o, i = -1 / 0, a = void 0;
		return [function(t, n) {
			o = t,
				r(n)
		}
			, function() {
				e(),
					o = void 0
			}
			, r]
	}
	function I(t, a) {
		var u = ["img", "script", "iframe", "link", "audio", "video", "source"]
			, n = (t = H(x(t, function(t) {
			var n, e;
			try {
				for (var r = _(t), o = r.next(); !o.done; o = r.next()) {
					var i = o.value;
					("childList" === i.type && function t(n, e) {
						var r, o;
						try {
							for (var i = _(n), a = i.next(); !a.done; a = i.next()) {
								var u = a.value;
								if (l(e, u.nodeName.toLowerCase()) || u.children && t(u.children, e))
									return 1
							}
						} catch (t) {
							r = {
								error: t
							}
						} finally {
							try {
								a && !a.done && (o = i.return) && o.call(i)
							} finally {
								if (r)
									throw r.error
							}
						}
					}(i.addedNodes, u) || "attributes" === i.type && l(u, i.target.nodeName.toLowerCase())) && a(i)
				}
			} catch (t) {
				n = {
					error: t
				}
			} finally {
				try {
					o && !o.done && (e = r.return) && e.call(r)
				} finally {
					if (n)
						throw n.error
				}
			}
		}), 2))[0];
		return [function() {
			return n(document, {
				attributes: !0,
				childList: !0,
				subtree: !0,
				attributeFilter: ["href", "src"]
			})
		}
			, t[1]]
	}
	function O(t) {
		var t = (n = t || {}).domContentLoadedEventEnd
			, n = n.navigationStart;
		return t ? t - (void 0 === n ? 0 : n) : null
	}
	function F(e) {
		return function() {
			for (var t = [], n = 0; n < arguments.length; n++)
				t[n] = arguments[n];
			return this._method = t[0],
				e.apply(this, t)
		}
	}
	function j(r, o, i) {
		var a = 0;
		return function() {
			for (var t = [], n = 0; n < arguments.length; n++)
				t[n] = arguments[n];
			if ("GET" !== this._method)
				return r.apply(this, t);
			var e = a += 2;
			return o(e, Date.now()),
				P(this, "onreadystatechange", function(n) {
					return function(t) {
						n && n.call(this, t),
						4 === this.readyState && i(e)
					}
				})(),
				r.apply(this, t)
		}
	}
	function J(i, a, u) {
		var s = 1;
		return function() {
			for (var t, o = [], n = 0; n < arguments.length; n++)
				o[n] = arguments[n];
			return "GET" !== ((null === (t = o[0]) || void 0 === t ? void 0 : t.method) || (null === (t = o[1]) || void 0 === t ? void 0 : t.method) || "GET") ? i.apply(void 0, c([], H(o))) : new Promise(function(n, e) {
					var r = s += 2;
					a(r, Date.now()),
						i.apply(void 0, c([], H(o))).then(function(t) {
							u(r),
								n(t)
						}, function(t) {
							u(r, t),
								e(t)
						})
				}
			)
		}
	}
	function Y(E, L, M, T) {
		return function(t, e, n) {
			var s, c, r, o, i, a, u, l, f = H([s = [], c = [], function(a, u) {
				return function(t) {
					var n = t.startTime
						, e = t.duration
						, r = t.fetchStart
						, o = t.responseEnd
						, i = t.entryType;
					"longtask" === i ? (s.push({
						start: n,
						end: n + e
					}),
					a && a(t)) : "resource" === i && (c.push({
						start: r,
						end: o
					}),
					u && u(t))
				}
			}
			], 3), m = f[0], d = f[1], v = f[2], p = H((r = E,
				o = L,
				p = H([i = {}, function(t, n) {
					return i[t] = n
				}
					, function(t) {
						return delete i[t]
					}
				], 3),
				y = p[0],
				f = p[1],
				p = p[2],
				a = o && P(o.prototype, "open", F)(),
				u = o && P(o.prototype, "send", j)(f, p),
				l = r && P(r, "fetch", J)(f, p),
				[y, function() {
					a && a(!0),
					u && u(!0),
					l && l(!0)
				}
				]), 2), h = p[0], g = p[1], y = H(I(T, function() {
				return e(n() + 5e3)
			}) || [], 2), p = y[0], b = y[1];
			p && p();
			function w() {
				return function(t, n, e) {
					var r, o, i, a;
					if (2 < t.length)
						return e();
					var u = [];
					try {
						for (var s = _(n), c = s.next(); !c.done; c = s.next()) {
							var l = c.value;
							u.push([l.start, 0], [l.end, 1])
						}
					} catch (t) {
						r = {
							error: t
						}
					} finally {
						try {
							c && !c.done && (o = s.return) && o.call(s)
						} finally {
							if (r)
								throw r.error
						}
					}
					try {
						for (var f = _(t), m = f.next(); !m.done; m = f.next()) {
							var d = m.value;
							u.push([d, 0])
						}
					} catch (t) {
						i = {
							error: t
						}
					} finally {
						try {
							m && !m.done && (a = f.return) && a.call(f)
						} finally {
							if (i)
								throw i.error
						}
					}
					u.sort(function(t, n) {
						return t[0] - n[0]
					});
					for (var v = t.length, p = u.length - 1; 0 <= p; p--) {
						var h = H(u[p], 2)
							, g = h[0];
						switch (h[1]) {
							case 0:
								v--;
								break;
							case 1:
								if (2 < ++v)
									return g
						}
					}
					return 0
				}(function(t) {
					for (var n = Object.keys(t), e = [], r = 0; r < n.length; r++) {
						var o = t[n[r]];
						"number" == typeof o && e.push(o)
					}
					return e
				}(h), d, n)
			}
			var y = H(A(M, v(function(t) {
				var n = t.startTime
					, t = t.duration;
				return e(n + t + 5e3)
			}, function() {
				return e(w() + 5e3)
			}), !1, function() {
				return m.notSupport = !0
			}), 2)
				, p = y[0]
				, S = y[1];
			return p("longtask", "resource"),
				t.forEach(v()),
				[m, function() {
					g(),
						S(),
					b && b()
				}
					, w]
		}
	}
	function K(b, w, S, E, L) {
		return void 0 === b && (b = function() {
			if (h(XMLHttpRequest))
				return XMLHttpRequest
		}()),
		void 0 === w && (w = M() && T()),
		void 0 === S && (S = R()),
		void 0 === E && (E = C()),
		void 0 === L && (L = k()),
			function(t, n, e) {
				function r(t) {
					var n = function(t, n, e, r, o) {
						if (r - e < 5e3)
							return null;
						o = 0 === o.length ? t : o[o.length - 1].end;
						return r - o < 5e3 ? null : Math.max(o, n)
					}(((n = f("first-contentful-paint")[0]) ? n.startTime : O(c)) || 0, a || O(c) || 0, g(), l() + (t ? 0 : 5e3), p);
					return t ? n ? (y(),
						void t(Math.round(n))) : v(l() + 1e3) : (y(),
						n)
				}
				var o = t.prePerformanceObserver
					, i = t.isAsync
					, i = void 0 === i ? 0 : i
					, t = t.minValue
					, a = void 0 === t ? null : t
					, t = o || {}
					, o = t.precollect
					, u = void 0 === o ? [] : o
					, s = t.observer
					, t = H(W(L), 5)
					, c = t[0]
					, l = t[1]
					, f = t[4]
					, t = H(N(l), 3)
					, m = t[0]
					, d = t[1]
					, v = t[2]
					, i = H(Y(w, b, S, E)(i ? [] : u, v, l), 3)
					, p = i[0]
					, h = i[1]
					, g = i[2]
					, y = function() {
					d(),
						h(),
					e && e(),
					s && s.disconnect(),
						u.length = 0
				};
				return [function(t) {
					if (p.notSupport)
						return t();
					var n = p[p.length - 1];
					m(function() {
						return r(t)
					}, Math.max(g() + 5e3, n ? n.end : 0))
				}
					, p, v, function() {
						return !p.notSupport && r() || 0
					}
				]
			}
	}
	var Z = ["SCRIPT", "STYLE", "META", "HEAD"]
		, $ = function(t, e, n, r) {
		if (!t || -1 < r.indexOf(t.tagName))
			return 0;
		var o = t.children
			, o = [].slice.call(void 0 === o ? [] : o).reduceRight(function(t, n) {
			return t + $(n, e + 1, 0 < t, r)
		}, 0);
		if (o <= 0 && !n) {
			if (!h(t.getBoundingClientRect))
				return 0;
			n = t.getBoundingClientRect() || {},
				t = n.top,
				n = n.height;
			if (t > window.innerHeight || n <= 0)
				return 0
		}
		return o + 1 + .5 * e
	};
	function tt() {
		return Date.now()
	}
	var nt = (et.prototype.begin = function() {
		this.currentTime = tt(),
			this.beginTime = tt(),
			this.frames = 0
	}
		,
		et.prototype.frame = function() {
			return this.currentTime = tt(),
			this.currentTime - this.beginTime
		}
		,
		et.prototype.end = function() {
			var t;
			return this.frames++,
				this.currentTime = tt(),
			this.currentTime >= this.beginTime + this.duration && (t = this.frames * this.duration / (this.currentTime - this.beginTime),
				this.beginTime = this.currentTime,
				this.frames = 0),
				t
		}
		,
		et);
	function et(t) {
		this.beginTime = tt(),
			this.frames = 0,
			this.duration = null != t ? t : 1e3,
			this.currentTime = tt()
	}
	var rt;
	(qt = rt = rt || {}).once = "once",
		qt.repeat = "repeat",
		qt.frame = "frame";
	var ot = "FPSMonitor"
		, it = (at.prototype.setup = function(t) {
		e() && (this.fpsInstance = new nt(1e3),
			this.callback = t || g,
			this.fpsInstance.begin(),
			this.mode !== rt.repeat ? this.mode !== rt.frame ? this.mode === rt.once && this.animateOnce() : this.animateId = requestAnimationFrame(this.animateFrame.bind(this)) : this.animateRepeat())
	}
		,
		at.prototype.animateRepeat = function() {
			var t;
			e() && (void 0 !== (t = this.fpsInstance.end()) && (this.fpsList.push(t),
				this.sendFps(t)),
				this.animateId = requestAnimationFrame(this.animateRepeat))
		}
		,
		at.prototype.animateOnce = function() {
			if (e()) {
				var t = this.fpsInstance.end();
				if (void 0 !== t)
					return this.fpsList.push(t),
						this.sendFps(t),
						void (this.fpsList.length >= Math.floor(this.onceTime / 1e3) && cancelAnimationFrame(this.animateId));
				this.animateId = requestAnimationFrame(this.animateOnce)
			}
		}
		,
		at.prototype.animateFrame = function() {
			var t;
			!e() || void 0 !== (t = this.fpsInstance.frame()) && (this.sendFrame(t),
				cancelAnimationFrame(this.animateId))
		}
		,
		at.prototype.sendFps = function(t) {
			h(this.callback) && this.callback({
				name: this.name,
				type: "post",
				event: {
					ev_type: "fps",
					fps: t
				}
			})
		}
		,
		at.prototype.sendFrame = function(t) {
			h(this.callback) && this.callback({
				name: this.name,
				type: "post",
				event: {
					ev_type: "frame_duration",
					frame: t
				}
			})
		}
		,
		at.monitorName = ot,
		at);
	function at(t) {
		var n, e = this;
		this.name = ot,
			this.callback = g,
			this.fpsInstance = null,
			this.animateId = 0,
			this.fpsList = [],
			this.mode = "once",
			this.onceTime = 1e3,
			this.getFps = function() {
				return e.fpsList
			}
			,
		t && (this.mode = null !== (n = t.mode) && void 0 !== n ? n : rt.once,
			this.onceTime = null !== (t = t.onceTime) && void 0 !== t ? t : 1e3)
	}
	var ut = "FPSJankTimesMonitor"
		, st = (ct.prototype.setup = function(t) {
		void 0 === t && (t = g),
		f() && (this.callback = t,
			this.start())
	}
		,
		ct.prototype.getHistoryFrameList = function() {
			return this.historyFrameList
		}
		,
		ct.prototype.start = function() {
			this.fpsMonitor.setup(this.getFrameList.bind(this))
		}
		,
		ct.prototype.getFrameList = function(t) {
			var n = this
				, e = t.event.frame
				, r = this.frameList.length
				, o = {
				frame: e,
				isJank: 100 < e,
				timestamp: v()
			};
			this.historyFrameList.push(o),
			this.historyFrameList.length > (this.options.maxFrameListCount || 30) && this.historyFrameList.shift();
			var i = this.frameList[r - 1] || {}
				, t = o.isJank && !i.isJank
				, e = !o.isJank && i.isJank
				, r = o.isJank && i.isJank
				, i = !o.isJank && !i.isJank;
			t || e || r ? this.frameList.push(o) : i && (this.frameList = [o]),
			e && (this.report(),
				this.frameList = [o]),
				this.timerId = window.setTimeout(function() {
					n.start()
				}, 100)
		}
		,
		ct.prototype.shouldReport = function(t) {
			for (var n = 0, e = 0; e < t.length; e++) {
				var r = t[e];
				if (200 < r.frame)
					return !0;
				if (r.isJank && n++,
				3 <= n)
					return !0
			}
			return !1
		}
		,
		ct.prototype.report = function() {
			var t;
			this.shouldReport(this.frameList) && (t = {
				name: this.name,
				type: "post",
				event: {
					ev_type: "fps_jank_times",
					list: this.frameList,
					breadcrumbs: null !== (t = null === (t = this.breadcrumbMonitor) || void 0 === t ? void 0 : t.getBreadcrumbs()) && void 0 !== t ? t : [],
					memory: null !== (t = null === (t = this.memoryRecordMonitor) || void 0 === t ? void 0 : t.getMemoryQueue()) && void 0 !== t ? t : []
				}
			},
				this.callback(t))
		}
		,
		ct.monitorName = ut,
		ct);
	function ct(t) {
		var e = this;
		this.name = ut,
			this.historyFrameList = [],
			this.callback = g,
			this.onLeave = function() {
				var t, n;
				f() && (1 < e.frameList.length && (e.report(),
				null !== (n = (t = e.options).report) && void 0 !== n && n.call(t)),
					e.frameList = [],
					window.clearTimeout(e.timerId))
			}
			,
			this.onShow = function() {
				f() && (e.historyFrameList = [],
					e.frameList = [],
					e.start())
			}
			,
			this.visibilityChange = function() {
				"hidden" === document.visibilityState && e.onLeave(),
				"visible" === document.visibilityState && e.onShow()
			}
			,
		t.breadcrumbMonitor && (this.breadcrumbMonitor = t.breadcrumbMonitor),
		t.memoryRecordMonitor && (this.memoryRecordMonitor = t.memoryRecordMonitor),
			this.options = null != t ? t : {},
			this.fpsMonitor = new it({
				mode: "frame"
			}),
			this.frameList = [],
			this.timerId = 0,
			B(this.onLeave, this.visibilityChange)
	}
	function lt(n, o) {
		return void 0 === n && (n = R()),
		void 0 === o && (o = k()),
			function(t, e) {
				var r = H(W(o), 3)[2];
				return (0,
					H(A(n, function(t) {
						var n = t.processingStart
							, t = t.startTime;
						return e && e({
							name: "FIDMonitor",
							fid: Math.round(n - t)
						})
					}, !0), 1)[0])(yt),
					[function() {
						var t = r(yt)[0] || {}
							, n = t.processingStart
							, t = t.startTime;
						return t ? Math.round(n - t) : 0
					}
					]
			}
	}
	function ft(u) {
		return void 0 === u && (u = R()),
			function(t, n) {
				var e = t.prePerformanceObserver
					, r = 0;
				(e.precollect || []).forEach(function(t) {
					var n = t.entryType
						, t = t.startTime;
					n === bt && (r = t)
				});
				var t = H(A(u, function(t) {
					t = t.startTime;
					r = t
				}), 2)
					, e = t[0]
					, o = t[1];
				e(bt);
				function i() {
					o(),
						wt.forEach(function(t) {
							window.removeEventListener(t, a, !0)
						})
				}
				var a = function() {
					n && n({
						name: "LCPMonitor",
						lcp: r
					}),
						i()
				};
				wt.forEach(function(t) {
					window.addEventListener(t, a, !0)
				}),
					B(i);
				return [function() {
					return {
						lcp: r
					}
				}
				]
			}
	}
	function mt(a) {
		return void 0 === a && (a = R()),
			function(t) {
				var n = []
					, e = t.isAsync
					, r = t.prePerformanceObserver
					, o = H(A(a, function(t) {
					return n.push(t)
				}), 2)
					, t = o[0]
					, i = o[1];
				return !e && r && (r.precollect || []).forEach(function(t) {
					"longtask" === t.entryType && n.push(t)
				}),
					t("longtask"),
					[function() {
						i();
						var t = n.reduce(function(t, n) {
							n = n.duration;
							return t < n ? n : t
						}, 0);
						return {
							name: "MPFIDMonitor",
							mpfid: Math.round(t)
						}
					}
					]
			}
	}
	function dt(n, t) {
		return (t = t.filter(function(t) {
			return t.name === n
		})[0]) ? Math.round(t.startTime) : 0
	}
	function vt(o, u) {
		return void 0 === o && (o = R()),
		void 0 === u && (u = k()),
			function(t, i) {
				function n() {
					var t = e("paint");
					return {
						fp: dt(Et, t),
						fcp: dt(St, t)
					}
				}
				var a = {}
					, e = H(W(u), 3)[2]
					, r = n();
				return r.fcp && r.fp ? i && i(r) : (0,
					H(A(o, function(t, n, e, r) {
						var o = t.name
							, t = t.startTime;
						a[o] = Math.round(t),
						a[Et] && a[St] && (i && i({
							fp: a[Et],
							fcp: a[St]
						}),
							r.disconnect())
					}, !1, function() {
						return i && i(n())
					}), 1)[0])("paint"),
					[n]
			}
	}
	function pt(t, n) {
		var e = [];
		if (t.forEach(function(t) {
			h(n) && n(t) || e.push(t)
		}),
			e.length)
			return {
				name: "ResourcePerformanceMonitor",
				type: "post",
				event: {
					ev_type: "resource_performance",
					resources: e
				}
			}
	}
	function ht(s, c) {
		return void 0 === s && (s = k()),
		void 0 === c && (c = R()),
			function(t, n) {
				function r(t) {
					(t = pt(t, a)) && n && n(t)
				}
				function e() {
					return u("resource")
				}
				var o = (t = void 0 === t ? {} : t).isAsync
					, i = void 0 === o ? 0 : o
					, o = t.observe
					, o = void 0 !== o && o
					, a = t.checkIgnore
					, t = H(W(s), 4)
					, u = t[2]
					, t = t[3];
				return i && t(),
				o && (r(e()),
					(0,
						H(A(c, function(t, n, e) {
							return 0 === n && r(e)
						}), 1)[0])("resource")),
					[function() {
						return pt(e())
					}
					]
			}
	}
	function gt(t) {
		var n = D({}, t);
		return [function(t) {
			t = (n = t ? D(D({}, n), t) : n).fmp;
			n.fmp = t ? Math.max(Math.round(t), n.fcp || 0) : void 0
		}
			, function() {
				return {
					name: Mt,
					type: "post",
					event: n
				}
			}
			, function(t) {
				return n = D({}, t)
			}
		]
	}
	var yt = "first-input"
		, bt = "largest-contentful-paint"
		, wt = ["keydown", "click"]
		, St = "first-contentful-paint"
		, Et = "first-paint"
		, Lt = {
		ev_type: "perf",
		isAsync: 0,
		dns: 0,
		tcp: 0,
		request: 0,
		response: 0,
		processing: 0,
		blank: 0,
		domready: 0,
		load: 0,
		has_resource: 0,
		domparse: 0,
		resource: 0,
		ttfb: 0,
		redirect: 0,
		tti: 0,
		upload_reason: "sample",
		network_type: "",
		timing: {},
		navigation_timing: {},
		navigation: {},
		resources: []
	}
		, Mt = "PerformanceMonitor"
		, Tt = "StaticErrorMonitor";
	function _t(t) {
		return t = "link" === (n = t).tagName.toLowerCase() ? "href" : "src",
			h(n.getAttribute) ? n.getAttribute(t) || "" : n[t] || "";
		var n
	}
	function kt(t, n, e) {
		n = n || window.event || {};
		try {
			r = n.target || n.srcElement || {}
		} catch (t) {
			return
		}
		if (s(n = r.tagName)) {
			var r = _t(r);
			if (r && r !== e)
				return {
					name: Tt,
					type: "get",
					event: Ct(r, n.toLowerCase(), t)
				}
		}
	}
	var Ct = function(t, n, e) {
		var r = d(t)
			, t = {
			ev_type: "static",
			st_type: n,
			st_src: t,
			st_protocol: r.protocol,
			st_domain: r.hostname,
			st_path: r.pathname
		}
			, e = e && function(t, n) {
			var e = n.length;
			if (e)
				for (var r = e - 1; -1 < r; r--) {
					var o = n[r];
					if (o.name === t)
						return o
				}
		}(r.href, e);
		return e && (t.timing = e),
			t
	}
		, Rt = "StaticSRIErrorMonitor";
	function Pt(i, n, a, e) {
		return function(o) {
			var t;
			h(a.all) && a.all([e(o, {
				cache: "force-cache"
			}).then(function(t) {
				return t.ok ? t : new Response
			}), (t = o + "?vt=" + Date.now(),
				e(t, {
					cache: "no-store"
				}).then(function(t) {
					return t.ok ? t : new Response
				}))]).then(function(t) {
				var t = H(t, 2)
					, e = t[0]
					, r = t[1];
				if (200 === e.status && 200 === r.status)
					return a.all([e.text(), r.text()]).then(function(t) {
						var n = t[0] || e.status + "," + r.status;
						return [n.length, t[1].length, n, o]
					})
			}).then(function(t) {
				var n, e, r;
				t && i && (e = (n = H(t, 3))[0],
					r = n[1],
				n[2] && e !== r && i({
					name: Rt,
					type: "get",
					event: function(t, n, e, r) {
						return {
							ev_type: "static_sri",
							sri: {
								error_file_size: t,
								real_file_size: n,
								error_file_context: e,
								static_file_src: r,
								static_file_url: d(r).href || ""
							}
						}
					}
						.apply(void 0, c([], H(t)))
				}))
			}).catch(function(t) {
				n && n(t)
			})
		}
	}
	function xt(r, o) {
		return function(t) {
			var n, e = t || o.event || {};
			try {
				n = e.target || e.srcElement || {}
			} catch (e) {
				return
			}
			(h((t = n).getAttribute) ? t.getAttribute("integrity") : t.integrity) && (t = h((t = n).getAttribute) ? t.getAttribute("src") : t.src || t.href || "",
				n = (null === (n = n.tagName) || void 0 === n ? void 0 : n.toLowerCase()) || "",
			t && n && t !== location.href && r(t))
		}
	}
	var At = "MemoryRecordMonitor"
		, Nt = (It.prototype.reportInternal = function() {
		var t = window.performance.memory;
		this.add({
			jsHeapSizeLimit: t.jsHeapSizeLimit,
			totalJSHeapSize: t.totalJSHeapSize,
			usedJSHeapSize: t.usedJSHeapSize,
			timestamp: v()
		})
	}
		,
		It.prototype.start = function() {
			this.reportInternal()
		}
		,
		It.prototype.add = function(t) {
			this.memoryQueue.length >= this.maxQueue && this.memoryQueue.shift(),
				this.memoryQueue.push(t),
			this.emit && this.emit()
		}
		,
		It.monitorName = At,
		It);
	function It(t) {
		var n, e = this;
		this.name = At,
			this.emit = null,
			this.timeInstance = null,
			this.isUnavailable = function() {
				return !(r() && window.performance.memory && f())
			}
			,
			this.setup = function() {
				e.isUnavailable() || (e.timeInstance = window.setInterval(function() {
					e.start()
				}, e.timeout))
			}
			,
			this.report = function() {
				return e.memoryQueue.map(function(t) {
					return D({}, t)
				})
			}
			,
			this.getMemoryQueue = function() {
				return e.memoryQueue
			}
			,
			this.onLeave = function() {
				e.isUnavailable() || (e.timeInstance && (window.clearInterval(e.timeInstance),
					e.timeInstance = null),
					e.memoryQueue = [])
			}
			,
			this.onShow = function() {
				e.isUnavailable() || (e.memoryQueue = [],
					e.timeInstance = window.setInterval(function() {
						e.start()
					}, e.timeout))
			}
			,
			this.visibilityChange = function() {
				"hidden" === document.visibilityState && e.onLeave(),
				"visible" === document.visibilityState && e.onShow()
			}
			,
			this.timeout = null !== (n = null == t ? void 0 : t.interval) && void 0 !== n ? n : 1e3,
			this.maxQueue = null !== (t = null == t ? void 0 : t.maxQueue) && void 0 !== t ? t : 10,
			this.memoryQueue = [],
			B(this.onLeave, this.visibilityChange)
	}
	var Ot = "EmitMonitor"
		, Ft = (jt.prototype.setup = function(t) {
		this.callback = t || g
	}
		,
		jt.prototype.buildCustomTimeLog = function(t, n, e) {
			return function(t) {
				var n = t.name
					, e = t.tag
					, t = t.value;
				if (n && t) {
					t = {
						ev_type: "custom",
						cm_name: n = h(n.toString) ? n.toString() : "",
						cm_type: "time",
						cm_value: t = +t
					};
					return e && (e = h(e.toString) ? e.toString() : "",
						t.cm_tag = e),
						{
							name: "SentCustomTime",
							type: "get",
							event: t
						}
				}
			}({
				name: t,
				tag: n,
				value: e
			})
		}
		,
		jt.prototype.buildCustomCountLog = function(t, n) {
			return function(t) {
				var n = t.name
					, t = t.tag;
				if (n) {
					n = {
						ev_type: "custom",
						cm_name: n = h(n.toString) ? n.toString() : "",
						cm_type: "count"
					};
					return t && (t = h(t.toString) ? t.toString() : "",
						n.cm_tag = t),
						{
							name: "SentCustomCount",
							type: "get",
							event: n
						}
				}
			}({
				name: t,
				tag: n
			})
		}
		,
		jt.prototype.buildEmitSingleEvent = function(t) {
			t = S(t);
			if (t && (!t || t.event_name))
				return {
					name: this.name,
					type: "post",
					event: {
						ev_type: "flexible",
						flexible_data_list: [t]
					}
				}
		}
		,
		jt.monitorName = Ot,
		jt);
	function jt() {
		var o = this;
		this.name = Ot,
			this.callback = g,
			this.handOut = function() {
				for (var t = [], n = 0; n < arguments.length; n++)
					t[n] = arguments[n];
				var e = o.buildEvent.apply(o, c([], H(t)));
				o.callback(e)
			}
			,
			this.buildEvent = function() {
				for (var t = [], n = 0; n < arguments.length; n++)
					t[n] = arguments[n];
				if ("sendCustomCountLog" === t[0])
					return o.buildCustomCountLog(t[1], t[2]);
				if ("sendCustomTimeLog" === t[0])
					return o.buildCustomTimeLog(t[1], t[2], t[3]);
				if ("send" === t[0]) {
					if ("count" === t[1])
						return o.buildCustomCountLog(t[2].category, t[2].action);
					if ("timing" === t[1])
						return o.buildCustomTimeLog(t[2].category, t[2].action, t[2].value)
				}
				if ("emit" === t[0] && t[1] && t[2]) {
					var e = {
						type: t[1],
						event: t[2]
					};
					return o.buildEmitSingleEvent(e)
				}
			}
			,
			this.send = function(t, n, e) {
				var r = e.action
					, e = e.value;
				"count" === t && o.sendCustomCountLog(n, r),
				"timing" === t && o.sendCustomTimeLog(n, r, e)
			}
			,
			this.sendCustomTimeLog = function(t, n, e) {
				e = o.buildCustomTimeLog(t, n, e);
				o.callback(e)
			}
			,
			this.sendCustomCountLog = function(t, n) {
				n = o.buildCustomCountLog(t, n);
				return o.callback(n),
					n
			}
			,
			this.emitEvent = function(t) {
				t = o.buildEmitSingleEvent(t);
				o.callback(t)
			}
	}
	function Jt(o) {
		function i(n, e) {
			var r;
			return function(t) {
				a = void 0,
				t && r !== t && e({
					event: r = t,
					name: n
				})
			}
		}
		var a;
		return [i, function(r) {
			return function(t) {
				var n;
				try {
					n = t.target
				} catch (t) {
					return
				}
				var e = n && n.tagName;
				e && ("INPUT" === e || "TEXTAREA" === e || n.isContentEditable) && (a || i("input", r)(t),
					clearTimeout(a),
					a = window.setTimeout(function() {
						a = void 0
					}, o))
			}
		}
		]
	}
	function Dt(n, e) {
		return function(t) {
			if (e)
				try {
					n(t)
				} catch (t) {}
		}
	}
	function Ht(t) {
		if (t = t.error)
			return t
	}
	function Ut(t) {
		var n;
		try {
			"reason"in t ? n = t.reason : "detail"in t && "reason"in t.detail && (n = t.detail.reason)
		} catch (t) {}
		if (n)
			return n
	}
	function Bt(e, r) {
		return function(t) {
			var n;
			if (!function(t) {
				switch (Object.prototype.toString.call(t)) {
					case "[object Error]":
					case "[object Exception]":
					case "[object DOMException]":
						return 1;
					default:
						return t instanceof Error
				}
			}(t) ? (o(t) && (n = {
				message: JSON.stringify(t)
			}),
			s(t) && (n = {
				message: t
			})) : n = t,
				n) {
				t = {
					ev_type: "js_exception",
					exception: {
						message: (t = n).message,
						name: t.name,
						fileName: t.fileName,
						lineNumber: t.lineNumber,
						columnNumber: t.columnNumber,
						stack: t.stack,
						stacktrace: t.stacktrace,
						framesToPop: t.framesToPop
					},
					release: e,
					breadcrumbs: r()
				};
				return {
					name: zt,
					type: "post",
					event: t
				}
			}
		}
	}
	var qt = function(n, e, t, r) {
		var i = (o.prototype.setup = function(t) {
			this.monitor = V(e, this.props, t, r)
		}
			,
			o.monitorName = n,
			o);
		function o(t) {
			this.props = t,
				this.name = n
		}
		return t.forEach(function(t, o) {
			return i.prototype[t] = function() {
				for (var t, n, e = [], r = 0; r < arguments.length; r++)
					e[r] = arguments[r];
				return null === (n = null === (t = this.monitor) || void 0 === t ? void 0 : t[o]) || void 0 === n ? void 0 : n.call.apply(n, c([t], H(e)))
			}
		}),
			i
	}
		, Qt = qt("BreadcrumbMonitor", function(i) {
		return void 0 === i && (i = L()),
			function(t) {
				var e, n = H(Jt(100), 2), r = n[0], o = n[1], n = H(function(n) {
					void 0 === n && (n = 20);
					var e = [];
					return [function() {
						return e
					}
						, function(t) {
							t = D(D({}, t), {
								timestamp: v()
							});
							e = 0 <= n ? c(c([], H(e)), [t]).slice(-n) : c(c([], H(e)), [t])
						}
					]
				}(t.maxBreadcrumbs), 2), t = n[0], n = n[1], n = (e = n,
						function(t) {
							var n;
							try {
								n = t.event.target ? E(t.event.target) : E(t.event)
							} catch (t) {
								n = "<unknown>"
							}
							0 !== n.length && e({
								category: "ui." + t.name,
								message: n
							})
						}
				);
				return i && (i.addEventListener("click", r("click", Dt(n, "dom"))),
					i.addEventListener("keypress", o(Dt(n, "dom")))),
					[t]
			}
	}, ["getBreadcrumbs"])
		, zt = "JSExceptionMonitor"
		, Gt = qt(zt, function(a) {
		return void 0 === a && (a = T()),
			function(t, e) {
				var n = t.getBreadcrumbs
					, r = t.enableCatchGlobalJSError
					, o = t.catchUnhandledRejection
					, o = void 0 === o || o
					, t = t.release
					, i = Bt(void 0 === t ? "" : t, function() {
					return n && n() || []
				})
					, t = function(n) {
					return function(t) {
						t = n(t),
							t = t && i(t);
						t && e && e(t)
					}
				};
				return a && ((void 0 === r || r) && a.addEventListener("error", t(Ht)),
				o && a.addEventListener("unhandledrejection", t(Ut))),
					[i]
			}
	}, ["buildEvent"])
		, Vt = qt(Mt, function(J) {
		return void 0 === J && (J = k()),
			function(t, s) {
				function r(t) {
					if (clearTimeout(g),
						g = 0,
						s) {
						h = !1;
						var n = m.isAsync;
						S(m);
						var e = k().mpfid
							, r = _()
							, o = r && r.event.resources
							, i = H(W(J), 3)
							, a = function(t, n) {
							if (t && n) {
								var e = t.domainLookupEnd
									, r = t.domainLookupStart
									, o = t.connectEnd
									, i = t.connectStart
									, a = t.responseEnd
									, u = t.responseStart
									, s = t.requestStart
									, c = t.domComplete
									, l = t.domLoading
									, f = t.domInteractive
									, m = t.navigationStart
									, d = t.loadEventEnd
									, v = t.loadEventStart
									, p = t.secureConnectionStart
									, s = {
									dns: e - r,
									tcp: o - i,
									request: u - s,
									response: a - u,
									processing: c - l,
									blank: a - m,
									domready: f - m,
									load: d - m,
									domparse: f - a,
									resource: v - t.domContentLoadedEventEnd,
									ttfb: u - s,
									redirect: t.redirectEnd - t.redirectStart
								};
								p && (s.ssl = o - p);
								n = n("navigation")[0];
								return (n || t) && (s.navigation = n || t),
								t && (s.timing = t),
								n && (s.navigation_timing = n),
									s
							}
						}(i[0], i[2])
							, r = function(t, n, e, r) {
							if (!t)
								return 0;
							var o, i = H(t, 3), a = i[0], t = i[1], u = i[2];
							if (a(),
								n)
								return t().event.fmp || 0;
							try {
								return o = [[q(1), function() {
									return u().event.fmp
								}
								], [q(2), function() {
									return r()
								}
								]],
								function(t) {
									for (var n = 0; n < o.length; ) {
										if (o[n][0](t))
											return o[n][1](t);
										n += 1
									}
								}(e) || 0
							} catch (t) {
								return 0
							}
						}(l, n, c, function() {
							return A().fcp
						})
							, i = C().lcp;
						b(D(D(D({}, m), a), {
							mpfid: e,
							resources: o,
							has_resource: o ? 1 : 0,
							fmp: r,
							lcp: i
						})),
						m.load && b({
							load: m.load
						}),
						n || null !== (i = null == a ? void 0 : a.timing) && void 0 !== i && i.loadEventEnd || 0 !== (null === (a = null == a ? void 0 : a.timing) || void 0 === a ? void 0 : a.loadEventEnd) || b({
							bounced: !0
						});
						var u = function() {
							y = null,
								M(n, w())
						};
						if (y = function() {
							b({
								fid: P()
							}),
								b(A()),
							O && b({
								tti: Math.round(O() - v)
							}),
								u()
						}
							,
							R.then(function(t) {
								return b({
									fid: t
								})
							}),
							x.then(b),
							N.then(function(t) {
								return b({
									tti: t
								})
							}),
							t)
							return b(A()),
							C && b(C()),
								u();
						I && I(N),
							F.then(function() {
								return setTimeout(u)
							})
					}
				}
				var e, o, n, i = t.prePerformanceObserver, a = t.TTIMonitor, c = t.renderType, u = t.report, l = t.fmpMonitor, t = t.performanceAuto, f = void 0 === t || t, m = D({}, Lt), d = a || K, v = 0, p = "", h = !0, g = 0, y = null, t = {
					isAsync: 0,
					prePerformanceObserver: i
				}, a = H(gt(m), 3), b = a[0], w = a[1], S = a[2], E = H(W(J), 2)[1], a = H((e = s,
					o = !1,
					[function() {
						return o
					}
						, function(t, n) {
						if (!t) {
							if (o)
								return;
							o = !0
						}
						e && e(n)
					}
					]), 2), L = a[0], M = a[1], T = (n = !1,
						U(function() {
							return n = !0
						}),
						function() {
							return n
						}
				), _ = H(V(ht), 1)[0], k = H(V(mt, t), 1)[0], C = H(V(ft, {
					prePerformanceObserver: i
				}, function(t) {
					t = t.lcp;
					return b({
						lcp: t
					})
				}), 1)[0], R = z(function(t) {
					return t.fid
				}), P = H(V(lt, 0, R), 1)[0], x = z(Q), A = H(V(vt, 0, x), 1)[0], N = z(function(t) {
					if (t && 0 < t)
						return Math.max(Math.round(t - v), 0)
				}), t = H(V(d, t), 4), I = t[0], O = t[3], F = G(N, x);
				U(function() {
					return f && (g = setTimeout(r, 200))
				}),
					B(function() {
						L() || (r(!0),
						u && u())
					});
				var j = function() {
					f = !1,
						clearTimeout(g),
						g = 0
				};
				return [function(t) {
					void 0 === t && (t = ""),
						y ? y() : !g && L() || (T() || j(),
							r(),
							y()),
						m.isAsync = 1,
						n = H(gt(m), 3),
						b = n[0],
						w = n[1],
						S = n[2],
						h = !0,
						v = Math.round(E()),
						p = t;
					var n = {
						isAsync: 1,
						prePerformanceObserver: i
					}
						, t = H(V(ht, n), 1);
					_ = t[0],
						t = H(V(mt, n), 1),
						k = t[0],
						n = H(V(d, D(D({}, n), {
							minValue: v
						})), 4),
						I = n[0],
						O = n[3],
						N = z(function(t) {
							if (t && 0 < t)
								return Math.max(Math.round(t - v), 0)
						});
					var e = {
						fp: 0,
						fcp: 0
					};
					A = function() {
						return e
					}
						,
						(x = z(Q))(e),
						F = G(N, x),
						l = V(X)
				}
					, function() {
						h && T() && !g && (m.isAsync && (m.load = Math.round(E() - v),
							m.route_from = p),
							g = setTimeout(r, 200))
					}
					, function() {
						return F.resolved || r(!("complete" === document.readyState)),
							w()
					}
					, j]
			}
	}, ["initAsync", "send", "getPerformance", "stopAutoPerf"])
		, Wt = qt(Tt, function(o, i, a) {
		return void 0 === o && (o = T()),
		void 0 === i && (i = k()),
		void 0 === a && (a = null === location || void 0 === location ? void 0 : location.href),
			function(t, n) {
				function e() {
					return r("resource")
				}
				var r = H(W(i), 3)[2];
				return o && o.addEventListener("error", function(t) {
					t = kt(e(), t, a || "");
					t && n && n(t)
				}, !0),
					[function(t) {
						return kt(e(), t, a || "")
					}
					]
			}
	}, ["buildEvent"])
		, Xt = qt(Rt, function(e, r, o) {
		if (void 0 === e && (e = T()),
		void 0 === r && (r = function() {
			if ("Promise"in window)
				return Promise
		}()),
		void 0 === o && (o = M()),
		e && o && r)
			return function(t, n) {
				t = xt(Pt(n, t.onError, r, o), e);
				return e.addEventListener("error", t, !0),
					[t]
			}
	}, ["staticSRIErrorLog"]);
	function Yt(t, n) {
		return a(t) ? a(n) ? D(D({}, t), {
			overrides: n
		}) : t : {}
	}
	function Kt(t, n) {
		var e;
		return t.forEach(function(t) {
			t.name === n && (e = t)
		}),
			e
	}
	var Zt = function(r) {
		void 0 === r && (r = window);
		var o = 0;
		return {
			setSchedule: function(t, n) {
				var e = this;
				o = r.setTimeout(function() {
					t(),
						e.setSchedule(t, n)
				}, n)
			},
			clearSchedule: function() {
				r.clearTimeout(o)
			},
			getTimer: function() {
				return o
			}
		}
	}()
		, $t = "WorkerMonitor"
		, tn = (nn.prototype.setup = function() {
		h(window.Worker) && this.loadWorker()
	}
		,
		nn.prototype.loadWorker = function() {
			var e = this;
			p.get(this.options.workerLink, {
				getResponseText: function(t) {
					var n;
					e.worker || (n = new Worker(window.URL.createObjectURL(new Blob([t],{
						type: "text/javascript"
					}))),
						e.worker = n,
						document.addEventListener("visibilitychange", function() {
							e.sendVisibilityChange({
								worker: n,
								visibilityState: document.visibilityState
							})
						}),
						Zt.setSchedule(function() {
							e.heartBeat({
								worker: n,
								reportURL: e.options.reportURL,
								commonParams: e.options.commonParams
							})
						}, 2e3))
				}
			})
		}
		,
		nn.prototype.sendVisibilityChange = function(t) {
			var n = t.worker
				, t = t.visibilityState;
			n.postMessage({
				type: "visibilityChange",
				visibilityState: t
			})
		}
		,
		nn.prototype.heartBeat = function(t) {
			var n = t.worker
				, e = t.reportURL
				, t = t.commonParams;
			n.postMessage({
				type: "heartBeat",
				reportURL: e,
				commonParams: D(D({}, t || {}), {
					url: window.location.href
				}),
				breadcrumbs: null !== (e = null === (e = null === (t = null === (e = this.options) || void 0 === e ? void 0 : e.breadcrumbMonitor) || void 0 === t ? void 0 : t.getBreadcrumbs) || void 0 === e ? void 0 : e.call(t)) && void 0 !== e ? e : [],
				memory: null !== (e = null === (e = null === (t = this.options.memoryRecordMonitor) || void 0 === t ? void 0 : t.getMemoryQueue) || void 0 === e ? void 0 : e.call(t)) && void 0 !== e ? e : [],
				frames: null !== (t = null === (e = null === (t = this.options.fpsJankTimesMonitor) || void 0 === t ? void 0 : t.getHistoryFrameList) || void 0 === e ? void 0 : e.call(t)) && void 0 !== t ? t : []
			})
		}
		,
		nn.monitorName = $t,
		nn);
	function nn(t) {
		this.name = $t,
			this.options = t,
			this.worker = null
	}
	var en, rn, on, an, un, sn, qt = (cn.prototype.setup = function() {
		var n = this;
		this.options.sendEvent && this.monitors.forEach(function(t) {
			(n.installedMonitors[t.name] = t).setup(n.options.sendEvent)
		})
	}
		,
		cn.version = "3.6.33",
		cn);
	function cn(t) {
		var o = this;
		this.getInstalledMonitors = function() {
			return o.installedMonitors
		}
			,
			this.init = function() {
				var t, n = o.options.config;
				n.flags.enableStaticError && o.monitors.push(new Wt),
				n.flags.enablePerformance && o.monitors.push(new Vt({
					fmpMonitor: o.options.fmpMonitor,
					performanceAuto: n.commonParams.performanceAuto,
					renderType: n.monitors.BaseMonitor.appTypeSetting.renderType,
					report: function() {
						return o.options.report()
					},
					prePerformanceObserver: {
						precollect: null !== (t = null === (t = null === (t = window.Slardar) || void 0 === t ? void 0 : t.lt) || void 0 === t ? void 0 : t.e) && void 0 !== t ? t : [],
						observer: null === (t = null === (t = window.Slardar) || void 0 === t ? void 0 : t.lt) || void 0 === t ? void 0 : t.o
					}
				})),
				n.flags.enableMemoryRecord && o.monitors.push(new Nt),
				n.flags.enableBreadcrumb && o.monitors.push(new Qt),
				n.flags.enableFPSJankTimesMonitor && o.monitors.push(new st({
					breadcrumbMonitor: Kt(o.monitors, "BreadcrumbMonitor"),
					memoryRecordMonitor: Kt(o.monitors, "MemoryRecordMonitor"),
					report: function() {
						return o.options.report()
					}
				})),
					o.monitors.push(new Ft),
				n.flags.enableCatchJSErrorV2 && o.monitors.push(new Gt({
					enableCatchGlobalJSError: o.options.config.flags.enableCatchGlobalJSError,
					catchUnhandledRejection: n.flags.catchUnhandledRejectionV2,
					release: o.options.config.monitors.JSErrorMonitor.release,
					breadcrumbMonitor: Kt(o.monitors, "BreadcrumbMonitor")
				})),
					o.monitors.push(new Xt({
						onError: function(t) {
							o.options.captureException(t)
						}
					})),
				n.flags.enableCrash && o.monitors.push(new tn({
					reportURL: n.commonParams.reportURLSingle,
					commonParams: n.commonParams,
					workerLink: "https://lf3-cdn-tos.bytegoofy.com/goofy/slardar/fe/sdk/plugins/worker.3.6.33.cn.js",
					breadcrumbMonitor: Kt(o.monitors, "BreadcrumbMonitor"),
					memoryRecordMonitor: Kt(o.monitors, "MemoryRecordMonitor"),
					fpsJankTimesMonitor: Kt(o.monitors, "FPSJankTimesMonitor")
				})),
					o.setup(),
					o.handlePreCollect()
			}
			,
			this.handlePreCollect = function() {
				var t = o.options.collect
					, n = null !== (n = null == t ? void 0 : t.emit) && void 0 !== n ? n : [];
				i(n) && (n.forEach(function(t) {
					var n, e;
					null != t && t.event && (n = t.event,
						e = t.params,
						t = Yt(null === (t = Kt(o.monitors, "EmitMonitor")) || void 0 === t ? void 0 : t.buildEvent.apply(t, c([], H(null != n ? n : {}))), e),
					null !== (e = (n = o.options).sendEvent) && void 0 !== e && e.call(n, t))
				}),
					t.emit = []);
				var n = null !== (n = null == t ? void 0 : t.exception) && void 0 !== n ? n : [];
				i(n) && (n.forEach(function(t) {
					var n, e;
					t && t.exception && (n = t.exception,
						e = t.params,
						t = Yt(null === (t = Kt(o.monitors, "JSExceptionMonitor")) || void 0 === t ? void 0 : t.buildEvent(n), e),
					null !== (e = (n = o.options).sendEvent) && void 0 !== e && e.call(n, t))
				}),
					t.exception = []);
				n = null !== (n = null == t ? void 0 : t.staticError) && void 0 !== n ? n : [];
				i(n) && (n.forEach(function(t) {
					var n, e, r;
					null != t && t.event && (e = t.event,
						r = t.params,
						t = Yt(null === (n = Kt(o.monitors, "StaticErrorMonitor")) || void 0 === n ? void 0 : n.buildEvent(e || {}), r),
					null !== (r = (n = o.options).sendEvent) && void 0 !== r && r.call(n, t),
					null !== (t = Kt(o.monitors, "StaticSRIErrorMonitor")) && void 0 !== t && t.staticSRIErrorLog(e))
				}),
					t.staticError = []),
				null !== (t = window.Slardar) && void 0 !== t && t.globalPreCollectError && (window.removeEventListener("error", window.Slardar.globalPreCollectError, !0),
					window.Slardar.globalPreCollectError = void 0)
			}
			,
			this.options = t,
			this.monitors = [],
			this.installedMonitors = {}
	}
	return en = {
		pluginName: "SetMonitors",
		version: qt.version,
		plugin: qt
	},
	window.__SLARDAR__ || (window.__SLARDAR__ = {}),
	window.__SLARDAR__ && ((an = {
		version: rn = en.plugin.version
	})[en.pluginName] = en.plugin,
		on = an,
		an = null !== (an = window.__SLARDAR__.plugins) && void 0 !== an ? an : [],
		sn = !(un = []),
		an.forEach(function(t) {
			t.version === rn && ("SetMonitors" !== en.pluginName || t.SetMonitors || (t[en.pluginName] = en.plugin),
			"SetSentryMonitors" !== en.pluginName || t.SetSentryMonitors || (t[en.pluginName] = en.plugin),
			"SetHeatmap" !== en.pluginName || t.SetHeatmap || (t[en.pluginName] = en.plugin),
			"SetHeatmapDraw" !== en.pluginName || t.SetHeatmapDraw || (t[en.pluginName] = en.plugin),
			"SetHeatmapMouseDraw" !== en.pluginName || t.SetHeatmapMouseDraw || (t[en.pluginName] = en.plugin),
			"SetHeatmapScrollDraw" !== en.pluginName || t.SetHeatmapScrollDraw || (t[en.pluginName] = en.plugin),
				sn = !0),
				un.push(t)
		}),
	sn || un.push(on),
		window.__SLARDAR__.plugins = un),
		t.SetMonitors = qt,
		Object.defineProperty(t, "__esModule", {
			value: !0
		}),
		t
}({});
