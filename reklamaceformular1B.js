/*
var link = document.querySelector('a[href="reklamaceformular2.html"]');


// add a click event listener to the link
link.addEventListener('click', function(event) {
    event.preventDefault();
    var cisloRmaInput = document.getElementById('textInput');
  
    // get the input field values
    var cisloRma = cisloRmaInput.value.trim();

    // check if the input field is empty
    let regex = /^RA23.{6}$/;
    if(!regex.test(cisloRma)) {
      alert('Číslo RMA má 10 znaků a začíná RA23 + dalších 6 znaků');
      return;
    }
  
    // navigate to the next page only if the input field is not empty
    window.location.href = link.href;
  })
  */

  var link = document.querySelector('a[href="reklamaceformular2.html"]');
var cisloRmaInput = document.getElementById('textInput');

// add a click event listener to the link
link.addEventListener('click', function(event) {
    event.preventDefault();
    validateInput();
});

// add a keyup event listener to the input field
cisloRmaInput.addEventListener('keyup', function(event) {
    // check if the enter key was pressed
    if (event.key === 'Enter') {
        event.preventDefault();
        validateInput();
    }
});

function validateInput() {
    // get the input field values
    var cisloRma = cisloRmaInput.value.trim();

    // check if the input field is empty
    let regex = /^RA23.{6}$/;
    if(!regex.test(cisloRma)) {
      alert('Číslo RMA má 10 znaků a začíná RA23 + dalších 6 znaků');
      return;
    }
  
    // navigate to the next page only if the input field is not empty
    window.location.href = link.href;
}


