// Esther (Nel) Louw
// Something came up and was not able to start on time

let chatList = [];
let userList = [];
let currentUser = "";
let currentChat = "";

//Make use of session storage to store the values.
//sessionStorage.setItem("ssChatList", chatList);
//sessionStorage.setItem("ssUserList", userList);

// Add Event listeners for each button
buttonSetUser.addEventListener("click", setUser);
buttonEnterChat.addEventListener("click", enterChat);

//Resume chat
function resumeChat() {
  let currentUser = "";
  let currentChat = "";
  let chatList = sessionStorage.getItem("ssChatList");
  let userList = sessionStorage.getItem("ssUserList");
  displayChat();
  displayUser();
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
    sessionStorage.setItem("ssUserList", userList);
  }
  displayUser();
}

function checkUser(user) {
  return user == currentUser;
}

//display users
function displayUser() {
  document.getElementById("showCurrent").innerHTML = currentUser;
  console.table(userList);
  document.getElementById("showUsers").innerHTML = userList;
}

//Enter chat text
function enterChat() {
  currentChat = prompt("Enter Chat");
  console.log(currentChat);
  chatList.push(currentUser + ":" + currentChat + "<br>");
  sessionStorage.setItem("ssChatList", chatList);
  displayChat();
}

//display chats
function displayChat() {
  console.table(chatList);
  document.getElementById("showChat").innerHTML = chatList; //JSON.stringify(chatList);
}
