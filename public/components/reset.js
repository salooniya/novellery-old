export function Reset () {
    return (`
        <section class="auth">
            <container>
                <inner>
                    <form>
                        <box>
                            <h2>RESET PASSWORD</h2>
                            <p>Please enter the details to continue</p>
                        </box>
                        <box>
                            <input id="email" type="text" placeholder="Your Email">
                            <input id="password" type="text" placeholder="New Password">
                        </box>
                        <box>
                            <input id="submit" type="submit" value="RESET">
                            <span>Back to <a href="/login">Login</a></span>
                        </box>
                    </form>
                </inner>
            </container>
        </section>
    `);
}