const card = document.getElementById("card");
const videoContainer = document.getElementById("videoContainer");

let startX = 0;
let isDragging = false;

function startDrag(x){
  startX = x;
  isDragging = true;
}

function drag(x){
  if(!isDragging) return;

  let move = x - startX;

  if(move > 0){
    card.style.transform = `translateX(${move}px) rotate(${move/10}deg)`;
  }

  // إذا سحب أكثر من 150px
  if(move < 50){
    revealVideo();
  }
}

function endDrag(){
  isDragging = false;
}

function revealVideo(){
  card.style.transform = "translateX(500px)";
  card.style.opacity = "0";
  videoContainer.style.opacity = "1";
}

/* ماوس */
card.addEventListener("mousedown", (e)=>{
  startDrag(e.clientX);
});
window.addEventListener("mousemove", (e)=>{
  drag(e.clientX);
});
window.addEventListener("mouseup", endDrag);

/* جوال */
card.addEventListener("touchstart", (e)=>{
  startDrag(e.touches[0].clientX);
});
window.addEventListener("touchmove", (e)=>{
  drag(e.touches[0].clientX);
});
window.addEventListener("touchend", endDrag);