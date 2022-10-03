export function Signup ({ root, components }) {
    console.log('Signup');

    if (root.user) {
        location.href = location.origin + '/';
        return;
    }

    root.innerHTML = (`
        ${ components.Header({}) }
        ${ components.Signup() }
    `);

    components.Signup.load();
}