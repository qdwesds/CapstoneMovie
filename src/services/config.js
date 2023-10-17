import axios from "axios";

// todo : muốn viết ra 1 thằng axios giúp làm 1 số việc : setup tất cả api có chung 1 đoạn đuôi
export const USER_LOGIN = "USER_LOGIN";
const URL_DOMAIN = "https://movienew.cybersoft.edu.vn";
const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0OCIsIkhldEhhblN0cmluZyI6IjEwLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNzUyMzIwMDAwMCIsIm5iZiI6MTY3OTY3NzIwMCwiZXhwIjoxNzA3NjcwODAwfQ.N-naoH9C9l_9p7kMChk45-IrJfIqEYyMlZijuzHsXsI";
const user = JSON.parse(localStorage.getItem("user"));
// console.log(user);
// console.log(user);
// cấu hình axios :
// Add a request interceptor
const https = axios.create({
  baseURL: URL_DOMAIN,
  headers: {
    TokenCybersoft,
    Authorization: `Bearer ${user?.accessToken}`,
  },
});
https.interceptors.request.use(
  function (config) {
    return {
      ...config,
    };
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default https;
