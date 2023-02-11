export interface Icon {
  className?: string;
  onClick?: () => void;
}

interface infoModalData {
  title: string;
  text: string;
}

export interface modalValue {
  showed: boolean;
  data?: infoModalData;
}
