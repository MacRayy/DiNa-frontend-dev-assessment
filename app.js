'use strict'

import createAjax from './ajax.js'
import UIController from './view.js'

const App = function () {
	const req = createAjax()
	const UICtrl = UIController()

	const DOM = UICtrl.DOMStrings

	const render = (response) => {
		UICtrl.userController(response)

		setUpEventListeners()
	}

	const setUpEventListeners = () => {
		document.querySelector(DOM.statusBtn).addEventListener('click', changeStatus)
	}

	const changeStatus = () => {
		console.log('change status')
		req.ajax('http://js-assessment-backend.herokuapp.com/users', 'PUT', render)
	}

	req.ajax('http://js-assessment-backend.herokuapp.com/users', 'GET', render)
}

App()
