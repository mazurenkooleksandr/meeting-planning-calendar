let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
   modal.style.display = "block";
}

span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}

let tableEvent = {
   'participants': ['1', '2', '3', '4', '5', '6'],
   'day': ['1', '2', '3', '4', '5'],
   'time': ['1', '2', '3', '4', '5', '6', '7', '8', '9']
}


//let tds = mainTbl.getElementsByTagName("td");


function changeTable () {
   let text = document.getElementById("tblText").value;
   let cells = document.getElementsByTagName('tr') 
   var selectTime = document.getElementById("row");
   var valueTime = selectTime.value;
   /*var select = document.getElementById("col");
        var value = select.options[select.selectedIndex].value;
        alert(value);*/
        text.innerHTML = cells;

   modal.style.display = "none";
   
}