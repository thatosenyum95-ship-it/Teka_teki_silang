const state={coins:Number(localStorage.getItem('coins')||50),score:Number(localStorage.getItem('score')||0),streak:Number(localStorage.getItem('streak')||0)};
document.getElementById('coins').textContent=state.coins;
document.getElementById('score').textContent=state.score;
document.getElementById('streak').textContent=state.streak;
document.getElementById('themeBtn').onclick=()=>document.body.classList.toggle('dark');
document.getElementById('startBtn').onclick=()=>alert('Mode bermain TTS sedang disiapkan. Grid dan soal harian akan kita tambahkan berikutnya! 🧩');
