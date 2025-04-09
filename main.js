const burgerMenu = document.querySelector('.burger-menu')
const burgerNav = document.querySelector('.main-nav--burger')

burgerMenu.addEventListener('click', e => {
	burgerMenu.classList.toggle('transform')
	const burgerSwitch = burgerNav.classList.toggle('show')
	if (burgerSwitch) {
		burgerNav.style.opacity = '1'
		burgerNav.style.pointerEvents = 'all'
	} else {
		burgerNav.style.opacity = '0'
		burgerNav.style.pointerEvents = 'none'
	}
})

// работа всех форм на странице с классом .custom-form
const formEL = document.querySelectorAll('.custom-form')

formEL.forEach(element => {
	element.addEventListener('submit', e => {
		e.preventDefault()
		console.log('Форма отправлена')
	})
})

// const inputEL = document.querySelectorAll('.custom-input__field')

// inputEL.forEach(element => {
// 	element.addEventListener('focus', function () {
// 		inputEL.style.backgroundColor = 'white'
// 	})
// })

// анимация блоков при скролле с классом hidden-block
document.addEventListener('DOMContentLoaded', function () {
	const animatedBlock = document.querySelectorAll('.hidden-block')

	function visibleFunc(block) {
		const rect = block.getBoundingClientRect()
		const windowHeight = window.innerHeight

		if (rect.top < windowHeight - 100) {
			block.classList.add('hidden-block--visible')
			block.classList.remove('hidden-block')
		}
	}

	document.addEventListener('scroll', e => {
		animatedBlock.forEach(block => {
			if (block) {
				visibleFunc(block)
			}
		})
	})
})

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
