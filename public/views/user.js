export function User ({ root, components }) {
    console.log('User');

    if (!root.user) {
        location.href = location.origin + '/login';
        return;
    }

    console.log(root.user)

    root.innerHTML = (` 
        ${ components.Header({ root, type: 2 }) }
        ${
            components.Tray({
                title: 'CREATED NOVELS'
            })
        }
        ${
            components.Tray({
                title: 'SUBSCRIBED NOVELS'
            })
        }
    `);
}