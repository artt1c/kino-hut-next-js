'use client';

import React, {FC, Suspense} from 'react';

type Props = {
  children: React.ReactNode;
}

const SuspenseWrapper:FC<Props> = ({children}) => {
  return (
    <Suspense>
      {children}
    </Suspense>
  );
};

export default SuspenseWrapper;