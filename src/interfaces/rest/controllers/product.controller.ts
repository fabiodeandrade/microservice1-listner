import type { Request, Response } from "express";
import { ProductService } from "../services/product.service";
import type { DependencyContainer } from "../../shared/container.dependency";

export class ProductController {
	public productService: ProductService;

	constructor(dependencyContainer: DependencyContainer) {
		this.productService = new ProductService(dependencyContainer);
	}

	async getAllProducts(req: Request, res: Response) {
		const products = await this.productService.getAllProducts();
		res.status(200).send(products);
	}

	public async getProducById(req: Request, res: Response) {
		const product = await this.productService.getProductById(req.params.id);
		res.status(200).send(product);
	}
}
