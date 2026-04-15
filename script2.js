

document.querySelector("form").addEventListener("submit", function(event) {
    let nume = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let fileInput = document.getElementById("file");
    event.preventDefault();
    let div = document.querySelector(".container")
    let nu = document.getElementById("no");
    if(nu.checked) {
        div.innerHTML = "Thank you for your message, " + nume.value  + "!" + "<br/>"+ "Your email: " + email.value + "<br/>" + "Your message: " + message.value + "<br/>" + "Uploaded file: " + (fileInput.files.length > 0 ? fileInput.files[0].name : "No file uploaded") + "<br/>" +  "We are sorry to hear that you were not pleased with our service. We will strive to improve and provide a better experience in the future." + "</p>";
    }else{
        div.innerHTML = "Thank you for your message, " + nume.value  + "!" + "<br/>"+ "Your email: " + email.value + "<br/>" + "Your message: " + message.value + "<br/>" + "Uploaded file: " + (fileInput.files.length > 0 ? fileInput.files[0].name : "No file uploaded") + "<br/>" + "We are glad to hear that you were pleased with our service. We appreciate your feedback and will continue to work hard to maintain and improve our standards." + "</p>"
    }
        if(fileInput.files.length > 0) {
        let imagine = document.createElement("img");
        imagine.src = URL.createObjectURL(fileInput.files[0]);
        div.appendChild(imagine);
    }
});