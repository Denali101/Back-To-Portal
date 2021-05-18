"use strict";

let intro = ["Begin", "begin"]; // Keywords for the first level
let keywords = []; // Array of keywords for the player to progress
let else_count = 0; // Counter to keep track of how many wrong inputs
let wrong = random_value(keywords); // Selects a random value from the keywords array

document.getElementById("textBox");
addEventListener("keyup", function(event) { // Keyup is an event that executes a function when a key is released
    if (event.keyCode == 13) { // 13 is the enter key
        event.preventDefault; // Prevents the browser from performing default action. Not neccesarily required, but still useful to have
        document.getElementById("btn").click(); // Will click a button whenever the enter key (13) is pressed
        document.getElementById("textBox").value = ""; // Clears the text box
    }
});

function select_output() { // The only function called by the button. It will call a function based on the input given
    if (intro.includes(document.getElementById("textBox").value)) {
        first();
        intro = [];
    } else if (keywords.includes(document.getElementById("textBox").value)) { // Checks to see if input matches a word in the array
        if (keywords.includes("second_0")) {second_0();} // Because the array is modified throughout the functions, these if statements are needed to check which function needs to be run
        else if (keywords.includes("second_1")) {second_1();} 
        else if (keywords.includes("second_2")) {
            if (document.getElementById("textBox").value == "yes" || document.getElementById("textBox").value == "Yes") {second_2_yes();} // Checks if either yes or Yes is entered
            else if (document.getElementById("textBox").value == "no" || document.getElementById("textBox").value == "No") {second_2_no();}} // Checks if either no or No is entered
        else if (keywords.includes("false_tree")) {second_2_no();} // Runs this function if you don't go to the tree
        else if (keywords.includes("true_tree")) {second_2_yes();} // Runs this functon if you do go to the tree
    } else { // If the player enters an incorrect term
        document.getElementById("output").innerHTML += "Type a different word. <br> <br>";
        else_count += 1;
        try_again();
    }
}

function first() { // Introduction
    document.getElementById("textBox").style.color = "blue";
    document.getElementById("hello").style.visibility = "hidden";
    document.getElementById("hello").style.display = "none";
    document.getElementById("output").innerHTML = "";
    keywords.push("Hi?", "Hello?", "Hey?", "hey", "hi", "hello", "second_0");
    wrong = random_value(keywords); // Returns a random value from the keywords array
    console.log(keywords);
    story_text("... <br><br>", 250); // Passes values into the story_text function
    story_text("Why hello there. <br> <br>", 2000);
    story_text("You've met with a terrible fate haven't you? <br> <br>", 4000);
    story_text("You don't even remember where you came from. <br> <br>", 6000);
    story_text("Who are you? <br> <br>", 8000);
    story_text("You're falling endlessly through a portal. <br> <br>", 10000);
    story_text("I guess it's time for the game to Begin. <br> <br>", 12000);
    story_reset("", 14000); // Removes all text
    story_text("AHHHHHHHHHHHHHHHHHHHH!!!!!!!! <br> <br>", 17000);
    story_text("OOF! <br> <br>", 19000);
    story_text("... <br> <br>", 22000);
    story_text("... <br> <br>", 24000);
    story_text("Poyo? (?) <br> <br>", 26000);
    console.log(wrong);
}

function second_0() { // Greetings to Kirby
    wrong = random_value(keywords);
    document.getElementById("output").innerHTML = "";
    story_text("Poyo! (Hi!!) <br><br>", 100);
    keywords = [];
    keywords.push("I don't know", "I dont know", "I'm not sure", "second_1");
    console.log(keywords);
    story_text("Poyo! Poyo! (I'm Kirby! Nice too meet you.)<br><br>", 2100);
    story_text("Poyo? (Where did you come from?)<br><br>", 4100);
}


function second_1() { // Responding to where you came from
    wrong = random_value(keywords);
    document.getElementById("output").innerHTML = "";
    story_text("Poyo, Poyo... (Hmm, strange...)<br><br>", 100);
    story_text("Poyo! (Do you want to walk over to that tree?)<br><br>", 2100);
    keywords = [];
    keywords.push("yes", "no", "second_2");
    console.log(keywords);
    console.log(wrong);
}


