const initEventHandlers = () => {
  const body = document.querySelector("body");

  body.addEventListener("click", e => {
    if (e.target.closest(".toggle")) {
      // Toggle THEME
      toggleTheme();
    }

    if (e.target.closest(".selector:not(.active)")) {
      // Changing SELECTOR tool
      const newActiveTool = e.target.closest(".selector:not(.active)");
      const newInactiveTools = document.querySelectorAll(".selector.active");
      newActiveTool.classList.remove("not-active");
      newActiveTool.classList.add("active");

      newInactiveTools.forEach(tool => {
        tool.classList.remove("active");
        tool.classList.add("not-active");
      });
    }

    if (e.target.closest(".fill:not(.active)")) {
      // Changing FILL tool
      const newActiveTool = e.target.closest(".fill:not(.active)");
      const inactiveTools = document.querySelectorAll(".fill.active");
      newActiveTool.classList.remove("not-active");
      newActiveTool.classList.add("active");

      inactiveTools.forEach(tool => {
        tool.classList.remove("active");
        tool.classList.add("not-active");
      });
    }

    if (e.target.closest(".cell-label")) {
      // Toggle cell label
      const label = e.target.closest(".cell-label");
      toggleState(label, "active");
    }

    if (e.target.closest(".cell")) {
      const cell = e.target.closest(".cell");
      const paint = document.querySelector(".fill.active").dataset.paint;

      const currentFill = cell.dataset.fill;
      if (currentFill === paint) cell.dataset.fill = "";
      else cell.dataset.fill = paint;
    }
  });
};
