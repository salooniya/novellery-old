export function Tray (o) {
    return (`
        <section class="tray">
            <container>
                <inner>
                    <h2><span>${o.title}</span>&nbsp;<i>arrow_forward_ios</i></h2>
                    <box>
                    ${
                        o.novels?.map(n => (`
                            <a class="card" href="/novels/${n.id}">
                                <img src="${n.cover}" alt="cover">
                                <div>
                                    <h3>${n.title}</h3>
                                    <p>${n.genre}</p>
                                </div>
                            </a>
                        `)).join('')
                    }
                    </box>
                </inner>
            </container>
        </section>
    `);
}