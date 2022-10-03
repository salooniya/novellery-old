export function Header ({ root, type, id }) {
    let html = (`
        <header>
            <container>
                <inner>
                    <nav>
                        <a class="logo" href="/">NOVELLERY</a>
                    </nav>
                    <nav>
                        <a class="link" href="/login">LOGIN</a>
                        <a class="link" href="/signup">SIGNUP</a>
                    </nav>
                </inner>
            </container>
        </header>
    `);

    if (type === 1) html = (`
        <header>
            <container>
                <inner>
                    <nav>
                        <a class="logo" href="/">NOVELLERY</a>
                    </nav>
                    <nav>
                        ${ root.user ? (`
                            <a class="link" href="/create-novel" >CREATE NOVEL</a>
                            <a class="link" href="/logout" style="color: lightcoral">LOGOUT</a>
                        `) : (`
                            <a class="btn" href="${root.user ? '/user': '/login'}"><i>person</i></a>
                        `)}
                    </nav>
                </inner>
            </container>
        </header>
    `);

    if (type === 2) html = (` 
        <header>
            <container>
                <inner>
                    <nav>
                        <a class="logo" href="/">NOVELLERY</a>
                    </nav>
                    <nav>
                        <a class="link" href="/create-novel" >CREATE NOVEL</a>
                        <a class="link" href="/logout" style="color: lightcoral">LOGOUT</a>
                    </nav>
                </inner>
            </container>
        </header>
    `);

    if (type === 3) html = (`
        <header>
            <container>
                <inner>
                    <nav>
                        <a class="logo" href="/">NOVELLERY</a>
                    </nav>
                    <nav>
<!--                        <a class="link" href="/novels/${id}/edit" >EDIT NOVEL</a>-->
                        <a class="link" href="/novels/${id}/create-chapter" >CREATE CHAPTER</a>
                        <a class="link" href="/logout" style="color: lightcoral">LOGOUT</a>
                    </nav>
                </inner>
            </container>
        </header>
    `);

    return html;
}