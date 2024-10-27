import Link from "next/link";
import React from "react";
import Image from "next/image";
import anthurium from "../public/anthurium.png";
import qaz from "../public/qaz.png";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact(){
    return(
        <div className="flex justify-items-center text-2xl w-full h-screen ">
           <div className="flex justify-start w-full h-100 gap-2 border-t-4 border-green-900  py-5 bg-lime-200">
            <Link href="https://www.linkedin.com/in/ambreen-arshad-5a1741267/overlay/about-this-profile/?_l=en_US" target="_blank" rel="noopener noreferrer">
            <RxLinkedinLogo size={70} className="text-gray-600" />      
                </Link>
                <Link href="https://github.com/Ambreen-Arshad" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare size={70} className="text-gray-600" />  
                </Link>
                <Link href="https://www.facebook.com/AmbreenArshhad/" target="_blank" rel="noopener noreferrer">
               <FaFacebookSquare size={70} className="text-gray-600" />  
                </Link>
                <Link href="http://www.youtube.com/@QAZ3456" target="_blank" rel="noopener noreferrer">
             <Image 
             src={qaz}
             alt="QAZ Channel"
             width={70}
             height={70}
             priority
             className="text-gray-600"/>
                </Link>
        </div>
        <div className="flex justify-center p-10 bg-lime-200 border-y-4 border-green-950">
            <Image
             src ={anthurium}
             alt = "anthurium"
             width={800}
             height={100}
             />
        </div>
        </div>
    );
}