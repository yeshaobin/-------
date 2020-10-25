const bt = require('./bt')
/**
 * 后序便利很复杂 
 * 但有简化的方式 后续便利本身是左右根，如果反过来就是根右左，根右左和先序遍历很像
 * 
 */
function postorder(root){
  if(!root)return;
  let stack = [root];
  let reverse = []
  while(stack.length){
    let root = stack.pop()
    reverse.unshift(root.val)
    if(root.left) stack.push(root.left)
    if(root.right) stack.push(root.right)
  }
  console.log(reverse)
}
function postorder2(root){
  if(!root){return;}
  let stack = [],reverse=[]
  while(root||stack.length){
    if(root){
      reverse.unshift(root.val)
      stack.push(root)
      root = root.right
    }else{
      let mid = stack.pop()
      root = mid.left
    }
  }
  console.log(reverse)
}
postorder(bt)
console.log('----------');
postorder2(bt)