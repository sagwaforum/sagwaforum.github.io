

// 카드 생성 함수
//function createPostCard(post) {
//  return `
//    <div class="post-card" onclick="location.href='posts/${post.link}';">
//      <div class="meta">📁 ${post.category} • ${post.date}</div>
//      <h3 class="title">${post.title}</h3>
//      <p class="summary">${post.summary}</p>
//    </div>
//  `;
//}

// 출력 함수

function displayPosts(postArray) {
  const container = document.querySelector(".post-list");
  if (!container) return;

  if (postArray.length === 0) {
    container.innerHTML = `
      <div class="empty">
        <div class="emoji">📱</div>
        <p class="title">게시물이 없습니다</p>
        <p class="sub">첫 번째 게시물을 작성해보세요!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = postArray.map(createPostCard).join("");
}

displayPosts(posts);

async function loadPosts() {
  const res = await fetch("https://sagwa-sqlite.glitch.me/posts");
  const posts = await res.json();

  const list = document.querySelector(".post-list");
  if (!posts.length) {
    list.innerHTML = "<p>게시물이 없습니다.</p>";
    return;
  }

  list.innerHTML = posts.map(p => `
    <div class="post-card">
      <div class="meta">📁 ${p.category} • ${p.nickname} • ${p.createdAt.slice(0,10)}</div>
      <h3 class="title">${p.title}</h3>
      <p class="summary">${p.content}</p>
    </div>
  `).join("");
}

loadPosts();
