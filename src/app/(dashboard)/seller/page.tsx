'use client';
import { PATH_SELLER } from '@/utils/routes';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BiCategoryAlt } from 'react-icons/bi';
import { BsFillFilePersonFill, BsShop } from 'react-icons/bs';
import { FaShareAlt } from 'react-icons/fa';
import { RiKeyFill } from 'react-icons/ri';
import PageTitle from './PageTitle';

//-------------------------------------
interface PageProps {}
//-------------------------------------

const Page: NextPage<PageProps> = () => {
  const router = useRouter();

  return (
    <section className="w-full h-full bg-white max-w-[1080px] p-5 mt-10 rounded-[16px] shadow-md">
      <PageTitle pageName="Dashboard" />

      <ul className="mt-[8px] w-full flex flex-wrap justify-between gap-2 items-center p-[12px]">
        <li
          onClick={() => router.push(PATH_SELLER.products.manage)}
          className="max-w-[48%] w-full h-[300px] rounded-[6px] border border-gray-200 flex bg-[#bee6f3]"
        >
          <div className="h-full w-[180px] flex items-center justify-center">
            <BsShop className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold uppercase">Total Products</h1>
            <p className="text-4xl mt-2 font-semibold">36</p>
          </div>
        </li>

        <li
          onClick={() => router.push(PATH_SELLER.category)}
          className="max-w-[48%] w-full h-[300px] rounded-[6px] border border-gray-200 flex bg-[#bef3e7]"
        >
          <div className="h-full w-[180px] flex items-center justify-center">
            <BiCategoryAlt className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold uppercase">View Category</h1>
            <p className="text-4xl mt-2 font-semibold">Total 5</p>
          </div>
        </li>
        <li
          onClick={() => router.push(PATH_SELLER.category)}
          className="w-full h-[255px] mt-[20px] rounded-[6px] border border-gray-200 flex bg-[#f0f8ff]"
        >
          <div className="h-full w-[180px] flex items-center justify-center">
            <BiCategoryAlt className="w-20 h-20" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold uppercase">Account</h1>

            <ul className="w-full flex items-center justify-center">
              <Link
                href="/seller/account-settings"
                className={`text-[14px] font-semibold cursor-pointer h-full border-b-[2px] duration-150 pb-[8px] border-transparent text-gray-600`}
              >
                <li className="h-[48px] flex items-center">
                  <BsFillFilePersonFill className="mr-[8px]" /> Profile
                </li>
              </Link>

              <Link
                href="/seller/account-settings/socialLinks"
                className={`text-[14px] font-semibold ml-[40px] cursor-pointer h-full border-b-[2px] duration-150 pb-[8px] border-transparent text-gray-600`}
              >
                <li className="flex items-center h-[48px]">
                  <FaShareAlt className="mr-[8px]" /> Social Links
                </li>
              </Link>

              <Link
                href="/seller/account-settings/changePassword"
                className={`text-[14px] font-semibold ml-[40px] cursor-pointer h-full border-b-[2px] duration-150 pb-[8px] border-transparent text-gray-600`}
              >
                <li className="flex items-center h-[48px]">
                  <RiKeyFill className="mr-[8px]" /> Change Password
                </li>
              </Link>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Page;
