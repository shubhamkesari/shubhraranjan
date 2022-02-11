$(".optional_course_carousel").owlCarousel({
    // autoplay: true,
    responsiveClass: true,
    stagePadding: 60,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,
    responsive: {
        0: {
            stagePadding: 0,
            items: 1
        },

        600: {
            stagePadding: 0,
            items: 2
        },

        1000: {
            stagePadding: 0,
            items: 3
        },

        1366: {
            items: 3
        }
    }
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    e.target // newly activated tab
    e.relatedTarget // previous active tab
    $(".exam_carousel").trigger('refresh.owl.carousel');
});
$(".latest_course_carousel").owlCarousel({
    items: 1,
    // autoplay: true,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: true,

});