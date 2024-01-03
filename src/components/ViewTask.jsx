import React, { useContext } from "react";
import { DarkModeContext } from "./Context";

const ViewTask = () => {
  const  {viewTask} = useContext(DarkModeContext);

  
  if (!viewTask) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      {viewTask.map((item, index) => (
        <div key={index} className="card">
          <h1 className="card-header">{item.title}</h1>
          <p className="card-body">{item.about}</p>
          <footer className="blockquote-footer">{item.date}</footer>
        </div>
      ))}
    </div>
  );
};

export default ViewTask;
