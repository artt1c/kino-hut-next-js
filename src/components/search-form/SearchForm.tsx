'use client';

import React from 'react';
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {Button} from "@/components/ui/button";
import {zodResolver} from "@hookform/resolvers/zod";
import {Search, Settings2} from "lucide-react";

const searchFormSchema = z.object({
  search: z.string()
})

const SearchForm = () => {

  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      search: '',
    },
  });

  const onSubmit = (values: z.infer<typeof searchFormSchema>) => {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center flex-1 h-12 px-2 rounded-2xl bg-(--interactive)  focus-within:ring-2 focus-within:ring-ring
             focus-within:ring-offset-2 focus-within:ring-offset-(--sidebar-ring)
             transition-all duration-200">
        <Button type="submit" className='h-12 bg-transparent text-(--foreground-main) cursor-pointer shadow-none'>
          <Search className="size-6"/>
        </Button>
        <FormField
          control={form.control}
          name='search'
          render={({field}) => (
            <FormItem className="flex-1">
              <FormControl className="!bg-transparent shadow-none border-none transition-none ">
                <Input className="text-xl  border-transparent placeholder:text-xl" placeholder="Movies, series, shows..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="button" className="h-10 bg-transparent border-l-2 border-(--border) rounded-none text-(--foreground-main) cursor-pointer shadow-none">
          <Settings2 className="size-6"/>
        </Button>
      </form>
    </Form>
  );
};

export default SearchForm;