import Link from "next/link";
import Image from "next/image";
import arecapalm from "../../public/areca-palm.png";
import monstera1 from "../../public/Monstera1.png";
import moneyplant from "../../public/moneyplant.png";


export default function LeafyPlants(){
    return(
        <div className="flex justify-center h-full">
            
            <div  className = "">
              
          
         
        <div className="flex text-5xl justify-center items-center text-[#8DB600] my-10 font-extrabold ">
        <h1>List of common house-Leafyplants/</h1>
        <Link href = "../../In-door-Plants"className="hover:underline text-green-950 text-3x1 font-lg"> Indoor Plant</Link>
            </div>
       <div className=" flex text-xl justify-start mx-10 text-start underline  gap-5">
            <p>
                <ul className="list-inside list-disc">
                    {/* <div className="flex justify-center items-start my-11">  */}
                        <div className="flex  gap-2 my-10">
                            <div>
                    <li><Link href = "https://www.nccih.nih.gov/health/aloe-vera"className=" hover:underline text-green-950 ">Aloe-vera</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://www.thespruce.com/grow-areca-palms-indoors-1902876"className="hover:underline text-green-950">Areca-Palm</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://en.wikipedia.org/wiki/Cactus"className="hover:underline text-green-950">Cactus</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://en.wikipedia.org/wiki/Codiaeum_variegatum"className="hover:underline text-green-950">Codiaeum</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://greg.app/YogaPlantLife/plants/183f1b6a/"className="hover:underline text-green-950">Monestra</Link></li>
                    </div>
                    </div>
                    <div className="flex my-6  gap-11">
                        <div>
                    <li><Link href = "https://plant.pk/product/money-plant/"className="hover:underline text-green-950">Money-Plant</Link></li>
                    </div>
                    <div><li><Link href = "https://en.wikipedia.org/wiki/Phoenix_(plant)"className="hover:underline text-green-950">Phoenix-Plant</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://www.thespruce.com/snake-plant-care-overview-1902772"className="hover:underline text-green-950">Snake-Plant</Link></li>
                    </div>
                    <div>
                    <li><Link href = "https://hort.extension.wisc.edu/articles/spider-plant-chlorophytum-comosum/"className="hover:underline text-green-950">Spider-Plant</Link></li>
                    </div>
                    </div>
                    
                    </ul>
            </p>
            </div>
            <div className="flex gap-2">
  <div className="flex-1   flex justify-center items-center">
    <Image 
      src={arecapalm}                   

      alt="arecapalm"
      width={400}
      height={500}
    />
  </div>
  <div className="flex-1   flex justify-center items-center">
    <Image 
      src={moneyplant}
      alt="money plant"
      width={200}
      height={50}
    />
  </div>
  <div className="flex-1  flex justify-center items-center">
    <Image 
      src={monstera1}
      alt="monstera"
      width={250}
      height={200}
    />
  </div>
</div>
       </div>
       </div>
      
       

       
    
    );
}