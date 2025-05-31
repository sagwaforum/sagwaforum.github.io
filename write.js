document.getElementById('postForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nickname = document.getElementById('nickname').value.trim();
  const title = document.getElementById('title').value.trim();
  const category = document.getElementById('category').value;
  const content = document.getElementById('content').value.trim();

  // 나중에 욕설 필터링 들어갈 자리

  // 기본 유효성 확인
  if (!nickname || !title || !content) {
    alert("모든 항목을 입력해주세요.");
    return;
  }

  // 임시 확인
  console.log("새 글 등록됨:", {
    nickname,
    title,
    category,
    content,
    date: new Date().toISOString(),
  });

  alert("글이 등록되었습니다! (현재는 콘솔에만 저장됨)");
  // 홈으로 이동 (또는 firebase 저장 후 이동)
  window.location.href = "index.html";
});
