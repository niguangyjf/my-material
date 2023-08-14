import React, { createElement, useEffect, useState } from 'react';
import { Col, Form, Radio, Row, Select, TreeSelect } from 'antd';
import DateSelect from './DateSelect';
import './index.scss';
import moment from 'moment';

interface Props {
    /**
     * 表单事件
     */
    onChange?: (val: any, allValues: any) => void;
    /**
     * 标题
     */
    title?: string;
}

const tabList = [{ label: '综合能耗', value: '1' }, { label: '分类', value: '2' }, { label: '分项', value: '3' }]

const EnergyBoardSearchForm: React.FC<Props> = (props) => {
    const {
        onChange,
        title
    } = props;
    const [form] = Form.useForm();

    const [tab, setTab] = useState<string>('1');
    const [typeId, setTypeId] = useState<number>(1)

    const tabChange = (val: string) => {
        setTab(val)
        if (val === '3') {
            form.setFieldsValue({
                energyItemizedId: undefined
            })
        }
    }
    // 能耗统计图表类型选择(水电热水)
    const typeChange = (val: number) => {
        setTypeId(val);
        form.setFieldsValue({ energyItemizedId: undefined })
        // energyItemizedList.run({ energyId: val })
    }

    useEffect(() => {
        form.setFieldsValue({lineType: '1', compare: '1', date: {type: { key: 'year', groupBy: 'month'}, date: [moment().year(moment().year()).startOf('year'), moment().year(moment().year()).endOf('year')]}})
    }, [])
    
    console.log(props, `EnergyBoardSearchForm: props`);
    return <Form form={form} onValuesChange={onChange} style={{display: 'flex', width: '100%'}}>
        <Row justify="space-between" style={{ width: '100%', alignItems: 'center'}}>
            <Col style={{fontWeight: 'bold'}}>{title}</Col>
            <Col span={16} className='pos_btw'>
                <Form.Item name="lineType" style={{marginBottom: 0}}>
                    <Radio.Group
                        value={tab || '1'}
                        buttonStyle="solid"
                        onChange={e => tabChange(e.target.value)}
                        className="pos_end"
                    >
                        {
                            tabList?.map?.((item: any) => {
                                return (
                                    <Radio.Button value={item.value} key={item.value} checked={tab === item.value}>
                                        {item.label}
                                    </Radio.Button>
                                )
                            })
                        }
                    </Radio.Group>
                </Form.Item>
                {tab !== '1' && <Form.Item name="energyTypeId" style={{marginBottom: 0}}>
                    <TreeSelect
                        treeData={[]}
                        placeholder="请选择"
                        allowClear={false}
                        treeNodeFilterProp='title'
                        showSearch
                        onChange={typeChange}
                        style={{width: '100%', minWidth: 150}}
                    />
                </Form.Item>}
                {tab === '3' && typeId && <Form.Item name="energyItemizedId" style={{marginBottom: 0}}>
                    <TreeSelect
                        treeData={[]}
                        placeholder="请选择"
                        allowClear={false}
                        treeNodeFilterProp='title'
                        showSearch
                        onChange={typeChange}
                        style={{width: '100%', minWidth: 150}}
                    />
                </Form.Item>}
                <Form.Item name="energyUseId" label="用途" style={{marginBottom: 0}}>
                    <Select
                        options={[]}
                        placeholder="请选择"
                        allowClear={false}
                        optionFilterProp='label'
                        showSearch
                        style={{width: '100%', minWidth: 150}}
                    />
                </Form.Item>
                <Form.Item name="compare" style={{marginBottom: 0}}>
                    <Radio.Group buttonStyle="solid" className="pos_end">
                        <Radio.Button value='1'>同比</Radio.Button>
                        <Radio.Button value='2'>环比</Radio.Button>
                    </Radio.Group>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item name="date" style={{marginBottom: 0}}>
                    <DateSelect initDateType='year' hidePickerInput />
                </Form.Item>
            </Col>
        </Row>
    </Form>
}

export default EnergyBoardSearchForm;