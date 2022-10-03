import {collection, getDocs, query} from "firebase/firestore";
import {firestore, snapMap} from "../fb";

export async function Home ({ root, components }) {
    console.log('Home');

    const q = query(collection(firestore, 'novels'));
    const snap = await getDocs(q);
    const novels = snapMap(snap);

    root.innerHTML = (`
        ${ components.Header({ root, type: 1 }) }
        ${ components.Spotlight(novels) }
        ${
            components.Tray({
                title: 'TRENDING NOVELS',
                novels: novels
            })
        }
        ${
            components.Tray({
                title: 'ONGOING NOVELS',
                novels: novels
            })
        }
        ${
            components.Tray({
                title: 'COMPLETED NOVELS',
                novels: novels
            })
        }
        ${
            components.Tray({
                title: 'UPCOMING NOVELS',
                novels: novels
            })
        }
    `);
    components.Spotlight.load();
}