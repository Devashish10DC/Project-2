console.log('person1: show ticket');
console.log('person2: show ticket');

const preMovie = async () => {
    const promiseWifeBringingTicket = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ticket');
        }, 3000)
    });
    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const getbutter = new Promise((resolve, reject) => resolve('butter'));
    const getColdDrinks = new Promise((resolve, reject) => resolve('ColdDrinks')); 

    let ticket = await promiseWifeBringingTicket; 
    
    console.log('wife: i have the ticket');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    
    let popcorn = await getPopcorn;
 
    console.log('husband: i got some popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await getbutter;
    console.log('husband: i got some butter on popcorn');
    console.log('husband: anything else darling');
    console.log('wife: lets go we are getting late for movie');
    console.log('husband: thankyou for the reminder');

    let coldrinks = await getColdDrinks;
    console.log('husband: its interval do you need something');
    console.log('husband: i am feeling thirsty so i am going to get a cold-drink');
    console.log('wife: ok get me one as well');

    return ticket;
}
preMovie().then((m) => console.log('person3: shows ticket'))

console.log('person4: show ticket');
console.log('person5: show ticket');
