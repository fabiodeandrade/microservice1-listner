import express, { type Express } from "express";
import morgan from "morgan";
import { MainRouter } from "../routes/main.router";
import type { DependencyContainer } from "../../shared/container.dependency";
import "dotenv/config";

export class ServerApi {
	private app?: Express;
	private router?: MainRouter;

	constructor(dependencyContainer: DependencyContainer) {
		this.startUp(dependencyContainer);
	}

	public async startUp(
		dependencyContainer: DependencyContainer,
	): Promise<void> {
		this.app = express();
		this.app.use(morgan("dev"));
		this.router = new MainRouter(this, dependencyContainer);
		this.app.use(this.router.getRouter());
		this.app.listen(process.env.PORT, () => {
			console.log(`Server is running at http://localhost:${process.env.PORT}`);
		});
	}

	public getApp(): Express {
		if (!this.app) {
			throw new Error("App not started");
		}
		return this.app;
	}

	public getRouter(): MainRouter {
		if (!this.router) {
			throw new Error("Router not initialized");
		}
		return this.router;
	}
}
