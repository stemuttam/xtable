import React, { useState } from "react";
import "./App.css";

function App() {
  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [tableData, setTableData] = useState(initialData);

  // Function to sort by Date, then by Views (descending)
  const sortByDate = () => {
    const sortedData = [...tableData].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views; // Sort by views if dates are the same
      }
      return new Date(b.date) - new Date(a.date); // Sort by date (latest first)
    });
    setTableData(sortedData);
  };

  // Function to sort by Views, then by Date (descending)
  const sortByViews = () => {
    const sortedData = [...tableData].sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date); // Sort by date if views are the same
      }
      return b.views - a.views; // Sort by views (highest first)
    });
    setTableData(sortedData);
  };

  return (
    <div className="xtable-container">
      <h1>Date and Views Table</h1>
      <div className="buttons">
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
