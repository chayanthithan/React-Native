import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { name: 'Sample Task 1', completed: false },
    { name: 'Sample Task 2', completed: false },
  ]);

  const addTask = (name) => {
    setTasks((prevTasks) => [...prevTasks, { name, completed: false }]);
  };

  const completeTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: true } : task
      )
    );
  };

  // Example: Cleanup logic
  useEffect(() => {
    return () => {
      console.log('TaskProvider unmounted, perform cleanup here');
    };
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, addTask, completeTask }}>
      {children}
    </TaskContext.Provider>
  );
};
