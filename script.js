const videoContainer = document.getElementById("videoContainer");
const swipeText = document.getElementById("swipeText");
const showBtn = document.getElementById("showBtn");
const message = document.getElementById("message");

let startX = 0;
let dragging = false;

function startDrag(x){
  startX = x;
  dragging = true;
  swipeText.style.opacity = "0";
}

function drag(x){
  if(!dragging) return;

  let move = x - startX;

  if(move > 0){
    videoContainer.style.transform =
      `translateX(${move}px) rotate(${move/12}deg)`;
  }

  if(move > 120){
    revealCard();
  }
}

function endDrag(){
  dragging = false;
}

function revealCard(){
  videoContainer.style.transform = "translateX(500px)";
  videoContainer.style.opacity = "0";

  // إظهار الزر
  showBtn.style.display = "block";
}

/* زر الرسالة */
showBtn.onclick = () =>{
  message.style.opacity = "1";
};

/* ماوس */
videoContainer.addEventListener("mousedown", e=>startDrag(e.clientX));
window.addEventListener("mousemove", e=>drag(e.clientX));
window.addEventListener("mouseup", endDrag);

/* موبايل */
videoContainer.addEventListener("touchstart", e=>startDrag(e.touches[0].clientX));
window.addEventListener("touchmove", e=>drag(e.touches[0].clientX));
window.addEventListener("touchend", endDrag);
