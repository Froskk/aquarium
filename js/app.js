document.addEventListener("DOMContentLoaded", function() {
  const cells = document.querySelectorAll(".cell, .cell-label, .cell-empty");
  const cellSize = 60 / (cells.length ** 0.5 - 1);
  cells.forEach(cell => {
    cell.style.width = cellSize + "vmin";
    cell.style.height = cellSize + "vmin";
    cell.style.fontSize = cellSize * 0.75 + "vmin";
  });

  // TIMER
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

  // INIT

  initEventHandlers();
});
