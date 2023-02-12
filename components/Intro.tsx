import ArrowRight from "@/public/icons/arrow-right.svg";
import { useModal } from "@/context/Modal";
import Image from "next/image";
import IntroSvg1 from "@/public/icons/intro/1.svg";
import IntroSvg2 from "@/public/icons/intro/2.svg";
import IntroSvg3 from "@/public/icons/intro/3.svg";
import IntroSvg4 from "@/public/icons/intro/4.svg";
import IntroSvg5 from "@/public/icons/intro/5.svg";
import IntroSvg6 from "@/public/icons/intro/6.svg";
import CircleText from "@/public/icons/circleText.svg";
import { useState } from "react";

interface Icon {
  icon: any;
  active: boolean;
}

const introIcons: Icon[] = [
  { icon: IntroSvg1, active: false },
  { icon: IntroSvg2, active: false },
  { icon: IntroSvg3, active: false },
  { icon: IntroSvg4, active: false },
  { icon: IntroSvg5, active: false },
  { icon: IntroSvg6, active: false },
];

export default function Intro() {
  const { UseActionsDialog } = useModal();
  const [icons, setIcons] = useState<Icon[]>(introIcons);
  return (
    <div
      className={
        "container flex flex-col lg:flex-row lg:items-center lg:justify-between"
      }
    >
      <div className="flex flex-col">
        <h1
          className={
            "leading-none mb-[24px] lg:mb-[48px] text-blackDark lg:max-w-[432px]"
          }
        >
          Banking more smart
        </h1>
        <p
          className={
            "lg:w-[280px] leading-[30px] mb-[20px] lg:mb-[40px] text-grayDark"
          }
        >
          Meet the only spend management platform and corporate card.
        </p>
        <div className="flex items-center">
          <button
            className="flex items-center justify-center bg-blackDark text-white w-[50px] h-[50px] mr-[18px] cursor-pointer transition-all lg:hover:rounded-[10px] lg:active:opacity-[0.8]"
            onClick={() => {
              UseActionsDialog({
                showed: true,
                data: {
                  title: "Sorry, but this feature is currently unavailable",
                  text: "The function of receiving a card is under development.",
                },
              });
            }}
          >
            <ArrowRight />
          </button>
          <p className="font-medium">Get your card</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row ml-0 sm:ml-[30px] lg:ml-[35px] items-end mt-[88px] lg:w-[630px] xl:w-[735px] sm:h-[330px]">
        <div className="relative w-full h-[55vw] sm:h-full sm:w-auto sm:flex-auto  bg-blueDark">
          <Image
            src={"/images/visa.png"}
            alt={"Visa"}
            width={427}
            height={347}
            priority
            className="absolute top-[-55px] left-0 sm:top-[-88px] sm:left-[-32px] w-[75%] sm:w-full md:w-[80%]"
          />
          <CircleText
            className={
              "absolute bottom-[20px] right-[20px] sm:bottom-[35px] sm:right-[35px] animate-spin-slow"
            }
          />
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-[20px] items-center justify-center sm:h-[210px] sm:box-content overflow-hidden bg-yellow w-full sm:w-[128px] py-[20px] px-[20px] sm:py-[60px] sm:px-[45px]">
          {icons.map((el, i) => {
            return (
              <div
                className={`flex items-center justify-center w-[54px] h-[54px] transition-all p-[16px] rounded-[20px] cursor-pointer scale-[1] mx-auto sm:mx-0 ${
                  el.active
                    ? "bg-blackDark text-white lg:hover:scale-[1.1]"
                    : "lg:hover:bg-blackDark lg:hover:text-white bg-mainBg text-grayDark lg:hover:scale-[0.9]"
                }`}
                onClick={() => {
                  el.active = !el.active;
                  setIcons([...icons]);
                }}
                key={i}
              >
                <el.icon />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
