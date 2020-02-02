import { logN, log } from "./log";

interface BracketResult {
  resultCount: number;
  results: string[];
}

const FindValidCombination = (count: number) => {
  var toRetrun = getBracketResults(count);
  logN(toRetrun.results.length);
};

// Execute(myLog, ["1234", 5]);

const getBracketResults = (count: number): BracketResult => {
  var toRetrun: BracketResult = { resultCount: 0, results: [] };
  AddBracket("", 0, 0, count, "", toRetrun);
  return toRetrun;
};

const AddBracket = (
  b: string,
  openCount: number,
  closeCount: number,
  totalCount: number,
  result: string,
  toRetrun: BracketResult
) => {
  if (b !== "") {
    result += b;
  }

  if (closeCount === totalCount && openCount === totalCount) {
    log(result);
    toRetrun.resultCount++;
    toRetrun.results = [result, ...toRetrun.results];
  }

  if (openCount < totalCount) {
    AddBracket("{", openCount + 1, closeCount, totalCount, result, toRetrun);
  }

  if (closeCount < openCount) {
    AddBracket("}", openCount, closeCount + 1, totalCount, result, toRetrun);
  }
};

// FindValidCombination(2);

export default FindValidCombination;
