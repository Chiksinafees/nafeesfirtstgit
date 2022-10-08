const btn=document.querySelector('.btn')
const inputname=document.querySelector('#name')
const inputemail=document.querySelector('#email')
const inputpass=document.querySelector('#password')
const itemList = document.getElementById('items');

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const obj={name:inputname.value,email:inputemail.value,password:inputpass.value}
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showNewUserOnScreen(obj)
})

Object.keys(localStorage).forEach((key) => 
{
    const vals = JSON.parse(localStorage.getItem(key));
    showNewUserOnScreen(vals)
});

function showNewUserOnScreen(user){
    document.getElementById('name').value=''
    document.getElementById('email').value=''
    document.getElementById('password').value=''

    if(localStorage.getItem(user.email)!==null){
        removeUserFromScreen(user.email)
    }
    const parentNode=document.getElementById('output')
    const childHTML=`<li id=${user.email}> ${user.name}-${user.email}
    <button onclick=deleteUser("${user.email}")>delete</button>
    <button onclick=editUser("${user.email}","${user.name}","${user.password}")>edit</button> </li>`
    parentNode.innerHTML+= childHTML
}


function deleteUser(inputemail){
    localStorage.removeItem(inputemail)
    removeUserFromScreen(inputemail)
}

function editUser(inputemail,inputname,inputpass){
    document.getElementById('name').value=inputname
    document.getElementById('email').value=inputemail
    document.getElementById('password').value=inputpass
    removeUserFromScreen(inputemail)

}

function removeUserFromScreen(inputemail){
    const pNode=document.getElementById('output')
    const childNodeToBeDeleted=document.getElementById(inputemail)
    if(childNodeToBeDeleted){
        pNode.removeChild(childNodeToBeDeleted)
    }
}




