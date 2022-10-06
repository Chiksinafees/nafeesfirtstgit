const btn=document.querySelector('.btn')
const inputname=document.querySelector('#name')
const inputemail=document.querySelector('#email')
const inputpass=document.querySelector('#password')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    localStorage.setItem('name submitted:', inputname.value)
    localStorage.setItem('email submitted:', inputemail.value)
    localStorage.setItem('password submitted:', inputpass.value)
})

//localStorage.setItem('name','bob')