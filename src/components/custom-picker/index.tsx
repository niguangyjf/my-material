import React, { createElement, useEffect, useState } from 'react';
import './index.scss'

export interface CustomPickerProps {
    /**
     * 容器的样式
     */
    style?: React.CSSProperties;
    /**
     * 选中项颜色
     */
    selectColor: string;
    /**
     * 选中事件
     */
    onPickerChange?: Function;
}

const CustomPicker: React.FC<CustomPickerProps> = ({
    style,
    selectColor,
    onPickerChange
}) => {

    const [color, setColor] = useState<string>("#1890ff")
    const [current, setCurrent] = useState<number>(0)

    const list = ["本年", "本季度", "本月"]


    const change = (val: any) => {
        setCurrent(val)
        onPickerChange?.(val, list[val])
    }

    useEffect(() => {
        if(selectColor) {
            setColor(selectColor)
        }
    }, [selectColor])

    return (
        <div
            style={{ ...style }}
            className="custom-picker"
        >
            {list?.map((item: any, index: number) => (<span style={{color: index === current ? color : (style?.color || "#000"), marginLeft: index === 0 ? 0 : 16}} onClick={() => change(index)} key={item}>{item}</span>))}
        </div>
    );
};

// CustomPicker.defaultProps = {
//   title: "title"
// };

export { CustomPicker };