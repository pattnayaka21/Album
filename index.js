/*Added By ASH (From Here)*/

function openCity(cityName, elmnt, color) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  
  document.getElementById(cityName).style.display = "block";

  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

/*Added By ASH (To Here)*/
