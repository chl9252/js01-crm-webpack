/**import $ from 'jquery'
import popper from 'popper.js'
import bootstrap from 'bootstrap'
import './css/main.css'
import './request'*/
console.log('hints.js') 

main()

function main () {
	const reinit = document.getElementById("reinit-btn")
		reinit.addEventListener('click', function(event) {
			event.stopPropagation()
			dbRequest.reinit(() => {
			location.replace('main.html')
			})
		})


}

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