import React from 'react';
import CategoryDropList from "@/components/category-drop-list/CategoryDropList";
import SearchForm from "@/components/search-form/SearchForm";
import {Button} from "@/components/ui/button";
import {Bell} from "lucide-react";
import {AccountMenu} from "@/components/acount-menu/AccountMenu";
import LinkWithParams from "@/components/link-with-params/LinkWithParams";
import SuspenseWrapper from "@/components/suspense-wrapper/SuspenseWrapper";

const Header = () => {
  return (
    <header className="flex items-center h-auto py-8">

      <div className="flex-1">
        <SuspenseWrapper>
          <LinkWithParams href="/" className="flex items-center gap-2 font-bold text-3xl">
            <svg className="size-9" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <defs>
                <image width="256" height="256" id="img1" href="data:image/png;base64,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"/>
              </defs>
              <g id="SVGRepo_iconCarrier">
                <use href="#img1" x="0" y="0"/>
              </g>
            </svg>
            <span className="mb-1">
              Kino Hut
            </span>
          </LinkWithParams>
        </SuspenseWrapper>
      </div>

      <div className="flex items-center gap-4 flex-4">
        <SuspenseWrapper>
          <CategoryDropList/>
        </SuspenseWrapper>
        <SearchForm/>
        <Button className="h-12 rounded-xl bg-(--interactive) text-(--foreground-main)">
          <Bell className="size-6"/>
        </Button>
        <AccountMenu/>
      </div>
    </header>
  );
};

export default Header;