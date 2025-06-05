'use client';

import React, {FC, Suspense} from 'react';
import {useSearchParams} from "next/navigation";
import Link from "next/link";

type LinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const LinkWithParams:FC<LinkProps> = ({href, className, children}) => {

  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'movies';

  const fullHref = href+'?type='+type;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Link href={fullHref} className={className}>
        {children}
      </Link>
    </Suspense>
  );
};

export default LinkWithParams;