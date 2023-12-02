import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
const request = axios.create({
    withCredentials: true,
  });
  
export const signin = async (credentials) => {
    //   const response = await axios.post( `${USERS_API}/signin`, credentials );
    const response = await request.post(`http://localhost:4000/api/users/signin`, credentials);
    return response.data;
};
export const accountUser = async () => {
    const response = await request.post(`http://localhost:4000/api/users/accountUser`);
    return response.data;
};
export const updateUser = async (user) => {
    const response = await request.put(`http://localhost:4000/api/users/${user._id}`, user);
    return response.data;
};

export const findAllUsers = async () => {
    const response = await request.get(`http://localhost:4000/api/users`);
    return response.data;
  };
  
  export const createUser = async (user) => {
    const response = await request.post(`http://localhost:4000/api/users`, user);
    return response.data;
  };

  export const findUserById = async (id) => {
    const response = await request.get(`http://localhost:4000/api/users/${id}`);
    return response.data;
  };
  
  export const deleteUser = async (user) => {
    const response = await request.delete(
      `http://localhost:4000/api/users/${user._id}`);
    return response.data;
  };
  export const signup = async (credentials) => {
    const response = await request.post(
      `http://localhost:4000/api/users/signup`, credentials);
    return response.data;
  };
  
  export const signout = async () => {
    const response = await request.post(`http://localhost:4000/api/users/signout`);
    return response.data;
  };
  
  