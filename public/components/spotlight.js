import {$} from 'core';

export function Spotlight () {
    return (`
        <section class="spotlight">
            <container>
                <inner>
                    <slide>A</slide>
                    <slide>B</slide>
                    <slide>C</slide>
                    <slide>D</slide>
                    <slide>E</slide>
                    <box>
                        <i class="left">chevron_left</i>
                        <i class="right">chevron_right</i>
                    </box>
                </inner>
            </container>
        </section>
    `);
}

function showSlide ($slides, doc) {
    $slides.forEach($slide => $slide.removeAttribute('active'));
    $slides[doc.currSlide].setAttribute('active', true);
}

function nextSlide ($slides, doc) {
    doc.currSlide === doc.numSlides - 1 ? doc.currSlide = 0 : doc.currSlide++;
    showSlide($slides, doc);
}

function prevSlide ($slides, doc) {
    doc.currSlide === 0 ? doc.currSlide = doc.numSlides - 1 : doc.currSlide--;
    showSlide($slides, doc)
}

function createInterval ($slides, doc) {
    doc.interval = setInterval(() => {
        nextSlide($slides, doc);
    }, doc.slideTime);
}

function resetInterval ($slides, doc) {
    clearInterval(doc.interval);
    createInterval($slides, doc);
}

Spotlight.load = function () {
    $.reflow();
    const $spotlight = $('section.spotlight');
    const $slides = $.all('section.spotlight slide');
    const doc = {
        currSlide: 0,
        numSlides: $slides.length,
        slideTime: 3000
    };

    showSlide($slides, doc);
    createInterval($slides, doc);

    $spotlight.addEventListener('click', (e) => {
        const el = e.target;
        if (!el) return;

        if (el.classList.contains('left')) {
            prevSlide($slides, doc);
            resetInterval($slides, doc);
        } else
        if (el.classList.contains('right')) {
            nextSlide($slides, doc);
            resetInterval($slides, doc);
        }
    });
}
