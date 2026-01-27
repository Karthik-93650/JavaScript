//loops
//3 expressions - initilaization,condition,iteration
//while v/s dowhile 

//while(top condition iteration)
// let c=0;
// while(c<10){
//     c++;
//     console.log(c);
// }

// //dowhile(down condition iteration)
// let i=1
// do{
//     i++;
//     console.log(i);   
// }
// while(i<10)

//for loop(Certain Range)
// for(let a=40;a<50;a++){
//     if(a%3==0){
//         // break;//terminates
//         continue;//skips 
//     }
//     console.log(a);  
// }

//Nested for loop
// for(let i=0;i<4;i++){
//     for(let j=0;j<5;j++){
//         console.log(i,j);  
//     }
// }

// let n=5;
// for (let rows=0;rows<n;rows++){
//     let pattern='';
//     for(let cols=0;cols<rows+1;cols++){ //cols<rows+1(right-angle)cols<n-rows-1(inverse-triangle)
//         pattern+='*'
//     }
//     // console.log('\n');
    
//     console.log(pattern);
// }

//User given Data Loops;
let k=Number(prompt('Enter Number:'))//Specify rows
let op=Number(prompt('Choice One operation:\n1.)Traingle\n2.)Reverse Triangle\n3.)Pyramid\n4.)Square\n5.)Parallelogram'))
for (let r=1;r<=k;r++){
    let pattern='';
    if (op === 1){ //Right Triangle
        for(let c=0;c<r;c++){
            pattern+='*'
        }
    }
    else if (op === 2){ //Reverse Traingle
        for(let c=k;c>r;c--){
            pattern+='*'
        }
    }
    else if (op === 3){ //Pyramid
        for(let s=k;s>r;s--){
            pattern+='';//spacing(rows)
        }
        for(let c=1;c<=2*r-1;c++){
            pattern+='*'//Stars 
        }
    }
    else if (op === 4){//Square
        for(let c=1;c<=k;c++){
            pattern+='*';
        }
    }
    else if(op === 5){ //Parallelogram
        for(let s=k;s>r;s--){
            pattern+=''
        }
        for(let c=1;c<=k;c++){
            pattern+='*'
        }
    }
    console.log(pattern);
}



