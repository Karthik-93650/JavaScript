//Datatypes:-
//Primitive Datatypes
let a=10.0;
console.log(a);//10.0
console.log(typeof(a));//number

let b='India';
console.log(b);//India
console.log(typeof(b));//String

let c=true;
console.log(c);//true
console.log(typeof(c));//boolean

let d=null;
console.log(d);//null
console.log(typeof(d));//object

let e;
console.log(e);//undefined
console.log(typeof(e));//undefined

let f=12564867894121135n;
console.log(f);//12564867894121135n
console.log(typeof(f));//bigint

let g=Symbol('Hi');
console.log(g);//Symbol(Hi)
console.log(typeof(g));//symbol

//Non-Primitive Datatypes
//Array
let arr=[10,20,30,40,50,'Hoy'];
console.log(arr);//(5) [10, 20, 30, 40, 50]
console.log(typeof arr);//object
console.log(arr[7]);//undefined
console.log(typeof arr[5]);//string

//Object
let obj={
    username : 'Karthik',
    place : 'VJY',
    age : 22
}
console.log(obj);//{username: 'Karthik', place: 'VJY', age: 22}
console.log(obj.place);//VJY
console.log(obj['place']);//VJY

//Datatype-Conversions(explicit conversion)
let i=10;
console.log(i);//10
console.log(typeof i);//number
let j=String(i);
console.log(j);//'10'
console.log(typeof j);//string
let k=Boolean(j);
console.log(k);//true
console.log(typeof k);//boolean

//Type-coercion(implicit conversion)
console.log(1+2);//3
console.log(1+'Hi');//1Hi
console.log('one'+'two');//onetwo
console.log(10+true);//11
console.log('one'+false);//onefalse
console.log(1+2+'hi'+'hello');//3hihello
console.log(1+2+'hi'-'hello');//NaN
console.log(1+2+'hi'-20);//NaN
console.log(1+true+'hi'-'2');//Nan
console.log(1+true+'hi'+'2');//2hi2
console.log(1+true-'hi'+'2');//NaN2

//Comparision Operators
//<,>,












