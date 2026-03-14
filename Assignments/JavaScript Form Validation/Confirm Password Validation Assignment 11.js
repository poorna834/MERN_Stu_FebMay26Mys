const signupForm = document.getElementById("signupForm");
const signupPassword = document.getElementById("signupPassword");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function(event){

    event.preventDefault();

    const password = signupPassword.value;
    const confirm = confirmPassword.value;

    
    if(!password){
        message.textContent = "Password is required.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    
    if(password.length < 8){
        message.textContent = "Password must be at least 8 characters long.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

   
    if(!/[A-Z]/.test(password)){
        message.textContent = "Password must contain at least 1 uppercase letter.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    
    if(!/[a-z]/.test(password)){
        message.textContent = "Password must contain at least 1 lowercase letter.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    
    if(!/\d/.test(password)){
        message.textContent = "Password must contain at least 1 digit.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    
    if(!/[@#$%&*!]/.test(password)){
        message.textContent = "Password must contain at least 1 special character.";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    
    if(password !== confirm){
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
        confirmPassword.focus();
        return;
    }

    message.textContent = "Password validated successfully.";
    message.style.color = "green";

    console.log("Success!", { password: "***Hidden***" });

});


signupPassword.addEventListener("input", () => message.textContent = "");
confirmPassword.addEventListener("input", () => message.textContent = "");