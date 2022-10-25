const btn=document.querySelector(".btn")
const inputname=document.querySelector('#name')
const inputemail=document.querySelector('#email')
const inputpass=document.querySelector('#password')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const obj={name:inputname.value,email:inputemail.value,password:inputpass.value}

    axios.post('https://crudcrud.com/api/d41d90e23b5b4795ba08f723189d7c0b/appointmentData',obj)
     .then((response)=>{
        showUserOnScreen(response.data)
        console.log(response)
     })
     .catch(err=>console.log(err))  
})

Object.keys(localStorage).forEach((key)=>{
    
    axios.get('https://crudcrud.com/api/d41d90e23b5b4795ba08f723189d7c0b/appointmentData')
    let vals=JSON.parse(localStorage.getItem(key))
    showUserOnScreen(vals)
})

function showUserOnScreen(user){

    document.getElementById('name').value=''
    document.getElementById('email').value=''
    document.getElementById('password').value=''

    if(localStorage.getItem(user.email)!==null ){
        console.log(user.email)
        removeUserFromScreen(user.email)
    }

    const parentNode=document.getElementById("option")
    const childHTML= `<li id= ${user.email}>${user.name}-${user.email}
    <button onclick= deleteUser("${user.email}")>delete</button>
    <button onclick=editUser('${user.email}','${user.name}','${user.password}')>edit</button></li>`
    parentNode.innerHTML+=childHTML
}

function deleteUser(emaill)
{
    localStorage.removeItem(emaill)
    removeUserFromScreen(emaill)
}

function editUser(emaill,namee,passwordd)
{
    document.getElementById('name').value=namee
    document.getElementById('email').value=emaill
    document.getElementById('password').value=passwordd
    removeUserFromScreen(emaill)
}

function removeUserFromScreen(deleteemail)
{
    const parentNodee=document.getElementById('option')
    const childNodeToBeDelete=document.getElementById(deleteemail)
    if(childNodeToBeDelete)
    {
        parentNodee.removeChild(childNodeToBeDelete)
    }
}