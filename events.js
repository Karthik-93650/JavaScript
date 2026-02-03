//Events by onclick/click method
// document.getElementById('hi').addEventListener('click',()=>{
//     alert('You clicked on the Login button Mate!!!');
    
// })
// document.getElementById('hi').style.color='Orange';
// document.getElementById('hi').style.backgroundColor='blue';

// //Events by onmouseover/mouseover method
// document.querySelector('p').addEventListener('mouseover',
// function(){
//     alert('Welcome to my page');
// })

//Events by onmouseout/mouseout method
// document.querySelector('p').addEventListener('mouseout',
// function(){
//     alert('Exit to my page');
// })

//Events taking info from user by onchange/change method
// document.getElementById('info').addEventListener('change',()=>{
//     alert(info.value);
//     display.innerHTML=`User Entered Info:${info.value}`;

// }
// );

//otp generator on browser by clicking the button
document.getElementById('otp').addEventListener('click',function(){
    //4 digit OTP
    let OTP =Math.floor(1000+Math.random()*9000);

    document.getElementById('display').innerHTML=`Entered OTP:${OTP}`
    document.getElementById('display').style.color='Orange';
    document.getElementById('display').style.backgroundColor='blue';
    document.getElementById('otp').style.color="Red";
    document.getElementById('otp').style.backgroundColor='black'
});
