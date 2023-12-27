import React from 'react';
import ReactDOM from 'react-dom/client';
import { Tabs } from 'antd';
import { TimeUnitConverter } from './time-unit-converter';
import { ByteUnitConverter } from './byte-unit-converter';

class App extends React.Component {
  onChange(value) {
    console.log('changed, value:', value);
  };

  render() {
    const items = [
      {
        key: 'time',
        label: '时间单位',
        children: <TimeUnitConverter/>,
      },
      {
        key: 'byte',
        label: '字节单位',
        children: <ByteUnitConverter/>,
      }
    ];

    return (
      <Tabs 
        defaultActiveKey="time" 
        items={items} 
        onChange={this.onChange.bind(this)}
      >  
      </Tabs>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render(<App />);