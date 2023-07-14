const EducationAnalytics = () => {
  return (
    <div className=" bg-primary shadow-base px-5 py-7">
      <div>
        <div className=" flex items-center justify-between">
          <h2 className=" text-lg font-semibold capitalize">
            Education Analytics
          </h2>
        </div>
        <ul className=" pt-5 space-y-3">
          <li className=" flex items-center justify-between">
            <span className=" text-sm font-normal text-lightGray">
              Landing page views
            </span>
            <span className=" text-base font-normal">12,215</span>
          </li>
          <li className=" py-2 border-y border-[#2C3339] flex items-center justify-between">
            <span className=" text-sm font-normal text-lightGray">Opt-in</span>
            <span className=" text-base font-normal">534</span>
          </li>
          <li className=" flex items-center justify-between">
            <span className=" text-sm font-normal text-lightGray">
              Educations Started
            </span>
            <span className=" text-base font-normal">125</span>
          </li>
          <li className=" flex items-center justify-between">
            <span className=" text-sm font-normal text-lightGray">
              Educations Completed
            </span>
            <span className=" text-base font-normal">163</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EducationAnalytics;
