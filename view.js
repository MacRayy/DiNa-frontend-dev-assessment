'use strict'

const UIController = function () {
	const DOMStrings = {
		userList: '.user-list',
		prevBtn: '.btn-prev',
		nextBtn: '.btn-next'
	}

	const displayUsers = (users) => {
		const userList = document.querySelector(DOMStrings.userList)
		const prevButton = document.querySelector(DOMStrings.prevBtn)
		const nextButton = document.querySelector(DOMStrings.nextBtn)

		let start = 0
		let end = 10

		const displayTenUsers = () => {
			userList.innerHTML = ''

			let tenUsers = users.slice(start, end)

			tenUsers.forEach((user, i) => {
				const li = document.createElement('li')
				userList.appendChild(li).setAttribute('class', `user-${i + 1}`)
				document.querySelector(`.user-${i + 1}`).innerHTML = `${user.first_name} ${user.last_name} was created at ${user.created_at}`
			})
		}

		const displayNextTen = () => {
			if (end <= users.length) {
				start += 10
				end += 10
				displayTenUsers()
			}
		}

		const displayPrevTen = () => {
			if (start > 0) {
				start -= 10
				end -= 10
				displayTenUsers()
			}
		}

		prevButton.addEventListener('click', displayPrevTen)
		nextButton.addEventListener('click', displayNextTen)

		displayTenUsers(0, 10)
	}

	return {
		DOMStrings,
		displayUsers
	}
}

export default UIController
