const arr = require('./数组乱序shuffle')

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function shell(arr) {
  const len = arr.length;
  let gap =1;
  while(gap<len/3){
    gap = 3*gap +1
  }
  while(gap>=1){
    for(let i=gap;i<len;i++){
      for(let j=i;j>=gap&&arr[j]<arr[j-gap];j-=gap){
        swap(arr,j,j-gap)
      }
    }
    gap = (gap-1)/3
    console.log("gap", gap);
    
  }
}
console.time('shell排序')
shell(arr)
console.timeEnd('shell排序')
console.log(arr);