const title = document.querySelector(".hello h1");

console.dir(title);

function clickListener() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === "white") {
    newColor = "blue";
  } else {
    newColor = "white";
  }
  console.log("Hello가 클릭됨");
  title.style.color = newColor;
}

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is leave";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("복사됨");
}

function handleWindowOffline() {
  alert("WIFI 연결 안됨");
}

function handleWindowOnline() {
  alert("WIFI 연결 됨");
}

// 'title.onclick = clickListener' 와 아래 코드는 같다;
title.addEventListener("click", clickListener);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
