const arr = require('./数组乱序shuffle')
// const arr = [5,3,4,8,9,11,33,55,88,77,99]
// 归并排序有两种一种是递归 一种不是递归是自底向上
function merge(arr) {
  if (arr.length < 2) {
    return;
  }
  let step = 1,
    left, right;
  while (step < arr.length) {
    left = 0;
    right = step;
    while (right + step <= arr.length) {
      mergeArr(arr, left, left + step, right, right + step)
      left = right + step
      right = left + step
    }
    if (right < arr.length) {
      mergeArr(arr, left, left + step, right, right + step)
    }
    step*=2
  }
}

function mergeArr(arr, startLeft, stopLeft, startRight, stopRight) {
  let rightArr = arr.slice(startRight,stopRight)
  let leftArr = arr.slice(startLeft,stopLeft)
  rightArr[rightArr.length]=Infinity
  leftArr[leftArr.length]=Infinity
  let m=0,n=0
  if(stopRight>arr.length){
    stopRight=arr.length
  }
  for(let k=startLeft;k<stopRight;k++){
    if(leftArr[m]<=rightArr[n]){
      arr[k]=leftArr[m]
      m++
    }else{
      arr[k]=rightArr[n]
      n++
    }
  }
  // console.log('left arr-',leftArr)
  // console.log('right arr-',rightArr)
  
}
console.time('归并排序不使用递归')
merge(arr)
console.timeEnd('归并排序不使用递归')
console.log(arr)