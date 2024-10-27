import Link from "next/link";
import Image from "next/image";
import begonia from "../../public/Begonia-1.png";
import christmas from "../../public/christmas-cactus1.png";
import peacelily from "../../public/peace_lily.png";


export default function FloweringPlants(){
    return(
        <div className="flex justify-center h-full">
            
            <div  className = "">
              
          
         
        <div className="flex text-5xl justify-center items-center text-[#8DB600] my-10 font-extrabold ">
          
             <h1>Indoor Blooming Plants/</h1>
             <Link href = "../../In-door-Plants"className="hover:underline text-green-950 text-3x1 font-lg"> Indoor Plant</Link>
        
            </div>
            <div className="flex justify-center text-pink-600 font-bold text-2xl underline">
          <p>Add these beautiful flowering plants to your collection.</p>
        </div>
       <div className=" flex text-xl justify-center mx-10 text-start underline  gap-5">
            <p>
                <ul className="list-inside list-disc">
                    {/* <div className="flex justify-center items-start my-11">  */}
                        <div className="flex  gap-2 my-10">
                            <div>
                    <li><Link href = "https://www.almanac.com/plant/peace-lilies"className=" hover:underline text-green-950 ">Peace lily</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://www.almanac.com/plant/african-violets"className="hover:underline text-green-950">African violets
Plant
</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://www.bhg.com/gardening/plant-dictionary/annual/begonia/"className="hover:underline text-green-950">Begonia</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://www.britannica.com/plant/jasmine-plant"className="hover:underline text-green-950">Jasmine Plant</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://www.marthastewart.com/1534703/christmas-cactus-care"className="hover:underline text-green-950">Schlumbergera</Link></li>
                    </div>
                    </div>
                    <div className="flex my-6  gap-11">
                        <div>
                    <li><Link href = "https://gardens.si.edu/learn/blog/tips-for-growing-healthy-roses/"className="hover:underline text-green-950">Rose Plant</Link></li>
                    </div>
                    <div><li><Link href = "https://www.thespruce.com/chenille-plant-1315697"className="hover:underline text-green-950">Acalypha hispida Plant</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://extension.umn.edu/houseplants/amaryllis"className="hover:underline text-green-950">Amaryllis Plant</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://www.almanac.com/plant/lilies"className="hover:underline text-green-950">Lily</Link></li>
                    </div>
                    </div>
                    
                    </ul>
            </p>
            </div>
            <div className="flex gap-2">
  <div className="flex-1   flex justify-center items-center">
    <Image 
      src={peacelily}                   

      alt="peacelily"
      width={400}
      height={500}
    />
  </div>
  <div className="flex-1   flex justify-center items-center">
    <Image 
      src={christmas}
      alt="christmas"
      width={450}
      height={100}
    />
  </div>
  <div className="flex-1  flex justify-center items-center">
    <Image 
      src={begonia}
      alt="begonia"
      width={325}
      height={175}
    />
  </div>
</div>
       </div>
       </div>
      
       

       
    
    );
}