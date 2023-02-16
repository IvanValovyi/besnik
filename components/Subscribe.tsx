import CircleText from "@/public/icons/circleText.svg";
import Image from "next/image";
import { useModal } from "@/context/Modal";

export default function Subscribe() {
  const { UseActionsDialog } = useModal();

  return (
    <div className="bg-blueDark mt-[120px] overflow-hidden">
      <div className="container lg:py-[115px] flex justify-between flex-col lg:flex-row">
        <div className="flex justify-between flex-col sm:flex-row w-full sm:pt-[70px]">
          <div className="pt-[36px] flex items-end justify-between sm:block sm:w-1/2 lg:w-auto">
            <p className="sm:w-[120px] sm:mb-[28px] text-grayDark text-1 leading-[27px] font-bold tracking-wide">
              Subscribe to get updated news
            </p>
            <CircleText className="animate-spin-slow" />
          </div>
          <div className="w-full h-[3px] my-[20px] sm:w-[8px] sm:h-[133px] sm:mx-[80px] bg-grayLight" />

          <div className="sm:w-2/3 lg:w-auto">
            <h1 className="text-1 w-full lg:w-[406px] xl:w-full mb-[42px] family-bai_jamjuree">
              Subscribe our newsletter
            </h1>

            <div
              onClick={() => {
                UseActionsDialog({
                  showed: true,
                  data: {
                    title: "Sorry, but this feature is currently unavailable",
                    text: "The function of receiving a card is under development.",
                  },
                });
              }}
              className="py-[21px] px-[44px] bg-orange w-max text-white cursor-pointer"
            >
              <p>Subscribe</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto lg:mx-0 h-[360px] sm:h-[500px] lg:h-auto max-w-[529px] w-full">
          <Image
            src="/images/card.png"
            fill
            alt="cart"
            sizes="(max-width: 768px) 100vw"
          />
        </div>
      </div>
    </div>
  );
}
