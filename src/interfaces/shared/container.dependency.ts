import { RabbitMq } from "../../domains/message-consumer/rabbitmq.domain";
import { MongooseDb } from "../../domains/persist/mongoose.domain";

export class DependencyContainer {
	private mongoClient: MongooseDb;
	private rabbitMQ: RabbitMq;

	constructor() {
		this.mongoClient = new MongooseDb();
		this.rabbitMQ = new RabbitMq();
	}

	getMongoClient(): MongooseDb {
		return this.mongoClient;
	}

	getRabbitMQ(): RabbitMq {
		return this.rabbitMQ;
	}
}


