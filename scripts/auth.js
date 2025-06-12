const loginForm = document.getElementById("login-form")
const registerForm = document.getElementById("register-form")

const email = document.getElementById("email")
const password = document.getElementById("password")
const verifyPassword = document.getElementById("verify-password")
const error = document.getElementById("error")

// hard-coded user detail for testing demo purposes.
localStorage.setItem("user@mail.com", "user123")

const authenticate = (user, password) => { 
    const userPassword = localStorage.getItem(user)
    if (userPassword == password) {
        return true
    }
    return false

}

const register = (user, password) => { 
    localStorage.setItem(user, password)
    return true
}

const onError = () => { 
    email.focus()
    email.value = ""
    password.value = ""
    error.style.display = "inline"
}

if (loginForm) {

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault()

        if (authenticate(email.value, password.value)) {
            window.location = "/"
        } else {
            onError()
            // email.classList.add("error")
            // password.classList.add("error")
        }

    })
    
}

if (registerForm) {

    registerForm.addEventListener("submit", (event) => {
        event.preventDefault()
        if (password.value !== verifyPassword.value) {
            onError()
            verifyPassword.value = ""
        } else { 
            register(email.value, password.value)
            window.location = "/"
        }
    })

}