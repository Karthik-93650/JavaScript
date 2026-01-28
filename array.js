//array(mutable) function(Creating and accessing)
let a = [10,20,30,40]
console.log(a);  //(4) [10, 20, 30, 40]
console.log(a[2]); //30
console.log(a.indexOf(20)); //1
console.log(a.at(0)); //4 

//Updating and replacing
console.log(a.length); //5
console.log(a.push(50)); //push used to add element at last position in the array
console.log(a); //(5) [10, 20, 30, 40, 50]
console.log(a.unshift(4)); //unshift used to add element at first position in the array
console.log(a); //(6) [4, 10, 20, 30, 40, 50]
// console.log(a.splice(3,0,60)); //splice used for//to instead of all methods //(7) [4, 10, 20, 60, 30, 40, 50]
// console.log(a.splice(3,1,60,50)); //(7) [4, 10, 20, 60, 50, 40, 50]
// console.log(a.splice(1,1,60,50)); //(8) [4, 60, 50, 20, 60, 50, 40, 50]
console.log(a); 

//Sorting and slicing
let arr=[5,10,2,9,7,40];
//console.log(arr.sort()); //(6) [10, 2, 40, 5, 7, 9]
//console.log(arr.pop()); //(5) [5, 10, 2, 9, 7] 
//console.log(arr.shift()); //(5) [10, 2, 9, 7, 40]
// console.log(arr.splice(2,3)); //splice(2(index),3(no.of elments to eliminate))
//console.log(arr); //(3) [5, 10, 40]
console.log(arr.slice(0,1));//[5]
console.log(arr.slice(1,0)); //[]
console.log(arr.slice(1,1));//[]
console.log(arr.slice(1,2));//[10]
console.log(arr.slice(1,3));//(2) [10, 2]
console.log(arr.join(',')); //5,10,2,9,7,40

let arr1 = [[10,20],[30,40],[50,60]];
console.log(arr1); //(3) [Array(2), Array(2), Array(2)]
console.log(arr1.flat()); //(6) [10, 20, 30, 40, 50, 60]
//flat->Used to convert multidimensional arrays to single array as shown above;

let arr2 = [10,20,30,40];
for(let i in arr2){
    console.log(arr2[i]);
} //o/p comes one by one in the arr2 


//Find the Largest Number in an Array
let arr3 = [10,20,50,25,30]
let largest = arr3[0]
for(let i=1;i<arr3.length;i++){
    if (arr3[i] > largest){
        largest=arr3[i];
    }
}
console.log('Largest Number:',largest); //Largest Number: 50

//Find Duplicate Numbers in an Array
let arr4=[1,2,3,5,7,1,5]
let Duplicate = []

for(let i=0;i<arr4.length;i++){
    for(let j=i+1;j<arr4.length;j++){
        
        if(arr4[i] === arr4[j]){
            let found = false;
        
        for(let k=0;k<Duplicate.length;k++){
            if(Duplicate[k] === arr4[i]){
                found=true;
                break;
            }
        }
        if (!found){
            Duplicate.push(arr4[i]);
            }
        }
    }
}
console.log("Duplicate Numbers:",Duplicate) //Duplicate Numbers: (2) [1, 5]

//To find largest number and duplicate numbers in the array
let ar=[10,20,5,60,1,10,25];

let Largest = ar[0];
let duplicate = [];

for(let i=0;i<ar.length;i++){
    if(ar[i]>Largest){
        Largest=ar[i];    
    }
    
    for(let j=i+1;j<ar.length;j++){
        // if(ar[i] === ar[j] && !duplicate.includes(ar[i])){
        //     duplicate.push(ar[i]);
        // }
        if(ar[i] === ar[j]){

            let isDuplicate = false;

            for(let k=0;k<duplicate.length;k++) {
                if(duplicate[k] === ar[i]){
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate){
                duplicate.push(ar[i]);

            }
        }
    }
}
console.log("Largest Number:",Largest); //Largest Number: 60
console.log("Duplicate Number:",duplicate); //Duplicate Number: [10]










