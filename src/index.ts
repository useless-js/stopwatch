import Express from 'express';
import stopwatch from './stopwatch';

(() => {
  const app = Express();

  app.get('/', (_, res) => {
    res.send('ok');
  });

  app.get('/time', (_, res) => {
    res.send(`${stopwatch.getElapsedTime()}`);
  });

  app.post('/start', (_, res) => {
    stopwatch.start();
    res.send(
      `stopwatch started with start time: ${stopwatch.getElapsedTime()}`
    );
  });

  app.post('/stop', (_, res) => {
    stopwatch.stop();
    res.send(`stopwatch stopped with time: ${stopwatch.getElapsedTime()}`);
  });

  app.post('/reset', (_, res) => {
    stopwatch.reset();
    res.send(`${stopwatch.getElapsedTime()}`);
  });

  app.listen(3000, () => {
    console.log(`App listening on port ${3000}`);
  });
})();
