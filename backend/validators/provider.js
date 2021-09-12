import { expressValidator } from "../packages/index.js";

export const providerValidation = [
	expressValidator
		.check("name")
		.notEmpty()
		.withMessage("Provider name is required"),
];
