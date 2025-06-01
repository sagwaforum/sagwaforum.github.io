const SERVER_URL = "https://complex-plant-flavor.glitch.me";

// 글 목록 불러오기
async function loadPosts() {
  const res = await fetch(`${SERVER_URL}/posts`);
  const posts = await res.json();

  const list = document.querySelector(".post-list");

  if (!posts.length) {
    list.innerHTML = `
      <div class="empty">
        <div class="emoji">📱</div>
        <p class="title">게시물이 없습니다</p>
        <p class="sub">첫 번째 게시물을 작성해보세요!</p>
      </div>
    `;
    return;
  }

  list.innerHTML = posts.map(p => `
    <div class="post-card">
      <div class="meta">📁 ${p.category} • ${p.nickname} • ${p.createdAt?.slice(0, 10) ?? ''}</div>
      <h3 class="title">${p.title}</h3>
      <p class="summary">${p.content}</p>
    </div>
  `).join("");
}

loadPosts();
