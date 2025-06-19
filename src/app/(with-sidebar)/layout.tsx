import React, {ReactNode} from 'react';
import AsideNavigation from "@/components/aside-navigation/AsideNavigation";

const WatchLayout = ({
  children
}: Readonly<{
  children:ReactNode;
}>) => {
  return (
    <div className="flex justify-start gap-3">
      <div className="flex-1 max-w-72">
        <AsideNavigation/>
      </div>
      <div className="flex-4 shrink min-h-dvh">
        <div className='max-w-[1680px] mx-auto'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default WatchLayout;