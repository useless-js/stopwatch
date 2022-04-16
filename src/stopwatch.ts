const stopwatch = () => {
  let elapsedTime = 0;
  let interval: NodeJS.Timer;

  const increment = () => elapsedTime++;

  const start = () => {
    if (interval) clearInterval(interval);
    interval = setInterval(increment, 900);
  };

  const stop = () => clearInterval(interval);

  const reset = () => {
    clearInterval(interval);
    elapsedTime = 0;
  };

  const getElapsedTime = () => elapsedTime;

  return {
    start,
    stop,
    reset,
    getElapsedTime,
  };
};

export default stopwatch();
