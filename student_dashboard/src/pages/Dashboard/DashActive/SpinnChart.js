import { useState, useEffect } from "react";
import "./dashactive.css";
import Chart from "react-apexcharts";
import ApexCharts from "apexcharts";
import ReactApexCharts from "react-apexcharts";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ItemsCarousel from "react-items-carousel";
import { ProgressChart } from "./progess";
import va from "../../../app/assets/images/va.mp4";
import Footer from "../../../components/Footer/DashFooter/Footer";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const CourseCarosel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [courseEnrolled, setCourseEnrolled] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cardNum, setCardNum] = useState(4);
  const chevronWidth = 40;

  const getFetchUsers = () => {
    fetch("http://localhost:3500/courseEnrolled")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((responseJson) => {
        setCourseEnrolled(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFetchUsers();
  }, []);

  window.addEventListener("resize", function () {
    if (window.screen.width <= 992) {
      setCardNum(2);
    } else {
      setCardNum(4);
    }
  });
  // console.log(window.screen.width);

  return (
    <>
      <div className="d-flex w-100 justify-content-between mb-3"></div>
      <div className="mb-2 ">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={cardNum}
          gutter={10}
          leftChevron={
            <Box className="ms-5">
              <Fab size="small" color="" aria-label="add">
                <ChevronLeftIcon />
              </Fab>
            </Box>
          }
          rightChevron={
            <Box className="me-5">
              <Fab size="small" color="" aria-label="add">
                <ChevronRightIcon />
              </Fab>
            </Box>
          }
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {courseEnrolled &&
            courseEnrolled.map((item, key) => {
              return (
                <CardContent
                  key={key}
                  xs={12}
                  md={6}
                  lg={3}
                  sx={{
                    height: 100,
                    padding: 0,
                  }}
                  className="pb-1 d-flex"
                >
                  <Item className="h-100 d-flex w-100">
                    <div className="cardTitel h-100">{item.titel}</div>
                    <div className="h-100 cardImage">
                      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gps5oVPP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5ct9nhbw6gdpb8dh0yy1.png" />
                    </div>
                  </Item>
                </CardContent>
              );
            })}
        </ItemsCarousel>
      </div>

      <Grid
        container
        spacing={2}
        className="row  g-0"
        sx={{
          height: 100,
          color: "success.main",
          "& .MuiSlider-thumb": {
            borderRadius: "1px",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          sx={{
            height: 260,
          }}
          className="col order-md-first "
        >
          <Item className="h-100 w-100 overflow-hidden">
            <video
              src={va}
              className="advideo"
              // controls
              loop
              autoPlay
              muted
              type="video/mp4"
            />
            <div className="d-flex w-100 justify-content-between">
              <h6 className="pt-3">Add Video's</h6>
              <button className="btn btn-light mt-1 btn-outline-primary text-dark">
                Learn more..
              </button>
            </div>
          </Item>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          sx={{
            height: 260,
          }}
          className="col order-sm-3 order-xl-first "
        >
          <Item className="overflow-hidden h-100 p-0">
            <MixedBargraph />
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          sx={{
            height: 260,
          }}
        >
          <Item className="h-100 w-100 col order-lg-0 overflow-hidden">
            <ProgressChart />
          </Item>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          // xl={4}
          sx={{
            height: "auto",
          }}
        >
          <Item className="h-100 col o " id="spiningChartbox">
            <SpinnChart />
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            height: 400,
          }}
          className="col "
        >
          <Item className="h-100 pt-0">
           <CourseProgressTabel />
          </Item>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            height: "81vh",
          }}
        >
          <Item className="h-100 col" id="">
            cfg
          </Item>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            height: "81vh",
          }}
        >
          <Item className="h-100 col p-0 bg-transparent" id="">
            <Grid
              item
              xs={12}
              sx={{
                height: "37vh",
                marginBottom: "2vh",
              }}
            >
              <Item className="h-100 col bg-dark" id="">
                rer
              </Item>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                height: "40vh",
              }}
            >
              <Item className="h-100 col bg-warning" id="">
                okl
              </Item>
            </Grid>
          </Item>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            height: "80vh",
          }}
        >
          <Item className="h-100 col p-0 bg-transparent" id="">
            <Grid
              item
              xs={12}
              sx={{
                height: "19vh",
                marginBottom: "1vh",
              }}
            >
              <Item className="h-100 col  " id="">
                rer
              </Item>
                  </Grid>

                  <Grid
              item
              xs={12}
              sx={{
                height: "19vh",
                marginBottom: "1vh",
              }}
            >
              <Item className="h-100 col " id="">
                rer
              </Item>
                  </Grid>
                  <Grid
              item
              xs={12}
              sx={{
                height: "19vh",
                marginBottom: "1vh",
              }}
            >
              <Item className="h-100 col " id="">
                rer
              </Item>
                  </Grid>
                  <Grid
              item
              xs={12}
              sx={{
                height: "19vh",
                marginBottom: "1vh",
              }}
            >
              <Item className="h-100 col " id="">
                rer
              </Item>
                  </Grid>
              </Item>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            height: "50vh",
          }}
        >
          <Item className="h-100 col " id=""></Item>
        </Grid>
      </Grid>
    </>
  );
};

