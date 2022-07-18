import React, { useState } from "react";
import ApexCharts from "apexcharts";
import './dashactive.css'

export const ProgressChart = () => {
  var options = {
    chart: {
      height: 250,
      type: "radialBar",
    },

    series: [83],
    colors: ["#20E647"],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "70%",
          background: "#293450",
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 1,
            opacity: 0.15,
          },
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: "#fff",
            fontSize: "13px",
          },
          value: {
            color: "#fff",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Your GPA"],
  };

  var chart = new ApexCharts(document.querySelector("#prochart"), options);
  chart.render();

  return (
    <div className="gradeProgress">
      <div className=" overflow-hidden ps-1">
        <h5 className="">
            Total Score</h5>
      </div>
      <div id="prochart" > </div>
    </div>
  );
};
