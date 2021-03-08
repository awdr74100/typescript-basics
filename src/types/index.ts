/**
 * Example 1
 * 函式：可限制傳遞進來的參數
 */

(() => {
  function func(num1: number, num2: number, str1: string, bool1: boolean) {
    return `num: ${num1 + num2}, str: ${str1}, bool1: ${bool1}`;
  }
  func(10, 20, 'Hello', true);
})();

/**
 * Example 2 (適用 String、Number、Boolean)
 * 變數：使用 const 宣告變數 = 定義型態與值 (基於常數無法變更且初始化就得賦值)
 * 變數：使用 let 並賦值 = 等同定義型態 (基於預設值定義型態)
 * 變數：使用 let 未賦值但宣告型態 = 等同定義型態
 * 變數：使用 let 未賦值 = 定義為 any 型態 (不建議)
 * 變數：可同時定義多種形態
 */

(() => {
  const str1 = 'Hello'; // 常數 (型態固定、值固定)
  let str2 = 'Hello'; // 預設為 string
  str2 = 'Hi'; // 只能賦予 string
  let str3: string; // 預設為 string
  str3 = 'Yo'; // 只能賦予 string
  let str4; // 預設為 any
  str4 = 666; // 可隨意賦值
  let str5: any; // 同上
  str5 = 666; // 同上
  let str6: string | number;
  str6 = 666;
})();

/**
 * Example 3 (適用 Array)
 * 陣列：宣告即自動推斷型態 (使用 push 或 ... 予值時，型態不同會造成錯誤)
 * 陣列：一個陣列可存在多種形態 (推斷預設值或自行定義或使用 any)
 * 陣列：長度不固定
 */

(() => {
  const arr1 = ['red', 'green', 'blue'];
  arr1.push('black');
  let arr2 = ['red', 18];
  arr2 = [...arr2, 'blue'];
  let arr3: string[];
  arr3 = ['red', 'blue', 'green'];
  let arr4: (string | boolean)[] = [];
  arr4.push('black', true);
  let arr5: any[] = [];
  arr5.push(0, '0', false);
  const arr6: { name: string; age: number; weight: any }[] = [];
  arr6.push({ name: '', age: 18, weight: 18 });
  const arr7 = [{ name: '', age: 18, weight: 18 }];
  arr7.push({ name: '', age: 18, weight: 18 });
})();

/**
 * Example 4 (適用 Object)
 * 物件：宣告即自動推斷型態 (修改屬性時，型態不同會造成錯誤)
 * 物件：宣告物件時，可同時指定屬性型態 (注意寫法)
 * 物件：屬性型態可直接賦予值 (後續判斷須為此值，全部皆可)
 * 物件：缺少已定義型態屬性也會造成錯誤 (定義屬性就得賦予屬性)
 * 物件：無法宣告空物件 (賦予預設值或使用 any)
 */

(() => {
  const obj1 = { name: 'Ian', age: 16 };
  obj1.name = 'Owen';
  let obj2: {
    name: string;
    age: number;
    message: 'hello';
  };
  obj2 = { name: 'Ian', age: 18, message: 'hello' };
  const obj3 = { name: '', age: 0 };
  obj3.name = 'Ian';
  obj3.age = 20;
  let obj4: { name: string } = { name: '' };
  obj4.name = '';
})();

/**
 * Example 5 (適用 Tuple)
 * 元組：可建構固定長度的陣列
 * 元組：使用 push 無法判斷長度是否正確
 * 元組：使用 ... 可判斷長度是否正確
 */

(() => {
  let tuple: [number, string] = [2, 'admin'];
  tuple[0] = 3;
  tuple[1] = 'owner';
  tuple = [...tuple];
})();

/**
 * Example 6 (適用 Enum)
 * 列舉：可建構並管理全域變數
 * 列舉：默認為數值遞增
 * 列舉：可隨意賦予屬性及值
 */

(() => {
  enum Role {
    ADMIN,
    OWNER,
    USER,
  }
  const ian = Role.ADMIN;
  ian === Role.ADMIN;
})();

/**
 * Example 7 (適用 Any)
 * 正常情況下，不建議使用 (失去類型定義的優勢)
 */

(() => {
  let str: any = 'Hello';
  str = true;
  let arr: any = [];
  arr.push(1, true, {});
})();
