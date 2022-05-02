// <<<<<<< main
//Easy (1)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let odds = arr.filter( n => n % 2);
let evens = arr.filter( n => n % 2 == 0);
console.log(odds);
console.log(evens);


// JORGE PRO //

//2)

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let myPrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return num !== 1;
})
console.log(myPrimeArray);
// >>>>>>> main

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