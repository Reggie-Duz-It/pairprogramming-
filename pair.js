//Easy (1)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let odds = arr.filter( n => n % 2);
let evens = arr.filter( n => n % 2 == 0);
console.log(odds);
console.log(evens);

//Medium (1)

function vowelChecker(letter) {
    var vowel = ["a", "e", "i", "o", "u"];

      if (vowel.indexOf(letter) !=-1) {
        console.log("its vowel");
        return;
      }
      else{
    console.log("not vowel");
    return;
      }
  }

  vowelChecker("k");

