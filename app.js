'use strict'

import createAjax from './ajax.js'
import UIController from './view.js'

const App = function () {
	const req = createAjax()
	const UICtrl = UIController()

	const DOM = UIController.DOMStrings

	req.ajax('http://js-assessment-backend.herokuapp.com/users', 'GET', UICtrl.displayUsers)
}

App()
