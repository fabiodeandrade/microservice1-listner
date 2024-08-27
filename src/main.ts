import { QueueConsume } from "./infra/queue-consume/quue-consume.infra";
import { ServerApi } from "./interfaces/rest/app/server.api";
import { DependencyContainer } from "./interfaces/shared/container.dependency";

const dependencys = new DependencyContainer();
const server = new ServerApi(dependencys);
const consumerQueue = new QueueConsume(dependencys).consume();
