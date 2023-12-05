const LinkedList = require('./LinkedList')

const ll = new LinkedList

ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)

ll.insertAt(1.5, 1)
ll.removeAt(0)
ll.removeAt(0)
ll.removeAt(4)


console.log(ll.toString())
