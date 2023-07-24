import React, { useState } from "react";
import "./style.css";

const Cards = ({ EmpData,clickHnadle }) => {
  const [data, setData] = useState(EmpData);
  console.log(data.length);
  return (
    <div className="btn-row">
      <div className="cards">
        {data.length > 0 &&
          data.map((items, index) => {
            return (
              <div key={index} className="card">
                <p style={{ margin: "0" }}>
                  Name:{items.name}|Department:{items.dept}|Rate:{items.rate}
                </p>
              </div>
            );
          })}
      </div>
      <button className="btn" onClick={clickHnadle}>Go Back</button>
    </div>
  );
};

export default Cards;
