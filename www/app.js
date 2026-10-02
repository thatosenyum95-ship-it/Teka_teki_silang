const KEY="tts_v1";
const state=JSON.parse(localStorage.getItem(KEY)||'{"level":1,"coins":100,"score":0,"streak":0,"dark":false,"completed":[]}');

const puzzles=[
{answers:[
 {start:[0,0],dir:"down",answer:"API",clue:"Sumber panas dan cahaya dari pembakaran"},
 {start:[0,0],dir:"right",answer:"ALAT",clue:"Benda yang digunakan untuk membantu pekerjaan"},
 {start:[1,0],dir:"right",answer:"PADI",clue:"Tanaman yang menghasilkan beras"},
 {start:[2,0],dir:"right",answer:"IKAN",clue:"Hewan yang hidup di air"}]},
{answers:[
 {start:[0,0],dir:"down",answer:"AIR",clue:"Cairan yang kita minum setiap hari"},
 {start:[0,0],dir:"right",answer:"AYAM",clue:"Unggas yang sering dipelihara untuk telur atau daging"},
 {start:[1,0],dir:"right",answer:"IKAN",clue:"Hewan yang hidup di air"},
 {start:[2,0],dir:"right",answer:"ROTI",clue:"Makanan yang sering disantap saat sarapan"}]},
{answers:[
 {start:[0,0],dir:"down",answer:"BOLA",clue:"Benda bundar yang digunakan dalam banyak olahraga"},
 {start:[0,0],dir:"right",answer:"BUKU",clue:"Kumpulan halaman yang dibaca"},
 {start:[1,0],dir:"right",answer:"OBAT",clue:"Sesuatu yang digunakan untuk membantu mengobati penyakit"},
 {start:[2,0],dir:"right",answer:"LAMPU",clue:"Benda yang menghasilkan cahaya"},
 {start:[3,0],dir:"right",answer:"AYAM",clue:"Hewan berkaki dua yang berkokok"}]},
{answers:[
 {start:[0,0],dir:"down",answer:"KOPI",clue:"Minuman hitam yang sering diminum saat pagi"},
 {start:[0,0],dir:"right",answer:"KOTA",clue:"Wilayah permukiman yang padat"},
 {start:[1,0],dir:"right",answer:"OBAT",clue:"Sesuatu untuk membantu mengatasi penyakit"},
 {start:[2,0],dir:"right",answer:"PADI",clue:"Tanaman penghasil beras"},
 {start:[3,0],dir:"right",answer:"IKAN",clue:"Hewan yang hidup di air"}]},
{answers:[
 {start:[0,0],dir:"down",answer:"NASI",clue:"Makanan pokok yang berasal dari beras"},
 {start:[0,0],dir:"right",answer:"NAGA",clue:"Makhluk mitologi berbentuk reptil besar"},
 {start:[1,0],dir:"right",answer:"AIR",clue:"Minuman tanpa warna yang sangat penting bagi tubuh"},
 {start:[2,0],dir:"right",answer:"SAPI",clue:"Hewan ternak yang menghasilkan susu"},
 {start:[3,0],dir:"right",answer:"IKAN",clue:"Hewan yang berenang di air"}]},
{answers:[
 {start:[0,0],dir:"down",answer:"BUKU",clue:"Tempat kumpulan tulisan atau cerita"},
 {start:[0,0],dir:"right",answer:"BOLA",clue:"Benda bundar untuk bermain atau berolahraga"},
 {start:[1,0],dir:"right",answer:"ULAR",clue:"Hewan melata tanpa kaki"},
 {start:[2,0],dir:"right",answer:"KURSI",clue:"Tempat untuk duduk"},
 {start:[3,0],dir:"right",answer:"IKAN",clue:"Hewan yang hidup di air"}]},
{answers:[
 {start:[0,0],dir:"down",answer:"SAPI",clue:"Hewan ternak yang menghasilkan susu"},
 {start:[0,0],dir:"right",answer:"SATE",clue:"Makanan berupa potongan daging yang ditusuk"},
 {start:[1,0],dir:"right",answer:"APEL",clue:"Buah yang sering berwarna merah atau hijau"},
 {start:[2,0],dir:"right",answer:"PADI",clue:"Tanaman penghasil beras"}]},
{answers:[
 {start:[0,0],dir:"down",answer:"ROTI",clue:"Makanan yang dibuat dari tepung dan dipanggang"},
 {start:[0,0],dir:"right",answer:"RUSA",clue:"Hewan bertanduk yang hidup di hutan"},
 {start:[1,0],dir:"right",answer:"OBAT",clue:"Sesuatu yang digunakan saat sakit"},
 {start:[2,0],dir:"right",answer:"TIKUS",clue:"Hewan kecil yang sering mencari makanan di rumah"},
 {start:[3,0],dir:"right",answer:"IKAN",clue:"Hewan yang hidup di air"}]},
{answers:[
 {start:[0,0],dir:"down",answer:"KOTA",clue:"Tempat dengan banyak bangunan dan penduduk"},
 {start:[0,0],dir:"right",answer:"KACA",clue:"Bahan bening yang sering dipakai pada jendela"},
 {start:[1,0],dir:"right",answer:"OBAT",clue:"Sesuatu untuk membantu menyembuhkan penyakit"},
 {start:[2,0],dir:"right",answer:"TAHU",clue:"Makanan berbahan dasar kedelai"}]},
{answers:[
 {start:[0,0],dir:"down",answer:"IKAN",clue:"Hewan yang bernapas di air dengan insang"},
 {start:[0,0],dir:"right",answer:"IBU",clue:"Orang tua perempuan"},
 {start:[1,0],dir:"right",answer:"KACA",clue:"Bahan bening yang digunakan untuk jendela"},
 {start:[2,0],dir:"right",answer:"NAGA",clue:"Makhluk mitologi berbentuk reptil besar"}]}
];

