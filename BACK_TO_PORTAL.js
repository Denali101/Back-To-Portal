"use strict";

let intro = ["Begin", "begin"]; // Keywords for the to begin the game
let keywords = []; // Array of keywords for the player to progress
let rant = ["WE WERE PART OF AN ANCIENT CIVILIZATION<br><br>", "THAT WAS BANISHED TO THE EDGE OF THE GALAXY<br><br>", 
"BECAUSE WE WERE FEARED OVE THE IMMENSE POWER WE HAD!<br><br>", "WE HAD BEEN LIVING IN PEACE FOR CENTURIES!<br><br>", "HOW COULD THEY!<br><br>", 
"WE SPENT YEARS ALONE IN THE COLD SPACE,<br><br>", "PLOTTING OUR REVENGE ONTO THE WORLD!<br><br>", "OUR PLAN WAS PERFECT,<br><br>", "UNTIL YOU!<br><br>",
"YOU DIRTY, EVIL, BRAT!<br><br>"]; // A long rant to be used at the end of the game
let else_count = 0; // Counter to keep track of how many wrong inputs
let wrong = random_value(keywords); // Selects a random value from the keywords array

addEventListener("keyup", function(event) { // Executes a function when a key is released
    if (event.keyCode == 13) { // 13 is the enter key
        document.getElementById("btn").click(); // Clciks this button whenever the enter key (13) is pressed
        document.getElementById("textBox").value = ""; // Clears the text box
    }
});


function select_output() { // The only function called by the button. It will call a function based on the input given
    if (intro.includes(document.getElementById("textBox").value)) {
        first();
        intro = []; // Empties the intro array so the player can't restart
    } else if (keywords.includes(document.getElementById("textBox").value)) { // Checks to see if input matches a word in the array
        if (keywords.includes("Hey?")) {second_0();} // Checks which function needs to be run based on what is in the array
        else if (keywords.includes("I don't know")) {second_1();} 
        else if (keywords.includes("yes")) {
            if (document.getElementById("textBox").value == "yes") {second_2_yes();} // Checks if either yes or Yes is entered
            else if (document.getElementById("textBox").value == "no") {second_2_no();}} // Checks if either no or No is entered
        else if (keywords.includes("false_tree")) {second_2_no();} // Runs this function if you don't go to the tree
        else if (keywords.includes("true_tree")) {second_2_yes();} // Runs this functon if you do go to the tree
        else if (keywords.includes("Dedede")) {third_0();}
        else if (keywords.includes("bust open")) {
            if (document.getElementById("textBox").value == "enter" || document.getElementById("textBox").value == "bust open") {third_1_yes();} // Enters the door
            else if (document.getElementById("textBox").value == "leave") {third_1_no();}} // Leaves the door
        else if (keywords.includes("general battle")) {third_1_yes();}
        else if (keywords.includes("void")) {last();}
    } else { // If the player enters an incorrect term
        document.getElementById("output").innerHTML += "Type a different word.<br><br>";
        else_count += 1;
        try_again();
    }
}

function first() { // Introduction
    document.getElementById("textBox").style.color = "blue";
    document.getElementById("hello").style.display = "none"; // Hides the "Hello there," text
    story_reset("", 0);
    setTimeout(function() { hide_box(); }, 0);
    story_text("... <br><br>", 250); // Passes text and time values into the story_text function
    story_text("Why hello there. <br> <br>", 2000); // Time is measured in miliseconds (2000 milisecs = 2 secs)
    story_text("You've met with a terrible fate haven't you? <br> <br>", 4000);
    story_text("You're falling endlessly through a portal. <br> <br>", 6000);
    story_text("I guess it's time for the game to begin. <br> <br>", 8000);
    story_reset("", 10000); // Removes all text
    story_text("AHHHHHHHHHHHHHHHHHHHH!!!!!!!! <br> <br>", 15000);
    story_text("OOF! <br> <br>", 17000);
    story_text("... <br> <br>", 19000);
    story_text("... <br> <br>", 21000);
    story_text("Poyo? (?) <br> <br>", 23000);
    setTimeout(function() { show_box(); }, 25000);
    keywords.push("Hi?", "Hello?", "Hey?", "hey", "hi", "hello"); // Adds new keywords to the array
}

