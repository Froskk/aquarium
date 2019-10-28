const toggleState = (element, flag) => {
  const hasFlag = element.classList.contains(flag);
  const hasNotFlag = element.classList.contains("not-" + flag);

  if (hasFlag) {
    element.classList.remove(flag);
    element.classList.add("not-" + flag);
  }

  if (hasNotFlag) {
    element.classList.remove("not-" + flag);
    element.classList.add(flag);
  } else {
    element.classList.add("not-" + flag);
  }
};
