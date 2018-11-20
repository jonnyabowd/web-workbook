'use strict';

document.addEventListener("DOMContentLoaded", function() {

  // call these functions on DOM load
  initialItemCount();
  createNewAddField();
  addRemoveBtnToList();
  updateItemCount();
  updatedListCount();

});

// ADD initial h2 with cart count
function initialItemCount(){
  let count = document.getElementsByTagName('ul');
  let newh2 = document.createElement("h2");
  newh2.setAttribute('id', 'cart-count');
  document.getElementById("title").appendChild(newh2);
}

// UPDATE h2 with cart count
function updateItemCount(){
  let count = document.getElementById('shoppingList');
  return "You have " + count.children.length + " items in your shopping cart.";
}
function updatedListCount(){
  let update = updateItemCount();
  let x = document.getElementById('cart-count');
  x.innerHTML = update;
}

// add text field and button
function createNewAddField(){
  var newinput = document.createElement('input');
  newinput.setAttribute("id", 'item-text');
  document.getElementsByTagName('ul')[0].after(newinput);
  var inputField = document.getElementById('item-text');
  inputField.setAttribute("placeholder", "Add your shit here");

  let newbutton = document.createElement('button');
  newbutton.setAttribute("id", 'add-button');
  document.getElementById('item-text').after(newbutton);
  newbutton.innerHTML = 'add this shit';
  newbutton.onclick = addItemToList;
}

// addItemToList();
function addItemToList(){
  let newli = document.createElement('li');
  let userInput = document.getElementById('item-text').value;
  newli.innerHTML = userInput;
  document.getElementById('shoppingList').appendChild(newli);
  document.getElementById('item-text').value = '';
  addRemoveBtn(newli);
}

// add remove button
function addRemoveBtn(appendElement){
  let removebutton = document.createElement('button');
  removebutton.setAttribute('id', 'remove-button');
  removebutton.innerHTML = 'Remove this shit';
  appendElement.appendChild(removebutton);
  removebutton.onclick = deleteItem;
  // run UPDATE h2 function
  updatedListCount();
}

// add remove button to list items
function addRemoveBtnToList(){
  let list = document.getElementById('shoppingList');
  console.log(list)
  for(let i = 0; i < list.children.length; i++){
    addRemoveBtn(list.children[i]);
  }
}

// delete remove button
function deleteItem(){
  this.parentNode.remove(this);
  // run UPDATE h2 function
  updatedListCount();
}