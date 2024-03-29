var now = new Date();
var year = now.getFullYear();
const MONTHS = ["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
const MONTHDAYS = [31,28,31,30,31,30,31,31,30,31,30,31]


// Table object
var tableObject = function (day, project,start,end,pause,total,something) {
    this.day = day,
    this.project = project,
    this.start = start,
    this.end = end,
    this.pause = pause,
    this.total = total,
    this.something = something
};

// create Time and calculate total work time 

var timeStart = "00:00"; 
var timeEnd = "00:00";
var timePause = "00:00";
var timeTotal = "" ;

function timeDiff(start, end, pause) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime() ;
    var hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    var minutes = Math.floor(diff / 1000 / 60);

    // If using time pickers with 24 hours format, add the below line get exact hours
    if (hours < 0)
       hours = hours + 24;

    return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
}

//creat table rows
//TODO: function @paramter array of tableObjects [len(month)] @output array with html <tr>
var project = "";
var something = "";

var tableRows = [];
for(var day = 0;day < MONTHDAYS[now.getMonth()]; day++ ){
    var d = new tableObject(
        day+1 +'/' + MONTHS[now.getMonth()] + '/' + year,
        project,
        timeStart,
        timeEnd,
        timePause,
        timeDiff(timePause, timeDiff(timeStart,timeEnd)),
        something
        );
    tableRows.push( 
    "<tr id='tableRow" + d.day.split('/')[0] +"'"+ "  onclick='updateDay(this.id)'>" + 
        "<th>" + d.day + "</th>" +
        "<td scope='row'>" + d.project + "</td>" +
        "<td>" + d.start + "</td>" +
        "<td>" + d.end + "</td>" +
        "<td>" + d.pause + "</td>" +
        "<td>" + d.total + "</td>" +
        "<td>" + d.something + "</td>" +
    "</tr>" +
    "<p class='container row'id='tableRow" + d.day.split('/')[0] +"FormInput'" + "></p>");
};

//TODO: Function @param array with html elements @output string with html code
var unpackedRows = "";
tableRows.forEach(element => {
    unpackedRows += element;
});

document.getElementById("tableBody").innerHTML = unpackedRows;

//Update user information
function updateUserInformation() {
    const FIRST_NAME = prompt("Bitte Vornamen eingeben.");
    const LAST_NAME = prompt("Bitte Nachnamen eingeben.");  
    document.getElementById("userFirstName").innerHTML = FIRST_NAME;
    document.getElementById("userLastName").innerHTML = LAST_NAME;
};

//Update for company details
//TODO: more details
function updateCompanyInformation(){
    const COMPANY = prompt("Bitte Name der Firma eingeben.");
    document.getElementById("companyName").innerHTML = COMPANY;
};

//TODO: Update the row with user input
function updateDay(clicked_id){   
    rowToUpdate = document.getElementById(clicked_id+'FormInput').innerHTML = 
    '<form class="container row">' +
        '<div class="form-group">'+
            '<label for="exampleFormControlInput1">Projekt / Ort</label>'+
            '<input type="text" class="form-control" id="projectFormInput" placeholder="Projekt / Ort">'+
        '</div>' +
        '<div class="container row">'+
        '<div class="form-group">'+
            '<label for="exampleFormControlSelect1">Von</label>'+
            '<input type="time"  class="form-control" id="startFormInput">'+
        '</div>'+
        '<div class="form-group">'+
            '<label for="exampleFormControlSelect1">Bis</label>'+
            '<input type="time"  class="form-control" id="endFormInput">'+
        '</div>'+
        '<div class="form-group">'+
            '<label for="exampleFormControlSelect1">Pause</label>'+
            '<input type="time"  class="form-control" id="pauseFormInput">'+
        '</div>'+
        '</div>'+
        '<div class="form-group">'+
            '<label for="exampleFormControlTextarea1">Projektbezogene Angaben</label>'+
            '<input type="text" class="form-control" id="exampleFormControlTextarea1" placeholder="Projektbezogene Angaben"></textarea>'+
        '</div>'+
    '</form>';
};


/***
 * TODO:
 * -- click auf Zelle zum eintragen
 * -- objecte speichern
 * -- 
 * -- erstelle row Objekte und speichere in array
 */