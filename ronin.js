var screenSize = $(window).width();

gsap.defaults({
    ease: "power2.inOut",
});

$('.header__logo-wrap').click(function() {
    gsap.to(window, { duration: 2, scrollTo: '#hero' });
})



// Play video on scroll
const coolVideo = document.querySelector(".bg-video");
coolVideo.onloadedmetadata = function() {

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".scroll-wrapper",
            start: "top",
            end: "bottom",
            scrub: true,
        }
    });

    // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos

    tl.to(coolVideo, { currentTime: coolVideo.duration, ease: 'none' });




    // Dealing with devices
    function isTouchDevice() {
        return (
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
        );
    }
    if (isTouchDevice()) {
        coolVideo.play();
        coolVideo.pause();
    }
};

// Fade video after About section
gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: 'top',
            toggleActions: "restart none none reverse",
        }
    })
    .to(coolVideo, { autoAlpha: 0.5 })



// END Play video on scroll









// END Play video

videoOpen = false;
gsap.set('.video-modal-wrap', { autoAlpha: 0 })

$('.about__video-thumb, .video-modal__overlay').click(function() {
    if (!videoOpen) {
        $('body').css('overflow', 'hidden');
        gsap.to('.video-modal-wrap', { autoAlpha: 1 })
        videoOpen = true;
    } else if (videoOpen) {
        $('body').css('overflow', 'visible');
        gsap.to('.video-modal-wrap', { autoAlpha: 0 })
        videoOpen = false;
    }
})



// Desktop
if (screenSize > 767) {




    // Header
    gsap.timeline({
            repeat: 3,
        })
        .to('.logo-ron-bg', 0.1, { fill: "#E91735" })
        .to('.logo-in-bg', 0.1, { fill: "#FFD800" })
        .to('.logo-ron-bg', 0.1, { fill: "#fff" })
        .to('.logo-ron-bg', 0.1, { fill: "#fff" })
        .to('.logo-in-bg', 0.1, { fill: "#FFD800" })
        .to('.logo-ron-bg', 0.1, { fill: "#E91735" })
        .to('.logo-in-bg', 0.1, { fill: "#fff" })
        .to('.logo-ron-bg', 0.1, { fill: "#fff" })


    gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: `${$('.section.is--header').innerHeight()}`,
                toggleActions: "restart none none reverse",
            }
        })
        .from('.header__logo-embed', { width: '10rem' })


    // END Header


    // Hero title
    // Brush
    var heroBrush = gsap.timeline({
            paused: true,
            repeat: -1,
            repeatRefresh: true,
        })
        .set('.hero__brash', { y: 'random(-40, 40, 10)', rotate: 'random(-15, 10, 3)' })
        .from('.hero__brash', 0.3, { autoAlpha: 0 }, 'from1')

    // Title
    var splitHero = new SplitText(".hero__title", { type: "chars" }),
        chars = splitHero.chars; //an array of all the divs that wrap each character

    gsap.from('.hero__title-wrap', 1, { y: '60%' });
    gsap.from(chars, { y: '60%', autoAlpha: 0, stagger: 0.04 }).then(function() { heroBrush.play() });
    // END Hero title

    // Second
    var splitSecond = new SplitText(".second__title", { type: "chars" }),
        charsSecond = splitSecond.chars; //an array of all the divs that wrap each character

    // Second Splash
    var secondSplash = gsap.timeline({
            paused: true,
            repeat: -1,
            repeatRefresh: true,
        })
        .set('.second__title-splat', { y: 'random(300, -120, 10)', x: 'random(300, -60, 10)', rotate: 'random(-50, 50, 5)' })
        .from('.second__title-splat', 0.5, { autoAlpha: 0 })

    gsap.timeline({
            scrollTrigger: {
                trigger: ".second__grid-wrap",
                start: "top bottom",
            }
        })
        .from('.second__line', 2, { scaleX: 0, }, 'second')
        .from(charsSecond, { y: '60%', autoAlpha: 0, stagger: 0.04 }, 'second+=50%')
        .call(function() { secondSplash.play() }, [], 'second')


    // END Second




    // Congratulations

    // Congrats stickers
    gsap.set('.congratulations__title-sticker', { autoAlpha: 0 })
    gsap.timeline({
            paused: false,
            repeat: -1,
            repeatRefresh: true,
        })
        .to('.congratulations__title-sticker', 0.1, {
            autoAlpha: 0,
            stagger: {
                from: 'end',
                amount: 0.2
            }
        })
        .set('.congratulations__title-sticker', { y: 'random([-100, -50, 0, 50, 100, 120], true)', x: 'random([0, 50, 100, 140], true)', rotate: 'random(-20, 20, 5)' })
        .to('.congratulations__title-sticker', 0.1, {
            autoAlpha: 1,
            stagger: {
                from: 'edges',
                amount: 0.3
            }
        })

    var splitCongrats = new SplitText(".congratulations__title", { type: "chars" }),
        charsCongrats = splitCongrats.chars; //an array of all the divs that wrap each character

    gsap.timeline({
            scrollTrigger: {
                trigger: ".congratulations",
                start: "top bottom",
            }
        })
        .from('.congratulations__title-wrap', 1, { autoAlpha: 0, y: '100%' })
        .from(charsCongrats, { y: '60%', autoAlpha: 0, stagger: 0.04 }, '-=80%')

    // END Congratulations





    // About

    // Face grafic
    gsap.timeline({
            repeat: -1,
            repeatRefresh: true,
        })
        .to('.about__photo-face', 0.1, {
            autoAlpha: 0,
            stagger: { from: 'end', amount: 0.2 }
        })
        .set('.about__photo-face', { y: 'random([-100, -50, 0, 50, 100], true)', x: 'random([0, 50, 100], true)', rotate: 'random(-20, 20, 5)' })
        .to('.about__photo-face', 0.1, {
            autoAlpha: 1,
            stagger: { from: 'end', amount: 0.3 }
        })


    gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top bottom",

            }
        })
        .from('.about__line', 2, { scaleX: 0 }, 'aboutText')
        .from(new SplitText(".about__title", { type: "chars" }).chars, 2, { y: '60%', autoAlpha: 0, stagger: 0.04 }, 'aboutText')
        .from('.about__photo-wrap', 2, { y: '20%' }, 'aboutText')
        .from('.about__small-text', 2, { y: '60%', autoAlpha: 0 }, 'aboutText')


    gsap.from(new SplitText(".about__text", { type: "lines" }).lines, 1, {
        scrollTrigger: {
            trigger: ".about__text",
            start: "top bottom",

        },
        y: '60%',
        autoAlpha: 0,
        stagger: 0.04
    })


    gsap.timeline({
            scrollTrigger: {
                trigger: ".about__text",
                start: "top bottom",

            },
        })
        .from('.about__site-link', {
            y: '60%',
            autoAlpha: 0,
            stagger: 0.04
        }, 'link')
        .from(new SplitText(".about__site-link-url", { type: "chars" }).chars, 1, {
            y: '60%',
            autoAlpha: 0,
            stagger: 0.04
        }, 'link');



    // Video and NFT text
    gsap.from(new SplitText(".about__nft-text", { type: "lines" }).lines, 1, {
        scrollTrigger: {
            trigger: ".about__nft-text",
            start: "top bottom",

        },
        y: '60%',
        autoAlpha: 0,
        stagger: 0.04
    });

    gsap.from('.about__video-wrap', 1, {
            scrollTrigger: {
                trigger: ".about__video-wrap",
                start: "top bottom",

            },
            y: '60%',
            autoAlpha: 0
        })
        // END About

    // FAQ
    gsap.from(new SplitText(".faq__title", { type: "chars" }).chars, 1, {
        scrollTrigger: {
            trigger: ".faq__title",
            start: "top bottom",

        },
        y: '60%',
        autoAlpha: 0,
        stagger: 0.04
    });

    // Faq lines
    gsap.set('.faq__item-line', { scaleX: 0 })
    ScrollTrigger.batch(".faq__item-line", {
        onEnter: (elements, triggers) => {
            gsap.to(elements, 1, { scaleX: 1, stagger: 0.15 });
            console.log(elements.length, "elements entered");
        }
    });
    // END FAQ
}
// END Desktop

