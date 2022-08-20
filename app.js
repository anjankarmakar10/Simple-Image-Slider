const imageContainer = document.querySelector(".image-container");
const btnPrev = document.getElementById("icon-prev");
const btnNext = document.getElementById("icon-next");

let currentImg = 1;
let timeOut;
const imgLength = document.querySelectorAll("img").length;

btnNext.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeOut);
  updateImge();
});

btnPrev.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeOut);
  updateImge();
});

updateImge();

function updateImge() {
  if (currentImg > imgLength) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgLength;
  }
  imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeOut = setTimeout(() => {
    currentImg++;
    updateImge();
  }, 3000);
}
