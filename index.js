// Code your solutions in this file

function writeCards(names, event) {
    let thankYouCards = []
    for (let i = 0; i < names.length; i++){
        thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countDown(n) {
    let i = 0
    while(i <= n){
        console.log(n)
        n--
    }
}