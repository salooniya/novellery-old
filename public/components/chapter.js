import {$} from "../../core";
import {addDoc, collection, doc, setDoc, updateDoc} from "firebase/firestore";
import { auth, firestore, storage} from "../fb";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export function Chapter (o) {
    return (`
        <section class="chapter">
            <container>
                <inner>
                    <h2>${o.title}</h2>
                    <p>${o.body}</p>
                </inner>
            </container>
        </section>
    `);
}

Chapter.load = async function (root) {
};
