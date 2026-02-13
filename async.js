//Synchronous Operations
// console.log("start");
// console.log("Async Operations");
// console.log("end");
//50, 20, 3 = 73


//Asynchronous Operations
//Functions run parallely and individually

//settimeout, setinterval
//setInterval:
// setInterval(function(){
// //block of code
// }, time(milliseconds))
//1 second = 1000 milliseconds

// setInterval(() => {
//     console.log("Start");
// }, 2000);

// setInterval(() => {
//     console.log("End");
// }, 1000);


//setTimeout:            
// setTimeout(() => {
//     console.log('Register');
// }, 3000);

// setTimeout(() => {
//     console.log('Login');
// }, 2000);

// setTimeout(() => {
//     console.log('Open Dashboard');
// }, 1000);


//callback, promises, async, await -> Asynchronous Operations
// function Register(cb) {
//     setTimeout(() => {
//     console.log('Register');
//     cb();
// }, 3000);
// }

// function Login(ed) {
//     setTimeout(() => {
//     console.log('Login');
//     ed();
// }, 2000);
// }

// function Dashboard() {
//     setTimeout(() => {
//     console.log('Open Dashboard');
// }, 1000);
// }

// //callbackhell
// Register(function() {
//     Login(function() {
//         Dashboard();
//     });
// });


//PROMISES -> object
//state: pending, resolved(fulfilled), rejected
//return new Promise((resolve, reject) => {
// })

// let a = new Promise((resolve, reject) => {
//     let b = true;
//     if(b) {
//         resolve("Condition is executed");
//     }
//     else {
//         reject("Failure of condition");
//     }
// })
// // console.log(a); //Promise {<fulfilled>: 'Condition is executed'}
//then block - resolve
//catch block - reject
//Promise Chaining
// .then((res)=> {
//     console.log(res);
// })
// .catch((res)=> {
//     console.log(res);
// })


//Using promises in the above above code
// function Register() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Register');
//             resolve('Registration Successful');
//         }, 3000);
//     })
// }

// function Login() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Login');
//             resolve('Login Successful');
//         }, 2000);
//     })
// }

// function Dashboard() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Dashboard');
//             resolve('Welcome to the Dashboard');
//         }, 1000);
//     })
// }

//Promise Chaining
// Register().then((res) => {
//     console.log(res);
//     Login().then((res) => {
//         console.log(res);
//         Dashboard().then((res) => {
//             console.log(res);
//         })
//     })
// })

//async, await
//await depends on async functions
//await can only be used in async functions
// async function processFlowChart() {
//     let RegisterResult = await Register();
//     console.log(RegisterResult);
//     let LoginResult = await Login();
//     console.log(LoginResult);
//     let DashboardResult = await Dashboard();
//     console.log(DashboardResult);
// }
// processFlowChart();


//Event Loop->The event loop is an important concept in JavaScript that enables asynchronous programming by handling tasks efficiently. Since JavaScript is single-threaded, it uses the event loop to manage the execution of multiple tasks without blocking the main thread.

//1
console.log('start');

//2 -> Macrostack Queue
setTimeout(() => {
    console.log('Callstack execution');
}, 2000);

//3
console.log('end');

//4 -> Microstack que
let a = new Promise((resolve, reject) => {
    let b = true;
    if(b) {
        resolve("Condition is executed");
    }
    else {
        reject("Failure of condition");
    }
})
.then((res)=> {
    console.log(res);
})
.catch((res)=> {
    console.log(res);
})

// start
// end
// Condition is executed
// Callstack execution



