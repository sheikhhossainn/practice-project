const suserName = document.getElementById("s-username")
const sEmail = document.getElementById("s-email")
const initialPassword = document.getElementById("s-password")
const confirmPassword = document.getElementById("c-password")
const signupButton = document.getElementById("signup-btn")

const usersList = JSON.parse(localStorage.getItem("users")) || []

signupButton.addEventListener("click", (event)=>{
    event.preventDefault()

    const username = suserName.value
    const email = sEmail.value
    const ipass = initialPassword.value
    const cpass = confirmPassword.value
    
    accountChecker(username, email, ipass, cpass)
})


const accountChecker = (username, email, ipass, cpass)=>{

    const userExists = usersList.some(user => user.email === email)

    if(userExists){
        alert("Account with this email already exists! 😒")
    }
    else if(ipass !== cpass){
        alert("Passwords do not match! 😒");
    }
    else{
        const newUser = {
            username: username,
            email: email, 
            password: ipass
        }

        usersList.push(newUser);
        localStorage.setItem("users", JSON.stringify(usersList))

        alert("Registration successful! 🎉");

        window.location.href = "login.html";
    }
}