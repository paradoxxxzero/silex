(($) ->
    methods =
        init: (options) ->
            settings = $.extend(
                duration: 5000
                animation_duration: 500
                width: 200
                height: 200
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

                $this.find('img').wrapAll(
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
                return if $this.find('img').length <= 1
                $this.find('img:not(:first)').hide()
                $this.append(
                    $('<div>').addClass('toolbar').append(
                        $('<a>').text('play').click(-> $this.silex('play')),
                        $('<a>').text('pause').click(-> $this.silex('pause')),
                        $('<a>').text('toggle').click(-> $this.silex('toggle')),
                        $('<a>').text('prev').click(-> $this.silex('prev')),
                        $('<a>').text('next').click(-> $this.silex('next'))))
            .silex('play')

        next: ->
            @each ->
                $this = $ @
                return if $this.find('img').length <= 1
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
                return if $this.find('img').length <= 1
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
                return if $this.find('img').length <= 1
                data = $this.data 'silex'
                if not data.interval
                    data.interval = setInterval (-> $this.silex('next')), data.duration

        pause: ->
            @each ->
                $this = $ @
                return if $this.find('img').length <= 1
                data = $this.data 'silex'
                if data.interval
                    clearInterval data.interval
                    data.interval = null

        toggle: ->
            @each ->
                $this = $ @
                return if $this.find('img').length <= 1
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
