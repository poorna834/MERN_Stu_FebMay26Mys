const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const message = document.getElementById("message");

form.addEventListener("submit",function(event){
    // Stopping the page reload
    event.preventDefault();


    if(username.value.trim()===""){
        message.textContent = "Username is required";
        console.log("Form blocked: no input for username");
        return;
    }
    message.textContent = "Form handled by javascript for user",username.value;
    console.log("Form Submitted with username",username.value);
});

