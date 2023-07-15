import AnalyticsCard from '../../components/AnalyticsCard';
import EducationAnalytics from '../../components/EducationAnalytics';
import MultiAxesChart2 from '../../components/charts/MuitiAxesChart2';
import Chart1 from '../../components/charts/MultiAxesChart1';
import BarChart from '../../components/charts/VerticalBarChart';

import { AnlycisData } from '../../constant';

const Analytics = () => {
  return (
    <section className=" pb-6">
      <div className=" grid gap-base">
        <div className=" grid lg:grid-cols-2 gap-base">
          <div className="">
            <Chart1 />
          </div>
          <div>
            <BarChart />
          </div>
        </div>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-base">
          {AnlycisData.map((data, index) => (
            <AnalyticsCard
              key={index}
              views={data.totalViewsCount}
              likes={data.totalLikeCount}
              title={data.name}
              logo={data.logo}
              followers={data.totalFlowerCount}
            />
          ))}
          <div className="  sm:block lg:hidden">
            <EducationAnalytics />
          </div>
        </div>
        <div className="grid  gap-base lg:grid-cols-3">
          <div className=" lg:col-span-2">
            <div>
              <MultiAxesChart2 />
            </div>
          </div>
          <div className=" lg:col-span-1  hidden lg:block">
            <EducationAnalytics />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
