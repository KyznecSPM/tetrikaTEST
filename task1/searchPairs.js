/*
Дан массив целых чисел <array> и целое число <k>. Нужно вывести все уникальные пары чисел из массива, сумма которых равна k.
function searchPairs(array, N) {
}

const arr = [1, 2, 6, 5, 3, 4, 7, 8];
const k = 5;

console.log(searchPairs(arr, k));

OUT: >> [[1, 4], [2, 3]]
*/

const searchPairs = (arr, num) => {
  const uniqPair = arr => {
    const arrToSet = new Set(arr);
    const uniqArr = [...arrToSet];
    const arrOfPairs = [];
    for (let i = 0; uniqArr.length > i+1; i++) {
      const el = uniqArr[i];
      for (let j =i; uniqArr.length > j+1; j++ )   
      arrOfPairs.push([el, uniqArr[j+1]]);
    }
    return arrOfPairs;    
  }   
  return uniqPair(arr).filter(el => el[0]+el[1] === num);
}

const arr = [1, 2, 6, 5, 3, 4, 7, 8];
const k = 5;

console.log(searchPairs(arr, k));