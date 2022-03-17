import { GiSpaceShuttle } from 'react-icons/gi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdPersonOutline } from 'react-icons/md';
import { RiCompassLine } from 'react-icons/ri';

import Image from 'next/image';

import ElonMusk from '../assets/ElonMusk.jpg';
import JeffBezos from '../assets/JeffBezos.jpg';
import PlanetOne from '../assets/planetOne.svg';
import Rocket from '../assets/rocket.svg';

export default function Home() {
  return (
    <div className=" bg-main flex flex-col w-screen">
      <div className="flex justify-between items-center w-screen h-12 p-8 border-b-2 border-b-gray-400 border-opacity-30">
        <GiSpaceShuttle size={32} color="#FFF" />
        <RiCompassLine size={32} color="#FFF" />
        <div className="flex justify-between w-24 h-8">
          <HiOutlineShoppingCart size={32} color="#FFF" />
          <MdPersonOutline size={32} color="#FFF" />
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-evenly w-1/2 h-screen mt-8 ml-16 pointer-events-none">
          <div className="flex flex-col">
            <text className="text-white text-6xl">Unnamed Galactic</text>
            <text className="text-white text-5xl">Travel at Space</text>
            <button
              type="button"
              className="bg-white w-60 h-12 rounded-xl mt-6">
              <text>Join to Adventure</text>
            </button>
          </div>

          <div className="flex flex-row">
            <div className="w-40 mr-16">
              <div className="bg-white w-56 h-1 opacity-30 mb-4" />
              <text className="text-white text-xl font-semibold">
                You need have at least 18 years.
              </text>
            </div>
            <div className="ml-16 w-48">
              <div className="bg-white w-56 h-1 opacity-30 mb-4" />
              <text className="text-white text-xl font-semibold">
                Only persons with creative mind.
              </text>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-white h-1 opacity-30 mb-4" />
            <text className="text-white text-xl font-semibold">
              Travel with Elon Musk and Jeff Bezos.
            </text>
            <div className="flex mt-8">
              <Image
                alt="ElonMusk"
                src={ElonMusk}
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="mx-2" />
              <Image
                alt="JeffBezos"
                src={JeffBezos}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
            <div className="flex mt-8">
              <text className="text-white text-xl font-semibold">
                Elon Musk and Jeff Bezos are one of the most innovative and
                seemingly wild entrepreneurs in the world. Its initiatives
                include clean energy projects, automobile innovations,
                artificial intelligence, neurotechnology and even aerospace
                travel.
              </text>
            </div>

            <div className="flex mt-16">
              <text className="text-white text-6xl font-semibold">
                Explore the Unforgetable
              </text>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start w-1/2 pointer-events-none">
          <div>
            <Image alt="PlanetOne" src={PlanetOne} width={1000} height={1000} />
          </div>
          <div className="absolute top-3/4">
            <Image alt="Rocket" src={Rocket} width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
