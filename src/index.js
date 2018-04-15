import http from 'http'
import { createServer } from 'http'

import app from './server';

let currentApp = app;
const server = http.createServer(app);

app.listen(3000, () => {
	console.log('API on port 3000');
});


if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}