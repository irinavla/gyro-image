$(function(){
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

        var img = $('.sliding-image img');
        var img_width = img.width();
        var img_height = img.height();
        var window_width = window.innerWidth;
        var window_height = window.innerHeight;

        var center_x = Math.ceil((window_width - img_width) / 2);
        var center_y = Math.ceil((window_height - img_height) / 2);

        var limit_x = center_x * 2;
        var limit_y = center_y * 2;

        img.css({
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
                'left': center_x
            });
        }
    }); 
})(jQuery);   