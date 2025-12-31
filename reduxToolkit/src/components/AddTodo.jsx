import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearEditTodo, updateTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  // const [editMode, setEditMode] = useState(false);
  // const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();
  const editTodo = useSelector((state) => state.todos.editTodo);

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.text);
    }
  }, [editTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (editTodo) {
      // Update existing todo
      dispatch(updateTodo({ id: editId, text: input }));
      dispatch(clearEditTodo());
    } else {
      // Add new todo
      dispatch(addTodo(input));
    }

    setInput("");
  };

  const handleCancel = () => {
    dispatch(clearEditTodo());
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editTodo ? "Update Todo" : "Add Todo"}
      </button>

      {editTodo && (
        <button
          type="button"
          onClick={handleCancel}
          className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default AddTodo;
