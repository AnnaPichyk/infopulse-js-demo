function bigLettersTable () {

  var arrOfLetters = document.querySelectorAll('td');
  arrOfLetters = [].slice.call(arrOfLetters);

  console.log(arrOfLetters);

  arrOfLetters.forEach(function (arrOfLetters){
    var strLetters = arrOfLetters.innerHTML;
    var bigStrLetters = strLetters.toUpperCase();
    arrOfLetters.innerHTML = bigStrLetters;
  });
};

window.onload = bigLettersTable;
