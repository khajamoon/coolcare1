import { users } from "../../redux/features/jobs/usersSlice";

export const App = {
  baseUrl: "http://localhost:8000",

  services: {
    users: "/api/users",
    createUser :"/api/user",
    generateotp :"/api/generateotp",
    verifyotp :"/api/verifyotp",
    adminLogin:"api/adminlogin",
    adminLogout:"api/adminlogout",
    searchtrackerid:"api/searchtrackrid"
  },
};
