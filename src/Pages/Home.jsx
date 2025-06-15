import React, { useState, useEffect } from "react";
import TransactionTable from "../components/TransactionTable";
import Filters from "../components/Filters";
import SearchBox from "../components/SearchBox";
import ExportCSV from "../components/ExportCSV";
import ColumnCustomizer from "../components/ColumnCustomizer";
import Theme from "../components/Theme";
import transactionsData from "../data/transactions.json";
function Home() {
     const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dateRange, setDateRange] = useState([null, null]);
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [columns, setColumns] = useState({
    date: true,
    transactionId: true,
    description: true,
    amount: true,
    status: true,
    category: true
  });

  useEffect(() => {
    setTimeout(() => {
      setTransactions(transactionsData);
      setLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    let data = [...transactions];
    if (dateRange[0] && dateRange[1]) {
      data = data.filter(
        t =>
          new Date(t.date) >= new Date(dateRange[0]) &&
          new Date(t.date) <= new Date(dateRange[1])
      );
    }
    if (status) data = data.filter(t => t.status === status);
    if (category) data = data.filter(t => t.category === category);
    if (search)
      data = data.filter(
        t =>
          t.transactionId.toLowerCase().includes(search.toLowerCase()) ||
          t.description.toLowerCase().includes(search.toLowerCase())
      );
    setFiltered(data);
  }, [transactions, dateRange, status, category, search]);

  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <header className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300">
              Transaction Dashboard
            </h1>
            <Theme />
          </header>

          {/* Modern Controls Toolbar */}
          <div className="p-6">
            <div className="flex flex-wrap gap-4 mb-6 items-center justify-between">
              <div className="flex flex-wrap gap-4 items-center">
                <Filters
                  dateRange={dateRange}
                  setDateRange={setDateRange}
                  status={status}
                  setStatus={setStatus}
                  category={category}
                  setCategory={setCategory}
                />
                <SearchBox search={search} setSearch={setSearch} />
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <ExportCSV data={filtered} />
                <ColumnCustomizer columns={columns} setColumns={setColumns} />
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 transition-colors duration-200">
              <TransactionTable
                data={filtered}
                loading={loading}
                columns={columns}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home