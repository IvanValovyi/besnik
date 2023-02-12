import { ReactNode, createContext, useContext, useState } from "react";
import { modalValue } from "@/common/types";
import NotAvailableFeatere from "@/components/modals/NotAvailableFeatere";

type modalContextValue = {
  UseActionsDialog: (dialogProps: modalValue) => void;
};

const defaultModalContextValue: modalContextValue = {
  UseActionsDialog: () => null,
};

const ModalContext = createContext<modalContextValue>(defaultModalContextValue);

export function useModal() {
  return useContext(ModalContext);
}

interface Props {
  children: ReactNode;
}

export function ModalProvider({ children }: Props) {
  const [dialogProps, setDialogProps] = useState<modalValue>({
    showed: false,
  });

  const UseActionsDialog = (newProps: modalValue) => setDialogProps(newProps);

  const value = {
    UseActionsDialog: UseActionsDialog,
  };

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
        <NotAvailableFeatere
          showed={dialogProps.showed}
          data={dialogProps.data}
        />
      </ModalContext.Provider>
    </>
  );
}
