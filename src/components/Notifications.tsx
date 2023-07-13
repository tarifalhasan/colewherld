import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
} from '@material-tailwind/react';

import { ClockIcon } from '@heroicons/react/24/outline';
import { ActiveBellIcon } from '../icons/svgIcon';

export default function Notifation() {
  return (
    <Menu placement="bottom-end">
      <MenuHandler className="max-w-[78px] !h-12 !w-[68px] !max-h-12  bg-primary  shadow-base">
        <IconButton variant="text">
          <ActiveBellIcon />
        </IconButton>
      </MenuHandler>
      <MenuList className="flex flex-col bg-primary border-none  gap-2">
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <Avatar
            variant="circular"
            alt="tania andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <div className="flex flex-col gap-1">
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-whiteText"
            >
              <span className="font-medium  0">Tania</span> send you a message
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 text-xs  text-lightGray"
            >
              <ClockIcon className="h-3 w-3" />
              13 minutes ago
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <Avatar
            variant="circular"
            alt="tania andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <div className="flex flex-col gap-1">
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-whiteText"
            >
              <span className="font-medium  0">Tania</span> send you a message
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 text-xs  text-lightGray"
            >
              <ClockIcon className="h-3 w-3" />
              13 minutes ago
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <Avatar
            variant="circular"
            alt="tania andrew"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <div className="flex flex-col gap-1">
            <Typography
              variant="small"
              color="gray"
              className="font-normal text-whiteText"
            >
              <span className="font-medium  0">Tania</span> send you a message
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 text-xs  text-lightGray"
            >
              <ClockIcon className="h-3 w-3" />
              13 minutes ago
            </Typography>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
