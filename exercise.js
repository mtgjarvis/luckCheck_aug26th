function convertStr(str) {
    let newList = str.split('')
    numList = newList.map(function(item) {
        return parseInt(item, 10);
    })
    console.log(numList)
    return checkStr(numList)
}

function checkStr(numList) {
    let count = 0;
    for (num in numList) {
        if (typeof(num)!= NaN && numList.length != 0){  
            count += 1;
        } if (count === numList.length) {
            return luckCheck(numList);
        } else {
            console.log('Invalid')
}}}


function luckCheck(validatedList) {
    let midNum = Math.ceil(validatedList.length/2);
    let firstHalf = validatedList.slice(0, midNum);
    let secondHalf = validatedList.slice(midNum);
    console.log(firstHalf)
    console.log(secondHalf)
    firstHalf = firstHalf.reduce((a,b) => a + b)
    secondHalf = secondHalf.reduce((a,b) => a + b)
    console.log(firstHalf)
    console.log(secondHalf)
    if (firstHalf === secondHalf) {
        console.log("You have a lucky number! but it's still a ticket")
    } else if (firstHalf != secondHalf) {
        console.log("Your not lucky, sucka")
    } else {
        console.log("Does not compute")
    }
}

convertStr('124a321')