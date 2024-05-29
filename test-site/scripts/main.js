const img = document.querySelector("img");
const myHeading = document.querySelector("h1");
const button = document.querySelector("button");

if(!localStorage.getItem("name")) {
    setUserName();
}
else {
    const userNmae = localStorage.getItem("name");
    myHeading.textContent = `Mozila is col, ${userNmae}`;
}

img.addEventListener("click", (e)=>{
    const src = img.getAttribute("src");
    if(src == "images/earth-image-1.jpg") img.setAttribute("src", "images/earth-image-2.jpg");
    else img.setAttribute("src", "images/earth-image-1.jpg")
})

function setUserName() {
    const userNmae = prompt("Please enter your name: ");
    if(!userNmae) setUserName();
    else {
    localStorage.setItem("name", userNmae);
    myHeading.textContent = `Mozila is col, ${userNmae}`;
    }
}

button.onclick = function() {
    setUserName();
}




