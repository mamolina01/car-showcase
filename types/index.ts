import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufactererProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CustomFilterProps {
  title: string;
}
