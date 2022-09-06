export function Login () {
    return (`
        <section class="auth">
            <container>
                <inner>
                    <form>
                        <box>
                            <h2>WELCOME BACK</h2>
                            <p>Please enter your details to continue</p>
                        </box>
                        <box>
                            <input id="username" type="text" placeholder="Username">
                            <input id="password" type="text" placeholder="Password">
                        </box>
                        <box>
                            <input id="submit" type="submit" value="LOGIN">
                            <span>Forgot Password? <a href="/reset">Reset</a></span>
                        </box>
                    </form>
                </inner>
            </container>
        </section>
    `);
}