// Code your solutions in this file
function writeCards(names, adj) {
    let surprise = [];
    for(let i = 0; i < names.length; i++) {
        surprise.push(`Thank you, ${names[i]}, for the wonderful ${adj} gift!`);
    }
    return surprise;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(int) {
    for (let int = 10; int >= 0; int--) {
        console.log(int);
    }
}