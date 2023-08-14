import React, { createElement } from 'react';
import { Carousel, CarouselProps } from 'antd';
import { chunk, isObject } from 'lodash';
import { CustomEnergyCard } from '../custom-energy-card';

import './index.scss'

export interface CustomCarouselProps extends CarouselProps {
    /**
     * 数据源
     */
    dataSource?: any[];
    /**
    * 子元素分组时每组的个数
    * @default 4
    */
    groupCount: number;
    /**
     * 容器的样式
     */
    style?: React.CSSProperties;
    /**
   * 子元素分几列展示，如果不设置就会自动开启响应式模式
   */
    cols?: number;
    /**
     * 列间距
     * @default 20
     */
    columnGap?: number;
    /**
     * 行间距
     * @default 20
     */
    rowGap?: number;
}

const CustomCarousel: React.FC<CustomCarouselProps> = (props) => {
    const { dataSource, groupCount, style, cols, columnGap, rowGap } = props

    const dataList = Array.isArray(dataSource) ? dataSource : dataSource?.data
    const finalData = chunk(dataList || [], groupCount);

    console.log(finalData, `最终数据`, dataSource)

    return <Carousel style={{...style}} className='custom-carousel'>
        {finalData?.map((item: any) => (<CustomEnergyCard
            cols={cols}
            columnGap={columnGap}
            rowGap={rowGap}
            dataSource={item}
        />))}
    </Carousel>
}

export default CustomCarousel;