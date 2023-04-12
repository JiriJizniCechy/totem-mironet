var form1 = [];


//ZMĚNA OUTPUT 3
const clickedButton = localStorage.getItem('clickedButton');
if (clickedButton === 'button1') {
    document.getElementById("textOutput3").innerHTML = "Servis počítače" ;
 
} else if (clickedButton === 'button2') {
    document.getElementById("textOutput3").innerHTML = "Servis telefonu nebo tabletu" ;

} else if (clickedButton === 'button3') {
    document.getElementById("textOutput3").innerHTML = "Servis jiného zařízení" ;

}

document.getElementById("pokracovat1").onclick = function(){

    for( let i = 1; i<=11; i++){
     if (i == 2|| i == 5 || i==9)
        {
        continue;
        }
  
        form1[i-1]=document.getElementById("textInput"+i).value
    }
    for (let a= 0; a<11; a++){
            if (a === 2 && form1[2]!==""){

            if (isNaN(form1[a])) {
                alert('IČO musí obsahovat pouze číslice');
                return;

            } else if (form1[a].length !== 8 ) {
                alert('IČO musí mít délku 8 číslic bez mezer');
                return;
            }

            if (a === 5 && form1[5]!==""){
                let regex = /^CZ\d{8}$/;
                if(!regex.test(form1[a]))
                {
                    window.alert("Neplatný DIČ");
                     return; 
                }
            } 
        } 
        if (a == 2 || a == 5)
            {
            continue; // skip a=2 and a=5
            }

        if(form1[a] === "")
            {
            alert('Vyplňte prosím všechny povinná pole (*)');
            return; 
            }
            
        if(a === 0){
            let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;
            if(!regex.test(form1[a]))
            {
                window.alert("Neplatná emailová adresa");
                    return; 
            }
        }

        if (a === 3) {
            form1[a] = form1[a].replace((/\s+/g), "");
            if (isNaN(form1[a])) {
                alert('Telefonní číslo musí obsahovat pouze číslice');
                return;

            } else if (form1[a].length !== 9) {
                alert('Telefonní číslo musí mít délku 9 číslic');
                return;
            }
        }
        
        if(a === 6){
            let regex = /\b[a-zA-Z]+\s\d+\b/;
            if(!regex.test(form1[a])){
                window.alert("Neplatně zadaná Ulice a č.p.");
                return; 
            }
        }
     
        if (a === 10){
                form1[a] = form1[a].replace((/\s+/g), "");
            if (isNaN(form1[a])) 
            {
               
                window.alert('PSČ musí obsahovat pouze číslice');
                return;
            } else if (form1[a].length !== 5) {
                window.alert('PSČ musí mít délku 5 číslic bez mezer');
                return;
            }
        } 
        }
    


    document.getElementById("textOutput1").innerHTML = "Email: " + form1[0] + "<br>" + "Telefon: " + form1[3];
    document.getElementById("textOutput2").innerHTML = form1[9] + "<br>" + form1[6] + "<br>" + form1[10] + 
    " " + form1[7] 



    document.getElementById("sceneform1").style.display = "none";
    document.getElementById("sceneform3").style.display = "inline";

}


document.getElementById("zpet3").onclick = function(){
    document.getElementById("sceneform3").style.display = "none";
    document.getElementById("sceneform1").style.display = "inline";
}


