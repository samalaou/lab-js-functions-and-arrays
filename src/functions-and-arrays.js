// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(firstNum, secondNum) {
    return Math.max(firstNum, secondNum)
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words && !words.length) {
        return null;
    }
    
    return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0
    for (let number of numbers){
        sum += number
    }
    return sum
}

function sumNumReduce(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0)
}



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (!numbers || !numbers.length) {
        return 0;
    }
    return sumNumbers(numbers) / numbers.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words, searchedWord) {
    if (!words.length) {
        return null;
    }
    return words.includes(searchedWord)
}
