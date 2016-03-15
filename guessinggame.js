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
  answered1 = false; //These variables will check the status if their question has been answered or not.
  answered2 = false;
  answered3 = false;


// The three followng while loops ask a different question. If the question is answered, the user recieves a response. If the question is not answered or answered in an invalid way, the question is asked again.
  while (answered1 == false) {
    var question1 = prompt("Was I born in Virginia?").toLowerCase();

    if ((question1 == "no") || (question1 == "n")) {
      alert("You are correct. I was born in Naples.");
      answered1 = true;
    }
    else if ((question1 == "yes") || (question1 == "y")) {
      alert("Sorry. That's not right. I was born in Naples.");
      answered1 = true;
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
    }
    else if ((question2 == "no") || (question2 == "n")) {
      alert("Nope. I live in Oregon, work in Washington. I know, I'm an idiot.");
      answered2 = true;
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
    }
    else if ((question3 == "yes") || (question3 == "y")) {
      alert("Are you even reading this? Probably not, who could blame you. No, they're not in Texas.");
      answered3 = true;
    }
    else {
      alert("This is not ROCKET SCIENCE. YES OR NO. ARE YOU KIDDING ME???");
    }
  }

  console.log("Question 1 has been answered.");

  var correct = false;

  //The below loop asks for a goes until the user answers 3.
  while (correct == false) {
    var sportsplayed = prompt("How many sports did I play in high school? Please answer with a number.")

    if (sportsplayed == 3) {
      alert("4 if you count weekend croquet rallies.");
      correct = true;
    }
    else if (sportsplayed > 3) {
      alert("Try a little lower. I wasn't THAT athletic.");
    }
    else {
      alert("Try higher.")
    }
  }

  alert("Thanks for playing.")

}
