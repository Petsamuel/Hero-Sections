// import { TbSearch } from "react-icons/tb";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

export const Header = () => {
  const menu = ["Men", "Women", "Customize", "Sale"];
  const menu2 = [
    <div className="space-x-3 flex items-center">
      <FiSearch />
      <p>Search</p>
    </div>,
    <div>My Account</div>,
    <div>
      <GiShoppingBag className="text-2xl" />
    </div>,
  ];
  const [menuState, setMenuState] = useState(true);

  return (
    <>
      <header className="relative w-full z-10">
        <nav className="bg-transparent  fixed w-full p-2">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="text-white  flex gap-4 items-center">
              <a href="/" className="font-bold">
                Moncler
              </a>
              <span
                className="lg:hidden block z-50 cursor-pointer"
                onClick={() => setMenuState(!menuState)}
              >
                {!menuState ? (
                  <MdMenu className="text-4xl" />
                ) : (
                  <IoIosClose className="text-4xl" />
                )}
              </span>
              {menuState && (
                <ul className="right-0 flex lg:flex-row flex-col lg:mt-0 mt-6 lg:relative text-white  lg:bg-transparent items-start  h-fit w-1/2 lg:h-fit lg:w-full left-0 bg-red-600 absolute lg:p-0 p-4">
                  {menu.map((item, index) => (
                    <li
                      key={index}
                      className="mx-2 hover:underline underline-offset-8 lg:py-0 py-4 mt-5 lg:mt-0"
                    >
                      <a href={`/${item}`} className={`z-auto`}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ul className="flex space-x-8 items-center justify-center">
              {menu2.map((item, index) => (
                <li key={index} className="mx-2">
                  <a
                    href={`/${item}`}
                    className="text-white hover:underline underline-offset-8"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
