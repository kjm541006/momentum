// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");

// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value;
//   localStorage.setItem(USERNAME_KEY, username);
//   paintGreetings(username);
// }

// function paintGreetings(username) {
//   greeting.innerText = `Hello ${username}`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if (savedUsername === null) {
//   // show the form
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//   //show the greetings
//   paintGreetings(savedUsername);
// }




// const loginForm = document.querySelector("form#login-form");
// const loginInput = loginForm.querySelector("input");
// const greeting = document.querySelector("h1#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// const USERNAME_KEY = "username";

// function onLoginSubmit(event){
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY, username);
//     greetingUser(username);

// }

// function greetingUser(username){
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);


// if(savedUsername === null){
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
// }
// else{
//     greetingUser(savedUsername);
// }




const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("h1#greeting");

const savedUsername = localStorage.getItem("username");

function loginFormSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greetingUser();
}

function greetingUser(){
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${savedUsername}`;

}

if(savedUsername === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", loginFormSubmit);
}
else{
    greetingUser();
}