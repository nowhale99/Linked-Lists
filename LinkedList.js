class LinkedList {
    constructor(){
        this.head = null
        // this.length = 0
    }

    append(data){
        const newNode = new LinkedListNode(data, null)
        let current = this.head
        if(this.head===null){
            this.head = newNode
            return
        }
        while(current.next!==null){
            current = current.next
        }
        current.next = newNode
        // this.length++
    }

    prepend(data){
        const newNode = new LinkedListNode(data, this.head)
        this.head = newNode
        // this.length++
    }

    size(){
        if(this.head === null) return 0
        let size = 0
        let current = this.head
        while(current!==null){
            size+=1
            current = current.next
        }
        return size
    }

    myhead(){
        return this.head
    }

    tail(){
        let current = this.head
        while(current.next!==null){
            current = current.next
        }
        return current
    }

    at(index){
        if(index<0 || index>=this.length) return null
        let current = this.head
        for(let i = 0; i<index; i++){
            current = current.next
        }
        return current
    }

    pop(){
        if(this.head === null) return null
        let current1 = this.head
        let current2 = current1.next
        while(current2.next!==null){
            current1 = current2
            current2 = current2.next
        }
        current1.next = null
    }

    contains(value){
        let current = this.head
        while(current!==null){
            if(current.value===value) return true
            current = current.next
        }
        return false
    }

    find(value){
        if(this.head === null) return null
        let index = 0
        let current = this.head
        while(current!==null){
            if(current.value === value) return index
            current = current.next
            index++
        }
        return null
    }

    toString(){
        if(this.head === null) return 'null'
        let output = ''
        let current = this.head
        while(current!==null){
            output = output + '( ' + current.value + ' ) -> '
            current = current.next
        }
        output += 'null'
        return output
    }

    insertAt(value, index){
        let i = 0
        let current = this.head
        while((index-i)!==1){
            if(current===null){
                console.log('no susch index')
                return 
            }
            current = current.next
            i++
        }
        let prev = current
        let post = current.next
        const newNode = new LinkedListNode(value, post)
        prev.next = newNode
    }

    removeAt(index){
        if(index===0){
            this.head = this.head.next
            return
        }
        let length = 0
        let current = this.head
        while(current!==null){
            current = current.next
            length++
        }
        if(index<0 || index>length-1){
            console.log('no such index')
            return
        }


        let i = 0
        while((index-i)!==1 || (index-i)!==-1){
            current = current.next
            i++
        }
        let prev = current
        current = current.next
        prev.next = current.next
    }
}

class LinkedListNode {
    constructor(value, next){
        this.value = value
        this.next = next
    }

}

module.exports = LinkedList