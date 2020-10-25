/**
 * 集合
 */
/**
 * 去重
 */
const arr = [1,1,1,2,3,4,5]
const arr2 = [...new Set(arr)]
console.log("arr2", arr2);

/**
 * 判断元素是否在集合中
 */
const set = new Set(arr)
set.has(1) //true
set.has(6) //false
set.add(1)
set.add(5)
set.add('o')
set.has('o') //true
console.log(set.size)
debugger


/**
 * 交集
 */
const set1 = new Set([1,2,3])
const set2 = new Set([2,3,4])
const set3 = new Set([...set1].filter(item=>set2.has(item)))
console.log("set3", set3); //2 3

/**
 * 差集
 */
const set4 = new Set([...set1].filter(item=>item=!set2.has(item)))
console.log("set4", set4);