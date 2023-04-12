export const getTodosFromLocalStorage = () => {
  const activeList = localStorage.getItem("activeTodos");
  if (activeList) {
    return JSON.parse(activeList);
  } else {
    return [];
  }
};
export const getCompletedTodosFromLocalStorage = () => {
  const completedList = localStorage.getItem("completedTodos");
  if (completedList) {
    return JSON.parse(completedList);
  } else {
    return [];
  }
};
