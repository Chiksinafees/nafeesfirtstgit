const btn=document.querySelector('.btn')
const inputname=document.querySelector('#name')
const inputemail=document.querySelector('#email')
const inputpass=document.querySelector('#password')
//const isoutput=document.querySelector('.output')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const obj={name:inputname.value,email:inputemail.value,password:inputpass.value}

    localStorage.setItem(obj.email, JSON.stringify(obj))
    showNewUserOnScreen(obj)
})

function showNewUserOnScreen(user){
    const parentNode=document.getElementById('output')
    const childHTML=`<li> ${user.name}-${user.email}-${user.password}</li>`

    parentNode.innerHTML=parentNode.innerHTML+ childHTML

}
Object.keys(localStorage).forEach((key) => 
{
    let keyes = localStorage.getItem(key);
    let vals = JSON.parse(keyes);
    let li_items = document.getElementById('output');
    let lists = `<li>${vals.name} ${vals.email} ${vals.password}</li>`;
    li_items.innerHTML += lists;
});