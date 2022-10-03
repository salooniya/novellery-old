import {doc, getDoc} from "firebase/firestore";
import {firestore, snapData} from "../fb";

export async function EditNovel ({ url, root, components }) {
    console.log('Edit Novel');

    if (!root.user) {
        location.href = location.origin + '/login';
        return;
    }

    const novelID = url.href.split('/').reverse()[1];

    const ref = doc(firestore, 'novels', novelID);
    const snap = await getDoc(ref);
    const novelDoc = snapData(snap);

    root.innerHTML = (`
        ${ components.Header({ root, type: 1 }) }
        ${ components.EditNovel(novelDoc) }
    `);

    components.EditNovel.load(root);
}