function second_0() { // Greetings to Kirby
    story_reset("", 0);
    setTimeout(function() { hide_box(); }, 0);
    story_text("Poyo! (Hi!!) <br><br>", 100);
    story_text("Poyo! Poyo! (I'm Kirby! Nice too meet you.)<br><br>", 2100);
    story_text("Poyo? (Where did you come from?)<br><br>", 4100);
    setTimeout(function() { show_box(); }, 4200);
    keywords = []; 
    keywords.push("I don't know", "I dont know", "I'm not sure");  
}


function second_1() { // Responding to where you came from
    story_reset("", 0);
    setTimeout(function() { hide_box(); }, 0);
    story_text("Poyo, Poyo... (Hmm, strange...)<br><br>", 100);
    story_text("Poyo! (Do you want to walk over to that tree with me?)<br><br>", 2100);
    setTimeout(function() { show_box(); }, 2200);
    keywords = [];
    keywords.push("yes", "no");
}


function second_2_yes() { // If you chose to go to the tree
    if (keywords.includes("yes")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("Poyo! Poyo! (Alright, let's go!) <br> <br>", 250);
        story_text("What are you waiting for?<br><br>", 3500);
        setTimeout(function() { show_box(); }, 2100);
        keywords = [];
        keywords.push("walk", "Walk", "run", "Run", "tree_walk", "true_tree");
    } else if (keywords.includes("tree_walk")) {
        setTimeout(function() { hide_box(); }, 0);
        story_reset("", 0);
        story_text("Poyo! (It's a beautiful tree isn't it?)<br><br>", 250);
        story_text("Poyo! (I often spend my days here; it's very peaceful.)<br><br>", 2000);
        story_text("...<br><br>", 4000);
        story_text("Poyo! (Is that a shooting star?)<br><br>", 5500);
        setTimeout(function() { show_box(); }, 5600);
        keywords = [];
        keywords.push("look", "Look", "observe", "look_stars", "true_tree");
    } else if (keywords.includes("look_stars")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("Poyo! (Purple stars, interesting!)<br><br>", 250);
        story_text("...<br><br>", 1500);
        story_text("POYO!!! (WATCH OUT!!)<br><br>", 3500);
        story_text("Phew, a purple star almost landed right on you. Thankfully, Kirby saved you.<br><br>", 5000);
        story_text("Poyo!!! (Let's go outta here!)<br><br>", 7000);
        setTimeout(function() { show_box(); }, 9000);
        keywords = [];
        keywords.push("run", "Run", "sprint", "Sprint", "run purple stars", "true_tree");
    } else if (keywords.includes("run purple stars")) {
        setTimeout(function() { hide_box(); }, 0);
        story_reset("", 0);
        story_text("You're running as fast as you can, dodging every star in the way.<br><br>", 250);
        story_text("BOOOOOOM<br><br>", 1000);
        setTimeout(function() { document.getElementById("boom").play(); }, 1000);
        story_text("Poyo!! (I know where to go where we'll be safe, Dedede's castle!)<br><br>", 2000);
        story_text("BOOOOOM<br><br>", 3000);
        story_text("Poyo!! (Come on!)<br><br>", 4000);
        story_text("BOOOOOM<br><br>", 5000);
        setTimeout(function() { document.getElementById("boom").play(); }, 5000);
        story_text("BOOOOOM<br><br>", 6000);
        story_text("Poyo!!!! (We're almost there!)<br><br>", 8000);
        story_text("Poyo!! (We made it!)<br><br>", 10000);
        setTimeout(function() { show_box(); }, 11000);
        keywords = [];
        keywords.push("Hide", "hide", "rest", "Rest", "castle", "Dedede");
    }
}


