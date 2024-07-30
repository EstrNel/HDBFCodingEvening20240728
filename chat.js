// Just starting ...
// Esther (Nel) Louw

let chatList = [];
let userList = [];
let currentUser = "";
let currentChat = "";
let currentPos = 0;

// Add Event listeners for each button

buttonInitChat.addEventListener("click", initChat);
buttonSetUser.addEventListener("click", setUser);
x.addEventListener("click", displayUsers);
buttonEnterChat.addEventListener("click", enterChat);

//Initiate chat
// Clear previous chats
function initChat() {
  let chatList = [];
  let userList = [];
  let currentUser = "";
  let currentChat = "";
  let currentPos = 0;
}

//Set current user
//Add if user not in list already
function setUser() {
  currentUser = prompt("Enter User name");
  console.log(currentUser);
  let foundUser = userList.find(checkUser);
  if (foundUser) {
    console.log(`Found ${currentUser}}`);
  } else {
    userList.push(currentUser);
  }
}

function checkUser(user) {
  return user == currentUser;
}

//Display users
function displayUsers() {
  console.table(userList);
}

//Enter chat text
function enterChat() {
  currentChat = prompt("Enter Chat");
  console.log(currentChat);
  chatList.push(currentUser + ":" + currentChat);
  displayChat();
}

//display chats
function displayChat() {
  console.table(chatList);
}
