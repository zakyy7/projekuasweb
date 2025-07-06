const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Welcome " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Bienvenue " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Youkoso " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Selamat Datang " + user.name.first + " " + user.name.last + "!");
}