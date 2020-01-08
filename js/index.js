$(document).ready(function(){
    // nav item click
    $(".nav-item").click(function(){
        var elements = $(".nav-item");
        for(element of elements){
            element.classList.remove("active");
        }
        $(this).addClass("active");
    })

    // nav link anchor
    function scrollToAnchor(aid){
		var tag = $(`#${aid}`);
		$('html,body').animate({scrollTop: tag.offset().top}, 'slow');
	}
	
	$(".nav-link").click(function() {
        scrollToAnchor($(this).attr("data-anchor"));
        if(window.matchMedia('(max-width: 767px)').matches){
            $(".navbar-collapse").removeClass("show");
        }
    });

    $(".navbar-brand").click(function(){
        $('html,body').animate({scrollTop: $('#home').offset().top}, 'slow');
    });

    // scroll navbar
    var color = 'bg-light';

    function navScroll(color){
        if($(document).scrollTop() > 20){
            $(".navbar").addClass(color);
        } if($(document).scrollTop() < 20){
            $(".navbar").removeClass(color);
        }
    }

    $( window ).scroll(function() {
        if (!window.matchMedia('(max-width: 767px)').matches) {
            navScroll(color);
        }
    });

    function mobileNavbar(){
        if (window.matchMedia('(max-width: 767px)').matches) {
            $(".navbar").addClass("bg-light");
        }
    }

    $('.s-carousel').slick();

    navScroll(color);
    mobileNavbar();

    
});