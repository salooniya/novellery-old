export function CreateNovel ({ root, components }) {
    console.log('Create Novel');

    if (!root.user) {
        location.href = location.origin + '/login';
        return;
    }

    root.innerHTML = (`
        ${ components.Header({ root, type: 1 }) }
        ${ components.NewNovel() }
    `);

    components.NewNovel.load(root);
}