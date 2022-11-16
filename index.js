const text = document.querySelector(".sec-text");

const textLoad = () => {
if(text){
    setTimeout(() => {
        text.textContent = "<HTML>";
    }, 0);
    setTimeout(() => {
        text.textContent = "<CSS>";
    }, 2000);
    setTimeout(() => {
        text.textContent = "<JavaScript>";
    }, 4000); 
    setTimeout(() => {
        text.textContent = "<React>";
    }, 6000);
}
}
textLoad();
setInterval(textLoad,10000);
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
