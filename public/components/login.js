import {$} from "../../core";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth, firestore, snapMap} from "../fb";
import {doc, setDoc,collection, query, where, getDocs} from "firebase/firestore";

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

Login.load = async function () {
    const $section = $('section.auth');
    const $form = $('section.auth form');

    $form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = $('#username').value;
        const password = $('#password').value;

        console.log(username)
        console.log(password)

        const q = query(collection(firestore, 'users'), where('username', '==', username));
        const snap = await getDocs(q);
        const user = snapMap(snap)[0];

        await signInWithEmailAndPassword(auth, user.email, password);

        location.href = location.origin + '/';
    });
};
