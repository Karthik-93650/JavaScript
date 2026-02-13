document.querySelector('form').addEventListener('submit',
function(e){
    e.preventDefault()
    //step1:-Collecting Information from the User/Create 
    let information=document.getElementById('info').value;
    // alert(information)

    //step2:-Retrive Information(get)
    let element = document.createElement('li');//<li>Information=''</li>
    element.innerHTML=information;
    let parent=document.querySelector('ul');
    parent.appendChild(element);

    //step3:-Update Information
    let updateButton=document.createElement('button')
    updateButton.innerHTML="Done";
    element.appendChild(updateButton);

    updateButton.addEventListener('click',function(){
        element.style.textDecoration="line-through red";
    })
})