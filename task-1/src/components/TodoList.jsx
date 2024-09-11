/* eslint-disable react/prop-types */

const TodoList = ({ filteredTodos }) => {
  return (
    <div className="space-y-4">
      {filteredTodos.map((todo, index) => (
        <div
          key={index}
          className="flex justify-between gap-4 items-center p-4 bg-gray-50 border border-gray-200 rounded-md"
        >
          <div className="flex items-center gap-4">
            {/* Colored circle */}
            <label className="flex items-center">
              <input type="checkbox" className="hidden peer" />
              <span className="w-6 h-6 border-2 cursor-pointer border-gray-400 rounded-full inline-block peer-checked:bg-blue-500"></span>
            </label>

            <div>
              <h2 className="text-lg font-medium">{todo.task}</h2>
              <p className="text-sm text-gray-500">{todo.date}</p>
            </div>
          </div>
          <span className="text-xs px-2 py-1 bg-gray-200 text-gray-800 rounded-md">
            {todo.category}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
