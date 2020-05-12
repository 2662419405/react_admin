import React, { useState, useEffect, useCallback } from "react";
import { myAxios } from "src/utils";

interface Idata {
  offlineChartData: any[];
}
interface Props {}

const Echarts: React.FC<Props> = () => {
  const [offlineChartData, setOfflineChartData] = useState<any[]>([]);
  const [offlineData, setOfflineData] = useState([]);
  const [radarData, setRadarData] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [salesTypeData, setSalesTypeData] = useState([]);
  const [salesTypeDataOffline, setSalesTypeDataOffline] = useState([]);
  const [salesTypeDataOnline, setSalesTypeDataOnline] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [visitData, setVisitData] = useState([]);
  const [visitData2, setVisitData2] = useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    getDefaultData();
  }, []);

  const getDefaultData = useCallback(async () => {
    const data = (await myAxios.getData({
      url: "https://proapi.azurewebsites.net//api/fake_chart_data",
      other: true,
    })) as Idata[];
    console.log(data["offlineChartData" as any]);
  }, []);

  return <div>123</div>;
};

export default Echarts;
