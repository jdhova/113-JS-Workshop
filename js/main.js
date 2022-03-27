const form = document.querySelector("form")
const username = document.getElementById("username")

const password = document.getElementById("password")
const confirmPassword = document.getElementById("password2")
const error = document.querySelector("form-control small")
const success = document.querySelector("form-control small2")

form.addEventListener("submit",(e) => {
    e.preventDefault()
    // check input
    checkInputs()
})

function checkInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    if(!usernameValue) 
      setError(username,"Error: Username field cannot be blank")

    if(!passwordValue) 
        setError(password,"Error: Password field cannot be blank")

    if(!confirmPasswordValue) 
            setError(confirmPassword,"Error: Confirm Password field cannot be blank")

     else {
        comparePassword()

    }
}

function setError(input,message) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    
    formControl.className = "form-control error"
    small.textContent = message
}

function setSuccess(input,message) {
    const formControl = input.parentElement
    const small2 = formControl.querySelector("small2")
    
    formControl.className = "form-control success"
    small2.textContent = message
}



function comparePassword() {

    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()
    
    if(passwordValue !== confirmPasswordValue) {
        console.log("password does not match")
        setError(password,"Error: Password does not match")
    
    } else if (passwordValue === confirmPasswordValue){
        console.log("password match")
        setSuccess(password,"Success: Password confirmed")
    }
}



