import React from "react";

function Filters({ dateRange, setDateRange, status, setStatus, category, setCategory }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center">
      <label className="flex items-center gap-1">
        <span className="text-sm">Date:</span>
        <input
          type="date"
          className="rounded border px-2 py-1 text-xs"
          value={dateRange[0] || ""}
          onChange={e => setDateRange([e.target.value, dateRange[1]])}
        />
        <span>-</span>
        <input
          type="date"
          className="rounded border px-2 py-1 text-xs"
          value={dateRange[1] || ""}
          onChange={e => setDateRange([dateRange[0], e.target.value])}
        />
      </label>
      <label className="flex items-center gap-1">
        <span className="text-sm">Status:</span>
        <select
          className="rounded border px-1 py-1 text-xs"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option className="text-black " value="">All</option>
          <option className="text-black " value="Success">Success</option>
          <option className="text-black " value="Pending">Pending</option>
          <option className="text-black " value="Failed">Failed</option>
        </select>
      </label>
      <label className="flex items-center gap-1">
        <span className="text-sm">Category:</span>
        <select
          className="rounded border px-1 py-1 text-xs"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option className="text-black " value="">All</option>
          <option className="text-black " value="Payment">Payment</option>
          <option className="text-black " value="Refund">Refund</option>
          <option className="text-black " value="Transfer">Transfer</option>
        </select>
      </label>
    </div>
  );
}

export default Filters;