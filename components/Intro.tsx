import { ArrowRight } from "@/common/icons";
import { useModal } from "@/context/Modal";
import Image from "next/image";

export default function Intro() {
  const { UseActionsDialog } = useModal();
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
      <Image
        src={"/images/intro.png"}
        alt={"Intro"}
        width={724}
        height={422}
        className="w-full lg:w-[724px]"
      />
    </div>
  );
}
