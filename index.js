// Code your solutions in this file
/*for (let age= 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "droll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts;
}
wrapGifts(gifts);*/

//let students = ["Lisa", "Kaitlin", "Jan"];

function writeCards (students, event) {
    let newArray = [];
    for (let i = 0; i < students.length; i++){
       newArray.push(`Thank you, ${students[i]}, for the wonderful ${event} gift!`)
    }
       return newArray;
};

//writeCards(["Lisa", "Kaitlin", "Jan"], 'surprise');


function countDown(num) {
    let i = -1
    while(i < num){
        console.log(num--);
    }
    return num;
}

//countDown(10);
//countDown(4);