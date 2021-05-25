"use strict";

function begin(){
    addEventListener("keyup", function(event) { // Keyup is an event that executes a function when a key is released
        if (event.keyCode == 13) { // 13 is the enter key
            document.getElementById("start").click(); // Will click a button whenever the enter key (13) is pressed
        }
    });
}

function instruc(){
    addEventListener("keyup", function(event) { // Keyup is an event that executes a function when a key is released
        if (event.keyCode == 13) { // 13 is the enter key
            document.getElementById("yellowInstruc").click(); // Will click a button whenever the enter key (13) is pressed
        }
    });
}
    

function play_game() {
    window.location.href = "BACK_TO_PORTAL.html";
}

function instructions() {
    window.location.href = "INSTRUCTIONS.html";
}