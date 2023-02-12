import Pacman from "@/public/icons/pacman.svg";

export default function AboutUs() {
  return (
    <div className="bg-blueLight relative">
      <Pacman className="absolute top-[-35px] left-1/2 -translate-x-1/2" />
      <div className="container flex flex-col md:flex-row justify-around items-center py-[130px]">
        <div className="w-[258px] mb-10 md:mb-0">
          <h3 className="text-blackLight mb-[16px] font-medium family-bai_jamjuree">
            We Building Social uniqueness
          </h3>
          <p className="text-grayDark leading-[26px]">
            The marketing strategy lays out target markets and the value.
          </p>
        </div>
        <div className="w-[264px]">
          <h3 className="text-blackLight mb-[16px] font-medium family-bai_jamjuree">
            Social Media beyond probability
          </h3>
          <p className="text-grayDark leading-[26px]">
            Essentially a formula for how a business is going to compete,
          </p>
        </div>
      </div>
    </div>
  );
}
