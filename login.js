let users = [
    {
        id: 1,
        name: "Shahi",
        password: "s1234"
    },
    {
        id: 2,
        name: "Humaira",
        password: "h1234"
    },
    {
        id: 3,
        name: "Usha",
        password: "u1234"
    }
]

const username = document.getElementById('username')
const password = document.getElementById('password')
const submit = document.getElementById('submit-btn')

submit.addEventListener('click', (event) =>{

    event.preventDefault();

    const inputName = username.value;
    const inputPassword = password.value;
    searchUser(inputName,inputPassword)
    
    console.log()
})

const searchUser = (iusername, ipassword) => {

    const matchedUser = users.find(u => u.name === iusername && u.password === ipassword);

    if(!matchedUser){
        alert("Wrong credentials!😒")
    }
    else{
        localStorage.setItem("loggedUser", iusername)
        window.location.href = "welcome.html"
    }
}
