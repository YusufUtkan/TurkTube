const menuBtn = document.querySelector('.menu-icon')
const menuContainer = document.querySelector('.dropdown-menu-content')
const toastContent = document.querySelector('.toast')
const searchBox = document.querySelector('.searc-input')
const closeBtn = document.querySelector('.close-btn')
const searchBtn = document.querySelector('.search-icon')

let isOpen = true

const toastTrigger = message => {
  toastContent.children[0].textContent = message
  toastContent.style.display = 'flex'

  setTimeout(() => {
    toastContent.style.display = 'none'
  }, 3000)
}


document.addEventListener('DOMContentLoaded', ()=> {
  menuContainer.style.left = '0px'
})

closeBtn.addEventListener('click', () => {
  toastContent.style.display = 'none'
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

searchBox.addEventListener('input', () => {
	toastTrigger('Sonuç Bulunamadı!')
})

searchBtn.addEventListener('click', () => {
	if (searchBox.value == ''){
		toastTrigger('Lütfen Birşey Aratınız!')
	}else {
		toastTrigger('Sonuç Bulunamadı!')
	}
})