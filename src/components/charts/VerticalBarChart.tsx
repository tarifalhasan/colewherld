import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ApexChartProps {}

const ApexChart: React.FC<ApexChartProps> = () => {
  const series = [
    {
      name: 'Servings',
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87],
    },
  ];

  const options = {
    annotations: {
      points: [
        {
          x: 'Bananas',
          seriesIndex: 0,
          label: {
            borderColor: 'rgba(141, 152, 175, 0.15)',
            offsetY: 0,
            style: {
              color: '#fff',
              background: '#000',
            },
            text: 'Bananas are good',
          },
        },
      ],
    },
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 12,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    colors: ['#00E69C'],

    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: [
        '9 am',
        '10 am',
        '11 am',
        '12 am',
        '1 pm',
        '2 pm',
        '3pm',
        '4pm',
        '6pm',
        '7pm',
        '8pm',
      ],
      tickPlacement: 'on',
    },

    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'horizontal',
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };

  return (
    <div id="chart">
      <div>
        <h2 className=" ml-5 text-xl font-semibold">Section Title</h2>
      </div>
      <ReactApexChart
        options={options as any}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
