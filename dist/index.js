import app from './app';
import env from './config/env';

const server = app.listen(env.port, () => {
  console.log(`${env.name} server is listening at port ${env.port}`);
  console.log('merging is a thing!');
});

export default server;
//# sourceMappingURL=index.js.map