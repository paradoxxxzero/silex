(($) ->
    methods =
        init: (options) ->
            settings = $.extend(
                duration: 5000
                animation_duration: 500
                width: null
                height: null
            options)
            @each ->
                $this = $ @
                data = $this.data 'silex'
                if not data
                    data = $.extend
                        interval: null
                        in_transition: false,
                        settings
                    $this.data 'silex', data
                $this.css position: 'relative'
                $this.find('img')
                    .css(
                        display: 'block'
                        margin: '0 auto'
                    ).load(->
                        $img = $ @
                        if data.width
                            if $img.width() >= data.width
                                $img.width data.width
                        else if $img.parent().width() <= $img.width()
                            $img.parent().width $img.width()

                        if data.height
                            if $img.height() >= data.height
                                $img.height data.height
                        else if $img.parent().height() <= $img.height()
                            $img.parent().height $img.height()
                    ).wrapAll(
                        $('<div>')
                            .addClass('silex-wrapper')
                            .css
                                padding: 20
                                width: settings.width
                                height: settings.height
                                display: 'table-cell'
                                backgroundColor: '#111213'
                                verticalAlign: 'middle'
                            .click ->
                                $this.silex('next')
                    )
                if $this.find('img').length <= 1
                    data.in_transition = true
                    return
                $this.find('img:not(:first)').hide()
                $this.append(
                    $('<div>')
                    .addClass('toolbar')
                    .css(
                        position: 'absolute'
                        top: 0
                        color: 'red'
                    ).append(
                        $('<a>').text('play').click(-> $this.silex('play')),
                        $('<a>').text('pause').click(-> $this.silex('pause')),
                        $('<a>').text('toggle').click(-> $this.silex('toggle')),
                        $('<a>').text('prev').click(-> $this.silex('prev')),
                        $('<a>').text('next').click(-> $this.silex('next')))
                    )
            .silex('play')

        next: ->
            @each ->
                $this = $ @
                data = $this.data 'silex'
                return if data.in_transition
                data.in_transition = true
                $this.find('img:visible').fadeOut(data.animation_duration, ->
                    next = $(@).next()
                    if not next.length
                        next = $this.find('img').first()
                    next.fadeIn(data.animation_duration, ->
                        data.in_transition = false
                    ))
        prev: ->
            @each ->
                $this = $ @
                data = $this.data 'silex'
                return if data.in_transition
                data.in_transition = true
                $this.find('img:visible').fadeOut(data.animation_duration, ->
                    prev = $(@).prev()
                    if not prev.length
                        prev = $this.find('img').last()
                    prev.fadeIn(data.animation_duration, ->
                        data.in_transition = false
                    ))
        play: ->
            @each ->
                $this = $ @
                data = $this.data 'silex'
                if not data.interval
                    data.interval = setInterval (-> $this.silex('next')), data.duration

        pause: ->
            @each ->
                $this = $ @
                data = $this.data 'silex'
                if data.interval
                    clearInterval data.interval
                    data.interval = null

        toggle: ->
            @each ->
                $this = $ @
                data = $this.data 'silex'
                if data.interval
                    $this.silex('pause')
                else
                    $this.silex('play')


    $.fn.silex = (method) ->
        if methods[method]
          methods[method].apply this, Array.prototype.slice.call(arguments, 1)
        else if typeof method == 'object' or !method
          methods.init.apply this, arguments
        else
          $.error 'Method ' +  method + ' does not exist on jQuery.silex'

)(jQuery)
