import axios from "axios";

class ApiService {
  static apiBase = process.env.REACT_APP_BASE_URL;

  static async registration(userData) {
    const response = await axios.post(
      `${ApiService.apiBase}/user/registration`,
      userData
    );
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  }

  static async login(data) {
    const response = await axios.post(`${ApiService.apiBase}/user/login`, data);
    localStorage.setItem("token", response.data.accessToken);
  }

  static async create(data) {
    const response = await axios.post(
      `${ApiService.apiBase}/news/create`,
      data,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    return response.data[0];
  }
}

export default ApiService;
