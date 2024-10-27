import Image from "next/image";
import Monestra from "./Public/monstera.png";
export default function Home() {
  return (
    <div className="flex justify-between items-center gap-2 w-full h-screen p-10 ">
      <div className="flex-1  justify-center p-4 items-center">
        <h1 className="text-5xl text-green-900">
          <strong className=" text-8xl">P</strong>LANTS
        </h1>
        <p className="text-3xl">
          are our greatest friends.They give us oxygen
          <br />
          to breathe, food, water, shelter, medicine, and
          <br />
          even fuel.We need trees because they purify the
          <br />
          air.
        </p>
      </div>
      <div className="flex-1  justify-items-center">
        <Image
          src={Monestra}
          alt="monstera.png"
          width={600}
          height={900}
          priority
        />
      </div>
    </div>
  );
}
