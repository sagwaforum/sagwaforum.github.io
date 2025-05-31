// 예시 게시글 배열
const posts = [
  {
    id: 1,
    title: "아이폰 16 루머 총정리",
    summary: "2025년형 아이폰에 들어갈 주요 기능은 무엇일까?",
    category: "iPhone",
    date: "2025.05.31",
  },
  {
    id: 2,
    title: "M4 칩 맥북, 드디어 출시",
    summary: "애플 실리콘 3세대 M4 칩 장착 맥북 시리즈",
    category: "Mac",
    date: "2025.05.30",
  },
];

// 카드 생성 함수
function createPostCard(post) {
  return `
    <div class="post-card">
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
