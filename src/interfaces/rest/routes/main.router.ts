import type { ServerApi } from "../app/server.api";
import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import type { DependencyContainer } from "../../shared/container.dependency";

export class MainRouter {
	private serverApi: ServerApi;
	private router: Router;
	private productController: ProductController;
	private dependencyContainer: DependencyContainer;

	constructor(serverApi: ServerApi, dependencyContainer: DependencyContainer) {
		this.serverApi = serverApi;
		this.router = Router();
		this.productController = new ProductController(dependencyContainer);
		this.setupRoutes();
		this.dependencyContainer = dependencyContainer;
	}

	private setupRoutes() {
		this.router.get("/products", async (req, res, next) => {
			const products = await this.productController.getAllProducts(req, res);
			return products;
		});
		this.router.get("/product/:id", async (req, res, next) => {
			const product = await this.productController.getProducById(req, res);
			return product;
		});
		this.router.get("/", (req, res) => {
			res.status(200).send({
				health: "check!",
			});
		});
	}

	public getRouter(): Router {
		return this.router;
	}
}
