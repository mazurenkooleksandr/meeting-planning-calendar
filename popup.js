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

function changeTable() {

   let e = document.getElementById("col");
   let cl = e.options[e.selectedIndex].value;
   let r = document.getElementById("row");
   let rw = r.options[r.selectedIndex].value;
   let tabs = document.getElementById("tbl");
   let trs = tabs.getElementsByTagName("tr")[0];
   let text = document.getElementById('tblText').value;

   

   

   for (let i = 0, row; row = tabs.rows[i]; i++) {
       for (let j = 0, col; col = row.cells[j]; j++) {
               if (trs.cells[cl].id !== 'unique_id') {
                   trs = tabs.getElementsByTagName("tr")[rw];
                   trs.cells[cl].innerHTML = text;
                   trs.cells[cl].id = "unique_id";
                   trs.cells[cl].style.backgroundColor = "#d3f5b4";  

                   
                  }else if (trs.cells[cl].id === 'unique_id') {
                     console.log('неможливо записати');
                  } 
                  modal.style.display = "none";
               
         }
   }
}