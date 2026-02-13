//API -> Application Program Interface ->Return Promise
//Data -> JSON(Javascript object notation) format which can adapt any of the technologies like python ,Java,HTML,CSS etc;
//Request(user) = API = Response(server)
//RESTful API -> representational state transfer application programming interface


//Request   Response   HTTP status codes
//create    POST     - 201 
//Reteive   GET      - 200(Successful response)
//Update    PUT      - 200(Successful response)
//Delete    DELETE   - 204 & 200

//1xx: Informational Responses
//2xx: Successful Responses
//3xx: Redirection Messages
//4xx: Client Error Responses
//5xx: Server Error Responses

//fetch,axios - CRUD operations
//fetch is a inbuilt method 
//axios is a 3rd party method i.e. library 

//fetch syntax=header(type),method,body(JSON.stringify,json)


//fetch-get method
// fetch('https://fakestoreapi.com/products')
//     .then((res) => {
//         console.log(res); //Response in form of object
//         return res.json();
//     })
//     .then((a) => {
//         console.log(a);

//     })
//Array of objects



// //axios get method
// axios('https://fakestoreapi.com/products')
//     .then((a) => {
//         console.log(a.data);
//         for (let i = 0; i < a.data.length; i++) {
//             console.log(a.data[i]);

//         document..querySelector('div')entById('one').innerHTML += `<img src="${a.data[i].image}" width="10%"/>`;}
//         document..querySelector('div')entById('one').style.color = 'Orange'
//         document..querySelector('div')entById('one').style.backgroundColor = 'black'

//     })

//axios get method
// axios('https://jsonplaceholder.typicode.com/posts')
//     .then((a) => {
//         console.log(a.data);
//         for (let i = 0; i < a.data.length; i++) {
//             console.log(a.data[i]);

//         document.querySelector('div').innerHTML += `<p>${a.data[i].title} </p>`;}
//         document.querySelector('div').style.color = 'Red'
//         document.querySelector('div').style.backgroundColor = 'black'

//     })




// //axios post method
// axios.post('https://jsonplaceholder.typicode.com/posts', [
//     {
//         id: 1,
//         mobile: "Samsang",
//         price: 70000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwU0E3cjm8mVFq2NAq4AyX0ze6-9G_feEbA&s',
//     },
//     {
//         id: 2,
//         mobile: "Oppo",
//         price: 50000,
//         img: 'https://vasanthandco.in/UploadedFiles/productimages/20240701042727-Untitled-22.png',
//     },
//     {
//         id: 3,
//         mobile: "Vivo",
//         price: 45000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgaeaa1Dg1k8p4ncg1d5lXe6n0SBTZSYvpjg&s',
//     }
// ])
//     .then((a) => {
//         console.log(a);
//         for (let i in a.data) {
//             document.querySelector('div').innerHTML += `<img src="${a.data[i].img}" width="30%"/>`;
//             document.querySelector('div').innerHTML += `<p>${a.data[i].id}</p>`;
//             document.querySelector('div').innerHTML += `<p>${a.data[i].mobile}</p>`;
//             document.querySelector('div').innerHTML += `<p>${a.data[i].price}</p>`;
//         }

//     })




//axios put method
// axios.put('https://jsonplaceholder.typicode.com/posts/1',{
//         id:1,
//         name:'SHIVA',
//         img:'https://img.freepik.com/free-vector/dark-lord-shiva-silhouette-hindu-festival-maha-shivratri_1017-49867.jpg?semt=ais_user_personalization&w=740&q=80'
// })
// .then((res)=>{
//     console.log(res.data);
//         document.querySelector('div').innerHTML += `<img src="${res.data.img}" width="30%"/>`;
//         document.querySelector('div').innerHTML += `<p> ${res.data.name}</p>`

// })




//axios delete method
// axios.delete('https://jsonplaceholder.typicode.com/posts/1',{

// })
// .then((b)=>{
//     console.log(b);

// })

//O/P:-
//data : {}

axios.post('https://jsonplaceholder.typicode.com/posts', {
    info: 'Sir antey naku roghu, moju niku kuda nenu nacchite nannu unchuko'
})
    .then((re) => {
        document.querySelector('div').innerHTML += `<p width='10%'>${re.data.info} </p>`;
        document.querySelector('div').style.color = 'Red'
        document.querySelector('div').style.backgroundColor = 'black'
    
})









