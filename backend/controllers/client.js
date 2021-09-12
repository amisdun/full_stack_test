import { successResponse, errorResponse } from "../response/serverResponse.js";
import {
	createClient,
	deleteClient,
	getClient,
	getClients,
	updateClient,
} from "../services/client.js";

class ClientController {
	async postClient(req, res) {
		try {
			const response = await createClient(req.body);
			return successResponse(res, response, 201);
		} catch (error) {
			return errorResponse(res, error);
		}
	}

	async getAllClients(req, res) {
		try {
			const response = await getClients();
			return successResponse(res, response, 200);
		} catch (error) {
			return errorResponse(res, error);
		}
	}

	async getOneClient(req, res) {
		try {
			const response = await getClient(req.params.id);
			return successResponse(res, response);
		} catch (error) {
			errorResponse(res, error);
		}
	}

	async deleteOneClient(req, res) {
		try {
			await deleteClient(req.params.id);
			return successResponse(res);
		} catch (error) {
			return errorResponse(res, error);
		}
	}

	async updateOneClient(req, res) {
		try {
			const details = {
				_id: req.params.id,
				...req.body,
			};
			const response = await updateClient(details);
			return successResponse(res, response, 200);
		} catch (error) {
			return errorResponse(res, error);
		}
	}
}

export const clientController = new ClientController();
