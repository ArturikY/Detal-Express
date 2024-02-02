import axios from 'axios'

const instance = axios.create({
	baseURL: '/api',
})

instance.interceptors.request.use(config => {
	config.headers.Authorization = window.localStorage.getItem('token')
	config.headers['Access-Control-Allow-Origin'] = '*'
	return config
})

export default instance
