import React from "react";

function ExportCSV({ data }) {
  const downloadCSV = () => {
    const rows = [Object.keys(data[0] || {}).join(",")];
    data.forEach(row => {
      rows.push(
        Object.values(row)
          .map(val => `"${String(val).replace(/"/g, '""')}"`)
          .join(",")
      );
    });
    const csv = rows.join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "transactions.csv";
    a.click();
  };

  return (
    <button
      onClick={downloadCSV}
      disabled={!data.length}
      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
    >
      Export CSV
    </button>
  );
}

export default ExportCSV;