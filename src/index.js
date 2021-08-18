import axios from 'axios';
import People from './module';

let a = 1;
const b = 2;
class Person {}
const fun = () => {}
console.log(a, b, Person, fun, People, axios, 'axios');
console.log([].includes(1), Array.prototype.includes);
console.log([]?.[1] ?? 'empty')
let budget = 1_000_000_000_000;
console.log(budget, budget === 10 ** 12); // true
console.log(typeof a === 'number')
const str1 = 'q=query+string+parameters';
const res1 = str1.replaceAll('+', ' ');
console.log(res1, 'res1');
function *gen() {}
var g = gen();

console.log([1,2].at, g);

console.log(Array.prototype.find)

const map = new Map([['a', 2]]);

console.log(map.emplace);

async function test() {
  await 1
}

test();