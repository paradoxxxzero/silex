(($) ->
    $.fn.silex = (options) ->
        settings = $.extend(
            duration: 1000
            width: 400
            height: 400,
        options)

        @each ->
            current = 0
            $silex = $ @
            $imgs = $silex.find('img')
            len = $imgs.length
            return if len == 0
            $silex.find('img:not(:first)').hide()
            $silex.click ->
                $imgs.get(current).hide('slow')
                current = (current + 1) % len
                $imgs.get(current).show('slow')
)(jQuery)
