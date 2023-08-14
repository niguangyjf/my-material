import React, { useState, useEffect, createElement } from 'react';
import style from "./index.scss"
import moment from 'moment'
import {DatePicker} from 'antd';

const {RangePicker} = DatePicker;


const DateSelect = (props: any) => {
    const { onChange, initDateType, hidePickerInput } = props
    const [date, setDate] = useState([]);
    const [type, setType] = useState({ key: 'year', groupBy: 'month' });
    const dateList = [
        { key: 'latelyMonth', value: '近1个月', groupBy: 'day' },
        { key: 'year', value: '本年', groupBy: 'month' },
        { key: 'quarter', value: '本季度', groupBy: 'month' },
        { key: 'month', value: '本月', groupBy: 'day' }
    ]
    const triggerChange = (changedValue) => {
        onChange?.({
            // date,
            // type,
            // ...value,
            ...changedValue,
        });
    };

    const durationDateChange = (values) => {
        if (values) {
            setDate(values);
        } else {
            setDate([moment().year(moment().year()).startOf('year'), moment().year(moment().year()).endOf('year')])
        }
        triggerChange({
            date: values,
            type
        });
    };

    const dateChange = (opts) => {
        if (opts) {
            setType(opts);
        } else {
            setType()
        }
        const arr = opts.key === 'latelyMonth' ? [
            moment().subtract(30, 'days'),
            moment().endOf('day')
        ] : [
            moment().startOf(opts.key),
            moment().endOf(opts.key)
        ]
        triggerChange({
            type: opts,
            date: arr
        });
        setDate(arr);
        console.log(opts, `>>>>>>>>>>`)

    }

    useEffect(() => {
        if (initDateType === 'latelyMonth') {
            // 指定了为最近一个月，默认是没有的
            const now = moment();
            setDate([now.subtract(30, 'days'), moment().endOf('day')])
            setType({ key: 'latelyMonth', groupBy: 'day' })
        } else {
            setDate([moment().year(moment().year()).startOf('year'), moment().year(moment().year()).endOf('year')])
            setType({ key: 'year', groupBy: 'month' })
        }
    }, [initDateType])

    return (
        <div style={{
            display: 'flex', alignItems: 'center'
        }}>
            <ul className="pos_btw" style={{ marginRight: 4, width: '100%' }}>
                {
                    dateList.map((i, j) => {
                        return <li key={i.key} style={{ marginRight: 5, cursor: 'pointer' }} onClick={() => dateChange({ key: i.key, groupBy: i.groupBy })} className={i.key === type?.key ? 'energy_static_date_active' : ''}>{i.value}</li>
                    })
                }
            </ul>
            {!hidePickerInput && <RangePicker format={props?.format ? props?.format : 'YYYY-MM-DD'} style={{flex: 3}} value={date} className={style.date_picker} onChange={durationDateChange} allowClear={false} />}
        </div >
    );
}

export default DateSelect;
