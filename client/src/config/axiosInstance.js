import axios from "axios";

const BASE_URL="http://localhost:5000/api/files/"
const axiosInstance=axios.create()

axiosInstance.defaults.baseURL=BASE_URL;

export default axiosInstance;