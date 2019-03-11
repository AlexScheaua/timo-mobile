let obiect = {}
let container = document.querySelector("#container");
let selector = document.querySelector("#selector");

function buttonEvent(){
  let buton = document.querySelector("#ajax-req");
  buton.addEventListener("click",function(){
    let selectorValue = selector.value;
    ajax(selectorValue);
  })
}


function ajax(idx){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        obiect = JSON.parse(this.responseText);
        draw();
    }
  };
  xhttp.open("GET", `https://timospeed-dial.firebaseio.com/${idx}/.json`, true);
  xhttp.send();
}

function draw(idx){
  container.innerHTML = `<a id="phone-number" href="tel:${obiect.phoneNumber}">${obiect.phoneNumber}</a>`
}

buttonEvent();
