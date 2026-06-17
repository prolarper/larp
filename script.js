import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = { /* YOUR CONFIG HERE */ };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login Logic
document.getElementById('login-btn').addEventListener('click', async () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    try {
        await signInWithEmailAndPassword(auth, email, pass);
        // Replace with your email address for admin access
        if (email === "your-email@example.com") {
            document.getElementById('admin-panel').style.display = 'block';
        }
        alert("Logged in successfully!");
    } catch (e) { alert(e.message); }
});

// Admin Logic
document.getElementById('mega-btn').addEventListener('click', async () => {
    const title = document.getElementById('megatitle').value;
    await addDoc(collection(db, "threads"), { title, type: "megathread" });
    alert("Megathread saved to database!");
});