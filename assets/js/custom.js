// Shrink header once the page scrolls away from the top
$(function () {
    var $header = $('.header-main');
    if (!$header.length) {
        return;
    }

    function toggleHeaderShrink() {
        var scrolled = $(window).scrollTop() > 0;
        $header.toggleClass('shrink', scrolled);
    }

    toggleHeaderShrink(); // set initial state on load
    $(window).on('scroll', toggleHeaderShrink);
});