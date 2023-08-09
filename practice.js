// ticket discout
function ticketCounter(ticket){
    const frst1 = 100;
    const scnd2 = 90;
    const thrd3 = 70;
    if(ticket <= 100){
        const price = frst1 * ticket;
        return price;
    }
    else if( ticket <= 200){
        const price = 100 * frst1;
        const differ = ticket - 100;
        const price2 = differ * scnd2;
        const total2 = price2 + price;
        return total2;
    }
    else{
        const price = frst1 * 100;
        const price2 = scnd2 * 100;
        const differ2 = ticket -200;
        const price3 = differ2 * thrd3;
        const total3 = price3 + price2 + price;
        return total3
        
    }
}

const totalTicket = ticketCounter(100);
console.log(totalTicket)
const totalTicket2 = ticketCounter(200);
console.log(totalTicket2)
const totalTicket3 = ticketCounter(203);
console.log(totalTicket3)
const totalTicketPrice = totalTicket + totalTicket2 + totalTicket3;
console.log('All item of ticket price is :', totalTicketPrice, 'TK')