export const SpinnChart = () => {
  const [spine, setSpine] = useState({
    series: [
      {
        name: "Weekly",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Over all project",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="chartLeft  p-1 rounded text-white my-2" id="lineGraph">
      <h5 className="ps-2 overflow-hidden text">Live Learning Activity</h5>
      <div id="spineChart overflow-hidden">
        <Chart
          options={spine.options}
          series={spine.series}
          type="area"
          id="spinningChart"
          className=" text-white"
        />
      </div>
    </div>
  );
};

export const DonutChart = () => {
  const [donut, setDonut] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 200,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
      },
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 100,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <div className="d-block m-2">
      <div className="chartRight bg-white mb-3 rounded  p-2">
        <div id="donutChart">
          <Chart
            options={donut.options}
            series={donut.series}
            type="donut"
            width={250}
            height={350}
            className="bg-dark"
          />
        </div>
      </div>
      <div className="chartRight bg-white rounded  p-2 h-100 w-100"></div>
    </div>
  );
};

export const CourseProgressTabel = () => {
  return (
    <div class="card-body px-0 pb-2">
    <div className="w-100 text-start ps-2 bg-secondary py-2 text-white">
      <h4>Projects</h4>
    </div>
    <div class="table-responsive">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Courses
            </th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
              Groups
            </th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Projects
            </th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
              Completion
            </th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <img
                    src="img/bootstrap.png"
                    class="avatar avatar-sm me-3"
                    alt="xd"
                  />
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm"> Bootstrap 5 Version</h6>
                </div>
              </div>
            </td>
            <td>
              <div class="avatar-group mt-2">
                <a
                  href=""
                  class="avatar avatar-xs rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Ryan Tompson"
                >
                  <img src="img/p1.jpg" alt="team1" />
                </a>
                <a
                  href=""
                  class="avatar avatar-xs rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Romina Hadid"
                >
                  <img src="img/p2.jpg" alt="team2" />
                </a>
                <a
                  href=""
                  class="avatar avatar-xs rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Alexander Smith"
                >
                  <img src="img/p3.jpg" alt="team3" />
                </a>
                <a
                  href=""
                  class="avatar avatar-xs rounded-circle"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Jessica Doe"
                >
                  <img src="img/p4.jpg" alt="team4" />
                </a>
              </div>
            </td>
            <td class="align-middle text-center text-sm">
              <span class="text-xs font-weight-bold">122</span>
            </td>
            <td class="align-middle">
              <div class="progress-wrapper w-75 mx-auto">
                <div class="progress-info">
                  <div class="progress-percentage">
                    <span class="text-xs font-weight-bold">25%</span>
                  </div>
                </div>
                <div class="progress">
                  <div
                    class="progress-bar bg-gradient-info w-25"
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="25"
                  ></div>
                </div>
              </div>
            </td>
          </tr>
       
        </tbody>
      </table>
    </div>
  </div>
  );
};

export const MixedBargraph = () => {
  const [spine, setSpine] = useState({
    series: [
      {
        name: "TEAM A",
        type: "column",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: "TEAM B",
        type: "column",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },

      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    },
  });

  return (
    <div className="d-flex w-100 h-100">
      <div id="chart">
        <ReactApexCharts
          options={spine.options}
          series={spine.series}
          type="line"
          height={350}
        />
      </div>
      <div className="barDiscription">
        <div className="barDiscriptionCont">saadd</div>
      </div>
    </div>
  );
};
