document.addEventListener("DOMContentLoaded", function() {
  const timerEl = document.querySelector(".timer");

  const arrival = Date.now();
  const interval = 1000;
  let expected = arrival + interval;

  const step = () => {
    const now = Date.now();
    const dt = now - expected;
    if (dt > interval) {
      // console.warn("execution of timer is occuring faster than expected");
    }
    timerEl.innerHTML = formatTime(now - arrival);
    expected += interval;
    setTimeout(step, Math.max(0, interval - dt));
  };
  setTimeout(step, interval);
});
