import { Tool } from "./tool";
export type Category = {
  id: string;
  name: string;
  icon?: any;
  tools?: Tool[];
};
