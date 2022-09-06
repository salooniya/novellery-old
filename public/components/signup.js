export function Signup () {
    return (`
        <section class="auth">
            <container>
                <inner>
                    <form>
                        <box>
                            <h2>CREATE ACCOUNT</h2>
                            <p>Please enter your details to continue</p>
                        </box>
                        <box>
                            <input id="name" type="text" placeholder="Name">
                            <input id="email" type="email" placeholder="Email">
                            <input id="username" type="text" placeholder="Username">
                            <input id="password" type="text" placeholder="Password">
                        </box>
                        <box>
                            <input id="submit" type="submit" value="SIGNUP">
                            <span>By signing up, you agree to our <br> <a href="/terms-and-conditions">Terms & Conditions</a> and <a href="/privacy-policy">Privacy Policy</a></span>
                        </box>
                    </form>
                </inner>
            </container>
        </section>
    `);
}

Signup.load = function () {

};
