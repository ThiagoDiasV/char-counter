const text = document.getElementById('text');
const button = document.getElementById('button');
const radioOptions = document.getElementsByClassName('form-check-input');
const input = document.getElementById('result');

button.addEventListener('click', function (event) {
  event.preventDefault();

  for (let i = 0; i < radioOptions.length; i++) {
    if (radioOptions[i].checked) {
      optionSelected = radioOptions[i].value;
      switch (optionSelected) {
        case '1':
          let resultWithSpaces = text.value.trim().length;
          input.value = `${resultWithSpaces} caracteres`;
          break;
        case '2':
          let resultWithoutSpaces = text.value.trim().split(' ').join('')
            .length;
          input.value = `${resultWithoutSpaces} caracteres`;
          break;
      }
    }
  }

  //   input.value = `${text.value.trim().length} caracteres`;
});
