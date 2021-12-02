//Hämta elementen
let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");

//Sätt dit värdet med nyckeln och värdet(Användarnamnet & Lösenordet)
    localStorage.setItem("user","janne");
    localStorage.setItem("passw","test");
//Hämta data från localStorage
    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");
//Hämta elementet för medelandet under login
    let message = document.querySelector(".message");
//fixa så ifall rätt användare loggar in "bra" och om fel lösenord "invalid" 
submit.addEventListener("click", function(){
    if(user == txtuser.value && pass == txtpass.value){
        message.innerHTML = "login Successfull!";
    }else{
        message.innerHTML = "username or password is invalid";
    }

})
