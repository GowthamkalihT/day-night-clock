const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  const session = hour >= 12 ? "AM" : "PM";

  hour = hour % 12 || 12;
  time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(
    sec
  )} ${session}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return n < 10 ? "0" + n : n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  hour = 11;

  if (hour < 12) {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2018/11/09/09/27/dawn-3804124__340.jpg')";
    // document.body.style.color = "green";
    greeting.innerText = "Good Morning,";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/05/10/21/09/palm-trees-2301981_960_720.jpg')";
    greeting.innerText = "good afternoon,";
  } else {
    document.body.style.backgroundImage =
      "url('https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546__340.jpg')";
    document.body.style.color = "white";
    greeting.innerText = "good Night";
  }
}

// sessionStorage.setItem("date", "hi welcome");

// localStorage.setItem("name", "gowtham");

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode === 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    } else {
      localStorage.setItem("name", e.target.innerText);
    }
  }
}

function setFocus(e) {
  if (e.type === "keypress") {
    if (e.keyCode === 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    } else {
      localStorage.setItem("focus", e.target.innerText);
    }
  }
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name.innerText = "[enter your name]";
  } else {
    name.innerText = localStorage.getItem("name");
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.innerText = "[Enter focus]";
  } else {
    focus.innerText = localStorage.getItem("focus");
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

showTime();
setBgGreet();
getName();
getFocus();
