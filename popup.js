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



let warning = document.querySelector('.third-container__warning');
let vrt = '<span onclick="closeMessage()"><i class="fas fa-times"></i></span>';
let deleting = document.querySelector('.fourth-container__header');
let tabs = document.getElementById("tbl");
let tds = tabs.getElementsByTagName("td")[0];
let e = document.getElementById("col");
let cl = e.options[e.selectedIndex].value;


function changeTable() {
   //let e = document.getElementById("col");
   //let cl = e.options[e.selectedIndex].value;
   let r = document.getElementById("row");
   let rw = r.options[r.selectedIndex].value;
   //let tabs = document.getElementById("tbl");
   let trs = tabs.getElementsByTagName("tr")[0];
   let text = document.getElementById('tblText').value;
   let f = document.getElementById("participants");
   let fl = f.options[f.selectedIndex].value;
   //let tds = tabs.getElementsByTagName("td")[0];
   let idi = document.getElementById(`id-${fl}-${cl}-${rw}`);
   

   
  

  
      

   if (idi) {
      warning.style.display = "block";
      
      
   } else if (!idi)  {
      tds = tabs.getElementsByTagName("tr")[rw];
      tds.cells[cl].innerHTML = `<div class="block-text"><p class="text-tr">${text}</p><span onclick="closeText()"><i id="ght" class="fas fa-times"></i></span></div>`;
      tds.cells[cl].id = `id-${fl}-${cl}-${rw}`;
      tds.cells[cl].style.backgroundColor = "#d3f5b4";
      modal.style.display = "none";     
      
   }

  

}   

function closeMessage() {
   warning.style.display = "none";
}  


function closeText() {
   let modalTwo = document.getElementById("ask_modal");
   let spanTwo = document.getElementsByClassName("close_modal_window-two")[0];
   let changeButton = document.getElementById('change-button');
   
   
   modalTwo.style.display = "block";
   
   
   spanTwo.onclick = function () {
      modalTwo.style.display = "none";
   }
   
   // windowTwo.onclick = function (event) {
   //    if (event.target == modalTwo) {
   //        modalTwo.style.display = "none";
   //    }
   // }

   changeButton.onclick = function () {
      tds.cells[cl].innerHTML = " ";
      tds.cells[cl].id = '';
      tds.cells[cl].style.backgroundColor = "#fff";
      modalTwo.style.display = "none";
   }
}
   

  


   
//'<span onclick="closeMessage()"><i class="fas fa-times"></i></span>'
//document.getElementById('button__tab_8_circle').onclick = function circleResult() {
  

   // for (let i = 0, row; row = tabs.rows[i]; i++) {
   //     for (let j = 0, col; col = row.cells[j]; j++) {
         
                 
               
   //       }
   // }
 
   // function closeMessage() {
   //    warning.style.display = "none";
   // }    


