import type { ImongoDto } from "../dto/mongo.dto";

export interface IProductController {
	create(item: ImongoDto): Promise<void>;
	getProductById(id: string): Promise<void>;
	getAll(): Promise<void>;
	updateById(id: string, item: ImongoDto): Promise<void>;
	deleteById(id: string): Promise<void>;
}
