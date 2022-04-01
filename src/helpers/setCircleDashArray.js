const calculateTimeFraction = (timeLeft, TIME_LIMIT) => {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
export const setCircleDasharray = (seconds, TIME_LIMIT) => {
  const circleDasharray = `${(
    calculateTimeFraction(seconds, TIME_LIMIT) * 283
  ).toFixed(0)} 283`;
  return circleDasharray;
};
