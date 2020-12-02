$(function (){

    const workSlider=$('[data-slider="slick"]');

    /*--Filter--*/
    let filter=$("[data-filter]");
    filter.on("click", function(event){
        event.preventDefault();
        let categ=$(this).data('filter');

        if(categ=='all')
        {
            $("[data-categ]").removeClass("hide");
        }
        else
            {
                $("[data-categ]").each(function (){
                    let workCateg=$(this).data('categ');
                    if(workCateg != categ)
                    {
                        $(this).addClass('hide');
                    }
                    else
                        {
                            $(this).removeClass('hide');
                        }
                });
            }
    });

    /*--Modal--*/
    const modalCall=$("[data-modal]");
    const modalClose=$("[data-close]");

    modalCall.on("click", function (event){
        event.preventDefault();

        let $this=$(this);
        let modalId=$this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);
        workSlider.slick('setPosition');
    });

    modalClose.on("click", function (event){
       event.preventDefault();
        let $this=$(this);
        let modalParent=$this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

    });

    $(".modal").on("click", function (event){
        let $this=$(this);

        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

    });

    $(".modal__dialog").on("click", function (event){
      event.stopPropagation();
    });

    /*--Slider  https://kenwheeler.github.io/slick/--*/
    workSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $(".slickPrev").on("click", function (event){
        event.preventDefault();
        let currentSlider=$(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick('slickPrev');
    })

    $(".slickNext").on("click", function (event){
        event.preventDefault();
        let currentSlider=$(this).parents('.modal').find('[data-slider="slick"]');
        currentSlider.slick('slickNext');
    })

    /* Burger */
    const navToggle=$("#navToggle");
    const nav=$("#nav");
    navToggle.on("click", function (event){
        event.preventDefault();
        nav.toggleClass("show");
    });

    /* Smooth Scroll */
    $("[data-scroll]").on("click", function(event)
    {
        event.preventDefault();

        var $this =$(this),
            blockId=$(this).data('scroll'),
            blockOffset=$(blockId).offset().top;

        $("#nav a").removeClass("nav__link--active")
        $this.addClass("nav__link--active");

        $("html, body").animate(
            {
                scrollTop: blockOffset
            }, 700
        )
    });
    /* AOS */
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
});
