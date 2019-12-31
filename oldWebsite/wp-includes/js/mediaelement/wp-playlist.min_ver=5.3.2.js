!(function(r, e, i) {
  'use strict'
  window.wp = window.wp || {}
  const t = i.View.extend({
    initialize: function(t) {
      (this.index = 0),
        (this.settings = {}),
        (this.data =
          t.metadata ||
          r.parseJSON(this.$('script.wp-playlist-script').html())),
        (this.playerNode = this.$(this.data.type)),
        (this.tracks = new i.Collection(this.data.tracks)),
        (this.current = this.tracks.first()),
        'audio' === this.data.type &&
          ((this.currentTemplate = wp.template('wp-playlist-current-item')),
          (this.currentNode = this.$('.wp-playlist-current-item'))),
        this.renderCurrent(),
        this.data.tracklist &&
          ((this.itemTemplate = wp.template('wp-playlist-item')),
          (this.playingClass = 'wp-playlist-playing'),
          this.renderTracks()),
        this.playerNode.attr('src', this.current.get('src')),
        e.bindAll(
          this,
          'bindPlayer',
          'bindResetPlayer',
          'setPlayer',
          'ended',
          'clickTrack'
        ),
        e.isUndefined(window._wpmejsSettings) ||
          (this.settings = e.clone(_wpmejsSettings)),
        (this.settings.success = this.bindPlayer),
        this.setPlayer()
    },
    bindPlayer: function(t) {
      (this.mejs = t), this.mejs.addEventListener('ended', this.ended)
    },
    bindResetPlayer: function(t) {
      this.bindPlayer(t), this.playCurrentSrc()
    },
    setPlayer: function(t) {
      this.player &&
        (this.player.pause(),
        this.player.remove(),
        (this.playerNode = this.$(this.data.type))),
        t &&
          (this.playerNode.attr('src', this.current.get('src')),
          (this.settings.success = this.bindResetPlayer)),
        (this.player = new MediaElementPlayer(
          this.playerNode.get(0),
          this.settings
        ))
    },
    playCurrentSrc: function() {
      this.renderCurrent(),
        this.mejs.setSrc(this.playerNode.attr('src')),
        this.mejs.load(),
        this.mejs.play()
    },
    renderCurrent: function() {
      let t
      'video' === this.data.type
        ? (this.data.images &&
            this.current.get('image') &&
            -1 ===
              this.current
                .get('image')
                .src.indexOf('wp-includes/images/media/video.png') &&
            this.playerNode.attr('poster', this.current.get('image').src),
          (t = this.current.get('dimensions').resized),
          this.playerNode.attr(t))
        : (this.data.images || this.current.set('image', !1),
          this.currentNode.html(this.currentTemplate(this.current.toJSON())))
    },
    renderTracks: function() {
      let e = this,
        i = 1,
        s = r('<div class="wp-playlist-tracks"></div>')
      this.tracks.each(function(t) {
        e.data.images || t.set('image', !1),
          t.set('artists', e.data.artists),
          t.set('index', !!e.data.tracknumbers && i),
          s.append(e.itemTemplate(t.toJSON())),
          (i += 1)
      }),
        this.$el.append(s),
        this.$('.wp-playlist-item')
          .eq(0)
          .addClass(this.playingClass)
    },
    events: {
      'click .wp-playlist-item': 'clickTrack',
      'click .wp-playlist-next': 'next',
      'click .wp-playlist-prev': 'prev',
    },
    clickTrack: function(t) {
      t.preventDefault(),
        (this.index = this.$('.wp-playlist-item').index(t.currentTarget)),
        this.setCurrent()
    },
    ended: function() {
      this.index + 1 < this.tracks.length
        ? this.next()
        : ((this.index = 0), this.setCurrent())
    },
    next: function() {
      (this.index = this.index + 1 >= this.tracks.length ? 0 : this.index + 1),
        this.setCurrent()
    },
    prev: function() {
      (this.index =
        this.index - 1 < 0 ? this.tracks.length - 1 : this.index - 1),
        this.setCurrent()
    },
    loadCurrent: function() {
      const t =
          this.playerNode.attr('src') &&
          this.playerNode
            .attr('src')
            .split('.')
            .pop(),
        e = this.current
          .get('src')
          .split('.')
          .pop()
      this.mejs && this.mejs.pause(),
        t !== e
          ? this.setPlayer(!0)
          : (this.playerNode.attr('src', this.current.get('src')),
            this.playCurrentSrc())
    },
    setCurrent: function() {
      (this.current = this.tracks.at(this.index)),
        this.data.tracklist &&
          this.$('.wp-playlist-item')
            .removeClass(this.playingClass)
            .eq(this.index)
            .addClass(this.playingClass),
        this.loadCurrent()
    },
  })
  function s() {
    r('.wp-playlist:not(:has(.mejs-container))').each(function() {
      new t({ el: this })
    })
  }
  (window.wp.playlist = { initialize: s }),
    r(document).ready(s),
    (window.WPPlaylistView = t)
})(jQuery, _, Backbone)
