import { assert } from "../assertion/assert.js";
import {
	documentAlreadyExists,
	documentExists,
} from "../assertion/documentAssertion.js";
import { Providers } from "../models/providers.js";

const providerFormatter = ["id", "name"];

export const createProvider = async (Details) => {
	const { name, id } = Details;
	await documentAlreadyExists(
		Providers,
		{ $or: [{ id }, { name }] },
		"Provider Name or ID Already Exists",
	);
	return await Providers.create(Details);
};

export const updateProvider = async (Details) => {
	const { _id, ...fieldsToUpdate } = Details;
	await documentExists(Providers, { _id }, "resource not found");
	return await Providers.findByIdAndUpdate(
		_id,
		{ ...fieldsToUpdate },
		{ new: true },
	);
};

export const getProviders = async () => {
	const providers = await Providers.find({}, providerFormatter);
	assert(providers, "No resource found");
	return providers;
};

export const getProvider = async (id) => {
	await documentExists(Providers, { id }, "resource not found");
	return await Providers.findOne({ id }, providerFormatter);
};

export const deleteProvider = async (id) => {
	await documentExists(Providers, { id }, "resource not found");
	await Providers.findOneAndDelete({ id });
};
