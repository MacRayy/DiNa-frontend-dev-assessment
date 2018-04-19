'use strict'

import createAjax from './ajax.js'

const App = function () {
	const req = createAjax()

	const logUsers = (resp) => {
		console.log(resp)
	}

	let users = req.ajax('http://js-assessment-backend.herokuapp.com/users', 'GET', logUsers)
}

App()
