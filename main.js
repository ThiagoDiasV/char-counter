const text = document.getElementById('text');
const textWithoutSpaces = document.getElementById('without-spaces');
const textWithSpaces = document.getElementById('with-spaces');
const textWords = document.getElementById('words');
const textLines = document.getElementById('lines');

text.addEventListener('input', function (event) {
  textWithoutSpaces.innerText = text.value.trim().split(' ').join('').length;
  textWithSpaces.innerText = text.value.trim().length;
  textWords.innerText = text.value.trim().split(/\s+/).length;
  textLines.innerText = text.value.trim().split('\n').length;
});
