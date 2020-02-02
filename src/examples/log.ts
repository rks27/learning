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

let results: string[];
results = [];
export const logResults = () => {
  return results;
};
export const logResult = (x: string) => {
  console.log(x);
  results = [...results, x];
};

export const logResultN = (x: number) => {
  console.log(x);
  results = [...results, x.toString()];
};

//
export default logLines;
