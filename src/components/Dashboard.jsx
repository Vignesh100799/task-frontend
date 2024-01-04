import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DarkModeContext } from "./Context";

const Dashboard = () => {
  const params = useParams();
  const { fetchSingletask, tasks, deleteTask } = useContext(DarkModeContext);

  if (!tasks) {
    return <div className="text-sucess">Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        {tasks.map((item) => (
          <div key={item._id} className="col-sm-6 my-2">
            <div className="card">
              <div className="card-body" style={{ marginBottom: "15px" }}>
                <h3 className="card-title">Title: {item.title}</h3>
                <p className="card-text">To Do: {item.about}</p>
                <footer className="blockquote-footer">Date: {item.date}</footer>
                <Link to={`/edit-task/${item._id}`} className="btn btn-warning mr-2">
                  Edit
                </Link>
                <Link to={`/tasks/${item._id}`} className="btn btn-info mr-2">
                  View
                </Link>
                <button
                  onClick={() => deleteTask(item._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
