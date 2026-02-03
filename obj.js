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

let actors=[
    {
        aname:'Mahesh',
        age:45
    },
    {
        aname:'NTR',
        age:38
    },
    {
        aname:'Prabhas',
        age:42
    }
]
console.log(actors);
console.log(actors[2].age);

//For loop
for(let i = 0; i < actors.length; i++ ){
    console.log(actors[i].aname, actors[i].age);
}


//Creating a object consists of Function
let o = {
    uname:'Virat',
    place:'BLG',
    intrests : function(){
        console.log('Watching Movies by '+this.uname+' at '+this.place); //Watching Movies by Virat at BLG
        console.log(`Watching Movies by ${this.uname} at  ${this.place}`); //Formating text by text literals
         
        //'this' is current state of method or used to work as interms of referance object  
    }
}
// console.log(o.place); //BLG
// console.log(o.intrests()); //Watching Movies

//call,apply,bind methods
function lead(a,b){
    console.log(`${this.uname} is the Team Captain${a}${b}`);
    
}
lead.call(o," of RCB ","and SRH "); //Virat is the Team Captain

lead.apply(o,[" of RCB ","and SRH "]); //Virat is the Team Captain and for apply we have to pass values in [array];

let n=lead.bind(o," of RCB ","and SRH ") //BIND is same as closures and has to define one function to access through it
n() //Virat is the Team Captain
 
//Date Methods
//let details = new Date()
//console.log(details); //Fri Jan 30 2026 10:06:59 GMT+0530 (India Standard Time)

let details = new Date('04-07-2027');
console.log(details); //Sat Aug 22 2026 00:00:00 GMT+0530 (India Standard Time)
console.log(details.getDate());//7
console.log(details.getDay());//3
console.log(details.getMonth());//3
console.log(details.getUTCDate());//6 {based on epoch time}
console.log(details.getUTCDay());//2 {based on epoch time}
console.log(details.getTime()) //1807036200000 {based on epoch time}

//prime and factorail of numbers
let primeCheck = function(n){
    if(n<=1){
        console.log(n+' is Not Prime Number');
        return;
    }
    let isPrime = true;

    for(let i=2;i<n;i++){
        if(n%i === 0){
            isPrime=false;
            break;    
        }
    }
    if(isPrime){
        console.log(n+' is Prime Number');
        
    }else{
        console.log(n+' is not Prime Number'); 
    }
}
primeCheck(7)//7 is Prime Number
primeCheck(21)//21 is not Prime Number

//Factorial of number
let factorai = function(n){
    let fact = 1;

    for(let i=1;i<n;i++){
        fact=fact*i;
    }

    console.log(`Factorial of ${n} is ${fact}`);
  
}
factorai(5) //Factorial of 5 is 24
factorai(7) //Factorial of 7 is 720

//User choice/input
let num=Number(prompt("Enter Your Number:"))
let op =Number(prompt("Enter Your Choice:1.)Primecheck\n2.)Factorial"))

if(op===1){
    primeCheck(num)
}else if(op === 2){
    factorai(num)
}else{
    console.log('Invalid Choice');
    
}

