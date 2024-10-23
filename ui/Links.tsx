class Node<T> {
  val: T | null;
  next: Node<T> | null;
  prev: Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList<T> {
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

      newNode.prev = this._tail;

      this._tail = newNode;
    }

    this._length++;

    return this;
  }

  pop() {
    if (!this._head) return null;

    const poppedNode = this._tail;

    if (this._length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      this._tail = poppedNode.prev;
      this._tail.next = null;
      poppedNode.prev = null;
    }

    this._length--;

    return poppedNode;
  }

  shift() {
    if (this._length === 0) return null;

    const currentHead = this._head;

    if (this._length === 1) {
      this._head = null;
      this._tail = null;
    } else {
      this._head = currentHead.next;

      this._head.prev = null;

      currentHead.next = null;
    }

    this._length--;

    return currentHead;
  }

  unshift(val: T) {
    if (this._length === 0) return null;

    const newHead = new Node(val);

    if (this._length === 0) {
      this._head = newHead;
      this._tail = newHead;
    } else {
      this._head.prev = newHead;

      newHead.next = this._head;

      this._head = newHead;
    }

    this._length++;

    return newHead;
  }

  get(index: number) {
    if (index < 0 || index >= this._length) return null;

    let chosenNode = null;

    if (index <= this._length / 2) {
      let currentHead = this._head;

      for (let i = 0; i < index; i++) {
        currentHead = currentHead.next;
      }

      chosenNode = currentHead;
    } else {
      let currentTail = this._tail;

      for (let i = this._length - 1; i > index; i--) {
        currentTail = currentTail.prev;
      }

      chosenNode = currentTail;
    }

    return chosenNode;
  }

  set(index: number, val: T) {
    const replacedNode = this.get(index);

    if (!replacedNode) return false;

    replacedNode.val = val;

    return true;
  }
}

const doublyLinkedList = new DoubleLinkedList();

doublyLinkedList.push("Double linked list check");
doublyLinkedList.push("Double linked list check again");
doublyLinkedList.push("Double linked list check again 123");
doublyLinkedList.push("Double linked list check again 456");
doublyLinkedList.push("Double linked list check again 951");
doublyLinkedList.push("Double linked list check again 357");
doublyLinkedList.push("Double linked list check again 852");
doublyLinkedList.push("Double linked list check again 965");

console.log(doublyLinkedList.set(10, "hello"));
console.log("doublyLinkedList", doublyLinkedList);

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
