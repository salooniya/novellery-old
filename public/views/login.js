export function Login ({ root, components }) {
    console.log('Login');

    if (root.user) {
        location.href = location.origin + '/';
        return;
    }

    root.innerHTML = (`
        ${ components.Header({}) }
        ${ components.Login() }
    `);

    components.Login.load();
}