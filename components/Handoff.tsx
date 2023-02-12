import Image from "next/image";

interface Item {
  imgSrc: string;
  label: string;
  text: string;
}

const items: Item[] = [
  {
    imgSrc: "/images/handoff/1.png",
    label: "Strategic",
    text: "Suggests that the component spacing between cards and elements.",
  },
  {
    imgSrc: "/images/handoff/2.png",
    label: "Work schedule",
    text: "Work schedule is the time an employee is expected to be on the job.",
  },
];

export default function Handoff() {
  return (
    <div className="container flex flex-col lg:flex-row items-center lg:items-start xl:items-center mt-[70px] md:mt-[130px]">
      <Image
        src={"/images/handoff.png"}
        alt={"Handoff"}
        width={675}
        height={510}
        className="w-full md:w-[450px] xl:w-[675px] mb-[35px] md:mb-[50px] lg:mb-0 lg:mr-[110px]"
      />
      <div className="flex flex-col">
        <h2 className="text-l mb-[20px] md:mb-[30px] family-bai_jamjuree">
          Handoff your work smarter now
        </h2>
        <p className="mb-[40px] md:mb-[65px] text-grayLight max-w-[420px]">
          Create documentation for the collaborators (i.e. designers or devs)
          directly in your design file.
        </p>
        {items.map((el, i) => {
          return (
            <div className="flex mb-[20px] md:mb-[30px] last:mb-0" key={i}>
              <Image
                src={el.imgSrc}
                alt={el.label}
                width={60}
                height={60}
                className="w-[60px] h-[60px] mr-[20px] md:mr-[30px]"
              />
              <div className="flex flex-col">
                <h4 className="family-bai_jamjuree">{el.label}</h4>
                <p className="text-grayLight max-w-[290px] mt-[10px]">
                  {el.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
