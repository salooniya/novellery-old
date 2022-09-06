export function Reset ({ root, components }) {
    console.log('Reset');
    root.innerHTML = (`
        ${ components.Header() }
        ${ components.Reset() }
    `);
}