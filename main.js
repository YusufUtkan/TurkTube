const menuBtn = document.querySelector('.menu-icon')
const menuContainer = document.querySelector('.dropdown-menu-content')

let isOpen = true

document.addEventListener('DOMContentLoaded', ()=> {
  menuContainer.style.left = '0px'
})

menuBtn.addEventListener('click', () => {
  if (!isOpen) {
    menuContainer.style.left = '0px'
    isOpen = true
  }
  else {
    menuContainer.style.left = '-240px'
    isOpen = false
  }
})