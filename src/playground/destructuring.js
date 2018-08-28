// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = "self-published" } = book.publisher;
// console.log(publisherName);

const item = ['coffee', '2.00', '2.50', '2.75'];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);