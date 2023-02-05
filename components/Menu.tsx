import { Close, Logo } from "@/common/icons";
import Link from "next/link";
import { links } from "./Header";

interface Props {
  showed: boolean;
  close: () => void;
}

export default function MenuModal({ showed, close }: Props) {
  return (
    <div
      className={`fixed w-[100vw] z-50 h-[100vh] top-[0%] ${
        showed ? "left-[0%] opacity-1" : "left-[100%] opacity-0"
      } transition-all bg-mainBg flex items-center justify-center flex-col gap-[20px] py-[20px]`}
    >
      <div className="absolute top-[20px] left-[50%] translate-x-[-50%]">
        <Logo className="h-[30px]" />
      </div>
      <div className="absolute top-[20px] right-[20px]">
        <Close
          className="cursor-pointer w-[30px] h-[30px] text-blackDark lg:hover:scale-[1.2] lg:active:scale-[0.8] transition-all"
          onClick={close}
        />
      </div>
      {links.map((link, i) => {
        return (
          <>
            <Link
              href={link.href}
              className={
                "text-[24px] border-b-[1px] border-b-grayLight px-[5px] font-medium"
              }
              onClick={close}
            >
              {link.text}
            </Link>
          </>
        );
      })}
    </div>
  );
}
