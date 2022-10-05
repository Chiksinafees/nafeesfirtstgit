/*parentElement,lastelementchild,lastchild,createchild,firstelementchild,firstchild,nextsibling,
nextelementsibling,previoussibling,previouselementsibling,createelement,setAttribute,createtesxtnode,
appendchild
 */

let itemlist=document.querySelector('#items')

//parentElement
console.log(itemlist.parentElement)
itemlist.parentElement.style.backgroundColor='#f4f4f4'
console.log(itemlist.parentElement.parentElement)

//lastelementchild
console.log(itemlist.lastElementChild)
itemlist.lastElementChild.textContent='nafees 4'

//lastchild
console.log(itemlist.lastChild)

//firstelementchild
console.log(itemlist.firstElementChild)
itemlist.firstElementChild.textContent='nafees 1'

//firstchild
console.log(itemlist.firstChild)

//nextsibling
console.log(itemlist.nextSibling)

//nextelementsibling
console.log(itemlist.nextElementSibling)

//previoussibling
console.log(itemlist.previousSibling)

//previouselementsibling
console.log(itemlist.previousElementSibling)
itemlist.previousElementSibling.style.color='greenyellow'

//createelement
let newDiv=document.createElement('div')

//setAttribute
newDiv.setAttribute('title','hello div')

//create text node
let newDivText=document.createTextNode("HEllo word")

//appendchild
newDiv.appendChild(newDivText)

//Now go head and add HEllo word before Item Lister
let container=document.querySelector('header .container')
let h1=document.querySelector('header h1')
console.log(newDiv)
newDiv.style.fontSize='30px'
container.insertBefore(newDiv, h1)

//Now go head and add HEllo word before Item 1
let parent=document.getElementById("items")
parent.innerHTML='<li>HEllo word</li>'+parent.innerHTML


