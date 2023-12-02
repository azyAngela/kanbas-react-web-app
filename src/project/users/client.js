import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
const request = axios.create({
    withCredentials: true,
  });
  
export const signin = async (credentials) => {
    //   const response = await axios.post( `${USERS_API}/signin`, credentials );
    const response = await request.post(`https://kanbas-node-server-app2-dolc.onrender.com/api/users/signin`, credentials);
    return response.data;
};
export const accountUser = async () => {
    const response = await request.post(`https://kanbas-node-server-app2-dolc.onrender.com/api/users/accountUser`);
    return response.data;
};
export const updateUser = async (user) => {
    const response = await request.put(`https://kanbas-node-server-app2-dolc.onrender.com/api/users/${user._id}`, user);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await request.get(`https://kanbas-node-server-app2-dolc.onrender.com/api/users`);
    return response.data;
  };
  
  export const createUser = async (user) => {
    const response = await request.post(`https://kanbas-node-server-app2-dolc.onrender.com/api/users`, user);
    return response.data;
  };

  export const findUserById = async (id) => {
    const response = await request.get(`https://kanbas-node-server-app2-dolc.onrender.com/api/users/${id}`);
    return response.data;
  };
  
  export const deleteUser = async (user) => {
    const response = await request.delete(
      `https://kanbas-node-server-app2-dolc.onrender.com/api/users/${user._id}`);
    return response.data;
  };
  export const signup = async (credentials) => {
    const response = await request.post(
      `https://kanbas-node-server-app2-dolc.onrender.com/api/users/signup`, credentials);
    return response.data;
  };
  
  export const signout = async () => {
    const response = await request.post(`https://kanbas-node-server-app2-dolc.onrender.com/api/users/signout`);
    return response.data;
  };
  
  