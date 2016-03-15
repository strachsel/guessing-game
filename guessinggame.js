var username = prompt("What is your name?");

function yo(){
  if (username != "") {
    document.getElementById('greeting').innerHTML = "Hello " + username + ". What's up, I'm Sean."; //this goes to the first button that says "click me."
  }
  else {
    alert("You haven't entered a name."); //What's shown if you don't enter and click the first button.
  }
}

yo();

function hidesee() {
  if (username != "") {
    document.getElementById('hidden').style.display="block"; //This displays the main content.

    var seens = document.getElementsByClassName('seen'); //This loop hides the buttons.
    for(i=0;i<seens.length;i++) {
      seens[i].style.display="none";
    }
  }
  else {
    alert("GIVE ME A NAME DAMMIT!"); //What's shown if no name and hit second button.
  }
}

hidesee();

console.log("Page should have greeted user and revealed bio");

//End of intial "reveal" javascript code. Below starts guessing game code.

function guessquestions() {
  var answered1 = false; //These variables will check the status if their question has been answered or not.
  var answered2 = false;
  var answered3 = false;

  var correctcounter = 0;
  var wrongcounter = 0;

// The three followng while loops ask a different question. If the question is answered, the user recieves a response. If the question is not answered or answered in an invalid way, the question is asked again.
  while (answered1 == false) {
    var question1 = prompt("Was I born in Virginia?").toLowerCase();

    if ((question1 == "no") || (question1 == "n")) {
      alert("You are correct. I was born in Naples.");
      answered1 = true;
      correctcounter++;
    }
    else if ((question1 == "yes") || (question1 == "y")) {
      alert("Sorry. That's not right. I was born in Naples.");
      answered1 = true;
      wrongcounter++;
    }
    else {
      alert("You didn't enter yes or no... or you didn't enter anything. In which case, WHAT IS WRONG WITH YOU??")
    }
  }

  console.log("Question 1 has been answered.");

  while (answered2 == false) {
    var question2 = prompt("Do I work in Vancouver, WA?").toLowerCase();

    if ((question2 == "yes") || (question2 == "y")) {
      alert("That's right. Turns out I actually have a wonderful commute.");
      answered2 = true;
      correctcounter++;
    }
    else if ((question2 == "no") || (question2 == "n")) {
      alert("Nope. I live in Oregon, work in Washington. I know, I'm an idiot.");
      answered2 = true;
      wrongcounter++;
    }
    else {
      alert("You didn't enter a valid answer. WHY WON'T YOU JUST PLAY THE GAME??");
    }
  }

  console.log("Question 2 has been answered.");

  while (answered3 == false) {
    var question3 = prompt("Does most of my extended family live in Texas?").toLowerCase();

    if ((question3 == "no") || (question3 == "n")) {
      alert("Yep. They live along the eastern seaboard. Virginia mostly.");
      answered3 = true;
      correctcounter++;
    }
    else if ((question3 == "yes") || (question3 == "y")) {
      alert("Did you even read my bio? Probably not, who could blame you. No, they're not in Texas.");
      answered3 = true;
      wrongcounter++;
    }
    else {
      alert("This is not ROCKET SCIENCE. YES OR NO. ARE YOU KIDDING ME???");
    }
  }

  console.log("Question 1 has been answered.");

  var correct = false;

  //The below loop asks for a goes until the user answers 3.
  var tries = 0;

  while (correct == false) {
    var sportsplayed = prompt("How many sports did I play in high school? Please answer with a number.")

    if (sportsplayed == 3) {
      alert("4 if you count weekend croquet rallies.");
      tries++;
      correct = true;
    }
    else if (sportsplayed > 3) {
      alert("Try a little lower. I wasn't THAT athletic.");
      tries++;
    }
    else if (sportsplayed < 3) {
      alert("Try higher.")
      tries++;
    }
    else {
      alert("I don't think you're entering a number.")
      tries++;
    }
  }

  if (tries == 1) {
    alert("You got "+correctcounter+"/3 yes or no questions correct and it took you 1 try to get the fourth qeustion. Thanks for playing."); //Message if it only took the player 1 try.
  }
  else {
    alert("You got "+correctcounter+"/3 yes or no questions correct and it took you "+tries+" to get the fourth qeustion. Thanks for playing."); //Message if more.
  }

  var numquestion = prompt("PSYCH YOUR'RE NOT DONE YET. Now guess my favorite number between 1 and 10.");
  var favnumber = 5;

  if (numquestion == favnumber) {
    alert("Ok now you're done.");
  }
  else {
    while (numquestion != favnumber) {
      numquestion = prompt("Nope guess again.")
    }
    alert("Ok now you're done.")
  }

}
