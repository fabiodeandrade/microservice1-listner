import type { Mongoose } from "../../interfaces/implements/mongoose.interface";
import mongoose, { Schema, type Model } from "mongoose";
import env from "../../infra/constants/env";
import type { ImongoDto } from "../../interfaces/dto/mongo.dto";

const produtSchema: Schema = new Schema({
	product: { type: String, required: true },
	value: { type: Number, required: true },
	description: { type: String, required: true },
});

const MongoModel: Model<ImongoDto> = mongoose.model<ImongoDto>(
	"Product",
	produtSchema,
);

export class MongooseDb implements Mongoose {
	constructor() {
		this.connect();
		console.log("MongooseBD is connected");
	}

	async connect() {
		try {
			await mongoose.connect(env.MONGOOSE_HOST);
		} catch (errorMongoose) {
			console.log(errorMongoose);
		}
	}

	async create(item: ImongoDto): Promise<void> {
		try {
			const newRecord = new MongoModel(item);
			await newRecord.save();
			console.log("Record created: ", item);
		} catch (error) {
			console.log(error);
		}
	}

	async getProductById(id: string): Promise<ImongoDto | null> {
		try {
			return await MongoModel.findById(id).exec();
		} catch (error) {
			console.log(error);
			throw new Error("Error to get User");
		}
	}

	async getAll(): Promise<ImongoDto[]> {
		try {
			return await MongoModel.find().exec();
		} catch (error) {
			console.log(error);
			throw new Error("Error to get User");
		}
	}

	async updateById(id: string, item: ImongoDto): Promise<void> {
		try {
			await MongoModel.updateOne({ _id: id }, item);
			console.log("Record updated!");
		} catch (error) {
			console.log(error);
		}
	}

	async deleteById(id: string): Promise<void> {
		try {
			await MongoModel.deleteOne({ _id: id });
			console.log("Record deleted!");
		} catch (error) {
			console.log(error);
		}
	}
}
