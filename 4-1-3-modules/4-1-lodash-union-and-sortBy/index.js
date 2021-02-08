// const lodash = require('lodash');
const _ = require('lodash');

const arrayA = [1, 2, 3];
const arrayB = [2, 3, 4];
// const union = lodash.union(arrayA, arrayB);
const union = _.union(arrayA, arrayB);

console.log(`La unión de los arrays ${arrayA} y ${arrayB} es ${union}.`);


const students = [
    {
      name: 'Sofía',
      promo: 'k'
    },
    {
      name: 'María',
      promo: 'l'
    },
    {
      name: 'Lucía',
      promo: 'j'
    },
    {
      name: 'Julia',
      promo: 'l'
    }
];

const sort = _.sortBy(students, ['promo', 'name']);

console.log(sort);