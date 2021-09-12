import { express } from "../packages/index.js";
import providerRoute from "./providers.js";
import clientRouter from "./client.js";
const Router = express.Router();

Router.use("/providers", providerRoute);
Router.use("/clients", clientRouter);

export default Router;
