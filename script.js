let name = prompt("Welcome to GC mini golf! What is your name?")
console.log("Player's name is " + name)
let rounds = prompt("Hi " + name + "! Would you like to play 3 or 6 holes today?")
console.log(name + " is playing " + rounds + " holes today")

total = 0;
for (let i=1; i <= rounds; i++) {
    let score = Number(prompt("How many putts for hole " + i + " ?"));
    console.log(score + " putts")
    total += score - 3;
}

if (total === 0) {
    console.log("Good game, " + name + "! Your total par was: 0");
} else if (total >= 0) {
    console.log("Nice try, " + name + "... Your total par was: +" + total)
} else {
    console.log("Great job, " + name + "! Your total par was: " + total)
}
