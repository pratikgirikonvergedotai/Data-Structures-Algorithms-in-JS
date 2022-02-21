class Minheap{
    constructor(){
        this.heap = [null]
    }
    
    getMin(){
        return this.heap[1]
    }

    add(data){
        this.heap.push(data)


        if (this.heap.length > 1){

            let current = this.heap.length - 1
            // checking if parent node is greater than child node. traversing up
            while (current > 1 && this.heap[Math.floor(current/2)] > this.heap[current]){
                // swapping smaller nodes
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }
}


class Maxheap{
    constructor(){
        this.heap = [null]
    }
    
    getMax(){
        return this.heap[-1]
    }

    add(data){
        this.heap.push(data)


        if (this.heap.length > 1){

            let current = this.heap.length - 1
            // checking if parent node is greater than child node. traversing up
            while (current > 1 && this.heap[Math.floor(current/2)] < this.heap[current]){
                // swapping smaller nodes
                [this.heap[Math.floor(current/2)], this.heap[current]] = [this.heap[current], this.heap[Math.floor(current/2)]]
                current = Math.floor(current/2)
            }
        }
    }
}