function second_2_no() { // If you did not chose to go to the tree
    if (keywords.includes("no")) {
        setTimeout(function() { hide_box(); }, 0);
        story_reset("", 0);
        story_text("Poyo! (Alright, goodbye!) <br> <br>", 250);
        story_text("... <br> <br>", 2000);
        story_text("... <br> <br>", 3000);
        story_text("You're off on your own now. <br> <br>", 5000);
        setTimeout(function() { show_box(); }, 5100);
        keywords = [];
        keywords.push("walk", "Walk", "false_tree", "time_rest");
    } else if (keywords.includes("false_tree")) {
        if (keywords.includes("time_rest")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("You're walking towards the tree.<br><br>", 250);
        story_text("... <br> <br>", 2000);
        story_text("You've made it, time to rest.<br><br>", 4000);
        setTimeout(function() { show_box(); }, 4100);
        keywords = [];
        keywords.push("rest", "Rest", "false_tree", "raining_purple_hearts");
        } else if (keywords.includes("raining_purple_hearts")) {
            setTimeout(function() { hide_box(); }, 0);
            story_reset("", 0);
            story_text("... <br> <br>", 250);
            story_text("So peaceful... <br> <br>", 2000);
            story_text("... <br> <br>", 4000);
            story_text("... <br> <br>", 6000);
            story_text("? <br> <br>", 8000);
            story_text("What's that? <br> <br>", 10000);
            story_text("Purple stars are shooting down. <br> <br>", 12000);
            story_text("What will you do? <br> <br>", 13500);
            setTimeout(function() { show_box(); }, 15600);
            keywords = [];
            keywords.push("stay", "rest", "walk", "run", "sprint", "Stay", "Rest", "Walk", "Run", "Sprint", "false_tree", "crashing_purple_hearts");
        } else if (keywords.includes("crashing_purple_hearts")) {
            if (document.getElementById("textBox").value == "stay" ||
            document.getElementById("textBox").value == "rest" ||
            document.getElementById("textBox").value == "Stay" ||
            document.getElementById("textBox").value == "Stay") {
                story_reset("", 0);
                setTimeout(function() { hide_box(); }, 0);
                story_text("SHEEYUUUUUUUUUUU<br><br>", 250);
                setTimeout(function() { document.getElementById("boom").play(); }, 1500);
                story_text("BOOOOOM<br><br>", 1000);
                story_text("BOOOOOM<br><br>", 2000);
                story_text("BOOOOOM<br><br>", 3000);
                story_text("AHHHHHHHHHHHHHHHHHHHH!!!!!!!! <br> <br>", 5000);
                story_text("OOF! <br> <br>", 7000);
                setTimeout(function() { game_over(); }, 9000);
            } else if (document.getElementById("textBox").value == "walk" ||
            document.getElementById("textBox").value == "run" ||
            document.getElementById("textBox").value == "sprint" ||
            document.getElementById("textBox").value == "Walk" ||
            document.getElementById("textBox").value == "Run" ||
            document.getElementById("textBox").value == "Sprint") {
                setTimeout(function() { hide_box(); }, 0);
                story_text("You're running as fast as possible, dodging every star you can.<br><br>", 250);
                setTimeout(function() { document.getElementById("boom").play(); }, 1000);
                story_text("BOOOOOM<br><br>", 1000);
                story_text("BOOOOOM<br><br>", 2000);
                story_text("BOOOOOM<br><br>", 3000);
                story_text("AHHHHHHHHHHHHHHHHHHHH!!!!!!!! <br> <br>", 5000);
                story_text("OOF! <br> <br>", 7000);
                setTimeout(function() { game_over(); }, 9000);
            }
        }
    }
}


