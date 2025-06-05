'use client';

import React, {FC} from 'react';
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
    <Link href={fullHref} className={className}>
      {children}
    </Link>
  );
};

export default LinkWithParams;