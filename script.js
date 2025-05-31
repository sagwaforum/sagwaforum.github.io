

// 카드 생성 함수
function createPostCard(post) {
  return `
    <div class="post-card" onclick="location.href='posts/${post.link}';">
      <div class="meta">📁 ${post.category} • ${post.date}</div>
      <h3 class="title">${post.title}</h3>
      <p class="summary">${post.summary}</p>
    </div>
  `;
}

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
