import { useEffect, useState } from "react";
import "./CourseStore.css";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../../features/courses/coursesSlice";
import { selectCourse } from "../../../features/courses/coursesSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddIcon from "@mui/icons-material/Add";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CourseStore = () => {
  const course = useSelector(selectCourse);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [cart, setCart] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const notify = () => toast("Adding to the cart!");

  // console.log(course.list)

  // const getFetchUsers = () => {
  //   fetch("http://localhost:3500/courses")
  //     .then((res) => res.json())
  //     .then((data) => setCourse(data));
  // };
  // useEffect(() => {
  //   getFetchUsers();
  // }, []);

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  // console.log(course);
  // console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const onAddTocart = async (id, titel, dicription, url, price) => {
    await fetch("http://localhost:3500/cart", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        titel: titel,
        dicription: dicription,
        url: url,
        price: price,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        
        setCart((item) => [...item, data]);

        return setTimeout(()=>window.location.reload(), 4000);
         
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`localhost:3500/courses/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          selectCourse(
            course.filter((course) => {
              return course.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div sx={{ width: "100%", padding: 0 }} className="CourseStoreBody">
      <div className="d-flex justify-content-between p-0 courseStoreContainer">
        <h4 className="">Availabel Courses</h4>

        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: "absolute", right: "5%", top: "88vh" }}
        >
          <AddIcon />
        </Fab>
        <div className="d-flex py-1 CourseSearchBox">
          <input placeholder="Search.." className="ps-2  " />
          <Button variant="contained" className="SeachBtn">
            Search
          </Button>
        </div>
      </div>

      <Box sx={{ width: "100%", padding: 0 , height: "100vh"}}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 0 }}>
          <Tabs
          className="bg-secondary"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All Course" {...a11yProps()} />
            <Tab label="Popular" {...a11yProps(1)} />
            <Tab label="New " {...a11yProps(2)} />
          </Tabs>
        </Box>
        <div className="row fetchCousebox g-0 p-0 m-0">
          {course &&
            course.list.map((item, key) => {
              return (
                <TabPanel
                  value={value}
                  index={item.group - 1}
                  key={key}
                  className="g-0 col-12 col-lg-4 col-md-6  col-xl-3 m-0 p-0 "
                  id="coursePanel"
                >
                  <Card className="CourseTitel m-0 p-0">
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          {item.titel.slice(0, 1)}
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={`${item.titel.slice(0, 22)}..`}
                      subheader="September 14, 2016"
                    />

                    <CardMedia
                      component="img"
                      height="194"
                      image={item.url}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <span variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun
                        meal to cook together with your guests. Add 1 cup of
                        frozen peas along with the mussels, if you like.
                      </span>
                    </CardContent>
                    <CardActions className="d-flex justify-content-between m-2">
                      <div>
                        <label><h4>{item.price}$ </h4></label>
                        
                        <IconButton aria-label="add to favorites" className='bg-secondary mx-1'>
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share"
                        className='bg-secondary'>
                          <ShareIcon />
                        </IconButton>

                      </div>

                      <div>
                        <Button
                          variant="contained"
                          onClick={() =>{
                            onAddTocart(
                              item.id,
                              item.titel,
                              item.dicription,
                              item.url,
                              item.price
                            );notify()}
                          }
                        >
                          Add to cart
                        </Button>
                        <ToastContainer />
                      </div>
                    </CardActions>
                  </Card>
                </TabPanel>
              );
            })}
        </div>
      </Box>
    </div>
  );
};

export default CourseStore;

// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

// function CourseStore() {
//   const [value, setValue] = useState('1');
//    useEffect(() => {
//     getFetchUsers();
//   }, []);

//   const getFetchUsers = () => {
//     fetch("http://localhost:3000/courses")
//       .then((res) => res.json())
//       .then((data) => (setCourses(data), console.log(data)))
//       .catch(console.log);
//   };

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }
// export default CourseStore;

// import { db } from "../../../Auth/firebase/firebase";
// import "./CourseStore.css";

// const CourseStore = () => {
//   const [courses, setCourses] = useState([]);
//   const [screen, setScreen] = useState(4);
//   const [courseFilter, setCourseFilter] = useState([]);
//   const [paymentModal, setPayemnetModal] = useState(false);

// window.addEventListener("resize", function () {
//   if (window.screen.width < 720) {
//     return setScreen(2);
//   } else {
//     return setScreen(4);
//   }
// });
// console.log(screen);

// useEffect(() => {
//   const getUsers = async () => {
//     const data = await getDocs(showCourseRef);
//     setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };

//   getUsers();
// }, []);

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const createcart = async () => {

//   const found = courseFilter.find((obj) => {
//     return obj.id === id;
//   });

//   if (found) {
//     console.log("already enrolled");
//     return setPayemnetModal(false);
//   } else {
//     // window.location.reload(false);
//     console.log("payment");
//     return setPayemnetModal(true);
//   }

//   return (
//     <div className=" justify-content-between mx-3" id="courseShow">

//       <div className="row gx-2 ourCourse">
//         <div class="col">
//           <div class="p-3 border bg-light">Custom column padding</div>
//         </div>
//         <div class="col">
//           <div class="p-3 border bg-light">Custom column padding</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseStore;
