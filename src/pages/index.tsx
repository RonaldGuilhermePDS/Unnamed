import { GiSpaceShuttle } from 'react-icons/gi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdPersonOutline } from 'react-icons/md';
import { RiCompassLine } from 'react-icons/ri';

export default function Home() {
  return (
    <div className=" bg-main flex flex-col w-screen h-screen">
      {/* Header */}
      <div className="flex justify-between items-center w-screen h-12 p-6 border-b-2 border-b-gray-400 border-opacity-80">
        <GiSpaceShuttle size={32} color="#FFF" />
        <RiCompassLine size={32} color="#FFF" />
        <div className="flex justify-between w-24 h-8">
          <HiOutlineShoppingCart size={32} color="#FFF" />
          <MdPersonOutline size={32} color="#FFF" />
        </div>
      </div>
    </div>
  );
}
