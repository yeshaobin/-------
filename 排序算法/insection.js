const arr = require('./数组乱序shuffle')
function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function insection(arr){
  let preIndex,currrent
  for(let i=0;i<arr.length;i++){
    preIndex = i-1;
    currrent =arr[i]
    while(preIndex>=0&&arr[preIndex]>=currrent){
      arr[preIndex+1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex+1]=currrent
  }
  return arr;
}
console.time('插入排序')
insection(arr)
console.timeEnd('插入排序')
console.log(arr);