import mongoose from "mongoose";
const { model, Schema, Types } = mongoose;

const clientSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	phone: {
		type: String,
		required: true,
	},
	providers: [{ type: Types.ObjectId, ref: "Providers", required: true }],
});

const Client = model("Client", clientSchema);

export { Client };
