import React from 'react';
import styles from './styles.module.css';
import {Line, ResponsiveContainer, LineChart, XAxis, YAxis,CartesianGrid,
Legend, Tooltip} from 'recharts';
const Progamingdata = [
    {
        name : 'python',
        student : 15,
        fees :18
    },
    {
        name : 'java',
        student: 20,
        fees : 15
    },
    {
        name : 'react',
        student: 25,
        fees   : 20

    },
    {
        name : 'oracle',
        student : 15,
        fees    :10
    },
    {
        name : 'node js',
        student: 10,
        fees : 12
    }
]
const LineGraph = () => {
  return (
  <div>
    <h1 className={styles.chart}>Line Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={Progamingdata} width={500} height={300} margin={{
            top: 5, right :300, left :20, bottom : 5}}>
         <CartesianGrid />   
        <XAxis dataKey="name" interval={'preserveStartEnd'} />
        <YAxis />
        <Tooltip />
        <Legend/>
        <Line dataKey="student" stroke="red" activeDot={{ r : 8 }} />
        <Line dataKey="fees" stroke="green" activeDot={{ r : 8 }} />
        </LineChart>
        </ResponsiveContainer>
  </div>
  );
};

export default LineGraph;
