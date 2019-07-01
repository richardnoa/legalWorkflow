const FIRST_NAME = prompt("Bitte Vornamen eingeben.");
const LAST_NAME = prompt("Bitte Nachnamen eingeben.");
const COMPANY = prompt("Bitte Name der Firma eingeben.");

document.getElementById("userFirstName").innerHTML = FIRST_NAME;
document.getElementById("userLastName").innerHTML = LAST_NAME;
document.getElementById("companyName").innerHTML = COMPANY;

//
var now = new Date();
var year = now.getFullYear();
const MONTHS = ["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const MONTHDAYS = [31,28,31,30,31,30,31,31,30,31,30,31]

var tableObject = function (day, project,start,end,pause,total,something) {
    this.day = day,
    this.project = project,
    this.start = start,
    this.end = end,
    this.pause = pause,
    this.total = total,
    this.something = something
};

//creat table rows

var tableRow = "";
for(var day = 0;day < MONTHDAYS[now.getMonth()]; day++ ){
    var d = new tableObject(day+1 +'/' + MONTHS[now.getMonth()] + '/' + year,COMPANY,08+":"+00,16+":"+00,01+":"+00,07+":"+00,COMPANY);
    tableRow += 
    "<tr>" + 
        "<th scope='row'>" + d.day + "</th>" +
        "<td>" + d.project + "</td>" +
        "<td>" + d.start + "</td>" +
        "<td>" + d.end + "</td>" +
        "<td>" + d.pause + "</td>" +
        "<td>" + d.total + "</td>" +
        "<td>" + d.something + "</td>" +
    "</tr>";
}
document.getElementById("tableBody").innerHTML = tableRow;

/***
 * TODO:
 * -- click auf Zelle zum eintragen
 * -- objecte speichern
 * -- Datum verwenden
 * -- 
 */