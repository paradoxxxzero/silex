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
                        in_grid: false,
                        settings
                    $this.data 'silex', data
                if not $this.find('img').length
                    data.in_transition = true
                    return
                $this.css
                    position: 'relative'
                    overflow: 'hidden'
                    padding: 20
                    borderRadius: 10
                    backgroundColor: '#111213'
                    width: data.width
                    height: data.height
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
                            $img.parent().parent().width $img.width()

                        if data.height
                            if $img.height() >= data.height
                                $img.height data.height
                        else if $img.parent().height() <= $img.height()
                            $img.parent().height $img.height()
                    ).wrapAll(
                        $('<div>')
                            .addClass('silex-wrapper')
                            .css(
                                display: 'table-cell'
                                verticalAlign: 'middle'
                                height: settings.height
                                width: settings.width
                            ).click ->
                                $this.silex 'next'
                    )
                if $this.find('.silexed').length == 1
                    data.in_transition = true
                    return
                $this.find('.silexed').hide()
                $this.find('.silexed').first().show()
                $this.append(
                    $('<div>')
                        .addClass('toolbar')
                        .css(
                            position: 'absolute'
                            height: 26
                            bottom: 10
                            right: -100
                            backgroundColor: 'black'
                            borderRadius: 5
                        ).append(
                            $('<a>')
                                .addClass('silex-icon')
                                .addClass('grid')
                                .click(-> $this.silex('grid')),
                            $('<a>')
                                .addClass('silex-icon')
                                .addClass('prev')
                                .click(-> $this.silex('prev')),
                            $('<a>')
                                .addClass('silex-icon')
                                .addClass('play')
                                .hide()
                                .click(-> $this.silex('play')),
                            $('<a>')
                                .addClass('silex-icon')
                                .addClass('pause')
                                .click(-> $this.silex('pause')),
                            $('<a>')
                                .addClass('silex-icon')
                                .addClass('next')
                                .click(-> $this.silex('next'))
                        )
                )
                $this.find('.toolbar a')
                    .css(
                        opacity: .5
                        margin: 5
                        float: 'left'
                        display: 'block'
                    ).hover(
                        (-> $(@).is(':visible') and $(@).stop().fadeTo(250, .9)),
                        (-> $(@).is(':visible') and $(@).stop().fadeTo(250, .5))
                    )
                $this.hover(
                    (->
                        return if data.in_grid
                        $this.find('.toolbar').stop().animate(right: 15, 500)),
                    (->
                        $this.find('.toolbar').stop().animate(right: -100, 500))
                )
            .silex('play')

        next: ->
            @each ->
                return if (data = ($this = $ @).data 'silex').in_transition or data.in_grid
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
                return if (data = ($this = $ @).data 'silex').in_transition or data.in_grid
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
                    $this.find('.play').stop().hide()
                    $this.find('.pause').stop().show()
                    data.interval = setInterval (-> $this.silex('next')), data.duration

        pause: ->
            @each ->
                data = ($this = $ @).data 'silex'
                if data.interval
                    $this.find('.pause').stop().hide()
                    $this.find('.play').stop().show()
                    clearInterval data.interval
                    data.interval = null

        toggle: ->
            @each ->
                data = ($this = $ @).data 'silex'
                if data.interval
                    $this.silex('pause')
                else
                    $this.silex('play')

        grid: ->
            @each ->
                data = ($this = $ @).data 'silex'
                return if data.in_grid
                data.in_grid = true
                $this.find('.toolbar').stop().animate(right: -100, 500)
                if ($thm = $this.find('.thumbs')).length
                    $thm.animate(top: 0, 500)
                    return
                len = $this.find('.silexed').length
                cols = Math.ceil(Math.sqrt(len))
                rows = Math.ceil(len / cols)
                th =
                    height: 2 * $this.height() / 3
                    width: 3 * $this.width() / 4
                    padding: 15
                img = padding: 6
                img.width = img.height = Math.min(
                    th.width / cols - 2 * img.padding,
                    th.height / rows - 2 * img.padding)
                th.width = (img.width + 2 * img.padding) * cols
                th.height = (img.height + 2 * img.padding) * rows
                $this.append(
                    $('<div>')
                        .addClass('thumbs')
                        .css(
                            position: 'absolute'
                            top: - th.height - 2 * th.padding
                            borderBottomLeftRadius: 20
                            borderBottomRightRadius: 20
                            left: ($this.width() - th.width) / 2
                            width: th.width
                            height: th.height
                            backgroundColor: if $.support.opacity then 'rgba(0, 0, 0, 0.9)' else 'black'
                            padding: th.padding
                            display: 'block'
                        ).append(
                            $this.find('.silexed').map(->
                                $img = $(@)
                                $('<img>')
                                    .attr('src', $img.attr('src'))
                                    .css(
                                        float: 'left'
                                        width: img.width
                                        height: img.height
                                        padding: img.padding
                                        opacity: .7
                                    ).hover(
                                        (-> $(@).stop().fadeTo(250, 1)),
                                        (-> $(@).stop().fadeTo(250, .7))
                                    ).click(->
                                        data.in_transition = true
                                        data.in_grid = false

                                        $this.find('.silexed:visible').fadeOut(
                                            data.animation_duration, ->
                                                $img.fadeIn(data.animation_duration, ->
                                                    data.in_transition = false
                                                )
                                        )
                                        $this.find('.thumbs').stop().animate(top: -th.height - 2 * th.padding, 500)
                                        $this.find('.toolbar').stop().animate(right: 15, 500)
                                    ).get(0)
                                )
                        ).animate(top: 0, 500)
                )


    $.fn.silex = (method) ->
        if methods[method]
          methods[method].apply this, Array.prototype.slice.call(arguments, 1)
        else if typeof method == 'object' or !method
          methods.init.apply this, arguments
        else
          $.error 'Method ' +  method + ' does not exist on jQuery.silex'

)(jQuery)
