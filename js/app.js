const $share = document.querySelector('.share-list')

const $btn = document.querySelector('.person__share-img')

document.addEventListener('click', e => {
  if (e.target.matches('.person__share-img')) {
    $share.classList.toggle('d-none')
    $btn.classList.toggle('person-share-img-dark')
  }
})
