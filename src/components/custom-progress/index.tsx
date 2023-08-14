import React, { createElement, useEffect, useMemo, useState } from 'react';
import { Progress, ProgressProps } from 'antd';

export interface ProcessProps extends ProgressProps {
    /**
     * 图标
     */
    icon: string;
    /**
     * 标题
     */
    label: string;
    /**
     * 额定量
     */
    quota: number;
    /**
     * 单位
     */
    unit: string;
    /**
     * 消耗量
     */
    value: number;
    /**
     * 超出量
     */
    overValue: number;
}

const CustomProgress: React.FC<ProcessProps> = (props) => {
    const {
        label,
        icon,
        quota,
        unit,
        value,
        overValue,
    } = props
    console.log(props, `CustomProgress>>>>>>>>>>>`)
    return (<div style={{width: '100%'}}>
        <div className="pos_start">
            <img src={`/energyImg/${icon}_blue.png`} style={{ width: 14, height: 14, marginRight: 4 }} />
            <div>{`用${label || ''}总定额：${quota || 0}${unit || ''}`}</div>
        </div>
        <Progress {...props} />
        <div style={{ color: '#323232' }}>{`已消耗：${value || 0}${unit}   超出:${overValue || 0}${unit}`}</div>
    </div>);
};

export default CustomProgress;
