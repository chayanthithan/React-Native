// // app/contexts/UserContext.js

// import React, { createContext, useState } from 'react';

// // Create the UserContext with default values
// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Function to login the user
//   const loginUser = (userData) => {
//     setUser(userData);
//   };

//   // Function to logout the user
//   const logoutUser = () => {
//     setUser(null);
//   };

//   return (
//     <UserContext.Provider value={{ user, loginUser, logoutUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
