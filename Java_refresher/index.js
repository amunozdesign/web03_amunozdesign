let person = {
  name:'andres',
  age:30
};

person.name='john';
console.log(person.name);
person ['name'] = 'mary';

console.log(person.name);