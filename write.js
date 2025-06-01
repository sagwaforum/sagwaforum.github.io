const badWords = [
  "ㅅㅂ", "ㅄ", "ㅈㄹ", "ㅁㅊ", "ㅆㅂ", "ㅅㄲ", "ㄲㅈ", "ㄱㅅㄲ", "ㅂㅅ", "ㄴㄱㅅㄲ",
  "씨발", "시발", "씨바", "시바", "ㅆ바", "ㅆ발", "썅", "개새끼", "개쉐리", "개색기",
  "좆", "좃", "좇", "좁밥", "좃밥", "걸레년", "걸레같은", "년", "놈", "놈년", "늬미", "느금", "느그엄", "느그애미",
  "염병", "염뵹", "염병할", "지랄", "지럴", "지럴하네", "지랄맞네", "지랄하고", "지랄하네", "지랄병", "ㅈㄹ",
  "병신", "병신같은", "빙신", "븅신", "븅신같은", "똘아이", "또라이", "돌아이", "돌은아이", "돌았네", "정신병자",
  "상년", "상놈", "후장", "창녀", "창놈", "색갸", "새꺄", "새끼", "새키", "세끼", "세키", "색희", "쉐리", "쉬발", "쉬뱅",
  "fuck", "f u c k", "fuk", "fuxx", "shit", "s h i t", "bitch", "asshole", "ass",
  "motherfucker", "mf", "wtf", "fml", "bastard", "dick", "pussy", "cunt", "suck my", "blow job", 
  "cum", "jizz", "boobs", "tits", "nipple", "porn", "slut", "hoe", "whore",
  "음란물", "야동", "야사", "야짤", "야한", "섹스", "자위", "자X", "자지", "보지", "보짓", "보x", "보X",
  "애무", "모텔", "ㅈ같", "ㅈ까", "좇같", "좇까", "느금마", "느그애비", "애미", "애비", "애미뒤짐", "애비죽음",
  "X발", "X같", "X끼", "X새끼", "ㅂㅅ같", "개같", "개소리", "개같은", "개좆", "개지랄", "개색", "개자식", "개간년",
  "조까", "좇밥", "좇같", "좇빠", "오줌싸개", "빠큐", "좆망", "씹", "씹년", "씹새", "씹할", "씨바랄", "씨벌", "씨팔",
  "죽어라", "뒤져라", "자살해", "디질래", "죽이고싶다", "찢어죽일", "패버린다", "좆같다", "조까", "좆까", "좃까", "뻐큐", "창녀","딸딸"
];

function containsBadWord(text) {
  const lowered = text.toLowerCase();
  return badWords.some(word => lowered.includes(word));
}

// 필터링 함수
function containsBadWord(text) {
  return badWords.some(word => text.includes(word));
}

document.getElementById("postForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const nickname = document.getElementById("nickname").value.trim();
  const content = document.getElementById("content").value.trim();
  const category = document.getElementById("category").value;

  const post = { title, nickname, content, category };

  try {
    const res = await fetch("https://complex-plant-flavor.glitch.me/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    });

    const result = await res.json();
    if (result.success) {
      alert("글이 등록되었습니다!");
      window.location.href = "index.html";
    }
  } catch (err) {
    alert("서버 오류: " + err.message);
  }
});

  
