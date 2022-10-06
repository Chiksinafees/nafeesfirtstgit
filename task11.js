const btn=document.querySelector('.btn')
const inputname=document.querySelector('#name')
const inputemail=document.querySelector('#email')
const inputpass=document.querySelector('#password')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let obj={name:inputname.value,email:inputemail.value,password:inputpass.value}
    localStorage.setItem('userdetail', JSON.stringify(obj))
    
})

