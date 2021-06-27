function customCursor(options) {
    let settings = $.extend({
            targetClass: 'custom-cursor', // create element with this class
            wrapper: $('body'), // jQuery
            speed: .1,
            hasHover: false, // has hover events
            hoverTarget: $('a[href], button'),
            touchDevices: false, // show on touch devices
            onHoverIn: function (data) {
            },
            onHoverOut: function (data) {
            },
        }, options),
        checkTouch = !settings.touchDevices && "undefined" !== typeof document.documentElement.ontouchstart;

    // exit
    if (checkTouch || !settings.wrapper.length) return;

    // append the ball
    settings.wrapper.append(`<div class="${settings.targetClass}"></div>`);

    let $cursor = $('.' + settings.targetClass),
        position = {x: window.innerWidth / 2, y: window.innerHeight / 2},
        mouse = {x: position.x, y: position.y},
        setX = gsap.quickSetter($cursor, "x", "px"),
        setY = gsap.quickSetter($cursor, "y", "px"),
        showAnimation = gsap.to($cursor, {opacity: 1, paused: true});

    // on mouse move
    window.addEventListener("mousemove", init);

    function init() {
        // remove default mousemove event
        window.removeEventListener("mousemove", init);

        // add new custom event
        window.addEventListener("mousemove", e => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        // fade out cursor
        document.addEventListener("mouseleave", e => {
            showAnimation.reverse();
        });

        // update cursor's position
        document.addEventListener("mouseenter", e => {
            showAnimation.play();
            mouse.x = position.x = e.x;
            mouse.y = position.y = e.y;
        });

        gsap.ticker.add((time, deltaTime) => {
            let fpms = 60 / 1000,
                delta = deltaTime * fpms,
                dt = 1 - Math.pow(1 - settings.speed, delta);
            position.x += (mouse.x - position.x) * dt;
            position.y += (mouse.y - position.y) * dt;
            setX(position.x);
            setY(position.y);
        });

        showAnimation.play();
    }

    // on hover
    if (settings.hasHover && settings.hoverTarget.length) {
        setTimeout(function () {
            settings.hoverTarget.hover(function () {
                settings.onHoverIn({cursor: $cursor, hoverTarget: $(this)});
            }, function () {
                settings.onHoverOut({cursor: $cursor, hoverTarget: $(this)});
            });
        }, 100);
    }
}

// big ball
customCursor({
    hasHover: true,
    onHoverIn: function (data) {
        gsap.to(data.cursor, {scale: 2});
    },
    onHoverOut: function (data) {
        gsap.to(data.cursor, {scale: 1});
    },
});

// dot inside
customCursor({
    targetClass: 'custom-cursor-dot',
    speed: .5,
});