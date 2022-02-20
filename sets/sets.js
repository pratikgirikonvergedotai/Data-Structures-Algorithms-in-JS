function mySet() {
    let set = []

    // checks if  elements is present
    this.has = function(element) {
        return (set.indexOf(element) !== -1)
    }
    
    this.values = function() {
        return set
    }

    
    this.add = function(element) {
        if(!this.has(element)){
            set.push(element)
            return true
        }
        return false
    }
    
    this.remove = function(element) {
        if(this.has(element)){
            index = set.indexOf(element)
            set.splice(index,1)
            return true
        }
        return false
    }

    
    this.size = function() {
        return set.length
    }

    // methods not included in es6 set 
    
    this.union = function(new_set) {
        let union = new mySet()
        let first = this.values()
        let second = new_set.values()
        first.forEach(e => {
            union.add(e)
        })
        second.forEach(e => {
            union.add(e)
        })
        return union
    }


    this.intersection = function(new_set) {
        let intersection = new mySet()
        let first = this.values()
        first.forEach(e => {
            if(new_set.has(e)){
                intersection.add(e)
            }
        })
        return intersection
    }
    
    
    this.difference = function(new_set) {
        let difference = new mySet()
        let first = this.values()
        first.forEach(e => {
            if(!new_set.has(e)){
                difference.add(e)
            }
        })
        return difference
    }

   
    this.subset = function(new_set) {
        let first = this.values()
        return first.every(value => {
          return new_set.has(value)
        })
    }
}


let setA = new mySet()  
let setB = new mySet()
setA.add("a")
setB.add("b")  
setB.add("c")  
setB.add("a")  
setB.add("d")  
console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())
console.log(setB.difference(setA).values())

let setC = new Set()
let setD = new Set()  
setC.add("a")  
setD.add("b")  
setD.add("c")  
setD.add("a")  
setD.add("d")  
console.log(setD.values())
setD.delete("a")
console.log(setD.has("a"))
console.log(setD.add("d"))
