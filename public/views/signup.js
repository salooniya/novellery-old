export function Signup ({ root, components }) {
    console.log('Signup');
    root.innerHTML = (`
        ${ components.Header() }
        ${ components.Signup() }
    `);

    components.Signup.load();
}