function third_0() {
    if (keywords.includes("castle")) {
        setTimeout(function() { hide_box(); }, 0);
        story_reset("", 0);
        story_text("Poyo... (That was tiring..)<br><br>", 250);
        story_text("Poyo! (I know King Dedede! He might be able to help!)<br><br>", 2000);
        setTimeout(function() { show_box(); }, 2100);
        keywords = [];
        keywords.push("walk", "look", "Walk", "Look", "run", "Run", "inside castle", "Dedede");
    } else if (keywords.includes("inside castle")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("You're running all the way to the throne room, until<br><br>", 250);
        story_reset("", 0);
        story_text("RAAAAAARWRRR!!!!!!<br><br>", 2000);
        story_text("POYO!! (AHHHHHH!!!)<br><br>", 4000);
        story_text("Poyo!! (Dedede's gone crazy! We have to save him!)<br><br>", 6000);
        setTimeout(function() { show_box(); }, 7000);
        keywords = [];
        keywords.push("attack", "Attack", "save", "Save", "attack Dedede", "Dedede");
    } else if (keywords.includes("attack Dedede")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("You and Kirby fought Dedede relentlessly.<br><br>", 250);
        story_text("BAM!<br><br>", 1500);
        story_text("POW!<br><br>", 2500);
        story_text("OOF!<br><br>", 3500);
        story_text("BANG!<br><br>", 4500);
        story_text("Poyo!! (He's getting weak!!)<br><br>", 6500);
        setTimeout(function() { show_box(); }, 6600);
        keywords = [];
        keywords.push("attack", "Attack", "finish", "Finish", "finish Dedede", "Dedede");
    } else if (keywords.includes("finish Dedede")) {
        setTimeout(function() { hide_box(); }, 0);
        story_reset("", 250);
        story_text("Poyo!! (We did it!)<br><br>", 2500);
        story_text("?<br><br>", 5000)
        story_text("POYO! (WHOA!)<br><br>", 7000);
        story_text("Poyo!! (Did you see that!! Something just got blown out of his body!)<br><br>", 9000);
        story_text("...<br><br>", 11000);
        story_text("Poyo!!!! (That's the purple shooting stars we saw!!!)<br><br>", 13000);
        story_text("Ughh...<br><br>", 15000);
        story_text("Poyo!! (Dedede! Are you alright? Sorry about that.)<br><br>", 17000);
        story_text("I think I'll be ok...<br><br>", 19000);
        story_text("Poyo! (Good to see you back with living Triple D, but what happened to you?)<br><br>", 21000);
        story_text("Well...<br><br>", 23000);
        setTimeout(function() { show_box(); }, 25000);
        keywords = [];
        keywords.push("listen", "Listen", "listen Dedede", "Dedede");
    } else if (keywords.includes("listen Dedede")) {
        setTimeout(function() { hide_box(); }, 0);
        story_reset("", 0);
        story_text("I was playing chess outside, when I a whole bunch of purple shooting stars.<br><br>", 250);
        story_text("I tried running as fast into my castle, but I got hit.<br><br>", 2000);
        story_text("The next thing I knew, I was waking up after you knocked me out.<br><br>", 4000);
        story_text("...<br><br>", 6000);
        story_text("RUMBLE RUMBLE...<br><br>", 8000);
        setTimeout(function() { document.getElementById("rumble").play(); }, 8000);
        story_text("What was that?<br><br>", 10000);
        setTimeout(function() { show_box(); }, 12000);
        keywords = [];
        keywords.push("look", "Look", "observe", "Observe", "see", "See", "watch", "Watch", "listen", "Listen", "hear", "Hear", "rumbling", "Dedede");
    } else if (keywords.includes("rumbling")) {
        story_reset("", 0);
        setTimeout(function() { hide_box(); }, 0);
        story_text("Go check it out, Kirby will watch over me.<br><br>", 250);
        story_text("You have a bad feeling about this.<br><br>", 2000);
        story_text("...<br><br>", 4000);
        story_text("What the heck?!?!?<br><br>", 6000);
        story_text("It's a huge fortress implanted into the ground.<br><br>", 8000);
        setTimeout(function() { show_box(); }, 8100);
        keywords = [];
        keywords.push("jump", "Jump", "run", "Run", "check", "Check", "fortress", "Dedede");
    } else if (keywords.includes("fortress")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("You waste no time in running to that fortress.<br><br>", 250);
        story_text("...<br><br>", 2000);
        story_text("You made it to the entrance.<br><br>", 4000);
        setTimeout(function() { show_box(); }, 4100);
        keywords = [];
        keywords.push("enter", "leave", "bust open", "first door");
    }
}


