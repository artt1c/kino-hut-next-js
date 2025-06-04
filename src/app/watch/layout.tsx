import React, {ReactNode} from 'react';
import AsideNavigation from "@/components/aside-navigation/AsideNavigation";

const WatchLayout = ({
  children
}: Readonly<{
  children:ReactNode;
}>) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <AsideNavigation/>
      </div>
      <div className="flex-4">
        {children}
      </div>
    </div>
  );
};

export default WatchLayout;