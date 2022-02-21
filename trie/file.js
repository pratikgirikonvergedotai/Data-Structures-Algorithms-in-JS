class Node{
    constructor(data){
        this.data = data
        this.isEndOfWord = false 
        this.children = {}
    } 
}

class Trie{
    constructor(){
        this.root = new Node(null)
    }

    add(data){
        let current = this.root

        // adding new letter as node 
        for (let i=0; i < data.length; i++){
            if (current.children[i] === undefined){
                current.children[i] = new Node(i)
            }
            current = current.children[i]
        }

        // maeking true if we reach the end
        current.isEndOfWord = true
    }

    search(data){
        let current = this.root

        for (let i=0; i < data.length; i++){
            if (current.children[i] === undefined){
                // returning false if we don't found the word
                return false
            }
            current = current.children[i]
        }

        // returning true if we found the word
        return current.isEndOfWord

    }
}

let trie = new Trie()

trie.add("CAT")
trie.add("DOG")
console.log(trie)
console.log(trie.search("MAT"))
console.log(trie.search("DOG"))