import Close from "@/public/icons/close.svg";
import { useModal } from "@/context/Modal";
import Image from "next/image";

interface Props {
  showed: boolean;
  close: () => void;
}

export default function BasketModal({ showed, close }: Props) {
  const { UseActionsDialog } = useModal();
  return (
    <div
      className={`fixed w-[100vw] z-50 h-[100vh] top-[0%] ${
        showed ? "left-[0%] opacity-1" : "left-[100%] opacity-0"
      } transition-all bg-mainBg flex items-center justify-center`}
    >
      <div className="z-10 relative flex items-center flex-col justify-between w-full h-full xl:w-[80%] xl:h-[80%] box-border bg-[white] p-[25px] xl:rounded-[25px] xl:drop-shadow-2xl ">
        <div className="flex items-center justify-between w-full border-b-[1px] border-b-grayBorder pb-[10px]">
          <h3 className="text-[32px] font-medium family-inter leading-none">
            My Basket
          </h3>
          <Close
            className="cursor-pointer w-[30px] h-[30px] text-blackDark lg:hover:scale-[1.2] lg:active:scale-[0.8] transition-all"
            onClick={close}
          />
        </div>
        <div className="flex items-center flex-col w-full gap-[4px] select-text text-center">
          <Image
            src={"/empty-basket.png"}
            alt="Empty Basket Image"
            width={334}
            height={361}
            className="w-[20%]"
          />
          <h4 className="text-[24px] font-medium">The basket is empty.</h4>
          <p className="text-grayLight">
            Your basket will help you yo buy several products in once!
          </p>
        </div>
        <button
          className="py-[10px] px-[20px] rounded-[20px] bg-orange text-white lg:hover:scale-[1.1] lg:active:scale-[0.9] transition-all"
          onClick={() => {
            UseActionsDialog({
              showed: true,
              data: {
                title: "Sorry, but this feature is currently unavailable",
                text: "The function of adding a product to the cart is under development.",
              },
            });
          }}
        >
          ADD FIRST PRODUCT
        </button>
      </div>
    </div>
  );
}
