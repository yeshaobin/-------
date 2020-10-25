const bt = require('./bt')
function preorder(root){
  if(!root)return;
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
function preorder2(root){
  let res = [],
    stack = []
  while (stack.length || root) {
    if (root) {
      stack.push(root)
      console.log(root.val)
      root = root.left
    } else {
      root = stack.pop()
      root = root.right
    }
  }
  return res
}
preorder(bt);
console.log('--------');
preorder2(bt)