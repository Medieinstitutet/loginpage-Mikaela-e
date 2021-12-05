
//Hämta elementen
let txtuser = document.querySelector(".txtuser");
let txtpass = document.querySelector(".txtpass");
let button1 = document.querySelector(".button1");

//localStorage, nyckeln och värdet(Användarnamnet & Lösenordet)
localStorage.setItem("user","janne");
localStorage.setItem("pass","test");
//Hämta data från localStorage
    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");
//Hämta elementet för medelandet under login
    let message = document.querySelector(".message");
  
 
//knapp för inloggning..
 //Om användaren godkäns så visas Välkommen!...
    
           button1.addEventListener("click", function(){     
    if (user == txtuser.value && pass == txtpass.value ){
            let main = document.getElementById("main")
            main.innerText = "Välkommen" + " " + localStorage.getItem("user", ""); 
            main.style.fontSize = "30px";
            

            //Skapa knapp för utloggning..
            let logOut = document.createElement("button")
            logOut.innerText="Logga ut";
            logOut.style.display = "block";
            main.append(logOut)

           //knappens utloggning...
           logOut.addEventListener("click", function(){
            localStorage.clear();
            location.reload(); 
            
               })    
               //Om användaren inte finns, meddelande...
    }else{
        message.innerHTML = "username or password is invalid"; 
       
        
    }
    
})

//Koden ej klar, kunde inte få till att den inte loggas ut när man laddar om sidan..
//Kan bero på att jag inte använde mig av "objekt" och function från första början.