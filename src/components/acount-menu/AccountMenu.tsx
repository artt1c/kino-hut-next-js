"use client"

import React from "react"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {ChevronDown, User} from "lucide-react";

export function AccountMenu() {

  return (
    <Popover>
      <PopoverTrigger asChild className="h-12 w-45 rounded-2xl !bg-(--interactive) cursor-pointer">
        <Button variant="outline" className="!p-1 justify-between gap-2">
          <div className="border-2 size-10 rounded-xl">
            {
              1!==1 ? <div></div> : <User className="size-full p-1"/>
            }
          </div>
          <div className="flex-1 text-left h-10">
            <p className="font-bold col-(--foreground-main) text-xl leading-none">Guest</p>
            <p className="text-yellow-300">status</p>
          </div>
          <ChevronDown className="size-6" strokeWidth="3"/>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mt-1 bg-(--interactive)" align="end">
        <div className='text-center font-bold'>In development</div>
      </PopoverContent>
    </Popover>
  )
}
