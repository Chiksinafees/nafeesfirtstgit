let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
//let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

// Filter event
//filter.addEventListener('keyup', filterItems);

// Add item
function addItem(event){
  event.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value

  // Create new li element
  let li = document.createElement('li')

  // Add class
  li.className = 'list-group-item'

  // Add text node with input value
  li.appendChild(document.createTextNode(newItem))

  // Create del button element
  let deleteBtn = document.createElement('button')
  let editBtn=document.createElement('button')

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
  editBtn.className = 'btn btn-danger btn-sm float-right edit'
  
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'))
  editBtn.appendChild(document.createTextNode('E'))
  // Append button to li
  li.appendChild(deleteBtn)
  li.appendChild(editBtn)


  // Append li to list
  itemList.appendChild(li)
  itemList.appendChild(li)
}

// Remove item
function removeItem(event){
  if(event.target.classList.contains('delete')){
    if(confirm('do you want to delete?')){
      var li = event.target.parentElement
      itemList.removeChild(li)
    }
  }
}


