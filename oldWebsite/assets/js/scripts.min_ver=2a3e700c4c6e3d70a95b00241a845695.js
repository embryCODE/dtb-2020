/* Bootstrap.js 6.5.0 */
+(function(a) {
  'use strict'
  function b() {
    const a = document.createElement('bootstrap'),
      b = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend',
      }
    for (const c in b) if (void 0 !== a.style[c]) return { end: b[c] }
  }
  (a.fn.emulateTransitionEnd = function(b) {
    let c = !1,
      d = this
    a(this).one(a.support.transition.end, function() {
      c = !0
    })
    const e = function() {
      c || a(d).trigger(a.support.transition.end)
    }
    return setTimeout(e, b), this
  }),
    a(function() {
      a.support.transition = b()
    })
})(window.jQuery),
  +(function(a) {
    'use strict'
    const b = '[data-dismiss="alert"]',
      c = function(c) {
        a(c).on('click', b, this.close)
      }
    c.prototype.close = function(b) {
      function c() {
        f.trigger('closed.bs.alert').remove()
      }
      let d = a(this),
        e = d.attr('data-target')
      e || ((e = d.attr('href')), (e = e && e.replace(/.*(?=#[^\s]*$)/, '')))
      var f = a(e)
      b && b.preventDefault(),
        f.length || (f = d.hasClass('alert') ? d : d.parent()),
        f.trigger((b = a.Event('close.bs.alert'))),
        b.isDefaultPrevented() ||
          (f.removeClass('in'),
          a.support.transition && f.hasClass('fade')
            ? f.one(a.support.transition.end, c).emulateTransitionEnd(150)
            : c())
    }
    const d = a.fn.alert
    ;(a.fn.alert = function(b) {
      return this.each(function() {
        let d = a(this),
          e = d.data('bs.alert')
        e || d.data('bs.alert', (e = new c(this))),
          'string' == typeof b && e[b].call(d)
      })
    }),
      (a.fn.alert.Constructor = c),
      (a.fn.alert.noConflict = function() {
        return (a.fn.alert = d), this
      }),
      a(document).on('click.bs.alert.data-api', b, c.prototype.close)
  })(window.jQuery),
  +(function(a) {
    'use strict'
    var b = function(c, d) {
      (this.$element = a(c)), (this.options = a.extend({}, b.DEFAULTS, d))
    }
    ;(b.DEFAULTS = { loadingText: 'loading...' }),
      (b.prototype.setState = function(a) {
        const b = 'disabled',
          c = this.$element,
          d = c.is('input') ? 'val' : 'html',
          e = c.data()
        ;(a += 'Text'),
          e.resetText || c.data('resetText', c[d]()),
          c[d](e[a] || this.options[a]),
          setTimeout(function() {
            'loadingText' == a
              ? c.addClass(b).attr(b, b)
              : c.removeClass(b).removeAttr(b)
          }, 0)
      }),
      (b.prototype.toggle = function() {
        const a = this.$element.closest('[data-toggle="buttons"]')
        if (a.length) {
          const b = this.$element
            .find('input')
            .prop('checked', !this.$element.hasClass('active'))
            .trigger('change')
          'radio' === b.prop('type') && a.find('.active').removeClass('active')
        }
        this.$element.toggleClass('active')
      })
    const c = a.fn.button
    ;(a.fn.button = function(c) {
      return this.each(function() {
        let d = a(this),
          e = d.data('bs.button'),
          f = 'object' == typeof c && c
        e || d.data('bs.button', (e = new b(this, f))),
          'toggle' == c ? e.toggle() : c && e.setState(c)
      })
    }),
      (a.fn.button.Constructor = b),
      (a.fn.button.noConflict = function() {
        return (a.fn.button = c), this
      }),
      a(document).on(
        'click.bs.button.data-api',
        '[data-toggle^=button]',
        function(b) {
          let c = a(b.target)
          c.hasClass('btn') || (c = c.closest('.btn')),
            c.button('toggle'),
            b.preventDefault()
        }
      )
  })(window.jQuery),
  +(function(a) {
    'use strict'
    const b = function(b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find('.carousel-indicators')),
        (this.options = c),
        (this.paused = this.sliding = this.interval = this.$active = this.$items = null),
        'hover' == this.options.pause &&
          this.$element
            .on('mouseenter', a.proxy(this.pause, this))
            .on('mouseleave', a.proxy(this.cycle, this))
    }
    ;(b.DEFAULTS = { interval: 5e3, pause: 'hover', wrap: !0 }),
      (b.prototype.cycle = function(b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        )
      }),
      (b.prototype.getActiveIndex = function() {
        return (
          (this.$active = this.$element.find('.item.active')),
          (this.$items = this.$active.parent().children()),
          this.$items.index(this.$active)
        )
      }),
      (b.prototype.to = function(b) {
        const c = this,
          d = this.getActiveIndex()
        return b > this.$items.length - 1 || 0 > b
          ? void 0
          : this.sliding
          ? this.$element.one('slid', function() {
              c.to(b)
            })
          : d == b
          ? this.pause().cycle()
          : this.slide(b > d ? 'next' : 'prev', a(this.$items[b]))
      }),
      (b.prototype.pause = function(b) {
        return (
          b || (this.paused = !0),
          this.$element.find('.next, .prev').length &&
            a.support.transition.end &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        )
      }),
      (b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide('next')
      }),
      (b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide('prev')
      }),
      (b.prototype.slide = function(b, c) {
        let d = this.$element.find('.item.active'),
          e = c || d[b](),
          f = this.interval,
          g = 'next' == b ? 'left' : 'right',
          h = 'next' == b ? 'first' : 'last',
          i = this
        if (!e.length) {
          if (!this.options.wrap) return
          e = this.$element.find('.item')[h]()
        }
        (this.sliding = !0), f && this.pause()
        const j = a.Event('slide.bs.carousel', {
          relatedTarget: e[0],
          direction: g,
        })
        if (!e.hasClass('active')) {
          if (
            (this.$indicators.length &&
              (this.$indicators.find('.active').removeClass('active'),
              this.$element.one('slid', function() {
                const b = a(i.$indicators.children()[i.getActiveIndex()])
                b && b.addClass('active')
              })),
            a.support.transition && this.$element.hasClass('slide'))
          ) {
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return
            e.addClass(b),
              e[0].offsetWidth,
              d.addClass(g),
              e.addClass(g),
              d
                .one(a.support.transition.end, function() {
                  e.removeClass([b, g].join(' ')).addClass('active'),
                    d.removeClass(['active', g].join(' ')),
                    (i.sliding = !1),
                    setTimeout(function() {
                      i.$element.trigger('slid')
                    }, 0)
                })
                .emulateTransitionEnd(600)
          } else {
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return
            d.removeClass('active'),
              e.addClass('active'),
              (this.sliding = !1),
              this.$element.trigger('slid')
          }
          return f && this.cycle(), this
        }
      })
    const c = a.fn.carousel
    ;(a.fn.carousel = function(c) {
      return this.each(function() {
        let d = a(this),
          e = d.data('bs.carousel'),
          f = a.extend({}, b.DEFAULTS, d.data(), 'object' == typeof c && c),
          g = 'string' == typeof c ? c : f.slide
        e || d.data('bs.carousel', (e = new b(this, f))),
          'number' == typeof c
            ? e.to(c)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle()
      })
    }),
      (a.fn.carousel.Constructor = b),
      (a.fn.carousel.noConflict = function() {
        return (a.fn.carousel = c), this
      }),
      a(document).on(
        'click.bs.carousel.data-api',
        '[data-slide], [data-slide-to]',
        function(b) {
          let c,
            d = a(this),
            e = a(
              d.attr('data-target') ||
                ((c = d.attr('href')) && c.replace(/.*(?=#[^\s]+$)/, ''))
            ),
            f = a.extend({}, e.data(), d.data()),
            g = d.attr('data-slide-to')
          g && (f.interval = !1),
            e.carousel(f),
            (g = d.attr('data-slide-to')) && e.data('bs.carousel').to(g),
            b.preventDefault()
        }
      ),
      a(window).on('load', function() {
        a('[data-ride="carousel"]').each(function() {
          const b = a(this)
          b.carousel(b.data())
        })
      })
  })(window.jQuery),
  +(function(a) {
    'use strict'
    var b = function(c, d) {
      (this.$element = a(c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.transitioning = null),
        this.options.parent && (this.$parent = a(this.options.parent)),
        this.options.toggle && this.toggle()
    }
    ;(b.DEFAULTS = { toggle: !0 }),
      (b.prototype.dimension = function() {
        const a = this.$element.hasClass('width')
        return a ? 'width' : 'height'
      }),
      (b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass('in')) {
          const b = a.Event('show.bs.collapse')
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            const c = this.$parent && this.$parent.find('> .panel > .in')
            if (c && c.length) {
              const d = c.data('bs.collapse')
              if (d && d.transitioning) return
              c.collapse('hide'), d || c.data('bs.collapse', null)
            }
            const e = this.dimension()
            this.$element
              .removeClass('collapse')
              .addClass('collapsing')
              [e](0),
              (this.transitioning = 1)
            const f = function() {
              this.$element
                .removeClass('collapsing')
                .addClass('in')
                [e]('auto'),
                (this.transitioning = 0),
                this.$element.trigger('shown.bs.collapse')
            }
            if (!a.support.transition) return f.call(this)
            const g = a.camelCase(['scroll', e].join('-'))
            this.$element
              .one(a.support.transition.end, a.proxy(f, this))
              .emulateTransitionEnd(350)
              [e](this.$element[0][g])
          }
        }
      }),
      (b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass('in')) {
          const b = a.Event('hide.bs.collapse')
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            const c = this.dimension()
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass('collapsing')
                .removeClass('collapse')
                .removeClass('in'),
              (this.transitioning = 1)
            const d = function() {
              (this.transitioning = 0),
                this.$element
                  .trigger('hidden.bs.collapse')
                  .removeClass('collapsing')
                  .addClass('collapse')
            }
            return a.support.transition
              ? (this.$element[c](0)
                  .one(a.support.transition.end, a.proxy(d, this))
                  .emulateTransitionEnd(350),
                void 0)
              : d.call(this)
          }
        }
      }),
      (b.prototype.toggle = function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
      })
    const c = a.fn.collapse
    ;(a.fn.collapse = function(c) {
      return this.each(function() {
        let d = a(this),
          e = d.data('bs.collapse'),
          f = a.extend({}, b.DEFAULTS, d.data(), 'object' == typeof c && c)
        e || d.data('bs.collapse', (e = new b(this, f))),
          'string' == typeof c && e[c]()
      })
    }),
      (a.fn.collapse.Constructor = b),
      (a.fn.collapse.noConflict = function() {
        return (a.fn.collapse = c), this
      }),
      a(document).on(
        'click.bs.collapse.data-api',
        '[data-toggle=collapse]',
        function(b) {
          let c,
            d = a(this),
            e =
              d.attr('data-target') ||
              b.preventDefault() ||
              ((c = d.attr('href')) && c.replace(/.*(?=#[^\s]+$)/, '')),
            f = a(e),
            g = f.data('bs.collapse'),
            h = g ? 'toggle' : d.data(),
            i = d.attr('data-parent'),
            j = i && a(i)
          ;(g && g.transitioning) ||
            (j &&
              j
                .find('[data-toggle=collapse][data-parent="' + i + '"]')
                .not(d)
                .addClass('collapsed'),
            d[f.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')),
            f.collapse(h)
        }
      )
  })(window.jQuery),
  +(function(a) {
    'use strict'
    function b() {
      a(d).remove(),
        a(e).each(function(b) {
          const d = c(a(this))
          d.hasClass('open') &&
            (d.trigger((b = a.Event('hide.bs.dropdown'))),
            b.isDefaultPrevented() ||
              d.removeClass('open').trigger('hidden.bs.dropdown'))
        })
    }
    function c(b) {
      let c = b.attr('data-target')
      c ||
        ((c = b.attr('href')),
        (c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, '')))
      const d = c && a(c)
      return d && d.length ? d : b.parent()
    }
    var d = '.dropdown-backdrop',
      e = '[data-toggle=dropdown]',
      f = function(b) {
        a(b).on('click.bs.dropdown', this.toggle)
      }
    ;(f.prototype.toggle = function(d) {
      const e = a(this)
      if (!e.is('.disabled, :disabled')) {
        const f = c(e),
          g = f.hasClass('open')
        if ((b(), !g)) {
          if (
            ('ontouchstart' in document.documentElement &&
              !f.closest('.navbar-nav').length &&
              a('<div class="dropdown-backdrop"/>')
                .insertAfter(a(this))
                .on('click', b),
            f.trigger((d = a.Event('show.bs.dropdown'))),
            d.isDefaultPrevented())
          )
            return
          f.toggleClass('open').trigger('shown.bs.dropdown'), e.focus()
        }
        return !1
      }
    }),
      (f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
          const d = a(this)
          if (
            (b.preventDefault(),
            b.stopPropagation(),
            !d.is('.disabled, :disabled'))
          ) {
            const f = c(d),
              g = f.hasClass('open')
            if (!g || (g && 27 == b.keyCode))
              return 27 == b.which && f.find(e).focus(), d.click()
            const h = a('[role=menu] li:not(.divider):visible a', f)
            if (h.length) {
              let i = h.index(h.filter(':focus'))
              38 == b.keyCode && i > 0 && i--,
                40 == b.keyCode && i < h.length - 1 && i++,
                ~i || (i = 0),
                h.eq(i).focus()
            }
          }
        }
      })
    const g = a.fn.dropdown
    ;(a.fn.dropdown = function(b) {
      return this.each(function() {
        let c = a(this),
          d = c.data('dropdown')
        d || c.data('dropdown', (d = new f(this))),
          'string' == typeof b && d[b].call(c)
      })
    }),
      (a.fn.dropdown.Constructor = f),
      (a.fn.dropdown.noConflict = function() {
        return (a.fn.dropdown = g), this
      }),
      a(document)
        .on('click.bs.dropdown.data-api', b)
        .on('click.bs.dropdown.data-api', '.dropdown form', function(a) {
          a.stopPropagation()
        })
        .on('click.bs.dropdown.data-api', e, f.prototype.toggle)
        .on(
          'keydown.bs.dropdown.data-api',
          e + ', [role=menu]',
          f.prototype.keydown
        )
  })(window.jQuery),
  +(function(a) {
    'use strict'
    const b = function(b, c) {
      (this.options = c),
        (this.$element = a(b)),
        (this.$backdrop = this.isShown = null),
        this.options.remote && this.$element.load(this.options.remote)
    }
    ;(b.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (b.prototype.toggle = function(a) {
        return this[this.isShown ? 'hide' : 'show'](a)
      }),
      (b.prototype.show = function(b) {
        const c = this,
          d = a.Event('show.bs.modal', { relatedTarget: b })
        this.$element.trigger(d),
          this.isShown ||
            d.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.escape(),
            this.$element.on(
              'click.dismiss.modal',
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.backdrop(function() {
              const d = a.support.transition && c.$element.hasClass('fade')
              c.$element.parent().length || c.$element.appendTo(document.body),
                c.$element.show(),
                d && c.$element[0].offsetWidth,
                c.$element.addClass('in').attr('aria-hidden', !1),
                c.enforceFocus()
              const e = a.Event('shown.bs.modal', { relatedTarget: b })
              d
                ? c.$element
                    .find('.modal-dialog')
                    .one(a.support.transition.end, function() {
                      c.$element.focus().trigger(e)
                    })
                    .emulateTransitionEnd(300)
                : c.$element.focus().trigger(e)
            }))
      }),
      (b.prototype.hide = function(b) {
        b && b.preventDefault(),
          (b = a.Event('hide.bs.modal')),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            a(document).off('focusin.bs.modal'),
            this.$element
              .removeClass('in')
              .attr('aria-hidden', !0)
              .off('click.dismiss.modal'),
            a.support.transition && this.$element.hasClass('fade')
              ? this.$element
                  .one(a.support.transition.end, a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(300)
              : this.hideModal())
      }),
      (b.prototype.enforceFocus = function() {
        a(document)
          .off('focusin.bs.modal')
          .on(
            'focusin.bs.modal',
            a.proxy(function(a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.focus()
            }, this)
          )
      }),
      (b.prototype.escape = function() {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              'keyup.dismiss.bs.modal',
              a.proxy(function(a) {
                27 == a.which && this.hide()
              }, this)
            )
          : this.isShown || this.$element.off('keyup.dismiss.bs.modal')
      }),
      (b.prototype.hideModal = function() {
        const a = this
        this.$element.hide(),
          this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger('hidden.bs.modal')
          })
      }),
      (b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null)
      }),
      (b.prototype.backdrop = function(b) {
        const c = this.$element.hasClass('fade') ? 'fade' : ''
        if (this.isShown && this.options.backdrop) {
          const d = a.support.transition && c
          if (
            ((this.$backdrop = a(
              '<div class="modal-backdrop ' + c + '" />'
            ).appendTo(document.body)),
            this.$element.on(
              'click.dismiss.modal',
              a.proxy(function(a) {
                a.target === a.currentTarget &&
                  ('static' == this.options.backdrop
                    ? this.$element[0].focus.call(this.$element[0])
                    : this.hide.call(this))
              }, this)
            ),
            d && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass('in'),
            !b)
          )
            return
          d
            ? this.$backdrop
                .one(a.support.transition.end, b)
                .emulateTransitionEnd(150)
            : b()
        } else
          !this.isShown && this.$backdrop
            ? (this.$backdrop.removeClass('in'),
              a.support.transition && this.$element.hasClass('fade')
                ? this.$backdrop
                    .one(a.support.transition.end, b)
                    .emulateTransitionEnd(150)
                : b())
            : b && b()
      })
    const c = a.fn.modal
    ;(a.fn.modal = function(c, d) {
      return this.each(function() {
        let e = a(this),
          f = e.data('bs.modal'),
          g = a.extend({}, b.DEFAULTS, e.data(), 'object' == typeof c && c)
        f || e.data('bs.modal', (f = new b(this, g))),
          'string' == typeof c ? f[c](d) : g.show && f.show(d)
      })
    }),
      (a.fn.modal.Constructor = b),
      (a.fn.modal.noConflict = function() {
        return (a.fn.modal = c), this
      }),
      a(document).on(
        'click.bs.modal.data-api',
        '[data-toggle="modal"]',
        function(b) {
          const c = a(this),
            d = c.attr('href'),
            e = a(
              c.attr('data-target') || (d && d.replace(/.*(?=#[^\s]+$)/, ''))
            ),
            f = e.data('modal')
              ? 'toggle'
              : a.extend({ remote: !/#/.test(d) && d }, e.data(), c.data())
          b.preventDefault(),
            e.modal(f, this).one('hide', function() {
              c.is(':visible') && c.focus()
            })
        }
      ),
      a(document)
        .on('show.bs.modal', '.modal', function() {
          a(document.body).addClass('modal-open')
        })
        .on('hidden.bs.modal', '.modal', function() {
          a(document.body).removeClass('modal-open')
        })
  })(window.jQuery),
  +(function(a) {
    'use strict'
    const b = function(a, b) {
      (this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null),
        this.init('tooltip', a, b)
    }
    ;(b.DEFAULTS = {
      animation: !0,
      placement: 'top',
      selector: !1,
      template:
        '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      container: !1,
    }),
      (b.prototype.init = function(b, c, d) {
        (this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d))
        for (let e = this.options.trigger.split(' '), f = e.length; f--; ) {
          const g = e[f]
          if ('click' == g)
            this.$element.on(
              'click.' + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            )
          else if ('manual' != g) {
            const h = 'hover' == g ? 'mouseenter' : 'focus',
              i = 'hover' == g ? 'mouseleave' : 'blur'
            this.$element.on(
              h + '.' + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + '.' + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              )
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: 'manual',
              selector: '',
            }))
          : this.fixTitle()
      }),
      (b.prototype.getDefaults = function() {
        return b.DEFAULTS
      }),
      (b.prototype.getOptions = function(b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            'number' == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        )
      }),
      (b.prototype.getDelegateOptions = function() {
        const b = {},
          c = this.getDefaults()
        return (
          this._options &&
            a.each(this._options, function(a, d) {
              c[a] != d && (b[a] = d)
            }),
          b
        )
      }),
      (b.prototype.enter = function(b) {
        const c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget)
                [this.type](this.getDelegateOptions())
                .data('bs.' + this.type)
        return (
          clearTimeout(c.timeout),
          (c.hoverState = 'in'),
          c.options.delay && c.options.delay.show
            ? ((c.timeout = setTimeout(function() {
                'in' == c.hoverState && c.show()
              }, c.options.delay.show)),
              void 0)
            : c.show()
        )
      }),
      (b.prototype.leave = function(b) {
        const c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget)
                [this.type](this.getDelegateOptions())
                .data('bs.' + this.type)
        return (
          clearTimeout(c.timeout),
          (c.hoverState = 'out'),
          c.options.delay && c.options.delay.hide
            ? ((c.timeout = setTimeout(function() {
                'out' == c.hoverState && c.hide()
              }, c.options.delay.hide)),
              void 0)
            : c.hide()
        )
      }),
      (b.prototype.show = function() {
        const b = a.Event('show.bs.' + this.type)
        if (this.hasContent() && this.enabled) {
          if ((this.$element.trigger(b), b.isDefaultPrevented())) return
          const c = this.tip()
          this.setContent(), this.options.animation && c.addClass('fade')
          let d =
              'function' == typeof this.options.placement
                ? this.options.placement.call(this, c[0], this.$element[0])
                : this.options.placement,
            e = /\s?auto?\s?/i,
            f = e.test(d)
          f && (d = d.replace(e, '') || 'top'),
            c
              .detach()
              .css({ top: 0, left: 0, display: 'block' })
              .addClass(d),
            this.options.container
              ? c.appendTo(this.options.container)
              : c.insertAfter(this.$element)
          const g = this.getPosition(),
            h = c[0].offsetWidth,
            i = c[0].offsetHeight
          if (f) {
            const j = this.$element.parent(),
              k = d,
              l = document.documentElement.scrollTop || document.body.scrollTop,
              m =
                'body' == this.options.container
                  ? window.innerWidth
                  : j.outerWidth(),
              n =
                'body' == this.options.container
                  ? window.innerHeight
                  : j.outerHeight(),
              o = 'body' == this.options.container ? 0 : j.offset().left
            ;(d =
              'bottom' == d && g.top + g.height + i - l > n
                ? 'top'
                : 'top' == d && g.top - l - i < 0
                ? 'bottom'
                : 'right' == d && g.right + h > m
                ? 'left'
                : 'left' == d && g.left - h < o
                ? 'right'
                : d),
              c.removeClass(k).addClass(d)
          }
          const p = this.getCalculatedOffset(d, g, h, i)
          this.applyPlacement(p, d),
            this.$element.trigger('shown.bs.' + this.type)
        }
      }),
      (b.prototype.applyPlacement = function(a, b) {
        let c,
          d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css('margin-top'), 10),
          h = parseInt(d.css('margin-left'), 10)
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (a.top = a.top + g),
          (a.left = a.left + h),
          d.offset(a).addClass('in')
        let i = d[0].offsetWidth,
          j = d[0].offsetHeight
        if (
          ('top' == b && j != f && ((c = !0), (a.top = a.top + f - j)),
          /bottom|top/.test(b))
        ) {
          let k = 0
          a.left < 0 &&
            ((k = -2 * a.left),
            (a.left = 0),
            d.offset(a),
            (i = d[0].offsetWidth),
            (j = d[0].offsetHeight)),
            this.replaceArrow(k - e + i, i, 'left')
        } else this.replaceArrow(j - f, j, 'top')
        c && d.offset(a)
      }),
      (b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + '%' : '')
      }),
      (b.prototype.setContent = function() {
        const a = this.tip(),
          b = this.getTitle()
        a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b),
          a.removeClass('fade in top bottom left right')
      }),
      (b.prototype.hide = function() {
        function b() {
          'in' != c.hoverState && d.detach()
        }
        var c = this,
          d = this.tip(),
          e = a.Event('hide.bs.' + this.type)
        return (
          this.$element.trigger(e),
          e.isDefaultPrevented()
            ? void 0
            : (d.removeClass('in'),
              a.support.transition && this.$tip.hasClass('fade')
                ? d.one(a.support.transition.end, b).emulateTransitionEnd(150)
                : b(),
              this.$element.trigger('hidden.bs.' + this.type),
              this)
        )
      }),
      (b.prototype.fixTitle = function() {
        const a = this.$element
        ;(a.attr('title') ||
          'string' != typeof a.attr('data-original-title')) &&
          a.attr('data-original-title', a.attr('title') || '').attr('title', '')
      }),
      (b.prototype.hasContent = function() {
        return this.getTitle()
      }),
      (b.prototype.getPosition = function() {
        const b = this.$element[0]
        return a.extend(
          {},
          'function' == typeof b.getBoundingClientRect
            ? b.getBoundingClientRect()
            : { width: b.offsetWidth, height: b.offsetHeight },
          this.$element.offset()
        )
      }),
      (b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return 'bottom' == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : 'top' == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : 'left' == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width }
      }),
      (b.prototype.getTitle = function() {
        let a,
          b = this.$element,
          c = this.options
        return (a =
          b.attr('data-original-title') ||
          ('function' == typeof c.title ? c.title.call(b[0]) : c.title))
      }),
      (b.prototype.tip = function() {
        return (this.$tip = this.$tip || a(this.options.template))
      }),
      (b.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
      }),
      (b.prototype.validate = function() {
        this.$element[0].parentNode ||
          (this.hide(), (this.$element = null), (this.options = null))
      }),
      (b.prototype.enable = function() {
        this.enabled = !0
      }),
      (b.prototype.disable = function() {
        this.enabled = !1
      }),
      (b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
      }),
      (b.prototype.toggle = function(b) {
        const c = b
          ? a(b.currentTarget)
              [this.type](this.getDelegateOptions())
              .data('bs.' + this.type)
          : this
        c.tip().hasClass('in') ? c.leave(c) : c.enter(c)
      }),
      (b.prototype.destroy = function() {
        this.hide()
          .$element.off('.' + this.type)
          .removeData('bs.' + this.type)
      })
    const c = a.fn.tooltip
    ;(a.fn.tooltip = function(c) {
      return this.each(function() {
        let d = a(this),
          e = d.data('bs.tooltip'),
          f = 'object' == typeof c && c
        e || d.data('bs.tooltip', (e = new b(this, f))),
          'string' == typeof c && e[c]()
      })
    }),
      (a.fn.tooltip.Constructor = b),
      (a.fn.tooltip.noConflict = function() {
        return (a.fn.tooltip = c), this
      })
  })(window.jQuery),
  +(function(a) {
    'use strict'
    const b = function(a, b) {
      this.init('popover', a, b)
    }
    if (!a.fn.tooltip) throw new Error('Popover requires tooltip.js')
    ;(b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    })),
      (b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (b.prototype.constructor = b),
      (b.prototype.getDefaults = function() {
        return b.DEFAULTS
      }),
      (b.prototype.setContent = function() {
        const a = this.tip(),
          b = this.getTitle(),
          c = this.getContent()
        a.find('.popover-title')[this.options.html ? 'html' : 'text'](b),
          a.find('.popover-content')[this.options.html ? 'html' : 'text'](c),
          a.removeClass('fade top bottom left right in'),
          a.find('.popover-title').html() || a.find('.popover-title').hide()
      }),
      (b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
      }),
      (b.prototype.getContent = function() {
        const a = this.$element,
          b = this.options
        return (
          a.attr('data-content') ||
          ('function' == typeof b.content ? b.content.call(a[0]) : b.content)
        )
      }),
      (b.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
      }),
      (b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
      })
    const c = a.fn.popover
    ;(a.fn.popover = function(c) {
      return this.each(function() {
        let d = a(this),
          e = d.data('bs.popover'),
          f = 'object' == typeof c && c
        e || d.data('bs.popover', (e = new b(this, f))),
          'string' == typeof c && e[c]()
      })
    }),
      (a.fn.popover.Constructor = b),
      (a.fn.popover.noConflict = function() {
        return (a.fn.popover = c), this
      })
  })(window.jQuery),
  +(function(a) {
    'use strict'
    function b(c, d) {
      let e,
        f = a.proxy(this.process, this)
      ;(this.$element = a(c).is('body') ? a(window) : a(c)),
        (this.$body = a('body')),
        (this.$scrollElement = this.$element.on(
          'scroll.bs.scroll-spy.data-api',
          f
        )),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector =
          (this.options.target ||
            ((e = a(c).attr('href')) && e.replace(/.*(?=#[^\s]+$)/, '')) ||
            '') + ' .nav li > a'),
        (this.offsets = a([])),
        (this.targets = a([])),
        (this.activeTarget = null),
        this.refresh(),
        this.process()
    }
    (b.DEFAULTS = { offset: 10 }),
      (b.prototype.refresh = function() {
        const b = this.$element[0] == window ? 'offset' : 'position'
        ;(this.offsets = a([])), (this.targets = a([]))
        const c = this
        this.$body
          .find(this.selector)
          .map(function() {
            const d = a(this),
              e = d.data('target') || d.attr('href'),
              f = /^#\w/.test(e) && a(e)
            return (
              (f &&
                f.length && [
                  [
                    f[b]().top +
                      (!a.isWindow(c.$scrollElement.get(0)) &&
                        c.$scrollElement.scrollTop()),
                    e,
                  ],
                ]) ||
              null
            )
          })
          .sort(function(a, b) {
            return a[0] - b[0]
          })
          .each(function() {
            c.offsets.push(this[0]), c.targets.push(this[1])
          })
      }),
      (b.prototype.process = function() {
        let a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
          d = c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a)
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (!e[a + 1] || b <= e[a + 1]) &&
            this.activate(f[a])
      }),
      (b.prototype.activate = function(b) {
        (this.activeTarget = b),
          a(this.selector)
            .parents('.active')
            .removeClass('active')
        let c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c)
            .parents('li')
            .addClass('active')
        d.parent('.dropdown-menu').length &&
          (d = d.closest('li.dropdown').addClass('active')),
          d.trigger('activate')
      })
    const c = a.fn.scrollspy
    ;(a.fn.scrollspy = function(c) {
      return this.each(function() {
        let d = a(this),
          e = d.data('bs.scrollspy'),
          f = 'object' == typeof c && c
        e || d.data('bs.scrollspy', (e = new b(this, f))),
          'string' == typeof c && e[c]()
      })
    }),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function() {
        return (a.fn.scrollspy = c), this
      }),
      a(window).on('load', function() {
        a('[data-spy="scroll"]').each(function() {
          const b = a(this)
          b.scrollspy(b.data())
        })
      })
  })(window.jQuery),
  +(function(a) {
    'use strict'
    const b = function(b) {
      this.element = a(b)
    }
    ;(b.prototype.show = function() {
      let b = this.element,
        c = b.closest('ul:not(.dropdown-menu)'),
        d = b.attr('data-target')
      if (
        (d ||
          ((d = b.attr('href')), (d = d && d.replace(/.*(?=#[^\s]*$)/, ''))),
        !b.parent('li').hasClass('active'))
      ) {
        const e = c.find('.active:last a')[0],
          f = a.Event('show.bs.tab', { relatedTarget: e })
        if ((b.trigger(f), !f.isDefaultPrevented())) {
          const g = a(d)
          this.activate(b.parent('li'), c),
            this.activate(g, g.parent(), function() {
              b.trigger({ type: 'shown.bs.tab', relatedTarget: e })
            })
        }
      }
    }),
      (b.prototype.activate = function(b, c, d) {
        function e() {
          f
            .removeClass('active')
            .find('> .dropdown-menu > .active')
            .removeClass('active'),
            b.addClass('active'),
            g ? (b[0].offsetWidth, b.addClass('in')) : b.removeClass('fade'),
            b.parent('.dropdown-menu') &&
              b.closest('li.dropdown').addClass('active'),
            d && d()
        }
        var f = c.find('> .active'),
          g = d && a.support.transition && f.hasClass('fade')
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(),
          f.removeClass('in')
      })
    const c = a.fn.tab
    ;(a.fn.tab = function(c) {
      return this.each(function() {
        let d = a(this),
          e = d.data('bs.tab')
        e || d.data('bs.tab', (e = new b(this))), 'string' == typeof c && e[c]()
      })
    }),
      (a.fn.tab.Constructor = b),
      (a.fn.tab.noConflict = function() {
        return (a.fn.tab = c), this
      }),
      a(document).on(
        'click.bs.tab.data-api',
        '[data-toggle="tab"], [data-toggle="pill"]',
        function(b) {
          b.preventDefault(), a(this).tab('show')
        }
      )
  })(window.jQuery),
  +(function(a) {
    'use strict'
    var b = function(c, d) {
      (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.$window = a(window)
          .on('scroll.bs.affix.data-api', a.proxy(this.checkPosition, this))
          .on(
            'click.bs.affix.data-api',
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(c)),
        (this.affixed = this.unpin = null),
        this.checkPosition()
    }
    ;(b.RESET = 'affix affix-top affix-bottom'),
      (b.DEFAULTS = { offset: 0 }),
      (b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
      }),
      (b.prototype.checkPosition = function() {
        if (this.$element.is(':visible')) {
          let c = a(document).height(),
            d = this.$window.scrollTop(),
            e = this.$element.offset(),
            f = this.options.offset,
            g = f.top,
            h = f.bottom
          'object' != typeof f && (h = g = f),
            'function' == typeof g && (g = f.top()),
            'function' == typeof h && (h = f.bottom())
          const i =
            null != this.unpin && d + this.unpin <= e.top
              ? !1
              : null != h && e.top + this.$element.height() >= c - h
              ? 'bottom'
              : null != g && g >= d
              ? 'top'
              : !1
          this.affixed !== i &&
            (this.unpin && this.$element.css('top', ''),
            (this.affixed = i),
            (this.unpin = 'bottom' == i ? e.top - d : null),
            this.$element
              .removeClass(b.RESET)
              .addClass('affix' + (i ? '-' + i : '')),
            'bottom' == i &&
              this.$element.offset({
                top: document.body.offsetHeight - h - this.$element.height(),
              }))
        }
      })
    const c = a.fn.affix
    ;(a.fn.affix = function(c) {
      return this.each(function() {
        let d = a(this),
          e = d.data('bs.affix'),
          f = 'object' == typeof c && c
        e || d.data('bs.affix', (e = new b(this, f))),
          'string' == typeof c && e[c]()
      })
    }),
      (a.fn.affix.Constructor = b),
      (a.fn.affix.noConflict = function() {
        return (a.fn.affix = c), this
      }),
      a(window).on('load', function() {
        a('[data-spy="affix"]').each(function() {
          const b = a(this),
            c = b.data()
          ;(c.offset = c.offset || {}),
            c.offsetBottom && (c.offset.bottom = c.offsetBottom),
            c.offsetTop && (c.offset.top = c.offsetTop),
            b.affix(c)
        })
      })
  })(window.jQuery)

/*global jQuery */
/*jshint multistr:true browser:true */
/*!
 * FitVids 1.0.3
 *
 * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
 * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
 * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
 *
 * Date: Thu Sept 01 18:00:00 2011 -0500
 */

;(function($) {
  'use strict'

  $.fn.fitVids = function(options) {
    const settings = {
      customSelector: null,
    }

    if (!document.getElementById('fit-vids-style')) {
      const div = document.createElement('div'),
        ref =
          document.getElementsByTagName('base')[0] ||
          document.getElementsByTagName('script')[0],
        cssStyles =
          '&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>'

      div.className = 'fit-vids-style'
      div.id = 'fit-vids-style'
      div.style.display = 'none'
      div.innerHTML = cssStyles

      ref.parentNode.insertBefore(div, ref)
    }

    if (options) {
      $.extend(settings, options)
    }

    return this.each(function() {
      const selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        'object',
        'embed',
      ]

      if (settings.customSelector) {
        selectors.push(settings.customSelector)
      }

      let $allVideos = $(this).find(selectors.join(','))
      $allVideos = $allVideos.not('object object') // SwfObj conflict patch

      $allVideos.each(function() {
        const $this = $(this)
        if (
          (this.tagName.toLowerCase() === 'embed' &&
            $this.parent('object').length) ||
          $this.parent('.fluid-width-video-wrapper').length
        ) {
          return
        }
        const height =
            this.tagName.toLowerCase() === 'object' ||
            ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))
              ? parseInt($this.attr('height'), 10)
              : $this.height(),
          width = !isNaN(parseInt($this.attr('width'), 10))
            ? parseInt($this.attr('width'), 10)
            : $this.width(),
          aspectRatio = height / width
        if (!$this.attr('id')) {
          const videoID = 'fitvid' + Math.floor(Math.random() * 999999)
          $this.attr('id', videoID)
        }
        $this
          .wrap('<div class="fluid-width-video-wrapper"></div>')
          .parent('.fluid-width-video-wrapper')
          .css('padding-top', aspectRatio * 100 + '%')
        $this.removeAttr('height').removeAttr('width')
      })
    })
  }
  // Works with either jQuery or Zepto
})(window.jQuery || window.Zepto)

/*global jQuery */
/*!
 * FitText.js 1.1
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu May 05 14:23:00 2011 -0600
 */

;(function($) {
  $.fn.fitText = function(kompressor, options) {
    // Setup options
    const compressor = kompressor || 1,
      settings = $.extend(
        {
          minFontSize: Number.NEGATIVE_INFINITY,
          maxFontSize: Number.POSITIVE_INFINITY,
        },
        options
      )

    return this.each(function() {
      // Store the object
      const $this = $(this)

      // Resizer() resizes items based on the object width divided by the compressor * 10
      const resizer = function() {
        $this.css(
          'font-size',
          Math.max(
            Math.min(
              $this.width() / (compressor * 10),
              parseFloat(settings.maxFontSize)
            ),
            parseFloat(settings.minFontSize)
          )
        )
      }

      // Call once to set.
      resizer()

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer)
    })
  }
})(jQuery)
