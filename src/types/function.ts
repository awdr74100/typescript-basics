/**
 *
 * Example 1
 * 函式：宣告即自動推斷型態
 * 函式：void 允許 no return、empty return、undefined return (大多情況使用)
 * 函式：undefined 允許 empty return、undefined
 */

(() => {
  function add(n1: number, n2: number): number {
    return n1 + n2;
  }

  function printResult(num: number): void {
    console.log('Result: ', num);
  }

  printResult(add(5, 12));
})();

/**
 * Example 2
 * 函式：宣告時可定義型態為 Function
 * 函式：宣告時可定義型態為 Function 及參數型態、回傳型態 (較為嚴謹)
 */

(() => {
  function add(n1: number, n2: number): number {
    return n1 + n2;
  }

  function printResult(num: number): void {
    console.log('Result: ', num);
  }
  let combineValues1: Function;
  combineValues1 = add;
  combineValues1 = printResult;
  let combineValues2: (n1: number, n2: number) => number;
  combineValues2 = add;
})();

/**
 * Example 3
 * 函式：回調也可定義型態 (如同函式般調用，回傳可設為 void，表示忽略型態，並不是限制回傳 undefined)
 */

(() => {
  const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
  };
  addAndHandle(10, 20, (result) => {
    console.log(result);
  });
})();

/**
 * Example 4
 * 函式：參數可添加 ? 使之成為可選參數
 * 函式：參數可給予預設值 (代表成為可選參數，且定義型態)
 * 函式：其餘參數同樣可指定陣列型態
 */

(() => {
  let aa: (n1?: number, ...other: number[]) => number;
  aa = (n1: number | undefined, ...other: number[]) => {
    return other.reduce((acc, cur) => acc + cur, 0);
  };
  console.log(aa(10, 20, 30, 40));
  // let add = (n1: number, n2?: number, n3 = 1000) => {
  //   if (n1 && n2) return n1 + n2 + n3;
  //   return n1 + n3;
  // };
  // console.log(add(100, 20));
})();
