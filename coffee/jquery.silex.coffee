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
                if not data = ($this = $ @).data 'silex'
                    data = $.extend
                        interval: null
                        in_transition: false,
                        settings
                    $this.data 'silex', data
                $this.css
                    position: 'relative'
                    overflow: 'hidden'
                $this.find('img')
                    .addClass('silexed')
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
                            .css(
                                padding: '20px 20px 40px'
                                width: settings.width
                                height: settings.height
                                display: 'table-cell'
                                backgroundColor: '#111213'
                                verticalAlign: 'middle'
                                borderRadius: 5
                            ).click ->
                                $this.silex('next')
                    )
                if $this.find('.silexed').length <= 1
                    data.in_transition = true
                    return
                $this.find('.silexed:not(:first)').hide()
                $this.append(
                    $('<div>')
                        .addClass('toolbar')
                        .css(
                            position: 'absolute'
                            bottom: 5
                            right: -100
                            backgroundColor: 'black'
                            borderRadius: 5
                        ).append(
                            $('<img>')
                                .addClass('prev')
                                .attr('src', icons.prev)
                                .click(-> $this.silex('prev')),
                            $('<img>')
                                .addClass('play')
                                .attr('src', icons.play)
                                .hide()
                                .click(-> $this.silex('play')),
                            $('<img>')
                                .addClass('pause')
                                .attr('src', icons.pause)
                                .click(-> $this.silex('pause')),
                            $('<img>')
                                .addClass('next')
                                .attr('src', icons.next)
                                .click(-> $this.silex('next'))
                        )
                )
                $this.find('.toolbar img')
                    .css(
                        opacity: .5
                        padding: 5
                    ).hover(
                        (-> $(@).stop().fadeTo(250, .9)),
                        (-> $(@).stop().fadeTo(250, .5))
                    )
                $this.hover(
                    (->
                        $this.find('.toolbar').stop().animate(right: 5, 250)),
                    (->
                        $this.find('.toolbar').stop().animate(right: -100, 250))
                )
            .silex('play')

        next: ->
            @each ->
                return if (data = ($this = $ @).data 'silex').in_transition
                data.in_transition = true
                $this.find('.silexed:visible').fadeOut(data.animation_duration, ->
                    next = $(@).next()
                    if not next.length
                        next = $this.find('.silexed').first()
                    next.fadeIn(data.animation_duration, ->
                        data.in_transition = false
                    ))
        prev: ->
            @each ->
                return if (data = ($this = $ @).data 'silex').in_transition
                data.in_transition = true
                $this.find('.silexed:visible').fadeOut(data.animation_duration, ->
                    prev = $(@).prev()
                    if not prev.length
                        prev = $this.find('.silexed').last()
                    prev.fadeIn(data.animation_duration, ->
                        data.in_transition = false
                    ))
        play: ->
            @each ->
                data = ($this = $ @).data 'silex'
                if not data.interval
                    $this.find('.play').hide()
                    $this.find('.pause').show()
                    data.interval = setInterval (-> $this.silex('next')), data.duration

        pause: ->
            @each ->
                data = ($this = $ @).data 'silex'
                if data.interval
                    $this.find('.pause').hide()
                    $this.find('.play').show()
                    clearInterval data.interval
                    data.interval = null

        toggle: ->
            @each ->
                data = ($this = $ @).data 'silex'
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
