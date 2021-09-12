import { expressValidator } from "../packages/index.js";

export const clientValidation = [
	expressValidator
		.check("name")
		.notEmpty()
		.withMessage("Client name is required"),
	expressValidator
		.check("email")
		.notEmpty()
		.withMessage("Client email is required")
		.isEmail()
		.withMessage("Enter a valid email"),
	expressValidator
		.check("phone")
		.notEmpty()
		.withMessage("Client phone is required"),
	expressValidator
		.check("providers")
		.notEmpty()
		.withMessage("Providers are required"),
];
