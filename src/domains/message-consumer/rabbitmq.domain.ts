import * as amqplib from "amqplib";
import env from "../../infra/constants/env";
import type { RabbitMQInterface } from "../../interfaces/implements/rabbitmq.interface";
import type { ImongoDto } from "../../interfaces/dto/mongo.dto";

export class RabbitMq implements RabbitMQInterface {
	private connection: amqplib.Connection | undefined;
	private channel: amqplib.Channel | undefined;

	constructor() {
		this.startUp();
		console.log("RabbitMQ connected and listening");
	}
	public async startUp(): Promise<void> {
		try {
			this.connection = await amqplib.connect(env.RMQ_HOST);
			this.channel = await this.connection.createChannel();
			await this.channel.assertExchange(env.RMQ_EXCHANGE, "topic", {
				durable: true,
			});
			await this.channel.assertQueue(env.RMQ_QUEUE);
			await this.channel.bindQueue(
				env.RMQ_QUEUE,
				env.RMQ_EXCHANGE,
				env.RMQ_ROUTING_KEY,
			);
		} catch (error) {
			console.error("Error to connect RabitMQ:", error);
		}
	}

	async consumer(
		queue: string,
		handler: (payload: ImongoDto) => Promise<void>,
	) {
		if (!this.channel) {
			await this.startUp();
		}

		if (this.channel) {
			this.channel.consume(queue, async (message) => {
				if (message) {
					try {
						const messagePayload = JSON.parse(message.content.toString());
						await handler(messagePayload);
						this.channel?.ack(message);
					} catch (errorMessage) {
						console.log("Rejected message: ", message.content.toString());
						this.channel?.nack(message, false, false);
					}
				}
			});
			return true;
		}
		throw new Error("Channel not found!");
	}
}
