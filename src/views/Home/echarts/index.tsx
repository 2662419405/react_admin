import React, { useState, useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'

interface Props {}

const Echarts: React.FC<Props> = () => {
  /**
   * 初始化数据
   */
  const [data, setData] = useState<any>()
  useEffect(() => {
    const arr = [820, 932, 901, 934, 1290, 1330, 1620]
    setData([...arr])
  }, [])
  /**
   * echarts配置项
   */
  const getOption = {
    title: {
      text: '名字\n很香',
      subtext: '副标题',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      data: ['星期'],
    },
    toolbox: {
      show: true,
      feature: {
        dataView: {
          show: true,
          readOnly: false,
        },
        magicType: {
          type: ['line', 'bar', 'stack', 'tiled'],
        },
        restore: {
          show: true,
        },
        saveAsImage: {
          show: true,
          type: 'jpg',
        },
      },
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      name: '星期几',
      position: 'bottom',
      nameLocation: 'end',
      nameTextStyle: {
        color: 'red',
        fontWeight: 'bold',
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '星期',
        data,
        type: 'bar',
        areaStyle: {},
      },
    ],
  }
  /**
   * 进行渲染
   */
  return (
    <ReactEcharts
      option={getOption}
      notMerge={true}
      lazyUpdate={true}
      theme={'theme_name'}
    />
  )
}

export default Echarts