// Mobile
if (screenSize < 767) {

    // Header
    gsap.timeline({
            repeat: 3,
        })
        .to('.logo-ron-bg', 0.1, { fill: "#E91735" })
        .to('.logo-in-bg', 0.1, { fill: "#FFD800" })
        .to('.logo-ron-bg', 0.1, { fill: "#fff" })
        .to('.logo-ron-bg', 0.1, { fill: "#fff" })
        .to('.logo-in-bg', 0.1, { fill: "#FFD800" })
        .to('.logo-ron-bg', 0.1, { fill: "#E91735" })
        .to('.logo-in-bg', 0.1, { fill: "#fff" })
        .to('.logo-ron-bg', 0.1, { fill: "#fff" })


    gsap.timeline({
            scrollTrigger: {
                trigger: ".body",
                start: `${$('.section.is--header').innerHeight()}`,

                toggleActions: "restart none none reverse",
            }
        })
        .from('.header__logo-embed', { width: '30rem' })


    // END Header


    // Hero title
    // Brush
    var heroBrush = gsap.timeline({
            paused: true,
            repeat: -1,
            repeatRefresh: true,
        })
        .set('.hero__brash', { y: 'random(-20, 20, 10)', rotate: 'random(-15, 10, 3)' })
        .from('.hero__brash', 0.3, { autoAlpha: 0 }, 'from1')

    // Title
    var splitHero = new SplitText(".hero__title", { type: "chars" }),
        chars = splitHero.chars; //an array of all the divs that wrap each character

    gsap.from('.hero__title-wrap', 1, { y: '60%' });
    gsap.from(chars, { y: '60%', autoAlpha: 0, stagger: 0.04 }).then(function() { heroBrush.play() });
    // END Hero title

    // Second
    var splitSecond = new SplitText(".second__title", { type: "chars" }),
        charsSecond = splitSecond.chars; //an array of all the divs that wrap each character

    // Second Splash
    var secondSplash = gsap.timeline({
            paused: true,
            repeat: -1,
            repeatRefresh: true,
        })
        .set('.second__title-splat', { y: 'random(20, -40, 10)', x: 'random(20, -120, 10)', rotate: 'random(-50, 50, 5)' })
        .from('.second__title-splat', 0.5, { autoAlpha: 0 })

    gsap.timeline({
            scrollTrigger: {
                trigger: ".second__grid-wrap",
                start: "top bottom",
            }
        })
        .from('.second__line', 2, { scaleX: 0, }, 'second')
        .from(charsSecond, { y: '60%', autoAlpha: 0, stagger: 0.04 }, 'second+=50%')
        .call(function() { secondSplash.play() }, [], 'second')


    // END Second




    // Congratulations

    // Congrats stickers
    gsap.set('.congratulations__title-sticker', { autoAlpha: 0 })
    gsap.timeline({
            paused: false,
            repeat: -1,
            repeatRefresh: true,
        })
        .to('.congratulations__title-sticker', 0.1, {
            autoAlpha: 0,
            stagger: {
                from: 'end',
                amount: 0.2
            }
        })
        .set('.congratulations__title-sticker', { y: 'random([-50, -20, 0, 20, 50], true)', x: 'random([-20, 0, 20, 30, 40], true)', rotate: 'random(-20, 20, 5)' })
        .to('.congratulations__title-sticker', 0.1, {
            autoAlpha: 1,
            stagger: {
                from: 'edges',
                amount: 0.3
            }
        })

    var splitCongrats = new SplitText(".congratulations__title", { type: "chars" }),
        charsCongrats = splitCongrats.chars; //an array of all the divs that wrap each character

    gsap.timeline({
            scrollTrigger: {
                trigger: ".congratulations",
                start: "top bottom",
            }
        })
        .from('.congratulations__title-wrap', 1, { autoAlpha: 0, y: '100%' })
        .from(charsCongrats, { y: '60%', autoAlpha: 0, stagger: 0.04 }, '-=80%')

    // END Congratulations





    // About

    // Face grafic
    gsap.timeline({
            repeat: -1,
            repeatRefresh: true,
        })
        .to('.about__photo-face', 0.1, {
            autoAlpha: 0,
            stagger: { from: 'end', amount: 0.2 }
        })
        .set('.about__photo-face', { y: 'random([-20, -10, 0, 10, 20], true)', x: 'random([-20, -15, 0, 15, 20], true)', rotate: 'random(-20, 20, 5)' })
        .to('.about__photo-face', 0.1, {
            autoAlpha: 1,
            stagger: { from: 'end', amount: 0.3 }
        })


    gsap.timeline({
            scrollTrigger: {
                trigger: ".about",
                start: "top bottom",

            }
        })
        .from('.about__line', 2, { scaleX: 0 }, 'aboutText')
        .from(new SplitText(".about__title", { type: "chars" }).chars, 2, { y: '60%', autoAlpha: 0, stagger: 0.04 }, 'aboutText')
        .from('.about__photo-wrap', 2, { y: '20%' }, 'aboutText')
        .from('.about__small-text', 2, { y: '60%', autoAlpha: 0 }, 'aboutText')


    gsap.from(new SplitText(".about__text", { type: "lines" }).lines, 1, {
        scrollTrigger: {
            trigger: ".about__text",
            start: "top bottom",

        },
        y: '60%',
        autoAlpha: 0,
        stagger: 0.04
    })


    gsap.timeline({
            scrollTrigger: {
                trigger: ".about__text",
                start: "top bottom",

            },
        })
        .from('.about__site-link', {
            y: '60%',
            autoAlpha: 0,
            stagger: 0.04
        }, 'link')
        .from(new SplitText(".about__site-link-url", { type: "chars" }).chars, 1, {
            y: '60%',
            autoAlpha: 0,
            stagger: 0.04
        }, 'link');



    // Video and NFT text
    gsap.from(new SplitText(".about__nft-text", { type: "lines" }).lines, 1, {
        scrollTrigger: {
            trigger: ".about__nft-text",
            start: "top bottom",

        },
        y: '60%',
        autoAlpha: 0,
        stagger: 0.04
    });

    gsap.from('.about__video-wrap', 1, {
            scrollTrigger: {
                trigger: ".about__video-wrap",
                start: "top bottom",

            },
            y: '60%',
            autoAlpha: 0
        })
        // END About

    // FAQ
    gsap.from(new SplitText(".faq__title", { type: "chars" }).chars, 1, {
        scrollTrigger: {
            trigger: ".faq__title",
            start: "top bottom",

        },
        y: '60%',
        autoAlpha: 0,
        stagger: 0.04
    });

    // Faq lines
    gsap.set('.faq__item-line', { scaleX: 0 })
    ScrollTrigger.batch(".faq__item-line", {
        onEnter: (elements, triggers) => {
            gsap.to(elements, 1, { scaleX: 1, stagger: 0.15 });
        }
    });

    // END FAQ
}
// END Mobile