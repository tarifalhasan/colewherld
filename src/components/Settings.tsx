import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from '@material-tailwind/react';

import { MdOutlineContactSupport } from 'react-icons/md';
import { SettingsIcon } from '../icons/svgIcon';
import { BsPower } from 'react-icons/bs';
export default function Settings() {
  return (
    <Menu placement="bottom-end">
      <MenuHandler className="  max-w-[78px] !h-12 !w-[68px] !max-h-12  bg-primary  shadow-base">
        <IconButton variant="text">
          <SettingsIcon />
        </IconButton>
      </MenuHandler>
      <MenuList className="flex flex-col  py-6 bg-primary border-none  gap-2">
        <MenuItem className="flex  !hover:bg-blue-300 items-center gap-1 py-2 pr-8 pl-2">
          <MdOutlineContactSupport size={20} />{' '}
          <span className=" text-base">Contact Support</span>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <BsPower size={20} /> <span>Log Out</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
