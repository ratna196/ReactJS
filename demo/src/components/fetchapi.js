import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";


function FetchEmps() {
  const [emps, setEmps] = useState([]);

  const url = "http://localhost:3001/emp";

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then(data => setEmps(data));
  });

  return (
    <div className="App">
      <h1>employees are </h1>
      <h2>...are here</h2>

      {emps.map(var1 => (
        <div key={var1.id}>{var1.name}</div>
      ))}
    </div>
  );
}

export default FetchEmps