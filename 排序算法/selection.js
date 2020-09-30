const arr = require('./数组乱序shuffle')


function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function selection(arr){
  for(let i=0;i<arr.length;i++){
    let min =i ;
    for(let j=i+1;j<arr.length;j++){
      if(arr[j]<arr[min]){
        min=j
      }
    }
    // console.log(i)
    swap(arr,i,min)
  }
}
console.time('选择排序')
selection(arr)
console.timeEnd('选择排序')
console.log(arr)