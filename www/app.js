const KEY="tts_v2";
const saved=JSON.parse(localStorage.getItem(KEY)||"null");
const old=JSON.parse(localStorage.getItem("tts_v1")||"null");
const state=saved||{
  level:old&&old.level||1,
  coins:old&&old.coins||100,
  score:old&&old.score||0,
  streak:old&&old.streak||0,
  dark:old&&old.dark||false,
  completed:old&&old.completed||[]
};
if(!Array.isArray(state.completed))state.completed=[];

const WORDS=[
["API","Sumber panas dan cahaya dari pembakaran"],["AIR","Cairan yang diminum setiap hari"],["AYAM","Unggas yang sering dipelihara"],["IKAN","Hewan yang hidup di air"],["PADI","Tanaman penghasil beras"],["NASI","Makanan pokok dari beras"],["SAPI","Hewan ternak penghasil susu"],["KOTA","Wilayah dengan banyak penduduk"],["BUKU","Kumpulan halaman untuk dibaca"],["BOLA","Benda bundar untuk olahraga"],["OBAT","Sesuatu yang digunakan saat sakit"],["ROTI","Makanan yang dibuat dari tepung"],["KOPI","Minuman yang sering diminum pagi hari"],["SATE","Potongan daging yang ditusuk"],["APEL","Buah yang sering berwarna merah"],["TAHU","Makanan berbahan dasar kedelai"],["KACA","Bahan bening untuk jendela"],["ULAR","Hewan melata tanpa kaki"],["KURSI","Tempat untuk duduk"],["LAMPU","Benda yang menghasilkan cahaya"],["RUSA","Hewan bertanduk yang hidup di hutan"],["TIKUS","Hewan kecil yang sering mencari makanan"],["NAGA","Makhluk mitologi berbentuk reptil besar"],["IBU","Orang tua perempuan"],["AYAH","Orang tua laki-laki"],["BUAH","Hasil dari tumbuhan yang dapat dimakan"],["DAUN","Bagian tumbuhan yang biasanya berwarna hijau"],["AKAR","Bagian tumbuhan yang berada di dalam tanah"],["BATU","Benda keras dari alam"],["PASIR","Butiran kecil yang banyak ditemukan di pantai"],["LAUT","Perairan asin yang sangat luas"],["SUNGAI","Aliran air menuju tempat yang lebih rendah"],["GUNUNG","Daratan tinggi yang menjulang"],["HUJAN","Air yang turun dari langit"],["AWAN","Kumpulan titik air di langit"],["ANGIN","Gerakan udara"],["API","Nyala yang menghasilkan panas"],["ES","Air yang membeku"],["GULA","Bahan pemanis makanan"],["GARAM","Bahan pemberi rasa asin"],["MADU","Cairan manis yang dihasilkan lebah"],["TELUR","Bahan makanan yang berasal dari unggas"],["DAGING","Bagian hewan yang biasa dimakan"],["SUSU","Minuman bergizi dari hewan atau tumbuhan"],["KEJU","Makanan yang dibuat dari susu"],["NASI","Makanan pokok masyarakat Indonesia"],["MIE","Makanan berbentuk untaian panjang"],["KUE","Makanan manis yang sering dipanggang"],["ROKET","Kendaraan yang dapat meluncur ke luar angkasa"],["KERETA","Kendaraan yang berjalan di atas rel"],["MOBIL","Kendaraan roda empat"],["MOTOR","Kendaraan roda dua"],["SEPEDA","Kendaraan yang dikayuh"],["KAPAL","Kendaraan yang berlayar di air"],["PESAWAT","Kendaraan yang terbang di udara"],["JALAN","Tempat kendaraan dan orang melintas"],["JEMBATAN","Penghubung dua tempat yang dipisahkan"],["RUMAH","Tempat tinggal"],["SEKOLAH","Tempat belajar"],["GURU","Orang yang mengajar"],["MURID","Orang yang belajar"],["BUKU","Benda yang berisi tulisan atau cerita"],["PENA","Alat untuk menulis"],["PENSIL","Alat tulis yang dapat dihapus"],["MEJA","Perabot dengan permukaan datar"],["PINTU","Bagian rumah untuk keluar masuk"],["JENDELA","Tempat masuk cahaya dan udara"],["KAMAR","Ruangan untuk beristirahat"],["DAPUR","Tempat memasak"],["PASAR","Tempat orang membeli dan menjual barang"],["TOKO","Tempat menjual barang"],["UANG","Alat pembayaran"],["HARGA","Nilai suatu barang"],["WAKTU","Ukuran untuk menunjukkan lamanya kejadian"],["HARI","Satuan waktu setelah malam atau sebelum malam berikutnya"],["BULAN","Satuan waktu sekitar empat minggu"],["TAHUN","Satuan waktu sekitar dua belas bulan"],["PAGI","Waktu setelah malam sebelum siang"],["SIANG","Waktu ketika matahari tinggi"],["MALAM","Waktu setelah matahari terbenam"],["MERAH","Warna seperti cabai"],["BIRU","Warna seperti langit cerah"],["HIJAU","Warna seperti daun"],["PUTIH","Warna seperti kapas"],["HITAM","Warna paling gelap"],["KUCING","Hewan peliharaan yang mengeong"],["ANJING","Hewan peliharaan yang menggonggong"],["BURUNG","Hewan yang memiliki sayap dan bulu"],["GAJAH","Hewan besar dengan belalai"],["HARIMAU","Kucing besar bergaris"],["MONYET","Hewan yang pandai memanjat"],["KELINCI","Hewan kecil bertelinga panjang"],["LEBAH","Serangga penghasil madu"],["KUPU","Serangga bersayap indah"],["SEMUT","Serangga kecil yang hidup berkelompok"],["LAPTOP","Komputer yang mudah dibawa"],["RADIO","Alat untuk mendengarkan siaran suara"],["KAMERA","Alat untuk mengambil gambar"],["MUSIK","Seni yang menggunakan bunyi"],["LAGU","Rangkaian nada yang dinyanyikan"],["FILM","Cerita yang disajikan melalui gambar bergerak"],["GAME","Permainan yang dimainkan untuk hiburan"],["BINTANG","Benda langit yang tampak bercahaya"],["MATAHARI","Bintang pusat tata surya"],["BUMI","Planet tempat manusia hidup"],["BULAN","Satelit alami bumi"],["PLANET","Benda langit yang mengorbit bintang"],["RODA","Bagian kendaraan yang berbentuk lingkaran"],["KUNCI","Benda untuk membuka atau mengunci"],["JAM","Alat untuk melihat waktu"],["PAYUNG","Benda untuk melindungi dari hujan"],["SEPATU","Alas kaki"],["BAJU","Pakaian yang dipakai di tubuh bagian atas"],["TOPI","Penutup kepala"],["TAS","Wadah untuk membawa barang"],["KERTAS","Bahan tipis untuk menulis"],["KAYU","Bahan keras dari pohon"],["BESI","Logam yang kuat"],["EMAS","Logam mulia berwarna kuning"],["PERAK","Logam mulia berwarna putih"],["CINTA","Perasaan kasih sayang"],["TEMAN","Orang yang dekat dan sering bersama"],["KELUARGA","Orang-orang yang memiliki hubungan keluarga"],["SENYUM","Ekspresi wajah ketika bahagia"],["CERIA","Keadaan yang penuh kegembiraan"],["TENANG","Keadaan tanpa banyak gangguan"]
];