function third_1_yes() {
    if (keywords.includes("first door")) {
        story_reset("", 0);
        setTimeout(function() { hide_box(); }, 0);
        story_text("You bust open the door.<br><br>", 250);
        story_text("BOOOOOM<br><br>", 2000);
        story_text("BOOOOOM<br><br>", 3000);
        story_text("BOOOOOM<br><br>", 4000);
        story_text("Phew, good thing you got inside, any second later and you would've gotten hit by another purple shooting star.<br><br>", 6000);
        setTimeout(function() { show_box(); }, 6100);
        keywords = [];
        keywords.push("look", "Look", "observe", "Observe", "look around", "general battle");
    } else if (keywords.includes("look around")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("It's a huge fortress, three times as large as Dedede's castle.<br><br>", 250);
        story_text("*SLAM*<br><br>", 2000);
        setTimeout(function() { document.getElementById("slam").play(); }, 2000);
        story_reset("", 4000);
        story_text("...<br><br>", 6000);
        story_text("I've been expecting you.<br><br>", 8000);
        story_text("I thought the purple stars would finish you.<br><br>", 10000);
        story_text("Either you're lucky or you're tougher than I thought.<br><br>", 12000);
        story_text("But no matter, I will finish you right here.<br><br>", 14000);
        story_text("HIIIYAH!<br><br>", 16000);
        story_text("Dodge it!<br><br>", 18000);
        setTimeout(function() { show_box(); }, 18500);
        keywords = [];
        keywords.push("dodge", "Dodge", "evade", "Evade", "avoid", "Avoid", "general battle");
    } else if (keywords.includes("evade")) {
        setTimeout(function() { hide_box(); }, 0);
        story_reset("", 0);
        story_text("No where to escape buddy!<br><br>", 250);
        story_text("Stand and fight!<br><br>", 2250);
        setTimeout(function() { show_box(); }, 2300);
        keywords = [];
        keywords.push("attack", "Attack", "damage", "Damage", "fight", "Fight", "general battle", "fight_1");
    } else if (keywords.includes("fight_1")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("AAAAH!<br><br>", 250);
        setTimeout(function() { show_box(); }, 260);
        keywords = [];
        keywords.push("attack", "Attack", "damage", "Damage", "fight", "Fight", "general battle", "fight_2");
    } else if (keywords.includes("fight_2")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("OOF!<br><br>", 250);
        setTimeout(function() { show_box(); }, 500);
        keywords.pop();
        keywords.push("fight_3")
    } else if (keywords.includes("fight_3")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("OW!<br><br>", 250);
        setTimeout(function() { show_box(); }, 500);
        keywords.pop();
        keywords.push("fight_4");
    } else if (keywords.includes("fight_4")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("OWWW!!<br><br>", 250);
        story_text("You little...<br><br>", 3000);
        story_text("Dirty, Insignifcant,<br><br>", 4000);
        story_text("PIECE OF...<br><br>", 5000);
        story_text("OW!<br><br>", 5500);
        story_text("Poyo! <br><br>", 7500);
        story_text("It's Kirby and Dedede!<br><br>", 9500);
        story_text("...<br><br>", 11500);
        story_text("How...<br><br>", 13500);
        story_text("HOW COULD YOU!<br><br>", 15500);
        story_text("NO!<br><br>", 17500);
        story_text("HOW DARE YOU!<br><br>", 19500);
        story_reset("", 21000);
        let x = 23000;
        for (let i = 0; i < rant.length; i++) { // Outputs the rant
            story_text(rant[i], i*500 + x);
         }   
        story_text("...<br><br>", 30000);
        story_text("I refuse to accept defeat.<br><br>", 32000);
        story_text("If I'm going down today...<br><br>", 34000);
        story_text("YOU'RE COMING WITH ME!<br><br>", 36000);
        story_text("YAH!<br><br>", 38000);
        story_text("POYO!!! (She's creating a black hole! Let's go outta here!)<br><br>", 40000);
        keywords = [];
        keywords.push("run", "Run", "black hole", "void");
        setTimeout(function() { show_box(); }, 27500);
    }
}


