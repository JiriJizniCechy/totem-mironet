var link = document.querySelector('a[href="vraceniformular2.html"]');

// add a click event listener to the link
link.addEventListener('click', function(event) {
    event.preventDefault();
    var cisloRmaInput = document.getElementById('textInput');
  
    // get the input field values
    var cisloRma = cisloRmaInput.value.trim();

    // check if the input value contains only numbers


    let regex = /^RA23.{6}$/i;
    if(!regex.test(cisloRma)) {
      alert('Číslo RMA má 10 znaků a začíná RA23 + dalších 6 znaků');
      return;
    }
  
  
 
    // navigate to the next page only if the input field is not empty
    window.location.href = link.href;
  })
  