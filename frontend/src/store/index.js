import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		providers: [],
		clients: [],
	},
	getters: {
		clients: (state) => state.clients,
		providers: (state) => state.providers,
	},
	mutations: {
		ADD_PROVIDERS(state, providers) {
			state.providers = providers;
		},
		ADD_CLIENTS(state, clients) {
			state.clients = clients;
		},
		ADD_CLIENT(state, client) {
			state.clients.push(client);
		},
		DELETE_CLIENT(state, key) {
			state.clients.splice(key, 1);
		},
		UPDATE_CLIENT(state, { key: key, client: client }) {
			state.clients[key] = client;
		},
	},
	actions: {
		fetchProviders({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("http://localhost:8000/api/providers/")
					.then((res) => {
						const {
							data: { response },
						} = res;
						commit("ADD_PROVIDERS", response);
						resolve(response);
					})
					.catch((err) => reject(err));
			});
		},

		fetchClients({ commit }) {
			return new Promise((resolve, reject) => {
				axios
					.get("http://localhost:8000/api/clients/")
					.then((res) => {
						const {
							data: { response },
						} = res;
						commit("ADD_CLIENTS", response);
						resolve(response);
					})
					.catch((err) => reject(err));
			});
		},

		addClient({ commit }, data) {
			return new Promise((resolve, reject) => {
				axios
					.post(`http://localhost:8000/api/clients/`, data)
					.then((res) => {
						const {
							data: { response },
						} = res;
						commit("ADD_CLIENT", response);
						resolve(res);
					})
					.catch((err) => reject(err));
			});
		},
		deleteClient({ commit }, data) {
			return new Promise((resolve, reject) => {
				axios
					.delete(`http://localhost:8000/api/clients/${data.id}`)
					.then((response) => {
						commit("DELETE_CLIENT", data.key);
						resolve(response);
					})
					.catch((err) => reject(err));
			});
		},
		updateClient({ commit }, payload) {
			return new Promise((resolve, reject) => {
				axios
					.put(`http://localhost:8000/api/clients/${payload.id}`, payload.data)
					.then((res) => {
						const {
							data: { response },
						} = res;
						commit("UPDATE_CLIENT", {
							key: payload.key,
							client: response,
						});
						resolve(res);
					})
					.catch((err) => reject(err));
			});
		},
	},
	modules: {},
});
