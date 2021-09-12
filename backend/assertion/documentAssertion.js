import { assert } from "./assert.js";

export const documentExists = async (document, query, message) => {
	if (document) {
		const response = await document.findOne(query);
		assert(!!(response && response?._id), message);
	}
};

export const documentAlreadyExists = async (document, query, message) => {
	if (document) {
		const response = await document.findOne(query);
		assert(!(response && response?._id), message);
	}
};
