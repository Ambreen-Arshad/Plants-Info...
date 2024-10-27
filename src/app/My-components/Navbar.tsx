import Link from "next/link";
import React from "react";
import { TbHexagonLetterA } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <div className="flex py-3 justify-between items-center text-white text-2xl w-full h-16 gap-4 bg-green-700">
            <header className="flex items-center gap-4 w-full">
                <div className="text-right">
                    <TbHexagonLetterA size={50} />
                </div>
                <nav className="hidden md:flex gap-4 flex-grow">
                    <Link href="/" className="hover:text-green-950 mx-2">Home</Link>
                    <Link href="/Out-door-Plants" className="hover:text-green-950">Outdoor Plants</Link>
                    <Link href="/In-door-Plants" className="hover:text-green-950">Indoor Plants</Link>
                 
                   </nav>
                   <div>
                   <Button  className="bg-white text-green-700 hover:bg-[#81c541] border-x-4 border-lime-500 m-4"> <Link href="../contact">Contact</Link></Button>
                   </div>

                <div className="ml-auto md:hidden p-6">
                    <IoMenu size={24} />
                </div>
            </header>
        </div>
    );
}