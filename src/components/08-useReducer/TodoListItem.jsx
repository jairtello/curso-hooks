const TodoListItem = ({ handleDelete, handleToggle, todo, index }) => {
  return (
    <li className="list-group-item">
      <p
        onClick={() => handleToggle(todo.id)}
        className={todo.done ? "complete" : ""}
      >
        {index + 1}. {todo.desc}
      </p>
      <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;
