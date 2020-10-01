const arr = require('./数组乱序shuffle')
// const arr = [9,8,7,6,1,4,3,2,5]
function quick2(arr, left, right) {
  if (left < right) {
    let pivot = arr[right];
    let i = left,
      j = right;
    while (i < j) {
      //左边放小的  找的大的就终止循环放到右边
      while (i<j&&arr[i] < pivot) {
        i++
      }
      if(i<j){
        // console.log(`pivot左边${arr[i]}--->pivot右边${arr[j]}`)
        arr[j--] = arr[i]
        // console.log(arr.join(','))
      }
      //右边放小的  找的大的就终止循环放到左边
      while (i<j&&arr[j] > pivot) {
        j--
      }
      if(i<j){
        // console.log(`pivot右边${arr[j]}--->pivot左边${arr[i]}`)
        arr[i++]=arr[j]
        // console.log(arr.join(','))
      }
      
    }
    arr[i] = pivot; // i=j
    quick2(arr, left, j - 1)
    quick2(arr, j + 1, right)
  }
}
console.time('不用递归快速排序')
quick2(arr,0,arr.length-1)
console.timeEnd('不用递归快速排序')
console.log(arr)