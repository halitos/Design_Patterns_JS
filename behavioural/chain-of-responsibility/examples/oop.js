// class Request {
//     constructor(amount) {
//         this.amount = amount;
//         console.log(`Requested: £${amount}\n`);
//     }

//     get(note) {
//         var count = Math.floor(this.amount / note);
//         this.amount -= count * note;
//         console.log(`Dispense ${count} £${note} notes`);
//         return this;
//     }
// }

// function run() {
//     var request = new Request(378);

//     request.get(100).get(50).get(20).get(10).get(5).get(1);
// }

// run();



let lastMessage =  {payload: {val: "Bir"}} ||  {next_message: {payload: {val: "iki"}}};



const parseLastMessage = (lastMessage) => ({
    val1: lastMessage.payload,
    // val2: lastMessage.next_message.payload,
});



// let hepsi = parseLastMessage(lastMessage.payload, lastMessage.next_task.payload)
let all = parseLastMessage(lastMessage)
// let iki = parseLastMessage(lastMessage.next_task.payload)

// console.log(hepsi);
console.log(all);