const tree = {
  val: 'a',
  children: [{
      val: 'b',
      children: [{
          val: 'd',
          children: [

          ]
        },
        {
          val: 'e',
          children: [

          ]
        }
      ]
    },
    {
      val: 'c',
      children: [{
          val: 'f',
          children: [

          ]
        },
        {
          val: 'g',
          children: [

          ]
        }
      ]
    }
  ]
}
function bfs(tree){
  let queue = [tree];
  while(queue.length){
    let head = queue.shift()
    console.log(head.val)
    head.children.forEach((child)=>{
      queue.push(child)
    })
  }
  
}
bfs(tree)
