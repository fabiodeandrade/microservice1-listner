import type { DependencyContainer } from "../../interfaces/shared/container.dependency";

export class QueueConsume {
	private dependencyContainer: DependencyContainer;

	constructor(dependencyContainer: DependencyContainer) {
		this.dependencyContainer = dependencyContainer;
	}

	public async consume(): Promise<void> {
		const rabbitMQ = this.dependencyContainer.getRabbitMQ();
		const mongoDb = this.dependencyContainer.getMongoClient();
		await rabbitMQ.consumer("queue1", async (payload) => {
			mongoDb.create(payload);
		});
	}
}
