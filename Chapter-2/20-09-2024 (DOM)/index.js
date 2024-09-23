function changeStyle() {
  const btnDontClickMe = document.getElementById("dont-click-me");
  btnDontClickMe.style.width = "300px";
}

// set attribute (href, link, id, class, etc)
const linkFacebook = document.querySelector("a"); // calling first element of a
linkFacebook.setAttribute("href", "https://www.facebook.com");
