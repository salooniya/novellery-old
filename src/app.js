/* ==== src/app.js ==== */

import './style.scss';
import homeView from './views/home.html';
import core from "core";

const card1 = new core({img: '/sample-cover-1.jpg', title: 'Forever with you', author: 'Lauren Mills'});
const card2 = new core({img: '/sample-cover-2.jpg', title: 'Demon slayer', author: 'Tom Jinx'});
const card3 = new core({img: '/sample-cover-3.jpg', title: 'City kids', author: 'Perth Will'});

const tab1 = new core({tab: true, img: '/sample-cover-1.jpg', title: 'Forever with you', author: 'Lauren Mills'});
const tab2 = new core({tab: true, img: '/sample-cover-2.jpg', title: 'Demon slayer', author: 'Tom Jinx'});
const tab3 = new core({tab: true, img: '/sample-cover-3.jpg', title: 'City kids', author: 'Perth Will'});

document.body.innerHTML = homeView + `

<section id="daily">
    <bar class="fz-m-200">
        <item class="active">MON</item>
        <item>TUE</item>
        <item>WED</item>
        <item>THU</item>
        <item>FRI</item>
        <item>SAT</item>
        <item>SUN</item>
    </bar>
    <container class="d-fr maw-l m-a">
        <tray>
            ${ card1.html() }
            ${ card2.html() }
            ${ card3.html() }
            ${ card1.html() }
            ${ card2.html() }
            <card class="see-more fz-s-900">SEE MORE&nbsp;<i class="fa-solid fa-angle-right"></i></card>
        </tray>
    </container>
</section>

<section id="tray">
    <container class="d-fr maw-l m-a">
        <h2 class="fz-m-400 fw-500"><a href="/continue">Continue&nbsp;
            <i class="fa-solid fa-angle-right fz-m-100"></i></a>
        </h2>
        <tray>
            ${ card1.html() }
            ${ card2.html() }
            ${ card3.html() }
            ${ card1.html() }
            ${ card2.html() }
            ${ card3.html() }
        </tray>
    </container>
</section>

<section id="tray">
    <container class="d-fr maw-l m-a">
        <h2 class="fz-m-400 fw-500"><a href="/trending">Trending&nbsp;
            <i class="fa-solid fa-angle-right fz-m-100"></i></a>
        </h2>
        <tray>
            ${ card1.html() }
            ${ card2.html() }
            ${ card3.html() }
            ${ card1.html() }
            ${ card2.html() }
            ${ card3.html() }
            <break></break>
            ${ card3.html() }
            ${ card1.html() }
            <card></card>
            <card></card>
            <card></card>
            <card></card>
        </tray>
    </container>
</section>

<section id="tray" class="tabs">
    <container class="d-fr maw-l m-a">
        <tray style="margin-top: 0">
            <box class="d-fr">
                <h2 class="fz-m-400 fw-500"><a href="/latest">Latest&nbsp;
                    <i class="fa-solid fa-angle-right fz-m-100"></i></a>
                </h2>
                ${ tab1.html() }
                ${ tab2.html() }
                ${ tab3.html() }
                ${ tab2.html() }
                ${ tab1.html() }
            </box>
            <box class="d-fr">
            <h2 class="fz-m-400 fw-500"><a href="/latest">Originals&nbsp;
            <i class="fa-solid fa-angle-right fz-m-100"></i></a>
        </h2>
                ${ tab1.html() }
                ${ tab2.html() }
                ${ tab3.html() }
                ${ tab1.html() }
                ${ tab3.html() }
            </box>
            <box class="d-fr">
            <h2 class="fz-m-400 fw-500"><a href="/latest">Completed&nbsp;
            <i class="fa-solid fa-angle-right fz-m-100"></i></a>
        </h2>
                ${ tab1.html() }
                ${ tab2.html() }
                ${ tab3.html() }
                ${ tab1.html() }
                ${ tab3.html() }
            </box>
        </tray>
    </container>
</section>

<!--<div class="container">-->
<!--    <div></div>-->
<!--    <p>HELLO WORLD <br> HOW ARE YOU<br> HOW ARE YOU</p>-->
<!--</div>-->

`;

const $ = (selector) => document.querySelectorAll(selector);


const slider = $('slider')[0];
const slides = $('slide');
const coverImg = $('#spotlight .cover-img')[0];
let activeSlide = 0;
let interval;

slides.forEach(s => s.classList.remove('active'));
slides[activeSlide].classList.add('active');
coverImg.setAttribute('src', `/sample-cover-${activeSlide+1}.jpg`);

interval = setInterval(() => {
    activeSlide < slides.length - 1 ? activeSlide++ : activeSlide = 0;
    slides.forEach(s => s.classList.remove('active'));
    slides[activeSlide].classList.add('active');
    coverImg.setAttribute('src', `/sample-cover-${activeSlide+1}.jpg`);
}, 3000);

slider.addEventListener('click', (e) => {
    const el = e.target;

    if (el.closest('div').classList.contains('left')) {
        clearInterval(interval);
        activeSlide--;
        activeSlide > 0 ? activeSlide-- : activeSlide = slides.length - 1;
        slides.forEach(s => s.classList.remove('active'));
        slides[activeSlide].classList.add('active');
        interval = setInterval(() => {
            activeSlide < slides.length - 1 ? activeSlide++ : activeSlide = 0;
            slides.forEach(s => s.classList.remove('active'));
            slides[activeSlide].classList.add('active');
            coverImg.setAttribute('src', `/sample-cover-${activeSlide+1}.jpg`);
        }, 3000);
        return;
    }

    if (el.closest('div').classList.contains('right')) {
        clearInterval(interval);
        activeSlide < slides.length - 1 ? activeSlide++ : activeSlide = 0;
        slides.forEach(s => s.classList.remove('active'));
        slides[activeSlide].classList.add('active');
        interval = setInterval(() => {
            activeSlide < slides.length - 1 ? activeSlide++ : activeSlide = 0;
            slides.forEach(s => s.classList.remove('active'));
            slides[activeSlide].classList.add('active');
            coverImg.setAttribute('src', `/sample-cover-${activeSlide+1}.jpg`);
        }, 3000);
        return;
    }
});
