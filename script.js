let pathImages = document.querySelectorAll(
  ".PathImg, .PathImg2, .PathImg3, .PathImg4, .PathImg5"
);

pathImages.forEach(function (img) {
  img.addEventListener("click", function () {
    let down = img.closest(".questionsDiv").querySelector(".down");
    down.classList.toggle("downNone");
  });
});
