import { createHttpServer } from './http-server';

const PORT = 8081;

const app = createHttpServer();

app.listen(PORT, () => {
    /* eslint-disable no-console */
    console.log(`Listening on:`);
    console.log(`  http://localhost:${PORT}/ - client only rendering`);
    console.log(`  http://localhost:${PORT}/server - ssr with hydration`);
    /* eslint-enable no-console */
});
