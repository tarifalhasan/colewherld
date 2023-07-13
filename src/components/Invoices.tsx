import { invoincesData } from '../constant';
import { InvoiceIcon } from '../icons/svgIcon';

const Invoices = () => {
  <style
  // dangerouslySetInnerHTML={{
  //   __html:
  //     '\n\n    .table {\n    border-spacing: 0 15px;\n  }\n\n  i {\n    font-size: 1rem !important;\n  }\n\n  .table tr {\n    border-radius: 20px;\n  }\n\n  tr td:nth-child(n + 6),\n  tr th:nth-child(n + 6) {\n    border-radius: 0 0.625rem 0.625rem 0;\n  }\n\n  tr td:nth-child(1),\n  tr th:nth-child(1) {\n    border-radius: 0.625rem 0 0 0.625rem;\n  }\n\n',
  // }}
  />;

  return (
    <div className="overflow-x-auto ">
      <h2 className=" py-8 text-[1.375em] font-semibold">Invoices</h2>
      <div className="table w-full  text-whiteText  space-y-6 text-sm">
        <ul className="  space-y-5">
          {invoincesData.map((data, index) => (
            <li
              key={index}
              className=" px-5  bg-primary shadow-large rounded-[10px] flex justify-between items-center "
            >
              <div className="p-3 font-medium capitalize">
                <div className="  flex items-center gap-3 py-2 font-normal  ">
                  <div className="relative h-10 w-10">
                    <div className="  w-10 bg-[#36333D] h-10 grid place-items-center shadow-base">
                      <InvoiceIcon />
                    </div>
                  </div>

                  <h3 className="   font-medium text-lg">{data.title}</h3>
                </div>
              </div>

              <div className=" space-x-4">
                <button className="  py-2 rounded-full  btn_primary">
                  View
                </button>
                <button className="btn_secondary rounded-full">Download</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Invoices;