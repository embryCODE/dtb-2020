!(function(n) {
  const s =
    ('object' == typeof self && self.self === self && self) ||
    ('object' == typeof global && global.global === global && global)
  if ('function' == typeof define && define.amd)
    define(['underscore', 'jquery', 'exports'], function(t, e, i) {
      s.Backbone = n(s, i, t, e)
    })
  else if ('undefined' != typeof exports) {
    let t,
      e = require('underscore')
    try {
      t = require('jquery')
    } catch (t) {}
    n(s, exports, e, t)
  } else s.Backbone = n(s, {}, s._, s.jQuery || s.Zepto || s.ender || s.$)
})(function(t, h, x, e) {
  const i = t.Backbone,
    o = Array.prototype.slice
  ;(h.VERSION = '1.4.0'),
    (h.$ = e),
    (h.noConflict = function() {
      return (t.Backbone = i), this
    }),
    (h.emulateHTTP = !1),
    (h.emulateJSON = !1)
  var a,
    n = (h.Events = {}),
    u = /\s+/,
    l = function(t, e, i, n, s) {
      let r,
        o = 0
      if (i && 'object' == typeof i) {
        void 0 !== n &&
          'context' in s &&
          void 0 === s.context &&
          (s.context = n)
        for (r = x.keys(i); o < r.length; o++) e = l(t, e, r[o], i[r[o]], s)
      } else if (i && u.test(i))
        for (r = i.split(u); o < r.length; o++) e = t(e, r[o], n, s)
      else e = t(e, i, n, s)
      return e
    }
  ;(n.on = function(t, e, i) {
    (this._events = l(s, this._events || {}, t, e, {
      context: i,
      ctx: this,
      listening: a,
    })),
      a &&
        (((this._listeners || (this._listeners = {}))[a.id] = a).interop = !1)
    return this
  }),
    (n.listenTo = function(t, e, i) {
      if (!t) return this
      let n = t._listenId || (t._listenId = x.uniqueId('l')),
        s = this._listeningTo || (this._listeningTo = {}),
        r = (a = s[n])
      r ||
        (this._listenId || (this._listenId = x.uniqueId('l')),
        (r = a = s[n] = new g(this, t)))
      const o = c(t, e, i, this)
      if (((a = void 0), o)) throw o
      return r.interop && r.on(e, i), this
    })
  var s = function(t, e, i, n) {
      if (i) {
        const s = t[e] || (t[e] = []),
          r = n.context,
          o = n.ctx,
          a = n.listening
        a && a.count++,
          s.push({ callback: i, context: r, ctx: r || o, listening: a })
      }
      return t
    },
    c = function(t, e, i, n) {
      try {
        t.on(e, i, n)
      } catch (t) {
        return t
      }
    }
  ;(n.off = function(t, e, i) {
    return (
      this._events &&
        (this._events = l(r, this._events, t, e, {
          context: i,
          listeners: this._listeners,
        })),
      this
    )
  }),
    (n.stopListening = function(t, e, i) {
      const n = this._listeningTo
      if (!n) return this
      for (let s = t ? [t._listenId] : x.keys(n), r = 0; r < s.length; r++) {
        const o = n[s[r]]
        if (!o) break
        o.obj.off(e, i, this), o.interop && o.off(e, i)
      }
      return x.isEmpty(n) && (this._listeningTo = void 0), this
    })
  var r = function(t, e, i, n) {
    if (t) {
      let s,
        r = n.context,
        o = n.listeners,
        a = 0
      if (e || r || i) {
        for (s = e ? [e] : x.keys(t); a < s.length; a++) {
          const h = t[(e = s[a])]
          if (!h) break
          for (var u = [], l = 0; l < h.length; l++) {
            const c = h[l]
            if (
              (i && i !== c.callback && i !== c.callback._callback) ||
              (r && r !== c.context)
            )
              u.push(c)
            else {
              const d = c.listening
              d && d.off(e, i)
            }
          }
          u.length ? (t[e] = u) : delete t[e]
        }
        return t
      }
      for (s = x.keys(o); a < s.length; a++) o[s[a]].cleanup()
    }
  }
  ;(n.once = function(t, e, i) {
    const n = l(d, {}, t, e, this.off.bind(this))
    return 'string' == typeof t && null == i && (e = void 0), this.on(n, e, i)
  }),
    (n.listenToOnce = function(t, e, i) {
      const n = l(d, {}, e, i, this.stopListening.bind(this, t))
      return this.listenTo(t, n)
    })
  var d = function(t, e, i, n) {
    if (i) {
      var s = (t[e] = x.once(function() {
        n(e, s), i.apply(this, arguments)
      }))
      s._callback = i
    }
    return t
  }
  n.trigger = function(t) {
    if (!this._events) return this
    for (
      var e = Math.max(0, arguments.length - 1), i = Array(e), n = 0;
      n < e;
      n++
    )
      i[n] = arguments[n + 1]
    return l(f, this._events, t, void 0, i), this
  }
  var f = function(t, e, i, n) {
      if (t) {
        let s = t[e],
          r = t.all
        s && r && (r = r.slice()), s && p(s, n), r && p(r, [e].concat(n))
      }
      return t
    },
    p = function(t, e) {
      let i,
        n = -1,
        s = t.length,
        r = e[0],
        o = e[1],
        a = e[2]
      switch (e.length) {
        case 0:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx)
          return
        case 1:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r)
          return
        case 2:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, o)
          return
        case 3:
          for (; ++n < s; ) (i = t[n]).callback.call(i.ctx, r, o, a)
          return
        default:
          for (; ++n < s; ) (i = t[n]).callback.apply(i.ctx, e)
          return
      }
    },
    g = function(t, e) {
      (this.id = t._listenId),
        (this.listener = t),
        (this.obj = e),
        (this.interop = !0),
        (this.count = 0),
        (this._events = void 0)
    }
  ;(g.prototype.on = n.on),
    (g.prototype.off = function(t, e) {
      (this.interop
        ? ((this._events = l(r, this._events, t, e, {
            context: void 0,
            listeners: void 0,
          })),
          this._events)
        : (this.count--, 0 !== this.count)) || this.cleanup()
    }),
    (g.prototype.cleanup = function() {
      delete this.listener._listeningTo[this.obj._listenId],
        this.interop || delete this.obj._listeners[this.id]
    }),
    (n.bind = n.on),
    (n.unbind = n.off),
    x.extend(h, n)
  const v = (h.Model = function(t, e) {
    let i = t || {}
    ;(e = e || {}),
      this.preinitialize.apply(this, arguments),
      (this.cid = x.uniqueId(this.cidPrefix)),
      (this.attributes = {}),
      e.collection && (this.collection = e.collection),
      e.parse && (i = this.parse(i, e) || {})
    const n = x.result(this, 'defaults')
    ;(i = x.defaults(x.extend({}, n, i), n)),
      this.set(i, e),
      (this.changed = {}),
      this.initialize.apply(this, arguments)
  })
  x.extend(v.prototype, n, {
    changed: null,
    validationError: null,
    idAttribute: 'id',
    cidPrefix: 'c',
    preinitialize: function() {},
    initialize: function() {},
    toJSON: function(t) {
      return x.clone(this.attributes)
    },
    sync: function() {
      return h.sync.apply(this, arguments)
    },
    get: function(t) {
      return this.attributes[t]
    },
    escape: function(t) {
      return x.escape(this.get(t))
    },
    has: function(t) {
      return null != this.get(t)
    },
    matches: function(t) {
      return !!x.iteratee(t, this)(this.attributes)
    },
    set: function(t, e, i) {
      if (null == t) return this
      let n
      if (
        ('object' == typeof t ? ((n = t), (i = e)) : ((n = {})[t] = e),
        (i = i || {}),
        !this._validate(n, i))
      )
        return !1
      const s = i.unset,
        r = i.silent,
        o = [],
        a = this._changing
      ;(this._changing = !0),
        a ||
          ((this._previousAttributes = x.clone(this.attributes)),
          (this.changed = {}))
      const h = this.attributes,
        u = this.changed,
        l = this._previousAttributes
      for (const c in n)
        (e = n[c]),
          x.isEqual(h[c], e) || o.push(c),
          x.isEqual(l[c], e) ? delete u[c] : (u[c] = e),
          s ? delete h[c] : (h[c] = e)
      if (
        (this.idAttribute in n && (this.id = this.get(this.idAttribute)), !r)
      ) {
        o.length && (this._pending = i)
        for (let d = 0; d < o.length; d++)
          this.trigger('change:' + o[d], this, h[o[d]], i)
      }
      if (a) return this
      if (!r)
        for (; this._pending; )
          (i = this._pending),
            (this._pending = !1),
            this.trigger('change', this, i)
      return (this._pending = !1), (this._changing = !1), this
    },
    unset: function(t, e) {
      return this.set(t, void 0, x.extend({}, e, { unset: !0 }))
    },
    clear: function(t) {
      const e = {}
      for (const i in this.attributes) e[i] = void 0
      return this.set(e, x.extend({}, t, { unset: !0 }))
    },
    hasChanged: function(t) {
      return null == t ? !x.isEmpty(this.changed) : x.has(this.changed, t)
    },
    changedAttributes: function(t) {
      if (!t) return !!this.hasChanged() && x.clone(this.changed)
      let e,
        i = this._changing ? this._previousAttributes : this.attributes,
        n = {}
      for (const s in t) {
        const r = t[s]
        x.isEqual(i[s], r) || ((n[s] = r), (e = !0))
      }
      return !!e && n
    },
    previous: function(t) {
      return null != t && this._previousAttributes
        ? this._previousAttributes[t]
        : null
    },
    previousAttributes: function() {
      return x.clone(this._previousAttributes)
    },
    fetch: function(i) {
      i = x.extend({ parse: !0 }, i)
      const n = this,
        s = i.success
      return (
        (i.success = function(t) {
          const e = i.parse ? n.parse(t, i) : t
          if (!n.set(e, i)) return !1
          s && s.call(i.context, n, t, i), n.trigger('sync', n, t, i)
        }),
        L(this, i),
        this.sync('read', this, i)
      )
    },
    save: function(t, e, i) {
      let n
      null == t || 'object' == typeof t ? ((n = t), (i = e)) : ((n = {})[t] = e)
      const s = (i = x.extend({ validate: !0, parse: !0 }, i)).wait
      if (n && !s) {
        if (!this.set(n, i)) return !1
      } else if (!this._validate(n, i)) return !1
      const r = this,
        o = i.success,
        a = this.attributes
      ;(i.success = function(t) {
        r.attributes = a
        let e = i.parse ? r.parse(t, i) : t
        if ((s && (e = x.extend({}, n, e)), e && !r.set(e, i))) return !1
        o && o.call(i.context, r, t, i), r.trigger('sync', r, t, i)
      }),
        L(this, i),
        n && s && (this.attributes = x.extend({}, a, n))
      const h = this.isNew() ? 'create' : i.patch ? 'patch' : 'update'
      'patch' != h || i.attrs || (i.attrs = n)
      const u = this.sync(h, this, i)
      return (this.attributes = a), u
    },
    destroy: function(e) {
      e = e ? x.clone(e) : {}
      function i() {
        n.stopListening(), n.trigger('destroy', n, n.collection, e)
      }
      var n = this,
        s = e.success,
        r = e.wait,
        t = !(e.success = function(t) {
          r && i(),
            s && s.call(e.context, n, t, e),
            n.isNew() || n.trigger('sync', n, t, e)
        })
      return (
        this.isNew()
          ? x.defer(e.success)
          : (L(this, e), (t = this.sync('delete', this, e))),
        r || i(),
        t
      )
    },
    url: function() {
      const t =
        x.result(this, 'urlRoot') || x.result(this.collection, 'url') || J()
      if (this.isNew()) return t
      const e = this.get(this.idAttribute)
      return t.replace(/[^\/]$/, '$&/') + encodeURIComponent(e)
    },
    parse: function(t, e) {
      return t
    },
    clone: function() {
      return new this.constructor(this.attributes)
    },
    isNew: function() {
      return !this.has(this.idAttribute)
    },
    isValid: function(t) {
      return this._validate({}, x.extend({}, t, { validate: !0 }))
    },
    _validate: function(t, e) {
      if (!e.validate || !this.validate) return !0
      t = x.extend({}, this.attributes, t)
      const i = (this.validationError = this.validate(t, e) || null)
      return (
        !i ||
        (this.trigger('invalid', this, i, x.extend(e, { validationError: i })),
        !1)
      )
    },
  })
  function w(t, e, i) {
    i = Math.min(Math.max(i, 0), t.length)
    let n,
      s = Array(t.length - i),
      r = e.length
    for (n = 0; n < s.length; n++) s[n] = t[n + i]
    for (n = 0; n < r; n++) t[n + i] = e[n]
    for (n = 0; n < s.length; n++) t[n + r + i] = s[n]
  }
  const m = (h.Collection = function(t, e) {
      (e = e || {}),
        this.preinitialize.apply(this, arguments),
        e.model && (this.model = e.model),
        void 0 !== e.comparator && (this.comparator = e.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        t && this.reset(t, x.extend({ silent: !0 }, e))
    }),
    E = { add: !0, remove: !0, merge: !0 },
    _ = { add: !0, remove: !1 }
  x.extend(m.prototype, n, {
    model: v,
    preinitialize: function() {},
    initialize: function() {},
    toJSON: function(e) {
      return this.map(function(t) {
        return t.toJSON(e)
      })
    },
    sync: function() {
      return h.sync.apply(this, arguments)
    },
    add: function(t, e) {
      return this.set(t, x.extend({ merge: !1 }, e, _))
    },
    remove: function(t, e) {
      e = x.extend({}, e)
      const i = !x.isArray(t)
      t = i ? [t] : t.slice()
      const n = this._removeModels(t, e)
      return (
        !e.silent &&
          n.length &&
          ((e.changes = { added: [], merged: [], removed: n }),
          this.trigger('update', this, e)),
        i ? n[0] : n
      )
    },
    set: function(t, e) {
      if (null != t) {
        (e = x.extend({}, E, e)).parse &&
          !this._isModel(t) &&
          (t = this.parse(t, e) || [])
        const i = !x.isArray(t)
        t = i ? [t] : t.slice()
        let n = e.at
        null != n && (n = +n),
          n > this.length && (n = this.length),
          n < 0 && (n += this.length + 1)
        let s,
          r,
          o = [],
          a = [],
          h = [],
          u = [],
          l = {},
          c = e.add,
          d = e.merge,
          f = e.remove,
          p = !1,
          g = this.comparator && null == n && !1 !== e.sort,
          v = x.isString(this.comparator) ? this.comparator : null
        for (r = 0; r < t.length; r++) {
          s = t[r]
          const m = this.get(s)
          if (m) {
            if (d && s !== m) {
              let _ = this._isModel(s) ? s.attributes : s
              e.parse && (_ = m.parse(_, e)),
                m.set(_, e),
                h.push(m),
                g && !p && (p = m.hasChanged(v))
            }
            l[m.cid] || ((l[m.cid] = !0), o.push(m)), (t[r] = m)
          } else
            c &&
              (s = t[r] = this._prepareModel(s, e)) &&
              (a.push(s), this._addReference(s, e), (l[s.cid] = !0), o.push(s))
        }
        if (f) {
          for (r = 0; r < this.length; r++)
            l[(s = this.models[r]).cid] || u.push(s)
          u.length && this._removeModels(u, e)
        }
        let y = !1,
          b = !g && c && f
        if (
          (o.length && b
            ? ((y =
                this.length !== o.length ||
                x.some(this.models, function(t, e) {
                  return t !== o[e]
                })),
              (this.models.length = 0),
              w(this.models, o, 0),
              (this.length = this.models.length))
            : a.length &&
              (g && (p = !0),
              w(this.models, a, null == n ? this.length : n),
              (this.length = this.models.length)),
          p && this.sort({ silent: !0 }),
          !e.silent)
        ) {
          for (r = 0; r < a.length; r++)
            null != n && (e.index = n + r),
              (s = a[r]).trigger('add', s, this, e)
          ;(p || y) && this.trigger('sort', this, e),
            (a.length || u.length || h.length) &&
              ((e.changes = { added: a, removed: u, merged: h }),
              this.trigger('update', this, e))
        }
        return i ? t[0] : t
      }
    },
    reset: function(t, e) {
      e = e ? x.clone(e) : {}
      for (let i = 0; i < this.models.length; i++)
        this._removeReference(this.models[i], e)
      return (
        (e.previousModels = this.models),
        this._reset(),
        (t = this.add(t, x.extend({ silent: !0 }, e))),
        e.silent || this.trigger('reset', this, e),
        t
      )
    },
    push: function(t, e) {
      return this.add(t, x.extend({ at: this.length }, e))
    },
    pop: function(t) {
      const e = this.at(this.length - 1)
      return this.remove(e, t)
    },
    unshift: function(t, e) {
      return this.add(t, x.extend({ at: 0 }, e))
    },
    shift: function(t) {
      const e = this.at(0)
      return this.remove(e, t)
    },
    slice: function() {
      return o.apply(this.models, arguments)
    },
    get: function(t) {
      if (null != t)
        return (
          this._byId[t] ||
          this._byId[this.modelId(this._isModel(t) ? t.attributes : t)] ||
          (t.cid && this._byId[t.cid])
        )
    },
    has: function(t) {
      return null != this.get(t)
    },
    at: function(t) {
      return t < 0 && (t += this.length), this.models[t]
    },
    where: function(t, e) {
      return this[e ? 'find' : 'filter'](t)
    },
    findWhere: function(t) {
      return this.where(t, !0)
    },
    sort: function(t) {
      let e = this.comparator
      if (!e) throw new Error('Cannot sort a set without a comparator')
      t = t || {}
      const i = e.length
      return (
        x.isFunction(e) && (e = e.bind(this)),
        1 === i || x.isString(e)
          ? (this.models = this.sortBy(e))
          : this.models.sort(e),
        t.silent || this.trigger('sort', this, t),
        this
      )
    },
    pluck: function(t) {
      return this.map(t + '')
    },
    fetch: function(i) {
      const n = (i = x.extend({ parse: !0 }, i)).success,
        s = this
      return (
        (i.success = function(t) {
          const e = i.reset ? 'reset' : 'set'
          s[e](t, i),
            n && n.call(i.context, s, t, i),
            s.trigger('sync', s, t, i)
        }),
        L(this, i),
        this.sync('read', this, i)
      )
    },
    create: function(t, e) {
      const n = (e = e ? x.clone(e) : {}).wait
      if (!(t = this._prepareModel(t, e))) return !1
      n || this.add(t, e)
      const s = this,
        r = e.success
      return (
        (e.success = function(t, e, i) {
          n && s.add(t, i), r && r.call(i.context, t, e, i)
        }),
        t.save(null, e),
        t
      )
    },
    parse: function(t, e) {
      return t
    },
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator,
      })
    },
    modelId: function(t) {
      return t[this.model.prototype.idAttribute || 'id']
    },
    values: function() {
      return new b(this, k)
    },
    keys: function() {
      return new b(this, I)
    },
    entries: function() {
      return new b(this, S)
    },
    _reset: function() {
      (this.length = 0), (this.models = []), (this._byId = {})
    },
    _prepareModel: function(t, e) {
      if (this._isModel(t)) return t.collection || (t.collection = this), t
      const i = new ((e = e ? x.clone(e) : {}).collection = this).model(t, e)
      return i.validationError
        ? (this.trigger('invalid', this, i.validationError, e), !1)
        : i
    },
    _removeModels: function(t, e) {
      for (var i = [], n = 0; n < t.length; n++) {
        const s = this.get(t[n])
        if (s) {
          const r = this.indexOf(s)
          this.models.splice(r, 1), this.length--, delete this._byId[s.cid]
          const o = this.modelId(s.attributes)
          null != o && delete this._byId[o],
            e.silent || ((e.index = r), s.trigger('remove', s, this, e)),
            i.push(s),
            this._removeReference(s, e)
        }
      }
      return i
    },
    _isModel: function(t) {
      return t instanceof v
    },
    _addReference: function(t, e) {
      this._byId[t.cid] = t
      const i = this.modelId(t.attributes)
      null != i && (this._byId[i] = t), t.on('all', this._onModelEvent, this)
    },
    _removeReference: function(t, e) {
      delete this._byId[t.cid]
      const i = this.modelId(t.attributes)
      null != i && delete this._byId[i],
        this === t.collection && delete t.collection,
        t.off('all', this._onModelEvent, this)
    },
    _onModelEvent: function(t, e, i, n) {
      if (e) {
        if (('add' === t || 'remove' === t) && i !== this) return
        if (('destroy' === t && this.remove(e, n), 'change' === t)) {
          const s = this.modelId(e.previousAttributes()),
            r = this.modelId(e.attributes)
          s !== r &&
            (null != s && delete this._byId[s],
            null != r && (this._byId[r] = e))
        }
      }
      this.trigger.apply(this, arguments)
    },
  })
  const y = 'function' == typeof Symbol && Symbol.iterator
  y && (m.prototype[y] = m.prototype.values)
  var b = function(t, e) {
      (this._collection = t), (this._kind = e), (this._index = 0)
    },
    k = 1,
    I = 2,
    S = 3
  y &&
    (b.prototype[y] = function() {
      return this
    }),
    (b.prototype.next = function() {
      if (this._collection) {
        if (this._index < this._collection.length) {
          let t,
            e = this._collection.at(this._index)
          if ((this._index++, this._kind === k)) t = e
          else {
            const i = this._collection.modelId(e.attributes)
            t = this._kind === I ? i : [i, e]
          }
          return { value: t, done: !1 }
        }
        this._collection = void 0
      }
      return { value: void 0, done: !0 }
    })
  var T = (h.View = function(t) {
      (this.cid = x.uniqueId('view')),
        this.preinitialize.apply(this, arguments),
        x.extend(this, x.pick(t, H)),
        this._ensureElement(),
        this.initialize.apply(this, arguments)
    }),
    P = /^(\S+)\s*(.*)$/,
    H = [
      'model',
      'collection',
      'el',
      'id',
      'attributes',
      'className',
      'tagName',
      'events',
    ]
  x.extend(T.prototype, n, {
    tagName: 'div',
    $: function(t) {
      return this.$el.find(t)
    },
    preinitialize: function() {},
    initialize: function() {},
    render: function() {
      return this
    },
    remove: function() {
      return this._removeElement(), this.stopListening(), this
    },
    _removeElement: function() {
      this.$el.remove()
    },
    setElement: function(t) {
      return (
        this.undelegateEvents(),
        this._setElement(t),
        this.delegateEvents(),
        this
      )
    },
    _setElement: function(t) {
      (this.$el = t instanceof h.$ ? t : h.$(t)), (this.el = this.$el[0])
    },
    delegateEvents: function(t) {
      if (!(t = t || x.result(this, 'events'))) return this
      for (const e in (this.undelegateEvents(), t)) {
        let i = t[e]
        if ((x.isFunction(i) || (i = this[i]), i)) {
          const n = e.match(P)
          this.delegate(n[1], n[2], i.bind(this))
        }
      }
      return this
    },
    delegate: function(t, e, i) {
      return this.$el.on(t + '.delegateEvents' + this.cid, e, i), this
    },
    undelegateEvents: function() {
      return this.$el && this.$el.off('.delegateEvents' + this.cid), this
    },
    undelegate: function(t, e, i) {
      return this.$el.off(t + '.delegateEvents' + this.cid, e, i), this
    },
    _createElement: function(t) {
      return document.createElement(t)
    },
    _ensureElement: function() {
      if (this.el) this.setElement(x.result(this, 'el'))
      else {
        const t = x.extend({}, x.result(this, 'attributes'))
        this.id && (t.id = x.result(this, 'id')),
          this.className && (t.class = x.result(this, 'className')),
          this.setElement(this._createElement(x.result(this, 'tagName'))),
          this._setAttributes(t)
      }
    },
    _setAttributes: function(t) {
      this.$el.attr(t)
    },
  })
  function $(i, n, t, s) {
    x.each(t, function(t, e) {
      n[e] &&
        (i.prototype[e] = (function(n, t, s, r) {
          switch (t) {
            case 1:
              return function() {
                return n[s](this[r])
              }
            case 2:
              return function(t) {
                return n[s](this[r], t)
              }
            case 3:
              return function(t, e) {
                return n[s](this[r], A(t, this), e)
              }
            case 4:
              return function(t, e, i) {
                return n[s](this[r], A(t, this), e, i)
              }
            default:
              return function() {
                const t = o.call(arguments)
                return t.unshift(this[r]), n[s].apply(n, t)
              }
          }
        })(n, t, e, s))
    })
  }
  var A = function(e, t) {
      return x.isFunction(e)
        ? e
        : x.isObject(e) && !t._isModel(e)
        ? C(e)
        : x.isString(e)
        ? function(t) {
            return t.get(e)
          }
        : e
    },
    C = function(t) {
      const e = x.matches(t)
      return function(t) {
        return e(t.attributes)
      }
    }
  x.each(
    [
      [
        m,
        {
          forEach: 3,
          each: 3,
          map: 3,
          collect: 3,
          reduce: 0,
          foldl: 0,
          inject: 0,
          reduceRight: 0,
          foldr: 0,
          find: 3,
          detect: 3,
          filter: 3,
          select: 3,
          reject: 3,
          every: 3,
          all: 3,
          some: 3,
          any: 3,
          include: 3,
          includes: 3,
          contains: 3,
          invoke: 0,
          max: 3,
          min: 3,
          toArray: 1,
          size: 1,
          first: 3,
          head: 3,
          take: 3,
          initial: 3,
          rest: 3,
          tail: 3,
          drop: 3,
          last: 3,
          without: 0,
          difference: 0,
          indexOf: 3,
          shuffle: 1,
          lastIndexOf: 3,
          isEmpty: 1,
          chain: 1,
          sample: 3,
          partition: 3,
          groupBy: 3,
          countBy: 3,
          sortBy: 3,
          indexBy: 3,
          findIndex: 3,
          findLastIndex: 3,
        },
        'models',
      ],
      [
        v,
        {
          keys: 1,
          values: 1,
          pairs: 1,
          invert: 1,
          pick: 0,
          omit: 0,
          chain: 1,
          isEmpty: 1,
        },
        'attributes',
      ],
    ],
    function(t) {
      const i = t[0],
        e = t[1],
        n = t[2]
      ;(i.mixin = function(t) {
        const e = x.reduce(
          x.functions(t),
          function(t, e) {
            return (t[e] = 0), t
          },
          {}
        )
        $(i, t, e, n)
      }),
        $(i, x, e, n)
    }
  ),
    (h.sync = function(t, e, n) {
      const i = R[t]
      x.defaults((n = n || {}), {
        emulateHTTP: h.emulateHTTP,
        emulateJSON: h.emulateJSON,
      })
      const s = { type: i, dataType: 'json' }
      if (
        (n.url || (s.url = x.result(e, 'url') || J()),
        null != n.data ||
          !e ||
          ('create' !== t && 'update' !== t && 'patch' !== t) ||
          ((s.contentType = 'application/json'),
          (s.data = JSON.stringify(n.attrs || e.toJSON(n)))),
        n.emulateJSON &&
          ((s.contentType = 'application/x-www-form-urlencoded'),
          (s.data = s.data ? { model: s.data } : {})),
        n.emulateHTTP && ('PUT' === i || 'DELETE' === i || 'PATCH' === i))
      ) {
        (s.type = 'POST'), n.emulateJSON && (s.data._method = i)
        const r = n.beforeSend
        n.beforeSend = function(t) {
          if ((t.setRequestHeader('X-HTTP-Method-Override', i), r))
            return r.apply(this, arguments)
        }
      }
      'GET' === s.type || n.emulateJSON || (s.processData = !1)
      const o = n.error
      n.error = function(t, e, i) {
        (n.textStatus = e),
          (n.errorThrown = i),
          o && o.call(n.context, t, e, i)
      }
      const a = (n.xhr = h.ajax(x.extend(s, n)))
      return e.trigger('request', e, a, n), a
    })
  var R = {
    create: 'POST',
    update: 'PUT',
    patch: 'PATCH',
    delete: 'DELETE',
    read: 'GET',
  }
  h.ajax = function() {
    return h.$.ajax.apply(h.$, arguments)
  }
  const M = (h.Router = function(t) {
      (t = t || {}),
        this.preinitialize.apply(this, arguments),
        t.routes && (this.routes = t.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }),
    N = /\((.*?)\)/g,
    j = /(\(\?)?:\w+/g,
    O = /\*\w+/g,
    U = /[\-{}\[\]+?.,\\\^$|#\s]/g
  x.extend(M.prototype, n, {
    preinitialize: function() {},
    initialize: function() {},
    route: function(i, n, s) {
      x.isRegExp(i) || (i = this._routeToRegExp(i)),
        x.isFunction(n) && ((s = n), (n = '')),
        (s = s || this[n])
      const r = this
      return (
        h.history.route(i, function(t) {
          const e = r._extractParameters(i, t)
          !1 !== r.execute(s, e, n) &&
            (r.trigger.apply(r, ['route:' + n].concat(e)),
            r.trigger('route', n, e),
            h.history.trigger('route', r, n, e))
        }),
        this
      )
    },
    execute: function(t, e, i) {
      t && t.apply(this, e)
    },
    navigate: function(t, e) {
      return h.history.navigate(t, e), this
    },
    _bindRoutes: function() {
      if (this.routes) {
        this.routes = x.result(this, 'routes')
        for (var t, e = x.keys(this.routes); null != (t = e.pop()); )
          this.route(t, this.routes[t])
      }
    },
    _routeToRegExp: function(t) {
      return (
        (t = t
          .replace(U, '\\$&')
          .replace(N, '(?:$1)?')
          .replace(j, function(t, e) {
            return e ? t : '([^/?]+)'
          })
          .replace(O, '([^?]*?)')),
        new RegExp('^' + t + '(?:\\?([\\s\\S]*))?$')
      )
    },
    _extractParameters: function(t, e) {
      const i = t.exec(e).slice(1)
      return x.map(i, function(t, e) {
        return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
      })
    },
  })
  const z = (h.History = function() {
      (this.handlers = []),
        (this.checkUrl = this.checkUrl.bind(this)),
        'undefined' != typeof window &&
          ((this.location = window.location), (this.history = window.history))
    }),
    q = /^[#\/]|\s+$/g,
    F = /^\/+|\/+$/g,
    B = /#.*$/
  ;(z.started = !1),
    x.extend(z.prototype, n, {
      interval: 50,
      atRoot: function() {
        return (
          this.location.pathname.replace(/[^\/]$/, '$&/') === this.root &&
          !this.getSearch()
        )
      },
      matchRoot: function() {
        return (
          this.decodeFragment(this.location.pathname).slice(
            0,
            this.root.length - 1
          ) +
            '/' ===
          this.root
        )
      },
      decodeFragment: function(t) {
        return decodeURI(t.replace(/%25/g, '%2525'))
      },
      getSearch: function() {
        const t = this.location.href.replace(/#.*/, '').match(/\?.+/)
        return t ? t[0] : ''
      },
      getHash: function(t) {
        const e = (t || this).location.href.match(/#(.*)$/)
        return e ? e[1] : ''
      },
      getPath: function() {
        const t = this.decodeFragment(
          this.location.pathname + this.getSearch()
        ).slice(this.root.length - 1)
        return '/' === t.charAt(0) ? t.slice(1) : t
      },
      getFragment: function(t) {
        return (
          null == t &&
            (t =
              this._usePushState || !this._wantsHashChange
                ? this.getPath()
                : this.getHash()),
          t.replace(q, '')
        )
      },
      start: function(t) {
        if (z.started)
          throw new Error('Backbone.history has already been started')
        if (
          ((z.started = !0),
          (this.options = x.extend({ root: '/' }, this.options, t)),
          (this.root = this.options.root),
          (this._wantsHashChange = !1 !== this.options.hashChange),
          (this._hasHashChange =
            'onhashchange' in window &&
            (void 0 === document.documentMode || 7 < document.documentMode)),
          (this._useHashChange = this._wantsHashChange && this._hasHashChange),
          (this._wantsPushState = !!this.options.pushState),
          (this._hasPushState = !(!this.history || !this.history.pushState)),
          (this._usePushState = this._wantsPushState && this._hasPushState),
          (this.fragment = this.getFragment()),
          (this.root = ('/' + this.root + '/').replace(F, '/')),
          this._wantsHashChange && this._wantsPushState)
        ) {
          if (!this._hasPushState && !this.atRoot()) {
            const e = this.root.slice(0, -1) || '/'
            return this.location.replace(e + '#' + this.getPath()), !0
          }
          this._hasPushState &&
            this.atRoot() &&
            this.navigate(this.getHash(), { replace: !0 })
        }
        if (
          !this._hasHashChange &&
          this._wantsHashChange &&
          !this._usePushState
        ) {
          (this.iframe = document.createElement('iframe')),
            (this.iframe.src = 'javascript:0'),
            (this.iframe.style.display = 'none'),
            (this.iframe.tabIndex = -1)
          const i = document.body,
            n = i.insertBefore(this.iframe, i.firstChild).contentWindow
          n.document.open(),
            n.document.close(),
            (n.location.hash = '#' + this.fragment)
        }
        const s =
          window.addEventListener ||
          function(t, e) {
            return attachEvent('on' + t, e)
          }
        if (
          (this._usePushState
            ? s('popstate', this.checkUrl, !1)
            : this._useHashChange && !this.iframe
            ? s('hashchange', this.checkUrl, !1)
            : this._wantsHashChange &&
              (this._checkUrlInterval = setInterval(
                this.checkUrl,
                this.interval
              )),
          !this.options.silent)
        )
          return this.loadUrl()
      },
      stop: function() {
        const t =
          window.removeEventListener ||
          function(t, e) {
            return detachEvent('on' + t, e)
          }
        this._usePushState
          ? t('popstate', this.checkUrl, !1)
          : this._useHashChange &&
            !this.iframe &&
            t('hashchange', this.checkUrl, !1),
          this.iframe &&
            (document.body.removeChild(this.iframe), (this.iframe = null)),
          this._checkUrlInterval && clearInterval(this._checkUrlInterval),
          (z.started = !1)
      },
      route: function(t, e) {
        this.handlers.unshift({ route: t, callback: e })
      },
      checkUrl: function(t) {
        let e = this.getFragment()
        if (
          (e === this.fragment &&
            this.iframe &&
            (e = this.getHash(this.iframe.contentWindow)),
          e === this.fragment)
        )
          return !1
        this.iframe && this.navigate(e), this.loadUrl()
      },
      loadUrl: function(e) {
        return (
          !!this.matchRoot() &&
          ((e = this.fragment = this.getFragment(e)),
          x.some(this.handlers, function(t) {
            if (t.route.test(e)) return t.callback(e), !0
          }))
        )
      },
      navigate: function(t, e) {
        if (!z.started) return !1
        ;(e && !0 !== e) || (e = { trigger: !!e }),
          (t = this.getFragment(t || ''))
        let i = this.root
        ;('' !== t && '?' !== t.charAt(0)) || (i = i.slice(0, -1) || '/')
        const n = i + t
        t = t.replace(B, '')
        const s = this.decodeFragment(t)
        if (this.fragment !== s) {
          if (((this.fragment = s), this._usePushState))
            this.history[e.replace ? 'replaceState' : 'pushState'](
              {},
              document.title,
              n
            )
          else {
            if (!this._wantsHashChange) return this.location.assign(n)
            if (
              (this._updateHash(this.location, t, e.replace),
              this.iframe && t !== this.getHash(this.iframe.contentWindow))
            ) {
              const r = this.iframe.contentWindow
              e.replace || (r.document.open(), r.document.close()),
                this._updateHash(r.location, t, e.replace)
            }
          }
          return e.trigger ? this.loadUrl(t) : void 0
        }
      },
      _updateHash: function(t, e, i) {
        if (i) {
          const n = t.href.replace(/(javascript:|#).*$/, '')
          t.replace(n + '#' + e)
        } else t.hash = '#' + e
      },
    }),
    (h.history = new z())
  v.extend = m.extend = M.extend = T.extend = z.extend = function(t, e) {
    let i,
      n = this
    return (
      (i =
        t && x.has(t, 'constructor')
          ? t.constructor
          : function() {
              return n.apply(this, arguments)
            }),
      x.extend(i, n, e),
      (i.prototype = x.create(n.prototype, t)),
      ((i.prototype.constructor = i).__super__ = n.prototype),
      i
    )
  }
  var J = function() {
      throw new Error('A "url" property or function must be specified')
    },
    L = function(e, i) {
      const n = i.error
      i.error = function(t) {
        n && n.call(i.context, e, t, i), e.trigger('error', e, t, i)
      }
    }
  return h
})
