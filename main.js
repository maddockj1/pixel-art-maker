box = document.getElementsByClassName("pixel");
document.addEventListener("DOMContentLoaded", function(event) {
  //console.log("DOM fully loaded and parsed");

  //create a variable to use for all buttons

let color = document.getElementById("colorPicker");
//document.color.addEventListener("click", function(){

//})
for(let i=0;i<box.length;i++){
  box[i].addEventListener("click", function() {
    this.setAttribute("style", `background-color: ${color.value}`);
  })
}
  //console.log("changeColor is running!");

});
