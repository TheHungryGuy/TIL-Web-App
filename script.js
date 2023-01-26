console.log("Hello World");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});
/*
let votesInteresting = 23;
let votesMindblowing = 5;
const text = " Lisbon is the capital of Portugal";

votesInteresting += 1;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
// const isCorrect = votesFalse < totalUpvotes;
// console.log(isCorrect);

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  return age;
}

console.log(calcFactAge(2015));

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal to 
    ${new Date().getFullYear()}`;

console.log(calcFactAge2(2010));
*/
// if (votesInteresting === votesMindblowing) {
//   alert("this fact is equalkly instesting and miondbloswiong");
// } else if (votesInteresting < votesMindblowing) {
//   console.log("Interesting Fact!");
// } else {
//   console.log("AHHHH");
// }

// const str = `The current fact is ${text}. It is ${calcFactAge(
//   2015
// )} years old. It is probably ${
//   totalUpvotes > votesFalse ? "correct" : "not true"
// }`;
// console.log(str);

const fact = ["Lisbon is the capital of portugal", 2015, true];
console.log(fact);
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);
