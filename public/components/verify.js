export function Verify () {
    return (`
        <section class="auth">
            <container>
                <inner>
                    <form>
                        <box>
                            <h2>VERIFY EMAIL</h2>
                            <p>Please check your email for code</p>
                        </box>
                        <box>
                            <input id="code" type="text" placeholder="Code">
                        </box>
                        <box>
                            <input id="submit" type="submit" value="VERIFY">
                            <span>Don't Received Code? <a href="/verify">Resend</a></span>
                        </box>
                    </form>
                </inner>
            </container>
        </section>
    `);
}