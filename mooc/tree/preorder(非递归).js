const bt = require('./bt')
const preorder=function(root){
  if(!root){return;}
  const stack = [root]
  while(stack.length){
    const n = stack.pop()
    console.log(n.val)
    if(n.right) stack.push(n.right)
    if(n.left) stack.push(n.left)
  }
}

function preorder2(root){
  if(!root)return;
  let stack = [root]
  while(stack.length||root){
    if(root){
      console.log(root.val); 
      stack.push(root)
      root =root.left
    }else{
      let mid = stack.pop()
      root = mid.right
    }
  }
}
preorder(bt),

console.log('------');
preorder2(bt)