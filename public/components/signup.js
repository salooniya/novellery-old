import { $ } from "core";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore} from "../fb";

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
                            <input id="name" type="text" placeholder="Full Name">
                            <input id="email" type="email" placeholder="Your Email">
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

Signup.load = async function () {
    const $section = $('section.auth');
    const $form = $('section.auth form');

    $form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = $('#name').value;
        const email = $('#email').value;
        const username = $('#username').value;
        const password = $('#password').value;

        const cred = await createUserWithEmailAndPassword(auth, email, password);
        const user = cred.user;

        await setDoc(doc(firestore, 'users', user.uid), {
            name: name,
            email: email,
            username: username
        });

        location.href = location.origin + '/';
    });
};
