import type { ImongoDto } from "../dto/mongo.dto";

export interface RabbitMQInterface {
	startUp(): Promise<void>;
	consumer(
		queue: string,
		hanndler: (payload: ImongoDto) => Promise<void>,
	): Promise<boolean>;
}
