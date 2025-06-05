'use client';

import React, {FC} from 'react';
import {usePathname, useSearchParams} from "next/navigation";
import Link from "next/link";
import {cn} from "@/lib/utils";

type LinkProps = {
  href: string;
  className?: string;
  activeClass?: string;
  children: React.ReactNode;
}

const LinkWithParams:FC<LinkProps> = ({href, className, activeClass, children}) => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const type = searchParams.get('type') || 'movies';

  const fullHref = href+'?type='+type;

  return (
    <Link href={fullHref} className={cn(className, href === pathname ? activeClass : "")}>
      {children}
    </Link>
  );
};

export default LinkWithParams;