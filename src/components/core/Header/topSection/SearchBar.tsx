import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

//-------------------------------------------------------

//-------------------------------------------------------

const SearchBar = () => {
  //STATE
  const [searchInput, setSearchInput] = useState<string>('');
  const [isShowResult, setIsShowResult] = useState<boolean>(false);
  const [isShowCategory, setIsShowCategory] = useState<boolean>(false);

  //HOOKS
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultContainerRef = useRef(null);

  // CATEGORY HANDLERS---------------------------------------
  const showCategoryHandler = (): void => setIsShowCategory(true);
  const hideCategoryHandler = (): void => setIsShowCategory(false);
  // CATEGORY HANDLERS---------------------------------------

  // INPUT HANDLERS------------------------------------------------------------
  const onSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchInput(event.target.value);
    setIsShowResult(!!event.target.value?.trim());
  };
  const hideResult = (
    element: ChangeEvent<HTMLInputElement> | HTMLDivElement
  ): void => {
    if (resultContainerRef.current === element) return undefined;
    return setIsShowResult(false);
  };
  const handleFocus = () => {
    if (!searchInput?.trim()) return undefined;
    setIsShowResult(true);
  };
  // INPUT HANDLERS------------------------------------------------------------

  useEffect(() => {
    setIsShowResult(false);
    return undefined;
  }, [pathname]);

  return (
    <AnimatePresence>
      <ClickAwayListener onClickAway={() => setIsShowResult(false)}>
        <div className="relative w-full max-w-[507px] h-[48px]">
          <form className="w-full flex items-center justify-between h-[48px] bg-[#F3F9FB] rounded-[10px] relative">
            <FiSearch className="text-primary absolute left-[16px] z-0" />
            <input
              className="flex-1 pl-[36px] outline-none text-[14px] bg-transparent z-10"
              type="text"
              placeholder="Search category, product name and more..."
              ref={searchInputRef}
              value={searchInput}
              onChange={onSearchHandler}
              onFocus={handleFocus}
              onKeyPress={e => e.key === 'Enter' && ''}
            />

            <div className="w-[40px] h-[20px] relative">
              <button
                type="button"
                onClick={showCategoryHandler}
                className="w-10 flex items-center justify-center cursor-pointer group"
              >
                <AiOutlineUnorderedList className="text-primary font-bold text-xl group-hover:scale-110 active:scale-95 transform ease-out transition duration-200" />
              </button>
              {isShowCategory && (
                <ClickAwayListener onClickAway={hideCategoryHandler}>
                  <motion.div
                    initial={{ opacity: 0, y: -20, x: -110 }}
                    animate={{ opacity: 1, y: -10, x: -110 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    className="h-full w-full mt-2 z-50 right-0 relative bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-[140px] min-w-[140px] min-h-[160px] rounded-[10px]"
                  >
                    <div className="w-full h-full overflow-hidden">
                      <ul className="mt-[8px] w-full">
                        <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[5px] flex items-center pl-[8px] hover:underline">
                          Mobile
                        </li>
                        <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[5px] flex items-center pl-[8px] hover:underline">
                          Watch
                        </li>
                        <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[5px] flex items-center pl-[8px] hover:underline">
                          Laptop
                        </li>
                        <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[5px] flex items-center pl-[8px] hover:underline">
                          Camera
                        </li>
                        <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[5px] flex items-center pl-[8px] hover:underline">
                          Audio
                        </li>
                      </ul>
                    </div>
                  </motion.div>
                </ClickAwayListener>
              )}
            </div>
          </form>

          {isShowResult && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              className="h-full w-full mt-2 z-50  relative bg-[#ffffff] border border-[#EDEDED] text-gray-400 max-w-[507px] min-w-[200px] min-h-[243px] rounded-[10px]"
              ref={resultContainerRef}
              onClick={e => hideResult(e.currentTarget)}
            >
              <div
                role="presentation"
                onClick={e => hideResult(e.currentTarget)}
                className="absolute cursor-pointer active:scale-95 right-[4px] top-1 rounded-full bg-opacity-10 w-7 h-7 flex items-center justify-center duration-150"
              >
                <IoCloseOutline className="w-5 h-5" />
              </div>
              <div className="w-full h-full overflow-hidden">
                <ul className="mt-[35px] w-full">
                  <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                    Home
                  </li>
                  <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                    Category
                  </li>
                  <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                    Sell On DeepBazar
                  </li>
                  <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                    Buy On DeepBazar
                  </li>
                  <li className="text-[14px] font-poppins cursor-pointer w-full h-[25px] mb-[8px] flex items-center pl-[8px] hover:underline">
                    Contact
                  </li>
                </ul>
                <p className="text-center text-gray-400 text-[12px] mt-[23px]">
                  © DeepBazar 2023
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </ClickAwayListener>
    </AnimatePresence>
  );
};

export default SearchBar;
