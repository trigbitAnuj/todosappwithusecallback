export const reducer = (todos, action) => {
  switch (action.type) {
    case "add":
      const { id, text } = action.payload;

      return [...todos, { id: id, text: text, isDone: false }];

    case "remove":
      const { todoId } = action.payload;
      return todos.filter((todo) => todo.id !== todoId);

    case "change":
      const { changeId } = action.payload;
      return todos.map((todo) =>
        todo.id === changeId ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return todos;
  }
};
