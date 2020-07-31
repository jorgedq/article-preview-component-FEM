const $share = document.querySelector(".share-component");
const $btn = document.querySelector(".article-user-btn-share");
document.addEventListener("click", (e) => {
  if (e.target.matches(".article-user-btn-share")) {
    $share.classList.toggle("d-none");
    $btn.classList.toggle("is-dark");
  }
});
