import React from "react";

 function RowExpansion({ details }) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4 shadow">
      <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">{details}</p>
    </div>
  );
}
export default RowExpansion;