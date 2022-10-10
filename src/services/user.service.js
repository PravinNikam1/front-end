import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }
  //used to display the userBoard table
  getUserBoard(username) {
    return axios.get(API_URL + `user/${username}`, { headers: authHeader() });
  }

  //to create the or shedule the ewaste item we used the create method
  create(item) {
    console.log(item);
    return axios.post("api/test/user", item, { headers: authHeader() });
  }

  //admin as well as The User can delete the ewaste details 
  delete(id) {
    console.log(id);
    return axios.delete(`api/test/user/${id}`, { headers: authHeader() });
  }

  //from User Dashbord we can update the Ewaste details
  update(data) {
    //console.log(id);
    console.log(data);
    return axios.put(`api/test/user`,data, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}
//getUserDetails(username) {
 // return axios.get(API_URL + `user/${username}`, { headers: authHeader() });
//}

export default new UserService();
