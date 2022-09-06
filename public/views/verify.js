export function Verify ({ root, components }) {
    console.log('Verify');
    root.innerHTML = (`
        ${ components.Header() }
        ${ components.Verify() }
    `);
}