//foreach,map,filter,find,reduce-HOF(Higher order functions) {Advance Array methods}
//foreach loop
let arr=[10,20,30,40,50,60,70,80,90];
arr.forEach(function(value,index){
    console.log(value*2);
    
}) //iterates through each element/values one by one and gives values according to the condition;

//map function
let a = arr.map(function(value,index){
    return index*2
})
console.log(a); //(5) [20, 40, 60, 80, 100]->returns new array values

//filter function
let b=arr.filter(function(values){
    return values%3==0 && values>10  
})
console.log(b); //[30, 60, 90]-> returns values according to the condition

//find function
let c=arr.find(function(values){
    return values%3==0  && values>10 
})
console.log(c);  //30 -> returns only the first value according to the conditions

//reduce function
let d=arr.reduce((ac,cu)=>{  //ac->accumelative (first-value) && cu->cumilative (next-value)
    console.log(ac,cu);
    return ac+cu    
})
console.log(d);  //450 {ac + cu = 450} 

//example of higher order function(HOF)
function topp(cb){
    console.log('First function'); //First function
    cb()        //cb() -> callback function
    
}
topp(medium) //Second function
topp(bottom) //last function

function medium(cb){
    console.log('Second function');
}

function bottom(cb){
    console.log('last function');
}

//Means we can access the both medium and bottom functions by topp function through cb method and this type of functions are caled as 'Higher Order Functions' such as above used built in methods;