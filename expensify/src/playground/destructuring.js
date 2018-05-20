//
// Object destructuring
//

// const person = {
//   name: 'Yunus',
//   age: 27,
//   location: {
//     city: 'SF',
//     temp: 78
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     // name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher || book;
// console.log(publisherName); // Penguin, Self-Published


//
// Array destructuring
//

// const address = ['1299 South Juniper Street', 'San Francisco', 'California', '11335'];
// const [, city, state = 'New York', zip] = address

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$3.00'];
const [coffeeHot, , mediumPrice] = item;

console.log(`A medium ${coffeeHot} costs ${mediumPrice}`);