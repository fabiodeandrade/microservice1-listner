import "dotenv/config";

export default Object.freeze({
	MONGOOSE_HOST: process.env.MONGOOSE_HOST as string,
	RMQ_HOST: process.env.RMQ_HOST as string,
	RMQ_EXCHANGE: process.env.RMQ_EXCHANGE as string,
	RMQ_QUEUE: process.env.RMQ_QUEUE as string,
	RMQ_ROUTING_KEY: process.env.RMQ_ROUTING_KEY as string,
});