function third_1_no() {
    setTimeout(function() { hide_box(); }, 0);
    story_text("You're running back to the castle.<br><br>", 250);
    story_text("Is that...<br><br>", 2000);
    story_text("The stars are shooting down again!<br><br>", 4000);
    story_text("BOOOM<br><br>", 6000);
    setTimeout(function() { document.getElementById("boom").play(); }, 6500 );
    story_text("BOOOM<br><br>", 7000);
    story_text("BOOOM<br><br>", 8000);
    story_text("AHHHHHHHHHHHHHH!!!!!!!!!!!<br><br>", 10000);
    setTimeout(function() { game_over(); }, 12000);
}


function last() {
    if (keywords.includes("black hole")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("...<br><br>", 250);
        story_text("?<br><br>", 2000);
        setTimeout(function() { show_box(); }, 2500);
        keywords = [];
        keywords.push("look", "Look", "empty", "void");
    } else if (keywords.includes("empty")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("You're nowhere.<br><br>", 250);
        story_text("Oh?<br><br>", 2250);
        story_text("There's a small letter on the ground.<br><br>", 4250);
        setTimeout(function() { show_box(); }, 4300);
        keywords = [];
        keywords.push("read", "Read", "letter", "void");
    } else if (keywords.includes("letter")) {
        story_text("... <br><br>", 250); // Passes values into the story_text function
        story_text("Why hello there. <br> <br>", 2000);
        story_text("You've met with a terrible fate haven't you? <br><br>", 4000);
        story_text("At least you now remember where you got here. <br><br>", 6000);
        story_text("But you're not anywhere. There's no time or space here.<br><br>", 8000);
        story_text("...<br><br>", 10000);
        story_text("What?<br><br>", 12000);
        story_text("What the heck is this?<br><br>", 14000);
        story_text("There has to be something else.<br><br>", 16000);
        keywords = [];
        keywords.push("search", "Search", "void");
    } else if (keywords.includes("search")) {
        setTimeout(function() { hide_box(); }, 0);
        story_text("Don't bother searching.<br><br>", 250);
        story_text("You did an excellent job in the world I threw you in.<br><br>", 2250);
        story_text("...<br><br>", 4250);
        story_text("Who are you?<br><br>", 6250);
        story_text("I...<br><br>", 8250);
        story_text("Am the Solution.<br><br>", 10250);
        setTimeout(function() { win(); }, 12250);

    }
}


function story_text(text, time) {setTimeout(function(){ document.getElementById("output").innerHTML += text; }, time);} // Takes in text and time and then outputs to div


function story_reset(text, time) {setTimeout(function() { document.getElementById("output").innerHTML = text; }, time);} // Clears the div "output"


function try_again() {  // Every 5 wrong inputs will output a random keyword
    if (else_count % 5 === 0) {
        wrong = random_value(keywords);
        document.getElementById("output").innerHTML += "Too many wrong inputs. Try " + wrong + " and see what happens.<br><br>";
    }
}


function random_value(options) { // The keywords will be passed into this function
    let choice = Math.floor(Math.random() * options.length); // Returns a number based on the length of the array
    return options[choice]; // Returns a random index from the keywords array
}


function hide_box() { // Hides the textbox to ensure the player does not skip through the game
    document.getElementById("box").style.visibility = "hidden";
}


function show_box() { // Reveals the textbox after being hidden
    document.getElementById("box").style.visibility = "visible";
}
    

function game_over() {window.location.href = "LOSE.html";} // If the player loses


function win() {window.location.href = "WIN.html";} // If the player wins
