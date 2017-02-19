(function ($) {
document.addEventListener("DOMContentLoaded", function (event) {

        if (window.DeviceMotionEvent) {

            window.ondeviceorientation = function (event) {
                beta = event.beta; // Side to side value - will return a value between -180 and 180
                gamma = event.gamma; // Front to back value - will return a value between -90 and 90

                setTimeout(function () {
                    normalizeData(gamma, beta);
                }, 50);
            };

        }

        var img = $('#mobile img');
        var img_width = img.width();
        var img_height = img.height();
        var window_width = window.innerWidth;
        var window_height = window.innerHeight;

        var center_x = Math.ceil((window_width - img_width) / 2);
        var center_y = Math.ceil((window_height - img_height) / 2);

        var limit_x = center_x * 2;
        var limit_y = center_y * 2;

        img.css({
            'top': center_y,
            'left': center_x
        });

        function normalizeData(_g, _b) {
            var pos_y = Math.round(_b);
            var pos_x = Math.round(_g);

            if (pos_x !== 1) {
                center_x += pos_x;
            }

            if (pos_y !== 1) {
                center_y += pos_y;
            }

            if (center_x > 0) {
                center_x = 0;
            } else if (center_x < limit_x) {
                center_x = limit_x;
            }

            if (center_y > 0) {
                center_y = 0;
            } else if (center_y < limit_y) {
                center_y = limit_y;
            }

            img.css({
                'top': center_y,
                'left': center_x
            });
        }
    });
})(jQuery);

$(document).ready(function() {
  
    // get values for sliding inside container
    var image = $('#desktop img'),
        containerWidth = $('.sliding-image').css("width"),
        imageWidth = image.css("width"),
        contW = parseFloat(containerWidth),
        imgW = parseFloat(imageWidth),
        slideValue = Math.round((imgW - contW) /2);
//          
//        console.log(containerWidth);
//        console.log(imageWidth);
//        console.log(slideValue);

    $('.slide-right').hover(
    function(){
        image.stop(true, false).animate({'right': slideValue+'px'}, 5000, 'linear');
    },
    function(){
        image.stop(true, false).animate({'right': '0px'}, 1000, 'linear');
    });
  
    image.click(function(){
       $(this).stop(); 
    });
    
    
  // nav menu  
  $('.nav-toggle').click(function(){
      $('.nav').slideToggle();
  });
    
  // products slider
  
  $("#products-slider").owlCarousel({
    pagination : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    items : 2,
    itemsMobile : [479,1]
  });
  
    // articles slider
  
  $("#articles-slider").owlCarousel({
    pagination : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    margin:10,
    items : 2,
    itemsMobile : [479,1]
  });
  
    // scroll to products
    
   $("html, body").animate({ 
        scrollTop: $('#products').offset().top 
    }, 1000);

});