const $=function(id){return document.getElementById(id)};
function save(){localStorage.setItem(KEY,JSON.stringify(state))}
function difficulty(){
 if(state.level<=50)return"🟢 Pemula";
 if(state.level<=100)return"🟡 Mudah";
 if(state.level<=150)return"🟠 Menengah";
 if(state.level<=200)return"🔵 Menengah Atas";
 if(state.level<=250)return"🟣 Sulit";
 if(state.level<=300)return"🔴 Sangat Sulit";
 if(state.level<=350)return"⚫ Expert";
 if(state.level<=400)return"🔥 Master";
 if(state.level<=450)return"💎 Grand Master";
 return"👑 Legenda"
}
function questionCount(){
 if(state.level<=50)return 10;
 if(state.level<=100)return 12;
 if(state.level<=150)return 14;
 if(state.level<=250)return 15;
 if(state.level<=350)return 18;
 return 20;
}
function levelSeed(){
 return state.level*7919+questionCount()*97;
}
function rng(seed){
 return function(){
  seed=(seed*1664525+1013904223)>>>0;
  return seed/4294967296;
 }
}
function shuffle(items,random){
 const a=items.slice();
 for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));const t=a[i];a[i]=a[j];a[j]=t}
 return a
}
function chooseWords(){
 const random=rng(levelSeed());
 const wanted=questionCount();
 let pool=shuffle(WORDS,random).filter(function(x){return x[0].length>=3});
 const picked=[];
 const used={};
 const minLen=state.level>250?4:3;
 pool=pool.filter(function(x){return x[0].length>=minLen});
 for(let i=0;i<pool.length&&picked.length<wanted;i++){
  const key=pool[i][0];
  if(!used[key]){used[key]=true;picked.push(pool[i])}
 }
 return picked;
}

