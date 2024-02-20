import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
  { key: 'Pending', y: 29, color: '#F765A3' },
  { key: 'Approved', y: 52, color: '#165BAA' }
];

const PieBasicChart2 = () => {
  return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" />;
};

export default PieBasicChart2;
