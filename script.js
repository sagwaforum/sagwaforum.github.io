  import { supabase } from './supabase.js';

  async function loadPosts() {
    const { data: posts, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    const list = document.querySelector(".post-list");
    if (error || !posts) {
      list.innerHTML = "<p>불러오기 실패</p>";
      return;
    }

    list.innerHTML = posts.map(p => `
      <div class="post-card">
        <div class="meta">📁 ${p.category} • ${p.nickname} • ${p.created_at.slice(0,10)}</div>
        <h3 class="title">${p.title}</h3>
        <p class="summary">${p.content}</p>
      </div>
    `).join("");
  }

  loadPosts();
