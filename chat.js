// Just starting ...
// Esther (Nel) Louw

let chatList = [];
let currentUser = "";
let currentChat = "";
let currentPos = 0;

// Add Event listeners for each button
buttonInitChat.addEventListener("click", initChat);
buttonSetUser.addEventListener("click", setUser);
buttonEnterChat.addEventListener("click", enterChat);

//Initiate chat
// Clear previous chats
function initChat() {
  let chatList = [];
  let currentUser = "";
  let currentChat = "";
  let currentPos = 0;
}

//Set current user
function setUser() {
  currentUser = prompt("Enter User name");
  console.log(currentUser);
}

//Enter chat text
function enterChat() {
  currentChat = prompt("Enter Chat");
  console.log(currentChat);
  chatList.push(currentUser + currentChat);
}

//display chats
function displayChat() {
  console.table(chatList);
}
