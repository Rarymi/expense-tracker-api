import { env } from './env';
import { app } from './app';

app.listen({ port: env.PORT }).then(() => {
  const port = `Server is running on port ${env.PORT}`;
  return port;
});
