const state = {
  coins: Number(localStorage.getItem("tts_coins") || 100),
  score: Number(localStorage.getItem("tts_score") || 0),
  streak: Number(localStorage.getItem("tts_streak") || 0),
  dark: localStorage.getItem("tts_dark") === "1"
};

const $ = (id) => document.getElementById(id);

function render() {
  $("coins").textContent = state.coins;
  $("score").textContent = state.score;
  $("streak").textContent = state.streak;
  document.body.classList.toggle("dark", state.dark);
  $("themeButton").textContent = state.dark ? "☀️" : "🌙";
}

function message(text) {
  $("message").textContent = text;
}

$("themeButton").addEventListener("click", () => {
  state.dark = !state.dark;
  localStorage.setItem("tts_dark", state.dark ? "1" : "0");
  render();
});

$("startButton").addEventListener("click", () => {
  message("🎮 Mesin permainan TTS sedang disiapkan. Level 1 akan menjadi level pertama yang dimainkan.");
});

document.querySelectorAll(".menu-card").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const labels = {
      levels: "🧩 Daftar 500 level akan tersedia di sini.",
      daily: "📅 TTS harian akan tersedia di sini.",
      hint: "💡 Petunjuk akan menggunakan koin.",
      leaderboard: "🏆 Leaderboard akan ditambahkan pada tahap berikutnya."
    };
    message(labels[action] || "");
  });
});

render();
