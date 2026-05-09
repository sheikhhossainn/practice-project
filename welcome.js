// To get the Welcome's page H1 tag
const welcomeText = document.querySelector(".header")
const logoutButton = document.querySelector(".logout-btn")
const deleteButton = document.querySelector(".delete-btn");

const loggedUser = localStorage.getItem("loggedUser")

if(loggedUser){
    welcomeText.textContent = `Welcome back ${loggedUser}😊!`
}else{
    window.location.href = "login.html"
}

logoutButton.addEventListener("click", ()=>{
    localStorage.removeItem("loggedUser")
    window.location.href = "login.html"
})

deleteButton.addEventListener("click", ()=> {
    if(confirm("Are you sure you want to delete your account?")){
        const users = JSON.parse(localStorage.getItem("users")) || []

        const updatedUsers = users.filter(u => u.username !== loggedUser)

        localStorage.setItem("users", JSON.stringify(updatedUsers))

        localStorage.removeItem("loggedUser");
        window.location.href = "index.html";
    }
})