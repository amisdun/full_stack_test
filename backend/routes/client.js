import { express } from "../packages/index.js";
import { clientValidation } from "../validators/client.js";
import { clientController } from "../controllers/client.js";
import { validationChecker } from "../validators/validationChecker.js";
const Router = express.Router();

Router.get("/", clientController.getAllClients);
Router.post(
	"/",
	clientValidation,
	validationChecker,
	clientController.postClient,
);
Router.get("/:id", clientController.getOneClient);
Router.delete("/:id", clientController.deleteOneClient);
Router.put("/:id", clientController.updateOneClient);

export default Router;
