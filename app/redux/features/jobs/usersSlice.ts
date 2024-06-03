import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../configurations/api";
import { App } from "../../..//configurations/api/config";
/*Initial State of the Application/*/
const initialState: any = {
  users: null,
  userLoading:null,
  generateOtp:null,
  verifyOtp:null,
  isLogin:false,
  admin:null,
  adminLogOut:false,
  searchtrackerId:null,
  searchtrackerIdLoading:null,
  


  
};

/*Define an impletentation function for Components Interaction*/

/*GetClients*/
export const getUsers = createAsyncThunk(
  "api/users",
  async (data: any, thunkAPI) => {
    let url = encodeURI(App.services.users);
    return API.get(url, null, null, null);
  }
);

export const postUser = createAsyncThunk(
  "api/users",
  async (data: any, thunkAPI) => {
    let url = encodeURI(App.services.createUser);
    return API.post(url, data, null, null);
  }
);
export const generateotp = createAsyncThunk(
  "api/generateotp",
  async (data: any, thunkAPI) => {
    let url = encodeURI(App.services.generateotp);
    return API.post(url, data, null, null);
  }
);
export const verifyotp = createAsyncThunk(
  "api/verifyotp",
  async (data: any, thunkAPI) => {
    let url = encodeURI(App.services.verifyotp);
    return API.post(url, data, null, null);
  }
);

export const adminLogin = createAsyncThunk(
  "api/user",
  async (data: any, thunkAPI) => {
    let url = encodeURI(App.services.adminLogin);
    return API.post(url, data, null, null);
  }
);
export const searchtrackerid = createAsyncThunk(
  "api/searchtrackerid",
  async (data: any, thunkAPI) => {
    let url = encodeURI(App.services.searchtrackerid);
    return API.post(url, data, null, null);
  }
);
export const adminLogout = createAsyncThunk(
  "api/logout",
  async (data: any, thunkAPI) => {
    console.log(App.services)
    let url = encodeURI(App.services.adminLogout);
    console.log(url)

    return API.post("http://localhost:3000/api/adminlogout", data, null, null);
  }
);

/*Slice Of the Jobs*/
export const users = createSlice({
  name: "users",
  initialState,
  reducers: {
    adminLogin: (state, action) => {
      if(action.payload.data.isAdmin){
        state.isLogin = true;
      }
      else
      {
        state.isLogin = false;
      }
    },
    adminLogout:(state,action)=>
    {
      if(action.payload.data.isAdmin){
        state.isLogin = true;
      }
      else
      {
        state.isLogin = false;
      }

    }
    
  },
  extraReducers: (builder) => {
    builder
      /*GetClientStateUpdate*/
      .addCase(getUsers.pending, (state) => {
        state.userLoading = false;
      })
      .addCase(getUsers.fulfilled, (state, action: any) => {
        state.userLoading = true;
        console.log(action.payload.data);
        state.users = action.payload.data || null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.userLoading = false;
      })

       /*generateOTP*/
       .addCase(generateotp.pending, (state) => {
        state.userLoading = false;
      })
      .addCase(generateotp.fulfilled, (state, action: any) => {
        state.userLoading = true;
        console.log(action.payload.data);
        state.generateOtp = action.payload.data || null;
      })
      .addCase(generateotp.rejected, (state, action) => {
        state.userLoading = false;
      })
      /*verifyOTP*/
      .addCase(verifyotp.pending, (state) => {
        state.userLoading = false;
      })
      .addCase(verifyotp.fulfilled, (state, action: any) => {
        state.userLoading = true;
        console.log(action.payload.data);
        console.log(action.payload);
        state.verifyOtp = action.payload.data || null;
      })
      .addCase(verifyotp.rejected, (state, action) => {
        state.userLoading = false;
      })
      //verify admin

      .addCase(adminLogin.pending, (state) => {
        state.isLogin = false;
      })
      .addCase(adminLogin.fulfilled, (state, action: any) => {
        // state.isLogin = true;
        console.log(action.payload.data);
        console.log(action.payload);
        state.admin = action.payload.data || null;
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.isLogin = false;
      })

      //admin logout
      .addCase(adminLogout.pending, (state) => {
        // state.isLogin = false;
      })
      .addCase(adminLogout.fulfilled, (state, action: any) => {
        // state.isLogin = true;
        console.log(action.payload.data);
        console.log(action.payload);
        state.admin =  null;
      })
      .addCase(adminLogout.rejected, (state, action) => {
        // state.isLogin = false;
      })
      //searchtrackerId 
      //admin logout
      .addCase(searchtrackerid.pending, (state) => {
        state.searchtrackerIdLoading = false;
      })
      .addCase(searchtrackerid.fulfilled, (state, action: any) => {
        // state.isLogin = true;
        console.log(action.payload.data);
        console.log(action.payload);
        state.searchtrackerIdLoading=true
        state.searchtrackerId = action.payload.data || null;
      })
      .addCase(searchtrackerid.rejected, (state, action) => {
        state.searchtrackerIdLoading = false;
      })
    },
});

// export const { addJob, updateSettings,refreshEmptyTabData } = jobs.actions;
export default users.reducer;
