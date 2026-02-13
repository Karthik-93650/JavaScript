//Error-Handling -> try,catch,finally
//try,catch,finally
// try{
//     //console.log('Hi');
//     //console.lag('Hola');  //TypeError: console.lag is not a function
//     //console.log(x); //ReferenceError: x is not defined
    
    
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log('At last');
    
// }
//when no errors O/P :- Hi At last in the console
//When error spotted in try block then  O/P :- error block code and finally block code 

//Taking data/value from the User through try,catch,finally blocks
a=prompt("Enter a Number")
try {
    if(a%2==0){
        console.log('Not Accepted');
        throw new Error('Even Numbers')  
    }
    else if(a%3==0){
        console.log('Not Accepted');
        throw new Error('Odd Numbers')
    }
    console.log(a);
    
}
catch(error){
    console.log(error );
    
}
finally{
    console.log('Operation Executed');
    
}
