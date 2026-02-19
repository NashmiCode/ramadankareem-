const videoContainer = document.getElementById("videoContainer");
const swipeText = document.getElementById("swipeText");

let startX = 0;
let isDragging = false;

function startDrag(x){
  startX = x;
  isDragging = true;

  // اخفاء النص عند بدء السحب
  swipeText.style.opacity = "0";
}

function drag(x){
  if(!isDragging) return;

  let move = x - startX;

  if(move > 0){
    videoContainer.style.transform = `translateX(${move}px) rotate(${move/12}deg)`;
  }

  // إذا سحب أكثر من 120px
  if(move > 120){
    revealImage();
  }
}

function endDrag(){
  isDragging = false;
}

function revealImage(){
  videoContainer.style.transform = "translateX(500px)";
  videoContainer.style.opacity = "0";
}

/* ماوس */
videoContainer.addEventListener("mousedown", e => startDrag(e.clientX));
window.addEventListener("mousemove", e => drag(e.clientX));
window.addEventListener("mouseup", endDrag);

/* موبايل */
videoContainer.addEventListener("touchstart", e => startDrag(e.touches[0].clientX));
window.addEventListener("touchmove", e => drag(e.touches[0].clientX));
window.addEventListener("touchend", endDrag);
