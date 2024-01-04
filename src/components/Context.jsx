import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [viewTask, setViewTask] = useState();
  const params = useParams();

  const themeClass = darkMode ? "dark" : "light";

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const fetchTasks = async () => {
    try {
      const responce = await axios.get("http://localhost:5050/tasks");
      setTasks(responce.data);
    } catch (error) {
      console.log(error);
    }
  };

  

  const deleteTask = async () => {
    try {
      await axios.delete(`http://localhost:5050/tasks/${params.id}`);
      alert("Task Deleted");
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (tasks.length === 0) {
      fetchTasks();
    }
  

    if (params.id){
      deleteTask();
    }
   
  }, [tasks, params.id]);

  return (
    <DarkModeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        tasks,
        fetchTasks,
        viewTask,
        setViewTask,
        
        deleteTask,
      }}
    >
      <div className={themeClass}>{children}</div>
    </DarkModeContext.Provider>
  );
};
