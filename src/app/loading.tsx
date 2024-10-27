import Image from "next/image"
import Loading from "../app/public/loading.jpeg";
export default function LoadingOrSuspense(){
    return(
        <div className="flex justify-center items-center h-screen ">
            <h1 className="flex text-green-950 text-3xl underline  font-extrabold">
            "Loading, please wait..."
            </h1>
            <div className="text-3xl justify-center text-center text-[#b4bbc4]">
            <Image
            src={Loading}
            alt="loading image"
            height={200}
            width={200}
            />
          </div>

            
        </div>
    )
}