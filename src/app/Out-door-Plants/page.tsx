import Image from "next/image";
import image from "../public/image-01.png";
import image00 from "../public/image00.png";
import image001 from "../public/image001.png";
import image002 from "../public/image002.png";
export default async function OutdoorPlants() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return (
    <div className="flex justify-center bg-lime-100 w-1200 h-full  ">
      <div className="text-center text-2x1 text-pretty  ">
        <h1 className="text-[#5f9b24] text-6xl px-5 ">
          Easy Outdoor Plants for All Gardeners
        </h1>
        <br />

        <p className="text-3xl">
          These outdoor plants are easy to grow and nurture into a beautiful,
          thriving landscape regardless of gardening experience and skill level.
        </p>
        <div className="flex justify-between items-center gap-2 h-auto bg-yellow-200 border-8 border-black my-3">
          <div className="flex-1 ">
            <Image
              src={image}
              alt="Outdoor plants"
              width={350}
              height={400}
              priority
              className="border-4 border-green-800 object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 text-2xl text-center p-4">
            <p>
              Planting, growing, and nurturing flowers, shrubs, trees, and other
              greenery is extremely rewarding when your selections thrive. On
              the flip side, when your outdoor plants die, it's common to
              experience frustration and disappointment, regardless of your
              status as a novice, intermediate, or expert gardener. Some outdoor
              plants, however, are easy to grow in almost any condition, and
              this list of perennials, annuals, herbs, and more are resilient,
              hardy selections in most
              <a
                href="https://www.bhg.com/gardening/gardening-trends/find-your-hardiness-zone/"
                className="hover:underline"
              >
                USDA zones
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 h-auto bg-pink-600 text-white border-8 border-pink-600 my-3">
          <div className="flex-1 text-2xl text-center p-4">
            Agave is an excellent choice for gardeners in desert climates or
            with drought-prone backyards. There are many varieties of the
            low-water succulent, and quite a few offer variegated foliage. Some
            even boast
            <a
              href="https://www.bhg.com/gardening/design/color/silver-leaf-plants-garden-ideas/"
              className="hover:underline"
            >
              {" "}
              silver foliage
            </a>
            for a unique glowing effect within the landscape.{" "}
            <span className="text-black ">RELATED:</span>
            <a
              href="https://www.bhg.com/gardening/landscaping-projects/landscape-basics/drought-tolerant-landscaping-ideas/"
              className="hover:underline"
            >
              11 Drought-Tolerant Landscaping Ideas That Save Water and Look
              Amazing
            </a>
          </div>
          <div className="flex-1">
            <Image
              src={image00}
              alt="Outdoor plants"
              width={350}
              height={400}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 h-auto bg-yellow-400 border-8 border-yellow-400 my-3">
          <div className="flex-1">
            <Image
              src={image001}
              alt="Outdoor plants"
              width={350}
              height={400}
              priority
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 text-2xl text-center p-4">
            Don't let the sunny flowers of
            <a
              href="https://www.bhg.com/gardening/plant-dictionary/perennial/coreopsis/"
              className="hover:underline"
            >
              coreopsis
            </a>
            fool you—this plant is as tough as it is low-maintenance. It loves
            ample full sun for maximum blooms, though it tolerates light shade
            too. Coreopsis is a fantastic choice for beds, borders, and
            containers with well-draining soil.
          </div>
        </div>
        <div className="flex justify-between items-center bg-purple-950 text-white gap-2 h-auto my-5 border-x-4 border-y-8 border-purple-600">
          <div className="flex-1 text-2xl text-center p-4 ">
            This durable Australian native withstands heat without wilting,
            making it one of the best outdoor plants for tropical climates.
            <a
              href="https://www.bhg.com/gardening/plant-dictionary/annual/scaevola/"
              className="hover:underline"
            >
              Scaevola
            </a>
            's pretty blue-purple, fan-shaped annual flowers thrive in
            <a
              href="https://www.bhg.com/gardening/container/basics/how-to-make-a-perfect-hanging-basket/"
              className="hover:underline"
            >
              hanging baskets
            </a>
            or window boxes. Scaevola also adds color to a yard as a groundcover
            planting, and it's drought-tolerant.
          </div>
          <div className="flex-1">
            <Image
              src={image002}
              alt="Outdoor plants"
              width={350}
              height={400}
              priority
              className="object-cover w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
