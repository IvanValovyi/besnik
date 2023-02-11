import { modalValue } from "@/common/types";
import { useModal } from "@/context/Modal";

export default function NotAvailableFeatere({ showed, data }: modalValue) {
  const { UseActionsDialog } = useModal();
  return (
    <div
      id="shadow"
      className={`z-50 fixed top-0 w-full h-full transition-all bg-mainBg bg-opacity-[0.8] flex items-center justify-center ${
        showed ? "opacity-1 left-0" : "opacity-0 left-[100%]"
      }`}
      onClick={(e: any) => {
        e.target.id == "shadow" && UseActionsDialog({ showed: false, data });
      }}
    >
      <div className="relative z-30 bg-mainBg w-50% h-max p-[25px] rounded-[25px] drop-shadow-2xl opacity-1 select-text mx-[10px] xl:mx-[0px]">
        <h4 className="text-[24px] font-medium mb-[8px]">{data?.title}</h4>
        <p className="text-grayLight">{data?.text}</p>
        <div className="flex justify-end">
          <button
            className="mt-[12px] p-[10px] rounded-[10px] border-[1px] border-grayBorder bg-white lg:hover:border-grayLight lg:active:border-grayDark"
            onClick={(e) => {
              UseActionsDialog({ showed: false, data });
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
