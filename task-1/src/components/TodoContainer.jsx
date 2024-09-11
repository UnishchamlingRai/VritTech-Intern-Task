import { useState } from "react";
import SearchInput from "./SearchInput";
import TodoList from "./TodoList";

const todos = [
  {
    task: "Organize photo shoot",
    date: "Today",
    isCompleted: true,
    category: "Work",
  },
  {
    task: "Buy groceries",
    date: "Tomorrow",
    isCompleted: true,
    category: "Personal",
  },
  {
    task: "Finish project report",
    date: "Next Monday",
    isCompleted: true,
    category: "Work",
  },
  {
    task: "Schedule dentist appointment",
    date: "Next Wednesday",
    isCompleted: true,
    category: "Health",
  },
  {
    task: "Plan weekend trip",
    date: "Friday",
    isCompleted: true,
    category: "Personal",
  },
  {
    task: "Attend team meeting",
    date: "Today",
    isCompleted: true,
    category: "Work",
  },
  {
    task: "Read a new book",
    date: "Sunday",
    isCompleted: true,
    category: "Personal",
  },
  {
    task: "Renew car insurance",
    date: "Next Thursday",
    isCompleted: true,
    category: "Finance",
  },
  {
    task: "Exercise at the gym",
    date: "Tomorrow",
    isCompleted: true,
    category: "Health",
  },
  {
    task: "Prepare presentation",
    date: "Next Tuesday",
    isCompleted: true,
    category: "Work",
  },
];

const TodoContainer = () => {
  const [search, setSearch] = useState("");
  const filteredTodos = todos.filter((todo) => {
    return todo.task.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="w-2/6 mx-auto bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Todo</h1>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md">
          Create Reminder
        </button>
      </div>

      <div className="mb-4">
        <SearchInput
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      {filteredTodos.length <= 0 ? (
        <h1>
          No todos of
          <span className="text-red-500 font-bold">{` "${search}"`}</span>{" "}
          search
        </h1>
      ) : (
        <TodoList filteredTodos={filteredTodos} />
      )}
    </div>
  );
};

export default TodoContainer;
