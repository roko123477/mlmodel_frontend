import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
const Show = () => {
  let [predcls, setPredcls] = useState("");
  let [prob, setProb] = useState([]);
  let [imglink, setImglink] = useState("");
  // const navigate = useNavigate()
  let location = useLocation();
  useEffect(() => {
    console.log(location.state);
    setPredcls(location.state.pred_class);
    setProb(location.state.prediction[0]);
    setImglink(location.state.user_image);
  }, [location.state]);

  const chartSetting = {
    yAxis: [
      {
        label: "prob values",
      },
    ],
    width: 600,
    height: 400,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-10px, 0)",
      },
    },
  };

  const dataset = [
    {
      Nodr: prob[0],
      month: "No dr",
    },
    {
      milddr: prob[1],
      month: "Mild dr",
    },
    {
      moderatedr: prob[2],
      month: "Moderate dr",
    },
    {
      proliferativedr: prob[3],
      month: "Proliferative dr",
    },
    {
      severedr: prob[4],
      month: "Severe dr",
    },
  ];

  const valueFormatter = (value) => `${value}`;

  const data = [
    { value: Math.round(prob[0] * 100), label: "No Dr" },
    { value: Math.round(prob[1] * 100), label: "Mild Dr" },
    { value: Math.round(prob[2] * 100), label: "Moderate Dr" },
    { value: Math.round(prob[3] * 100), label: "Proliferative Dr" },
    { value: Math.round(prob[4] * 100), label: "Severe Dr" },
  ];

  const size = {
    width: 750,
    height: 450,
    responsive: true,
  };

  return (
    <div>
      <div
        class="flex w-full h-[100vh] items-center justify-center bg-slate-300"
        style={{
          backgroundImage: `url(${"https://t3.ftcdn.net/jpg/02/26/11/28/360_F_226112855_yeHzKpT5GlvblgZlibf9MvJZLVjsqGYf.jpg"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col items-center">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl text-center">
            <span class="">
              <span class="text-3xl flex justify-center items-center bg-clip-text text-black">
                The Predicted class falls under{" "}
              </span>
              <span class="flex flex-col justify-center items-center bg-clip-content p-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl">
                {predcls}
              </span>
            </span>
          </h1>
          <div className="flex flex-row w-[100%] items-center">
            <div className="w-[33%]">
              <h4 class="text-xl tracking-tight text-gray-900 sm:text-xl md:text-xl text-center">
                <span class="block">
                  <span class=" bg-clip-text text-black text-2xl">
                    The Probilities values lies under{" "}
                  </span>
                 
                  <div className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-gray-800">
                    <div className="my-2">
                      {" "}
                      <span className="px-3 mx-3 border rounded-xl text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                        No dr
                      </span>
                      {prob[0]}
                    </div>
                    <div className="my-2">
                      <span className="px-3 mx-3 border rounded-xl text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                        Mild dr
                      </span>
                      {prob[1]}
                    </div>
                    <div className="my-2">
                      {" "}
                      <span className="px-3 mx-3 border rounded-xl text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                        Moderate Dr
                      </span>
                      {prob[2]}
                    </div>
                    <div className="my-2">
                      {" "}
                      <span className="px-3 mx-3 border rounded-xl text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                        Proliferative Dr
                      </span>
                      {prob[3]}
                    </div>
                    <div className="my-2">
                      <span className="px-3 mx-3 border rounded-xl text-white text-2xl bg-gradient-to-r from-cyan-500 to-blue-500">
                        Severe Dr
                      </span>
                      {prob[4]}
                    </div>
                  </div>
                </span>
              </h4>
            </div>
            <div className="w-[33%] mr-12">
              <img
                src={
                  "https://res.cloudinary.com/dg4iksxsb/image/upload/v1716351868/mlmodelpredict/AlexNetAcc_cn5vf9.png"
                }
                alt=""
                srcset=""
              />
            </div>
            <div className="w-[34%]">
              <BarChart
                dataset={dataset}
                xAxis={[
                  { scaleType: "band", dataKey: "month" },
                  {
                    colorMap: {
                      type: "continuous",

                      color: ["green", "orange"],
                    },
                  },
                ]}
                series={[
                  { dataKey: "Nodr", label: "No dr", valueFormatter },
                  { dataKey: "milddr", label: "Mild dr", valueFormatter },
                  {
                    dataKey: "moderatedr",
                    label: "Moderate dr",
                    valueFormatter,
                  },
                  {
                    dataKey: "proliferativedr",
                    label: "Proliferative dr",
                    valueFormatter,
                  },
                  { dataKey: "severedr", label: "Severe dr", valueFormatter },
                  // { dataKey: "newYork", label: "New York", valueFormatter },
                  // { dataKey: "seoul", label: "Seoul", valueFormatter },
                ]}
                {...chartSetting}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={imglink}
              class="w-[30vh] h-[30vh] items-center rounded-full"
            />
            <PieChart
              className=""
              series={[
                {
                  arcLabel: (item) => `${item.label} ~(${item.value}%)`,
                  arcLabelMinAngle: 45,
                  data,
                },
              ]}
              sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontWeight: "bold",
                },
              }}
              {...size}
            />
          </div>
          <button
            onClick={() => (window.location.href = "/")}
            type="button"
            class="m-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Go back to Home page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Show;
