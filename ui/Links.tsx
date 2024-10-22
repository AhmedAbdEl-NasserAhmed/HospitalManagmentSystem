class Node<T> {
  val: T | null;
  next: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList<T> {
  private _head: Node<T> | null;
  private _tail: Node<T> | null;
  private _length: number;

  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  push(val: T) {
    const newNode = new Node(val);

    if (!this._head) {
      this._head = newNode;
      this._tail = this._head;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }

    this._length++;

    return this;
  }

  pop() {
    if (!this._head) return undefined;

    let current = this._head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this._tail = newTail;
    this._tail.next = null;

    this._length--;

    if (this._length === 0) {
      this._head = null;
      this._tail = null;
    }

    return current;
  }

  shift() {
    if (!this._head) return undefined;

    const removedHead = this._head;

    this._head = removedHead.next;

    this._length--;

    if (this._length === 0) {
      this._tail = null;
    }

    return removedHead;
  }

  unshift(val: T) {
    const newHead = new Node(val);

    if (!this._head) {
      this._head = newHead;
      this._tail = this._head;
    } else {
      newHead.next = this._head;
      this._head = newHead;
    }

    this._length++;

    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this._length) return null;

    let returnedNode = this._head;

    for (let i = 0; i < index; i++) {
      returnedNode = returnedNode.next;
    }

    return returnedNode;
  }

  set(index: number, val: T) {
    const updatedNode = this.get(index);

    if (updatedNode) {
      updatedNode.val = val;
      return true;
    }

    return false;
  }

  insert(index: number, val: T) {
    if (index < 0 || index > this._length) return null;

    if (index === this._length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);

    const prevNode = this.get(index - 1);

    newNode.next = prevNode.next;

    prevNode.next = newNode;

    this._length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this._length) return null;

    if (index === this._length - 1) return this.pop();

    if (index === 0) return this.shift();

    const PrevNode = this.get(index - 1);

    const removedNode = PrevNode.next;

    PrevNode.next = removedNode.next;

    this._length--;

    return removedNode;
  }

  reverse() {
    let node = this._head;
    this._head = this._tail;
    this._tail = node;
    let prev = null;
    let next = null;

    for (let i = 0; i < this._length; i++) {
      next = node.next;

      node.next = prev;

      prev = node;

      node = next;
    }
  }

  getLength() {
    return this._length;
  }
}

const firstSingleLinkedList = new SinglyLinkedList();

firstSingleLinkedList.push("hey");
firstSingleLinkedList.push("Ahmed");
firstSingleLinkedList.push("Nasser");
firstSingleLinkedList.push("Developer");
firstSingleLinkedList.push("Hello Again");

firstSingleLinkedList.reverse();

console.log(firstSingleLinkedList);

const Links = () => {
  return (
    <ul className="flex gap-6 justify-center items-center text-[1.2rem] text-black ">
      <li>Terms</li>
      <li>Privacy</li>
      <li>Help Center</li>
    </ul>
  );
};

export default Links;
