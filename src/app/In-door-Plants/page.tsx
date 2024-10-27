import Link from "next/link";

export default async function IndoorPlants() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return (
    <div className="flex justify-center h-screen">
      <div>
        <div className="flex text-5xl justify-center items-center text-[#8DB600]">
          <h1>Indoor Plants / House Plant</h1>
        </div>
        <div className="flex text-xl justify-center text-center underline">
          <p>From Wikipedia, the free encyclopedia</p>
        </div>
        <div className="h-500 w-2/3 mx-52 my-14 py-10 text-center text-lg">
          A <b>houseplant</b>, sometimes known as a <b>pot plant</b>,{" "}
          <b>potted plant</b>, or an <b>indoor plant</b>, is an
          <a
            href="https://en.wikipedia.org/wiki/Ornamental_plant"
            className="hover:underline text-blue-600"
          >
            ornamental
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Plant"
            className="hover:underline text-blue-600"
          >
            plant
          </a>
          that is grown indoors.
          <a
            href="https://en.wikipedia.org/wiki/Houseplant#cite_note-1"
            className="hover:underline text-blue-600"
          >
            <sup>[1]</sup>
          </a>
          As such, they are found in places like
          <a
            href="https://en.wikipedia.org/wiki/House"
            className="hover:underline text-blue-600"
          >
            residences
          </a>
          and
          <a
            href="https://en.wikipedia.org/wiki/Office"
            className="hover:underline text-blue-600"
          >
            offices
          </a>
          , mainly for
          <a
            href="https://en.wikipedia.org/wiki/Ornamental_plant"
            className="hover:underline text-blue-600"
          >
            decorative purposes
          </a>
          . Common houseplants are usually tropical or semi-tropical and are
          often
          <a
            href="https://en.wikipedia.org/wiki/Epiphytes"
            className="hover:underline text-blue-600"
          >
            epiphytes
          </a>
          ,
          <a
            href="https://en.wikipedia.org/wiki/Succulents"
            className="hover:underline text-blue-600"
          >
            succulents
          </a>
          or
          <a
            href="https://en.wikipedia.org/wiki/Cacti"
            className="hover:underline text-blue-600"
          >
            cacti
          </a>
          .
          <a
            href="https://en.wikipedia.org/wiki/Houseplant#cite_note-2"
            className="hover:underline text-blue-600"
          >
            <sup>[2]</sup>
          </a>
        </div>
        <div className="flex-col w-1/3 h-50 p-10 text-2xl mx-48 -my-10">
          <div>
            <h2>
              <Link
                href="../In-door-Plants/plants"
                className="hover:text-green-950 text-green-700 font-extrabold text-2xl"
              >
                Plants Info...
              </Link>
            </h2>
          </div>
          <div className="flex-1">
            <h2>
              <Link
                href="../In-door-Plants/Leafy-plants"
                className="hover:text-green-950 text-green-700 font-extrabold text-2xl"
              >
                👉🏻 Leafy Plants
              </Link>
            </h2>
          </div>
          <div className="flex-1">
            <h2>
              <Link
                href="../In-door-Plants/Flowering-Plants"
                className="hover:text-green-950 text-green-700 font-extrabold text-2xl"
              >
                👉🏻 Flowering Plants
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
