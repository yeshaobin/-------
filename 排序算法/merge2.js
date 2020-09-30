let  arr= require('./数组乱序shuffle')

function mergeSort(arr){
  if(arr.length<2)return arr;
  let length =arr.length;
  let left = arr.slice(0,Math.floor(length/2))
  let right = arr.slice(Math.floor(length/2))
  let a = mergeSort(left),b=mergeSort(right)
  return merge(a,b) 
}
function merge(left,right){
  let arr= [];
  
  while(left.length&&right.length){
    left[0]<right[0]?
    arr.push(left.shift()):
    arr.push(right.shift())
  }
  while(left.length){
    arr.push(left.shift())
  }
  while(right.length){
    arr.push(right.shift())
  }
  return arr
}
console.time('归并排序用递归')
arr=mergeSort(arr)
console.timeEnd('归并排序用递归')
console.log(arr)