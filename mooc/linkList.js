const a = {val:'a'}
const b = {val:'b'}
const c = {val:'c'}
const d = {val:'d'}
a.next = b
b.next = c
c.next = d
//遍历链表
let p = a;
while(p){
  console.log(p.val)
  p=p.next
}

//插入值
const e = {val:'e',next:null}
c.next = e;
e.next = d;
console.log(a)

//删除值
c.next =d