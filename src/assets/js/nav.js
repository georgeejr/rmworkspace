/*
Author: georgeejr
Dependencies: jQuery 
*/
var rmApp = rmApp || {};

(function($){
    'use strict';
      var navBurger = {
            init: function(){
                    navBurger.onClick();
            }, 
            onClick: () => {
                    $('#nav-burger').click(function(){
                        $(this).toggleClass('open');
                        if ($(this).hasClass('open')){
                            $('#nav-burger p').text('close');
                        }else{
                            $('#nav-burger p').text('menu');
                        }
                    });
                
            }
        };
      $(function(){
            navBurger.init();
      });


})(jQuery);