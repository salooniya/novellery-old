import {$} from "../../core";
import {addDoc, collection, doc, setDoc, updateDoc} from "firebase/firestore";
import { auth, firestore, storage} from "../fb";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function Novel (o) {
    return (`
        <section class="novel">
            <container>
                <inner>
                    
                </inner>
            </container>
        </section>
    `);
}

Novel.load = async function (root) {
    const $section = $('section.auth');
    const $form = $('section.auth form');

    $form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = $('#title').value;
        let description = $('#description').value;
        const genre = $('#genre').value;
        const cover = $('#cover').files[0];

        description = description !== 'lorem' ? description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

        console.log(title)
        console.log(description)
        console.log(genre)
        console.log(cover)

        const novelRef = await addDoc(collection(firestore, 'novels'), {
            title: title,
            description: description,
            genre: genre
        });

        const coverRef = ref(storage, 'novels/' + novelRef.id);

        await uploadBytes(coverRef, cover);

        const url = await getDownloadURL(coverRef);

        await updateDoc(doc(firestore, 'novels', novelRef.id), {
            cover: url
        });

        await updateDoc(doc(firestore, 'users', root.user.id), {
            createdNovels: root.user.createdNovels ? root.user.createdNovels.unshift(novelRef.id) : [novelRef.id]
        });


        location.href = location.origin + '/user';
    });
};
