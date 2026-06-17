// Load posts on startup
document.addEventListener('DOMContentLoaded', loadPosts);

function addPost() {
    const user = document.getElementById('username').value;
    const msg = document.getElementById('message').value;

    if (!user || !msg) return alert("Please fill in both fields!");

    const post = { user, msg, date: new Date().toLocaleString() };
    
    // Save to localStorage
    const posts = JSON.parse(localStorage.getItem('larpPosts') || '[]');
    posts.unshift(post); // Add new post to the top
    localStorage.setItem('larpPosts', JSON.stringify(posts));

    document.getElementById('message').value = ''; // Clear input
    loadPosts();
}

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem('larpPosts') || '[]');
    const container = document.getElementById('forum-posts');
    container.innerHTML = posts.map(p => `
        <div class="post">
            <h3>${p.user} <small>${p.date}</small></h3>
            <p>${p.msg}</p>
        </div>
    `).join('');
}