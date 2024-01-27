import axios from "axios";

let usertoken = localStorage.getItem("token");
axios.defaults.baseURL = "https://localhost:5000";
// "https://api.internationalfocusgeneralservice.com/api/";
axios.defaults.headers.common["Authorization"] = `Bearer ${usertoken}`;
console.warn("user token", usertoken);

export default axios;
