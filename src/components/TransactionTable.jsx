import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import RowExpansion from "./RowExpansion";
import Loading from "./Loading";
import EmptyState from "./EmptyState";

const PAGE_SIZE = 5;

 function TransactionTable({ data, loading, columns }) {
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState(null);

  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  const pageData = data.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (loading) return <Loading />;
  if (!data.length) return <EmptyState />;

  return (
    <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-800 p-6">
      <table className="min-w-full text-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
            {columns.date && <th className="p-3 text-left">Date</th>}
            {columns.transactionId && <th className="p-3 text-left">ID</th>}
            {columns.description && <th className="p-3 text-left">Description</th>}
            {columns.amount && <th className="p-3 text-left">Amount</th>}
            {columns.status && <th className="p-3 text-left">Status</th>}
            {columns.category && <th className="p-3 text-left">Category</th>}
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((tx, i) => (
            <React.Fragment key={tx.transactionId}>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700 transition">
                {columns.date && <td className="p-3">{tx.date}</td>}
                {columns.transactionId && <td className="p-3">{tx.transactionId}</td>}
                {columns.description && <td className="p-3">{tx.description}</td>}
                {columns.amount && (
                  <td className="p-3 font-semibold text-indigo-600 dark:text-indigo-400">${tx.amount.toFixed(2)}</td>
                )}
                {columns.status && (
                  <td className={`p-3 ${tx.status === 'Success' ? 'text-green-500' : tx.status === 'Pending' ? 'text-yellow-500' : 'text-red-500'}`}>{tx.status}</td>
                )}
                {columns.category && <td className="p-3">{tx.category}</td>}
                <td className="p-3">
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="text-indigo-600 hover:text-indigo-800 transition"
                  >
                    {expanded === i ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </td>
              </tr>
              {expanded === i && (
                <tr className="bg-indigo-50 dark:bg-gray-800">
                  <td colSpan={Object.values(columns).filter(Boolean).length + 1} className="p-4">
                    <RowExpansion details={tx.details} />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setPage(p => p - 1)}
          disabled={page === 1}
          className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm rounded-lg bg-indigo-500 text-white "
        >
          <ChevronLeft size={16} /> Prev
        </button>

        <span className="text-sm text-gray-600 dark:text-gray-300">Page {page} of {totalPages}</span>

        <button
          onClick={() => setPage(p => p + 1)}
          disabled={page === totalPages}
          className="flex items-center cursor-pointer gap-2 px-4 py-2 text-sm rounded-lg bg-indigo-500 text-white"
        >
          Next <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
export default TransactionTable;