function canPlace(board,word,row,col,dir){
 const h=board.length,w=board[0].length;
 const dr=dir==="down"?1:0,dc=dir==="right"?1:0;
 const endR=row+dr*(word.length-1),endC=col+dc*(word.length-1);
 if(row<1||col<1||endR>=h-1||endC>=w-1)return false;
 let crosses=0;
 for(let i=0;i<word.length;i++){
  const r=row+dr*i,c=col+dc*i,ch=board[r][c];
  if(ch!==""&&ch!==word[i])return false;
  if(ch===word[i])crosses++;
  const side=[[r-1,c],[r+1,c],[r,c-1],[r,c+1]];
  if(ch===""){
   for(let j=0;j<side.length;j++){
    const rr=side[j][0],cc=side[j][1];
    if(rr>=0&&rr<h&&cc>=0&&cc<w&&board[rr][cc]!==""){
     if((dir==="right"&&(rr!==row||cc<col||cc>endC))||(dir==="down"&&(cc!==col||rr<row||rr>endR)))return false;
    }
   }
  }
 }
 return crosses>0;
}
function put(board,word,row,col,dir){
 const dr=dir==="down"?1:0,dc=dir==="right"?1:0;
 for(let i=0;i<word.length;i++)board[row+dr*i][col+dc*i]=word[i];
}
function generatePuzzle(){
 const size=31,board=Array.from({length:size},function(){return Array(size).fill("")});
 const candidates=chooseWords().sort(function(a,b){return b[0].length-a[0].length});
 const placed=[];
 if(candidates.length===0)return {size:1,cells:[],words:[]};
 const first=candidates[0][0];
 const start=Math.floor(size/2)-Math.floor(first.length/2);
 put(board,first,start,start,"right");
 placed.push({answer:first,clue:candidates[0][1],row:start,col:start,dir:"right"});
 for(let k=1;k<candidates.length;k++){
  const pair=candidates[k],word=pair[0];
  let best=null;
  for(let p=0;p<placed.length;p++){
   const base=placed[p];
   for(let i=0;i<word.length;i++)for(let j=0;j<base.answer.length;j++){
    if(word[i]!==base.answer[j])continue;
    const dir=base.dir==="right"?"down":"right";
    const row=base.row+(base.dir==="down"?j:0)-(dir==="down"?i:0);
    const col=base.col+(base.dir==="right"?j:0)-(dir==="right"?i:0);
    if(canPlace(board,word,row,col,dir)){
     const score=1+(word.length-i)/10;
     if(!best||score>best.score)best={row:row,col:col,dir:dir,score:score}
    }
   }
  }
  if(best){
   put(board,word,best.row,best.col,best.dir);
   placed.push({answer:word,clue:pair[1],row:best.row,col:best.col,dir:best.dir});
  }
 }
 if(placed.length<Math.min(5,candidates.length)){
  return generateFallback(candidates);
 }
 let minR=size,maxR=0,minC=size,maxC=0;
 for(let r=0;r<size;r++)for(let c=0;c<size;c++)if(board[r][c]!==""){minR=Math.min(minR,r);maxR=Math.max(maxR,r);minC=Math.min(minC,c);maxC=Math.max(maxC,c)}
 const pad=1;
 minR=Math.max(0,minR-pad);maxR=Math.min(size-1,maxR+pad);minC=Math.max(0,minC-pad);maxC=Math.min(size-1,maxC+pad);
 const rows=maxR-minR+1,cols=maxC-minC+1;
 const cells=Array.from({length:rows},function(_,r){return Array.from({length:cols},function(_,c){return board[minR+r][minC+c]})});
 placed.forEach(function(x){x.row-=minR;x.col-=minC});
 return {rows:rows,cols:cols,cells:cells,words:placed};
}
function generateFallback(candidates){
 const rows=1+Math.min(20,candidates.length)*2,cols=15;
 const board=Array.from({length:rows},function(){return Array(cols).fill("")});
 const words=[];
 let row=1;
 for(let i=0;i<candidates.length;i++){
  const w=candidates[i][0];
  if(w.length>cols-2)continue;
  const col=Math.max(1,Math.floor((cols-w.length)/2));
  if(row>=rows-1)break;
  put(board,w,row,col,"right");
  words.push({answer:w,clue:candidates[i][1],row:row,col:col,dir:"right"});
  row+=2;
 }
 return {rows:rows,cols:cols,cells:board,words:words};
}
let puzzle=generatePuzzle();
let selectedIndex=0;
let selectedDir="right";
let cellEls={};

