//Object:-
// {stores data in key-value pairs and they are seperated by ','}
let obj = {
    username: 'Uma',
    place: 'VJY'
}
console.log(obj); //{username: 'Uma', place: 'VJY'}

//Accessing particular key&pair value by dot(.) notation.
// console.log(obj.username); //Uma 
// console.log(obj.place); //VJY

//Updating particular key in a object:-
// obj.place='HYD'
// console.log(obj.place); //HYD

//Deleting Key in a object
// delete obj.username;
// console.log(obj); //{place: 'HYD'}

//Construtor methods
console.log(Object.keys(obj)); //(2) ['username', 'place']
console.log(Object.values(obj)); //(2) ['Uma', 'VJY']
console.log(Object.entries(obj)); //(2) [Array(2), Array(2)] {array of arrays/Nested Arrays}

//Combaining multiple objects
let obj1 = {
    age: 22,
    place: 'HYD'
}
console.log(Object.assign(obj, obj1)); //{username: 'Uma', place: 'VJY', age: 22}
console.log(obj); //{username: 'Uma', place: 'VJY', age: 22}
console.log(obj1); //{age: 22}

//Combining the arrays
//Spread operator - denoted by ...
let a = [10, 20, 30]
let b = [1, 2, 3]
console.log, (b); //b=[10, 20, 30]
let c = [...b]
console.log(c); //c=[1, 2, 3]

//Array of objects
let users = [
    {
        username: 'Uma',
        age: 22,
        place: 'VJY'
    },
    {
        username: 'Ravi',
        age: 22,
        place: 'VZY'
    },
    {
        username: 'Karthik',
        age: 22,
        place: 'HYD'
    }
];
console.log(users);
//(3) [{…}, {…}, {…}]


//Accesing Values from array of objects
console.log(users[0].username); //Uma
console.log(users[1].place); //VZY
console.log(users[2].age); //22

//Looping Through Array of Objects(for)
for (let i = 0; i < users.length; i++) {
    console.log(users[i].username, users[i].age, users[i].place);
}
//Uma 22 VJY
//Ravi 22 VZY
//Karthik 22 HYD

//Using for...of
for (let user of users) {
    console.log(user.username, user.age, user.place);

}
//Uma 22 VJY
//Ravi 22 VZY
//Karthik 22 HYD

//Updating Value in Array of Objects
users[0].age = 25
console.log(users[0]);
//{username: 'Uma', age: 25, place: 'VJY'}

//Adding New Object to Array
users.push({
    username: 'Suresh',
    age: 26,
    place: 'BEL'

})
console.log(users);
//(4) [{…}, {…}, {…}, {…}]

//Deleting a Key from Object
delete users[1].age;
console.log(users[1]);
//{username: 'Ravi', place: 'VZY'}

//Combining Arrays of Objects (Spread Operator)
let v=[
    {uname:'lucky',age:23}
];
let y=[
    {uname:'Jamal',age:22}
]
let x=[...v,...y];
console.log(x);
//(2) [{…}, {…}]
