import React from 'react';

import { Drawer, Typography, IconButton } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

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
      className="p-4"
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray">
          Drawer on LefopenLeft
        </Typography>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawerLeft}>
          <XMarkIcon strokeWidth={2} className="h-5 w-5" />
        </IconButton>
      </div>
    </Drawer>
  );
};

export default MobileSidebar;
