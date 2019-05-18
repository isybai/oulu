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

const today = new Date();
const endDate = `${today.getFullYear()}-${today.getMonth() +
  1}-${today.getDate() - 1}`;
const startDate = `${today.getFullYear()}-${today.getMonth() +
  1}-${today.getDate() - 5}`;

let url = `https://ehp-data.com/api/v2/units/886/data/?start=${endDate}T00:00:00Z&show_invalid=false`;
let url2 = `https://ehp-data.com/api/v2/units/1159/data/?start=${endDate}T00:00:00Z&show_invalid=false`;
export default class Environment extends Component {
  state = {
    data: null
  };
  async componentWillMount() {
    let res = await fetch(url, {
      method: 'get',
      headers: {
        Authorization: 'Basic cHVibGljOnB1YmxpYw==',
        'Content-type': 'application/json'
      }
    });
    let res2 = await fetch(url2, {
      method: 'get',
      headers: {
        Authorization: 'Basic cHVibGljOnB1YmxpYw==',
        'Content-type': 'application/json'
      }
    });
    //new Date('2019-05-14T13:00:00Z').getUTCHours()
    // Water level
    res = await res.json();
    res2 = await res2.json();
    const data = res.results.reverse().map((res, index) => {
      return {
        name: new Date(res.timestamp).getUTCHours() + ':00',
        'Water level': res.value,
        'Water Temp': res2.results.reverse()[index].value
      };
    });

    this.setState({
      data: data
    });
  }

  render() {
    const { data } = this.state;

    return (
      <LineChart
        width={width - 100}
        height={300}
        data={data}
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
