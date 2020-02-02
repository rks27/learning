let lines: string[];
lines = [];
const logLines = () => {
  return lines;
};
export const log = (x: string) => {
  console.log(x);
  lines = [...lines, x];
};

export const logN = (x: number) => {
  console.log(x);
  lines = [...lines, x.toString()];
};
//
export default logLines;
