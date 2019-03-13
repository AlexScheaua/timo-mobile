let obiect = {}
let container = document.querySelector("#container");
let selector = document.querySelector("#selector");

function buttonEvent(){
  let refreshButton = document.querySelector("#ajax-req");
  refreshButton.addEventListener("click",function(){
    let selectorValue = selector.value;
    ajax(selectorValue);
  })
}


function ajax(idx){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        obiect = JSON.parse(this.responseText);
        if(obiect === null){
          alert("Please select a workstation")
        } else {
          draw();
        }
    }
  };
  xhttp.open("GET", `https://timospeed-dial.firebaseio.com/${idx}/.json`, true);
  xhttp.send();
}

function draw(idx){
  container.innerHTML = `<a id="phone-number" href="tel:${obiect.phoneNumber}">${obiect.phoneNumber}</a>`
  let phoneNumber = document.querySelector("#phone-number");
  phoneNumber.style.color = "red";
  setTimeout(function(){
    phoneNumber.style.color = "blue";
  },2000)
  let refreshButton = document.querySelector("#ajax-req");
    refreshButton.style.backgroundColor = "#777";
  setTimeout(function(){
    refreshButton.style.backgroundColor = "#aaa";
  },300)
  
}

buttonEvent();
