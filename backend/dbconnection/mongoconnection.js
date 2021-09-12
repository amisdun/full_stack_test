import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class MongooseConnection {
	constructor(db_url) {
		this.db_url = db_url;
	}

	connection() {
		try {
			mongoose.connect(
				this.db_url,
				{
					useNewUrlParser: true,
					useUnifiedTopology: true,
					useFindAndModify: false,
					useCreateIndex: true,
					autoIndex: true,
				},
				(error) => {
					if (error) return new Error("Failed to connect to Database");
					console.log("Database connected..");
				},
			);
		} catch (error) {
			console.log(error);
		}
	}
}

const db_connection = new MongooseConnection(process.env.MONGODB_URI);

export { db_connection };
