"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Error(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-red-700 text-3xl">Try Again!</h1>
          <h1 className="text-4xl p-5 mx-60">
            You are doing some 
            <span className="text-[#ff2d2d] font-extrabold text-5xl">MiStaKEs!</span>
          </h1>
        </div>
        <div className="mt-10">
          <Button className="bg-[#ff2d2d] hover:bg-[#000] hover:text-[#ff2d2d] text-white text-2xl py-6 px-20">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
      
    );
                    
}