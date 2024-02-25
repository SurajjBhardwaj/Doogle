"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useContext, useEffect, useState } from "react";

// import { Textarea } from "@/components/ui/textarea";
import { Link, Send } from "lucide-react";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
// import Link from "next/link";
import { useRouter } from "next/router";

const formSchema = z.object({
 who:z.string(),
 techStack:z.string(),
 
 levelQues:z.string(),
 interest:z.string(),

});

function QueryForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isloading, setIsLoading] = useState();
  const linkId =  "uy237rtg" ||Math.random().toString(36).slice(2);

  const initialFormState = {
    who:undefined,
 techStack:[],
 levelQues:undefined,
 interest:undefined,
 
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialFormState,
  });


  async function myhandleSubmit(value) {
    console.log(value)
    // try {
    //   setIsLoading(true);
    //   const response = await fetch("/api/email", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(value),
    //   });
    //   console.log("response", response);
  
    //   const newResult = await response.json();
    //   console.log("new result:",newResult);
     
    //   if (response.ok) {
        
    //     setIsLoading(false);
    //     displayToast('Successfully Sent', "✅" ,"Thanks for your email, we will get back to you soon");
    //     form.reset(initialFormState);
    //   } else {
    //     console.error("Error:", newResult.message);
    //     displayToast("Error", "❌", newResult.message);
    //     setIsLoading(false);
    //   }
    // } catch (error) {
    //   console.error("Error Server:", error);
     

    //   displayToast("Error while sending data", "❌", error.message); 

    //   setIsLoading(false);
    //   router.push(`/newRoom/${linkId}`)
    // }

    // form.reset(initialFormState);

    setIsLoading(true);
    setTimeout(() => {
       setIsLoading(false)
      router.push(`/newRoom/${linkId}`);

    }, 6900);
   
  }
  
  const displayToast = (title, action, description = "") => {
    toast({
      title,
      action,
      description,
    });
  };

  return (
    <div className="max-w-lg w-full p-4 md:px-8 md:py-0">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(myhandleSubmit)}
          className="flex flex-col space-y-2 md:space-y-4"
        >
          <FormField
            control={form.control}
            name="who"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col items-start justify-start space-y-1">
                  <FormLabel className="text-slate-600 text-nowrap text-sm lg:text-base ">
                Join as a:
                  </FormLabel>
                  <Select
                    className="flex flex-1 flex-col"
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your identity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="solveQuery">Solve Query</SelectItem>
                      <SelectItem value="askQuery">Ask Query</SelectItem>
                      
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col items-start justify-start space-y-1">
                  <FormLabel className="text-slate-600 text-nowrap text-sm lg:text-base ">
                    Tech Stack :
                  </FormLabel>

                  <FormControl>
                    <Input {...field} placeholder="Enter your tech stack" />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="levelQues"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col items-start justify-start space-y-1">
                  <FormLabel className="text-slate-600 text-nowrap text-sm lg:text-base ">
                    Question label :
                  </FormLabel>
                  <Select
                    className="flex flex-1 flex-col"
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your identity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Individual">Easy</SelectItem>
                      <SelectItem value="Intermediate">Intermediate</SelectItem>
                      <SelectItem value="Difficult">Difficult</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="interest"
            render={({ field }) => {
              return (
                <FormItem className="flex flex-col items-start justify-start space-y-1">
                  <FormLabel className="text-slate-600 text-nowrap text-sm lg:text-base ">
                    Specific :
                  </FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your interest"
                      
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <Button
            type="submit"
           className='rounded-full'
          >
           {/* <Link href={`/newRoom/${linkId}`} className="flex gap-4"> */}
           
            <span>{isloading ? "Loading..." : "Join "}</span>
            {/* </Link> */}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default QueryForm;
