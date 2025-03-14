// alert("Glödjens dag, det är fredag!");
// var namn = prompt("Vad heter du?");
// var ålder = prompt("Hur gammal är du"); 4
// alert("Hej " + namn + " du är " + ålder + " år gammal.");

// console.log("Det verkar funka det här!");

// var tal1String= prompt("skriv ett tal"); 
// var tal2String= prompt("skriv ett tal"); 
// var summa= parseInt(tal1String) + parseInt(tal2String);
// alert(" Summan är " + summa ); 

// var ålder = prompt("Skriv din ålder"); 
// var studentålder = parseInt(ålder) + 1; 
// alert("Du är "+ studentålder + " när du tar studenten!"); 
// document.writeln("<h2>Du är "+ studentålder + " när du tar studenten!</h2>");

//Spam check
// fråga användaren vad slumpad "summa"
var slumptal1= Math.floor( Math.random() * 100); 
var slumptal2= Math.floor( Math.random() * 100); 
var summan = slumptal1 + slumptal2; 
console.log(slumptal1,slumptal2);
var gissning = prompt("Vad är summan av " + slumptal1 + " + " + slumptal2 + " ?" ); 
if (gissning==summan) {
    document.writeln("<h1> God job! 😍</h1>")
} else {
    document.writeln("<h1> Sucker! 💀</h1>"); 
}