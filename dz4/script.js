let numbers = [10, 3, 7, 8, 15];

numbers.push(18); 
numbers.shift(); 
let evenNumbers = numbers.filter(num => num % 2 === 0); 

let multiplied = numbers.map(num => num * 5); 

let average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length; 

let sorted =numbers.sort((a, b) => a - b); 

console.log("Изначальный массив:", [10, 3, 7, 8, 15]);
console.log("После добавления и удаления:", numbers);
console.log("Чётные числа:", evenNumbers);
console.log("Умноженные на 5:", multiplied);
console.log("Среднее арифметическое:", average);
console.log("Отсортированный массив:", sorted);

let celebrities = [
  { name: "Michael Jackson", age: 50, role: "singer" },
  { name: "Leonardo DiCaprio", age: 49, role: "actor" },
  { name: "Cristiano Ronaldo", age: 40, role: "footballer" },
  { name: "Billie Eilish", age: 23, role: "singer" },
  { name: "Emma Watson", age: 35, role: "actress" },
  { name: "Elon Musk", age: 54, role: "entrepreneur" },
  { name: "Zendaya", age: 29, role: "actress" },
  { name: "Justin Bieber", age: 31, role: "singer" },
  { name: "Tom Holland", age: 29, role: "actor" },
  { name: "Millie Bobby Brown", age: 21, role: "actress" }
];


let names = celebrities.map(celebritie => celebritie.name);

let descriptions = celebrities.map(celebritie => `${celebritie.name} is a ${celebritie.role}`);

let oldest = celebrities.reduce((prev, curr) => prev.age > curr.age ? prev : curr);
let youngest = celebrities.reduce((prev, curr) => prev.age < curr.age ? prev : curr);
let ageDifference = oldest.age - youngest.age;

let hasMinor = celebrities.some(celebritie => celebritie.age < 18);

let over20 = celebrities.filter(celebritie => celebritie.age > 20);

console.log("Имена:", names);
console.log("Описание:", descriptions);
console.log("Самый старший:", oldest);
console.log("Самый младший:", youngest);
console.log("Разница в возрасте:", ageDifference);
console.log("Есть несовершеннолетний:", hasMinor);
console.log("Знаменитости старше 20:", over20);