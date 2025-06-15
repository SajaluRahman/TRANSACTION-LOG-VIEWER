import React from "react";

function ColumnCustomizer({ columns, setColumns }) {
  return (
    <div className="flex flex-wrap gap-4 items-center py-3 border-b border-gray-200 dark:border-gray-600">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
        Show Columns:
      </span>
      {Object.keys(columns).map((col, index) => (
        <label
          key={col}
          className="flex items-center gap-2 text-sm cursor-pointer text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150"
        >
          <input
            type="checkbox"
            checked={columns[col]}
            onChange={() => setColumns({ ...columns, [col]: !columns[col] })}
            className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-indigo-500 transition-colors duration-150"
          />
          <span className="capitalize">{col}</span>
          {index !== Object.keys(columns).length - 1 && (
            <span className="text-gray-300 dark:text-gray-600">|</span>
          )}
        </label>
      ))}
    </div>
  );
}

export default ColumnCustomizer;
