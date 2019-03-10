var obiect = {}
var container = document.querySelector("#container")

function buttonEvent(){
  var buton = document.querySelector("#ajax-req");
  buton.addEventListener("click",function(){
    ajax();
  })
}


function ajax(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        obiect = JSON.parse(this.responseText);
        draw();
    }
  };
  xhttp.open("GET", "https://scoala-informala-ba5c7.firebaseio.com/.json", true);
  xhttp.send();
}

function draw(){
  container.innerHTML = `<a id="phone-number" href="tel:${obiect.phoneNumber}">${obiect.phoneNumber}</a>`
}

buttonEvent();
