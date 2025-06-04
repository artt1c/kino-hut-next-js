"use client"

import React from "react"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
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
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
