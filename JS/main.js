/*
    Janne-Productions JavaScript
*/

// Smooth scrolling (Only supported in FireFox.)
scrlTo = function(id) {
    document.getElementById(id).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Show 'Go To Top' button on scroll.
var gtt = document.getElementById("gtt");
window.onscroll = function() {myFunction()};
function myFunction() {
    
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		gtt.style.display = "block";

    } else {

		gtt.style.display = "none";

		}
}

//
// Jon, du måste ha med all JavaScript från din Template... -.-
//

// Script for side navigation
function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "300px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
}

// Close side navigation
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

gtt.style.display = "none";

console.log("'Main.js' loaded.");
console.log('Found any problems or security flaws with this page? Open an issue here: https://github.com/oneofMOSSy/janneproductions/issues');
