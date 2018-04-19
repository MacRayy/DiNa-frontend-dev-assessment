'use strict'

const createAjax = function () {
	const ajax = (url, method) => {
		return new Promise((resolve, reject) => {


		const xhr = new XMLHttpRequest()
		xhr.open(method, url)
		// let userData = {
		// 	status: 'inactive'
		// };
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.onreadystatechange = () => {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					const rsp = JSON.parse(xhr.response)
					resolve(rsp)
					console.info(rsp)
				} else {
					console.error(`error: ${xhr.status}`)
				}
			}
		}
		// if (userData.status !== undefined) {
		// 	xhr.send(JSON.stringify(userData))
		// } else {
			xhr.send();
		// }
		}
	}

	return {
		ajax
	}
}

export default createAjax
