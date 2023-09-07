import { FC } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';

const ShippingAddress: FC = () => {
  return (
    <div className="max-w-full px-[34px] py-0">
      <header className="">
        <h1 className="text-gray-600 font-medium">My Shipping Address</h1>
      </header>

      <div className="w-full h-full p-5 bg-white mt-10 rounded-[6px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
        {/* if not wishlist_item exits  */}

        <div className="flex items-center flex-wrap justify-between">
          <div className="w-[48%] bg-white border border-gray-200 rounded-[6px] p-2 h-[120px]">
            <h1 className="text-base">Name: Shariar Sheikh</h1>
            <p className="text-sm text-[#757575] line-clamp-1">
              01304802278, shariar.dev@gmail.com
            </p>
            <p className="text-sm text-[#757575] line-clamp-2">
              Kuliarchar, Kishoreganj, Dhaka
            </p>
            <div className="flex items-center justify-end space-x-4 text-sm mt-[20px]">
              <button className="flex items-center text-primary space-x-1 active:scale-95 duration-150">
                <FiEdit /> <span>Edit</span>
              </button>
              <button className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150">
                <MdDeleteOutline /> <span>Delete</span>
              </button>
            </div>
          </div>

          <div className="w-[48%] bg-white border border-gray-200 rounded-[6px] p-2 h-[120px] shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
            <h1 className="text-base">Name: Shariar Sheikh</h1>
            <p className="text-sm text-[#757575] line-clamp-1">
              01304802278, shariar.dev@gmail.com
            </p>
            <p className="text-sm text-[#757575] line-clamp-2">
              Kuliarchar, Kishoreganj, Dhaka
            </p>
            <div className="flex items-center justify-end space-x-4 text-sm mt-[20px]">
              <button className="flex items-center text-primary space-x-1 active:scale-95 duration-150">
                <FiEdit /> <span>Edit</span>
              </button>
              <button className="flex items-center text-red-500 space-x-1 active:scale-95 duration-150">
                <MdDeleteOutline /> <span>Delete</span>
              </button>
            </div>
          </div>
        </div>

        {1 > 2 && (
          <div className="flex w-full justify-center items-center flex-col mt-[70px] pb-[61px]">
            <div className="bg-primary text-white w-[50px] h-[50px] rounded-full flex items-center justify-center">
              <CiLocationOn className="font-medium" />
            </div>
            <h1 className="text-gray-600 text-xl mt-[11.5px]">
              You Haven't Added Shipping Address
            </h1>
            <p className="text-[#757575] text-center text-sm mt-2.5">
              Please add your shipping address!
            </p>
            <button className="px-[16px] py-[6px] mt-6 flex items-center rounded-[6px] text-white font-bold text-sm bg-primary active:scale-95 duration-200">
              Add Shipping Address
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingAddress;