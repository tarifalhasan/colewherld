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
  responsive: true,
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
      data: [120, 135, 144, 103, 93, 129, 143],
      borderColor: 'rgba(0, 230, 156, 1)',
      backgroundColor: 'rgba(0, 230, 156, 1)',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: [19034.5, 20015, 27342, 20088, 20234, 29034, 3048],
      borderColor: 'rgba(1, 152, 252, 1)',
      backgroundColor: 'rgba(1, 152, 252, 1)',
      yAxisID: 'y1',
    },
  ],
};

export default function Chart1() {
  return <Line options={options} data={data} />;
}
