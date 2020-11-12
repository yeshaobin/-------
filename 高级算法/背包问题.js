function max(a,b){
  return Math.max(a,b)
}
function knapsack(capacity,size,value,n){
  if(capacity==0||n==0){
    return 0; 
  }
  if(size[n-1]>capacity){
    return knapsack(capacity,size,value,n-1)
  }else{
    return max(value[n-1]+knapsack(capacity-size[n-1],size,value,n-1),knapsack(capacity,size,value,n-1))
  }
}
var value = [4,5,10,11,13,18,155]
var size = [3,4,7,8,9,1,1]
var capacity = 16
var n = 5
let objective = value.map((item,index)=>{return {value:item,size:size[index]}})
console.log(knapsack(capacity,size,value,5))
function dramaticProgram(capacity,objective,n){
  //初始化
  let dp = new Array({length:n+1})
  for(let i=0;i<n;i++){
    dp[i] = new Array(capacity+1).fill(0) //d[[i]这个数组代表了在拿i件的情况下,挑了几件为index=1,价值为value
  } 
  // console.log('dp',dp)
  //初始化结束
  for(let i=0;i<n;i++){ //n 件数
    let {size:load,value} = objective[i]
    for(let j=0;j<=capacity;j++){
      if(i===0||j===0)continue
      if(load<=j){
        dp[i][j] = max(dp[i-1][j-load] + value,dp[i-1][j]) 
      }else{
        dp[i][j] = dp[i-1][j]
      }
    } 
  }
  return dp
}
console.log(dramaticProgram(capacity,objective,5));