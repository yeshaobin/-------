const bt = require('./bt')
function inorder(root) {
  if(!root)return;
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}
inorder(bt)