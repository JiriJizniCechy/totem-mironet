// get the link element
var link = document.querySelector('a[href="reklamaceformular2.html"]');

// add a click event listener to the link
link.addEventListener('click', function(event) {
  // prevent the default behavior of the link
  event.preventDefault();

  // get the input fields
  var cisloFakturyInput = document.getElementById('textInput');
  var kodPolozkyInput = document.getElementsByName('formname')[1];

  // get the input field values
  var cisloFaktury = cisloFakturyInput.value.trim();
  var kodPolozky = kodPolozkyInput.value.trim();

  // check if the input fields are empty
  if(cisloFaktury === "" && kodPolozky ===""){
    alert('Formulář nesmí být prázdný.');
    return;
    }
    else{
      if (cisloFaktury.length !== 10) {
        alert('Číslo faktury musí mít délku 10 znaků nebob číslic.');
        return;
    }

    if (kodPolozky === '') {
        alert('Kód položky nesmí být prázdný.');
        return;
    }  
    }
      // save the values into local storage
  localStorage.setItem('cisloFaktury', cisloFaktury);
  localStorage.setItem('kodPolozky', kodPolozky);
  
  
  // if the input fields are not empty, redirect to the next page
  window.location.href = link.href;
});