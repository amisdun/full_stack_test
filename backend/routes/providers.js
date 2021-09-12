import { express } from "../packages/index.js";
import { providerController } from "../controllers/providers.js";
import { providerValidation } from "../validators/provider.js";
import { validationChecker } from "../validators/validationChecker.js";
const Router = express.Router();

Router.post(
	"/",
	providerValidation,
	validationChecker,
	providerController.postProvider,
);
Router.get("/", providerController.getAllProviders);
Router.get("/:id", providerController.getOneProvider);
Router.put("/:id", providerController.updateOneProvider);
Router.delete("/:id", providerController.deleteOneClient);

export default Router;
