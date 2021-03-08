/**
 * Example 1
 * type：一個對象可存在多個型態 (須加以判斷)
 * type：建立可複用的類型變數
 */

(() => {
  type Combinable = number | string;
  type actionType = 'fast' | 'slow';

  function combine(input1: Combinable, input2: Combinable, action: actionType) {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
      return input1 + input2;
    }
    return input1.toLocaleString() + input2.toLocaleString();
  }

  const combineAges = combine(30, 26, 'fast');
  console.log(combineAges);

  const combineNames = combine('Max', 'Ian', 'slow');
  console.log(combineNames);
})();
