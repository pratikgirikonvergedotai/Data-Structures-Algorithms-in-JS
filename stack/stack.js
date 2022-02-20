let letters = []

let word = "racecar"

let reverse_word = ""

// pushing letters in stack
for (let i=0; i < word.length; i++){
    letters.push(word[i])
}




//pop letters from stack
for(let i=0; i < word.length; i++ ){
    reverse_word += letters.pop()
}

if (word === reverse_word){
    console.log(word + " is a palindrome")
}
else{
    console.log(word + " is not a palindrome")
}