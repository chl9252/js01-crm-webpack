
console.log('request.js')
	const axios = require('axios')

	const url = 'http://89.108.64.67:3000'
	const key = '?key=adjf989f89981045789sdf'
	const address = '/orders/'

	const dbRequest = {
		getList (callback) {
			const path = url + '/orders/' + key
			const params = { method: 'GET' }

/**			fetch(path, params)
				.then(answer => answer.json())*/
			axios.get(path)
				.then(result => callback(result.data))
		},

		getOrderById (address, callback) {
			const path = url + address + key
			const params = { method: 'GET' }

/**			fetch(path, params)
				.then(answer => answer.json())*/
			axios.get(path)
				.then(result => callback(result.data))
		},
	

		editOrderById (address, orderData, callback) {
			const path = url + address + key
			const params = {
				method: 'PUT',
				body: JSON.stringify(orderData)
			}
/**				fetch(path, params)
				.then(answer => answer.json())*/
			axios.put(path)
				.then(result => callback(result.data))
		},
		createOrder (orderData, callback) {
			const path = url + '/order/' + key
			const params = {
				method: 'POST',
				body: JSON.stringify(orderData)
			}

/**			fetch(path, params)
				.then(answer => answer.json())*/
			axios.post(path,orderData)
				.then(result => callback(result.data))
		},

		deleteOrderById (address, callback) {
			const path = url + address + key
			const params = { method: 'DELETE' }

/**			fetch(path, params)
				.then(answer => answer.text())*/
			axios.delete(path)
				.then(result => callback(result.data))
		},
	

		reinit (callback) {
			const path = url + '/reinit/' + key
			const params = { method: 'POST' }

/**			fetch(path, params)
				.then(answer => answer.text())*/
			axios.post(path)
				.then(result => callback(result.data))
		}
	}

	export default window.dbRequest = dbRequest


// Получить все заказы
// GET /orders

// Получить заказ по ID
// GET /order/:id

// Создать новый заказ
// POST /order body

// Изменить заказ
// PUT /order/:id body

// Удалить заказ
// DELETE /order/:id

// Сброс базы данных
// POST /reinit