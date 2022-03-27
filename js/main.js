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


    if(usernameValue) 
      
    setSuccess(username,"Success: confirmed"),
    comparePassword()
    
    if(passwordValue.length>0) 
    setSuccess(password,"Success: Success Confirmed"),
    comparePassword()

    if(confirmPasswordValue.length>0) 
    setSuccess(confirmPassword,"Success: Success Confirmed"),
    comparePassword()

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

function setSuccess(input) {
    const formControl = input.parentElement  
    formControl.className = "form-control success"
    // this totally replaced the class when form is submitted
   
}



function comparePassword() {

    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()
    
    if(passwordValue !== confirmPasswordValue) {
        console.log("password does not match")
        setError(password,"Error: Password does not match")
        setError(confirmPassword,"Error: Password does not match")
    
    } else if (passwordValue === confirmPasswordValue && passwordValue.length > 0) {
        console.log("password match")
        setSuccess(password,"Success: Password confirmed")
    }
}



