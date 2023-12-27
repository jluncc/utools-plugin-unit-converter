import React from 'react';
import { Form, InputNumber } from 'antd';

export class ByteUnitConverter extends React.Component {
  state = {
    bVal: null, 
    BVal: null, 
    KBVal: null, 
    MBVal: null, 
    GBVal: null, 
    TBVal: null, 
  };

  reCalculate(unit, value) {
    console.log('changed, value:', value, ', unit: ' + unit);

    if (unit === "b") {
      this.setState({
        bVal: value, 
        BVal: value / 8, 
        KBVal: value / 8 / 1024, 
        MBVal: value / 8 / 1024 / 1024, 
        GBVal: value / 8 / 1024 / 1024 / 1024, 
        TBVal: value / 8 / 1024 / 1024 / 1024 / 1024, 
      });
    }
    if (unit === "B") {
      this.setState({
        bVal: value * 8, 
        BVal: value, 
        KBVal: value / 1024, 
        MBVal: value / 1024 / 1024, 
        GBVal: value / 1024 / 1024 / 1024, 
        TBVal: value / 1024 / 1024 / 1024 / 1024, 
      });
    }
    if (unit === "KB") {
      this.setState({
        bVal: value * 1024 * 8, 
        BVal: value * 1024, 
        KBVal: value, 
        MBVal: value / 1024, 
        GBVal: value / 1024 / 1024, 
        TBVal: value / 1024 / 1024 / 1024, 
      });
    }
    if (unit === "MB") {
      this.setState({
        bVal: value * 1024 * 1024 * 8, 
        BVal: value * 1024 * 1024, 
        KBVal: value * 1024, 
        MBVal: value, 
        GBVal: value / 1024, 
        TBVal: value / 1024 / 1024, 
      });
    }
    if (unit === "GB") {
      this.setState({
        bVal: value * 1024 * 1024 * 1024 * 8, 
        BVal: value * 1024 * 1024 * 1024, 
        KBVal: value * 1024 * 1024, 
        MBVal: value * 1024, 
        GBVal: value, 
        TBVal: value / 1024, 
      });
    }
    if (unit === "TB") {
      this.setState({
        bVal: value * 1024 * 1024 * 1024 * 1024 * 8, 
        BVal: value * 1024 * 1024 * 1024 * 1024, 
        KBVal: value * 1024 * 1024 * 1024, 
        MBVal: value * 1024 * 1024, 
        GBVal: value * 1024, 
        TBVal: value, 
      });
    }
  };

  render() {
    return (
      <Form
        name="byte-unit-converter"
        style={{ width: '100%' }}
        align="center"
      > 
        <Form.Item>
          <InputNumber 
              style={{ width: '100%' }} 
              addonAfter="位 / 比特（b）" 
              value={this.state.bVal}
              min={0}
              onChange={this.reCalculate.bind(this, 'b')} /> 
        </Form.Item>
        <Form.Item>
          <InputNumber 
            style={{ width: '100%' }} 
            addonAfter="字节（B）" 
            value={this.state.BVal}
            min={0}
            onChange={this.reCalculate.bind(this, 'B')} />
        </Form.Item>
        <Form.Item>
          <InputNumber 
            style={{ width: '100%' }} 
            addonAfter="千字节（KB）"
            value={this.state.KBVal}
            min={0}
            onChange={this.reCalculate.bind(this, 'KB')} />
        </Form.Item>
        <Form.Item>
          <InputNumber 
            style={{ width: '100%' }} 
            addonAfter="兆字节（MB）" 
            value={this.state.MBVal}
            min={0}
            onChange={this.reCalculate.bind(this, 'MB')} />
        </Form.Item>
        <Form.Item>
          <InputNumber 
            style={{ width: '100%' }} 
            addonAfter="吉字节（GB）" 
            value={this.state.GBVal}
            min={0}
            onChange={this.reCalculate.bind(this, 'GB')} />
        </Form.Item>
        <Form.Item>
          <InputNumber 
            style={{ width: '100%' }} 
            addonAfter="太字节（TB）" 
            value={this.state.TBVal}
            min={0}
            onChange={this.reCalculate.bind(this, 'TB')} />
        </Form.Item>
      </Form>
    )
  }
}