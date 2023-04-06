
var link = document.querySelector('a[href="endsite.html"]');

// add a click event listener to the link
link.addEventListener('click', function(event) {
  // prevent the default behavior of the link
  event.preventDefault();

  // get the input fields
  var cisloFakturyInput = document.getElementById('textInput');


  // get the input field values
  var cisloFaktury = cisloFakturyInput.value.trim();

  // check if the input value contains only numbers
  var numbersOnly = /^\d+$/.test(cisloFaktury);
  if (!numbersOnly) {
      alert('Číslo objednávky nebo telefonní číslo musí být složeno z číslic.');
      return;
    }
   if (cisloFaktury === '') {
        alert('Číslo faktury nesmí být prázdný.');
        return;
    }
    if (cisloFaktury.length > 9){
        alert('Číslo objednávky je dlouhé maximálně 8 číslic. Telefonní číslo je dlouhé maximálně 9 číslic bez mezer');
        return;
    }
 
  
  // if the input fields are not empty, redirect to the next page
  window.location.href = link.href;
});