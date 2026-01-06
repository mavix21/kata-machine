type Node<T> = {
  value: T;
  prev: Node<T> | undefined;
};

export default class Stack<T> {
  public length: number;
  private head: Node<T> | undefined;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const newNode: Node<T> = {
      value: item,
      prev: this.head,
    };

    this.head = newNode;
    this.length++;
  }

  pop(): T | undefined {
    if (this.head === undefined) {
      return undefined;
    }

    const nodeToBeRemoved = this.head;
    this.head = nodeToBeRemoved.prev;
    this.length--;

    // free
    nodeToBeRemoved.prev = undefined;

    return nodeToBeRemoved.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  isEmpty(): boolean {
    return this.head === undefined || this.length === 0;
  }
}
