(function() {

  (function($) {
    var methods;
    methods = {
      init: function(options) {
        var settings;
        settings = $.extend({
          duration: 5000,
          animation_duration: 500,
          width: null,
          height: null
        }, options);
        return this.each(function() {
          var $this, data;
          if (!(data = ($this = $(this)).data('silex'))) {
            data = $.extend({
              interval: null,
              in_transition: false,
              in_grid: false
            }, settings);
            $this.data('silex', data);
          }
          if (!$this.find('img').length) {
            data.in_transition = true;
            return;
          }
          $this.css({
            position: 'relative',
            overflow: 'hidden',
            padding: 20,
            borderRadius: 10,
            backgroundColor: '#111213',
            width: data.width,
            height: data.height
          });
          $this.find('img').addClass('silexed').css({
            display: 'block',
            margin: '0 auto'
          }).load(function() {
            var $img;
            $img = $(this);
            if (data.width) {
              if ($img.width() >= data.width) $img.width(data.width);
            } else if ($img.parent().width() <= $img.width()) {
              $img.parent().width($img.width());
              $img.parent().parent().width($img.width());
            }
            if (data.height) {
              if ($img.height() >= data.height) return $img.height(data.height);
            } else if ($img.parent().height() <= $img.height()) {
              return $img.parent().height($img.height());
            }
          }).wrapAll($('<div>').addClass('silex-wrapper').css({
            display: 'table-cell',
            verticalAlign: 'middle',
            height: settings.height,
            width: settings.width
          }).click(function() {
            return $this.silex('next');
          }));
          if ($this.find('.silexed').length === 1) {
            data.in_transition = true;
            return;
          }
          $this.find('.silexed').hide();
          $this.find('.silexed').first().show();
          $this.append($('<div>').addClass('toolbar').css({
            position: 'absolute',
            height: 26,
            bottom: 10,
            right: -120,
            backgroundColor: 'black',
            borderRadius: 5
          }).append($('<a>').addClass('silex-icon').addClass('grid').click(function() {
            return $this.silex('grid');
          }), $('<a>').addClass('silex-icon').addClass('prev').click(function() {
            return $this.silex('prev');
          }), $('<a>').addClass('silex-icon').addClass('play').hide().click(function() {
            return $this.silex('play');
          }), $('<a>').addClass('silex-icon').addClass('pause').click(function() {
            return $this.silex('pause');
          }), $('<a>').addClass('silex-icon').addClass('next').click(function() {
            return $this.silex('next');
          })));
          $this.find('.toolbar a').css({
            opacity: .5,
            margin: 5,
            float: 'left',
            display: 'block'
          }).hover((function() {
            return $(this).is(':visible') && $(this).stop().fadeTo(250, .9);
          }), (function() {
            return $(this).is(':visible') && $(this).stop().fadeTo(250, .5);
          }));
          return $this.hover((function() {
            if (data.in_grid) return;
            return $this.find('.toolbar').stop().animate({
              right: 15
            }, 500);
          }), (function() {
            return $this.find('.toolbar').stop().animate({
              right: -100
            }, 500);
          }));
        }).silex('play');
      },
      next: function() {
        return this.each(function() {
          var $this, data;
          if ((data = ($this = $(this)).data('silex')).in_transition || data.in_grid) {
            return;
          }
          data.in_transition = true;
          return $this.find('.silexed:visible').fadeOut(data.animation_duration, function() {
            var next;
            next = $(this).next();
            if (!next.length) next = $this.find('.silexed').first();
            return next.fadeIn(data.animation_duration, function() {
              return data.in_transition = false;
            });
          });
        });
      },
      prev: function() {
        return this.each(function() {
          var $this, data;
          if ((data = ($this = $(this)).data('silex')).in_transition || data.in_grid) {
            return;
          }
          data.in_transition = true;
          return $this.find('.silexed:visible').fadeOut(data.animation_duration, function() {
            var prev;
            prev = $(this).prev();
            if (!prev.length) prev = $this.find('.silexed').last();
            return prev.fadeIn(data.animation_duration, function() {
              return data.in_transition = false;
            });
          });
        });
      },
      play: function() {
        return this.each(function() {
          var $this, data;
          data = ($this = $(this)).data('silex');
          if (!data.interval) {
            $this.find('.play').stop().hide();
            $this.find('.pause').stop().show();
            return data.interval = setInterval((function() {
              return $this.silex('next');
            }), data.duration);
          }
        });
      },
      pause: function() {
        return this.each(function() {
          var $this, data;
          data = ($this = $(this)).data('silex');
          if (data.interval) {
            $this.find('.pause').stop().hide();
            $this.find('.play').stop().show();
            clearInterval(data.interval);
            return data.interval = null;
          }
        });
      },
      toggle: function() {
        return this.each(function() {
          var $this, data;
          data = ($this = $(this)).data('silex');
          if (data.interval) {
            return $this.silex('pause');
          } else {
            return $this.silex('play');
          }
        });
      },
      grid: function() {
        return this.each(function() {
          var $this, $thm, cols, data, img, len, rows, th;
          data = ($this = $(this)).data('silex');
          if (data.in_grid) return;
          data.in_grid = true;
          $this.find('.toolbar').stop().animate({
            right: -100
          }, 500);
          if (($thm = $this.find('.thumbs')).length) {
            $thm.animate({
              top: 0
            }, 500);
            return;
          }
          len = $this.find('.silexed').length;
          cols = Math.ceil(Math.sqrt(len));
          rows = Math.ceil(len / cols);
          th = {
            height: 2 * $this.height() / 3,
            width: 3 * $this.width() / 4,
            padding: 15
          };
          img = {
            padding: 6
          };
          img.width = img.height = Math.min(th.width / cols - 2 * img.padding, th.height / rows - 2 * img.padding);
          th.width = (img.width + 2 * img.padding) * cols;
          th.height = (img.height + 2 * img.padding) * rows;
          return $this.append($('<div>').addClass('thumbs').css({
            position: 'absolute',
            top: -th.height - 2 * th.padding,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            left: ($this.width() - th.width) / 2,
            width: th.width,
            height: th.height,
            backgroundColor: $.support.opacity ? 'rgba(0, 0, 0, 0.9)' : 'black',
            padding: th.padding,
            display: 'block'
          }).append($this.find('.silexed').map(function() {
            var $img;
            $img = $(this);
            return $('<img>').attr('src', $img.attr('src')).css({
              float: 'left',
              width: img.width,
              height: img.height,
              padding: img.padding,
              opacity: .7
            }).hover((function() {
              return $(this).stop().fadeTo(250, 1);
            }), (function() {
              return $(this).stop().fadeTo(250, .7);
            })).click(function() {
              data.in_transition = true;
              data.in_grid = false;
              $this.find('.silexed:visible').fadeOut(data.animation_duration, function() {
                return $img.fadeIn(data.animation_duration, function() {
                  return data.in_transition = false;
                });
              });
              $this.find('.thumbs').stop().animate({
                top: -th.height - 2 * th.padding
              }, 500);
              return $this.find('.toolbar').stop().animate({
                right: 15
              }, 500);
            }).get(0);
          })).animate({
            top: 0
          }, 500));
        });
      }
    };
    return $.fn.silex = function(method) {
      if (methods[method]) {
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
      } else {
        return $.error('Method ' + method + ' does not exist on jQuery.silex');
      }
    };
  })(jQuery);

}).call(this);
