function threeStepsAB (text) {
// Your code here
for(var i = 0; i < text.length; i++){
    if(text[i - 4] === 'a' && text[i] === 'b'){
        return true
    }
}
    return false
}

// TEST CASES
console.log(threeStepsAB('lane borrowed')); // true
console.log(threeStepsAB('i am sick')); // false
console.log(threeStepsAB('you are boring')); // true
console.log(threeStepsAB('barbarian')); // false
console.log(threeStepsAB('bacon and meat')); // false