import React, { createElement, useEffect, useMemo, useState } from 'react';
import { Input } from '@alifd/next';
import { bizCssPrefix } from '../../variables';
import './index.scss';
import ReactEcharts from "echarts-for-react";
import {defaultOptions, chartBarData} from './echartsData'

export interface EchartProps {
  /**
   * 高度
   * @default 251
   */
  height: number;
  /**
   * 数据源驱动，如传入 children，则以 children 优先
   */
  dataSource?: any[];
  titleProps: any;
  legendProps: any;
}

const Echart: React.FC<EchartProps> = function Echart(props) {
  const {
    height = 250,
    dataSource,
    titleProps,
    legendProps
  } = props
  const [chart, setChart] = useState<number>(0);
  const [option, setOption] = useState<any>(defaultOptions);

  const title = useMemo(() => {
    return titleProps
  }, [titleProps])

  useEffect(() => {
    if(height && title) {
      // const options = {...option};
      // options.title = title;
      const options = chartBarData(dataSource)
      options.title = title;
      options.legend = legendProps;
      console.log(`useEffect option`, titleProps, `dataSource`, dataSource)
      setOption(options)
      setChart(chart + 1)
    }
  }, [height, dataSource, title, legendProps])
  console.log(`final option`, option, `titleProps`, titleProps, `dataSource`, dataSource, `props`, props, `height`, height)
  return (<div style={{color: "#989898"}}>
    <ReactEcharts
      key={chart}
      style={{height: Number(height) || 250, width: "100%"}}
      option={dataSource ? option : defaultOptions}
      // option={option}
    />
  </div>);
};

export default Echart;
