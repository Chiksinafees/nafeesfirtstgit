const btn=document.querySelector(".btn")
const inputexp=document.querySelector("#expense")
const inputdes=document.querySelector("#description")
const inputcat=document.querySelector("#category")

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let obj={expense:inputexp.value, description:inputdes.value, category:inputcat.value}

    axios.post('https://crudcrud.com/api/cbd865b758ac4ab0afd8c1755dff922a/ExpenseData',obj)
    .then((res)=>{
        showUserOnScreen(res.data)
    })
    .catch((err)=>console.log(err))
})


window.addEventListener("DOMContentLoaded",()=>{

    axios.get("https://crudcrud.com/api/cbd865b758ac4ab0afd8c1755dff922a/ExpenseData")
    .then((res)=>{
        for(let i=0; i<res.data.length; i++)
          {
              showUserOnScreen(res.data[i])
          }
    }).catch((err)=>{
        console.log(err)
    })
})


function showUserOnScreen(user)
 {
    document.getElementById("expense").value=''
    document.getElementById("description").value=''
    document.getElementById("category").value=''


    const parentNode=document.getElementById('output')
    const childHTML=`<li id=${user._id}>${user.expense}-${user.description}-${user.category}
    <button onclick=deleteExpense('${user._id}')>Delete Expense</button>
    <button onclick=EditExpense('${user._id}','${user.expense}','${user.description}','${user.category}')>Edit Expense</button></li>`
     parentNode.innerHTML+=childHTML
}

 
function deleteExpense(userId)
  {
     axios.delete(`https://crudcrud.com/api/cbd865b758ac4ab0afd8c1755dff922a/ExpenseData/${userId}`)
     .then((res)=>{
         removeUserFromScreen(userId)
      })
     .catch((err)=>console.log(err))
  }



function EditExpense(userId,expensee,descriptionn,categoryy) 
  {
     document.getElementById('expense').value=expensee
     document.getElementById('description').value=descriptionn
     document.getElementById('category').value=categoryy  
     deleteExpense(userId)
  }



function removeUserFromScreen(userId)
  {
     const parentNode=document.getElementById('output')
     const childNodeToBeDel=document.getElementById(userId)
     if(childNodeToBeDel)
       {  
          parentNode.removeChild(childNodeToBeDel)
       }
  }

