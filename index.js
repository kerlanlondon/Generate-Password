const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

//Random Password Character Funtion 
function randomNumber() {
    let ranNumber = Math.floor(Math.random() * characters.length )
    return characters[ranNumber]
}

//Random Password String Funtion 
let passwordString = function () {
    let string = "";
    for(let i = 0; i < 16; i++) {
        string += randomNumber();
    }
    return string
}


//Generate Password Function 

function generatePassword() {
    let leftPassword = document.querySelector(".lft");
 let rightPassword = document.querySelector(".rht");
 leftPassword.textContent = passwordString();
 rightPassword.textContent = passwordString();
}
 



