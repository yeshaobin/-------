//创建一个数组
let arr = Array(200000).fill(0).map((item, index) => index + 1);
// console.log(arr);

//1. 直接利用sort进行排序，有漏洞，大部分元素位置没有移动
arr.sort((a, b) => (Math.random() > 0.5 ? -1 : 1));
// console.log(arr);

//2. 经典洗牌算法实现
function shuffle(array) { 
    let arrayLength = array.length,   
        randomIndex, //随机数   
        tempItem; //临时存储元素  
    for (let i = arrayLength - 1; i >= 0; i--) {    
        randomIndex = Math.floor(Math.random() * (i + 1));    
        tempItem = array[randomIndex];    
        array[randomIndex] = array[i];    
        array[i] = tempItem;  
    }  
    return array;
}

module.exports = shuffle(arr);
