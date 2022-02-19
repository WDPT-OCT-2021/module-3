import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/auth",
    withCredentials: true,
});

const authService = {
    signup: (body) =>
        instance.post("/signup", body).then((response) => response.data),
    login: (body) => instance.post("/login", body).then((res) => res.data),
    logout: () => instance.get("/logout").then((res) => res.data),
    user: () => instance.get("/user").then((res) => res.data),
};

// signup(body) {
//     return axios.post("http://localhost:3001/auth/signup", {body}, {withCredentials: true).then(res => res.data);
// }

export default authService;
