function writeCards(array, event) {
    let newArray = [];
    for(let i=0; i < array.length; i++) {
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}

function countDown(i) {
    let countDown = i;
    while (countDown >= 0) {
  console.log(countDown--)
}
}
l