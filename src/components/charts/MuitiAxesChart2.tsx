import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  // responsive: true,

  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Section Title',
      font: {
        size: 22, // specify the font size here
      },
      color: 'white',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ['9 am', '10 am', '11 am', '12 am', '1pm'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: [120, 135, 144, 103, 93, 129, 143, 125, 145, 134, 106, 96, 139],
      borderColor: 'rgba(60, 249, 203, 1)',
      backgroundColor: 'rgba(60, 249, 203, 1)',
      yAxisID: 'y',
    },
    {
      label: 'Transaction',
      data: [125, 145, 134, 106, 96, 139, 153, 120, 135, 144, 103, 93, 129],
      borderColor: 'rgba(1, 152, 252, 1)',
      backgroundColor: 'rgba(1, 152, 252, 1)',

      yAxisID: 'y1',
    },
    {
      label: 'Dataset 2',
      data: [105, 141, 135, 108, 99, 136, 143, 110, 111, 112, 114, 86, 126],
      borderColor: 'rgba(36, 252, 1, 1)',
      backgroundColor: 'rgba(36, 252, 1, 1)',
      yAxisID: 'y3',
    },
  ],
};

export default function MultiAxesChart2() {
  return (
    <div style={{ color: 'red' }}>
      <Line options={options} data={data} />
    </div>
  );
}
