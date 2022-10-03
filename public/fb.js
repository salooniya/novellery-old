import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDWNIxpJ67KwsjbdkIT_gDf3w8PUJDNKyA",
    authDomain: "novellery-firebase.firebaseapp.com",
    projectId: "novellery-firebase",
    storageBucket: "novellery-firebase.appspot.com",
    messagingSenderId: "414022913198",
    appId: "1:414022913198:web:405b0ea2fc513c5548f13f",
    measurementId: "G-2VFFS4CNFJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const snapMap = function (snap) {
    const map = [];
    snap.forEach(s => {
        const data = s.data();
        map.push({
            id: s.id,
            ...data
        });
    });
    return map;
};

const snapData = function (snap) {
    return {
        id: snap.id,
        ... snap.data()
    };
};

export {
    app,
    analytics,
    auth,
    firestore,
    storage,
    snapMap,
    snapData
};
