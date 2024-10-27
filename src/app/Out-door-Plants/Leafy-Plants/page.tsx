import Image from "next/image";
import Monstera from "../../public/Monstera_Deliciosa-removebg-preview.png";
export default function LeafyPlants(){
    return(
        <div  className="flex justify-center bg-lime-100 w-1200 h-full  ">
            <div>
                <div className="flex justify-between items-center gap-2 h-auto bg-yellow-200 border-8 border-black my-3"></div>
                <div className="flex-1 "> 
                    <Image
                    src={Monstera}
                    alt="Monstera"
                    width={300}
                    height={500}
                    priority
                    />
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center gap-2 h-auto bg-yellow-200 border-8 border-black my-3"></div>
                <div className="flex-1 "></div>
            </div>
            <div>
                <div className="flex justify-between items-center gap-2 h-auto bg-yellow-200 border-8 border-black my-3"></div>
                <div className="flex-1 "></div>
            </div>
            <div>
                <div className="flex justify-between items-center gap-2 h-auto bg-yellow-200 border-8 border-black my-3"></div>
                <div className="flex-1 "></div>
            </div>
            <div>
                <div className="flex justify-between items-center gap-2 h-auto bg-yellow-200 border-8 border-black my-3"></div>
                <div className="flex-1 "></div>
                
            </div>
            <div>
                <div className="flex justify-between items-center gap-2 h-auto bg-yellow-200 border-8 border-black my-3"></div>
                <div className="flex-1 "></div>
              
            </div>
            <div>
                <div className="flex justify-between items-center gap-2 h-auto bg-yellow-200 border-8 border-black my-3"></div>
                <div></div>
            </div>
        </div>
    );
}