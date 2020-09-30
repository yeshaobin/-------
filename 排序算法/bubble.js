const arr = require('./数组乱序shuffle')
// arr = [3, 2, 1]

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function bubble(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i <= j; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
      }
    }
  }
}
console.time('冒泡排序')
bubble(arr)
console.timeEnd('冒泡排序')
console.log(arr)