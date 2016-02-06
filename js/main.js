$(function() {
  
    var i = 1; //toggle variable

    var $nav = $('nav');

    $('.fa-toggle-off').hide();

    $('.fa').on('click',function(){
        $(this).hide();
        $(this).siblings().show();
        if(i % 2) {
            $nav.hide();
        } else {
            $nav.show();
        }
        i++;
    })

    var mql = window.matchMedia("(min-width: 768px)");

    var handleMediaChange = function (mediaQueryList) {
    
        if (mediaQueryList.matches) {
            $('.fa').hide();
            $nav.show();
        }
        else {
            $('.fa-toggle-on').show();
            $nav.show();
        }
        
    };
 
    mql.addListener(handleMediaChange);
    handleMediaChange(mql);

}); //end document object function