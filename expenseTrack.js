const btn=document.querySelector('.btn')
const inputexpense=document.querySelector('#expense')
const inputdescription=document.querySelector('#description')
const inputcategory=document.querySelector('#category')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const obj={expense:inputexpense.value,description:inputdescription.value,category:inputcategory.value }

    localStorage.setItem(obj.description, JSON.stringify(obj))
    showOnScreen(obj)
})

Object.keys(localStorage).forEach((key) => 
{
    const vals = JSON.parse(localStorage.getItem(key));
    showOnScreen(vals)
});

function showOnScreen(user){
    document.getElementById('expense').value=''
    document.getElementById('description').value=''
    document.getElementById('category').value=''

    const parentNode=document.getElementById('detail')
    const childHTML=`<li id=${user.description}> ${user.expense}-${user.description}-${user.category}
    <button onclick=deleteUser("${user.description}")>delete expense</button>
    <button onclick=editUser("${user.description}","${user.expense}","${user.category}")>edit expense</button> </li>`
    parentNode.innerHTML+= childHTML
} 

function deleteUser(inputdescription){
    localStorage.removeItem(inputdescription)
    removeUserFromScreen(inputdescription)
}

function editUser(inputdescription,inputexpense,inputcategory){
    document.getElementById('expense').value=inputexpense
    document.getElementById('description').value=inputdescription
    document.getElementById('category').value=inputcategory
    removeUserFromScreen(inputdescription)

}

function removeUserFromScreen(inputdescription){
    const pNode=document.getElementById('detail')
    const childNodeToBeDeleted=document.getElementById(inputdescription)
    if(childNodeToBeDeleted){
        pNode.removeChild(childNodeToBeDeleted)
    }
}
