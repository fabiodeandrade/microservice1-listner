import type { DependencyContainer } from "../../shared/container.dependency";

export class ProductService {
	private dependencyContainer: DependencyContainer;

	constructor(dependencyContainer: DependencyContainer) {		
		this.dependencyContainer = dependencyContainer;
	}

	public async getAllProducts() {
		const products = await this.dependencyContainer.getMongoClient().getAll();
		return products;
	}

	public async getProductById(id: string) {
		const products = await this.dependencyContainer.getMongoClient().getProductById(id);
		return products;
	}
}
