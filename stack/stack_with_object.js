let Stack = function(){
    this.count = 0
    this.storage = {}

    // adds a value in stack and increments the counter
    this.push = function(value){
        this.storage[this.count] = value
        this.count++
    }

    this.pop = function(){
        if (this.count === 0){
            return undefined
        }

        this.count--
        let result = this.storage[this.count]
        // with delete operator we can delete a property of object ({})
        delete this.storage[this.count]
        return result
    }

    this.size = function(){
        return this.count
    } 

    this.peek = function(){
        return this.storage[this.count-1]
    }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
stack.push("freeCodeCamp")
console.log(stack.size())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
