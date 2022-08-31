const menuBtn = document.querySelector('.menu-icon')
const menuContainer = document.querySelector('.dropdown-menu-content')
const searchBtn = document.querySelector('.search-icon')
const mainContent = document.querySelector('.main-content')

let isOpen = true


document.addEventListener('DOMContentLoaded', ()=> {
	menuContainer.style.left = '0px'
	mainContent.style.left = '240px'
})

menuBtn.addEventListener('click', () => {
  if (!isOpen) {
	menuContainer.style.left = '0px'
	mainContent.style.left = '240px'
    isOpen = true
  }
  else {
	menuContainer.style.left = '-240px'
	mainContent.style.left = '0px'
    isOpen = false
  }
})

searchBtn.addEventListener('click', () => {

})