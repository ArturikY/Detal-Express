// import cors from 'cors'
import express from 'express'
import next from 'next'

import {
	BidController,
	UserController,
} from './backend/controllers/controllers.js'
import { checkAuth, handleValidationErrors } from './backend/utils/utils.js'
import {
	BidValidations,
	UserValidations,
} from './backend/validations/validations.js'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	server.use(express.json())
	server.use(cors())

	server.post(
		'/api/auth/login',
		UserValidations.loginValid,
		handleValidationErrors,
		UserController.login
	)
	server.post(
		'/api/auth/register',
		UserValidations.registerValid,
		handleValidationErrors,
		UserController.register
	)
	server.get('/api/auth/me', checkAuth, UserController.getMe)
	server.patch(
		'/api/auth/update',
		checkAuth,
		UserValidations.registerValid,
		handleValidationErrors,
		UserController.updateMe
	)

	server.get('/api/bids', BidController.getAll)

	server.post(
		'/api/bids',
		checkAuth,
		BidValidations.createValid,
		handleValidationErrors,
		BidController.create
	)

	server.all('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(3000, err => {
		if (err) throw err
		console.log('Ready on http://localhost:3000')
	})
})
