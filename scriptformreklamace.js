
var form1 = [];


var cisloFaktury = localStorage.getItem('cisloFaktury');
var kodPolozky = localStorage.getItem('kodPolozky');

document.getElementById("kodPolozky").innerHTML = "Kód položky: "+ kodPolozky;
document.getElementById("cisloFaktury").innerHTML = "Koupeno: 13.7 2022, Objednávka číslo: "+ cisloFaktury;

document.getElementById("pokracovat1").onclick = function() {


        for( let i = 1; i<=8; i++){
            
            if (i== 3|| i == 6)
                {
                continue;
                }
           
                

            form1[i-1]=document.getElementById("textInput"+i).value
        }



        for (let a= 0; a<9; a++){
           /* if (a === 2 && form1[2]!==""){

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
    */


            if (a == 2 || a == 5)
                {
                continue; // skip a=2 and a=5
                }
                
            if(form1[a] === "")
                {
                alert('Vyplňte prosím všechny povinná pole (*)');
                return; 
                }

            if (a == 2 || a == 5)
                {
                continue; // skip a=3 and a=5
                }

            if(a === 0){
                let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/;
                if(!regex.test(form1[a]))
                {
                    window.alert("Neplatná emailová adresa");
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

            if(form1[a] === "")
                {
                alert('Vyplňte prosím všechny povinná pole (*)');
                return; 
                }
        }

        console.log(form1)
        document.getElementById("sceneform1").style.display = "none";
        document.getElementById("sceneform2").style.display = "inline";
        document.getElementById("nadpisreklamace").innerHTML = "Doplňující informace";
    }



var form2 = []
document.getElementById("pokracovat2").onclick = function() {
    const formSelect = document.querySelector('select[name="formname"]');
    form2[0] = formSelect.value;    
    for( let i = 10; i<=11; i++){
        form2[i-9]=document.getElementById("textInput"+i).value
        }
    
    for (let a= 0; a<3; a++){
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
    document.getElementById("textOutput6").innerHTML = form2[2]
    document.getElementById("nadpisreklamace").innerHTML = "Souhrn reklamace"
    }


document.getElementById("zpet2").onclick = function(){
    document.getElementById("sceneform2").style.display = "none";
    document.getElementById("sceneform1").style.display = "inline";
    document.getElementById("nadpisreklamace").innerHTML = "Dodací adresa";
}

document.getElementById("zpet3").onclick = function(){
    document.getElementById("sceneform3").style.display = "none";
    document.getElementById("sceneform2").style.display = "inline";
    document.getElementById("nadpisreklamace").innerHTML = "Doplňující informace";
}