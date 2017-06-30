;(function() {
    'use strict';
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    var stellar = function() {
        if (!isMobile.any()) {
            $(window).stellar({
                horizontalScrolling: false,
                hideDistantElements: false,
                responsive: true
            })
        }
    }
    //stellar();
    $('input[name="kl"]').hide()

})()
 
