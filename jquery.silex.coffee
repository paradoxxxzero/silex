(($) ->

    methods =
        init: (options) ->
            settings = $.extend(
                duration: 1000
                width: 400
                height: 400
                padding: 10,
            options)
            @each ->
                $this = $ @
                len = $this.find('img').length
                return if len == 0
                data = $this.data 'silex'
                if not data
                    data = $.extend {}, settings
                    $this.data 'silex', settings

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
                )
                $this.find('img:not(:first)').hide()
                # $silex.click ->
                    # this.next

        next: ->
            @each ->
                $this = $ @
                $this.find('img:visible').fadeOut('slow', ->
                    next = $(@).next()
                    if not next.length
                        next = $this.find('img').first()
                    next.fadeIn('slow'))
        prev: ->
            @each ->
                $this = $ @
                $this.find('img:visible').fadeOut('slow', ->
                    prev = $(@).prev()
                    if not prev.length
                        prev = $this.find('img').last()
                    prev.fadeIn('slow'))

    $.fn.silex = (method) ->
        if methods[method]
          methods[method].apply this, Array.prototype.slice.call(arguments, 1)
        else if typeof method == 'object' or !method
          methods.init.apply this, arguments
        else
          $.error 'Method ' +  method + ' does not exist on jQuery.silex'

)(jQuery)
