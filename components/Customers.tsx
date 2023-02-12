interface Item {
  label: string;
  value: string;
}

const items: Item[] = [
  {
    label: "PRODUCT",
    value: "10,0000+ ",
  },
  {
    label: "LIKES",
    value: "45600",
  },
  {
    label: "SALE",
    value: "576864",
  },
  {
    label: "CUSTOMERS",
    value: "947444",
  },
];

export default function Customers() {
  return (
    <div className="container flex flex-col items-center mt-[70px] md:mt-[130px]">
      <h1
        className={
          "leading-none text-blackDark mb-[30px] md:mb-[40px] family-bai_jamjuree"
        }
      >
        1000+ Customer
      </h1>
      <p className="text-grayLight max-w-[640px] text-center leading-[28px]">
        Analyze any Business or Creator account—including your competitors—to
        find the imagery, visuals, and captions that drive audience engagement.
        Get social calendars planned faster and spend less time testing content
        strategies.
      </p>
      <div className="mt-[60px] md:mt-[90px] flex items-center justify-between flex-wrap w-full border-b-[1px] border-t-[1px] border-grayLight">
        {items.map((item, i) => {
          return (
            <div
              className="flex flex-col items-center py-[50px] md:py-[70px] flex-auto w-full sm:w-[50%] md:border-l-[1px] border-l-0] sm:border-b-0 border-b-[1px] md:w-auto border-grayLight first:border-l-0 last:border-b-0"
              key={i}
            >
              <p className="text-grayLight mb-[10px] family-inter tracking-[0.4em]">
                {item.label}
              </p>
              <p className="text-[25px] font-medium">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
