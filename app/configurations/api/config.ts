import { users } from "../../redux/features/jobs/usersSlice";

export const App = {
  baseUrl: "http://54.91.149.175:8000",

  services: {
    users: "/api/usersdata",
    createUser :"/api/user",
    generateotp :"/api/generateotp",
    verifyotp :"/api/verifyotp",
    adminLogin:"api/adminlogin",
    adminLogout:"api/adminlogout",
    searchtrackerid:"api/searchtrackrid"
  },
};
