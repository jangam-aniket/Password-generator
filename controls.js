let btn = document.getElementById("btn");
let num = document.getElementById("num");
const alphaNumArray =
  "abcdefghijklmnopqrstuvwxyz1234567890@#$%&*!ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//   "abcdefghijklmnopqrstuvwxyz1234567890@#$%&*!ABCDEFGHIJKLMNOPQRSTUVWXYZ";

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let generatedString = "";
  for (let i = 0; i < 10; i++) {
    let rnum = Math.floor(Math.random() * alphaNumArray.length);
    generatedString += alphaNumArray.substring(rnum, rnum + 1);
  }
  console.log(generatedString);
  num.innerHTML = generatedString;
});
