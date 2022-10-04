/*let items=document.getElementsByClassName('list-group-item')
items[1].style.backgroundColor='green' */


let items2=document.querySelector(".list-group-item:nth-child(2)")
items2.style.color='green'

let odd=document.querySelectorAll('li:nth-child(odd)')
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green'
}


