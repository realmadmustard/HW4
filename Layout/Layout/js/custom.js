"use strict";

// Portfolio hover
$(function() {
    $('.portfolio > div').hover(
        function() {
            $(this).prepend('<div class="portfolio-link-arrow"></div>');
        },
        function() {
            $(this).find('div').remove();
        }
    );

    // Mobile menu
    $('header nav').click(function(e) {
        $('header nav ul').toggleClass('show');
        $(this).toggleClass('active');
        e.stopPropagation();
    });

    $('header nav ul')
        .mouseout(function() {
            window.t = setTimeout(function() {
                $('header nav ul').removeClass('show');
            }, 500);
        })
        .mouseover(function(){
            if(window.t){
                clearTimeout(window.t);
                window.t = undefined;
            }
        })
        .click(function(e) {
            e.stopPropagation();
        });

    $(document.body).click(function() {
        $('header nav ul').removeClass('show');
    });


    // Portfolio view
    var currentTheme;
    var counter;

    $('.items-nav a').click(function() {

        if(currentTheme == this.id) {
            return false;
        }

        currentTheme = this.id;
        counter = 0;

        $('.portfolio > div').each(function () {
            if($(this).data('theme') == currentTheme) {
                counter ++;
                $('.portfolio > p').hide();
            }
        });

        if(counter == 1) {
            $('.portfolio > div').addClass('flex-disable');
        } else if(counter == 0) {
            $('.portfolio > p').show();
        } else {
            $('.portfolio > div').removeClass('flex-disable');
        }

        if(currentTheme == "all") {
            $('.portfolio > div').each(function () {
                $('.portfolio > div').removeClass('flex-disable');
                $('.portfolio > p').hide();
                $(this).fadeIn();
            });
        } else {
            $('.portfolio > div').each(function() {
                $(this)
                    .show();
                if($(this).data('theme') != currentTheme) {
                    $(this).fadeOut();
                }
            });
        }
    });
});
