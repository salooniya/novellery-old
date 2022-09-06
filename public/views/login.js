export function Login ({ root, components }) {
    console.log('Login');
    root.innerHTML = (`
        ${ components.Header() }
        ${ components.Login() }
    `);
}