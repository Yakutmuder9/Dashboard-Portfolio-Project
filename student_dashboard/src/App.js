import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/Errorpage/ErrorPage";
import Dashboard from "./pages/Dashboard/dashboard";
import DashActivity from "./pages/Dashboard/DashActive/DashActivity";
import HomePage from "./pages/HomePage/HomePage";
import Course from "./pages/Course/course";
import Event from "./pages/Event/event.js";
import Inbox from "./pages/Inbox/Inbox";
import Assessment from "./pages/Assessement/assessment";
import Resources from "./pages/Resource/Resources";
import Profile from "./pages/Profile/Profile";
import CourseStore from "./pages/Course/Coursestore/CourseStore";
import Help from "./pages/Help/help";
import Setting from "./pages/Setting/setting";
// import ProtectedRoute from "./Auth/firebase/ProtectedRoutes";
// import { UserAuthContextProvider } from "./Auth/firebase/UserAuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { auth } from "./Auth/firebase/firebase";
import Settings from "@mui/icons-material/Settings";
import Cart from "./pages/Course/Cart/Cart";
import DashSkeletonLoader from './Loading/DashSkeletonLoader'

function App() {
  const [user] = useAuthState(auth);
//  console.log(user.email)

  return (
    <div className="App ">
        <Routes>
          <Route path="/" element={<HomePage />} />
            {user? 
           ( 
            <Route
              path="dashboard/"
              element={
                  <Dashboard authorised={true} />
              }
            >
              <Route
                path=""
                element={
                    <DashActivity />
                }
              />
              <Route
                path="courses"
                element={
                    <Course />
                }
              />
              <Route
                path="event"
                element={
                    <Event />
                }
              />
              <Route
                path="assessment"
                element={
                    <Assessment />
                }
              />
              <Route
                path="inbox"
                element={
                    <Inbox />
                }
              />
              <Route
                path="resources"
                element={
                    <Resources />
                }
              />
              <Route
                path="profile"
                element={
                    <Profile />
                }
              />
              <Route
                path="help"
                element={
                    <Help />
                }
              />
              <Route
                path="setting"
                element={
                    <Setting />
                }
              />
              <Route
                path="logout"
                element={
                    <HomePage />
                }
              />
              <Route
                path="getcourse"
                element={
                    <CourseStore />
                }
              />
              <Route
                path="cart"
                element={
                    <Cart />
                }
              />
            </Route>
            ):(
             <Route
              path="*"
              element={
                <div className="transition-page overflow-auto">sdsd
                  {/* <DashSkeletonLoader /> */}
                </div>
              }
            /> 
 
            ) 
          }
            
          
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;



// function App() {
//   const [user] = useAuthState(auth);
// //  console.log(user.email)
//   return (
//     <div className="App ">
//       {/* <UserAuthContextProvider> */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />

//           {/* {user ? ( */}
//             <Route
//               path="dashboard/"
//               element={
//                 // <ProtectedRoute>
//                   <Dashboard authorised={true} />
//                 // </ProtectedRoute>
//               }
//             >
//               <Route
//                 path=""
//                 element={
//                   // <ProtectedRoute>
//                     <DashActivity />
//                   // </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="courses"
//                 element={
//                   // <ProtectedRoute>
//                     <Course />
//                   // </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="event"
//                 element={
//                   // <ProtectedRoute>
//                     <Event />
//                   // </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="assessment"
//                 element={
//                   // <ProtectedRoute>
//                     <Assessment />
//                   // </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="inbox"
//                 element={
//                   // <ProtectedRoute>
//                     <Inbox />
//                   // </ProtectedRoute>
//                 }
//               />

//               <Route
//                 path="resources"
//                 element={
//                   // <ProtectedRoute>
//                     <Resources />
//                   // </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="profile"
//                 element={
//                   // <ProtectedRoute>
//                     <Profile />
//                   // </ProtectedRoute>
//                 }
//               />

//               <Route
//                 path="help"
//                 element={
//                   // <ProtectedRoute>
//                     <Help />
//                   // </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="setting"
//                 element={
//                   // <ProtectedRoute>
//                     <Setting />
//                   // </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="logout"
//                 element={
//                   // <ProtectedRoute>
//                     <HomePage />
//                   // </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="getcourse"
//                 element={
//                   // <ProtectedRoute>
//                     <CourseStore />
//                   // </ProtectedRoute>
//                 }
//               />
//               <Route
//                 path="cart"
//                 element={
//                   // <ProtectedRoute>
//                     <Cart />
//                   // </ProtectedRoute>
//                 }
//               />
//             </Route>
//           {/* ) : ( */}

//             {/* <Route
//               path="*"
//               element={
//                 <div className="transition-page overflow-auto">
                  
//                 </div>
//               }
//             /> */}
//           {/* )} */}

//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       {/* </UserAuthContextProvider> */}
//     </div>
//   );
// }

// export default App;