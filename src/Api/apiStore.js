import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URI,
  withCredentials: true,
  timeout: 120000,
});

apiClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");

    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const loginUser = (data) => {
  return apiClient.post("/api/user/login", data);
};

const signupUser = (data) => {
  return apiClient.post("/api/user/signup", data);
};


const addDish = (data)=>{
    return apiClient.post("/api/dish/addDish", data)
}


export {
    loginUser,
    signupUser,
    addDish
}
