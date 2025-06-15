import React from "react";
 function Loading() {
  return   <div className="flex gap-4 p-6 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-32 w-1/3 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      ))}
    </div>;
}
export default Loading;