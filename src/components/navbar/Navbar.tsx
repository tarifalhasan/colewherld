import { useState } from 'react';
// import sIcon from '@assets/img/new/searchIconsvg.svg';
import { FiSearch } from 'react-icons/fi';
import MobileSidebar from '../mobileSidebar/MobileSidebar';
import Notifation from '../Notifications';
import Settings from '../Settings';
import { NavbarIcon3 } from '../../icons/svgIcon';
import ProfileMenu from '../ProfileMenu';

// import t from '@assets/img/new/tarif.jpg';

const Navbar = () => {
  const [openLeft, setOpenLeft] = useState(false);
  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
  return (
    <>
      <header className=" header py-5 flex items-center justify-between">
        <div className="header__start">
          <div className="header_title flex flex-col gap-.5">
            <h2 className=" text-[1.75em] text-whiteText font-semibold ">
              Welcome Cole
            </h2>
            <span className=" text-sm font-normal text-lightGray">
              Saturday, 08 Aug 2021
            </span>
          </div>
        </div>
        <div className="header__end flex items-center  space-x-3">
          <div className="search  bg-primary px-5 rounded-[10px] py-2.5 w-full h-[48px] flex gap-2 items-center  max-w-[314px]">
            <FiSearch size={20} className="text-lightGray" />
            <input
              type="text"
              className=" bg-transparent  placeholder:text-lightGray   text-sm font-normal text-lightGray  focus:border-none focus:outline-none w-full h-full"
              placeholder="Search here.."
            />
          </div>
          <Notifation />
          <Settings />
          <div className="max-w-[78px] rounded-[10px] !h-12 grid place-items-center !w-[68px] !max-h-12  bg-primary  shadow-baser">
            <NavbarIcon3 />
          </div>
          <ProfileMenu />
        </div>
      </header>
      <MobileSidebar openLeft={openLeft} closeDrawerLeft={closeDrawerLeft} />
    </>
  );
};

export default Navbar;
