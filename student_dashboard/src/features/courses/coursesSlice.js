import { createAsyncThunk , createSlice  } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";

// const baseUrl = process.env.REACT_APP_BASEURLAPI;

export const getCourse = createAsyncThunk(
  "courses/getCourse",
  async () => {
    const response = await fetch((`${baseUrl}` + "courses"));
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

// export const postCourse = createAsyncThunk(
//   "courses/postCourse",
//   async (course, { dispatch }) => {
//     const response = await fetch(baseUrl + "courseEnrolled",{
//       method: "POST",
//       body: JSON.stringify(course),
//       headers: { "Content-Type": "application/json" }
//     });
    

//     if (!response.ok) {
//       return Promise.reject(response.status);
//     }
//     const data = await response.json();
//     addcourse(data);
//   }
// );

// const initialState = {
//   coursesArray: [],
//   isLoading: true,
//   errMsg: "",
// };


const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    list: [],
    status: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    }
  },
  extraReducers: {
    [getCourse.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getCourse.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getCourse.rejected]: (state, action) => {
      state.status = 'failed'
    }
  },
});



export const selectCourse = ({ courses }) => courses
export default coursesSlice.reducer

// REACT_APP_APIKEY = AIzaSyCxCGarqPmpwmj_5cqA-TTt9QaK7L-BQPE
// REACT_APP_AUTHDOMAIN = student-admin-cb6bb.firebaseapp.com
// REACT_APP_DATABASEURL = https://student-admin-cb6bb-default-rtdb.firebaseio.com
// REACT_APP_PROJECTID = student-admin-cb6bb
// REACT_APP_STORAGEBUCKET = student-admin-cb6bb.appspot.com
// REACT_APP_MESSAGINGSENDERID = 703689773068
// REACT_APP_APPII = 1:703689773068:web:9d15b7aa0e58cd5b801e29
// REACT_APP_MEASUREMENTID = G-SRB5SQRMR2