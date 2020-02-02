import { IStackItem, StackAction } from "./Interfaces";

export const StackItems: IStackItem[] = [];

const GetParamsString = (input: []): string => {
  let toRetrun = "";
  input.map(x => {
    toRetrun += "," + x;
  });
  return toRetrun.substring(1);
};

export const Execute = (func: any, param: any) => {
  let StackItem: IStackItem = {
    message: func.name + GetParamsString(param),
    action: StackAction.push
  };
  StackItems.push(StackItem);
  func(...param);
  StackItem.action = StackAction.pop;
  StackItem.message = func.name + GetParamsString(param);
  StackItems.push(StackItem);
};
