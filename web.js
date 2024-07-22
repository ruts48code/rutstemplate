import cluster from 'node:cluster';
import process from 'node:process';
import { availableParallelism } from 'node:os';
import { handler } from './build/handler.js';
import polka from 'polka';

const cpu = availableParallelism();

if (cluster.isPrimary) {
	console.log(`Primary ${process.pid} is running`);
	for (let i = 0; i < cpu; i++) {
		cluster.fork();
	}
} else {
	polka().use(handler).listen(4999);
	console.log(`Worker ${process.pid} started`);
}
