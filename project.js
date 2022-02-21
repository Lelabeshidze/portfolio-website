var slideIndex = 0
showSlides()

function showSlides() {
	var i
	var slides = document.querySelectorAll('.mySlides')
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	slideIndex++
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	slides[slideIndex - 1].style.display = 'block'
	setTimeout(showSlides, 5000)
}

var scroll =
	window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60)
	}
var elementsToShow = document.querySelectorAll('.show-on-scroll')

function loop() {
	Array.prototype.forEach.call(elementsToShow, function (element) {
		if (isElementInViewport(element)) {
			element.classList.add('is-visible')
		} else {
			element.classList.remove('is-visible')
		}
	})

	scroll(loop)
}

loop()

function isElementInViewport(el) {
	if (typeof jQuery === 'function' && el instanceof jQuery) {
		el = el[0]
	}
	var rect = el.getBoundingClientRect()
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <=
				(window.innerHeight ||
					document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight))
	)
}

{
	var slideIndex = 1
	showSlides(slideIndex)

	function currentSlide(n) {
		showSlides((slideIndex = n))
	}

	function showSlides(n) {
		var i
		var slides = document.getElementsByClassName('recomendation-content')
		var dots = document.getElementsByClassName('recomendation-btn')
		if (n > slides.length) {
			slideIndex = 1
		}
		if (n < 1) {
			slideIndex = slides.length
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none'
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' active', '')
		}
		slides[slideIndex - 1].style.display = 'block'
		slides[slideIndex - 1].style.display = 'flex'
		dots[slideIndex - 1].className += ' active'
	}
}


const generateFilters = () => {
	const filterItems = [
		...document.querySelectorAll('.latest-projects-nav li'),
	]
	const projectItems = [...document.querySelectorAll('.project-item')]

	filterItems.forEach((filterItem) => {
		filterItem.addEventListener('click', () => {
			const filterItemId = filterItem.id
			if (filterItemId === 'all') {
				projectItems.forEach((projItem) => {
					projItem.classList.remove('hidden2')
				})
			} else {
				projectItems.forEach((projItem) => {
					projItem.classList.add('hidden2')
          if (projItem.dataset.filter === filterItemId) {
            projItem.classList.remove('hidden2')
          }
        })
			}
		})
	})
}
generateFilters()

// Get the modal
var modal = document.getElementById('user-notification')

const btn = document.querySelector('.sendbutton')

var span = document.getElementsByClassName('modal-close')[0]

// btn.onclick = function () {
// 	modal.style.display = 'block'
// }

span.onclick = function () {
	modal.style.display = 'none'
}

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none'
	}
}

const form = document.getElementById('contact-info-form')
const userName = document.querySelector('#name')
const email = document.querySelector('#email')
const website = document.querySelector('#website')
const message = document.querySelector('#message')

form.addEventListener('submit', (e) => {
	e.preventDefault()
	const userData = {
		nameVal: userName.value,
		emailVal: email.value,
		websiteVal: website.value,
		messageVal: message.value,
	}

	sendMessage(userData)
		.then((result) => {
			if (!result || result.status !== 'ok') {
				alert('something went wrong on the server')
			} else {
				Object.keys(userData).forEach((idkey) => {
					const element = document.getElementById(idkey)
					element.innerText = userData[idkey]
				})
				modal.style.display = 'flex'
			}
		})
		.catch((error) => console.log(error))
})
function sendMessage(userData) {
	return new Promise((resolve, reject) => {
		const createUserRequest = fetch(
			'http://api.kesho.me/v1/user-test/contact',
			{
				method: 'POST',
				body: JSON.stringify(userData),
				headers: {
					'Content-type': 'application/json',
				},
			}
		)
		createUserRequest
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				resolve(data)
			})
			.catch((error) => {
				console.log(error)
				reject(error)
			})
	})
}
