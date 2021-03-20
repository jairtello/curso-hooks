import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          index= {i}
          todo={todo}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};

export default TodoList;
