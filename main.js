
  box = document.getElementsByClassName("pixel");
document.addEventListener("DOMContentLoaded", function(event) {
  //console.log("DOM fully loaded and parsed");
  function createRowDivs() {
    for (let i = 0; i <20; i++) {
      let row = document.createElement('div')
      row.classList.add('row')

    for (let j = 0; j < 20; j++) {
      art = document.createElement('div')
      art.classList.add('pixel')
      row.appendChild(art)
    }
    document.getElementById('table').appendChild(row)
   }
  }
  createRowDivs()
  //create a variable to use for all buttons
// let COLORS = ['red', 'green', 'blue', 'yellow', 'black', 'orange']
// function createColors(){
//   for(let color of COLORS) {
//     console.log('adding', color)
//     let div = document.createElement('div')
//     div.setAttribute('data-color', color)
//     div.classList.add('pallete-color')
//     div.classList.add(color)
//     div.classList.add("coulors")
//     div.style.backgroundColor=color
//     document.getElementById("table").appendChild(div)
// }
// }
// createColors()
let color = document.getElementById("colorPicker");
//document.color.addEventListener("click", function(){

//})
for(let i=0;i<box.length;i++){
  box[i].addEventListener("click", function() {
    this.setAttribute("style", `background-color: ${color.value}`);
  })
}
  //console.log("changeColor is running!");


//console.log("changeColor is running!");

});
