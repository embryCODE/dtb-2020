!(function(e, n) {
  (e.wp = e.wp || {}),
    (e.wp.mediaelement = new (function() {
      let e = {}
      return {
        initialize: function() {
          'undefined' != typeof _wpmejsSettings &&
            (e = n.extend(!0, {}, _wpmejsSettings)),
            (e.classPrefix = 'mejs-'),
            (e.success =
              e.success ||
              function(e) {
                let n, t
                e.rendererName &&
                  -1 !== e.rendererName.indexOf('flash') &&
                  ((n =
                    e.attributes.autoplay && 'false' !== e.attributes.autoplay),
                  (t = e.attributes.loop && 'false' !== e.attributes.loop),
                  n &&
                    e.addEventListener(
                      'canplay',
                      function() {
                        e.play()
                      },
                      !1
                    ),
                  t &&
                    e.addEventListener(
                      'ended',
                      function() {
                        e.play()
                      },
                      !1
                    ))
              }),
            (e.customError = function(e, n) {
              if (
                -1 !== e.rendererName.indexOf('flash') ||
                -1 !== e.rendererName.indexOf('flv')
              )
                return (
                  '<a href="' +
                  n.src +
                  '">' +
                  mejsL10n.strings['mejs.download-video'] +
                  '</a>'
                )
            }),
            n('.wp-audio-shortcode, .wp-video-shortcode')
              .not('.mejs-container')
              .filter(function() {
                return !n(this)
                  .parent()
                  .hasClass('mejs-mediaelement')
              })
              .mediaelementplayer(e)
        },
      }
    })()),
    n(e.wp.mediaelement.initialize)
})(window, jQuery)
