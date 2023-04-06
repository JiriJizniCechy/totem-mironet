
const form1 = [];
document.getElementById("pokracovat1").onclick = function() {
        for( let i = 1; i<=8; i++){
            
            if (i == 3|| i == 6)
                {
                continue; // skip a=2 and a=5
                }

            form1[i-1]=document.getElementById("textInput"+i).value
        }
        for (let a= 0; a<11; a++){
       

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

            if(a === 4){
                let regex = /\b[a-zA-Z]+\s\d+\b/;
                if(!regex.test(form1[a])){
                    window.alert("Neplatně zadaná Ulice a č.p.");
                    return; 
                }
            }
        
            if (a === 6) {
                form1[a] = form1[a].replace((/\s+/g), "");
                if (isNaN(form1[a])) {
                    alert('Telefonní číslo musí obsahovat pouze číslice');
                    return;

                } else if (form1[a].length !== 9) {
                    alert('Telefonní číslo musí mít délku 9 číslic');
                    return;
                }
            }
            
            if (a === 1){
                form1[a] = form1[a].replace((/\s+/g), "");
                if (isNaN(form1[a])) {
                    alert('PSČ musí obsahovat pouze číslice');
                    return;
                } else if (form1[a].length !== 5) {
                    alert('PSČ musí mít délku 5 číslic');
                    return;
                }
            } 
        }
    
        console.log(form1)
        document.getElementById("sceneform1").style.display = "none";
        document.getElementById("sceneform2").style.display = "inline";
        document.getElementById("nadpisvraceni").innerHTML = "Doplňující informace";
}



const form2 = []
document.getElementById("pokracovat2").onclick = function() {
    const formSelect = document.querySelector('select[name="formname"]');
    form2[0] = formSelect.value;    
    form2[1]=document.getElementById("textInput10").value

    for (let a= 0; a<2; a++){
    if(form2[a] === "")
        {
        alert('Vyplňte prosím všechny povinná pole');
        return; 
        }
    }
    console.log(form2)
    document.getElementById("sceneform2").style.display = "none";
    document.getElementById("sceneform3").style.display = "inline";
    document.getElementById("textOutput2").innerHTML = form2[0];
    document.getElementById("textOutput3").innerHTML = form2[1];
    document.getElementById("textOutput4").innerHTML = form1[0] + "<br>" + form1[6];
    document.getElementById("textOutput5").innerHTML = form1[3] + "<br>" + form1[4] + "<br>" 
    + form1[1] + " " + form1[7]
    document.getElementById("nadpisvraceni").innerHTML = "Souhrn reklamace"    
}


document.getElementById("zpet2").onclick = function(){
    document.getElementById("sceneform2").style.display = "none";
    document.getElementById("sceneform1").style.display = "inline";
    document.getElementById("nadpisvraceni").innerHTML = "Dodací adresa";
}

document.getElementById("zpet3").onclick = function(){
    document.getElementById("sceneform3").style.display = "none";
    document.getElementById("sceneform2").style.display = "inline";
    document.getElementById("nadpisvraceni").innerHTML = "Doplňující informace";
}