import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- PASTE YOUR CONFIG HERE ---
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "larplarplarp.firebaseapp.com",
    projectId: "larplarplarp",
    storageBucket: "larplarplarp.appspot.com",
    messagingSenderId: "428336369892",
    appId: "1:428336369892:web:0c968b393686ccc9729cf1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Send message
document.getElementById('post-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = document.getElementById('username').value;
    const msg = document.getElementById('message').value;

    await addDoc(collection(db, "posts"), {
        user, msg, timestamp: new Date()
    });
    document.getElementById('message').value = '';
});

// Real-time listener
const q = query(collection(db, "posts"), orderBy("timestamp", "asc"));
onSnapshot(q, (snapshot) => {
    const container = document.getElementById('forum-posts');
    container.innerHTML = "";
    snapshot.forEach((doc) => {
        const p = doc.data();
        container.innerHTML += `
            <div class="post">
                <h3>${p.user}</h3>
                <p>${p.msg}</p>
            </div>
        `;
    });
    container.scrollTop = container.scrollHeight;
});