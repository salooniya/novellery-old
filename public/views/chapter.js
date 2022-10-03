import {collection, doc, getDoc, getDocs, query} from "firebase/firestore";
import {firestore, snapData, snapMap} from "../fb";

export async function Chapter({url, root, components}) {
    console.log('Novel');

    // if (!root.user) {
    //     location.href = location.origin + '/login';
    //     return;
    // }

    const chapterID = url.href.split('/').reverse()[0];

    const ref = doc(firestore, 'chapters', chapterID);
    const snap = await getDoc(ref);
    const chapter = snapData(snap);

    console.log(chapter);

    root.innerHTML = (`
        ${components.Header({root, type: 1})}
        ${components.Chapter(chapter)}
    `);

    components.Chapter.load();
}