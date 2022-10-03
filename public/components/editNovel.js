import {$} from "../../core";
import {addDoc, collection, doc, setDoc, updateDoc} from "firebase/firestore";
import { auth, firestore, storage} from "../fb";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function EditNovel (novel) {
    return (`
        <section class="auth new-novel">
            <container>
                <inner>
                    <form>
                        <box>
                            <h2>EDIT YOUR NOVEL</h2>
                            <p>Please enter the details to continue</p>
                        </box>
                        <box>
                            <input id="title" type="text" placeholder="Title" value="${novel.title}">
                            <textarea id="description" type="text" value="${novel.description}" placeholder="Description"></textarea>
                            <input id="genre" type="text" placeholder="Genre">
                            <label for="cover">Select Cover Image</label>
                            <input id="cover" style="visibility: hidden" type="file" accept="image/*" placeholder="Cover">
                        </box>
                        <box>
                            <input id="submit" type="submit" value="CREATE">
                        </box>
                    </form>
                </inner>
            </container>
        </section>
    `);
}

EditNovel.load = async function (root) {
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

        const createdNovels = root.user.createdNovels.length !== undefined ? root.user.createdNovels.unshift(novelRef.id) : [novelRef.id];

        await updateDoc(doc(firestore, 'users', root.user.id), {
            createdNovels: createdNovels
        });


        location.href = location.origin + '/user';
    });
};
