import { successResponse, errorResponse } from "../response/serverResponse.js";
import {
	createProvider,
	deleteProvider,
	getProvider,
	getProviders,
	updateProvider,
} from "../services/providers.js";

class ProviderController {
	async postProvider(req, res) {
		try {
			const response = await createProvider(req.body);
			return successResponse(res, response, 201);
		} catch (error) {
			return errorResponse(res, error);
		}
	}

	async getAllProviders(req, res) {
		try {
			const response = await getProviders();
			return successResponse(res, response, 200);
		} catch (error) {
			return errorResponse(res, error);
		}
	}

	async getOneProvider(req, res) {
		try {
			const response = await getProvider(req.params.id);
			return successResponse(res, response);
		} catch (error) {
			return errorResponse(res, error);
		}
	}

	async deleteOneClient(req, res) {
		try {
			await deleteProvider(req.params.id);
			return successResponse(res);
		} catch (error) {
			return errorResponse(res, error);
		}
	}

	async updateOneProvider(req, res) {
		try {
			const details = {
				_id: req.params.id,
				...req.body,
			};
			const response = await updateProvider(details);
			return successResponse(res, response, 200);
		} catch (error) {
			return errorResponse(res, error);
		}
	}
}

export const providerController = new ProviderController();
