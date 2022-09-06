export function Home ({ root, components }) {
    console.log('Home');
    root.innerHTML = (`
        ${ components.Header() }
        ${ components.Spotlight() }
    `);
    components.Spotlight.load();
}