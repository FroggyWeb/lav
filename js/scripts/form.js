// form styler
jQuery(document).ready(function($) {
    setTimeout(function(){
          $('.js-styler').styler({});
        }, 100);

    $('input[type="tel"]').mask('8 (000) 000-00-00', {placeholder: "8 (___) ___-__-__"});
});

// filter show
jQuery(document).ready(function($) {
    $('#mob-filter-icon').on('click', function(){
        $('#filters').toggleClass('is-openen');
    })
});

function cmpOnToCompareCheckClicked(id,parent,elem){
    var $wishlist = $('#wishlist');
    var $wrap =  $(elem).closest('.prod-list__item');
    if($wishlist.length) {
       $wrap.fadeOut().remove();
    } else {
        $wrap.toggleClass('wish-prod-active');
    }
}
