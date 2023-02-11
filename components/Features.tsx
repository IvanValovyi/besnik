import Image from "next/image";
import firePic from "@/public/images/fire.png";
import squaresPic from "@/public/images/squares.png";

const articles = [
  {
    title: "1.5% cashback",
    text: "Online shopping for retail sales direct to consumers",
    img: squaresPic,
  },
  {
    title: "30-day terms",
    text: "Online shopping for retail sales direct to consumers",
    img: squaresPic,
  },
  {
    title: "Save Money",
    text: "Online shopping for retail sales direct to consumers",
    img: squaresPic,
  },
];

export default function Features() {
  return (
    <div className="container mt-[130px] mb-[100px] grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="mb-[18px]">
          <div className="flex justify-start text-blackDark">
            <div className="mr-[10px]">Hot</div>
            <Image src={firePic} alt="fire" className="h-[37px] w-[29px]" />
          </div>
          <div>deals for you</div>
        </h2>
        <p className="text-grayLight sm:max-w-[233px] leading-[26px]">
          Online shopping for retail sales direct to consumers
        </p>
      </div>

      {articles.map((article, index) => (
        <div
          className="flex flex-col items-center sm:items-start justify-start"
          key={index}
        >
          <Image className="mb-[30px]" src={article.img} alt="square" />
          <h4 className="mb-[18px] text-blackDark">{article.title}</h4>
          <p className="text-grayLight sm:max-w-[233px] leading-[26px]">
            {article.text}
          </p>
        </div>
      ))}
    </div>
  );
}
