const btn=document.querySelector(".btn")
const inputname=document.querySelector('#name')
const inputemail=document.querySelector('#email')
const inputpass=document.querySelector('#password')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const obj={name:inputname.value,email:inputemail.value,password:inputpass.value}

    axios.post('https://crudcrud.com/api/89f1873aa6464a47aaacf33733ccbe43/appointmentData',obj)
     .then((response)=>{
        showUserOnScreen(response.data)
        console.log(response)
     })
     .catch(err=>console.log(err))  
})

window.addEventListener("DOMContentLoaded",()=>{
    
axios.get("https://crudcrud.com/api/89f1873aa6464a47aaacf33733ccbe43/appointmentData")
    .then((response)=>{
        for(let i=0;i<response.data.length;i++)
        {
            showUserOnScreen(response.data[i]) 
        }
    }).catch((err)=>{
        console.log(err)
    })
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
    const childHTML= `<li id= ${user._id}>${user.name}-${user.email}
    <button onclick= deleteUser("${user._id}")>delete</button>
    <button onclick=editUser('${user._id}','${user.name}','${user.password}')>edit</button></li>`
    parentNode.innerHTML+=childHTML
}

function deleteUser(userId)
{
     axios.delete(`https://crudcrud.com/api/89f1873aa6464a47aaacf33733ccbe43/appointmentData/${userId}`)
           .then((response)=>{
            removeUserFromScreen(userId)
           })
           .catch((err)=>console.log(err))  
   // console.log(axios.get)
     
}

function editUser(emaill,namee,passwordd)
{
    document.getElementById('name').value=namee
    document.getElementById('email').value=emaill
    document.getElementById('password').value=passwordd
    removeUserFromScreen(emaill)
}

function removeUserFromScreen(userId)
{
    const parentNodee=document.getElementById('option')
    const childNodeToBeDelete=document.getElementById(userId)
    if(childNodeToBeDelete)
    {
        parentNodee.removeChild(childNodeToBeDelete)
    }
}