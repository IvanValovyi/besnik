import Basket from "@/public/icons/basket.svg";
import Logo from "@/public/icons/logo.svg";
import Menu from "@/public/icons/menu.svg";
import Link from "next/link";
import { useState } from "react";
import MenuModal from "./modals/Menu";
import BasketModal from "./modals/Basket";

interface LinkItem {
  text: string;
  href: string;
}

export const links: LinkItem[] = [
  {
    text: "ABOUT",
    href: "#",
  },
  {
    text: "HOW IT WORKS",
    href: "#",
  },
  {
    text: "CONTACT",
    href: "#",
  },
];

export default function Header() {
  const [showBasket, setShowBasket] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="container flex justify-between items-center mt-[20px] xl:mt-[40px] mb-[30px] relative select-none">
      <div className="hidden xl:flex gap-[44px]">
        {links.map((link, i) => {
          return (
            <>
              <Link
                href={link.href}
                className={
                  "font-medium relative before:absolute before:bottom-[1px] before:left-[0] before:h-[1px] before:bg-orange before:w-[0%] lg:hover:before:w-[100%] before:duration-300 before:transition-all lg:active:opacity-[0.7] transition-opacity"
                }
              >
                {link.text}
              </Link>
            </>
          );
        })}
      </div>
      <div className="flex xl:absolute xl:top-[50%] xl:left-[50%] xl:translate-x-[-50%] xl:translate-y-[-50%]">
        <Logo />
      </div>
      <div className="flex items-center">
        <div
          className="flex justify-center items-center border-[1px] bg-mainBg border-grayBorder p-[16px] w-[50px] h-[50px] rounded-[100%] mr-[30px] xl:mr-[0px] transition-all cursor-pointer lg:hover:bg-blackDark lg:hover:text-mainBg lg:hover:border-[blackDark] lg:active:opacity-[0.7]"
          onClick={() => {
            setShowBasket(true);
          }}
        >
          <Basket />
        </div>
        <div className="hidden md:flex gap-[44px] xl:hidden">
          {links.map((link, i) => {
            return (
              <>
                <Link
                  href={link.href}
                  className={
                    "font-medium relative before:absolute before:bottom-[1px] before:left-[0] before:h-[1px] before:bg-orange before:w-[0%] lg:hover:before:w-[100%] before:duration-300 before:transition-all lg:active:opacity-[0.7] transition-opacity"
                  }
                >
                  {link.text}
                </Link>
              </>
            );
          })}
        </div>
        <div
          className={"flex md:hidden"}
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <Menu className={"text-[32px]"} />
        </div>
      </div>
      <BasketModal
        showed={showBasket}
        close={() => {
          setShowBasket(false);
        }}
      />
      <MenuModal
        showed={showMenu}
        close={() => {
          setShowMenu(false);
        }}
      />
    </header>
  );
}
