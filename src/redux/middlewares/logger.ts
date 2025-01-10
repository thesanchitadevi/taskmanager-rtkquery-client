// Curry function that logs the previous state, action and next state in the console group

const logger = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("Prev State", state.getState());
  const result = next(action);
  console.info("Next State", state.getState());
  console.groupEnd();
  return result;
};

export default logger;
