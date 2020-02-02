export enum StackAction {
  push,
  pop
}
export interface IStackItem {
  message: string;
  action: StackAction;
}
