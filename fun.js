//Functions(non-primitive):-
// function functionName(paramaters){//formal values
//     //block of code 
// }
// functionName(arguments)//actual values

//Void(dont have return keyword) Function
// function wish(wishes){
//     console.log(wishes); 
// }
// wish('Happy Republic Day')

//Non-Void(consists of return keyword) Function
// function wish(wishes){
//     return wishes
// }
// console.log(wish('Happy Republic Day'));

//Data From User
// let wishes=prompt('Enter your Wishes');
// let day=prompt("Enter the Day");
// function wish(wishes,day){
//     return wishes+day
// }
// alert(wish(wishes,day))

//es6-Default Parameters(Named Function)
// function addNum(a=10,b=20,c=30){
//     console.log(a+b);
// }
// addNum(b=200)
// addNum(a=210,b=230)

//es6-rest parameters-(...)
// function displayValues(a,...b){
//     console.log(a);
//     console.log(b); 
//     // for(let i in b){
//     //     console.log(b[i]);//loop gives iteration  
//     // }   
// }
// displayValues(10,20,30,40,50,60,70)

//hoisting function:-means accessing the function before declaring the function

//es6-Functional expression
//myMain(20,30,40,50,60) // Cannot access 'myMain' before initialization
// let myMain=function displayValues(a,b,c){
//     console.log(a,b);
// }
// myMain(20,30,40,50,60)
//And here hoisting is not possible in myMain functional expression

//Functions(even,odd,Prime numbers)
//Even/odd Number Named function/Function Expression
let checkEvenOdd = function evenOdd(n){
    if (n%2 === 0) {
        console.log(n + ' ' + 'Is Even Number');  
    }else{
        console.log(n + ' ' +  'Is Odd Number');
        
    }
}
checkEvenOdd(10) //10 Is Even Number
checkEvenOdd(23) //23 Is Odd Number

//Prime Number Named function/Function Expression
let checkPrimeNum = function prime(n){
    if(n<=1){
        console.log(n + ' '+'is not Prime Number');
        return;
    }
    let isPrime = true;

    for(let i = 2;i<=n/2;i++){
        if(n%i === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(n + ' '+'is Prime');
    }else{
        console.log(n + ' '+'is Not Prime');
        
    }
}
checkPrimeNum(7) //7 is Prime
checkPrimeNum(21) //21 is Not Prime
checkPrimeNum(1)

//es6-Anonymous Function
// let myMain=function(a,b,c){
//     console.log(a*b);
// }
// myMain(20,30,40,50,60)

//Even/odd Anonymous Function
let evenOdd = function(n){
    console.log(n%2 === 0? n + ' ' +'Is Even Number':n + ' ' +'Is Odd Number');   
}
evenOdd(5) //5 Is Odd Number
evenOdd(48) //48 Is Even Number

//Prime Number Anonymous Function
let primecheck = function(n){
    if(n<=1){
    console.log(n+' '+'Is Not Prime Number');
    return;
    } 
    let isPrime=true;

    for(let v = 2; v<=n; v++){
        if(n%v === 0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(n+' '+'Is Prime Number');    
    }else{
        console.log(n+' '+'Is Not Prime Number');
        
    }
}
primecheck(44) //44 Is Not Prime Number
primecheck(7) //7 Is Not Prime Number

//es6-Arrow function
// const variablename=(firstname)=>{console.log(firstname)};
// username('Karthik');
// username('Uma')

const mulNum=(a,b)=>{console.log(a*b)};
mulNum(10,20); //200
mulNum(100,20,3) //2000

const divNum=(a,b)=>{console.log(a/b)};
divNum(10,20); //0.5
divNum(100,20,3) //5

//Void(dont have return keyword) Function
const addNums=(a,b,c)=>{console.log(a+b+c)};
addNums(10,20,30)//60
addNums(1,2,3,4)

//Non-Void(have return keyword) Function
const addNum=(a,b,c)=>{return (a+b+c)};
console.log(addNum(10,20,30)); //60

//es6-IIFE(immediatly invoked function execution)function-Declared entire funcion in () 
(function(){
    console.log('IIFE-immediatly invoked function execution');
})();//IIFE-immediatly invoked function execution

//es-6 IIFE function using arrow function
(()=>{console.log('IIFE');
})();//IIFE

//Lexical Scoping (Closures):
// A function declared inside another function can access the outer function’s variables and parameters. Even after the outer function has finished executing, the inner function retains access to those variables by forming a closure.
// function outside(){
//     function inside(){
//         console.log('closure');
//     }return outside()
// }
// console.log(outside);
//ƒ outside(){
//     function inside(){
//         console.log('closure');
//     }return outside()
// } -> function definition

// function outside(a){
//     let place='VJY'
//     return function inside(){
//         console.log('closure'+place+a);
//     }
// }
// let last=outside('Uma')
// console.log(last()); //closureVJYUma
// console.dir(last);

function outside(a){
    let wish='Good Evening'
    return function inside(b){
        console.log(wish+' '+a+' '+b);
    }
}
let end=outside('karthik');
console.log(end('Tanuri'));

//outside(a,b) should add and inside(c,d) should multiply
function outside(a,b){
    return function inside(c,d){
        console.log(a+b);
        console.log(c*d);    
    }
}
let e=outside(100,2); //102
console.log(e(5,60)); //300


//es6-Formatting a text by Template Literals([`->backticks] for formatting and ${} for placeholder for text ) 
let username="Karthik";
let place='VJY'
function wishing(){
    console.log(`${username} 'from' ${place}`);
}
wishing();

