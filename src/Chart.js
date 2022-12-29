import React, { useContext, useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  TimeScale,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import "chartjs-adapter-date-fns";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  TimeScale,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

export default function Canvas() {
  const augmentedData = [0, 1, 2];

  const chartData = {
    labels: ["a", "b", "c"],

    datasets: [
      {
        label: "Your Cost",
        hidden: true,
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: augmentedData,
        datalabels: {
          color: "#000000",
          align: "bottom",
          offset: "5",
          display: "auto",

          backgroundColor: "rgba(255,255,255,0.5)",
        },
      },
    ],
  };
  console.log({ chartData });
  const options = {
    layout: {
      padding: { right: 5 },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {},
      y: {
        title: { display: true, text: "Dollar Amount" },
        stacked: false,
        grace: "2%",
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        suggestedMin: 0,
      },
    },
  };

  return (
    <>
      <div>
        <Chart type="line" data={chartData} height={300} options={options} />
      </div>
      {chartData ? (
        <div style={{ padding: "0.5rem", wordWrap: "wrap", whiteSpace: "pre" }}>
          {JSON.stringify(chartData, undefined, "\t")}
        </div>
      ) : null}
    </>
  );
}
