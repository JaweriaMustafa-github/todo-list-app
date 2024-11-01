"use client";
import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  //   Add of items
  const addTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);

    setInputValue("");
  };

  // Add values id
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete todos section
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Returning JSX Elements
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-purple-900 text-white py-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold font-serif">
            Todo List By Jaweria Mustafa
          </h1>
          <p className="font-mono mt-3">
            Organize your work with our Next JS Todo List App
          </p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto p-4 bg-slate-300 rounded-lg shadow-md">
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(j) => setInputValue(j.target.value)}
                className="flex-grow p-2 border border-grey-400 rounded-lg"
                placeholder="Add a new task ..."
              />

              <button
                onClick={addTodo}
                className="ml-2 px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-pink-600"
              >
                Add
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex items-center justify-between p-2 border border-slate-500 rounded-lg ${
                  todo.completed
                    ? "bg-purple-200 text-black line-through"
                    : "text-black bg-purple-300"
                }`}
              >
                <span>{todo.text}</span>

                <div>
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="px-2 py-1 mx-2 text-sm rounded-lg text-white bg-purple-800 hover:bg-pink-600"
                  >
                    {todo.completed ? "Undo" : "Completed"}
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-2 py-1 text-sm rounded-lg text-white bg-purple-800 hover:bg-pink-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default TodoList;
