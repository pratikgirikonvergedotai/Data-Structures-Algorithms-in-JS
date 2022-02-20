class Node{
    constructor(data){
        this.data = data
        this.right = null
        this.left = null
    }
}

class BST{
    constructor(data){
        this.root = new Node(data)
    }

    add(data){
        let newnode = new Node(data)

        let recursive_function = n => {
            if (data < n.data){
                if (!n.left){
                    n.left = newnode
                }
                else{
                    recursive_function(n.left)
                }
            }
            else if (data > n.data){
                if (!n.right){
                    n.right = newnode
                }
                else{
                    recursive_function(n.right)
                }
            }
        }

        recursive_function(this.root)
    }

    min(){
        let current = this.root

        while(current.left){
            current = current.left
        }

        return current.data
    }

    max(){
        let current = this.root

        while(current.right){
            current = current.right
        }

        return current.data
    }

    present(data){
        let current = this.root

        while(current){
            if (data === current){
                return true
            }

            if (data < current.data){
                current = current.left
            }
            else{
                current = current.right
            }
        }

        return false
    }
}

let bst = new BST(15)

bst.add(18)
bst.add(10)
bst.add(12)
bst.add(1)

console.log(bst)