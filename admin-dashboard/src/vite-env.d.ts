/// <reference types="vite/client" />

type menuContentType = {
  heading: string;
  list: {
    url: string;
    text: string;
    Icon: OverridableComponent<SvgIconTypeMap<"svg">> & {
      muiName: string;
    };
  }[];
}[];

type widgetContentType = {
  percent: number;
  amount: boolean;
  value: number;
  heading: string;
  color: string;
};
