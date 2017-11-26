/*  baseUrl: "../Public/public/js/lib",*/
/*stellar*/

var contentWayPoint = function() {
    $('.animate-box').waypoint(function(direction) {
        if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
            $(this.element).addClass('item-animate');
            setTimeout(function() {
                $('body .animate-box.item-animate').each(function(item) {
                    var el = $(this);
                    setTimeout(function() {
                        var effect = el.data('animate-effect');
                        if (effect == 'fadeIn') {
                            el.addClass('fadeIn animated-fast')
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft animated-fast');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight animated-fast');
                        } else {
                            el.addClass('fadeInUp animated-fast');
                        }
                        el.removeClass('item-animate')

                    }, item * 200, 'easeInOutExpo')
                })

            }, 100)
        }

    }, {
        offset: '85%'
    })
}
contentWayPoint();