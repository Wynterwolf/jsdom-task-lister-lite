document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //get form
  let addToList = document.querySelector('#create-task-form')
  //get list items
  let theListItem = document.querySelector('#tasks')
  // get list
  let theList = document.querySelector('#list')


  //listen for submit 
  addToList.addEventListener('submit', function(event){
    //do not submit form
    event.preventDefault()
    // //if empty ignore it
    // if (addToList.nodeValue.length < 1) return;
    //newTask value
    let newItem = document.querySelector('#new-task-description').value
    theList.innerHTML += `<li> ${newItem} </li>`;
  })
}, false);
