// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector('body')
  let header = document.querySelector('.header')
  let headerInputMain = document.querySelector('.header-search__input-main')
  let headerDesktopSearch = document.querySelector('.header-desktop__search')
  let headerDesktopList = document.querySelector('.header-desktop__list')
  let DesktopPlate = document.querySelector('.desktop-plate')

  /* Main */
  let headerSearch = document.querySelector('.header-search')
  let headerMainSearch = document.querySelector('.header-main__search')
  let headerMainSearchMobile = document.querySelector('.header-input__mobile')
  let headerMainList = document.querySelector('.header-main__list')
  let headerMainBack = document.querySelector('.header-mobile__back')
  let headerMainLogo = document.querySelector('.header-mobile__logo')
  let headerMainModal = document.querySelector('.main-modal')

  /* Desktop */
  headerMainSearch.addEventListener('click', function (event) {
    body.classList.add('plate')
    header.classList.add('active')
    headerMainSearch.classList.add('active')
    headerMainList.classList.add('active')
    headerSearch.classList.add('active')
  })

  document.addEventListener('click', e => {
    const withinBoundaries = e.composedPath().includes(headerMainSearch)
    if (!withinBoundaries) {
      body.classList.remove('plate')
      headerMainSearch.classList.remove('active')
      header.classList.remove('active')
      headerMainList.classList.remove('active')
      headerSearch.classList.remove('active')
    }
  })

  headerMainSearchMobile.onclick = function () {
    body.classList.add('lock')
    headerMainBack.classList.add('active')
    headerMainLogo.classList.add('hide')
    headerMainModal.classList.add('active')
  }
  headerMainBack.onclick = function () {
    body.classList.remove('lock')
    headerMainBack.classList.remove('active')
    headerMainLogo.classList.remove('hide')
    headerMainModal.classList.remove('active')
  }


});
