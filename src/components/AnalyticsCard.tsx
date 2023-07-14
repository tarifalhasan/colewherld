import React from 'react';

interface Props {
  title: string;
  logo: any;
  views: string;
  followers: string;
  likes: string;
  key: any;
}

const AnalyticsCard: React.FC<Props> = ({
  title,
  logo,
  views,
  followers,
  likes,
  key,
}) => {
  return (
    <div key={key} className=" bg-primary shadow-base px-5 py-7">
      <div>
        <div className=" flex items-center justify-between">
          <h2 className=" text-lg font-semibold capitalize">
            {title} Analytics
          </h2>
          <div className=" w-9 h-9 rounded-full bg-[#2C3339] grid place-items-center shadow-2">
            <img src={logo} alt={title} />
          </div>
        </div>
        <ul className=" pt-5 space-y-3">
          <li className=" flex items-center justify-between">
            <span className=" text-sm font-normal text-lightGray">
              Total Views Count
            </span>
            <span className=" text-base font-normal">{views}</span>
          </li>
          <li className=" py-2 border-y border-[#2C3339] flex items-center justify-between">
            <span className=" text-sm font-normal text-lightGray">
              Total Followers Count
            </span>
            <span className=" text-base font-normal">{followers}</span>
          </li>
          <li className=" flex items-center justify-between">
            <span className=" text-sm font-normal text-lightGray">
              Total Like Count
            </span>
            <span className=" text-base font-normal">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnalyticsCard;
