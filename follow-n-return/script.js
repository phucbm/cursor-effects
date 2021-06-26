/**
 * Cursor follow and return
 * @param options
 */
function cursorFollowAndReturn(options) {
    let settings = $.extend({
        follower: '', // jQuery element
        container: '', // jQuery element
    }, options);

    // exit if elements are not found
    if (!settings.follower.length && !settings.container.length) return;

    // setup css
    settings.follower.css({
        'pointerEvents': 'none',
        'transition': 'none',
    });

    // set button position when mouse move inside wrapper
    settings.container.on("mousemove", function (e) {
        let x = e.pageX, y = e.pageY, // mouse offset
            offsetX = settings.container.offset().left, // container offset
            offsetY = settings.container.offset().top,
            valX = x - offsetX - (settings.container.outerWidth() / 2),
            valY = y - offsetY - (settings.container.outerHeight() / 2);

        gsap.to(settings.follower, .5, {x: valX, y: valY});
    });

    // set button to center of wrapper when mouse out
    settings.container.on("mouseout", function (e) {
        gsap.to(settings.follower, .5, {x: 0, y: 0});
    });
}

// init
cursorFollowAndReturn({
    follower: $('.follower'),
    container: $('.box'),
});