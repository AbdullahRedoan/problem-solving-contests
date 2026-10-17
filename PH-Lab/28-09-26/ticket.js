// function simulateTicketQueue(commands) {

//     const queue = [];
//     const served = [];

// commands.map(command => {
//     const commandArrays = (command.split(' '));
//         if(commandArrays[0] === 'join' && queue.every(name => name !== commandArrays[1])){
//             queue.push(commandArrays[1])
//         }
//         if(commandArrays[0] === 'serve' && queue.length !== 0){
//             served?.push(queue[0]);
//             queue?.shift();
//         }
//         if(commandArrays[0] === 'leave' && queue.indexOf(commandArrays[1])  !== -1){
//             queue.splice(queue.indexOf(commandArrays[1]), 1);
//         }
        
//       });
//       return({queue, served})
// }




function simulateTicketQueue(commands) {
 const queue = [];
 const served = [];

 console.log(commands.split(''));
}
    console.log(simulateTicketQueue([
      "serve",
      "join Bob",
      "join Bob",
      "leave Alice",
      "join Alice",
      "serve"
    ]));