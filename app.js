'use strict'

import createAjax from './ajax.js'
import UIController from './view.js'

const App = function() {
	const req = createAjax()
	const UICtrl = UIController()

	const DOM = UICtrl.DOMStrings

	const getUsers = response => {
		UICtrl.userController(response)

		setUpEventListeners()
	}

	const setUpEventListeners = () => {
		const DOMUSers = Array.from(document.querySelectorAll(DOM.statusBtn))
		DOMUSers.forEach(user => user.addEventListener('click', changeStatus))
	}

	const changeStatus = () => {
		console.log('change status')
	}

	req.ajax('http://js-assessment-backend.herokuapp.com/users', 'GET')
		.then(getUsers)
}

App()