const $=id=>document.getElementById(id);
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function difficulty(){if(state.level<=50)return"🟢 Pemula";if(state.level<=100)return"🟡 Mudah";if(state.level<=150)return"🟠 Menengah";if(state.level<=200)return"🔵 Menengah Atas";if(state.level<=250)return"🟣 Sulit";if(state.level<=300)return"🔴 Sangat Sulit";if(state.level<=350)return"⚫ Expert";if(state.level<=400)return"🔥 Master";if(state.level<=450)return"💎 Grand Master";return"👑 Legenda"}
function current(){return puzzles[(state.level-1)%puzzles.length]}
function makeLayout(answers){
 const cells=Array.from({length:6},()=>Array(6).fill("#"));
 answers.forEach(a=>{for(let i=0;i<a.answer.length;i++){const r=a.start[0]+(a.dir==="down"?i:0),c=a.start[1]+(a.dir==="right"?i:0);if(r<6&&c<6)cells[r][c]=a.answer[i]}});
 return cells
}
function render(){
 $("levelNumber").textContent=state.level;$("coins").textContent=state.coins;$("score").textContent=state.score;$("streak").textContent=state.streak;$("difficulty").textContent=difficulty();
 document.body.classList.toggle("dark",state.dark);$("themeButton").textContent=state.dark?"☀️":"🌙";
 $("nextButton").hidden=!state.completed.includes(state.level);
 buildGrid();buildClues()
}
function buildGrid(){
 const answers=current().answers,g=$("grid");g.innerHTML="";
 const layout=makeLayout(answers);
 layout.forEach((row,r)=>row.forEach((v,c)=>{
  const el=document.createElement("input");el.className="cell";el.maxLength=1;el.autocomplete="off";el.dataset.r=r;el.dataset.c=c;
  if(v==="#"){el.classList.add("block");el.disabled=true}
  else{el.inputMode="text";el.addEventListener("input",()=>{el.value=el.value.toUpperCase().replace(/[^A-Z]/g,"").slice(-1);el.classList.remove("wrong","correct");updateProgress();if(el.value)focusNext(r,c)})}
  g.appendChild(el)
 }));
 updateProgress()
}
function buildClues(){
 const box=document.querySelector(".clues");box.querySelectorAll(".clue").forEach(x=>x.remove());
 current().answers.forEach((a,i)=>{
  const b=document.createElement("button");b.className="clue";b.dataset.index=i;
  b.innerHTML="<b>"+(i+1)+".</b> "+a.clue+" <span>💡 "+a.answer.length+" huruf</span>";
  b.addEventListener("click",()=>useHint(i));box.appendChild(b)
 })
}
function cell(r,c){return document.querySelector(`.cell[data-r="${r}"][data-c="${c}"]`)}
function focusNext(r,c){let n=cell(r,c+1);if(!n||n.disabled){for(let rr=r;rr<6&&!n;rr++)for(let cc=(rr===r?c+1:0);cc<6;cc++){const x=cell(rr,cc);if(x&&!x.disabled&&!x.value){n=x;break}}}if(n)n.focus()}
function updateProgress(){const answers=current().answers;let done=0;answers.forEach(a=>{let ok=true;for(let i=0;i<a.answer.length;i++){const r=a.start[0]+(a.dir==="down"?i:0),c=a.start[1]+(a.dir==="right"?i:0);if(cell(r,c).value!==a.answer[i])ok=false}if(ok)done++});$("progress").textContent=`${done} / ${answers.length} terjawab`}
function useHint(index){
 if(state.coins<3){$("message").textContent="🪙 Koin tidak cukup. Petunjuk membutuhkan 3 koin.";return}
 const a=current().answers[index];let target=-1;
 for(let i=0;i<a.answer.length;i++){const r=a.start[0]+(a.dir==="down"?i:0),c=a.start[1]+(a.dir==="right"?i:0),el=cell(r,c);if(el.value!==a.answer[i]){target=i;break}}
 if(target<0){$("message").textContent="✅ Jawaban ini sudah benar.";return}
 const r=a.start[0]+(a.dir==="down"?target:0),c=a.start[1]+(a.dir==="right"?target:0),el=cell(r,c);
 el.value=a.answer[target];el.classList.add("hint");state.coins-=3;save();updateProgress();$("coins").textContent=state.coins;$("message").textContent="💡 1 huruf dibuka. -3 koin."
}
function check(){
 const answers=current().answers;let all=true;
 answers.forEach(a=>{for(let i=0;i<a.answer.length;i++){const r=a.start[0]+(a.dir==="down"?i:0),c=a.start[1]+(a.dir==="right"?i:0),el=cell(r,c);if(el.value===a.answer[i])el.classList.add("correct"),el.classList.remove("wrong");else el.classList.add("wrong"),el.classList.remove("correct"),all=false}});
 updateProgress();
 if(all){
  if(!state.completed.includes(state.level)){state.completed.push(state.level);state.score+=100;state.coins+=10;state.streak+=1;save()}
  $("message").textContent="🎉 Benar! +100 skor dan +10 koin. Level selesai!";
  $("nextButton").hidden=false;render()
 }else $("message").textContent="❌ Masih ada jawaban yang salah. Kotak merah perlu diperbaiki."
}
$("checkButton").addEventListener("click",check);
$("nextButton").addEventListener("click",()=>{if(state.level<500){state.level++;save();$("message").textContent="";render()}else $("message").textContent="👑 Kamu sudah mencapai Level 500!"});
$("themeButton").addEventListener("click",()=>{state.dark=!state.dark;save();render()});
render();