function second_2_yes() { // If you chose to go to the tree
    if (keywords.includes("second_2")) {
    story_text("Poyo! Poyo! (Alright, let's go!) <br> <br>", 250);
    story_text("What are you waiting for?", 2000);
    keywords = [];
    keywords.push("walk", "Walk", "run", "Run", "tree_walk", "true_tree");
    wrong = random_value(keywords);
    } else if (keywords.includes("tree_walk")) {
        story_text("Poyo! (It's a beautiful tree isn't it?)<br><br>", 250);
        story_text("Poyo! (I often spend my days here; it's very peaceful.)<br><br>", 2000);
        story_text("...", 4000);
        story_text("Poyo! (Is that a shooting star?)<br><br>", 5500);
        keywords = [];
        keywords.push("look", "Look", "observe", "look_stars", "true_tree");
    } else if (keywords.includes("look_stars")) {
        story_text("Poyo! (Purple stars, interesting!<br><br>", 250);
        story_text("...<br><br>", 1500);
        story_text("POYO!!! (WATCH OUT!!)<br><br>", 3500);
        story_text("Phew, a purple star almost landed right on you. Thankfully, Kirby saved you.<br><br>", 5000);
        story_text("Poyo!!! (Let's go outta here!)<br><br>", 7000);
        keywords = [];
        keywords.push("run", "Run", "sprint", "Sprint", "run_purple_stars", "true_tree");
        wrong = random_value(keywords);
    } else if (keywords.includes("run_purple_stars")) {
        story_text("You're running as fast as you can, dodging every star in the way.<br><br>", 250);
        story_text("BOOOOOOM<br><br>", 1000);
        story_text("Poyo!! (I know where to go where we'll be safe, Dedede's castle!<br><br>", 2000);
        story_text("BOOOOOM<br><br>", 3000);
        story_text("Poyo!! (Come on!)<br><br>", 4000);
        story_text("BOOOOOM<br><br>", 5000);
        story_text("BOOOOOM<br><br>", 6000);
        story_text("Poyo!!!! (We're almost there!)<br><br>", 8000);
        story_text("Poyo!! (We made it!)<br><br>", 10000);
        keywords = [];
        keywords.push("Hide", "hide", "run", "Run", "castle", "true_tree");
        wrong = random_value(keywords);
    } else if (keywords.includes("castle")) {
        story_text("Poyo... (That was tiring..)<br><br>", 250);
    }
}


function second_2_no() { // If you did not chose to go to the tree
    if (keywords.includes("second_2")) {
    story_text("Poyo! (Alright, goodbye!) <br> <br>", 250);
    story_text("... <br> <br>", 2000);
    story_text("... <br> <br>", 3000);
    story_text("You're off on your own now. <br> <br>", 5000);
    keywords = [];
    keywords.push("walk", "Walk", "false_tree", "time_rest");
    wrong = random_value(keywords);
    } else if (keywords.includes("false_tree")) {
        wrong = random_value(keywords);
        if (keywords.includes("time_rest")) {
        story_text("You're walking towards the tree <br> <br>", 250);
        story_text("... <br> <br>", 2000);
        story_text("You've made it, time to rest <br> <br>", 4000);
        keywords = [];
        keywords.push("rest", "Rest", "false_tree", "raining_purple_hearts");
        wrong = random_value(keywords);
        console.log(wrong);
        } else if (keywords.includes("raining_purple_hearts")) {
            story_reset("", 0);
            story_text("... <br> <br>", 250);
            story_text("So peaceful... <br> <br>", 2000);
            story_text("... <br> <br>", 4000);
            story_text("... <br> <br>", 6000);
            story_text("? <br> <br>", 8000);
            story_text("What's that? <br> <br>", 10000);
            story_text("Purple stars are shooting down. <br> <br>", 12000);
            story_text("What will you do? <br> <br>", 13500);
            keywords = [];
            keywords.push("stay", "rest", "walk", "run", "sprint", "Stay", "Rest", "Walk", "Run", "Sprint", "false_tree", "crashing_purple_hearts");
            wrong = random_value(keywords);
        } else if (keywords.includes("crashing_purple_hearts")) {
            if (document.getElementById("textBox").value == "stay" ||
            document.getElementById("textBox").value == "rest" ||
            document.getElementById("textBox").value == "Stay" ||
            document.getElementById("textBox").value == "Stay") {
                story_text("SHEEYUUUUUUUUUUU", 250);
                story_text("BOOOOOM", 1000);
                story_text("BOOOOOM", 2000);
                story_text("BOOOOOM", 3000);
                story_text("AHHHHHHHHHHHHHHHHHHHH!!!!!!!! <br> <br>", 5000);
                story_text("OOF! <br> <br>", 7000);
                setTimeout(function() { game_over(); }, 9000);
            } else if (document.getElementById("textBox").value == "walk" ||
            document.getElementById("textBox").value == "run" ||
            document.getElementById("textBox").value == "sprint" ||
            document.getElementById("textBox").value == "Walk" ||
            document.getElementById("textBox").value == "Run" ||
            document.getElementById("textBox").value == "Sprint") {
                story_text("You're running as fast as possible, dodging every star you can.", 250);
                story_text("BOOOOOM", 1000);
                story_text("BOOOOOM", 2000);
                story_text("BOOOOOM", 3000);
                story_text("AHHHHHHHHHHHHHHHHHHHH!!!!!!!! <br> <br>", 5000);
                story_text("OOF! <br> <br>", 7000);
                setTimeout(function() { game_over(); }, 9000);
            }
        }
    }
}


function story_text(text, time) { // Takes in values and outputs to div "output"
    setTimeout(function(){ document.getElementById("output").innerHTML += text; }, time);
}


function story_reset(text, time) { // Resets the div "output"
    setTimeout(function() { document.getElementById("output").innerHTML = text; }, time);
}


function try_again() {  // Every 5 wrong inputs will run this function
    if (else_count % 5 === 0) {
        wrong = random_value(keywords);
        document.getElementById("output").innerHTML += "Too many wrong inputs. Try " + wrong + " and see what happens. <br> <br>";
    }
}


function game_over() { // Takes the user to another page if they lose
    window.location.href = "LOSE.html";
}


function random_value(options) { // The keywords will be passed into this function
    let choice = Math.floor(Math.random() * options.length); // Returns a number based on the length of the array
    return options[choice]; // Returns a random value from the keywords array
}
