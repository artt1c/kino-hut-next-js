import React, {ReactNode} from 'react';
import AsideNavigation from "@/components/aside-navigation/AsideNavigation";

const WatchLayout = ({
  children
}: Readonly<{
  children:ReactNode;
}>) => {
  return (
    <div className="flex justify-start gap-4">
      <div className="flex-1 max-w-72">
        <AsideNavigation/>
      </div>
      <div className="flex-4 shrink">
        <main className='max-w-[1516px]  3xl:max-w-[1680px] mx-auto'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default WatchLayout;