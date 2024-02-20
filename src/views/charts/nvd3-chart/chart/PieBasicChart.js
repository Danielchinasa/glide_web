import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
  { key: 'Pending', y: 29, color: '#A6E1FA' },
  { key: 'Approved', y: 52, color: '#003233' }
];

const PieBasicChart = () => {
  return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" />;
};

export default PieBasicChart;
