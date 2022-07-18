import { createAsyncThunk , createSlice  } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_BASEURLAPI;

export const getCourseEnrolled = createAsyncThunk(
  "courseEnrolled/getCourseEnrolled",
  async () => {
    const response = await fetch("http://localhost:3000/courseEnrolled");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    // console.log(data)
    return data;
  }
);

// export const postCourse = createAsyncThunk(
//   "courseEnrolled/postCourse",
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
//   courseEnrolledArray: [],
//   isLoading: true,
//   errMsg: "",
// };


const courseEnrolledSlice = createSlice({
  name: "courseEnrolled",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getCourseEnrolled.pending]: (state, action) => {
      state.status = 'loading'
    },
    [getCourseEnrolled.fulfilled]: (state, { payload }) => {
      state.list = payload
      state.status = 'success'
    },
    [getCourseEnrolled.rejected]: (state, action) => {
      state.status = 'failed'
    }
  },
});



export const selectCourse = ({ courseEnrolled }) => courseEnrolled;
export default courseEnrolledSlice.reducer

