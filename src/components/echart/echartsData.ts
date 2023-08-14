import moment from "moment";
import { randomColor16 } from "../../utils";

const color = ['#2A7E1D', '#85C700', '#F7C137', '#F57723', '#00C1D4', '#3D97FF', '#8C54FF', '#CC3300', '#009933', '	#FF00FF', '	#CDCD00', '	#B22222', '#7A378B']
export const defaultOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
}

export const chartBarData = (data) => {
    const tempColorArr = Array(100).fill().map(item => {
      return randomColor16();
    });
    if (!data || data?.length === 0) return {};
    const colorArr = ['#73a0fa', '#4fe1c0', ...color, ...tempColorArr];
    let xAxisArr = [];
    const seriesArr = [];
    
    // 计算结果
    const resultData = data?.map((item, index) => {
      xAxisArr = item?.trendIndexList?.map(trend => moment(trend?.xvalueDateTime).format('YYYY/MM/DD'));
      const yDataArr = item?.trendIndexList?.map(trendItem => trendItem?.yvalue ? (trendItem?.yvalue).toFixed(2) : 0);
      seriesArr.push({
        name: item?.name,
        type: 'bar',
        color: colorArr?.[index],
        tooltip: {
          valueFormatter (value) {
            return value;
          }
        },
        data: yDataArr,
        yAxisIndex: index
      })
      return {
        color: colorArr?.[index],
        ...item
      }
    });
    const legNameArr = resultData?.map(item => item?.name)
    console.log('resultData============>', resultData, `xAxisArr is:`, xAxisArr, `seriesArr is:`, seriesArr, `legNameArr is:`, legNameArr);
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      grid: {
        top: '25%',
        left: '5%',
        right: '5%',
        bottom: 0,
        containLabel: true,
      },
      legend: {
        top: -5,
        data: legNameArr
      },
      xAxis: [
        {
          type: 'category',
          // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: xAxisArr,
          axisPointer: {
            type: 'shadow'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: `${resultData?.[0]?.name} ${resultData?.[0]?.unit}`,
          min: 0,
          // max: 250,
          // interval: 50,
          axisLabel: {
            formatter: `{value}`
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              color: "#d9d9d9"
            }
          }
        },
        {
          type: 'value',
          name: `${resultData?.[1]?.name} ${resultData?.[1]?.unit}`,
          min: 0,
          // max: 250,
          // interval: 50,
          axisLabel: {
            formatter: `{value}`
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: "#d9d9d9"
            }
          }
        },
      ],
      series: seriesArr
      // series: [
      //   {
      //     name: 'Evaporation',
      //     type: 'bar',
      //     color: colorArr[0],
      //     tooltip: {
      //       valueFormatter: function (value) {
      //         return value + ' ml';
      //       }
      //     },
      //     data: [
      //       2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      //     ]
      //   },
      //   {
      //     name: 'Precipitation',
      //     type: 'bar',
      //     color: colorArr[1],
      //     tooltip: {
      //       valueFormatter: function (value) {
      //         return value + ' ml';
      //       }
      //     },
      //     data: [
      //       2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      //     ]
      //   }
      // ]
    };
    return option
}

export const energyAnalysisPie = (data: any[] = []) => {
	
	if(!data || data?.length === 0) return {}
	
	const legendData: any[] = [];
	
	const seriesData1: any[] = [];
    const seriesData2: any[] = [];
    let total1 = 0
    let total2 = 0
		
	data?.forEach((item: any) => {
		legendData?.push(item?.name || '');
		if(item?.type === 'main') {
            total1 += item?.value || 0
			seriesData1?.push({
				name: item?.name || '',
                value: item?.value || 0,
                unit: item?.unit || ''
			})
		} else {
            total2 += item?.value || 0
			seriesData2?.push({
				name: item?.name || '',
                value: item?.value || 0,
                unit: item?.unit || '',
			})
		}
    })
    const dataPercent = (value: string) => {
        let oName = ''
        let oValue = ''
        let valuePercent = ''
        const index = seriesData1?.findIndex?.(item=>item.name === value)
        if (index > -1) {
          oName = `${value}: `
          oValue = `${seriesData1?.[index]?.value}${seriesData1?.[index]?.unit || '-'}`
          valuePercent = `(${((total1 && total1 !== 0 ?  (seriesData1?.[index]?.value || 0) / total1 : 0) * 100).toFixed(2)}%)`
        }
        const index2 = seriesData2?.findIndex?.(item=>item.name === value)
        if (index2 > -1) {
          oName = `${value || '-'}: `
          oValue = `${seriesData2?.[index2]?.value || 0}${seriesData2?.[index2]?.unit || '-'}`
          valuePercent = `(${((total2 && total2 !== 0 ? (seriesData2?.[index2]?.value || 0) / total2 : 0) * 100).toFixed(2)}%)`
        }
        return {
          oName,
          oValue,
          valuePercent
        }
    }
	console.log(seriesData1, seriesData2, `OOOOOOOOOOOOOOOOOOOOOO`)
	return {
		tooltip: {
			trigger: "item",
			formatter: "{b}: {c} ({d}%)",
			confine: true
		},
		legend: {
			// orient: "vertical",
			// left: "center",
			top: 'bottom',
            // orient: 'vertical',
            right: 'center',
			// data: legendData,
			icon: 'circle',
			itemHeight: 12,
			type: 'scroll',
			width: '100%',
            formatter: (name: string) => `${dataPercent(name)?.oName}${dataPercent(name)?.oValue}   ${dataPercent(name)?.valuePercent}`
		},
		color,
		series: [
			{
				name: "能耗分析",
				type: "pie",
				selectedMode: "single",
				radius: [0, "40%"],
				center: ['50%', '40%'],
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: seriesData1,
			},
			{
				// name: "能耗分析",
				type: "pie",
				radius: ["55%", "72%"],
				center: ['50%', '40%'],
				label: {
					show: false
				},
				labelLine: {
					show: false
				},
				data: seriesData2,
			},
		],
	};

}