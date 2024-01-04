import React, { useContext, useEffect } from "react";
import { DarkModeContext } from "./Context";
import axios from "axios";
import { useParams } from "react-router-dom";

const ViewTask = () => {
  const { viewTask, setViewTask } = useContext(DarkModeContext);
  const params = useParams();

  const fetchSingletask = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5050/tasks/${params.id}`
      );

      // console.log(response.data);
      setViewTask(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSingletask();
  }, [params.id]);
  // console.log(viewTask);
  if (!viewTask || viewTask.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div key={viewTask.id} className="container-fluid">
      <div className="card">
        <h1 className="card-header">{viewTask.title}</h1>
        <p className="card-body">{viewTask.about}</p>
        <footer className="blockquote-footer">{viewTask.date}</footer>
      </div>
    </div>
  );
};

export default ViewTask;
