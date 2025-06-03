'use client';

import React, {useState} from "react";
import {usePathname} from "next/navigation";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ChevronDown} from "lucide-react";
import {Command, CommandGroup, CommandItem, CommandList} from "@/components/ui/command";
import {cn} from "@/lib/utils";
import Link from "next/link";

type CategoryProps = {
  value: string;
  label: string;
}

const categories: CategoryProps[] = [
  {
    value: "serials",
    label: "Serials",
  },
  {
    value: "movies",
    label: "Movies",
  },
  {
    value: "anime",
    label: "Anime",
  },
  {
    value: "tv",
    label: "Tv",
  },
]

const CategoryDropList = () => {
  // Url path info
  const pathName:string = usePathname();
  let pageName = pathName.slice(7);

  const [open, setOpen] = useState<boolean>(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-37 h-12 justify-between !bg-(--interactive) font-bold text-lg !px-5 !py-3 capitalize rounded-2xl border-0"
        >
          {pageName}
          <ChevronDown className="opacity-70 size-5 !mt-1" strokeWidth="3"/>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-37 !p-0">
        <Command className="bg-(--interactive)">
          <CommandList>
            <CommandGroup>
              {categories.map((category) => (
                <Link href={'/watch/'+category.value} key={category.value}>
                  <CommandItem
                    className={cn("text-lg font-bold", pageName === category.value ? 'hidden' : '')}
                    value={category.value}
                    onSelect={() => {
                      setOpen(false)
                    }}
                  >
                    {category.label}
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CategoryDropList;
