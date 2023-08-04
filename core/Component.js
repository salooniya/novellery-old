/* ==== core/Component.js ==== */

const random = (start, end) => start + Math.floor( Math.random() * (end - start + 1) );
const createID = () => `${ Date.now() }-${ String(random(0, 999999)).padStart(6, '0') }`;

const Card = function (params = {}) {
    this.ID = createID();
    this.params = params;
};

Card.prototype.html = function () { return !this.params.tab ? (`

<card id="${this.ID}">
    <a href="/n/${this.ID}" draggable="false" class="cover bgc-light-100">
        <img draggable="faslse" src="${this.params.img}" alt="cover">
        <layer></layer>
        <info>
            <p class="title fz-s-700 fw-500 c-light-100">${this.params.title || 'Title'}</p>
            <p class="author fz-s-300">${this.params.author || 'Author'}</p>
        </info>
    </a>
</card>

`) : (`

<a id="${this.ID}" href="/n/${this.ID}" class="tablet">
    <cover><img src="${this.params.img}" alt="cover"></cover>
    <info>
        <p class="title fz-s-900 fw-500 c-light-100">${this.params.title || 'Title'}</p>
        <p class="author fz-s-300">${this.params.author || 'Author'}</p>
    </info>
</a>

`)};

Card.prototype.load = function () {

};

Card.prototype.unload = function () {

};

export default Card;
