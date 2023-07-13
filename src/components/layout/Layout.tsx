import React, { HTMLAttributes } from 'react';
import MainSidebar from '../sidebar/Sidebar';
import HeaderMain from '../navbar/Navbar';

export default function Layout(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <main className={'flex w-full overflow-hidden   h-full'}>
      <div className="  ">
        <MainSidebar />
      </div>
      <div className=" w-full px-2 sm:px-5 xl:px-12 space-y-5 overflow-y-auto">
        <HeaderMain />
        <div
          className={
            '   overflow-y-auto   h-full  mx-auto   m-0  bg-skin-secondary sm:rounded-xl '
          }
        >
          {props.children}
        </div>
      </div>
    </main>
  );
}
