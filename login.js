const username = document.getElementById('username')
const password = document.getElementById('password')
const submit = document.getElementById('submit-btn')

submit.addEventListener('click', (event) =>{

    event.preventDefault();

    const inputName = username.value.trim();
    const inputPassword = password.value.trim();
    
    searchUser(inputName,inputPassword)
})

const searchUser = (iusername, ipassword) => {

    const users = JSON.parse(localStorage.getItem("users")) || []

    const matchedUser = users.find(u => u.username === iusername && u.password === ipassword);

    if(!matchedUser){
        alert("Wrong credentials!😒")
    }
    else{
        localStorage.setItem("loggedUser", iusername)
        window.location.href = "welcome.html"
    }
}
