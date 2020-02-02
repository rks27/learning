import { logN, log, logResult, logResultN, logResults } from "./log";

let arryResult: any[] = [];

const fib = (l: number): number => {
  if (l <= 0) {
    arryResult[l] = 0;
    return 0;
  } else if (l === 1) {
    arryResult[l] = 1;
    return 1;
  } else {
    let res1 = fib(l - 1);
    let res2 = fib(l - 2);
    arryResult[l] = res1 + res2;
    return res1 + res2;
  }
};

const main = () => {
  logResultN(fib(6));
  logResult(arryResult.toString());
};
export default main;
