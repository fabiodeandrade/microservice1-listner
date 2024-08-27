import type { ImongoDto } from "../dto/mongo.dto";

export interface Mongoose {
	connect(): Promise<void>;
	create(item: ImongoDto): Promise<void>;
	getProductById(id: string): Promise<ImongoDto | null>;
	getAll(): Promise<ImongoDto[]>;
	updateById(id: string, item: ImongoDto): Promise<void>;
	deleteById(id: string): Promise<void>;
}
