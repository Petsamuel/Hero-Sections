// import { TbSearch } from "react-icons/tb";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";

export const Header = () => {
  const menu = ["Men", "Women", "Customize", "Sale"];
  const menu2 = [
    <div className="space-x-3 flex items-center">
      <FiSearch />
      <p>Search</p>
    </div>,
    <div>Myaccount</div>,
    <div>
      <GiShoppingBag className="text-2xl" />
    </div>,
  ];
  const [menuState, setMenuState] = useState(false);
  return (
    <>
      <header className="relative w-full z-10">
        <nav className="bg-transparent  fixed w-full p-2">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="text-white font-bold flex gap-4 items-center">
              <a href="/">Moncler</a>
              <span
                className="lg:hidden block"
                onClick={() => setMenuState(!menuState)}
              >
                <MdMenu className="text-xl" />
              </span>
              {menuState && (
                <ul className="flex lg:flex-row flex-col items-center ">
                  {menu.map((item, index) => (
                    <li key={index} className="mx-2 ">
                      <a href={`/${item}`}>{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ul className="flex space-x-8 items-center justify-center">
              {menu2.map((item, index) => (
                <li key={index} className="mx-2">
                  <a href={`/${item}`} className="text-white">
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
