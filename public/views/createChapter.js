export function CreateChapter ({ url, root, components }) {
    console.log('Create Chapter');

    if (!root.user) {
        location.href = location.origin + '/login';
        return;
    }

    const novelID = url.href.split('/').reverse()[1];

    console.log(novelID);

    root.innerHTML = (`
        ${ components.Header({ root, type: 1 }) }
        ${ components.NewChapter() }
    `);

    components.NewChapter.load(root, novelID);
}