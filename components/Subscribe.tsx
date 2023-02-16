import CircleText from "@/public/icons/circleText.svg";
import CardPic from "@/public/images/card.png";
import Image from "next/image";

export default function Subscribe() {
  return (
    <div className="bg-blueDark mt-[120px]">
      <div className="container py-[115px] flex">
        <div className="flex pt-[70px]">
          <div className="pt-[20px]">
            <p className="w-[120px] mb-[28px] text-grayDark text-1 leading-[27px] font-bold tracking-wide">
              Subscribe to get updated news
            </p>
            <CircleText />
          </div>
          <div className="w-[8px] h-[133px] mx-[80px] bg-grayLight" />

          <div className="pt-[11px]">
            <h1 className="mb-[42px] family-bai_jamjuree">
              Subscribe our newsletter
            </h1>

            <div className="py-[21px] px-[44px] bg-orange w-max text-white">
              <p>Subscribe</p>
            </div>
          </div>
        </div>

        <Image src={CardPic} alt="cart" />
      </div>
    </div>
  );
}
