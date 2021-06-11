import React from "react";
import "./Tab.css";

function Tab({ data, onDelete }) {
  return (
    <div className="tab">
      <span className="tab__title">{data.id}</span>
      <span className="tab__close" onClick={() => onDelete(data.id)}>
        X
      </span>
    </div>
  );
}

export default Tab;
