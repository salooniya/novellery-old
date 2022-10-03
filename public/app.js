import {Router, $} from "core";
import components from "./components";
import views from "./views";
import {auth, firestore, snapData} from "./fb";
import {doc, getDoc} from "firebase/firestore";

const app = new Router();
const root = $('root');

app.path('/', views.Home);
app.path('/login', views.Login);
app.path('/signup', views.Signup);
app.path('/verify', views.Verify);
app.path('/reset', views.Reset);
app.path('/user', views.User);
app.path('/logout', async () => {
    await auth.signOut();
    location.href = location.origin + '/';
});

app.path('/create-novel', views.CreateNovel);
app.path('/novels/:novelID/edit', views.EditNovel);
app.path('/novels/:novelID', views.Novel);
app.path('/novels/:novelID/create-chapter', views.CreateChapter);
app.path('/chapters/:id', views.Chapter);

app.start = false;
auth.onAuthStateChanged(async (cred) => {
    if (app.start) return;
    if (cred) {
        const ref = doc(firestore, 'users', cred.uid);
        const snap = await getDoc(ref);
        root.user = snapData(snap);
    }
    Router.start(app, root, components);
});
