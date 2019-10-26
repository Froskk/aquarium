const toggleState = (element, flag) => {
  // const currentState = element.classList.contains(flag);
  const negation = flag.slice(0, 3) === "not-" ? flag.slice(3) : "not-" + flag;

  element.classList.remove(flag);
  element.classList.add(negation(flag));
};
