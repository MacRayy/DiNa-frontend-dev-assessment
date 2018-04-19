'use strict'

const createAjax = function () {
	const ajax = (url, method, callback) => {
		const xhr = new XMLHttpRequest()
		xhr.open(method, url)
		xhr.setRequestHeader('Content-Type', 'application/json')
		xhr.onreadystatechange = () => {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					const rsp = JSON.parse(xhr.response)
					callback(rsp)
					console.info(rsp)
				} else {
					console.error('error:' + xhr.status)
				}
			}
		}
		xhr.send()
	}

	return {
		ajax
	}
}

export default createAjax
