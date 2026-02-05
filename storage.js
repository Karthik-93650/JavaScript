//Stores data in KEY-VALUE Pairs
//localStorage -> Stores data upto certain time-period in the backend  
//Adding the values through setItem('') method
localStorage.setItem('Username','Karthik')
localStorage.setItem('place','Vijayawada')

//Accessing the values through getItem('') method
console.log(localStorage.getItem('Username'));
console.log(localStorage.getItem('place'))

//Deleting Info/Values through remove('');clear() methods 
localStorage.removeItem('place'); //Removes particular value
localStorage.clear(); //Delete/Removes/Drops entire data from the localstorage


//SessionStorage -> Stores data for upto session time-period in the backend and deletes the data after session ended;
//Adding the values through setItem('') method
sessionStorage.setItem('Uname','Uma');
sessionStorage.setItem('age',22);
sessionStorage.setItem('place','Hyderabad');

//Accessing the values through getItem('') method
console.log(sessionStorage.getItem('Uname'));
console.log(sessionStorage.getItem('place'));

//Deleting Info/Values through remove('');clear() methods 
sessionStorage.removeItem('place'); //Removes particular value
sessionStorage.clear(); //Delete/Removes/Drops entire data from the sessionStorage

//destructuring of an Array -> means dividing the array values into small particules by using spread operator(...);
//->Means packing and Unpacking the array values
let arr=[1,2,3,4,5];
console.log(arr); //(5) [1, 2, 3, 4, 5]
//Now using spread operator(...) for destructuring of an array
let [a,b,c,d]=[...arr]
console.log(b,c,d);//2 3 4

 
//destructuring of an Object -> means dividing the Object values into small particules by using spread operator(...);
//->Means packing and Unpacking the Object values
let obj={
    uname:'Harsha',
    place:'BLG',
    age:20
};
console.log(obj); //{uname: 'Harsha', place: 'BLG', age: 20}
let {uname,place,age}={...obj};
console.log(uname); //Harsha

//Determining the datatype of closures function
const one=()=>{
    return two=()=>{
        return 'Hello'
    }
}
let v=one()
console.log(typeof v()); //string -> depends on the return value in inside function
console.log(typeof one()); //function



