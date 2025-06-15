import { EyeOff } from "lucide-react";
import React from "react";
 function EmptyState() {
  return<div className="flex flex-col items-center justify-center p-12 text-gray-500 dark:text-gray-400">
      <EyeOff size={64} />
      <p className="mt-4 text-lg">No transactions found</p>
    </div>;
}
export default EmptyState;