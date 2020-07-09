const button = document.querySelector("button");
button.addEventListener("click", calculateDogAge);

function calculateDogAge() {
  const age = document.getElementById("dogAge").value;
  const dogAge = 16 * Math.log(age) + 31;
  document.getElementById("output").innerHTML = `Your dog is ${Math.round(dogAge)} years old in human years`;
}
