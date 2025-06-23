// Html Selection
const showPopup = document.getElementById("showPopup");
const popup = document.getElementById("popup");
const validInput = document.querySelector(".valid-input");
const icon = document.querySelector(".popup-icon");
const input = document.getElementById("inputPass")
const title = document.getElementById("message-title")
const description = document.getElementById("message-description")
const btn = document.getElementById("btn")


// Show Confirmation
function showConfirmation() {
    popup.classList.add("visible-popup")
    validInput.style.display = "none"; 
    if(input.value === "") {
       alert("Plese add Password");
       popup.classList.remove("visible-popup")
       validInput.style.display = "block"; 
    }else if(input.value <= 1000 && input.value >= 500) {
        title.innerHTML = "Awesome!";
        description.innerHTML = `Your Invitation <br> has been succesfully!`;
        btn.innerHTML = "Got it!";
        icon.style.background = "#2DD784";
        btn.style.background = "#2DD784";
        input.value ="";
    } else { 
        title.innerHTML = "Oh No!";
        description.innerHTML = `Your Invitation <br> couldn't be send!`;
        btn.innerHTML = "Go Back!";
        icon.style.background = "#E34C5E";
        btn.style.background = "#E34C5E";
        input.value = "";
    }
}
function backInput() {
    popup.classList.remove("visible-popup")
    validInput.style.display = "block"; 
}

