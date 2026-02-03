//Math functions
var a=12.5 
console.log(Math.ceil(a)); //13
console.log(Math.floor(a)); //12

var b=20.5
console.log(Math.round(b)); //21

var b=20.9
console.log(Math.round(b)); //21


var b=20.1
console.log(Math.round(b)); //20

console.log(Math.random());// random choice is beteen 0 to 1 
console.log(Math.PI); //3.141592653589793
console.log(Math.max(10,50,78,30,40,-1,-78,-54)); //78
console.log(Math.min(10,50,78,30,40,-1,-78,-54)); //-78
console.log(Math.pow(2,5));//32
console.log(Math.sqrt(25,2)); //5

//OTP Generator->+1000->ensures 4 digit,*9000->range control,Math.floor()->removes decimal
let otp = Math.floor(1000+Math.random()*9000);
console.log("Your OTP is:",otp);

//Users Choice
let digits = Number(prompt("Enter OTP digits(4 or 6:)"));
let otp1;

if (digits === 4){
    otp1 = Math.floor(1000+Math.random()*9000);
}else if(digits === 6){
    otp1 = Math.floor(100000+Math.random()*900000);
}else{
    console.log("Invalid Choice");
    
}
console.log("Your OTP is:",otp1);


//String Methods
// let c="Codegnan , Frontend";
// console.log(c.at(4));
// console.log(c.includes('F'));
// console.log(c.endsWith('d'));
// console.log(c.toLowerCase());
// console.log(c.toUpperCase());
// console.log(c.repeat(2));
// console.log(c.replace(',','-'));
// console.log(c.length);
// console.log(c.trim());
// console.log(c.slice(1,3));//od
// console.log(c.split(''));

//vowels,consinent;
let str = "Codegnan frontend";
let v=0;
let c=0;
str=str.toLowerCase();

for(let i=0;i<str.length;i++){
    let ch=str[i];

    if(ch>='a' && ch<='z'){
        if (ch === 'a' ||ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            v++;
        }else{
            c++;
        }
    }
}
console.log('Vowels',v);
console.log('Consonents',c);

//Palindrome Check;
let w = 'Madam';
let r="";

for(let i=w.length-1;i>=0;i--){
    r+=w[i];
}
if (w === r){
    console.log(w+" is Palindrome");
    
}else{
    console.log(w+" is Not Palindrome");
    
}

//reversing of the string
let str1="Codegnan"
let rev ="";

for(let i = str1.length-1;i>=0;i--){
    rev+=str1[i];
}
console.log("Reversed String",rev);

//Anagrams Checker;
let s1="listen";
let s2="silent";

if(s1.length !== s2.length){
    console.log("Not Anagram");
    
}else{
    let count1 = {};
    let count2 = {};

    for(let i=0;i<s1.length;i++){
        let ch1=s1[i];
        let ch2=s2[i];

        count1[ch1]= (count1[ch1] || 0) + 1;
        count2[ch2] =(count2[ch2] || 0) + 1;
    }

    let isAnagram = true;

    for(let key in count1){
        if(count1[key] !== count2[key]){
            isAnagram=false;
            break;
        }
    }
    if(isAnagram){
        console.log("Anagrams");
        
    }else{
        console.log("Not Anagrams");
        
    }
}

