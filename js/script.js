const share1 = document.querySelector("#share1");
const shareCo = document.querySelector(".share-component");
const profileCo = document.querySelector(".profile-container");
const share2 = document.querySelector("#share2");
share1.addEventListener("click", () => {
  if (window.innerWidth < 1025) {
    profileCo.classList.toggle("hidden");
  }
  shareCo.classList.toggle("hidden");
});
share2.addEventListener("click", () => {
  if (window.innerWidth < 1025) {
    profileCo.classList.toggle("hidden");
  }
  shareCo.classList.toggle("hidden");
});
