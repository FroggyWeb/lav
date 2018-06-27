//accordion nav
$(document).ready(function(){
    $(".js-accordion > li > a").on("click", function(e){
        if($(this).next().has("ul")) {
            e.preventDefault();
        }
        if(!$(this).hasClass("open")) {
            // hide any open menus and remove all other classes
            $(".js-accordion li ul").slideUp(350);
            $(".js-accordion li a").removeClass("open");

            // open our new menu and add the open class
            $(this).next("ul").slideDown(350);
            $(this).addClass("open");
        }

        else if($(this).hasClass("open")) {
            $(this).removeClass("open");
            $(this).next("ul").slideUp(350);
        }
    });
});

// mobile nav
$(document).ready(function(){

    $('#mob-nav').mmenu({
            //options
            navbar: {
                title: "Меню"
            },
            navbars: [
                {
                    position: "bottom",
                    height: 4,
                    content: [
                        $('.top-contact__tel').clone(),
                        $('.top-contact__call-back').clone()
                    ]

                }
            ]

        }, {
             // configuration
            clone: false,
            panelNodetype: 'ul',
            offCanvas: {

            }
        });
});
