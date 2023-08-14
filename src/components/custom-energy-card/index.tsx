import React, { createElement } from 'react';
import {isArray, isObject} from 'lodash';

import './index.scss';
import { chartColors, formatNum } from '../../utils';

interface ItemProps {
    name: string;
    value: string | number;
    unit: string;
    icon: string;
}

export interface CustomEnergyCardProps {
    /**
     * 容器的样式
     */
    style?: React.CSSProperties;
    /**
     * 图标
     */
    icon?: string;
    /**
     * 数据源
     */
    dataSource?: ItemProps | ItemProps[];
    /**
   * 子元素分几列展示，如果不设置就会自动开启响应式模式
   */
  cols?: number;
  /**
   * 列间距
   * @default 16
   */
  columnGap?: number;
  /**
   * 行间距
   * @default 16
   */
  rowGap?: number;
}

const CustomEnergyCard: React.FC<CustomEnergyCardProps> = ({
    style,
    icon,
    dataSource,
    cols,
    columnGap,
    rowGap
}) => {

    const getData = () => {
        if(isArray(dataSource)) {
            return dataSource[0] || {}
        } else if (isObject(dataSource)) {
            return dataSource
        }
        return {}
    }

    const finalData: ItemProps = getData();
    console.log(isArray(dataSource), `isArray(dataSource)`, dataSource)
    return isArray(dataSource) ? (<div className='custom_energy_card_list'
        style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr) [col-start])`,
            gridColumnGap: columnGap,
            gridRowGap: rowGap,
            visibility: cols === undefined ? 'hidden' : 'visible',
            display: "grid",
            height: '100%'
        }}
    >
        {dataSource?.map((item: ItemProps, index: number) => (<div
            style={{ display: 'flex', minHeight: 0 }}
            className="custom_energy_card"
            data-name="custom-energy-card"
        >
            {
                <div className='custom_energy_card_content' style={{width: '100%', backgroundColor: `${chartColors[index % dataSource?.length]}33`, color: chartColors[index % dataSource?.length], border: `1px ${chartColors[index % dataSource?.length]} solid` }}>
                    {item?.icon && <img src={item?.icon || ''} alt="" style={{ width: '1.41vw', height: '1.41vw' }} />}
                    <span>{item?.name || ''}</span>
                    <span>{((item?.value) ? formatNum(item?.value) : 0) || 0}</span>
                    <span>{item?.unit || ''}</span>
                </div>
            }
        </div>))}
    </div>) : (<div
            style={{ display: 'flex', minHeight: 0 }}
            className="custom_energy_card"
            data-name="custom-energy-card"
        >
            {
                <div className='custom_energy_card_content' style={{width: '100%', ...style }}>
                    {finalData?.icon && <img src={finalData?.icon || ''} alt="" style={{ width: '1.41vw', height: '1.41vw' }} />}
                    <span style={{ color: style?.color || '#000' }}>{finalData?.name || ''}</span>
                    <span style={{ color: style?.color || '#000' }}>{((finalData?.value) ? formatNum(finalData?.value) : 0) || 0}</span>
                    <span style={{ color: style?.color || '#000' }}>{finalData?.unit || ''}</span>
                </div>
            }
        </div>);
};

export { CustomEnergyCard };