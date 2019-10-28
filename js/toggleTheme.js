// TODO: Save theme in localStorage, retrieve on load and set
// TODO: Transition theme change

const toggleTheme = () => {
  const body = document.querySelector("body");
  const inputEl = document.querySelector(".dn");
  const theme = inputEl.checked ? "dark" : "default";

  body.dataset.theme = theme;
};
