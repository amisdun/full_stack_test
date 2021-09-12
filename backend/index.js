// npm packages
import {
	express,
	morgan,
	path,
	SwaggerUI,
	cors,
	YAML,
	dotenv,
	bodyParser,
} from "./packages/index.js";
dotenv.config();

// MongoDB connection
import { db_connection } from "./dbconnection/mongoconnection.js";

import router from "./routes/index.js";

//Swagger Documentation
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yaml"));

db_connection.connection();

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.raw({ type: "*/*" }));
server.use(bodyParser.text({ type: "*/*" }));
server.use(cors());
server.use(morgan("dev"));
server.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));
server.use("/api", router);

server.listen(process.env.PORT, () => {
	console.log(`App is listening on ${process.env.PORT}`);
});
