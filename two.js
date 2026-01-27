//Comparision Operators
//<,>,<=,>=,==,===,!=,!==
// let x=1;
// let y=2;
// let z='2';
// console.log(x<y);//true
// console.log(x>y);//false
// console.log(x<=y);//true
// console.log(x>=y);//false
// console.log(z==y);//true
// console.log(z!=y);//false
// console.log(z===y)//false
// console.log(z!==y)//true

//Logical opeartors
//&&(and) ||(or) !(not)
// console.log(z<y && z===y);//false
// console.log(z<y || z==y);//true
// console.log(!(x<y) && !(z===y));//false

//Browser object Modal
// alert('Hi There!')
// confirm('*Confirm Here*')
// prompt('Leave a message')

//Conditions
// let age=prompt('Enter Age');
// if(age>=18){
//     alert('Valid to vote!')
// }
// else if(age>0 && age<18){
//     alert('Invalid to vote')
// }
// else{
//     alert('Enter proper age Please!')
// }

// // if age<5 free ticket to enter the movie 
// // if age>=5 to 10 ticket cost is 100
// // if age>=10  to 20 ticket cost is 150
// // if age>=20 to 30 ticket cost is 200
// // if age>30 ticket cost is 300
// let age=prompt('Enter Your Age:')
// if(age<5){
//     confirm('Free of cost')
// }
// else if(age>=5 && age<10){
//     confirm('Cost of Ticket is 100')
// }
// else if(age>=10 && age<20){
//     confirm('Cost of Ticket is 150')
// }
// else if(age>=20 && age<30){
//     confirm('Cost of Ticket is 200')
// }
// else{
//     confirm('Cost of Ticket is 300')
// }

//Switch Condition
// let day=prompt('Enter Day Code:')
// switch(day){
//     case '1':
//         alert('Monday')
//         break;
//     case '2':
//         alert('Tuesday')
//         break;
//     case '3':
//         alert('Wednesday')
//         break;
//     case '4':
//         alert('Thursday')
//         break;
//     case '5':
//         alert('Friday')
//         break;
//     case '6':
//         alert('Saturday')
//         break;
//     default:
//         alert('Sunday')
// }

//Mini-Calculator:-
let n = prompt('Enter 1 Number:');
let k = prompt('Enter 2 Number:');
op=prompt('Enter Your Operation');
switch(op){
    case '+':
        alert(('sum=')+(n+k))
        break;
    case '-':
        alert(('difference=')+(n-k))
        break;
    case '*':
        alert(('product=')+(n*k))
        break;
    case '/':
        alert(('Result=')+(n/k))
        break;
    case '**':
        alert(('Power=')+(n**k))
        break;
}


// Ternery Opearator:-
// syntax: condition?true:false
let v=12;
let c=22;
console.log(v>c?'true':'false');


