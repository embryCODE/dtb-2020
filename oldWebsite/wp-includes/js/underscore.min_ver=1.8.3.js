(function() {
  function r() {}
  var n = this,
    t = n._,
    e = Array.prototype,
    o = Object.prototype,
    u = Function.prototype,
    i = e.push,
    c = e.slice,
    s = o.toString,
    a = o.hasOwnProperty,
    f = Array.isArray,
    l = Object.keys,
    p = u.bind,
    h = Object.create,
    v = function(n) {
      return n instanceof v
        ? n
        : this instanceof v
        ? void (this._wrapped = n)
        : new v(n)
    }
  'undefined' != typeof exports
    ? ('undefined' != typeof module &&
        module.exports &&
        (exports = module.exports = v),
      (exports._ = v))
    : (n._ = v),
    (v.VERSION = '1.8.3')
  const y = function(u, i, n) {
      if (void 0 === i) return u
      switch (null == n ? 3 : n) {
        case 1:
          return function(n) {
            return u.call(i, n)
          }
        case 2:
          return function(n, t) {
            return u.call(i, n, t)
          }
        case 3:
          return function(n, t, r) {
            return u.call(i, n, t, r)
          }
        case 4:
          return function(n, t, r, e) {
            return u.call(i, n, t, r, e)
          }
      }
      return function() {
        return u.apply(i, arguments)
      }
    },
    d = function(n, t, r) {
      return null == n
        ? v.identity
        : v.isFunction(n)
        ? y(n, t, r)
        : v.isObject(n)
        ? v.matcher(n)
        : v.property(n)
    }
  v.iteratee = function(n, t) {
    return d(n, t, 1 / 0)
  }
  function g(c, f) {
    return function(n) {
      const t = arguments.length
      if (t < 2 || null == n) return n
      for (let r = 1; r < t; r++)
        for (let e = arguments[r], u = c(e), i = u.length, o = 0; o < i; o++) {
          const a = u[o]
          ;(f && void 0 !== n[a]) || (n[a] = e[a])
        }
      return n
    }
  }
  function m(n) {
    if (!v.isObject(n)) return {}
    if (h) return h(n)
    r.prototype = n
    const t = new r()
    return (r.prototype = null), t
  }
  function b(t) {
    return function(n) {
      return null == n ? void 0 : n[t]
    }
  }
  const x = Math.pow(2, 53) - 1,
    _ = b('length'),
    j = function(n) {
      const t = _(n)
      return 'number' == typeof t && 0 <= t && t <= x
    }
  function w(a) {
    return function(n, t, r, e) {
      t = y(t, e, 4)
      let u = !j(n) && v.keys(n),
        i = (u || n).length,
        o = 0 < a ? 0 : i - 1
      return (
        arguments.length < 3 && ((r = n[u ? u[o] : o]), (o += a)),
        (function(n, t, r, e, u, i) {
          for (; 0 <= u && u < i; u += a) {
            const o = e ? e[u] : u
            r = t(r, n[o], o, n)
          }
          return r
        })(n, t, r, u, o, i)
      )
    }
  }
  (v.each = v.forEach = function(n, t, r) {
    let e, u
    if (((t = y(t, r)), j(n)))
      for (e = 0, u = n.length; e < u; e++) t(n[e], e, n)
    else {
      const i = v.keys(n)
      for (e = 0, u = i.length; e < u; e++) t(n[i[e]], i[e], n)
    }
    return n
  }),
    (v.map = v.collect = function(n, t, r) {
      t = d(t, r)
      for (
        var e = !j(n) && v.keys(n), u = (e || n).length, i = Array(u), o = 0;
        o < u;
        o++
      ) {
        const a = e ? e[o] : o
        i[o] = t(n[a], a, n)
      }
      return i
    }),
    (v.reduce = v.foldl = v.inject = w(1)),
    (v.reduceRight = v.foldr = w(-1)),
    (v.find = v.detect = function(n, t, r) {
      let e
      if (
        void 0 !== (e = j(n) ? v.findIndex(n, t, r) : v.findKey(n, t, r)) &&
        -1 !== e
      )
        return n[e]
    }),
    (v.filter = v.select = function(n, e, t) {
      const u = []
      return (
        (e = d(e, t)),
        v.each(n, function(n, t, r) {
          e(n, t, r) && u.push(n)
        }),
        u
      )
    }),
    (v.reject = function(n, t, r) {
      return v.filter(n, v.negate(d(t)), r)
    }),
    (v.every = v.all = function(n, t, r) {
      t = d(t, r)
      for (let e = !j(n) && v.keys(n), u = (e || n).length, i = 0; i < u; i++) {
        const o = e ? e[i] : i
        if (!t(n[o], o, n)) return !1
      }
      return !0
    }),
    (v.some = v.any = function(n, t, r) {
      t = d(t, r)
      for (let e = !j(n) && v.keys(n), u = (e || n).length, i = 0; i < u; i++) {
        const o = e ? e[i] : i
        if (t(n[o], o, n)) return !0
      }
      return !1
    }),
    (v.contains = v.includes = v.include = function(n, t, r, e) {
      return (
        j(n) || (n = v.values(n)),
        ('number' == typeof r && !e) || (r = 0),
        0 <= v.indexOf(n, t, r)
      )
    }),
    (v.invoke = function(n, r) {
      const e = c.call(arguments, 2),
        u = v.isFunction(r)
      return v.map(n, function(n) {
        const t = u ? r : n[r]
        return null == t ? t : t.apply(n, e)
      })
    }),
    (v.pluck = function(n, t) {
      return v.map(n, v.property(t))
    }),
    (v.where = function(n, t) {
      return v.filter(n, v.matcher(t))
    }),
    (v.findWhere = function(n, t) {
      return v.find(n, v.matcher(t))
    }),
    (v.max = function(n, e, t) {
      let r,
        u,
        i = -1 / 0,
        o = -1 / 0
      if (null == e && null != n)
        for (let a = 0, c = (n = j(n) ? n : v.values(n)).length; a < c; a++)
          (r = n[a]), i < r && (i = r)
      else
        (e = d(e, t)),
          v.each(n, function(n, t, r) {
            (u = e(n, t, r)),
              (o < u || (u === -1 / 0 && i === -1 / 0)) && ((i = n), (o = u))
          })
      return i
    }),
    (v.min = function(n, e, t) {
      let r,
        u,
        i = 1 / 0,
        o = 1 / 0
      if (null == e && null != n)
        for (let a = 0, c = (n = j(n) ? n : v.values(n)).length; a < c; a++)
          (r = n[a]) < i && (i = r)
      else
        (e = d(e, t)),
          v.each(n, function(n, t, r) {
            ((u = e(n, t, r)) < o || (u === 1 / 0 && i === 1 / 0)) &&
              ((i = n), (o = u))
          })
      return i
    }),
    (v.shuffle = function(n) {
      for (
        var t, r = j(n) ? n : v.values(n), e = r.length, u = Array(e), i = 0;
        i < e;
        i++
      )
        (t = v.random(0, i)) !== i && (u[i] = u[t]), (u[t] = r[i])
      return u
    }),
    (v.sample = function(n, t, r) {
      return null == t || r
        ? (j(n) || (n = v.values(n)), n[v.random(n.length - 1)])
        : v.shuffle(n).slice(0, Math.max(0, t))
    }),
    (v.sortBy = function(n, e, t) {
      return (
        (e = d(e, t)),
        v.pluck(
          v
            .map(n, function(n, t, r) {
              return { value: n, index: t, criteria: e(n, t, r) }
            })
            .sort(function(n, t) {
              const r = n.criteria,
                e = t.criteria
              if (r !== e) {
                if (e < r || void 0 === r) return 1
                if (r < e || void 0 === e) return -1
              }
              return n.index - t.index
            }),
          'value'
        )
      )
    })
  function A(o) {
    return function(e, u, n) {
      const i = {}
      return (
        (u = d(u, n)),
        v.each(e, function(n, t) {
          const r = u(n, t, e)
          o(i, n, r)
        }),
        i
      )
    }
  }
  (v.groupBy = A(function(n, t, r) {
    v.has(n, r) ? n[r].push(t) : (n[r] = [t])
  })),
    (v.indexBy = A(function(n, t, r) {
      n[r] = t
    })),
    (v.countBy = A(function(n, t, r) {
      v.has(n, r) ? n[r]++ : (n[r] = 1)
    })),
    (v.toArray = function(n) {
      return n
        ? v.isArray(n)
          ? c.call(n)
          : j(n)
          ? v.map(n, v.identity)
          : v.values(n)
        : []
    }),
    (v.size = function(n) {
      return null == n ? 0 : j(n) ? n.length : v.keys(n).length
    }),
    (v.partition = function(n, e, t) {
      e = d(e, t)
      const u = [],
        i = []
      return (
        v.each(n, function(n, t, r) {
          (e(n, t, r) ? u : i).push(n)
        }),
        [u, i]
      )
    }),
    (v.first = v.head = v.take = function(n, t, r) {
      if (null != n) return null == t || r ? n[0] : v.initial(n, n.length - t)
    }),
    (v.initial = function(n, t, r) {
      return c.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    }),
    (v.last = function(n, t, r) {
      if (null != n)
        return null == t || r
          ? n[n.length - 1]
          : v.rest(n, Math.max(0, n.length - t))
    }),
    (v.rest = v.tail = v.drop = function(n, t, r) {
      return c.call(n, null == t || r ? 1 : t)
    }),
    (v.compact = function(n) {
      return v.filter(n, v.identity)
    })
  var O = function(n, t, r, e) {
    for (var u = [], i = 0, o = e || 0, a = _(n); o < a; o++) {
      let c = n[o]
      if (j(c) && (v.isArray(c) || v.isArguments(c))) {
        t || (c = O(c, t, r))
        let f = 0,
          l = c.length
        for (u.length += l; f < l; ) u[i++] = c[f++]
      } else r || (u[i++] = c)
    }
    return u
  }
  function k(i) {
    return function(n, t, r) {
      t = d(t, r)
      for (let e = _(n), u = 0 < i ? 0 : e - 1; 0 <= u && u < e; u += i)
        if (t(n[u], u, n)) return u
      return -1
    }
  }
  function F(i, o, a) {
    return function(n, t, r) {
      let e = 0,
        u = _(n)
      if ('number' == typeof r)
        0 < i
          ? (e = 0 <= r ? r : Math.max(r + u, e))
          : (u = 0 <= r ? Math.min(r + 1, u) : r + u + 1)
      else if (a && r && u) return n[(r = a(n, t))] === t ? r : -1
      if (t != t) return 0 <= (r = o(c.call(n, e, u), v.isNaN)) ? r + e : -1
      for (r = 0 < i ? e : u - 1; 0 <= r && r < u; r += i)
        if (n[r] === t) return r
      return -1
    }
  }
  (v.flatten = function(n, t) {
    return O(n, t, !1)
  }),
    (v.without = function(n) {
      return v.difference(n, c.call(arguments, 1))
    }),
    (v.uniq = v.unique = function(n, t, r, e) {
      v.isBoolean(t) || ((e = r), (r = t), (t = !1)), null != r && (r = d(r, e))
      for (var u = [], i = [], o = 0, a = _(n); o < a; o++) {
        const c = n[o],
          f = r ? r(c, o, n) : c
        t
          ? ((o && i === f) || u.push(c), (i = f))
          : r
          ? v.contains(i, f) || (i.push(f), u.push(c))
          : v.contains(u, c) || u.push(c)
      }
      return u
    }),
    (v.union = function() {
      return v.uniq(O(arguments, !0, !0))
    }),
    (v.intersection = function(n) {
      for (var t = [], r = arguments.length, e = 0, u = _(n); e < u; e++) {
        const i = n[e]
        if (!v.contains(t, i)) {
          for (var o = 1; o < r && v.contains(arguments[o], i); o++);
          o === r && t.push(i)
        }
      }
      return t
    }),
    (v.difference = function(n) {
      const t = O(arguments, !0, !0, 1)
      return v.filter(n, function(n) {
        return !v.contains(t, n)
      })
    }),
    (v.zip = function() {
      return v.unzip(arguments)
    }),
    (v.unzip = function(n) {
      for (
        var t = (n && v.max(n, _).length) || 0, r = Array(t), e = 0;
        e < t;
        e++
      )
        r[e] = v.pluck(n, e)
      return r
    }),
    (v.object = function(n, t) {
      for (var r = {}, e = 0, u = _(n); e < u; e++)
        t ? (r[n[e]] = t[e]) : (r[n[e][0]] = n[e][1])
      return r
    }),
    (v.findIndex = k(1)),
    (v.findLastIndex = k(-1)),
    (v.sortedIndex = function(n, t, r, e) {
      for (var u = (r = d(r, e, 1))(t), i = 0, o = _(n); i < o; ) {
        const a = Math.floor((i + o) / 2)
        r(n[a]) < u ? (i = a + 1) : (o = a)
      }
      return i
    }),
    (v.indexOf = F(1, v.findIndex, v.sortedIndex)),
    (v.lastIndexOf = F(-1, v.findLastIndex)),
    (v.range = function(n, t, r) {
      null == t && ((t = n || 0), (n = 0)), (r = r || 1)
      for (
        var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0;
        i < e;
        i++, n += r
      )
        u[i] = n
      return u
    })
  function S(n, t, r, e, u) {
    if (!(e instanceof t)) return n.apply(r, u)
    const i = m(n.prototype),
      o = n.apply(i, u)
    return v.isObject(o) ? o : i
  }
  (v.bind = function(n, t) {
    if (p && n.bind === p) return p.apply(n, c.call(arguments, 1))
    if (!v.isFunction(n))
      throw new TypeError('Bind must be called on a function')
    var r = c.call(arguments, 2),
      e = function() {
        return S(n, e, t, this, r.concat(c.call(arguments)))
      }
    return e
  }),
    (v.partial = function(u) {
      var i = c.call(arguments, 1),
        o = function() {
          for (var n = 0, t = i.length, r = Array(t), e = 0; e < t; e++)
            r[e] = i[e] === v ? arguments[n++] : i[e]
          for (; n < arguments.length; ) r.push(arguments[n++])
          return S(u, o, this, this, r)
        }
      return o
    }),
    (v.bindAll = function(n) {
      let t,
        r,
        e = arguments.length
      if (e <= 1) throw new Error('bindAll must be passed function names')
      for (t = 1; t < e; t++) n[(r = arguments[t])] = v.bind(n[r], n)
      return n
    }),
    (v.memoize = function(e, u) {
      var i = function(n) {
        const t = i.cache,
          r = '' + (u ? u.apply(this, arguments) : n)
        return v.has(t, r) || (t[r] = e.apply(this, arguments)), t[r]
      }
      return (i.cache = {}), i
    }),
    (v.delay = function(n, t) {
      const r = c.call(arguments, 2)
      return setTimeout(function() {
        return n.apply(null, r)
      }, t)
    }),
    (v.defer = v.partial(v.delay, v, 1)),
    (v.throttle = function(r, e, u) {
      let i,
        o,
        a,
        c = null,
        f = 0
      u = u || {}
      function l() {
        (f = !1 === u.leading ? 0 : v.now()),
          (c = null),
          (a = r.apply(i, o)),
          c || (i = o = null)
      }
      return function() {
        const n = v.now()
        f || !1 !== u.leading || (f = n)
        const t = e - (n - f)
        return (
          (i = this),
          (o = arguments),
          t <= 0 || e < t
            ? (c && (clearTimeout(c), (c = null)),
              (f = n),
              (a = r.apply(i, o)),
              c || (i = o = null))
            : c || !1 === u.trailing || (c = setTimeout(l, t)),
          a
        )
      }
    }),
    (v.debounce = function(t, r, e) {
      var u,
        i,
        o,
        a,
        c,
        f = function() {
          const n = v.now() - a
          n < r && 0 <= n
            ? (u = setTimeout(f, r - n))
            : ((u = null), e || ((c = t.apply(o, i)), u || (o = i = null)))
        }
      return function() {
        (o = this), (i = arguments), (a = v.now())
        const n = e && !u
        return (
          (u = u || setTimeout(f, r)),
          n && ((c = t.apply(o, i)), (o = i = null)),
          c
        )
      }
    }),
    (v.wrap = function(n, t) {
      return v.partial(t, n)
    }),
    (v.negate = function(n) {
      return function() {
        return !n.apply(this, arguments)
      }
    }),
    (v.compose = function() {
      const r = arguments,
        e = r.length - 1
      return function() {
        for (var n = e, t = r[e].apply(this, arguments); n--; )
          t = r[n].call(this, t)
        return t
      }
    }),
    (v.after = function(n, t) {
      return function() {
        if (--n < 1) return t.apply(this, arguments)
      }
    }),
    (v.before = function(n, t) {
      let r
      return function() {
        return (
          0 < --n && (r = t.apply(this, arguments)), n <= 1 && (t = null), r
        )
      }
    }),
    (v.once = v.partial(v.before, 2))
  const E = !{ toString: null }.propertyIsEnumerable('toString'),
    M = [
      'valueOf',
      'isPrototypeOf',
      'toString',
      'propertyIsEnumerable',
      'hasOwnProperty',
      'toLocaleString',
    ]
  function I(n, t) {
    let r = M.length,
      e = n.constructor,
      u = (v.isFunction(e) && e.prototype) || o,
      i = 'constructor'
    for (v.has(n, i) && !v.contains(t, i) && t.push(i); r--; )
      (i = M[r]) in n && n[i] !== u[i] && !v.contains(t, i) && t.push(i)
  }
  (v.keys = function(n) {
    if (!v.isObject(n)) return []
    if (l) return l(n)
    const t = []
    for (const r in n) v.has(n, r) && t.push(r)
    return E && I(n, t), t
  }),
    (v.allKeys = function(n) {
      if (!v.isObject(n)) return []
      const t = []
      for (const r in n) t.push(r)
      return E && I(n, t), t
    }),
    (v.values = function(n) {
      for (var t = v.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++)
        e[u] = n[t[u]]
      return e
    }),
    (v.mapObject = function(n, t, r) {
      t = d(t, r)
      for (var e, u = v.keys(n), i = u.length, o = {}, a = 0; a < i; a++)
        o[(e = u[a])] = t(n[e], e, n)
      return o
    }),
    (v.pairs = function(n) {
      for (var t = v.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++)
        e[u] = [t[u], n[t[u]]]
      return e
    }),
    (v.invert = function(n) {
      for (var t = {}, r = v.keys(n), e = 0, u = r.length; e < u; e++)
        t[n[r[e]]] = r[e]
      return t
    }),
    (v.functions = v.methods = function(n) {
      const t = []
      for (const r in n) v.isFunction(n[r]) && t.push(r)
      return t.sort()
    }),
    (v.extend = g(v.allKeys)),
    (v.extendOwn = v.assign = g(v.keys)),
    (v.findKey = function(n, t, r) {
      t = d(t, r)
      for (var e, u = v.keys(n), i = 0, o = u.length; i < o; i++)
        if (t(n[(e = u[i])], e, n)) return e
    }),
    (v.pick = function(n, t, r) {
      let e,
        u,
        i = {},
        o = n
      if (null == o) return i
      v.isFunction(t)
        ? ((u = v.allKeys(o)), (e = y(t, r)))
        : ((u = O(arguments, !1, !1, 1)),
          (e = function(n, t, r) {
            return t in r
          }),
          (o = Object(o)))
      for (let a = 0, c = u.length; a < c; a++) {
        const f = u[a],
          l = o[f]
        e(l, f, o) && (i[f] = l)
      }
      return i
    }),
    (v.omit = function(n, t, r) {
      if (v.isFunction(t)) t = v.negate(t)
      else {
        const e = v.map(O(arguments, !1, !1, 1), String)
        t = function(n, t) {
          return !v.contains(e, t)
        }
      }
      return v.pick(n, t, r)
    }),
    (v.defaults = g(v.allKeys, !0)),
    (v.create = function(n, t) {
      const r = m(n)
      return t && v.extendOwn(r, t), r
    }),
    (v.clone = function(n) {
      return v.isObject(n) ? (v.isArray(n) ? n.slice() : v.extend({}, n)) : n
    }),
    (v.tap = function(n, t) {
      return t(n), n
    }),
    (v.isMatch = function(n, t) {
      const r = v.keys(t),
        e = r.length
      if (null == n) return !e
      for (let u = Object(n), i = 0; i < e; i++) {
        const o = r[i]
        if (t[o] !== u[o] || !(o in u)) return !1
      }
      return !0
    })
  var N = function(n, t, r, e) {
    if (n === t) return 0 !== n || 1 / n == 1 / t
    if (null == n || null == t) return n === t
    n instanceof v && (n = n._wrapped), t instanceof v && (t = t._wrapped)
    const u = s.call(n)
    if (u !== s.call(t)) return !1
    switch (u) {
      case '[object RegExp]':
      case '[object String]':
        return '' + n == '' + t
      case '[object Number]':
        return +n != +n ? +t != +t : 0 == +n ? 1 / +n == 1 / t : +n == +t
      case '[object Date]':
      case '[object Boolean]':
        return +n == +t
    }
    const i = '[object Array]' === u
    if (!i) {
      if ('object' != typeof n || 'object' != typeof t) return !1
      const o = n.constructor,
        a = t.constructor
      if (
        o !== a &&
        !(
          v.isFunction(o) &&
          o instanceof o &&
          v.isFunction(a) &&
          a instanceof a
        ) &&
        'constructor' in n &&
        'constructor' in t
      )
        return !1
    }
    e = e || []
    for (var c = (r = r || []).length; c--; ) if (r[c] === n) return e[c] === t
    if ((r.push(n), e.push(t), i)) {
      if ((c = n.length) !== t.length) return !1
      for (; c--; ) if (!N(n[c], t[c], r, e)) return !1
    } else {
      let f,
        l = v.keys(n)
      if (((c = l.length), v.keys(t).length !== c)) return !1
      for (; c--; )
        if (((f = l[c]), !v.has(t, f) || !N(n[f], t[f], r, e))) return !1
    }
    return r.pop(), e.pop(), !0
  }
  ;(v.isEqual = function(n, t) {
    return N(n, t)
  }),
    (v.isEmpty = function(n) {
      return (
        null == n ||
        (j(n) && (v.isArray(n) || v.isString(n) || v.isArguments(n))
          ? 0 === n.length
          : 0 === v.keys(n).length)
      )
    }),
    (v.isElement = function(n) {
      return !(!n || 1 !== n.nodeType)
    }),
    (v.isArray =
      f ||
      function(n) {
        return '[object Array]' === s.call(n)
      }),
    (v.isObject = function(n) {
      const t = typeof n
      return 'function' == t || ('object' == t && !!n)
    }),
    v.each(
      ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'],
      function(t) {
        v['is' + t] = function(n) {
          return s.call(n) === '[object ' + t + ']'
        }
      }
    ),
    v.isArguments(arguments) ||
      (v.isArguments = function(n) {
        return v.has(n, 'callee')
      }),
    'function' != typeof /./ &&
      'object' != typeof Int8Array &&
      (v.isFunction = function(n) {
        return 'function' == typeof n || !1
      }),
    (v.isFinite = function(n) {
      return isFinite(n) && !isNaN(parseFloat(n))
    }),
    (v.isNaN = function(n) {
      return v.isNumber(n) && n !== +n
    }),
    (v.isBoolean = function(n) {
      return !0 === n || !1 === n || '[object Boolean]' === s.call(n)
    }),
    (v.isNull = function(n) {
      return null === n
    }),
    (v.isUndefined = function(n) {
      return void 0 === n
    }),
    (v.has = function(n, t) {
      return null != n && a.call(n, t)
    }),
    (v.noConflict = function() {
      return (n._ = t), this
    }),
    (v.identity = function(n) {
      return n
    }),
    (v.constant = function(n) {
      return function() {
        return n
      }
    }),
    (v.noop = function() {}),
    (v.property = b),
    (v.propertyOf = function(t) {
      return null == t
        ? function() {}
        : function(n) {
            return t[n]
          }
    }),
    (v.matcher = v.matches = function(t) {
      return (
        (t = v.extendOwn({}, t)),
        function(n) {
          return v.isMatch(n, t)
        }
      )
    }),
    (v.times = function(n, t, r) {
      const e = Array(Math.max(0, n))
      t = y(t, r, 1)
      for (let u = 0; u < n; u++) e[u] = t(u)
      return e
    }),
    (v.random = function(n, t) {
      return (
        null == t && ((t = n), (n = 0)),
        n + Math.floor(Math.random() * (t - n + 1))
      )
    }),
    (v.now =
      Date.now ||
      function() {
        return new Date().getTime()
      })
  function B(t) {
    function r(n) {
      return t[n]
    }
    const n = '(?:' + v.keys(t).join('|') + ')',
      e = RegExp(n),
      u = RegExp(n, 'g')
    return function(n) {
      return (n = null == n ? '' : '' + n), e.test(n) ? n.replace(u, r) : n
    }
  }
  const T = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;',
    },
    R = v.invert(T)
  ;(v.escape = B(T)),
    (v.unescape = B(R)),
    (v.result = function(n, t, r) {
      let e = null == n ? void 0 : n[t]
      return void 0 === e && (e = r), v.isFunction(e) ? e.call(n) : e
    })
  let q = 0
  ;(v.uniqueId = function(n) {
    const t = ++q + ''
    return n ? n + t : t
  }),
    (v.templateSettings = {
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: /<%=([\s\S]+?)%>/g,
      escape: /<%-([\s\S]+?)%>/g,
    })
  function K(n) {
    return '\\' + D[n]
  }
  var z = /(.)^/,
    D = {
      "'": "'",
      '\\': '\\',
      '\r': 'r',
      '\n': 'n',
      '\u2028': 'u2028',
      '\u2029': 'u2029',
    },
    L = /\\|'|\r|\n|\u2028|\u2029/g
  ;(v.template = function(i, n, t) {
    !n && t && (n = t), (n = v.defaults({}, n, v.templateSettings))
    let r = RegExp(
        [
          (n.escape || z).source,
          (n.interpolate || z).source,
          (n.evaluate || z).source,
        ].join('|') + '|$',
        'g'
      ),
      o = 0,
      a = "__p+='"
    i.replace(r, function(n, t, r, e, u) {
      return (
        (a += i.slice(o, u).replace(L, K)),
        (o = u + n.length),
        t
          ? (a += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'")
          : r
          ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
          : e && (a += "';\n" + e + "\n__p+='"),
        n
      )
    }),
      (a += "';\n"),
      n.variable || (a = 'with(obj||{}){\n' + a + '}\n'),
      (a =
        "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
        a +
        'return __p;\n')
    try {
      var e = new Function(n.variable || 'obj', '_', a)
    } catch (n) {
      throw ((n.source = a), n)
    }
    function u(n) {
      return e.call(this, n, v)
    }
    const c = n.variable || 'obj'
    return (u.source = 'function(' + c + '){\n' + a + '}'), u
  }),
    (v.chain = function(n) {
      const t = v(n)
      return (t._chain = !0), t
    })
  function P(n, t) {
    return n._chain ? v(t).chain() : t
  }
  (v.mixin = function(r) {
    v.each(v.functions(r), function(n) {
      const t = (v[n] = r[n])
      v.prototype[n] = function() {
        const n = [this._wrapped]
        return i.apply(n, arguments), P(this, t.apply(v, n))
      }
    })
  }),
    v.mixin(v),
    v.each(
      ['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'],
      function(t) {
        const r = e[t]
        v.prototype[t] = function() {
          const n = this._wrapped
          return (
            r.apply(n, arguments),
            ('shift' !== t && 'splice' !== t) || 0 !== n.length || delete n[0],
            P(this, n)
          )
        }
      }
    ),
    v.each(['concat', 'join', 'slice'], function(n) {
      const t = e[n]
      v.prototype[n] = function() {
        return P(this, t.apply(this._wrapped, arguments))
      }
    }),
    (v.prototype.value = function() {
      return this._wrapped
    }),
    (v.prototype.valueOf = v.prototype.toJSON = v.prototype.value),
    (v.prototype.toString = function() {
      return '' + this._wrapped
    }),
    'function' == typeof define &&
      define.amd &&
      define('underscore', [], function() {
        return v
      })
}.call(this))
