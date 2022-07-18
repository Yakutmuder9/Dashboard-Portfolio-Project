import { configureStore } from "@reduxjs/toolkit";
import coursesReducer  from "../../features/courses/coursesSlice";
import courseEnrolledReducer from "../../features/courses/courseEnrolledSlice";
import cartReducer from "../../features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    courseEnrolled: courseEnrolledReducer,
    cart: cartReducer,
  },
});
