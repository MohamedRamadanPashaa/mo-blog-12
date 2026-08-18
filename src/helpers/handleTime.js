export const handleTime = (time) => {
  const minutes = Math.floor(time / 60000)
    .toString()
    .padStart(2, "0"); // 1.75
  const seconds = Math.floor((time % 60000) / 1000)
    .toString()
    .padStart(2, "0"); // 24.25
  const mill = Math.floor((time % 1000) / 10)
    .toString()
    .padStart(2, "0");

  return { minutes, seconds, mill };
};
