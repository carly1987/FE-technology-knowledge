function changeAgeAndReference(person) {
    debugger;
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };
    
    return person;
}
var personObj1 = {
    name: 'Alex',
    age: 30
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // {name: 'Alex',age: 25}
console.log(personObj2); // {name: 'John',age: 50}