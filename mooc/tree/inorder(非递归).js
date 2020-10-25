const bt = require('./bt')
const inorder = function (root){
  if(!root)return;
  const stack = []
 
  while(root||stack.length){
    if(root){
      stack.push(root)
      root = root.left
    }else{
      let mid = stack.pop();
      console.log(mid.val)
      root = mid.right
    }
  }
}
function inorder2(root){
  if(!root)return;
  let stack=[]
  let p = root;
  while(stack.length||p){
    while(p){
      stack.push(p)
      p=p.left
    }
    let mid = stack.pop()
    console.log(mid.val)
    p=mid.right
  }
 
}

inorder(bt)
console.log('---')
inorder2(bt)
