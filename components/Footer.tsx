import Link from "next/link";
import Facebook from "@/public/icons/facebook.svg";
import Logo from "@/public/icons/logo.svg";
import Youtube from "@/public/icons/youtube.svg";
import Instagram from "@/public/icons/instagram.svg";

export default function Footer() {
  return (
    <footer className="container bg-white text-blackDark text-[20px] text-center py-3 sm:py-[20px] mt-[30px] sm:mt-[70px] md:mt-[130px]">
      <div className="flex flex-wrap justify-between items-center mb-[30px] sm:mb-[83px]">
        <Link className="text-1 mr-5 mb-5" href="/">
          ABOUT
        </Link>
        <Link className="text-1 mr-5 mb-5" href="/">
          HOW IT WORKS
        </Link>
        <Link className="text-1 mr-5 mb-5" href="/">
          CONTACT
        </Link>
        <Logo className="mr-5 mb-5" />
        <Link className="font-bold text-1 mr-5 mb-5" href="/">
          Signup
        </Link>
        <Link className="font-bold text-1 mr-5 mb-5" href="/">
          Login
        </Link>

        <div className="flex items-center">
          <Link href="/">
            <Facebook className="mr-[30px]" />
          </Link>
          <Link href="/">
            <Instagram className="mr-[30px]" />
          </Link>

          <Link href="/">
            <Youtube />
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center text-grayLight">
        <p className="w-max text-xs mr-3 sm:mr-0">
          Copyright © 2020.Besnik creative
        </p>
        <div className="hidden sm:block h-[1px] w-3/5 bg-grayLight mx-4" />
        <p className="w-max text-xs">Designed by Besnik</p>
      </div>
    </footer>
  );
}
