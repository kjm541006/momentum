// const clock = document.querySelector("h2#clock");

// function getClock() {
//   const date = new Date();

//   //padStart()는 string의 앞쪽에 padding을 준다. (시계 00:00 형식을 위해)
//   const hours = String(date.getHours()).padStart(2, "0");
//   const minutes = String(date.getMinutes()).padStart(2, "0");
//   const seconds = String(date.getSeconds()).padStart(2, "0");

//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock();
// setInterval(getClock, 1000);



// const clock = document.querySelector("h2#clock");


// function getClock(){
//   const date = new Date();

//   const hours = String(date.getHours()).padStart(2,"0");
//   const minutes = String(date.getMinutes()).padStart(2,"0");
//   const seconds = String(date.getSeconds()).padStart(2,"0");

//   clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// getClock();
// setInterval(getClock, 1000);


const clock = document.querySelector("h2#clock");

function getClock(){
  const date = new Date();

  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);