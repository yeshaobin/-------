class MinHeap {
  constructor() {
    this.heap = [];
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  shiftUp(index) {
    if(index==0){return;}
    const parentIndex = this.getParentIndex(index);
    if(this.heap[parentIndex]>this.heap[index]){
      this.swap(parentIndex,index)
      this.shiftUp(parentIndex)
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  getLeftIndex(i){
    return i*2+1
  }
  getRightIndex(i){
    return i*2+2
  }
  shiftDown(index){
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if(this.heap[leftIndex]<this.heap[index]){
      this.swap(leftIndex,index);
      this.shiftDown(leftIndex)
    }
    if(this.heap[rightIndex]<this.heap[index]){
      this.swap(rightIndex,index);
      this.shiftDown(rightIndex)
    }
  }
  pop(){
    this.heap[0]=this.heap.pop();
    this.shiftDown(0);
  }
  peek(){
    return this.heap[0];
  }
  size(){
    return this.heap.length;
  }
}
const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop()
h.pop()
h.pop()