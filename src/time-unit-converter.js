import React from 'react';
import { Form, InputNumber, Divider } from 'antd';

export class TimeUnitConverter extends React.Component {
  state = {
    nsVal: null, 
    μsVal: null, 
    msVal: null, 
    sVal: null, 
    minuteVal: null, 
    hourVal: null,
    dayVal: null,  
  };

  reCalculate(unit, value) {
    console.log('changed, value:', value, ', unit: ' + unit);

    if (unit === "day") {
      this.setState({
        dayVal: value,
        hourVal: value * 24,
        minuteVal: value * 24 * 60, 
        sVal: value * 24 * 60 * 60,
        msVal: value * 24 * 60 * 60 * 1000,
        μsVal: value * 24 * 60 * 60 * 1000 * 1000,
        nsVal: value * 24 * 60 * 60 * 1000 * 1000 * 1000,
      });
    }
    if (unit === "hour") {
      this.setState({
        dayVal: value / 24,
        hourVal: value,
        minuteVal: value * 60, 
        sVal: value * 60 * 60,
        msVal: value * 60 * 60 * 1000,
        μsVal: value * 60 * 60 * 1000 * 1000,
        nsVal: value * 60 * 60 * 1000 * 1000 * 1000,
      });
    }
    if (unit === "minute") {
      this.setState({
        dayVal: value / 60 / 24, 
        hourVal: value / 60, 
        minuteVal: value,
        sVal: value * 60,
        msVal: value * 60 * 1000,
        μsVal: value * 60 * 1000 * 1000,
        nsVal: value * 60 * 1000 * 1000 * 1000,
      });
    }
    if (unit === "s") {
      this.setState({
        dayVal: value / 60 / 60 / 24, 
        hourVal: value / 60 / 60,
        minuteVal: value / 60, 
        sVal: value,
        msVal: value * 1000,
        μsVal: value * 1000 * 1000,
        nsVal: value * 1000 * 1000 * 1000,
      });
    }
    if (unit === "ms") {
      this.setState({
        dayVal: value / 1000 / 60 / 60 / 24, 
        hourVal: value / 1000 / 60 / 60,
        minuteVal: value / 1000 / 60, 
        sVal: value / 1000,
        msVal: value,
        μsVal: value * 1000,
        nsVal: value * 1000 * 1000,
      });
    }
    if (unit === "μs") {
      this.setState({
        dayVal: value / 1000 / 1000 / 60 / 60 / 24, 
        hourVal: value / 1000 / 1000 / 60 / 60,
        minuteVal: value / 1000 / 1000 / 60, 
        sVal: value / 1000 / 1000,
        msVal: value / 1000,
        μsVal: value,
        nsVal: value * 1000,
      });
    }
    if (unit === "ns") {
      this.setState({
        dayVal: value / 1000 / 1000 / 1000 / 60 / 60 / 24, 
        hourVal: value / 1000 / 1000 / 1000 / 60 / 60,
        minuteVal: value / 1000 / 1000 / 1000 / 60, 
        sVal: value / 1000 / 1000 / 1000,
        msVal: value / 1000 / 1000,
        μsVal: value / 1000,
        nsVal: value
      });
    }
  };

  render() {
    return (
      <div>
        <Form
          name="time-unit-converter"
          style={{ width: '100%' }}
          align="center"
        > 
          <Form.Item>
            <InputNumber 
                style={{ width: '100%' }} 
                addonAfter="纳秒（ns）" 
                value={this.state.nsVal}
                min={0}
                onChange={this.reCalculate.bind(this, 'ns')} /> 
          </Form.Item>
          <Form.Item>
            <InputNumber 
              style={{ width: '100%' }} 
              addonAfter="微秒（μs）" 
              value={this.state.μsVal}
              min={0}
              onChange={this.reCalculate.bind(this, 'μs')} />
          </Form.Item>
          <Form.Item>
            <InputNumber 
              style={{ width: '100%' }} 
              addonAfter="毫秒（ms）"
              value={this.state.msVal}
              min={0}
              onChange={this.reCalculate.bind(this, 'ms')} />
          </Form.Item>
          <Form.Item>
            <InputNumber 
              style={{ width: '100%' }} 
              addonAfter="秒（s）"
              value={this.state.sVal}
              min={0}
              onChange={this.reCalculate.bind(this, 's')} />
          </Form.Item>
          <Form.Item>
            <InputNumber 
              style={{ width: '100%' }} 
              addonAfter="分（minute）" 
              value={this.state.minuteVal}
              min={0}
              onChange={this.reCalculate.bind(this, 'minute')} />
          </Form.Item>
          <Form.Item>
            <InputNumber 
              style={{ width: '100%' }} 
              addonAfter="时（hour）" 
              value={this.state.hourVal}
              min={0}
              onChange={this.reCalculate.bind(this, 'hour')} />
          </Form.Item>
          <Form.Item>
            <InputNumber 
              style={{ width: '100%' }} 
              addonAfter="天（day）" 
              value={this.state.dayVal}
              min={0}
              onChange={this.reCalculate.bind(this, 'day')} />
          </Form.Item>
        </Form>
        <Divider orientation="left" orientationMargin="0" plain>时间单位换算表</Divider>
        <div>
          <p>1 天（day） = 24 时（hour）</p>
          <p>1 时（hour） = 60 分（minute）</p>
          <p>1 分（minute） = 60 秒（s）</p>
          <p>1 秒（s） = 1000 毫秒（ms）</p>
          <p>1 毫秒（ms） = 1000 微秒（μs）</p>
          <p>1 微秒（μs） = 1000 纳秒（ns）</p>
        </div>
      </div>
    )
  }
}