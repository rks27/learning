import { logN, log } from "./log";
import logLines from "./log";

//const str = ["a", "b", "c"];
const str = ["a", "b"];
const add = (a: number, b: number) => {
  logN(a + b);
};
//

const permutate = () => {
  str.map(s1 => {
    str.map(s2 => {
      str.map(s3 => {
        if (s1 != s2 && s1 != s3 && s2 != s3) {
          log(s1 + s2 + s3);
        }
      });
    });
  });
};

const removeStr = (str: string[], toRemove: string): string[] => {
  var toReturn: string[] = [];
  str.map(s => {
    if (toRemove != s) toReturn = [...toReturn, s];
  });

  return toReturn;
};

const permutatev2Root = (str: string[]): string[][] => {
  let results: string[][] = [];
  return permiuatev2(str);
};

const addPrefix = (prefix: string, array: string[][]): string[][] => {
  var toReturn: string[][] = [];
  array.map(strArray => {
    toReturn.push([prefix, ...strArray]);
  });

  return toReturn;
};

const permiuatev2 = (str: string[]): string[][] => {
  if (str.length <= 1) {
    return [str];
  }
  var results: string[][] = [];
  str.map(a => {
    var rest = removeStr(str, a);
    var afterAddingPrefix = addPrefix(a, permiuatev2(rest));
    afterAddingPrefix.map(r => {
      results.push(r);
    });
    results.concat(afterAddingPrefix);
  });

  return results;
};

const fact = (n: number): number => {
  if (n <= 1) {
    return 1;
  }
  return n * fact(n - 1);
};

//logN(fact(20));

var res = permutatev2Root(str);
log(".....................");
res.map(x => {
  log(x.toString());
});

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    logN(i);
    console.log(i);
  }, 10);
  // console.log(i);
  log("after the log1");
  //f();
}

export default logLines;
