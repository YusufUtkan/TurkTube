const menuBtn = document.querySelector('.menu-icon')
const menuContainer = document.querySelector('.dropdown-menu-content')
const mainContent = document.querySelector('.main-content')
const formContent = document.querySelector('form')
const links = document.querySelectorAll('.menu-link-item')
const logo = document.querySelector('.home')
const toast = document.querySelector('.toast')
const closeBtn = document.querySelector('.close-btn');

let isOpen = true

const removeActiveClasses = () => {
    links.forEach((link) =>{
        link.classList.remove("active")
    })
}

const updateDisplay = (leftValue) => {
	if (leftValue == -240) {
		menuContainer.style.left = '-240px'
		mainContent.style.left = '0px'
		mainContent.style.width = '100%'
	}else {
		menuContainer.style.left = '0px'
		mainContent.style.width = 'calc(100% - 240px)'
		mainContent.style.left = '240px'
	}
}

const toastTrigger = message => {
  toast.children[0].textContent = message
  toast.style.display = 'flex'
  
  setTimeout(() => {
	toast.style.display = 'none';
  }, 1250)
}

closeBtn.addEventListener('click', () => {
  toast.style.display = 'none'
})

logo.addEventListener('click', () => {
	removeActiveClasses()
	links[0].classList.add('active')
})

formContent.addEventListener('submit', (e) => {
	let input = formContent.children[0].value
	if (input == '' || input.trim(' ') == '') {
		e.preventDefault()
		toastTrigger('Lütfen Bir Şeyler Yazın')
		formContent.reset()
	}else {
		e.preventDefault()
		window.open(`https://www.youtube.com/results?search_query=${formContent.children[0].value}`, '_blank')
	}
})

links.forEach((link) => {
	link.addEventListener('click', () => {
		removeActiveClasses()
		link.classList.add('active')
	})
})

document.addEventListener('DOMContentLoaded', ()=> {
	updateDisplay(0)
	links[0].classList.add('active')
	console.log(window.innerWidth)
})

menuBtn.addEventListener('click', () => {
  if (!isOpen) {
	updateDisplay(0)
    isOpen = true
  }
  else {
	updateDisplay(-240)
    isOpen = false
  }
})


$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.scroll-top').fadeIn()
	} else {
		$('.scroll-top').fadeOut()
	}
    })

$('.scroll-top').click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 600)
	return false
})