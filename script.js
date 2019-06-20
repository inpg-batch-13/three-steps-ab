function threeStepsAB (text) {

    for (var i = text.length - 1; i > 4; i--) {
    
        if (text[i] == 'b'|| text[i] == 'B' && text[i - 4] == 'a' || text[i - 4] == 'A') {
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