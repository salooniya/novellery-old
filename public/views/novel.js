import {collection, doc, getDoc, getDocs, query} from "firebase/firestore";
import {firestore, snapData, snapMap} from "../fb";

export async function Novel({url, root, components}) {
    console.log('Novel');

    // if (!root.user) {
    //     location.href = location.origin + '/login';
    //     return;
    // }

    const novelID = url.href.split('/').pop();

    const ref = doc(firestore, 'novels', novelID);
    const snap = await getDoc(ref);
    const novelDoc = snapData(snap);

    console.log([novelDoc])

    let author;

    if (root.user && root.user.createdNovels.includes(novelDoc.id)) author = true;

    console.log(author);

    root.innerHTML = (`
        ${components.Header({root, type: author ? 3 : 1, id: novelID})}
        ${components.Spotlight([novelDoc], true)}
        
        <section class="chapters">
            <container>
                <inner>
                    <h2>CHAPTERS</h2>
                    <box>
                        ${
                            novelDoc.chapters?.map((id, i) => {
                                return (`
                                    <a href="/chapters/${id}"><span># ${i+1}</span><i>arrow_forward_ios</i></a>
                                `)
                            }).join('')
                        }
                    </box>
                </inner>
            </container>
        </section>
    `);

    components.Spotlight.load();
}