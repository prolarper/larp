import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = { /* USE YOUR PREVIOUS CONFIG */ };
const db = getFirestore(initializeApp(firebaseConfig));

// Simple logic to add a thread
document.querySelector('button').addEventListener('click', async () => {
    const title = document.querySelector('input').value;
    const content = document.querySelector('textarea').value;
    
    await addDoc(collection(db, "posts"), {
        title, content, timestamp: new Date()
    });
    alert("Thread Created!");
});