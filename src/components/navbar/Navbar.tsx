import { useState } from 'react';
// import sIcon from '@assets/img/new/searchIconsvg.svg';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import MobileSidebar from '../sidebar/MobileSidebar';
import Notifation from '../Notifications';
import Settings from '../Settings';
import { NavbarIcon3 } from '../../icons/svgIcon';
import ProfileMenu from '../ProfileMenu';

// import t from '@assets/img/new/tarif.jpg';

const SearchBar = () => (
  <div className="search  bg-primary px-5 rounded-[10px] py-2.5 w-full h-[48px] flex gap-2 items-center  max-w-[314px]">
    <FiSearch size={20} className="text-lightGray" />
    <input
      type="text"
      className=" bg-transparent  placeholder:text-lightGray   text-sm font-normal text-lightGray  focus:border-none focus:outline-none w-full h-full"
      placeholder="Search here.."
    />
  </div>
);

const Navbar = () => {
  const [openLeft, setOpenLeft] = useState(false);
  const openDrawerLeft = () => setOpenLeft(true);
  const closeDrawerLeft = () => setOpenLeft(false);
  return (
    <div className=" overflow-hidden">
      <header className="  overflow-hidden z-[999]  sticky indent-0    px-5 left-0 right-0  header py-5 flex items-center justify-between">
        <div className="header__start">
          <div className="header_title  flex-col gap-.5 hidden xl:flex ">
            <h2 className=" text-sm sm:text-[1.75em] text-whiteText font-semibold ">
              Welcome Cole
            </h2>
            <span className=" text-xs sm:text-sm font-normal text-lightGray">
              Saturday, 08 Aug 2021
            </span>
          </div>
          <button onClick={openDrawerLeft} className=" xl:hidden">
            <BiMenuAltLeft size={25} />
          </button>
        </div>
        <div className="header__end flex items-center  space-x-3">
          <div className="hidden xl:block">
            <SearchBar />
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
    </div>
  );
};

export default Navbar;
