import { assert } from "../assertion/assert.js";
import {
	documentAlreadyExists,
	documentExists,
} from "../assertion/documentAssertion.js";
import { Client } from "../models/clients.js";

export const createClient = async (clientDetails) => {
	const { email } = clientDetails;
	await documentAlreadyExists(Client, { email }, "User Already Exists");
	const newClient = await Client.create(clientDetails);
	return newClient.populate("providers").execPopulate();
};

export const updateClient = async (clientDetails) => {
	const { _id, ...fieldsToUpdate } = clientDetails;
	await documentExists(Client, { _id }, "resource not found");
	const updatedClient = await Client.findByIdAndUpdate(
		_id,
		{ ...fieldsToUpdate },
		{ new: true },
	).populate("providers");
	return updatedClient.populate("providers").execPopulate();
};

export const getClients = async () => {
	const clients = await Client.find({}).populate({
		path: "providers",
		select: "name id",
	});
	assert(clients, "No resource found");
	return clients;
};

export const getClient = async (_id) => {
	await documentExists(Client, { _id }, "resource not found");
	return await Client.findById(_id).populate({
		path: "providers",
		select: "name id",
	});
};

export const deleteClient = async (_id) => {
	await documentExists(Client, { _id }, "resource not found");
	await Client.findByIdAndDelete(_id);
};
