import { HTMLAttributes } from 'react';
import MainSidebar from '../sidebar/Sidebar';
import HeaderMain from '../navbar/Navbar';

export default function Layout(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <main className={'flex h-full w-full  gap-base  '}>
      <div className=" hidden xl:block  w-[15.5em]  h-full  ">
        <MainSidebar />
      </div>
      <div className=" w-full h-full px-2.5 sm:px-5 xl:px-12 space-y-5 ">
        <HeaderMain />
        <div
          className={'h-full  mx-auto    m-0  bg-skin-secondary sm:rounded-xl '}
        >
          {props.children}
        </div>
      </div>
    </main>
  );
}
