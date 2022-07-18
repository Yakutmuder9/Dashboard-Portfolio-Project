import { createSlice } from "@reduxjs/toolkit";
import { userdata } from "../../app/shared/userdata";

const baseUrl = process.env.REACT_APP_BASEURLAPI;
// console.log(baseUrl)

export const fetchUsers = async () => {
  const response = await fetch(baseUrl + "users");
  if (!response.ok) {
    return Promise.reject("Unable to fetch, status: " + response.status);
  }

  const data = await response.json();
  console.log(data);
  return data;
};

export const usersSlice = createSlice({
  name: "users",
  initialState: { value: userdata },
  reducers: {
    adduser: (state, action) => {
      state.value.push(action.payload);
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.userName = action.payload.userName;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = usersSlice.actions;
export default usersSlice.reducer;
