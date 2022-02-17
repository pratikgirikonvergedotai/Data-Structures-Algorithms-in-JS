let letters = []

let word = "racecar"

let rword = ""

// pushing letters in stack
for (let i=0; i < word.length; i++){
    letters.push(word[i])
}




//pop letters from stack
for(let i=0; i < word.length; i++ ){
    rword += letters.pop()
}

if (word === rword){
    console.log(word + " is a palindrome")
}
else{
    console.log(word + " is not a palindrome")
}