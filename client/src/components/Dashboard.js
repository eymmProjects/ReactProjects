// rfce

import React from "react";
import Dropdown from "./Dropdown";

function Dashboard(props) {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Menu */}
      <nav className="bg-white shadow-lg px-6 py-4">
        <div className="flex justify-between  items-center">
          <div className="flex flex-row">
            <h1 className="text-2xl font-bold mx-3 text-gray-800">
              Expense Tracker
            </h1>

            <div className="mx-2">
              <Dropdown />
            </div>
            <div className="mx-2">
              <Dropdown />
            </div>
          </div>

          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              New Expense
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-row flex-grow">
        {/* Side Panel */}
        <div className="bg-gray-100 w-64 p-6">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-800 hover:text-blue-500">
                Housing
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-800 hover:text-blue-500">
                Food
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-800 hover:text-blue-500">
                Transportation
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-800 hover:text-blue-500">
                Entertainment
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-800 hover:text-blue-500">
                Other
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content Area */}
        {/* <div className="flex-grow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
          <ul className="space-y-4">
            <li>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Lunch with friends</h3>
                  <p className="text-gray-500">Food</p>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">$25.00</p>
                  <p className="text-gray-500">March 25, 2023</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Monthly rent</h3>
                  <p className="text-gray-500">Housing</p>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">$900.00</p>
                  <p className="text-gray-500">March 20, 2023</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">Gas for car</h3>
                  <p className="text-gray-500">Transportation</p>
                </div>
                <div>
                  <p className="text-gray-800 font-semibold">$45.00</p>
                  <p className="text-gray-500">March 18, 2023</p>
                </div>
              </div>
            </li>
          </ul>
        </div> */}

        {props.children}
      </div>
    </div>
  );
}

export default Dashboard;
