import { mongoose } from "../packages/index.js";

const providersSchema = mongoose.Schema({
	id: {
		type: Number,
		required: [true, "ID field is required"],
	},
	name: {
		type: String,
		required: [true, "Name field is required"],
	},
});

const Providers = mongoose.model("Providers", providersSchema);

export { Providers };
