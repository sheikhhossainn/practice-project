// To get the Welcome's page H1 tag
const welcomeText = document.querySelector(".header")
const loggedUser = localStorage.getItem("loggedUser")
const logoutButton = document.querySelector(".logout-btn")


if(loggedUser){
    welcomeText.textContent = `Welcome back ${loggedUser}😊!`
}else{
    window.location.href = "login.html"
}

logoutButton.addEventListener("click", ()=>{
    localStorage.clear()
    window.location.href = "login.html"
})
