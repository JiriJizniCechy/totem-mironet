
const button1 = document.getElementById('pocitacServis');
const button2 = document.getElementById('telefonServis');
const button3 = document.getElementById('zarizeniServis');

button1.addEventListener('click', () => {
    localStorage.setItem('clickedButton', 'button1');
});

button2.addEventListener('click', () => {
    localStorage.setItem('clickedButton', 'button2');
});

button3.addEventListener('click', () => {
    localStorage.setItem('clickedButton', 'button3');
});
