import React, { Component } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
const width = window.innerWidth / 2;

const is_mobile = window.innerWidth < 700;
const today = new Date();
const endDate = `${today.getFullYear()}-${today.getMonth() +
  1}-${today.getDate() - 1}`;
// const startDate = `${today.getFullYear()}-${today.getMonth() +
//   1}-${today.getDate() - 5}`;

let water_level = `https://ehp-data.com/api/v2/units/886/data/?start=${endDate}T00:00:00Z&show_invalid=false`;
let water_temp = `https://ehp-data.com/api/v2/units/1159/data/?start=${endDate}T00:00:00Z&show_invalid=false`;
let chlorophyl = `https://ehp-data.com/api/v2/units/6071/data/?start=${endDate}T00:00:00Z&show_invalid=false`;
let turbidity = `https://ehp-data.com/api/v2/units/6075/data/?start=${endDate}T00:00:00Z&show_invalid=false`;

export class WaterLevelTempChart extends Component {
  state = {
    wl_wt_chart: null
  };

  async componentWillMount() {
    let wl = await fetch(water_level, {
      method: 'get',
      headers: {
        Authorization: 'Basic cHVibGljOnB1YmxpYw==',
        'Content-type': 'application/json'
      }
    });

    let wt = await fetch(water_temp, {
      method: 'get',
      headers: {
        Authorization: 'Basic cHVibGljOnB1YmxpYw==',
        'Content-type': 'application/json'
      }
    });

    wl = await wl.json();
    wt = await wt.json();

    const wl_wt_chart = wl.results.reverse().map((item, index) => {
      return {
        name: new Date(item.timestamp).getUTCHours() + ':00',
        'Water level': item.value,
        'Water Temp': wt.results.reverse()[index].value
      };
    });

    this.setState({
      wl_wt_chart: wl_wt_chart
    });
  }

  render() {
    const { wl_wt_chart } = this.state;

    return (
      <LineChart
        width={is_mobile ? 400 : width - 100}
        height={300}
        data={wl_wt_chart}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="Water level" stroke="#8884d8" />
        <Line type="monotone" dataKey="Water Temp" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
  }
}

export class ChlorophylTurbidityChart extends Component {
  state = {
    c_t_chart: null
  };

  async componentWillMount() {
    let c = await fetch(chlorophyl, {
      method: 'get',
      headers: {
        Authorization: 'Basic cHVibGljOnB1YmxpYw==',
        'Content-type': 'application/json'
      }
    });
    let t = await fetch(turbidity, {
      method: 'get',
      headers: {
        Authorization: 'Basic cHVibGljOnB1YmxpYw==',
        'Content-type': 'application/json'
      }
    });

    c = await c.json();
    t = await t.json();

    const c_t_chart = c.results.reverse().map((item, index) => {
      return {
        name: new Date(item.timestamp).getUTCHours() + ':00',
        Chlorofyle: item.value,
        Turbidity: t.results.reverse()[index].value
      };
    });

    this.setState({
      c_t_chart: c_t_chart
    });
  }

  render() {
    const { c_t_chart } = this.state;

    return (
      <LineChart
        width={is_mobile ? 400 : width - 100}
        height={300}
        data={c_t_chart}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="Chlorofyle" stroke="#8884d8" />
        <Line type="monotone" dataKey="Turbidity" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    );
  }
}

export function WaterFlow() {
  return (
    <iframe
      id="simppelikuva"
      title="simppelikuva"
      src="https://wwwi2.ymparisto.fi/i2/59/q5904450y/picsimp_q_big.html"
      frameBorder="0"
      scrolling="auto"
      width="100%"
      height="500"
    />
  );
}
