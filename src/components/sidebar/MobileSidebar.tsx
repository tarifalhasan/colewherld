import React from 'react';

import { Drawer, Typography, IconButton } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FaBuilding, FaLayerGroup } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';

import { Link, useLocation } from 'wouter';
import Logo from '../../assets/Logo/Logo';

import { BiSolidDashboard } from 'react-icons/bi';
import { MdPayment } from 'react-icons/md';
import { CTA } from '../../assets';
import { ReactSVG } from 'react-svg';
interface navLinkProps {
  to: any;
  icon: any;
  text: any;
}

function NavLink({ to, icon, text }: navLinkProps) {
  const [location] = useLocation();

  const isActive = location === to;

  return (
    <li
      className={`rounded-md nav-item text-base ${
        isActive
          ? 'active-navbar py-1.5  text-main-bg font-semibold '
          : '  text-whiteText font-normal'
      }`}
    >
      <Link to={to} className="flex items-center p-2 space-x-2 rounded-md">
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  );
}
interface MobileSidebarProps {
  openLeft: boolean;
  closeDrawerLeft: () => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({
  openLeft,
  closeDrawerLeft,
}) => {
  return (
    <Drawer
      placement="left"
      open={openLeft}
      onClose={closeDrawerLeft}
      className="p-4 bg-primary"
    >
      <div className=" bg-primary">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray"></Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerLeft}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </div>
        <div className="   flex flex-col  p-3   bg-primary h-full">
          <div className="space-y-3 w-[15.5em]  mt-4 h-full fixed top-0 left-0  p-3  ">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            <div className="flex-1 pt-10">
              <ul className="pt-2 pb-4 space-y-1 text-gray-500">
                <NavLink
                  to="/"
                  icon={<BiSolidDashboard size={20} />}
                  text="Analytics"
                />
                <NavLink to="/payment" icon={<MdPayment />} text="Payment" />
                <NavLink
                  to="/catasto_search"
                  icon={<FaBuilding />}
                  text="Catasto Search"
                />
                <NavLink to="/massive" icon={<FaLayerGroup />} text="Massive" />

                <li className="rounded-sm text-skin-gray-500">
                  <a className="flex items-center p-2 space-x-3 rounded-md">
                    <CiLogout />
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="  absolute bottom-[3%]  h-[189px] rounded-2xl bg-skin-green grid place-items-center">
            <ReactSVG src={CTA} />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default MobileSidebar;
