import React, { useState, useEffect, useCallback } from "react";
import { myAxios } from "src/utils";
import ReactEcharts from "echarts-for-react";

interface Props {}

const Echarts: React.FC<Props> = () => {
  const getOption = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
    ],
  };
  return (
    <ReactEcharts
      option={getOption}
      notMerge={true}
      lazyUpdate={true}
      theme={"theme_name"}
      // onChartReady={this.onChartReadyCallback}
      // onEvents={EventsDict}
      // opts={}
    />
  );
};

export default Echarts;
