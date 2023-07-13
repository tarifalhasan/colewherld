import Invoices from '../../components/Invoices';
import { WalletIcon } from '../../icons/svgIcon';

const Payment = () => {
  return (
    <section>
      <div className=" flex-col lg:flex-row flex  gap-base">
        <div className=" basis-[70%]">
          <div className=" current_blance grid place-items-center">
            <div className=" flex w-f flex-col space-y-4   items-center r">
              <div className=" w-14 h-14 rounded-full bg-white grid place-items-center bg-opacity-[0.20000000298023224]">
                <WalletIcon />
              </div>
              <h5 className=" text-lg font-normal">Current Balance</h5>
              <h1 className=" text-6xl font-semibold">$15,000</h1>
            </div>
          </div>
        </div>
        <div className=" basis-[30%] gap-base grid grid-rows-2">
          <div className=" bg-primary shadow-base grid place-items-center">
            <div className=" p-14 w-full space-y-4 flex  flex-col items-center">
              <h3 className=" text-lg font-semibold">Invoice# 12612</h3>
              <button className="btn_primary  rounded-xl w-full">
                Pay Now
              </button>
            </div>
          </div>
          <div className=" bg-primary shadow-base grid place-items-center">
            <div className=" p-14 w-full space-y-4 flex  flex-col items-center">
              <h3 className=" text-lg font-semibold">Customer Service</h3>
              <button className="btn_primary  rounded-xl w-full">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Invoices />
    </section>
  );
};

export default Payment;
