const arr =require('./数组乱序shuffle')
// let arr = [5,55,7,111,555,333,111,548,1234,031,5478,0634,8,9,77,11,33]

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

function quick1(arr, left, right) {
  // console.log(left,right)
  if (left < right) {
    let i = left,
      j = left;
    let pivot = arr[right]
    for (j = left; j < arr.length; j++) { //保证了i左边的数都比privor小(这同时也是右边的数比privor大),这就够了,到时候privor放到i就行
      if (arr[j] < pivot) {
        swap(arr, i, j)
        i++
      }
    }
    // 结束后j的位置就在pivot+1的位置上所以直接用right
    arr[right] = arr[i]
    arr[i] = pivot
    quick1(arr, left, i - 1)
    quick1(arr, i + 1, right)
  }
}
console.time('递归快速排序')
quick1(arr, 0, arr.length - 1)
console.timeEnd('递归快速排序')
console.log(arr)