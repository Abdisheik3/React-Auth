import apiUrl from '../apiConfig'
import axios from 'axios'

export const playerCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/players',
		data: {
			player: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const playerIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/players',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const playerShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/players/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const playerUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/players/' + id,
		data: {
			player: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const playerDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/players/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}