function findWordsAt(r,c){
 const found=[];
 puzzle.words.forEach(function(w,i){
  for(let n=0;n<w.answer.length;n++){
   const rr=w.row+(w.dir==="down"?n:0),cc=w.col+(w.dir==="right"?n:0);
   if(rr===r&&cc===c){found.push({index:i,dir:w.dir});break}
  }
 });
 return found;
}
function wordCells(word){
 const a=[];
 for(let i=0;i<word.answer.length;i++)a.push([word.row+(word.dir==="down"?i:0),word.col+(word.dir==="right"?i:0)]);
 return a;
}
function clearClasses(){
 Object.keys(cellEls).forEach(function(k){cellEls[k].classList.remove("selected","active-word")});
}
function selectWord(index,dir){
 if(index<0||index>=puzzle.words.length)return;
 selectedIndex=index;selectedDir=dir||puzzle.words[index].dir;
 clearClasses();
 const w=puzzle.words[selectedIndex];
 wordCells(w).forEach(function(pos){
  const el=cellEls[pos[0]+"_"+pos[1]];
  if(el)el.classList.add("active-word");
 });
 updateActiveClue();
 const first=wordCells(w)[0];
 const el=cellEls[first[0]+"_"+first[1]];
 if(el)el.focus();
}
function selectCell(r,c){
 const found=findWordsAt(r,c);
 if(!found.length)return;
 let match=found.find(function(x){return x.dir===selectedDir});
 if(!match)match=found[0];
 selectWord(match.index,match.dir);
 const w=puzzle.words[selectedIndex];
 let target=null;
 wordCells(w).forEach(function(pos,i){if(pos[0]===r&&pos[1]===c)target=i});
 const el=cellEls[r+"_"+c];
 if(el){el.focus();el.dataset.position=String(target===null?0:target)}
 if(found.length>1)$("directionButton").hidden=false;else $("directionButton").hidden=true;
}
function updateActiveClue(){
 const w=puzzle.words[selectedIndex];
 $("activeNumber").textContent=w.number||"?";
 $("activeDirection").textContent=w.dir==="right"?"Mendatar":"Menurun";
 $("activeText").textContent=w.clue;
 document.querySelectorAll(".clue").forEach(function(el){el.classList.toggle("active",Number(el.dataset.index)===selectedIndex)});
}
function numberWords(){
 const starts={};
 puzzle.words.forEach(function(w){starts[w.row+"_"+w.col]=true});
 const ordered=puzzle.words.slice().sort(function(a,b){return a.row-b.row||a.col-b.col});
 const numbers={};let n=1;
 ordered.forEach(function(w){const key=w.row+"_"+w.col;if(!numbers[key])numbers[key]=n++});
 puzzle.words.forEach(function(w){w.number=numbers[w.row+"_"+w.col]});
}
function render(){
 $("levelNumber").textContent=state.level;
 $("coins").textContent=state.coins;
 $("score").textContent=state.score;
 $("streak").textContent=state.streak;
 $("difficulty").textContent=difficulty();
 $("progress").textContent="0 / "+puzzle.words.length+" terjawab";
 document.body.classList.toggle("dark",state.dark);
 $("themeButton").textContent=state.dark?"☀️":"🌙";
 $("nextButton").hidden=!state.completed.includes(state.level);
 numberWords();
 buildGrid();
 buildClues();
 selectWord(0,puzzle.words[0]&&puzzle.words[0].dir);
}
function buildGrid(){
 const g=$("grid");g.innerHTML="";cellEls={};
 g.style.gridTemplateColumns="repeat("+puzzle.cols+",32px)";
 for(let r=0;r<puzzle.rows;r++)for(let c=0;c<puzzle.cols;c++){
  const wrap=document.createElement("div");wrap.className="cell-wrap";
  const value=puzzle.cells[r][c];
  if(!value){wrap.classList.add("block");g.appendChild(wrap);continue}
  const input=document.createElement("input");
  input.className="cell";input.maxLength=1;input.autocomplete="off";input.inputMode="text";
  input.dataset.r=r;input.dataset.c=c;
  input.addEventListener("focus",function(){selectCell(r,c)});
  input.addEventListener("click",function(){selectCell(r,c)});
  input.addEventListener("input",function(){
   input.value=input.value.toUpperCase().replace(/[^A-Z]/g,"").slice(-1);
   input.classList.remove("wrong","correct");
   updateProgress();
   if(input.value)moveWithinWord(r,c,1);
  });
  const found=findWordsAt(r,c);
  const first=found.some(function(x){return puzzle.words[x.index].row===r&&puzzle.words[x.index].col===c});
  if(first){const num=document.createElement("span");num.className="cell-number";num.textContent=puzzle.words[found[0].index].number;wrap.appendChild(num)}
  wrap.appendChild(input);g.appendChild(wrap);cellEls[r+"_"+c]=input;
 }
}
function moveWithinWord(r,c,step){
 const w=puzzle.words[selectedIndex],positions=wordCells(w);
 let at=positions.findIndex(function(p){return p[0]===r&&p[1]===c});
 if(at<0)return;
 for(let i=at+step;i>=0&&i<positions.length;i+=step){
  const el=cellEls[positions[i][0]+"_"+positions[i][1]];
  if(el){el.focus();break}
 }
}
function buildClues(){
 const box=$("clueList");box.innerHTML="";
 puzzle.words.slice().sort(function(a,b){return a.number-b.number||a.dir.localeCompare(b.dir)}).forEach(function(w){
  const i=puzzle.words.indexOf(w);
  const b=document.createElement("button");b.className="clue";b.dataset.index=i;
  b.innerHTML="<b>"+w.number+".</b> "+w.clue+"<small>"+(w.dir==="right"?"Mendatar":"Menurun")+" • "+w.answer.length+" huruf</small>";
  b.addEventListener("click",function(){selectWord(i,w.dir)});
  box.appendChild(b);
 });
}
function updateProgress(){
 let done=0;
 puzzle.words.forEach(function(w){
  let ok=true;
  wordCells(w).forEach(function(pos,i){const el=cellEls[pos[0]+"_"+pos[1]];if(!el||el.value!==w.answer[i])ok=false});
  if(ok)done++;
 });
 $("progress").textContent=done+" / "+puzzle.words.length+" terjawab";
}
function hint(){
 const w=puzzle.words[selectedIndex];
 if(!w)return;
 let target=-1;
 const positions=wordCells(w);
 for(let i=0;i<positions.length;i++){
  const el=cellEls[positions[i][0]+"_"+positions[i][1]];
  if(el.value!==w.answer[i]){target=i;break}
 }
 if(target<0){$("message").textContent="✅ Kata ini sudah benar.";return}
 if(state.score<5){$("message").textContent="⭐ Poin tidak cukup. Petunjuk membutuhkan 5 poin.";return}
 const pos=positions[target],el=cellEls[pos[0]+"_"+pos[1]];
 el.value=w.answer[target];el.classList.add("hint");el.classList.remove("wrong");
 state.score-=5;save();updateProgress();
 $("score").textContent=state.score;
 $("message").textContent="💡 1 huruf dibuka. -5 poin.";
 moveWithinWord(pos[0],pos[1],1);
}
function check(){
 let all=true;
 puzzle.words.forEach(function(w){
  wordCells(w).forEach(function(pos,i){
   const el=cellEls[pos[0]+"_"+pos[1]];
   if(el.value===w.answer[i]){el.classList.add("correct");el.classList.remove("wrong")}
   else{el.classList.add("wrong");el.classList.remove("correct");all=false}
  });
 });
 updateProgress();
 if(!all){$("message").textContent="❌ Masih ada huruf yang salah.";return}
 if(!state.completed.includes(state.level)){
  state.completed.push(state.level);
  state.streak+=1;
  if(state.level%15===0){state.score+=15;$("message").textContent="🎉 Level selesai! Bonus +15 poin karena mencapai Level "+state.level+"."}
  else $("message").textContent="🎉 Level selesai! Semua jawaban benar.";
  save();
 }else $("message").textContent="✅ Level ini sudah selesai.";
 $("score").textContent=state.score;$("streak").textContent=state.streak;
 $("nextButton").hidden=false;
}
$("hintButton").addEventListener("click",hint);
$("checkButton").addEventListener("click",check);
$("directionButton").addEventListener("click",function(){
 const found=findWordsAt(Number(document.activeElement&&document.activeElement.dataset.r||0),Number(document.activeElement&&document.activeElement.dataset.c||0));
 if(found.length>1){
  const next=found.find(function(x){return x.dir!==selectedDir})||found[0];
  selectWord(next.index,next.dir);
 }
});
$("nextButton").addEventListener("click",function(){
 if(state.level>=500){$("message").textContent="👑 Kamu sudah mencapai Level 500!";return}
 state.level++;save();puzzle=generatePuzzle();selectedIndex=0;selectedDir="right";$("message").textContent="";render();
});
$("themeButton").addEventListener("click",function(){state.dark=!state.dark;save();render()});
render();