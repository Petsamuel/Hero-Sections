// import { TbSearch } from "react-icons/tb";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";

export const Header = () => {
  const menu = ["Men", "Women", "Customize", "Sale"];
  const menu2 = [
    <div className="lg:space-x-3 flex items-center">
      <FiSearch className="text-2xl" />
      <p className="lg:md:block hidden">Search</p>
    </div>,
    <div>
      <p className="lg:md:block hidden">My Account</p>
    </div>,
    <div>
      <GiShoppingBag className="text-2xl" />
    </div>,
  ];
  const [menuState, setMenuState] = useState(true);

  return (
    <>
      <header className="relative w-full z-10  ">
        <nav className="bg-transparent  fixed w-full p-2">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="text-white  flex gap-4 items-baseline">
              <div className="font-bold flex flex-row items-center gap-4">
                <a href="/"> Moncler</a>
                <div
                  className="lg:hidden block z-50 cursor-pointer"
                  onClick={() => setMenuState(!menuState)}
                >
                  {!menuState ? (
                    <MdMenu className="text-4xl" />
                  ) : (
                    <IoIosClose className="text-4xl" />
                  )}
                </div>
              </div>

              {menuState && (
                <div
                  className={`right-0 flex lg:flex-row flex-col lg:mt-0 my-6 lg:relative text-white  lg:bg-transparent items-start  w-1/2 lg:h-fit lg:w-full   absolute lg:p-0 p-4 top-[-30px] lg:top-0 lg:backdrop-blur-0  backdrop-blur-2xl h-screen lg:items-baseline`}
                >
                  {menu.map((item, index) => (
                    <div
                      key={index}
                      className={`mx-2 hover:underline lg:underline-offset-8 lg:py-0 p-4 mt-[3rem] lg:mt-0 text-start lg:text-center hover:lg:bg-transparent  hover:bg-white hover:lg:text-white hover:text-black w-full {}`}
                    >
                      <a href={`/${item}`} className={`z-auto`}>
                        {item}
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <ul className="flex lg:space-x-8 gap-3 items-center justify-center z-40">
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
