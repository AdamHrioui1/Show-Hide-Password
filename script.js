const password = document.querySelector(".password");
const eye = document.querySelector(".fa-eye");

eye.addEventListener("click", e => {
    if(password.type === "password"){
        password.setAttribute("type", "text");
        eye.setAttribute("class", "fas fa-eye-slash");
    }
    else{
        password.setAttribute("type", "password");
        eye.setAttribute("class", "fas fa-eye")
    }
})