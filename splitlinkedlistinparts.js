//Objective is to split a linked list into 'k' equal parts, where any overflow
//nodes go into the beginning nodes until they run out

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}
  
class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(4)
head.next = new Node(1)
head.next.next = new Node(8)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

let k = 2


//O(n) solution that finds the width of each split in the linked list,
//then iterates with the remainder in mind

let curr = head
let count = 0

while (curr) {
    count++
    curr = curr.next
}

let width = Math.floor(count / k)
let remainder = count % k
let result = []
curr = head

for (let i = 0; i < k; i++) {
    let head = new Node(-1)
    let temp = head
    
    //The first (N % k) parts have an extra item
    //For example, given 6 elements into 4 parts
    //The first two indices (0 and 1) will have an extra element
    for (let j = 0; j < width + (i < remainder ? 1 : 0); j++) {
        temp.next = new Node(curr.val)
        temp = temp.next 
        if (curr) {
            curr = curr.next
        }
    }
    result[i] = head.next
}

return result