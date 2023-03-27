import React from "react";

function DefaultLayout(props) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-6 bg-gray-100">
      <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-6 sm:mb-0">
        <h3 className="text-lg font-semibold mb-4">Total Expenses</h3>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">$2,500</span>
          <span className="text-green-500 ml-2">(15%)</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Compared to last month</p>
      </div>

      <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-6 sm:mb-0">
        <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
        <ul className="divide-y divide-gray-300">
          <li className="mb-1 flex items-center justify-between">
            <span>Housing</span>
            <span className="text-blue-500 font-bold">$1,000</span>
          </li>
          <li className="mb-1 flex items-center justify-between">
            <span>Food</span>
            <span className="text-blue-500 font-bold">$500</span>
          </li>
          <li className="mb-1 flex items-center justify-between">
            <span>Transportation</span>
            <span className="text-blue-500 font-bold">$400</span>
          </li>
          <li className="mb-1 flex items-center justify-between">
            <span>Entertainment</span>
            <span className="text-blue-500 font-bold">$300</span>
          </li>
          <li className="mb-1 flex items-center justify-between">
            <span>Other</span>
            <span className="text-blue-500 font-bold">$300</span>
          </li>
        </ul>
      </div>

      <div className="w-full sm:w-1/3 bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Expenses</h3>
        <ul className="divide-y divide-gray-300">
          <li className="mb-1 flex items-center justify-between">
            <span>Gasoline</span>
            <span className="text-blue-500 font-bold">$50</span>
          </li>
          <li className="mb-1 flex items-center justify-between">
            <span>Groceries</span>
            <span className="text-blue-500 font-bold">$100</span>
          </li>
          <li className="mb-1 flex items-center justify-between">
            <span>Internet</span>
            <span className="text-blue-500 font-bold">$75</span>
          </li>
          <li className="mb-1 flex items-center justify-between">
            <span>Clothing</span>
            <span className="text-blue-500 font-bold">$50</span>
          </li>
          <li className="mb-1 flex items-center justify-between">
            <span>Electricity</span>
            <span className="text-blue-500 font-bold">$75</span>
          </li>
        </ul>
      </div>

      <div className="w-full bg-white shadow-lg rounded-lg p-6 mt-6">
        <h3 className="text-lg font-semibold mb-4">Expense Trends</h3>
        <div className="relative h-24">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div className="w-1/3 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-between px-6">
            <span className="text-gray-500 font-bold text-sm">$0</span>
            <span className="text-gray-500 font-bold text-sm">$2,500</span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-500 mb-2">
            Total expenses this month:
          </p>
          <h4 className="text-2xl font-bold">$1,500</h4>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
