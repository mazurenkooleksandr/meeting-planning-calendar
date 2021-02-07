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
   let f = document.getElementById("participants");
   let fl = f.options[f.selectedIndex].value;
   let tds = tabs.getElementsByTagName("td")[0];
   let idi = document.getElementById(`id-${fl}-${cl}-${rw}`);
   let warning = document.querySelector('.third-container__warning')

  
      

   if (idi) {
      warning.style.display = "block";
      
   } else if (!idi)  {
      tds = tabs.getElementsByTagName("tr")[rw];
      tds.cells[cl].innerHTML = text;
      tds.cells[cl].id = `id-${fl}-${cl}-${rw}`;
      tds.cells[cl].style.backgroundColor = "#d3f5b4";
      modal.style.display = "none";     
      
   }
       
   
      
  




      
   

}                    
  

   // for (let i = 0, row; row = tabs.rows[i]; i++) {
   //     for (let j = 0, col; col = row.cells[j]; j++) {
         
                 
               
   //       }
   // }

    
